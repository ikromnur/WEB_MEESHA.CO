"use client";

import React from "react";
import { TanstackProvider } from "./tanstack-provider";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TanstackProvider>
      <SessionProvider>
        <Toaster />
        {children}
      </SessionProvider>
    </TanstackProvider>
  );
};

export default Providers;
