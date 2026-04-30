import { MessageCircle, CalendarCheck } from "lucide-react";
import heroImg from "@/assets/hero-psychology.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Cabinet de consultation psychologique serein à Cotonou, Bénin" width={1920} height={1080} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-primary/70" />
    </div>

    <div className="container relative z-10 mx-auto py-48 sm:py-40">
      <div className="max-w-3xl space-y-6 animate-fade-in-up">
        <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground">
          🌿 Psychologie, Sante Mentale et Bien Être — Cotonou, Bénin
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-primary-foreground">
          CABINET MEILLEURE VIE{" "}
          <span className="text-gradient">– Pour une vie meilleure</span>
        </h1>

        <p className="max-w-xl text-base sm:text-lg text-primary-foreground/80 leading-relaxed">
          Votre partenaire pour la sante mentale et bien-être, le développement personnel et la réussite éducative à Cotonou.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105 shadow-lg"
          >
            <CalendarCheck className="h-4 w-4" />
            Prendre rendez-vous
          </a>
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
    </div>

    <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-border">
        {[
          { num: "10+", label: "Années d'expérience" },
          { num: "500+", label: "Patients accompagnés" },
          { num: "100%", label: "Confidentialité" },
          { num: "✓", label: "Approche bienveillante" },
        ].map((s) => (
          <div key={s.label} className="px-4 py-4 sm:py-5 text-center">
            <p className="text-xl sm:text-2xl font-bold text-accent">{s.num}</p>
            <p className="text-xs sm:text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
