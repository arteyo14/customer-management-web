import { IResponse } from "@/types/constant/http";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export function isAxiosError(value: unknown): value is AxiosError {
  return axios.isAxiosError(value);
}

export abstract class HttpService {
  protected readonly http: AxiosInstance;

  protected constructor(
    protected readonly path?: string,
    protected baseURL: string = "http://localhost:8080/api",
  ) {
    if (path) this.baseURL += path;
    this.http = axios.create({ baseURL: this.baseURL });
    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.http.defaults.headers.common.Accept = "application/json;charset=utf-8";
    this.http.defaults.headers.common["Content-Type"] =
      "application/json;charset=utf-8";
  }

  protected createQueryParams(
    params: Record<
      string,
      | string
      | number
      | boolean
      | Array<string | number | boolean>
      | null
      | undefined
    >,
  ): URLSearchParams {
    const queryParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        if (Array.isArray(value)) {
          value.forEach((v) => queryParams.append(key, String(v)));
        } else {
          queryParams.append(key, String(value));
        }
      }
    });

    return queryParams;
  }

  protected handleResponse<T>(response: AxiosResponse<T>): T {
    const result = response.data as unknown as IResponse<T>;

    return {
      status: result.status,
      code: response.status,
      data: result.data ?? result,
    } as T;
  }

  protected handleError<T>(error: unknown): IResponse<T> {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return error.response.data as IResponse<T>;
      }

      if (error.request) {
        return {
          status: false,
          code: 0,
          error: {
            message: "Can't connect to server",
          },
        } as unknown as IResponse<T>;
      }
    }

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return {
      status: false,
      code: 500,
      error: { message: errorMessage },
    } as unknown as IResponse<T>;
  }
}
