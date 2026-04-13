import { HttpService } from "@/modules/shared/http/http-service";
import { IResponse } from "@/types/constant/http";
import { ICustomerDetailResponse } from "./customer-response";

export class CustomerService extends HttpService {
  constructor() {
    super("/");
  }

  public async getCustomerDetail(
    id: number,
  ): Promise<IResponse<ICustomerDetailResponse>> {
    return this.http
      .get(`/customer/${id}`)
      .then(this.handleResponse.bind(this))
      .catch(this.handleError.bind(this));
  }
}
