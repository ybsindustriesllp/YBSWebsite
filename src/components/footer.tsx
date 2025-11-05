import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Linkedin } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/partnerships', label: 'Partnerships' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/5 text-secondary-foreground/80 border-t border-white/5">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-sm max-w-xs text-muted-foreground/80">
              Intelligent Engineering for Real-World Challenges. Building scalable, sustainable, and secure solutions and products across technology, agriculture, energy, defense, and automation.
            </p>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider text-primary">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground/80 transition-opacity hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider text-primary">Contact Info</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground/80">
              <li><a href="mailto:ybsindustriesllp@gmail.com" className="transition-opacity hover:opacity-100">ybsindustriesllp@gmail.com</a></li>
              <li>Telangana, India</li>
            </ul>
            <h3 className="font-semibold tracking-wider text-primary mt-8">Follow Us</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground/80">
              <li>
                <a href="https://www.linkedin.com/company/ybs-industries/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-opacity hover:opacity-100">
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-white/5 pt-8 text-center text-sm text-muted-foreground/80">
          <p className="mb-2 italic">Building trust, one collaboration at a time.</p>
          <p>&copy; {new Date().getFullYear()} YBS Industries LLP — Innovating with Precision.</p>
        </div>
      </div>
    </footer>
  );
}
