import { LucideIcon, Infinity, Lightbulb, Palette, Code2, BrainCircuit, Sparkles, TabletSmartphone, Cloud } from 'lucide-react';

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
  }
];