import { notFound } from 'next/navigation';
import { redirects } from '@/lib/redirects';
import ClientRedirect from '@/components/ClientRedirect';

export function generateStaticParams() {
  return Object.keys(redirects).map((slug) => ({
    slug,
  }));
}

export default function RedirectPage({ params }: { params: { slug: string } }) {
  const target = redirects[params.slug];
  
  if (!target) {
    notFound();
  }

  // Format a nice fallback text based on the slug
  const fallbackText = `Redirecting to ${params.slug.charAt(0).toUpperCase() + params.slug.slice(1)}...`;

  return (
    <>
      {/* We add a meta refresh for browsers that disable JS, though useEffect is primarily relied on */}
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <ClientRedirect target={target} fallbackText={fallbackText} />
    </>
  );
}
