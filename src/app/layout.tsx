import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://disciplix.uz"),
  title: {
    default: "Disciplix - AI Moliya va Maqsadlar Yordamchisi",
    template: "%s | Disciplix"
  },
  description: "Disciplix AI yordamida xarajatlaringizni nazorat qiling, byudjetni rejalashtiring va orzularingizga tezroq erishing. Aqlli moliya yordamchisi.",
  keywords: ["disciplix", "moliya", "byudjet nazorati", "telegram bot", "xarajatlar", "ai yordamchi", "orzular"],
  authors: [{ name: "Disciplix Team" }],
  openGraph: {
    title: "Disciplix - AI Moliya Yordamchisi",
    description: "Xarajatlaringizni nazorat qiling va orzularingizga erishing.",
    url: "https://disciplix.uz",
    siteName: "Disciplix",
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disciplix - AI Moliya Yordamchisi",
    description: "Xarajatlaringizni nazorat qiling va orzularingizga erishing.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
