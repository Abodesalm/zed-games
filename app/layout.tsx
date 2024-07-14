import type { Metadata } from "next";
import "../public/css/globals.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import ToUp from "@/components/ToUp";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Zed Games , find any game you want",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Providers>
          <Navbar/>
          {children}
          <Footer/>
          <ToUp/>
        </Providers>
        
      </body>
    </html>
  );
}

