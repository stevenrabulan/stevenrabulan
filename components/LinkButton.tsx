import { LucideIcon } from 'lucide-react';

interface LinkButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  variant?: 'primary' | 'secondary';
}

export default function LinkButton({ href, icon: Icon, label, variant = 'primary' }: LinkButtonProps) {
  const baseStyles = 'flex items-center justify-center gap-3 w-full max-w-md mx-auto py-4 px-6 rounded-lg font-bold uppercase tracking-wide transition-all hover:scale-[1.02] hover:shadow-lg font-heading';

  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-hover text-white',
    secondary: 'bg-dark-lighter hover:bg-dark text-white',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </a>
  );
}
