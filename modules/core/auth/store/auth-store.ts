import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IState {
  isAuthenticated: boolean;
  user: { name: string; role: string } | null;
  setLoginCookie: () => void;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<IState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      setLoginCookie: () => {
        document.cookie =
          "is_logged_in=true; path=/; max-age=86400; SameSite=Lax";
      },
      login: () => {
        document.cookie =
          "is_logged_in=true; path=/; max-age=86400; SameSite=Lax";
        set({
          isAuthenticated: true,
          user: { name: "Admin", role: "Super Admin" },
        });
      },
      logout: () => {
        document.cookie =
          "is_logged_in=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        set({ isAuthenticated: false, user: null });
      },
    }),
    { name: "auth-storage" },
  ),
);
