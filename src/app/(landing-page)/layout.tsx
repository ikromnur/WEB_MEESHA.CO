"use client";

import DefaultHeader from "@/components/container/header";
import React from "react";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DefaultHeader />
      <main className="pt-[84.84px]">{children}</main>
    </>
  );
};

export default LandingPageLayout;
