import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Byggebistand Troms",
  description: "Uavhengig byggekontroll, taksering og teknisk rådgivning i Troms-regionen siden 2006.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" suppressHydrationWarning className={dmSans.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />

        </ThemeProvider>
      </body>
    </html>
  );
}
