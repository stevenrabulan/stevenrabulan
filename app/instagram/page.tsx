'use client';

import { useEffect } from 'react';

export default function InstagramRedirect() {
  useEffect(() => {
    window.location.href = 'https://instagram.com/djsteeeve';
  }, []);

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center">
      <p className="text-white">Redirecting to Instagram...</p>
    </div>
  );
}
