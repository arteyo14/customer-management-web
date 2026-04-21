"use client";

import { redirect } from "next/navigation";
import { useAuthStore } from "../../store/auth-store";
import { LoginCard } from "./login-card";
import { useEffect } from "react";

export const LoginView = () => {

  const { isAuthenticated } = useAuthStore()

  useEffect(() => {
    if (isAuthenticated) {
      redirect("/customer")
    }
  }, [isAuthenticated])

  return (
    <div className="bg-bg-main min-h-screen flex flex-col justify-center items-center">
      <LoginCard />
    </div>
  );
};
