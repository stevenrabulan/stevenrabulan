'use client';

import { useEffect } from 'react';

export default function YouTubeRedirect() {
  useEffect(() => {
    window.location.href = 'https://youtube.com/@djsteeeve';
  }, []);

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center">
      <p className="text-white">Redirecting to YouTube...</p>
    </div>
  );
}
