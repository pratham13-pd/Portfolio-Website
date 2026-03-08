import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-text-muted text-sm">
          © {new Date().getFullYear()} Prathamesh. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/pratham13-pd" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/prathamesh131" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
