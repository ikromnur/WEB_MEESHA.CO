import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meesha.co | Florist Kebumen ",
  description: "Bouquet dan Florist Kebumen",
  icons: {
    icon: "#",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${poppins.variable} antialiased font-poppins`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
