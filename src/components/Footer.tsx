import { Link } from "react-router-dom";
import { MapPin, Facebook, Instagram, Twitter, PhoneCall, Mail, MessageCircle, } from "lucide-react";
import logoImg from "@/assets/logo-cabinet.jpg";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImg} alt="Cabinet Meilleure Vie" className="h-12 w-auto object-contain mix-blend-multiply" />
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

{/* Services */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li><Link to="/services#services-psychologiques" className="hover:text-accent transition-colors">Psychologiques</Link></li>
            <li><Link to="/services#services-pédopsychiatriques" className="hover:text-accent transition-colors">Pédopsychiatriques</Link></li>
            <li><Link to="/services#services-psychiatriques" className="hover:text-accent transition-colors">Psychiatriques</Link></li>
            <li><Link to="/services#evaluation" className="hover:text-accent transition-colors">Évaluation </Link></li>
            <li><Link to="/services#formations-psychologiques" className="hover:text-accent transition-colors">Formations Psychologiques</Link></li>
            <li><Link to="/services#formations-pluridisciplinaires" className="hover:text-accent transition-colors">Formations Pluridisciplinaires</Link></li>
          </ul>
        </div>


{/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            {[
              { label: "Accueil", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Témoignages", href: "/realisations" },
              { label: "À propos", href: "/a-propos" },
              { label: "Pourquoi nous", href: "/pourquoi-nous" },
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


{/* Contact */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-center sm:text-left">Contact</h4>
          <ul className="space-y-4 text-sm text-primary-foreground/60">

            {/* Address - Using items-start because the text is long */}
            {/* Address - Optimized for perfect centering on mobile */}
            <li className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-start gap-2 sm:gap-3 text-center sm:text-left">
              <MapPin className="h-5 w-5 shrink-0 text-accent" />
              <span className="max-w-[280px] sm:max-w-none">
                Atrokpocodji, 4ème rue après le séminaire Jean-Eude, première rue à droite et deuxième maison, Cotonou, Bénin
              </span>
            </li>

            {/* Phone 1 */}
            <li className="flex items-center justify-center sm:justify-start gap-3">
              <PhoneCall className="h-5 w-5 shrink-0 text-accent" />
              <a href="tel:+2290167618021" className="hover:text-accent transition-colors">+229 01 67 618 021</a>
            </li>

            {/* Phone 2 */}
            <li className="flex items-center justify-center sm:justify-start gap-3">
              <PhoneCall className="h-5 w-5 shrink-0 text-accent" />
              <a href="tel:+2290194390295" className="hover:text-accent transition-colors">+229 01 94 39 02 95</a>
            </li>

            {/* Email */}
            <li className="flex items-center justify-center sm:justify-start gap-3">
              <Mail className="h-5 w-5 shrink-0 text-accent" />
              <a href="mailto:contact.cmv.benin@gmail.com" className="hover:text-accent transition-colors">Envoyez-nous un email</a>
            </li>

            {/* WhatsApp */}
            <li className="flex items-center justify-center sm:justify-start gap-3">
              <MessageCircle className="h-5 w-5 shrink-0 text-accent" />
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Cabinet Meilleure Vie. Tous droits réservés. — Psychologie, Sante Mentale et Bien-être, Cotonou, Bénin
      </div>
    </div>
  </footer>
);

export default Footer;
