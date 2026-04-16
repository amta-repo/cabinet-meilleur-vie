import { Link } from "react-router-dom";
import { MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import logoImg from "@/assets/logo-cabinet.jpg";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImg} alt="Cabinet Meilleure Vie" className="h-12 w-auto object-contain brightness-0 invert" />
          </Link>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            Votre cabinet qui vous garantit la santé mentale au quotidien.
          </p>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/Meilleurvie" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/Meilleurvie1" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://x.com/cabinetvie" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li><Link to="/services#psychometriques" className="hover:text-accent transition-colors">Services Psychométriques</Link></li>
            <li><Link to="/services#formations-pluridisciplinaires" className="hover:text-accent transition-colors">Formations Pluridisciplinaires</Link></li>
            <li><Link to="/services#formations-psychologiques" className="hover:text-accent transition-colors">Formations Psychologiques</Link></li>
            <li><Link to="/services#services-psychologiques" className="hover:text-accent transition-colors">Services Psychologiques</Link></li>
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
              { label: "Blog", href: "/blog" },
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
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-accent" />
              <span>Atrokpocodji, 4ème rue après le séminaire Jean-Eude, première rue à droite et deuxième maison, Cotonou, Bénin</span>
            </li>
            <li>
              <a href="tel:+22901676180021" className="hover:text-accent transition-colors">+229 01 67 618 021</a>
            </li>
            <li>
              <a href="tel:+2290194390295" className="hover:text-accent transition-colors">+229 01 94 39 02 95</a>
            </li>
            <li>
              <a href="https://wa.me/22901676180021" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp: +229 01 67 618 021</a>
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
