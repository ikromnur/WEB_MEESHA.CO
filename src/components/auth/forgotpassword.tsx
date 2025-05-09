"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import banner from "../../../public/benner.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleSendOtp = () => {
    console.log("Mengirim OTP ke email:", email);
    // Di dunia nyata, kirim permintaan ke backend untuk mengirim OTP ke email
  };

  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-screen bg-red-50">
      {/* Form Lupa Password */}
      <div className="flex flex-col items-center justify-center max-w-md w-full px-6 md:px-12 mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 w-full">
          Lupa Password
        </h2>
        <p className="text-sm text-gray-500 w-full mt-1">
          Masukkan email Anda untuk mendapatkan Link.
        </p>

        {/* Input Email */}
        <div className="w-full mt-6">
          <Label htmlFor="email" className="mb-2 block text-gray-600">
            Email
          </Label>
          <div className="relative">
            <Input
              id="email"
              className="h-11 w-full pr-24"
              type="email"
              placeholder="Masukkan Email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              onClick={handleSendOtp}
              disabled={!isEmailValid(email)}
              size="sm"
              className="absolute right-2 top-1/2 -translate-y-1/2"
              style={{ backgroundColor: "#EC9696" }}
            >
              Kirim Link
            </Button>
          </div>
        </div>
      </div> 

      {/* Banner */}
      <section className="relative hidden md:block">
        <Image
          src={banner}
          className="w-full h-screen object-cover"
          width={2000}
          height={2000}
          priority
          alt="banner"
        />
      </section>
    </div>
  );
};

export default ForgotPassword;
