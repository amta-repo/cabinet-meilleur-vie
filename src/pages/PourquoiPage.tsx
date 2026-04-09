import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Users, Shield, HandHeart, Sparkles, Heart, Brain, Clock, Award, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHeader from "@/components/PageHeader";
import { useCountUp } from "@/hooks/useCountUp";
import headerBg from "@/assets/header-pourquoi.jpg";

const reasons = [
  { icon: Users, title: "Équipe expérimentée et à l'écoute", desc: "Nos psychologues et éducateurs sont formés aux meilleures pratiques internationales, avec une profonde sensibilité aux réalités béninoises. Chaque membre de l'équipe s'engage à vous offrir un espace d'écoute authentique." },
  { icon: Shield, title: "Approche bienveillante et confidentielle", desc: "La confidentialité est au cœur de notre pratique. Vous pouvez vous exprimer en toute liberté dans un cadre sécurisant, sans jugement. Votre vie privée est strictement protégée." },
  { icon: HandHeart, title: "Solutions adaptées à la réalité béninoise", desc: "Nous comprenons les spécificités culturelles et sociales du Bénin. Nos approches intègrent ces dimensions pour des résultats véritablement pertinents et durables." },
  { icon: Sparkles, title: "Résultats concrets et accompagnement personnalisé", desc: "Chaque patient bénéficie d'un plan d'accompagnement sur mesure. Nous mesurons régulièrement les progrès et ajustons notre approche pour des résultats tangibles." },
  { icon: Brain, title: "Approches thérapeutiques variées", desc: "Nous utilisons différentes approches (TCC, systémique, psychodynamique) pour trouver celle qui vous convient le mieux et maximiser l'efficacité de l'accompagnement." },
  { icon: Heart, title: "Environnement chaleureux et apaisant", desc: "Notre cabinet est conçu pour vous mettre à l'aise dès votre arrivée. Un espace serein et accueillant qui favorise l'expression et la guérison." },
  { icon: Clock, title: "Flexibilité et disponibilité", desc: "Des horaires adaptés à votre emploi du temps, avec la possibilité de consultations en soirée et le week-end. Nous sommes disponibles quand vous en avez besoin." },
  { icon: Award, title: "Expertise reconnue", desc: "Notre cabinet est reconnu pour la qualité de ses prestations par les institutions, les entreprises et les familles de Cotonou et du Bénin." },
];

const CounterCard = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(end, 2000);
  return (
    <div ref={ref} className="text-center p-6 rounded-xl bg-card" style={{ boxShadow: "var(--card-shadow)" }}>
      <p className="text-3xl sm:text-4xl font-bold text-accent">{count}{suffix}</p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const PourquoiPage = () => (
  <>
    <Helmet>
      <title>Pourquoi nous choisir | Cabinet Meilleure Vie Cotonou - Psychologue Bénin</title>
      <meta name="description" content="Découvrez pourquoi choisir Cabinet Meilleure Vie pour votre suivi psychologique à Cotonou. Équipe expérimentée, approche bienveillante, résultats concrets." />
    </Helmet>

    <Navbar />
    <main>
      <PageHeader
        badge="Pourquoi nous choisir"
        title="La confiance au cœur de notre approche"
        subtitle="Ce qui distingue Cabinet Meilleure Vie dans l'accompagnement psychologique à Cotonou."
        bgImage={headerBg}
      />

      <section className="bg-secondary py-12">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          <CounterCard end={10} suffix="+" label="Années d'expérience en psychologie" />
          <CounterCard end={500} suffix="+" label="Patients accompagnés avec succès" />
          <CounterCard end={100} suffix="%" label="Confidentialité garantie" />
          <CounterCard end={98} suffix="%" label="Taux de satisfaction" />
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">8 raisons de nous faire confiance</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-xl bg-card p-6 hover-lift" style={{ boxShadow: "var(--card-shadow)" }}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <r.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent section-padding">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-accent-foreground">Convaincu ? Prenez rendez-vous</h2>
          <p className="mt-3 text-accent-foreground/80 max-w-lg mx-auto">
            Rejoignez nos patients satisfaits et commencez votre parcours vers le bien-être.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Prendre rendez-vous
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default PourquoiPage;
