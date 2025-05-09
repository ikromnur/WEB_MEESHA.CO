"use client";

import React from "react";
import Image from "next/image";
import banner from "../../../public/benner.png";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UsePostLogin } from "@/features/auth/api/use-post-login";
import { LoginFormSchema, loginFormSchema } from "@/features/auth/form/login";
import LoginForm from "@/features/auth/components/login-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending: loginLoading } = UsePostLogin({
    onSuccess: (data) => {
      alert("Login berhasil!");

      if (data.user.role === "ADMIN") {
        router.push("/admin/dashboard"); // Jika admin, arahkan ke /admin/dashboard
      } else {
        router.push("/"); // Jika user, arahkan ke /dashboard
      }

      form.reset({
        email: "",
        password: "",
      });
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  const handleLogin = (data: LoginFormSchema) => {
    mutate(data);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-screen bg-red-50">
      {/* Form */}
      <section className="flex items-center justify-center flex-col max-w-xl h-screen md:h-auto w-full px-4 place-self-center ">
        <div className="max-w-sm w-full md:max-w-72 lg:max-w-96">
          <h1 className="text-2xl font-bold w-full">Masuk</h1>

          {/* Bungkus LoginForm dengan FormProvider */}
          <FormProvider {...form}>
            <LoginForm onLogin={handleLogin} loginLoading={loginLoading} />
          </FormProvider>
        </div>
        <p className="text-center text-sm">
          Belum punya akun?{" "}
          <Link href="/register" className="font-bold">
            Buat Akun
          </Link>
        </p>
      </section>

      {/* Banner */}
      <section className="order-1 md:order-2 relative hidden md:block">
        <Image
          src={banner}
          className="w-full h-screen object-cover"
          width={1000}
          height={1000}
          priority
          alt="banner"
        />
      </section>
    </div>
  );
};

export default LoginPage;
