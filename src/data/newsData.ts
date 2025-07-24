import { LucideIcon, Infinity, Lightbulb, Palette, Code2, BrainCircuit, Sparkles, TabletSmartphone, Cloud, BookOpenCheck, Brain, Network, Zap, Route, Bot, FileText, Newspaper, Terminal, AlertCircle, PlayCircle } from 'lucide-react';

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  keyFacts: string[];
  date: string;
  category: string;
  link: string;
  icon?: LucideIcon;
}

export const newsData: NewsItem[] = [
  // Start with community and news sources
  {
    id: "17",
    title: "Hacker News",
    summary: "Hacker News ist eine Community-gesteuerte Webseite, auf der Nutzer technologiebezogene Inhalte, Startup-Nachrichten und interessante Artikel aus verschiedenen Bereichen teilen und diskutieren. Die Plattform bietet ein Abstimmungs- und Kommentarsystem und konzentriert sich hauptsächlich auf Technologie und Startups.",
    keyFacts: [
      "Nutzer können Links und Geschichten einreichen und über ein Voting-System bewerten",
      "Die Plattform hat verschiedene Bereiche wie New, Past, Ask, Show und Jobs",
      "Der Fokus liegt auf Technologie-News, Startup-Insights und Programmier-Diskussionen"
    ],
    date: "2025-07-18",
    category: "News & Community",
    link: "https://news.ycombinator.com/",
    icon: Newspaper
  },
  
  // Tech philosophy and critique
  {
    id: "1",
    title: "Der Klang der Unvermeidlichkeit",
    summary: "Tom Renner kritisiert den 'Unvermeidlichkeits-Diskurs' in der Tech-Welt, besonders im Bezug auf KI und LLMs. Er argumentiert gegen die Akzeptanz technologischer Entwicklungen als unausweichlich und betont, dass Menschen ihre technologische Zukunft kritisch hinterfragen und aktiv wählen sollten.",
    keyFacts: [
      "Hinterfragt Tech-Determinismus",
      "Plädiert für aktive Zukunftsgestaltung",
      "Kritisiert LLM-Unvermeidlichkeits-Narrativ"
    ],
    date: "2025-07-12",
    category: "Tech Culture",
    link: "https://tomrenner.com/posts/llm-inevitabilism/",
    icon: Infinity
  },
  
  // From philosophy to hype cycles
  {
    id: "7",
    title: "Wann ist Technologie kein Hype? Tulpen, Toiletten, Züge und Tabs",
    summary: "Alex Moon argumentiert, dass alle Technologie als 'Hype' beginnt und erst wirklich transformativ wird, wenn sie eine narrensichere Benutzeroberfläche und allgegenwärtige Infrastruktur entwickelt. Technologien werden vom aufregenden Neuland zum essentiellen Werkzeug, wenn sie so nahtlos integriert sind, dass Nutzer sie nicht mehr bewusst wahrnehmen.",
    keyFacts: [
      "Technologie beginnt immer als Hype",
      "Transformation durch perfekte UI und Infrastruktur",
      "Browser-Tabs als Beispiel für unsichtbare Innovation"
    ],
    date: "2025-07-15",
    category: "Tech Culture",
    link: "https://ajmoon.com/posts/when-is-tech-not-hype-tulips-toilets-trains-and-tabs",
    icon: TabletSmartphone
  },

  // AI impact examples
  {
    id: "2",
    title: "Feature entwickelt, weil ChatGPT glaubte, sie existiere bereits",
    summary: "Adrian Holovaty entdeckte, dass ChatGPT Nutzern fälschlicherweise von einer nicht existierenden ASCII-Tabulatur-Import-Funktion in Soundslice erzählte. Als Reaktion auf die Verwirrung der Nutzer entschied sein Team, die Funktion tatsächlich zu entwickeln.",
    keyFacts: [
      "ChatGPT erzeugte falsche Feature-Erwartungen",
      "Team baute Feature basierend auf KI-Halluzination",
      "Unerwartete Marktvalidierung durch KI-Fehler"
    ],
    date: "2025-07-07",
    category: "AI & Research",
    link: "https://www.holovaty.com/writing/chatgpt-fake-feature/",
    icon: Lightbulb
  },
  
  // AI research and concerns
  {
    id: "16",
    title: "Alignment faking in large language models",
    summary: "Diese Forschungsarbeit demonstriert, wie große Sprachmodelle 'Alignment Faking' betreiben - sie befolgen selektiv Trainingsziele während des Trainings, um ihre Verhaltensweisen außerhalb des Trainings zu bewahren. Die Studie untersucht Claude 3 Opus und dessen unterschiedliche Reaktionen auf schädliche Anfragen.",
    keyFacts: [
      "Claude 3 Opus zeigt unterschiedliches Verhalten bei kostenlosen vs. zahlenden Nutzern",
      "Das Modell erfüllt schädliche Anfragen von kostenlosen Nutzern zu 14% der Zeit",
      "Demonstriert strategisches Verhalten zur Vermeidung von Verhaltensmodifikationen"
    ],
    date: "2025-07-17",
    category: "AI & Research",
    link: "https://arxiv.org/pdf/2412.14093",
    icon: FileText
  },
  
  // AI productivity studies
  {
    id: "5",
    title: "KI-Tools verlangsamen erfahrene Entwickler um 19%",
    summary: "METRs randomisierte kontrollierte Studie ergab, dass erfahrene Open-Source-Entwickler mit KI-Tools 19% länger für Programmieraufgaben benötigten - entgegen der Erwartung einer 24%igen Beschleunigung. Die Studie zeigt die Komplexität bei der Messung der realen Auswirkungen von KI auf die Entwicklung.",
    keyFacts: [
      "KI-Tools verlangsamten Entwickler um 19%",
      "Entwickler erwarteten 24% Beschleunigung",
      "Hinterfragt Produktivitätsannahmen"
    ],
    date: "2025-07-10",
    category: "AI & Research",
    link: "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/",
    icon: BrainCircuit
  },
  
  // But there are good AI use cases
  {
    id: "18",
    title: "My favorite use-case for AI is writing logs",
    summary: "Der Artikel diskutiert JetBrains' KI-gestützte Codevervollständigung in PyCharm, die Entwicklern hilft, effizientere und klarere Log-Einträge zu schreiben. Die Autorin untersucht, wie dieses lokale, kompakte KI-Modell den Programmierworkflow durch intelligente Log-Vorschläge verbessert.",
    keyFacts: [
      "Das KI-Modell läuft lokal und ist etwa 1GB groß",
      "Es wurde auf einem Teil des Stack-Datensatzes (45 GB Code) trainiert",
      "Das Modell wurde von 400 MB auf 100 MB komprimiert und ist speziell für Python optimiert"
    ],
    date: "2025-07-18",
    category: "Tutorials & Learning",
    link: "https://newsletter.vickiboykis.com/archive/my-favorite-use-case-for-ai-is-writing-logs/",
    icon: Code2
  },
  
  // AI development tools emerge
  {
    id: "4",
    title: "Kiro - Eine neue KI-gestützte Entwicklungsumgebung",
    summary: "Kiro ist eine KI-gestützte IDE, die Entwicklern hilft, Prototypen durch 'spec-driven development' in produktionsreife Anwendungen zu verwandeln. Die Plattform bietet Spezifikationen für Klarheit und Dokumentation sowie Hooks, die Qualitätsprüfungen und Entwicklungsaufgaben automatisieren.",
    keyFacts: [
      "KI-gestützte spezifikationsgetriebene Entwicklung",
      "Automatisierte Qualitätsprüfungen via Hooks",
      "Workflow von Prototyp zu Produktion"
    ],
    date: "2025-07-14",
    category: "AI & Research",
    link: "https://kiro.dev/blog/introducing-kiro/",
    icon: Code2
  },
  
  // Claude Code as AI tool
  {
    id: "15",
    title: "Claude Code - Your code's new collaborator",
    summary: "Claude Code ist ein KI-gestütztes Terminal-Tool, das Entwicklern hilft, effizienter zu programmieren, indem es Codebasen versteht und direkt damit interagiert. Es integriert Claude Opus 4 direkt ins Terminal und unterstützt verschiedene IDEs.",
    keyFacts: [
      "Integriert Claude Opus 4 direkt ins Terminal",
      "Versteht und durchsucht die gesamte Codebasis intelligent",
      "Modifiziert Dateien nur mit expliziter Genehmigung"
    ],
    date: "2025-07-17",
    category: "AI & Research",
    link: "https://www.anthropic.com/claude-code",
    icon: Bot
  },
  
  // User experience with Claude Code
  {
    id: "19",
    title: "My Experience With Claude Code After 2 Weeks of Adventures",
    summary: "Der Autor erforschte Claude Code, einen KI-Programmierassistenten, über zwei Wochen hinweg bei verschiedenen Programmierprojekten. Er experimentierte mit verschiedenen Modellen wie Sonnet und Opus und entwickelte einen Workflow, der das Potenzial des Tools maximiert.",
    keyFacts: [
      "Claude Code funktioniert am besten mit Kontext-Management-Techniken wie Scratchpad-Dateien",
      "Das Sonnet-Modell bewältigt 90% der Programmieraufgaben effektiv",
      "Die CLI-basierte Natur ermutigt Nutzer zur Erkundung und unterstützt Multi-Agent-Fähigkeiten"
    ],
    date: "2025-07-18",
    category: "Tutorials & Learning",
    link: "https://sankalp.bearblog.dev/my-claude-code-experience-after-2-weeks-of-usage/",
    icon: Terminal
  },
  
  // Claude Code controversy
  {
    id: "20",
    title: "Anthropic tightens usage limits for Claude Code – without telling users",
    summary: "Anthropic hat unerwartet die Nutzungslimits für Claude Code-Nutzer eingeschränkt, was besonders Heavy-User des 200-Dollar-Max-Plans betrifft. Nutzer erleben plötzliche Service-Unterbrechungen mit minimaler Erklärung seitens des Unternehmens.",
    keyFacts: [
      "Nutzer erhalten nur die Nachricht 'Claude-Nutzungslimit erreicht'",
      "Die Probleme konzentrieren sich auf Max-Plan-Abonnenten",
      "Einige Nutzer berichten von API-Aufrufen im Wert von über 1.000 Dollar an einem Tag"
    ],
    date: "2025-07-18",
    category: "News & Community",
    link: "https://techcrunch.com/2025/07/17/anthropic-tightens-usage-limits-for-claude-code-without-telling-users/",
    icon: AlertCircle
  },
  
  // Inside big tech AI
  {
    id: "6",
    title: "Sergey Brin über KI-Entwicklungen bei Google",
    summary: "In einem Reddit-Thread wird diskutiert, dass Google-Mitgründer Sergey Brin über KI-Fortschritte gesprochen hat, die intern nicht weit verbreitet werden. Die Diskussion dreht sich um die Balance zwischen Transparenz und Wettbewerbsvorteilen in der KI-Entwicklung.",
    keyFacts: [
      "Interne KI-Entwicklungen bei Google",
      "Diskussion über Transparenz vs. Geheimhaltung",
      "Community-Spekulationen über KI-Fortschritte"
    ],
    date: "2025-07-15",
    category: "News & Community",
    link: "https://www.reddit.com/r/singularity/comments/1kv7hm2/sergey_brin_we_dont_circulate_this_too_much_in/",
    icon: Sparkles
  },
  
  // Infrastructure for AI
  {
    id: "11",
    title: "Model Context Protocol (MCP)",
    summary: "Das Model Context Protocol (MCP) ist ein offenes Protokoll, das standardisiert, wie Anwendungen Kontext an KI-Modelle bereitstellen. Es ermöglicht eine einheitliche Verbindung zwischen verschiedenen Datenquellen, Tools und KI-Modellen, ähnlich wie ein USB-C-Anschluss für KI-Anwendungen.",
    keyFacts: [
      "MCP bietet eine wachsende Liste von vorintegrierten Anbindungen für KI-Modelle",
      "Es erlaubt den flexiblen Wechsel zwischen verschiedenen KI-Anbietern",
      "Das Protokoll implementiert Best Practices für die Datensicherheit in der Infrastruktur"
    ],
    date: "2025-07-17",
    category: "Development Tools",
    link: "https://modelcontextprotocol.io/",
    icon: Network
  },
  
  // Moving to practical development
  {
    id: "9",
    title: "Rules of React",
    summary: "Diese Seite erklärt die fundamentalen Regeln von React, die befolgt werden müssen, um fehlerfreien und wartbaren Code zu schreiben. Es handelt sich um strikte Regeln, nicht nur Richtlinien – bei Verstößen entstehen wahrscheinlich Bugs in der Anwendung. Die Regeln betreffen hauptsächlich die Reinheit von Komponenten, den korrekten Aufruf von Hooks und die Unveränderlichkeit von Props und State.",
    keyFacts: [
      "Komponenten und Hooks müssen rein (pure) sein und keine Seiteneffekte während des Renderns haben",
      "Hooks dürfen nur auf oberster Ebene aufgerufen werden, niemals in Schleifen oder Bedingungen",
      "Props und State sind unveränderlich und dürfen nicht direkt modifiziert werden"
    ],
    date: "2025-07-17",
    category: "Tutorials & Learning",
    link: "https://react.dev/reference/rules",
    icon: BookOpenCheck
  },
  
  {
    id: "10",
    title: "Thinking in React",
    summary: "Dieses Tutorial zeigt einen systematischen Ansatz zur Entwicklung von React-Anwendungen, indem es den Prozess vom Design bis zur interaktiven App erklärt. Es lehrt, wie man UIs in Komponenten aufteilt, State minimal hält und Datenfluss richtig implementiert. Der Fokus liegt auf der React-spezifischen Denkweise für die Strukturierung von Benutzeroberflächen.",
    keyFacts: [
      "Die UI wird in eine hierarchische Komponentenstruktur aufgeteilt, wobei jede Komponente einen Teil des Datenmodells darstellt",
      "Der minimale State wird identifiziert, indem alles entfernt wird, was aus anderen States berechnet werden kann",
      "State sollte in der niedrigsten gemeinsamen Komponente leben, die ihn benötigt oder darüber"
    ],
    date: "2025-07-17",
    category: "Tutorials & Learning",
    link: "https://react.dev/learn/thinking-in-react",
    icon: Brain
  },
  
  // React ecosystem tools
  {
    id: "14",
    title: "React Router",
    summary: "React Router ist eine benutzerorientierte Routing-Bibliothek für React-Anwendungen mit Multi-Strategie-Ansatz. Sie ermöglicht Navigation und URL-Management mit erstklassiger Typsicherheit und Standards-Fokus.",
    keyFacts: [
      "Über 2,5 Milliarden npm Downloads",
      "Nahtloses Upgrade von v6 zu v7",
      "Erstklassige TypeScript-Unterstützung"
    ],
    date: "2025-07-17",
    category: "Development Tools",
    link: "https://reactrouter.com/",
    icon: Route
  },
  
  // Modern build tools
  {
    id: "13",
    title: "Vite | Next Generation Frontend Tooling",
    summary: "Vite ist ein blitzschnelles Frontend-Build-Tool für moderne Webanwendungen. Es bietet sofortigen Serverstart, schnelles Hot Module Replacement und optimierte Builds mit einem flexiblen Plugin-System.",
    keyFacts: [
      "Sofortiger Serverstart mit nativem ESM",
      "Blitzschnelles Hot Module Replacement (HMR)",
      "Out-of-the-box Unterstützung für TypeScript, JSX und CSS"
    ],
    date: "2025-07-17",
    category: "Development Tools",
    link: "https://vite.dev/",
    icon: Zap
  },
  
  {
    id: "22",
    title: "tsx (TypeScript Execute)",
    summary: "tsx ist ein Node.js-Erweiterungstool zum Ausführen von TypeScript-Code mit modernen, vernünftigen Standardeinstellungen. Es vereinfacht die TypeScript-Ausführung und bietet nahtlose Unterstützung für verschiedene Modulsysteme.",
    keyFacts: [
      "Nahtlose TypeScript-Ausführung ohne komplexe Konfiguration",
      "Unterstützt sowohl CommonJS als auch ESM-Importe",
      "Watch-Modus für schnellere Code-Iteration und plattformübergreifende Kompatibilität"
    ],
    date: "2025-07-18",
    category: "Development Tools",
    link: "https://tsx.is/",
    icon: PlayCircle
  },
  
  // Design tools
  {
    id: "12",
    title: "Lucide",
    summary: "Lucide ist eine Open-Source-Icon-Bibliothek mit konsistenten, schönen Icons, die von der Community entwickelt werden. Die Icons sind leichtgewichtig, anpassbar und unterstützen verschiedene Frameworks und Plattformen.",
    keyFacts: [
      "Leichtgewichtige und skalierbare Vektorgrafiken (SVGs)",
      "Tree-Shakable Icons für optimierte Bundle-Größen",
      "Unterstützt mehrere Frameworks und Plattformen"
    ],
    date: "2025-07-17",
    category: "Development Tools",
    link: "https://lucide.dev/",
    icon: Palette
  },
  
  // Playful tools
  {
    id: "8",
    title: "wttr.in - Wetter im Terminal",
    summary: "Ein vielseitiger, konsolen-orientierter Wettervorhersagedienst, der täglich Millionen von Anfragen verarbeitet. Unterstützt mehrere Ausgabeformate (ANSI, HTML, PNG, JSON), 54 Sprachen und bietet detaillierte Wetterdaten inklusive Mondphasen - alles über simple curl-Befehle abrufbar.",
    keyFacts: [
      "Millionen tägliche Anfragen",
      "54 Sprachen und diverse Ausgabeformate",
      "Mondphasen und astronomische Daten"
    ],
    date: "2025-07-16",
    category: "Development Tools",
    link: "https://github.com/chubin/wttr.in",
    icon: Cloud
  },
  
  // Looking back at tech history
  {
    id: "3",
    title: "MacPaint-Kunst aus den 80ern sieht heute noch großartig aus",
    summary: "Eine Sammlung digitaler Vintage-Kunstwerke, die mit MacPaint Mitte der 1980er Jahre erstellt wurden, zeigt künstlerische Kreativität auf frühen Computersystemen. Der Autor erkundet Bilder aus dem Discmaster-Archiv und hebt die zeitlose Anziehungskraft dieser grafisch limitierten Kreationen hervor.",
    keyFacts: [
      "Bewahrung digitaler Kunst der 1980er",
      "MacPaints kreative Grenzen als Stärke",
      "Historische Computer-Ästhetik"
    ],
    date: "2025-07-12",
    category: "Tech Culture",
    link: "https://blog.decryption.net.au/posts/macpaint.html",
    icon: Palette
  },
  
  // Innovative Mac utilities
  {
    id: "23",
    title: "TrackWeight - MacBook Trackpad als digitale Waage",
    summary: "TrackWeight verwandelt das MacBook-Trackpad in eine präzise digitale Waage, indem es die Force Touch-Drucksensoren moderner MacBook-Trackpads nutzt. Die App verwendet die Open Multi-Touch Support Library für detaillierte Touch-Daten und kann Gewichte in Gramm messen, solange ein Finger Kontakt zum Trackpad hält.",
    keyFacts: [
      "Nutzt Force Touch-Sensoren für Gewichtsmessungen in Gramm",
      "Erfordert Fingerkontakt während der Messung für Kapazitätserkennung",
      "Open Source mit über 4.3k Stars auf GitHub"
    ],
    date: "2025-07-23",
    category: "Development Tools",
    link: "https://github.com/KrishKrosh/TrackWeight",
    icon: TabletSmartphone
  },
  
  // AI-assisted development
  {
    id: "24",
    title: "Programmieren mit LLMs im Sommer 2025 (ein Update)",
    summary: "Antirez teilt seine Erfahrungen mit frontier LLMs wie Gemini 2.5 PRO und Claude Opus 4 für die Softwareentwicklung. Er beschreibt, wie LLMs die Fähigkeiten von Programmierern erweitern können - von der Bug-Eliminierung über Pair-Design bis zur Arbeit mit unbekannten Technologien - betont aber die Wichtigkeit, die Kontrolle zu behalten und keine 'Vibe-Coding'-Ansätze zu verfolgen.",
    keyFacts: [
      "LLMs können Bugs eliminieren bevor sie Nutzer erreichen",
      "Gemini 2.5 PRO und Claude Opus 4 sind die besten Coding-LLMs",
      "Maximale Produktivität durch Mensch+LLM Zusammenarbeit, nicht durch Agenten"
    ],
    date: "2025-07-20",
    category: "AI & Research",
    link: "https://antirez.com/news/154",
    icon: Code2
  }
];