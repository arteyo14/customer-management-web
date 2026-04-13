'use client'

import { LoginCard } from "./login-card"

export const LoginView = () => {
    return (
        <div className="bg-bg-main min-h-screen flex flex-col justify-center items-center">
            <LoginCard />
            <ul className="">
                <li className="flex justify-between w-[480px] mt-10 text-primary font-semibold">
                    <span>SYSTEMS OPERATIONAL</span>
                    <span>V1.0.0</span>
                </li>
            </ul>
        </div>
    )
}