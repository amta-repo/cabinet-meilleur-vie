import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Star, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHeader from "@/components/PageHeader";
import headerBg from "@/assets/header-temoignages.jpg";
import { testimonials, averageRating } from "@/data/testimonials";

const DOMAIN = "https://cabinetmeilleurvie.com";


const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Cabinet Meilleure Vie",
  url: DOMAIN,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(averageRating),
    reviewCount: String(testimonials.length),
    bestRating: "5",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: String(t.rating) },
    reviewBody: t.text,
    author: { "@type": "Person", name: t.name || "Anonyme" },
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
              href="https://www.google.com/maps/place/CABINET+MEILLEURE+VIE/@6.3892618,2.3144574,17z/data=!3m1!4b1!4m6!3m5!1s0x102357003f5ebd47:0xafbf9f3002f4d23!8m2!3d6.3892565!4d2.3170323!16s%2Fg%2F11lctvjgdb?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
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
                    {t.name?.charAt(0).toUpperCase() || "A"}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
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
