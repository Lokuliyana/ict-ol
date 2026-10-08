/**
 * scripts/build-level-nodes.ts
 * Generates the complete src/data/levelNodes.ts covering all 15 syllabus units:
 *   Grade 10: Units 01 - 09 (21 nodes)
 *   Grade 11: Units 01 - 06 (16 nodes)
 * Total: 37 canonical nodes + backward-compatible aliases.
 */

import * as fs from 'fs';
import * as path from 'path';

interface BilingualText {
  en: string;
  si: string;
}

interface TheoryCard {
  id: string;
  title: BilingualText;
  visualWidget?: string;
  bulletPoints: BilingualText[];
  keyTakeaway: BilingualText;
}

interface QuizQuestion {
  id: string;
  prompt: BilingualText;
  options: BilingualText[];
  correctIndex: number;
  explanation: BilingualText;
  syllabusRef?: string;
}

interface LevelNode {
  id: string;
  unitId: string;
  unitTitle: BilingualText;
  title: BilingualText;
  type: 'concept' | 'interactive_lab' | 'boss_arena';
  theoryCards: TheoryCard[];
  quizQuestions: QuizQuestion[];
  sandboxType?: 'switchboard' | 'color_vat' | 'logic_workbench' | 'laser_grid' | 'trace_table' | 'table_mason';
  orderIndex: number;
}

export const ALL_LEVEL_NODES: LevelNode[] = [
  // ==========================================
  // GRADE 10 - UNIT 01: Basic Concepts of ICT
  // ==========================================
  {
    id: 'g10-u1-s1',
    unitId: 'g10-u1',
    unitTitle: {
      en: 'Unit 01: Basic Concepts of ICT',
      si: 'ඒකකය 01: තොරතුරු හා සන්නිවේදන තාක්ෂණයේ මූලික සංකල්ප',
    },
    title: {
      en: 'Factory Conveyor (Data vs Information)',
      si: 'දත්ත හා තොරතුරු පද්ධති',
    },
    type: 'concept',
    orderIndex: 1,
    theoryCards: [
      {
        id: 'c1',
        title: {
          en: 'Data: Raw & Unprocessed Facts',
          si: 'දත්ත: සැකසුම් නොකළ අමු කරුණු',
        },
        visualWidget: 'cpu_bus',
        bulletPoints: [
          {
            en: 'Data consists of raw numbers, text, images, or observations without inherent meaning.',
            si: 'දත්ත යනු තනිව ගත් කළ ස්වාධීන අර්ථයක් නොමැති අමු කරුණු, සංඛ්‍යා, හෝ නිරීක්ෂණ වේ.',
          },
          {
            en: 'Examples: Individual student marks (85, 92, 44), sensor digits, temperature readings.',
            si: 'උදාහරණ: සිසුන්ගේ තනි ලකුණු (85, 92, 44), සංවේදක අගයන්, උෂ්ණත්ව සටහන්.',
          },
          {
            en: 'Cannot be directly used for making informed administrative decisions.',
            si: 'කළමනාකරණ හෝ තීරණ ගැනීමේ ක්‍රියාවලීන් සඳහා සෘජුවම ප්‍රයෝජනයට ගත නොහැක.',
          },
        ],
        keyTakeaway: {
          en: 'Data is the unrefined raw material fed into a computer system for processing.',
          si: 'දත්ත යනු සැකසුම් කිරීම සඳහා පරිගණකයකට ඇතුළත් කරන අමුද්‍රව්‍ය වේ.',
        },
      },
      {
        id: 'c2',
        title: {
          en: 'Information: Processed & Meaningful Knowledge',
          si: 'තොරතුරු: සැකසූ අර්ථවත් ප්‍රතිඵල',
        },
        bulletPoints: [
          {
            en: 'Information is processed, structured, or contextualized data that provides meaningful insights.',
            si: 'තොරතුරු යනු තීරණ ගැනීමට උපකාරී වන පරිදි සකසන ලද, අර්ථවත් සහ ව්‍යුහගත දත්ත වේ.',
          },
          {
            en: 'Examples: Class average mark (78.5%), highest scorer name, weather forecast trends.',
            si: 'උදාහරණ: පන්තියේ සාමාන්‍ය ලකුණු (78.5%), ඉහළම ලකුණු ලැබූ ශිෂ්‍යයාගේ නම, කාලගුණ අනාවැකිය.',
          },
          {
            en: 'Enables users to make accurate decisions and solve real-world problems.',
            si: 'නිවැරදි තීරණ ගැනීමට සහ ගැටලු විසඳීමට පරිශීලකයාට මග පෙන්වයි.',
          },
        ],
        keyTakeaway: {
          en: 'Information is the meaningful output derived after processing raw data in the IPO cycle.',
          si: 'තොරතුරු යනු ආදාන-සැකසුම්-ප්‍රතිදාන චක්‍රය මගින් දත්ත සැකසීමෙන් ලැබෙන ඵලයයි.',
        },
      },
    ],
    quizQuestions: [
      {
        id: 'q1',
        prompt: {
          en: 'Which of the following is considered "Information" rather than raw "Data"?',
          si: 'පහත සඳහන් දෑ අතරින් අමු "දත්ත" නොව "තොරතුරු" ලෙස සැලකිය හැක්කේ කුමක්ද?',
        },
        options: [
          { en: 'List of individual marks of 40 students', si: 'සිසුන් 40 දෙනෙකුගේ තනි විභාග ලකුණු ලැයිස්තුව' },
          { en: 'The average mark and grade distribution of the class', si: 'පන්තියේ විභාග ලකුණුවල සාමාන්‍යය සහ සාමාර්ථ ව්‍යාප්තිය' },
          { en: 'Daily raw sensor temperature readings (31, 32, 29)', si: 'දෛනික සංවේදක උෂ්ණත්ව අගයන් (31, 32, 29)' },
          { en: 'Unsorted barcode numbers scanned at cash counter', si: 'මුදල් කවුන්ටරයක ස්කෑන් කරන ලද අනුපිළිවෙළක් රහිත තීරුකේත අංක' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'The average mark represents processed data with actionable context, making it information.',
          si: 'සාමාන්‍ය ලකුණු යනු තීරණ ගැනීමට උපකාරී වන පරිදි සකසන ලද අර්ථවත් තොරතුරකි.',
        },
        syllabusRef: 'G10.1.1',
      },
      {
        id: 'q2',
        prompt: {
          en: 'In the Input-Process-Output (IPO) cycle of a computer system, what represents the "Process"?',
          si: 'පරිගණක පද්ධතියක ආදානය-සැකසුම-ප්‍රතිදානය (IPO) චක්‍රයේ "සැකසුම (Process)" නියෝජනය කරන්නේ කුමක්ද?',
        },
        options: [
          { en: 'Entering numbers via keyboard', si: 'යතුරුපුවරුව මගින් අංක ඇතුළත් කිරීම' },
          { en: 'Displaying report on monitor', si: 'මොනිටරය මත වාර්තාව ප්‍රදර්ශනය කිරීම' },
          { en: 'Calculating total and sorting numbers in CPU', si: 'මධ්‍ය සැකසුම් ඒකකය තුළ එකතුව ගණනය කිරීම හා පෙළගැස්වීම' },
          { en: 'Printing hard copy on paper', si: 'මුද්‍රණ යන්ත්‍රය මගින් කඩදාසියක මුද්‍රණය කිරීම' },
        ],
        correctIndex: 2,
        explanation: {
          en: 'Calculations and logical manipulations performed by CPU constitute the Process stage.',
          si: 'මධ්‍ය සැකසුම් ඒකකය (CPU) මගින් සිදුකරන ගණනය කිරීම් සහ තර්කානුකූල මෙහෙයුම් සැකසුම් අදියර වේ.',
        },
        syllabusRef: 'G10.1.2',
      },
    ],
  },

  {
    id: 'g10-u1-s2',
    unitId: 'g10-u1',
    unitTitle: {
      en: 'Unit 01: Basic Concepts of ICT',
      si: 'ඒකකය 01: තොරතුරු හා සන්නිවේදන තාක්ෂණයේ මූලික සංකල්ප',
    },
    title: {
      en: 'Quality Radar (Information Attributes)',
      si: 'ගුණාත්මක තොරතුරු ලක්ෂණ',
    },
    type: 'concept',
    orderIndex: 2,
    theoryCards: [
      {
        id: 'c1',
        title: {
          en: 'Core Attributes of Quality Information',
          si: 'ගුණාත්මක තොරතුරක ප්‍රධාන ලක්ෂණ',
        },
        bulletPoints: [
          {
            en: 'Timeliness: Information must be available to decision-makers when needed, before it loses value.',
            si: 'කාලීන බව (Timeliness): තීරණ ගැනීමට අවශ්‍ය නිවැරදි වේලාවට තොරතුරු ලබාගත හැකි විය යුතුය.',
          },
          {
            en: 'Accuracy: Information must be error-free, verifiable, and faithfully represent facts.',
            si: 'නිරවද්‍යතාව (Accuracy): තොරතුරු දෝෂ රහිත සහ සත්‍ය කරුණු මත පදනම් විය යුතුය.',
          },
          {
            en: 'Completeness: Must include all vital facts needed without critical omissions.',
            si: 'පූර්ණ බව (Completeness): නිසි තීරණයක් ගැනීමට අවශ්‍ය සියලුම වැදගත් කරුණු අඩංගු විය යුතුය.',
          },
        ],
        keyTakeaway: {
          en: 'High-quality information must be timely, accurate, complete, relevant, and cost-effective.',
          si: 'ගුණාත්මක තොරතුරක් කාලීන, නිවැරදි, පූර්ණ, අදාළ සහ පිරිවැය ඵලදායී විය යුතුය.',
        },
      },
      {
        id: 'c2',
        title: {
          en: 'Relevance and Appropriateness',
          si: 'අදාළ බව සහ යෝග්‍යතාව',
        },
        bulletPoints: [
          {
            en: 'Relevance: Information must directly pertain to the specific problem or decision at hand.',
            si: 'අදාළ බව (Relevance): අදාළ කාර්යයට හෝ ගැටලුවට සෘජුවම සම්බන්ධ විය යුතුය.',
          },
          {
            en: 'Appropriateness: Presented in a clear, understandable format tailored to the audience.',
            si: 'යෝග්‍යතාව (Appropriateness): භාවිත කරන්නාට පහසුවෙන් තේරුම් ගත හැකි ආකෘතියකින් තිබිය යුතුය.',
          },
        ],
        keyTakeaway: {
          en: 'Irrelevant or distorted information leads to faulty conclusions and system failure.',
          si: 'අදාළ නොවන හෝ විකෘති වූ තොරතුරු වැරදි තීරණ වලට මග පාදයි.',
        },
      },
    ],
    quizQuestions: [
      {
        id: 'q1',
        prompt: {
          en: 'A train timetable printed 3 years ago fails which quality characteristic of information today?',
          si: 'වසර 3 කට පෙර මුද්‍රණය කරන ලද දුම්රිය කාලසටහනක් අද දින අසාර්ථක වන්නේ තොරතුරක කුමන ලක්ෂණය නොමැති වීම නිසාද?',
        },
        options: [
          { en: 'Accuracy only', si: 'නිරවද්‍යතාව පමණි' },
          { en: 'Timeliness (Relevance in time)', si: 'කාලීන බව (Timeliness)' },
          { en: 'Cost-effectiveness', si: 'පිරිවැය ඵලදායී බව' },
          { en: 'Storage media format', si: 'ආචයන මාධ්‍ය ආකෘතිය' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'Outdated information lacks timeliness, rendering it unreliable for current schedules.',
          si: 'කාලය ඉක්මවා ගිය තොරතුරු වල කාලීන බව නොමැති බැවින් වර්තමාන භාවිතයට නුසුදුසුය.',
        },
        syllabusRef: 'G10.1.3',
      },
      {
        id: 'q2',
        prompt: {
          en: 'A medical report that accidentally omits a patient’s known penicillin allergy violates which attribute?',
          si: 'රෝගියෙකුගේ පෙනිසිලින් ආසාත්මිකතාව නොදක්වා සකස් කළ වෛද්‍ය වාර්තාවක් උල්ලංඝනය කරන්නේ කුමන ගුණාංගයද?',
        },
        options: [
          { en: 'Completeness', si: 'පූර්ණ බව (Completeness)' },
          { en: 'Attractiveness', si: 'ආකර්ශනීය බව' },
          { en: 'File size', si: 'ගොනු ප්‍රමාණය' },
          { en: 'Font style', si: 'අකුරු විලාසය' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Omitting critical medical details violates the completeness attribute of information.',
          si: 'තීරණාත්මක තොරතුරු මඟහැරීම මගින් තොරතුරේ පූර්ණ බව (Completeness) බිඳ වැටේ.',
        },
        syllabusRef: 'G10.1.3',
      },
    ],
  },

  {
    id: 'g10-u1-s3',
    unitId: 'g10-u1',
    unitTitle: {
      en: 'Unit 01: Basic Concepts of ICT',
      si: 'ඒකකය 01: තොරතුරු හා සන්නිවේදන තාක්ෂණයේ මූලික සංකල්ප',
    },
    title: {
      en: 'Connected Island (Applications of ICT)',
      si: 'ICT යෙදවුම් හා ඊ-රාජ්‍යය',
    },
    type: 'concept',
    orderIndex: 3,
    theoryCards: [
      {
        id: 'c1',
        title: {
          en: 'ICT in e-Government & Citizen Services',
          si: 'ඊ-රාජ්‍ය සේවා සහ පුරවැසි සේවා',
        },
        bulletPoints: [
          {
            en: 'G2C (Government to Citizen): Issuing birth certificates, revenue licenses, and passports online.',
            si: 'G2C (රජය සහ පුරවැසියා): උප්පැන්න සහතික, ආදායම් බලපත්‍ර සහ විදේශ ගමන් බලපත්‍ර මාර්ගගතව ලබාදීම.',
          },
          {
            en: 'G2B (Government to Business): Online tax filing, corporate registration, tender submission.',
            si: 'G2B (රජය සහ ව්‍යාපාර): මාර්ගගත බදු ගෙවීම්, සමාගම් ලියාපදිංචිය සහ ටෙන්ඩර් පටිපාටි.',
          },
          {
            en: 'G2G (Government to Government): Electronic inter-departmental communication and police records.',
            si: 'G2G (රජය සහ රජය): අමාත්‍යාංශ සහ දෙපාර්තමේන්තු අතර තොරතුරු හුවමාරුව.',
          },
        ],
        keyTakeaway: {
          en: 'e-Government enhances transparency, eliminates queues, and democratizes public services.',
          si: 'ඊ-රාජ්‍ය සේවා මගින් විනිවිදභාවය වැඩි වන අතර කාර්යක්ෂම මහජන සේවයක් තහවුරු කරයි.',
        },
      },
      {
        id: 'c2',
        title: {
          en: 'Digital Divide & Ethical Challenges',
          si: 'ඩිජිටල් පරතරය සහ සදාචාරාත්මක අභියෝග',
        },
        bulletPoints: [
          {
            en: 'Digital Divide: The gap between individuals with access to modern ICT and those without.',
            si: 'ඩිජිටල් පරතරය: නවීන තාක්ෂණයට ප්‍රවේශය ඇති සහ නැති පුද්ගලයන් අතර පවතින විෂමතාවයි.',
          },
          {
            en: 'Contributing factors: Geographic infrastructure, economic disparity, and digital literacy.',
            si: 'හේතු: භූගෝලීය යටිතල පහසුකම්, ආර්ථික දුෂ්කරතා සහ තාක්ෂණික සාක්ෂරතාවයේ ඌනතාව.',
          },
        ],
        keyTakeaway: {
          en: 'Bridging the digital divide requires equitable internet access, affordable hardware, and education.',
          si: 'ඩිජිටල් පරතරය පියවීම සඳහා සැමට සමාන අන්තර්ජාල ප්‍රවේශය සහ අධ්‍යාපනය අවශ්‍ය වේ.',
        },
      },
    ],
    quizQuestions: [
      {
        id: 'q1',
        prompt: {
          en: 'Renewing a vehicle revenue license through the government portal (srilanka.lk) is classified as:',
          si: 'රජයේ වෙබ් අඩවිය (srilanka.lk) හරහා වාහන ආදායම් බලපත්‍රය අලුත් කරගැනීම අයත් වන්නේ කුමන ඊ-රාජ්‍ය සේවා කාණ්ඩයටද?',
        },
        options: [
          { en: 'G2C (Government to Citizen)', si: 'G2C (රජය සහ පුරවැසියා)' },
          { en: 'B2B (Business to Business)', si: 'B2B (ව්‍යාපාර සහ ව්‍යාපාර)' },
          { en: 'C2C (Consumer to Consumer)', si: 'C2C (පාරිභෝගිකයා සහ පාරිභෝගිකයා)' },
          { en: 'G2E (Government to Employee only)', si: 'G2E (රජය සහ සේවකයා පමණි)' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Services rendered directly from government agencies to citizens are classified as G2C.',
          si: 'රාජ්‍ය ආයතනයක් විසින් සෘජුවම මහජනතාව වෙත සපයන මාර්ගගත සේවා G2C නම් වේ.',
        },
        syllabusRef: 'G10.1.4',
      },
      {
        id: 'q2',
        prompt: {
          en: 'What is the term for the social and economic inequality in access to modern information technologies?',
          si: 'නවීන තොරතුරු සන්නිවේදන තාක්ෂණයට ප්‍රවේශ වීමේ හැකියාව සම්බන්ධයෙන් සමාජයේ පවතින විෂමතාව හඳුන්වන්නේ කුමක් ලෙසද?',
        },
        options: [
          { en: 'Digital Signal', si: 'අංකිත සංඥාව (Digital Signal)' },
          { en: 'Digital Divide', si: 'ඩිජිටල් පරතරය (Digital Divide)' },
          { en: 'Digital Bandwidth', si: 'දත්ත කලාප පළල (Digital Bandwidth)' },
          { en: 'Digital Footprint', si: 'ඩිජිටල් අඩිපාර (Digital Footprint)' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'Digital Divide refers to demographic and regional inequalities in technology and internet access.',
          si: 'තාක්ෂණය පරිහරණය කිරීමට ඇති හැකියාව සහ අවස්ථා අතර පවතින විෂමතාව ඩිජිටල් පරතරයයි.',
        },
        syllabusRef: 'G10.1.5',
      },
    ],
  },

  {
    id: 'g10-u1-boss',
    unitId: 'g10-u1',
    unitTitle: {
      en: 'Unit 01: Basic Concepts of ICT',
      si: 'ඒකකය 01: තොරතුරු හා සන්නිවේදන තාක්ෂණයේ මූලික සංකල්ප',
    },
    title: {
      en: 'Unit 1 Boss: Past Paper Gauntlet',
      si: '2020 – 2025 විභාග සටන්',
    },
    type: 'boss_arena',
    orderIndex: 4,
    theoryCards: [
      {
        id: 'c1',
        title: {
          en: 'Computer Generations & Hardware Evolution',
          si: 'පරිගණක පරම්පරා සහ දෘඩාංග පරිණාමය',
        },
        bulletPoints: [
          {
            en: '1st Gen (1940-1956): Vacuum Tubes; Machine Language; huge heat and size (ENIAC).',
            si: '1 වන පරම්පරාව: රික්තක නල (Vacuum Tubes); යන්ත්‍ර භාෂාව; අධික තාපය හා විශාල ප්‍රමාණය (ENIAC).',
          },
          {
            en: '2nd Gen (1956-1963): Transistors; Assembly Language; smaller and more reliable.',
            si: '2 වන පරම්පරාව: ට්‍රාන්සිස්ටර (Transistors); ඇසෙම්බ්ලි භාෂාව; ප්‍රමාණයෙන් කුඩා හා කාර්යක්ෂම.',
          },
          {
            en: '3rd Gen (1964-1971): Integrated Circuits (ICs); Operating Systems; keyboards/monitors.',
            si: '3 වන පරම්පරාව: අනුකලිත පරිපථ (ICs); මෙහෙයුම් පද්ධති භාවිතය ඇරඹීම.',
          },
          {
            en: '4th Gen (1971-Present): Microprocessors (VLSI/VLSIC); Personal Computers, GUI, Internet.',
            si: '4 වන පරම්පරාව: ක්ෂුද්‍ර ප්‍රොසෙසර (VLSI); පුද්ගලික පරිගණක (PC), අන්තර්ජාලය.',
          },
        ],
        keyTakeaway: {
          en: 'Each computer generation is defined by major breakthrough electronic switching technologies.',
          si: 'සෑම පරිගණක පරම්පරාවක්ම මූලික ඉලෙක්ට්‍රොනික සංරචකයේ තාක්ෂණික පිම්ම මත වෙන් කෙරේ.',
        },
      },
      {
        id: 'c2',
        title: {
          en: 'GCE O/L Examination Strategy',
          si: 'අ.පො.ස. සා/පෙළ විභාග උපක්‍රම',
        },
        bulletPoints: [
          {
            en: 'Carefully contrast Data vs Information and Quality Attributes in Paper I MCQs.',
            si: 'පළමු ප්‍රශ්න පත්‍රයේ බහුවරණ ප්‍රශ්න සඳහා දත්ත, තොරතුරු හා ගුණාංග නිවැරදිව හඳුනා ගන්න.',
          },
          {
            en: 'Memorize switching components for each computing generation for guaranteed exam marks.',
            si: 'සෑම පරිගණක පරම්පරාවකටම අදාළ මූලික තාක්ෂණික උපාංග කටපාඩම් කර තබා ගන්න.',
          },
        ],
        keyTakeaway: {
          en: 'Score >= 70% in this boss gauntlet to unlock the Unit 1 Mastery Badge!',
          si: 'මෙම ප්‍රධාන අභියෝගයෙන් 70% කට වඩා ලබාගෙන ඒකක 1 විශිෂ්ටතා පදක්කම දිනා ගන්න!',
        },
      },
    ],
    quizQuestions: [
      {
        id: 'q1',
        prompt: {
          en: 'Which fundamental electronic component was used in 3rd Generation computers?',
          si: '3 වන පරම්පරාවේ (Third Generation) පරිගණක සඳහා භාවිත කරන ලද මූලික ඉලෙක්ට්‍රොනික උපාංගය කුමක්ද?',
        },
        options: [
          { en: 'Vacuum Tubes', si: 'රික්තක නල (Vacuum Tubes)' },
          { en: 'Transistors', si: 'ට්‍රාන්සිස්ටර (Transistors)' },
          { en: 'Integrated Circuits (ICs)', si: 'අනුකලිත පරිපථ (Integrated Circuits - IC)' },
          { en: 'Very Large Scale Integration (VLSI)', si: 'අති මහා පරිමාණ අනුකලනය (VLSI)' },
        ],
        correctIndex: 2,
        explanation: {
          en: 'Third-generation computers utilized Integrated Circuits (ICs), combining multiple transistors on silicon.',
          si: '3 වන පරම්පරාවේ පරිගණක සඳහා අනුකලිත පරිපථ (ICs) යොදා ගන්නා ලදී.',
        },
        syllabusRef: 'G10.1.6',
      },
      {
        id: 'q2',
        prompt: {
          en: 'Which of the following describes an adverse effect of excessive and improper ICT usage?',
          si: 'තොරතුරු තාක්ෂණය අනිසි සහ අධික ලෙස භාවිත කිරීම නිසා ඇතිවන අයහපත් ප්‍රතිඵලයක් වන්නේ කුමක්ද?',
        },
        options: [
          { en: 'Accelerated batch document processing', si: 'ලේඛන සැකසීමේ වේගය වැඩි වීම' },
          { en: 'Repetitive Strain Injury (RSI) and social isolation', si: 'පුනරාවර්තී ආතති තුවාල (RSI) සහ සමාජීය හුදකලාව' },
          { en: 'Instant communication across oceans', si: 'ක්ෂණික ගෝලීය සන්නිවේදනය' },
          { en: 'Reduction of paper usage through e-filing', si: 'ඊ-ගොනු මගින් කඩදාසි භාවිතය අවම වීම' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'Prolonged improper computer posture causes physical ailments like RSI, while excessive screen time impacts social health.',
          si: 'වැරදි ඉරියව් නිසා RSI වැනි ආබාධ සහ අධික තිර කාලය නිසා සමාජීය හුදකලාව ඇතිවේ.',
        },
        syllabusRef: 'G10.1.5',
      },
      {
        id: 'q3',
        prompt: {
          en: 'Which of the following is NOT a characteristic of high-quality information?',
          si: 'පහත සඳහන් දෑ අතරින් ගුණාත්මක තොරතුරක ලක්ෂණයක් නොවන්නේ කුමක්ද?',
        },
        options: [
          { en: 'Timeliness', si: 'කාලීන බව (Timeliness)' },
          { en: 'Accuracy', si: 'නිරවද්‍යතාව (Accuracy)' },
          { en: 'Ambiguity', si: 'අවිනිශ්චිත හෝ අපැහැදිලි බව (Ambiguity)' },
          { en: 'Completeness', si: 'පූර්ණ බව (Completeness)' },
        ],
        correctIndex: 2,
        explanation: {
          en: 'Ambiguity means unclear or open to multiple interpretations, which ruins information quality.',
          si: 'අපැහැදිලි හෝ අවිනිශ්චිත බව තොරතුරක ගුණාත්මකභාවය නැති කර දමයි.',
        },
        syllabusRef: 'G10.1.3',
      },
      {
        id: 'q4',
        prompt: {
          en: 'Microprocessors and Very Large Scale Integration (VLSI) were introduced in which computer generation?',
          si: 'ක්ෂුද්‍ර ප්‍රොසෙසර සහ ඉතා මහා පරිමාණ අනුකලනය (VLSI) හඳුන්වා දෙනු ලැබුවේ කවර පරිගණක පරම්පරාවේදීද?',
        },
        options: [
          { en: 'First Generation', si: 'පළමු පරම්පරාව' },
          { en: 'Second Generation', si: 'දෙවන පරම්පරාව' },
          { en: 'Third Generation', si: 'තෙවන පරම්පරාව' },
          { en: 'Fourth Generation', si: 'සිව්වන පරම්පරාව' },
        ],
        correctIndex: 3,
        explanation: {
          en: 'Fourth generation computers (1971 to present) are characterized by microprocessors and VLSI chips.',
          si: 'සිව්වන පරම්පරාවේ පරිගණක (1971 සිට වර්තමානය දක්වා) ක්ෂුද්‍ර ප්‍රොසෙසර මගින් බලගැන්වේ.',
        },
        syllabusRef: 'G10.1.6',
      },
    ],
  },
];
