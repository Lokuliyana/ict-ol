export interface LessonMeta {
  id: string;
  grade: '10' | '11';
  unitNumber: number;
  titleEn: string;
  titleSi: string;
  shortDescEn: string;
  shortDescSi: string;
  icon: string; // clay asset name
  badgeColor: string;
  totalSubtopics: number;
  totalPastPapers: number;
  keyCompetencies: { en: string; si: string }[];
}

export const CURRICULUM_DATA: LessonMeta[] = [
  // GRADE 10
  {
    id: 'g10-u1',
    grade: '10',
    unitNumber: 1,
    titleEn: 'Basic Concepts of Information and Communication Technology',
    titleSi: 'තොරතුරු හා සන්නිවේදන තාක්ෂණයේ මූලික සංකල්ප',
    shortDescEn: 'Data vs. Information, Information Systems, Quality Characteristics, Applications, Demerits, and Computer Generations.',
    shortDescSi: 'දත්ත සහ තොරතුරු, තොරතුරු පද්ධති, ගුණාත්මක තොරතුරක ලක්ෂණ, ICT යෙදීම්, අවාසි සහ පරිගණකයේ පරිණාමය.',
    icon: '/assets/clay/thumb-ict-tech.svg',
    badgeColor: 'bg-indigo-500',
    totalSubtopics: 7,
    totalPastPapers: 8,
    keyCompetencies: [
      { en: 'Distinguishes between data and information with real-world examples', si: 'සැබෑ ලෝකයේ උදාහරණ මගින් දත්ත සහ තොරතුරු අතර වෙනස හඳුනා ගනී' },
      { en: 'Explains the components and functions of an Information System', si: 'තොරතුරු පද්ධතියක සංරචක සහ ක්‍රියාකාරීත්වය විස්තර කරයි' },
      { en: 'Evaluates the characteristics of quality information', si: 'ගුණාත්මක තොරතුරක ලක්ෂණ ඇගයීමට ලක් කරයි' },
      { en: 'Identifies ICT applications across e-Government, Education, and Healthcare', si: 'රාජ්‍ය සේවා, අධ්‍යාපන සහ සෞඛ්‍ය ක්ෂේත්‍රවල ICT යෙදීම් හඳුනා ගනී' },
      { en: 'Traces the evolution of computing from mechanical devices to 5th gen AI', si: 'යාන්ත්‍රික යුගයේ සිට 5 වන පරම්පරාව දක්වා පරිගණක පරිණාමය විමර්ශනය කරයි' }
    ]
  },
  {
    id: 'g10-u2',
    grade: '10',
    unitNumber: 2,
    titleEn: 'Evolution of Computer & Data Representation',
    titleSi: 'පරිගණකයේ පරිණාමය සහ දත්ත නිරූපණය',
    shortDescEn: 'Number systems (Decimal, Binary, Octal, Hexadecimal), conversions, BCD, ASCII, Unicode, and 2\'s complement representation.',
    shortDescSi: 'සංඛ්‍යා පද්ධති (දශමය, ද්වීමය, අෂ්ටමය, ෂඩ්දශමය), පරිවර්තන, BCD, ASCII, යුනිකෝඩ් සහ පරිපූරක සංඛ්‍යා නිරූපණය.',
    icon: '/assets/clay/exam-paper-creation.svg',
    badgeColor: 'bg-blue-500',
    totalSubtopics: 5,
    totalPastPapers: 12,
    keyCompetencies: [
      { en: 'Converts between number systems effortlessly', si: 'සංඛ්‍යා පද්ධති අතර නිවැරදිව පරිවර්තනය කරයි' },
      { en: 'Understands character encoding: ASCII, Unicode', si: 'අක්ෂර කේතන පද්ධති: ASCII සහ Unicode අවබෝධ කර ගනී' },
      { en: 'Computes signed numbers using 2s complement', si: 'දෙකෙහි පරිපූරකය භාවිතයෙන් සංඛ්‍යා නිරූපණය කරයි' }
    ]
  },
  {
    id: 'g10-u3',
    grade: '10',
    unitNumber: 3,
    titleEn: 'Computer Hardware and System Components',
    titleSi: 'පරිගණක දෘඩාංග සහ පද්ධති සංරචක',
    shortDescEn: 'Von Neumann Architecture, CPU components (ALU, CU, Registers), Memory hierarchy, Primary/Secondary storage, Ports, and I/O devices.',
    shortDescSi: 'වොන් නියුමන් ආකෘතිය, මධ්‍ය සැකසුම් ඒකකය (ALU, CU, රෙජිස්ටර්), මතක ධූරාවලිය, ප්‍රාථමික/ද්විතීයික ආචයනය සහ පර්යන්ත.',
    icon: '/assets/clay/thumb-theory-openbook.svg',
    badgeColor: 'bg-cyan-500',
    totalSubtopics: 6,
    totalPastPapers: 10,
    keyCompetencies: [
      { en: 'Identifies CPU internals: ALU, Control Unit, Registers', si: 'CPU හි අභ්‍යන්තර කොටස් සහ ක්‍රියාකාරීත්වය හඳුනා ගනී' },
      { en: 'Compares RAM, ROM, Cache, and Secondary Storage', si: 'ප්‍රාථමික මතකය, කැෂේ සහ ද්විතීයික ආචයනය සංසන්දනය කරයි' }
    ]
  },
  {
    id: 'g10-u4',
    grade: '10',
    unitNumber: 4,
    titleEn: 'Operating Systems',
    titleSi: 'මෙහෙයුම් පද්ධති',
    shortDescEn: 'OS roles, Process management, Memory management, File systems, CLI vs. GUI, and Utility software.',
    shortDescSi: 'මෙහෙයුම් පද්ධතියක කාර්යභාරය, ක්‍රියාවලි හා මතක කළමනාකරණය, ගොනු පද්ධති, CLI සහ GUI සංසන්දනය.',
    icon: '/assets/clay/banner-admin-station.svg',
    badgeColor: 'bg-teal-500',
    totalSubtopics: 5,
    totalPastPapers: 7,
    keyCompetencies: [
      { en: 'Explains core functions of an OS', si: 'මෙහෙයුම් පද්ධතියක ප්‍රධාන කාර්යයන් විස්තර කරයි' },
      { en: 'Distinguishes between CLI and GUI environments', si: 'විධාන රේඛා සහ චිත්‍රක පරිශීලක අතුරුමුහුණත් වෙන්කර හඳුනා ගනී' }
    ]
  },
  {
    id: 'g10-u5',
    grade: '10',
    unitNumber: 5,
    titleEn: 'Word Processing',
    titleSi: 'වදන් සැකසුම',
    shortDescEn: 'Document formatting, styles, tables, headers/footers, mail merge, and proofreading tools.',
    shortDescSi: 'ලේඛන හැඩසැරසුම්, ශෛලීන්, වගු, තැපැල් ඒකාබද්ධතාව (Mail Merge) සහ සංස්කරණ මෙවලම්.',
    icon: '/assets/clay/branding-paint-palette.svg',
    badgeColor: 'bg-emerald-500',
    totalSubtopics: 4,
    totalPastPapers: 6,
    keyCompetencies: [
      { en: 'Applies document formatting and styles efficiently', si: 'ලේඛන කාර්යක්ෂමව සංස්කරණය හා හැඩගැන්වීම සිදු කරයි' },
      { en: 'Executes Mail Merge for batch communications', si: 'තැපැල් ඒකාබද්ධතාව (Mail Merge) භාවිතයෙන් ලිපි සකස් කරයි' }
    ]
  },
  {
    id: 'g10-u6',
    grade: '10',
    unitNumber: 6,
    titleEn: 'Electronic Spreadsheets',
    titleSi: 'විද්‍යුත් පැතුරුම්පත්',
    shortDescEn: 'Cell referencing (Relative, Absolute), Formulas, Built-in Functions (SUM, AVERAGE, COUNT, IF, VLOOKUP), and Chart generation.',
    shortDescSi: 'සෛල යොමු (සාපේක්ෂ, නිරපේක්ෂ), සූත්‍ර, ශ්‍රිත (SUM, AVERAGE, COUNT, IF) සහ ප්‍රස්ථාර නිර්මාණය.',
    icon: '/assets/clay/exam-marks-spreadsheet.svg',
    badgeColor: 'bg-amber-500',
    totalSubtopics: 6,
    totalPastPapers: 14,
    keyCompetencies: [
      { en: 'Uses absolute ($A$1) and relative referencing', si: 'සාපේක්ෂ සහ නිරපේක්ෂ සෛල යොමු නිවැරදිව භාවිත කරයි' },
      { en: 'Constructs nested IF formulas and conditional functions', si: 'IF ශ්‍රිත සහ සංකීර්ණ සූත්‍ර ගොඩනගයි' }
    ]
  },
  {
    id: 'g10-u7',
    grade: '10',
    unitNumber: 7,
    titleEn: 'Electronic Presentations',
    titleSi: 'විද්‍යුත් සමර්පණ',
    shortDescEn: 'Slide design, master slides, transitions, animations, media embedding, and presentation delivery.',
    shortDescSi: 'කදා සැලසුම්, ප්‍රධාන කදාව (Master Slide), සංක්‍රාන්ති, සජීවීකරණ සහ බහුමාධ්‍ය ඇතුළත් කිරීම.',
    icon: '/assets/clay/thumb-revision-screen.svg',
    badgeColor: 'bg-orange-500',
    totalSubtopics: 4,
    totalPastPapers: 5,
    keyCompetencies: [
      { en: 'Designs effective master slide templates', si: 'ප්‍රධාන කදාව ආශ්‍රයෙන් ආකර්ශනීය සැකිලි සකස් කරයි' }
    ]
  },
  {
    id: 'g10-u8',
    grade: '10',
    unitNumber: 8,
    titleEn: 'Databases & Management Systems',
    titleSi: 'දත්ත සමුදාය සහ කළමනාකරණය',
    shortDescEn: 'Relational DB concepts, Tables, Primary Keys, Foreign Keys, Relationships (1:1, 1:N, M:N), Queries, and Reports.',
    shortDescSi: 'සම්බන්ධක දත්ත සමුදාය, වගු, ප්‍රාථමික යතුරු, විදේශ යතුරු, සම්බන්ධතා (1:1, 1:N), විමසුම් (Queries) සහ වාර්තා.',
    icon: '/assets/clay/store-hero-cart.svg',
    badgeColor: 'bg-rose-500',
    totalSubtopics: 6,
    totalPastPapers: 12,
    keyCompetencies: [
      { en: 'Identifies Primary and Foreign keys in relational schemas', si: 'ප්‍රාථමික හා විදේශ යතුරු නිවැරදිව හඳුනා ගනී' },
      { en: 'Builds SQL/QBE queries with selection criteria', si: 'තෝරාගැනීමේ කොන්දේසි සහිත விමසුම් නිර්මාණය කරයි' }
    ]
  },

  // GRADE 11
  {
    id: 'g11-u1',
    grade: '11',
    unitNumber: 1,
    titleEn: 'Multimedia Technologies',
    titleSi: 'බහුමාධ්‍ය තාක්ෂණය',
    shortDescEn: 'Elements of multimedia, Raster vs. Vector graphics, Audio/Video codecs and compression, File formats (JPEG, PNG, MP4, WAV).',
    shortDescSi: 'බහුමාධ්‍ය මූලද්‍රව්‍ය, රාස්ටර් හා දෛශික චිත්‍රක, සම්පීඩනය සහ ගොනු ආකෘති (JPEG, PNG, MP4, WAV).',
    icon: '/assets/clay/recordings-cinema.svg',
    badgeColor: 'bg-violet-500',
    totalSubtopics: 5,
    totalPastPapers: 8,
    keyCompetencies: [
      { en: 'Contrasts raster (bitmap) vs vector graphics', si: 'රාස්ටර් සහ දෛශික චිත්‍රක අතර වෙනස පෙන්වා දෙයි' },
      { en: 'Understands lossy vs lossless compression algorithms', si: 'හානිකර හා හානි රහිත සම්පීඩන ක්‍රම හඳුනා ගනී' }
    ]
  },
  {
    id: 'g11-u2',
    grade: '11',
    unitNumber: 2,
    titleEn: 'Programming Concepts & Algorithms',
    titleSi: 'ක්‍රමලේඛනය සහ ඇල්ගොරිතම',
    shortDescEn: 'Algorithms, Flowcharts, Pseudocode, Control structures (Sequence, Selection, Iteration), and Pascal/Python syntax.',
    shortDescSi: 'ඇල්ගොරිතම, ගැලීම් සටහන්, ව්‍යාජ කේත, පාලන ව්‍යුහ (අනුක්‍රමික, තේරීම්, පුනරාවර්තන) සහ ක්‍රමලේඛන භාෂා.',
    icon: '/assets/clay/banner-student-saturn.svg',
    badgeColor: 'bg-purple-500',
    totalSubtopics: 8,
    totalPastPapers: 16,
    keyCompetencies: [
      { en: 'Draws standard flowchart symbols and traces outputs', si: 'සම්මත ගැලීම් සටහන් අඳියි සහ ප්‍රතිදාන ලුහුබඳියි' },
      { en: 'Implements while, for, and repeat-until loop logic', si: 'පුනරාවර්තන ලූප සහ තේරීම් ව්‍යුහ නිවැරදිව කේතනය කරයි' }
    ]
  },
  {
    id: 'g11-u3',
    grade: '11',
    unitNumber: 3,
    titleEn: 'Web Authoring with HTML & CSS',
    titleSi: 'HTML සහ CSS මගින් වෙබ් අඩවි නිර්මාණය',
    shortDescEn: 'HTML5 document structure, tags, tables, hyperlinks, lists, forms, inline/internal/external CSS styling.',
    shortDescSi: 'HTML5 ලේඛන ව්‍යුහය, ටැග්, වගු, සබැඳි, ආකෘති (Forms) සහ CSS මෝස්තර නිර්මාණය.',
    icon: '/assets/clay/branding-paint-palette.svg',
    badgeColor: 'bg-blue-600',
    totalSubtopics: 6,
    totalPastPapers: 14,
    keyCompetencies: [
      { en: 'Codes semantic HTML pages with tables and forms', si: 'වගු සහ ආකෘති පත්‍ර සහිත HTML පිටු නිර්මාණය කරයි' },
      { en: 'Styles elements using CSS selectors and properties', si: 'CSS භාවිතයෙන් වෙබ් පිටු හැඩගන්වයි' }
    ]
  },
  {
    id: 'g11-u4',
    grade: '11',
    unitNumber: 4,
    titleEn: 'The Internet and Electronic Mail',
    titleSi: 'අන්තර්ජාලය සහ විද්‍යුත් තැපෑල',
    shortDescEn: 'Network topologies, IP addressing, DNS, URLs, Protocols (HTTP, HTTPS, FTP, SMTP, POP3, IMAP), Search engines, and Email etiquette.',
    shortDescSi: 'ජාල ස්ථලක, IP ලිපින, ඩොමේන් නාම (DNS), ප්‍රොටෝකෝල (HTTP, FTP, SMTP, IMAP) සහ විද්‍යුත් තැපෑල.',
    icon: '/assets/clay/dispatch-courier-van.svg',
    badgeColor: 'bg-sky-500',
    totalSubtopics: 5,
    totalPastPapers: 9,
    keyCompetencies: [
      { en: 'Decodes URL structure: Protocol, Domain, Path', si: 'URL හි කොටස් හඳුනා ගනී (ප්‍රොටෝකෝලය, ඩොමේනය, මාර්ගය)' },
      { en: 'Differentiates SMTP, POP3, and IMAP protocols', si: 'ඊමේල් සන්නිවේදන ප්‍රොටෝකෝල සංසන්දනය කරයි' }
    ]
  },
  {
    id: 'g11-u5',
    grade: '11',
    unitNumber: 5,
    titleEn: 'ICT in Society, Ethics and Legal Issues',
    titleSi: 'තොරතුරු පද්ධති හා සමාජය, සදාචාරාත්මක හා නීතිමය කරුණු',
    shortDescEn: 'Cyber security, Malware, Intellectual Property Act, Plagiarism, Privacy protection, Ergonomics, and e-Waste management.',
    shortDescSi: 'සයිබර් ආරක්ෂණය, අනිෂ්ට මෘදුකාංග (Malware), බුද්ධිමය දේපළ පනත, පෞද්ගලිකත්වය, කාර්යක්ෂමතා ඉංජිනේරු විද්‍යාව (Ergonomics).',
    icon: '/assets/clay/auth-lock-shield.svg',
    badgeColor: 'bg-emerald-600',
    totalSubtopics: 5,
    totalPastPapers: 8,
    keyCompetencies: [
      { en: 'Explains Sri Lanka Computer Crimes Act & IP Act', si: 'ශ්‍රී ලංකා පරිගණක අපරාධ පනත සහ බුද්ධිමය දේපළ නීතිය විස්තර කරයි' },
      { en: 'Identifies ergonomic practices to avoid RSI and eye strain', si: 'කාර්යක්ෂමතා ඉංජිනේරු විද්‍යාව සහ සෞඛ්‍යාරක්ෂිත පුරුදු හඳුනා ගනී' }
    ]
  },
  {
    id: 'g11-u6',
    grade: '11',
    unitNumber: 6,
    titleEn: 'Cloud Computing and Future Trends in ICT',
    titleSi: 'වලාකුළු පරිගණනය සහ අනාගත ප්‍රවණතා',
    shortDescEn: 'Cloud service models (IaaS, PaaS, SaaS), Deployment types, Internet of Things (IoT), AI, Robotics, and Big Data.',
    shortDescSi: 'වලාකුළු සේවා ආකෘති (IaaS, PaaS, SaaS), අන්තර්ජාලගත දේවල් (IoT), කෘත්‍රිම බුද්ධිය (AI) සහ මහා දත්ත (Big Data).',
    icon: '/assets/clay/banner-student-saturn.svg',
    badgeColor: 'bg-fuchsia-500',
    totalSubtopics: 4,
    totalPastPapers: 6,
    keyCompetencies: [
      { en: 'Compares IaaS, PaaS, and SaaS cloud delivery models', si: 'IaaS, PaaS සහ SaaS වලාකුළු ආකෘති වෙන්කර හඳුනා ගනී' },
      { en: 'Analyzes the impact of IoT and AI on society', si: 'IoT සහ කෘත්‍රිම බුද්ධියේ සමාජ බලපෑම විශ්ලේෂණය කරයි' }
    ]
  }
];
