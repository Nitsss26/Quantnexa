import type { Metadata } from "next";
import "./globals.css";
import TechLayout from "@/components/tech/TechLayout";

export const metadata: Metadata = {
  title: "QuantNexa — Next-Gen Tech Solutions",
  description: "We build next-generation digital products and AI-powered platforms that turn ideas into real-world impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth h-full antialiased">
      <body className="min-h-full flex flex-col">
        <TechLayout>{children}</TechLayout>
      </body>
    </html>
  );
}
