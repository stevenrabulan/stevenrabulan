import Link from 'next/link';

const services = [
  {
    title: 'Build and optimize products that grow',
    description:
      "I'm a Growth Engineer with 12 years of experience in experimentation, funnel optimization, and turning business goals into scalable solutions. Currently on sabbatical and open to remote roles at product-driven companies.",
  },
  {
    title: 'DJ &amp; produce remixes',
    description: 'I curate the best hip-hop and R&amp;B remixes on the internet and upload DJ sets to',
    links: [
      { text: 'Soundcloud', href: 'https://soundcloud.com/djsteeeve' },
      { text: 'YouTube', href: 'https://youtube.com/@djsteeeve' },
    ],
  },
  {
    title: 'Help businesses grow online',
    description:
      'I improve your ROI by making your website easier to buy from.',
    extra:
      'I also help small business owners with their technology so they can focus on the part they enjoy most.',
  },
];

export default function WhatIDo() {
  return (
    <section className="bg-light py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Here&#39;s what I do
        </h2>
        <div className="w-12 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="space-y-10">
          {services.map((service, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
                {service.links && (
                  <>
                    {' '}
                    <Link
                      href={service.links[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-hover font-medium transition-colors"
                    >
                      {service.links[0].text}
                    </Link>
                    {' and '}
                    <Link
                      href={service.links[1].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-hover font-medium transition-colors"
                    >
                      {service.links[1].text}
                    </Link>
                    .
                  </>
                )}
              </p>
              {service.extra && (
                <p className="text-gray-600 leading-relaxed mt-4">
                  {service.extra}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
