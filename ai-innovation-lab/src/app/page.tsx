"use client";

import { useMemo, useState, type ReactNode } from "react";

type Theme = "cyan" | "violet" | "emerald" | "amber" | "blue";
type ProfileKey = "builder" | "creator" | "analyst" | "strategist";

type Chapter = {
  year: string;
  title: string;
  tag: string;
  image: string;
  theme: Theme;
  story: string;
  meaning: string;
  today: string;
};

type JobRole = {
  role: string;
  theme: Theme;
  change: string;
  chance: string;
  risk: string;
  skill: string;
};

type LabFeature = {
  label: string;
  theme: Theme;
  title: string;
  desc: string;
  before: string;
  after: string;
  metrics: { label: string; value: number }[];
};

type QuizQuestion = {
  question: string;
  answers: { label: string; profile: ProfileKey }[];
};

const theme = {
  cyan: {
    text: "text-cyan-300",
    border: "border-cyan-400/35",
    bg: "bg-cyan-400/10",
  },
  violet: {
    text: "text-violet-300",
    border: "border-violet-400/35",
    bg: "bg-violet-400/10",
  },
  emerald: {
    text: "text-emerald-300",
    border: "border-emerald-400/35",
    bg: "bg-emerald-400/10",
  },
  amber: {
    text: "text-amber-300",
    border: "border-amber-400/35",
    bg: "bg-amber-400/10",
  },
  blue: {
    text: "text-blue-300",
    border: "border-blue-400/35",
    bg: "bg-blue-400/10",
  },
};

const chapters: Chapter[] = [
  {
    year: "1936",
    title: "Können Maschinen denken?",
    tag: "Ursprung",
    image: "/images/turing.jpg",
    theme: "cyan",
    story:
      "Alan Turing beschreibt eine theoretische Maschine, die jeden berechenbaren Prozess ausführen kann. Damit entsteht eine der wichtigsten Grundlagen moderner Informatik.",
    meaning:
      "Zum ersten Mal wird Denken nicht nur philosophisch betrachtet, sondern technisch modelliert.",
    today:
      "Ohne diese Idee gäbe es keine modernen Computer, keine Apps und keine heutigen KI-Systeme.",
  },
  {
    year: "1956",
    title: "KI bekommt einen Namen",
    tag: "Dartmouth",
    image: "/images/dartmouth.jpg",
    theme: "violet",
    story:
      "Auf der Dartmouth-Konferenz wird der Begriff Artificial Intelligence geprägt. Aus einer Idee wird ein eigenes Forschungsgebiet.",
    meaning:
      "KI wird nicht mehr als Science-Fiction gesehen, sondern als wissenschaftliches Ziel.",
    today:
      "Viele heutige KI-Systeme bauen auf Fragen auf, die damals zum ersten Mal ernsthaft gestellt wurden.",
  },
  {
    year: "1966",
    title: "Der erste Chatbot irritiert Menschen",
    tag: "ELIZA",
    image: "/images/eliza.jpg",
    theme: "blue",
    story:
      "ELIZA simuliert Gespräche, indem sie Sätze spiegelt und Fragen zurückgibt. Viele Nutzer fühlen sich verstanden, obwohl das Programm nichts wirklich versteht.",
    meaning:
      "ELIZA zeigt, wie stark Sprache wirkt und wie schnell Menschen Maschinen Intelligenz zuschreiben.",
    today:
      "Moderne Chatbots sind viel stärker, aber die Grundidee bleibt gleich: Mensch und Maschine sprechen miteinander.",
  },
  {
    year: "1997",
    title: "Maschine schlägt Mensch",
    tag: "Deep Blue",
    image: "/images/deepblue.jpg",
    theme: "emerald",
    story:
      "IBMs Deep Blue besiegt Schachweltmeister Garry Kasparov. Schach galt lange als Symbol für menschliche Intelligenz.",
    meaning:
      "Die Welt sieht: Maschinen können in spezialisierten Aufgaben stärker werden als Menschen.",
    today:
      "Diese Spezialisierung steckt heute in Navigation, Medizin, Suchmaschinen und Analyse-Systemen.",
  },
  {
    year: "2012",
    title: "KI lernt sehen",
    tag: "Deep Learning",
    image: "/images/neural-network.jpg",
    theme: "cyan",
    story:
      "Neuronale Netze erreichen bei der Bilderkennung einen grossen Durchbruch. Datenmengen und GPUs verändern die KI-Forschung komplett.",
    meaning:
      "KI erkennt nicht mehr nur Regeln, sondern Muster in riesigen Datenmengen.",
    today:
      "Bildanalyse, Gesichtserkennung, Medizin und Bildgeneratoren nutzen diese Entwicklung.",
  },
  {
    year: "2022",
    title: "KI kommt in den Alltag",
    tag: "ChatGPT",
    image: "/images/chatgpt.jpg",
    theme: "violet",
    story:
      "ChatGPT macht moderne KI für Millionen Menschen direkt nutzbar. Plötzlich kann jeder mit KI schreiben, lernen, planen und programmieren.",
    meaning:
      "KI ist nicht mehr nur Expertentechnik, sondern ein Werkzeug für Schüler, Entwickler, Firmen und normale Nutzer.",
    today:
      "Die wichtigste Fähigkeit wird, KI sinnvoll zu benutzen und ihre Antworten kritisch zu prüfen.",
  },
  {
    year: "Heute",
    title: "KI verändert Schule und Beruf",
    tag: "Arbeitswelt",
    image: "/images/school-ai.jpg",
    theme: "amber",
    story:
      "KI verändert Lernen, Ausbildung und Berufe. Nicht nur einfache Arbeit, sondern auch kreative, technische und analytische Aufgaben.",
    meaning:
      "Es geht nicht nur darum, ob Jobs verschwinden. Es geht darum, wie Aufgaben sich verändern.",
    today:
      "Wer KI versteht, kann schneller lernen, besser arbeiten und Projekte professioneller umsetzen.",
  },
  {
    year: "Zukunft",
    title: "KI wird digitaler Partner",
    tag: "Agenten",
    image: "/images/future-work.jpg",
    theme: "blue",
    story:
      "KI-Systeme werden von Antwortmaschinen zu digitalen Partnern, die planen, analysieren und Aufgaben vorbereiten.",
    meaning:
      "Menschen arbeiten stärker mit KI zusammen, statt KI nur als Suchmaschine zu benutzen.",
    today:
      "Die zentrale Frage ist: Wie nutzen wir KI produktiv, fair und kontrolliert?",
  },
];

const jobs: JobRole[] = [
  {
    role: "Schüler",
    theme: "cyan",
    change:
      "Lernen wird persönlicher. KI kann erklären, zusammenfassen und beim Üben helfen.",
    chance: "Schwierige Themen werden schneller verständlich.",
    risk: "Wer nur kopiert, lernt weniger und verliert eigenes Denken.",
    skill: "Gute Fragen stellen und Antworten prüfen.",
  },
  {
    role: "Entwickler",
    theme: "violet",
    change: "Code kann schneller geplant, geschrieben und verbessert werden.",
    chance: "Prototypen entstehen schneller.",
    risk: "Blind kopierter Code kann unsicher oder falsch sein.",
    skill: "Code verstehen und Architektur sauber planen.",
  },
  {
    role: "Designer",
    theme: "blue",
    change: "Layouts, Bilder und Ideen können schneller getestet werden.",
    chance: "Mehr Varianten in weniger Zeit.",
    risk: "Designs wirken generisch, wenn kein eigener Stil dahintersteht.",
    skill: "Geschmack, Konzept und klare visuelle Entscheidungen.",
  },
  {
    role: "Bürojob",
    theme: "amber",
    change: "E-Mails, Dokumente und Auswertungen werden automatisierter.",
    chance: "Mehr Zeit für wichtige Entscheidungen.",
    risk: "Standardaufgaben verlieren an Wert.",
    skill: "Digitale Werkzeuge sicher nutzen.",
  },
  {
    role: "Unternehmer",
    theme: "emerald",
    change:
      "Kleine Teams können mit KI mehr leisten als früher grosse Abteilungen.",
    chance: "Schneller testen, analysieren und verbessern.",
    risk: "Falsche Daten führen zu falschen Entscheidungen.",
    skill: "Strategie, Verantwortung und Datenverständnis.",
  },
];

const labFeatures: LabFeature[] = [
  {
    label: "Chatbot",
    theme: "cyan",
    title: "KI-Support direkt auf der Website",
    desc: "Ein Chatbot beantwortet Fragen sofort und führt Nutzer durch Inhalte.",
    before: "Nutzer suchen lange in Menüs.",
    after: "Nutzer fragen direkt und bekommen passende Antworten.",
    metrics: [
      { label: "Antwortzeit", value: 86 },
      { label: "Orientierung", value: 72 },
      { label: "Interaktion", value: 91 },
    ],
  },
  {
    label: "Personalisierung",
    theme: "violet",
    title: "Inhalte passen sich dem Nutzer an",
    desc: "Die Website erkennt Interessen und zeigt relevantere Inhalte.",
    before: "Jeder sieht dieselbe Website.",
    after: "Schüler, Entwickler oder Lehrer sehen passende Bereiche.",
    metrics: [
      { label: "Relevanz", value: 88 },
      { label: "Verständnis", value: 74 },
      { label: "Nutzungsdauer", value: 79 },
    ],
  },
  {
    label: "Empfehlungen",
    theme: "emerald",
    title: "Die Website schlägt den nächsten Schritt vor",
    desc: "Empfehlungen helfen Nutzern, nicht stecken zu bleiben.",
    before: "Nach einem Abschnitt weiss man nicht weiter.",
    after: "Die Website empfiehlt Demo, Timeline oder passende Themen.",
    metrics: [
      { label: "Navigation", value: 81 },
      { label: "Klickrate", value: 69 },
      { label: "Flow", value: 84 },
    ],
  },
  {
    label: "Design-Analyse",
    theme: "blue",
    title: "Daten verbessern das Design",
    desc: "Klicks und Verhalten zeigen, welche Bereiche funktionieren.",
    before: "Design basiert nur auf Gefühl.",
    after: "Design wird durch Daten gezielt verbessert.",
    metrics: [
      { label: "Klarheit", value: 76 },
      { label: "Layout", value: 83 },
      { label: "Lesbarkeit", value: 89 },
    ],
  },
  {
    label: "Datenanalyse",
    theme: "amber",
    title: "Muster werden sichtbar",
    desc: "KI kann grosse Mengen an Verhalten und Feedback auswerten.",
    before: "Feedback bleibt unübersichtlich.",
    after: "Trends, Probleme und Interessen werden sichtbar.",
    metrics: [
      { label: "Insights", value: 92 },
      { label: "Tempo", value: 87 },
      { label: "Kontrolle", value: 68 },
    ],
  },
];

const questions: QuizQuestion[] = [
  {
    question: "Was macht dir bei einem Projekt am meisten Spass?",
    answers: [
      { label: "Eine Website oder App bauen", profile: "builder" },
      { label: "Designs und Ideen entwickeln", profile: "creator" },
      { label: "Daten und Fakten verstehen", profile: "analyst" },
      { label: "Ein Team organisieren", profile: "strategist" },
    ],
  },
  {
    question: "Wie würdest du KI am ehesten nutzen?",
    answers: [
      { label: "Für Code und technische Lösungen", profile: "builder" },
      { label: "Für kreative Inhalte", profile: "creator" },
      { label: "Für Recherche und Analyse", profile: "analyst" },
      { label: "Für Planung und Strategie", profile: "strategist" },
    ],
  },
  {
    question: "Welche Stärke passt am besten zu dir?",
    answers: [
      { label: "Ich probiere gerne technisch aus", profile: "builder" },
      { label: "Ich denke visuell und kreativ", profile: "creator" },
      { label: "Ich erkenne Muster schnell", profile: "analyst" },
      { label: "Ich motiviere gerne andere", profile: "strategist" },
    ],
  },
  {
    question: "Was sollte eine gute Website können?",
    answers: [
      { label: "Stabil funktionieren", profile: "builder" },
      { label: "Visuell auffallen", profile: "creator" },
      { label: "Informationen logisch erklären", profile: "analyst" },
      { label: "Menschen überzeugen", profile: "strategist" },
    ],
  },
  {
    question: "Welche Zukunft klingt spannend?",
    answers: [
      { label: "Digitale Produkte entwickeln", profile: "builder" },
      { label: "Medien oder Designs gestalten", profile: "creator" },
      { label: "Mit Daten arbeiten", profile: "analyst" },
      { label: "Projekte aufbauen", profile: "strategist" },
    ],
  },
];

const profiles = {
  builder: {
    title: "AI Builder",
    score: 94,
    desc: "Du passt zu technischen Projekten. Für dich ist KI ein Werkzeug, um Websites, Apps und digitale Systeme zu bauen.",
    strengths: ["Technisches Denken", "Problemlösung", "Prototyping"],
    risk: "Du darfst nicht nur auf Tools vertrauen. Du musst verstehen, was der Code macht.",
    recommendation: "Lerne Next.js, TypeScript, APIs und saubere Projektstruktur.",
  },
  creator: {
    title: "AI Creator",
    score: 89,
    desc: "Du nutzt KI kreativ. Für dich ist KI spannend, weil sie Texte, Bilder, Designs und Konzepte schneller möglich macht.",
    strengths: ["Storytelling", "Designgefühl", "Kreative Ideen"],
    risk: "KI-Designs wirken schnell generisch, wenn kein eigener Stil dahintersteht.",
    recommendation: "Lerne UI/UX, Bildsprache und kreatives Arbeiten mit KI.",
  },
  analyst: {
    title: "AI Analyst",
    score: 91,
    desc: "Du denkst logisch und suchst Zusammenhänge. KI hilft dir, Daten, Trends und komplexe Themen besser zu verstehen.",
    strengths: ["Recherche", "Struktur", "Kritisches Denken"],
    risk: "KI kann überzeugend klingen, auch wenn sie falsch liegt.",
    recommendation: "Lerne Datenanalyse, Quellenprüfung und Statistik-Grundlagen.",
  },
  strategist: {
    title: "AI Strategist",
    score: 87,
    desc: "Du interessierst dich dafür, wie KI Menschen, Teams und Entscheidungen verändert.",
    strengths: ["Planung", "Kommunikation", "Entscheidungen"],
    risk: "Strategie ohne technisches Verständnis bleibt oberflächlich.",
    recommendation: "Lerne Projektmanagement, Ethik und digitale Transformation.",
  },
};

function Label({ children }: { children: ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function SmartImage({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="image-fallback">
        <span>{label}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#05070d]/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-semibold text-white">
          AI Experience Lab
        </a>

        <div className="hidden gap-2 md:flex">
          {[
            ["Story", "#story"],
            ["Timeline", "#timeline"],
            ["Arbeitswelt", "#work"],
            ["Test", "#test"],
            ["Website Lab", "#website-lab"],
            ["Über Diart", "#about"],
          ].map(([name, link]) => (
            <a key={link} href={link} className="nav-pill">
              {name}
            </a>
          ))}
        </div>

        <span className="hidden text-xs text-white/35 md:block">
          Built by Diart Selmani
        </span>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="absolute inset-0 -z-10 neural-bg" />
      <div className="orb orb-cyan left-[-10%] top-[15%]" />
      <div className="orb orb-violet bottom-[-10%] right-[-8%]" />

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pt-28 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <Label>Abschlussprojekt · Diart Selmani</Label>

          <h1 className="mt-6 max-w-4xl text-6xl font-black leading-[0.95] tracking-[-0.06em] md:text-8xl">
            KI wird erst spannend, wenn man sie{" "}
            <span className="text-gradient">erleben</span> kann.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/58">
            Diese Website ist keine normale KI-Landingpage. Sie verbindet
            Storytelling, interaktive Tests, Website-Demos und persönliche
            Projektarbeit zu einer digitalen Erfahrung.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#story" className="btn-primary">
              Experience starten
            </a>
            <a href="#test" className="btn-secondary">
              Schüler-Test öffnen
            </a>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["8", "Story-Kapitel"],
              ["5", "Lab-Demos"],
              ["4", "KI-Profile"],
              ["100%", "Interaktiv"],
            ].map(([value, label]) => (
              <div key={label} className="metric-card">
                <p className="text-3xl font-black text-white">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/35">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="network-line line-a" />
          <div className="network-line line-b" />
          <div className="network-line line-c" />

          {["Turing", "ELIZA", "Deep Blue", "ChatGPT", "KI-Agenten"].map(
            (item, index) => (
              <div key={item} className={`network-node node-${index + 1}`}>
                <span>{item}</span>
              </div>
            ),
          )}

          <div className="terminal-card">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>

            <p className="font-mono text-xs text-cyan-300">
              ai-experience-lab
            </p>
            <p className="mt-3 text-2xl font-bold leading-tight">
              Story. Test. Lab. Persönlichkeit.
            </p>
            <p className="mt-4 text-sm leading-6 text-white/50">
              Eine Website, die KI nicht nur erklärt, sondern als digitale
              Erfahrung zeigt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceTabs() {
  const tabs = [
    [
      "Story",
      "Die Website erzählt KI als Entwicklung: von Turings Denkmaschine bis zu KI-Agenten.",
    ],
    [
      "Timeline",
      "Klickbare Kapitel zeigen, warum jeder KI-Meilenstein wichtig war.",
    ],
    [
      "Schüler-Test",
      "Nutzer beantworten Fragen und erhalten ein persönliches KI-Zukunftsprofil.",
    ],
    ["Website Lab", "Mini-Demos zeigen, wie KI moderne Websites verbessert."],
    [
      "Über Diart",
      "Der persönliche Bereich macht klar: Dieses Projekt hat eine echte Handschrift.",
    ],
  ];

  const [active, setActive] = useState(0);

  return (
    <section id="story" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <Label>Experience Mode</Label>

        <div className="mt-6 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-5xl font-black tracking-[-0.04em] md:text-7xl">
              Nicht lesen. Erkunden.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/52">
              Die Website ist wie eine kleine App aufgebaut. Schüler können
              klicken, testen, vergleichen und entdecken.
            </p>
          </div>

          <div className="experience-panel">
            <div className="flex flex-wrap gap-3">
              {tabs.map(([title], index) => (
                <button
                  key={title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`tab-button ${
                    active === index ? "tab-button-active" : ""
                  }`}
                >
                  {title}
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-black/25 p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">
                Aktiver Bereich
              </p>
              <h3 className="mt-4 text-4xl font-black">{tabs[active][0]}</h3>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
                {tabs[active][1]}
              </p>

              <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400 transition-all duration-500"
                  style={{ width: `${((active + 1) / tabs.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const [active, setActive] = useState(0);
  const chapter = chapters[active];
  const c = theme[chapter.theme];

  return (
    <section id="timeline" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Label>Story Timeline</Label>
            <h2 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.04em] md:text-7xl">
              Acht Kapitel, die zeigen, wie KI gross wurde.
            </h2>
          </div>

          <div className="w-full max-w-sm">
            <div className="mb-3 flex justify-between text-xs uppercase tracking-[0.2em] text-white/35">
              <span>Fortschritt</span>
              <span>
                {active + 1}/{chapters.length}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400 transition-all duration-500"
                style={{ width: `${((active + 1) / chapters.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid max-h-[660px] gap-3 overflow-y-auto pr-2">
            {chapters.map((item, index) => {
              const itemTheme = theme[item.theme];
              const isActive = index === active;

              return (
                <button
                  key={`${item.year}-${item.title}`}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`timeline-button ${
                    isActive ? `${itemTheme.border} ${itemTheme.bg}` : ""
                  }`}
                >
                  <span
                    className={`text-sm ${
                      isActive ? itemTheme.text : "text-white/30"
                    }`}
                  >
                    {item.year}
                  </span>
                  <span className="text-left text-lg font-bold">
                    {item.title}
                  </span>
                  <span className="text-left text-sm text-white/42">
                    {item.tag}
                  </span>
                </button>
              );
            })}
          </div>

          <div className={`story-card ${c.border}`}>
            <div className="story-image">
              <SmartImage
                src={chapter.image}
                alt={chapter.title}
                label={chapter.tag}
              />

              <div className="absolute bottom-6 left-6 z-10">
                <p className={`text-sm uppercase tracking-[0.24em] ${c.text}`}>
                  {chapter.tag}
                </p>
                <p className="mt-2 text-5xl font-black">{chapter.year}</p>
              </div>
            </div>

            <div className="p-7 md:p-10">
              <h3 className="text-4xl font-black tracking-[-0.03em] md:text-5xl">
                {chapter.title}
              </h3>
              <p className="mt-6 text-lg leading-8 text-white/60">
                {chapter.story}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                  <p className={`mb-2 text-sm font-semibold ${c.text}`}>
                    Warum es wichtig war
                  </p>
                  <p className="text-sm leading-6 text-white/52">
                    {chapter.meaning}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                  <p className={`mb-2 text-sm font-semibold ${c.text}`}>
                    Was es heute bedeutet
                  </p>
                  <p className="text-sm leading-6 text-white/52">
                    {chapter.today}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={() => setActive((v) => Math.max(0, v - 1))}
                  disabled={active === 0}
                  className="btn-secondary disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Zurück
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setActive((v) => Math.min(chapters.length - 1, v + 1))
                  }
                  disabled={active === chapters.length - 1}
                  className="btn-primary disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Weiter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function JobRadar() {
  const [active, setActive] = useState(jobs[0]);
  const c = theme[active.theme];

  return (
    <section id="work" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <Label>Job Impact Radar</Label>

        <div className="mt-6 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-5xl font-black tracking-[-0.04em] md:text-7xl">
              KI verändert nicht Jobs. Sie verändert Aufgaben.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/52">
              Wähle eine Rolle und sieh, wie KI Schule, Arbeit und Ausbildung
              beeinflussen kann.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {jobs.map((job) => (
                <button
                  key={job.role}
                  type="button"
                  onClick={() => setActive(job)}
                  className={`tab-button ${
                    active.role === job.role ? "tab-button-active" : ""
                  }`}
                >
                  {job.role}
                </button>
              ))}
            </div>
          </div>

          <div className={`radar-card ${c.border}`}>
            <p className={`text-sm uppercase tracking-[0.3em] ${c.text}`}>
              Aktive Rolle
            </p>
            <h3 className="mt-4 text-5xl font-black">{active.role}</h3>
            <p className="mt-5 text-lg leading-8 text-white/60">
              {active.change}
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="impact-box border-emerald-400/25 bg-emerald-400/10">
                <p className="text-sm font-bold text-emerald-300">Chance</p>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  {active.chance}
                </p>
              </div>

              <div className="impact-box border-amber-400/25 bg-amber-400/10">
                <p className="text-sm font-bold text-amber-300">Risiko</p>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  {active.risk}
                </p>
              </div>

              <div className="impact-box border-cyan-400/25 bg-cyan-400/10">
                <p className="text-sm font-bold text-cyan-300">Skill</p>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  {active.skill}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WebsiteLab() {
  const [active, setActive] = useState(labFeatures[0]);
  const c = theme[active.theme];

  return (
    <section id="website-lab" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <Label>Website Lab</Label>

        <div className="mt-6 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-5xl font-black tracking-[-0.04em] md:text-7xl">
              So wird eine Website durch KI lebendig.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/52">
              Wähle eine Funktion. Rechts siehst du eine Mini-Demo.
            </p>

            <div className="mt-8 grid gap-3">
              {labFeatures.map((feature) => (
                <button
                  key={feature.label}
                  type="button"
                  onClick={() => setActive(feature)}
                  className={`lab-button ${
                    active.label === feature.label
                      ? `${theme[feature.theme].border} ${
                          theme[feature.theme].bg
                        }`
                      : ""
                  }`}
                >
                  <span>{feature.label}</span>
                  <span className="text-white/32">Demo öffnen</span>
                </button>
              ))}
            </div>
          </div>

          <div className={`browser-demo ${c.border}`}>
            <div className="browser-bar">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <p className="ml-4 text-xs text-white/35">
                ai-lab.local/{active.label.toLowerCase()}
              </p>
            </div>

            <div className="p-6 md:p-8">
              <p className={`text-sm uppercase tracking-[0.25em] ${c.text}`}>
                {active.label}
              </p>
              <h3 className="mt-4 text-4xl font-black">{active.title}</h3>
              <p className="mt-4 text-base leading-7 text-white/55">
                {active.desc}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="compare-card">
                  <p className="text-sm font-bold text-white/50">Vorher</p>
                  <p className="mt-3 text-sm leading-6 text-white/42">
                    {active.before}
                  </p>
                </div>

                <div className={`compare-card ${c.border} ${c.bg}`}>
                  <p className={`text-sm font-bold ${c.text}`}>
                    Nachher mit KI
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/62">
                    {active.after}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                {active.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="mb-2 flex justify-between text-xs uppercase tracking-[0.18em] text-white/35">
                      <span>{metric.label}</span>
                      <span>{metric.value}%</span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400 transition-all duration-700"
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FutureTest() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<ProfileKey, number>>({
    builder: 0,
    creator: 0,
    analyst: 0,
    strategist: 0,
  });

  const finished = step >= questions.length;
  const question = questions[step];

  const resultKey = useMemo(() => {
    return Object.entries(scores).sort(
      (a, b) => b[1] - a[1],
    )[0][0] as ProfileKey;
  }, [scores]);

  const result = profiles[resultKey];

  function choose(profile: ProfileKey) {
    setScores((current) => ({
      ...current,
      [profile]: current[profile] + 1,
    }));
    setStep((current) => current + 1);
  }

  function reset() {
    setStep(0);
    setScores({
      builder: 0,
      creator: 0,
      analyst: 0,
      strategist: 0,
    });
  }

  return (
    <section id="test" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <Label>Interaktiver Schüler-Test</Label>

        <div className="mt-6 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-5xl font-black tracking-[-0.04em] md:text-7xl">
              Welcher KI-Zukunftstyp bist du?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/52">
              Schüler beantworten fünf Fragen und erhalten ein persönliches
              KI-Profil.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {Object.values(profiles).map((profile) => (
                <div key={profile.title} className="profile-mini">
                  <p className="font-bold">{profile.title}</p>
                  <p className="mt-1 text-sm text-white/38">
                    {profile.score}% KI-Fit
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="test-card">
            {!finished ? (
              <>
                <div className="mb-8 flex items-center justify-between gap-4">
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
                    Frage {step + 1} / {questions.length}
                  </p>

                  <div className="h-2 w-40 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-500"
                      style={{
                        width: `${((step + 1) / questions.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <h3 className="text-3xl font-black leading-tight md:text-4xl">
                  {question.question}
                </h3>

                <div className="mt-8 grid gap-3">
                  {question.answers.map((answer) => (
                    <button
                      key={answer.label}
                      type="button"
                      onClick={() => choose(answer.profile)}
                      className="answer-button"
                    >
                      {answer.label}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="animate-fade-up">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
                  Dein Ergebnis
                </p>

                <h3 className="mt-5 text-5xl font-black text-gradient">
                  {result.title}
                </h3>

                <div className="mt-8 rounded-3xl border border-white/10 bg-black/25 p-6">
                  <div className="mb-3 flex items-end justify-between">
                    <span className="text-sm text-white/40">KI-Fit Score</span>
                    <span className="text-5xl font-black text-cyan-300">
                      {result.score}%
                    </span>
                  </div>

                  <div className="h-4 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400"
                      style={{ width: `${result.score}%` }}
                    />
                  </div>
                </div>

                <p className="mt-7 text-lg leading-8 text-white/60">
                  {result.desc}
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                    <p className="font-bold text-emerald-300">Stärken</p>
                    <ul className="mt-3 space-y-2 text-sm text-white/58">
                      {result.strengths.map((strength) => (
                        <li key={strength}>• {strength}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 p-5">
                    <p className="font-bold text-amber-300">Achtung</p>
                    <p className="mt-3 text-sm leading-6 text-white/58">
                      {result.risk}
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                  <p className="font-bold text-cyan-300">Empfehlung</p>
                  <p className="mt-3 text-sm leading-6 text-white/62">
                    {result.recommendation}
                  </p>
                </div>

                <button type="button" onClick={reset} className="btn-primary mt-8">
                  Test neu starten
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutDiart() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <Label>Built by Diart Selmani</Label>

        <div className="mt-6 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="profile-card">
            <div className="profile-image">
              <SmartImage src="/images/diart.jpg" alt="Diart Selmani" label="DS" />
            </div>

            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
                Developer · AI Project
              </p>
              <h2 className="mt-4 text-5xl font-black tracking-[-0.04em]">
                Diart Selmani
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/58">
                Ich interessiere mich für KI, Technologie und moderne Websites.
                Dieses Projekt zeigt, dass Theorie, Design, Programmierung und
                Interaktion zusammen eine echte digitale Erfahrung ergeben
                können.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-black tracking-[-0.03em]">
              Persönlich, aber professionell.
            </h3>
            <p className="mt-5 text-lg leading-8 text-white/52">
              Der persönliche Bereich macht die Website weniger generisch. Er
              zeigt, dass hinter dem Projekt eine echte Person mit Interessen,
              Werten und Motivation steht.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                [
                  "Disziplin",
                  "Joggen zeigt: Fortschritt entsteht durch Wiederholung.",
                ],
                [
                  "Lernen",
                  "Technologie verändert sich. Wer lernt, bleibt relevant.",
                ],
                ["Fokus", "Ein gutes Projekt braucht klare Entscheidungen."],
                [
                  "Vorbild",
                  "Arda Saatci steht für Inspiration, Stil und Motivation.",
                ],
              ].map(([title, text]) => (
                <div key={title} className="value-card">
                  <p className="font-bold text-white">{title}</p>
                  <p className="mt-3 text-sm leading-6 text-white/45">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-violet-400/20 bg-violet-400/10 p-6">
              <p className="text-xl font-bold">
                Ziel: Keine 0815-Website, sondern ein Projekt mit eigener
                Handschrift.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Finale() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white p-8 text-black md:p-14">
        <p className="text-sm uppercase tracking-[0.25em] text-black/40">
          Fazit
        </p>
        <h2 className="mt-5 max-w-5xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
          Diese Website verbindet Theorie, Design, Code und Interaktion.
        </h2>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-black/55">
          KI wird nicht nur erklärt. Die Website zeigt selbst, wie digitale
          Innovation aussehen kann: interaktive Tabs, Story-Timeline,
          Schüler-Test, Website Lab und persönlicher Projektbezug.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/35 md:flex-row">
        <p>AI Experience Lab</p>
        <p>Next.js · React · TypeScript · Tailwind CSS</p>
        <p>© 2026 Diart Selmani</p>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="site-shell">
      <Header />
      <Hero />
      <ExperienceTabs />
      <Timeline />
      <JobRadar />
      <WebsiteLab />
      <FutureTest />
      <AboutDiart />
      <Finale />
      <Footer />
    </main>
  );
}