import { Star, Quote } from "lucide-react";

const testimonials = [
  { text: "Grâce au Cabinet Meilleure Vie, j'ai retrouvé la sérénité. L'écoute et le professionnalisme sont remarquables.", name: "Marie K.", role: "Patiente" },
  { text: "L'orientation scolaire de mon fils a été un tournant. Il est maintenant épanoui dans ses études.", name: "Jean-Pierre D.", role: "Parent" },
  { text: "Les formations sur la gestion du stress ont transformé mon quotidien professionnel.", name: "Aïcha S.", role: "Professionnelle" },
  { text: "Le bilan psychologique nous a permis de mieux comprendre les difficultés de notre fille. Merci !", name: "Françoise A.", role: "Parent" },
  { text: "Un accompagnement humain et professionnel. Je recommande vivement ce cabinet.", name: "Sonia M.", role: "Patiente" },
];

const RealisationsSection = () => (
  <section id="realisations" className="section-padding">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-semibold tracking-widest uppercase text-accent">Témoignages</span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Ce que disent nos patients</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-xl bg-card p-6 hover-lift" style={{ boxShadow: "var(--card-shadow)" }}>
            <Quote className="h-6 w-6 text-accent/20 mb-3" />
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
            <div className="mt-4 flex items-center gap-3">
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
);

export default RealisationsSection;
