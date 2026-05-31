'use client';

import { useState, useEffect, useRef } from 'react';
import { timelineEvents, workImpacts, demoResponses, type TimelineEvent, type DemoResponse } from '@/data/content';

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  const links = [
    { label: 'Timeline', href: '#timeline' },
    { label: 'Arbeitswelt', href: '#arbeitswelt' },
    { label: 'Web & KI', href: '#web' },
    { label: 'Demo', href: '#demo' },
    { label: 'About', href: '#about' },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-xl border-b border-white/5 bg-[#050810]/80' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="mono text-sm text-cyan-400 tracking-widest">
          AI<span className="text-white/30">_</span>LAB
        </span>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mono text-xs tracking-widest text-white/40 hover:text-cyan-400 transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>
        <span className="mono text-xs text-white/20">by Diart Selmani</span>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden grid-bg">
      {/* Orbs */}
      <div className="orb orb-cyan w-[600px] h-[600px] top-[-100px] left-[-200px]" />
      <div className="orb orb-violet w-[500px] h-[500px] bottom-[-100px] right-[-150px]" />
      <div className="orb orb-blue w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Scan line effect */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden
      >
        <div
          className="absolute left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.3), transparent)',
            animation: 'scan-line 8s linear infinite',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 mono text-xs tracking-widest text-cyan-400/70 border border-cyan-400/20 rounded-full px-4 py-2 mb-8 ${
            mounted ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          ABSCHLUSSPROJEKT · DIART SELMANI · 2025
        </div>

        {/* Main title */}
        <h1
          className={`text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-6 ${
            mounted ? 'animate-fade-up delay-200' : 'opacity-0'
          }`}
          style={{ letterSpacing: '-0.03em' }}
        >
          <span className="gradient-text-cyan">AI</span>
          <br />
          <span className="text-white/90">Innovation</span>
          <br />
          <span
            className="serif italic text-white/40"
            style={{ fontSize: '0.65em' }}
          >
            Lab
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed ${
            mounted ? 'animate-fade-up delay-400' : 'opacity-0'
          }`}
        >
          Wie künstliche Intelligenz unsere digitale Welt verändert —
          eine interaktive Erkundung von Geschichte, Gegenwart und Zukunft.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center ${
            mounted ? 'animate-fade-up delay-600' : 'opacity-0'
          }`}
        >
          <a href="#timeline" className="btn-primary">
            → Timeline starten
          </a>
          <a href="#demo" className="btn-secondary">
            Interaktive Demo testen
          </a>
        </div>

        {/* Stats bar */}
        <div
          className={`mt-20 flex flex-wrap justify-center gap-10 ${
            mounted ? 'animate-fade-up delay-700' : 'opacity-0'
          }`}
        >
          {[
            { value: '1956', label: 'Geburtsjahr der KI' },
            { value: '7+', label: 'Meilensteine' },
            { value: '∞', label: 'Möglichkeiten' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="mono text-3xl font-bold gradient-text-cyan">{s.value}</div>
              <div className="mono text-xs text-white/30 tracking-widest mt-1 uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="mono text-xs tracking-widest text-white/40">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyan-400/50 to-transparent" />
      </div>
    </section>
  );
}

// ─── Timeline ──────────────────────────────────────────────────────────────────
const colorMap = {
  cyan:    { dot: 'border-cyan-400',    active: 'bg-cyan-400',    glow: 'shadow-cyan-400/60',    text: 'text-cyan-400',    bg: 'bg-cyan-400/10',    border: 'border-cyan-400/30' },
  violet:  { dot: 'border-violet-500',  active: 'bg-violet-400',  glow: 'shadow-violet-400/60',  text: 'text-violet-400',  bg: 'bg-violet-400/10',  border: 'border-violet-400/30' },
  blue:    { dot: 'border-blue-400',    active: 'bg-blue-400',    glow: 'shadow-blue-400/60',    text: 'text-blue-400',    bg: 'bg-blue-400/10',    border: 'border-blue-400/30' },
  emerald: { dot: 'border-emerald-400', active: 'bg-emerald-400', glow: 'shadow-emerald-400/60', text: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/30' },
};

function Timeline() {
  const [active, setActive] = useState(0);
  const event = timelineEvents[active];
  const c = colorMap[event.color];

  return (
    <section id="timeline" className="relative py-32 px-6 overflow-hidden">
      <div className="orb orb-violet w-96 h-96 top-20 right-0 opacity-50" />

      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="mono text-xs tracking-widest text-white/20 mb-3">// 01</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Die Geschichte{' '}
            <span className="gradient-text-violet">der KI</span>
          </h2>
          <p className="text-white/40 max-w-xl">
            Klicke auf einen Meilenstein, um mehr zu erfahren.
          </p>
        </div>

        {/* Timeline track */}
        <div className="relative mb-12">
          {/* Mobile: vertical */}
          <div className="flex flex-col gap-0 md:hidden">
            {timelineEvents.map((ev, i) => {
              const mc = colorMap[ev.color];
              const isActive = i === active;
              return (
                <button
                  key={ev.year}
                  onClick={() => setActive(i)}
                  className="flex items-start gap-4 text-left py-3 group"
                >
                  <div className="flex flex-col items-center mt-1">
                    <div
                      className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${mc.dot} ${
                        isActive ? mc.active + ' shadow-md ' + mc.glow : ''
                      }`}
                    />
                    {i < timelineEvents.length - 1 && (
                      <div className="w-px flex-1 bg-white/10 mt-1" style={{ minHeight: 24 }} />
                    )}
                  </div>
                  <div>
                    <div className={`mono text-xs ${isActive ? mc.text : 'text-white/30'} transition-colors`}>
                      {ev.year}
                    </div>
                    <div className={`font-semibold text-sm mt-0.5 ${isActive ? 'text-white' : 'text-white/50'} transition-colors`}>
                      {ev.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Desktop: horizontal */}
          <div className="hidden md:flex items-center gap-0">
            {timelineEvents.map((ev, i) => {
              const mc = colorMap[ev.color];
              const isActive = i === active;
              return (
                <div key={ev.year} className="flex items-center flex-1 last:flex-none">
                  <button
                    onClick={() => setActive(i)}
                    className="flex flex-col items-center gap-2 group relative"
                  >
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${mc.dot} ${
                        isActive ? mc.active + ' shadow-lg ' + mc.glow + ' scale-125' : 'group-hover:scale-110'
                      }`}
                    />
                    <div className={`mono text-xs whitespace-nowrap ${isActive ? mc.text : 'text-white/30'} transition-colors`}>
                      {ev.year}
                    </div>
                    <div className={`text-xs whitespace-nowrap max-w-[90px] text-center leading-tight ${isActive ? 'text-white/80' : 'text-white/25'} transition-colors`}>
                      {ev.title}
                    </div>
                  </button>
                  {i < timelineEvents.length - 1 && (
                    <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-white/10 mx-2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail card */}
        <div
          key={active}
          className={`glass rounded-2xl p-8 md:p-10 border ${c.border} ${c.bg} animate-fade-up`}
          style={{ minHeight: 220 }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`mono text-3xl font-bold ${c.text}`}>{event.year}</span>
            <span className={`mono text-xs px-3 py-1 rounded-full border ${c.border} ${c.text} uppercase tracking-wider`}>
              {event.tag}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">{event.title}</h3>
          <p className={`${c.text} font-medium mb-4`}>{event.shortDesc}</p>
          <p className="text-white/60 leading-relaxed text-base max-w-3xl">{event.detail}</p>

          {/* Navigation */}
          <div className="flex gap-3 mt-8">
            <button
              onClick={() => setActive((a) => Math.max(0, a - 1))}
              disabled={active === 0}
              className="btn-secondary text-xs px-4 py-2 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              ← Zurück
            </button>
            <button
              onClick={() => setActive((a) => Math.min(timelineEvents.length - 1, a + 1))}
              disabled={active === timelineEvents.length - 1}
              className="btn-primary text-xs px-4 py-2 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              Weiter →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Arbeitswelt ──────────────────────────────────────────────────────────────
function Arbeitswelt() {
  return (
    <section id="arbeitswelt" className="relative py-32 px-6 overflow-hidden">
      <div className="orb orb-cyan w-[500px] h-[500px] -bottom-20 -left-40 opacity-40" />

      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="mono text-xs tracking-widest text-white/20 mb-3">// 02</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            KI & die{' '}
            <span className="gradient-text-cyan">Arbeitswelt</span>
          </h2>
          <p className="text-white/40 max-w-xl">
            Chancen und Risiken für Schule, Ausbildung und Beruf.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {workImpacts.map((item, i) => (
            <div
              key={item.title}
              className={`glass rounded-xl p-6 cursor-default`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{item.icon}</span>
                <span
                  className={`mono text-xs px-2 py-1 rounded-full border ${
                    item.type === 'chance'
                      ? 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10'
                      : 'text-amber-400 border-amber-400/30 bg-amber-400/10'
                  }`}
                >
                  {item.type === 'chance' ? 'Chance' : 'Risiko'}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{item.description}</p>
              <div className="border-t border-white/5 pt-4">
                <p className="mono text-xs text-white/25 leading-relaxed">
                  <span className="text-white/40">Bsp: </span>
                  {item.example}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 glass rounded-2xl p-8 border border-violet-500/20 bg-violet-500/5">
          <p className="text-2xl md:text-3xl font-bold text-white/80 leading-snug serif italic">
            "KI ersetzt keine Menschen — sie{' '}
            <span className="gradient-text-violet">verändert</span>, was Menschen
            tun können."
          </p>
          <p className="mono text-xs text-white/20 mt-4 tracking-widest">
            — Diart Selmani, AI Innovation Lab
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Web & KI ─────────────────────────────────────────────────────────────────
function WebAI() {
  const features = [
    {
      icon: '🤖',
      title: 'Chatbots & Assistenten',
      desc: 'KI-Chatbots beantworten Fragen in Echtzeit – rund um die Uhr, auf jeder Website.',
      tech: 'Next.js + OpenAI API',
    },
    {
      icon: '🎯',
      title: 'Personalisierung',
      desc: 'Algorithmen lernen aus dem Nutzerverhalten und zeigen jedem genau das, was ihn interessiert.',
      tech: 'Collaborative Filtering',
    },
    {
      icon: '🔍',
      title: 'Intelligente Suche',
      desc: 'Semantische Suche versteht den Kontext – nicht nur Keywords, sondern was der Nutzer wirklich meint.',
      tech: 'Vector Embeddings',
    },
    {
      icon: '📈',
      title: 'Datenanalyse & A/B',
      desc: 'KI analysiert tausende Nutzerinteraktionen und hilft, bessere Design-Entscheidungen zu treffen.',
      tech: 'Analytics + ML',
    },
    {
      icon: '🎨',
      title: 'Generative Inhalte',
      desc: 'Texte, Bilder und Code werden von KI generiert – und sparen Entwicklern Zeit für das Wesentliche.',
      tech: 'GPT-4o + DALL·E',
    },
    {
      icon: '♿',
      title: 'Accessibility',
      desc: 'Automatische Bildbeschreibungen, Übersetzungen und Sprachsteuerung machen Websites für alle zugänglich.',
      tech: 'Computer Vision',
    },
  ];

  return (
    <section id="web" className="relative py-32 px-6 overflow-hidden">
      <div className="orb orb-blue w-96 h-96 top-20 right-10 opacity-40" />

      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="mono text-xs tracking-widest text-white/20 mb-3">// 03</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            KI in modernen{' '}
            <span className="gradient-text-cyan">Websites</span>
          </h2>
          <p className="text-white/40 max-w-xl">
            Diese Website ist selbst ein Beispiel – nicht nur Theorie, sondern
            gelebte digitale Innovation.
          </p>
        </div>

        {/* Stack badge */}
        <div className="flex flex-wrap gap-3 mb-12">
          {['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'App Router'].map((t) => (
            <span
              key={t}
              className="mono text-xs px-3 py-1.5 rounded-full border border-cyan-400/20 text-cyan-400/60 bg-cyan-400/5"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="glass rounded-xl p-6">
              <span className="text-2xl mb-4 block">{f.icon}</span>
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-4">{f.desc}</p>
              <span className="mono text-xs text-blue-400/60">{f.tech}</span>
            </div>
          ))}
        </div>

        {/* This site callout */}
        <div className="mt-12 p-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 flex flex-col md:flex-row items-start md:items-center gap-4">
          <span className="text-4xl flex-shrink-0">💡</span>
          <div>
            <h4 className="font-bold text-cyan-400 mb-1">Diese Website als Beweis</h4>
            <p className="text-white/50 text-sm leading-relaxed">
              Das AI Innovation Lab ist nicht nur ein Erklärungs-Projekt — es demonstriert durch seinen
              eigenen Aufbau, wie moderne Webentwicklung mit KI-Unterstützung funktioniert: animierte
              UI-Komponenten, interaktive Demos, responsive Design und strukturierter TypeScript-Code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Demo ─────────────────────────────────────────────────────────────────────
interface Message {
  role: 'user' | 'ai';
  text: string;
}

function Demo() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: 'Hallo! Ich bin der AI Innovation Assistant. Wähle ein Thema oder stelle mir eine Frage.' },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const getResponse = (userText: string): string => {
    const lower = userText.toLowerCase();

    // Match to demo topics
    for (const dr of demoResponses) {
      if (lower.includes(dr.topic.toLowerCase())) {
        return dr.responses[Math.floor(Math.random() * dr.responses.length)];
      }
    }

    // Keyword responses
    if (lower.includes('hallo') || lower.includes('hi') || lower.includes('hey')) {
      return 'Hey! Schön, dass du hier bist. Frag mich etwas über KI, Schule, Beruf oder die Zukunft!';
    }
    if (lower.includes('was bist du') || lower.includes('wer bist du')) {
      return 'Ich bin ein KI-Demo-Assistent, entwickelt von Diart Selmani für das AI Innovation Lab. Ich zeige, wie KI in Websites integriert werden kann.';
    }
    if (lower.includes('diart') || lower.includes('selmani')) {
      return 'Diart Selmani ist der Entwickler dieser Website. Er interessiert sich für Technologie, KI und modernes Web-Design – und hat dieses Projekt als Abschlussprojekt gebaut.';
    }
    if (lower.includes('chatgpt') || lower.includes('openai')) {
      return 'ChatGPT wurde 2022 von OpenAI veröffentlicht und hat die Welt verändert. Innerhalb von 5 Tagen nach dem Launch meldeten sich über 1 Million Nutzer an!';
    }
    if (lower.includes('turing')) {
      return 'Alan Turing gilt als Vater der Informatik und KI. Er stellte 1950 die Frage: "Kann eine Maschine denken?" – und entwickelte den berühmten Turing-Test.';
    }
    if (lower.includes('deep learning') || lower.includes('neuronale netze')) {
      return 'Deep Learning basiert auf künstlichen neuronalen Netzen, die vom menschlichen Gehirn inspiriert sind. Sie lernen aus riesigen Datenmengen und erkennen Muster, die für Menschen unsichtbar sind.';
    }

    return 'Interessante Frage! Ich kann dir am besten zu den Themen Schule, Beruf, Website-Entwicklung und die Zukunft der KI antworten. Was möchtest du wissen?';
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: 'user', text }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: 'ai', text: getResponse(text) }]);
    }, 1200 + Math.random() * 800);
  };

  return (
    <section id="demo" className="relative py-32 px-6 overflow-hidden">
      <div className="orb orb-violet w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-30" />

      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <div className="mono text-xs tracking-widest text-white/20 mb-3">// 04</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Interaktive{' '}
            <span className="gradient-text-violet">Demo</span>
          </h2>
          <p className="text-white/40">
            Teste selbst, wie ein KI-Assistent funktioniert. Klicke auf ein Thema oder stelle eine eigene Frage.
          </p>
        </div>

        {/* Topic buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          {demoResponses.map((dr) => (
            <button
              key={dr.topic}
              onClick={() => {
                setSelectedTopic(dr.topic);
                sendMessage(dr.topic);
              }}
              className={`flex items-center gap-2 mono text-sm px-4 py-2 rounded-full border transition-all duration-300 ${
                selectedTopic === dr.topic
                  ? 'border-cyan-400/60 text-cyan-400 bg-cyan-400/10'
                  : 'border-white/10 text-white/40 hover:border-white/25 hover:text-white/70'
              }`}
            >
              <span>{dr.emoji}</span>
              {dr.topic}
            </button>
          ))}
        </div>

        {/* Chat window */}
        <div className="glass rounded-2xl overflow-hidden border border-white/8">
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="mono text-xs text-white/40">AI Innovation Assistant · Online</span>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-5 flex flex-col gap-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'ai' && (
                  <span className="w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">
                    ✦
                  </span>
                )}
                <div className={msg.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'}>
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <span className="w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center text-xs mr-2 flex-shrink-0">
                  ✦
                </span>
                <div className="chat-bubble-ai typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-white/5 p-4 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
              placeholder="Stelle eine Frage über KI…"
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white/80 placeholder:text-white/20 outline-none focus:border-cyan-400/30 transition-colors mono"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={typing || !input.trim()}
              className="btn-primary px-5 py-3 text-xs disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ↑
            </button>
          </div>
        </div>

        <p className="mono text-xs text-white/20 text-center mt-4">
          Diese Demo zeigt das Prinzip eines KI-Chatbots — kein externer API-Call nötig.
        </p>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  const values = [
    { icon: '🏃', label: 'Disziplin', desc: 'Jeden Tag besser werden' },
    { icon: '📚', label: 'Lernen', desc: 'Neugier als Superkraft' },
    { icon: '📈', label: 'Fortschritt', desc: 'Iterieren statt perfektionieren' },
    { icon: '💡', label: 'Kreativität', desc: 'Neue Wege finden' },
  ];

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="orb orb-cyan w-96 h-96 top-10 right-0 opacity-30" />

      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="mono text-xs tracking-widest text-white/20 mb-3">// 05</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Über{' '}
            <span className="gradient-text-cyan">mich</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Profile card */}
          <div className="glass rounded-2xl p-8 border border-cyan-400/15">
            <div className="flex items-center gap-5 mb-7">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-cyan-400/30 flex items-center justify-center text-2xl font-bold animate-pulse-glow">
                DS
              </div>
              <div>
                <h3 className="text-xl font-bold">Diart Selmani</h3>
                <p className="mono text-xs text-cyan-400/60 mt-1">Frontend Developer · AI Enthusiast</p>
              </div>
            </div>

            <p className="text-white/55 leading-relaxed mb-6">
              Ich interessiere mich für Technologie, künstliche Intelligenz und die Art, wie moderne Websites
              gebaut werden. Dieses Projekt zeigt nicht nur, was ich gelernt habe — es ist ein Beweis dafür,
              dass KI nicht nur ein Buzzword ist, sondern echte, kreative Lösungen ermöglicht.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded flex items-center justify-center text-sm">🏃</span>
                <span className="text-sm text-white/50">Hobby: Joggen & aktiv bleiben</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded flex items-center justify-center text-sm">⭐</span>
                <span className="text-sm text-white/50">Vorbild: Arda Saatci</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded flex items-center justify-center text-sm">🛠</span>
                <span className="text-sm text-white/50">Stack: Next.js, React, TypeScript, Tailwind</span>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="flex flex-col gap-4">
            <p className="mono text-xs text-white/20 tracking-widest uppercase mb-2">Meine Werte</p>
            {values.map((v) => (
              <div key={v.label} className="value-card flex items-center gap-4">
                <span className="text-2xl">{v.icon}</span>
                <div>
                  <div className="font-semibold text-white/90">{v.label}</div>
                  <div className="text-sm text-white/35 mono">{v.desc}</div>
                </div>
              </div>
            ))}

            <div className="mt-2 glass rounded-xl p-5 border border-violet-500/20 bg-violet-500/5">
              <p className="text-sm text-white/50 leading-relaxed">
                Hinter diesem Projekt steht keine grosse Agentur — sondern eine Person, die sich für
                digitale Möglichkeiten begeistert und bereit ist, Neues zu lernen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Fazit ────────────────────────────────────────────────────────────────────
function Fazit() {
  return (
    <section id="fazit" className="relative py-32 px-6 overflow-hidden">
      <div className="orb orb-violet w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />

      <div className="max-w-4xl mx-auto text-center">
        <div className="mono text-xs tracking-widest text-white/20 mb-3">// 06</div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Das <span className="gradient-text-violet">Fazit</span>
        </h2>

        <p className="text-xl text-white/50 leading-relaxed mb-12 max-w-2xl mx-auto">
          Diese Website verbindet Theorie, Programmierung, Design und Interaktion. KI wird nicht nur
          erklärt — sie wird durch das Medium selbst erlebbar gemacht.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: '🧠', title: 'Geschichte', desc: 'Von Turing bis ChatGPT — die Entwicklung der KI verstehen.' },
            { icon: '🌍', title: 'Gegenwart', desc: 'Wie KI die Arbeitswelt, Schule und Gesellschaft verändert.' },
            { icon: '🚀', title: 'Zukunft', desc: 'Warum KI-Kompetenz die wichtigste Fähigkeit von morgen ist.' },
          ].map((c) => (
            <div key={c.title} className="glass rounded-xl p-7">
              <span className="text-3xl block mb-4">{c.icon}</span>
              <h4 className="font-bold text-lg mb-2">{c.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl p-10 border border-cyan-400/20">
          <p className="text-2xl md:text-3xl font-bold leading-snug mb-6">
            KI ist kein{' '}
            <span className="serif italic text-white/30">Trend</span>
            {' '}—<br />
            es ist die{' '}
            <span className="gradient-text-cyan">Grundlage</span>
            {' '}der digitalen Zukunft.
          </p>
          <p className="mono text-sm text-white/30 mb-8">
            AI Innovation Lab · Diart Selmani · 2025
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#timeline" className="btn-primary">
              → Nochmals erkunden
            </a>
            <a href="#demo" className="btn-secondary">
              Demo ausprobieren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="mono text-sm text-cyan-400/50 tracking-widest">AI_LAB</span>
        <p className="mono text-xs text-white/20">
          Entwickelt mit Next.js, React, TypeScript & Tailwind CSS
        </p>
        <p className="mono text-xs text-white/20">© 2025 Diart Selmani</p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <main className="noise">
      <Nav />
      <Hero />
      <Timeline />
      <Arbeitswelt />
      <WebAI />
      <Demo />
      <About />
      <Fazit />
      <Footer />
    </main>
  );
}
