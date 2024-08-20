import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Log In`,
  description: ``,
  keywords: ["requirements", "games", "steam", "download", "reviews"],
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
