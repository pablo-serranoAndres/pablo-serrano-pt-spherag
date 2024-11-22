import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin panel - Spherag",
  description: "The panel where you can see the data of your hardware",
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
