import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aegis AI",
  description: "AI Disaster Response Platform",
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