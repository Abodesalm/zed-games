import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Admin Panel`,
  description: ``,
  keywords: ["requirements", "games", "steam", "download", "reviews"],
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
