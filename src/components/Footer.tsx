import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <Leaf className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-bold">CABINET MEILLEURE VIE</span>
              <span className="block text-[10px] tracking-widest text-primary-foreground/60 uppercase">Psychologie & Éducation</span>
            </div>
          </Link>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            Pour une vie meilleure – Consultation, Formation et Expertise en Psychologie & Sciences de l'Éducation à Cotonou.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li><Link to="/services" className="hover:text-accent transition-colors">Consultations psychologiques</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Bilans psychologiques</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Orientation scolaire</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Formations professionnelles</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Expertise-recherche</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            {[
              { label: "Accueil", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Témoignages", href: "/realisations" },
              { label: "À propos", href: "/a-propos" },
              { label: "FAQ", href: "/faq" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.href} className="hover:text-accent transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li>Cotonou, Bénin</li>
            <li>
              <a href="tel:+2290194390295" className="hover:text-accent transition-colors">+229 01 94 39 02 95</a>
            </li>
            <li>
              <a href="https://wa.me/2290194390295" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp: +229 94 39 02 95</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Cabinet Meilleure Vie. Tous droits réservés. — Psychologie & Éducation, Cotonou, Bénin
      </div>
    </div>
  </footer>
);

export default Footer;
