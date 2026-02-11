'use client';

import { useEffect } from 'react';

export default function LinkedInRedirect() {
  useEffect(() => {
    window.location.href = 'https://linkedin.com/in/stevenrabulan';
  }, []);

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center">
      <p className="text-white">Redirecting to LinkedIn...</p>
    </div>
  );
}
