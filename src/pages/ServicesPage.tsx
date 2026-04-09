import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Brain, Heart, Search, Compass, GraduationCap, BookOpen, Users, Leaf, ArrowRight, CheckCircle, CalendarCheck, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHeader from "@/components/PageHeader";
import headerBg from "@/assets/header-services.jpg";

const services = [
  {
    category: "Psychologie Clinique",
    icon: Brain,
    items: [
      { title: "Thérapie individuelle", desc: "Accompagnement personnalisé pour surmonter l'anxiété, la dépression et les traumatismes." },
      { title: "Thérapie de couple", desc: "Un espace pour restaurer la communication et renforcer les liens affectifs." },
      { title: "Soutien familial", desc: "Résolution des conflits et amélioration de la dynamique au sein de la famille." },
    ]
  },
  {
    category: "Éducation & Orientation",
    icon: GraduationCap,
    items: [
      { title: "Orientation scolaire", desc: "Aider les jeunes à choisir une voie en accord avec leurs aspirations et capacités." },
      { title: "Soutien aux apprentissages", desc: "Stratégies pour surmonter les difficultés scolaires et booster la motivation." },
      { title: "Coaching éducatif", desc: "Accompagnement des parents et des enseignants pour un meilleur encadrement." },
    ]
  },
  {
    category: "Développement Personnel",
    icon: Compass,
    items: [
      { title: "Gestion du stress", desc: "Techniques pratiques pour retrouver sérénité et équilibre au quotidien." },
      { title: "Confiance en soi", desc: "Programmes pour libérer votre potentiel et affirmer votre personnalité." },
      { title: "Développement des compétences", desc: "Ateliers pour améliorer votre intelligence émotionnelle et relationnelle." },
    ]
  }
];

const ServicesPage = () => (
  <>
    <Helmet>
      <title>Nos Services | Cabinet Meilleure Vie Cotonou</title>
      <meta name="description" content="Découvrez nos services de psychologie, d'orientation scolaire et de développement personnel à Cotonou." />
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
          <div className="grid gap-12">
            {services.map((section) => (
              <div key={section.category}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent">
                    <section.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{section.category}</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  {section.items.map((item) => (
                    <div key={item.title} className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors">
                      <CheckCircle className="h-6 w-6 text-accent mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
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
              href="https://wa.me/2290194390295"
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
