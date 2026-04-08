import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MessageCircle, CalendarCheck, ArrowRight, Brain, Heart, BookOpen, Compass, Users, GraduationCap, Search, UserCheck, Star, Shield, HandHeart, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImg from "@/assets/hero-psychology.jpg";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  name: "Cabinet Meilleure Vie",
  description: "Cabinet de Consultation, Formation et Expertise-Recherche en Psychologie, Éducation, Genre et Environnement à Cotonou, Bénin.",
  url: "https://cabinetmeilleurevie.com",
  telephone: "+2290194390295",
  address: { "@type": "PostalAddress", addressLocality: "Cotonou", addressCountry: "BJ" },
  geo: { "@type": "GeoCoordinates", latitude: 6.3893166, longitude: 2.3170377 },
  areaServed: "Bénin",
  medicalSpecialty: "Psychology",
};

const services = [
  { icon: Brain, title: "Consultations psychologiques", desc: "Accompagnement personnalisé pour votre bien-être mental et émotionnel." },
  { icon: Heart, title: "Souffrances psychologiques", desc: "Prise en charge de l'anxiété, la dépression, le trauma et le stress." },
  { icon: Search, title: "Bilans psychologiques", desc: "Tests et évaluations psychologiques approfondis." },
  { icon: Compass, title: "Orientation scolaire & professionnelle", desc: "Guidance pour des choix éclairés à chaque étape de vie." },
  { icon: GraduationCap, title: "Accompagnement éducatif", desc: "Prévention des échecs scolaires et suivi psycho-éducatif." },
  { icon: BookOpen, title: "Formations & ateliers", desc: "Formations professionnelles et ateliers de développement personnel." },
];

const Index = () => (
  <>
    <Helmet>
      <title>Cabinet Meilleure Vie | Psychologue Cotonou - Santé Mentale & Éducation Bénin</title>
      <meta name="description" content="Cabinet Meilleure Vie : consultation psychologique, bilans, orientation scolaire et formations à Cotonou, Bénin. Prenez rendez-vous pour une vie meilleure." />
      <meta name="keywords" content="cabinet psychologie Cotonou, psychologue Bénin, santé mentale Cotonou, consultation psychologique Bénin, bilan psychologique, orientation scolaire Cotonou" />
      <link rel="canonical" href="https://cabinetmeilleurevie.com" />
      <meta property="og:title" content="Cabinet Meilleure Vie - Psychologie & Éducation à Cotonou, Bénin" />
      <meta property="og:description" content="Votre partenaire pour le bien-être mental et la réussite éducative." />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_BJ" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    <Navbar />
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Cabinet de consultation psychologique moderne et serein à Cotonou" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="container relative z-10 mx-auto py-32 sm:py-40">
          <div className="max-w-3xl space-y-6 animate-fade-in-up">
            <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground">
              🌿 Psychologie & Sciences de l'Éducation — Cotonou, Bénin
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-primary-foreground">
              CABINET MEILLEURE VIE{" "}
              <span className="text-gradient">– Pour une vie meilleure</span>
            </h1>
            <p className="max-w-xl text-base sm:text-lg text-primary-foreground/80 leading-relaxed">
              Votre partenaire pour le bien-être mental, le développement personnel et la réussite éducative à Cotonou.
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
                href="https://wa.me/2290194390295?text=Bonjour%2C%20je%20viens%20de%20visiter%20votre%20site%20et%20je%20souhaite%20prendre%20rendez-vous."
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
        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-border">
            {[
              { num: "10+", label: "Années d'expérience" },
              { num: "500+", label: "Patients accompagnés" },
              { num: "100%", label: "Confidentialité" },
              { num: "✓", label: "Approche bienveillante" },
            ].map((s) => (
              <div key={s.label} className="px-4 py-4 sm:py-5 text-center">
                <p className="text-xl sm:text-2xl font-bold text-accent">{s.num}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">Nos Services</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Un accompagnement complet pour votre bien-être</h2>
            <p className="mt-3 text-muted-foreground">
              De la consultation individuelle aux formations, Cabinet Meilleure Vie vous accompagne vers une vie épanouie.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group rounded-xl bg-card p-6 sm:p-8 hover-lift" style={{ boxShadow: "var(--card-shadow)" }}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
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
            {[
              { text: "Grâce au Cabinet Meilleure Vie, j'ai retrouvé la sérénité. L'écoute et le professionnalisme de l'équipe sont remarquables.", name: "Marie K.", role: "Patiente" },
              { text: "L'orientation scolaire de mon fils a été un tournant. Il est maintenant épanoui dans ses études. Merci infiniment !", name: "Jean-Pierre D.", role: "Parent" },
              { text: "Les formations sur la gestion du stress ont transformé mon quotidien professionnel. Je recommande vivement.", name: "Aïcha S.", role: "Professionnelle" },
            ].map((t, i) => (
              <div key={i} className="rounded-xl bg-card p-6 hover-lift" style={{ boxShadow: "var(--card-shadow)" }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
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

      {/* Why us preview */}
      <section className="bg-primary section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">Pourquoi nous choisir ?</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary-foreground">La confiance au cœur de notre approche</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, title: "Équipe expérimentée", desc: "Des professionnels qualifiés et à l'écoute." },
              { icon: Shield, title: "Confidentialité totale", desc: "Approche bienveillante et strictement confidentielle." },
              { icon: HandHeart, title: "Adaptée au Bénin", desc: "Solutions pensées pour la réalité béninoise." },
              { icon: Sparkles, title: "Résultats concrets", desc: "Accompagnement personnalisé et suivi durable." },
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

export default Index;
