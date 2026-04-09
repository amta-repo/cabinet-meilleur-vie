import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Star, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHeader from "@/components/PageHeader";
import headerBg from "@/assets/header-temoignages.jpg";

const testimonials = [
  { text: "Grâce au Cabinet Meilleure Vie, j'ai pu surmonter une période très difficile de ma vie. L'écoute bienveillante et le professionnalisme de l'équipe m'ont redonné confiance.", name: "Marie K.", role: "Patiente – consultation individuelle", rating: 5 },
  { text: "L'orientation scolaire de mon fils a été un véritable tournant. Il est maintenant épanoui dans sa filière et ses résultats se sont nettement améliorés.", name: "Jean-Pierre D.", role: "Parent – orientation scolaire", rating: 5 },
  { text: "Les formations sur la gestion du stress ont transformé mon quotidien professionnel. Toute mon équipe en a bénéficié. Je recommande vivement.", name: "Aïcha S.", role: "Directrice RH – formation entreprise", rating: 5 },
  { text: "Le bilan psychologique de ma fille nous a permis de mieux comprendre ses difficultés d'apprentissage. L'accompagnement a été très professionnel et humain.", name: "Françoise A.", role: "Parent – bilan psychologique", rating: 5 },
  { text: "Je suis venue pour de l'anxiété chronique et j'ai trouvé une équipe véritablement à l'écoute. Les séances m'ont appris à gérer mes crises et à retrouver un quotidien paisible.", name: "Sonia M.", role: "Patiente – gestion de l'anxiété", rating: 5 },
  { text: "L'expertise-recherche réalisée pour notre ONG a été d'une qualité remarquable. Les recommandations du Cabinet ont enrichi notre programme éducatif.", name: "Dr. Koffi B.", role: "Directeur ONG – expertise-recherche", rating: 5 },
];

const RealisationsPage = () => (
  <>
    <Helmet>
      <title>Témoignages | Cabinet Meilleure Vie Cotonou - Avis Patients</title>
      <meta name="description" content="Découvrez les témoignages de nos patients. Cabinet Meilleure Vie, psychologue à Cotonou : accompagnement personnalisé et résultats concrets." />
    </Helmet>

    <Navbar />
    <main>
      <PageHeader
        badge="Témoignages"
        title="Ce que disent nos patients"
        subtitle="Chaque témoignage reflète notre engagement pour votre bien-être et votre réussite."
        bgImage={headerBg}
      />

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-xl bg-card p-6 hover-lift" style={{ boxShadow: "var(--card-shadow)" }}>
                <Quote className="h-8 w-8 text-accent/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
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
