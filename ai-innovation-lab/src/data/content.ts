export interface TimelineEvent {
  year: string;
  title: string;
  tag: string;
  shortDesc: string;
  detail: string;
  color: 'cyan' | 'violet' | 'blue' | 'emerald';
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: '1936',
    title: 'Alan Turing',
    tag: 'Theorie',
    shortDesc: 'Die Basis aller Computer',
    detail:
      'Alan Turing beschreibt eine theoretische Maschine, die jeden berechenbaren Prozess simulieren kann – die Grundlage moderner Computer und KI. Er stellt auch die berühmte Frage: "Kann eine Maschine denken?"',
    color: 'cyan',
  },
  {
    year: '1956',
    title: 'Dartmouth-Konferenz',
    tag: 'Geburt der KI',
    shortDesc: 'Der Begriff "Artificial Intelligence" wird geboren',
    detail:
      'John McCarthy, Marvin Minsky und andere Forscher treffen sich am Dartmouth College. Sie prägen den Begriff "Artificial Intelligence" und legen die Grundpfeiler eines neuen Forschungsfeldes – der KI-Forschung.',
    color: 'violet',
  },
  {
    year: '1966',
    title: 'ELIZA',
    tag: 'Erster Chatbot',
    shortDesc: 'Die erste Maschine, die "zuhört"',
    detail:
      'Joseph Weizenbaum entwickelt ELIZA am MIT – ein Programm, das menschliche Gespräche simuliert, indem es Sätze spiegelt und Fragen zurückwirft. Viele Menschen glaubten tatsächlich, mit einem echten Menschen zu sprechen.',
    color: 'blue',
  },
  {
    year: '1997',
    title: 'Deep Blue',
    tag: 'Maschine schlägt Mensch',
    shortDesc: 'IBM-Computer besiegt Schachweltmeister Kasparov',
    detail:
      'IBMs Deep Blue gewinnt eine Partie gegen Schachweltmeister Garry Kasparov. Es ist das erste Mal, dass eine Maschine einen amtierenden Weltmeister in einem Schachspiel besiegt – ein historischer Moment für die KI.',
    color: 'emerald',
  },
  {
    year: '2012',
    title: 'AlexNet',
    tag: 'Deep Learning',
    shortDesc: 'Neuronale Netze erkennen Bilder besser als je zuvor',
    detail:
      'Das neuronale Netz AlexNet revolutioniert die Bilderkennung beim ImageNet-Wettbewerb. Dies markiert den Beginn des Deep-Learning-Zeitalters und zeigt, dass grosse Datensätze und leistungsfähige GPUs die KI komplett verändern.',
    color: 'cyan',
  },
  {
    year: '2022',
    title: 'ChatGPT',
    tag: 'Sprachmodelle',
    shortDesc: 'KI wird für alle zugänglich',
    detail:
      'OpenAI veröffentlicht ChatGPT – innerhalb von 5 Tagen haben sich 1 Million Nutzer angemeldet. Zum ersten Mal kann jeder auf einfachste Weise mit einer fortgeschrittenen KI interagieren. Die Welt ändert sich.',
    color: 'violet',
  },
  {
    year: '2024+',
    title: 'KI-Agenten',
    tag: 'Heute & Morgen',
    shortDesc: 'KI handelt eigenständig und denkt voraus',
    detail:
      'Moderne KI-Agenten können selbst Aufgaben planen, Code schreiben, im Internet suchen und Entscheidungen treffen – ohne dass ein Mensch jeden Schritt vorgibt. Wir stehen am Beginn einer neuen Ära autonomer Systeme.',
    color: 'blue',
  },
];

export interface WorkImpact {
  icon: string;
  title: string;
  type: 'chance' | 'risk';
  description: string;
  example: string;
}

export const workImpacts: WorkImpact[] = [
  {
    icon: '⚡',
    title: 'Automatisierung',
    type: 'risk',
    description: 'Repetitive Aufgaben werden von Maschinen übernommen – schneller, günstiger, rund um die Uhr.',
    example: 'Rechnungsverarbeitung, Dateneingabe, einfache Übersetzungen',
  },
  {
    icon: '🚀',
    title: 'Neue Berufsbilder',
    type: 'chance',
    description: 'KI schafft Berufe, die es vor 10 Jahren noch gar nicht gab – von AI-Trainern bis zu Prompt-Engineers.',
    example: 'AI Product Manager, Data Scientist, Machine Learning Engineer',
  },
  {
    icon: '🎓',
    title: 'Neue Fähigkeiten',
    type: 'chance',
    description: 'Kritisches Denken, Kreativität und KI-Kompetenz werden zur wichtigsten Qualifikation der Zukunft.',
    example: 'Prompt Engineering, Datenanalyse, digitale Ethik',
  },
  {
    icon: '📊',
    title: 'Datenanalyse',
    type: 'chance',
    description: 'KI erkennt Muster in riesigen Datensätzen – und hilft Unternehmen, bessere Entscheidungen zu treffen.',
    example: 'Kundenverhalten vorhersagen, Risiken bewerten, Markttrends erkennen',
  },
  {
    icon: '⚖️',
    title: 'Verantwortung & Ethik',
    type: 'risk',
    description: 'Wer haftet, wenn KI falsch entscheidet? Fragen zu Fairness, Datenschutz und Kontrolle werden dringender.',
    example: 'Bias in Algorithmen, Deepfakes, automatisierte Entlassungen',
  },
  {
    icon: '🌍',
    title: 'Globale Chancen',
    type: 'chance',
    description: 'KI ermöglicht es kleinen Unternehmen und Einzelpersonen, global zu agieren wie nie zuvor.',
    example: 'KI-übersetzte Produkte, automatisiertes Marketing, No-Code-Tools',
  },
];

export interface DemoResponse {
  topic: string;
  emoji: string;
  title: string;
  responses: string[];
}

export const demoResponses: DemoResponse[] = [
  {
    topic: 'Schule',
    emoji: '🎓',
    title: 'KI & Schule',
    responses: [
      'KI kann dein Lernen personalisieren – sie weiss, was du noch nicht kannst, und erklärt es genau auf dein Level angepasst.',
      'Tools wie ChatGPT helfen beim Recherchieren, Texte verbessern oder Ideen entwickeln. Aber: Denken musst du trotzdem selbst!',
      'In der Schule der Zukunft werden Schüler lernen, wie man mit KI zusammenarbeitet – nicht gegen sie kämpft.',
    ],
  },
  {
    topic: 'Beruf',
    emoji: '💼',
    title: 'KI & Beruf',
    responses: [
      'Fast jeder Beruf wird von KI berührt – von Ärzten die KI-Diagnosen nutzen, bis zu Lehrern die KI-gestützte Curricula erstellen.',
      'Die gute Nachricht: Kreativität, Empathie und kritisches Denken kann KI (noch) nicht ersetzen.',
      'Wer jetzt lernt, wie KI funktioniert, hat einen riesigen Vorteil auf dem Jobmarkt der nächsten 10 Jahre.',
    ],
  },
  {
    topic: 'Website',
    emoji: '🌐',
    title: 'KI & Websites',
    responses: [
      'Diese Website ist selbst ein Beispiel: Mit Next.js, React und modernen Design-Patterns zeigen wir, wie digitale Projekte heute aussehen.',
      'KI hilft beim Entwickeln von Code, Optimieren von Layouts und sogar beim Schreiben von Inhalten.',
      'Chatbots, personalisierte Empfehlungen, dynamische Inhalte – KI macht Websites intelligenter und nutzerfreundlicher.',
    ],
  },
  {
    topic: 'Zukunft',
    emoji: '🔮',
    title: 'KI & Zukunft',
    responses: [
      'Experten schätzen, dass KI bis 2030 mehr zur Weltwirtschaft beiträgt als die aktuelle Wirtschaft Chinas.',
      'KI-Agenten werden bald eigenständig forschen, Code schreiben und Probleme lösen – und dabei Menschen wie Kollegen unterstützen.',
      'Die Frage ist nicht mehr "ob" KI unsere Welt verändert – sondern wie wir sicherstellen, dass diese Veränderung für alle gut ist.',
    ],
  },
];
