import { create } from "zustand";
import { ILoginRequest } from "../infrastructure/login-request";
import { LoginService } from "../infrastructure/login-service";


interface IState {
    loading: boolean
    submit: (request: ILoginRequest) => Promise<void>
}

export const useLoginStore = create<IState>()((set) => ({
    loading: false,
    submit: async (request: ILoginRequest) => {
        set({ loading: true })

        const service = new LoginService();
        const res = await service.login(request)


    }
}))