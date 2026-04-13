import { create } from "zustand";


type IActionStore = {
    actions: any
}

const useActionStore = create<IActionStore>((set) => ({
    actions: null,
    setAction: (action: any) => set({ actions: action })
}))

export default useActionStore;