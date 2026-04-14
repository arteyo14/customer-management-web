import { create } from "zustand";
import {
  CustomerListService,
  getCustomerListRequest,
  ICustomerListResponse,
} from "../infrastructure";
import { IPagination } from "@/types/pagination";
import handleError from "@/hooks/handle-error";

export interface IState {
  loading: boolean;
  params: getCustomerListRequest;
  data: IPagination<ICustomerListResponse[]>;
  getData: () => Promise<void>;
  setParams: (newParams: Partial<IState["params"]>) => void;
}

export const useCustomerListStore = create<IState>((set, get) => ({
  loading: true,
  params: {
    page: 1,
    limit: 10,
    search: "",
    sort: "asc",
    sort_by: "id",
  },
  data: {
    items: [],
    page: 1,
    limit: 10,
    total: 0,
    total_pages: 0,
  },
  getData: async () => {
    const params = get().params;

    const service = new CustomerListService();
    const res = await service.getCustomerList(params);

    if (res.status) {
      set({ data: res.data, loading: false });
    } else {
      handleError(res.code, res.error, {
        showAlert: true,
        fn: () => {
          window.location.href = "/customer";
        },
      });
    }

    set({ loading: false });
  },
  setParams: (newParams) => {
    set((state) => ({
      params: {
        ...state.params,
        ...newParams,
        page: newParams.page ?? state.params.page,
      },
    }));
    get().getData();
  },
}));
