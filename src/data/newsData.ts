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
    title: "The sound of inevitability",
    summary: "Tom Renner critiques 'inevitabilism' in tech discourse, particularly around AI and LLMs. He argues against accepting technological developments as unavoidable, emphasizing that people should critically examine and actively choose their technological future.",
    keyFacts: [
      "Challenges tech determinism narrative",
      "Advocates for active choice in tech future",
      "Questions LLM inevitability discourse"
    ],
    date: "2025-07-12",
    category: "AI Philosophy",
    link: "https://tomrenner.com/posts/llm-inevitabilism/"
  },
  {
    id: "2",
    title: "Adding a feature because ChatGPT incorrectly thinks it exists",
    summary: "Adrian Holovaty discovered ChatGPT was incorrectly telling users about a non-existent ASCII tablature import feature in Soundslice. In response to user confusion, his team decided to actually develop the feature to meet unexpected market demand.",
    keyFacts: [
      "ChatGPT created false feature expectations",
      "Team built feature to match AI hallucination",
      "Unexpected market validation via AI error"
    ],
    date: "2025-07-07",
    category: "AI Impact",
    link: "https://www.holovaty.com/writing/chatgpt-fake-feature/"
  },
  {
    id: "3",
    title: "MacPaint Art From The Mid-80s Still Looks Great Today",
    summary: "A collection of vintage digital artwork created using MacPaint in the mid-1980s showcases artistic creativity on early computer systems. The author explores images from the Discmaster archive, highlighting the timeless appeal of these limited-graphics creations.",
    keyFacts: [
      "1980s digital art preservation",
      "MacPaint's creative limitations as strength",
      "Historical computing aesthetics"
    ],
    date: "2025-07-12",
    category: "Digital Art",
    link: "https://blog.decryption.net.au/posts/macpaint.html"
  },
  {
    id: "4",
    title: "Introducing Kiro",
    summary: "Kiro is an AI-powered IDE that helps developers transform prototypes into production-ready applications through 'spec-driven development'. The platform offers specs for clarity and documentation, plus hooks that automate quality checks and development tasks.",
    keyFacts: [
      "AI-powered spec-driven development",
      "Automated quality checks via hooks",
      "Prototype to production workflow"
    ],
    date: "2025-07-14",
    category: "Development Tools",
    link: "https://kiro.dev/blog/introducing-kiro/"
  },
  {
    id: "5",
    title: "Measuring the Impact of Early-2025 AI on Developer Productivity",
    summary: "METR's randomized controlled trial found that experienced open-source developers using AI tools took 19% longer to complete coding tasks, contrary to expectations of a 24% speedup. The study highlights the complexity of measuring AI's real-world impact on development.",
    keyFacts: [
      "AI tools slowed developers by 19%",
      "Developers expected 24% speedup",
      "Challenges productivity assumptions"
    ],
    date: "2025-07-10",
    category: "AI Research",
    link: "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/"
  }
];