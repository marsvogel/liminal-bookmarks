import { LucideIcon, Infinity, Lightbulb, Palette, Code2, BrainCircuit, Sparkles, TabletSmartphone, Cloud, BookOpenCheck, Brain, Network, Zap, Route, Bot, FileText } from 'lucide-react';

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
    category: "AI Philosophy",
    link: "https://tomrenner.com/posts/llm-inevitabilism/",
    icon: Infinity
  },
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
    category: "AI Impact",
    link: "https://www.holovaty.com/writing/chatgpt-fake-feature/",
    icon: Lightbulb
  },
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
    category: "Digital Art",
    link: "https://blog.decryption.net.au/posts/macpaint.html",
    icon: Palette
  },
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
    category: "Development Tools",
    link: "https://kiro.dev/blog/introducing-kiro/",
    icon: Code2
  },
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
    category: "AI Research",
    link: "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/",
    icon: BrainCircuit
  },
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
    category: "AI Industry",
    link: "https://www.reddit.com/r/singularity/comments/1kv7hm2/sergey_brin_we_dont_circulate_this_too_much_in/",
    icon: Sparkles
  },
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
    category: "Tech Philosophy",
    link: "https://ajmoon.com/posts/when-is-tech-not-hype-tulips-toilets-trains-and-tabs",
    icon: TabletSmartphone
  },
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
    category: "Open Source",
    link: "https://github.com/chubin/wttr.in",
    icon: Cloud
  },
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
    category: "React Best Practices",
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
    category: "React Tutorial",
    link: "https://react.dev/learn/thinking-in-react",
    icon: Brain
  },
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
    category: "Protocol",
    link: "https://modelcontextprotocol.io/",
    icon: Network
  },
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
    category: "UI/Design Tools",
    link: "https://lucide.dev/",
    icon: Palette
  },
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
    category: "Build Tools",
    link: "https://vite.dev/",
    icon: Zap
  },
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
    category: "React Libraries",
    link: "https://reactrouter.com/",
    icon: Route
  },
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
    category: "AI Development Tools",
    link: "https://www.anthropic.com/claude-code",
    icon: Bot
  },
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
    category: "AI Research",
    link: "https://arxiv.org/pdf/2412.14093",
    icon: FileText
  }
];