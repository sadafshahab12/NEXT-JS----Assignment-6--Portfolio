import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components//Footer";

const poppin = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sadaf Shahab | Portfolio",
  description: "Passionate Next.js and React.js Frontend Developer crafting high-performance, user-friendly web applications. Explore my portfolio to see modern, responsive, and scalable web solutions!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/next js react js/favicon.png" type="image/png" />
      </head>
      <body className={`${poppin.className} `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
