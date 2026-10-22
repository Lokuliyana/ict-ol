/**
 * src/data/bilingualGlossary.ts
 * Master Bilingual Technical Glossary for Sri Lankan G.C.E. O/L ICT
 * Covers all official NIE terminology across Grade 10 & Grade 11.
 */

export interface TechnicalTermEntry {
  id: string;
  termEn: string;
  termSi: string;
  phonetic?: string;
  glossaryNoteEn: string;
  glossaryNoteSi: string;
  category: string;
}

export const BILINGUAL_GLOSSARY: TechnicalTermEntry[] = [
  // ==========================================
  // Grade 10 Unit 1: Introduction to ICT
  // ==========================================
  {
    id: 'data',
    termEn: 'Data',
    termSi: 'දත්ත',
    phonetic: 'Day-tuh',
    glossaryNoteEn: 'Raw, unorganized facts, figures, or symbols without specific contextual meaning.',
    glossaryNoteSi: 'සන්දර්භයක් හෝ අර්ථයක් නොමැති, සැකසුමකට ලක්නොකළ අමු සංඛ්‍යා, අක්ෂර හෝ සංකේත.',
    category: 'Foundations',
  },
  {
    id: 'information',
    termEn: 'Information',
    termSi: 'තොරතුරු',
    phonetic: 'In-fer-may-shun',
    glossaryNoteEn: 'Processed, structured data that conveys context and supports decision making.',
    glossaryNoteSi: 'තීරණ ගැනීම සඳහා ප්‍රයෝජනවත් වන පරිදි සකස් කළ, අර්ථවත් දත්ත.',
    category: 'Foundations',
  },
  {
    id: 'input',
    termEn: 'Input',
    termSi: 'ආදානය',
    phonetic: 'In-put',
    glossaryNoteEn: 'Data, commands, or signals entered into a computer system for processing.',
    glossaryNoteSi: 'සැකසීම සඳහා පරිගණක පද්ධතියක් තුළට ඇතුළත් කරනු ලබන දත්ත හෝ උපදෙස්.',
    category: 'Foundations',
  },
  {
    id: 'process',
    termEn: 'Process',
    termSi: 'සැකසුම',
    phonetic: 'Prah-sess',
    glossaryNoteEn: 'Manipulating and transforming raw input data into meaningful information according to instructions.',
    glossaryNoteSi: 'ලබාදුන් උපදෙස් අනුව අමු දත්ත අර්ථවත් තොරතුරු බවට පරිවර්තනය කිරීමේ ක්‍රියාවලිය.',
    category: 'Foundations',
  },
  {
    id: 'output',
    termEn: 'Output',
    termSi: 'ප්‍රතිදානය',
    phonetic: 'Out-put',
    glossaryNoteEn: 'The resulting processed information presented to the user through display, audio, or print.',
    glossaryNoteSi: 'සැකසූ තොරතුරු පරිශීලකයා වෙත ඉදිරිපත් කරනු ලබන ප්‍රතිඵලය.',
    category: 'Foundations',
  },
  {
    id: 'storage',
    termEn: 'Storage',
    termSi: 'ආචයනය',
    phonetic: 'Store-ij',
    glossaryNoteEn: 'Retaining digital data and program instructions for immediate or future retrieval.',
    glossaryNoteSi: 'දත්ත, තොරතුරු සහ උපදෙස් පසු ප්‍රයෝජනය සඳහා රඳවා තබාගැනීම.',
    category: 'Foundations',
  },
  {
    id: 'system',
    termEn: 'System',
    termSi: 'පද්ධතිය',
    phonetic: 'Sis-tuhm',
    glossaryNoteEn: 'A set of interrelated components working together towards an overarching goal.',
    glossaryNoteSi: 'පොදු අරමුණක් ඉටුකර ගැනීම සඳහා එකිනෙක අන්තර්ක්‍රියා කරන සංරචක එකතුවක්.',
    category: 'Foundations',
  },
  {
    id: 'computer',
    termEn: 'Computer',
    termSi: 'පරිගණකය',
    phonetic: 'Kuhm-pyoo-ter',
    glossaryNoteEn: 'An electronic machine capable of accepting data, processing it under program control, and producing output.',
    glossaryNoteSi: 'දත්ත ආදානය කර, වැඩසටහන්ගත උපදෙස් අනුව සකසා, ප්‍රතිදාන ලබාදෙන විද්‍යුත් උපාංගය.',
    category: 'Foundations',
  },
  {
    id: 'hardware',
    termEn: 'Hardware',
    termSi: 'දෘඩාංග',
    phonetic: 'Hard-wair',
    glossaryNoteEn: 'Physical, tangible electronic and mechanical parts that make up a computer system.',
    glossaryNoteSi: 'පරිගණක පද්ධතියක ස්පර්ශ කළ හැකි භෞතික හා විද්‍යුත් උපාංග කොටස්.',
    category: 'Hardware',
  },
  {
    id: 'software',
    termEn: 'Software',
    termSi: 'මෘදුකාංග',
    phonetic: 'Soft-wair',
    glossaryNoteEn: 'Sets of instructions, programs, and code that tell hardware what operations to execute.',
    glossaryNoteSi: 'පරිගණක දෘඩාංග මෙහෙයවීම සඳහා ලියන ලද උපදෙස් සහ වැඩසටහන් සමූහය.',
    category: 'Software',
  },
  {
    id: 'firmware',
    termEn: 'Firmware',
    termSi: 'ස්ථිරාංග',
    phonetic: 'Ferm-wair',
    glossaryNoteEn: 'Permanent software programmed into read-only memory (ROM) chips at manufacturing.',
    glossaryNoteSi: 'නිෂ්පාදනයේදීම ROM චිපයක් තුළ ස්ථිරව තැන්පත් කර ඇති මෘදුකාංග (උදා: BIOS).',
    category: 'Hardware',
  },
  {
    id: 'liveware',
    termEn: 'Liveware',
    termSi: 'මානවාංග',
    phonetic: 'Lyve-wair',
    glossaryNoteEn: 'Human beings who design, program, administer, or operate computer systems.',
    glossaryNoteSi: 'පරිගණක පද්ධති සැලසුම් කරන, ක්‍රමලේඛනය කරන හෝ පරිශීලනය කරන පුද්ගලයින්.',
    category: 'Foundations',
  },

  // ==========================================
  // Grade 10 Unit 2: Computer Architecture
  // ==========================================
  {
    id: 'cpu',
    termEn: 'CPU',
    termSi: 'මධ්‍ය සැකසුම් ඒකකය (CPU)',
    phonetic: 'C P U',
    glossaryNoteEn: 'Central Processing Unit; the electronic circuitry that fetches, decodes, and executes instructions.',
    glossaryNoteSi: 'පරිගණකයේ මොළය බඳු වන, උපදෙස් ලබාගෙන සකසා ක්‍රියාත්මක කරන ප්‍රධාන ඒකකය.',
    category: 'Architecture',
  },
  {
    id: 'central_processing_unit',
    termEn: 'Central Processing Unit',
    termSi: 'මධ්‍ය සැකසුම් ඒකකය',
    phonetic: 'Sen-tral Pro-ses-ing Yoo-nit',
    glossaryNoteEn: 'The primary component of a computer that executes instructions and coordinates hardware.',
    glossaryNoteSi: 'පරිගණකයේ උපදෙස් ක්‍රියාත්මක කරන සහ අනෙකුත් කොටස් පාලනය කරන ප්‍රධාන උපාංගය.',
    category: 'Architecture',
  },
  {
    id: 'alu',
    termEn: 'ALU',
    termSi: 'අංකගණිතමය හා තාර්කික ඒකකය (ALU)',
    phonetic: 'A L U',
    glossaryNoteEn: 'Arithmetic and Logic Unit; component inside CPU performing mathematical calculations and logical comparisons.',
    glossaryNoteSi: 'ගණිතමය ගණනය කිරීම් සහ තාර්කික සංසන්දනයන් සිදුකරන CPU සංරචකය.',
    category: 'Architecture',
  },
  {
    id: 'cu',
    termEn: 'Control Unit',
    termSi: 'පාලන ඒකකය',
    phonetic: 'Kuhn-trohl Yoo-nit',
    glossaryNoteEn: 'Directs the operation of the processor, coordinating ALU, registers, and external buses.',
    glossaryNoteSi: 'පරිගණකයේ සියලු උපාංග අතර දත්ත ගලායාම සහ උපදෙස් නිසි පරිදි මෙහෙයවන ඒකකය.',
    category: 'Architecture',
  },
  {
    id: 'register',
    termEn: 'Register',
    termSi: 'රෙජිස්ටර',
    phonetic: 'Rej-ih-ster',
    glossaryNoteEn: 'Extremely high-speed temporary memory locations situated directly inside the CPU.',
    glossaryNoteSi: 'CPU තුළම පිහිටා ඇති ඉතා වේගවත් තාවකාලික දත්ත රඳවන කුඩා මතක ස්ථාන.',
    category: 'Architecture',
  },
  {
    id: 'cache',
    termEn: 'Cache Memory',
    termSi: 'කෑෂ් මතකය',
    phonetic: 'Kash Mem-ree',
    glossaryNoteEn: 'High-speed SRAM placed between the CPU and RAM to store frequently accessed data and instructions.',
    glossaryNoteSi: 'නිතර භාවිත වන දත්ත තබාගනිමින් CPU සහ RAM අතර වේග පරතරය අවම කරන මතකය.',
    category: 'Architecture',
  },
  {
    id: 'ram',
    termEn: 'RAM',
    termSi: 'සසම්භාවී ප්‍රවේශ මතකය (RAM)',
    phonetic: 'Ram',
    glossaryNoteEn: 'Random Access Memory; primary volatile memory holding data and programs actively running.',
    glossaryNoteSi: 'ක්‍රියාත්මක වන වැඩසටහන් තාවකාලිකව රඳවා ගන්නා නශ්‍ය ප්‍රාථමික මතකය.',
    category: 'Architecture',
  },
  {
    id: 'rom',
    termEn: 'ROM',
    termSi: 'කියවීම පමණක් ඇති මතකය (ROM)',
    phonetic: 'Rom',
    glossaryNoteEn: 'Read-Only Memory; non-volatile memory storing permanent startup instructions (BIOS/firmware).',
    glossaryNoteSi: 'විදුලිය විසන්ධි වුවද දත්ත නොමැකෙන, ආරම්භක උපදෙස් අඩංගු අනශ්‍ය මතකය.',
    category: 'Architecture',
  },
  {
    id: 'system_bus',
    termEn: 'System Bus',
    termSi: 'පද්ධති බසය',
    phonetic: 'Sis-tuhm Bus',
    glossaryNoteEn: 'A set of parallel electrical pathways transmitting data, addresses, and control signals across system components.',
    glossaryNoteSi: 'CPU, මතකය සහ පර්යන්ත අතර විදුලි සංඥා හුවමාරු වන සන්නායක රැහැන් මාර්ග එකතුව.',
    category: 'Architecture',
  },
  {
    id: 'data_bus',
    termEn: 'Data Bus',
    termSi: 'දත්ත බසය',
    phonetic: 'Day-tuh Bus',
    glossaryNoteEn: 'Bidirectional bus carrying actual raw data and instructions between CPU, memory, and devices.',
    glossaryNoteSi: 'CPU සහ අනෙකුත් ඒකක අතර ද්වි-දිශානතව දත්ත ප්‍රවාහනය කරන සන්නායක මාර්ගය.',
    category: 'Architecture',
  },
  {
    id: 'address_bus',
    termEn: 'Address Bus',
    termSi: 'ලිපින බසය',
    phonetic: 'Uh-dress Bus',
    glossaryNoteEn: 'Unidirectional bus carrying memory and I/O addresses designated by the CPU.',
    glossaryNoteSi: 'CPU මඟින් මතක ලිපින පමණක් එක් දිශාවකට රැගෙන යන ඒක-දිශානත බසය.',
    category: 'Architecture',
  },
  {
    id: 'control_bus',
    termEn: 'Control Bus',
    termSi: 'පාලන බසය',
    phonetic: 'Kuhn-trohl Bus',
    glossaryNoteEn: 'Bidirectional bus transmitting timing, synchronization, and control command signals.',
    glossaryNoteSi: 'පද්ධතියේ ක්‍රියාකාරකම් සම්බන්ධීකරණයට පාලන සංඥා රැගෙන යන බසය.',
    category: 'Architecture',
  },

  // ==========================================
  // Grade 10 Unit 3: Number Systems & Data Rep
  // ==========================================
  {
    id: 'binary',
    termEn: 'Binary',
    termSi: 'ද්වීමය',
    phonetic: 'Bye-nuh-ree',
    glossaryNoteEn: 'Base-2 numerical system using only two symbols: 0 and 1.',
    glossaryNoteSi: '0 සහ 1 යන සංකේත දෙක පමණක් භාවිත කරන පාදය 2 වූ සංඛ්‍යා පද්ධතිය.',
    category: 'Data Representation',
  },
  {
    id: 'decimal',
    termEn: 'Decimal',
    termSi: 'දශමය',
    phonetic: 'Dess-ih-muhl',
    glossaryNoteEn: 'Base-10 numerical system using digits 0 through 9.',
    glossaryNoteSi: '0 සිට 9 දක්වා සංකේත දහයක් භාවිත කරන පාදය 10 වූ සංඛ්‍යා පද්ධතිය.',
    category: 'Data Representation',
  },
  {
    id: 'octal',
    termEn: 'Octal',
    termSi: 'අෂ්ටමය',
    phonetic: 'Ok-tuhl',
    glossaryNoteEn: 'Base-8 numerical system using digits 0 through 7.',
    glossaryNoteSi: '0 සිට 7 දක්වා සංකේත අටක් භාවිත කරන පාදය 8 වූ සංඛ්‍යා පද්ධතිය.',
    category: 'Data Representation',
  },
  {
    id: 'hexadecimal',
    termEn: 'Hexadecimal',
    termSi: 'ෂඩ්දශමය',
    phonetic: 'Hex-uh-dess-ih-muhl',
    glossaryNoteEn: 'Base-16 numerical system using digits 0-9 and letters A-F.',
    glossaryNoteSi: '0-9 සහ A-F සංකේත 16ක් භාවිත කරන පාදය 16 වූ සංඛ්‍යා පද්ධතිය.',
    category: 'Data Representation',
  },
  {
    id: 'bit',
    termEn: 'Bit',
    termSi: 'බිටුව',
    phonetic: 'Bit',
    glossaryNoteEn: 'Binary digit; the smallest fundamental atomic unit of digital data (0 or 1).',
    glossaryNoteSi: 'පරිගණක දත්ත නිරූපණයේ මූලිකම හා කුඩාම ඒකකය (0 හෝ 1).',
    category: 'Data Representation',
  },
  {
    id: 'byte',
    termEn: 'Byte',
    termSi: 'බයිටය',
    phonetic: 'Byte',
    glossaryNoteEn: 'A contiguous group of 8 binary bits representing a single alphanumeric character.',
    glossaryNoteSi: 'බිටු 8ක එකතුවක්; එක් අක්ෂරයක් නිරූපණය කිරීමට ප්‍රමාණවත් ඒකකය.',
    category: 'Data Representation',
  },
  {
    id: 'ascii',
    termEn: 'ASCII',
    termSi: 'ASCII කේතය',
    phonetic: 'Ass-key',
    glossaryNoteEn: 'American Standard Code for Information Interchange; standard 7/8-bit character encoding.',
    glossaryNoteSi: 'තොරතුරු හුවමාරුව සඳහා බහුලව යොදාගන්නා සම්මත අක්ෂර කේතන ක්‍රමයකි.',
    category: 'Data Representation',
  },
  {
    id: 'unicode',
    termEn: 'Unicode',
    termSi: 'යුනිකෝඩ්',
    phonetic: 'Yoo-nee-kohd',
    glossaryNoteEn: 'Universal multi-byte encoding system supporting writing scripts across every world language.',
    glossaryNoteSi: 'සිංහල ඇතුළු ලෝකයේ සියලු භාෂා පරිගණකයේ නිරූපණය කළ හැකි විශ්ව කේතන ක්‍රමය.',
    category: 'Data Representation',
  },

  // ==========================================
  // Grade 10 Unit 4: Logic Gates
  // ==========================================
  {
    id: 'logic_gate',
    termEn: 'Logic Gate',
    termSi: 'තාර්කික ද්වාරය',
    phonetic: 'Loj-ik Gayt',
    glossaryNoteEn: 'An electronic circuit executing fundamental Boolean operations on one or more inputs.',
    glossaryNoteSi: 'බූලියානු වීජ ගණිත නීති අනුව විද්‍යුත් සංඥා පාලනය කරන පරිපථ ඒකකය.',
    category: 'Logic Gates',
  },
  {
    id: 'truth_table',
    termEn: 'Truth Table',
    termSi: 'සත්‍යතා වගුව',
    phonetic: 'Trooth Tay-buhl',
    glossaryNoteEn: 'Tabular representation listing all possible binary input permutations and resulting outputs.',
    glossaryNoteSi: 'ද්වාරයක සියලු ආදාන සංයෝජන සහ ඊට අදාළ ප්‍රතිදාන දක්වන වගුව.',
    category: 'Logic Gates',
  },
  {
    id: 'and_gate',
    termEn: 'AND Gate',
    termSi: 'AND ද්වාරය',
    phonetic: 'And Gayt',
    glossaryNoteEn: 'Logic gate producing 1 only if all input operands evaluate to 1.',
    glossaryNoteSi: 'සියලු ආදානයන් 1 වන විට පමණක් ප්‍රතිදානය 1 වන තාර්කික ද්වාරය.',
    category: 'Logic Gates',
  },
  {
    id: 'or_gate',
    termEn: 'OR Gate',
    termSi: 'OR ද්වාරය',
    phonetic: 'Or Gayt',
    glossaryNoteEn: 'Logic gate producing 1 if at least one input operand evaluates to 1.',
    glossaryNoteSi: 'අවම වශයෙන් එක් ආදානයක් හෝ 1 වන විට ප්‍රතිදානය 1 වන ද්වාරය.',
    category: 'Logic Gates',
  },
  {
    id: 'not_gate',
    termEn: 'NOT Gate',
    termSi: 'NOT ද්වාරය',
    phonetic: 'Not Gayt',
    glossaryNoteEn: 'Inverter gate with one input producing the inverted Boolean complement.',
    glossaryNoteSi: 'ආදාන සංඥාව ප්‍රතිවිරුද්ධ අගයට හරවන (ඉන්වර්ටරය) තනි ආදාන ද්වාරය.',
    category: 'Logic Gates',
  },
  {
    id: 'nand_gate',
    termEn: 'NAND Gate',
    termSi: 'NAND ද්වාරය',
    phonetic: 'Nand Gayt',
    glossaryNoteEn: 'Universal logic gate equivalent to AND followed by a NOT invert stage.',
    glossaryNoteSi: 'AND ද්වාරයක ප්‍රතිදානය ප්‍රතිලෝම කරන සර්වත්‍ර (Universal) ද්වාරය.',
    category: 'Logic Gates',
  },
  {
    id: 'nor_gate',
    termEn: 'NOR Gate',
    termSi: 'NOR ද්වාරය',
    phonetic: 'Nor Gayt',
    glossaryNoteEn: 'Universal logic gate equivalent to OR followed by a NOT invert stage.',
    glossaryNoteSi: 'OR ද්වාරයක ප්‍රතිදානය ප්‍රතිලෝම කරන සර්වත්‍ර ද්වාරය.',
    category: 'Logic Gates',
  },
  {
    id: 'xor_gate',
    termEn: 'XOR Gate',
    termSi: 'XOR ද්වාරය',
    phonetic: 'X-or Gayt',
    glossaryNoteEn: 'Exclusive OR gate producing 1 only when inputs possess disparate values.',
    glossaryNoteSi: 'ආදානයන් එකිනෙකට වෙනස් වූ විට පමණක් ප්‍රතිදානය 1 වන ද්වාරය.',
    category: 'Logic Gates',
  },

  // ==========================================
  // Grade 10 Unit 5: Operating Systems
  // ==========================================
  {
    id: 'operating_system',
    termEn: 'Operating System',
    termSi: 'මෙහෙයුම් පද්ධතිය',
    phonetic: 'Op-er-ay-ting Sis-tuhm',
    glossaryNoteEn: 'System software managing hardware resources, memory, files, and user interface.',
    glossaryNoteSi: 'පරිගණක දෘඩාංග සහ මෘදුකාංග සම්පත් කළමනාකරණය කරන මූලික පද්ධති මෘදුකාංගය.',
    category: 'Operating Systems',
  },
  {
    id: 'gui',
    termEn: 'GUI',
    termSi: 'ප්‍රස්ථාරික පරිශීලක අතුරුමුහුණත (GUI)',
    phonetic: 'Goo-ey',
    glossaryNoteEn: 'Graphical User Interface; visual interface featuring icons, windows, menus, and pointers.',
    glossaryNoteSi: 'කවුළු, අයිකන, මෙනු සහ දර්ශක (WIMP) මඟින් පරිගණකය සමඟ පහසුවෙන් ගනුදෙනු කරන අතුරුමුහුණත.',
    category: 'Operating Systems',
  },
  {
    id: 'cli',
    termEn: 'CLI',
    termSi: 'විධාන පේළි අතුරුමුහුණත (CLI)',
    phonetic: 'C L I',
    glossaryNoteEn: 'Command Line Interface; text-based interface where operators type commands into a prompt.',
    glossaryNoteSi: 'පෙළ විධාන ටයිප් කිරීම මඟින් පරිගණකය මෙහෙයවන අතුරුමුහුණත.',
    category: 'Operating Systems',
  },
  {
    id: 'device_driver',
    termEn: 'Device Driver',
    termSi: 'උපාංග ධාවකය',
    phonetic: 'Dih-vys Dry-ver',
    glossaryNoteEn: 'Specialized program enabling the OS to communicate with a specific hardware peripheral.',
    glossaryNoteSi: 'විශේෂිත දෘඩාංග උපාංගයක් මෙහෙයුම් පද්ධතිය සමඟ සම්බන්ධ කරවන මෘදුකාංගය.',
    category: 'Operating Systems',
  },
  {
    id: 'file_system',
    termEn: 'File System',
    termSi: 'ගොනු පද්ධතිය',
    phonetic: 'Fyle Sis-tuhm',
    glossaryNoteEn: 'Structure used by the OS to name, store, organize, and locate files on storage media.',
    glossaryNoteSi: 'ආචයන මාධ්‍ය තුළ ගොනු සංවිධානය කර තබාගැනීමට මෙහෙයුම් පද්ධතිය භාවිත කරන ක්‍රමය.',
    category: 'Operating Systems',
  },

  // ==========================================
  // Grade 10 Unit 7: Spreadsheets
  // ==========================================
  {
    id: 'spreadsheet',
    termEn: 'Spreadsheet',
    termSi: 'පැතුරුම්පත',
    phonetic: 'Spred-sheet',
    glossaryNoteEn: 'Interactive grid software organizing numerical data into rows and columns for calculation.',
    glossaryNoteSi: 'පේළි සහ තීරු සහිත කොටු දැලක් තුළ සංඛ්‍යාත්මක දත්ත ගණනය කිරීමට යොදාගන්නා මෘදුකාංගය.',
    category: 'Applications',
  },
  {
    id: 'cell',
    termEn: 'Cell',
    termSi: 'කොටුව (Cell)',
    phonetic: 'Sell',
    glossaryNoteEn: 'The intersection coordinate formed by a specific column letter and row number in a sheet.',
    glossaryNoteSi: 'පැතුරුම්පතක තීරුවක් සහ පේළියක් ඡේදනය වන කුඩා කොටුව.',
    category: 'Applications',
  },
  {
    id: 'formula',
    termEn: 'Formula',
    termSi: 'සූත්‍රය',
    phonetic: 'Form-yoo-luh',
    glossaryNoteEn: 'An expression created by the user beginning with = to perform calculations in a cell.',
    glossaryNoteSi: 'ගණනය කිරීමක් සඳහා = ලකුණින් ආරම්භ කර පරිශීලකයා විසින් සකස් කරන ගණිත ප්‍රකාශනය.',
    category: 'Applications',
  },
  {
    id: 'function',
    termEn: 'Function',
    termSi: 'ශ්‍රිතය',
    phonetic: 'Fuhnk-shun',
    glossaryNoteEn: 'A pre-programmed built-in calculation formula provided by the spreadsheet (e.g., SUM, AVERAGE).',
    glossaryNoteSi: 'පැතුරුම්පත තුළ කලින් සකසා ඇති සම්මත ගණිතමය සූත්‍රයක් (උදා: SUM, AVERAGE).',
    category: 'Applications',
  },

  // ==========================================
  // Grade 10 Unit 8: Databases
  // ==========================================
  {
    id: 'database',
    termEn: 'Database',
    termSi: 'දත්ත සමුදාය',
    phonetic: 'Day-tuh-bays',
    glossaryNoteEn: 'An organized, persistent collection of logically related structured data records.',
    glossaryNoteSi: 'තර්කානුකූලව එකිනෙකට සම්බන්ධ වන පරිදි ක්‍රමවත්ව සංවිධානය කර ඇති දත්ත එකතුව.',
    category: 'Databases',
  },
  {
    id: 'dbms',
    termEn: 'DBMS',
    termSi: 'දත්ත සමුදා කළමනාකරණ පද්ධතිය (DBMS)',
    phonetic: 'D B M S',
    glossaryNoteEn: 'Database Management System; software used to create, maintain, query, and secure databases.',
    glossaryNoteSi: 'දත්ත සමුදායන් නිර්මාණය කිරීමට හා කළමනාකරණයට භාවිත කරන මෘදුකාංග පද්ධතිය.',
    category: 'Databases',
  },
  {
    id: 'primary_key',
    termEn: 'Primary Key',
    termSi: 'ප්‍රාථමික යතුර',
    phonetic: 'Pry-mer-ee Kee',
    glossaryNoteEn: 'A unique field identifier that distinctly distinguishes every individual record in a database table.',
    glossaryNoteSi: 'වගුවක සෑම වාර්තාවක්ම අනන්‍යව හඳුනාගැනීම සඳහා යොදාගන්නා ක්ෂේත්‍රය.',
    category: 'Databases',
  },
  {
    id: 'foreign_key',
    termEn: 'Foreign Key',
    termSi: 'විදේශ යතුර',
    phonetic: 'For-in Kee',
    glossaryNoteEn: 'A field in one table that references the primary key of another table, establishing a relationship.',
    glossaryNoteSi: 'වගු දෙකක් අතර සම්බන්ධතාව ගොඩනැගීමට අනෙක් වගුවේ ප්‍රාථමික යතුර යොදාගැනීම.',
    category: 'Databases',
  },
  {
    id: 'query',
    termEn: 'Query',
    termSi: 'විමසුම',
    phonetic: 'Kweer-ee',
    glossaryNoteEn: 'A precise search condition formulated to extract and display specific records meeting criteria.',
    glossaryNoteSi: 'දත්ත සමුදායකින් නිශ්චිත කොන්දේසි සපුරාලන දත්ත තෝරා බේරා ලබාගැනීමේ ක්‍රමය.',
    category: 'Databases',
  },

  // ==========================================
  // Grade 11 Unit 1 & 2: Algorithms & Programming
  // ==========================================
  {
    id: 'algorithm',
    termEn: 'Algorithm',
    termSi: 'ඇල්ගොරිතමය',
    phonetic: 'Al-guh-rih-thum',
    glossaryNoteEn: 'A finite, step-by-step sequence of unambiguous instructions for solving a given problem.',
    glossaryNoteSi: 'ගැටලුවක් විසඳීම සඳහා අනුගමනය කළ යුතු පියවරෙන් පියවර වූ සීමිත උපදෙස් මාලාව.',
    category: 'Programming',
  },
  {
    id: 'flowchart',
    termEn: 'Flowchart',
    termSi: 'ගැලීම් සටහන',
    phonetic: 'Floh-chart',
    glossaryNoteEn: 'A diagrammatic representation using standardized geometric symbols to depict algorithm steps.',
    glossaryNoteSi: 'ඇල්ගොරිතමයක පියවර සම්මත ජ්‍යාමිතික රූප සටහන් භාවිතයෙන් ප්‍රස්ථාරිකව දැක්වීම.',
    category: 'Programming',
  },
  {
    id: 'pseudocode',
    termEn: 'Pseudocode',
    termSi: 'ව්‍යාජ කේතය',
    phonetic: 'Soo-doh-kohd',
    glossaryNoteEn: 'Informal English-like textual language structured to describe algorithm logic without strict syntax.',
    glossaryNoteSi: 'ක්‍රමලේඛන භාෂාවක නීතිරීතිවලින් තොරව සරල ඉංග්‍රීසි භාෂාවෙන් ඇල්ගොරිතමය ලිවීම.',
    category: 'Programming',
  },
  {
    id: 'variable',
    termEn: 'Variable',
    termSi: 'විචල්‍යය',
    phonetic: 'Vair-ee-uh-buhl',
    glossaryNoteEn: 'A named storage location in memory whose held value can change during execution.',
    glossaryNoteSi: 'වැඩසටහන ක්‍රියාත්මක වන අතරතුර අගය වෙනස් විය හැකි මතක ස්ථානයක නම.',
    category: 'Programming',
  },
  {
    id: 'constant',
    termEn: 'Constant',
    termSi: 'නියතය',
    phonetic: 'Kahn-stuhnt',
    glossaryNoteEn: 'A named data value that remains fixed and unchangeable throughout program execution.',
    glossaryNoteSi: 'වැඩසටහන ධාවනය වන අතරතුර අගය වෙනස් නොවන පරිදි තබාගන්නා අගය.',
    category: 'Programming',
  },
  {
    id: 'iteration',
    termEn: 'Iteration',
    termSi: 'පුනර්කරණය',
    phonetic: 'It-er-ay-shun',
    glossaryNoteEn: 'Repetition of a block of code statements multiple times until a condition is satisfied.',
    glossaryNoteSi: 'කොන්දේසියක් සත්‍ය වන තුරු කිසියම් උපදෙස් සමූහයක් නැවත නැවත ක්‍රියාත්මක කිරීම.',
    category: 'Programming',
  },

  // ==========================================
  // Grade 11 Unit 3: Networking
  // ==========================================
  {
    id: 'network',
    termEn: 'Computer Network',
    termSi: 'පරිගණක ජාලය',
    phonetic: 'Kuhm-pyoo-ter Net-werk',
    glossaryNoteEn: 'Two or more autonomous interconnected computers sharing data, applications, and hardware resources.',
    glossaryNoteSi: 'දත්ත සහ සම්පත් බෙදාගැනීම සඳහා එකිනෙක සම්බන්ධ කරන ලද පරිගණක දෙකක් හෝ වැඩි ගණනක්.',
    category: 'Networking',
  },
  {
    id: 'topology',
    termEn: 'Topology',
    termSi: 'ස්ථල විද්‍යාව',
    phonetic: 'Tuh-pah-luh-jee',
    glossaryNoteEn: 'The physical or logical geometric arrangement and layout of nodes and transmission links in a network.',
    glossaryNoteSi: 'ජාලයක පරිගණක සහ සන්නිවේදන මාර්ග එකිනෙක සම්බන්ධ කර ඇති ජ්‍යාමිතික සැකැස්ම.',
    category: 'Networking',
  },
  {
    id: 'star_topology',
    termEn: 'Star Topology',
    termSi: 'තාරකා ස්ථල විද්‍යාව',
    phonetic: 'Star Tuh-pah-luh-jee',
    glossaryNoteEn: 'Network architecture where all individual workstations connect centrally to a hub or switch.',
    glossaryNoteSi: 'සියලුම පරිගණක මධ්‍යම ස්විචයකට හෝ හබ් උපාංගයකට සෘජුව සම්බන්ධ වන ජාල සැකැස්ම.',
    category: 'Networking',
  },
  {
    id: 'lan',
    termEn: 'LAN',
    termSi: 'ප්‍රාදේශීය ජාලය (LAN)',
    phonetic: 'Lan',
    glossaryNoteEn: 'Local Area Network; network constrained within a confined geographic locale like a school or building.',
    glossaryNoteSi: 'පාසලක් හෝ ගොඩනැගිල්ලක් වැනි සීමිත භූගෝලීය ප්‍රදේශයක පිහිටි ජාලය.',
    category: 'Networking',
  },
  {
    id: 'wan',
    termEn: 'WAN',
    termSi: 'පුළුල් ප්‍රදේශ ජාලය (WAN)',
    phonetic: 'Wan',
    glossaryNoteEn: 'Wide Area Network; telecommunications network spanning expansive geographic regions, nations, or continents.',
    glossaryNoteSi: 'රටක් හෝ ලෝකය පුරා විසිරී ඇති විශාල භූගෝලීය ප්‍රදේශයක් ආවරණය වන ජාලය.',
    category: 'Networking',
  },
  {
    id: 'router',
    termEn: 'Router',
    termSi: 'රවුටරය',
    phonetic: 'Row-ter',
    glossaryNoteEn: 'Networking device forwarding data packets across disparate computer networks via optimal routing pathways.',
    glossaryNoteSi: 'වෙනස් ජාල දෙකක් එකිනෙක සම්බන්ධ කරමින් දත්ත පැකට්ටු නිවැරදි මාර්ගයේ යවන උපාංගය.',
    category: 'Networking',
  },
  {
    id: 'switch',
    termEn: 'Switch',
    termSi: 'ස්විචය',
    phonetic: 'Switch',
    glossaryNoteEn: 'Intelligent hardware device using MAC addresses to forward frames solely to the intended recipient device.',
    glossaryNoteSi: 'MAC ලිපින හඳුනාගනිමින් අදාළ ලබන්නාට පමණක් දත්ත යොමුකරන බුද්ධිමත් ජාල උපාංගය.',
    category: 'Networking',
  },
  {
    id: 'ip_address',
    termEn: 'IP Address',
    termSi: 'IP ලිපිනය',
    phonetic: 'I P Uh-dress',
    glossaryNoteEn: 'Unique numerical logical address assigned to every device communicating on a TCP/IP network.',
    glossaryNoteSi: 'ජාලයක සම්බන්ධ වී ඇති සෑම උපාංගයක්ම හඳුනාගැනීමට ලබාදෙන අද්විතීය තාර්කික ලිපිනය.',
    category: 'Networking',
  },

  // ==========================================
  // Grade 11 Unit 5: Security & Ethics
  // ==========================================
  {
    id: 'malware',
    termEn: 'Malware',
    termSi: 'අනිෂ්ට මෘදුකාංග',
    phonetic: 'Mal-wair',
    glossaryNoteEn: 'Malicious software intentionally created to damage, infiltrate, or compromise computer systems.',
    glossaryNoteSi: 'පරිගණක පද්ධතිවලට හානි කිරීමට හෝ දත්ත සොරකම් කිරීමට සාදන ලද හානිකර මෘදුකාංග.',
    category: 'Security',
  },
  {
    id: 'firewall',
    termEn: 'Firewall',
    termSi: 'ගිනිපවුර (Firewall)',
    phonetic: 'Fyre-wall',
    glossaryNoteEn: 'Security barrier monitoring and filtering incoming/outgoing network traffic according to predefined security rules.',
    glossaryNoteSi: 'අනවසර ප්‍රවේශ වැළැක්වීම සඳහා ජාල තදබදය පරීක්ෂා කර පාලනය කරන ආරක්ෂක පවුර.',
    category: 'Security',
  },
  {
    id: 'phishing',
    termEn: 'Phishing',
    termSi: 'ෆිෂිං වංචා',
    phonetic: 'Fish-ing',
    glossaryNoteEn: 'Fraudulent social engineering attempting to trick individuals into disclosing confidential credentials via spoofed messages.',
    glossaryNoteSi: 'විශ්වාසදායක ආයතනයක් ලෙස පෙනී සිටිමින් මුරපද සහ රහස් තොරතුරු ලබාගන්නා වංචා ක්‍රම.',
    category: 'Security',
  },
  {
    id: 'encryption',
    termEn: 'Encryption',
    termSi: 'ගුප්තකේතනය',
    phonetic: 'En-krip-shun',
    glossaryNoteEn: 'Encoding plain readable text into unreadable ciphertext to safeguard data confidentiality in transit and rest.',
    glossaryNoteSi: 'අනවසර පුද්ගලයින්ට කියවිය නොහැකි වන පරිදි දත්ත කේතනය කර ආරක්ෂා කිරීම.',
    category: 'Security',
  },

  // ==========================================
  // Grade 11 Unit 6: ICT in Society
  // ==========================================
  {
    id: 'e_commerce',
    termEn: 'e-Commerce',
    termSi: 'විද්‍යුත් වාණිජ්‍යය',
    phonetic: 'Ee Kahm-ers',
    glossaryNoteEn: 'Buying, selling, and monetary transactions conducted over electronic network platforms.',
    glossaryNoteSi: 'අන්තර්ජාලය සහ ඉලෙක්ට්‍රොනික මාධ්‍ය ඔස්සේ භාණ්ඩ හා සේවා මිලදී ගැනීම සහ විකිණීම.',
    category: 'Society',
  },
  {
    id: 'e_government',
    termEn: 'e-Government',
    termSi: 'විද්‍යුත් රාජ්‍ය සේවා',
    phonetic: 'Ee Guhv-ern-ment',
    glossaryNoteEn: 'Digital delivery of public state administrative services to citizens, businesses, and employees.',
    glossaryNoteSi: 'මහජනතාව සහ ව්‍යාපාර වෙත රජයේ සේවාවන් තොරතුරු තාක්ෂණය ඔස්සේ කඩිනමින් සැපයීම.',
    category: 'Society',
  },
  {
    id: 'digital_divide',
    termEn: 'Digital Divide',
    termSi: 'ඩිජිටල් පරතරය',
    phonetic: 'Dih-jih-tuhl Dih-vyde',
    glossaryNoteEn: 'Socioeconomic inequality in access to and literacy in modern digital communication technologies.',
    glossaryNoteSi: 'තොරතුරු තාක්ෂණ පහසුකම් ලබාගැනීමේ හැකියාව ඇති සහ නැති පුද්ගලයින් අතර පවතින පරතරය.',
    category: 'Society',
  },
  {
    id: 'vacuum_tube',
    termEn: 'Vacuum Tube',
    termSi: 'ශූන්‍ය පයිප්පය',
    phonetic: 'Vak-yoom Toob',
    glossaryNoteEn: 'First generation computer electronic switching device consisting of sealed glass tubes.',
    glossaryNoteSi: 'පළමු පරම්පරාවේ පරිගණකවල පරිපථ සඳහා යොදාගත් වීදුරු කපාට උපාංගය.',
    category: 'Hardware',
  },
  {
    id: 'transistor',
    termEn: 'Transistor',
    termSi: 'ට්‍රාන්සිස්ටරය',
    phonetic: 'Tran-zis-ter',
    glossaryNoteEn: 'Semiconductor device used to amplify or switch electrical signals in second generation computers.',
    glossaryNoteSi: 'දෙවන පරම්පරාවේ පරිගණකවල සංඥා විස්තාරණය සහ ස්විචනය සඳහා යොදාගත් අර්ධ සන්නායක උපාංගය.',
    category: 'Hardware',
  },
  {
    id: 'integrated_circuit',
    termEn: 'Integrated Circuit',
    termSi: 'අනුකලිත පරිපථය',
    phonetic: 'In-tuh-gray-tid Ser-kit',
    glossaryNoteEn: 'A set of electronic circuits on one small flat piece of semiconductor material (IC), defining 3rd generation.',
    glossaryNoteSi: 'තනි අර්ධ සන්නායක චිපයක් මත දහස් ගණනක් ඉලෙක්ට්‍රොනික සංරචක අන්තර්ගත කළ පරිපථය (IC).',
    category: 'Hardware',
  },
  {
    id: 'main_memory',
    termEn: 'Main Memory',
    termSi: 'ප්‍රධාන මතකය',
    phonetic: 'Mayn Mem-er-ee',
    glossaryNoteEn: 'Internal computer memory directly addressable by the CPU, primarily comprising RAM and ROM.',
    glossaryNoteSi: 'මධ්‍ය සැකසුම් ඒකකය (CPU) මඟින් සෘජුවම පරිශීලනය කළ හැකි අභ්‍යන්තර ප්‍රධාන මතකය.',
    category: 'Architecture',
  },
  {
    id: 'primary_memory',
    termEn: 'Primary Memory',
    termSi: 'ප්‍රාථමික මතකය',
    phonetic: 'Pry-mair-ee Mem-er-ee',
    glossaryNoteEn: 'Core memory that holds instructions and data that the processor is actively executing.',
    glossaryNoteSi: 'සැකසෙමින් පවතින වැඩසටහන් හා දත්ත ක්ෂණික ප්‍රයෝජනය සඳහා රඳවා ගන්නා මතකය.',
    category: 'Architecture',
  },
  {
    id: 'secondary_storage',
    termEn: 'Secondary Storage',
    termSi: 'ද්විතීයික ආචයනය',
    phonetic: 'Sek-un-dair-ee Store-ij',
    glossaryNoteEn: 'Non-volatile, high-capacity long-term permanent storage devices such as SSDs, HDDs, and flash drives.',
    glossaryNoteSi: 'විදුලිය විසන්ධි වුවද දත්ත ස්ථිරව සුරැකෙන, ඉහළ ධාරිතාවකින් යුත් ආචයන මාධ්‍ය.',
    category: 'Hardware',
  },
  {
    id: 'virtual_memory',
    termEn: 'Virtual Memory',
    termSi: 'අතථ්‍ය මතකය',
    phonetic: 'Ver-choo-uhl Mem-er-ee',
    glossaryNoteEn: 'Memory management technique that uses secondary storage as an extension of physical RAM.',
    glossaryNoteSi: 'RAM මතකයේ ඉඩ ප්‍රමාණවත් නොවන විට ද්විතීයික ආචයනයේ කොටසක් මතකය ලෙස භාවිත කිරීම.',
    category: 'Operating Systems',
  },
  {
    id: 'protocol',
    termEn: 'Protocol',
    termSi: 'සන්නිවේදන ප්‍රොටෝකෝලය',
    phonetic: 'Pro-toh-kol',
    glossaryNoteEn: 'A standardized set of rules governing the exchange and transmission of data between devices.',
    glossaryNoteSi: 'ජාලයක් තුළ පරිගණක අතර දත්ත සන්නිවේදනය පාලනය කරන සම්මත නීති මාලාව.',
    category: 'Networking',
  },
  {
    id: 'html',
    termEn: 'HTML',
    termSi: 'හයිපර්ටෙක්ස්ට් මාර්ක්අප් භාෂාව',
    phonetic: 'H T M L',
    glossaryNoteEn: 'HyperText Markup Language; standard markup language used to structure web pages and applications.',
    glossaryNoteSi: 'වෙබ් පිටු සැලසුම් කිරීම සහ ව්‍යුහගත කිරීම සඳහා භාවිත කරන සම්මත සළකුණු භාෂාව.',
    category: 'Web Design',
  },
  {
    id: 'bandwidth',
    termEn: 'Bandwidth',
    termSi: 'කලාප පළල',
    phonetic: 'Band-width',
    glossaryNoteEn: 'Maximum data transfer rate of a network communications channel in bits per second (bps).',
    glossaryNoteSi: 'සන්නිවේදන මාධ්‍යයක් ඔස්සේ ඒකක කාලයකදී සම්ප්‍රේෂණය කළ හැකි උපරිම දත්ත ප්‍රමාණය.',
    category: 'Networking',
  },
];

// Build optimized lookup index
const glossaryByEn = new Map<string, TechnicalTermEntry>();
const glossaryBySi = new Map<string, TechnicalTermEntry>();
const glossaryById = new Map<string, TechnicalTermEntry>();

BILINGUAL_GLOSSARY.forEach((entry) => {
  glossaryById.set(entry.id.toLowerCase(), entry);
  glossaryByEn.set(entry.termEn.toLowerCase().trim(), entry);

  // Also index pure term without acronym in parentheses (e.g., 'CPU' from 'Central Processing Unit (CPU)')
  const cleanEn = entry.termEn.replace(/\s*\([^)]*\)/, '').toLowerCase().trim();
  if (cleanEn && cleanEn !== entry.termEn.toLowerCase().trim()) {
    glossaryByEn.set(cleanEn, entry);
  }

  glossaryBySi.set(entry.termSi.toLowerCase().trim(), entry);
  const cleanSi = entry.termSi.replace(/\s*\([^)]*\)/, '').toLowerCase().trim();
  if (cleanSi && cleanSi !== entry.termSi.toLowerCase().trim()) {
    glossaryBySi.set(cleanSi, entry);
  }
});

/**
 * Looks up a glossary entry by English or Sinhala keyword, case-insensitively.
 */
export function lookupGlossaryTerm(term: string): TechnicalTermEntry | undefined {
  if (!term) return undefined;
  const normalized = term.trim().toLowerCase();
  
  // Exact match
  if (glossaryByEn.has(normalized)) return glossaryByEn.get(normalized);
  if (glossaryBySi.has(normalized)) return glossaryBySi.get(normalized);
  if (glossaryById.has(normalized)) return glossaryById.get(normalized);

  // Clean parenthetical annotations if any (e.g. "Input (ආදානය)" -> "input")
  const stripped = normalized.replace(/\s*\([^)]*\)/, '').trim();
  if (stripped && stripped !== normalized) {
    if (glossaryByEn.has(stripped)) return glossaryByEn.get(stripped);
    if (glossaryBySi.has(stripped)) return glossaryBySi.get(stripped);
  }

  // Singular / Plural normalization (e.g. "Transistors" -> "Transistor")
  if (normalized.endsWith('s')) {
    const singular = normalized.slice(0, -1);
    if (glossaryByEn.has(singular)) return glossaryByEn.get(singular);
    if (glossaryById.has(singular)) return glossaryById.get(singular);
  }

  return undefined;
}
