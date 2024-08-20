import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Reset Your Password !`,
  description: ``,
  keywords: ["requirements", "games", "steam", "download", "reviews"],
};

export default function ResetLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
