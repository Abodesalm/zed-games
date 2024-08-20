import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Sign Up`,
  description: ``,
  keywords: ["requirements", "games", "steam", "download", "reviews"],
};

export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
