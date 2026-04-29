import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Target, Eye, Lock, HandHeart, Heart, ArrowRight, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHeader from "@/components/PageHeader";
import headerBg from "@/assets/header-apropos.jpg";
import dgImg from "@/assets/dg-agossou.jpg";
import assistantImg from "@/assets/assistant-psy.jpg";
import assistantPsyImgTon from "@/assets/assistant-tongnon.jpg";
import commDigitaleImg from "@/assets/chargee-comm-digitale.jpg";
import equipeImg from "@/assets/equipe.jpg";

const DOMAIN = "https://cabinetmeilleurvie.com";

const values = [
  { icon: Lock, title: "Secret professionnel", desc: "Tout ce qui est partagé en consultation reste strictement confidentiel, conformément au code de déontologie." },
  { icon: HandHeart, title: "Disponibilité", desc: "Une équipe accessible et réactive, présente quand vous avez besoin d'aide." },
  { icon: Eye, title: "Non-jugement", desc: "Un espace bienveillant où vous êtes accueilli(e) tel(le) que vous êtes, sans aucun jugement." },
  { icon: Heart, title: "Compréhension", desc: "Une écoute empathique profonde et une approche humaine adaptée à votre situation." },
];

const timeline = [
  { year: "Fondation (2016)", desc: "Création du Cabinet Meilleure Vie à Abomey-Calavi, avec la mission de rendre la psychologie accessible à tous." },
  { year: "Développement (2019)", desc: "Élargissement des services : bilans psychométriques, orientation scolaire et formations professionnelles certifiantes." },
  { year: "Expertise (2024)", desc: "Reconnaissance en tant que centre d'expertise en psychologie, éducation, genre et environnement au Bénin." },
  { year: "Aujourd'hui", desc: "Plus de 500 patients accompagnés, 2000+ personnes formées, un impact croissant en Afrique de l'Ouest et en Europe (Togo, Sénégal, Côte d'Ivoire, Mali, Burkina Faso, Niger, France, Canada et Turquie)." },
];

const teamMembers = [
  {
    name: "Agossou SAGBO",
    role: "Directeur Général – Psychologue en Chef",
    img: dgImg,
    bio: "Psychologue clinicien,Psychopathologue, Psychanalyste jungien, M. Agossou SAGBO est le fondateur et Directeur Général du Cabinet Meilleure Vie. Fort de plus de 15 ans d'expérience en psychologie clinique et en sciences de l'éducation, il dirige l'équipe avec passion et engagement pour le bien-être mental de chaque patient.",
  },
  {
    name: "ANTONIO Fêmi C.",
    role: "Assistante Psychologue",
    img: assistantImg,
    bio: "Responsable du Service Clinique et d'Expertise au Cabinet Meilleure Vie Collaboratrice du Directeur Général du Cabinet",
  },

  {
    name: "M. TOGNON Marcos",
    role: "Assistante Psychologue",
    img: assistantPsyImgTon,
    bio: "Responsable du Service Technique et attaché du Service Clinique et d'Expertise au Cabinet Meilleure Vie",
  },
  {
    name: "Sèdjro Florida TONAKPA",
    role: "Chargée de communication digitale",
    img: commDigitaleImg,
    bio: "Partenaire du Cabinet Meilleure Vie, elle soutient la visibilité et la sensibilisation autour de la santé mentale.",
  },
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "À propos de Cabinet Meilleure Vie",
  url: `${DOMAIN}/a-propos`,
  mainEntity: {
    "@type": "MedicalBusiness",
    name: "Cabinet Meilleure Vie",
    founder: { "@type": "Person", name: "Agossou SAGBO", jobTitle: "Psychologue en Chef" },
    employee: teamMembers.map((m) => ({ "@type": "Person", name: m.name, jobTitle: m.role })),
  },
};

const AProposPage = () => (
  <>
    <Helmet>
      <title>À Propos de Meilleure Vie | Psychologue Abomey-Calavi, Bénin</title>
      <meta name="description" content="Découvrez Cabinet Meilleure Vie : votre cabinet de psychologie et psychiatrie à Abomey-Calavi. Équipe expérimentée, mission de bien-être mental." />
      <link rel="canonical" href={`${DOMAIN}/a-propos`} />
      <meta property="og:title" content="À Propos de Meilleure Vie | Cabinet de Psychologie Abomey-Calavi" />
      <meta property="og:url" content={`${DOMAIN}/a-propos`} />
      <script type="application/ld+json">{JSON.stringify(aboutJsonLd)}</script>
    </Helmet>

    <Navbar />
    <main>
      <PageHeader
        badge="À propos"
        title="À propos de Meilleure Vie"
        subtitle="Votre cabinet de psychologie, sante mentale et du bien-être à Abomey-Calavi, Bénin."
        bgImage={headerBg}
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Qui sommes-nous ?</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Cabinet Meilleure Vie</strong> est votre cabinet de psychologie et des
                  des psychiatrie, qui vous garantit une santé mentale équilibrée, aussi
                  bien en entreprise, en famille ou dans votre vie personnelle, par la psychothérapie,
                  les consultations psychologiques, l'information et la recherche.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "var(--card-shadow)" }}>
              <img src={headerBg} alt="Cabinet Meilleure Vie à Abomey-Calavi" loading="lazy" width={800} height={600} className="w-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-to-b from-secondary/60 to-white section-padding">
        <div className="container mx-auto grid gap-8 sm:grid-cols-2">

          {/* Mission */}
          <div className="group relative rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-md p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">

            {/* subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-foreground">
                  Notre Mission
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Accompagner nos clients sur le chemin de la transformation personnelle, en leur offrant un espace de consultation sûr, confidentiel et une expertise psychologique de pointe.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-md p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">

            {/* subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-foreground">
                  Notre Vision
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Devenir le centre de référence en santé mentale au Bénin et dans le monde</p>
            </div>
          </div>

        </div>
      </section>

      {/* DG Welcome */}
      <section className="section-padding">
  <div className="container mx-auto">

    <div className="grid gap-0 lg:grid-cols-5 items-stretch rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">

      {/* IMAGE SIDE */}
      <div className="lg:col-span-2 relative h-full">
        <img
          src={dgImg}
          alt="Agossou SAGBO - Directeur Général"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* TEXT SIDE */}
      <div className="lg:col-span-3 p-8 sm:p-10 flex flex-col justify-center">
        
        <Quote className="h-10 w-10 text-accent/30 mb-4" />

        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
          Mot du Directeur Général
        </h2>

        <div className="space-y-4 text-muted-foreground leading-relaxed italic">
          <p>
            « Bienvenue au Cabinet Meilleure Vie. Depuis notre création, nous nous engageons chaque jour à offrir un accompagnement psychologique de qualité, dans un cadre sécurisé et confidentiel.
          </p>
          <p>
            Notre conviction profonde est que chaque individu mérite d'être écouté, compris et accompagné vers son bien-être. Que vous soyez un enfant, un adulte, un couple ou une entreprise, nous sommes là pour vous.
          </p>
          <p>
            Notre équipe de professionnels qualifiés met son expertise à votre service avec bienveillance et dévouement. Ensemble, construisons une meilleure vie. »
          </p>
        </div>

        <div className="mt-6 not-italic">
          <p className="text-foreground font-semibold">
            Agossou SAGBO
          </p>
          <p className="text-sm text-accent">
            Directeur Général – Psychologue Clinicien, Psychopathologue et Psychanalyste jungien
          </p>
        </div>

      </div>
    </div>

  </div>
</section>

      {/* Team */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img src={equipeImg} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent/90"></span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary-foreground">
              Une équipe engagée, humaine et disponible
            </h2>

            <p className="mt-3 text-primary-foreground/70 leading-relaxed">
              Des professionnels dédiés à votre bien-être psychologique et émotionnel.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:overflow-x-auto gap-6 pb-4 max-w-full mx-auto lg:flex-nowrap">
            {teamMembers.map((m) => (
              <div key={m.name} className="min-w-[220px] flex-1 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 p-4 sm:p-4 text-center hover-lift">
                <div className="mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden border-4 border-accent">
                  <img src={m.img} alt={`${m.name} - ${m.role}`} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-wide font-[500]">{m.name}</h3>
                <p className="text-sm font-medium text-white/90 bg-white/10 px-2 py-1 rounded-md backdrop-blur-sm inline-block">{m.role}</p>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* end of team section */}

      {/* Values */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-violet-50/30">
        <div className="container mx-auto relative z-10">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              Nos valeurs
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
              Ce qui guide notre pratique
            </h2>
            <p className="mt-3 text-muted-foreground">
              Une approche humaine, éthique et profondément engagée dans votre bien-être.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const bgVariants = [
                "from-blue-500/10 to-blue-600/5 text-blue-700",
                "from-emerald-500/10 to-emerald-600/5 text-emerald-700",
                "from-amber-500/10 to-amber-600/5 text-amber-700",
                "from-rose-500/10 to-rose-600/5 text-rose-700",
              ];

              const bg = bgVariants[i % bgVariants.length];

              return (
                <div
                  key={v.title}
                  className="group relative rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-md p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* subtle gradient glow */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${bg}`} />

                  <div className="relative z-10">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <v.icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-base font-semibold text-foreground">
                      {v.title}
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
                  <h3 className="text-lg font-semibold text-white tracking-wide">{t.year}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/70 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
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
