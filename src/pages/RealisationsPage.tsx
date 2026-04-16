import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Star, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHeader from "@/components/PageHeader";
import headerBg from "@/assets/header-temoignages.jpg";

const DOMAIN = "https://cabinetmeilleurvie.com";

const testimonials = [
  { text: "Je stresse moins qu'avant, les douleurs qui m'ont poussée à venir dans ce cabinet ont diminué à 80% déjà.", motivation: "L'écoute et la bienveillance des praticiens, la qualité de l'accompagnement et des séances, l'ambiance et le cadre du cabinet, l'organisation et l'accueil", rating: 5 },
  { text: "J'ai plus confiance en moi.", motivation: "L'organisation et l'accueil", rating: 5 },
  { text: "Je me suis sentie bien à chaque consultation.", motivation: "La qualité de l'accompagnement et des séances", rating: 5 },
  { text: "Je me sens très bien à chaque consultation.", motivation: "La qualité de l'accompagnement et des séances", rating: 5 },
  { text: "Une stabilité dans ma vie sentimentale.", motivation: "L'écoute et la bienveillance des praticiens", rating: 5 },
  { text: "Je me sens mieux et je m'accepte mieux. J'ai mieux repris confiance en moi.", motivation: "L'écoute et la bienveillance des praticiens", rating: 5 },
  { text: "Au début, avant de commencer les consultations au cabinet, j'avais beaucoup de mal avec les enfants de 0 à 3 ans. Je n'étais pas du tout à l'aise avec eux. Puis j'ai commencé la thérapie avec le Dr ANTONIO qui avec des discussions et des exercices ainsi que des apports de solutions m'a aidé à trouver la source de ce mal. Nous avions beaucoup travaillé dessus et aujourd'hui je suis plus qu'à l'aise avec les enfants. Et j'ai beaucoup de plaisir à les côtoyer.", motivation: "La qualité de l'accompagnement et des séances", rating: 5 },
];

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Cabinet Meilleure Vie",
  url: DOMAIN,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: String(testimonials.length),
    bestRating: "5",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: String(t.rating) },
    reviewBody: t.text,
    author: { "@type": "Person", name: "Anonyme" },
  })),
};

const RealisationsPage = () => (
  <>
    <Helmet>
      <title>Témoignages | Cabinet Meilleure Vie Cotonou - Avis Patients</title>
      <meta name="description" content="Découvrez les témoignages anonymes de nos patients. Cabinet Meilleure Vie : écoute, bienveillance et résultats concrets à Cotonou, Bénin." />
      <link rel="canonical" href={`${DOMAIN}/realisations`} />
      <meta property="og:title" content="Témoignages | Cabinet Meilleure Vie" />
      <meta property="og:url" content={`${DOMAIN}/realisations`} />
      <script type="application/ld+json">{JSON.stringify(reviewJsonLd)}</script>
    </Helmet>

    <Navbar />
    <main>
      <PageHeader
        badge="Témoignages"
        title="Ce que disent nos patients"
        subtitle="Chaque témoignage reflète notre engagement pour votre bien-être et votre réussite."
        bgImage={headerBg}
      />

      {/* Google Reviews widget placeholder */}
      <section className="bg-secondary py-10">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3" style={{ boxShadow: "var(--card-shadow)" }}>
            <img src="https://www.google.com/favicon.ico" alt="Google" className="h-5 w-5" />
            <span className="text-sm font-medium text-foreground">Avis vérifiés</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-star text-star" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">5.0</span>
            <a
              href="https://www.google.com/maps/place/CABINET+MEILLEURE+VIE/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:underline ml-2"
            >
              Voir sur Google Maps →
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <article key={i} className="rounded-xl bg-card p-6 hover-lift" style={{ boxShadow: "var(--card-shadow)" }}>
                <Quote className="h-8 w-8 text-accent/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-star text-star" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                <p className="mt-3 text-xs text-accent font-medium">{t.motivation}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-sm">
                    A
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Anonyme</p>
                    <p className="text-xs text-muted-foreground">Patient(e) vérifié(e)</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary section-padding">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Vous aussi, prenez soin de vous</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Rejoignez nos patients satisfaits et commencez votre chemin vers le bien-être.
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

export default RealisationsPage;
