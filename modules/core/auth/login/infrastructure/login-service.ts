import { HttpService } from "@/modules/shared/http/http-service";
import { ILoginRequest } from "./login-request";
import { IResponse } from "@/types/constant/http";


export class LoginService extends HttpService {
    constructor() {
        super('/')
    }

    public async login(request: ILoginRequest): Promise<IResponse<{}>> {
        return this.http
            .post('/auth/login', request)
            .then(this.handleResponse.bind(this))
            .catch(this.handleError.bind(this))
    }
}