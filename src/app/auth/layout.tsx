import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Spherag",
  description:
    "The page where users can login and access the information of their hardware",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
