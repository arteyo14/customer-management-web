"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import handleSuccess from "@/hooks/use-handle-success";
import { loginSchema, LoginSchema, useLoginStore } from "../store";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FormTextInput from "@/components/ui/custom/form/form-input-text";
import FormPasswordInput from "@/components/ui/custom/form/form-input-password";

export const LoginForm = () => {
  const router = useRouter();
  const { loading, submit } = useLoginStore();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (data: LoginSchema) => {
    const res = await submit(data);
    if (res.status) {
      handleSuccess(
        res.code,
        {
          showAlert: true,
          fn: () => {
            router.push("/customer");
          },
        },
        true,
      );
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-2 my-4"
      >
        <FormTextInput
          formMethods={form}
          name="email"
          label="Email"
          placeholder="example@example.com"
          required
        />
        <FormPasswordInput
          formMethods={form}
          name="password"
          label="Password"
          placeholder="••••••••"
          required
        />
        <div className="flex justify-end w-full">
          <Link href="#" className="text-primary text-sm hover:underline">
            Forgot Password?
          </Link>
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="w-full h-10 mt-6 rounded-full"
        >
          Sign In
        </Button>
      </form>
    </Form>
  );
};
