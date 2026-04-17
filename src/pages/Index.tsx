import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MessageCircle, CalendarCheck, ArrowRight, Brain, Heart, BookOpen, Compass, Star, Shield, Lock, Eye, HandHeart, GraduationCap, ClipboardList } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useCountUp } from "@/hooks/useCountUp";
import heroSlide1 from "@/assets/hero-slide1.jpg";
import heroSlide2 from "@/assets/slider2.jpg";
import svcPsychometrique from "@/assets/service-psychometrique.jpg";
import svcFormationPluri from "@/assets/service-formation-pluri.jpg";
import svcFormationPsy from "@/assets/service-formation-psy.jpg";
import svcPsyPro from "@/assets/service-psy-pro.jpg";

const DOMAIN = "https://cabinetmeilleurvie.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  name: "Cabinet Meilleure Vie",
  description: "Cabinet de Consultation, Formation et Expertise-Recherche en Psychologie, Éducation, Genre et Environnement à Cotonou, Bénin.",
  url: DOMAIN,
  telephone: ["+22901676180021", "+2290194390295"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Atrokpocodji, 4ème rue après le séminaire Jean-Eude, première rue à droite et deuxième maison",
    addressLocality: "Cotonou",
    addressCountry: "BJ",
  },
  geo: { "@type": "GeoCoordinates", latitude: 6.3893166, longitude: 2.3170377 },
  areaServed: "Bénin",
  medicalSpecialty: "Psychology",
  sameAs: [
    "https://www.facebook.com/Meilleurvie",
    "https://www.instagram.com/Meilleurvie1",
    "https://x.com/cabinetvie",
  ],
};

const slides = [heroSlide1, heroSlide2];

const serviceCards = [
  {
    img: svcPsychometrique,
    title: "Services Professionnels Psychométriques",
    desc: "Tests de personnalité, échelles d'évaluation, tests projectifs et actuariels. Psychothérapie individuelle, du couple, familiale et de groupe.",
    slug: "psychometriques",
  },
  {
    img: svcFormationPluri,
    title: "Formations Professionnelles Pluridisciplinaires",
    desc: "Gestion de projet, rédaction de projets d'établissement, discipline positive, TICE et méthodologie de recherche scientifique.",
    slug: "formations-pluridisciplinaires",
  },
  {
    img: svcFormationPsy,
    title: "Formations Professionnelles Psychologiques",
    desc: "Certificats en hypnose jungienne, psychométrie, psychosocial, protection de l'enfant, accompagnement VBG et handicap.",
    slug: "formations-psychologiques",
  },
  {
    img: svcPsyPro,
    title: "Services Professionnels Psychologiques",
    desc: "Thérapie individuelle, du couple, familiale, analyse de soi, thérapie de groupe en entreprise et accompagnement scolaire.",
    slug: "services-psychologiques",
  },
];

const testimonials = [
  { text: "Je stresse moins qu'avant, les douleurs qui m'ont poussée à venir dans ce cabinet ont diminué à 80% déjà.", motivation: "L'écoute et la bienveillance des praticiens" },
  { text: "J'ai plus confiance en moi.", motivation: "L'organisation et l'accueil" },
  { text: "Je me sens mieux et je m'accepte mieux. J'ai mieux repris confiance en moi.", motivation: "L'écoute et la bienveillance des praticiens" },
];

const CounterStat = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(end, 2000);
  return (
    <div ref={ref} className="px-4 py-4 sm:py-5 text-center">
      <p className="text-xl sm:text-2xl font-bold text-accent">{count}{suffix}</p>
      <p className="text-xs sm:text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((p) => (p + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <>
      <Helmet>
        <title>Cabinet Meilleure Vie | Psychologue Cotonou - Santé Mentale & Éducation Bénin</title>
        <meta name="description" content="Cabinet Meilleure Vie : votre cabinet qui vous garantit la santé mentale au quotidien. Consultation psychologique, formations et expertise à Cotonou, Bénin." />
        <meta name="keywords" content="cabinet psychologie Cotonou, psychologue Bénin, santé mentale Cotonou, consultation psychologique Bénin, bilan psychologique, orientation scolaire Cotonou, psychothérapie Bénin, formation psychologique Afrique" />
        <link rel="canonical" href={DOMAIN} />
        <meta property="og:title" content="Cabinet Meilleure Vie - Psychologie & Éducation à Cotonou, Bénin" />
        <meta property="og:description" content="Votre cabinet qui vous garantit la santé mentale au quotidien." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={DOMAIN} />
        <meta property="og:locale" content="fr_BJ" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />
      <main>
        {/* Hero with Slider */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ opacity: currentSlide === i ? 1 : 0 }}
            >
              <img
                src={slide}
                alt={`Cabinet Meilleure Vie - Consultation psychologique à Cotonou ${i + 1}`}
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
                {...(i === 0 ? {} : { loading: "lazy" as const })}
              />
              <div className="absolute inset-0 bg-primary/70" />
            </div>
          ))}

          <div className="container relative z-10 mx-auto py-32 sm:py-40">
            <div className="max-w-3xl space-y-6 animate-fade-in-up">
              <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-foreground">
                🌿 Psychologie & Sciences de l'Éducation — Cotonou, Bénin
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-primary-foreground">
                Faites-Vous Écouter-{" "}
                <span className="text-gradient">Sans Être Jugé</span>
              </h1>

              <p className="max-w-xl text-base sm:text-lg text-primary-foreground/80 leading-relaxed">
                Votre cabinet qui vous garantit la santé mentale au quotidien.
              </p>

              <p className="max-w-xl text-base sm:text-lg text-primary-foreground/70 italic">
                ..dans la confidentialité, dans un cadre sécurisé.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105 shadow-lg"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Prendre rendez-vous
                </Link>
                <a
                  href="https://wa.me/22901676180021?text=Bonjour%2C%20je%20viens%20de%20visiter%20votre%20site%20et%20je%20souhaite%20prendre%20rendez-vous."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
                >
                  <MessageCircle className="h-4 w-4" />
                  Nous contacter sur WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all ${currentSlide === i ? "w-8 bg-accent" : "w-2 bg-primary-foreground/40"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Stats bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border">
            <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-border">
              <CounterStat end={10} suffix="+" label="Années d'expérience" />
              <CounterStat end={500} suffix="+" label="Patients accompagnés" />
              <CounterStat end={100} suffix="%" label="Confidentialité" />
              <CounterStat end={98} suffix="%" label="Taux de satisfaction" />
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-secondary" id="services">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">Nos Services</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Un accompagnement complet pour votre bien-être</h2>
              <p className="mt-3 text-muted-foreground">
                De la consultation individuelle aux formations, Cabinet Meilleure Vie vous accompagne vers une vie épanouie.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {serviceCards.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services#${s.slug}`}
                  className="group rounded-xl bg-card overflow-hidden hover-lift"
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={s.img} alt={s.title} loading="lazy" width={800} height={512} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-primary/40" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
                      En savoir plus <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
                Découvrir tous nos services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials preview */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">Témoignages</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Ce que disent nos patients</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <div key={i} className="rounded-xl bg-card p-6 hover-lift" style={{ boxShadow: "var(--card-shadow)" }}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-star text-star" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                  <p className="mt-3 text-xs text-accent font-medium">{t.motivation}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-sm">
                      A
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Anonyme</p>
                      <p className="text-xs text-muted-foreground">Patient(e) vérifié(e)</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/realisations" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105">
                Voir tous les témoignages
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-primary section-padding">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">Nos Valeurs</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary-foreground">Ce qui guide notre pratique</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Lock, title: "Secret professionnel", desc: "Tout ce qui est partagé en consultation reste strictement confidentiel." },
                { icon: HandHeart, title: "Disponibilité", desc: "Une équipe accessible et réactive, à votre écoute quand vous en avez besoin." },
                { icon: Eye, title: "Non-jugement", desc: "Un espace bienveillant où chacun est accueilli sans aucun jugement." },
                { icon: Heart, title: "Compréhension", desc: "Une écoute empathique et une approche adaptée à chaque situation." },
              ].map((r) => (
                <div key={r.title} className="rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 p-6 text-center hover-lift">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <r.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-foreground">{r.title}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/70">{r.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/pourquoi-nous" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
                Découvrir tous nos avantages
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent section-padding">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-accent-foreground">Prêt à prendre soin de vous ?</h2>
            <p className="mt-3 text-accent-foreground/80 max-w-lg mx-auto">
              Prenez rendez-vous dès aujourd'hui avec Cabinet Meilleure Vie pour une consultation confidentielle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Prendre rendez-vous
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/a-propos"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-accent-foreground/30 px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-foreground/10"
              >
                En savoir plus sur nous
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
