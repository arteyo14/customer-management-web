import { create } from "zustand";

import handleError from "@/hooks/handle-error";
import { ICustomerDetailResponse, CustomerService } from "../infrastructure";

interface IState {
  loading: boolean;
  data: ICustomerDetailResponse;
  getData: (id: number) => Promise<void>;
}

export const useCustomerDetailStore = create<IState>((set) => ({
  loading: true,
  data: null!,
  getData: async (id: number) => {
    const service = new CustomerService();
    const res = await service.getCustomerDetail(id);

    if (!res.status) {
      handleError(res.code, res.error, {
        showAlert: true,
        fn: () => {
          window.location.href = "/not-found";
        },
      });
      return;
    }

    set({ data: res.data, loading: false });
  },
}));
