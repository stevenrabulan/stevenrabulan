import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Steven Rabulan - Frontend Engineer',
  description: 'I help you get more customers on the internet. Growth Engineer with 12 years of experience in experimentation, funnel optimization, and turning business goals into scalable solutions.',
  keywords: ['frontend engineer', 'growth engineer', 'web developer', 'React', 'Next.js'],
  authors: [{ name: 'Steven Rabulan' }],
  openGraph: {
    title: 'Steven Rabulan - Frontend Engineer',
    description: 'I help you get more customers on the internet.',
    url: 'https://stevenrabulan.com',
    siteName: 'Steven Rabulan',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
