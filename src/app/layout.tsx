import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Disciplix - Orzular Sari Yo'l",
  description: "Disciplix AI yordamida xarajatlaringizni nazorat qiladi va maqsadlaringizga erishishga yordam beradi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={`${inter.variable} dark antialiased`}>
      <body className="min-h-screen bg-background text-foreground flex flex-col">{children}</body>
    </html>
  );
}
