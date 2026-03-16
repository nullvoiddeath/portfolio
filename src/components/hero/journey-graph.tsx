"use client";

import { motion } from "framer-motion";

interface GraphNode {
  id: string;
  label: string;
  sub?: string;
  x: number;
  y: number;
  size: number;
  highlight?: boolean;
}

interface GraphEdge {
  from: string;
  to: string;
}

const nodes: GraphNode[] = [
  // Origin — bottom center
  { id: "start", label: "Start", sub: "2019", x: 220, y: 380, size: 5 },

  // Left branch — Certifications cluster
  { id: "certs", label: "Certifications", x: 80, y: 290, size: 5, highlight: true },
  { id: "oscp", label: "OSCP", sub: "OffSec", x: 30, y: 190, size: 4 },
  { id: "ecthp", label: "eCTHPv2", sub: "Threat Hunting", x: 110, y: 170, size: 4 },
  { id: "ccd", label: "CCD", sub: "CyberDefender", x: 60, y: 100, size: 4 },

  // Right branch — Career
  { id: "bounties", label: "Bug Bounties", sub: "Meta · BharatPe", x: 360, y: 310, size: 6, highlight: true },
  { id: "akamai", label: "Akamai", sub: "2021 →", x: 310, y: 210, size: 7, highlight: true },
  { id: "api", label: "API Security", sub: "Threat Hunting", x: 210, y: 130, size: 5 },
  { id: "sa1", label: "SA I", sub: "Architect", x: 400, y: 140, size: 5 },
  { id: "ddos", label: "DDoS / Bot", sub: "Mitigation", x: 420, y: 240, size: 5 },

  // Top — Current positions & output
  { id: "sa2", label: "SA II", sub: "Current Role", x: 380, y: 45, size: 7, highlight: true },
  { id: "research", label: "Research", sub: "Detection Models", x: 250, y: 45, size: 5 },
  { id: "blog", label: "Blog", sub: "fromthevo.id", x: 460, y: 120, size: 4 },
];

const edges: GraphEdge[] = [
  // Origin splits into two paths
  { from: "start", to: "certs" },
  { from: "start", to: "bounties" },

  // Certs hub → branches
  { from: "certs", to: "oscp" },
  { from: "certs", to: "ecthp" },
  { from: "certs", to: "ccd" },

  // Career progression
  { from: "bounties", to: "akamai" },
  { from: "akamai", to: "api" },
  { from: "akamai", to: "sa1" },
  { from: "akamai", to: "ddos" },
  { from: "sa1", to: "sa2" },
  { from: "api", to: "research" },
  { from: "research", to: "sa2" },

  // Outputs
  { from: "sa2", to: "blog" },
  { from: "ddos", to: "blog" },
];

const nodeMap = new Map(nodes.map((n) => [n.id, n]));

const reveal = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: 0.8 + i * 0.06,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function JourneyGraph({ background = false }: { background?: boolean }) {
  return (
    <motion.div
      custom={0}
      variants={reveal}
      initial="hidden"
      animate="visible"
      className={
        background
          ? "w-full max-w-[500px]"
          : "w-full max-w-[340px] mx-auto lg:mx-0 lg:w-[420px] lg:max-w-none lg:shrink-0 xl:w-[500px]"
      }
    >
      <svg
        viewBox="0 0 500 430"
        className="h-auto w-full max-w-[500px] overflow-visible"
      >
        {/* Edges */}
        {edges.map((edge, i) => {
          const a = nodeMap.get(edge.from);
          const b = nodeMap.get(edge.to);
          if (!a || !b) return null;
          return (
            <motion.line
              key={`edge-${i}`}
              custom={i}
              variants={reveal}
              initial="hidden"
              animate="visible"
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgba(0,0,0,0.12)"
              strokeWidth={1}
            />
          );
        })}

        {/* Purple edge shadows */}
        {edges.map((edge, i) => {
          const a = nodeMap.get(edge.from);
          const b = nodeMap.get(edge.to);
          if (!a || !b) return null;
          return (
            <motion.line
              key={`pedge-${i}`}
              custom={i + 2}
              variants={reveal}
              initial="hidden"
              animate="visible"
              x1={a.x + 1.5}
              y1={a.y + 1.5}
              x2={b.x + 1.5}
              y2={b.y + 1.5}
              stroke="rgba(100,50,150,0.08)"
              strokeWidth={0.5}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={node.id}
            custom={i + edges.length}
            variants={reveal}
            initial="hidden"
            animate="visible"
            style={{ cursor: background ? "default" : "pointer" }}
            whileHover={background ? undefined : "hovered"}
          >
            {/* Outer ring for highlights */}
            {node.highlight && (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.size + 4}
                fill="none"
                stroke="rgba(120,80,30,0.25)"
                strokeWidth={1}
                variants={{
                  hovered: { r: node.size + 7, strokeOpacity: 0.5 },
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            )}

            {/* Purple ring */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size + 2}
              fill="none"
              stroke="rgba(100,50,150,0.15)"
              strokeWidth={0.5}
              variants={{
                hovered: { r: node.size + 5, stroke: "rgba(100,50,150,0.30)" },
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />

            {/* Node dot */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill={node.highlight ? "rgba(0,0,0,0.70)" : "rgba(0,0,0,0.35)"}
              variants={{
                hovered: {
                  r: node.size + 2,
                  fill: node.highlight ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0.55)",
                },
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />

            {/* Invisible hit area for easier hover */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size + 12}
              fill="transparent"
            />

            {/* Labels — outer g for position, inner motion.g for scale */}
            <g transform={`translate(${node.x}, ${node.y + node.size + 18})`}>
              <motion.g
                variants={{
                  hovered: { scale: 1.25 },
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {/* Label */}
                <motion.text
                  x={0}
                  y={-4}
                  textAnchor="middle"
                  className="font-mono"
                  style={{
                    fontSize: "8px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                  fill={node.highlight ? "rgba(0,0,0,0.75)" : "rgba(0,0,0,0.20)"}
                  variants={{
                    hovered: {
                      fill: node.highlight ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0.70)",
                    },
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {node.label}
                </motion.text>

                {/* Sub label */}
                {node.sub && (
                  <motion.text
                    x={0}
                    y={6}
                    textAnchor="middle"
                    className="font-mono"
                    style={{
                      fontSize: "6.5px",
                      letterSpacing: "0.05em",
                    }}
                    fill={node.highlight ? "rgba(120,80,30,0.60)" : "rgba(120,80,30,0.25)"}
                    variants={{
                      hovered: {
                        fill: "rgba(120,80,30,0.85)",
                      },
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    {node.sub}
                  </motion.text>
                )}
              </motion.g>
            </g>
          </motion.g>
        ))}
      </svg>
    </motion.div>
  );
}
