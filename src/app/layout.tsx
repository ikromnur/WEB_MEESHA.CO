import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "./globals.css";
import Providers from '@/providers';

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

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
        className={`${interSans.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}