"use client";

import React from "react";
import { TanstackProvider } from "./tanstack-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TanstackProvider>
      {children}
    </TanstackProvider>
  );
};

export default Providers;
