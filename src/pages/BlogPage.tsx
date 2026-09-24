import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHeader from "@/components/PageHeader";
import headerBg from "@/assets/header-blogpage.jpg";
import malDuTeteImage from "@/assets/Mal-du-tete-blog.jpg";
import addictionImg from "@/assets/blog-addiction.jpeg";
import anxietyImg from "@/assets/blog-anxiety.jpeg";
import bilanPsychoImg from "@/assets/blog-bilan-psychologique.jpeg";
import santeMentaleEntrepriseImg from "@/assets/blog-sante-mentalentreprise.jpeg";
import addictionEndogeneImg from "@/assets/blog-addiction-endogene.jpg.asset.json";
import addictionFacteursImg from "@/assets/blog-addiction-facteurs.jpg.asset.json";

const DOMAIN = "https://cabinetmeilleurvie.com";

const blogPosts = [
  {
    slug: "causes-perceptions-endogenes-addiction-benin",
    title: "Causes et perceptions endogènes de l'addiction au Bénin",
    excerpt: "Au-delà de la médecine, les cultures béninoises perçoivent l'addiction comme une souffrance de l'âme. Décryptage des causes endogènes, spirituelles et modernes de la dépendance au Bénin.",
    date: "2026-09-24",
    readTime: "7 min",
    author: "M. CHOKPON Casimir",
    category: "Addiction",
    image: addictionEndogeneImg.url,
    imageAlt: "Conférence sur les causes et perceptions endogènes de l'addiction au Bénin",
    content: `L'addiction au Bénin ne se résume pas à une question médicale. Si les sciences modernes la définissent comme une dépendance incontrôlable à une substance ou à un comportement (alcool, drogues, jeux d'argent, écrans), les cultures endogènes béninoises y voient aussi un indice d'échec de l'être qui n'a pas su se réaliser.

## Un état des lieux diversifié au Bénin

Les formes de dépendance se sont diversifiées dans les villes béninoises. Aux substances traditionnelles (alcool, tabac, drogues, médicaments détournés) s'ajoutent de nouvelles addictions comportementales : réseaux sociaux, jeux vidéo, paris sportifs, pornographie, achats compulsifs. Ces comportements perturbent le sommeil et la santé mentale des jeunes comme des adultes.

## La perception endogène : une maladie de l'âme

Dans la vision endogène, l'addiction est une maladie pluridimensionnelle qui touche le corps et l'âme. Elle traduit un vide intérieur, une difficulté profonde qui se manifeste ensuite sur le plan matériel et comportemental. Là où la médecine situe les causes dans des mécanismes psychologiques et biologiques, les traditions évoquent des rites de passage non accomplis, l'ignorance de son identité spirituelle ou la négligence des voies de consécration.

## Les conséquences de l'addiction

Les effets sont graves : dégradation de la santé physique, morale et mentale, isolement, perte d'emploi, échec scolaire, endettement — en particulier pour les addictions aux jeux d'argent. Autant de signaux qui appellent une prise en charge globale.

## Prévenir et guérir : une approche de synergie

Les solutions ne reposent pas uniquement sur l'accompagnement médical et psychologique. Elles demandent du temps et peuvent s'enrichir d'approches complémentaires : psychothérapie, sophrologie, méditation, travail intérieur par la prière et la foi. L'essentiel est d'agir sur les causes profondes qui entretiennent le mal.

## Conclusion

L'homme étant pluridimensionnel, analyser l'addiction uniquement sous l'angle de la médecine serait une vision étriquée du problème. Il est urgent de concilier science moderne et connaissances endogènes pour vaincre les addictions dans une synergie des approches. Au Cabinet Meilleure Vie à Abomey-Calavi, nous accompagnons les personnes dépendantes avec une prise en charge globale et bienveillante.

*M. CHOKPON Casimir — Professeur de Littérature, Guide en Parapsychologie et Assistant en Développement personnel.*`,
  },
  {
    slug: "causes-facteurs-risque-addiction-benin",
    title: "Causes et facteurs de risque de l'addiction en contexte béninois",
    excerpt: "Pourquoi devient-on dépendant ? Dépression, stress, conflits familiaux, pression des pairs, paris en ligne : tour d'horizon des facteurs de risque de l'addiction chez les jeunes au Bénin.",
    date: "2026-09-24",
    readTime: "8 min",
    author: "Dr. H. Moïse DOSSA",
    category: "Addiction",
    image: addictionFacteursImg.url,
    imageAlt: "Dr. H. Moïse DOSSA, psychiatre, lors d'une conférence sur l'addiction au Bénin",
    content: `L'addiction est aujourd'hui un problème majeur de santé publique au Bénin. Qu'elle concerne des substances psychoactives (alcool, tabac, cannabis, médicaments détournés) ou des comportements (jeux d'argent, jeux vidéo, Internet), elle s'installe progressivement et se caractérise par une difficulté à contrôler la consommation malgré les conséquences négatives.

## Chez les jeunes béninois

Une étude menée auprès d'adolescents béninois montre que l'alcool est la substance la plus consommée, suivie du tabac, du cannabis et d'autres produits. L'étude met en évidence l'influence de facteurs psychologiques, familiaux et sociaux : dépression, conflits familiaux, influence des pairs et faible investissement parental. Il n'existe donc pas une cause unique : l'addiction résulte de l'interaction de plusieurs facteurs.

## Les facteurs individuels et psychologiques

**La recherche de plaisir et la curiosité.** Chez certains jeunes, la consommation commence par envie d'expérimenter. Une consommation occasionnelle en fête peut devenir fréquente lorsque la substance est associée au plaisir et à la détente.

**La dépression, le stress et l'anxiété.** Certaines personnes consomment pour soulager temporairement un mal-être. Mais la substance ne soigne pas la cause : elle masque les symptômes et fait risquer une dépendance supplémentaire. C'est mieux de soigner les personnes que d'aller vers les produits.

**L'impulsivité.** La difficulté à résister à une envie immédiate favorise la répétition des comportements à risque.

## Les facteurs familiaux

Les conflits familiaux répétés, le manque de suivi et d'encadrement parental, ainsi que le modèle parental (une consommation banalisée à la maison) exposent davantage les jeunes. Le dialogue, l'écoute et l'accompagnement sont des facteurs de protection essentiels.

## L'influence des pairs et de l'environnement

À l'adolescence, le besoin d'être accepté par le groupe peut pousser à expérimenter. La banalisation de l'alcool lors des fêtes et cérémonies fait sous-estimer les risques.

## Les facteurs économiques et les nouvelles technologies

Chômage, précarité, échec scolaire et sentiment d'exclusion génèrent du stress et favorisent les comportements à risque. Par ailleurs, le téléphone portable rend les jeux d'argent et paris en ligne accessibles à tout moment, avec des conséquences sur le sommeil, les études et les finances.

## Conclusion

En contexte béninois, les facteurs de risque de l'addiction sont multiples : psychologiques, familiaux, sociaux, économiques et numériques. L'addiction est un trouble chronique qui nécessite une prise en charge : il vaut mieux se tourner vers un spécialiste. Le Cabinet Meilleure Vie à Abomey-Calavi vous accompagne avec des consultations en psychologie et psychiatrie.

*Dr. H. Moïse DOSSA — Psychiatre, Psychothérapeute de couple et de famille, Pasteur, Auteur, Conférencier, Staff Counsellor.*`,
  },
  {
    slug: "addiction-definition-causes-symptomes-prevention",
    title: "L’addiction : définition, causes, symptômes et prévention",
    excerpt: "Comprendre l'addiction pour mieux la prévenir chez les jeunes : causes, symptômes et stratégies de protection.",
    date: "2026-04-27",
    readTime: "10 min",
    author: "Agossou SAGBO",
    category: "Addiction",
    image: addictionImg,
    content: `L’addiction est aujourd’hui un problème majeur de santé mentale qui touche de nombreuses personnes, en particulier les jeunes. Elle peut concerner aussi bien des substances que des comportements du quotidien.

 Définition de l’addiction

L’addiction se définit comme une dépendance à une substance ou à une activité, caractérisée par l’incapacité de s’arrêter malgré les conséquences négatives.

Elle se manifeste par :

- une perte de contrôle
- un besoin irrépressible (craving)
- une répétition du comportement

L’addiction peut concerner :

- des substances (alcool, drogue, tabac)
- des comportements (jeux, internet, réseaux sociaux)

Une caractéristique essentielle est la poursuite du comportement malgré ses effets nocifs sur la vie personnelle, scolaire ou sociale.

 Les causes de l’addiction

L’addiction est un phénomène complexe qui résulte de plusieurs facteurs.

 Facteurs psychologiques
- stress
- anxiété
- mal-être émotionnel

Ces éléments peuvent pousser une personne à chercher un soulagement temporaire.

 Facteurs sociaux
- influence des amis
- environnement familial
- pression sociale

 Facteurs liés au cerveau

Les comportements addictifs activent des mécanismes de plaisir, ce qui renforce leur répétition.

Avec le temps, la personne perd progressivement le contrôle et développe une dépendance.

 Les symptômes de l’addiction

Les signes de l’addiction peuvent être variés, mais certains sont fréquents :

- incapacité à arrêter
- augmentation de la consommation ou du temps passé
- négligence des responsabilités
- isolement social
- changements de comportement

Une personne dépendante continue souvent malgré les conséquences négatives sur sa vie.

 Les conséquences de l’addiction

L’addiction a des impacts importants sur plusieurs aspects de la vie.

 Sur la santé mentale
- anxiété
- dépression
- troubles émotionnels

 Sur la vie sociale
- conflits familiaux
- isolement
- perte de relations

 Sur la vie scolaire ou professionnelle
- baisse des performances
- manque de concentration

Sans prise en charge, ces effets peuvent s’aggraver avec le temps.

 Pourquoi l’addiction persiste

L’addiction modifie progressivement les comportements et les habitudes.
Elle crée un cycle difficile à interrompre :

- envie
- passage à l’acte
- soulagement temporaire
- rechute

Ce mécanisme explique pourquoi il est difficile de s’en sortir sans aide.

 Prévention de l’addiction chez les jeunes

La prévention est essentielle, surtout chez les adolescents.

Quelques mesures importantes :

- développer la confiance en soi
- apprendre à gérer le stress
- éviter les environnements à risque
- s’informer sur les dangers

 Conclusion

L’addiction est une problématique complexe liée à la santé mentale et aux comportements. Elle ne doit pas être réduite à un simple manque de volonté.

Mieux comprendre ses causes et ses symptômes permet de mieux la prévenir et d’agir plus tôt.`,
  },
  {
    slug: "le-mal-a-lame-parler-depression",
    title: "Le mal à l’âme : parler de la dépression",
    excerpt: "Au Bénin comme ailleurs, la dépression est bien plus qu’un coup de blues. Un lieu d’écoute et de reconstruction peut faire la différence.",
    date: "2026-05-01",
    readTime: "8 min",
    author: "Cabinet Meilleure Vie",
    category: "Santé mentale",
    image: malDuTeteImage,
    imageAlt: "Illustration du mal du tête et du mal à l'âme",
    content: `Le mal de tête, tu le traites. Le mal au cœur, tu en parles. Mais le mal à l’âme ? Tu fais semblant que ça nexiste pas.

— Cabinet Meilleure Vie

Au Bénin comme ailleurs, on a appris à soigner le corps, mais pas toujours l’esprit. Pourtant, la dépression est bien plus qu’un simple “coup de blues”.

D’après l’OMS, plus de 300 millions de personnes dans le monde souffrent de dépression. Et derrière chaque silence, chaque sourire forcé, il peut y avoir une douleur que personne ne voit.

 Une douleur invisible mais réelle

Imagine un toit qui fuit. Tu peux éponger encore et encore… Mais si tu ne répares pas la fuite, l’eau reviendra toujours.

La souffrance psychique, c’est pareil. On la cache, on la nie… mais elle reste là, en silence.

 Le rôle du Cabinet Meilleure Vie

Le Cabinet Meilleure Vie se porte garant de votre bien-être mental.
C’est plus qu’un espace de consultation, c’est un lieu d’écoute, de réconfort et de reconstruction. Ici, tu es accueilli avec respect, bienveillance et confidentialité.

 Notre mission

Notre mission est simple : rendre la santé mentale accessible, comprise et valorisée.

Il n’y a aucune honte à demander de l’aide. Il y a du courage dans chaque démarche vers soi-même.

 Avancer vers la guérison intérieure

Fais le choix de la guérison intérieure. Meilleure Vie est là pour t’y accompagner.
`,
  },
  {
    slug: "comprendre-anxiete-traitement-cotonou",
    title: "Comprendre l'anxiété : causes, symptômes et traitement à Cotonou",
    excerpt: "L'anxiété touche des millions de personnes en Afrique. Découvrez comment reconnaître les signes d'anxiété et les options de traitement disponibles au Cabinet Meilleure Vie à Cotonou.",
    date: "2026-04-10",
    readTime: "7 min",
    author: "Agossou SAGBO",
    category: "Santé mentale",
    image: anxietyImg,
    content: `L'anxiété est l'un des troubles psychologiques les plus fréquents dans le monde, et l'Afrique de l'Ouest ne fait pas exception. Au Bénin, de nombreuses personnes souffrent en silence, souvent par méconnaissance des symptômes ou par stigmatisation liée à la santé mentale.

 Qu'est-ce que l'anxiété ?

L'anxiété est une réaction naturelle du corps face au stress. Elle devient problématique lorsqu'elle est excessive, persistante et interfère avec la vie quotidienne. On parle alors de trouble anxieux.

 Les symptômes courants

- Inquiétude excessive et incontrôlable
- Tension musculaire et fatigue
- Difficultés de concentration
- Troubles du sommeil
- Irritabilité
- Palpitations cardiaques

 Les solutions disponibles à Cotonou

Au Cabinet Meilleure Vie, nous proposons plusieurs approches thérapeutiques pour traiter l'anxiété :

1. **La psychothérapie individuelle** : Un accompagnement personnalisé pour identifier les sources de votre anxiété et développer des stratégies d'adaptation.
2. **La thérapie cognitivo-comportementale (TCC)** : Une approche scientifiquement validée qui aide à modifier les pensées et comportements anxiogènes.
3. **Les techniques de relaxation** : Apprentissage de la respiration, de la pleine conscience et d'autres outils de gestion du stress.

N'hésitez pas à consulter. Votre santé mentale est une priorité.
`,
  },
  {
    slug: "importance-bilan-psychologique-enfant",
    title: "L'importance du bilan psychologique chez l'enfant : quand consulter ?",
    excerpt: "Un bilan psychologique permet de mieux comprendre les difficultés de votre enfant. Découvrez quand et pourquoi faire évaluer votre enfant par un psychologue professionnel.",
    date: "2026-04-05",
    readTime: "6 min",
    author: "Agossou SAGBO",
    category: "Psychologie de l'enfant",
    image: bilanPsychoImg,
    content: `Le bilan psychologique est un outil essentiel pour comprendre le fonctionnement cognitif, émotionnel et comportemental d'un enfant. Il est particulièrement recommandé lorsque les parents ou les enseignants observent des difficultés persistantes.

Quand consulter ?

- Difficultés scolaires persistantes
- Troubles du comportement à la maison ou à l'école
- Retard de développement suspecté
- Difficultés relationnelles avec les pairs
- Changements soudains de comportement
- Événements traumatisants (séparation des parents, deuil, déménagement)

En quoi consiste le bilan ?

Le bilan psychologique au Cabinet Meilleure Vie comprend :
- Des tests standardisés (tests de personnalité, échelles d'évaluation)
- Des entretiens avec l'enfant et les parents
- Une observation du comportement
- Un rapport détaillé avec des recommandations

Les bénéfices

Un bilan précoce permet d'identifier les besoins spécifiques de l'enfant et de mettre en place un accompagnement adapté, évitant ainsi l'aggravation des difficultés.`,
  },
  {
    slug: "sante-mentale-en-entreprise-benin",
    title: "La santé mentale en entreprise au Bénin : un enjeu majeur",
    excerpt: "Le bien-être psychologique des employés impacte directement la productivité. Comment les entreprises béninoises peuvent-elles intégrer la santé mentale dans leur politique RH ?",
    date: "2026-03-28",
    readTime: "8 min",
    author: "Agossou SAGBO",
    category: "Entreprise",
    image: santeMentaleEntrepriseImg,
    content: `La santé mentale au travail est un enjeu croissant en Afrique. Le stress professionnel, le burn-out et les conflits interpersonnels affectent la productivité et le bien-être des employés.

 L'état des lieux au Bénin

De nombreuses entreprises béninoises commencent à prendre conscience de l'importance du bien-être psychologique de leurs collaborateurs. Cependant, les initiatives restent encore limitées.

 Nos solutions pour les entreprises

Le Cabinet Meilleure Vie propose aux entreprises :

1. Thérapie de groupe en entreprise : Des séances collectives pour améliorer la cohésion d'équipe et résoudre les conflits.
2. Formations en gestion du stress : Des ateliers pratiques pour apprendre à gérer la pression professionnelle.
3. Consultations individuelles : Un accompagnement confidentiel pour les employés en difficulté.
4. Audits du bien-être : Évaluation de la santé mentale au sein de votre organisation.

Investir dans la santé mentale de vos collaborateurs, c'est investir dans la performance de votre entreprise.`,
  },
  {
    slug: "psychotherapie-couple-quand-consulter",
    title: "Psychothérapie de couple : quand et pourquoi consulter ?",
    excerpt: "La thérapie de couple n'est pas un aveu d'échec mais un acte de courage. Découvrez comment elle peut transformer votre relation et renforcer vos liens affectifs.",
    date: "2026-03-20",
    readTime: "5 min",
    author: "Agossou SAGBO",
    category: "Thérapie de couple",
    content: `Consulter un psychologue de couple est souvent perçu comme un dernier recours. Pourtant, une thérapie précoce peut prévenir de nombreux conflits et renforcer considérablement la relation.

 Les signes qui doivent alerter

- Communication difficile ou inexistante
- Conflits récurrents sur les mêmes sujets
- Perte de confiance ou infidélité
- Sentiment de distance émotionnelle
- Désaccords sur l'éducation des enfants
- Difficultés liées à la vie intime

 Comment se déroule une thérapie de couple ?

Au Cabinet Meilleure Vie, la thérapie de couple se déroule dans un cadre neutre et bienveillant. Le thérapeute aide le couple à :
- Identifier les schémas de communication dysfonctionnels
- Exprimer ses besoins et ses émotions
- Développer de nouvelles façons d'interagir
- Retrouver la complicité et l'intimité

Chaque séance dure environ 60 minutes. Le nombre de séances varie selon les besoins du couple.`,
  },

  {
  slug: "stress-comprendre-gerer-stress-chronique",
  title: "Le stress : comprendre ses mécanismes et apprendre à le gérer",
  excerpt: "Le stress est une réaction normale du corps, mais lorsqu’il devient chronique, il peut affecter profondément la santé mentale et physique.",
  date: "2026-05-01",
  readTime: "9 min",
  author: "Cabinet Meilleure Vie",
  category: "Stress",
  image: anxietyImg,
  content: `Le stress est une réponse naturelle de l’organisme face à une situation perçue comme exigeante ou menaçante.

 Qu’est-ce que le stress ?

Le stress est un mécanisme biologique qui active le corps pour réagir rapidement. Il devient problématique lorsqu’il est constant ou intense.

On distingue :
- Stress aigu
- Stress chronique
- Stress post-traumatique

 Les symptômes du stress

 Physiques
- Fatigue
- Tensions musculaires
- Troubles du sommeil

 Psychologiques
- Irritabilité
- Difficultés de concentration
- Anxiété persistante

 Causes fréquentes
- Pression professionnelle
- Problèmes familiaux
- Difficultés financières
- Événements traumatiques

 Quand le stress devient dangereux
Le stress chronique peut conduire à :
- Burn-out
- Troubles anxieux
- Dépression

 Prise en charge
- Psychothérapie
- Techniques de relaxation
- Hygiène de vie adaptée

 Conclusion
Le stress n’est pas une faiblesse. C’est un signal du corps qui mérite d’être compris et accompagné.`
  },

  {
  slug: "techniques-anti-anxiete-333-54321",
  title: "Techniques anti-anxiété : 3-3-3 et 5-4-3-2-1 pour calmer une crise",
  excerpt: "Découvrez des techniques simples et efficaces pour gérer une crise d’anxiété en quelques minutes.",
  date: "2026-05-01",
  readTime: "6 min",
  author: "Cabinet Meilleure Vie",
  category: "Anxiété",
  image: anxietyImg,
  content: `Les crises d’anxiété peuvent être impressionnantes, mais il existe des techniques simples pour reprendre le contrôle.

 Pourquoi ces techniques fonctionnent

L’anxiété pousse le cerveau à anticiper un danger. Les techniques de grounding ramènent l’attention au présent.

 Technique 3-3-3

- 3 choses que vous voyez
- 3 sons que vous entendez
- 3 mouvements ou sensations corporelles

Objectif : reconnecter le cerveau au présent.

 Technique 5-4-3-2-1

- 5 choses que vous voyez
- 4 choses que vous touchez
- 3 choses que vous entendez
- 2 choses que vous sentez
- 1 chose que vous goûtez ou appréciez

 Quand les utiliser
- Crises d’angoisse
- Stress intense
- Début de panique

 Limite importante
Ces techniques aident à calmer une crise mais ne remplacent pas un suivi thérapeutique.

 Conclusion
Si les crises deviennent fréquentes, un accompagnement psychologique est recommandé.`
  },
  {
  slug: "quand-consulter-psychologue-psychiatre-signes",
  title: "Quand consulter un psychologue ou un psychiatre ? Les signes à connaître",
  excerpt: "Découvrez les signaux qui indiquent qu’il est temps de consulter un professionnel de la santé mentale.",
  date: "2026-05-01",
  readTime: "8 min",
  author: "Cabinet Meilleure Vie",
  category: "Consultation",
  image: bilanPsychoImg,
  content: `Consulter un professionnel de la santé mentale est une décision importante mais souvent tardive.

 Signes d’alerte

- Anxiété persistante
- Tristesse prolongée
- Troubles du sommeil
- Perte d’intérêt
- Difficultés à fonctionner au quotidien

 Idée reçue fréquente
Il n’est pas nécessaire d’attendre d’aller très mal pour consulter.

 Pourquoi consulter tôt
- Prévention des troubles graves
- Amélioration plus rapide
- Meilleure qualité de vie

 Quand consulter en urgence
- Idées noires persistantes
- Isolement important
- Perte de contrôle émotionnel

 Conclusion
Consulter est un acte de prévention, pas un dernier recours.`
  },
  {
  slug: "psychiatre-vs-psychologue-differences",
  title: "Psychiatre ou psychologue : quelles différences et qui consulter ?",
  excerpt: "Comprenez clairement la différence entre psychologue et psychiatre pour mieux orienter votre démarche.",
  date: "2026-05-01",
  readTime: "7 min",
  author: "Cabinet Meilleure Vie",
  category: "Orientation",
  image: bilanPsychoImg,
  content: `Beaucoup de personnes confondent psychologue et psychiatre.

 Le psychologue

- Professionnel de la thérapie
- Pas de prescription médicale
- Travail sur les émotions, pensées et comportements

 Le psychiatre

- Médecin spécialisé
- Peut prescrire des médicaments
- Prend en charge les troubles sévères

 Comment choisir ?

 Consulter un psychologue si :
- Stress
- Anxiété légère à modérée
- Difficultés émotionnelles

 Consulter un psychiatre si :
- Troubles sévères
- Besoin de traitement médical
- Symptômes persistants et invalidants

 Approche complémentaire
Les deux peuvent travailler ensemble.

 Conclusion
Le bon choix dépend du niveau de difficulté, pas du statut social du problème.`
  },
  
  {
  slug: "vivre-avec-trouble-mental-quotidien",
  title: "Vivre avec un trouble mental : comprendre, s’adapter et avancer",
  excerpt: "Un trouble mental ne définit pas une personne. Découvrez comment mieux vivre au quotidien avec un accompagnement adapté.",
  date: "2026-05-01",
  readTime: "9 min",
  author: "Cabinet Meilleure Vie",
  category: "Accompagnement",
  image: malDuTeteImage,
  content: `Vivre avec un trouble mental est une réalité pour de nombreuses personnes.

 Comprendre la réalité des troubles mentaux
Les troubles mentaux peuvent inclure :
- Anxiété
- Dépression
- Troubles de l’humeur

 Impact sur la vie quotidienne
- Fatigue mentale
- Difficultés sociales
- Baisse de motivation

 Ce qui aide réellement

 1. Le suivi thérapeutique
Essentiel pour comprendre et stabiliser les symptômes.

 2. Le soutien social
Famille, amis, accompagnement professionnel.

 3. Les habitudes de vie
- Sommeil régulier
- Activité physique
- Routine stable

 Briser les idées reçues
Un trouble mental n’est pas une faiblesse personnelle.

 Conclusion
Avec un accompagnement adapté, il est possible de vivre une vie stable et équilibrée.`
  },
];

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog Cabinet Meilleure Vie",
  url: `${DOMAIN}/blog`,
  description: "Articles sur la santé mentale, la psychologie et l'éducation en Afrique.",
  blogPost: blogPosts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date,
    author: { "@type": "Person", name: p.author },
    publisher: { "@type": "Organization", name: "Cabinet Meilleure Vie" },
    url: `${DOMAIN}/blog/${p.slug}`,
  })),
};

const BlogPage = () => (
  <>
    <Helmet>
      <title>Blog Santé Mentale Afrique | Cabinet Meilleure Vie - Psychologie, Psychiatrie, Psychanalyse, Abomey-Calavi </title>
      <meta name="description" content="Articles et ressources sur la santé mentale, la psychologie et l'éducation en Afrique de l'Ouest. Conseils d'experts du Cabinet Meilleure Vie à Abomey-Calavi, Bénin." />
      <link rel="canonical" href={`${DOMAIN}/blog`} />
      <meta property="og:title" content="Blog Santé Mentale | Cabinet Meilleure Vie" />
      <meta property="og:url" content={`${DOMAIN}/blog`} />
      <script type="application/ld+json">{JSON.stringify(blogJsonLd)}</script>
    </Helmet>

    <Navbar />
    <main>
      <PageHeader
        badge="Blog"
        title="Ressources & Articles"
        subtitle="Informez-vous sur la santé mentale, la psychologie, psychiatrie et psychanalyse avec nos experts."
        bgImage={headerBg}
      />

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid gap-8 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <article key={post.slug} className="rounded-xl bg-card overflow-hidden hover-lift" style={{ boxShadow: "var(--card-shadow)" }}>
                <div className="p-6 sm:p-8">
                  <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent mb-4">
                    {post.category}
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3 line-clamp-2">
                    <Link to={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  {post.image && (
                    <div className="mb-4 overflow-hidden rounded-3xl">
                      <img src={post.image} alt={post.imageAlt || post.title} loading="lazy" className="h-44 w-full object-cover" />
                    </div>
                  )}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                  >
                    Lire l'article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export { blogPosts };
export default BlogPage;
