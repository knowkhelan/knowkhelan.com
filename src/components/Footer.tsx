import { Linkedin, Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display font-medium text-foreground">Khelan Modi</span>

          <div className="flex items-center gap-3">
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/in/khelan-modi', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com/knowkhelan', label: 'GitHub' },
              { icon: Twitter, href: 'https://x.com/knowkhelan', label: 'X' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
