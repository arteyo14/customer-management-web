export interface IResponse<T> {
    status: boolean
    data: T
    code: number,
    error?: IError
}

export interface IError {
    message?: string,
    field?: {
        [key: string]: string;
    }
}