import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "@/styles/globals.css";

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "Customer Mini App",
  description: "Customer Mini App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} h-full antialiased`}
    >
      <body className={`${raleway.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
