"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import bannerUnauthorize from "../../../public/unauthorize.svg";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";

const UnauthorizePage = () => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[calc(100svh-165px)]
 px-4 text-center space-y-6"
    >
      <Image
        src={bannerUnauthorize}
        alt="Belum Login"
        width={300}
        height={300}
        className="mx-auto"
      />

      <Alert variant="destructive" className="max-w-md">
        <AlertTriangle className="h-5 w-5" />
        <AlertTitle>Belum Login</AlertTitle>
        <AlertDescription>
          Kamu harus login terlebih dahulu untuk melihat halaman profilmu.
        </AlertDescription>
      </Alert>

      <Button onClick={() => router.push("/login")} size={"lg"}>
        Sign In Now
      </Button>
    </div>
  );
};

export default UnauthorizePage;
