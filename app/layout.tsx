import type { Metadata } from "next";
import { Fustat, Geist, Geist_Mono, Onest } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const fustat = Fustat({
  variable: "--font-fustat",
  subsets: ["latin"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${fustat.variable} ${onest.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
