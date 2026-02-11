'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-white text-xl font-bold hover:text-primary transition-colors">
          Steven Rabulan
        </Link>
        <a
          href="mailto:steven.rabulan@gmail.com"
          className="bg-primary hover:bg-primary-hover text-white font-bold px-6 py-3 rounded-lg transition-colors uppercase tracking-wide text-sm font-heading"
        >
          Shoot Me a Message
        </a>
      </div>
    </header>
  );
}
