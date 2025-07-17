export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  keyFacts: string[];
  date: string;
  category: string;
  link: string;
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
    link: "https://tomrenner.com/posts/llm-inevitabilism/"
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
    link: "https://www.holovaty.com/writing/chatgpt-fake-feature/"
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
    link: "https://blog.decryption.net.au/posts/macpaint.html"
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
    link: "https://kiro.dev/blog/introducing-kiro/"
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
    link: "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/"
  }
];