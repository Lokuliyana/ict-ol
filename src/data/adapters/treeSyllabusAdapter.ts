/**
 * src/data/adapters/treeSyllabusAdapter.ts
 * Tree-Down Living Syllabus Adapter & 3-Tier Recall Generator
 * Phase 1 Implementation: Tree-Down Unified Learning Engine
 *
 * Implements:
 * 1. 4-Tier Tree Hierarchy: Root (Depth 0) -> Branch (Depth 1) -> Leaf (Depth 2) -> Checkpoint Gate (Depth 3)
 * 2. 3-Tier Active Recall Flashcard Synthesis:
 *    - Tier 1: Verbatim glossary (Unit 1 via LESSON_01_DATA)
 *    - Tier 2: LEVEL_NODES micro-cards (Units 2-15 via levelNodes.ts)
 *    - Tier 3: Subtopic text blocks & highlight terms (ALL_LESSONS_DATA)
 * 3. Contextual Tactile Widget mapping without nested Russian doll tabs (hideInternalTabs: true)
 * 4. Verification Checkpoint MCQs extraction from MASTER_QUESTION_BANKS
 */

import { CURRICULUM_DATA } from '../curriculum';
import { LESSON_01_DATA, GlossaryTerm } from '../lesson01Data';
import { ALL_LESSONS_DATA, GeneralLessonData } from '../allLessonsData';
import { LEVEL_NODES } from '../levelNodes';
import { MASTER_QUESTION_BANKS } from '../questionBanks/masterBanks';
import {
  ActiveRecallCard,
  CheckpointOption,
  CheckpointQuestion,
  ConceptLeafPayload,
  MentalModelAnalogy,
  SyllabusTreeNode,
  TactileWidgetConfig,
  TheoryBite,
  UnitTreeManifest,
} from '../../types/treeSyllabus';

// ============================================================================
// CURATED RECALL DATA REPOSITORY (Department Keywords, Mnemonics & Exam Traps)
// ============================================================================

interface CuratedCardMetadata {
  targetUnitId?: string;
  departmentKeywordsEn: string[];
  departmentKeywordsSi: string[];
  mnemonicEn: string;
  mnemonicSi: string;
  examTrapWarningEn: string;
  examTrapWarningSi: string;
  analogyEn?: string;
  analogySi?: string;
  tactileWidget?: TactileWidgetConfig;
}

const CURATED_RECALL_REGISTRY: Record<string, CuratedCardMetadata> = {
  // UNIT 1: Basic Concepts of ICT
  data: {
    targetUnitId: 'g10-u1',
    departmentKeywordsEn: ['Raw facts', 'Unprocessed figures', 'No inherent meaning', 'Input material'],
    departmentKeywordsSi: ['අමු කරුණු', 'සැකසුම් නොකළ', 'ස්වාධීන අර්ථයක් නැත', 'ආදාන අමුද්‍රව්‍ය'],
    mnemonicEn: 'Data is raw flour; Information is baked bread.',
    mnemonicSi: 'දත්ත යනු අමු පිටි ය; තොරතුරු යනු පිළිස්සූ පාන් ය.',
    examTrapWarningEn: 'Do not confuse with Information; data alone cannot be used for administrative decision making!',
    examTrapWarningSi: 'තොරතුරු සමඟ පටලවා නොගන්න; තීරණ ගැනීම සඳහා දත්ත තනිව භාවිත කළ නොහැක!',
    analogyEn: 'Unorganized raw numbers on a loose paper (e.g. 85, 92) before knowing what subject or student they belong to.',
    analogySi: 'විෂය හෝ ශිෂ්‍යයා නොදැන ලියූ ලකුණු (85, 92) වැනි අමු කරුණු.',
    tactileWidget: {
      widgetKey: 'factory_conveyor',
      titleEn: 'Data Classifier Hopper',
      titleSi: 'දත්ත වර්ගීකරණ පද්ධතිය',
      hideInternalTabs: true,
    },
  },
  information: {
    targetUnitId: 'g10-u1',
    departmentKeywordsEn: ['Processed data', 'Meaningful context', 'Decision making', 'Structured knowledge'],
    departmentKeywordsSi: ['සැකසූ දත්ත', 'අර්ථවත් සන්දර්භය', 'තීරණ ගැනීම', 'ව්‍යුහගත දැනුම'],
    mnemonicEn: 'Information Informs decisions; raw data does not.',
    mnemonicSi: 'තොරතුරු මඟින් තීරණ තහවුරු කරයි; දත්තවලින් නොවේ.',
    examTrapWarningEn: 'Always state that information is the result of data processing, not just isolated inputs.',
    examTrapWarningSi: 'තොරතුරු යනු දත්ත සැකසීමේ ප්‍රතිඵලයක් බව නිතරම මතක තබා ගන්න.',
    analogyEn: 'A finalized student report card displaying Total, Average, and Term Rank to decide awards.',
    analogySi: 'ත්‍යාග තීරණය කිරීම සඳහා සකස් කළ මුළු ලකුණු, සාමාන්‍යය සහ ස්ථානය සහිත ප්‍රගති වාර්තාව.',
    tactileWidget: {
      widgetKey: 'quality_radar',
      titleEn: 'Information Quality Evaluator',
      titleSi: 'තොරතුරු ගුණාත්මකතා ඇගයීම',
      hideInternalTabs: true,
    },
  },
  'information system': {
    targetUnitId: 'g10-u1',
    departmentKeywordsEn: ['Input-Process-Output-Store', 'Interrelated components', 'System objective', 'Feedback loop'],
    departmentKeywordsSi: ['ආදානය-සැකසීම-ප්‍රතිදානය-ආචයනය', 'එකිනෙක සම්බන්ධ සංරචක', 'පද්ධති අරමුණ', 'ප්‍රතිපෝෂණය'],
    mnemonicEn: 'IPOS: Input, Process, Output, Store keeps the system running.',
    mnemonicSi: 'ආ-සැ-ප්‍ර-ආ: ආදානය, සැකසීම, ප්‍රතිදානය, ආචයනය.',
    examTrapWarningEn: 'A system must have a specific objective and interconnected parts; standalone disconnected tools are not systems.',
    examTrapWarningSi: 'පද්ධතියකට නිශ්චිත අරමුණක් සහ එකිනෙක සම්බන්ධ වූ කොටස් තිබිය යුතුය.',
    tactileWidget: {
      widgetKey: 'system_diagram',
      titleEn: 'IPO System Architecture',
      titleSi: 'ආදාන-සැකසුම්-ප්‍රතිදාන පද්ධති සැකැස්ම',
      hideInternalTabs: true,
    },
  },
  relevancy: {
    targetUnitId: 'g10-u1',
    departmentKeywordsEn: ['Decision alignment', 'Applicable to requirement', 'Concise & pertinent', 'No excess fluff'],
    departmentKeywordsSi: ['අවශ්‍යතාවට අදාළ', 'කාලීන තීරණ ගැලපීම', 'සාරවත් සහ සුදුසු', 'අනවශ්‍ය විස්තර රහිත'],
    mnemonicEn: 'Relevant data answers the exact question, nothing extra.',
    mnemonicSi: 'අදාළ බව යනු නිශ්චිත ප්‍රශ්නයට පමණක් පිළිතුරු සපයන නිරවද්‍යතාවයි.',
    examTrapWarningEn: 'Giving accurate but unnecessary old details violates relevancy in O/L marking schemes.',
    examTrapWarningSi: 'නිරවද්‍ය වුවත් අනවශ්‍ය පැරණි විස්තර ලබාදීම අදාළ බව යන ගුණාංගය උල්ලංඝනය කරයි.',
  },
  telemedicine: {
    targetUnitId: 'g10-u1',
    departmentKeywordsEn: ['Remote healthcare', 'Telecommunications & ICT', 'Specialist consultation', 'Geographic barriers'],
    departmentKeywordsSi: ['දුරස්ථ සෞඛ්‍ය සේවා', 'විදුලි සංදේශ හා ICT', 'විශේෂඥ වෛද්‍ය උපදෙස්', 'දුරස්ථ බාධක ඉවත් කිරීම'],
    mnemonicEn: 'Tele = Distance, Medicine = Cure: Curing patients from afar.',
    mnemonicSi: 'ටෙලි = දුර, මෙඩිසින් = වෛද්‍ය: දුර සිට රෝගීන්ට ප්‍රතිකාර කිරීම.',
    examTrapWarningEn: 'Telemedicine strictly requires ICT transmission channels; standard in-person clinics are not telemedicine.',
    examTrapWarningSi: 'ටෙලිමෙඩිසින් සඳහා ICT සන්නිවේදන මාධ්‍ය අත්‍යවශ්‍ය වේ.',
  },
  'learning management system': {
    targetUnitId: 'g10-u1',
    departmentKeywordsEn: ['Educational administration', 'Course tracking & materials', 'Student assessment', 'Discussion forums'],
    departmentKeywordsSi: ['මාර්ගගත ඉගෙනුම් කළමනාකරණය', 'පාඨමාලා හා සටහන්', 'ශිෂ්‍ය ඇගයීම්', 'සංසද'],
    mnemonicEn: 'LMS: Learn, Manage, Succeed.',
    mnemonicSi: 'LMS: ඉගෙන ගන්න, කළමනාකරණය කරන්න, ජයගන්න.',
    examTrapWarningEn: 'An LMS is a complete management platform (like Moodle), not just a video conferencing tool like Zoom.',
    examTrapWarningSi: 'LMS යනු සම්පූර්ණ කළමනාකරණ මෘදුකාංගයකි (Moodle වැනි), හුදෙක් Zoom වැනි වීඩියෝ මෙවලමක් පමණක් නොවේ.',
  },
  'analytical engine': {
    targetUnitId: 'g10-u1',
    departmentKeywordsEn: ['Charles Babbage (1837)', 'Mechanical general-purpose computer', 'Father of Computing', 'IPOS architecture'],
    departmentKeywordsSi: ['චාල්ස් බැබේජ් (1837)', 'පොදු කාර්ය යාන්ත්‍රික පරිගණකය', 'පරිගණකයේ පියා', 'ආදාන-සැකසුම්-ප්‍රතිදාන-ආචයන සැකැස්ම'],
    mnemonicEn: 'Babbage Built the Blueprint for all modern digital computers.',
    mnemonicSi: 'බැබේජ් විසින් නවීන පරිගණක සැකැස්මේ මුල් සැලැස්ම තැබුවේය.',
    examTrapWarningEn: 'Charles Babbage designed the Analytical Engine, but Ada Lovelace was the first programmer.',
    examTrapWarningSi: 'චාල්ස් බැබේජ් විශ්ලේෂණ එන්ජිම නිර්මාණය කළ නමුත් ප්‍රථම ක්‍රමලේඛිකාව වූයේ ඒඩා ලව්ලේස් ය.',
    tactileWidget: {
      widgetKey: 'timeline_slider',
      titleEn: 'Computer Evolution Timeline',
      titleSi: 'පරිගණක පරිණාම කාලරේඛාව',
      defaultSubMode: 'pioneers',
      hideInternalTabs: true,
    },
  },

  // UNIT 2: Computer System
  'core definition & ipos functions': {
    targetUnitId: 'g10-u2',
    departmentKeywordsEn: ['Electronic device', 'Input', 'Processing', 'Output', 'Storage', 'IPOS'],
    departmentKeywordsSi: ['ඉලෙක්ට්‍රොනික උපාංගය', 'ආදානය', 'සැකසීම', 'ප්‍රතිදානය', 'ආචයනය'],
    mnemonicEn: 'IPOS: Input data, Process in CPU, Output information, Store in memory.',
    mnemonicSi: 'ආ-සැ-ප්‍ර-ආ: ආදානය, සැකසීම, ප්‍රතිදානය, ආචයනය.',
    examTrapWarningEn: 'Data becomes information only after processing; storage preserves both raw data and processed results.',
    examTrapWarningSi: 'තොරතුරු බවට පත්වන්නේ දත්ත සැකසීමෙන් පසුව පමණක් බව මතක තබා ගන්න.',
    analogyEn: 'A commercial bakery: Raw flour (Data) enters oven (Processing), delicious bread (Output) emerges, and pantry stores extra stock (Storage).',
    analogySi: 'බේකරියක්: අමු පිටි (දත්ත) උදුනට ඇතුළු වී (සැකසීම), පාන් (තොරතුරු) ලැබෙන අතර අතිරික්තය ගබඩා කර (ආචයනය) තබයි.',
    tactileWidget: {
      widgetKey: 'system_diagram',
      titleEn: 'IPO System Architecture',
      titleSi: 'ආදාන-සැකසුම්-ප්‍රතිදාන පද්ධති සැකැස්ම',
      hideInternalTabs: true,
    },
  },
  'characteristics of a computer': {
    targetUnitId: 'g10-u2',
    departmentKeywordsEn: ['Speed (Millions of instructions)', 'Accuracy (GIGO)', 'Diligence (No fatigue 24/7)', 'Versatility (Multi-purpose)', 'Storage & Retrieval'],
    departmentKeywordsSi: ['වේගය (උපදෙස් මිලියන ගණනක්)', 'නිරවද්‍යතාව (GIGO)', 'නොපසුබට බව (වෙහෙසක් නැත)', 'බහුකාර්ය බව', 'සුරැකීම හා ලබා ගැනීම'],
    mnemonicEn: 'GIGO: Garbage In, Garbage Out. A computer never tires and never makes calculation errors on its own.',
    mnemonicSi: 'GIGO: කුණු ඇතුළත් කළ විට කුණු ලැබේ. පරිගණකය තනිව ගණනය කිරීම් වැරදි නොකරයි.',
    examTrapWarningEn: 'Errors in computer outputs are almost exclusively due to flawed human input (GIGO), not machine error.',
    examTrapWarningSi: 'පරිගණක දෝෂ ඇතිවන්නේ මිනිස් ආදානයේ වරදින් (GIGO) බව මතක තබා ගන්න.',
    analogyEn: 'An indefatigable robotic calculator that works 24 hours without blinking, calculating billions of operations with mathematical perfection.',
    analogySi: 'වෙහෙසක් නැතිව පැය 24 පුරා ක්‍රියා කරන, ගණනය කිරීම් බිලියන ගණනක් නිවැරදිව කරන රොබෝ ගණකයක්.',
  },
  'classification overview': {
    targetUnitId: 'g10-u2',
    departmentKeywordsEn: ['Physical Size', 'Processing Power', 'Signal Technology', 'Operating Principles'],
    departmentKeywordsSi: ['භෞතික ප්‍රමාණය', 'සැකසුම් බලය', 'සංඥා තාක්ෂණය', 'ක්‍රියාකාරී මූලධර්ම'],
    mnemonicEn: 'Classify by Size (Super to Micro) and by Signal (Analog, Digital, Hybrid).',
    mnemonicSi: 'ප්‍රමාණය අනුව (සුපිරි සිට ක්ෂුද්‍ර දක්වා) සහ සංඥා අනුව (ප්‍රතිසම, සංඛ්‍යාංක, මිශ්‍ර).',
    examTrapWarningEn: 'Do not confuse classification by size with classification by operating technology.',
    examTrapWarningSi: 'ප්‍රමාණය අනුව වර්ගීකරණය සහ නිර්මාණ තාක්ෂණය අනුව වර්ගීකරණය පටලවා නොගන්න.',
    analogyEn: 'Organizing vehicles: Classifying by passenger capacity (Bus vs Bicycle) vs fuel type (Electric vs Gasoline).',
    analogySi: 'වාහන වර්ගීකරණය කිරීම වැනි ය: ප්‍රමාණය අනුව (බස් රථය vs පාපැදිය) සහ ධාවන තාක්ෂණය අනුව (විදුලි vs ඉන්ධන).',
  },
  'classification by physical size': {
    targetUnitId: 'g10-u2',
    departmentKeywordsEn: ['Supercomputer (Scientific, NASA)', 'Mainframe (Banking, Terminals)', 'Minicomputer (Departmental)', 'Microcomputer (Desktop, Laptop, PC)'],
    departmentKeywordsSi: ['සුපිරි පරිගණක (NASA, විද්‍යාත්මක)', 'මහා පරිගණක (බැංකු, පර්යන්ත)', 'මධ්‍ය පරිගණක', 'ක්ෂුද්‍ර පරිගණක (Desktop, Laptop)'],
    mnemonicEn: 'Super > Mainframe > Mini > Micro (From room-sized titans to your palm).',
    mnemonicSi: 'සුපිරි > මහා > මධ්‍ය > ක්ෂුද්‍ර (විශාලතම සිට අතේ ගෙන යා හැකි කුඩාම දක්වා).',
    examTrapWarningEn: 'Mainframe computers connect thousands of simultaneous terminals for banking; supercomputers focus on raw computational speed for single massive problems.',
    examTrapWarningSi: 'මහා පරිගණක පර්යන්ත දහස් ගණනක් සම්බන්ධ කර වාණිජ බැංකු වල භාවිත වන අතර, සුපිරි පරිගණක විද්‍යාත්මක ගණනය කිරීම් සඳහා භාවිත වේ.',
    analogyEn: 'Supercomputer = Space rocket; Mainframe = Commercial jumbo jet carrying thousands; Microcomputer = Personal family car.',
    analogySi: 'සුපිරි පරිගණකය = අභ්‍යවකාශ රොකට්ටුවක්; මහා පරිගණකය = දහස් ගණනක් ගෙනයන ගුවන් යානයක්; ක්ෂුද්‍ර පරිගණකය = පෞද්ගලික මෝටර් රථයක්.',
  },
  'classification by technology': {
    targetUnitId: 'g10-u2',
    departmentKeywordsEn: ['Analog (Continuous signals, Speedometer)', 'Digital (Discrete binary 0 and 1)', 'Hybrid (Analog + Digital, Hospital ECG)'],
    departmentKeywordsSi: ['ප්‍රතිසම (අඛණ්ඩ සංඥා, වේගමාපකය)', 'සංඛ්‍යාංක (විවික්ත 0 සහ 1)', 'මිශ්‍ර (ප්‍රතිසම + සංඛ්‍යාංක, ECG යන්ත්‍රය)'],
    mnemonicEn: 'Analog waves flow smooth; Digital steps binary 0-1; Hybrid joins both in the hospital ECG.',
    mnemonicSi: 'ප්‍රතිසම තරංග අඛණ්ඩයි; සංඛ්‍යාංක 0 සහ 1 පියවරයි; ECG යන්ත්‍රය මේ දෙකේම මිශ්‍රණයයි.',
    examTrapWarningEn: 'Hospital ECG machines are HYBRID computers because they read analog heartbeat signals, convert to digital, and print graphs.',
    examTrapWarningSi: 'රෝහල්වල ECG යන්ත්‍රය මිශ්‍ර (Hybrid) පරිගණකයකි; හෘදයේ ප්‍රතිසම සංඥා ඩිජිටල් අගයන් බවට හරවා ප්‍රස්ථාර මුද්‍රණය කරයි.',
    analogyEn: 'Analog is a smooth wheelchair ramp; Digital is a staircase of separate steps; Hybrid is an escalator with step sensors.',
    analogySi: 'ප්‍රතිසම යනු සිනිඳු බෑවුම් මාවතකි; සංඛ්‍යාංක යනු වෙනම පඩිපෙළකි; මිශ්‍ර යනු සෙන්සර් සහිත විදුලි සෝපානයකි.',
  },
  'von neumann architecture': {
    targetUnitId: 'g10-u2',
    departmentKeywordsEn: ['John Von Neumann (1945)', 'Stored-Program Concept', 'Primary Memory shared for data & instructions', 'Dotted line: Data flow', 'Solid line: Control signals'],
    departmentKeywordsSi: ['ජෝන් වොන් නියුමන්', 'ගබඩා කළ වැඩසටහන් සංකල්පය', 'කැඩුණු ඉර: දත්ත හා උපදෙස් ගැලීම', 'තනි ඉර: පාලන සංඥා'],
    mnemonicEn: 'Dotted = Data & instructions; Solid = Control signals from the Control Unit (CU).',
    mnemonicSi: 'කැඩුණු ඉර = දත්ත හා උපදෙස්; තනි ඉර = පාලන ඒකකයේ (CU) පාලන සංඥා.',
    examTrapWarningEn: 'On the O/L exam: Data/Instruction flow is drawn as a DOTTED line, while Control Signals from the CU are drawn as a SOLID line!',
    examTrapWarningSi: 'විභාගයේදී: දත්ත හා උපදෙස් ගැලීම කැඩුණු ඉරකින් ද, පාලන ඒකකයේ පාලන සංඥා තනි ඉරකින් ද දක්වනු ලැබේ!',
    analogyEn: 'An orchestra: The sheet music and instruments share the stage, while the Conductor (CU) sends baton waves (solid line) to guide musicians playing notes (dotted line).',
    analogySi: 'වාද්‍ය වෘන්දයක්: තනුව සහ සංගීත භාණ්ඩ එකම ශාලාවේ ඇති අතර, මෙහෙයවන්නා (CU) සංඥා (තනි ඉර) ලබා දෙමින් වාදනය (කැඩුණු ඉර) පාලනය කරයි.',
    tactileWidget: {
      widgetKey: 'cpu_bus',
      titleEn: 'CPU & Bus Architecture',
      titleSi: 'CPU හා බස්රථ පද්ධතිය',
      defaultSubMode: 'architecture',
      hideInternalTabs: true,
    },
  },
  'system bus architecture': {
    targetUnitId: 'g10-u2',
    departmentKeywordsEn: ['Data Bus (Bidirectional)', 'Address Bus (Unidirectional from CPU)', 'Control Bus (Control & timing signals)', 'System Bus'],
    departmentKeywordsSi: ['දත්ත බසය (ද්වි-දිශානත)', 'ලිපින බසය (ඒක-දිශානත)', 'පාලන බසය (පාලන හා කාල සංඥා)'],
    mnemonicEn: 'Address points WHERE (CPU to Memory only); Data carries WHAT (two-way); Control dictates HOW & WHEN.',
    mnemonicSi: 'ලිපින බසය කොහෙද කියා පෙන්වයි (CPU වෙතින් පමණි); දත්ත බසය දත්ත දෙපසටම ගෙන යයි; පාලන බසය පාලනය කරයි.',
    examTrapWarningEn: 'The Address Bus is strictly UNIDIRECTIONAL (CPU to memory/devices). The Data Bus is BIDIRECTIONAL.',
    examTrapWarningSi: 'ලිපින බසය ඒක-දිශානත (CPU වෙතින් පමණක්) වන අතර දත්ත බසය ද්වි-දිශානත (දෙපසටම) වේ!',
    analogyEn: 'A 3-lane highway: A two-way freight truck lane (Data Bus), a one-way postal address courier (Address Bus), and overhead traffic control signals (Control Bus).',
    analogySi: 'මංතීරු 3ක මහා මාර්ගයක්: භාණ්ඩ ගෙන යන දෙපැත්තටම විවෘත මංතීරුව (දත්ත), ලිපිනය රැගෙන යන තනි අතේ මංතීරුව (ලිපින), සහ මාර්ග සංඥා පද්ධතිය (පාලන).',
    tactileWidget: {
      widgetKey: 'cpu_bus',
      titleEn: 'CPU & Bus Architecture',
      titleSi: 'CPU හා බස්රථ පද්ධතිය',
      defaultSubMode: 'architecture',
      hideInternalTabs: true,
    },
  },
  cpu: {
    targetUnitId: 'g10-u2',
    departmentKeywordsEn: ['Control Unit (CU)', 'Arithmetic Logic Unit (ALU)', 'Registers', 'System clock', 'Motherboard'],
    departmentKeywordsSi: ['පාලන ඒකකය (CU)', 'ගණිත හා තර්කන ඒකකය (ALU)', 'රෙජිස්ටර් (Registers)', 'පද්ධති ඔරලෝසුව'],
    mnemonicEn: 'CU Controls, ALU calculates, Registers remember right now.',
    mnemonicSi: 'CU පාලනය කරයි, ALU ගණනය කරයි, රෙජිස්ටර් ක්ෂණිකව රඳවා ගනී.',
    examTrapWarningEn: 'Registers are inside the CPU and operate faster than RAM or Cache memory.',
    examTrapWarningSi: 'රෙජිස්ටර් CPU තුළ පිහිටා ඇති අතර RAM හෝ Cache වලට වඩා වේගවත් වේ.',
    analogyEn: 'The Master Chef in a restaurant: Brain directs recipes (CU), Hands do cutting and cooking (ALU), and the immediate cutting board holds ingredients (Registers).',
    analogySi: 'ප්‍රධාන සූපවේදියා: මොළයෙන් මෙහෙයවයි (CU), දෑතින් කපා සකසයි (ALU), ඉදිරිපස ලෑල්ල මත බඩු තබා ගනී (රෙජිස්ටර්).',
    tactileWidget: {
      widgetKey: 'cpu_bus',
      titleEn: 'CPU & Bus Architecture',
      titleSi: 'CPU හා බස්රථ පද්ධතිය',
      defaultSubMode: 'architecture',
      hideInternalTabs: true,
    },
  },
  'cpu core architecture': {
    targetUnitId: 'g10-u2',
    departmentKeywordsEn: ['Arithmetic and Logic Unit (ALU)', 'Control Unit (CU)', 'Memory Registers', 'Brain of the computer', 'Clock speed'],
    departmentKeywordsSi: ['අංක ගණිත හා තාර්කික ඒකකය (ALU)', 'පාලන ඒකකය (CU)', 'රෙජිස්ටර (Registers)', 'පරිගණකයේ මොළය'],
    mnemonicEn: 'CU Controls, ALU calculates, Registers remember right now.',
    mnemonicSi: 'CU පාලනය කරයි, ALU ගණනය කරයි, රෙජිස්ටර් ක්ෂණිකව රඳවා ගනී.',
    examTrapWarningEn: 'Registers are inside the CPU silicon chip and operate faster than Cache or RAM. Control Unit coordinates but does not calculate.',
    examTrapWarningSi: 'රෙජිස්ටර් CPU තුළ පිහිටා ඇති අතර RAM හෝ Cache වලට වඩා වේගවත් වේ. පාලන ඒකකය ගණනය කිරීම් සිදු නොකරයි.',
    analogyEn: 'The Master Chef in a restaurant: Brain directs recipes (CU), Hands do cutting and cooking (ALU), and the immediate cutting board holds ingredients (Registers).',
    analogySi: 'ප්‍රධාන සූපවේදියා: මොළයෙන් මෙහෙයවයි (CU), දෑතින් කපා සකසයි (ALU), ඉදිරිපස ලෑල්ල මත බඩු තබා ගනී (රෙජිස්ටර්).',
    tactileWidget: {
      widgetKey: 'cpu_bus',
      titleEn: 'CPU & Bus Architecture',
      titleSi: 'CPU හා බස්රථ පද්ධතිය',
      defaultSubMode: 'architecture',
      hideInternalTabs: true,
    },
  },
  'cpu clock speed & machine cycle': {
    targetUnitId: 'g10-u2',
    departmentKeywordsEn: ['Hertz (Hz)', 'Megahertz (MHz)', 'Gigahertz (GHz)', 'Fetch', 'Decode', 'Execute', 'Store'],
    departmentKeywordsSi: ['හර්ට්ස් (Hz)', 'මෙගාහර්ට්ස් (MHz)', 'ගිගාහර්ට්ස් (GHz)', 'ලබා ගැනීම (Fetch)', 'විකේතනය (Decode)', 'ක්‍රියාත්මක කිරීම (Execute)', 'තැන්පත් කිරීම (Store)'],
    mnemonicEn: 'FDES: Fetch from memory, Decode in CU, Execute in ALU, Store in register. 1 GHz = 1 Billion cycles/sec.',
    mnemonicSi: 'ල-වි-ක්‍රි-තැ: ලබා ගැනීම, විකේතනය, ක්‍රියාත්මක කිරීම, තැන්පත් කිරීම. 1 GHz = තත්පරයට චක්‍ර බිලියනයකි.',
    examTrapWarningEn: 'CPU clock speed is measured in Hertz (Hz/GHz), not transfer bits per second (bps) or memory storage bytes.',
    examTrapWarningSi: 'CPU ඔරලෝසු වේගය මනින්නේ හර්ට්ස් (Hz/GHz) වලිනි; දත්ත හුවමාරු බිටු වලින් නොවේ.',
    analogyEn: 'A metronome setting the heartbeat of the kitchen. Every tick: Fetch recipe -> Read instructions -> Cook -> Plate dish.',
    analogySi: 'මුළුතැන්ගෙයි රිද්මය සකසන ඔරලෝසුව: සෑම තත්පරයකම වට්ටෝරුව ගන්න -> කියවන්න -> උයන්න -> පිඟානට දමන්න.',
  },
  'cache memory & hierarchy': {
    targetUnitId: 'g10-u2',
    departmentKeywordsEn: ['Cache Memory', 'CPU Memory', 'Volatile', 'Buffer / Mediator between CPU and RAM', 'Cache Hit / Miss', 'Access speed hierarchy'],
    departmentKeywordsSi: ['වාරික මතකය (Cache)', 'CPU මතකය', 'විදුලිය නැතිවිට මැකෙන', 'CPU සහ RAM අතර අතරමැදියා', 'ප්‍රවේශ වේග ධූරාවලිය'],
    mnemonicEn: 'Cache is the chef pocket notebook; RAM is the kitchen pantry; Hard drive is the grocery store in town.',
    mnemonicSi: 'කෑෂ් මතකය යනු සාක්කුවේ සටහන් පොතයි; RAM යනු කුස්සියේ කබඩ් එකයි; දෘඪ තැටිය යනු නගරයේ කඩයයි.',
    examTrapWarningEn: 'Cache memory is VOLATILE and acts as a mediator between CPU and RAM. When CPU searches: Cache first -> RAM second.',
    examTrapWarningSi: 'වාරික මතකය විදුලිය නැතිවිට මැකී යන අතර CPU සහ RAM අතර අතරමැදියා වේ. CPU ප්‍රථමයෙන් කෑෂ් මතකය පරීක්ෂා කරයි.',
    analogyEn: 'A student desk: Open notebook right in front (Registers), sticky note on monitor (Cache), bookshelf behind chair (RAM), locked archive cabinet in library (Hard Drive).',
    analogySi: 'ශිෂ්‍යයෙකුගේ මේසය: ඉදිරිපස විවෘත සටහන් පොත (රෙජිස්ටර), මොනිටරයේ ඇලවූ කුඩා කොළය (කෑෂ්), පිටුපස පොත් රාක්කය (RAM), පුස්තකාලයේ කබඩ් එක (දෘඪ තැටිය).',
  },
  'primary storage': {
    targetUnitId: 'g10-u2',
    departmentKeywordsEn: ['RAM (Volatile, Read/Write)', 'ROM (Non-Volatile, Read Only)', 'BIOS / Firmware', 'Direct CPU access'],
    departmentKeywordsSi: ['RAM (විදුලිය නැතිවිට මැකෙන)', 'ROM (නොමැකෙන මතකය)', 'BIOS ස්ථීරාංගය', 'CPU සෘජු ප්‍රවේශය'],
    mnemonicEn: 'RAM Forgets when power dies; ROM Remembers forever.',
    mnemonicSi: 'RAM විදුලිය නැතිවිට මැකී යයි; ROM ස්ථිරව මතක තබා ගනී.',
    examTrapWarningEn: 'Do not confuse Volatile (RAM) with Non-Volatile (ROM/Hard Drive); power loss clears RAM completely!',
    examTrapWarningSi: 'විදුලිය විසන්ධි වූ විට RAM හි සියලු දත්ත මැකී යන බව මතක තබා ගන්න!',
    analogyEn: 'A classroom whiteboard (RAM - wiped clean between classes) vs printed textbook (ROM - permanent).',
    analogySi: 'පන්ති කාමරයේ වයිට් බෝඩ් එක (RAM - පීරියඩ් එකෙන් පසු මැකේ) සහ මුද්‍රිත පෙළපොත (ROM - ස්ථිරයි).',
  },
  'primary vs secondary storage': {
    targetUnitId: 'g10-u2',
    departmentKeywordsEn: ['RAM (Volatile, Read/Write)', 'ROM (Non-Volatile, BIOS Firmware)', 'Secondary Storage (HDD, SSD, Optical, Magnetic Tape)', 'Bit, Byte, KB, MB, GB, TB'],
    departmentKeywordsSi: ['RAM (විදුලිය නැතිවිට මැකෙන)', 'ROM (නොමැකෙන, BIOS)', 'ද්විතීයික ආචයනය (HDD, SSD, ප්‍රකාශ)', 'බිටු, බයිට, KB, MB, GB, TB'],
    mnemonicEn: 'RAM Forgets when powered off; ROM Remembers forever; Secondary Storage files stay safe.',
    mnemonicSi: 'RAM විදුලිය නැතිවිට මැකී යයි; ROM ස්ථිරව මතක තබා ගනී; ද්විතීයික ආචයනයේ ලිපිගොනු සුරැකේ.',
    examTrapWarningEn: 'RAM is volatile; ROM is non-volatile. Both RAM and ROM are Primary Memory because the CPU accesses them directly!',
    examTrapWarningSi: 'RAM විදුලිය නැතිවිට මැකෙන අතර ROM නොමැකේ. CPU වෙත සෘජුව සම්බන්ධ වන නිසා මේ දෙකම ප්‍රධාන මතකයට අයත් වේ.',
    analogyEn: 'A whiteboard in classroom (RAM - wiped clean each period) vs permanent textbook print (ROM - never erased).',
    analogySi: 'පන්ති කාමරයේ වයිට් බෝඩ් එක (RAM - කාලච්ඡේදය අවසානයේ මැකේ) සහ පෙළපොතේ මුද්‍රණය (ROM - කිසිදා නොමැකේ).',
  },
  'input/output devices & ports': {
    targetUnitId: 'g10-u2',
    departmentKeywordsEn: ['VGA (Analog video only)', 'HDMI (Digital video + Audio)', 'USB', 'RJ-45 (LAN Ethernet)', 'Barcode', 'MICR (Cheques)', 'OMR (MCQ)', 'Plotter (Blueprints)'],
    departmentKeywordsSi: ['VGA (ප්‍රතිසම වීඩියෝ පමණි)', 'HDMI (ඩිජිටල් වීඩියෝ + ශබ්දය)', 'USB', 'RJ-45 (ජාල කෙවෙනිය)', 'MICR (චෙක්පත්)', 'OMR (MCQ)', 'ප්ලෝටරය'],
    mnemonicEn: 'VGA = Video Graphics Alone (no audio); HDMI = High-Def Movies & Intercom (both video and audio).',
    mnemonicSi: 'VGA = වීඩියෝ පමණි; HDMI = වීඩියෝ සහ ශ්‍රව්‍ය දෙකම; RJ-45 = ජාල කෙවෙනිය.',
    examTrapWarningEn: 'VGA transmits ANALOG VIDEO ONLY (no sound). HDMI transmits DIGITAL VIDEO AND AUDIO together over a single cable.',
    examTrapWarningSi: 'VGA මඟින් ප්‍රතිසම වීඩියෝ පමණක් සම්ප්‍රේෂණය කරන අතර, HDMI මඟින් ඩිජිටල් වීඩියෝ සහ ශ්‍රව්‍ය යන දෙකම සම්ප්‍රේෂණය කරයි.',
    analogyEn: 'HDMI is a smart highway carrying both video vehicles and audio trains; VGA is an old dirt road carrying video cars only.',
    analogySi: 'HDMI යනු වීඩියෝ සහ ශ්‍රව්‍ය දෙකම ගෙන යන අධිවේගී මාර්ගයකි; VGA යනු වීඩියෝ පමණක් ගෙන යන පැරණි පාරකි.',
  },

  // UNIT 3: Data Representation
  'binary representation': {
    targetUnitId: 'g10-u3',
    departmentKeywordsEn: ['Base 2 (0 and 1)', 'Bit (Binary Digit)', 'Byte (8 bits)', 'Positional weights (1, 2, 4, 8, 16)'],
    departmentKeywordsSi: ['පාද 2 (0 සහ 1)', 'බිටු (Bit)', 'බයිට් (බිටු 8)', 'ස්ථානීය අගයන් (1, 2, 4, 8, 16)'],
    mnemonicEn: 'Double each step to the left: 1, 2, 4, 8, 16, 32, 64, 128.',
    mnemonicSi: 'වමට යන විට අගය දෙගුණ වේ: 1, 2, 4, 8, 16, 32, 64, 128.',
    examTrapWarningEn: 'Always verify bit weighting from right to left starting at 2^0 = 1, not 2^1.',
    examTrapWarningSi: 'දකුණේ සිට වමට ගණනය කිරීම 2^0 = 1 න් ආරම්භ වන බව සලකන්න.',
    analogyEn: 'An 8-person tug of war: The giant anchor puller on the far left (MSB) provides 128kg force, while the scout on the far right (LSB) provides 1kg.',
    analogySi: 'කඹ ඇදීම: වම් කෙළවරේ සිටින ශක්තිමත්ම පුද්ගලයා (MSB - 128kg) සහ දකුණු කෙළවරේ සිටින කුඩා ළමයා (LSB - 1kg).',
    tactileWidget: {
      widgetKey: 'binary_weight',
      titleEn: '8-Bit Binary Switchboard',
      titleSi: '8-බිටු ද්වීමය ස්විච පුවරුව',
      hideInternalTabs: true,
    },
  },
  'voltage signals & binary logic': {
    targetUnitId: 'g10-u3',
    departmentKeywordsEn: ['High Voltage (1 / +5V)', 'Low Voltage (0 / 0V)', 'Bistable Switch', 'TTL Logic Levels'],
    departmentKeywordsSi: ['ඉහළ වෝල්ටීයතාවය (1 / +5V)', 'පහළ වෝල්ටීයතාවය (0 / 0V)', 'ද්වි-ස්ථාවර ස්විචය', 'TTL තර්කන මට්ටම්'],
    mnemonicEn: 'High is 1, Low is 0; Like a light switch ON and OFF.',
    mnemonicSi: 'ඉහළ යනු 1 (ස්විචය ON), පහළ යනු 0 (ස්විචය OFF).',
    examTrapWarningEn: 'Binary 0 is not absence of power; it is an active low voltage ground reference level (0V).',
    examTrapWarningSi: 'ද්විමය 0 යනු විදුලිය නොමැතිකම නොව, නියමිත පහළ වෝල්ටීයතා (0V) මට්ටමකි.',
    analogyEn: 'A light switch in a room: Either completely UP (1 / Light shines) or completely DOWN (0 / Darkness).',
    analogySi: 'කාමරයක විදුලි ස්විචයක්: ඉහළට දැමූ විට (1 / එළිය) හෝ පහළට දැමූ විට (0 / අඳුර).',
    tactileWidget: {
      widgetKey: 'binary_weight',
      titleEn: '8-Bit Binary Switchboard',
      titleSi: '8-බිටු ද්වීමය ස්විච පුවරුව',
      hideInternalTabs: true,
    },
  },
  'why computers use binary architecture': {
    targetUnitId: 'g10-u3',
    departmentKeywordsEn: ['Electrical noise immunity', 'Bistable reliability', 'Transistor switching', 'Boolean logic compatibility'],
    departmentKeywordsSi: ['විද්‍යුත් ඝෝෂා ප්‍රතිරෝධය', 'ද්වි-ස්ථාවර විශ්වාසනීයත්වය', 'ට්‍රාන්සිස්ටර ස්විච', 'බූලීය තර්කන අනුකූලතාව'],
    mnemonicEn: 'Binary = Two states = Zero confusion for transistors.',
    mnemonicSi: 'අවස්ථා දෙකයි = ට්‍රාන්සිස්ටර සඳහා කිසිදු පැටලිල්ලක් නැත.',
    examTrapWarningEn: 'Computers use binary for hardware electronic reliability, NOT because decimal math is impossible.',
    examTrapWarningSi: 'පරිගණක ද්විමය පද්ධතිය භාවිත කරන්නේ ඉලෙක්ට්‍රොනික විශ්වාසනීයත්වය නිසා මිස දශම ගණිතය කළ නොහැකි නිසා නොවේ.',
    analogyEn: 'A water tap: Simple binary tap has full-on or completely-off; trying to measure 10 delicate intermediate trickle levels would cause errors during pressure spikes.',
    analogySi: 'ජල කරාමයක්: සම්පූර්ණයෙන්ම ඇරීම (1) හෝ වැසීම (0) පහසුය; අතරමැදි සියුම් මට්ටම් 10ක් තබා ගැනීම පීඩන වෙනස්වීම් හමුවේ වැරදි ඇති කරයි.',
  },
  'unit, number & base (radix)': {
    targetUnitId: 'g10-u3',
    departmentKeywordsEn: ['Unit (Smallest count)', 'Number (Quantity representation)', 'Base / Radix (Symbol count)', 'Positional weights bⁿ'],
    departmentKeywordsSi: ['ඒකකය', 'සංඛ්‍යාව', 'පාදය (සංකේත ගණන)', 'ස්ථානීය අගය bⁿ'],
    mnemonicEn: 'Base dictates digit count: Base b uses digits 0 through b - 1.',
    mnemonicSi: 'පාදය b නම්, එහි භාවිත වන අංක 0 සිට b - 1 දක්වා වේ.',
    examTrapWarningEn: 'The base number itself is NEVER a valid single digit in that system (e.g. 8 is invalid in Octal; 2 is invalid in Binary).',
    examTrapWarningSi: 'කිසිදු සංඛ්‍යා පද්ධතියක එම පාදයට සමාන තනි ඉලක්කමක් නොපවතී (උදා: අෂ්ටමයේ 8 නැත; ද්විමයේ 2 නැත).',
    analogyEn: 'An odometer in a car: When a digit wheel reaches its maximum value, it rolls over to 0 and carries 1 to the next wheel.',
    analogySi: 'වාහනයක මීටරය: අංක රෝදයේ උපරිමයට පැමිණි පසු එය 0 වී ඊළඟ රෝදයට 1ක් එකතු කරයි.',
  },
  '4 main number systems': {
    targetUnitId: 'g10-u3',
    departmentKeywordsEn: ['Binary (Base 2)', 'Octal (Base 8)', 'Decimal (Base 10)', 'Hexadecimal (Base 16: A-F)'],
    departmentKeywordsSi: ['ද්විමය (පාදය 2)', 'අෂ්ටමය (පාදය 8)', 'දශමය (පාදය 10)', 'ෂඩ්දශමය (පාදය 16: A-F)'],
    mnemonicEn: '2 (Binary), 8 (Octal), 10 (Decimal), 16 (Hex). Letters A to F mean 10 to 15.',
    mnemonicSi: '2 (ද්විමය), 8 (අෂ්ටමය), 10 (දශමය), 16 (ෂඩ්දශමය). A සිට F දක්වා අකුරු 10 සිට 15 දක්වා වේ.',
    examTrapWarningEn: 'Hexadecimal letters: A=10, B=11, C=12, D=13, E=14, F=15. Always substitute before multiplying.',
    examTrapWarningSi: 'A=10, B=11, C=12, D=13, E=14, F=15 වන බව මතක තබා ගෙන ගණනය කිරීම් කරන්න.',
    analogyEn: 'Language translators: The computer thinks in binary words; octal and hexadecimal are compact shorthand dialects so humans do not drown in endless 1s and 0s.',
    analogySi: 'පරිවර්තකයන්: පරිගණකය ද්විමයෙන් සිතන අතර, අෂ්ටමය හා ෂඩ්දශමය යනු මිනිසාට දිගු 0 සහ 1 පෙළවල් කියවීම පහසු කරන කෙටි යෙදුම් වේ.',
  },
  'msd and lsd': {
    targetUnitId: 'g10-u3',
    departmentKeywordsEn: ['Most Significant Digit (MSD)', 'Least Significant Digit (LSD)', 'Positional Weight', 'Leftmost vs Rightmost'],
    departmentKeywordsSi: ['වැඩිම වැදගත්කමක් ඇති සංඛ්‍යාංකය (MSD)', 'අඩුම වැදගත්කමක් ඇති සංඛ්‍යාංකය (LSD)', 'ස්ථානීය අගය'],
    mnemonicEn: 'MSD is the Heavyweight Champion on the Left; LSD is the Lightweight on the Right.',
    mnemonicSi: 'MSD වම්පස වැඩිම අගයයි; LSD දකුණුපස අඩුම අගයයි.',
    examTrapWarningEn: 'Leading zeros do not count as MSD (e.g. in 0752, the MSD is 7, not 0).',
    examTrapWarningSi: 'සංඛ්‍යාවක ඉදිරියෙන් ඇති ශුන්‍ය MSD ලෙස නොගනී (0752 හි MSD යනු 7 ය).',
    analogyEn: 'Money notes: The thousands digit in Rs. 5,432 determines whether you can buy a bicycle; the units digit 2 buys a toffee.',
    analogySi: 'මුදල්: රු. 5,432 හි දහස්ස්ථානයේ 5 (MSD) විශාල වටිනාකමක් ඇති අතර ඒකස්ථානයේ 2 (LSD) ටොෆියක වටිනාකමකි.',
  },
  'msb and lsb': {
    targetUnitId: 'g10-u3',
    departmentKeywordsEn: ['Most Significant Bit (MSB)', 'Least Significant Bit (LSB)', '2ⁿ⁻¹ weight', 'Even / Odd indicator (LSB)'],
    departmentKeywordsSi: ['වැඩිම වැදගත්කමක් ඇති බිටුව (MSB)', 'අඩුම වැදගත්කමක් ඇති බිටුව (LSB)', 'ඉරට්ට / ඔත්තේ තීරකය'],
    mnemonicEn: 'MSB sits at the far left (2ⁿ⁻¹); LSB sits at the far right (2⁰=1; 0=even, 1=odd).',
    mnemonicSi: 'MSB වම් කෙළවරේ (2ⁿ⁻¹); LSB දකුණු කෙළවරේ (2⁰=1; 0 නම් ඉරට්ට, 1 නම් ඔත්තේ).',
    examTrapWarningEn: 'If the LSB of an integer is 1, the number is always ODD; if LSB is 0, it is always EVEN.',
    examTrapWarningSi: 'LSB 1 නම් සංඛ්‍යාව සැමවිටම ඔත්තේ වන අතර, LSB 0 නම් ඉරට්ට වේ.',
    analogyEn: 'An 8-person tug of war: The giant anchor puller on the far left (MSB) provides 128kg force, while the scout on the far right (LSB) provides 1kg.',
    analogySi: 'කඹ ඇදීම: වම් කෙළවරේ සිටින ශක්තිමත්ම පුද්ගලයා (MSB - 128kg) සහ දකුණු කෙළවරේ සිටින කුඩා ළමයා (LSB - 1kg).',
  },
  'decimal to other bases (successive division)': {
    targetUnitId: 'g10-u3',
    departmentKeywordsEn: ['Successive Division', 'Remainders bottom to top', 'Divide by 2 / 8 / 16', 'Quotient zero stop'],
    departmentKeywordsSi: ['අනුක්‍රමික බෙදීම', 'ශේෂයන් යට සිට ඉහළට', '2 / 8 / 16 න් බෙදීම', 'ලබ්ධිය 0 වන විට නැවතීම'],
    mnemonicEn: 'Divide, keep remainder, read BOTTOM TO TOP.',
    mnemonicSi: 'බෙදන්න, ශේෂය ලියන්න, යට සිට ඉහළට කියවන්න.',
    examTrapWarningEn: 'Never read remainders top to bottom! The last remainder is the MSB / MSD.',
    examTrapWarningSi: 'ශේෂයන් උඩ සිට යටට නොකියවන්න! අවසාන ශේෂය වැඩිම වැදගත්කමක් ඇති අගය (MSB) වේ.',
    analogyEn: 'Peeling layers of an onion: Peeling from inside out, then stacking the shells in reverse order.',
    analogySi: 'පඩිපෙළක් බැසීම: පහළම පඩියට ගොස් නැවත ඉහළට බලා ගණනය කිරීම වැනි ය.',
    tactileWidget: {
      widgetKey: 'binary_weight',
      titleEn: '8-Bit Binary Switchboard',
      titleSi: '8-බිටු ද්වීමය ස්විච පුවරුව',
      hideInternalTabs: true,
    },
  },
  'other bases to decimal (positional weight)': {
    targetUnitId: 'g10-u3',
    departmentKeywordsEn: ['Positional Expansion', 'Powers of Base (bⁿ)', 'Multiply and Sum', 'A-F decimal replacement'],
    departmentKeywordsSi: ['ස්ථානීය අගයන් ගුණ කිරීම', 'පාදයේ බල (bⁿ)', 'එකතු කිරීම', 'A-F දශම ආදේශනය'],
    mnemonicEn: 'Weight each digit by Baseⁿ from right (n=0) and ADD THEM UP.',
    mnemonicSi: 'දකුණේ සිට (n=0) පාදයේ බලයෙන් ගුණ කර එකතු කරන්න.',
    examTrapWarningEn: 'Start power indexing from 0 on the far right: b⁰ = 1, NOT b¹.',
    examTrapWarningSi: 'දකුණු කෙළවරේ පළමු ස්ථානීය අගය b⁰ = 1 මිස b¹ නොවන බව මතක තබා ගන්න.',
    analogyEn: 'Exchanging foreign currency: Convert your stacks of 16-rupee, 256-rupee, and 4096-rupee notes into standard decimal bank notes.',
    analogySi: 'විදේශ මුදල් මාරු කිරීම: විවිධ වටිනාකම් ඇති නෝට්ටු සාමාන්‍ය දශම මුදලට එකතු කර ගැනීම.',
  },
  'direct 3-bit & 4-bit grouping shortcuts': {
    targetUnitId: 'g10-u3',
    departmentKeywordsEn: ['3-Bit Octal Grouping (2³=8)', '4-Bit Hex Grouping (2⁴=16)', 'Right to Left Grouping', 'Pad leading zeros'],
    departmentKeywordsSi: ['බිටු 3 කාණ්ඩ (අෂ්ටම)', 'බිටු 4 කාණ්ඩ (ෂඩ්දශම)', 'දකුණේ සිට වමට කාණ්ඩ කිරීම', 'ඉදිරියට බිංදු යෙදීම'],
    mnemonicEn: 'Octal = 3 bits (8 is 2³); Hex = 4 bits (16 is 2⁴). Group from the RIGHT.',
    mnemonicSi: 'අෂ්ටම = බිටු 3; ෂඩ්දශම = බිටු 4. දකුණේ සිට කාණ්ඩ කරන්න.',
    examTrapWarningEn: 'Always group bits starting from the RIGHT (LSB). Grouping from the left ruins the place value!',
    examTrapWarningSi: 'සැමවිටම බිටු කාණ්ඩ කිරීම දකුණේ සිට (LSB) ආරම්භ කරන්න; වමේ සිට කළහොත් අගය මුළුමනින්ම වැරදේ.',
    analogyEn: 'Packing eggs into cartons: 3-egg cartons for Octal, 4-egg cartons for Hexadecimal.',
    analogySi: 'බිත්තර පෙට්ටිවල ඇසිරීම: අෂ්ටමය සඳහා බිත්තර 3 පෙට්ටි, ෂඩ්දශමය සඳහා බිත්තර 4 පෙට්ටි.',
    tactileWidget: {
      widgetKey: 'binary_weight',
      titleEn: '8-Bit Binary Switchboard',
      titleSi: '8-බිටු ද්වීමය ස්විච පුවරුව',
      hideInternalTabs: true,
    },
  },
  'hexadecimal and rgb': {
    targetUnitId: 'g10-u3',
    departmentKeywordsEn: ['Base 16 (0-9, A-F)', '4 bits per hex digit', '24-bit RGB Color', '#RRGGBB format'],
    departmentKeywordsSi: ['පාද 16 (0-9, A-F)', 'ෂඩ්දශම සංකේතයකට බිටු 4', '24-බිටු RGB වර්ණ', '#RRGGBB ආකෘතිය'],
    mnemonicEn: 'Hex is friendly Binary: exactly 4 binary bits make 1 hex character.',
    mnemonicSi: 'බිටු 4ක් එකතු වී එක් ෂඩ්දශම අගයක් සාදයි.',
    examTrapWarningEn: 'Remember A=10, B=11, C=12, D=13, E=14, F=15; do not write 10 instead of A.',
    examTrapWarningSi: 'A=10, B=11, C=12, D=13, E=14, F=15 වන අතර 10 වෙනුවට A ලිවිය යුතුය.',
    analogyEn: 'An artist palette with three paint syringes: Red, Green, and Blue, each marked from 0 to 255 drops.',
    analogySi: 'චිත්‍ර ශිල්පියෙකුගේ වර්ණ පුවරුව: බිංදු 0 සිට 255 දක්වා මැනිය හැකි රතු, කොළ සහ නිල් සායම් නල තුනක්.',
    tactileWidget: {
      widgetKey: 'hex_vat',
      titleEn: '24-Bit RGB Color Chamber',
      titleSi: '24-බිටු RGB වර්ණ කුටිය',
      hideInternalTabs: true,
    },
  },
  'rgb & hex color structure': {
    targetUnitId: 'g10-u3',
    departmentKeywordsEn: ['24-Bit True Color', 'Red Green Blue (0-255)', '#RRGGBB format', '16.7 Million Colors (2²⁴)'],
    departmentKeywordsSi: ['24-බිටු True Color', 'රතු කොළ නිල් (0-255)', '#RRGGBB ආකෘතිය', 'වර්ණ මිලියන 16.7ක්'],
    mnemonicEn: '#RRGGBB: First 2 Red, Middle 2 Green, Last 2 Blue.',
    mnemonicSi: '#RRGGBB: පළමු 2 රතු, මැද 2 කොළ, අග 2 නිල්.',
    examTrapWarningEn: 'Each hex pair represents an 8-bit byte (00 to FF = 0 to 255 in decimal).',
    examTrapWarningSi: 'එක් එක් ෂඩ්දශම යුගලයක් බිටු 8 බයිටයක් (0 සිට 255 දක්වා) නිරූපණය කරයි.',
    analogyEn: 'An artist palette with three paint syringes: Red, Green, and Blue, each marked from 0 to 255 drops.',
    analogySi: 'චිත්‍ර ශිල්පියෙකුගේ වර්ණ පුවරුව: බිංදු 0 සිට 255 දක්වා මැනිය හැකි රතු, කොළ සහ නිල් සායම් නල තුනක්.',
    tactileWidget: {
      widgetKey: 'hex_vat',
      titleEn: '24-Bit RGB Color Chamber',
      titleSi: '24-බිටු RGB වර්ණ කුටිය',
      hideInternalTabs: true,
    },
  },
  'step-by-step color conversion': {
    targetUnitId: 'g10-u3',
    departmentKeywordsEn: ['Divide by 16', 'Quotient + Remainder', '#871F78 Dark Purple', '#000000 Black to #FFFFFF White'],
    departmentKeywordsSi: ['16 න් බෙදීම', 'ලබ්ධිය සහ ශේෂය', '#871F78 තද දම්', '#000000 කළු සිට #FFFFFF සුදු දක්වා'],
    mnemonicEn: 'Decimal component ÷ 16: Quotient is 1st hex digit, Remainder is 2nd hex digit.',
    mnemonicSi: 'දශම අගය ÷ 16: ලබ්ධිය පළමු අකුරයි, ශේෂය දෙවන අකුරයි.',
    examTrapWarningEn: 'If a remainder is 10 to 15, write A to F, never two-digit decimal numbers in the hex slot.',
    examTrapWarningSi: 'ශේෂය 10 සිට 15 අතර නම් A සිට F දක්වා අකුර ලියන්න.',
    analogyEn: 'Mixing paint: 135 parts red, 31 parts green, 120 parts blue yields exactly royal dark purple.',
    analogySi: 'සායම් මිශ්‍ර කිරීම: රතු 135ක්, කොළ 31ක්, නිල් 120ක් මිශ්‍ර කළ විට රාජකීය තද දම් පාට ලැබේ.',
    tactileWidget: {
      widgetKey: 'hex_vat',
      titleEn: '24-Bit RGB Color Chamber',
      titleSi: '24-බිටු RGB වර්ණ කුටිය',
      hideInternalTabs: true,
    },
  },
  'storage capacity hierarchy': {
    targetUnitId: 'g10-u3',
    departmentKeywordsEn: ['Bit, Byte, KB, MB, GB, TB, PB', 'Binary power 2¹⁰ = 1024', 'Multiply going down, Divide going up', '1 MB = 1024 KB'],
    departmentKeywordsSi: ['බිටු, බයිට, KB, MB, GB, TB, PB', '2¹⁰ = 1024 ගුණාකාරය', 'පහළට ගුණ කරන්න, ඉහළට බෙදන්න'],
    mnemonicEn: 'Bit < Byte < KB < MB < GB < TB < PB (step by 1024).',
    mnemonicSi: 'බිටු < බයිට < KB < MB < GB < TB < PB (පියවරකට 1024 බැගින්).',
    examTrapWarningEn: 'In computer science, 1 KB is 1024 Bytes (2¹⁰), NOT 1000 Bytes! Do not multiply by 1000 in calculations.',
    examTrapWarningSi: 'පරිගණක විද්‍යාවේදී 1 KB යනු බයිට 1024 කි; 1000 නොවේ! ගණනය කිරීම්වලදී 1000 න් ගුණ නොකරන්න.',
    analogyEn: 'Russian nesting dolls: Each doll opens to reveal a smaller doll exactly 1024 times smaller.',
    analogySi: 'එක තුළ එක ඇති පෙට්ටි: විශාල පෙට්ටියක් තුළ හරියටම 1024 ගුණයක් කුඩා පෙට්ටියක් අඩංගු වේ.',
  },
  'storage media capacities & file fitting': {
    targetUnitId: 'g10-u3',
    departmentKeywordsEn: ['CD-ROM (700 MB)', 'DVD-ROM (4.7 GB)', 'Blu-ray (25 GB)', 'Flash Drive File Fit Test', 'Uniform unit conversion'],
    departmentKeywordsSi: ['CD-ROM (700 MB)', 'DVD-ROM (4.7 GB)', 'Blu-ray (25 GB)', 'ගොනු ධාරිතා ගැළපුම'],
    mnemonicEn: 'CD is 700MB, DVD is 4.7GB (~7 CDs), Blu-ray is 25GB (~5 DVDs).',
    mnemonicSi: 'CD යනු 700MB, DVD යනු 4.7GB, Blu-ray යනු 25GB.',
    examTrapWarningEn: 'Before checking if files fit into a USB drive, convert ALL file sizes and drive space to the SAME unit (e.g. MB).',
    examTrapWarningSi: 'ගොනු ධාවකයකට දැමිය හැකිදැයි පරීක්ෂා කිරීමට පෙර සියලුම ගොනු සහ ධාවකයේ ඉඩ එකම ඒකකයකට (MB) හරවන්න.',
    analogyEn: 'Packing a suitcase: You cannot compare 3 kilograms of clothes with 500 grams of shoes until both are measured in grams.',
    analogySi: 'ගමන් මල්ලක් ඇසිරීම: කිලෝග්‍රෑම් 3ක් සහ ග්‍රෑම් 500ක් සංසන්දනය කිරීමට පෙර දෙකම එකම ඒකකයකට හැරවිය යුතුය.',
  },
  'evolution of character coding standards': {
    targetUnitId: 'g10-u3',
    departmentKeywordsEn: ['BCD (4-bit)', 'EBCDIC (8-bit IBM)', 'Standard ASCII (7-bit, 128 chars)', 'Extended ASCII (8-bit, 256 chars)', 'Unicode (Universal, Sinhala/Tamil)'],
    departmentKeywordsSi: ['BCD (බිටු 4)', 'EBCDIC (බිටු 8)', 'සම්මත ASCII (බිටු 7, අක්ෂර 128)', 'විස්තෘත ASCII (බිටු 8, අක්ෂර 256)', 'යුනිකෝඩ් (විශ්ව, සිංහල/දෙමළ)'],
    mnemonicEn: 'BCD (4) -> ASCII-7 (128) -> ASCII-8 (256) -> Unicode (Millions for all languages).',
    mnemonicSi: 'BCD (4) -> ASCII (128/256) -> යුනිකෝඩ් (ලොව සියලු භාෂා සඳහා).',
    examTrapWarningEn: 'Standard ASCII uses 7 bits (128 characters). Extended ASCII uses 8 bits (256 characters). Unicode uses 16/32 bits.',
    examTrapWarningSi: 'සම්මත ASCII බිටු 7කි (අක්ෂර 128); විස්තෘත ASCII බිටු 8කි (අක්ෂර 256); යුනිකෝඩ් බිටු 16/32කි.',
    analogyEn: 'Passport sizes: BCD is a local village permit; ASCII is an English-only passport; Unicode is a universal United Nations passport valid in every nation on Earth.',
    analogySi: 'ගමන් බලපත්‍ර: BCD යනු ගමේ බලපත්‍රයකි; ASCII ඉංග්‍රීසි පමණක් ඇති බලපත්‍රයකි; යුනිකෝඩ් යනු ලොව සියලුම රටවලට වලංගු එක්සත් ජාතීන්ගේ විශ්ව බලපත්‍රයයි.',
  },
  'sequential ascii calculations': {
    targetUnitId: 'g10-u3',
    departmentKeywordsEn: ["'A' = 65 (1000001₂)", "'a' = 97 (1100001₂)", "'0' = 48 (0110000₂)", 'Case shift difference = 32', 'Sequential letter offsets'],
    departmentKeywordsSi: ["'A' = 65", "'a' = 97", "'0' = 48", 'කැපිටල්-සිම්පල් වෙනස 32', 'අනුක්‍රමික අක්ෂර ගණනය'],
    mnemonicEn: 'A=65, a=97, 0=48. Capital + 32 = Lowercase.',
    mnemonicSi: 'A=65, a=97, 0=48. කැපිටල් + 32 = සිම්පල්.',
    examTrapWarningEn: 'The distance between uppercase and lowercase letters is exactly 32 (toggle the 6th bit from right).',
    examTrapWarningSi: 'කැපිටල් සහ සිම්පල් අකුරක් අතර වෙනස හරියටම 32 කි (දකුණේ සිට 6 වන බිටුව).',
    analogyEn: 'Lockers in a school hallway: Locker 65 is labeled A, Locker 66 is labeled B, and Locker 90 is labeled Z in continuous numbered order.',
    analogySi: 'පාසලේ අංක කළ ලොකර් පේළිය: 65 ලොකරය A වන අතර, 66 B ද, 90 Z ද ලෙස අනුපිළිවෙළින් පිහිටා ඇත.',
  },

  // UNIT 4: Logic Gates
  'logic gates': {
    targetUnitId: 'g10-u4',
    departmentKeywordsEn: ['AND (Both HIGH)', 'OR (Any HIGH)', 'NOT (Inverter)', 'Truth Table', 'Boolean Expression'],
    departmentKeywordsSi: ['AND (දෙකම 1)', 'OR (ඕනෑම 1ක්)', 'NOT (ප්‍රතිවිරුද්ධ)', 'සත්‍යතා වගුව', 'බූලීය ප්‍රකාශනය'],
    mnemonicEn: 'AND demands ALL; OR is happy with ANY; NOT says NO.',
    mnemonicSi: 'AND ට සියල්ල 1 විය යුතුයි; OR ට එකක් ප්‍රමාණවත්; NOT ප්‍රතිවිරුද්ධ කරයි.',
    examTrapWarningEn: 'Always list input combinations in standard binary order: 00, 01, 10, 11 to avoid marking deductions.',
    examTrapWarningSi: 'සත්‍යතා වගුවේ ආදාන අනුපිළිවෙල 00, 01, 10, 11 ලෙස සම්මතව ලියන්න.',
    analogyEn: 'A railroad signal light: Red (Stop / 0) and Green (Go / 1).',
    analogySi: 'දුම්රිය සංඥා එළිය: රතු (0 / නවතින්න) සහ කොළ (1 / යන්න).',
    tactileWidget: {
      widgetKey: 'logic_gate',
      titleEn: 'Logic Gate Breadboard',
      titleSi: 'ලොජික් ද්වාර අත්හදා බැලීමේ පුවරුව',
      hideInternalTabs: true,
    },
  },
  'digital logic states & voltage levels': {
    targetUnitId: 'g10-u4',
    departmentKeywordsEn: ['Logic LOW (0 / 0V / Ground)', 'Logic HIGH (1 / +5V / VCC)', 'Bistable circuit conditions', 'TTL standards'],
    departmentKeywordsSi: ['පහළ මට්ටම (0 / 0V)', 'ඉහළ මට්ටම (1 / +5V)', 'ද්වි-ස්ථාවර තත්ත්ව', 'TTL ප්‍රමිතිය'],
    mnemonicEn: '0 is Ground (0V); 1 is Power (+5V).',
    mnemonicSi: '0 යනු භූගතය (0V); 1 යනු බල සැපයුම (+5V).',
    examTrapWarningEn: 'Never confuse Logic 0 with "broken circuit"; Logic 0 is an active, grounded 0V electrical reference.',
    examTrapWarningSi: 'ලොජික් 0 යනු පරිපථය කැඩී යාමක් නොව, නියමිත 0V භූගත මට්ටමකි.',
    analogyEn: 'A railroad signal light: Red (Stop / 0) and Green (Go / 1).',
    analogySi: 'දුම්රිය සංඥා එළිය: රතු (0 / නවතින්න) සහ කොළ (1 / යන්න).',
    tactileWidget: {
      widgetKey: 'logic_gate',
      titleEn: 'Logic Gate Breadboard',
      titleSi: 'ලොජික් ද්වාර අත්හදා බැලීමේ පුවරුව',
      hideInternalTabs: true,
    },
  },
  'concept of logic gates': {
    targetUnitId: 'g10-u4',
    departmentKeywordsEn: ['Elementary building block', 'Transistors and Diodes', 'Integrated Circuit (IC)', 'Microprocessor gates'],
    departmentKeywordsSi: ['මූලික තැනුම් ඒකකය', 'ට්‍රාන්සිස්ටර සහ ඩයෝඩ', 'අනුකලිත පරිපථය (IC)', 'ක්ෂුද්‍ර ප්‍රොසෙසර'],
    mnemonicEn: 'Gates make decisions using binary inputs to yield one output.',
    mnemonicSi: 'ද්වාර මගින් ආදාන සලකා තනි ප්‍රතිදානයක් ලෙස තීරණ ගනී.',
    examTrapWarningEn: 'Logic gates output exactly ONE binary signal, regardless of how many inputs they receive.',
    examTrapWarningSi: 'ලොජික් ද්වාරයකට ආදාන කීයක් ලැබුණද, ප්‍රතිදානය වන්නේ හරියටම එක් සංඥාවක් පමණි.',
    analogyEn: 'A security guard at a gate checking IDs: Checks two credentials and either opens the gate (1) or keeps it locked (0).',
    analogySi: 'ආරක්ෂක මුරපොලක්: හැඳුනුම්පත් පරීක්ෂා කර ඇතුළුවීමට අවසර දීම (1) හෝ ප්‍රතික්ෂේප කිරීම (0).',
    tactileWidget: {
      widgetKey: 'logic_gate',
      titleEn: 'Logic Gate Breadboard',
      titleSi: 'ලොජික් ද්වාර අත්හදා බැලීමේ පුවරුව',
      hideInternalTabs: true,
    },
  },
  'and gate': {
    targetUnitId: 'g10-u4',
    departmentKeywordsEn: ['Logical Multiplication', 'Q = A · B', 'Series Switches', 'Output 1 ONLY when ALL inputs 1'],
    departmentKeywordsSi: ['තාර්කික ගුණ කිරීම', 'Q = A · B', 'ශ්‍රේණිගත ස්විච', 'සියල්ල 1 වූ විට පමණක් 1'],
    mnemonicEn: 'AND requires ALL inputs to be 1.',
    mnemonicSi: 'AND හි සියලු ආදාන 1 විය යුතුය.',
    examTrapWarningEn: 'If ANY input is 0, an AND gate output drops immediately to 0.',
    examTrapWarningSi: 'ඕනෑම එක් ආදානයක් 0 වූ විට AND ද්වාරයේ ප්‍රතිදානය වහාම 0 වේ.',
    analogyEn: 'A bank vault with two distinct keys: Both manager key AND security officer key must be turned simultaneously to open the door.',
    analogySi: 'යතුරු දෙකක් සහිත බැංකු සේප්පුව: දොර විවෘත වීමට කළමනාකරුගේ යතුර සහ ආරක්ෂක නිලධාරියාගේ යතුර යන දෙකම එකවර කරකැවිය යුතුය.',
    tactileWidget: {
      widgetKey: 'logic_gate',
      titleEn: 'Logic Gate Breadboard',
      titleSi: 'ලොජික් ද්වාර අත්හදා බැලීමේ පුවරුව',
      hideInternalTabs: true,
    },
  },
  'or gate': {
    targetUnitId: 'g10-u4',
    departmentKeywordsEn: ['Logical Addition', 'Q = A + B', 'Parallel Switches', 'Output 1 when AT LEAST ONE input is 1'],
    departmentKeywordsSi: ['තාර්කික එකතු කිරීම', 'Q = A + B', 'සමාන්තර ස්විච', 'අවම එකක් 1 වූ විට 1'],
    mnemonicEn: 'OR is happy with EITHER or BOTH (Output 0 only on 00).',
    mnemonicSi: 'OR ට ඕනෑම එකක් හෝ දෙකම 1 වූ විට සෑහේ (0 වන්නේ 00 දී පමණි).',
    examTrapWarningEn: '1 + 1 in Boolean logic equals 1 (HIGH), NOT 2 or 10.',
    examTrapWarningSi: 'බූලීය වීජ ගණිතයේ 1 + 1 = 1 (ඉහළ මට්ටම) මිස 2 නොවේ.',
    analogyEn: 'A room with two entrance doors: Opening either Door A OR Door B lets you step inside.',
    analogySi: 'දොරවල් දෙකක් ඇති කාමරයක්: දොර A හෝ දොර B විවෘත කළ විට කාමරයට ඇතුළු විය හැක.',
    tactileWidget: {
      widgetKey: 'logic_gate',
      titleEn: 'Logic Gate Breadboard',
      titleSi: 'ලොජික් ද්වාර අත්හදා බැලීමේ පුවරුව',
      hideInternalTabs: true,
    },
  },
  'not gate / inverter': {
    targetUnitId: 'g10-u4',
    departmentKeywordsEn: ['Inverter', "Q = A' (Ā)", 'Single Input Single Output', 'Parallel bypass switch'],
    departmentKeywordsSi: ['ප්‍රතිලෝමකය', "Q = A' (Ā)", 'තනි ආදානය සහ තනි ප්‍රතිදානය', 'බයිපාස් ස්විචය'],
    mnemonicEn: 'NOT inverts: 0 becomes 1, 1 becomes 0.',
    mnemonicSi: 'NOT ආදානය පෙරළයි: 0 නම් 1, 1 නම් 0.',
    examTrapWarningEn: 'A NOT gate has strictly ONE input. It cannot take multiple inputs.',
    examTrapWarningSi: 'NOT ද්වාරයකට ඇත්තේ එක් ආදානයක් පමණි; බහු ආදාන නොමැත.',
    analogyEn: 'A seesaw: When one side goes down (0), the opposite side goes up (1).',
    analogySi: 'මද්‍ය ලක්ෂ්‍යයේ සමබර ලෑල්ලක්: එක පැත්තක් පහළට ගිය විට (0), අනෙක් පැත්ත ඉහළට යයි (1).',
    tactileWidget: {
      widgetKey: 'logic_gate',
      titleEn: 'Logic Gate Breadboard',
      titleSi: 'ලොජික් ද්වාර අත්හදා බැලීමේ පුවරුව',
      hideInternalTabs: true,
    },
  },
  'nand gate': {
    targetUnitId: 'g10-u4',
    departmentKeywordsEn: ['NOT-AND', "Q = (A · B)'", 'Universal Gate', 'Output 0 ONLY when both inputs 1'],
    departmentKeywordsSi: ['නැත-සහ', "Q = (A · B)'", 'විශ්ව ද්වාරය', 'දෙකම 1 විට පමණක් 0'],
    mnemonicEn: 'NAND is inverted AND: 0 only when both are 1.',
    mnemonicSi: 'NAND යනු AND හි ප්‍රතිලෝමයයි: දෙකම 1 විට පමණක් 0 වේ.',
    examTrapWarningEn: 'The small circle/bubble at the output of a gate symbol signifies INVERSION (NOT).',
    examTrapWarningSi: 'ද්වාර සංකේතයේ අග ඇති කුඩා බුබුලෙන් (Bubble) ප්‍රතිලෝම කිරීම (NOT) අදහස් කෙරේ.',
    analogyEn: 'Two security guards who only block entry when both are standing together on duty.',
    analogySi: 'ආරක්ෂකයන් දෙදෙනාම එකවර සිටින විට පමණක් ඇතුළුවීම අවහිර කරන මුරපොලක්.',
    tactileWidget: {
      widgetKey: 'logic_gate',
      titleEn: 'Logic Gate Breadboard',
      titleSi: 'ලොජික් ද්වාර අත්හදා බැලීමේ පුවරුව',
      hideInternalTabs: true,
    },
  },
  'nor gate': {
    targetUnitId: 'g10-u4',
    departmentKeywordsEn: ['NOT-OR', "Q = (A + B)'", 'Universal Gate', 'Output 1 ONLY when both inputs 0'],
    departmentKeywordsSi: ['නැත-හෝ', "Q = (A + B)'", 'විශ්ව ද්වාරය', 'දෙකම 0 විට පමණක් 1'],
    mnemonicEn: 'NOR is inverted OR: 1 only when BOTH inputs are 0.',
    mnemonicSi: 'NOR යනු OR හි ප්‍රතිලෝමයයි: දෙකම 0 විට පමණක් 1 වේ.',
    examTrapWarningEn: 'In a NOR gate, ANY input of 1 forces the output to 0.',
    examTrapWarningSi: 'NOR ද්වාරයක ඕනෑම එක් ආදානයක් 1 වූ විට ප්‍රතිදානය 0 බවට පත් වේ.',
    analogyEn: 'A submarine airlock: Opens only when both inner and outer emergency flood valves are closed (0, 0).',
    analogySi: 'සබ්මැරීනයක ආරක්ෂිත දොර: ඇතුළත හා පිටත කපාට දෙකම වැසී ඇති විට පමණක් විවෘත වේ (0, 0).',
    tactileWidget: {
      widgetKey: 'logic_gate',
      titleEn: 'Logic Gate Breadboard',
      titleSi: 'ලොජික් ද්වාර අත්හදා බැලීමේ පුවරුව',
      hideInternalTabs: true,
    },
  },
  'xor gate': {
    targetUnitId: 'g10-u4',
    departmentKeywordsEn: ['Exclusive-OR', 'Q = A ⊕ B', 'Odd Parity Detector', 'Output 1 when inputs are DIFFERENT'],
    departmentKeywordsSi: ['විශේෂිත හෝ', 'Q = A ⊕ B', 'ආදාන වෙනස් විට 1', 'ආදාන සමාන විට 0'],
    mnemonicEn: 'XOR likes DIFFERENCE (01->1, 10->1; identical inputs yield 0).',
    mnemonicSi: 'XOR කැමති වෙනසටයි (ආදාන වෙනස් විට 1, සමාන විට 0).',
    examTrapWarningEn: 'Unlike standard OR, an XOR gate yields 0 when BOTH inputs are 1 (1 ⊕ 1 = 0).',
    examTrapWarningSi: 'සාමාන්‍ය OR මෙන් නොව, XOR ද්වාරයක ආදාන දෙකම 1 වන විට ප්‍රතිදානය 0 වේ (1 ⊕ 1 = 0).',
    analogyEn: 'A staircase two-way light switch: Flipping either upstairs or downstairs switch changes the state, but putting both in the same position turns the light off.',
    analogySi: 'පඩිපෙළ දෙපස ස්විච දෙක: එක ස්විචයක් වෙනස් කළ විට බල්බය දැල්වේ; ස්විච දෙකම එකම පැත්තට දැමූ විට බල්බය නිවේ.',
    tactileWidget: {
      widgetKey: 'logic_gate',
      titleEn: 'Logic Gate Breadboard',
      titleSi: 'ලොජික් ද්වාර අත්හදා බැලීමේ පුවරුව',
      hideInternalTabs: true,
    },
  },
  'xnor gate': {
    targetUnitId: 'g10-u4',
    departmentKeywordsEn: ['Exclusive-NOR', "Q = (A ⊕ B)'", 'Digital Equality Comparator', 'Output 1 when inputs are EQUAL'],
    departmentKeywordsSi: ['විශේෂිත නැත-හෝ', "Q = (A ⊕ B)'", 'සමානතා සංසන්දකය', 'ආදාන සමාන විට 1'],
    mnemonicEn: 'XNOR likes EQUALITY: 1 when inputs match (00->1, 11->1).',
    mnemonicSi: 'XNOR කැමති සමානතාවයටයි: ආදාන සමාන විට 1 (00 සහ 11).',
    examTrapWarningEn: 'XNOR is the exact inversion of XOR: 00 and 11 produce 1.',
    examTrapWarningSi: 'XNOR යනු XOR හි ප්‍රතිලෝමයයි: 00 සහ 11 අවස්ථාවල ප්‍රතිදානය 1 වේ.',
    analogyEn: 'A twin identifier: Lights up green only when both fingerprints match identical profiles.',
    analogySi: 'ඇඟිලි සලකුණු සසඳන උපකරණයක්: පැතිකඩ දෙකම හරියටම සමාන වූ විට පමණක් කොළ එළිය දැල්වේ.',
    tactileWidget: {
      widgetKey: 'logic_gate',
      titleEn: 'Logic Gate Breadboard',
      titleSi: 'ලොජික් ද්වාර අත්හදා බැලීමේ පුවරුව',
      hideInternalTabs: true,
    },
  },
  'universal gates (nand & nor)': {
    targetUnitId: 'g10-u4',
    departmentKeywordsEn: ['Universal Synthesis', 'Build NOT, AND, OR from NAND only', 'Build NOT, AND, OR from NOR only', 'Cost reduction in IC fabrication'],
    departmentKeywordsSi: ['විශ්ව සංස්ලේෂණය', 'NAND මගින් සියලු ද්වාර සෑදීම', 'NOR මගින් සියලු ද්වාර සෑදීම', 'IC නිෂ්පාදන පිරිවැය අඩු වීම'],
    mnemonicEn: 'NAND and NOR can build ANY circuit on their own.',
    mnemonicSi: 'NAND සහ NOR මගින් ඕනෑම පරිපථයක් තනිව නිර්මාණය කළ හැක.',
    examTrapWarningEn: 'AND and OR are NOT universal gates; you cannot synthesize an inverter (NOT) using only AND or only OR gates.',
    examTrapWarningSi: 'AND සහ OR විශ්ව ද්වාර නොවේ; ඒවා මගින් NOT ද්වාරයක් නිර්මාණය කළ නොහැක.',
    analogyEn: 'Universal Lego bricks: Using only one standard Lego brick shape to construct walls, doors, and entire buildings.',
    analogySi: 'විශ්ව ලෙගෝ කැට: එකම හැඩයේ ලෙගෝ කැටයකින් සම්පූර්ණ නිවසම ගොඩනැගීම වැනි ය.',
    tactileWidget: {
      widgetKey: 'logic_gate',
      titleEn: 'Logic Gate Breadboard',
      titleSi: 'ලොජික් ද්වාර අත්හදා බැලීමේ පුවරුව',
      hideInternalTabs: true,
    },
  },
  'truth table 2ⁿ rule': {
    targetUnitId: 'g10-u4',
    departmentKeywordsEn: ['2ⁿ Row Count Formula', 'n inputs -> 2ⁿ rows', 'Binary Counting Sequence', 'Column alternation pattern'],
    departmentKeywordsSi: ['2ⁿ පේළි ගණන සූත්‍රය', 'ආදාන n -> පේළි 2ⁿ', 'ද්විමය අනුක්‍රමය'],
    mnemonicEn: 'Inputs = n -> Rows = 2ⁿ (2 inputs = 4 rows, 3 inputs = 8 rows, 4 inputs = 16 rows).',
    mnemonicSi: 'ආදාන n නම් පේළි 2ⁿ කි (ආදාන 2 නම් 4යි, 3 නම් 8යි, 4 නම් 16යි).',
    examTrapWarningEn: 'Always alternate input binary counting correctly: column A (0000 1111), B (00 11 00 11), C (0 1 0 1 0 1 0 1).',
    examTrapWarningSi: 'සත්‍යතා වගුවේ ආදාන පේළි ද්විමය අනුපිළිවෙළට ලිවීම අනිවාර්ය වේ.',
    analogyEn: 'Flipping coins: 1 coin has 2 outcomes (H, T); 2 coins have 4 outcomes; 3 coins have 8 outcomes.',
    analogySi: 'කාසි දැමීම: කාසි 1කට අවස්ථා 2යි; කාසි 2කට අවස්ථා 4යි; කාසි 3කට අවස්ථා 8යි.',
  },
  '3-input gate operations': {
    targetUnitId: 'g10-u4',
    departmentKeywordsEn: ['3-Input AND (Q = A·B·C)', '3-Input OR (Q = A+B+C)', '3-Input NAND', '3-Input NOR', '8-row truth evaluation'],
    departmentKeywordsSi: ['3-ආදාන AND', '3-ආදාන OR', '3-ආදාන NAND', '3-ආදාන NOR', 'පේළි 8 සත්‍යතා වගුව'],
    mnemonicEn: '3-Input AND needs ALL 3 to be 1; 3-Input OR needs JUST 1 to be 1.',
    mnemonicSi: '3-ආදාන AND ට තුනම 1 විය යුතුයි; 3-ආදාන OR ට එකක් 1 වීම ප්‍රමාණවත්.',
    examTrapWarningEn: 'In a 3-input NAND, output is 0 in ONLY row 111 (1 of 8 rows). In 3-input NOR, output is 1 in ONLY row 000.',
    examTrapWarningSi: '3-ආදාන NAND හි 0 වන්නේ 111 පේළියේ පමණි; 3-ආදාන NOR හි 1 වන්නේ 000 පේළියේ පමණි.',
    analogyEn: 'A committee of three judges: Unanimous agreement needed for AND; majority/any agreement for OR.',
    analogySi: 'විනිසුරුවන් තිදෙනෙකුගේ මණ්ඩලයක්: තිදෙනාගේම එකඟතාව AND වේ; ඕනෑම අයෙකුගේ එකඟතාව OR වේ.',
    tactileWidget: {
      widgetKey: 'logic_gate',
      titleEn: 'Logic Gate Breadboard',
      titleSi: 'ලොජික් ද්වාර අත්හදා බැලීමේ පුවරුව',
      hideInternalTabs: true,
    },
  },
  'ttl ic package architecture': {
    targetUnitId: 'g10-u4',
    departmentKeywordsEn: ['14-Pin DIP Package', 'Pin 14 VCC (+5V)', 'Pin 7 GND (0V)', 'Notch orientation counter-clockwise', 'IC damage prevention'],
    departmentKeywordsSi: ['කෙවෙනි 14 DIP ඇසුරුම', 'කෙවෙනි 14 VCC (+5V)', 'කෙවෙනි 7 GND (0V)', 'කට්ට (Notch) සහ අංකනය'],
    mnemonicEn: 'Pin 14 is Top Power (+5V); Pin 7 is Ground (0V). Count counter-clockwise from the notch.',
    mnemonicSi: 'කෙවෙනි 14 බලය (+5V); කෙවෙනි 7 භූගතය (0V). කට්ට අසලින් වාමාවර්තව ගණන් කරන්න.',
    examTrapWarningEn: 'Reversing Pin 14 (+5V) and Pin 7 (GND) destroys the semiconductor gates permanently.',
    examTrapWarningSi: 'කෙවෙනි 14 සහ 7 මාරු කර සම්බන්ධ කළහොත් IC චිපය සදහටම විනාශ වේ.',
    analogyEn: 'A millipede insect: The head notch points forward; legs are counted counter-clockwise around its body.',
    analogySi: 'කකුල් 14 පත්තෑයෙක්: හිසෙහි කට්ට ඉදිරියට ඇති අතර කකුල් වාමාවර්තව අංකනය කර ඇත.',
  },
  'ttl ic catalog': {
    targetUnitId: 'g10-u4',
    departmentKeywordsEn: ['7400 (NAND)', '7402 (NOR)', '7404 (Hex NOT)', '7408 (AND)', '7432 (OR)', '7486 (XOR)'],
    departmentKeywordsSi: ['7400 (NAND)', '7402 (NOR)', '7404 (NOT)', '7408 (AND)', '7432 (OR)', '7486 (XOR)'],
    mnemonicEn: '00=NAND, 02=NOR, 04=NOT, 08=AND, 32=OR, 86=XOR.',
    mnemonicSi: '00=NAND, 02=NOR, 04=NOT, 08=AND, 32=OR, 86=XOR.',
    examTrapWarningEn: '7404 contains SIX gates (Hex Inverter); all other standard logic gate ICs contain FOUR gates (Quad).',
    examTrapWarningSi: '7404 හි NOT ද්වාර 6ක් ඇත (Hex); අනෙක් සියල්ලේ ද්වාර 4 බැගින් ඇත (Quad).',
    analogyEn: 'A toolkit with labeled drawers: Drawer 00 has NAND clamps, Drawer 08 has AND wrenches, Drawer 32 has OR screwdrivers.',
    analogySi: 'අංක කළ මෙවලම් පෙට්ටියක්: 00 ලාච්චුවේ NAND ද, 08 ලාච්චුවේ AND ද, 32 ලාච්චුවේ OR ද ඇත.',
  },
  '7402 nor pinout anomaly': {
    targetUnitId: 'g10-u4',
    departmentKeywordsEn: ['7402 Anomaly', 'Pin 1 is OUTPUT', 'Pins 2 & 3 are INPUTS', 'Inverted pin configuration'],
    departmentKeywordsSi: ['7402 සුවිශේෂී කෙවෙනි සැකැස්ම', 'කෙවෙනි 1 ප්‍රතිදානයයි', 'කෙවෙනි 2 සහ 3 ආදානයන්ය'],
    mnemonicEn: '7402 is BACKWARDS: Pin 1 Outputs; Pins 2 and 3 Input.',
    mnemonicSi: '7402 වෙනස් ය: කෙවෙනි 1 ප්‍රතිදානයයි; කෙවෙනි 2 සහ 3 ආදානයන් ය.',
    examTrapWarningEn: 'On O/L exam diagrams, DO NOT label pins 1 and 2 as inputs for a 7402 NOR gate! Pin 1 is the OUTPUT.',
    examTrapWarningSi: '7402 NOR IC හි කෙවෙනි 1 සහ 2 ආදාන ලෙස නම් නොකරන්න! කෙවෙනි 1 යනු ප්‍රතිදානයයි.',
    analogyEn: 'A revolving door that enters from the side and exits through the front, unlike standard entry doors.',
    analogySi: 'පැත්තෙන් ඇතුළු වී ඉදිරියෙන් පිටවන විශේෂ දොරක් මෙනි.',
  },
  'multi-gate circuit evaluation': {
    targetUnitId: 'g10-u4',
    departmentKeywordsEn: ['Intermediate Nodes', 'Left-to-Right Signal Propagation', 'Compound Boolean Equations', 'Step-by-step circuit tracing'],
    departmentKeywordsSi: ['අතරමැදි අග්‍ර', 'වමේ සිට දකුණට සංඥා ගැලීම', 'සංයුක්ත බූලීය සමීකරණ', 'පියවරෙන් පියවර පරිපථ ලුහුබැඳීම'],
    mnemonicEn: 'Trace from inputs, write node outputs, combine into final Q.',
    mnemonicSi: 'ආදානයේ සිට පටන් ගෙන අතරමැදි ප්‍රතිදාන ලියා අවසාන Q ලබා ගන්න.',
    examTrapWarningEn: 'Always use parentheses to preserve operator precedence (e.g. Q = (A + B) · C is completely different from A + B · C).',
    examTrapWarningSi: 'ක්‍රියාකාරී ප්‍රමුඛතාව සඳහා වරහන් නිවැරදිව භාවිත කරන්න: (A + B) · C සහ A + B · C යනු දෙකකි.',
    analogyEn: 'An assembly line: Station 1 welds part A and B; conveyor carries result to Station 2 which paints it alongside part C.',
    analogySi: 'නිෂ්පාදන පටියක්: 1 වන ස්ථානයේදී A සහ B එකලස් කරයි; එම කොටස 2 වන ස්ථානයට ගොස් C සමඟ සම්බන්ධ වේ.',
    tactileWidget: {
      widgetKey: 'logic_gate',
      titleEn: 'Logic Gate Breadboard',
      titleSi: 'ලොජික් ද්වාර අත්හදා බැලීමේ පුවරුව',
      hideInternalTabs: true,
    },
  },
  "de morgan's laws": {
    targetUnitId: 'g10-u4',
    departmentKeywordsEn: ["First Law: (A · B)' = A' + B'", "Second Law: (A + B)' = A' · B'", 'Break the line, change the sign', 'NAND-NOR equivalency'],
    departmentKeywordsSi: ["පළමු නියමය: (A · B)' = A' + B'", "දෙවන නියමය: (A + B)' = A' · B'", 'ඉර කඩන්න, ලකුණ මාරු කරන්න'],
    mnemonicEn: 'Break the line, change the sign: (AB)̄ = Ā + B̄; (A+B)̄ = Ā · B̄.',
    mnemonicSi: 'ඉර කඩන්න, ලකුණ මාරු කරන්න: ගුණ කිරීම එකතු කිරීම වේ, එකතු කිරීම ගුණ කිරීම වේ.',
    examTrapWarningEn: "The bar over the entire expression is NOT equal to separate bars without changing the operator: (A · B)' != A' · B'.",
    examTrapWarningSi: "සම්පූර්ණ ප්‍රකාශනයට උඩින් ඇති ඉර ලකුණ මාරු නොකර වෙන වෙනම ලිවිය නොහැක: (A · B)' != A' · B'.",
    analogyEn: 'Flipping a sentence: "Not (Apples AND Oranges)" means "No Apples OR No Oranges".',
    analogySi: 'ප්‍රකාශයක් ප්‍රතිලෝම කිරීම: "ඇපල් සහ දොඩම් දෙකම නැත" යන්නෙහි තේරුම "ඇපල් නැත හෝ දොඩම් නැත" යන්නයි.',
    tactileWidget: {
      widgetKey: 'logic_gate',
      titleEn: 'Logic Gate Breadboard',
      titleSi: 'ලොජික් ද්වාර අත්හදා බැලීමේ පුවරුව',
      hideInternalTabs: true,
    },
  },
  'real-world automated systems': {
    targetUnitId: 'g10-u4',
    departmentKeywordsEn: ['Burglar Alarm (AND)', 'Fire Sprinkler (OR)', 'Night Street Light (AND)', 'Microwave Oven Interlock (AND)', 'Sensor logic interfacing'],
    departmentKeywordsSi: ['ආරක්ෂක සීනුව (AND)', 'ගිනි නිවන පද්ධතිය (OR)', 'වීදි ලාම්පුව (AND)', 'මයික්‍රෝවේව් උඳුන (AND)', 'සංවේදක තර්කනය'],
    mnemonicEn: 'Safety hazards use OR (Any danger triggers alarm); Permission controls use AND (All checks must pass).',
    mnemonicSi: 'ආපදා අනතුරු සඳහා OR (ඕනෑම අනතුරකදී නාද වේ); අවසර පාලන සඳහා AND (සියලු කොන්දේසි සපිරිය යුතුය).',
    examTrapWarningEn: 'Carefully read whether a sensor triggers on 0 or 1 (e.g. LDR darkness sensor outputs 1 when dark).',
    examTrapWarningSi: 'සංවේදකය සක්‍රිය වන්නේ 0 ද 1 ද යන්න විභාග ප්‍රශ්නයෙන් හොඳින් හඳුනා ගන්න (උදා: අඳුරේදී LDR = 1).',
    analogyEn: 'Hospital emergency room call button: Pressing the button at the bed OR pulling the cord in the bathroom activates the nurse alarm (OR gate).',
    analogySi: 'රෝහල් හදිසි ඇමතුම: ඇඳ අසල බොත්තම හෝ නාන කාමරයේ ලණුව ඇදීමෙන් හෙද අනතුරු ඇඟවීම ක්‍රියාත්මක වේ (OR ද්වාරය).',
    tactileWidget: {
      widgetKey: 'logic_gate',
      titleEn: 'Logic Gate Breadboard',
      titleSi: 'ලොජික් ද්වාර අත්හදා බැලීමේ පුවරුව',
      hideInternalTabs: true,
    },
  },

  // UNIT 5: Operating Systems
  'operating systems': {
    targetUnitId: 'g10-u5',
    departmentKeywordsEn: ['Process management', 'Memory allocation', 'File system', 'Device management', 'GUI vs CLI'],
    departmentKeywordsSi: ['ක්‍රියාවලි කළමනාකරණය', 'මතක වෙන්කිරීම', 'ගොනු පද්ධතිය', 'උපාංග කළමනාකරණය', 'GUI සහ CLI'],
    mnemonicEn: 'OS is the Conductor of the Computer Orchestra.',
    mnemonicSi: 'මෙහෙයුම් පද්ධතිය යනු පරිගණක තූර්ය වාද්‍ය වෘන්දයේ මෙහෙයවන්නා ය.',
    examTrapWarningEn: 'Firmware (BIOS/UEFI in ROM) executes before the OS is loaded from secondary storage.',
    examTrapWarningSi: 'පරිගණකය පණගැන්වීමේදී OS පැටවීමට පෙර ROM හි ඇති BIOS ක්‍රියාත්මක වේ.',
  },
  'booting sequence': {
    targetUnitId: 'g10-u5',
    departmentKeywordsEn: ['Power-On Self-Test (POST)', 'BIOS / UEFI Firmware', 'Master Boot Record (MBR)', 'Loads OS into RAM', 'Cold vs Warm boot'],
    departmentKeywordsSi: ['POST පරීක්ෂාව', 'BIOS / UEFI ස්ථීරාංගය', 'MBR අංශය', 'OS ප්‍රධාන RAM වෙත පැටවීම', 'සීතල හා උණුසුම් පණගැන්වීම'],
    mnemonicEn: 'Power -> POST -> Bootloader -> OS in RAM -> User Ready.',
    mnemonicSi: 'විදුලිය -> POST -> Bootloader -> RAM වෙත OS -> පරිශීලක අතුරුමුහුණත.',
    examTrapWarningEn: 'Booting means loading OS kernel into volatile RAM; secondary storage does not execute programs directly.',
    examTrapWarningSi: 'Booting යනු දෘඩ තැටියේ ඇති මෙහෙයුම් පද්ධතිය RAM මතකයට පැටවීමයි.',
    analogyEn: 'Waking up, performing bodily reflex checks, and loading thoughts into active focus before starting work.',
    analogySi: 'නින්දෙන් අවදි වී ශරීර අවයව නිසි ලෙස ක්‍රියා කරන බව පරීක්ෂා කර සක්‍රීය වැඩට සූදානම් වීම වැනිය.',
    tactileWidget: {
      widgetKey: 'cold_boot',
      titleEn: 'Cold-Boot Pipeline Simulator',
      titleSi: 'පරිගණක පණගැන්වීමේ සිමියුලේටරය',
      hideInternalTabs: true,
    },
  },
  'cli vs gui': {
    targetUnitId: 'g10-u5',
    departmentKeywordsEn: ['Command Line Interface (CLI)', 'Graphical User Interface (GUI)', 'WIMP paradigm (Windows, Icons, Menus, Pointers)', 'Resource footprint'],
    departmentKeywordsSi: ['විධාන රේඛා අතුරුමුහුණත (CLI)', 'චිත්‍රක පරිශීලක අතුරුමුහුණත (GUI)', 'WIMP සංකල්පය (කවුළු, නිරූපක, මෙනු, දර්ශක)', 'මතක භාවිතය'],
    mnemonicEn: 'CLI needs Memory in your brain; GUI uses Memory in your RAM.',
    mnemonicSi: 'CLI සඳහා මොළයේ මතකය වැය වේ; GUI සඳහා පරිගණකයේ RAM මතකය වැය වේ.',
    examTrapWarningEn: 'WIMP stands for Windows, Icons, Menus, Pointer; do not confuse Pointers with Printers or Programs.',
    examTrapWarningSi: 'WIMP යනු Windows, Icons, Menus, Pointers වේ. P යනු Pointer (දර්ශකය) මිස Printer හෝ Program නොවේ.',
    tactileWidget: {
      widgetKey: 'interface_arena',
      titleEn: 'CLI vs GUI & WIMP Interface Arena',
      titleSi: 'CLI හා GUI අතුරුමුහුණත් පරිශ්‍රය',
      hideInternalTabs: true,
    },
  },
  'process and memory management': {
    targetUnitId: 'g10-u5',
    departmentKeywordsEn: ['Process (Program in execution)', 'CPU Time Slices (Multitasking)', 'RAM Allocation & Freeing', 'Virtual Memory (Paging / Swap)'],
    departmentKeywordsSi: ['ක්‍රියාවලිය (ධාවනය වන වැඩසටහන)', 'CPU කාලය බෙදාදීම (බහු කාර්ය)', 'RAM මතකය වෙන්කිරීම හා නිදහස් කිරීම', 'අතථ්‍ය මතකය (Virtual Memory)'],
    mnemonicEn: 'CPU shares Time; Virtual Memory borrows Secondary Space.',
    mnemonicSi: 'CPU කාලය බෙදා දෙයි; අතථ්‍ය මතකය දෘඩ තැටියේ ඉඩ ණයට ගනී.',
    examTrapWarningEn: 'Virtual Memory extends RAM capacity using hard disk space, but it does NOT increase CPU clock speed.',
    examTrapWarningSi: 'අතථ්‍ය මතකය මගින් RAM ධාරිතාව පුළුල් කරන නමුත් සකසනයේ වේගය වැඩි නොකරයි.',
    tactileWidget: {
      widgetKey: 'process_dispatcher',
      titleEn: 'CPU & Memory Resource Control Hub',
      titleSi: 'CPU හා මතක සම්පත් පාලන කේන්ද්‍රය',
      hideInternalTabs: true,
    },
  },
  'disk defragmentation': {
    targetUnitId: 'g10-u5',
    departmentKeywordsEn: ['Fragmented clusters', 'Contiguous storage rearrangement', 'Consolidates free space', 'Accelerates file read speed'],
    departmentKeywordsSi: ['කැබලි වූ පොකුරු', 'අඛණ්ඩ ආචයනය', 'හිස් ඉඩ ඒකාබද්ධ කිරීම', 'ගොනු කියවීමේ වේගය වැඩි කිරීම'],
    mnemonicEn: 'Defrag Packs scattered books back neatly onto a single continuous bookshelf.',
    mnemonicSi: 'විසිරී ගිය පොත් පිළිවෙලට එක රාක්කයකට පෙළගැස්වීම වැනි ය.',
    examTrapWarningEn: 'Defragmentation reorganizes existing data for speed; it does NOT wipe files like Formatting or divide drives like Partitioning.',
    examTrapWarningSi: 'ප්‍රතිභාගීකරණය මගින් දත්ත නොමැකේ; දත්ත විසිරී තිබීම පමණක් මඟහරවා කාර්යක්ෂම කරයි.',
    tactileWidget: {
      widgetKey: 'disk_optimizer',
      titleEn: 'Disk Workshop: Defrag & Partitioning',
      titleSi: 'තැටි ප්‍රතිභාගීකරණ හා නඩත්තු වැඩබිම',
      hideInternalTabs: true,
    },
  },
  'file hierarchy and access': {
    targetUnitId: 'g10-u5',
    departmentKeywordsEn: ['File anatomy (Name . Extension)', 'Root Directory (C:\\)', 'Path syntax', 'Sequential vs Random / Direct access', 'FAT32 vs NTFS'],
    departmentKeywordsSi: ['ගොනු ව්‍යුහය (නම . දිගුව)', 'මූල බහලුම (Root Directory)', 'ගොනු මග (File Path)', 'අනුක්‍රමික හා සසම්භාවී ප්‍රවේශය', 'FAT32 සහ NTFS'],
    mnemonicEn: 'Root is Trunk, Folders are Branches, Files are Leaves.',
    mnemonicSi: 'මූල බහලුම කඳයි, ෆෝල්ඩර අතුයි, ගොනු කොළයි.',
    examTrapWarningEn: 'File extensions identify the file format and default application software, not the physical storage sector.',
    examTrapWarningSi: 'ගොනු දිගුව මගින් ගොනුවේ වර්ගය හඳුනා ගන්නා අතර ආචයන ක්ෂේත්‍රය තීරණය නොකරයි.',
    tactileWidget: {
      widgetKey: 'file_hierarchy',
      titleEn: 'File Hierarchy & Directory Explorer',
      titleSi: 'ගොනු ධූරාවලි හා මග ගවේෂකය',
      hideInternalTabs: true,
    },
  },

  // UNIT 6: Word Processing
  'word processing': {
    targetUnitId: 'g10-u6',
    departmentKeywordsEn: ['Document formatting', 'Header & Footer', 'Tables & Columns', 'Mail Merge batch processing'],
    departmentKeywordsSi: ['ලේඛන හැඩසැසීම', 'ශීර්ෂක හා පාදක', 'වගු හා තීරු', 'තැපැල් ඒකාබද්ධතාව (Mail Merge)'],
    mnemonicEn: 'Mail Merge = 1 Form Letter + 1 Data Source = Thousands of Personalized Letters.',
    mnemonicSi: 'තැපැල් ඒකාබද්ධතාව = පොදු ලිපිය + දත්ත ලේඛනය = පුද්ගලීකරණය කළ ලිපි දහස් ගණනක්.',
    examTrapWarningEn: 'Mail merge requires both the Main Document and Data Source (e.g. spreadsheet/table).',
    examTrapWarningSi: 'තැපැල් ඒකාබද්ධතාව සඳහා ප්‍රධාන ලේඛනය සහ දත්ත මූලාශ්‍රය යන දෙකම අවශ්‍ය වේ.',
  },
  'core definitions & advantages': {
    targetUnitId: 'g10-u6',
    departmentKeywordsEn: ['Word Processing', 'Word Processor', 'Edit without retyping', 'Electronic storage', 'FOSS vs Proprietary'],
    departmentKeywordsSi: ['වචන සකසුම්', 'වචන සකසනය', 'නැවත ටයිප් කිරීමෙන් තොරව සංස්කරණය', 'විද්‍යුත් ගබඩා කිරීම', 'FOSS සහ හිමිකාර'],
    mnemonicEn: 'Typewriters print ink on paper; Word processors sculpt text in memory.',
    mnemonicSi: 'ටයිප් රයිටරය කඩදාසියට තීන්ත ඔබයි; වචන සකසනය මතකයේ අකුරු අඹයි.',
    examTrapWarningEn: 'Typewriters cannot edit text without retyping the entire page. MS Word is Proprietary; LibreOffice Writer is FOSS.',
    examTrapWarningSi: 'ටයිප් රයිටරයකින් වැරදි හදන්න මුළු පිටුවම නැවත ටයිප් කළ යුතුය. MS Word හිමිකාර වන අතර LibreOffice Writer නිදහස් හා විවෘත මූලාශ්‍ර වේ.',
    analogyEn: 'A digital chalkboard where you can erase, reshape, and duplicate writing endlessly before printing.',
    analogySi: 'කඩදාසියේ මුද්‍රණය කිරීමට පෙර ඕනෑම වාර ගණනක් මකා වෙනස් කළ හැකි ඩිජිටල් කළු ලෑල්ලක් වැනි ය.',
  },
  'examples of word processing software': {
    targetUnitId: 'g10-u6',
    departmentKeywordsEn: ['Microsoft Word (Proprietary)', 'LibreOffice Writer (FOSS)', 'Google Docs (Cloud-based)', 'OpenOffice Writer'],
    departmentKeywordsSi: ['Microsoft Word (හිමිකාර)', 'LibreOffice Writer (FOSS)', 'Google Docs (වලාකුළු)', 'OpenOffice Writer'],
    mnemonicEn: 'Word costs a fee, LibreOffice is Free, Docs works on the Web for a team of three.',
    mnemonicSi: 'Word බලපත්‍ර ගෙවිය යුතුය, LibreOffice නොමිලේ ලැබෙයි, Docs ජාලය හරහා ක්‍රියා කරයි.',
    examTrapWarningEn: 'Google Docs requires a web browser/internet and auto-saves to cloud storage; it is NOT offline desktop-only software.',
    examTrapWarningSi: 'Google Docs ක්‍රියාත්මක වීමට වෙබ් බ්‍රවුසරයක් සහ අන්තර්ජාලය අවශ්‍ය වේ; එය නොබැඳි පරිගණක මෘදුකාංගයක් නොවේ.',
    analogyEn: 'Comparing a store-bought notebook (Word), a community library copybook (LibreOffice), and a shared online group whiteboard (Google Docs).',
    analogySi: 'මිලදී ගත් සටහන් පොතක් (Word), නොමිලේ ලැබෙන පොතක් (LibreOffice) සහ මිතුරන් එකතු වී ලියන වෙබ් පුවරුවක් (Google Docs) වැනි ය.',
  },
  'key interface components': {
    targetUnitId: 'g10-u6',
    departmentKeywordsEn: ['Title Bar', 'Quick Access Toolbar', 'Ribbon', 'Horizontal & Vertical Ruler', 'Status Bar', 'Zoom Slider'],
    departmentKeywordsSi: ['මාතෘකා තීරුව', 'ඉක්මන් පිවිසුම් මෙවලම් තීරුව', 'රිබන් පටිය', 'රූල', 'තත්ත්ව තීරුව', 'විශාලන පාලකය'],
    mnemonicEn: 'Title Bar is at the Top; Status Bar is at the bottom; Zoom is in the corner.',
    mnemonicSi: 'මාතෘකා තීරුව ඉහළින්ම ය; තත්ත්ව තීරුව පහළින්ම ය; විශාලනය පහළ දකුණු කෙළවරේ ය.',
    examTrapWarningEn: 'Title bar displays document and program name. Status bar displays page count, word count, and language—NOT editing buttons.',
    examTrapWarningSi: 'මාතෘකා තීරුව ලේඛනයේ නම පෙන්වයි. තත්ත්ව තීරුව පිටු ගණන, වචන ගණන පෙන්වයි මිස සංස්කරණ විධාන අඩංගු නොවේ.',
    analogyEn: 'The cockpit dashboard of a car: speedometer and odometer (Status Bar) at bottom, license plate (Title Bar) at top, controls on dashboard (Ribbon).',
    analogySi: 'මෝටර් රථයක ඩෑෂ්බෝඩ් එකක් වැනි ය: නම ඉහළින්, මෙවලම් පුවරුව මැදින් සහ තත්ත්ව දර්ශක පහළින් පිහිටයි.',
  },
  'basic document operations & keyboard shortcuts': {
    targetUnitId: 'g10-u6',
    departmentKeywordsEn: ['New (Ctrl+N)', 'Open (Ctrl+O)', 'Save (Ctrl+S)', 'Save As (F12)', 'Print (Ctrl+P)', 'Close (Ctrl+W)'],
    departmentKeywordsSi: ['නව (Ctrl+N)', 'විවෘත (Ctrl+O)', 'සුරැකීම (Ctrl+S)', 'අලුත් නමින් (F12)', 'මුද්‍රණය (Ctrl+P)', 'වැසීම (Ctrl+W)'],
    mnemonicEn: 'Ctrl+S Saves in place; F12 Saves As with a brand-new face.',
    mnemonicSi: 'Ctrl+S පවතින නමින් සුරකියි; F12 අලුත් නමකින් සුරකියි.',
    examTrapWarningEn: 'Save overwrites existing file; Save As prompts for a new name, location, or format (e.g., PDF).',
    examTrapWarningSi: 'Save පවතින ගොනුව මත ලියයි; Save As අලුත් නමක් හෝ ස්ථානයක් ලබා දීමට විමසයි.',
    analogyEn: 'Saving your work in your current drawer vs photocopying and filing under a brand-new label.',
    analogySi: 'පවතින ලිපිගොනුවක සුරැකීම (Save) සහ අලුත් නමකින් වෙනත් ෆෝල්ඩරයක පිටපත් කර තැබීම (Save As) වැනි ය.',
  },
  'typography, styles & document formatting': {
    targetUnitId: 'g10-u6',
    departmentKeywordsEn: ['Subscript (Ctrl+=)', 'Superscript (Ctrl+Shift++)', 'Change Case (Shift+F3)', 'Justify (Ctrl+J)', 'Line Spacing', 'Indentation'],
    departmentKeywordsSi: ['යටිලකුණ (Ctrl+=)', 'උඩලකුණ (Ctrl+Shift++)', 'අකුරු ප්‍රමාණය (Shift+F3)', 'දෙපස පෙළගැස්ම (Ctrl+J)', 'පේළි පරතරය', 'ඡේද එබුම'],
    mnemonicEn: 'Subscript sinks below baseline for H2O; Superscript soars above for X2; Justify squares both margins.',
    mnemonicSi: 'යටිලකුණ පහළට බසියි (H2O); උඩලකුණ ඉහළට නඟියි (X2); Justify දෙපසම පෙළගස්වයි.',
    examTrapWarningEn: 'Justify aligns text evenly on BOTH left and right margins. Enter key should only be pressed for a NEW paragraph, not at the end of each line!',
    examTrapWarningSi: 'දෙපස පෙළගැස්ම (Justify) වම් සහ දකුණු මායිම් දෙකටම සමව පෙළගස්වයි. Enter එබිය යුත්තේ නව ඡේදයක් ඇරඹීමට පමණි!',
    analogyEn: 'Architectural typography: sculpting text blocks into clean rectangular book columns with proper scientific formulas.',
    analogySi: 'පොතක හෝ පුවත්පතක පේළි දෙපසටම පිළිවෙළට පෙළගැස්වීම සහ රසායනික සූත්‍ර නිවැරදිව ලිවීම.',
  },
  'find & replace, proofreading tools': {
    targetUnitId: 'g10-u6',
    departmentKeywordsEn: ['Find (Ctrl+F)', 'Replace (Ctrl+H)', 'Spell Check (F7)', 'Red Wavy Line', 'Green/Blue Wavy Line', 'Thesaurus (Shift+F7)'],
    departmentKeywordsSi: ['සෙවීම (Ctrl+F)', 'ප්‍රතිස්ථාපනය (Ctrl+H)', 'අක්ෂර වින්‍යාස (F7)', 'රතු රැලි ඉර', 'කොළ/නිල් රැලි ඉර', 'සමාන පද (Shift+F7)'],
    mnemonicEn: 'Red is for Spelling Spills; Green/Blue is for Grammar Thrills; Thesaurus finds Synonyms.',
    mnemonicSi: 'රතු ඉර අක්ෂර වින්‍යාස දෝෂයටයි; කොළ/නිල් ඉර ව්‍යාකරණ දෝෂයටයි; Thesaurus සමාන පද සෙවීමටයි.',
    examTrapWarningEn: 'Red wavy underline indicates a spelling error. Green/Blue wavy underline indicates grammatical/contextual error.',
    examTrapWarningSi: 'රතු රැලි ඉර අක්ෂර වින්‍යාස දෝෂයකි. කොළ/නිල් රැලි ඉර ව්‍යාකරණ දෝෂයකි.',
    analogyEn: 'An automatic copy-editor sitting beside you with a red pen for typos and a dictionary for vocabulary.',
    analogySi: 'වැරදි අක්ෂර රතු පෑනෙන් සහ ව්‍යාකරණ දෝෂ නිල් පෑනෙන් පෙන්වන විද්‍යුත් ගුරුවරයෙකු වැනි ය.',
  },
  'tables, columns & advanced layouts': {
    targetUnitId: 'g10-u6',
    departmentKeywordsEn: ['Table Cell', 'Merging Cells', 'Splitting Cells', 'Text Wrapping (Square, Tight, Behind Text)', 'Header & Footer', 'Page Break (Ctrl+Enter)'],
    departmentKeywordsSi: ['වගු සෛලය', 'සෛල ඒකාබද්ධය', 'සෛල බෙදීම', 'පෙළ එතීම', 'ශීර්ෂකය හා පාදකය', 'පිටු කැඩුම (Ctrl+Enter)'],
    mnemonicEn: 'Merge joins cells together; Split cuts them apart; Tab jumps to the next cell.',
    mnemonicSi: 'සෛල ඒකාබද්ධය එකතු කරයි; බෙදීම වෙන් කරයි; Tab ඊළඟ සෛලයට යයි.',
    examTrapWarningEn: 'Pressing Tab in the last cell of a table automatically creates a brand new row. Header repeats at the TOP; Footer repeats at the BOTTOM.',
    examTrapWarningSi: 'වගුවේ අවසන් සෛලයේදී Tab එබූ විට ස්වයංක්‍රීයව නව පේළියක් එක් වේ. ශීර්ෂකය ඉහළින්ද පාදකය පහළින්ද පුනරාවර්තනය වේ.',
    analogyEn: 'Laying ceramic tiles on a wall: combining tiles into one large slab (Merge) or dividing a tile into smaller squares (Split).',
    analogySi: 'ගඩොල් හෝ ටයිල් කැට දෙකක් එකතු කර තනි කොටසක් සෑදීම (Merge) හෝ තනි කොටසක් වෙන් කිරීම (Split) වැනි ය.',
  },
  'automated mail merge mechanism': {
    targetUnitId: 'g10-u6',
    departmentKeywordsEn: ['Main Document', 'Data Source', 'Merged Document', 'Merge Fields (<<Field>>)', 'Personalized Batch Letters'],
    departmentKeywordsSi: ['ප්‍රධාන ලේඛනය', 'දත්ත ප්‍රභවය', 'ඒකාබද්ධ ලේඛනය', 'ඒකාබද්ධ ක්ෂේත්‍ර (<<Field>>)', 'පුද්ගලිකකරණය කළ ලිපි'],
    mnemonicEn: 'Main Document (Fixed text) + Data Source (Recipient table) = Merged Documents (Personal letters).',
    mnemonicSi: 'ප්‍රධාන ලේඛනය (පොදු පෙළ) + දත්ත ප්‍රභවය (නම් ලැයිස්තුව) = ඒකාබද්ධ ලේඛන (තනි තනි ලිපි).',
    examTrapWarningEn: 'Placeholders in the main document like <<Name>> are called Merge Fields. A plain text paragraph without fields/records CANNOT serve as a data source.',
    examTrapWarningSi: '<<Name>> වැනි ස්ථාන රඳවන Merge Fields ලෙස හැඳින්වේ. තීරු/පේළි නොමැති සාමාන්‍ය පෙළ ඡේදයක් දත්ත ප්‍රභවයක් ලෙස භාවිත කළ නොහැක.',
    analogyEn: 'A cookie cutter (Main Document) stamping over different flavored fillings (Data Source) to create 150 unique personalized treats (Merged Letters).',
    analogySi: 'පොදු අච්චුවකට (ප්‍රධාන ලේඛනය) විවිධ නම් (දත්ත ප්‍රභවය) එකතු කරමින් පුද්ගලීකරණය කළ ලිපි සිය ගණනක් මුද්‍රණය කිරීම.',
  },

  // UNIT 7: Spreadsheets
  'electronic spreadsheets': {
    targetUnitId: 'g10-u7',
    departmentKeywordsEn: ['Tabular grid', 'Rows and columns', 'Automated calculations', 'VisiCalc (1979)', 'Automatic Recalculation'],
    departmentKeywordsSi: ['වගුගත ජාලය', 'පේළි සහ තීරු', 'ස්වයංක්‍රීය ගණනය', 'VisiCalc (1979)', 'ස්වයංක්‍රීය යළි ගණනය'],
    mnemonicEn: 'VisiCalc was the Vision that Started the Calculation era.',
    mnemonicSi: 'VisiCalc ලොව ප්‍රථම ඉලෙක්ට්‍රොනික පැතුරුම්පතයි.',
    examTrapWarningEn: 'Spreadsheets specialize in tabular calculations; do not confuse with word processing documents or relational databases.',
    examTrapWarningSi: 'පැතුරුම්පත් විශේෂණය වන්නේ වගුගත ගණනය කිරීම් සඳහාය; වචන සකසන හෝ දත්ත සමුදා සමඟ පටලවා නොගන්න.',
    analogyEn: 'A magical electronic ledger where changing a single input immediately recalculates all column totals automatically.',
    analogySi: 'එක් අගයක් වෙනස් කළ විට සියලු එකතු කිරීම් ක්ෂණිකව ස්වයංක්‍රීයව වෙනස් වන ඉන්ද්‍රජාලික ගිණුම් පොතක් වැනි ය.',
    tactileWidget: {
      widgetKey: 'laser_grid',
      titleEn: 'Spreadsheet Laser Grid & Formula Lab',
      titleSi: 'පැතුරුම්පත් ලේසර් දැල හා සූත්‍ර විද්‍යාගාරය',
      hideInternalTabs: true,
    },
  },
  'visicalc & spreadsheet evolution': {
    targetUnitId: 'g10-u7',
    departmentKeywordsEn: ['VisiCalc (1979)', 'Dan Bricklin', 'Bob Frankston', 'Apple II', 'FOSS (LibreOffice Calc)'],
    departmentKeywordsSi: ['VisiCalc (1979)', 'ඩෑන් බ්‍රික්ලින්', 'බොබ් ෆ්‍රෑන්ක්ස්ටන්', 'Apple II', 'FOSS (LibreOffice Calc)'],
    mnemonicEn: 'Dan & Bob built VisiCalc in 1979 on Apple II.',
    mnemonicSi: '1979 දී ඩෑන් බ්‍රික්ලින් සහ බොබ් ෆ්‍රෑන්ක්ස්ටන් Apple II සඳහා VisiCalc හැදුවා.',
    examTrapWarningEn: 'VisiCalc was the first electronic spreadsheet, not Lotus 1-2-3 or Excel. LibreOffice Calc is FOSS, Excel is Proprietary.',
    examTrapWarningSi: 'පළමු පැතුරුම්පත VisiCalc වේ. LibreOffice Calc නිදහස් හා විවෘත මූලාශ්‍ර (FOSS) වන අතර Excel හිමිකාර මෘදුකාංගයකි.',
    analogyEn: 'Transitioning from handwritten paper accounting sheets to automated computer screen ledgers.',
    analogySi: 'අතින් ලියූ ලෙජර් පොත් වෙනුවට පරිගණක තිරයේ ස්වයංක්‍රීයව ගණනය වන පද්ධතියකට මාරු වීම.',
  },
  'workbook vs worksheet architecture': {
    targetUnitId: 'g10-u7',
    departmentKeywordsEn: ['Workbook file', 'Worksheet grid', '1048576 Rows', '16384 Columns', 'XFD'],
    departmentKeywordsSi: ['කාර්ය පොත (Workbook)', 'වැඩපත්‍රිකාව (Worksheet)', 'පේළි 1,048,576', 'තීරු 16,384', 'XFD'],
    mnemonicEn: 'A Workbook is the binder; Worksheets are the gridded pages inside.',
    mnemonicSi: 'කාර්ය පොත ප්‍රධාන ගොනුවයි; වැඩපත්‍රිකා එහි ඇති පිටුයි.',
    examTrapWarningEn: 'Workbook is the complete saved file; Worksheet is a single grid page. Exactly 1,048,576 rows and 16,384 columns (up to XFD)!',
    examTrapWarningSi: 'කාර්ය පොතක් යනු මුළු ගොනුවයි; වැඩපත්‍රිකාව තනි පිටුවයි. පේළි 1,048,576 ක් සහ තීරු 16,384 ක් (XFD දක්වා) පවතී.',
    analogyEn: 'A binder notebook with multiple gridded sheets inside.',
    analogySi: 'වැඩපත්‍රිකා රැසක් අඩංගු ලිපිගොනුවක් වැනි ය.',
  },
  'cell, name box & formula bar': {
    targetUnitId: 'g10-u7',
    departmentKeywordsEn: ['Cell (Column Letter + Row Number)', 'Active Cell', 'Name Box (Address)', 'Formula Bar (Contents/Formula)'],
    departmentKeywordsSi: ['සෛලය (තීරු අක්ෂරය + පේළි අංකය)', 'සක්‍රීය සෛලය', 'නම කොටුව (ලිපිනය)', 'සූත්‍ර තීරුව (අන්තර්ගතය/සූත්‍රය)'],
    mnemonicEn: 'Column Letter First, Row Number Second (e.g. B5, not 5B).',
    mnemonicSi: 'පළමුව තීරු අක්ෂරය, දෙවනුව පේළි අංකය (උදා: B5 මිස 5B නොවේ).',
    examTrapWarningEn: 'Cell address always lists column letter first (e.g., C10 is valid, 10C is invalid). Name Box shows address; Formula Bar shows underlying formula.',
    examTrapWarningSi: 'සෛල ලිපිනයක පළමුව තීරු අක්ෂරයද දෙවනුව පේළි අංකයද යෙදේ (C10 වලංගු වේ, 10C අවලංගු වේ). නම කොටුව ලිපිනය පෙන්වන අතර සූත්‍ර තීරුව සූත්‍රය පෙන්වයි.',
    analogyEn: 'A coordinate on a treasure map or a numbered seat at the cinema (Row 5, Seat B).',
    analogySi: 'සිනමාහලක ආසන අංකයක් (B තීරුවේ 5 වන පේළිය) වැනි ය.',
  },
  'cell range & colon syntax': {
    targetUnitId: 'g10-u7',
    departmentKeywordsEn: ['Cell Range', 'Colon Separator (:)', 'Contiguous block', 'Top-left to bottom-right'],
    departmentKeywordsSi: ['සෛල පරාසය', 'කෝලන ලකුණ (:)', 'මායිම් වූ කොටස', 'ඉහළ-වමේ සිට පහළ-දකුණට'],
    mnemonicEn: 'Colon (:) connects a continuous range; Comma (,) chooses separated cells.',
    mnemonicSi: 'කෝලනය (:) සෛල පරාසයක් සම්බන්ධ කරයි; කොමාව (,) වෙන්වූ සෛල තෝරා ගනී.',
    examTrapWarningEn: 'Cell ranges MUST use a colon (e.g., A1:C5). Writing A1-C5 or A1...C5 is an examination error and gets marked down!',
    examTrapWarningSi: 'සෛල පරාස සඳහා අනිවාර්යයෙන්ම කෝලනය (:) යෙදිය යුතුය (උදා: A1:C5). ඉරක් (-) හෝ තිත් (...) යෙදීම විභාගයේදී ලකුණු අහිමි වන වරදකි.',
    analogyEn: 'Dragging a selection box across a group of photos on your desktop.',
    analogySi: 'පරිගණක තිරයේ ලිපිගොනු සමූහයක් එකවර තෝරා ගැනීම වැනි ය.',
  },
  'labels & left alignment': {
    targetUnitId: 'g10-u7',
    departmentKeywordsEn: ['Label / Text Data', 'Default Left Alignment', 'Headings and Descriptions', 'Non-numeric'],
    departmentKeywordsSi: ['ලේබල / පෙළ දත්ත', 'පෙරනිමි වම් පෙළගැස්ම', 'ශීර්ෂ සහ විස්තර', 'සංඛ්‍යාත්මක නොවන'],
    mnemonicEn: 'Letters Lean Left (Labels align to the Left).',
    mnemonicSi: 'අකුරු වමට බරයි (ලේබල වමට පෙළගැසේ).',
    examTrapWarningEn: 'Labels / Text always align to the LEFT by default; Values align to the RIGHT.',
    examTrapWarningSi: 'ලේබල/පෙළ පෙරනිමියෙන් වම් පසටත්, අගයන්/සංඛ්‍යා දකුණු පසටත් පෙළගැසේ.',
  },
  'values & right alignment': {
    targetUnitId: 'g10-u7',
    departmentKeywordsEn: ['Value / Numeric Data', 'Default Right Alignment', 'Mathematical computation', 'Currency / Numbers'],
    departmentKeywordsSi: ['අගයන් / සංඛ්‍යාත්මක දත්ත', 'පෙරනිමි දකුණු පෙළගැස්ම', 'ගණිතමය ගණනය කිරීම්', 'මුදල් / සංඛ්‍යා'],
    mnemonicEn: 'Numbers Navigate Right (Values align to the Right).',
    mnemonicSi: 'සංඛ්‍යා දකුණට යයි (අගයන් දකුණට පෙළගැසේ).',
    examTrapWarningEn: 'Values align to the RIGHT so decimal places line up naturally for column addition.',
    examTrapWarningSi: 'දශමස්ථාන එක පෙළට සිටින සේ සංඛ්‍යා පෙරනිමියෙන් දකුණු පසට පෙළගැසේ.',
  },
  'formulas, functions & equal sign': {
    targetUnitId: 'g10-u7',
    departmentKeywordsEn: ['Equal Sign (=)', 'Formula Syntax', 'User Expression', 'Built-in Function', 'Right Aligned Result'],
    departmentKeywordsSi: ['සමාන ලකුණ (=)', 'සූත්‍ර සැකැස්ම', 'පරිශීලක ප්‍රකාශනය', 'ගොඩනැඟූ ශ්‍රිතය', 'දකුණට පෙළගැසෙන ප්‍රතිඵලය'],
    mnemonicEn: 'All Formulas Start Equal: No = means plain text label!',
    mnemonicSi: 'සෑම සූත්‍රයක්ම සමාන ලකුණෙන් (=) ආරම්භ වේ; නැතිනම් එය පෙළක් වේ.',
    examTrapWarningEn: 'Every formula and function MUST begin with an equals sign (=). Omitting = stores the input as plain text without calculating!',
    examTrapWarningSi: 'සූත්‍රයක් හෝ ශ්‍රිතයක් ආරම්භයේදී සමාන ලකුණ (=) අනිවාර්ය වේ. නැතහොත් ගණනය නොවී පෙළක් ලෙස සටහන් වේ.',
  },
  'order of operator precedence': {
    targetUnitId: 'g10-u7',
    departmentKeywordsEn: ['Brackets ()', 'Exponentiation (^)', 'Multiplication (*)', 'Division (/)', 'Addition (+)', 'Subtraction (-)'],
    departmentKeywordsSi: ['වරහන් ()', 'බල නැගීම (^)', 'ගුණ කිරීම (*)', 'බෙදීම (/)', 'එකතු කිරීම (+)', 'අඩු කිරීම (-)'],
    mnemonicEn: 'BODMAS / PEMDAS: Brackets, Orders (^), Division/Multiplication (* /), Addition/Subtraction (+ -).',
    mnemonicSi: 'වරහන්, බල, ගුණ/බෙදීම්, එකතු/අඩු කිරීම්.',
    examTrapWarningEn: 'Multiplication (*) and Division (/) have equal precedence and evaluate LEFT to RIGHT before Addition (+) and Subtraction (-)!',
    examTrapWarningSi: 'ගුණ කිරීම සහ බෙදීම සමාන ප්‍රමුඛතාවයෙන් වමේ සිට දකුණට පළමුව සුළු වේ; පසුව එකතු කිරීම හා අඩු කිරීම සුළු වේ.',
  },
  'statistical functions: sum, average, min, max': {
    targetUnitId: 'g10-u7',
    departmentKeywordsEn: ['=SUM(range)', '=AVERAGE(range)', '=MAX(range)', '=MIN(range)', 'Range Arguments'],
    departmentKeywordsSi: ['=SUM(පරාසය)', '=AVERAGE(පරාසය)', '=MAX(පරාසය)', '=MIN(පරාසය)', 'පරාස විචල්‍යයන්'],
    mnemonicEn: 'SUM adds, AVERAGE means, MAX peaks, MIN drops.',
    mnemonicSi: 'SUM එකතු කරයි, AVERAGE සාමාන්‍යය ගනී, MAX උපරිමය, MIN අවමය සොයයි.',
    examTrapWarningEn: 'AVERAGE divides ONLY by numeric cells, ignoring blank cells. The function name is =AVERAGE(), not =AVG()!',
    examTrapWarningSi: 'සාමාන්‍යය සෙවීමට නියමිත නිල ශ්‍රිතය =AVERAGE() වේ. =AVG() යනු වලංගු ශ්‍රිතයක් නොවේ.',
  },
  'counting functions: count vs counta': {
    targetUnitId: 'g10-u7',
    departmentKeywordsEn: ['COUNT (Numbers only)', 'COUNTA (All non-empty)', 'Ignores blank cells', 'Text and labels included in COUNTA'],
    departmentKeywordsSi: ['COUNT (සංඛ්‍යා පමණි)', 'COUNTA (හිස් නොවන සියල්ල)', 'හිස් සෛල නොසලකා හරියි', 'COUNTA හි පෙළ අඩංගු වේ'],
    mnemonicEn: 'COUNT counts Cash (numbers); COUNTA counts ALL non-empty cells.',
    mnemonicSi: 'COUNT සංඛ්‍යා පමණක් ගණී; COUNTA හිස් නොවන සියල්ල ගණී.',
    examTrapWarningEn: 'COUNT ignores cells with text! Use COUNTA if you need to count cells containing student names or words.',
    examTrapWarningSi: 'COUNT මඟින් පෙළ සහිත සෛල ගණන් නොකරයි! පෙළ හෝ නම් සහිත සෛල ගණන් කිරීමට COUNTA භාවිත කළ යුතුය.',
  },
  'decision making: simple if function': {
    targetUnitId: 'g10-u7',
    departmentKeywordsEn: ['=IF(test, true, false)', 'Logical Test', 'Value if True', 'Value if False', 'Quotes for text output'],
    departmentKeywordsSi: ['=IF(කොන්දේසිය, සත්‍ය, අසත්‍ය)', 'තාර්කික පරීක්ෂාව', 'සත්‍ය විට අගය', 'අසත්‍ය විට අගය', 'පෙළ සඳහා උද්ධෘත'],
    mnemonicEn: 'IF(Question, Yes-Result, No-Result).',
    mnemonicSi: 'IF(කොන්දේසිය, සත්‍ය නම්, අසත්‍ය නම්).',
    examTrapWarningEn: 'Text results in IF formulas MUST be wrapped in double quotes: =IF(A1>=50, "Pass", "Fail"). Numbers do not take quotes.',
    examTrapWarningSi: 'IF ශ්‍රිතයක පෙළ ප්‍රතිදාන ද්විත්ව උද්ධෘත තුළ ලිවිය යුතුය: =IF(A1>=50, "Pass", "Fail"). සංඛ්‍යාවලට උද්ධෘත අවශ්‍ය නොවේ.',
  },
  'relative cell referencing': {
    targetUnitId: 'g10-u7',
    departmentKeywordsEn: ['Relative Reference (A1)', 'Coordinate shifting', 'Copies across rows/columns', 'No dollar signs'],
    departmentKeywordsSi: ['සාපේක්ෂ සෛල යොමු (A1)', 'ඛණ්ඩාංක වෙනස් වීම', 'පේළි/තීරු ඔස්සේ පිටපත් වීම', 'ඩොලර් සලකුණු නැත'],
    mnemonicEn: 'Relative rolls with the punches (shifts relative to new position).',
    mnemonicSi: 'සාපේක්ෂ යොමුව පිටපත් කරන ස්ථානයට අනුව වෙනස් වේ.',
    examTrapWarningEn: 'When copying =A1+B1 down one row to row 2, it becomes =A2+B2. When copying right one column to col D, it becomes =B1+C1.',
    examTrapWarningSi: 'පහළට පිටපත් කරන විට පේළි අංකය වැඩි වේ (A1 -> A2); දකුණට පිටපත් කරන විට තීරු අක්ෂරය වැඩි වේ (A1 -> B1).',
  },
  'absolute cell referencing ($a$1)': {
    targetUnitId: 'g10-u7',
    departmentKeywordsEn: ['Absolute Reference ($A$1)', 'Dollar sign ($)', 'Locked coordinates', 'F4 Key toggle', 'Fixed tax/rate cell'],
    departmentKeywordsSi: ['නිරපේක්ෂ සෛල යොමු ($A$1)', 'ඩොලර් සලකුණ ($)', 'අගුළු දැමූ ඛණ්ඩාංක', 'F4 යතුර', 'ස්ථාවර බදු/අනුපාත සෛල'],
    mnemonicEn: 'Dollar sign ($) nails it down: $A$1 stays forever locked.',
    mnemonicSi: 'ඩොලර් සලකුණ ($) තීරුව සහ පේළිය අගුළු දමයි.',
    examTrapWarningEn: 'To lock both column and row, put $ before BOTH letter and number ($B$5). $B5 locks only column; B$5 locks only row.',
    examTrapWarningSi: 'තීරුව සහ පේළිය දෙකම අගුළු දැමීමට $ ලකුණු දෙකම අවශ්‍ය වේ ($B$5). $B5 තීරුව පමණක් ද, B$5 පේළිය පමණක් ද අගුළු දමයි.',
    tactileWidget: {
      widgetKey: 'laser_grid',
      titleEn: 'Spreadsheet Laser Grid & Formula Lab',
      titleSi: 'පැතුරුම්පත් ලේසර් දැල හා සූත්‍ර විද්‍යාගාරය',
      hideInternalTabs: true,
    },
  },
  'chart types: column, bar, line, pie': {
    targetUnitId: 'g10-u7',
    departmentKeywordsEn: ['Column Chart (Vertical)', 'Bar Chart (Horizontal)', 'Line Chart (Trends over time)', 'Pie Chart (100% Proportions)', 'Legend'],
    departmentKeywordsSi: ['තීරු ප්‍රස්ථාරය (සිරස්)', 'තති ප්‍රස්ථාරය (තිරස්)', 'රේඛීය ප්‍රස්ථාරය (කාලීන ප්‍රවණතා)', 'වට ප්‍රස්ථාරය (100% ප්‍රතිශත)', 'ප්‍රස්ථාර යතුර'],
    mnemonicEn: 'Pies show Pieces of 100%; Lines show Trends over time.',
    mnemonicSi: 'වට ප්‍රස්ථාරයෙන් 100% ක කොටස්; රේඛීය ප්‍රස්ථාරයෙන් කාලීන ප්‍රවණතා.',
    examTrapWarningEn: 'Pie charts are ONLY suitable for showing proportions of a single total (100%), never for multiple data series or continuous time trends!',
    examTrapWarningSi: 'වට ප්‍රස්ථාර සුදුසු වන්නේ එක් සමස්තයක (100%) ප්‍රතිශත පෙන්වීමට පමණි; කාලීන ප්‍රවණතා සඳහා රේඛීය ප්‍රස්ථාර යොදාගත යුතුය.',
  },
  'column width & syntax errors': {
    targetUnitId: 'g10-u7',
    departmentKeywordsEn: ['##### (Narrow column width)', '#DIV/0! (Division by zero)', '#NAME? (Misspelled function name)', '#VALUE! (Invalid argument type)'],
    departmentKeywordsSi: ['##### (තීරුවේ පළල මදිවීම)', '#DIV/0! (ශූන්‍යයෙන් බෙදීම)', '#NAME? (ශ්‍රිත නාමය වැරදි වීම)', '#VALUE! (අවලංගු දත්ත වර්ගය)'],
    mnemonicEn: 'Hashes (#####) mean widen the column; DIV means zero divisor; NAME means check spelling.',
    mnemonicSi: '##### ආවොත් පළල වැඩි කරන්න; DIV ආවොත් බිංදුවෙන් බෙදීමක්; NAME ආවොත් අකුරු බලන්න.',
    examTrapWarningEn: '##### is NOT a mathematical calculation error! It only means the column is too narrow to show the number. Double click the column boundary to fix.',
    examTrapWarningSi: '##### යනු ගණිතමය දෝෂයක් නොවේ! සංඛ්‍යාව පෙන්වීමට තීරුවේ පළල මදි බව පමණි.',
  },

  // UNIT 8: Presentations
  'electronic presentations': {
    targetUnitId: 'g10-u8',
    departmentKeywordsEn: ['Slide Master (Consistency)', 'Slide Transitions', 'Custom Animations', '6x6 Rule', 'Presenter Notes'],
    departmentKeywordsSi: ['ප්‍රධාන කදාව (Slide Master)', 'කදා සංක්‍රාන්ති', 'සජීවීකරණ', '6x6 රීතිය', 'ඉදිරිපත් කරන්නාගේ සටහන්'],
    mnemonicEn: 'Slide Master controls all slides; Animations control objects inside slides.',
    mnemonicSi: 'Slide Master සියලු කදා පාලනය කරයි; සජීවීකරණ මගින් කදාව තුළ වස්තූන් පාලනය කරයි.',
    examTrapWarningEn: 'Transition applies between slides; Animation applies to individual elements on a slide.',
    examTrapWarningSi: 'සංක්‍රාන්ති (Transitions) කදා අතර ද, සජීවීකරණ (Animations) කදාව තුළ අංග සඳහා ද යෙදේ.',
  },

  // UNIT 9: Databases
  'data vs information': {
    targetUnitId: 'g10-u9',
    departmentKeywordsEn: ['Data (Raw facts, unorganized)', 'Information (Processed data with meaning)', 'DBMS (Software managing structured data)', 'Database (Organized data collection)'],
    departmentKeywordsSi: ['දත්ත (අමු කරුණු, සැකසුම් නොකළ)', 'තොරතුරු (අර්ථයක් සහිත සැකසූ දත්ත)', 'DBMS (දත්ත කළමනාකරණ මෘදුකාංග)', 'දත්ත සමුදාය (ක්‍රමවත්ව සංවිධානය කළ දත්ත)'],
    mnemonicEn: 'Raw values are Data; Processed, structured results in a DBMS are Information.',
    mnemonicSi: 'අමු අගයන් දත්ත වන අතර, DBMS මඟින් සැකසූ අර්ථවත් ප්‍රතිඵල තොරතුරු වේ.',
    examTrapWarningEn: 'Data alone cannot be used to make decisions; information derived from database processing supports decision making.',
    examTrapWarningSi: 'තීරණ ගැනීම සඳහා දත්ත තනිව භාවිත කළ නොහැක; දත්ත සමුදායෙන් සකසන තොරතුරු තීරණ ගැනීමට ඉවහල් වේ.',
    analogyEn: 'Individual student marks are data; student term rank and grade average calculated by DBMS is information.',
    analogySi: 'ශිෂ්‍යයෙකුගේ විභාග ලකුණු දත්ත වන අතර, DBMS මඟින් ගණනය කළ සාමාන්‍යය හා පන්ති ස්ථානය තොරතුරු වේ.',
  },
  'database management': {
    targetUnitId: 'g10-u9',
    departmentKeywordsEn: ['Primary Key (Unique, Not Null)', 'Foreign Key (Relational link)', 'Table / Entity', 'Record / Tuple', 'Field / Attribute'],
    departmentKeywordsSi: ['ප්‍රාථමික යතුර (අනන්‍ය, හිස් නොවන)', 'විදේශ යතුර (සම්බන්ධතා)', 'වගුව', 'වාර්තාව', 'ක්ෂේත්‍රය'],
    mnemonicEn: 'Primary Key is your NIC number; Foreign Key is the school index in a national registry.',
    mnemonicSi: 'ප්‍රාථමික යතුර ඔබේ හැඳුනුම්පත් අංකයයි; විදේශ යතුර වගු දෙකක් යා කරන පාලමයි.',
    examTrapWarningEn: 'Primary keys cannot contain duplicate or null values; composite keys use multiple fields.',
    examTrapWarningSi: 'ප්‍රාථමික යතුරක අගයන් පුනරාවර්තනය විය නොහැකි අතර හිස් (Null) විය නොහැක.',
  },
  'manual file system limitations': {
    targetUnitId: 'g10-u9',
    departmentKeywordsEn: ['Data Redundancy (Duplication)', 'Data Inconsistency (Mismatched updates)', 'High Storage Cost', 'Lack of Security & Concurrency'],
    departmentKeywordsSi: ['දත්ත අතිරික්තතාව (අනවශ්‍ය පිටපත්)', 'දත්ත අසංගතතාව (පරස්පර විරෝධී බව)', 'ඉහළ ආචයන පිරිවැය', 'අඩු ආරක්ෂාව හා සමගාමී ප්‍රවේශ ගැටලු'],
    mnemonicEn: 'Manual files cause Redundant Clones and Inconsistent Chaos.',
    mnemonicSi: 'අත්පොත් ගොනු මඟින් අතිරික්ත පිටපත් හා අසංගත වියවුල් ඇති කරයි.',
    examTrapWarningEn: 'Redundancy means unnecessary duplication; Inconsistency means differing values for the same entity across files.',
    examTrapWarningSi: 'අතිරික්තතාව යනු එකම දත්තය නැවත නැවත සටහන් වීමයි; අසංගතතාව යනු එම දත්ත එක් තැනක වෙනස් කර අනික් තැන වෙනස් නොවීමයි.',
    analogyEn: 'Having two paper address books where an updated phone number is only scribbled into one.',
    analogySi: 'ලිපින පොත් දෙකක එකම පුද්ගලයාගේ අංකය ලියා එක් පොතක පමණක් අලුත් අංකය යාවත්කාලීන කිරීම.',
  },
  'primary key & foreign key relationships': {
    targetUnitId: 'g10-u9',
    departmentKeywordsEn: ['Primary Key (Unique & Non-Null)', 'Foreign Key (Child Table Link)', 'Candidate Key', 'Composite Primary Key', 'Referential Integrity'],
    departmentKeywordsSi: ['ප්‍රාථමික යතුර (අනන්‍ය සහ ශූන්‍ය නොවන)', 'විදේශ යතුර (සම්බන්ධක යතුර)', 'අපේක්ෂක යතුර', 'සංයුක්ත ප්‍රාථමික යතුර', 'සම්බන්ධක අඛණ්ඩතාව'],
    mnemonicEn: 'Primary Key is your Passport; Foreign Key is your visa entry stamped in another country.',
    mnemonicSi: 'ප්‍රාථමික යතුර ඔබේ අනන්‍ය ගමන් බලපත්‍රයයි; විදේශ යතුර වෙනත් රටක තබන වීසා මුද්‍රාවයි.',
    examTrapWarningEn: 'A primary key can NEVER be NULL and must be unique. A foreign key CAN have duplicates and must match an existing primary key or be null.',
    examTrapWarningSi: 'ප්‍රාථමික යතුරකට කිසිවිටෙකත් Null විය නොහැකි අතර අගයන් අනන්‍ය විය යුතුය.',
    analogyEn: 'Student Admission Number identifies a student uniquely; the same Admission Number in an Exam Marks table links marks back to the student.',
    analogySi: 'ශිෂ්‍ය ඇතුළත් කිරීමේ අංකය අනන්‍යව ශිෂ්‍යයා හඳුනා ගනී; විභාග ලකුණු වගුවේ ඇති එම අංකය ලකුණු ශිෂ්‍යයාට සම්බන්ධ කරයි.',
  },
  'data hierarchy: bit to database': {
    targetUnitId: 'g10-u9',
    departmentKeywordsEn: ['Bit (0 or 1)', 'Character / Byte (8 bits)', 'Field (Column / Attribute)', 'Record (Row / Tuple)', 'Table / File (Collection of records)', 'Database'],
    departmentKeywordsSi: ['බිටුව (0 හෝ 1)', 'අක්ෂරය / බයිටය', 'ක්ෂේත්‍රය (තීරුව)', 'වාර්තාව (පේළිය)', 'ගොනුව / වගුව', 'දත්ත සමුදාය'],
    mnemonicEn: 'Bits make Bytes, Bytes form Fields, Fields build Records, Records create Tables, Tables power Databases.',
    mnemonicSi: 'බිටු එකතු වී බයිට, බයිට එකතු වී ක්ෂේත්‍ර, ක්ෂේත්‍රවලින් වාර්තා, වාර්තාවලින් වගු, වගුවලින් දත්ත සමුදාය සෑදේ.',
    examTrapWarningEn: 'Always write the hierarchy in exact increasing order: Bit -> Byte/Character -> Field -> Record -> Table/File -> Database.',
    examTrapWarningSi: 'දත්ත ධුරාවලිය කුඩාම ඒකකයේ සිට විශාලතම ඒකකය දක්වා නිවැරදි අනුපිළිවෙළට ලිවිය යුතුය: බිටුව -> අක්ෂරය -> ක්ෂේත්‍රය -> වාර්තාව -> වගුව -> දත්ත සමුදාය.',
    analogyEn: 'Letters form words, words form sentences, sentences make paragraphs, paragraphs make chapters, chapters make a library.',
    analogySi: 'අකුරුවලින් වචන, වචනවලින් වාක්‍ය, වාක්‍යවලින් ඡේද, ඡේදවලින් පොතක්, පොත්වලින් පුස්තකාලයක් සෑදීම වැනිය.',
  },
  'entity relationship cardinality (1:1, 1:n, m:n)': {
    targetUnitId: 'g10-u9',
    departmentKeywordsEn: ['One-to-One (1:1)', 'One-to-Many (1:N)', 'Many-to-Many (M:N)', 'Entity (Rectangle)', 'Attribute (Oval)', 'Relationship (Diamond)'],
    departmentKeywordsSi: ['එකකට එකක් (1:1)', 'එකකට බොහෝ (1:N)', 'බොහෝ දේට බොහෝ (M:N)', 'එන්ටිටිය (සෘජුකෝණාස්‍රය)', 'විශේෂණය (ඉලිප්සය)', 'සම්බන්ධතාව (දියමන්ති)'],
    mnemonicEn: '1:1 (One citizen, one NIC), 1:N (One teacher, many students), M:N (Many students, many clubs).',
    mnemonicSi: '1:1 (එක් පුරවැසියෙකුට එක් හැඳුනුම්පතක්), 1:N (එක් මවකට දරුවන් කිහිපයක්), M:N (සිසුන් රැසකට විෂයයන් රැසක්).',
    examTrapWarningEn: 'ER diagrams use Rectangles for Entities, Ovals for Attributes, and Diamonds for Relationships. Underline the Primary Key inside its oval!',
    examTrapWarningSi: 'ER සටහන්වල එන්ටිටි සඳහා සෘජුකෝණාස්‍ර ද, විශේෂණ සඳහා ඉලිප්ස ද, සම්බන්ධතා සඳහා දියමන්ති හැඩ ද යොදයි. ප්‍රාථමික යතුර ඉලිප්සය තුළ යටින් ඉරක් ඇඳ දක්වන්න!',
    analogyEn: 'A mother has multiple biological children (1:N), but a child has only one biological mother.',
    analogySi: 'එක් මවකට දරුවන් කිහිප දෙනෙකු සිටිය හැකි වුවත් (1:N), එක් දරුවෙකුට සිටින්නේ එක් මවක් පමණි.',
  },
  'database queries, forms & reports': {
    targetUnitId: 'g10-u9',
    departmentKeywordsEn: ['Tables (Data Storage)', 'Forms (Data Entry GUI)', 'Queries (Data Retrieval & Filtering)', 'Reports (Formatted Printable Output)'],
    departmentKeywordsSi: ['වගු (දත්ත ආචයනය)', 'ආකෘති පත්‍ර / Forms (දත්ත ඇතුළත් කිරීම)', 'විමසුම් / Queries (දත්ත පෙරීම හා සෙවීම)', 'වාර්තා / Reports (මුද්‍රණයට සුදුසු ප්‍රතිදානය)'],
    mnemonicEn: 'Store in Tables, Input via Forms, Search using Queries, Print through Reports.',
    mnemonicSi: 'ආචයනය වගුවලින්, ඇතුළත් කිරීම Forms මඟින්, සෙවීම Queries මඟින්, මුද්‍රණය Reports මඟින්.',
    examTrapWarningEn: 'Queries DO NOT store data themselves; they retrieve and display filtered slices from underlying tables.',
    examTrapWarningSi: 'විමසුම් (Queries) මඟින් දත්ත ස්ථිරව ගබඩා නොකරයි; ඒවා වගුවලින් දත්ත පෙරීම කර පෙන්වයි.',
    analogyEn: 'Table is the kitchen pantry, Form is the grocery receipt, Query is asking "where are the biscuits?", Report is the printed menu.',
    analogySi: 'වගුව යනු ගබඩා කාමරයයි, Form යනු බඩු ලැයිස්තුවයි, Query යනු අවශ්‍ය දේ සෙවීමයි, Report යනු මුද්‍රිත මෙනු පතයි.',
  },
  'real-world systems': {
    targetUnitId: 'g10-u9',
    departmentKeywordsEn: ['School Information System (SIS)', 'Hospital Management System (HMS)', 'Banking ATM Core Systems', 'Airline Reservation System'],
    departmentKeywordsSi: ['පාසල් තොරතුරු පද්ධති (SIS)', 'රෝහල් කළමනාකරණ පද්ධති (HMS)', 'බැංකු ATM පද්ධති', 'ගුවන් ගමන් වෙන්කිරීම් පද්ධති'],
    mnemonicEn: 'Real systems demand ACID reliability: Accuracy, Concurrency, Integrity, Durability.',
    mnemonicSi: 'සැබෑ ලෝකයේ පද්ධතිවලට නිවැරදිභාවය, විශ්වාසනීයත්වය සහ අඛණ්ඩතාව අත්‍යවශ්‍ය වේ.',
    examTrapWarningEn: 'Real-world DBMS platforms (MySQL, PostgreSQL, Oracle, MS Access) prevent concurrency conflicts during simultaneous access.',
    examTrapWarningSi: 'සමගාමීව කිහිපදෙනෙකු දත්ත පරිහරණය කිරීමේදී දත්ත විකෘති වීම වැළැක්වීමට DBMS ක්‍රියා කරයි.',
  },
  'exam traps': {
    targetUnitId: 'g10-u9',
    departmentKeywordsEn: ['Primary Key vs Candidate Key', 'Foreign Key referencing valid Primary Key', 'Correct Data Types (Currency vs Number, Text vs Memo)', 'Composite Key notation'],
    departmentKeywordsSi: ['ප්‍රාථමික යතුර හා අපේක්ෂක යතුර අතර වෙනස', 'විදේශ යතුර වලංගු ප්‍රාථමික යතුරකට සම්බන්ධ වීම', 'නිවැරදි දත්ත වර්ග තේරීම', 'සංයුක්ත යතුරු ලකුණු කිරීම'],
    mnemonicEn: 'Double-check Key uniqueness and underline Primary Keys in ER diagrams!',
    mnemonicSi: 'ප්‍රාථමික යතුරේ අනන්‍යතාවය නැවත පරීක්ෂා කර ER සටහන්වල යටින් ඉරක් අඳින්න!',
    examTrapWarningEn: 'Phone numbers and Postal codes must be stored as Text/Short Text, NOT Number, because they have leading zeros and no mathematical value.',
    examTrapWarningSi: 'දුරකථන අංක සහ තැපැල් කේත ගබඩා කළ යුත්තේ Text ලෙස මිස Number ලෙස නොවේ (මුල් බිංදුව රැක ගැනීමට).',
  },

  // UNIT 10 (Grade 11 Unit 1): Programming
  'algorithms and flowcharts': {
    targetUnitId: 'g11-u1',
    departmentKeywordsEn: ['Input-Process-Output', 'Flowchart Symbols (Diamond = Decision)', 'Pseudocode keywords', 'Trace Table variable tracking'],
    departmentKeywordsSi: ['ආදානය-සැකසීම-ප්‍රතිදානය', 'ගැලීම් සටහන් (දියමන්ති = තීරණ)', 'ව්‍යාජ කේත', 'හෝඩුවා වගු (Trace Table)'],
    mnemonicEn: 'Trace tables track variable values line by line through loop iterations.',
    mnemonicSi: 'හෝඩුවා වගුවක් මඟින් ලූපය තුළ විචල්‍ය අගයන් පියවරෙන් පියවර ලුහුබඳියි.',
    examTrapWarningEn: 'In flowcharts, Decision diamonds must always have exactly two clearly labeled exit paths (True/False or Yes/No).',
    examTrapWarningSi: 'ගැලීම් සටහන්වල තීරණ සංකේතයට පිටවීමේ මාර්ග දෙකක් (ඔව්/නැත) පැහැදිලිව තිබිය යුතුය.',
    tactileWidget: {
      widgetKey: 'trace_table',
      titleEn: 'Variable Trace Table Scrubber',
      titleSi: 'විචල්‍ය හෝඩුවා වගු ලුහුබැඳීමේ පුවරුව',
      hideInternalTabs: true,
    },
  },

  // UNIT 11 (Grade 11 Unit 2): SDLC
  'system development life cycle': {
    targetUnitId: 'g11-u2',
    departmentKeywordsEn: ['Identification & Feasibility', 'Analysis & Design', 'Coding & Testing', 'Deployment (Direct, Parallel, Phased, Pilot)', 'Maintenance'],
    departmentKeywordsSi: ['හඳුනාගැනීම හා ශක්‍යතාව', 'විශ්ලේෂණය හා සැලසුම්', 'කේතනය හා පරීක්ෂාව', 'ස්ථාපනය (සෘජු, සමාන්තර, අදියරගත, නියමු)', 'නඩත්තුව'],
    mnemonicEn: 'SDLC: Identify, Analyze, Design, Build, Test, Deploy, Maintain.',
    mnemonicSi: 'SDLC: හඳුනාගන්න, විශ්ලේෂණය කරන්න, සැලසුම් කරන්න, ගොඩනගන්න, පරීක්ෂා කරන්න, ස්ථාපනය කරන්න, නඩත්තු කරන්න.',
    examTrapWarningEn: 'Parallel deployment runs old and new systems together for highest safety but highest operational cost.',
    examTrapWarningSi: 'සමාන්තර ස්ථාපනයේදී පැරණි හා නව පද්ධති දෙකම එකවර ක්‍රියාත්මක වන බැවින් ආරක්ෂිත නමුත් පිරිවැය අධිකය.',
  },

  // UNIT 12 (Grade 11 Unit 3): Internet & Email
  'internet and protocols': {
    targetUnitId: 'g11-u3',
    departmentKeywordsEn: ['Client-Server architecture', 'URL structure (Protocol, Domain, Path)', 'IP addressing & DNS', 'Protocols: HTTP, SMTP, POP3/IMAP'],
    departmentKeywordsSi: ['සේවාලාභී-සේවාදායක ආකෘතිය', 'URL ව්‍යුහය', 'IP ලිපින හා DNS', 'ප්‍රොටෝකෝල: HTTP, SMTP, POP3/IMAP'],
    mnemonicEn: 'SMTP Sends mail; POP3/IMAP Pulls mail down to your device.',
    mnemonicSi: 'SMTP ඊමේල් යවයි; POP3/IMAP ඊමේල් ලබා ගනී.',
    examTrapWarningEn: 'Do not confuse SMTP (transmission protocol) with POP3/IMAP (retrieval protocols).',
    examTrapWarningSi: 'SMTP (යැවීමේ) සහ POP3/IMAP (ලබාගැනීමේ) ප්‍රොටෝකෝල පටලවා නොගන්න.',
  },

  // UNIT 13 (Grade 11 Unit 4): Multimedia
  multimedia: {
    targetUnitId: 'g11-u4',
    departmentKeywordsEn: ['Raster (Pixels, Resolution dependent)', 'Vector (Mathematical formulas, Scalable)', 'Lossy vs Lossless compression', 'File formats (JPEG, PNG, MP4)'],
    departmentKeywordsSi: ['රැස්ටර් (පික්සල, විශාල කළවිට බොඳවන)', 'වෙක්ටර් (ගණිතමය සූත්‍ර, තත්ත්වය නොනැසෙන)', 'හානිකර හා හානි රහිත සම්පීඩනය', 'ගොනු ආකෘති'],
    mnemonicEn: 'Raster pixelates when zoomed; Vector stays razor-sharp at any size.',
    mnemonicSi: 'රැස්ටර් විශාල කළ විට පික්සල් කැඩේ; වෙක්ටර් ඕනෑම ප්‍රමාණයකට තියුණුය.',
    examTrapWarningEn: 'Lossy compression permanently discards image/audio data to achieve smaller file sizes.',
    examTrapWarningSi: 'හානිකර (Lossy) සම්පීඩනයේදී ගොනු ප්‍රමාණය අඩු කිරීමට දත්ත ස්ථිරවම ඉවත් කෙරේ.',
  },

  // UNIT 14 (Grade 11 Unit 5): Web Design HTML
  'html and web design': {
    targetUnitId: 'g11-u5',
    departmentKeywordsEn: ['Semantic tags (<html>, <head>, <body>)', 'Tables (<table>, <tr>, <td>, colspan, rowspan)', 'Forms (<form>, <input>, submit)', 'Hyperlinks (<a href>)', 'CSS styling'],
    departmentKeywordsSi: ['සම්මත HTML ටැග්', 'වගු (colspan, rowspan)', 'ආකෘති පත්‍ර (<form>, <input>)', 'හයිපර්ලින්ක් (<a href>)', 'CSS මෝස්තර'],
    mnemonicEn: 'HTML builds the bones; CSS provides the skin and style.',
    mnemonicSi: 'HTML යනු සැකිල්ලයි; CSS යනු වර්ණ හා මෝස්තරයි.',
    examTrapWarningEn: 'Tags like <img>, <br>, <hr> are empty/void tags with no separate closing tag.',
    examTrapWarningSi: '<img>, <br>, <hr> වැනි ටැග් සඳහා වෙනම වැසීමේ ටැග් (Closing tags) නොමැත.',
    tactileWidget: {
      widgetKey: 'table_mason',
      titleEn: 'HTML Table Mason (Colspan & Rowspan)',
      titleSi: 'HTML වගු සහ Colspan/Rowspan නිර්මාණකරු',
      hideInternalTabs: true,
    },
  },

  // UNIT 15 (Grade 11 Unit 6): ICT & Society
  'ethics and legal issues': {
    targetUnitId: 'g11-u6',
    departmentKeywordsEn: ['Intellectual Property Act', 'Sri Lanka Computer Crimes Act No. 24 of 2007', 'Ergonomics (RSI, Eye strain)', 'E-Waste toxic heavy metals (Lead, Mercury)', '3R Green Computing'],
    departmentKeywordsSi: ['බුද්ධිමය දේපළ පනත', '2007 අංක 24 දරන ශ්‍රී ලංකා පරිගණක අපරාධ පනත', 'කාර්යශ්‍රමක්ෂමතාව (RSI, ඇස් වෙහෙස)', 'ඊ-අපද්‍රව්‍ය විෂ ලෝහ (ඊයම්, රසදිය)', '3R හරිත පරිගණනය'],
    mnemonicEn: 'Protect Minds (IP Act), Prevent Crime (Act 24 of 2007), Preserve Earth (3R Green Computing).',
    mnemonicSi: 'බුද්ධිය රකින්න (IP Act), අපරාධ වළක්වන්න (2007 අංක 24 පනත), පරිසරය රකින්න (3R).',
    examTrapWarningEn: 'Sri Lanka Computer Crimes Act is Act No. 24 of 2007; do not write incorrect years or act numbers.',
    examTrapWarningSi: 'ශ්‍රී ලංකා පරිගණක අපරාධ පනත 2007 අංක 24 දරන පනත බව නිවැරදිව මතක තබා ගන්න.',
  },
};

// ============================================================================
// 3-TIER RECALL GENERATOR LOGIC
// ============================================================================

export interface RecallCardSynthesisParams {
  unitId: string;
  termEn: string;
  termSi: string;
  definitionEn: string;
  definitionSi: string;
  bulletPointsEn?: string[];
  bulletPointsSi?: string[];
  keyTakeawayEn?: string;
  keyTakeawaySi?: string;
  sourceTier: 'tier1' | 'tier2' | 'tier3';
}

/**
 * Normalizes text to lookup keys in the curated registry
 */
function normalizeKey(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * Finds curated card metadata by term fuzzy matching, scoped strictly to the unit
 */
function findCuratedMetadata(termEn: string, unitId?: string): CuratedCardMetadata | null {
  const norm = normalizeKey(termEn);
  const normTokens = norm.split(/\s+/).filter(Boolean);

  const entries = Object.entries(CURATED_RECALL_REGISTRY).filter(([_, meta]) => {
    return !unitId || !meta.targetUnitId || meta.targetUnitId === unitId;
  });

  // Pass 1: Exact match
  for (const [key, meta] of entries) {
    if (norm === normalizeKey(key)) return meta;
  }

  // Pass 2: Multi-word key match: all key tokens in norm
  for (const [key, meta] of entries) {
    const keyTokens = normalizeKey(key).split(/\s+/).filter(Boolean);
    if (keyTokens.length > 1) {
      const allKeyInNorm = keyTokens.every((kt) =>
        normTokens.some((nt) => nt === kt || nt.startsWith(kt) || kt.startsWith(nt))
      );
      if (allKeyInNorm) return meta;
    }
  }

  // Pass 3: Single-word key match with whole-word token boundary
  for (const [key, meta] of entries) {
    const keyTokens = normalizeKey(key).split(/\s+/).filter(Boolean);
    if (keyTokens.length === 1) {
      const singleKey = keyTokens[0];
      const hasExactToken = normTokens.some(
        (nt) => nt === singleKey || (nt.length > 4 && (nt.startsWith(singleKey) || singleKey.startsWith(nt)))
      );
      if (hasExactToken) return meta;
    }
  }

  // Pass 4: Scoped to unitId: prominent keyword match
  if (unitId) {
    for (const [key, meta] of entries) {
      if (meta.targetUnitId === unitId) {
        const keyTokens = normalizeKey(key).split(/\s+/).filter(Boolean);
        const anyMatch = keyTokens.some(
          (kt) => kt.length > 3 && normTokens.some((nt) => nt.includes(kt) || kt.includes(nt))
        );
        if (anyMatch) return meta;
      }
    }
  }

  return null;
}

/**
 * Extracts salient keywords from English and Sinhala text blocks
 */
function extractKeywords(text: string, count: number = 3): string[] {
  if (!text || text.trim().length === 0) return [];
  // Split on punctuation, clauses, or bullets
  const parts = text
    .split(/[:;,.\n•\-]/)
    .map((p) => p.trim())
    .filter((p) => p.length >= 3 && p.length <= 40 && !p.toLowerCase().startsWith('example'));
  return parts.slice(0, count);
}

/**
 * 3-Tier Active Recall Flashcard Generator
 * Guarantees zero missing cards, non-empty department keywords, and memorable mnemonics.
 */
export function generate3TierRecallCard(params: RecallCardSynthesisParams): ActiveRecallCard {
  const curated = findCuratedMetadata(params.termEn, params.unitId);

  // 1. Department Keywords
  let deptKeywordsEn: string[] = curated?.departmentKeywordsEn ? [...curated.departmentKeywordsEn] : [];
  let deptKeywordsSi: string[] = curated?.departmentKeywordsSi ? [...curated.departmentKeywordsSi] : [];

  if (deptKeywordsEn.length === 0) {
    if (params.bulletPointsEn && params.bulletPointsEn.length > 0) {
      deptKeywordsEn = params.bulletPointsEn.slice(0, 3).map((b) => b.split(':')[0].trim());
    } else {
      deptKeywordsEn = extractKeywords(params.definitionEn, 3);
    }
  }
  if (deptKeywordsSi.length === 0) {
    if (params.bulletPointsSi && params.bulletPointsSi.length > 0) {
      deptKeywordsSi = params.bulletPointsSi.slice(0, 3).map((b) => b.split(':')[0].trim());
    } else {
      deptKeywordsSi = extractKeywords(params.definitionSi, 3);
    }
  }

  // Ensure absolute non-empty guarantee
  if (deptKeywordsEn.length === 0) {
    deptKeywordsEn = [params.termEn, 'O/L Key Term', 'Core Syllabus Concept'];
  }
  if (deptKeywordsSi.length === 0) {
    deptKeywordsSi = [params.termSi, 'මූලික සංකල්පය', 'විභාග ලකුණු සම්මුතිය'];
  }

  // 2. Mnemonics
  let mnemonicEn = curated?.mnemonicEn;
  let mnemonicSi = curated?.mnemonicSi;

  if (!mnemonicEn || mnemonicEn.trim().length === 0) {
    if (params.keyTakeawayEn && params.keyTakeawayEn.trim().length > 0) {
      mnemonicEn = `Golden Rule: ${params.keyTakeawayEn}`;
    } else {
      mnemonicEn = `${params.termEn}: Master this core principle for exam success.`;
    }
  }

  if (!mnemonicSi || mnemonicSi.trim().length === 0) {
    if (params.keyTakeawaySi && params.keyTakeawaySi.trim().length > 0) {
      mnemonicSi = `මූලික රීතිය: ${params.keyTakeawaySi}`;
    } else {
      mnemonicSi = `${params.termSi}: සා/පෙළ විභාග ජයග්‍රහණය සඳහා මෙම මූලික සංකල්පය මතක තබා ගන්න.`;
    }
  }

  // 3. Exam Trap Warning
  let examTrapWarningEn = curated?.examTrapWarningEn;
  let examTrapWarningSi = curated?.examTrapWarningSi;

  if (!examTrapWarningEn) {
    examTrapWarningEn = `Avoid mixing up ${params.termEn} with related concepts; always cite the precise O/L marking scheme keywords.`;
  }
  if (!examTrapWarningSi) {
    examTrapWarningSi = `${params.termSi} සම්බන්ධ විභාග ගැටලුවලදී නියමිත නිල ලකුණු සම්මුති වචන භාවිත කිරීමට වගබලා ගන්න.`;
  }

  return {
    termEn: params.termEn,
    termSi: params.termSi,
    departmentKeywordsEn: deptKeywordsEn,
    departmentKeywordsSi: deptKeywordsSi,
    mnemonicEn,
    mnemonicSi,
    definitionEn: params.definitionEn,
    definitionSi: params.definitionSi,
    examTrapWarningEn,
    examTrapWarningSi,
  };
}

// ============================================================================
// CONTEXTUAL TACTILE WIDGET MAPPING
// ============================================================================

export const TACTILE_WIDGET_CATALOG: Record<string, { titleEn: string; titleSi: string }> = {
  cpu_bus: {
    titleEn: 'CPU & Bus Architecture',
    titleSi: 'CPU හා බස්රථ පද්ධතිය',
  },
  binary_weight: {
    titleEn: '8-Bit Binary Switchboard',
    titleSi: '8-බිටු ද්වීමය ස්විච පුවරුව',
  },
  hex_vat: {
    titleEn: '24-Bit RGB Color Chamber',
    titleSi: '24-බිටු RGB වර්ණ කුටිය',
  },
  logic_gate: {
    titleEn: 'Logic Gate Breadboard',
    titleSi: 'ලොජික් ද්වාර අත්හදා බැලීමේ පුවරුව',
  },
  laser_grid: {
    titleEn: 'Spreadsheet Laser Grid & Formula Lab',
    titleSi: 'පැතුරුම්පත් ලේසර් දැල හා සූත්‍ර විද්‍යාගාරය',
  },
  trace_table: {
    titleEn: 'Variable Trace Table Scrubber',
    titleSi: 'විචල්‍ය හෝඩුවා වගු ලුහුබැඳීමේ පුවරුව',
  },
  table_mason: {
    titleEn: 'HTML Table Mason (Colspan & Rowspan)',
    titleSi: 'HTML වගු සහ Colspan/Rowspan නිර්මාණකරු',
  },
  factory_conveyor: {
    titleEn: 'Data Classifier Hopper',
    titleSi: 'දත්ත වර්ගීකරණ පද්ධතිය',
  },
  quality_radar: {
    titleEn: 'Information Quality Evaluator',
    titleSi: 'තොරතුරු ගුණාත්මකතා ඇගයීම',
  },
  system_diagram: {
    titleEn: 'IPO System Architecture',
    titleSi: 'ආදාන-සැකසුම්-ප්‍රතිදාන පද්ධති සැකැස්ම',
  },
  timeline_slider: {
    titleEn: 'Computer Evolution Timeline',
    titleSi: 'පරිගණක පරිණාම කාලරේඛාව',
  },
  cold_boot: {
    titleEn: 'Cold-Boot Pipeline Simulator',
    titleSi: 'පරිගණක පණගැන්වීමේ සිමියුලේටරය',
  },
  interface_arena: {
    titleEn: 'CLI vs GUI & WIMP Interface Arena',
    titleSi: 'CLI හා GUI අතුරුමුහුණත් පරිශ්‍රය',
  },
  process_dispatcher: {
    titleEn: 'CPU & Memory Resource Control Hub',
    titleSi: 'CPU හා මතක සම්පත් පාලන කේන්ද්‍රය',
  },
  disk_optimizer: {
    titleEn: 'Disk Workshop: Defrag & Partitioning',
    titleSi: 'තැටි ප්‍රතිභාගීකරණ හා නඩත්තු වැඩබිම',
  },
  file_hierarchy: {
    titleEn: 'File Hierarchy & Directory Explorer',
    titleSi: 'ගොනු ධූරාවලි හා මග ගවේෂකය',
  },
  os_engine: {
    titleEn: 'Operating System Engine Workbench',
    titleSi: 'මෙහෙයුම් පද්ධති ප්‍රධාන වැඩබිම',
  },
};

/**
 * Resolves contextual tactile widgets without nested tabs (hideInternalTabs: true)
 */
export function getContextualTactileWidget(
  unitId: string,
  conceptKey: string,
  visualWidgetKey?: string
): TactileWidgetConfig | undefined {
  // 1. Direct widget key resolution from theory card
  if (visualWidgetKey && TACTILE_WIDGET_CATALOG[visualWidgetKey]) {
    const meta = TACTILE_WIDGET_CATALOG[visualWidgetKey];
    return {
      widgetKey: visualWidgetKey,
      titleEn: meta.titleEn,
      titleSi: meta.titleSi,
      hideInternalTabs: true,
    };
  }

  // 2. Curated registry lookup scoped to this unit
  const curated = findCuratedMetadata(conceptKey, unitId);
  if (curated?.tactileWidget) {
    return {
      ...curated.tactileWidget,
      hideInternalTabs: true,
    };
  }

  // 3. Strict unit-specific concept key mapping
  const normKey = conceptKey.toLowerCase();
  switch (unitId) {
    case 'g10-u1':
      if (normKey === 'data' || normKey.includes('raw facts') || normKey.includes('data vs information')) {
        return {
          widgetKey: 'factory_conveyor',
          titleEn: TACTILE_WIDGET_CATALOG.factory_conveyor.titleEn,
          titleSi: TACTILE_WIDGET_CATALOG.factory_conveyor.titleSi,
          hideInternalTabs: true,
        };
      }
      if (normKey.includes('quality') || normKey.includes('attributes of')) {
        return {
          widgetKey: 'quality_radar',
          titleEn: TACTILE_WIDGET_CATALOG.quality_radar.titleEn,
          titleSi: TACTILE_WIDGET_CATALOG.quality_radar.titleSi,
          hideInternalTabs: true,
        };
      }
      if (normKey.includes('system') || normKey.includes('ipo')) {
        return {
          widgetKey: 'system_diagram',
          titleEn: TACTILE_WIDGET_CATALOG.system_diagram.titleEn,
          titleSi: TACTILE_WIDGET_CATALOG.system_diagram.titleSi,
          hideInternalTabs: true,
        };
      }
      if (normKey.includes('evolution') || normKey.includes('generation') || normKey.includes('history') || normKey.includes('pioneer') || normKey.includes('babbage')) {
        const isPioneer = normKey.includes('pioneer') || normKey.includes('babbage');
        return {
          widgetKey: 'timeline_slider',
          titleEn: TACTILE_WIDGET_CATALOG.timeline_slider.titleEn,
          titleSi: TACTILE_WIDGET_CATALOG.timeline_slider.titleSi,
          defaultSubMode: isPioneer ? 'pioneers' : 'generations',
          hideInternalTabs: true,
        };
      }
      break;
    case 'g10-u2':
      if (normKey.includes('cpu') || normKey.includes('core architecture')) {
        return {
          widgetKey: 'cpu_bus',
          titleEn: TACTILE_WIDGET_CATALOG.cpu_bus.titleEn,
          titleSi: TACTILE_WIDGET_CATALOG.cpu_bus.titleSi,
          defaultSubMode: 'architecture',
          hideInternalTabs: true,
        };
      }
      break;
    case 'g10-u3':
      if (normKey.includes('binary') || normKey.includes('place value') || normKey.includes('switch') || normKey.includes('conversion') || normKey.includes('grouping')) {
        return {
          widgetKey: 'binary_weight',
          titleEn: TACTILE_WIDGET_CATALOG.binary_weight.titleEn,
          titleSi: TACTILE_WIDGET_CATALOG.binary_weight.titleSi,
          hideInternalTabs: true,
        };
      }
      if (normKey.includes('rgb') || normKey.includes('hex') || normKey.includes('color')) {
        return {
          widgetKey: 'hex_vat',
          titleEn: TACTILE_WIDGET_CATALOG.hex_vat.titleEn,
          titleSi: TACTILE_WIDGET_CATALOG.hex_vat.titleSi,
          hideInternalTabs: true,
        };
      }
      break;
    case 'g10-u4':
      if (normKey.includes('gate') || normKey.includes('logic') || normKey.includes('nand') || normKey.includes('nor') || normKey.includes('xor') || normKey.includes('circuit') || normKey.includes('ttl') || normKey.includes('truth table')) {
        return {
          widgetKey: 'logic_gate',
          titleEn: TACTILE_WIDGET_CATALOG.logic_gate.titleEn,
          titleSi: TACTILE_WIDGET_CATALOG.logic_gate.titleSi,
          hideInternalTabs: true,
        };
      }
      break;
    case 'g10-u5':
      if (
        normKey.includes('boot') ||
        normKey.includes('post') ||
        normKey.includes('firmware') ||
        normKey.includes('bios')
      ) {
        return {
          widgetKey: 'cold_boot',
          titleEn: TACTILE_WIDGET_CATALOG.cold_boot.titleEn,
          titleSi: TACTILE_WIDGET_CATALOG.cold_boot.titleSi,
          hideInternalTabs: true,
        };
      }
      if (
        normKey.includes('cli') ||
        normKey.includes('gui') ||
        normKey.includes('wimp') ||
        normKey.includes('interface')
      ) {
        return {
          widgetKey: 'interface_arena',
          titleEn: TACTILE_WIDGET_CATALOG.interface_arena.titleEn,
          titleSi: TACTILE_WIDGET_CATALOG.interface_arena.titleSi,
          hideInternalTabs: true,
        };
      }
      if (
        normKey.includes('process') ||
        normKey.includes('virtual memory') ||
        normKey.includes('resource') ||
        normKey.includes('cpu scheduling')
      ) {
        return {
          widgetKey: 'process_dispatcher',
          titleEn: TACTILE_WIDGET_CATALOG.process_dispatcher.titleEn,
          titleSi: TACTILE_WIDGET_CATALOG.process_dispatcher.titleSi,
          hideInternalTabs: true,
        };
      }
      if (
        normKey.includes('defrag') ||
        normKey.includes('utility') ||
        normKey.includes('partition') ||
        normKey.includes('formatting')
      ) {
        return {
          widgetKey: 'disk_optimizer',
          titleEn: TACTILE_WIDGET_CATALOG.disk_optimizer.titleEn,
          titleSi: TACTILE_WIDGET_CATALOG.disk_optimizer.titleSi,
          hideInternalTabs: true,
        };
      }
      if (
        normKey.includes('file') ||
        normKey.includes('directory') ||
        normKey.includes('extension') ||
        normKey.includes('path') ||
        normKey.includes('access')
      ) {
        return {
          widgetKey: 'file_hierarchy',
          titleEn: TACTILE_WIDGET_CATALOG.file_hierarchy.titleEn,
          titleSi: TACTILE_WIDGET_CATALOG.file_hierarchy.titleSi,
          hideInternalTabs: true,
        };
      }
      break;
    case 'g10-u7':
      if (
        normKey.includes('referencing') ||
        normKey.includes('relative') ||
        normKey.includes('absolute') ||
        normKey.includes('formula') ||
        normKey.includes('function') ||
        normKey.includes('operator') ||
        normKey.includes('precedence') ||
        normKey.includes('grid') ||
        normKey.includes('spreadsheet')
      ) {
        return {
          widgetKey: 'laser_grid',
          titleEn: TACTILE_WIDGET_CATALOG.laser_grid.titleEn,
          titleSi: TACTILE_WIDGET_CATALOG.laser_grid.titleSi,
          hideInternalTabs: true,
        };
      }
      break;
    case 'g11-u1':
      if (normKey.includes('trace') || normKey.includes('variable tracking')) {
        return {
          widgetKey: 'trace_table',
          titleEn: TACTILE_WIDGET_CATALOG.trace_table.titleEn,
          titleSi: TACTILE_WIDGET_CATALOG.trace_table.titleSi,
          hideInternalTabs: true,
        };
      }
      break;
    case 'g11-u5':
      if (normKey.includes('table') && (normKey.includes('merge') || normKey.includes('colspan') || normKey.includes('rowspan') || normKey.includes('tables in html'))) {
        return {
          widgetKey: 'table_mason',
          titleEn: TACTILE_WIDGET_CATALOG.table_mason.titleEn,
          titleSi: TACTILE_WIDGET_CATALOG.table_mason.titleSi,
          hideInternalTabs: true,
        };
      }
      break;
  }

  return undefined;
}

// ============================================================================
// CHECKPOINT MCQS EXTRACTION
// ============================================================================

/**
 * Extracts verification MCQs from MASTER_QUESTION_BANKS for the Checkpoint Gate node
 */
export function extractCheckpointQuestions(unitId: string, limit: number = 4): CheckpointQuestion[] {
  const ingestedList = MASTER_QUESTION_BANKS[unitId] || [];

  if (ingestedList.length > 0) {
    return ingestedList.slice(0, limit).map((q) => {
      const options: CheckpointOption[] = q.options.map((opt) => ({
        id: opt.id,
        key: opt.key,
        en: opt.en,
        si: opt.si,
      }));

      return {
        id: q.id,
        questionNumber: q.questionNumber,
        promptEn: q.promptEn,
        promptSi: q.promptSi,
        options,
        correctOptionId: q.correctOptionId || (options.find((o) => o.key === q.correctKey)?.id ?? 'optA'),
        correctKey: q.correctKey,
        explanationEn: q.explanationEn,
        explanationSi: q.explanationSi,
        syllabusRef: q.syllabusRef,
      };
    });
  }

  // Graceful fallback from levelNodes quiz questions if question bank empty
  const matchingLevelNodes = Object.values(LEVEL_NODES).filter((n) => n.unitId === unitId);
  const fallbackQuestions: CheckpointQuestion[] = [];

  for (const ln of matchingLevelNodes) {
    for (const q of ln.quizQuestions) {
      if (fallbackQuestions.length >= limit) break;
      fallbackQuestions.push({
        id: q.id,
        promptEn: q.prompt.en,
        promptSi: q.prompt.si,
        options: q.options.map((opt, i) => {
          const keys: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];
          return {
            id: `opt${keys[i]}`,
            key: keys[i],
            en: opt.en,
            si: opt.si,
          };
        }),
        correctOptionId: `opt${['A', 'B', 'C', 'D'][q.correctIndex]}`,
        correctKey: ['A', 'B', 'C', 'D'][q.correctIndex] as 'A' | 'B' | 'C' | 'D',
        explanationEn: q.explanation.en,
        explanationSi: q.explanation.si,
        syllabusRef: q.syllabusRef,
      });
    }
  }

  return fallbackQuestions;
}

// ============================================================================
// SUBTOPIC TO THEORY CARD TOKEN SCORING
// ============================================================================

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'of', 'in', 'on', 'at', 'to', 'for', 'with', 'by', 'from',
  'as', 'is', 'are', 'was', 'were', 'it', 'its', 'their', 'this', 'that', 'these', 'those',
  'introduction', 'concept', 'concepts', 'basic', 'fundamental', 'overview', 'two', 'dimensional',
]);

function stemToken(word: string): string {
  return word.toLowerCase().replace(/(ing|ed|es|s|tion|tional)$/, '');
}

function tokenizeText(str: string): string[] {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w))
    .map(stemToken);
}

function scoreSubtopicMatch(
  tc: { title: { en: string }; bulletPoints?: { en: string }[]; keyTakeaway?: { en: string } },
  st: { titleEn: string; blocks: { en: string; highlightTerm?: string }[] }
): number {
  const tcTokens = new Set(tokenizeText(tc.title.en));
  let score = 0;

  const stTitleTokens = tokenizeText(st.titleEn);
  for (const t of stTitleTokens) {
    if (tcTokens.has(t)) score += 5;
    for (const tt of tcTokens) {
      if (t.includes(tt) || tt.includes(t)) score += 2;
    }
  }

  for (const b of st.blocks) {
    if (b.highlightTerm) {
      const hlTokens = tokenizeText(b.highlightTerm);
      for (const t of hlTokens) {
        if (tcTokens.has(t)) score += 3;
        for (const tt of tcTokens) {
          if (t.includes(tt) || tt.includes(t)) score += 1.5;
        }
      }
    }
    const bTokens = tokenizeText(b.en);
    for (const t of tcTokens) {
      if (bTokens.includes(t)) score += 0.5;
    }
  }

  if (tc.keyTakeaway?.en) {
    const ktTokens = tokenizeText(tc.keyTakeaway.en);
    for (const t of stTitleTokens) {
      if (ktTokens.includes(t)) score += 1;
    }
  }

  return score;
}

// ============================================================================
// UNIT TREE MANIFEST GENERATION (4-TIER HIERARCHY)
// ============================================================================

/**
 * Builds the complete UnitTreeManifest for a specified unit ID
 * Hierarchy: Root (Depth 0) -> Branch (Depth 1) -> Leaf (Depth 2) -> Checkpoint Gate (Depth 3)
 */
export function getUnitTreeManifest(unitId: string): UnitTreeManifest {
  const curriculum = CURRICULUM_DATA.find((c) => c.id === unitId);
  if (!curriculum) {
    throw new Error(`Unit ${unitId} not found in authentic CURRICULUM_DATA.`);
  }

  const nodes: Record<string, SyllabusTreeNode> = {};
  const branchIds: string[] = [];

  const rootNodeId = `${unitId}-root`;
  const checkpointNodeId = `${unitId}-checkpoint`;

  let totalLeavesCount = 0;
  let runningOrderIndex = 1;

  // Retrieve subtopics from LESSON_01_DATA (Unit 1) or ALL_LESSONS_DATA (Units 2-15)
  const isUnit1 = unitId === 'g10-u1';
  const subtopics = isUnit1 ? LESSON_01_DATA.subtopics : ALL_LESSONS_DATA[unitId]?.subtopics || [];

  // Level nodes for Tier 2 lookup
  const unitLevelNodes = Object.values(LEVEL_NODES).filter((n) => n.unitId === unitId);
  const theoryCardsPool = unitLevelNodes.flatMap((n) => n.theoryCards);

  // Pre-map theory cards to subtopic branches in this unit (Units 2-15)
  // Each theory card is assigned to its single best matching subtopic branch
  const branchTcMap = new Map<string, typeof theoryCardsPool>();
  if (!isUnit1) {
    subtopics.forEach((st) => branchTcMap.set(st.id, []));

    for (const tc of theoryCardsPool) {
      let bestSubtopicId: string | null = null;
      let bestScore = -1;
      for (const st of subtopics) {
        const sc = scoreSubtopicMatch(tc, st);
        if (sc > bestScore) {
          bestScore = sc;
          bestSubtopicId = st.id;
        }
      }
      if (bestSubtopicId && bestScore >= 0.5) {
        branchTcMap.get(bestSubtopicId)!.push(tc);
      } else if (subtopics.length > 0) {
        branchTcMap.get(subtopics[0].id)!.push(tc);
      }
    }
  }

  // Generate Branches (Depth 1) and Concept Leaves (Depth 2)
  subtopics.forEach((st, bIdx) => {
    const branchId = `${unitId}-b${bIdx + 1}`;
    branchIds.push(branchId);

    const leafIds: string[] = [];

    const useStructuredBlocks = isUnit1 || unitId.startsWith('g10-');

    // Synthesize leaves for this branch
    if (useStructuredBlocks) {
      // --- TIER 1 SYNTHESIS (Synthesize each distinct subtopic block into a dedicated ConceptLeaf) ---
      st.blocks.forEach((blk, lIdx) => {
        const leafId = `${branchId}-l${lIdx + 1}`;
        leafIds.push(leafId);
        totalLeavesCount++;

        const termEn = blk.highlightTerm || `${st.titleEn} Part ${lIdx + 1}`;
        const curatedMeta = findCuratedMetadata(termEn, unitId);
        const termSi =
          (blk as { highlightTermSi?: string }).highlightTermSi ||
          (curatedMeta?.departmentKeywordsSi?.[0]
            ? `${st.titleSi}: ${curatedMeta.departmentKeywordsSi[0]}`
            : `${st.titleSi} - කොටස ${lIdx + 1}`);

        const recallCard = generate3TierRecallCard({
          unitId,
          termEn,
          termSi,
          definitionEn: blk.en,
          definitionSi: blk.si,
          keyTakeawayEn: st.summaryEn,
          keyTakeawaySi: st.summarySi,
          sourceTier: 'tier1',
        });

        const tactileWidget = getContextualTactileWidget(unitId, termEn);

        const extractBullets = (text: string) => {
          const lines = text
            .split('\n')
            .map((l) => l.trim())
            .filter((l) => l.startsWith('* ') || l.startsWith('- ') || /^\d+\.\s+/.test(l))
            .map((l) => l.replace(/^[*•-]\s+/, '').replace(/^\d+\.\s+/, '').trim())
            .filter(Boolean);
          return lines.length > 0 ? lines : [text.split('\n')[0].trim()];
        };

        const theoryBite: TheoryBite = {
          titleEn: termEn,
          titleSi: termSi,
          contentEn: blk.en,
          contentSi: blk.si,
          bulletPointsEn: extractBullets(blk.en),
          bulletPointsSi: extractBullets(blk.si),
          keyTakeawayEn: st.summaryEn,
          keyTakeawaySi: st.summarySi,
        };

        const analogy: MentalModelAnalogy | undefined = curatedMeta?.analogyEn
          ? {
              analogyEn: curatedMeta.analogyEn,
              analogySi: curatedMeta.analogySi || '',
            }
          : undefined;

        const leafPayload: ConceptLeafPayload = {
          theoryBite,
          analogy,
          tactileWidget,
          activeRecallCard: recallCard,
        };

        nodes[leafId] = {
          id: leafId,
          unitId,
          type: 'leaf',
          depth: 2,
          orderIndex: runningOrderIndex++,
          parentId: branchId,
          childIds: [checkpointNodeId],
          titleEn: termEn,
          titleSi: termSi,
          leafPayload,
        };
      });
    } else {
      // --- TIER 2 & TIER 3 SYNTHESIS (Units 2-15) ---
      const assignedTheoryCards = branchTcMap.get(st.id) || [];

      if (assignedTheoryCards.length > 0) {
        // TIER 2: Synthesize concept leaves from matched LEVEL_NODES micro-cards
        assignedTheoryCards.forEach((tc, lIdx) => {
          const leafId = `${branchId}-l${lIdx + 1}`;
          leafIds.push(leafId);
          totalLeavesCount++;

          const recallCard = generate3TierRecallCard({
            unitId,
            termEn: tc.title.en,
            termSi: tc.title.si,
            definitionEn: tc.keyTakeaway.en,
            definitionSi: tc.keyTakeaway.si,
            bulletPointsEn: tc.bulletPoints.map((b) => b.en),
            bulletPointsSi: tc.bulletPoints.map((b) => b.si),
            keyTakeawayEn: tc.keyTakeaway.en,
            keyTakeawaySi: tc.keyTakeaway.si,
            sourceTier: 'tier2',
          });

          const curatedMeta = findCuratedMetadata(tc.title.en, unitId);
          const tactileWidget = getContextualTactileWidget(unitId, tc.title.en, tc.visualWidget);

          const theoryBite: TheoryBite = {
            titleEn: tc.title.en,
            titleSi: tc.title.si,
            contentEn: tc.keyTakeaway.en,
            contentSi: tc.keyTakeaway.si,
            bulletPointsEn: tc.bulletPoints.map((b) => b.en),
            bulletPointsSi: tc.bulletPoints.map((b) => b.si),
            keyTakeawayEn: tc.keyTakeaway.en,
            keyTakeawaySi: tc.keyTakeaway.si,
          };

          const leafPayload: ConceptLeafPayload = {
            theoryBite,
            analogy: curatedMeta?.analogyEn
              ? { analogyEn: curatedMeta.analogyEn, analogySi: curatedMeta.analogySi || '' }
              : undefined,
            tactileWidget,
            activeRecallCard: recallCard,
          };

          nodes[leafId] = {
            id: leafId,
            unitId,
            type: 'leaf',
            depth: 2,
            orderIndex: runningOrderIndex++,
            parentId: branchId,
            childIds: [checkpointNodeId],
            titleEn: tc.title.en,
            titleSi: tc.title.si,
            leafPayload,
          };
        });
      } else {
        // TIER 3: Synthesize concept leaves from subtopic blocks & summary fallback
        const highlightBlocks = st.blocks.filter((b) => b.highlightTerm && b.highlightTerm.length > 0);
        const blocksToUse = highlightBlocks.length > 0 ? highlightBlocks.slice(0, 2) : [st.blocks[0]].filter(Boolean);

        if (blocksToUse.length === 0) {
          // Synthetic single block from subtopic summary
          blocksToUse.push({
            id: `${st.id}-b0`,
            en: st.summaryEn || st.titleEn,
            si: st.summarySi || st.titleSi,
            highlightTerm: st.titleEn,
          });
        }

        blocksToUse.forEach((blk, lIdx) => {
          const leafId = `${branchId}-l${lIdx + 1}`;
          leafIds.push(leafId);
          totalLeavesCount++;

          const termEn = blk.highlightTerm || st.titleEn;
          const termSi = st.titleSi;

          const recallCard = generate3TierRecallCard({
            unitId,
            termEn,
            termSi,
            definitionEn: blk.en || st.summaryEn || '',
            definitionSi: blk.si || st.summarySi || '',
            keyTakeawayEn: st.summaryEn,
            keyTakeawaySi: st.summarySi,
            sourceTier: 'tier3',
          });

          const curatedMeta = findCuratedMetadata(termEn, unitId);
          const tactileWidget = getContextualTactileWidget(unitId, termEn);

          const theoryBite: TheoryBite = {
            titleEn: termEn,
            titleSi: termSi,
            contentEn: blk.en,
            contentSi: blk.si,
            keyTakeawayEn: st.summaryEn,
            keyTakeawaySi: st.summarySi,
          };

          const leafPayload: ConceptLeafPayload = {
            theoryBite,
            analogy: curatedMeta?.analogyEn
              ? { analogyEn: curatedMeta.analogyEn, analogySi: curatedMeta.analogySi || '' }
              : undefined,
            tactileWidget,
            activeRecallCard: recallCard,
          };

          nodes[leafId] = {
            id: leafId,
            unitId,
            type: 'leaf',
            depth: 2,
            orderIndex: runningOrderIndex++,
            parentId: branchId,
            childIds: [checkpointNodeId],
            titleEn: termEn,
            titleSi: termSi,
            leafPayload,
          };
        });
      }
    }

    // Branch node definition (Depth 1)
    nodes[branchId] = {
      id: branchId,
      unitId,
      type: 'branch',
      depth: 1,
      orderIndex: bIdx + 1,
      parentId: rootNodeId,
      childIds: leafIds,
      titleEn: st.titleEn,
      titleSi: st.titleSi,
      branchPayload: {
        branchNumber: st.number,
        summaryEn: st.summaryEn,
        summarySi: st.summarySi,
        totalLeaves: leafIds.length,
      },
    };
  });

  // Checkpoint Gate Node (Depth 3)
  const checkpointQuestions = extractCheckpointQuestions(unitId, 5);
  nodes[checkpointNodeId] = {
    id: checkpointNodeId,
    unitId,
    type: 'checkpoint',
    depth: 3,
    orderIndex: runningOrderIndex + 1,
    parentId: rootNodeId,
    childIds: [],
    titleEn: `${curriculum.titleEn} - Checkpoint Gate`,
    titleSi: `${curriculum.titleSi} - පරීක්ෂණ ද්වාරය`,
    checkpointPayload: {
      titleEn: `${curriculum.titleEn} - Verification Checkpoint`,
      titleSi: `${curriculum.titleSi} - අවසන් සත්‍යාපන ද්වාරය`,
      instructionsEn: 'Pass this verification challenge to certify mastery of this unit tree.',
      instructionsSi: 'මෙම ඒකකයේ ප්‍රවීණතාවය තහවුරු කිරීම සඳහා මෙම සත්‍යාපන අභියෝගය සම්පූර්ණ කරන්න.',
      questions: checkpointQuestions,
      passingScore: 70,
      rewardXp: 150,
    },
  };

  // Root Node (Depth 0)
  const rootNode: SyllabusTreeNode = {
    id: rootNodeId,
    unitId,
    type: 'root',
    depth: 0,
    orderIndex: 0,
    parentId: null,
    childIds: branchIds,
    titleEn: curriculum.titleEn,
    titleSi: curriculum.titleSi,
    rootPayload: {
      unitNumber: curriculum.unitNumber,
      grade: curriculum.grade,
      overviewEn: curriculum.shortDescEn,
      overviewSi: curriculum.shortDescSi,
      totalBranches: branchIds.length,
      totalLeaves: totalLeavesCount,
    },
  };

  nodes[rootNodeId] = rootNode;

  return {
    unitId,
    grade: curriculum.grade,
    unitNumber: curriculum.unitNumber,
    titleEn: curriculum.titleEn,
    titleSi: curriculum.titleSi,
    rootNode,
    nodes,
    branchIds,
    checkpointNodeId,
  };
}

/**
 * Returns manifests for all 15 authentic curriculum units
 */
export function getAllUnitTreeManifests(): UnitTreeManifest[] {
  return CURRICULUM_DATA.map((c) => getUnitTreeManifest(c.id));
}
