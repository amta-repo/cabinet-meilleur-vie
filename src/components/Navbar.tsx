import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logoImg from "@/assets/logo-cabinet.jpg";
import campaign1Img from "@/assets/Campaign 1.jpeg";
import campaign2Img from "@/assets/Campaign 2.jpeg";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const actualites = [
  {
    id: "campagne1",
    title: "📣 Une bonne nouvelle pour vous",
    preview:
      "Le Cabinet Meilleure Vie met en place une campagne exceptionnelle du 27 avril au 6 mai, avec une réduction de 50% sur les consultations psychologiques et psychiatriques.",
    details:
      "Le Cabinet Meilleure Vie met en place une campagne exceptionnelle du 27 avril au 6 mai, avec une réduction de 50% sur les consultations psychologiques et psychiatriques.\n\n✨ Une belle opportunité de faire le premier pas, ou de reprendre un accompagnement, dans un cadre professionnel, bienveillant et confidentiel.\n\n📅 Les consultations se font uniquement sur rendez-vous. Si vous êtes intéressé(e), il vous suffit de nous indiquer vos disponibilités (jours et horaires) afin que nous puissions vous proposer un créneau adapté.\n\nNous restons à votre écoute 💬",
    img: campaign1Img,
    whatsapp:
      "https://wa.me/22994390295?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20la%20campagne%20de%2050%25%20sur%20les%20consultations.",
    button: "Découvrir la campagne",
  },
  {
    id: "campagne2",
    title: "✨ Devenez un professionnel certifié en test de personnalité Hexaco",
    preview:
      "75 000 FCFA Afrique / 150 000 FCFA hors Afrique - 5 séances en ligne de 09h-12h GMT. Nombre de places limité.",
    details:
      "DEVENEZ UN PROFESSIONNEL CERTIFIÉ EN TEST DE PERSONNALITÉ HEXACO\n\n💰 75 000 FCFA (tarif préférentiel Afrique) - 150 000 FCFA (hors Afrique)\n⏳ 5 séances en ligne de 09h-12h GMT\n📌 Nombre de places limité\n\nPour inscription :\n📱 WhatsApp : +229 0194390295",
    img: campaign2Img,
    whatsapp:
      "https://wa.me/22994390295?text=Bonjour%2C%20je%20souhaite%20m%27inscrire%20%C3%A0%20la%20formation%20HEXACO.",
    button: "Je veux m'inscrire",
  },
];

type ActualiteItem = (typeof actualites)[number];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeActualite, setActiveActualite] = useState<ActualiteItem | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-background text-foreground py-1.5">
        <div className="container mx-auto flex items-center gap-4 px-4 text-xs sm:text-sm">
          <span className="font-semibold uppercase tracking-[0.2em] text-accent">Actualités</span>
          <div className="relative flex-1 overflow-hidden">
            <div className="flex animate-marquee gap-16 px-0 whitespace-nowrap">
              {actualites.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveActualite(item)}
                  className="cursor-pointer text-left text-accent font-medium hover:text-accent/70 transition"
                >
                  <span className="text-sm">{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 sm:h-20 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImg} alt="Cabinet Meilleure Vie" className="h-12 w-auto object-contain" />
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
          <div className="lg:hidden border-t border-border bg-white animate-fade-in">
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
      </div>

      {activeActualite && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80 p-4">
          <div className="w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-lg bg-background shadow-2xl ring-1 ring-border">
            <div className="grid h-full gap-0 md:grid-cols-2 items-stretch">
              <img src={activeActualite.img} alt={activeActualite.title} className="h-40 sm:h-48 w-full object-cover md:h-full" />
              <div className="flex h-full min-h-0 flex-col justify-between p-4 sm:p-6">
                <div className="flex-1 min-h-0 space-y-4 overflow-y-auto pr-0 sm:pr-2">
                  <div className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent">Actualité</div>
                  <h2 className="text-lg sm:text-xl font-bold text-foreground">{activeActualite.title}</h2>
                  <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{activeActualite.details}</p>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href={activeActualite.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-none bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
                  >
                    {activeActualite.button}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <button
                    onClick={() => setActiveActualite(null)}
                    className="rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground/80 transition hover:bg-secondary"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
