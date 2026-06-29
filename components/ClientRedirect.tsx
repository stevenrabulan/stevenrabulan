'use client';

import { useEffect } from 'react';

export default function ClientRedirect({ target, fallbackText }: { target: string, fallbackText: string }) {
  useEffect(() => {
    window.location.href = target;
  }, [target]);

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center">
      <p className="text-white">{fallbackText}</p>
    </div>
  );
}
