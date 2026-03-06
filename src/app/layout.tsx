import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import Protected from "@/components/protected";

export const metadata: Metadata = {
  title: "A2Z Dialer",
  description: "AI outbound calling SaaS for lead generation and appointment booking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Protected>{children}</Protected>
        </Providers>
      </body>
    </html>
  );
}
