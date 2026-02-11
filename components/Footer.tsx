import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';

const navLinks = [
  { text: 'Contact Me', href: 'mailto:steven.rabulan@gmail.com' },
  { text: 'Terms of Use', href: '/terms' },
  { text: 'Privacy Policy', href: '/privacy' },
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/stevenrabulan', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/in/stevenrabulan', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-dark py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Link href="/" className="text-2xl font-bold text-gray-400 hover:text-white transition-colors">
          Steven Rabulan
        </Link>

        <nav className="mt-6 flex flex-wrap justify-center gap-6 md:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className="text-gray-400 hover:text-white uppercase text-sm tracking-wider transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex justify-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
