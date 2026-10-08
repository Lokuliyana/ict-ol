'use client';

import React, { useState, useMemo } from 'react';
import { useGameStore } from '@/lib/store';
import { CURRICULUM_DATA } from '@/data/curriculum';
import { LevelNodeButton, NodeVisualState } from './LevelNodeButton';
import { LevelDrawer, LevelDrawerData } from './LevelDrawer';
import { HeartDepletionModal } from '@/components/quiz/HeartDepletionModal';
import { GradeLevel } from '@/types/store';
import { Sparkles, Crown, Trophy, Layers } from 'lucide-react';

interface QuestItem {
  id: string;
  unitId: string;
  unitNumber: number;
  questNumber: number;
  titleEn: string;
  titleSi: string;
  isBoss: boolean;
  xpReward: number;
  sandboxName?: string;
  bulletPoints?: string[];
}

const GRADE_10_QUESTS: QuestItem[] = [
  // Unit 1
  {
    id: 'g10-u1-s1',
    unitId: 'g10-u1',
    unitNumber: 1,
    questNumber: 1,
    titleEn: 'Factory Conveyor (Data vs Info)',
    titleSi: 'දත්ත හා තොරතුරු පද්ධති',
    isBoss: false,
    xpReward: 50,
    bulletPoints: [
      'Distinguish between data and information with real-world scenarios',
      'Examine the Input-Process-Output (IPO) cycle',
      'Attributes of high-quality actionable information',
    ],
  },
  {
    id: 'g10-u1-s2',
    unitId: 'g10-u1',
    unitNumber: 1,
    questNumber: 2,
    titleEn: 'Quality Radar (Info Attributes)',
    titleSi: 'ගුණාත්මක තොරතුරු ලක්ෂණ',
    isBoss: false,
    xpReward: 60,
    bulletPoints: [
      'Accuracy, Timeliness, Relevance, and Completeness',
      'Real-world evaluation of distorted vs reliable data',
    ],
  },
  {
    id: 'g10-u1-s3',
    unitId: 'g10-u1',
    unitNumber: 1,
    questNumber: 3,
    titleEn: 'Connected Island (e-Gov Grid)',
    titleSi: 'ICT යෙදවුම් හා ඊ-රාජ්‍යය',
    isBoss: false,
    xpReward: 60,
    bulletPoints: [
      'Applications of ICT in Education, Healthcare, and Government',
      'Digital divide and ethical dimensions of technology',
    ],
  },
  {
    id: 'g10-u1-boss',
    unitId: 'g10-u1',
    unitNumber: 1,
    questNumber: 4,
    titleEn: 'Unit 1 Boss: Past Paper Gauntlet',
    titleSi: '2020 – 2025 විභාග සටන්',
    isBoss: true,
    xpReward: 150,
    bulletPoints: [
      'Official 2020–2025 O/L Paper I and Paper II problems',
      'Unit 1 mastery badge test with model marking rubrics',
    ],
  },
  // Unit 2
  {
    id: 'g10-u2-s1',
    unitId: 'g10-u2',
    unitNumber: 2,
    questNumber: 5,
    titleEn: 'Motherboard Workbench (CPU & Ports)',
    titleSi: 'පරිගණක දෘඩාංග සංරචක',
    isBoss: false,
    xpReward: 60,
    bulletPoints: [
      'ALU, Control Unit, and Registers architecture',
      'Motherboard bus lines and physical I/O ports',
    ],
  },
  {
    id: 'g10-u2-s2',
    unitId: 'g10-u2',
    unitNumber: 2,
    questNumber: 6,
    titleEn: 'Memory Hierarchy Lab',
    titleSi: 'මතක ධූරාවලිය සහ ප්‍රවේශ වේගය',
    isBoss: false,
    xpReward: 70,
    bulletPoints: [
      'Registers, Cache, RAM, ROM, and Secondary Storage',
      'Speed, capacity, and cost trade-offs',
    ],
  },
  {
    id: 'g10-u2-boss',
    unitId: 'g10-u2',
    unitNumber: 2,
    questNumber: 7,
    titleEn: 'Unit 2 Boss: Hardware Exam Master',
    titleSi: 'දෘඩාංග විභාග ප්‍රශ්න පත්‍ර',
    isBoss: true,
    xpReward: 150,
    bulletPoints: [
      'Authentic O/L hardware architecture questions',
      'Von Neumann model verification test',
    ],
  },
  // Unit 3
  {
    id: 'g10-u3-s1',
    unitId: 'g10-u3',
    unitNumber: 3,
    questNumber: 8,
    titleEn: '8-Bit Switchboard & Color Vat',
    titleSi: 'ද්වීමය, අෂ්ටමය හා ෂඩ්දශමය',
    isBoss: false,
    xpReward: 80,
    sandboxName: '8-Bit Switchboard & Hex Color Chamber',
    bulletPoints: [
      'Binary place weights: 128, 64, 32, 16, 8, 4, 2, 1',
      'Octal & Hexadecimal conversions and RGB Hex codes',
    ],
  },
  {
    id: 'g10-u3-s2',
    unitId: 'g10-u3',
    unitNumber: 3,
    questNumber: 9,
    titleEn: 'Character Encoding & Storage Units',
    titleSi: 'අක්ෂර කේතන හා ආචයන ඒකක',
    isBoss: false,
    xpReward: 80,
    bulletPoints: [
      'ASCII (standard and extended) and Unicode multilingual scripts',
      'Data storage units: Bits, Bytes, KB, MB, GB, and TB hierarchies',
    ],
  },
  {
    id: 'g10-u3-boss',
    unitId: 'g10-u3',
    unitNumber: 3,
    questNumber: 10,
    titleEn: 'Unit 3 Boss: Data Representation Citadel',
    titleSi: 'දත්ත නිරූපණ විභාග අභියෝගය',
    isBoss: true,
    xpReward: 200,
    bulletPoints: [
      'Mastery challenge across number systems and character encodings',
      'Earn the Unit 3 Boss Mastery Gold Badge',
    ],
  },
  // Unit 4
  {
    id: 'g10-u4-s1',
    unitId: 'g10-u4',
    unitNumber: 4,
    questNumber: 11,
    titleEn: 'Neon Logic Gate Breadboard',
    titleSi: 'ලොජික් ද්වාර හා සත්‍යතා වගු',
    isBoss: false,
    xpReward: 90,
    sandboxName: 'Neon Logic Gate Breadboard',
    bulletPoints: [
      'AND, OR, NOT, NAND, NOR, and XOR truth tables',
      'Combinational logic circuit tracing and gate synthesis',
    ],
  },
  {
    id: 'g10-u4-boss',
    unitId: 'g10-u4',
    unitNumber: 4,
    questNumber: 12,
    titleEn: 'Unit 4 Boss: Logic Gates Citadel',
    titleSi: 'ලොජික් විභාග අභියෝගය',
    isBoss: true,
    xpReward: 200,
    bulletPoints: [
      'Combinational Boolean expressions and circuit simplification',
      'Earn the Unit 4 Logic Master Gold Badge',
    ],
  },
  // Unit 5
  {
    id: 'g10-u5-s1',
    unitId: 'g10-u5',
    unitNumber: 5,
    questNumber: 13,
    titleEn: 'Operating System Engine (Booting & CLI)',
    titleSi: 'මෙහෙයුම් පද්ධති හා Booting',
    isBoss: false,
    xpReward: 80,
    bulletPoints: [
      'Functions of the OS: Process, Memory, and File Management',
      'Cold vs Warm Booting sequences and BIOS/UEFI',
    ],
  },
  {
    id: 'g10-u5-boss',
    unitId: 'g10-u5',
    unitNumber: 5,
    questNumber: 14,
    titleEn: 'Unit 5 Boss: OS Citadel',
    titleSi: 'මෙහෙයුම් පද්ධති විභාග අභියෝගය',
    isBoss: true,
    xpReward: 200,
    bulletPoints: [
      'OS architecture, file system types, and command-line execution',
      'Earn the Unit 5 OS Master Badge',
    ],
  },
  // Unit 6
  {
    id: 'g10-u6-s1',
    unitId: 'g10-u6',
    unitNumber: 6,
    questNumber: 15,
    titleEn: 'Word Processing & Mail Merge Studio',
    titleSi: 'වචන සකසුම් හා තැපැල් ඒකාබද්ධතාව',
    isBoss: false,
    xpReward: 85,
    bulletPoints: [
      'Formatting, paragraph styles, and table manipulation',
      'Automated mail merge recipient sources and fields',
    ],
  },
  {
    id: 'g10-u6-boss',
    unitId: 'g10-u6',
    unitNumber: 6,
    questNumber: 16,
    titleEn: 'Unit 6 Boss: Word Processing Arena',
    titleSi: 'වචන සකසුම් විභාග අභියෝගය',
    isBoss: true,
    xpReward: 200,
    bulletPoints: [
      'Official O/L word processing questions and layout scenarios',
      'Earn the Unit 6 Word Processing Master Badge',
    ],
  },
  // Unit 7
  {
    id: 'g10-u7-s1',
    unitId: 'g10-u7',
    unitNumber: 7,
    questNumber: 17,
    titleEn: 'Spreadsheet Laser Grid & Anchors',
    titleSi: 'ඉලෙක්ට්‍රොනික පැතුරුම්පත් සූත්‍ර',
    isBoss: false,
    xpReward: 90,
    sandboxName: 'Spreadsheet Laser Grid & Reference Anchors',
    bulletPoints: [
      'Relative vs Absolute ($A$1) cell references',
      'SUM, AVERAGE, MIN, MAX, COUNT, and IF formulas',
    ],
  },
  {
    id: 'g10-u7-boss',
    unitId: 'g10-u7',
    unitNumber: 7,
    questNumber: 18,
    titleEn: 'Unit 7 Boss: Spreadsheet Citadel',
    titleSi: 'පැතුරුම්පත් විභාග අභියෝගය',
    isBoss: true,
    xpReward: 200,
    bulletPoints: [
      'Complex formula evaluations and chart analysis',
      'Earn the Unit 7 Spreadsheet Master Badge',
    ],
  },
  // Unit 8
  {
    id: 'g10-u8-s1',
    unitId: 'g10-u8',
    unitNumber: 8,
    questNumber: 19,
    titleEn: 'Electronic Presentations Studio',
    titleSi: 'ඉලෙක්ට්‍රොනික සමර්පණ සැලසුම්',
    isBoss: false,
    xpReward: 85,
    bulletPoints: [
      'Slide master templates, animations, and transitions',
      'Multimedia embedding and delivery controls',
    ],
  },
  {
    id: 'g10-u8-boss',
    unitId: 'g10-u8',
    unitNumber: 8,
    questNumber: 20,
    titleEn: 'Unit 8 Boss: Presentation Arena',
    titleSi: 'සමර්පණ විභාග අභියෝගය',
    isBoss: true,
    xpReward: 200,
    bulletPoints: [
      'Authentic O/L presentation structure and animation questions',
      'Earn the Unit 8 Presentation Master Badge',
    ],
  },
  // Unit 9
  {
    id: 'g10-u9-s1',
    unitId: 'g10-u9',
    unitNumber: 9,
    questNumber: 21,
    titleEn: 'Database Warehouse & Relational Tables',
    titleSi: 'දත්ත සමුදා කළමනාකරණය',
    isBoss: false,
    xpReward: 90,
    bulletPoints: [
      'Relational tables, Primary Keys, and Foreign Keys',
      'Entity-Relationship models and SQL queries',
    ],
  },
  {
    id: 'g10-u9-boss',
    unitId: 'g10-u9',
    unitNumber: 9,
    questNumber: 22,
    titleEn: 'Unit 9 Boss: Database Design Arena',
    titleSi: 'දත්ත සමුදා විභාග අභියෝගය',
    isBoss: true,
    xpReward: 250,
    bulletPoints: [
      'Relational table schema design and query execution',
      'Earn the Unit 9 Database Master Badge',
    ],
  },
];

const GRADE_11_QUESTS: QuestItem[] = [
  // G11 Unit 1
  {
    id: 'g11-u1-s1',
    unitId: 'g11-u1',
    unitNumber: 1,
    questNumber: 1,
    titleEn: 'Flowchart Trace Table Scrubber',
    titleSi: 'ගැලීම් සටහන් හා ගැටලු විශ්ලේෂණය',
    isBoss: false,
    xpReward: 70,
    sandboxName: 'Flowchart Trace Table Scrubber',
    bulletPoints: [
      'Flowchart standard ANSI symbols (Terminal, Process, Decision, I/O)',
      'Pre-test and Post-test algorithmic loops and dry runs',
    ],
  },
  {
    id: 'g11-u1-s2',
    unitId: 'g11-u1',
    unitNumber: 1,
    questNumber: 2,
    titleEn: 'Pascal Code Terminal & Compiler',
    titleSi: 'පැස්කල් ක්‍රමලේඛන පර්යන්තය',
    isBoss: false,
    xpReward: 80,
    bulletPoints: [
      'Pascal program structure, data types, and syntax rules',
      'Conditional branching and array iteration',
    ],
  },
  {
    id: 'g11-u1-boss',
    unitId: 'g11-u1',
    unitNumber: 1,
    questNumber: 3,
    titleEn: 'Programming Boss Arcade (2020-2025)',
    titleSi: 'ක්‍රමලේඛන විභාග සටන්',
    isBoss: true,
    xpReward: 200,
    bulletPoints: [
      'Past paper pseudocode parsing and error debugging',
      'Award of Unit 1 Programming Master Crown',
    ],
  },
  // G11 Unit 2
  {
    id: 'g11-u2-s1',
    unitId: 'g11-u2',
    unitNumber: 2,
    questNumber: 4,
    titleEn: 'SDLC Investigation & DFD Drafter',
    titleSi: 'SDLC අදියර හා දත්ත ගැලීම් සටහන්',
    isBoss: false,
    xpReward: 80,
    bulletPoints: [
      'Phases of the Software Development Life Cycle',
      'Waterfall vs Iterative models and DFD Level 0 diagrams',
    ],
  },
  {
    id: 'g11-u2-s2',
    unitId: 'g11-u2',
    unitNumber: 2,
    questNumber: 5,
    titleEn: 'Software Testing & Deployment Lab',
    titleSi: 'මෘදුකාංග පරීක්ෂණ හා ක්‍රියාත්මක කිරීම',
    isBoss: false,
    xpReward: 85,
    bulletPoints: [
      'White-box vs Black-box testing methodologies',
      'Direct, Parallel, Phased, and Pilot deployment strategies',
    ],
  },
  {
    id: 'g11-u2-boss',
    unitId: 'g11-u2',
    unitNumber: 2,
    questNumber: 6,
    titleEn: 'Unit 2 Boss: SDLC Mastery Arena',
    titleSi: 'SDLC විභාග අභියෝගය',
    isBoss: true,
    xpReward: 200,
    bulletPoints: [
      'Comprehensive SDLC phase questions and DFD evaluations',
      'Earn the Unit 2 SDLC Master Badge',
    ],
  },
  // G11 Unit 3
  {
    id: 'g11-u3-s1',
    unitId: 'g11-u3',
    unitNumber: 3,
    questNumber: 7,
    titleEn: 'Internet & Networking Protocol Vault',
    titleSi: 'අන්තර්ජාලය සහ සයිබර් ආරක්ෂණය',
    isBoss: false,
    xpReward: 85,
    bulletPoints: [
      'IP addressing, DNS routing, and TCP/IP stack',
      'Network topologies and transmission media',
    ],
  },
  {
    id: 'g11-u3-s2',
    unitId: 'g11-u3',
    unitNumber: 3,
    questNumber: 8,
    titleEn: 'Cyber Security & Network Protection',
    titleSi: 'සයිබර් ආරක්ෂාව හා തොරතුරු ආරක්ෂණය',
    isBoss: false,
    xpReward: 85,
    bulletPoints: [
      'Malware types, phishing vectors, and SSL/TLS encryption',
      'Firewalls and digital certificate authentication',
    ],
  },
  {
    id: 'g11-u3-boss',
    unitId: 'g11-u3',
    unitNumber: 3,
    questNumber: 9,
    titleEn: 'Unit 3 Boss: Internet & Security Citadel',
    titleSi: 'අන්තර්ජාල හා ආරක්ෂණ විභාග අභියෝගය',
    isBoss: true,
    xpReward: 200,
    bulletPoints: [
      'Network architecture and cyber security evaluation scenarios',
      'Earn the Unit 3 Internet Master Badge',
    ],
  },
  // G11 Unit 4
  {
    id: 'g11-u4-s1',
    unitId: 'g11-u4',
    unitNumber: 4,
    questNumber: 10,
    titleEn: 'Multimedia Design & Digital Media',
    titleSi: 'බහුමාධ්‍ය මූලධර්ම සහ ඩිජිටල් මාධ්‍ය',
    isBoss: false,
    xpReward: 85,
    bulletPoints: [
      'Raster vs Vector graphics and audio/video file formats',
      'Compression algorithms: Lossy vs Lossless comparison',
    ],
  },
  {
    id: 'g11-u4-boss',
    unitId: 'g11-u4',
    unitNumber: 4,
    questNumber: 11,
    titleEn: 'Unit 4 Boss: Multimedia Arena',
    titleSi: 'බහුමාධ්‍ය විභාග අභියෝගය',
    isBoss: true,
    xpReward: 200,
    bulletPoints: [
      'Digital graphics, video standards, and audio compression exam items',
      'Earn the Unit 4 Multimedia Master Badge',
    ],
  },
  // G11 Unit 5
  {
    id: 'g11-u5-s1',
    unitId: 'g11-u5',
    unitNumber: 5,
    questNumber: 12,
    titleEn: 'HTML Table Mason & Web Authoring',
    titleSi: 'වෙබ් නිර්මාණය හා HTML වගු',
    isBoss: false,
    xpReward: 90,
    sandboxName: 'HTML Table Mason',
    bulletPoints: [
      'Semantic HTML5 structure and CSS styling',
      'Interactive Colspan and Rowspan cell merging',
    ],
  },
  {
    id: 'g11-u5-s2',
    unitId: 'g11-u5',
    unitNumber: 5,
    questNumber: 13,
    titleEn: 'CSS Styling & Web Form Studio',
    titleSi: 'CSS හැඩතල සහ වෙබ් පෝරම',
    isBoss: false,
    xpReward: 85,
    bulletPoints: [
      'Internal, external, and inline CSS stylesheet cascading',
      'HTML form input elements, radio, checkboxes, and buttons',
    ],
  },
  {
    id: 'g11-u5-boss',
    unitId: 'g11-u5',
    unitNumber: 14,
    questNumber: 14,
    titleEn: 'Unit 5 Boss: Web Developer Gauntlet',
    titleSi: 'වෙබ් නිර්මාණ විභාග අභියෝගය',
    isBoss: true,
    xpReward: 200,
    bulletPoints: [
      'Real O/L HTML markup questions from 2020 to 2025',
      'Validation of web formatting and link structures',
    ],
  },
  // G11 Unit 6
  {
    id: 'g11-u6-s1',
    unitId: 'g11-u6',
    unitNumber: 6,
    questNumber: 15,
    titleEn: 'ICT in Society & Ethical Frameworks',
    titleSi: 'සමාජය තුළ තොරතුරු තාක්ෂණය සහ නීතිමය රාමු',
    isBoss: false,
    xpReward: 80,
    bulletPoints: [
      'Digital divide, electronic waste management, and green computing',
      'Intellectual property, copyright, and Sri Lanka Computer Crimes Act',
    ],
  },
  {
    id: 'g11-u6-boss',
    unitId: 'g11-u6',
    unitNumber: 6,
    questNumber: 16,
    titleEn: 'Unit 6 Boss: ICT & Society Arena',
    titleSi: 'සමාජය හා තොරතුරු තාක්ෂණ විභාග අභියෝගය',
    isBoss: true,
    xpReward: 200,
    bulletPoints: [
      'Authentic exam problems on IT ethics, law, and environmental health',
      'Earn the Unit 6 ICT & Society Master Crown',
    ],
  },
];

export function QuestMap() {
  const grade = useGameStore((s) => s.grade);
  const activeNodeId = useGameStore((s) => s.activeNodeId);
  const completedNodes = useGameStore((s) => s.completedNodes);
  const questStars = useGameStore((s) => s.questStars);

  const [selectedNode, setSelectedNode] = useState<LevelDrawerData | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDepletedModalOpen, setIsDepletedModalOpen] = useState(false);

  const quests = grade === '11' ? GRADE_11_QUESTS : GRADE_10_QUESTS;

  // Geometry computation for cubic Bézier winding spline
  const nodeSpacing = 145; // Vertical px between nodes
  const totalHeight = 80 + quests.length * nodeSpacing;

  // Compute (X, Y) coordinates for each node
  const nodeCoordinates = useMemo(() => {
    return quests.map((q, idx) => {
      const y = 80 + idx * nodeSpacing;
      if (q.isBoss) {
        return { x: 200, y };
      }
      // Winding oscillation pattern: Center -> Left -> Center -> Right
      const pattern = idx % 4;
      let x = 200;
      if (pattern === 1) x = 110;
      else if (pattern === 3) x = 290;

      return { x, y };
    });
  }, [quests]);

  // Construct continuous cubic Bézier SVG path
  const { fullPathD, activeSegmentD } = useMemo(() => {
    if (nodeCoordinates.length === 0) return { fullPathD: '', activeSegmentD: '' };

    let fullD = `M ${nodeCoordinates[0].x} ${nodeCoordinates[0].y}`;
    for (let i = 0; i < nodeCoordinates.length - 1; i++) {
      const p0 = nodeCoordinates[i];
      const p1 = nodeCoordinates[i + 1];
      const cp1y = p0.y + nodeSpacing / 2;
      const cp2y = p1.y - nodeSpacing / 2;
      fullD += ` C ${p0.x} ${cp1y}, ${p1.x} ${cp2y}, ${p1.x} ${p1.y}`;
    }

    // Active path up to active node index
    let activeD = '';
    const activeIdx = quests.findIndex((q) => q.id === activeNodeId);
    const targetIdx = activeIdx >= 0 ? activeIdx : 0;

    if (targetIdx > 0) {
      activeD = `M ${nodeCoordinates[0].x} ${nodeCoordinates[0].y}`;
      for (let i = 0; i < targetIdx; i++) {
        const p0 = nodeCoordinates[i];
        const p1 = nodeCoordinates[i + 1];
        const cp1y = p0.y + nodeSpacing / 2;
        const cp2y = p1.y - nodeSpacing / 2;
        activeD += ` C ${p0.x} ${cp1y}, ${p1.x} ${cp2y}, ${p1.x} ${p1.y}`;
      }
    }

    return { fullPathD: fullD, activeSegmentD: activeD };
  }, [nodeCoordinates, quests, activeNodeId]);

  // Determine state of each node
  const getNodeState = (node: QuestItem, index: number): NodeVisualState => {
    if (completedNodes[node.id]) {
      return 'cleared';
    }
    if (node.id === activeNodeId) {
      return node.isBoss ? 'boss' : 'active';
    }
    // First node is active by default if nothing cleared
    if (index === 0 && Object.keys(completedNodes).length === 0) {
      return 'active';
    }
    // If prior node is completed, this node is active
    if (index > 0 && completedNodes[quests[index - 1].id]) {
      return node.isBoss ? 'boss' : 'active';
    }
    return 'locked';
  };

  const handleNodeClick = (node: QuestItem, state: NodeVisualState) => {
    const unitMeta = CURRICULUM_DATA.find((c) => c.id === node.unitId);
    const progress = completedNodes[node.id];

    setSelectedNode({
      id: node.id,
      unitId: node.unitId,
      unitNumber: node.unitNumber,
      unitTitleEn: unitMeta?.titleEn || `Unit ${node.unitNumber}`,
      unitTitleSi: unitMeta?.titleSi || `ඒකකය ${node.unitNumber}`,
      titleEn: node.titleEn,
      titleSi: node.titleSi,
      isBoss: node.isBoss,
      stars: progress?.stars || questStars[node.id] || 0,
      highAccuracy: progress?.highAccuracy || 0,
      xpReward: node.xpReward,
      isCleared: state === 'cleared',
      isActive: state === 'active' || state === 'boss',
      sandboxName: node.sandboxName,
      bulletPoints: node.bulletPoints,
    });
    setIsDrawerOpen(true);
  };

  return (
    <div className="w-full max-w-xl mx-auto px-2 relative select-none">
      
      {/* Unit Header Badge at Top */}
      <div className="flex items-center justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-xs sm:text-sm font-black text-indigo-700 dark:text-indigo-300 shadow-sm">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Grade {grade} Quest Journey • වික්‍රමාන්විත මාවත</span>
        </div>
      </div>

      {/* Quest Spline & Interactive Canvas */}
      <div
        className="relative w-full mx-auto"
        style={{ height: `${totalHeight}px` }}
      >
        {/* SVG Spline Road Layer */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox={`0 0 400 ${totalHeight}`}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="quest-path-active" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#06b6d4" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* 1. Underlying Slate Base Rail */}
          <path
            d={fullPathD}
            fill="none"
            stroke="currentColor"
            className="text-slate-200 dark:text-slate-800"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* 2. Dotted Inner Guide Track */}
          <path
            d={fullPathD}
            fill="none"
            stroke="currentColor"
            className="text-slate-300 dark:text-slate-700"
            strokeWidth="3.5"
            strokeDasharray="6 8"
            strokeLinecap="round"
          />

          {/* 3. Completed / Active Journey Line */}
          {activeSegmentD && (
            <path
              d={activeSegmentD}
              fill="none"
              stroke="url(#quest-path-active)"
              strokeWidth="14"
              strokeLinecap="round"
              filter="url(#neon-glow)"
            />
          )}
        </svg>

        {/* Nodes Layer: Exact Coordinates Mapped to Spline */}
        {quests.map((node, idx) => {
          const coord = nodeCoordinates[idx];
          const state = getNodeState(node, idx);
          const starsEarned = completedNodes[node.id]?.stars || questStars[node.id] || 0;

          // Convert (x, y) in virtual 400-wide box to responsive percentages
          const leftPct = (coord.x / 400) * 100;
          const topPct = (coord.y / totalHeight) * 100;

          return (
            <div
              key={node.id}
              className="absolute"
              style={{
                left: `${leftPct}%`,
                top: `${topPct}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <LevelNodeButton
                id={node.id}
                nodeNumber={node.questNumber}
                titleEn={node.titleEn}
                titleSi={node.titleSi}
                state={state}
                stars={starsEarned}
                xpReward={node.xpReward}
                isBoss={node.isBoss}
                onClick={() => handleNodeClick(node, state)}
              />
            </div>
          );
        })}
      </div>

      {/* Level Details & Preview Drawer */}
      <LevelDrawer
        isOpen={isDrawerOpen}
        node={selectedNode}
        grade={grade}
        onClose={() => setIsDrawerOpen(false)}
        onDepletedHearts={() => {
          setIsDrawerOpen(false);
          setIsDepletedModalOpen(true);
        }}
      />

      {/* Heart Depletion Lockout Notice Modal */}
      <HeartDepletionModal
        isOpen={isDepletedModalOpen}
        nodeId={selectedNode?.id}
        onReviewFlashcards={() => {
          setIsDepletedModalOpen(false);
          if (selectedNode) {
            window.location.href = `/study/${selectedNode.id}`;
          }
        }}
        onClose={() => setIsDepletedModalOpen(false)}
      />
    </div>
  );
}
