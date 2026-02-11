'use client';

import { useEffect } from 'react';

export default function SoundcloudRedirect() {
  useEffect(() => {
    window.location.href = 'https://soundcloud.com/djsteeeve';
  }, []);

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center">
      <p className="text-white">Redirecting to Soundcloud...</p>
    </div>
  );
}
