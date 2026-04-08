import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Témoignages" },
  { href: "/pourquoi-nous", label: "Pourquoi nous" },
  { href: "/a-propos", label: "À propos" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 sm:h-20">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <Leaf className="h-6 w-6 text-accent-foreground" />
          </div>
          <div className="leading-tight">
            <span className="block text-sm font-bold tracking-wide text-primary">CABINET MEILLEURE VIE</span>
            <span className="block text-[10px] font-medium tracking-widest text-muted-foreground uppercase">Psychologie & Éducation</span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                to={l.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === l.href ? "text-accent" : "text-foreground/80 hover:text-accent"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
        >
          Prendre rendez-vous
        </Link>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <ul className="flex flex-col p-4 gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    location.pathname === l.href ? "bg-accent/10 text-accent" : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground"
              >
                Prendre rendez-vous
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
