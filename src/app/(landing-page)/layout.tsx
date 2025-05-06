"use client";

import DefaultFooter from "@/components/container/footer";
import DefaultHeader from "@/components/container/header";
import React from "react";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DefaultHeader />
      <main className="pt-[84.84px] pb-20 min-h-[70svh]">{children}</main>
      <DefaultFooter />
    </>
  );
};

export default LandingPageLayout;
