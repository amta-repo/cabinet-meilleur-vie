export type Testimonial = {
  name: string;
  rating: number;
  text: string;
  motivation?: string;
};

const rawTestimonials: Testimonial[] = [
  // Témoignages internes du cabinet
  { name: "Anonyme", rating: 5, text: "Je stresse moins qu'avant, les douleurs qui m'ont poussée à venir dans ce cabinet ont diminué à 80% déjà.", motivation: "L'écoute et la bienveillance des praticiens" },
  { name: "Anonyme", rating: 5, text: "J'ai plus confiance en moi.", motivation: "L'organisation et l'accueil" },
  { name: "Marios Tohon", rating: 5, text: "Bien.", motivation: "L'organisation et l'accueil" },
  { name: "Faysale Ilboudo", rating: 5, text: "Un accompagnement de qualité, je recommande.", motivation: "La qualité de l'accompagnement et des séances" },
  { name: "Anonyme", rating: 5, text: "Je me suis sentie bien à chaque consultation.", motivation: "La qualité de l'accompagnement et des séances" },
  { name: "Anonyme", rating: 5, text: "Une stabilité dans ma vie sentimentale.", motivation: "L'écoute et la bienveillance des praticiens" },
  { name: "Anonyme", rating: 5, text: "Je me sens mieux et je m'accepte mieux. J'ai mieux repris confiance en moi.", motivation: "L'écoute et la bienveillance des praticiens" },
  { name: "Anonyme", rating: 5, text: "Avant de commencer les consultations au cabinet, j'avais beaucoup de mal avec les enfants de 0 à 3 ans. J'ai commencé la thérapie avec le Dr ANTONIO qui, grâce aux échanges, aux exercices et aux solutions apportées, m'a aidé à trouver la source de ce mal. Aujourd'hui, je suis plus qu'à l'aise avec les enfants et j'ai beaucoup de plaisir à les côtoyer.", motivation: "La qualité de l'accompagnement et des séances" },

  // Avis Google
  { name: "Wilfried Agbasse", rating: 5, text: "Je tiens à remercier le Cabinet Meilleure Vie, et particulièrement le Directeur, pour son accompagnement, son écoute attentive et le temps qu'il a consacré à mon stage. Merci encore !" },
  { name: "Falola AHONONGA", rating: 5, text: "Je remercie le cabinet Meilleure Vie, surtout le Directeur, pour son accompagnement et le temps qu'il nous a accordé tout au long du stage." },
  { name: "Esther Baloitcha", rating: 5, text: "Merci infiniment pour votre accompagnement et votre écoute. Grâce à vous, j'ai retrouvé confiance en moi. Votre aide a changé ma vie." },
  { name: "Véronique Sowanou", rating: 5, text: "Mon expérience au cabinet Meilleure Vie, en particulier avec le Dr SAGBO, a été positive." },
  { name: "Sènan GANSE", rating: 5, text: "Je les trouve vraiment professionnels, à l'écoute et capables de s'adapter à la situation des patients. Je suis reconnaissant de vous avoir contactés et de vous avoir fait confiance." },
  { name: "David ADEOCHOUN", rating: 5, text: "Grâce à votre accompagnement et à vos formations, je suis aujourd'hui plus en paix avec moi-même et avec les autres. Je comprends ce qui est essentiel pour une relation réussie." },
  { name: "Siegfrid Amoussou", rating: 5, text: "Ceci est mon deuxième avis car mon premier compte a été supprimé. Mon opinion reste la même." },
  { name: "dossou donald", rating: 5, text: "Le cabinet Meilleure Vie propose des formations, un accompagnement psychologique et des services de développement personnel. J'y ai bénéficié de plusieurs prestations." },
  { name: "Jeanne KITIVO", rating: 5, text: "Après une rupture difficile, j'ai consulté au cabinet Meilleure Vie. J'y ai trouvé satisfaction et aujourd'hui je vis pleinement ma vie." },
  { name: "Cyrille Tchobi", rating: 5, text: "Merci à Monsieur SAGBO, dont les formations et l'accompagnement m'ont permis d'avoir une vie meilleure." },
  { name: "services GMIG", rating: 5, text: "Les 10 séances m'ont permis de sortir de la dépression, ce qui a eu un impact positif sur la gestion de mon équipe." },
  { name: "Valentine DANSOU FOKO", rating: 5, text: "J'ai vécu une très bonne expérience avec ce cabinet. Je le recommande sincèrement." },
  { name: "ari sagbo", rating: 5, text: "Vous êtes un psychologue de cœur. J'admire votre cabinet ; il est parmi les meilleurs d'Afrique subsaharienne." },
  { name: "Hemeline Allabi", rating: 5, text: "Très belle expérience avec Monsieur Boris. À l'écoute et efficace. Je le recommande vivement." },
  { name: "Espérance Anato", rating: 5, text: "Monsieur SAGBO Agossou a été d'un grand soutien dans ma vie. Merci." },
  { name: "Logossou Jennifer", rating: 5, text: "C'était une bonne expérience car elle m'a permis d'obtenir plus de réponses que je n'en attendais." },
  { name: "Aurel ALIOZA", rating: 5, text: "Très bon accompagnement. Il maîtrise bien son sujet et recommande un traitement naturel et patient." },
  { name: "Aubierge KINTOSSOU", rating: 5, text: "Excellent thérapeute. Travail réalisé avec efficacité." },
  { name: "Prince Zékoulékou Prof Backras", rating: 5, text: "Il est parfait, professionnel et honnête." },
  { name: "Edwige DODJI", rating: 5, text: "Je le recommande à 100 %." },
  { name: "Ginette Madja", rating: 5, text: "100/100 validé. Merci beaucoup." },
  { name: "Tranquilin Abel Frédéric DANON", rating: 5, text: "Un clinicien à recommander." },
  { name: "Beloved Koto", rating: 5, text: "Mon stage au cabinet Meilleure Vie a été une merveilleuse expérience. J'ai beaucoup appris auprès du docteur, qui partage son savoir avec bienveillance, passion et amour." },
  { name: "Alain SATCHA", rating: 4, text: "Je pense qu'il est important de prendre soin de la santé mentale et psychologique de soi-même et de ses proches. L'aide d'un spécialiste est indispensable. Nous remercions et encourageons le cabinet Meilleure Vie." },
  { name: "Bansopa Angèle", rating: 4, text: "Je suis satisfaite de la prise en charge reçue dans votre centre. Une équipe vraiment professionnelle et flexible. Je les recommande." },
  { name: "TADE Chouaïb", rating: 4, text: "C'est un cabinet flexible qui s'adapte aux besoins des personnes. Les formateurs sont humbles et concentrés sur la réussite des participants." },
  { name: "Nady.H", rating: 4, text: "Le Dr Sagbo est un formateur exceptionnel. Son écoute attentive, sa gentillesse et son expertise ont rendu chaque séance captivante et enrichissante." },
  { name: "emma carelle Mahunon", rating: 4, text: "Je souffrais d'un manque de confiance en moi, mais grâce au cabinet Meilleure Vie, j'ai trouvé une solution à ce problème." },
  { name: "Nazaire Candido", rating: 4, text: "Avis 4 étoiles laissé sans commentaire." },
  { name: "Vincent Paul DIMON", rating: 3, text: "La formation à laquelle j'ai participé m'a permis de repenser ma vision de la vie de couple et a transformé ma façon de penser. Je suis reconnaissant d'avoir choisi le cabinet Meilleure Vie." },
  { name: "MAHUNON Huguette", rating: 2, text: "J'apprécie l'ambiance accueillante du cabinet Meilleure Vie. Le personnel d'accueil est dynamique, mais des améliorations sont nécessaires au niveau de l'organisation et des équipements." },
  { name: "Laurent MONRIGUI", rating: 2, text: "Avis 2 étoiles laissé sans commentaire." },
];

export const testimonials: Testimonial[] = [...rawTestimonials].sort(
  (a, b) => b.rating - a.rating
);

export const featuredTestimonials: Testimonial[] = testimonials.filter(
  (t) => t.rating === 5
);

export const averageRating =
  Math.round(
    (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length) * 10
  ) / 10;
