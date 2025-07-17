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
    title: "Neural Networks erreichen menschliche Kreativität",
    summary: "Eine bahnbrechende Studie zeigt, dass KI-Systeme nicht nur menschliche Kreativität nachahmen, sondern möglicherweise übertreffen können. Die Grenzen zwischen künstlicher und natürlicher Intelligenz verschwimmen zusehends.",
    keyFacts: [
      "99.7% Erfolgsrate bei Turing-Tests",
      "Autonome Kunstwerke ohne menschlichen Input",
      "Selbstoptimierung in Echtzeit"
    ],
    date: "2024-12-28",
    category: "AI Research",
    link: "#"
  },
  {
    id: "2",
    title: "Quantum Computing enters the mainstream",
    summary: "IBM's latest quantum processor achieves error rates below 0.1%. Commercial applications werden zur Realität, während traditionelle Verschlüsselung obsolet wird.",
    keyFacts: [
      "1000+ Qubit Processing Power",
      "Commercial availability Q2 2025",
      "RSA encryption completely broken"
    ],
    date: "2024-12-27",
    category: "Quantum Tech",
    link: "#"
  },
  {
    id: "3",
    title: "Open Source AI models surpass proprietary giants",
    summary: "Community-entwickelte Modelle übertreffen GPT-4 und Claude in mehreren Benchmarks. Die Demokratisierung der KI beschleunigt sich exponentiell.",
    keyFacts: [
      "98.3% accuracy on reasoning tasks",
      "Zero training costs for developers",
      "Real-time model updates via blockchain"
    ],
    date: "2024-12-26",
    category: "Open Source",
    link: "#"
  },
  {
    id: "4",
    title: "Cybersecurity: Zero-Day exploits powered by AI",
    summary: "Automatisierte Hacking-Tools entdecken Schwachstellen schneller als Patches entwickelt werden können. Ein neues Wettrüsten in der digitalen Sicherheit beginnt.",
    keyFacts: [
      "AI discovers vulnerabilities in < 1 hour",
      "Traditional firewalls 89% ineffective",
      "Quantum-resistant protocols mandatory by 2025"
    ],
    date: "2024-12-25",
    category: "Security",
    link: "#"
  },
  {
    id: "5",
    title: "Brain-Computer Interfaces achieve seamless integration",
    summary: "Neuralink's competitor erreicht bidirektionale Kommunikation zwischen Gehirn und Cloud. Die Grenze zwischen biologischer und digitaler Intelligenz löst sich auf.",
    keyFacts: [
      "Direct thought-to-text at 240 WPM",
      "Memory upload/download capability",
      "Zero rejection rate in clinical trials"
    ],
    date: "2024-12-24",
    category: "BioTech",
    link: "#"
  },
  {
    id: "6",
    title: "Autonomous Code Evolution",
    summary: "Self-modifying programs erreichen Software-Evolution ohne menschliche Intervention. Legacy-Systeme transformieren sich autonom zu modernen Architekturen.",
    keyFacts: [
      "Code rewrites itself in real-time",
      "99.9% bug reduction achieved",
      "Human developers becoming obsolete"
    ],
    date: "2024-12-23",
    category: "Development",
    link: "#"
  }
];