import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Comment se déroule une consultation psychologique ?",
    a: "La première consultation est un entretien d'accueil d'environ 45 à 60 minutes. Le psychologue vous écoute, comprend votre demande et définit avec vous les objectifs de l'accompagnement.",
  },
  {
    q: "Est-ce que les consultations sont confidentielles ?",
    a: "Absolument. Le secret professionnel est un pilier fondamental de notre pratique. Tout ce qui est partagé en consultation reste strictement confidentiel.",
  },
  {
    q: "Qui peut consulter un psychologue ?",
    a: "Tout le monde : enfants, adolescents, adultes, couples et familles. Il n'est pas nécessaire d'avoir un trouble diagnostiqué pour consulter.",
  },
  {
    q: "Comment prendre rendez-vous ?",
    a: "Vous pouvez prendre rendez-vous par téléphone au +229 01 94 39 02 95, via WhatsApp, ou en remplissant le formulaire de contact sur notre site.",
  },
  {
    q: "En quoi consiste un bilan psychologique ?",
    a: "Un bilan psychologique comprend des tests standardisés et des entretiens pour évaluer le fonctionnement cognitif, émotionnel et comportemental, avec un rapport détaillé.",
  },
  {
    q: "Proposez-vous des formations pour les entreprises ?",
    a: "Oui, nous proposons des formations sur mesure : gestion du stress, communication, leadership, santé mentale au travail. Contactez-nous pour un programme adapté.",
  },
];

const FaqSection = () => (
  <section id="faq" className="section-padding bg-secondary">
    <div className="container mx-auto max-w-3xl">
      <div className="text-center mb-10">
        <span className="text-xs font-semibold tracking-widest uppercase text-accent">FAQ</span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Questions fréquentes</h2>
        <p className="mt-3 text-muted-foreground">Tout ce que vous devez savoir sur nos services de psychologie et d'éducation.</p>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl bg-card border-none px-6" style={{ boxShadow: "var(--card-shadow)" }}>
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
  </section>
);

export default FaqSection;
