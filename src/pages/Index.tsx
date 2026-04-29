import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  MessageCircle,
  CalendarCheck,
  ArrowRight,
  Brain,
  Heart,
  BookOpen,
  Compass,
  Star,
  Shield,
  Lock,
  Eye,
  HandHeart,
  GraduationCap,
  ClipboardList,
  CalendarDays,
  Sparkles,
  Users,
  Video,
  MessageSquare,
  Target,
  Briefcase,
  Activity,
  Award,
  ShieldCheck,
  Smile,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useCountUp } from "@/hooks/useCountUp";
import heroSlide1 from "@/assets/hero-slide1.jpg";
import heroSlide2 from "@/assets/slider2.jpg";
import svcPsychometrique from "@/assets/service-psychometrique.jpg";
import svcFormationPluri from "@/assets/service-formation-pluri.jpg";
import svcFormationPsy from "@/assets/service-formation-psy.jpg";
import svcPsyPro from "@/assets/service-psy-pro.jpg";
import svcPsychiatrie from "@/assets/service-psychiatrie.jpg";
import svcPedoPsychiatrie from "@/assets/service-pedopsychiatrie.jpg";
import partner1 from "@/assets/partner 1.jpeg";
import partner2 from "@/assets/partner 2.jpeg";
import partner3 from "@/assets/Partner 3.jpeg";
import partner4 from "@/assets/Partner 4.png";
import dgImg from "@/assets/dg-agossou.jpg";
import assistantImg from "@/assets/assistant-psy.jpg";
import assistantPsyImgTon from "@/assets/assistant-tongnon.jpg";
import commDigitaleImg from "@/assets/chargee-comm-digitale.jpg";
import bgNotreValeurs from "@/assets/bg-notre-valeurs.jpg";

const DOMAIN = "https://cabinetmeilleurvie.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  name: "Cabinet Meilleure Vie",
  description: "Cabinet de Consultation, Formation et Expertise-Recherche en Psychologie, Éducation, Genre et Environnement à Abomey-Calavi, Bénin.",
  url: DOMAIN,
  telephone: ["+2290167618021", "+2290194390295"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Atrokpocodji, 4ème rue après le séminaire Jean-Eude, première rue à droite et deuxième maison",
    addressLocality: "Abomey-Calavi",
    addressCountry: "BJ",
  },
  geo: { "@type": "GeoCoordinates", latitude: 6.3893166, longitude: 2.3170377 },
  areaServed: "Bénin",
  medicalSpecialty: ["Psychology", "Psychiatry", "Pedopsychiatry", "Psychometry"],
  sameAs: [
    "https://www.facebook.com/Meilleurvie",
    "https://www.instagram.com/Meilleurvie1",
    "https://x.com/cabinetvie",
  ],
};

const slides = [heroSlide1, heroSlide2];

const serviceCards = [
  {
    img: svcPsyPro,
    title: "Services Psychologiques",
    desc: "Psychothérapie analytique individuelle, du couple, familiale, analyse de soi, thérapie de groupe en entreprise et accompagnement scolaire.",
    slug: "services-psychologiques",
  },

  // the newly created service -1
  {
    img: svcPedoPsychiatrie,
    title: "Services Pédopsychiatriques",
    desc: "Destinée aux enfants et adolescents (généralement de 0 à 18 ans). Identification des troubles du neurodéveloppement, suivi médical et pharmacologique, guidance parentale.",
    slug: "services-pédopsychiatrie",
  },

  {
    img: svcPsychiatrie,
    title: "Services Psychiatriques",
    desc: "Traitement des pathologies mentales de l'adulte via la parole et la biologie. Suivi des troubles courants et expertise en santé mentale.",
    slug: "services-psychiatriques",
  },

//  the newly created service -2
  {
    img: svcPsychometrique,
    title: "Services d'Evaluation",
    desc: "Tests de personnalité, échelles d'évaluation, tests projectifs et actuariels. Tests psychotechniques de mémoire, de culture générale et de motivation.",
    slug: "serivices-evaluation",
  },

   {
    img: svcFormationPsy,
    title: "Formations Psychologiques",
    desc: "Certificats en hypnose jungienne, psychosocial, protection de l'enfant, pris en charge VBG.",
    slug: "formations-psychologiques",
  },
  
  {
    img: svcFormationPluri,
    title: "Formations Pluridisciplinaires",
    desc: "Gestion de projet, rédaction de projets d'établissement, discipline positive, TICE et méthodologie de recherche scientifique.",
    slug: "formations-pluridisciplinaires",
  },
];

const testimonials = [
  { text: "Je stresse moins qu'avant, les douleurs qui m'ont poussée à venir dans ce cabinet ont diminué à 80% déjà.", motivation: "L'écoute et la bienveillance des praticiens", name: "Anonyme" },
  { text: "J'ai plus confiance en moi.", motivation: "L'organisation et l'accueil", name: "Anonyme" },
  { text: "Très Professionnel.", motivation: "Prince Zékoulékou Prof Backras", name: "Prince Zékoulékou Prof Backras" },
  { text: "Bien.", motivation: "Marios Tohon", name: "Marios Tohon" },
  { text: "Un accompagnement de qualité, je recommande.", motivation: "Faysale Ilboudo", name: "Faysale Ilboudo" },
  { text: "Je me sens mieux et je m'accepte mieux. J'ai mieux repris confiance en moi.", motivation: "L'écoute et la bienveillance des praticiens", name: "Anonyme" },
];

const teamMembers = [
  {
    name: "Agossou SAGBO",
    role: "Directeur Général – Psychologue Clinicien, Psychopathologue et Psychanalyste jungien",
    img: dgImg,
    bio: "Psychologue clinicien de formation et fondateur du Cabinet Meilleure Vie.",
  },
  {
    name: "ANTONIO Fêmi C.",
    role: "Assistante Psychologue",
    img: assistantImg,
    bio: "Responsable du Service Clinique et d'Expertise au Cabinet Meilleure Vie.",
  },
  {
    name: "M. TOGNON Marcos",
    role: "Assistant Psychologue",
    img: assistantPsyImgTon,
    bio: "Responsable du Service Technique et attaché du Service Clinique et d'Expertise au Cabinet Meilleure Vie.",
  },
  {
    name: "Sèdjro Florida TONAKPA",
    role: "Chargée de communication digitale",
    img: commDigitaleImg,
    bio: "Chargée de communication digitale et partenaire du Cabinet Meilleure Vie.",
  },
];

const teamSliderItems = [...teamMembers,];

  const calendarEvents = [
  {
    date: "04 Mai",
    title: "Début de 10 Jrs d’activisme pour comprendre et prévenir les addictions",
    description: "Lancement d'une campagne d'activisme dédiée à la prévention des addictions et à la compréhension des mécanismes de dépendance.",
    color: "bg-emerald-500",
    icon: Activity,
  },
  {
    date: "14 Mai",
    title: "Formation Hypnose jungienne",
    description: "Session de formation spécialisée pour les professionnels souhaitant approfondir les techniques d'hypnose jungienne.",
    color: "bg-violet-500",
    icon: Sparkles,
  },
  {
    date: "30 Mai",
    title: "Fin de la sensibilisation digitale sur l’importance d’un bilan psychologique",
    description: "Clôture de la campagne digitale axée sur l'importance du bilan psychologique pour mieux comprendre son état mental.",
    color: "bg-sky-500",
    icon: CalendarDays,
  },
  {
    date: "8 Juin",
    title: "2e session de formation auxiliaire de l’enfant",
    description: "Deuxième session de formation dédiée aux auxiliaires travaillant avec les enfants et les adolescents.",
    color: "bg-orange-500",
    icon: Users,
  },
  {
    date: "11 Septembre",
    title: "Sensibilisation sur le suicide avec Youth 4 Leader",
    description: "Une sensibilisation cruciale sur la prévention du suicide en partenariat avec Youth 4 Leader.",
    color: "bg-red-500",
    icon: MessageSquare,
  },
  {
    date: "5-10 Octobre",
    title: "Formation sur l’intervention psychosociale en contexte Humanitaire",
    description: "Programme intensif de formation sur l'intervention psychosociale en situation humanitaire.",
    color: "bg-fuchsia-500",
    icon: Briefcase,
  },
  {
    date: "10 Octobre",
    title: "Message virtuel sur la santé mentale",
    description: "Intervention virtuelle sur les bonnes pratiques de santé mentale et de bien-être psychologique.",
    color: "bg-cyan-500",
    icon: Video,
  },
  {
    date: "12 Novembre",
    title: "Formations professionnelles payantes en interprétations psychanalytique des rêves",
    description: "Formation certifiante sur l'interprétation psychanalytique des rêves pour professionnels de la psychologie.",
    color: "bg-amber-500",
    icon: BookOpen,
  },
  {
    date: "30 Décembre",
    title: "Atelier thérapeutique sur le bilan émotionnel et la projection",
    description: "Atelier de fin d'année centré sur le bilan émotionnel et la projection vers une meilleure vie.",
    color: "bg-rose-500",
    icon: Heart,
  },
];

const partnerLogos = [partner1, partner2, partner3, partner4];

const CounterCard = ({ 
  end, 
  suffix, 
  label, 
  icon: Icon, 
  bgColor 
}: { 
  end: number; 
  suffix: string; 
  label: string; 
  icon: any; 
  bgColor: string; 
}) => {
  const { count, ref } = useCountUp(end, 2000);
  return (
    <div 
      ref={ref} 
      className={`${bgColor} text-center p-6 rounded-xl flex flex-col items-center justify-center h-52`} 
      style={{ boxShadow: "var(--card-shadow)" }}
    >
      <Icon className="h-10 w-10 text-white/50 mb-3" />
      <p className="text-3xl sm:text-4xl font-bold text-white">{count}{suffix}</p>
      <p className="mt-2 text-sm text-white/80">{label}</p>
    </div>
  );
};


const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<typeof calendarEvents[number] | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((p) => (p + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <>
      <Helmet>
        <title>Cabinet Meilleure Vie | Psychologie, Psychiatrie et Psychanalyse, Abomey-Calavi - Santé Mentale Bénin</title>
        <meta name="description" content="Cabinet Meilleure Vie : votre cabinet qui vous garantit la santé mentale au quotidien. Consultation psychologique, formations et expertise à Abomey-Calavi, Bénin." />
        <meta name="keywords" content="cabinet psychologie Abomey-Calavi, psychologue Bénin, santé mentale Abomey-Calavi, consultation psychologique Bénin, bilan psychologique, orientation scolaire Abomey-Calavi, psychothérapie Bénin, formation psychologique Afrique" />
        <link rel="canonical" href={DOMAIN} />
        <meta property="og:title" content="Cabinet Meilleure Vie - Psychologie & Éducation à Abomey-Calavi, Bénin" />
        <meta property="og:description" content="Votre cabinet qui vous garantit la santé mentale au quotidien." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={DOMAIN} />
        <meta property="og:locale" content="fr_BJ" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />
      <main>
        {/* Hero with Slider */}
        <section className="section-padding relative relative min-h-[130vh] flex items-center overflow-hidden">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ opacity: currentSlide === i ? 1 : 0 }}
            >
              <img
                src={slide}
                alt={`Cabinet Meilleure Vie - Consultation psychologique à Abomey-Calavi ${i + 1}`}
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
                {...(i === 0 ? {} : { loading: "lazy" as const })}
              />
              <div className="absolute inset-0 bg-primary/70" />
            </div>
          ))}

          <div className="container relative z-10 mx-auto pt-36 pb-20 sm:pt-40 sm:pb-24">
            <div className="grid gap-10 xl:grid-cols-[1fr_420px] items-start">
              <div className="max-w-3xl space-y-6 animate-fade-in-up">
                <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-foreground">
                🌿 Psychologie • Psychiatrie • Psychanalyse • Santé mentale - Abomey-Calavi, Bénin
                </span>

                {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-primary-foreground">
                  Faîtes-Vous Écouter - <span className="text-[#C49A6C]">Sans Être Jugé</span>
                </h1> */}
<h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-primary-foreground">
  Vous méritez d’être écouté
  <br />
  <span className="relative inline-block">
    sans jugement, en toute confiance
    <span className="absolute left-0 -bottom-2 w-full h-2 bg-accent/30 rounded"></span>
  </span>
</h1>

                <p className="max-w-xl text-base sm:text-lg text-primary-foreground/80 leading-relaxed">
                  Votre cabinet qui vous garantit la santé mentale au quotidien dans la confidentialité et dans un cadre sécurisé.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105 shadow-lg"
                  >
                    <CalendarCheck className="h-4 w-4" />
                    Prendre rendez-vous
                  </Link>
                  <a
                    href="https://wa.me/22994390295?text=Bonjour%2C%20je%20viens%20de%20visiter%20votre%20site%20et%20je%20souhaite%20prendre%20rendez-vous."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Nous contacter sur WhatsApp
                  </a>
                </div>
              </div>

              <div className="mr-4 sm:mr-6 rounded-[2px] border border-white/15 bg-background/50 p-4 sm:p-6 shadow-2xl backdrop-blur-xl max-h-[26rem] sm:max-h-none overflow-hidden">
                <div className="mb-4 sm:mb-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                    Calendrier des activités
                  </p>
                  <h2 className="mt-3 text-xl sm:text-2xl font-bold text-foreground">Événements majeurs 2026</h2>
                  <p className="mt-2 text-sm text-navy-blue leading-relaxed">
                    Cliquez sur un événement pour découvrir tous les détails.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 overflow-y-auto max-h-[14rem] sm:max-h-none">
                  {calendarEvents.slice(0, 9).map((event) => (
                    <button
                      key={event.date}
                      onClick={() => setSelectedEvent(event)}
                      className="group rounded-[1px] border border-border p-2 sm:p-3 text-center transition hover:border-accent/70 hover:bg-accent/10"
                    >
                      <div className={`flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-sm ${event.color} text-white mx-auto mb-2`}>
                        <event.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                      </div>
                      <span className="text-xs font-semibold text-foreground block">{event.date}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </section>

       <div className="bg-white py-12 px-4 border-y border-slate-200">
  {/* grid-cols-1 (Mobile) | sm:grid-cols-2 (Tablet) | lg:grid-cols-4 (Desktop) */}
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <CounterCard 
      icon={Award} 
      end={10} 
      suffix="+" 
      label="Au  service de santé mentale et du bien-être" 
      bgColor="bg-[#0056b3]" 
    />
    <CounterCard 
      icon={Users} 
      end={500} 
      suffix="+" 
      label="Patients accompagnés avec succès" 
      bgColor="bg-pink-500" 
    />
    <CounterCard 
      icon={ShieldCheck} 
      end={100} 
      suffix="%" 
      label="Confidentialité garantie" 
      bgColor="bg-yellow-500" 
    />
    <CounterCard 
      icon={Smile} 
      end={98} 
      suffix="%" 
      label="Taux de satisfaction" 
      bgColor="bg-green-500" 
    />
  </div>
</div>

{/* Calendar events */}
        {selectedEvent && (
          <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80 p-4 bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-full max-w-3xl overflow-hidden rounded-[2rem] bg-background p-4 sm:p-6 shadow-2xl ring-1 ring-border">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Détail de l'événement</p>
                  <h2 className="mt-2 text-xl sm:text-2xl font-bold text-foreground">{selectedEvent.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{selectedEvent.date}</p>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-foreground/70 transition hover:text-foreground"
                  aria-label="Fermer"
                >
                  ×
                </button>
              </div>
              <div className="mt-4 sm:mt-6 space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">{selectedEvent.description}</p>
              </div>
              <div className="mt-4 sm:mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={`https://wa.me/22994390295?text=${encodeURIComponent(
                    `Bonjour, je souhaite en savoir plus sur l'événement : ${selectedEvent.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-none bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
                >
                  En Savoir Plus
                </a>
                <p className="text-sm text-muted-foreground">Cliquez sur le bouton pour discuter directement sur WhatsApp.</p>
              </div>
            </div>
          </div>
        )}

        {/* Services */}
           <section className="section-padding relative bg-gradient-to-br from-blue-100 via-blue-50 to-white" id="services">
           <div className="container mx-auto">
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,_#1e3a8a_1px,_transparent_1px)] bg-[size:22px_22px]" />
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-widest uppercase text-accent">Nos Services</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Un accompagnement complet pour votre bien-être</h2>
              <p className="mt-3 text-slate-600">
                De la consultation individuelle aux formations, Cabinet Meilleure Vie vous accompagne vers une vie épanouie.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {serviceCards.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services#${s.slug}`}
                  // className="group rounded-xl bg-white overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
                  className="group rounded-xl bg-white/90 backdrop-blur-sm border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={s.img} alt={s.title} loading="lazy" width={800} height={512} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
                      En savoir plus <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            {/* <div className="text-center mt-10">
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
                Découvrir tous nos services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div> */}

            <div className="text-center mt-10 relative z-10">
  <Link
    to="/services"
    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline cursor-pointer relative z-10"
  >
    Découvrir tous nos services
    <ArrowRight className="h-4 w-4" />
  </Link>
</div>
          </div>
        </section>

        {/* Testimonials preview */}
       <section className="section-padding relative bg-gradient-to-b from-amber-50/40 to-white">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold tracking-widest uppercase text-accent">Témoignages</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Ce que disent nos patients</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <div key={i} className="rounded-xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300" style={{ boxShadow: "var(--card-shadow)" }}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-star text-star" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                  <p className="mt-3 text-xs text-accent font-medium">{t.motivation}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-sm">
                      {t.name?.charAt(0).toUpperCase() || "A"}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">Patient(e) vérifié(e)</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/realisations" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105">
                Voir tous les témoignages
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

{/* team section */}
     <section className="section-padding relative bg-gradient-to-b from-violet-50/40 to-white">
  <div className="container mx-auto">
    <div className="text-center max-w-2xl mx-auto mb-12">
      <span className="text-xs font-semibold tracking-widest uppercase text-accent">
        Notre équipe
      </span>
      <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
        Une équipe engagée et disponible
      </h2>
      <p className="mt-3 text-slate-600">
        Découvrez notre équipe de praticiens qui avance ensemble pour votre bien-être.
      </p>
    </div>

    {/* HORIZONTAL SCROLLER */}
    <div className="flex gap-6 overflow-x-auto px-4 sm:px-6 pb-4 no-scrollbar snap-x snap-mandatory scroll-px-4 sm:scroll-px-6">
      {teamSliderItems.map((member, index) => {
        const bgVariants = [
          "bg-blue-600 text-white",
          "bg-green-600 text-white",
          "bg-yellow-400 text-black",
          "bg-rose-500 text-white",
        ];

        const bg = bgVariants[index % bgVariants.length];

        return (
          <div
            key={member.name}
            className="group relative min-w-[260px] max-w-[260px] flex-shrink-0 snap-start rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {/* FRONT */}
            <div className="p-6 flex flex-col items-center text-center transition-opacity duration-300 group-hover:opacity-0">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-accent mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm text-accent font-medium">
                {member.role}
              </p>
            </div>

            {/* HOVER BACK */}
            <div
              className={`absolute inset-0 p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${bg}`}
            >
              <h3 className="text-lg font-semibold mb-2">
                {member.name}
              </h3>
              <p className="text-sm font-medium mb-3">
                {member.role}
              </p>
              <p className="text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* End of team section */}

        {/* Values */}
        <section
          className="section-padding relative overflow-hidden"
          style={{ backgroundImage: `url(${bgNotreValeurs})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-primary/85" />
          <div className="relative container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">Nos Valeurs</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary-foreground">Ce qui guide notre pratique</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Lock, title: "Secret professionnel", desc: "Tout ce qui est partagé en consultation reste strictement confidentiel." },
                { icon: HandHeart, title: "Disponibilité", desc: "Une équipe accessible et réactive, à votre écoute quand vous en avez besoin." },
                { icon: Eye, title: "Non-jugement", desc: "Un espace bienveillant où chacun est accueilli sans aucun jugement." },
                { icon: Heart, title: "Compréhension", desc: "Une écoute empathique et une approche adaptée à chaque situation." },
              ].map((r) => (
                <div key={r.title} className="rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 p-6 text-center hover-lift">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <r.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-foreground">{r.title}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/70">{r.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/pourquoi-nous" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline">
                Découvrir tous nos avantages
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding relative">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">Partenaires</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Ils nous font confiance</h2>
              <p className="mt-3 text-muted-foreground">
                Nos partenaires sont au cœur de notre engagement pour une meilleure santé mentale en Afrique.
              </p>
            </div>
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-4">
              {partnerLogos.map((logo, index) => (
                <div key={index} className="mx-auto w-3/4 sm:w-full rounded-3xl bg-card p-6 shadow-sm border border-border flex items-center justify-center">
                  <img src={logo} alt={`Partenaire ${index + 1}`} className="max-h-24 w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent section-padding relative">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-accent-foreground">Prêt à prendre soin de vous ?</h2>
            <p className="mt-3 text-accent-foreground/80 max-w-lg mx-auto">
              Prenez rendez-vous dès aujourd'hui avec Cabinet Meilleure Vie pour une consultation confidentielle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Prendre rendez-vous
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/a-propos"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-accent-foreground/30 px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-foreground/10"
              >
                En savoir plus sur nous
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
