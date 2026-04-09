import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHeader from "@/components/PageHeader";
import headerBg from "@/assets/header-faq.jpg";

const faqCategories = [
  {
    title: "Consultations & rendez-vous",
    faqs: [
      {
        q: "Comment se déroule une consultation psychologique ?",
        a: "La première consultation est un entretien d'accueil d'environ 45 à 60 minutes. Le psychologue vous écoute, comprend votre demande et définit avec vous les objectifs de l'accompagnement. Les séances suivantes durent généralement 45 minutes et sont adaptées à vos besoins spécifiques.",
      },
      {
        q: "Comment prendre rendez-vous ?",
        a: "Vous pouvez prendre rendez-vous par téléphone au +229 01 94 39 02 95, via WhatsApp, ou en remplissant le formulaire de contact sur notre site. Nous vous répondons dans les plus brefs délais.",
      },
      {
        q: "Combien coûte une consultation ?",
        a: "Les tarifs varient selon le type de prestation (consultation individuelle, bilan psychologique, formation…). Contactez-nous pour obtenir nos tarifs détaillés. Nous proposons des solutions adaptées à différents budgets.",
      },
      {
        q: "Les consultations peuvent-elles se faire à distance ?",
        a: "Oui, nous proposons des consultations en visioconférence pour les personnes qui ne peuvent pas se déplacer. L'efficacité de l'accompagnement est maintenue grâce à nos outils adaptés.",
      },
    ],
  },
  {
    title: "Confidentialité & déontologie",
    faqs: [
      {
        q: "Est-ce que les consultations sont confidentielles ?",
        a: "Absolument. Le secret professionnel est un pilier fondamental de notre pratique. Tout ce qui est partagé en consultation reste strictement confidentiel, conformément au code de déontologie des psychologues.",
      },
      {
        q: "Qui peut consulter un psychologue ?",
        a: "Tout le monde peut consulter : enfants, adolescents, adultes, couples et familles. Il n'est pas nécessaire d'avoir un trouble diagnostiqué. On peut consulter pour mieux se connaître, traverser une période difficile, ou simplement améliorer sa qualité de vie.",
      },
      {
        q: "Quelle est la différence entre un psychologue et un psychiatre ?",
        a: "Le psychologue utilise la parole et des techniques thérapeutiques pour accompagner ses patients. Le psychiatre est un médecin qui peut prescrire des médicaments. Notre cabinet collabore avec des psychiatres lorsqu'un traitement médicamenteux est nécessaire.",
      },
    ],
  },
  {
    title: "Services spécifiques",
    faqs: [
      {
        q: "En quoi consiste un bilan psychologique ?",
        a: "Un bilan psychologique comprend des tests standardisés et des entretiens pour évaluer le fonctionnement cognitif, émotionnel et comportemental. Il aboutit à un rapport détaillé avec des recommandations personnalisées.",
      },
      {
        q: "Comment fonctionne l'orientation scolaire ?",
        a: "L'orientation scolaire inclut un bilan d'intérêts et d'aptitudes, des entretiens approfondis et une exploration des filières et métiers. Nous aidons l'élève à faire des choix éclairés en fonction de ses talents et aspirations.",
      },
      {
        q: "Proposez-vous des formations pour les entreprises ?",
        a: "Oui, nous proposons des formations sur mesure pour les entreprises : gestion du stress, communication, leadership, santé mentale au travail, etc. Contactez-nous pour un programme adapté à vos besoins.",
      },
      {
        q: "Accompagnez-vous les enfants en difficulté scolaire ?",
        a: "Oui, nous proposons un suivi psycho-éducatif spécialisé pour les enfants et adolescents en difficulté scolaire. Nous identifions les causes (troubles de l'attention, anxiété, problèmes familiaux…) et mettons en place un accompagnement adapté.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((cat) =>
    cat.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    }))
  ),
};

const FaqPage = () => (
  <>
    <Helmet>
      <title>FAQ Psychologue Cotonou | Cabinet Meilleure Vie - Questions Fréquentes</title>
      <meta name="description" content="Réponses à vos questions sur la consultation psychologique à Cotonou : déroulement, confidentialité, tarifs, bilans, orientation scolaire. Cabinet Meilleure Vie." />
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
    </Helmet>

    <Navbar />
    <main>
      <PageHeader
        badge="FAQ"
        title="Questions fréquentes"
        subtitle="Tout ce que vous devez savoir sur nos services de psychologie et d'éducation."
        bgImage={headerBg}
      />

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl space-y-12">
          {faqCategories.map((cat) => (
            <div key={cat.title}>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">{cat.title}</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {cat.faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`${cat.title}-${i}`}
                    className="rounded-xl bg-card border-none px-6"
                    style={{ boxShadow: "var(--card-shadow)" }}
                  >
                    <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-foreground hover:no-underline py-5">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary section-padding">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Vous avez d'autres questions ?</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Notre équipe est disponible pour répondre à toutes vos questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
            >
              Nous contacter
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/2290194390295?text=Bonjour%2C%20j%27ai%20une%20question%20sur%20vos%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Poser une question sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default FaqPage;
