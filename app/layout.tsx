import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Who is nennneko5787",
  description: "Hmm... Why don't you know me?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
