import type { Metadata } from "next";

import { Poppins } from 'next/font/google';
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ['latin'],
  variable: "--font-poppins",
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "EventGuru",
  description: "EventGuru is a platform for eventmanagement",
  icons: {
    icon: '/assets/images/EGlogo.jpeg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${poppins.variable} ${poppins.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
