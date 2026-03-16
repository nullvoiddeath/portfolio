export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
}

export const experience: Experience[] = [
  {
    id: "sa2",
    role: "Security Architect II",
    company: "Akamai Technologies",
    location: "Kraków, Poland",
    period: "Current",
    description: [
      "Leading API threat hunting and detection model research across enterprise-scale traffic.",
      "Architecting security solutions for DDoS mitigation and bot management platforms.",
      "Developing novel detection methodologies for API abuse patterns and zero-day threat vectors.",
    ],
    tags: ["API Security", "Threat Hunting", "Detection Models", "DDoS"],
  },
  {
    id: "sa1",
    role: "Security Architect I",
    company: "Akamai Technologies",
    location: "Kraków, Poland",
    period: "2021 — 2023",
    description: [
      "Built and refined API security detection engines processing billions of daily requests.",
      "Conducted deep-dive analysis of DDoS attack patterns and bot mitigation strategies.",
      "Collaborated with global SOC teams on incident response and threat intelligence.",
    ],
    tags: ["API Security", "Bot Mitigation", "Incident Response"],
  },
  {
    id: "bounties",
    role: "Independent Security Researcher",
    company: "Bug Bounty Programs",
    location: "Remote",
    period: "2019 — 2021",
    description: [
      "Discovered and responsibly disclosed critical vulnerabilities in Meta, BharatPe, and other platforms.",
      "Focused on API-level attack surfaces, authentication bypasses, and business logic flaws.",
      "Built custom tooling for automated reconnaissance and vulnerability discovery.",
    ],
    tags: ["Bug Bounty", "Meta", "BharatPe", "Vulnerability Research"],
  },
];
