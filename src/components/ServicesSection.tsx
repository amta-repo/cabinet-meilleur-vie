import { Brain, Heart, Search, Compass, GraduationCap, BookOpen } from "lucide-react";

const services = [
  { icon: Brain, title: "Consultations psychologiques", desc: "Accompagnement personnalisé pour votre bien-être mental et émotionnel." },
  { icon: Heart, title: "Souffrances psychologiques", desc: "Prise en charge de l'anxiété, la dépression, le trauma et le stress." },
  { icon: Search, title: "Bilans psychologiques", desc: "Tests et évaluations psychologiques approfondis et personnalisés." },
  { icon: Compass, title: "Orientation scolaire & professionnelle", desc: "Guidance éclairée pour des choix de vie et de carrière." },
  { icon: GraduationCap, title: "Accompagnement éducatif", desc: "Prévention des échecs scolaires et suivi psycho-éducatif." },
  { icon: BookOpen, title: "Formations & ateliers", desc: "Formations professionnelles et ateliers de développement personnel." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase text-accent">Nos Services</span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Un accompagnement complet pour votre bien-être</h2>
        <p className="mt-3 text-muted-foreground">
          De la consultation individuelle aux formations, Cabinet Meilleure Vie vous accompagne vers une vie épanouie.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-xl bg-card p-6 sm:p-8 hover-lift"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
