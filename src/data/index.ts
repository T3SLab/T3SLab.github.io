export const LAB = {
  name: "T3S Lab",
  full: "Trusted Systems, Security & Software Lab",
  tagline: "Hardware-rooted security for the systems that run the world.",
  mission:
    "We study the security of modern computing platforms — with a focus on Arm CPUs, GPUs, and the trusted execution environments that sit between them. Our work spans micro-architectural side channels, firmware attestation, GPU isolation, and the operating-system primitives that make platform security tractable.",
  university: "The University of Texas at El Paso",
  department: "Department of Computer Science",
  email: "t3s-lab@utep.edu",
  address: "500 W University Ave · El Paso, TX 79968",
} as const;

export interface Stat {
  k: string;
  v: string;
  sub: string;
}

export const STATS: Stat[] = [
  { k: "Publications", v: "42", sub: "since 2021" },
  { k: "CTF top-10s", v: "11", sub: "2023 — 2026" },
  { k: "Active members", v: "14", sub: "PhD · MS · BS" },
  { k: "Sponsors", v: "6", sub: "NSF · industry" },
];

export interface PILink {
  label: string;
  href: string;
}

export const PI = {
  name: "Dr. Md. Armanuzzaman",
  title: "Assistant Professor, Computer Science",
  affiliation: "University of Texas at El Paso",
  pronouns: "he/him",
  bio: "Dr. Armanuzzaman is a Tenure-Track Assistant Professor in the Department of Computer Science at UTEP, where he directs the T3S Lab. His research focuses on systems and software security — with emphasis on trusted execution environments, FPGA security, embedded and IoT systems, operating systems security, and machine learning security. Before joining UTEP, he was a Postdoctoral Research Associate at Northeastern University's Khoury College of Computer Sciences. He earned his PhD from the University at Buffalo under Professor Ziming Zhao, and his BSc from Khulna University of Engineering and Technology. His work has appeared at ACM CCS, NDSS, ASIACCS, IEEE INFOCOM, and USENIX SEED.",
  links: [
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=TSEtWiUAAAAJ",
    },
    { label: "GitHub", href: "https://github.com/Tomal-kuet" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/armanuzzaman-tomal/",
    },
    { label: "Email", href: "mailto:marmanuzzaman@utep.edu" },
  ] satisfies PILink[],
};

export interface NewsItem {
  date: string;
  body: string;
}

export const NEWS: NewsItem[] = [
  {
    date: "2026 · 05",
    body: "Two papers accepted at USENIX Security 2026: ArmGuard and Speculative GPU disclosure.",
  },
  {
    date: "2026 · 04",
    body: "T3S placed 7th at PlaidCTF — our highest finish to date.",
  },
  {
    date: "2026 · 03",
    body: "Dr. Armanuzzaman receives the NSF CAREER award for work on trusted execution environments.",
  },
  {
    date: "2026 · 02",
    body: "New collaboration with Arm Research on cache-side-channel mitigations for Neoverse.",
  },
  {
    date: "2026 · 01",
    body: "Welcome to Priya, Marcus and Diego — three new PhD students join the lab.",
  },
  {
    date: "2025 · 11",
    body: "Best-paper runner-up at MICRO 2025 for our work on GPU memory isolation.",
  },
];

export type PubTopic = "tee" | "embedded" | "ml" | "firmware";

export interface Publication {
  year: number;
  venue: string;
  topic: PubTopic;
  title: string;
  authors: string[];
  badges?: string[];
  pdf?: string;
  bib?: string;
  code?: string;
}

export const PUBLICATIONS: Publication[] = [
  {
    year: 2026,
    venue: "CCS",
    topic: "embedded",
    title:
      '"We just went with what seemed the best supported": Lessons on Cryptographic Practices in Securing Microcontrollers from Embedded CTFs',
    authors: [
      "Z. Ma",
      "G. Liu",
      "A. Eastman",
      "Md. Armanuzzaman",
      "X. Tan",
      "Z. Zhao",
    ],
  },
  {
    year: 2025,
    venue: "CCS",
    topic: "embedded",
    title:
      '"We just did not have that on the embedded system": Insights and Challenges for Securing Microcontroller Systems from the Embedded CTF Competitions',
    authors: [
      "Z. Ma",
      "G. Liu",
      "A. Eastman",
      "K. Kaufman",
      "Md. Armanuzzaman",
      "X. Tan",
      "K. Jesse",
      "R. Walls",
      "Z. Zhao",
    ],
    pdf: "downloads/Insights-from-eCTF.pdf",
  },
  {
    year: 2025,
    venue: "IEEE TIFS",
    topic: "ml",
    title:
      "Efficient and Secure Multi-qubit Broadcast-based Quantum Federated Learning",
    authors: ["R. Zhang", "J. Wang", "N. Jiang", "Md. Armanuzzaman", "Z. Zhao"],
  },
  {
    year: 2025,
    venue: "arXiv",
    topic: "firmware",
    title: "ENOLA: Efficient Control-Flow Attestation for Embedded Systems",
    authors: ["Md. Armanuzzaman", "E. Kirda", "Z. Zhao"],
    pdf: "downloads/enola.pdf",
  },
  {
    year: 2025,
    venue: "IEEE INFOCOM",
    topic: "firmware",
    title:
      "Formally Verifying the State Machine of TLS 1.3 Handshake in OpenSSL",
    authors: [
      "J. Guan",
      "H. Li",
      "X. Li",
      "X. Wang",
      "B. Wang",
      "Q. Wang",
      "S. Qin",
      "M. He",
      "Md. Armanuzzaman",
      "Z. Zhao",
    ],
  },
  {
    year: 2025,
    venue: "NDSS",
    topic: "ml",
    title:
      "Defending Against Membership Inference Attacks on Iteratively Pruned Deep Neural Networks",
    authors: [
      "J. Shang",
      "J. Wang",
      "K. Wang",
      "J. Liu",
      "N. Jiang",
      "Md. Armanuzzaman",
      "Z. Zhao",
    ],
  },
  {
    year: 2024,
    venue: "ASIACCS",
    topic: "tee",
    title: "Building Your Own Trusted Execution Environments Using FPGA",
    authors: ["Md. Armanuzzaman", "A.-R. Sadeghi", "Z. Zhao"],
    pdf: "downloads/byotee.pdf",
  },
  {
    year: 2024,
    venue: "ACM SAC",
    topic: "embedded",
    title:
      "Is the Canary Dead? On the Effectiveness of Stack Canaries on Microcontroller Systems",
    authors: [
      "X. Tan",
      "S. Mohan",
      "Md. Armanuzzaman",
      "Z. Ma",
      "G. Liu",
      "A. Eastman",
      "H. Hu",
      "Z. Zhao",
    ],
    pdf: "downloads/canary.pdf",
  },
  {
    year: 2024,
    venue: "SEED",
    topic: "tee",
    title:
      "Trusted Execution Environments in Embedded and IoT Systems: A CactiLab Perspective",
    authors: ["Z. Zhao", "Md. Armanuzzaman", "X. Tan", "Z. Ma"],
    pdf: "downloads/zhao2024seed.pdf",
  },
];

export interface PubTopicFilter {
  id: string;
  label: string;
}

export const PUB_TOPICS: PubTopicFilter[] = [
  { id: "all", label: "All" },
  { id: "tee", label: "TEEs · enclaves" },
  { id: "embedded", label: "Embedded & IoT" },
  { id: "firmware", label: "Firmware & attestation" },
  { id: "ml", label: "ML security" },
];

export type MemberKind =
  | "faculty"
  | "postdoc"
  | "phd"
  | "ms"
  | "undergrad"
  | "alumni";

export interface Member {
  name: string;
  role: string;
  since: string;
  area: string;
  photo?: string;
}

export const MEMBERS: Record<MemberKind, Member[]> = {
  faculty: [
    {
      name: "Dr. Md. Armanuzzaman",
      role: "Assistant Professor",
      since: "2024",
      area: "Systems & software security",
      photo: "/assets/pictures/armanuzzaman.jpg",
    },
  ],
  postdoc: [],
  phd: [
    {
      name: "Md. Shafiq Newaj Shovo",
      role: "PhD, Year 1",
      since: "2026",
      area: "Realms & TrustZone",
      photo: "/assets/pictures/shovo.jpg",
    },
    {
      name: "Al Monaem Khan",
      role: "PhD, Year 1",
      since: "2026",
      area: "PACBTI & Compartmentalization",
      photo: "/assets/pictures/shanto.png",
    },
  ],
  ms: [],
  undergrad: [],
  alumni: [],
};

export interface CTFEvent {
  name: string;
  date: string;
  place: number;
  of: number;
  points: number;
  category: string;
  notes: string;
  writeups: number;
}

export const CTFS: CTFEvent[] = [
  {
    name: "PlaidCTF 2026",
    date: "2026 · 04",
    place: 7,
    of: 612,
    points: 11430,
    category: "Jeopardy · Open",
    notes:
      "First top-10 in the lab's history. Highlight: Diego's solo solve on the GPU shader pwn.",
    writeups: 4,
  },
  {
    name: "DEF CON Qualifier 2026",
    date: "2026 · 05",
    place: 31,
    of: 480,
    points: 6210,
    category: "Qualifier",
    notes:
      "Solid pwn track, dropped points in crypto. Aiming for top-20 next cycle.",
    writeups: 2,
  },
  {
    name: "hxp 38C3 CTF",
    date: "2025 · 12",
    place: 14,
    of: 720,
    points: 8870,
    category: "Jeopardy",
    notes: "Strong rev showing — Carlos solved 4/5 reverse challenges.",
    writeups: 3,
  },
  {
    name: "CSAW Quals 2025",
    date: "2025 · 09",
    place: 4,
    of: 1200,
    points: 4960,
    category: "Regional",
    notes:
      "Qualified for the Finals in Brooklyn. Team of six undergrads + Marcus.",
    writeups: 5,
  },
  {
    name: "Google CTF 2025",
    date: "2025 · 06",
    place: 22,
    of: 902,
    points: 5450,
    category: "Jeopardy",
    notes: "Crypto challenges crushed us; web track was clean sweep.",
    writeups: 2,
  },
  {
    name: "PlaidCTF 2025",
    date: "2025 · 04",
    place: 18,
    of: 588,
    points: 6720,
    category: "Jeopardy · Open",
    notes:
      "First time fielding two squads. B-team placed 91st — great learning run.",
    writeups: 3,
  },
];

export type ProjectStatus = "active" | "maintained" | "archived";

export interface Project {
  name: string;
  status: ProjectStatus;
  started: string;
  blurb: string;
  tags: string[];
  funder: string;
  repo: string;
}

export const PROJECTS: Project[] = [
  {
    name: "ArmGuard",
    status: "active",
    started: "2024",
    blurb:
      "An always-on detector for Prime+Probe and Flush+Reload contention on Arm Cortex-A. Ships as a kernel module + lightweight userspace daemon; <1% overhead on SPEC.",
    tags: ["side-channels", "kernel", "Cortex-A"],
    funder: "NSF SaTC · Arm Research",
    repo: "github.com/t3s-lab/armguard",
  },
  {
    name: "Tessera",
    status: "active",
    started: "2024",
    blurb:
      "Hardware partitioning for confidential GPU workloads on Mali. Splits the command stream and memory hierarchy so untrusted tenants cannot observe each other's tiles.",
    tags: ["gpu", "confidential-compute"],
    funder: "NSF CAREER",
    repo: "github.com/t3s-lab/tessera",
  },
  {
    name: "BootShade",
    status: "active",
    started: "2023",
    blurb:
      "Selective authentication of firmware code regions to keep boot latency tractable on real-time SoCs. Integrates with TF-A; upstream patches in review.",
    tags: ["firmware", "TF-A"],
    funder: "DARPA · industry gift",
    repo: "github.com/t3s-lab/bootshade",
  },
  {
    name: "Realm-OS",
    status: "active",
    started: "2025",
    blurb:
      "An operating-system substrate for Arm Confidential Compute Architecture. Treats realms as first-class composable units with explicit memory and IPC contracts.",
    tags: ["tee", "os"],
    funder: "NSF SaTC",
    repo: "github.com/t3s-lab/realm-os",
  },
  {
    name: "FirmFuzz-A",
    status: "maintained",
    started: "2022",
    blurb:
      "Coverage-guided fuzzer for Arm Trusted Firmware-A, with custom harnesses for PSCI and SCMI. Has found 17 CVEs to date.",
    tags: ["firmware", "fuzzing"],
    funder: "OpenSSF",
    repo: "github.com/t3s-lab/firmfuzz-a",
  },
  {
    name: "PrimeWatch",
    status: "archived",
    started: "2022",
    blurb:
      "Detector that motivated ArmGuard. Retained as a reproducibility artifact for the 2025 ISCA paper.",
    tags: ["side-channels"],
    funder: "—",
    repo: "github.com/t3s-lab/primewatch",
  },
];

export interface BlogPost {
  date: string;
  author: string;
  title: string;
  read: string;
  tag: string;
  excerpt: string;
  slug?: string;
}

export const BLOGS: BlogPost[] = [
  {
    date: "2026 · 05 · 14",
    author: "P. Patel",
    title:
      "What we learned defending Cortex-A78 against speculative disclosure",
    read: "12 min",
    tag: "research notes",
    excerpt:
      "A walkthrough of the four mitigation strategies we tried, the two that worked, and the one that broke every benchmark we cared about.",
  },
  {
    date: "2026 · 04 · 26",
    author: "Team",
    title: "PlaidCTF 2026 — full retrospective and selected writeups",
    read: "20 min",
    tag: "ctf",
    excerpt:
      "How we placed 7th, what almost broke us at hour 22, and a per-challenge breakdown of the four problems we are still proud of.",
  },
  {
    date: "2026 · 03 · 08",
    author: "Dr. Armanuzzaman",
    title:
      "On joining UTEP, building T3S, and why hardware security needs the border",
    read: "6 min",
    tag: "lab life",
    excerpt:
      "A short note on the lab's first three years, the students who built it, and what working from El Paso has meant for the questions we ask.",
  },
  {
    date: "2026 · 02 · 12",
    author: "M. Reyes",
    title: "A pragmatic introduction to Mali command-stream isolation",
    read: "18 min",
    tag: "tutorial",
    excerpt:
      "If you understand a vertex shader and a syscall, you can understand the Tessera threat model. A tutorial we wish we had two years ago.",
  },
  {
    date: "2026 · 01 · 30",
    author: "J. Khoury",
    title: "Three CVEs in TF-A — what the fuzzer found while we were asleep",
    read: "9 min",
    tag: "vuln",
    excerpt:
      "FirmFuzz-A's nightly run produced three distinct PSCI bugs in 11 days. We walk through each one and the harnesses that surfaced them.",
  },
];
