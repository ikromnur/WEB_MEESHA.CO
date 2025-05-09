"use client";

import React from "react";
import { TanstackProvider } from "./tanstack-provider";
import { Toaster } from "@/components/ui/toaster";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TanstackProvider>
      <Toaster />
      {children}
    </TanstackProvider>
  );
};

export default Providers;
