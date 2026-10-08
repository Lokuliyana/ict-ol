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
    totalPastPapers: 12,
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
    titleEn: 'The Computer System & System Components',
    titleSi: 'පරිගණක පද්ධතිය සහ පද්ධති සංරචක',
    shortDescEn: 'Concept of Computer System, Classification by size and technology, Hardware components (ALU, CU, Registers), Memory hierarchy, Ports, and Storage devices.',
    shortDescSi: 'පරිගණක පද්ධති සංකල්පය, ප්‍රමාණය හා තාක්ෂණය අනුව වර්ගීකරණය, දෘඩාංග සංරචක (ALU, CU, රෙජිස්ටර්), මතක ධූරාවලිය සහ ආචයන උපාංග.',
    icon: '/assets/clay/exam-paper-creation.svg',
    badgeColor: 'bg-blue-500',
    totalSubtopics: 4,
    totalPastPapers: 19,
    keyCompetencies: [
      { en: 'Explains computer system functions and hardware architecture', si: 'පරිගණක පද්ධතියක ක්‍රියාකාරීත්වය සහ දෘඩාංග ව්‍යුහය විස්තර කරයි' },
      { en: 'Classifies computers based on physical size and signal technology', si: 'භෞතික ප්‍රමාණය හා සංඥා තාක්ෂණය අනුව පරිගණක වර්ගීකරණය කරයි' },
      { en: 'Distinguishes between primary and secondary storage media', si: 'ප්‍රාථමික හා ද්විතීයික ආචයන මාධ්‍ය වෙන්කර හඳුනා ගනී' }
    ]
  },
  {
    id: 'g10-u3',
    grade: '10',
    unitNumber: 3,
    titleEn: 'Data Representation in Computer Systems',
    titleSi: 'පරිගණක පද්ධති තුළ දත්ත නිරූපණය',
    shortDescEn: 'Number systems (Decimal, Binary, Octal, Hexadecimal), base conversions, character encoding (ASCII, Unicode, BCD), RGB Hex color codes, and digital storage units.',
    shortDescSi: 'සංඛ්‍යා පද්ධති (දශමය, ද්වීමය, අෂ්ටමය, ෂඩ්දශමය), පාද පරිවර්තන, අක්ෂර කේතන පද්ධති (ASCII, යුනිකෝඩ්, BCD), RGB ෂඩ්දශම වර්ණ කේත සහ ධාරිතා ඒකක.',
    icon: '/assets/clay/thumb-theory-openbook.svg',
    badgeColor: 'bg-cyan-500',
    totalSubtopics: 7,
    totalPastPapers: 18,
    keyCompetencies: [
      { en: 'Converts accurately between Decimal, Binary, Octal, and Hexadecimal systems', si: 'දශමය, ද්වීමය, අෂ්ටමය සහ ෂඩ්දශමය පද්ධති අතර නිවැරදිව පරිවර්තනය කරයි' },
      { en: 'Analyzes character encoding systems: ASCII, Unicode, and BCD', si: 'අක්ෂර කේතන පද්ධති (ASCII, Unicode, BCD) විශ්ලේෂණය කරයි' },
      { en: 'Calculates digital storage capacity requirements and byte conversions', si: 'ඩිජිටල් දත්ත ආචයන ධාරිතා සහ බයිට් පරිවර්තන ගණනය කරයි' },
      { en: 'Determines RGB color components from 24-bit hexadecimal color representations', si: '24-bit ෂඩ්දශම වර්ණ කේත මගින් RGB වර්ණ සංරචක ගණනය කරයි' }
    ]
  },
  {
    id: 'g10-u4',
    grade: '10',
    unitNumber: 4,
    titleEn: 'Fundamental Logic Gates & Boolean Logic',
    titleSi: 'මූලික ලොජික් ද්වාර සහ බූලීය තර්කනය',
    shortDescEn: 'Basic gates (AND, OR, NOT), derived gates (NAND, NOR, XOR, XNOR), truth tables, combinational logic circuits, Boolean expressions, and TTL 7400-series IC pinouts.',
    shortDescSi: 'මූලික ලොජික් ද්වාර (AND, OR, NOT), ව්‍යුත්පන්න ද්වාර (NAND, NOR, XOR, XNOR), සත්‍යතා වගු, සංයුක්ත ලොජික් පරිපථ, බූලීය ප්‍රකාශන සහ 7400 ශ්‍රේණියේ IC කෙවෙනි.',
    icon: '/assets/clay/thumb-revision-screen.svg',
    badgeColor: 'bg-violet-500',
    totalSubtopics: 5,
    totalPastPapers: 14,
    keyCompetencies: [
      { en: 'Constructs truth tables and schematics for basic and derived logic gates', si: 'මූලික හා ව්‍යුත්පන්න ලොජික් ද්වාර සඳහා සත්‍යතා වගු සහ පරිපථ සැලසුම් කරයි' },
      { en: 'Evaluates combinational logic circuits using Boolean expressions', si: 'බූලීය ප්‍රකාශන ආශ්‍රයෙන් සංයුක්ත ලොජික් පරිපථ ඇගයීමට ලක් කරයි' },
      { en: 'Maps pin layouts for 7400-series TTL Integrated Circuits', si: '7400 කාණ්ඩයේ අනුකලිත පරිපථ (IC) කෙවෙනි සැකස්ම හඳුනා ගනී' }
    ]
  },
  {
    id: 'g10-u5',
    grade: '10',
    unitNumber: 5,
    titleEn: 'Operating Systems',
    titleSi: 'මෙහෙයුම් පද්ධති',
    shortDescEn: 'Hardware, firmware, booting, OS functions (Process, Memory, File management), CLI vs GUI interfaces, file structures, and utility software.',
    shortDescSi: 'දෘඩාංග, ස්ථීරාංග, Booting ක්‍රියාවලිය, මෙහෙයුම් පද්ධති කාර්යයන්, CLI හා GUI අතුරුමුහුණත්, ගොනු පද්ධති සහ උපයෝගිතා මෘදුකාංග.',
    icon: '/assets/clay/banner-admin-station.svg',
    badgeColor: 'bg-teal-500',
    totalSubtopics: 2,
    totalPastPapers: 12,
    keyCompetencies: [
      { en: 'Explains the computer booting sequence and firmware execution', si: 'පරිගණකය පණගැන්වීමේ (Booting) පියවර හා ස්ථීරාංග කාර්යභාරය විස්තර කරයි' },
      { en: 'Evaluates core OS resource management responsibilities', si: 'මෙහෙයුම් පද්ධතියක සම්පත් කළමනාකරණ කාර්යයන් ඇගයීමට ලක් කරයි' },
      { en: 'Differentiates CLI and GUI interfaces with practical merits', si: 'විධාන රේඛා සහ චිත්‍රක පරිශීලක අතුරුමුහුණත් සංසන්දනය කරයි' }
    ]
  },
  {
    id: 'g10-u6',
    grade: '10',
    unitNumber: 6,
    titleEn: 'Word Processing',
    titleSi: 'වචන සකසුම්',
    shortDescEn: 'Document formatting, styles, tables, headers/footers, mail merge, proofreading, and word processor advantages.',
    shortDescSi: 'ලේඛන සැකසුම, හැඩසැරසුම්, වගු, ශීර්ෂක හා පාදක, තැපැල් ඒකාබද්ධතාව (Mail Merge) සහ සංස්කරණ මෙවලම්.',
    icon: '/assets/clay/branding-paint-palette.svg',
    badgeColor: 'bg-emerald-500',
    totalSubtopics: 7,
    totalPastPapers: 10,
    keyCompetencies: [
      { en: 'Applies comprehensive text formatting, styles, and alignments', si: 'පෙළ හැඩසැසීම්, ශෛලීන් සහ පෙළගැස්වීම් නිවැරදිව භාවිත කරයි' },
      { en: 'Constructs structured data tables with row/column management', si: 'පේළි සහ තීරු කළමනාකරණය කරමින් වගු නිර්මාණය කරයි' },
      { en: 'Executes automated Mail Merge for batch communications', si: 'තැපැල් ඒකාබද්ධතාව (Mail Merge) භාවිතයෙන් එකවර ලිපි සකස් කරයි' }
    ]
  },
  {
    id: 'g10-u7',
    grade: '10',
    unitNumber: 7,
    titleEn: 'Electronic Spreadsheets',
    titleSi: 'ඉලෙක්ට්‍රොනික පැතුරුම්පත්',
    shortDescEn: 'Cell referencing (Relative, Absolute), Formulas, Functions (SUM, AVERAGE, MIN, MAX, COUNT, IF), and Chart generation.',
    shortDescSi: 'සෛල යොමු (සාපේක්ෂ, නිරපේක්ෂ), සූත්‍ර, ශ්‍රිත (SUM, AVERAGE, MIN, MAX, COUNT, IF) සහ ප්‍රස්ථාර නිර්මාණය.',
    icon: '/assets/clay/exam-marks-spreadsheet.svg',
    badgeColor: 'bg-amber-500',
    totalSubtopics: 8,
    totalPastPapers: 8,
    keyCompetencies: [
      { en: 'Applies relative and absolute ($) cell referencing in formulas', si: 'සාපේක්ෂ සහ නිරපේක්ෂ සෛල යොමු නිවැරදිව භාවිත කරයි' },
      { en: 'Constructs complex mathematical formulas and nested functions', si: 'ගණිතමය සූත්‍ර සහ IF ශ්‍රිත ආශ්‍රයෙන් ගණනය කිරීම් සිදු කරයි' },
      { en: 'Generates appropriate visual charts for data interpretation', si: 'දත්ත අර්ථකථනය සඳහා සුදුසු ප්‍රස්ථාර නිර්මාණය කරයි' }
    ]
  },
  {
    id: 'g10-u8',
    grade: '10',
    unitNumber: 8,
    titleEn: 'Electronic Presentations',
    titleSi: 'ඉලෙක්ට්‍රොනික සමර්පණ',
    shortDescEn: 'Slide design, master slides, transitions, custom animations, multimedia embedding, delivery views, and handout export.',
    shortDescSi: 'කදා සැලසුම්, ප්‍රධාන කදාව (Slide Master), සංක්‍රාන්ති, සජීවීකරණ, බහුමාධ්‍ය ඇතුළත් කිරීම සහ සමර්පණ ඉදිරිපත් කිරීම.',
    icon: '/assets/clay/thumb-revision-screen.svg',
    badgeColor: 'bg-orange-500',
    totalSubtopics: 7,
    totalPastPapers: 6,
    keyCompetencies: [
      { en: 'Designs dynamic slides utilizing master slide templates', si: 'ප්‍රධාන කදාව (Master Slide) මගින් ආකර්ශනීය සැකිලි සකස් කරයි' },
      { en: 'Configures slide transitions, animations, and multimedia timing', si: 'සංක්‍රාන්ති, සජීවීකරණ සහ ශ්‍රව්‍ය-දෘශ්‍ය කාලසටහන් සකස් කරයි' }
    ]
  },
  {
    id: 'g10-u9',
    grade: '10',
    unitNumber: 9,
    titleEn: 'Database Management',
    titleSi: 'දත්ත සමුදා කළමනාකරණය',
    shortDescEn: 'Data hierarchy, Relational databases, Tables, Fields, Records, Primary & Foreign keys, Cardinality (1:1, 1:N, M:N), Queries, and Reports.',
    shortDescSi: 'දත්ත ධුරාවලිය, සම්බන්ධක දත්ත සමුදාය, වගු, ක්ෂේත්‍ර, වාර්තා, ප්‍රාථමික හා විදේශ යතුරු, සම්බන්ධතා සහ විමසුම් (Queries).',
    icon: '/assets/clay/store-hero-cart.svg',
    badgeColor: 'bg-rose-500',
    totalSubtopics: 5,
    totalPastPapers: 10,
    keyCompetencies: [
      { en: 'Identifies Primary Keys, Foreign Keys, and Composite Keys', si: 'ප්‍රාථමික යතුරු, විදේශ යතුරු සහ සංයුක්ත යතුරු නිවැරදිව හඳුනා ගනී' },
      { en: 'Models relational entity relationships (1:1, 1:N, M:N)', si: 'දත්ත සමුදා වගු අතර සම්බන්ධතා (1:1, 1:N, M:N) ගොඩනගයි' },
      { en: 'Formulates selection queries with logical criteria', si: 'තෝරාගැනීමේ කොන්දේසි සහිත දත්ත විමසුම් (Queries) සකස් කරයි' }
    ]
  },

  // GRADE 11
  {
    id: 'g11-u1',
    grade: '11',
    unitNumber: 1,
    titleEn: 'Programming, Algorithms & Problem Solving',
    titleSi: 'ක්‍රමලේඛනය, ඇල්ගොරිතම සහ ගැටලු විසඳීම',
    shortDescEn: 'Problem analysis (IPO), Algorithms, Control structures (Sequence, Selection, Iteration), Flowcharts, Pseudocode, Trace tables, Translators, and Pascal syntax.',
    shortDescSi: 'ගැටලු විශ්ලේෂණය, ඇල්ගොරිතම, පාලන ව්‍යුහ, ගැලීම් සටහන්, ව්‍යාජ කේත, හෝඩුවා වගු, පරිවර්තක සහ පැස්කල් ක්‍රමලේඛන රීති.',
    icon: '/assets/clay/banner-student-saturn.svg',
    badgeColor: 'bg-purple-500',
    totalSubtopics: 6,
    totalPastPapers: 8,
    keyCompetencies: [
      { en: 'Draws standard ANSI flowchart symbols and constructs algorithmic flows', si: 'සම්මත ගැලීම් සටහන් සංකේත භාවිත කරමින් ඇල්ගොරිතම නිර්මාණය කරයි' },
      { en: 'Constructs trace tables to track variable states through loops', si: 'හෝඩුවා වගු (Trace Tables) මගින් විචල්‍ය අගයන් ලුහුබඳියි' },
      { en: 'Writes valid Pascal / Python code for sequence, selection, and loops', si: 'අනුක්‍රමික, තේරීම් සහ පුනරාවර්තන සඳහා ක්‍රමලේඛ කේත රචනා කරයි' }
    ]
  },
  {
    id: 'g11-u2',
    grade: '11',
    unitNumber: 2,
    titleEn: 'System Development Life Cycle (SDLC)',
    titleSi: 'පද්ධති සංවර්ධන ජීවන චක්‍රය',
    shortDescEn: 'System concepts, Manual vs computerized systems, SDLC phases (Identification, Feasibility, Analysis, Design, Coding, Testing, Deployment, Maintenance), and models.',
    shortDescSi: 'පද්ධති සංකල්ප, SDLC අදියර (හඳුනාගැනීම, ශක්‍යතාව, විශ්ලේෂණය, සැලසුම්, කේතනය, පරීක්ෂාව, ස්ථාපනය, නඩත්තුව) සහ ආකෘති.',
    icon: '/assets/clay/thumb-paper-class.svg',
    badgeColor: 'bg-indigo-600',
    totalSubtopics: 3,
    totalPastPapers: 7,
    keyCompetencies: [
      { en: 'Explains all eight phases of the System Development Life Cycle', si: 'පද්ධති සංවර්ධන ජීවන චක්‍රයේ සියලු අදියර 8 විස්තර කරයි' },
      { en: 'Compares system deployment strategies: Direct, Parallel, Phased, and Pilot', si: 'පද්ධති ස්ථාපන ක්‍රම 4 (සෘජු, සමාන්තර, අදියරගත, නියමු) සංසන්දනය කරයි' },
      { en: 'Contrasts Black-Box testing, White-Box testing, and Acceptance testing', si: 'කළු පෙට්ටි, සුදු පෙට්ටි සහ පිළිගැනීමේ පරීක්ෂණ අතර වෙනස හඳුනා ගනී' }
    ]
  },
  {
    id: 'g11-u3',
    grade: '11',
    unitNumber: 3,
    titleEn: 'The Internet and Electronic Mail',
    titleSi: 'අන්තර්ජාලය සහ විද්‍යුත් තැපෑල',
    shortDescEn: 'Internet architecture, Client-Server model, URLs, TLDs, IP addressing, DNS resolution, Protocols (HTTP, FTP, SMTP, POP3, IMAP), Email operations, and Cloud computing.',
    shortDescSi: 'අන්තර්ජාල ආකෘතිය, සේවාලාභී-සේවාදායක, URLs, IP ලිපින, DNS, ප්‍රොටෝකෝල (HTTP, FTP, SMTP, IMAP), ඊමේල් පද්ධතිය සහ වලාකුළු පරිගණනය.',
    icon: '/assets/clay/dispatch-courier-van.svg',
    badgeColor: 'bg-sky-500',
    totalSubtopics: 8,
    totalPastPapers: 15,
    keyCompetencies: [
      { en: 'Decodes URL structure into Protocol, Domain Name, Port, Path, and File', si: 'URL හි කොටස් (ප්‍රොටෝකෝලය, ඩොමේන් නාමය, මාර්ගය) නිවැරදිව හඳුනා ගනී' },
      { en: 'Contrasts email protocols: SMTP (transmission) vs POP3/IMAP (retrieval)', si: 'ඊමේල් ප්‍රොටෝකෝල සංසන්දනය කරයි (SMTP, POP3, IMAP)' },
      { en: 'Evaluates Cloud Computing service models: IaaS, PaaS, and SaaS', si: 'වලාකුළු සේවා මාදිලි (IaaS, PaaS, SaaS) නිවැරදිව හඳුනා ගනී' }
    ]
  },
  {
    id: 'g11-u4',
    grade: '11',
    unitNumber: 4,
    titleEn: 'Use of Multimedia Technologies',
    titleSi: 'බහුමාධ්‍ය භාවිතය',
    shortDescEn: 'Multimedia elements, Raster vs Vector graphics, Graphic compression (Lossy vs Lossless), File formats (JPEG, PNG, GIF, MP4, WAV), 2D animation, Audio/Video editing.',
    shortDescSi: 'බහුමාධ්‍ය මූලද්‍රව්‍ය, රැස්ටර් හා වෙක්ටර් චිත්‍රක, සම්පීඩනය (Lossy/Lossless), ගොනු ආකෘති, 2D සජීවීකරණය, ශ්‍රව්‍ය හා දෘශ්‍ය සංස්කරණය.',
    icon: '/assets/clay/recordings-cinema.svg',
    badgeColor: 'bg-violet-500',
    totalSubtopics: 4,
    totalPastPapers: 13,
    keyCompetencies: [
      { en: 'Contrasts bitmap (raster) pixels with vector mathematical equations', si: 'රැස්ටර් (පික්සල) සහ වෙක්ටර් චිත්‍රක අතර තාක්ෂණික වෙනස දක්වයි' },
      { en: 'Differentiates Lossy vs Lossless compression algorithms and artifacts', si: 'හානිකර (Lossy) සහ හානි රහිත (Lossless) සම්පීඩන ක්‍රම හඳුනා ගනී' },
      { en: 'Calculates digital image file sizes and resolutions accurately', si: 'ඩිජිටල් රූපවල විභේදනය සහ ගොනු ප්‍රමාණයන් නිවැරදිව ගණනය කරයි' }
    ]
  },
  {
    id: 'g11-u5',
    grade: '11',
    unitNumber: 5,
    titleEn: 'Web Designing using HTML & CSS',
    titleSi: 'HTML සහ වෙබ් සංස්කාරක මගින් වෙබ් අඩවි නිර්මාණය',
    shortDescEn: 'HTML document structure, semantic tags, headings, formatting, lists, hyperlinks, image embedding, tables, colspan/rowspan, forms, CSS styling, and web editors.',
    shortDescSi: 'HTML ලේඛන ව්‍යුහය, ටැග්, මාතෘකා, ලැයිස්තු, හයිපර්ලින්ක්, රූප, වගු (colspan/rowspan), ආකෘති පත්‍ර (Forms) සහ CSS මෝස්තර නිර්මාණය.',
    icon: '/assets/clay/branding-paint-palette.svg',
    badgeColor: 'bg-blue-600',
    totalSubtopics: 9,
    totalPastPapers: 7,
    keyCompetencies: [
      { en: 'Codes semantic HTML5 web pages with valid structural elements', si: 'සම්මත HTML5 ටැග් භාවිතයෙන් වෙබ් පිටු ගොඩනගයි' },
      { en: 'Builds complex tables utilizing colspan and rowspan merging', si: 'colspan සහ rowspan භාවිතයෙන් සංකීර්ණ වගු නිර්මාණය කරයි' },
      { en: 'Creates interactive user input forms with validation controls', si: 'පරිශීලක දත්ත ලබාගැනීම සඳහා ආකෘති පත්‍ර (Forms) නිර්මාණය කරයි' },
      { en: 'Applies Inline, Internal, and External CSS styling properties', si: 'CSS භාවිතයෙන් වෙබ් පිටු ආකර්ශනීය ලෙස හැඩගන්වයි' }
    ]
  },
  {
    id: 'g11-u6',
    grade: '11',
    unitNumber: 6,
    titleEn: 'ICT and Society, Ethics & Legal Issues',
    titleSi: 'තොරතුරු සහ සන්නිවේදන තාක්ෂණය හා සමාජය',
    shortDescEn: 'Ethics, privacy, IP Act, software piracy, Sri Lanka Computer Crimes Act, health & ergonomics, e-waste, toxic heavy metals, 3R concept, and green computing.',
    shortDescSi: 'එතික්, පෞද්ගලිකත්වය, බුද්ධිමය දේපළ, ශ්‍රී ලංකා පරිගණක අපරාධ පනත, කාර්යශ්‍රමක්ෂමතාව (Ergonomics), ඊ-අපද්‍රව්‍ය, 3R සංකල්පය සහ හරිත පරිගණනය.',
    icon: '/assets/clay/auth-lock-shield.svg',
    badgeColor: 'bg-emerald-600',
    totalSubtopics: 4,
    totalPastPapers: 9,
    keyCompetencies: [
      { en: 'Explains the Sri Lanka Computer Crimes Act No. 24 of 2007 and IP Act', si: 'ශ්‍රී ලංකා පරිගණක අපරාධ පනත සහ බුද්ධිමය දේපළ පනත විස්තර කරයි' },
      { en: 'Applies ergonomic principles to prevent RSI and Computer Vision Syndrome', si: 'RSI සහ ඇස් වෙහෙස වැළැක්වීමට කාර්යශ්‍රමක්ෂමතා පුරුදු අනුගමනය කරයි' },
      { en: 'Evaluates e-waste toxicity and implements Green Computing 3R practices', si: 'ඊ-අපද්‍රව්‍යවල විෂ සහිත ලෝහ සහ 3R හරිත පරිගණක භාවිතයන් හඳුනා ගනී' }
    ]
  }
];
