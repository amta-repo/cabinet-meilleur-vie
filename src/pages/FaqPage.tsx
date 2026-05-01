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
        a: "Vous pouvez prendre rendez-vous par téléphone, via WhatsApp ou en remplissant le formulaire de contact sur notre site. Nous vous répondons rapidement pour confirmer votre créneau.",
      },
      {
        q: "Combien coûte une consultation ?",
        a: "Les tarifs varient selon le type de prestation. Contactez-nous directement pour obtenir les tarifs détaillés et les options adaptées à votre situation.",
      },
      {
        q: "Les consultations peuvent-elles se faire à distance ?",
        a: "Oui, nous proposons des consultations en ligne via visioconférence. Elles offrent la même qualité d’accompagnement qu’en présentiel.",
      },

      // PAA INTEGRATION
      {
        q: "Quels sont les symptômes pour aller voir un psychiatre ?",
        a: "Il est conseillé de consulter si vous ressentez anxiété persistante, tristesse prolongée, troubles du sommeil ou difficultés à fonctionner au quotidien. Ces signes peuvent indiquer un besoin d’accompagnement.",
      },
      {
        q: "À quoi s’attendre lors d’une consultation chez un psychiatre ?",
        a: "La consultation permet de discuter librement de votre état émotionnel, d’analyser vos difficultés et de définir un accompagnement adapté dans un cadre confidentiel.",
      },
      {
        q: "À quoi s’attendre lors du premier rendez-vous en santé mentale ?",
        a: "Le premier rendez-vous permet de comprendre votre situation, poser vos objectifs et instaurer un climat de confiance avec le professionnel.",
      },
      {
        q: "Combien de séances faut-il pour établir un diagnostic ?",
        a: "Un diagnostic peut généralement être établi en 1 à 3 séances selon la complexité de votre situation.",
      },
      {
        q: "Quelles sont les questions posées par un psychiatre ?",
        a: "Le professionnel aborde votre humeur, votre sommeil, votre stress, vos relations et votre histoire personnelle pour évaluer votre état mental.",
      },
      {
        q: "Comment se comporter devant un psychiatre ?",
        a: "Soyez simplement honnête et naturel. Il n’y a pas de bonne ou mauvaise réponse. L’objectif est de vous comprendre, pas de vous juger.",
      },
      {
        q: "Est-ce acceptable de pleurer lors d’une consultation ?",
        a: "Oui, c’est tout à fait normal. Une consultation est un espace sécurisé pour exprimer librement vos émotions.",
      },
    ],
  },

  {
    title: "Confidentialité & déontologie",
    faqs: [
      {
        q: "Est-ce que les consultations sont confidentielles ?",
        a: "Oui, toutes les consultations sont strictement confidentielles, conformément au code de déontologie des psychologues.",
      },
      {
        q: "Qui peut consulter un psychologue ?",
        a: "Tout le monde peut consulter, sans condition particulière. Il n’est pas nécessaire d’avoir un trouble pour demander de l’aide.",
      },
      {
        q: "Quelle est la différence entre un psychologue et un psychiatre ?",
        a: "Le psychologue travaille par la parole. Le psychiatre est médecin et peut prescrire des médicaments.",
      },

      // PAA ADDITIONS
      {
        q: "Pourquoi aller voir un psychiatre plutôt qu’un psychologue ?",
        a: "Le psychiatre est adapté lorsque les troubles nécessitent un suivi médical ou un traitement médicamenteux.",
      },
      {
        q: "Quelle est la différence entre un psychiatre et un neurologue ?",
        a: "Le psychiatre traite les troubles mentaux, tandis que le neurologue s’occupe des maladies du système nerveux.",
      },
      {
        q: "Que ne faut-il pas dire lors d'une évaluation de santé mentale ?",
        a: "Il est préférable d’être sincère. Cacher des informations peut rendre l’évaluation moins précise et ralentir votre progression.",
      },
    ],
  },

  {
    title: "Services spécifiques",
    faqs: [
      {
        q: "En quoi consiste un bilan psychologique ?",
        a: "Il comprend des tests et entretiens pour évaluer votre fonctionnement cognitif et émotionnel, avec un rapport détaillé.",
      },
      {
        q: "Comment fonctionne l'orientation scolaire ?",
        a: "Elle inclut des tests, des entretiens et un accompagnement pour aider à choisir une voie adaptée.",
      },
      {
        q: "Proposez-vous des formations pour les entreprises ?",
        a: "Oui, nous proposons des formations en gestion du stress, communication et bien-être au travail.",
      },
      {
        q: "Accompagnez-vous les enfants en difficulté scolaire ?",
        a: "Oui, avec un suivi personnalisé adapté aux besoins de chaque enfant.",
      },

      // MASS SEO BLOCK
      {
        q: "Qu’est-ce que la santé mentale ?",
        a: "La santé mentale est un état de bien-être qui permet de gérer le stress, travailler efficacement et maintenir des relations saines.",
      },
      {
        q: "Pourquoi la santé mentale est-elle importante ?",
        a: "Elle influence la qualité de vie, les relations et la capacité à faire face aux défis du quotidien.",
      },
      {
        q: "Quels sont les signes d’une bonne santé mentale ?",
        a: "Stabilité émotionnelle, gestion du stress, relations saines et estime de soi.",
      },
      {
        q: "Quels sont les 5 troubles psychiatriques majeurs ?",
        a: "Ils incluent dépression, troubles anxieux, schizophrénie, troubles bipolaires et troubles de la personnalité.",
      },
      {
        q: "Que se passe-t-il si une maladie mentale n'est pas traitée ?",
        a: "Elle peut s’aggraver et impacter la vie personnelle, sociale et professionnelle.",
      },
      {
        q: "Peut-on vivre normalement avec une maladie mentale ?",
        a: "Oui, avec un suivi adapté, il est possible de mener une vie équilibrée.",
      },
      {
        q: "Quelles sont les 7 astuces pour améliorer sa santé mentale ?",
        a: "Dormir suffisamment, gérer le stress, parler à quelqu’un, faire du sport, manger équilibré, se reposer et demander de l’aide si nécessaire.",
      },
      {
        q: "Comment calmer une crise de stress ?",
        a: "Respiration lente, isolement temporaire, relaxation et recentrage sur le moment présent.",
      },
      {
        q: "Qu’est-ce que la méthode 5-4-3-2-1 ?",
        a: "Une technique d’ancrage basée sur les sens pour réduire l’anxiété rapidement.",
      },
      {
        q: "Comment arrêter de se sentir anxieux en permanence ?",
        a: "Identifier les causes, pratiquer la relaxation et consulter un professionnel si nécessaire.",
      },
      {
        q: "Combien de temps peut durer le stress chronique ?",
        a: "Il peut durer des semaines ou des mois s’il n’est pas pris en charge.",
      },
      {
        q: "Quels sont les effets du stress sur le corps ?",
        a: "Fatigue, troubles du sommeil, tensions musculaires et affaiblissement du système immunitaire.",
      },
      {
        q: "Quels aliments aident à réduire le stress ?",
        a: "Les fruits, légumes, aliments riches en magnésium et oméga-3.",
      },
      {
        q: "Quel est le pire ennemi du cerveau ?",
        a: "Le stress chronique, le manque de sommeil et une mauvaise hygiène de vie.",
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
              href="https://wa.me/22994390295?text=Bonjour%2C%20j%27ai%20une%20question%20sur%20vos%20services."
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
