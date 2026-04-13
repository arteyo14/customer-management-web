"use client";

import Image from "next/image";
import { LoginForm } from "./login-form";
import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/components/icons/google-icon";

export const LoginCard = () => {
  return (
    <div className=" max-w-[480px] h-[731px] bg-white rounded-xl p-10 my-4">
      <div className="flex justify-center">
        <Image
          src="https://storage.googleapis.com/exo24_public/EXO_logo_green.png"
          alt="Logo"
          width={160}
          height={100}
        />
      </div>
      <div className="flex justify-center mt-10">
        <h1 className="text-xl font-bold">Customer Management System</h1>
      </div>
      <LoginForm />
      <div className="border-t border-gray-100 md:my-10 relative md:mx-0 mx-10">
        <div className="flex justify-center absolute -top-4.5 left-1/2 -translate-x-1/2 w-full">
          <p className="text-black text-sm  bg-white p-2 px-4">
            OR CONTINUE WITH
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button className="w-full h-10 bg-bg-main border-gray-200 rounded-full text-black flex items-center">
          <GoogleIcon />
          Sign In with Google
        </Button>
      </div>
    </div>
  );
};
