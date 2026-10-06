import { GlossaryTerm } from './lesson01Data';

export interface GeneralLessonData {
  id: string;
  grade: '10' | '11';
  unitNumber: number;
  titleEn: string;
  titleSi: string;
  subtopics: {
    id: string;
    number: string;
    titleEn: string;
    titleSi: string;
    summaryEn?: string;
    summarySi?: string;
    blocks: {
      id: string;
      en: string;
      si: string;
      highlightTerm?: string;
    }[];
    examples?: {
      id: string;
      titleEn: string;
      titleSi: string;
      contentEn?: string;
      contentSi?: string;
      isInteractiveWidget?: 'nic-decoder' | 'system-diagram' | 'timeline-slider' | 'number-converter' | 'logic-gate';
    }[];
    checkpointQuiz?: {
      id: string;
      questionEn: string;
      questionSi: string;
      options: { id: string; en: string; si: string }[];
      correctOptionId: string;
      explanationEn: string;
      explanationSi: string;
    };
  }[];
  pastPaperQuestions: {
    id: string;
    year: number;
    paperType: 'Paper I' | 'Paper II';
    badgeText: string;
    questionEn: string;
    questionSi: string;
    type: 'mcq' | 'structured';
    options?: { id: string; en: string; si: string }[];
    correctOptionId?: string;
    sampleAnswerEn?: string;
    sampleAnswerSi?: string;
    explanationEn: string;
    explanationSi: string;
  }[];
  glossary?: GlossaryTerm[];
}

export const ALL_LESSONS_DATA: Record<string, GeneralLessonData> = {
  // ==========================================
  // GRADE 10 UNIT 2
  // ==========================================
  'g10-u2': {
    id: 'g10-u2',
    grade: '10',
    unitNumber: 2,
    titleEn: 'Evolution of Computer & Data Representation',
    titleSi: 'පරිගණකයේ පරිණාමය සහ දත්ත නිරූපණය',
    subtopics: [
      {
        id: '2.1',
        number: '2.1',
        titleEn: 'Number Systems & Base Values',
        titleSi: 'සංඛ්‍යා පද්ධති සහ පාද අගයන්',
        summaryEn: 'Decimal, Binary, Octal and Hexadecimal positional systems',
        summarySi: 'දශමය, ද්වීමය, අෂ්ටමය සහ ෂඩ්දශමය ස්ථානීය සංඛ්‍යා පද්ධති',
        blocks: [
          {
            id: 'b2-1',
            en: 'Number systems represent quantities. The base (radix) indicates the total count of unique symbols used: Decimal (Base 10: 0-9), Binary (Base 2: 0-1), Octal (Base 8: 0-7), and Hexadecimal (Base 16: 0-9, A-F).',
            si: 'සංඛ්‍යා පද්ධතියක් මඟින් ප්‍රමාණ නිරූපණය කෙරේ. පාදය (Radix) යනු භාවිත වන අනන්‍ය සංකේත ගණනයි: දශමය (පාදය 10: 0-9), ද්වීමය (පාදය 2: 0-1), අෂ්ටමය (පාදය 8: 0-7), සහ ෂඩ්දශමය (පාදය 16: 0-9, A-F).',
            highlightTerm: 'Number Bases'
          },
          {
            id: 'b2-2',
            en: 'Digital computers operate strictly on binary bits (0 and 1) due to electronic states of transistors (OFF and ON / Low Voltage and High Voltage).',
            si: 'ඉලෙක්ට්‍රොනික ට්‍රාන්සිස්ටරවල ක්‍රියාකාරීත්වයේ විද්‍යුත් තත්ත්වයන් (ක්‍රියාවිරහිත/ක්‍රියාත්මක) නිසා ඩිජිටල් පරිගණක ද්වීමය බිටු (0 සහ 1) මත පමණක් ක්‍රියාත්මක වේ.',
            highlightTerm: 'Binary Logic'
          }
        ],
        examples: [
          {
            id: 'ex-2.1',
            titleEn: 'Interactive Base Converter',
            titleSi: 'සජීවී පාද පරිවර්තකය',
            isInteractiveWidget: 'number-converter'
          }
        ],
        checkpointQuiz: {
          id: 'q-2.1',
          questionEn: 'What is the binary equivalent of decimal number 13?',
          questionSi: 'දශමය 13 සංඛ්‍යාවේ ද්වීමය අගය කුමක්ද?',
          options: [
            { id: '1', en: '1101₂', si: '1101₂' },
            { id: '2', en: '1011₂', si: '1011₂' },
            { id: '3', en: '1110₂', si: '1110₂' },
            { id: '4', en: '1001₂', si: '1001₂' }
          ],
          correctOptionId: '1',
          explanationEn: '13 = 8 + 4 + 0 + 1 = 1101 in binary.',
          explanationSi: '13 = 8 + 4 + 0 + 1 = 1101₂ වේ.'
        }
      },
      {
        id: '2.2',
        number: '2.2',
        titleEn: 'Data Representation & Character Coding',
        titleSi: 'දත්ත නිරූපණය සහ අක්ෂර කේතන පද්ධති',
        summaryEn: 'ASCII, Extended ASCII, and Unicode standards',
        summarySi: 'ASCII, විස්තෘත ASCII සහ යුනිකෝඩ් ප්‍රමිතීන්',
        blocks: [
          {
            id: 'b2-3',
            en: 'Characters (letters, numbers, punctuation) are encoded using numeric codes: ASCII uses 7 bits (128 characters), Extended ASCII uses 8 bits (256 characters), and Unicode uses up to 32 bits (supporting worldwide languages including Sinhala & Tamil).',
            si: 'අක්ෂර පරිගණකය තුළ කේතනය කරනුයේ සංඛ්‍යාත්මක අගයන් මගිනි: ASCII බිටු 7ක් (අක්ෂර 128), විස්තෘත ASCII බිටු 8ක් (අක්ෂර 256), සහ යුනිකෝඩ් බිටු 32ක් දක්වා (සිංහල හා දෙමළ ඇතුළු ලෝක භාෂා සඳහා) භාවිත කරයි.',
            highlightTerm: 'ASCII & Unicode'
          }
        ]
      }
    ],
    pastPaperQuestions: [
      {
        id: 'pp-2023-g10-u2-q1',
        year: 2023,
        paperType: 'Paper I',
        badgeText: '2023 O/L Paper I - Q03',
        questionEn: 'Which of the following is equivalent to the Hexadecimal number 2F₁₆?',
        questionSi: 'ෂඩ්දශම 2F₁₆ සංඛ්‍යාවට සමාන වන්නේ පහත කුමක්ද?',
        type: 'mcq',
        options: [
          { id: '1', en: '47 in decimal', si: 'දශම 47' },
          { id: '2', en: '32 in decimal', si: 'දශම 32' },
          { id: '3', en: '00101111 in binary', si: 'ද්වීමය 00101111' },
          { id: '4', en: 'Both (1) and (3)', si: '(1) සහ (3) දෙකම' }
        ],
        correctOptionId: '4',
        explanationEn: '2F₁₆ = (2 * 16) + 15 = 47₁₀. In binary: 2 = 0010, F = 1111 -> 00101111₂. Both are correct!',
        explanationSi: '2F₁₆ = (2 * 16) + 15 = 47₁₀. ද්වීමයෙන්: 2 = 0010, F = 1111 -> 00101111₂. දෙකම නිවැරදියි!'
      },
      {
        id: 'pp-2024-g10-u2-p2',
        year: 2024,
        paperType: 'Paper II',
        badgeText: '2024 O/L Paper II - Q01 (ii)',
        questionEn: 'State the difference between ASCII and Unicode in terms of bit length and international language support.',
        questionSi: 'බිටු දිග සහ ජාත්‍යන්තර භාෂා සහයෝගය සම්බන්ධයෙන් ASCII සහ Unicode අතර වෙනස දක්වන්න.',
        type: 'structured',
        sampleAnswerEn: 'ASCII uses 7 or 8 bits and supports English/Latin characters only (up to 256 symbols). Unicode uses 16 to 32 bits and supports all global languages including Sinhala and Tamil.',
        sampleAnswerSi: 'ASCII බිටු 7 හෝ 8ක් භාවිත කරමින් ඉංග්‍රීසි/ලතින් අක්ෂර පමණක් නිරූපණය කරයි (අක්ෂර 256 දක්වා). Unicode බිටු 16 සිට 32 දක්වා භාවිත කරමින් සිංහල හා දෙමළ ඇතුළු ලොව සියලු භාෂා සඳහා සහය දක්වයි.',
        explanationEn: 'Textbook standard distinction between fixed 8-bit ASCII and universal multi-byte Unicode.',
        explanationSi: 'පෙළපොත් නිර්දේශ අනුව ASCII (බිටු 7/8) හා Unicode (බහු-බයිට්) සංසන්දනය.'
      }
    ]
  },

  // ==========================================
  // GRADE 10 UNIT 3
  // ==========================================
  'g10-u3': {
    id: 'g10-u3',
    grade: '10',
    unitNumber: 3,
    titleEn: 'Computer Hardware and System Components',
    titleSi: 'පරිගණක දෘඩාංග සහ පද්ධති සංරචක',
    subtopics: [
      {
        id: '3.1',
        number: '3.1',
        titleEn: 'Central Processing Unit (CPU)',
        titleSi: 'මධ්‍ය සැකසුම් ඒකකය (CPU)',
        summaryEn: 'ALU, Control Unit, and Internal Registers',
        summarySi: 'අංකගණිත හා තර්කන ඒකකය, පාලන ඒකකය සහ රෙජිස්ටර්',
        blocks: [
          {
            id: 'b3-1',
            en: 'The Central Processing Unit (CPU) is known as the brain of the computer. It consists of three primary components: Arithmetic Logic Unit (ALU), Control Unit (CU), and Internal Registers / Cache.',
            si: 'මධ්‍ය සැකසුම් ඒකකය (CPU) පරිගණකයේ මොළය ලෙස හැඳින්වේ. එහි ප්‍රධාන කොටස් 3ක් ඇත: අංකගණිත හා තර්කන ඒකකය (ALU), පාලන ඒකකය (CU), සහ අභ්‍යන්තර රෙජිස්ටර් / කැෂේ මතකය.',
            highlightTerm: 'CPU Architecture'
          },
          {
            id: 'b3-2',
            en: 'The Control Unit (CU) directs and coordinates all operations across the computer, fetching instructions from memory, decoding them, and dispatching execution signals.',
            si: 'පාලන ඒකකය (CU) පරිගණකයේ සියලුම මෙහෙයුම් මෙහෙයවයි සහ සම්බන්ධීකරණය කරයි; මතකයෙන් උපදෙස් ලබා ගැනීම (Fetch), විකේතනය කිරීම (Decode) සහ ක්‍රියාත්මක කිරීමේ සංඥා නිකුත් කිරීම මෙහි ප්‍රධාන කාර්යයයි.',
            highlightTerm: 'Control Unit'
          }
        ],
        checkpointQuiz: {
          id: 'q-3.1',
          questionEn: 'Which unit inside the CPU carries out mathematical additions and logical comparisons?',
          questionSi: 'CPU හි ගණිතමය එකතු කිරීම් සහ තාර්කික සංසන්දනයන් සිදුකරන ඒකකය කුමක්ද?',
          options: [
            { id: '1', en: 'Arithmetic Logic Unit (ALU)', si: 'අංකගණිත හා තර්කන ඒකකය (ALU)' },
            { id: '2', en: 'Control Unit (CU)', si: 'පාලන ඒකකය (CU)' },
            { id: '3', en: 'Secondary Storage', si: 'ද්විතීයික ආචයනය' },
            { id: '4', en: 'BIOS ROM', si: 'BIOS ROM' }
          ],
          correctOptionId: '1',
          explanationEn: 'The ALU executes all arithmetic operations (+, -, *, /) and comparison tests (<, >, ==).',
          explanationSi: 'අංකගණිත හා තාර්කික මෙහෙයුම් සියල්ල ඉටු කරනු ලබන්නේ ALU ඒකකය මගිනි.'
        }
      },
      {
        id: '3.2',
        number: '3.2',
        titleEn: 'Computer Memory Hierarchy',
        titleSi: 'පරිගණක මතක ධූරාවලිය',
        summaryEn: 'Registers, Cache, RAM, ROM, and Secondary Storage',
        summarySi: 'රෙජිස්ටර්, කැෂේ, RAM, ROM සහ ද්විතීයික ආචයනය',
        blocks: [
          {
            id: 'b3-3',
            en: 'Memory hierarchy balances access speed, capacity, and cost. Registers are the fastest and most expensive, followed by Cache memory, RAM (volatile main memory), ROM (non-volatile firmware), and Secondary storage (HDD/SSD).',
            si: 'මතක ධූරාවලිය ප්‍රවේශ වේගය, ධාරිතාව හා පිරිවැය අතර සමබරතාව පවත්වා ගනී. වේගවත්ම හා මිල අධිකම වන්නේ රෙජිස්ටර් වන අතර ඉන්පසු කැෂේ මතකය, RAM (වැයවන ප්‍රධාන මතකය), ROM (නොවැයෙන ස්ථිර මතකය) සහ ද්විතීයික ආචයනය (HDD/SSD) පිහිටයි.',
            highlightTerm: 'Memory Hierarchy'
          }
        ]
      }
    ],
    pastPaperQuestions: [
      {
        id: 'pp-2022-g10-u3-q1',
        year: 2022,
        paperType: 'Paper I',
        badgeText: '2022 O/L Paper I - Q12',
        questionEn: 'Which of the following computer memories loses its contents immediately when the electrical power is switched off?',
        questionSi: 'විදුලි බලය විසන්ධි කළ වහාම තැන්පත් කර ඇති දත්ත මැකී යන පරිගණක මතකය කුමක්ද?',
        type: 'mcq',
        options: [
          { id: '1', en: 'RAM (Random Access Memory)', si: 'RAM (සසම්භාවී ප්‍රවේශ මතකය)' },
          { id: '2', en: 'ROM (Read Only Memory)', si: 'ROM (කියවීම පමණක් ඇති මතකය)' },
          { id: '3', en: 'Hard Disk Drive', si: 'දෘඩ තැටිය' },
          { id: '4', en: 'Flash Drive', si: 'ෆ්ලෑෂ් ධාවකය' }
        ],
        correctOptionId: '1',
        explanationEn: 'RAM is volatile memory; without electric current, all temporary memory contents vanish.',
        explanationSi: 'RAM යනු විද්‍යුතය විසන්ධි වූ විට දත්ත මැකී යන වැයවන (Volatile) මතකයකි.'
      }
    ]
  },

  // ==========================================
  // GRADE 10 UNIT 4
  // ==========================================
  'g10-u4': {
    id: 'g10-u4',
    grade: '10',
    unitNumber: 4,
    titleEn: 'Operating Systems',
    titleSi: 'මෙහෙයුම් පද්ධති',
    subtopics: [
      {
        id: '4.1',
        number: '4.1',
        titleEn: 'Role & Core Functions of an Operating System',
        titleSi: 'මෙහෙයුම් පද්ධතියක කාර්යභාරය සහ ප්‍රධාන මෙහෙයුම්',
        summaryEn: 'Process management, Memory management, File systems, and Hardware abstraction',
        summarySi: 'ක්‍රියාවලි කළමනාකරණය, මතක කළමනාකරණය, ගොනු පද්ධති සහ දෘඩාංග පාලනය',
        blocks: [
          {
            id: 'b4-1',
            en: 'An Operating System (OS) is the primary system software that manages computer hardware, system resources, and provides common services for application programs.',
            si: 'මෙහෙයුම් පද්ධතියක් (OS) යනු පරිගණක දෘඩාංග, පද්ධති සම්පත් කළමනාකරණය කරන සහ යෙදුම් මෘදුකාංග සඳහා පොදු සේවා සපයන ප්‍රධාන පද්ධති මෘදුකාංගයයි.',
            highlightTerm: 'Operating System'
          },
          {
            id: 'b4-2',
            en: 'Key functions of an OS include Process Management (CPU time scheduling), Memory Management (RAM allocation), File Management (hierarchical folders and access permissions), and Device Management via device drivers.',
            si: 'මෙහෙයුම් පද්ධතියක ප්‍රධාන කාර්යයන්: ක්‍රියාවලි කළමනාකරණය (CPU කාලය වෙන් කිරීම), මතක කළමනාකරණය (RAM වෙන් කිරීම), ගොනු කළමනාකරණය (ලිපිගොනු සහ ෆෝල්ඩර පාලනය) සහ උපාංග ධාවක මඟින් දෘඩාංග පාලනය කිරීම.',
            highlightTerm: 'OS Core Functions'
          }
        ],
        checkpointQuiz: {
          id: 'q-4.1',
          questionEn: 'Which of the following is considered a core responsibility of an Operating System?',
          questionSi: 'පහත සඳහන් දෑ අතුරින් මෙහෙයුම් පද්ධතියක ප්‍රධාන වගකීමක් ලෙස සැලකෙන්නේ කුමක්ද?',
          options: [
            { id: '1', en: 'Allocating RAM memory and managing running processes', si: 'RAM මතකය වෙන් කිරීම සහ ධාවනය වන ක්‍රියාවලි කළමනාකරණය කිරීම' },
            { id: '2', en: 'Designing graphic banners for social media', si: 'සමාජ මාධ්‍ය සඳහා ප්‍රචාරක බැනර් නිර්මාණය කිරීම' },
            { id: '3', en: 'Calculating sales income in a grocery store spreadsheet', si: 'පැතුරුම්පතක් මගින් වෙළඳසැලක ආදායම ගණනය කිරීම' },
            { id: '4', en: 'Browsing educational websites online', si: 'අන්තර්ජාලය ඔස්සේ අධ්‍යාපනික වෙබ් අඩවි පිරික්සීම' }
          ],
          correctOptionId: '1',
          explanationEn: 'Hardware and resource management (RAM & CPU processes) are essential OS functions.',
          explanationSi: 'දෘඩාංග සම්පත් (RAM සහ CPU ක්‍රියාවලි) කළමනාකරණය කිරීම මෙහෙයුම් පද්ධතියක ප්‍රධාන කාර්යයකි.'
        }
      },
      {
        id: '4.2',
        number: '4.2',
        titleEn: 'User Interfaces: CLI vs GUI',
        titleSi: 'පරිශීලක අතුරුමුහුණත්: විධාන රේඛා (CLI) සහ චිත්‍රක (GUI)',
        summaryEn: 'Command line terminal interaction vs WIMP graphical interface',
        summarySi: 'විධාන රේඛා අතුරුමුහුණත සහ WIMP චිත්‍රක අතුරුමුහුණත සංසන්දනය',
        blocks: [
          {
            id: 'b4-3',
            en: 'Command Line Interface (CLI) requires users to type text commands (e.g., DOS, Linux terminal). Graphical User Interface (GUI) enables intuitive interaction using WIMP: Windows, Icons, Menus, and Pointer.',
            si: 'විධාන රේඛා අතුරුමුහුණතේදී (CLI) පරිශීලකයා විසින් පෙළ විධාන ටයිප් කළ යුතුය (උදා: DOS, Linux Terminal). චිත්‍රක පරිශීලක අතුරුමුහුණත (GUI) WIMP මූලධර්මය (කවුළු, අයිකන, මෙනු, දර්ශක) මත පදනම්ව පහසුවෙන් ක්‍රියා කරයි.',
            highlightTerm: 'CLI vs GUI'
          }
        ]
      }
    ],
    pastPaperQuestions: [
      {
        id: 'pp-2021-g10-u4-q1',
        year: 2021,
        paperType: 'Paper I',
        badgeText: '2021 O/L Paper I - Q15',
        questionEn: 'Which of the following is an example of an open-source operating system?',
        questionSi: 'පහත සඳහන් කුමක් විවෘත මූලාශ්‍ර (Open-Source) මෙහෙයුම් පද්ධතියක් සඳහා උදාහරණයක් වේ ද?',
        type: 'mcq',
        options: [
          { id: '1', en: 'Ubuntu Linux', si: 'උබුන්ටු ලිනක්ස් (Ubuntu Linux)' },
          { id: '2', en: 'Microsoft Windows 11', si: 'මයික්‍රොසොෆ්ට් වින්ඩෝස් 11' },
          { id: '3', en: 'Apple macOS', si: 'ඇපල් මැක් ඕඑස් (macOS)' },
          { id: '4', en: 'Apple iOS', si: 'ඇපල් අයි ඕඑස් (iOS)' }
        ],
        correctOptionId: '1',
        explanationEn: 'Linux distributions like Ubuntu are open-source and free to study and modify, unlike proprietary commercial OSs.',
        explanationSi: 'උබුන්ටු ලිනක්ස් යනු කේතය නොමිලේ ලබාගත හැකි සහ වෙනස් කළ හැකි විවෘත මූලාශ්‍ර මෙහෙයුම් පද්ධතියකි.'
      }
    ]
  },

  // ==========================================
  // GRADE 10 UNIT 5
  // ==========================================
  'g10-u5': {
    id: 'g10-u5',
    grade: '10',
    unitNumber: 5,
    titleEn: 'Word Processing',
    titleSi: 'වදන් සැකසුම',
    subtopics: [
      {
        id: '5.1',
        number: '5.1',
        titleEn: 'Document Editing, Formatting & Tables',
        titleSi: 'ලේඛන සංස්කරණය, හැඩසැරසුම් සහ වගු නිර්මාණය',
        summaryEn: 'Font styles, paragraph alignments, headers/footers, and tabular layout',
        summarySi: 'අකුරු විලාස, ඡේද පෙළගැස්වීම්, ශීර්ෂක/පාදික සහ වගු සැලසුම්',
        blocks: [
          {
            id: 'b5-1',
            en: 'Word processing software enables users to create, format, edit, and print text documents. Key formatting tools include typography (font size, weight, colour), paragraph alignment (left, right, center, justified), and line spacing.',
            si: 'වදන් සැකසුම් මෘදුකාංග මඟින් පෙළ ලේඛන නිර්මාණය, හැඩගැන්වීම, සංස්කරණය සහ මුද්‍රණය කළ හැක. ප්‍රධාන හැඩසැරසුම්: අක්ෂර විලාස (ප්‍රමාණය, තද පැහැය, වර්ණ), ඡේද පෙළගැස්වීම (වම, දකුණ, මැද, දෙපසම සමකළ) සහ පේළි පරතරය.',
            highlightTerm: 'Document Formatting'
          },
          {
            id: 'b5-2',
            en: 'Tables structure information into horizontal rows and vertical columns. Cells can be merged or split, and headers/footers display recurring metadata such as page numbers and document titles across all pages.',
            si: 'වගු මඟින් තොරතුරු තිරස් පේළි (Rows) සහ සිරස් තීරු (Columns) ලෙස සංවිධානය කෙරේ. සෛල ඒකාබද්ධ කිරීම (Merge) හෝ බෙදීම (Split) කළ හැකි අතර, ශීර්ෂක (Header) සහ පාදික (Footer) මගින් පිටු අංක හා මාතෘකා සියලු පිටුවල ස්වයංක්‍රීයව දිස්වේ.',
            highlightTerm: 'Tables & Headers'
          }
        ],
        checkpointQuiz: {
          id: 'q-5.1',
          questionEn: 'Which paragraph alignment option adjusts spacing between words so both left and right margins are aligned straight?',
          questionSi: 'වම් සහ දකුණු මායිම් දෙකම සෘජුව සිටින පරිදි වචන අතර පරතරය සකසන ඡේද පෙළගැස්වුම් විකල්පය කුමක්ද?',
          options: [
            { id: '1', en: 'Justified (දෙපසම සමකළ)', si: 'දෙපසම සමකළ (Justify)' },
            { id: '2', en: 'Align Left (වමට පෙළගැසූ)', si: 'වමට පෙළගැසූ (Left)' },
            { id: '3', en: 'Align Right (දකුණට පෙළගැසූ)', si: 'දකුණට පෙළගැසූ (Right)' },
            { id: '4', en: 'Center (මැදට පෙළගැසූ)', si: 'මැදට පෙළගැසූ (Center)' }
          ],
          correctOptionId: '1',
          explanationEn: 'Justified alignment creates straight margins on both left and right by distributing space evenly between words.',
          explanationSi: 'Justify කිරීමෙන් වම් සහ දකුණු මායිම් දෙකම එක හා සමානව සෘජු රේඛාවකට පෙළගැස්වේ.'
        }
      },
      {
        id: '5.2',
        number: '5.2',
        titleEn: 'Mail Merge for Batch Communications',
        titleSi: 'තැපැල් ඒකාබද්ධතාව (Mail Merge)',
        summaryEn: 'Combining main document template with recipient data source',
        summarySi: 'ප්‍රධාන ලේඛන සැකිල්ල සහ ලබන්නාගේ දත්ත මූලාශ්‍රය ඒකාබද්ධ කිරීම',
        blocks: [
          {
            id: 'b5-3',
            en: 'Mail Merge is a powerful automated feature that merges a Main Document (e.g., certificate, invitation letter) with a Data Source (e.g., student recipient table) to generate personalized letters in bulk without repetitive manual retyping.',
            si: 'තැපැල් ඒකාබද්ධතාව (Mail Merge) යනු ප්‍රධාන ලේඛනයක් (Main Document) සහ දත්ත මූලාශ්‍රයක් (Data Source - නාම ලැයිස්තුවක්) ඒකාබද්ධ කර එකවර පුද්ගලීකරණය කළ ලිපි හෝ සහතික විශාල ප්‍රමාණයක් ස්වයංක්‍රීයව ජනනය කිරීමේ ප්‍රබල පහසුකමකි.',
            highlightTerm: 'Mail Merge'
          }
        ]
      }
    ],
    pastPaperQuestions: [
      {
        id: 'pp-2022-g10-u5-p1',
        year: 2022,
        paperType: 'Paper I',
        badgeText: '2022 O/L Paper I - Q18',
        questionEn: 'Which two essential components are required to successfully execute a Mail Merge process in word processing software?',
        questionSi: 'වදන් සැකසුම් මෘදුකාංගයක තැපැල් ඒකාබද්ධතා (Mail Merge) ක්‍රියාවලිය සාර්ථකව සිදුකිරීම සඳහා අවශ්‍ය වන ප්‍රධාන සංරචක දෙක කුමක්ද?',
        type: 'mcq',
        options: [
          { id: '1', en: 'Main Document and Data Source', si: 'ප්‍රධාන ලේඛනය (Main Document) සහ දත්ත ප්‍රභවය (Data Source)' },
          { id: '2', en: 'Spreadsheet and Presentation', si: 'පැතුරුම්පත සහ සමර්පණය' },
          { id: '3', en: 'Header and Footer only', si: 'ශීර්ෂකය සහ පාදිකය පමණි' },
          { id: '4', en: 'Operating System and Web Browser', si: 'මෙහෙයුම් පද්ධතිය සහ වෙබ් බ්‍රව්සරය' }
        ],
        correctOptionId: '1',
        explanationEn: 'Mail Merge requires a template (Main Document) and a list of records (Data Source) to generate personalized outputs.',
        explanationSi: 'තැපැල් ඒකාබද්ධතාවය සඳහා ප්‍රධාන ලේඛනය (ලිපිය) සහ දත්ත ප්‍රභවය (නම්/ලිපින ලැයිස්තුව) අනිවාර්ය වේ.'
      }
    ]
  },

  // ==========================================
  // GRADE 10 UNIT 6
  // ==========================================
  'g10-u6': {
    id: 'g10-u6',
    grade: '10',
    unitNumber: 6,
    titleEn: 'Electronic Spreadsheets',
    titleSi: 'විද්‍යුත් පැතුරුම්පත්',
    subtopics: [
      {
        id: '6.1',
        number: '6.1',
        titleEn: 'Cell Referencing & Formulas',
        titleSi: 'සෛල යොමු සහ සූත්‍ර',
        summaryEn: 'Relative vs Absolute ($A$1) referencing and operators',
        summarySi: 'සාපේක්ෂ සහ නිරපේක්ෂ ($A$1) සෛල යොමු හා ගණිතමය කාරක',
        blocks: [
          {
            id: 'b6-1',
            en: 'Relative referencing changes dynamically when copied across cells (e.g. =A1+B1). Absolute referencing freezes the column or row using dollar signs (e.g. =$A$1*0.12).',
            si: 'සාපේක්ෂ සෛල යොමු වෙනත් සෛලයකට පිටපත් කිරීමේදී සෛල ඛණ්ඩාංක වෙනස් වේ (උදා: =A1+B1). නිරපේක්ෂ සෛල යොමු $ සලකුණ භාවිතයෙන් සෛලය ස්ථාවරව තබා ගනී (උදා: =$A$1*0.12).',
            highlightTerm: 'Absolute & Relative Referencing'
          },
          {
            id: 'b6-2',
            en: 'Formulas always begin with an equal sign (=). Spreadsheets adhere to standard arithmetic precedence: Parentheses, Exponentiation, Multiplication/Division, and Addition/Subtraction (PEMDAS).',
            si: 'සූත්‍රයක් සෑම විටම සමාන ලකුණකින් (=) ආරම්භ වේ. පැතුරුම්පත් සම්මත ගණිතමය ප්‍රමුඛතා නීතිය (වරහන්, බල, ගුණ කිරීම/බෙදීම, එකතු කිරීම/අඩු කිරීම) අනුව ගණනය කිරීම් සිදු කරයි.',
            highlightTerm: 'Formula Rules'
          }
        ],
        checkpointQuiz: {
          id: 'q-6.1',
          questionEn: 'What happens to the formula =$B$2*C1 when copied down to the next row?',
          questionSi: '=$B$2*C1 සූත්‍රය පහළ පේළියට පිටපත් කළ විට කුමක් සිදුවේද?',
          options: [
            { id: '1', en: '=$B$2*C2', si: '=$B$2*C2' },
            { id: '2', en: '=$B$3*C2', si: '=$B$3*C2' },
            { id: '3', en: '=$B$2*C1', si: '=$B$2*C1' },
            { id: '4', en: '=B2*C2', si: '=B2*C2' }
          ],
          correctOptionId: '1',
          explanationEn: '$B$2 remains fixed (absolute), while C1 increments to C2 (relative).',
          explanationSi: '$B$2 නිරපේක්ෂ බැවින් නොවෙනස්ව පවතින අතර C1 සාපේක්ෂ බැවින් C2 බවට පත්වේ.'
        }
      },
      {
        id: '6.2',
        number: '6.2',
        titleEn: 'Built-in Functions & Charts',
        titleSi: 'පැතුරුම්පත් ශ්‍රිත සහ ප්‍රස්ථාර',
        summaryEn: 'SUM, AVERAGE, COUNT, MAX, MIN, IF and chart types',
        summarySi: 'SUM, AVERAGE, COUNT, MAX, MIN, IF ශ්‍රිත සහ ප්‍රස්ථාර වර්ග',
        blocks: [
          {
            id: 'b6-3',
            en: 'Built-in functions simplify complex calculations: SUM(range), AVERAGE(range), MAX(range), MIN(range), COUNT(range) for numbers, and IF(condition, value_if_true, value_if_false) for decision making.',
            si: 'පෙරනිමි ශ්‍රිත මඟින් සංකීර්ණ ගණනය කිරීම් පහසු කරයි: SUM (එකතුව), AVERAGE (සාමාන්‍යය), MAX (උපරිමය), MIN (අවමය), COUNT (සංඛ්‍යාත්මක සෛල ගණන) සහ තීරණ ගැනීම සඳහා IF ශ්‍රිතය භාවිත වේ.',
            highlightTerm: 'Built-in Functions'
          }
        ]
      }
    ],
    pastPaperQuestions: [
      {
        id: 'pp-2023-g10-u6-p2',
        year: 2023,
        paperType: 'Paper II',
        badgeText: '2023 O/L Paper II - Q02',
        questionEn: 'Write the spreadsheet formula to calculate the average mark of student Rizwan across English (B4), Maths (C4), and Science (D4).',
        questionSi: 'රිස්වාන් සිසුවාගේ ඉංග්‍රීසි (B4), ගණිතය (C4) සහ විද්‍යාව (D4) ලකුණුවල සාමාන්‍යය ගණනය කිරීමේ පැතුරුම්පත් සූත්‍රය ලියන්න.',
        type: 'structured',
        sampleAnswerEn: '=AVERAGE(B4:D4) or =(B4+C4+D4)/3',
        sampleAnswerSi: '=AVERAGE(B4:D4) හෝ =(B4+C4+D4)/3',
        explanationEn: 'Both AVERAGE range function and direct sum division are valid answers in the O/L marking scheme.',
        explanationSi: 'AVERAGE ශ්‍රිතය හෝ ඓක්‍යය 3න් බෙදීම යන ක්‍රම දෙකම පිළිගැනේ.'
      }
    ]
  },

  // ==========================================
  // GRADE 10 UNIT 7
  // ==========================================
  'g10-u7': {
    id: 'g10-u7',
    grade: '10',
    unitNumber: 7,
    titleEn: 'Electronic Presentations',
    titleSi: 'විද්‍යුත් සමර්පණ',
    subtopics: [
      {
        id: '7.1',
        number: '7.1',
        titleEn: 'Slide Design, Master Slides & Media',
        titleSi: 'කදා සැලසුම්, ප්‍රධාන කදාව (Slide Master) සහ බහුමාධ්‍ය',
        summaryEn: 'Effective visual layout, font hierarchy, and slide master consistency',
        summarySi: 'ඵලදායී දෘශ්‍ය සැකසුම, අක්ෂර ප්‍රමුඛතාව සහ ප්‍රධාන කදාව මඟින් එකම ආකෘතියක් පවත්වා ගැනීම',
        blocks: [
          {
            id: 'b7-1',
            en: 'Electronic presentation software allows users to design slide decks for audiences. The Slide Master is the top template slide that stores information about the theme, layout, fonts, and background for all slides in the presentation.',
            si: 'විද්‍යුත් සමර්පණ මෘදුකාංග මඟින් ප්‍රේක්ෂකයින් සඳහා කදා (Slides) මාලාවක් නිර්මාණය කළ හැක. ප්‍රධාන කදාව (Slide Master) යනු මුළු සමර්පණයේම තේමාව, පසුබිම, අකුරු විලාසය හා සැකසුම පාලනය කරන ප්‍රධාන සැකිල්ලයි.',
            highlightTerm: 'Slide Master'
          },
          {
            id: 'b7-2',
            en: 'Effective slide design requires strong contrast between background and text, limiting bullet points to 5-7 lines per slide, and embedding relevant charts and graphics rather than crowded paragraphs.',
            si: 'සාර්ථක කදා සැලසුමකදී පසුබිම සහ පෙළ අතර පැහැදිලි වර්ණ ප්‍රතිවිරෝධයක් (Contrast) තිබිය යුතුය, එක් කදාවකට කරුණු 5-7 කට සීමා කළ යුතුය සහ දිගු ඡේද වෙනුවට අදාළ ප්‍රස්ථාර හා රූප සටහන් යොදාගත යුතුය.',
            highlightTerm: 'Slide Design Rules'
          }
        ],
        checkpointQuiz: {
          id: 'q-7.1',
          questionEn: 'Which tool in presentation software ensures a school logo appears automatically in the exact same corner of every slide?',
          questionSi: 'සෑම කදාවකම එකම මුල්ලක පාසල් ලාංඡනය ස්වයංක්‍රීයව දිස්වීම සහතික කරන්නේ කුමන මෙවලම මගින්ද?',
          options: [
            { id: '1', en: 'Slide Master (ප්‍රධාන කදාව)', si: 'ප්‍රධාන කදාව (Slide Master)' },
            { id: '2', en: 'Custom Animation (අභිරුචි සජීවීකරණය)', si: 'අභිරුචි සජීවීකරණය' },
            { id: '3', en: 'Slide Transition (කදා සංක්‍රාන්තිය)', si: 'කදා සංක්‍රාන්තිය' },
            { id: '4', en: 'Spell Checker (අක්ෂර වින්‍යාස පරීක්ෂාව)', si: 'අක්ෂර වින්‍යාස පරීක්ෂාව' }
          ],
          correctOptionId: '1',
          explanationEn: 'Adding elements to the Slide Master applies them automatically across all dependent slides in the deck.',
          explanationSi: 'ප්‍රධාන කදාවට (Slide Master) එක් කරන ලාංඡන හෝ ශීර්ෂ සියලු කදාවල ස්වයංක්‍රීයව දිස්වේ.'
        }
      },
      {
        id: '7.2',
        number: '7.2',
        titleEn: 'Transitions vs Animations',
        titleSi: 'කදා සංක්‍රාන්ති (Transitions) සහ සජීවීකරණ (Animations)',
        summaryEn: 'Full slide entry effects vs individual object motion',
        summarySi: 'සම්පූර්ණ කදාව මාරුවන දෘශ්‍ය ප්‍රයෝග සහ කදාව තුළ ඇති වස්තු චලනය කිරීම',
        blocks: [
          {
            id: 'b7-3',
            en: 'A Slide Transition is the motion effect that occurs when advancing from one slide to the next. An Animation is a visual or sound motion applied to a specific object (text, shape, or picture) within a single slide.',
            si: 'කදා සංක්‍රාන්තියක් (Transition) යනු එක් කදාවක සිට ඊළඟ කදාවට මාරු වන විට සිදුවන චලන ප්‍රයෝගයයි. සජීවීකරණයක් (Animation) යනු එක් කදාවක් තුළ ඇති නිශ්චිත වස්තුවකට (පෙළ, රූප හෝ හැඩතල) යොදන චලන ප්‍රයෝගයකි.',
            highlightTerm: 'Transitions vs Animations'
          }
        ]
      }
    ],
    pastPaperQuestions: [
      {
        id: 'pp-2021-g10-u7-p1',
        year: 2021,
        paperType: 'Paper I',
        badgeText: '2021 O/L Paper I - Q21',
        questionEn: 'In presentation software, the visual effect applied when moving from Slide 1 to Slide 2 during a slideshow is called:',
        questionSi: 'සමර්පණ මෘදුකාංගයක, කදා දැක්මක් අතරතුර 1 වන කදාවේ සිට 2 වන කදාවට මාරුවීමේදී යෙදෙන දෘශ්‍ය ප්‍රයෝගය හඳුන්වන්නේ:',
        type: 'mcq',
        options: [
          { id: '1', en: 'Slide Transition (කදා සංක්‍රාන්තිය)', si: 'කදා සංක්‍රාන්තිය (Slide Transition)' },
          { id: '2', en: 'Custom Animation (අභිරුචි සජීවීකරණය)', si: 'අභිරුචි සජීවීකරණය' },
          { id: '3', en: 'Slide Layout (කදා පිරිසැලසුම)', si: 'කදා පිරිසැලසුම' },
          { id: '4', en: 'Slide Sorter (කදා තෝරනය)', si: 'කදා තෝරනය' }
        ],
        correctOptionId: '1',
        explanationEn: 'Movement between whole slides is a Transition; motion inside a slide is Animation.',
        explanationSi: 'කදා අතර මාරුවීම සංක්‍රාන්තියක් (Transition) වේ.'
      }
    ]
  },

  // ==========================================
  // GRADE 10 UNIT 8
  // ==========================================
  'g10-u8': {
    id: 'g10-u8',
    grade: '10',
    unitNumber: 8,
    titleEn: 'Databases & Management Systems',
    titleSi: 'දත්ත සමුදාය සහ කළමනාකරණය',
    subtopics: [
      {
        id: '8.1',
        number: '8.1',
        titleEn: 'Relational Database Concepts & Keys',
        titleSi: 'සම්බන්ධක දත්ත සමුදා සංකල්ප සහ යතුරු',
        summaryEn: 'Tables, Fields, Records, Primary Keys, and Foreign Keys',
        summarySi: 'වගු, ක්ෂේත්‍ර, වාර්තා, ප්‍රාථමික යතුරු සහ විදේශ යතුරු',
        blocks: [
          {
            id: 'b8-1',
            en: 'A Database is an organized collection of related data. In a Relational Database, data is stored in two-dimensional Tables (Relations). Columns are called Fields (Attributes), and rows are called Records (Tuples).',
            si: 'දත්ත සමුදායක් යනු එකිනෙකට සම්බන්ධ දත්තයන්ගේ සංවිධානාත්මක එකතුවකි. සම්බන්ධක දත්ත සමුදායක (RDBMS) දත්ත තිරස් පේළි හා සිරස් තීරු සහිත වගුවල (Tables) ගබඩා වේ. තීරු ක්ෂේත්‍ර (Fields/Attributes) ලෙසද, පේළි වාර්තා (Records/Tuples) ලෙසද හැඳින්වේ.',
            highlightTerm: 'Tables & Records'
          },
          {
            id: 'b8-2',
            en: 'A Primary Key uniquely identifies each record in a table and cannot contain null values. A Foreign Key is a field in one table that references the primary key of another table, creating an entity relationship.',
            si: 'ප්‍රාථමික යතුරක් (Primary Key) මඟින් වගුවක සෑම වාර්තාවක්ම අනන්‍යව හඳුනා ගනී (එහි හිස් අගයන් තිබිය නොහැක). විදේශ යතුරක් (Foreign Key) යනු වෙනත් වගුවක ප්‍රාථමික යතුරට සම්බන්ධ වන ක්ෂේත්‍රයක් වන අතර එමගින් වගු අතර සම්බන්ධතා ගොඩනගයි.',
            highlightTerm: 'Primary & Foreign Keys'
          }
        ],
        checkpointQuiz: {
          id: 'q-8.1',
          questionEn: 'Which key is chosen to uniquely identify each student record in a Student table?',
          questionSi: 'ශිෂ්‍ය (Student) වගුවක එක් එක් ශිෂ්‍ය වාර්තාව අනන්‍යව හඳුනා ගැනීම සඳහා තෝරාගනු ලබන්නේ කුමන යතුරද?',
          options: [
            { id: '1', en: 'Primary Key (e.g., Admission_No)', si: 'ප්‍රාථමික යතුර (උදා: ඇතුළත්වීමේ අංකය)' },
            { id: '2', en: 'Foreign Key (විදේශ යතුර)', si: 'විදේශ යතුර' },
            { id: '3', en: 'Composite Index', si: 'සංයුක්ත දර්ශකය' },
            { id: '4', en: 'Secondary Key', si: 'ද්විතීයික යතුර' }
          ],
          correctOptionId: '1',
          explanationEn: 'The Primary Key enforces uniqueness so no two students have the same identifier.',
          explanationSi: 'ප්‍රාථමික යතුර (Admission_No) මගින් කිසිදු සිසුන් දෙදෙනෙකුට එකම අංකයක් නොලැබෙන පරිදි අනන්‍යතාව සහතික කරයි.'
        }
      },
      {
        id: '8.2',
        number: '8.2',
        titleEn: 'Relationships & Queries',
        titleSi: 'වගු අතර සම්බන්ධතා සහ විමසුම් (Queries)',
        summaryEn: 'One-to-One, One-to-Many, and criteria queries',
        summarySi: 'එකකට එක, එකකට බොහෝ සම්බන්ධතා සහ කොන්දේසි සහිත විමසුම්',
        blocks: [
          {
            id: 'b8-3',
            en: 'Relationships link tables: One-to-One (1:1 - e.g., Citizen to NIC), One-to-Many (1:N - e.g., Class to Students), and Many-to-Many (M:N - e.g., Students to Subjects). Queries extract specific records meeting user criteria.',
            si: 'වගු අතර සම්බන්ධතා වර්ග 3කි: එකකට එක (1:1 - පුරවැසියා සහ හැඳුනුම්පත), එකකට බොහෝ (1:N - පන්තිය සහ සිසුන්), සහ බොහෝ දේට බොහෝ (M:N - සිසුන් සහ විෂයයන්). විමසුම් (Queries) මඟින් නිශ්චිත කොන්දේසි සපුරන දත්ත පෙරහන් කර ලබා ගත හැක.',
            highlightTerm: 'Relationships & Queries'
          }
        ]
      }
    ],
    pastPaperQuestions: [
      {
        id: 'pp-2022-g10-u8-p1',
        year: 2022,
        paperType: 'Paper I',
        badgeText: '2022 O/L Paper I - Q32',
        questionEn: 'In a school relational database, what is the relationship between "Grade_Class" table and "Student" table?',
        questionSi: 'පාසල් සම්බන්ධක දත්ත සමුදායක, "Grade_Class" (පන්තිය) වගුව සහ "Student" (ශිෂ්‍යයා) වගුව අතර පවතින සම්බන්ධතාවය කුමක්ද?',
        type: 'mcq',
        options: [
          { id: '1', en: 'One-to-Many (1 : N)', si: 'එකකට බොහෝ (1 : N)' },
          { id: '2', en: 'One-to-One (1 : 1)', si: 'එකකට එක (1 : 1)' },
          { id: '3', en: 'Many-to-Many (M : N)', si: 'බොහෝ දේට බොහෝ (M : N)' },
          { id: '4', en: 'None of the above', si: 'ඉහත කිසිවක් නොවේ' }
        ],
        correctOptionId: '1',
        explanationEn: 'One class contains many students, but each student belongs to only one class, making it a 1:N relationship.',
        explanationSi: 'එක් පන්තියක සිසුන් බොහෝ දෙනෙකු සිටින අතර එක් සිසුවෙකු අයත් වන්නේ එක් පන්තියකට පමණි (1 : N).'
      }
    ]
  },

  // ==========================================
  // GRADE 11 UNIT 1
  // ==========================================
  'g11-u1': {
    id: 'g11-u1',
    grade: '11',
    unitNumber: 1,
    titleEn: 'Multimedia Technologies',
    titleSi: 'බහුමාධ්‍ය තාක්ෂණය',
    subtopics: [
      {
        id: '11.1.1',
        number: '1.1',
        titleEn: 'Elements of Multimedia & Graphics',
        titleSi: 'බහුමාධ්‍ය මූලද්‍රව්‍ය සහ චිත්‍රක',
        summaryEn: 'Text, Audio, Images, Video, Animation, and Raster vs Vector graphics',
        summarySi: 'පෙළ, ශ්‍රව්‍ය, රූප, වීඩියෝ, සජීවීකරණ සහ රාස්ටර් හා දෛශික චිත්‍රක',
        blocks: [
          {
            id: 'b11-1-1',
            en: 'Multimedia combines multiple content forms: Text, Audio, Images (Graphics), Video, and Animation. Static media includes text and still graphics; dynamic media includes audio, video, and animation.',
            si: 'බහුමාධ්‍ය යනු විවිධ මාධ්‍ය ආකාර එකතුවකි: පෙළ (Text), ශ්‍රව්‍ය (Audio), රූප (Images), වීඩියෝ (Video) සහ සජීවීකරණ (Animation). පෙළ සහ නිශ්චල රූප ස්ථිතික මාධ්‍ය වන අතර ශ්‍රව්‍ය, වීඩියෝ සහ සජීවීකරණ ගතික මාධ්‍ය වේ.',
            highlightTerm: 'Multimedia Elements'
          },
          {
            id: 'b11-1-2',
            en: 'Digital images fall into two types: Raster (Bitmap) graphics made of pixels (e.g., JPEG, PNG, BMP) which pixelate when zoomed, and Vector graphics made of mathematical paths (e.g., SVG, EPS) which scale infinitely without quality loss.',
            si: 'ඩිජිටල් රූප ප්‍රධාන වර්ග දෙකකි: පික්සල (Pixels) ජාලයකින් සැකසෙන රාස්ටර් (Raster/Bitmap) චිත්‍රක (උදා: JPEG, PNG - විශාලනය කළ විට බොඳ වේ) සහ ගණිතමය සමීකරණ මඟින් සැකසෙන දෛශික (Vector) චිත්‍රක (උදා: SVG - විශාලනය කළද ගුණාත්මකභාවය නැති නොවේ).',
            highlightTerm: 'Raster vs Vector'
          }
        ],
        checkpointQuiz: {
          id: 'q-11.1.1',
          questionEn: 'Which type of graphic uses mathematical equations and does NOT lose clarity or pixelate when enlarged?',
          questionSi: 'ගණිතමය සමීකරණ භාවිත කරන සහ විශාලනය කළ විට ගුණාත්මකභාවය අඩු නොවන චිත්‍රක වර්ගය කුමක්ද?',
          options: [
            { id: '1', en: 'Vector Graphic (දෛශික චිත්‍රක)', si: 'දෛශික චිත්‍රක (Vector)' },
            { id: '2', en: 'Raster (Bitmap) Graphic', si: 'රාස්ටර් (Bitmap) චිත්‍රක' },
            { id: '3', en: 'JPEG Photo', si: 'JPEG ඡායාරූප' },
            { id: '4', en: 'Pixel Map', si: 'පික්සල් සිතියම' }
          ],
          correctOptionId: '1',
          explanationEn: 'Vector images use mathematical formulas between points, preserving crisp sharp vectors at any zoom level.',
          explanationSi: 'දෛශික (Vector) චිත්‍රක ගණිතමය සමීකරණ මඟින් නිර්මාණය වන බැවින් විශාලනය කළද පැහැදිලි බව නොවෙනස්ව පවතී.'
        }
      },
      {
        id: '11.1.2',
        number: '1.2',
        titleEn: 'Compression: Lossy vs Lossless',
        titleSi: 'දත්ත සම්පීඩනය: හානිකර (Lossy) සහ හානි රහිත (Lossless)',
        summaryEn: 'Trade-offs between file size reduction and pristine quality retention',
        summarySi: 'ගොනු ප්‍රමාණය අඩු කිරීම සහ ගුණාත්මකභාවය රැකගැනීම අතර සංසන්දනය',
        blocks: [
          {
            id: 'b11-1-3',
            en: 'File compression reduces storage size. Lossless compression reduces size without discarding any data (e.g., PNG, FLAC, ZIP). Lossy compression permanently discards imperceptible data for much smaller file sizes (e.g., MP3, JPEG, MP4).',
            si: 'ගොනු සම්පීඩනය මඟින් ගබඩා ධාරිතාව ඉතිරි කරයි. හානි රහිත සම්පීඩනය (Lossless) කිසිදු මුල් දත්තයක් ඉවත් නොකර ගොනු ප්‍රමාණය අඩු කරයි (උදා: PNG, FLAC). හානිකර සම්පීඩනය (Lossy) මිනිස් ඇසට හෝ කනට නොදැනෙන දත්ත ස්ථිරව ඉවත් කර ඉතා කුඩා ගොනු සාදයි (උදා: JPEG, MP3, MP4).',
            highlightTerm: 'Lossy vs Lossless'
          }
        ]
      }
    ],
    pastPaperQuestions: [
      {
        id: 'pp-2022-g11-u1-p1',
        year: 2022,
        paperType: 'Paper I',
        badgeText: '2022 O/L Paper I - Q28',
        questionEn: 'Which of the following audio file formats uses lossy compression to achieve smaller file sizes suitable for web streaming?',
        questionSi: 'අන්තර්ජාලය ඔස්සේ පහසුවෙන් හුවමාරු කරගත හැකි පරිදි හානිකර සම්පීඩනය (Lossy Compression) භාවිත කරන ශ්‍රව්‍ය ගොනු ආකෘතිය කුමක්ද?',
        type: 'mcq',
        options: [
          { id: '1', en: 'MP3', si: 'MP3' },
          { id: '2', en: 'WAV', si: 'WAV (නොසම්පීඩිත)' },
          { id: '3', en: 'FLAC', si: 'FLAC (හානි රහිත)' },
          { id: '4', en: 'BMP', si: 'BMP' }
        ],
        correctOptionId: '1',
        explanationEn: 'MP3 is the universal lossy audio compression format in the O/L ICT curriculum.',
        explanationSi: 'MP3 යනු හානිකර (Lossy) සම්පීඩනය භාවිත කරන සම්මත ශ්‍රව්‍ය ආකෘතියකි.'
      }
    ]
  },

  // ==========================================
  // GRADE 11 UNIT 2
  // ==========================================
  'g11-u2': {
    id: 'g11-u2',
    grade: '11',
    unitNumber: 2,
    titleEn: 'Programming Concepts & Algorithms',
    titleSi: 'ක්‍රමලේඛනය සහ ඇල්ගොරිතම',
    subtopics: [
      {
        id: '11.2.1',
        number: '2.1',
        titleEn: 'Flowchart Symbols & Control Structures',
        titleSi: 'ගැලීම් සටහන් සංකේත සහ පාලන ව්‍යුහ',
        summaryEn: 'Terminal, Process, Decision, I/O symbols, and Sequence/Selection/Iteration',
        summarySi: 'ආරම්භක, සැකසුම්, තීරණ, ආදාන/ප්‍රතිදාන සංකේත සහ පාලන ව්‍යුහ 3',
        blocks: [
          {
            id: 'b11-2-1',
            en: 'An algorithm is a step-by-step sequence of instructions to solve a given computational problem. Standard flowchart symbols include: Oval (Terminal - Start/Stop), Parallelogram (Input/Output), Rectangle (Process), and Diamond (Decision).',
            si: 'ඇල්ගොරිතමයක් යනු යම් ගැටලුවක් විසඳීම සඳහා වූ පියවරෙන් පියවර උපදෙස් මාලාවකි. සම්මත ගැලීම් සටහන් සංකේත: ඉලිප්සය (ආරම්භය/අවසානය), සමාන්තරාස්‍රය (ආදානය/ප්‍රතිදානය), ඍජුකෝණාස්‍රය (සැකසීම), සහ රම්බසය (තීරණය).',
            highlightTerm: 'Flowchart Symbols'
          },
          {
            id: 'b11-2-2',
            en: 'The three fundamental control structures are Sequence (step after step), Selection (IF-THEN-ELSE), and Iteration / Repetition (WHILE, REPEAT-UNTIL, FOR loops).',
            si: 'මූලික පාලන ව්‍යුහ 3කි: අනුක්‍රමය (එකිනෙක පසුපස සිදුවන පියවර), තේරීම (IF-THEN-ELSE), සහ පුනරාවර්තනය (WHILE, REPEAT-UNTIL, FOR ලූප).',
            highlightTerm: 'Control Structures'
          }
        ],
        examples: [
          {
            id: 'ex-11.2.1',
            titleEn: 'Interactive Logic Gates & Decision Truth Tables',
            titleSi: 'සජීවී තර්කන ද්වාර සහ සත්‍යතා වගු',
            isInteractiveWidget: 'logic-gate'
          }
        ],
        checkpointQuiz: {
          id: 'q-11.2.1',
          questionEn: 'Which flowchart symbol is used to represent the conditional test: "Is Mark >= 50?"',
          questionSi: '"ලකුණු >= 50 ද?" යන කොන්දේසි පරීක්ෂාව නිරූපණය කිරීමට යොදාගන්නා ගැලීම් සටහන් සංකේතය කුමක්ද?',
          options: [
            { id: '1', en: 'Diamond (Rhombus)', si: 'රම්බසය (තීරණ සංකේතය)' },
            { id: '2', en: 'Parallelogram', si: 'සමාන්තරාස්‍රය' },
            { id: '3', en: 'Rectangle', si: 'ඍජුකෝණාස්‍රය' },
            { id: '4', en: 'Circle', si: 'වෘත්තය' }
          ],
          correctOptionId: '1',
          explanationEn: 'Decisions and branching conditions are represented by a Diamond (Decision box).',
          explanationSi: 'කොන්දේසි පරීක්ෂාව සහ තීරණ ගැනීම සඳහා රම්බසය (Diamond) භාවිත කෙරේ.'
        }
      }
    ],
    pastPaperQuestions: [
      {
        id: 'pp-2022-g11-u2-p1',
        year: 2022,
        paperType: 'Paper I',
        badgeText: '2022 O/L Paper I - Q25',
        questionEn: 'What is the final value printed by the following pseudocode: Count = 1; Total = 0; While Count <= 3 do Total = Total + Count; Count = Count + 1; EndWhile; Display Total',
        questionSi: 'පහත ව්‍යාජ කේතයෙන් මුද්‍රණය වන අවසාන අගය කුමක්ද: Count = 1; Total = 0; While Count <= 3 do Total = Total + Count; Count = Count + 1; EndWhile; Display Total',
        type: 'mcq',
        options: [
          { id: '1', en: '6', si: '6' },
          { id: '2', en: '3', si: '3' },
          { id: '3', en: '10', si: '10' },
          { id: '4', en: '4', si: '4' }
        ],
        correctOptionId: '1',
        explanationEn: 'Iteration 1: Total = 0+1=1, Count=2. Iteration 2: Total=1+2=3, Count=3. Iteration 3: Total=3+3=6, Count=4. Loop ends. Output = 6.',
        explanationSi: '1 වන වටය: Total = 1, Count = 2. 2 වන වටය: Total = 3, Count = 3. 3 වන වටය: Total = 6, Count = 4. ලූපය අවසන් වේ. ප්‍රතිදානය = 6.'
      }
    ]
  },

  // ==========================================
  // GRADE 11 UNIT 3
  // ==========================================
  'g11-u3': {
    id: 'g11-u3',
    grade: '11',
    unitNumber: 3,
    titleEn: 'Web Authoring with HTML & CSS',
    titleSi: 'HTML සහ CSS මගින් වෙබ් අඩවි නිර්මාණය',
    subtopics: [
      {
        id: '11.3.1',
        number: '3.1',
        titleEn: 'HTML Tags, Tables and Hyperlinks',
        titleSi: 'HTML ටැග්, වගු සහ අධිසබැඳි',
        summaryEn: 'Document structure, tables, forms, and hyperlinks',
        summarySi: 'ලේඛන ව්‍යුහය, වගු, ආකෘති පත්‍ර සහ සබැඳි',
        blocks: [
          {
            id: 'b11-3-1',
            en: 'HTML (HyperText Markup Language) defines structure. Key tags include <html>, <head>, <title>, <body>. Tables use <table>, <tr> (table row), <th> (table header), and <td> (table data cell). Hyperlinks use <a href="...">.',
            si: 'HTML මගින් වෙබ් පිටුවක ව්‍යුහය තනනු ලබයි. ප්‍රධාන ටැග්: <html>, <head>, <title>, <body>. වගු සඳහා <table>, <tr> (පේළිය), <th> (ශීර්ෂකය), සහ <td> (දත්ත සෛලය) ද, අධිසබැඳි සඳහා <a href="..."> ද භාවිත වේ.',
            highlightTerm: 'HTML Core Tags'
          },
          {
            id: 'b11-3-2',
            en: 'CSS (Cascading Style Sheets) controls visual appearance: color, font, spacing, and layout. Styles can be applied Inline (style attribute), Internal (<style> in head), or External (linked .css file).',
            si: 'CSS (කැස්කේඩින් විලාස පත්‍ර) මඟින් වෙබ් පිටුවේ දෘශ්‍ය පෙනුම (වර්ණ, අකුරු, පරතරය) පාලනය කරයි. එය ආකාර 3කින් යෙදිය හැක: පේළිගත (Inline), අභ්‍යන්තර (Internal), හෝ බාහිර (External .css ගොනුවක් මගින්).',
            highlightTerm: 'CSS Methods'
          }
        ],
        checkpointQuiz: {
          id: 'q-11.3.1',
          questionEn: 'Which HTML attribute is used to combine 3 adjacent columns into a single cell in a table?',
          questionSi: 'වගුවක යාබද තීරු 3ක් තනි සෛලයක් බවට ඒකාබද්ධ කිරීමට භාවිත වන HTML උපලක්ෂණය (attribute) කුමක්ද?',
          options: [
            { id: '1', en: 'colspan="3"', si: 'colspan="3"' },
            { id: '2', en: 'rowspan="3"', si: 'rowspan="3"' },
            { id: '3', en: 'merge="3"', si: 'merge="3"' },
            { id: '4', en: 'span="3"', si: 'span="3"' }
          ],
          correctOptionId: '1',
          explanationEn: 'colspan expands a table cell across multiple columns, while rowspan expands across multiple rows.',
          explanationSi: 'තීරු ඒකාබද්ධ කිරීමට colspan ද, පේළි ඒකාබද්ධ කිරීමට rowspan ද යොදා ගැනේ.'
        }
      }
    ],
    pastPaperQuestions: [
      {
        id: 'pp-2021-g11-u3-p1',
        year: 2021,
        paperType: 'Paper I',
        badgeText: '2021 O/L Paper I - Q30',
        questionEn: 'Which HTML tag produces an ordered (numbered) list?',
        questionSi: 'අංකිත (ordered) ලැයිස්තුවක් නිර්මාණය කිරීම සඳහා භාවිත වන HTML ටැගය කුමක්ද?',
        type: 'mcq',
        options: [
          { id: '1', en: '<ol>', si: '<ol>' },
          { id: '2', en: '<ul>', si: '<ul>' },
          { id: '3', en: '<li>', si: '<li>' },
          { id: '4', en: '<dl>', si: '<dl>' }
        ],
        correctOptionId: '1',
        explanationEn: '<ol> creates an Ordered List (1, 2, 3), whereas <ul> creates an Unordered List with bullet points.',
        explanationSi: '<ol> මඟින් අංකිත ලැයිස්තු ද, <ul> මඟින් බුලට් ලක්ෂ්‍ය සහිත අනංකිත ලැයිස්තු ද සාදයි.'
      }
    ]
  },

  // ==========================================
  // GRADE 11 UNIT 4
  // ==========================================
  'g11-u4': {
    id: 'g11-u4',
    grade: '11',
    unitNumber: 4,
    titleEn: 'The Internet and Electronic Mail',
    titleSi: 'අන්තර්ජාලය සහ විද්‍යුත් තැපෑල',
    subtopics: [
      {
        id: '11.4.1',
        number: '4.1',
        titleEn: 'Network Architecture, IP & DNS',
        titleSi: 'ජාල ව්‍යුහය, IP ලිපින සහ DNS පද්ධතිය',
        summaryEn: 'Topologies, IPv4 addresses, and Domain Name System',
        summarySi: 'ජාල ස්ථලක, IPv4 ලිපින සහ ඩොමේන් නාම පද්ධතිය',
        blocks: [
          {
            id: 'b11-4-1',
            en: 'The Internet is a global network of interconnected computer networks. Devices communicate using IP (Internet Protocol) addresses (e.g. 192.168.1.1). The Domain Name System (DNS) translates human-readable domain names (e.g. moe.gov.lk) into machine-readable IP addresses.',
            si: 'අන්තර්ජාලය යනු එකිනෙකට සම්බන්ධ වූ පරිගණක ජාලයන්ගේ ගෝලීය ජාලයයි. උපකරණ එකිනෙක සන්නිවේදනය කරන්නේ IP ලිපින මගිනි (උදා: 192.168.1.1). DNS (Domain Name System) මගින් මිනිසුන්ට පහසු වෙබ් ලිපින (උදා: moe.gov.lk) යන්ත්‍රවලට හඳුනාගත හැකි IP ලිපින බවට පරිවර්තනය කරයි.',
            highlightTerm: 'IP & DNS'
          },
          {
            id: 'b11-4-2',
            en: 'Uniform Resource Locators (URLs) specify web resource locations: Protocol (https://) + Domain (www.school.lk) + Path (/ict/notes.html).',
            si: 'URL (Uniform Resource Locator) එකක් මගින් වෙබ් ලිපිනයක පිහිටීම නිරූපණය වේ: ප්‍රොටෝකෝලය (https://) + ඩොමේනය (www.school.lk) + ගොනු මාර්ගය (/ict/notes.html).',
            highlightTerm: 'URL Anatomy'
          }
        ],
        checkpointQuiz: {
          id: 'q-11.4.1',
          questionEn: 'Which system is responsible for converting a web address like "www.gov.lk" into its corresponding numeric IP address?',
          questionSi: '"www.gov.lk" වැනි වෙබ් ලිපිනයක් ඊට අදාළ සංඛ්‍යාත්මක IP ලිපිනයක් බවට පරිවර්තනය කිරීමේ වගකීම දරන්නේ කුමන පද්ධතියද?',
          options: [
            { id: '1', en: 'Domain Name System (DNS)', si: 'ඩොමේන් නාම පද්ධතිය (DNS)' },
            { id: '2', en: 'HyperText Transfer Protocol (HTTP)', si: 'HTTP ප්‍රොටෝකෝලය' },
            { id: '3', en: 'File Transfer Protocol (FTP)', si: 'FTP ප්‍රොටෝකෝලය' },
            { id: '4', en: 'Internet Service Provider (ISP)', si: 'අන්තර්ජාල සේවා සැපයුම්කරු' }
          ],
          correctOptionId: '1',
          explanationEn: 'DNS functions like the Internet phonebook, resolving domain names into IP addresses.',
          explanationSi: 'DNS මඟින් වෙබ් නාමයන් සංඛ්‍යාත්මක IP ලිපින බවට විකේතනය කරයි.'
        }
      },
      {
        id: '11.4.2',
        number: '4.2',
        titleEn: 'Electronic Mail & Protocols',
        titleSi: 'විද්‍යුත් තැපෑල සහ සන්නිවේදන ප්‍රොටෝකෝල',
        summaryEn: 'SMTP (sending) vs POP3 / IMAP (retrieving emails)',
        summarySi: 'ඊමේල් යැවීමට SMTP සහ ලබාගැනීමට POP3 / IMAP ප්‍රොටෝකෝල භාවිතය',
        blocks: [
          {
            id: 'b11-4-3',
            en: 'Email transmission relies on dedicated protocols: SMTP (Simple Mail Transfer Protocol) is used to send outgoing mail from client to server, while POP3 or IMAP are used to retrieve incoming mail from server to user client.',
            si: 'විද්‍යුත් තැපැල් සන්නිවේදනය සඳහා ප්‍රොටෝකෝල භාවිත වේ: ඊමේල් පිටතට යැවීම සඳහා SMTP (Simple Mail Transfer Protocol) ද, ලැබෙන ඊමේල් පරිශීලකයා වෙත ලබාගැනීම සඳහා POP3 හෝ IMAP ද භාවිත වේ.',
            highlightTerm: 'SMTP vs POP3/IMAP'
          }
        ]
      }
    ],
    pastPaperQuestions: [
      {
        id: 'pp-2023-g11-u4-p1',
        year: 2023,
        paperType: 'Paper I',
        badgeText: '2023 O/L Paper I - Q19',
        questionEn: 'Which Internet protocol is specifically utilized for sending outgoing email messages from a user client to a mail server?',
        questionSi: 'පරිශීලක පරිගණකයක සිට විද්‍යුත් තැපැල් සේවාදායකය වෙත ඊමේල් පණිවිඩ යැවීම (Sending) සඳහා විශේෂයෙන් භාවිත වන ප්‍රොටෝකෝලය කුමක්ද?',
        type: 'mcq',
        options: [
          { id: '1', en: 'SMTP (Simple Mail Transfer Protocol)', si: 'SMTP' },
          { id: '2', en: 'POP3 (Post Office Protocol 3)', si: 'POP3' },
          { id: '3', en: 'IMAP (Internet Message Access Protocol)', si: 'IMAP' },
          { id: '4', en: 'FTP (File Transfer Protocol)', si: 'FTP' }
        ],
        correctOptionId: '1',
        explanationEn: 'SMTP is strictly the outbound mail sending protocol in computer networks.',
        explanationSi: 'පිටතට ඊමේල් යැවීම සඳහා SMTP ප්‍රොටෝකෝලය භාවිත කෙරේ.'
      }
    ]
  },

  // ==========================================
  // GRADE 11 UNIT 5
  // ==========================================
  'g11-u5': {
    id: 'g11-u5',
    grade: '11',
    unitNumber: 5,
    titleEn: 'ICT in Society, Ethics and Legal Issues',
    titleSi: 'තොරතුරු පද්ධති හා සමාජය, සදාචාරාත්මක හා නීතිමය කරුණු',
    subtopics: [
      {
        id: '11.5.1',
        number: '5.1',
        titleEn: 'Cyber Threats, Malware & Legal Frameworks',
        titleSi: 'සයිබර් තර්ජන, අනිෂ්ට මෘදුකාංග සහ නීතිමය රාමු',
        summaryEn: 'Viruses, Worms, Trojan horses, Phishing, and Computer Crimes Act',
        summarySi: 'වයිරස්, පණුවන්, ට්‍රෝජන්, තතුබෑම (Phishing) සහ පරිගණක අපරාධ පනත',
        blocks: [
          {
            id: 'b11-5-1',
            en: 'Malware (Malicious Software) includes Viruses (requires host file to spread), Worms (replicates automatically across networks), and Trojans (disguised as legitimate software). Phishing deceives users into revealing passwords via fraudulent links.',
            si: 'අනිෂ්ට මෘදුකාංග (Malware): පරිගණක වයිරස් (පැතිරීමට ධාරක ගොනුවක් අවශ්‍යයි), පණුවන් (Worms - ජාල ඔස්සේ ස්වයංක්‍රීයව පැතිරේ), සහ ට්‍රෝජන් (නියම මෘදුකාංගයක් ලෙස වෙස්වලාගත්). තතුබෑම (Phishing) යනු ව්‍යාජ වෙබ් අඩවි මගින් රහස්‍ය මුරපද සොරකම් කිරීමයි.',
            highlightTerm: 'Malware Types'
          },
          {
            id: 'b11-5-2',
            en: 'In Sri Lanka, legal protection is enforced by the Computer Crimes Act No. 24 of 2007 (penalizing unauthorized access, data alteration, and hacking) and the Intellectual Property Act No. 36 of 2003 (protecting software copyright against piracy).',
            si: 'ශ්‍රී ලංකාවේ නීතිමය ආරක්ෂාව: 2007 අංක 24 දරන පරිගණක අපරාධ පනත (අනවසර පිවිසුම්, හැක් කිරීම් සහ දත්ත වෙනස් කිරීම් දඬුවම් ලැබිය හැකි වරදක් කරයි) සහ 2003 අංක 36 දරන බුද්ධිමය දේපළ පනත (මෘදුකාංග කොල්ලකෑම වැළැක්වීම සහ ප්‍රකාශන හිමිකම ආරක්ෂා කිරීම).',
            highlightTerm: 'Legal Frameworks'
          }
        ],
        checkpointQuiz: {
          id: 'q-11.5.1',
          questionEn: 'Which piece of Sri Lankan legislation specifically penalizes unauthorized access (hacking) and data sabotage?',
          questionSi: 'අනවසරයෙන් පරිගණක පද්ධතිවලට පිවිසීම (Hacking) සහ දත්ත විනාශ කිරීම දඬුවම් ලැබිය හැකි වරදක් බවට පත් කරන ශ්‍රී ලංකා නීතිය කුමක්ද?',
          options: [
            { id: '1', en: 'Computer Crimes Act No. 24 of 2007', si: '2007 අංක 24 දරන පරිගණක අපරාධ පනත' },
            { id: '2', en: 'Motor Traffic Act', si: 'මෝටර් වාහන පනත' },
            { id: '3', en: 'Consumer Protection Act', si: 'පාරිභෝගික ආරක්ෂණ පනත' },
            { id: '4', en: 'Shop and Office Employees Act', si: 'සේවක අර්ථසාධක පනත' }
          ],
          correctOptionId: '1',
          explanationEn: 'The Computer Crimes Act No. 24 of 2007 provides the legal framework to prosecute cyber offenses in Sri Lanka.',
          explanationSi: 'පරිගණක ආශ්‍රිත අපරාධ සඳහා ශ්‍රී ලංකාවේ ක්‍රියාත්මක වන ප්‍රධාන නීතිය වන්නේ 2007 අංක 24 දරන පරිගණක අපරාධ පනතයි.'
        }
      },
      {
        id: '11.5.2',
        number: '5.2',
        titleEn: 'Ergonomics & e-Waste Management',
        titleSi: 'කාර්යක්ෂමතා ඉංජිනේරු විද්‍යාව (Ergonomics) සහ විද්‍යුත් අපද්‍රව්‍ය',
        summaryEn: 'Repetitive Strain Injury (RSI), posture ergonomics, and safe e-waste disposal',
        summarySi: 'RSI රෝගී තත්ත්ව, සිරුරේ නිවැරදි ඉරියව් සහ විද්‍යුත් අපද්‍රව්‍ය කළමනාකරණය',
        blocks: [
          {
            id: 'b11-5-3',
            en: 'Ergonomics is the science of designing the workplace environment to fit user health: correct monitor eye level, lumbar back support, and wrist rests prevent Repetitive Strain Injury (RSI) and Computer Vision Syndrome (CVS).',
            si: 'කාර්යක්ෂමතා ඉංජිනේරු විද්‍යාව (Ergonomics) යනු පරිශීලක සෞඛ්‍යයට ගැළපෙන සේ සේවා පරිසරය සැකසීමයි: ඇස් මට්ටමට මොනිටරය තබා ගැනීම, කොන්ද කෙළින් තබාගැනීම හා අත්වාරු භාවිතය මඟින් RSI හා ඇස් ආබාධ වළක්වා ගත හැක.',
            highlightTerm: 'Ergonomics & Health'
          }
        ]
      }
    ],
    pastPaperQuestions: [
      {
        id: 'pp-2022-g11-u5-p1',
        year: 2022,
        paperType: 'Paper I',
        badgeText: '2022 O/L Paper I - Q35',
        questionEn: 'Which condition is an ergonomic physical health hazard caused by prolonged repetitive typing and mouse clicking without ergonomic wrist support?',
        questionSi: 'නිවැරදි අත්වාරු භාවිතයකින් තොරව එක දිගට මූසිකය හා යතුරුපුවරුව භාවිත කිරීම නිසා ඇතිවන කාර්යක්ෂමතා සෞඛ්‍ය ගැටලුව කුමක්ද?',
        type: 'mcq',
        options: [
          { id: '1', en: 'Repetitive Strain Injury (RSI)', si: 'පුනරාවර්තී ආතති තුවාලය (RSI)' },
          { id: '2', en: 'Computer Virus Infection', si: 'පරිගණක වයිරස් ආසාදනය' },
          { id: '3', en: 'Malware injection', si: 'අනිෂ්ට මෘදුකාංග එන්නත් වීම' },
          { id: '4', en: 'Data Loss', si: 'දත්ත අහිමිවීම' }
        ],
        correctOptionId: '1',
        explanationEn: 'RSI (Repetitive Strain Injury) affects muscles and tendons in wrists and fingers due to continuous repetitive strain.',
        explanationSi: 'RSI යනු නැවත නැවත සිදුවන යාන්ත්‍රික චලන නිසා මැණික් කටුව සහ ඇඟිලි ආශ්‍රිතව ඇතිවන ආබාධයකි.'
      }
    ]
  },

  // ==========================================
  // GRADE 11 UNIT 6
  // ==========================================
  'g11-u6': {
    id: 'g11-u6',
    grade: '11',
    unitNumber: 6,
    titleEn: 'Cloud Computing and Future Trends in ICT',
    titleSi: 'වලාකුළු පරිගණනය සහ අනාගත ප්‍රවණතා',
    subtopics: [
      {
        id: '11.6.1',
        number: '6.1',
        titleEn: 'Cloud Computing Models: IaaS, PaaS, SaaS',
        titleSi: 'වලාකුළු සේවා ආකෘති: IaaS, PaaS සහ SaaS',
        summaryEn: 'Infrastructure, Platform, and Software as a Service delivery models',
        summarySi: 'යටිතල පහසුකම්, වේදිකා සහ මෘදුකාංග සේවා ආකෘති සංසන්දනය',
        blocks: [
          {
            id: 'b11-6-1',
            en: 'Cloud Computing delivers on-demand computing services (servers, storage, databases, networking, software) over the Internet with pay-as-you-go pricing.',
            si: 'වලාකුළු පරිගණනය (Cloud Computing) යනු අන්තර්ජාලය ඔස්සේ ඉල්ලුම අනුව පරිගණක සම්පත් (සේවාදායක, ආචයනය, දත්ත සමුදාය, මෘදුකාංග) සපයන තාක්ෂණයකි.',
            highlightTerm: 'Cloud Computing'
          },
          {
            id: 'b11-6-2',
            en: 'The three primary cloud service models: IaaS (Infrastructure as a Service - rent virtual machines/storage), PaaS (Platform as a Service - environment for developers to build apps), and SaaS (Software as a Service - end-user apps hosted online like Google Docs or Microsoft 365).',
            si: 'ප්‍රධාන වලාකුළු ආකෘති 3කි: IaaS (යටිතල පහසුකම් සේවාවක් ලෙස - සර්වර් හෝ ගබඩා කුලියට දීම), PaaS (වේදිකාවක් සේවාවක් ලෙස - මෘදුකාංග තැනීමට පරිසරය සැපයීම), සහ SaaS (මෘදුකාංගයක් සේවාවක් ලෙස - Google Docs, MS 365 වැනි මාර්ගගත මෘදුකාංග භාවිතය).',
            highlightTerm: 'IaaS vs PaaS vs SaaS'
          }
        ],
        checkpointQuiz: {
          id: 'q-11.6.1',
          questionEn: 'Which cloud model allows students to open Google Docs in a web browser and collaborate on a document without installing any office software locally?',
          questionSi: 'කිසිදු මෘදුකාංගයක් පරිගණකයේ ස්ථාපනය නොකර Google Docs හරහා ලේඛන සැකසීමට සිසුන්ට ඉඩ සලසන වලාකුළු සේවා ආකෘතිය කුමක්ද?',
          options: [
            { id: '1', en: 'SaaS (Software as a Service)', si: 'SaaS (සේවාවක් ලෙස මෘදුකාංග)' },
            { id: '2', en: 'IaaS (Infrastructure as a Service)', si: 'IaaS' },
            { id: '3', en: 'PaaS (Platform as a Service)', si: 'PaaS' },
            { id: '4', en: 'DaaS (Desktop as a Service)', si: 'DaaS' }
          ],
          correctOptionId: '1',
          explanationEn: 'SaaS delivers complete, ready-to-use software applications accessed through web browsers.',
          explanationSi: 'Google Docs යනු සෘජුවම බ්‍රව්සරයෙන් භාවිත කළ හැකි SaaS (Software as a Service) මෘදුකාංගයකි.'
        }
      },
      {
        id: '11.6.2',
        number: '6.2',
        titleEn: 'Emerging Trends: IoT, AI & Big Data',
        titleSi: 'නැගී එන ප්‍රවණතා: අන්තර්ජාලගත දේවල් (IoT), කෘත්‍රිම බුද්ධිය (AI) සහ මහා දත්ත',
        summaryEn: 'Smart devices, machine learning, and voluminous dataset analytics',
        summarySi: 'ස්මාර්ට් සංවේදක උපාංග, යන්ත්‍ර ඉගෙනුම සහ මහා දත්ත විශ්ලේෂණය',
        blocks: [
          {
            id: 'b11-6-3',
            en: 'Internet of Things (IoT) interconnects physical smart devices (sensors, smart meters, smart agriculture) to exchange data over the internet. Artificial Intelligence (AI) enables machines to perform tasks requiring human intelligence: vision, speech recognition, and adaptive learning.',
            si: 'අන්තර්ජාලගත දේවල් (IoT) මඟින් භෞතික උපාංග (සංවේදක, ස්මාර්ට් මීටර්, ස්මාර්ට් කෘෂිකර්මාන්තය) අන්තර්ජාලයට සම්බන්ධ කර දත්ත හුවමාරු කරයි. කෘත්‍රිම බුද්ධිය (AI) මඟින් මිනිස් බුද්ධිය අවශ්‍ය වන කාර්යයන් (දෘශ්‍ය හඳුනාගැනීම, කථන පරිවර්තනය, තීරණ ගැනීම) පරිගණක මඟින් සිදු කරයි.',
            highlightTerm: 'IoT & AI'
          }
        ]
      }
    ],
    pastPaperQuestions: [
      {
        id: 'pp-2023-g11-u6-p1',
        year: 2023,
        paperType: 'Paper I',
        badgeText: '2023 O/L Paper I - Q38',
        questionEn: 'A smart farming greenhouse continuously monitors soil moisture and automatically activates water sprinklers via Internet connectivity. This is an application of:',
        questionSi: 'ස්මාර්ට් හරිතාගාරයක පසෙහි තෙතමනය අඛණ්ඩව නිරීක්ෂණය කර අන්තර්ජාලය ඔස්සේ ස්වයංක්‍රීයව ජල විසුරුම් සක්‍රිය කිරීම කුමන තාක්ෂණික යෙදවුමකට උදාහරණයක්ද?',
        type: 'mcq',
        options: [
          { id: '1', en: 'Internet of Things (IoT)', si: 'අන්තර්ජාලගත දේවල් (IoT)' },
          { id: '2', en: 'Virtual Reality (VR)', si: 'ප්‍රත්‍යක්ෂ අතාත්විකත්වය (VR)' },
          { id: '3', en: 'Word Processing', si: 'වදන් සැකසුම' },
          { id: '4', en: 'Batch Operating System', si: 'ඛණ්ඩ මෙහෙයුම් පද්ධති' }
        ],
        correctOptionId: '1',
        explanationEn: 'Sensors communicating and triggering actions over the internet represent the textbook Internet of Things (IoT).',
        explanationSi: 'සංවේදක හරහා අන්තර්ජාලය ඔස්සේ තොරතුරු හුවමාරු කර ස්වයංක්‍රීයව ක්‍රියා කිරීම IoT තාක්ෂණයයි.'
      }
    ]
  }
};
