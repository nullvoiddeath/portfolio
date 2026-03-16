export interface ResearchItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link?: string;
}

export const research: ResearchItem[] = [
  {
    id: "api-threat-models",
    title: "API Threat Detection Models",
    subtitle: "Akamai Technologies",
    description:
      "Designing and implementing behavioral detection models for identifying API abuse at scale. Focused on anomaly detection across authentication flows, rate limiting evasion, and data exfiltration patterns.",
    tags: ["Detection Engineering", "Machine Learning", "API Security"],
  },
  {
    id: "ddos-patterns",
    title: "DDoS Attack Pattern Analysis",
    subtitle: "Enterprise Mitigation Research",
    description:
      "Deep analysis of evolving DDoS attack vectors targeting API endpoints. Research into volumetric, protocol, and application-layer attack signatures with adaptive mitigation strategies.",
    tags: ["DDoS", "Traffic Analysis", "Mitigation"],
  },
  {
    id: "bot-detection",
    title: "Bot Detection & Classification",
    subtitle: "Behavioral Analysis",
    description:
      "Developing fingerprinting and behavioral analysis techniques to distinguish sophisticated bot traffic from legitimate API consumers. Focus on credential stuffing and scraping detection.",
    tags: ["Bot Management", "Fingerprinting", "Behavioral Analysis"],
  },
  {
    id: "bug-bounty-findings",
    title: "Vulnerability Disclosures",
    subtitle: "Meta · BharatPe · Others",
    description:
      "Responsible disclosure of critical security vulnerabilities across major platforms. Findings ranged from authentication bypasses and IDORs to business logic flaws in payment APIs.",
    tags: ["Bug Bounty", "Responsible Disclosure", "API Vulnerabilities"],
  },
];
