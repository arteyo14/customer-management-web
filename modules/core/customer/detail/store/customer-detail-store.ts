import { create } from "zustand";

import handleError from "@/hooks/use-handle-error";
import { ICustomerDetailResponse, CustomerService } from "../infrastructure";

interface IState {
  loading: boolean;
  data: ICustomerDetailResponse;
  getData: (id: number) => Promise<void>;
}

export const useCustomerDetailStore = create<IState>((set) => ({
  loading: false,
  data: null!,
  getData: async (id: number) => {
    set({ loading: true });
    const service = new CustomerService();
    const res = await service.getCustomerDetail(id);

    if (!res.status) {
      handleError(res.code, res.error, {
        showAlert: true,
        fn: () => {
          window.location.href = "/customer";
        },
      });
    }

    set({ data: res.data, loading: false });
  },
}));
