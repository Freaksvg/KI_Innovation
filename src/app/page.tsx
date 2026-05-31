"use client";

import { useMemo, useState } from "react";

type MilestoneData = {
  year: string;
  title: string;
  description: string;
  tag: string;
};

class Milestone {
  constructor(
    public readonly id: number,
    public readonly year: string,
    public readonly title: string,
    public readonly description: string,
    public readonly tag: string,
  ) {}

  getLabel(): string {
    return `${this.year} · ${this.title}`;
  }
}

class ImpactArea {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly value: string,
  ) {}
}

const milestones: Milestone[] = [
  new Milestone(
    1,
    "1936",
    "Turingmaschine",
    "Alan Turing zeigte theoretisch, dass Maschinen logische Schritte ausführen können. Das wurde später eine wichtige Grundlage für KI.",
    "Grundlage",
  ),
  new Milestone(
    2,
    "1956",
    "Der Begriff KI entsteht",
    "Auf der Dartmouth-Konferenz wurde der Begriff Künstliche Intelligenz geprägt. Ab diesem Punkt wurde KI als eigenes Forschungsgebiet betrachtet.",
    "Startpunkt",
  ),
  new Milestone(
    3,
    "1966",
    "ELIZA",
    "ELIZA war einer der ersten Chatbots. Das Programm konnte einfache Gespräche simulieren und zeigte, wie stark Sprache auf Menschen wirkt.",
    "Chatbot",
  ),
  new Milestone(
    4,
    "1997",
    "Deep Blue",
    "IBMs Schachcomputer Deep Blue besiegte Garry Kasparov. Das zeigte, dass Maschinen in spezialisierten Aufgaben stärker als Menschen sein können.",
    "Meilenstein",
  ),
  new Milestone(
    5,
    "2022",
    "ChatGPT",
    "ChatGPT machte moderne KI für Millionen Menschen direkt nutzbar. Plötzlich konnte jeder mit KI schreiben, lernen, planen und programmieren.",
    "Alltag",
  ),
  new Milestone(
    6,
    "Heute",
    "KI-Agenten",
    "Moderne KI-Systeme können nicht nur antworten, sondern auch Aufgaben planen, analysieren und Prozesse unterstützen.",
    "Zukunft",
  ),
];

const impactAreas: ImpactArea[] = [
  new ImpactArea(
    "Automatisierung",
    "KI kann wiederholende Aufgaben schneller erledigen. Dadurch bleibt mehr Zeit für kreative und komplexe Arbeit.",
    "Speed",
  ),
  new ImpactArea(
    "Neue Kompetenzen",
    "Menschen müssen lernen, KI richtig zu nutzen. Prompting, Datenverständnis und kritisches Denken werden wichtiger.",
    "Skills",
  ),
  new ImpactArea(
    "Bessere Entscheidungen",
    "KI kann grosse Datenmengen analysieren und Muster erkennen. Das hilft Unternehmen, schneller bessere Entscheidungen zu treffen.",
    "Data",
  ),
  new ImpactArea(
    "Risiken",
    "KI kann Fehler machen, falsche Informationen liefern oder Datenschutzprobleme verursachen. Darum braucht es Kontrolle.",
    "Trust",
  ),
];

const websiteFeatures = [
  {
    title: "KI-Chatbot",
    description:
      "Ein Chatbot kann Fragen beantworten und Nutzer durch die Website führen.",
  },
  {
    title: "Personalisierung",
    description:
      "Inhalte können je nach Interesse des Nutzers angepasst werden.",
  },
  {
    title: "Empfehlungen",
    description:
      "Die Website kann passende Inhalte, Themen oder Funktionen vorschlagen.",
  },
  {
    title: "Datenanalyse",
    description:
      "Klicks und Verhalten können ausgewertet werden, um die Website zu verbessern.",
  },
];

function getAssistantAnswer(input: string): string {
  const text = input.toLowerCase();

  if (text.includes("chatbot") || text.includes("support")) {
    return "Ein KI-Chatbot wäre sinnvoll, weil Besucher direkt Fragen stellen können. Dadurch wirkt die Website moderner und interaktiver.";
  }

  if (text.includes("arbeit") || text.includes("job")) {
    return "KI verändert die Arbeitswelt, weil sie Aufgaben automatisiert und neue Kompetenzen verlangt. Menschen werden nicht einfach ersetzt, aber viele Berufe verändern sich.";
  }

  if (text.includes("website") || text.includes("webseite")) {
    return "KI kann eine Website verbessern, indem sie Inhalte personalisiert, Nutzer unterstützt und Daten für bessere Entscheidungen auswertet.";
  }

  if (text.includes("timeline") || text.includes("geschichte")) {
    return "Eine Timeline ist stark für dieses Projekt, weil sie zeigt, dass KI nicht plötzlich entstanden ist, sondern sich über viele Jahrzehnte entwickelt hat.";
  }

  return "Gute Frage. In diesem Projekt geht es darum, KI verständlich zu erklären und zu zeigen, wie sie moderne Websites und die Arbeitswelt verändert.";
}

export default function Home() {
  const [activeMilestone, setActiveMilestone] = useState<Milestone>(
    milestones[4],
  );
  const [question, setQuestion] = useState("");

  const assistantAnswer = useMemo(() => {
    if (question.trim().length === 0) {
      return "Stelle eine Frage zu KI, Arbeit, Chatbots oder Websites.";
    }

    return getAssistantAnswer(question);
  }, [question]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="fixed inset-0 -z-10 animated-grid opacity-40" />
      <div className="fixed left-[-120px] top-[120px] -z-10 h-[360px] w-[360px] rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="fixed bottom-[-100px] right-[-100px] -z-10 h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[140px]" />

      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-semibold tracking-tight">
            AI Innovation Lab
          </a>

          <div className="hidden items-center gap-6 text-sm text-white/60 md:flex">
            <a href="#timeline" className="transition hover:text-white">
              Timeline
            </a>
            <a href="#work" className="transition hover:text-white">
              Arbeitswelt
            </a>
            <a href="#websites" className="transition hover:text-white">
              Websites
            </a>
            <a href="#demo" className="transition hover:text-white">
              Demo
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            Künstliche Intelligenz · Innovation · Website Entwicklung
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Wie KI die digitale Welt verändert.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Diese Website erklärt verständlich, wie Künstliche Intelligenz
            entstanden ist, wie sie die Arbeitswelt beeinflusst und wie sie in
            modernen Websites eingesetzt werden kann.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#timeline"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-cyan-100"
            >
              Projekt starten
            </a>

            <a
              href="#demo"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white"
            >
              KI-Demo ansehen
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-3xl font-semibold">1936</p>
            <p className="mt-2 text-sm text-white/55">
              Frühe theoretische Grundlage durch Turing
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-3xl font-semibold">2022</p>
            <p className="mt-2 text-sm text-white/55">
              ChatGPT macht KI für viele Menschen sichtbar
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-3xl font-semibold">Heute</p>
            <p className="mt-2 text-sm text-white/55">
              KI wird Teil von Websites, Arbeit und Alltag
            </p>
          </div>
        </div>
      </section>

      <section id="timeline" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300/70">
            Geschichte der KI
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            KI ist keine plötzliche Erfindung.
          </h2>

          <p className="mt-5 text-base leading-7 text-white/60">
            Die Entwicklung von KI ist eine lange Geschichte. Von theoretischen
            Grundlagen über erste Chatbots bis zu modernen KI-Systemen hat sich
            die Technologie über Jahrzehnte weiterentwickelt.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="grid gap-3">
            {milestones.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveMilestone(item)}
                className={`rounded-2xl border p-5 text-left transition ${
                  activeMilestone.id === item.id
                    ? "border-cyan-300 bg-cyan-300/10"
                    : "border-white/10 bg-white/[0.03] hover:border-white/30"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-white/50">{item.year}</p>
                  <p className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">
                    {item.tag}
                  </p>
                </div>

                <h3 className="mt-3 text-xl font-semibold">
                  {item.title}
                </h3>
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/70">
              {activeMilestone.year}
            </p>

            <h3 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              {activeMilestone.title}
            </h3>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              {activeMilestone.description}
            </p>

            <div className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-sm text-white/45">Aktiver Meilenstein</p>
              <p className="mt-2 text-xl font-medium">
                {activeMilestone.getLabel()}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-300/70">
            KI und Arbeitswelt
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            KI ersetzt nicht einfach alles. Sie verändert Aufgaben.
          </h2>

          <p className="mt-5 text-base leading-7 text-white/60">
            Der wichtigste Punkt ist nicht nur, ob Jobs verschwinden. Viel
            wichtiger ist, wie sich Tätigkeiten, Fähigkeiten und Arbeitsweisen
            verändern.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {impactAreas.map((area) => (
            <article
              key={area.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-violet-300/60 hover:bg-violet-300/10"
            >
              <p className="mb-8 text-sm text-violet-200/70">
                {area.value}
              </p>

              <h3 className="text-2xl font-semibold">{area.title}</h3>

              <p className="mt-4 text-sm leading-6 text-white/58">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="websites" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300/70">
              KI in Websites
            </p>

            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Eine moderne Website reagiert auf den Nutzer.
            </h2>

            <p className="mt-5 text-base leading-7 text-white/60">
              Früher waren viele Websites nur digitale Broschüren. Heute können
              Websites Fragen beantworten, Inhalte anpassen und aus Daten lernen.
              Genau hier wird KI interessant.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {websiteFeatures.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-xl font-semibold">{feature.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/58">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-7xl px-6 py-28">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300/70">
                Prototyp
              </p>

              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Mini KI-Assistent für die Website.
              </h2>

              <p className="mt-5 text-base leading-7 text-white/60">
                Diese Demo ist noch keine echte KI-API, aber sie zeigt die Idee:
                Besucher können Fragen stellen und bekommen direkt passende
                Antworten zum Thema.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/40 p-5">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <label
                htmlFor="question"
                className="text-sm font-medium text-white/70"
              >
                Frage an den Projekt-Assistenten
              </label>

              <input
                id="question"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder="z.B. Wie hilft KI einer Website?"
                className="mt-3 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300"
              />

              <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-cyan-200/70">
                  Antwort
                </p>

                <p className="text-sm leading-6 text-white/75">
                  {assistantAnswer}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Chatbot", "Arbeitswelt", "Website", "Timeline"].map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setQuestion(item)}
                      className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/60 transition hover:border-cyan-300 hover:text-white"
                    >
                      {item}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="rounded-[2rem] bg-white p-8 text-black md:p-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-black/45">
            Fazit
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            Das Projekt verbindet Theorie, Design und Programmierung.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-black/60">
            Die Website erklärt KI nicht nur als Text, sondern macht das Thema
            visuell und interaktiv. Durch Timeline, Karten, Animationen und eine
            kleine Demo wirkt das Projekt wie eine echte moderne Webanwendung.
          </p>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-6 py-10 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
        <p>© 2026 AI Innovation Lab</p>
        <p>Quellenbasis: Bosch KI-Geschichte · Die Volkswirtschaft Arbeitsmarkt</p>
      </footer>
    </main>
  );
}