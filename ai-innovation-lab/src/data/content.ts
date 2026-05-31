export type TimelineColor = "cyan" | "violet" | "blue" | "emerald";

export interface TimelineEvent {
  year: string;
  title: string;
  chapter: string;
  tag: string;
  shortDesc: string;
  detail: string;
  today: string;
  image: string;
  color: TimelineColor;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "1936",
    title: "Die Maschine, die alles berechnen kann",
    chapter: "Kapitel 1",
    tag: "Ursprung",
    shortDesc: "Alan Turing legt die theoretische Basis moderner Computer.",
    detail:
      "Alan Turing beschreibt eine Maschine, die jeden berechenbaren Prozess ausführen kann. Diese Idee war keine normale Erfindung, sondern die Grundlage dafür, dass Computer später überhaupt entstehen konnten.",
    today:
      "Ohne diese Idee gäbe es keine modernen Computer, keine Apps und keine KI-Systeme wie ChatGPT.",
    image: "/images/turing.jpg",
    color: "cyan",
  },
  {
    year: "1956",
    title: "KI bekommt einen Namen",
    chapter: "Kapitel 2",
    tag: "Geburt der KI",
    shortDesc: "Auf der Dartmouth-Konferenz entsteht der Begriff Artificial Intelligence.",
    detail:
      "Forscher treffen sich am Dartmouth College und stellen eine mutige Frage: Können Maschinen lernen, planen und Probleme lösen? Dort wird KI zu einem eigenen Forschungsgebiet.",
    today:
      "Dieser Moment zeigt: KI war von Anfang an nicht nur Technik, sondern eine Vision davon, wie Maschinen Menschen unterstützen können.",
    image: "/images/dartmouth.jpg",
    color: "violet",
  },
  {
    year: "1966",
    title: "Der erste Chatbot irritiert Menschen",
    chapter: "Kapitel 3",
    tag: "ELIZA",
    shortDesc: "ELIZA simuliert ein Gespräch und zeigt, wie stark Sprache wirkt.",
    detail:
      "ELIZA war ein frühes Programm, das Gespräche nachahmte. Es verstand Menschen nicht wirklich, aber viele Nutzer hatten trotzdem das Gefühl, mit etwas Intelligenten zu sprechen.",
    today:
      "Dieser Moment ist wichtig, weil moderne Chatbots genau auf dieser Idee aufbauen: Menschen schreiben mit Maschinen.",
    image: "/images/eliza.jpg",
    color: "blue",
  },
  {
    year: "1997",
    title: "Der Computer schlägt den Weltmeister",
    chapter: "Kapitel 4",
    tag: "Deep Blue",
    shortDesc: "Deep Blue besiegt Schachweltmeister Garry Kasparov.",
    detail:
      "IBMs Deep Blue gewann gegen Garry Kasparov. Das war ein Schockmoment, weil Schach lange als Symbol für menschliche Intelligenz galt.",
    today:
      "Deep Blue zeigte, dass Maschinen in spezialisierten Aufgaben besser sein können als Menschen.",
    image: "/images/deepblue.jpg",
    color: "emerald",
  },
  {
    year: "2012",
    title: "KI lernt sehen",
    chapter: "Kapitel 5",
    tag: "Deep Learning",
    shortDesc: "AlexNet zeigt, wie stark neuronale Netze bei Bildern werden können.",
    detail:
      "Mit AlexNet wurde Deep Learning plötzlich extrem wichtig. KI konnte Bilder viel besser erkennen als vorher. Möglich wurde das durch grosse Datenmengen und starke Grafikkarten.",
    today:
      "Heute steckt diese Entwicklung in Gesichtserkennung, Medizin, Kameras, Autos und Bildgeneratoren.",
    image: "/images/deeplearning.jpg",
    color: "cyan",
  },
  {
    year: "2022",
    title: "KI kommt in den Alltag",
    chapter: "Kapitel 6",
    tag: "ChatGPT",
    shortDesc: "Zum ersten Mal kann fast jeder direkt mit moderner KI arbeiten.",
    detail:
      "ChatGPT machte KI für Millionen Menschen sichtbar. Plötzlich konnte man mit KI Texte schreiben, lernen, programmieren, Ideen entwickeln und Fragen stellen.",
    today:
      "KI wurde vom Forschungsthema zum Werkzeug für Schüler, Entwickler, Firmen und kreative Menschen.",
    image: "/images/chatgpt.jpg",
    color: "violet",
  },
  {
    year: "Heute",
    title: "KI wird zum digitalen Partner",
    chapter: "Kapitel 7",
    tag: "KI-Agenten",
    shortDesc: "KI kann nicht nur antworten, sondern Aufgaben planen und ausführen.",
    detail:
      "Moderne KI-Systeme entwickeln sich von einfachen Chatbots zu Assistenten, die Aufgaben planen, Daten analysieren und Menschen bei Arbeit und Lernen unterstützen.",
    today:
      "Die wichtigste Frage ist nicht mehr, ob KI kommt. Die Frage ist, wie wir sie sinnvoll, fair und kontrolliert einsetzen.",
    image: "/images/future-ai.jpg",
    color: "blue",
  },
];

export interface WorkImpact {
  icon: string;
  title: string;
  type: "chance" | "risk";
  description: string;
  example: string;
}

export const workImpacts: WorkImpact[] = [
  {
    icon: "01",
    title: "Automatisierung",
    type: "risk",
    description:
      "KI übernimmt Aufgaben, die sich oft wiederholen. Das spart Zeit, kann aber auch einfache Arbeiten ersetzen.",
    example: "Dateneingabe, einfache Texte, Standard-Support",
  },
  {
    icon: "02",
    title: "Neue Berufe",
    type: "chance",
    description:
      "Durch KI entstehen neue Rollen. Menschen müssen lernen, KI zu steuern, zu prüfen und sinnvoll einzusetzen.",
    example: "AI Trainer, Data Analyst, Prompt Designer",
  },
  {
    icon: "03",
    title: "Neue Fähigkeiten",
    type: "chance",
    description:
      "Kritisches Denken, Kreativität und digitales Verständnis werden wichtiger als reines Auswendiglernen.",
    example: "Gute Fragen stellen, Ergebnisse prüfen, Quellen bewerten",
  },
  {
    icon: "04",
    title: "Datenanalyse",
    type: "chance",
    description:
      "KI erkennt Muster in grossen Datenmengen und hilft, bessere Entscheidungen zu treffen.",
    example: "Kundenverhalten, Lernfortschritt, Markttrends",
  },
  {
    icon: "05",
    title: "Verantwortung",
    type: "risk",
    description:
      "KI kann falsche Antworten geben oder Vorurteile übernehmen. Deshalb braucht es Kontrolle.",
    example: "Bias, Datenschutz, Deepfakes, falsche Informationen",
  },
  {
    icon: "06",
    title: "Mehr Möglichkeiten",
    type: "chance",
    description:
      "Einzelpersonen und kleine Teams können mit KI schneller Ideen testen und Projekte entwickeln.",
    example: "Websites, Designs, Texte, Code-Prototypen",
  },
];

export interface FutureQuestion {
  id: number;
  question: string;
  answers: {
    label: string;
    profile: "builder" | "creator" | "analyst" | "leader";
  }[];
}

export const futureQuestions: FutureQuestion[] = [
  {
    id: 1,
    question: "Was macht dir bei einem Projekt am meisten Spass?",
    answers: [
      { label: "Eine Website oder App bauen", profile: "builder" },
      { label: "Design, Bilder und Ideen entwickeln", profile: "creator" },
      { label: "Daten und Fakten verstehen", profile: "analyst" },
      { label: "Ein Team organisieren", profile: "leader" },
    ],
  },
  {
    id: 2,
    question: "Wie würdest du KI am ehesten nutzen?",
    answers: [
      { label: "Für Code und technische Lösungen", profile: "builder" },
      { label: "Für kreative Inhalte und Konzepte", profile: "creator" },
      { label: "Für Recherche und Analyse", profile: "analyst" },
      { label: "Für Planung und Entscheidungen", profile: "leader" },
    ],
  },
  {
    id: 3,
    question: "Was ist deine stärkste Eigenschaft?",
    answers: [
      { label: "Ich probiere gerne technisch aus", profile: "builder" },
      { label: "Ich denke gerne visuell und kreativ", profile: "creator" },
      { label: "Ich erkenne Zusammenhänge schnell", profile: "analyst" },
      { label: "Ich kann andere motivieren", profile: "leader" },
    ],
  },
  {
    id: 4,
    question: "Welche Zukunft passt am besten zu dir?",
    answers: [
      { label: "Digitale Produkte entwickeln", profile: "builder" },
      { label: "Medien, Design oder Content gestalten", profile: "creator" },
      { label: "Mit Daten und Wissen arbeiten", profile: "analyst" },
      { label: "Projekte oder Unternehmen führen", profile: "leader" },
    ],
  },
];

export const futureProfiles = {
  builder: {
    title: "AI Builder",
    subtitle: "Du baust Lösungen.",
    score: 92,
    description:
      "Du passt zu technischen Projekten. Für dich ist KI vor allem ein Werkzeug, um schneller Websites, Apps und digitale Systeme zu entwickeln.",
    recommendation:
      "Lerne Next.js, TypeScript, APIs und wie man KI sinnvoll in echte Produkte integriert.",
  },
  creator: {
    title: "AI Creator",
    subtitle: "Du machst Ideen sichtbar.",
    score: 88,
    description:
      "Du nutzt KI kreativ. Für dich ist KI spannend, weil sie Texte, Bilder, Designs und Konzepte schneller möglich macht.",
    recommendation:
      "Beschäftige dich mit UI/UX, Storytelling, Bildgenerierung und kreativen KI-Workflows.",
  },
  analyst: {
    title: "AI Analyst",
    subtitle: "Du verstehst Muster.",
    score: 90,
    description:
      "Du denkst logisch und suchst Zusammenhänge. KI hilft dir, Daten, Trends und komplexe Themen besser zu verstehen.",
    recommendation:
      "Lerne Datenanalyse, Statistik, Recherche und wie man KI-Ergebnisse kritisch überprüft.",
  },
  leader: {
    title: "AI Strategist",
    subtitle: "Du denkst in Richtung Zukunft.",
    score: 86,
    description:
      "Du interessierst dich dafür, wie KI Menschen, Teams und Entscheidungen verändert. Du siehst KI als Werkzeug für Fortschritt.",
    recommendation:
      "Beschäftige dich mit Projektmanagement, Ethik, Wirtschaft und digitaler Transformation.",
  },
};