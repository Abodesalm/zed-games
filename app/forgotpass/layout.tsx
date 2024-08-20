import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Forgot Your Password ?`,
  description: ``,
  keywords: ["requirements", "games", "steam", "download", "reviews"],
};

export default function ForgotLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
