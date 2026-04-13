import { IResponse } from "@/types/constant/http";
import { HttpService } from "@/modules/shared/http/http-service";

import { ILoginRequest } from "./login-request";

export class LoginService extends HttpService {
  constructor() {
    super("/");
  }

  public async login(request: ILoginRequest): Promise<IResponse<object>> {
    return this.http
      .post("/login", request)
      .then(this.handleResponse.bind(this))
      .catch(this.handleError.bind(this));
  }
}
