import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#values' },
  { label: 'Services', href: '#values' },
  { label: 'Contact', href: '#quotation' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToQuote = () => {
    document.getElementById('quotation')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-white">
            Japan<span className="text-amber-400">Imports</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-amber-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={scrollToQuote}
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-6 py-2.5 rounded-lg transition-all duration-300"
            >
              Get Quote
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-slate-900/98 backdrop-blur-md overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <nav className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-amber-400 transition-colors font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={scrollToQuote}
            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300 mt-4"
          >
            Get Quote
          </button>
        </nav>
      </div>
    </header>
  );
}
