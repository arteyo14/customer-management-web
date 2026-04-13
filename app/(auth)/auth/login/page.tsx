import { LoginView } from "@/modules/core/auth/login/ui/login-view"
import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'Customer Mini App | Login',
    description: 'Customer Mini App | Login'
}

export default function LoginPage() {
    return <LoginView />
}