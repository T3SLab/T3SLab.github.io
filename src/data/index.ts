export const LAB = {
  name: "T3S Lab",
  full: "Trusted Systems & Software Security Lab",
  tagline: "Hardware-rooted security for the systems that run the world.",
  mission:
    "We study the security of modern computing platforms — with a focus on Arm CPUs, FPGAs, and the trusted execution environments that sit between them. Our work spans micro-architectural side channels, firmware attestation, FPGA-based confidential computing, and the operating-system primitives that make platform security tractable.",
  university: "The University of Texas at El Paso",
  department: "Department of Computer Science",
  email: "marmanuzzaman@utep.edu",
  address: "500 W University Ave · El Paso, TX 79968",
} as const;

export interface Stat {
  k: string;
  v: string;
  sub: string;
}

export const STATS: Stat[] = [
  { k: "Publications", v: "9+", sub: "since 2021" },
  { k: "eCTF entries", v: "2", sub: "2025 — 2026" },
  { k: "Active members", v: "7", sub: "PhD · MS · BS" },
  { k: "Industry partners", v: "1", sub: "Octavo Systems" },
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
    { label: "Website", href: "https://tomal-kuet.github.io/armanuzzaman/" },
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
    body: "Lab finishes 42nd at MITRE eCTF 2026. Our implementation is open-sourced on GitHub.",
  },
  {
    date: "2026 · 05",
    body: "New industry collaboration with Octavo Systems on FPGA Confidential Computing.",
  },
  {
    date: "2026 · 01",
    body: "Paper accepted at ACM CCS 2026 on cryptographic practices in securing microcontrollers from embedded CTFs.",
  },
  {
    date: "2025 · 11",
    body: "Paper accepted at ACM CCS 2025 — insights and challenges for securing microcontroller systems from embedded CTF competitions.",
  },
  {
    date: "2025 · 06",
    body: "Three papers accepted: NDSS 2025, IEEE INFOCOM 2025, and IEEE TIFS 2025.",
  },
  {
    date: "2026 · 08",
    body: "Welcome Shovo and Monaem — two new PhD students join the lab for Fall 2026.",
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
  email?: string;
  website?: string;
}

export const MEMBERS: Record<MemberKind, Member[]> = {
  faculty: [
    {
      name: "Dr. Md. Armanuzzaman",
      role: "Assistant Professor",
      since: "2024",
      area: "Systems & software security",
      photo: "/assets/pictures/armanuzzaman.jpg",
      email: "marmanuzzaman@utep.edu",
      website: "https://tomal-kuet.github.io/armanuzzaman/",
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
      email: "almonaemkhan@gmail.com",
      website: "https://monaemportfolio.netlify.app/",
    },
  ],
  ms: [
    {
      name: "Sebastian Balderrama",
      role: "MS Student",
      since: "2025",
      area: "ARM CCA model deployment Security",
      email: "sbalderrama3@miners.utep.edu",
    },
    {
      name: "Jose R. Chaidez",
      role: "MS Student",
      since: "2025",
      area: "LLM Agent Security",
      email: "jrchaidez@miners.utep.edu",
    },
  ],
  undergrad: [
    {
      name: "Sebastian M. Lucero-Chavez",
      role: "Undergraduate Student",
      since: "2025",
      area: "Team Captain, Embedded Capture the Flag Competitions",
      email: "smlucerochavez@miners.utep.edu",
    },
    {
      name: "Karla G. Monroy",
      role: "Undergraduate Student",
      since: "2025",
      area: "RTOS Task Security",
      email: "kgmonroy@miners.utep.edu",
    },
  ],
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
  repo?: string;
  photos?: string[];
}

export const CTFS: CTFEvent[] = [
  {
    name: "MITRE eCTF 2026",
    date: "2026 · 05",
    place: 42,
    of: 0,
    points: 0,
    category: "Attack/Defense · Embedded",
    notes:
      "42nd place at MITRE eCTF 2026. Competition focused on embedded systems security. Our implementation is open-sourced on GitHub.",
    writeups: 0,
    repo: "https://github.com/t3s-lab/ectf-2026",
    photos: [
      "/assets/pictures/e-ctf-2026/01.png",
      "/assets/pictures/e-ctf-2026/02.png",
    ],
  },
  {
    name: "MITRE eCTF 2025",
    date: "2025 · 05",
    place: 0,
    of: 0,
    points: 0,
    category: "Attack/Defense · Embedded",
    notes:
      "Lab's first participation in MITRE eCTF. Work contributed to our CCS 2025 paper on securing microcontroller systems.",
    writeups: 0,
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
