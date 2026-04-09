import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Leaf, Target, Eye, Heart, Users, Brain, BookOpen, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHeader from "@/components/PageHeader";
import headerBg from "@/assets/header-apropos.jpg";

const values = [
  { icon: Heart, title: "Bienveillance", desc: "Chaque personne est accueillie avec empathie, respect et sans jugement." },
  { icon: Users, title: "Écoute", desc: "Nous accordons une attention sincère à chaque histoire, chaque souffrance, chaque espoir." },
  { icon: Brain, title: "Excellence", desc: "Des approches scientifiquement validées, portées par des professionnels qualifiés." },
  { icon: BookOpen, title: "Engagement", desc: "Un accompagnement continu et engagé pour des résultats durables." },
];

const timeline = [
  { year: "Fondation", desc: "Création du Cabinet Meilleure Vie à Cotonou, avec pour mission de rendre la psychologie accessible à tous." },
  { year: "Développement", desc: "Élargissement des services : bilans psychologiques, orientation scolaire et formations professionnelles." },
  { year: "Expertise", desc: "Reconnaissance en tant que centre d'expertise-recherche en psychologie, éducation, genre et environnement." },
  { year: "Aujourd'hui", desc: "Plus de 500 patients accompagnés, des partenariats avec des organisations et un impact croissant au Bénin." },
];

const AProposPage = () => (
  <>
    <Helmet>
      <title>À Propos | Cabinet Meilleure Vie - Psychologue Cotonou, Bénin</title>
      <meta name="description" content="Découvrez le Cabinet Meilleure Vie : notre histoire, nos valeurs et notre mission pour le bien-être mental et la réussite éducative à Cotonou, Bénin." />
    </Helmet>

    <Navbar />
    <main>
      <PageHeader
        badge="À propos"
        title="Cabinet Meilleure Vie"
        subtitle="Pour une vie meilleure – Consultation, Formation et Expertise en Psychologie & Sciences de l'Éducation."
        bgImage={headerBg}
      />

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Notre histoire</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Cabinet Meilleure Vie</strong> est un cabinet de Consultation, Formation et Expertise-Recherche en Psychologie, Éducation, Genre et Environnement basé à Cotonou, Bénin.
                </p>
                <p>
                  Fondé avec la conviction que chacun mérite un accompagnement de qualité pour son bien-être mental, notre cabinet réunit des professionnels passionnés et expérimentés qui placent l'humain au cœur de leur pratique.
                </p>
                <p>
                  Notre mission : rendre la psychologie accessible et contribuer au bien-être et à l'épanouissement des individus, des familles et des communautés béninoises.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "var(--card-shadow)" }}>
              <img src={headerBg} alt="Intérieur chaleureux du Cabinet Meilleure Vie à Cotonou" loading="lazy" width={800} height={600} className="w-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary section-padding">
        <div className="container mx-auto grid gap-8 sm:grid-cols-2">
          <div className="rounded-xl bg-card p-8" style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Notre Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Offrir un accompagnement psychologique et éducatif de qualité, accessible et adapté aux réalités béninoises, pour favoriser le bien-être mental, le développement personnel et la réussite éducative de chaque individu.
            </p>
          </div>
          <div className="rounded-xl bg-card p-8" style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Notre Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Devenir le centre de référence en psychologie et sciences de l'éducation au Bénin, reconnu pour l'excellence de ses services, son approche humaine et son impact positif sur la société.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">Nos valeurs</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="text-center rounded-xl bg-card p-6 hover-lift" style={{ boxShadow: "var(--card-shadow)" }}>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary section-padding">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground text-center mb-10">Notre parcours</h2>
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-primary-foreground/20 mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-semibold text-primary-foreground">{t.year}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/70 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-accent mb-6">
            <Leaf className="h-10 w-10 text-accent-foreground" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Commencez votre chemin vers le bien-être</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Confiez-vous à une équipe bienveillante et professionnelle.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
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

export default AProposPage;
