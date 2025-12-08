import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CET 2026 - Child Evangelism Training | Timothy Institute",
  description: "A Transformational Training Program for Young Christian Leaders. Join the Child Evangelism Training (CET) from January 30 - February 1, 2026 at Faith Home, Chengannur.",
  keywords: ["CET", "Child Evangelism Training", "Timothy Institute", "Christian Training", "Youth Ministry", "Children Ministry"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
