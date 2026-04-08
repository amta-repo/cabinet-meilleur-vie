import { Users, Shield, HandHeart, Sparkles } from "lucide-react";

const reasons = [
  { icon: Users, title: "Équipe expérimentée", desc: "Des professionnels qualifiés et à l'écoute, formés aux meilleures pratiques." },
  { icon: Shield, title: "Confidentialité totale", desc: "Approche bienveillante et strictement confidentielle pour votre sérénité." },
  { icon: HandHeart, title: "Adaptée au Bénin", desc: "Solutions pensées pour la réalité culturelle et sociale béninoise." },
  { icon: Sparkles, title: "Résultats concrets", desc: "Accompagnement personnalisé et suivi pour des résultats durables." },
];

const WhyUsSection = () => (
  <section id="pourquoi" className="section-padding bg-primary">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase text-accent">Pourquoi nous choisir ?</span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary-foreground">La confiance au cœur de notre approche</h2>
        <p className="mt-3 text-primary-foreground/70">Ce qui nous distingue dans l'accompagnement psychologique à Cotonou.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r) => (
          <div key={r.title} className="rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 p-6 text-center hover-lift">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <r.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-primary-foreground">{r.title}</h3>
            <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
