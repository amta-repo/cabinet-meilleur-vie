import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logoImg from "@/assets/logo-cabinet.jpg";
import concentrationCampaign from "@/assets/attention-et-concentration-scolaires.jpeg.asset.json";
import dreamCampaign from "@/assets/campagne-interpretation-reves.jpeg.asset.json";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const actualites = [
  {
    id: "concentration-scolaire",
    title: "Se concentrer permet d'accroître le résultat scolaire de vos enfants",
    details: "Nous vous proposons des jeux-tests de Berloquin, jeux-tests de séries, jeux-tests de suites numériques et thérapies de concentration, pour aider vos enfants en difficulté d'attention et de concentration à devenir les meilleurs de leurs classes.\n\n📅 Séances : Mercredi & samedi | 15h–17h\n📍 Lieu : Cabinet Meilleure Vie — Atrokpocodji\n📞 +229 01 47 77 19 67\n📧 contact.cmv.benin@gmail.com\n🌐 cabinetmeilleurvie.com",
    img: concentrationCampaign.url,
    whatsapp: "https://wa.me/2290147771967?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20les%20s%C3%A9ances%20d%27attention%20et%20de%20concentration%20scolaires.",
    button: "Je réserve une séance",
  },
  {
    id: "interpretation-reves",
    title: "Le rêve peut ouvrir une voie vers l’inconscient",
    details: "Apprenez à écouter, analyser et interpréter le rêve comme outil d’analyse du fonctionnement psychique dans la relation thérapeutique.\n\nFORMATION QUALIFIANTE\n\nSanté mentale & psychothérapie\n\nL’interprétation des rêves comme outil thérapeutique\n\n📅 24 sept. au 15 oct. 2026\n💻 En ligne ou présentiel\n📚 50 % théorie • 50 % pratique\n🎓 Certification\n💰 75 000 FCFA\n📞 01 47 77 19 67",
    img: dreamCampaign.url,
    whatsapp: "https://wa.me/2290147771967?text=Bonjour%2C%20je%20souhaite%20m%27inscrire%20%C3%A0%20la%20formation%20sur%20l%27interpr%C3%A9tation%20des%20r%C3%AAves.",
    button: "Je m'inscris",
  },
];

type ActualiteItem = (typeof actualites)[number];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeActualite, setActiveActualite] = useState<ActualiteItem | null>(null);
  const location = useLocation();

  const isNavLinkActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* --- ACTUALITÉS BAR --- */}
      <div className="bg-background text-foreground py-1.5 border-b border-border/50">
        <div className="container mx-auto flex items-center gap-4 px-4 text-xs sm:text-sm h-6">
          <span className="font-semibold uppercase tracking-[0.2em] text-accent shrink-0">
            Actualités
          </span>
          <div className="relative flex-1 overflow-hidden">
            {/* gap-[100vw] ensures the second item only enters after the first leaves */}
           <div className="flex animate-marquee-fast whitespace-nowrap gap-6 sm:gap-16">
              {actualites.map((item) => (
                <div key={item.id} className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setActiveActualite(item)}
                    type="button"
                    className="cursor-pointer text-left font-bold text-red-600 hover:text-red-500 transition"
                  >
                    <span className="text-sm">{item.title}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveActualite(item)}
                    className="rounded-full bg-yellow-400 text-blue-600 px-3 py-1 text-[0.72rem] font-semibold shake"
                  >
                    Cliquez ici
                  </button>
                </div>
              ))}
              {/* Duplicate the items to create the infinite loop effect */}
              {actualites.map((item) => (
                <div key={`${item.id}-clone`} className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setActiveActualite(item)}
                    type="button"
                    className="cursor-pointer text-left font-bold text-red-600 hover:text-red-500 transition"
                  >
                    <span className="text-sm">{item.title}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveActualite(item)}
                    className="rounded-full bg-yellow-400 text-blue-600 px-3 py-1 text-[0.72rem] font-semibold shake"
                  >
                    Cliquez ici
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 sm:h-20 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImg} alt="Cabinet Meilleure Vie" className="h-10 sm:h-12 w-auto object-contain" />
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => {
              const active = isNavLinkActive(l.href);
              return (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className={`inline-flex rounded-full px-3 py-1 text-sm font-medium transition-colors ${active ? "bg-accent/10 text-accent" : "text-foreground/80 hover:text-accent"}`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link to="/contact" className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105">
            Prendre rendez-vous
          </Link>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden border-t border-border bg-white animate-fade-in p-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((l) => {
                const active = isNavLinkActive(l.href);
                return (
                  <li key={l.href}>
                    <Link
                      to={l.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-4 py-3 text-sm font-medium ${active ? "bg-accent/10 text-accent" : "text-foreground hover:bg-secondary"}`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {/* --- MODAL --- */}
      {activeActualite && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/80 p-4">
          <div className="flex flex-col w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-lg bg-background shadow-2xl ring-1 ring-border md:flex-row">
            <div className="w-full h-[35vh] md:h-auto md:w-1/2 shrink-0 bg-white border-b md:border-b-0 md:border-r border-border">
              <img src={activeActualite.img} alt={activeActualite.title} className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
              <div className="flex-1 overflow-y-auto p-5 sm:p-8 custom-scrollbar">
                <div className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent mb-2">Actualité</div>
                <h2 className="text-lg md:text-xl font-bold text-red-600 mb-4">{activeActualite.title}</h2>
                <p className="whitespace-pre-line text-sm leading-relaxed font-bold text-red-600">{activeActualite.details}</p>
              </div>
              <div className="p-4 border-t border-border bg-background">
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <a href={activeActualite.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 order-1 sm:order-2">
                    {activeActualite.button} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <button onClick={() => setActiveActualite(null)} className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground/80 hover:bg-secondary order-2 sm:order-1">
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
