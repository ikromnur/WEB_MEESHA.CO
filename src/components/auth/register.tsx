"use client";

import React from "react";
import Image from "next/image";
import banner from "../../../public/benner.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { UsePostRegister } from "@/features/auth/api/use-post-register";
import {
  RegisterFormSchema,
  registerFormSchema,
} from "@/features/auth/form/register";
import RegisterForm from "@/features/auth/components/register-form";
import Link from "next/link";

const RegisterPage = () => {
  // Form Handling
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  // Handle Register
  const handleRegister = (data: RegisterFormSchema) => {
    mutate(data);
  };

  const { mutate, isPending: registerLoading } = UsePostRegister({
    onSuccess: () => {
      alert("Registrasi berhasil!");
      form.reset({
        name: "",
        email: "",
        phone: "",
        password: "",
      });
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-screen bg-red-50">
      {/* Form */}
      <section className="flex items-center justify-center flex-col max-w-xl h-screen md:h-auto w-full  px-4 place-self-center">
        <div className="max-w-sm w-full md:max-w-72 lg:max-w-96">
          <h1 className="text-2xl font-bold w-full">Daftar Sekarang!</h1>
          <p className="mb-5">Lanjutkan dengan menggunakan</p>
        </div>

        <Form {...form}>
          <RegisterForm
            onRegister={handleRegister}
            registerLoading={registerLoading}
          />
        </Form>
        <p className="text-center text-sm">
          Sudah punya akun?{" "}
          <Link href="/login" className="font-bold">
            Masuk
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

export default RegisterPage;
