import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "Georgi Ivanov | Low-Code Developer",
  description: "My first portfolio. Trying to give some information about myself and the technologies I work with.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        
        <Analytics/>
        
        </body>
    </html>
  );
}
