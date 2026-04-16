import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Brain, GraduationCap, Compass, Heart, CheckCircle, CalendarCheck, MessageCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHeader from "@/components/PageHeader";
import headerBg from "@/assets/header-services.jpg";

const DOMAIN = "https://cabinetmeilleurvie.com";

const servicesData = [
  {
    id: "psychometriques",
    category: "Services Professionnels Psychométriques",
    icon: Brain,
    description: "Nos services psychométriques offrent des évaluations rigoureuses et scientifiquement validées pour les enfants, adultes et couples.",
    items: [
      { title: "Test de personnalité", desc: "Évaluation approfondie de la personnalité pour une meilleure connaissance de soi et un accompagnement adapté." },
      { title: "Échelles d'évaluation psychologique", desc: "Mesures standardisées pour évaluer les troubles anxieux, dépressifs et comportementaux." },
      { title: "Tests projectifs", desc: "Exploration de l'inconscient et de la dynamique psychique à travers des techniques projectives validées." },
      { title: "Échelles actuarielles", desc: "Outils d'évaluation statistiques pour une analyse objective et prédictive des comportements." },
    ],
    subServices: [
      {
        title: "Psychothérapie",
        items: ["Individuelle", "Du couple", "Familiale", "Du groupe"],
      },
      {
        title: "Autres services",
        items: ["Analyse de soi", "Accompagnement scolaire"],
      },
    ],
    cibles: "Enfants, Adultes, Couples",
  },
  {
    id: "formations-pluridisciplinaires",
    category: "Formations Professionnelles Pluridisciplinaires",
    icon: GraduationCap,
    description: "Des formations pratiques et certifiantes pour développer vos compétences professionnelles dans différents domaines.",
    items: [
      { title: "Gestion de projet", desc: "Maîtriser les outils et méthodologies de gestion de projet pour mener vos initiatives à bien." },
      { title: "Gagner des appels d'offres d'ONG internationales", desc: "Techniques et stratégies pour remporter des marchés auprès d'organisations internationales." },
      { title: "Rédaction de projet d'établissement", desc: "Concevoir et rédiger des projets d'établissement solides et structurés." },
      { title: "Discipline positive à l'école", desc: "Approches bienveillantes pour instaurer un climat scolaire favorable à l'apprentissage." },
      { title: "Gestion des conflits scolaires", desc: "Méthodes de médiation et résolution des conflits en milieu scolaire." },
      { title: "Gestion administrative", desc: "Optimiser l'organisation et la gestion administrative de votre structure." },
      { title: "Méthodologie de recherche scientifique", desc: "Acquérir les bases méthodologiques pour mener des recherches rigoureuses." },
    ],
    subServices: [
      {
        title: "Compétences numériques",
        items: ["Traitement des données statistiques", "Maîtrise de la plateforme Educmaster"],
      },
      {
        title: "Formation spécialisée",
        items: ["Formation des chefs d'établissement scolaires en gestion d'école sur les TICE"],
      },
    ],
  },
  {
    id: "formations-psychologiques",
    category: "Formations Professionnelles Psychologiques",
    icon: Compass,
    description: "Des certifications professionnelles reconnues en psychologie appliquée pour renforcer votre expertise.",
    items: [
      { title: "Certificat psychosocial de travail et des organisations", desc: "Formation certifiante pour intervenir en psychologie du travail et des organisations." },
      { title: "Certificat en hypnose jungienne", desc: "Maîtriser les techniques d'hypnose jungienne pour l'accompagnement thérapeutique." },
      { title: "Certificat psychométrique des tests", desc: "Devenir expert en administration et interprétation des tests psychométriques." },
      { title: "Certificat professionnel des éducateurs de jeunes enfants", desc: "Formation spécialisée pour l'encadrement psycho-éducatif de la petite enfance." },
      { title: "Intervention humanitaire et sociale", desc: "Acquérir les compétences pour intervenir dans les contextes humanitaires et sociaux." },
      { title: "Professionnel de protection de l'enfant", desc: "Formation aux normes et pratiques de protection de l'enfance." },
      { title: "Accompagnement psychosocial des violences basées sur le genre", desc: "Prise en charge psychosociale adaptée aux victimes de VBG." },
      { title: "Accompagnement socioprofessionnel des personnes handicapées", desc: "Accompagnement spécialisé pour l'insertion des personnes en situation de handicap." },
    ],
  },
  {
    id: "services-psychologiques",
    category: "Services Professionnels Psychologiques",
    icon: Heart,
    description: "Nos services psychologiques offrent un accompagnement thérapeutique personnalisé pour toutes les situations de vie.",
    items: [
      { title: "Thérapie individuelle", desc: "Accompagnement personnalisé pour surmonter l'anxiété, la dépression et les traumatismes." },
      { title: "Thérapie du couple", desc: "Un espace pour restaurer la communication et renforcer les liens affectifs." },
      { title: "Thérapie familiale", desc: "Résolution des conflits et amélioration de la dynamique familiale." },
      { title: "Analyse de soi", desc: "Exploration approfondie de votre personnalité, vos émotions et vos schémas de pensée." },
      { title: "Thérapie de groupe en entreprise", desc: "Séances collectives pour améliorer le bien-être au travail et la cohésion d'équipe." },
      { title: "Accompagnement scolaire", desc: "Suivi psycho-éducatif spécialisé pour surmonter les difficultés scolaires." },
    ],
  },
];

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Cabinet Meilleure Vie",
  url: `${DOMAIN}/services`,
  medicalSpecialty: "Psychology",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services psychologiques et formations",
    itemListElement: servicesData.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.desc,
        },
      }))
    ),
  },
};

const ServicesPage = () => (
  <>
    <Helmet>
      <title>Nos Services | Cabinet Meilleure Vie - Psychologie & Formations Cotonou</title>
      <meta name="description" content="Services psychométriques, psychothérapie, formations professionnelles pluridisciplinaires et psychologiques à Cotonou, Bénin. Cabinet Meilleure Vie." />
      <link rel="canonical" href={`${DOMAIN}/services`} />
      <meta property="og:title" content="Nos Services | Cabinet Meilleure Vie" />
      <meta property="og:description" content="Services psychométriques, psychothérapie, formations et certifications professionnelles en psychologie à Cotonou." />
      <meta property="og:url" content={`${DOMAIN}/services`} />
      <script type="application/ld+json">{JSON.stringify(servicesJsonLd)}</script>
    </Helmet>

    <Navbar />
    <main>
      <PageHeader
        badge="Nos Services"
        title="Un accompagnement complet pour votre épanouissement"
        subtitle="Des solutions adaptées à vos besoins en psychologie, éducation et développement personnel."
        bgImage={headerBg}
      />

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid gap-16">
            {servicesData.map((section) => (
              <div key={section.id} id={section.id}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent">
                    <section.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{section.category}</h2>
                    <p className="text-sm text-muted-foreground">{section.description}</p>
                  </div>
                </div>

                {section.cibles && (
                  <p className="mb-6 text-sm font-medium text-accent">Cibles : {section.cibles}</p>
                )}

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {section.items.map((item) => (
                    <article key={item.title} className="p-5 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors hover-lift" style={{ boxShadow: "var(--card-shadow)" }}>
                      <CheckCircle className="h-5 w-5 text-accent mb-3" />
                      <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </article>
                  ))}
                </div>

                {section.subServices && (
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {section.subServices.map((sub) => (
                      <div key={sub.title} className="p-5 rounded-xl bg-secondary border border-border">
                        <h4 className="text-base font-semibold text-foreground mb-3">{sub.title}</h4>
                        <ul className="space-y-2">
                          {sub.items.map((it) => (
                            <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                              {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Besoin d'un accompagnement spécifique ?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Chaque parcours est unique. Contactez-nous pour discuter de vos besoins et trouver la solution la plus adaptée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <CalendarCheck className="h-4 w-4" />
              Prendre rendez-vous
            </Link>
            <a
              href="https://wa.me/22901676180021"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Discuter sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default ServicesPage;
