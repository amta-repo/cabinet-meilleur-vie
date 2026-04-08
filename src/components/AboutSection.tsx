import { Leaf } from "lucide-react";

const AboutSection = () => (
  <section id="apropos" className="section-padding">
    <div className="container mx-auto">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">À propos</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Cabinet Meilleure Vie</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Cabinet Meilleure Vie</strong> est un cabinet de Consultation, Formation et Expertise-Recherche en Psychologie, Éducation, Genre et Environnement basé à Cotonou, Bénin.
            </p>
            <p>
              Fondé avec la conviction que chacun mérite un accompagnement de qualité pour son bien-être mental, notre cabinet réunit des professionnels passionnés qui placent l'humain au cœur de leur pratique.
            </p>
            <p>
              Notre mission : rendre la psychologie accessible et contribuer au bien-être et à l'épanouissement des individus, des familles et des communautés béninoises.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-sm aspect-square rounded-2xl bg-secondary flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-accent">
                <Leaf className="h-10 w-10 text-accent-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">Meilleure Vie</p>
                <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">Psychologie & Éducation</p>
              </div>
              <p className="text-sm text-muted-foreground">Cotonou, Bénin</p>
            </div>
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-2xl bg-accent/20" />
            <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-xl bg-primary/20" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
