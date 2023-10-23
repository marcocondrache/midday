import "@/styles/globals.css";
import "@midday/ui/globals.css";
import { cn } from "@midday/ui/utils";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import type { ReactElement } from "react";

const fontSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Midday | The financial OS for your business",
  description:
    "Automate financial tasks, stay organized, and make informed decisions effortlessly.",
};

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <html lang="en" className="dark whitespace-pre-line">
      <body className={cn(fontSans.variable, "bg-background")}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}