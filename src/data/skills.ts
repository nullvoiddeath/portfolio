export interface SkillCategory {
  title: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    title: "Offensive Security",
    items: [
      "API Penetration Testing",
      "Web Application Security",
      "Network Exploitation",
      "Vulnerability Research",
      "Bug Bounty Hunting",
      "Social Engineering",
    ],
  },
  {
    title: "Defensive Security",
    items: [
      "API Threat Hunting",
      "Detection Engineering",
      "DDoS Mitigation",
      "Bot Management",
      "Incident Response",
      "SIEM & Log Analysis",
    ],
  },
  {
    title: "Research & Analysis",
    items: [
      "Detection Model Design",
      "Threat Intelligence",
      "Attack Pattern Analysis",
      "Security Architecture",
      "Risk Assessment",
      "Compliance Frameworks",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Burp Suite",
      "Akamai Security Suite",
      "Wireshark",
      "Metasploit",
      "Custom Scripting (Python)",
      "CI/CD Security Integration",
    ],
  },
];

export const certifications = [
  { name: "OSCP", full: "Offensive Security Certified Professional" },
  { name: "eCTHPv2", full: "eLearnSecurity Certified Threat Hunting Professional" },
  { name: "CCD", full: "Certified CyberDefender" },
];
