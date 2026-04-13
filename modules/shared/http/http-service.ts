import { IError, IResponse } from "@/types/constant/http";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export function isAxiosError(value: any): value is AxiosError {
    return typeof value?.response === 'object'
}

export abstract class HttpService {
    protected readonly http: AxiosInstance;
    private static isRefreshing = false;
    private static failedQueue: any[] = [];

    protected constructor(
        protected readonly path?: string,
        protected baseURL: string = 'http://localhost:8080/api'
    ) {
        if (path) this.baseURL += path;
        this.http = axios.create({ baseURL: this.baseURL })
        this.setupInterceptors();
    }

    private setupInterceptors() {
        this.http.defaults.headers.common.Accept = 'application/json;charset=utf-8';
        this.http.defaults.headers.common["Content-Type"] = 'application/json;charset=utf-8'
    }

    protected createQueryParams(params: Record<string, any>): URLSearchParams {
        const queryParams = new URLSearchParams();

        Object.entries(params).forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
                if (Array.isArray(value)) {
                    value.forEach(v => queryParams.append(key, String(v)))
                } else {
                    queryParams.append(key, String(value))
                }
            }
        })

        return queryParams;
    }

    protected handleResponse<T>(response: AxiosResponse<T>): T {
        const result = response.data as unknown as IResponse<T>

        return {
            status: result.status,
            code: response.status,
            data: result.data ?? result,
        } as T
    }

    protected handleError<T>(error: unknown): never {
        if (isAxiosError(error)) {
            if (error.response) {
                const result = error.response.data as IResponse<T>;
                throw new ApiError(
                    (result.error as IError).message || 'Server Error',
                    error.response.status,
                    result,
                );
            }
            if (error.request) {
                throw new ApiError('No response from server', 0, error.request);
            }
        }

        if (error instanceof Error) {
            throw error;
        }

        throw new Error('Unknown error occurred');

    }

}

export class ApiError extends Error {
    status: number;
    payload?: unknown;

    constructor(message: string, status: number, payload?: unknown) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.payload = payload;
    }
}
