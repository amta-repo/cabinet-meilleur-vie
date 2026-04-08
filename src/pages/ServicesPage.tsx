import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Brain, Heart, Search, Compass, GraduationCap, BookOpen, Users, Leaf, ArrowRight, CheckCircle, CalendarCheck, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  {
    icon: Brain,
    title: "Consultations psychologiques & psychiatriques",
    desc: "Un espace d'écoute confidentiel pour explorer vos difficultés et trouver des solutions adaptées.",
    details: [
      "Écoute active et bienveillante",
      "Thérapies individuelles, de couple et familiales",
      "Suivi régulier et personnalisé",
      "Gestion des émotions et du stress",
      "Accompagnement vers le mieux-être",
      "Consultations en présentiel et à distance",
    ],
  },
  {
    icon: Heart,
    title: "Prise en charge des souffrances psychologiques",
    desc: "Accompagnement spécialisé pour l'anxiété, la dépression, les traumatismes et le stress chronique.",
    details: [
      "Traitement de l'anxiété et des phobies",
      "Accompagnement de la dépression",
      "Prise en charge du stress post-traumatique",
      "Gestion du burn-out professionnel",
      "Soutien dans le deuil et les pertes",
      "Thérapies brèves et approches intégratives",
    ],
  },
  {
    icon: Search,
    title: "Bilans psychologiques et tests",
    desc: "Évaluations approfondies pour mieux comprendre le fonctionnement cognitif, émotionnel et comportemental.",
    details: [
      "Bilans intellectuels (QI) enfants et adultes",
      "Évaluations neuropsychologiques",
      "Tests de personnalité",
      "Bilans d'aptitudes et de compétences",
      "Rapports détaillés et recommandations",
      "Restitution et accompagnement post-bilan",
    ],
  },
  {
    icon: Compass,
    title: "Orientation scolaire, affective et professionnelle",
    desc: "Guidance éclairée pour des choix de vie et de carrière alignés avec vos aspirations profondes.",
    details: [
      "Bilan d'orientation scolaire",
      "Conseil en choix de filière et d'université",
      "Orientation professionnelle et reconversion",
      "Accompagnement dans les transitions de vie",
      "Coaching de carrière personnalisé",
      "Développement des compétences relationnelles",
    ],
  },
  {
    icon: GraduationCap,
    title: "Prévention des échecs scolaires",
    desc: "Suivi psycho-éducatif pour aider les enfants et adolescents à réussir leur parcours académique.",
    details: [
      "Diagnostic des difficultés d'apprentissage",
      "Stratégies d'étude personnalisées",
      "Renforcement de la confiance en soi",
      "Accompagnement des troubles de l'attention",
      "Médiation scolaire parents-enseignants",
      "Ateliers de méthodologie de travail",
    ],
  },
  {
    icon: BookOpen,
    title: "Formations professionnelles & ateliers",
    desc: "Programmes de formation et ateliers pour le développement personnel et professionnel.",
    details: [
      "Gestion du stress en entreprise",
      "Communication non violente",
      "Leadership et intelligence émotionnelle",
      "Ateliers de développement personnel",
      "Formation en genre et environnement",
      "Séminaires sur la santé mentale au travail",
    ],
  },
  {
    icon: Users,
    title: "Expertise-recherche, études et enquêtes",
    desc: "Études et recherches en psychologie, éducation, genre et environnement pour les organisations.",
    details: [
      "Études de terrain et enquêtes sociales",
      "Recherches en psychologie appliquée",
      "Évaluation de programmes éducatifs",
      "Consultation en genre et inclusion",
      "Rapports d'expertise pour institutions",
      "Accompagnement en politiques publiques",
    ],
  },
  {
    icon: Leaf,
    title: "Suivi psycho-éducatif, Genre & Environnement",
    desc: "Accompagnement transversal intégrant les dimensions psychologiques, de genre et environnementales.",
    details: [
      "Suivi psychologique continu",
      "Intégration de la dimension genre",
      "Sensibilisation environnementale",
      "Accompagnement communautaire",
      "Programmes de résilience sociale",
      "Projets d'impact social et éducatif",
    ],
  },
];

const ServicesPage = () => (
  <>
    <Helmet>
      <title>Nos Services | Cabinet Meilleure Vie Cotonou - Psychologie & Éducation</title>
      <meta name="description" content="Découvrez les services du Cabinet Meilleure Vie : consultations psychologiques, bilans, orientation scolaire, formations et expertise-recherche à Cotonou, Bénin." />
    </Helmet>

    <Navbar />
    <main>
      <section className="bg-primary pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container mx-auto text-center">
          <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground mb-4">
            Nos Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground max-w-3xl mx-auto leading-tight">
            Un accompagnement complet pour votre bien-être
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-primary-foreground/70">
            Consultation, formation et expertise en psychologie et sciences de l'éducation à Cotonou.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto space-y-20">
          {services.map((s, i) => (
            <div key={s.title} className={`grid gap-10 lg:grid-cols-2 items-center`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{s.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-3 mb-8">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{d}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
                  >
                    <CalendarCheck className="h-4 w-4" />
                    Prendre rendez-vous
                  </Link>
                  <a
                    href="https://wa.me/2290194390295?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="w-full rounded-2xl bg-secondary aspect-[4/3] flex items-center justify-center">
                  <s.icon className="h-20 w-20 text-accent/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-accent section-padding">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-accent-foreground">Prêt à prendre soin de votre bien-être ?</h2>
          <p className="mt-3 text-accent-foreground/80 max-w-lg mx-auto">
            Prenez rendez-vous dès aujourd'hui pour une consultation confidentielle et bienveillante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Prendre rendez-vous
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default ServicesPage;
