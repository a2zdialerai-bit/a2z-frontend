import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A2Z Dialer",
  description: "AI-powered outbound calling for real estate professionals.",
  icons: {
    icon: "/a2z-logo.png",
    shortcut: "/a2z-logo.png",
    apple: "/a2z-logo.png",
  },
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