import { create } from "zustand";

import { IResponse } from "@/types/constant/http";
import handleError from "@/hooks/handle-error";

import { ILoginRequest, LoginService } from "../infrastructure";

interface IState {
  loading: boolean;
  submit: (request: ILoginRequest) => Promise<IResponse<object>>;
}

export const useLoginStore = create<IState>()((set) => ({
  loading: false,
  submit: async (request: ILoginRequest) => {
    set({ loading: true });

    const service = new LoginService();
    const res = await service.login(request);

    if (!res.status) {
      handleError(res.code, res.error, { showAlert: true });
    }

    set({ loading: false });

    return res;
  },
}));
