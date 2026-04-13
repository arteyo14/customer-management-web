import { HttpService } from "@/modules/shared/http/http-service";
import { IResponse } from "@/types/constant/http";
import { ICustomerListResponse } from "./customer-list-response";
import { IPagination } from "@/types/pagination";
import { getCustomerListRequest } from "./customer-list-request";

export class CustomerListService extends HttpService {
  constructor() {
    super("/");
  }

  public async getCustomerList(
    request: getCustomerListRequest,
  ): Promise<IResponse<IPagination<ICustomerListResponse[]>>> {
    const query = this.createQueryParams(request);
    return this.http
      .get(`/customer${query.size > 0 ? `?${query}` : ""}`)
      .then(this.handleResponse.bind(this))
      .catch(this.handleError.bind(this));
  }
}
