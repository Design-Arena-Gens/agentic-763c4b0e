import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UGC CAD Reel Script Builder",
  description: "Generate a UGC reel ad script for a CAD training institute with hook and tone controls.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
