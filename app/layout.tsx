import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steven Rabulan - Growth Product Builder",
  description: "I turn website traffic into customers. Growth Product Builder with 12 years of experience in experimentation, funnel optimization, and turning business goals into scalable solutions.",
  keywords: ["growth product builder", "growth product manager", "growth software engineer"],
  authors: [{ name: "Steven Rabulan" }],
  openGraph: {
    title: "Steven Rabulan - Growth Product Builder",
    description: "I turn website traffic into customers.",
    url: "https://stevenrabulan.com",
    siteName: "Steven Rabulan",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
