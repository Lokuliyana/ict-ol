export interface PastPaperQuestion {
  id: string;
  year: number;
  paperType: 'Paper I' | 'Paper II';
  questionNumber: string;
  topicId: string; // e.g. "1.1", "1.2", "1.5", "1.7"
  subtopicTitleEn: string;
  subtopicTitleSi: string;
  type: 'mcq' | 'structured';
  badgeText: string; // e.g. "2020 O/L Paper I - Q02"
  
  // Question texts
  questionEn: string;
  questionSi: string;
  contextEn?: string;
  contextSi?: string;
  
  // MCQ specific
  options?: {
    id: string; // "1", "2", "3", "4"
    en: string;
    si: string;
  }[];
  correctOptionId?: string;
  
  // Structured essay specific
  sampleAnswerEn?: string;
  sampleAnswerSi?: string;
  markingRubricEn?: string[];
  markingRubricSi?: string[];

  // Explanations for both
  explanationEn: string;
  explanationSi: string;
}

export const PAST_PAPER_QUESTIONS: PastPaperQuestion[] = [
  {
    id: "pp-2020-p1-q2",
    year: 2020,
    paperType: "Paper I",
    questionNumber: "Q02",
    topicId: "1.2",
    subtopicTitleEn: "1.2 Information System",
    subtopicTitleSi: "1.2 තොරතුරු පද්ධතිය",
    type: "mcq",
    badgeText: "2020 O/L Paper I - Q02",
    questionEn: "2. The three main functions of an information system are",
    questionSi: "2. තොරතුරු පද්ධතියක ප්‍රධාන කාර්යයන් තුන වන්නේ",
    options: [
      { id: "1", en: "(1) input, process and output.", si: "(1) ආදානය, සැකසීම සහ ප්‍රතිදානයයි." },
      { id: "2", en: "(2) code, compile and execute.", si: "(2) කේතනය, සම්පාදනය සහ ක්‍රියාත්මක කිරීමයි." },
      { id: "3", en: "(3) design, develop and test.", si: "(3) සැලසුම් කිරීම, සංවර්ධනය සහ පරීක්ෂා කිරීමයි." },
      { id: "4", en: "(4) select, copy and paste.", si: "(4) තේරීම, පිටපත් කිරීම සහ අලවීමයි." }
    ],
    correctOptionId: "1",
    explanationEn: "Textbook Ref 1.2: 'Submitting data for processing is called Input and the result we get after processing is called Output. Hence the purpose of a system is to receive data, process and store them and provide results.' Option (1) is the core textbook trio.",
    explanationSi: "පෙළපොත් යොමුව 1.2: සැකසීම සඳහා දත්ත ලබා දීම 'ආදානය' ද, සකස් කිරීම 'සැකසීම' ද, ලැබෙන ප්‍රතිඵලය 'ප්‍රතිදානය' ද වේ. එබැවින් නිවැරදි පිළිතුර (1) වේ."
  },
  {
    id: "pp-2021-p1-q1",
    year: 2021,
    paperType: "Paper I",
    questionNumber: "Q01",
    topicId: "1.1",
    subtopicTitleEn: "1.1 Data and Information",
    subtopicTitleSi: "1.1 දත්ත සහ තොරතුරු",
    type: "mcq",
    badgeText: "2021 O/L Paper I - Q01",
    questionEn: "1. Which of the following is an example for a data processing task of a user?",
    questionSi: "1. පහත සඳහන් කුමක් පරිශීලකයකුගේ දත්ත සකසුම් කාර්යයකට උදාහරණයක් වේ ද?",
    options: [
      { id: "1", en: "(1) Installing word processing software in a personal computer", si: "(1) පුද්ගල පරිගණකයකට වචන සකසුම් මෘදුකාංගයක් ස්ථාපනය කිරීම" },
      { id: "2", en: "(2) Formatting the hard disk in a personal computer", si: "(2) පුද්ගල පරිගණකයක දෘඩ තැටිය හැඩසවුම් (formatting) ගැන්වීම" },
      { id: "3", en: "(3) Reading an online newspaper using a web browser", si: "(3) වෙබ් අන්වේක්ෂයක් භාවිත කර මාර්ගගත (online) පුවත්පතක් කියවීම" },
      { id: "4", en: "(4) Calculating the average marks obtained by a student using a spreadsheet software", si: "(4) ශිෂ්‍යයකු ලබාගන්නා ලද සාමාන්‍ය ලකුණු පැතුරුම්පතක් භාවිතයෙන් ගණනය කිරීම" }
    ],
    correctOptionId: "4",
    explanationEn: "Calculating marks from raw scores to generate averages is the exact textbook definition of processing data into information.",
    explanationSi: "ලකුණු ඇසුරින් සාමාන්‍යය ගණනය කිරීම යනු අමුදත්ත සැකසීම මගින් අර්ථවත් තොරතුරු ජනනය කිරීමේ සෘජු උදාහරණයකි."
  },
  {
    id: "pp-2021-p2-q1i",
    year: 2021,
    paperType: "Paper II",
    questionNumber: "Q01 (i)",
    topicId: "1.2",
    subtopicTitleEn: "1.2 Information System",
    subtopicTitleSi: "1.2 තොරතුරු පද්ධතිය",
    type: "structured",
    badgeText: "2021 O/L Paper II - Q01 (i)",
    contextEn: "A school intends to record teacher attendance using a fingerprint scanner connected to a computer system. The system generates a monthly attendance report.",
    contextSi: "එක්තරා පාසලක ගුරුවරු පරිගණක පද්ධතියකට සම්බන්ධ කර ඇති ඇඟිලි සලකුණු යන්ත්‍රයක් භාවිතයෙන් පැමිණීම සටහන් කිරීමට අපේක්ෂා කරති. මෙම පද්ධතිය මගින් මාසිකව පැමිණීමේ වාර්තාවක් ජනනය කරයි.",
    questionEn: "Write down one example for input and one example for output in the above information system.",
    questionSi: "ඉහත තොරතුරු පද්ධතියේ ආදානයක් සඳහා එක් උදාහරණයක් සහ ප්‍රතිදානයක් සඳහා එක් උදාහරණයක් ලියන්න.",
    sampleAnswerEn: "• Input: Fingerprint scan / Teacher's biometric data / Teacher ID\n• Output: Monthly attendance report / Attendance confirmation beep / Screen display of arrival time",
    sampleAnswerSi: "• ආදානය (Input): ගුරුවරයාගේ ඇඟිලි සලකුණ / ඇඟිලි සලකුණු ස්කෑන් දත්ත / ගුරු අංකය\n• ප්‍රතිදානය (Output): මාසික පැමිණීමේ වාර්තාව / පැමිණීම තහවුරු කෙරෙන තිර සටහන හෝ ශබ්ද සංඥාව",
    markingRubricEn: [
      "1 mark for correct Input (Fingerprint data / scan / biometric input)",
      "1 mark for correct Output (Monthly attendance report / printed summary)"
    ],
    markingRubricSi: [
      "නිවැරදි ආදානය සඳහා ලකුණු 1ක් (ඇඟිලි සලකුණ / ගුරු හැඳුනුම් අංකය)",
      "නිවැරදි ප්‍රතිදානය සඳහා ලකුණු 1ක් (මාසික පැමිණීමේ වාර්තාව / මුද්‍රිත සාරාංශය)"
    ],
    explanationEn: "Biometric reading is entered into the scanner (Input). After database processing, the monthly report is rendered or printed (Output).",
    explanationSi: "ඇඟිලි සලකුණු සංවේදකය මගින් ලබා ගන්නා දත්ත ආදානය වන අතර, පද්ධතියෙන් සකස් කර නිකුත් කරන මාසික වාර්තාව ප්‍රතිදානය වේ."
  },
  {
    id: "pp-2020-p2-q1i",
    year: 2020,
    paperType: "Paper II",
    questionNumber: "Q01 (i)",
    topicId: "1.5",
    subtopicTitleEn: "1.5 Applications of ICT - Education",
    subtopicTitleSi: "1.5 ICT යෙදීම් - අධ්‍යාපනය",
    type: "structured",
    badgeText: "2020 O/L Paper II - Q01 (i)",
    contextEn: "It has been a common practice to use Learning Management Systems (LMS) to manage both schools and higher education institutes.",
    contextSi: "පාසල් හා උසස් අධ්‍යාපනික ආයතනවල පරිපාලනය සඳහා ඉගෙනුම් කළමනාකරණ පද්ධති (LMS) යොදාගැනුම පොදු භාවිතයක්ව පවතී.",
    questionEn: "Write down two facilities provided by an LMS for students.",
    questionSi: "ඉගෙනුම් කළමනාකරණ පද්ධතියක් (LMS) මගින් සිසුන්ට ලබාදෙන පහසුකම් දෙකක් ලියන්න.",
    sampleAnswerEn: "1. Submitting assignments and viewing grades / feedback online.\n2. Accessing course materials, lecture notes, video recordings, and study guides anywhere, anytime.\n(Other acceptable: Participating in discussion forums, taking online quizzes/evaluations).",
    sampleAnswerSi: "1. පැවරුම් (Assignments) මාර්ගගතව ඉදිරිපත් කිරීම සහ ලකුණු / ඇගයීම් ලබා ගැනීම.\n2. පාඨමාලා සටහන්, වීඩියෝ සහ අධ්‍යයන ද්‍රව්‍ය ඕනෑම වේලාවක ඕනෑම තැනක සිට බාගත කිරීම හෝ කියවීම.\n(විකල්ප: සාකච්ඡා මණ්ඩපවල (Forums) අදහස් හුවමාරු කර ගැනීම, මාර්ගගත ප්‍රශ්නාවලිවලට පෙනී සිටීම).",
    markingRubricEn: [
      "1 mark each for any two distinct student facilities from the textbook list"
    ],
    markingRubricSi: [
      "පෙළපොතේ දැක්වෙන සිසුන්ට අදාළ පහසුකම් දෙකක් සඳහා එක් පහසුකමකට ලකුණු 1 බැගින්"
    ],
    explanationEn: "Grade 10 Textbook Section 1.5.2 explicitly highlights: assignments, notes, supervision, evaluation, and forums.",
    explanationSi: "10 ශ්‍රේණියේ පෙළපොතේ 1.5.2 උපවගන්තියේ සිසුන්ට ලැබෙන පහසුකම් පැහැදිලිව දක්වා ඇත."
  },
  {
    id: "pp-2020-p2-q1ii",
    year: 2020,
    paperType: "Paper II",
    questionNumber: "Q01 (ii)",
    topicId: "1.2",
    subtopicTitleEn: "1.2 Information System / System Software",
    subtopicTitleSi: "1.2 තොරතුරු පද්ධතිය / පද්ධති මෘදුකාංග",
    type: "structured",
    badgeText: "2020 O/L Paper II - Q01 (ii)",
    contextEn: "Consider the following two incomplete statements:\n(a) The ........A........ is the primary storage device of desktop computers.\n(b) An operating system is an example for ........B........ .\nList of terms: {hard disk, systems software, application software, RAM}",
    contextSi: "පහත දැක්වෙන අසම්පූර්ණ වාක්‍ය යුගල සලකා බලන්න:\n(a) ඩෙස්ක්ටොප් පරිගණකවල ප්‍රාථමික ආචයන උපාංගය වන්නේ ........A........ වේ.\n(b) මෙහෙයුම් පද්ධතියක් යනු ........B........ සඳහා උදාහරණයකි.\nපද ලැයිස්තුව: {දෘඩ තැටිය, පද්ධති මෘදුකාංග, යෙදුම් මෘදුකාංග, RAM}",
    questionEn: "Identify the matching term for each of the labels A and B from the list of terms given above.",
    questionSi: "ඉහත පද ලැයිස්තුවෙන් A සහ B ලේබල සඳහා ගැළපෙන පදය තෝරා ලියන්න.",
    sampleAnswerEn: "• A: RAM (Random Access Memory - primary internal storage)\n• B: systems software (Operating System coordinates hardware)",
    sampleAnswerSi: "• A: RAM (ප්‍රාථමික මතකය / ආචයනය)\n• B: පද්ධති මෘදුකාංග (systems software)",
    markingRubricEn: [
      "1 mark for A = RAM",
      "1 mark for B = systems software"
    ],
    markingRubricSi: [
      "A = RAM සඳහා ලකුණු 1යි",
      "B = පද්ධති මෘදුකාංග සඳහා ලකුණු 1යි"
    ],
    explanationEn: "RAM is primary internal volatile memory directly accessed by CPU; an Operating System is the primary system software.",
    explanationSi: "ප්‍රාථමික මතකය RAM වන අතර, මෙහෙයුම් පද්ධතියක් යනු පද්ධති මෘදුකාංගයකි."
  },
  {
    id: "pp-2022-p1-q7",
    year: 2022,
    paperType: "Paper I",
    questionNumber: "Q07",
    topicId: "1.5",
    subtopicTitleEn: "1.5 Applications of ICT - Health & Commerce",
    subtopicTitleSi: "1.5 ICT යෙදීම් - සෞඛ්‍ය සහ වාණිජ්‍ය",
    type: "mcq",
    badgeText: "2022 O/L Paper I - Q07",
    questionEn: "7. Match the descriptions labelled A to D with the correct terms:\nA - Patients in remote locations connecting to hospital specialist units through ICT\nB - An application that helps teachers / students in teaching / learning\nC - Creating detailed images of internal parts of the body\nD - Buying and selling of goods and services via the Internet and the transfer of funds\nList: {1 – Cardiac screening, 2 – Electronic banking, 3 – Electronic commerce, 4 – LMS, 5 – MRI, 6 – Medical teletraining, 7 – School Management System, 8 – Telemedicine}",
    questionSi: "7. A සිට D දක්වා ලේබල් කර ඇති විස්තර පහත ලැයිස්තුවේ පද සමඟ ගළපන්න:\nA - දුරස්ථ ස්ථානවල සිටින රෝගීන් ICT භාවිතයෙන් රෝහල් විශේෂඥ ඒකක වෙත සම්බන්ධ වීම\nB - ගුරුවරුන්ට / සිසුන්ට ඉගැන්වීමේදී / ඉගෙනීමේදී උපකාර වන යෙදවුමක්\nC - ශරීරයේ අභ්‍යන්තර කොටස්වල සවිස්තරාත්මක රූප නිර්මාණය කිරීම\nD - අන්තර්ජාලය හරහා භාණ්ඩ හා සේවා මිලදී ගැනීම සහ විකිණීම\nලැයිස්තුව: {1 – හෘද රෝග තිරගත කිරීම, 2 – ඉ-බෑංකු, 3 – ඉ-වාණිජ්‍යය, 4 – LMS, 5 – MRI, 6 – දුරස්ථ සෞඛ්‍ය පුහුණුව, 7 – පාසල් කළමනාකරණ පද්ධතිය, 8 – ටෙලිමෙඩිසින්}",
    options: [
      { id: "1", en: "(1) A - 8, B - 4, C - 5, D - 3", si: "(1) A - 8, B - 4, C - 5, D - 3" },
      { id: "2", en: "(2) A - 6, B - 7, C - 1, D - 2", si: "(2) A - 6, B - 7, C - 1, D - 2" },
      { id: "3", en: "(3) A - 8, B - 7, C - 5, D - 3", si: "(3) A - 8, B - 7, C - 5, D - 3" },
      { id: "4", en: "(4) A - 6, B - 4, C - 1, D - 2", si: "(4) A - 6, B - 4, C - 1, D - 2" }
    ],
    correctOptionId: "1",
    explanationEn: "A is Telemedicine (8), B is LMS (4), C is MRI (5), and D is Electronic Commerce (3). Hence Option (1) is correct.",
    explanationSi: "A යනු ටෙලිමෙඩිසින් (8), B යනු LMS (4), C යනු MRI (5), D යනු ඉ-වාණිජ්‍යය (3) වේ. නිවැරදි පිළිතුර (1) යි."
  },
  {
    id: "pp-2021-p1-q6",
    year: 2021,
    paperType: "Paper I",
    questionNumber: "Q06",
    topicId: "1.5",
    subtopicTitleEn: "1.5 Applications of ICT - e-Government",
    subtopicTitleSi: "1.5 ICT යෙදීම් - e-රාජ්‍ය",
    type: "mcq",
    badgeText: "2021 O/L Paper I - Q06",
    questionEn: "6. Krishni accesses the official government web portal (www.gov.lk) to renew her vehicle license. Which type of e-Government service is received by her?",
    questionSi: "6. ශ්‍රී ලංකා රජයේ නිල වෙබ් ද්වාරය (www.gov.lk) වෙත ක්‍රිෂ්ණි පිවිසෙන්නේ මාර්ගගත ක්‍රමයට ඇගේ වාහන ආදායම් බලපත්‍රය නැවත අලුත් කරගැනීමට ය. ඇය විසින් ලබාගන්නා ලද්දේ පහත සඳහන් කුමන සේවාවක් ද?",
    options: [
      { id: "1", en: "(1) G2B", si: "(1) G2B" },
      { id: "2", en: "(2) G2C", si: "(2) G2C" },
      { id: "3", en: "(3) G2E", si: "(3) G2E" },
      { id: "4", en: "(4) G2G", si: "(4) G2G" }
    ],
    correctOptionId: "2",
    explanationEn: "Renewing vehicle licenses by an individual citizen is classified under G2C (Government to Citizen) in Grade 10 Section 1.5.1.",
    explanationSi: "පුරවැසියෙකු විසින් සිය වාහන බලපත්‍රය අලුත් කිරීම G2C (රාජ්‍යයෙන් පුරවැසියාට) යටතේ නිල පෙළපොතේ පැහැදිලිව දක්වා ඇත."
  },
  {
    id: "pp-2020-p1-q37",
    year: 2020,
    paperType: "Paper I",
    questionNumber: "Q37",
    topicId: "1.7",
    subtopicTitleEn: "1.7 Evolution of the Computer",
    subtopicTitleSi: "1.7 පරිගණකයේ පරිණාමය",
    type: "mcq",
    badgeText: "2020 O/L Paper I - Q37",
    questionEn: "37. Consider the following statements regarding computer generations:\nA – Transistors were introduced in the first generation computers.\nB – High-level programming languages were used in the second and third generation computers.\nC – Operating systems with graphical user interfaces (GUI) have been used in fourth generation computers.\nWhich of the above statements is/are correct?",
    questionSi: "37. පරිගණක පරම්පරා පිළිබඳ පහත ප්‍රකාශ සලකා බලන්න:\nA – පළමු පරම්පරාවේ පරිගණකවල ට්‍රාන්සිස්ටර හඳුන්වා දෙන ලදී.\nB – දෙවන සහ තෙවන පරම්පරාවල පරිගණකවල උසස් පෙළ ක්‍රමලේඛන භාෂා භාවිත කරන ලදී.\nC – සිව්වන පරම්පරාවේ පරිගණකවල චිත්‍රක පරිශීලක අතුරුමුහුණත් (GUI) සහිත මෙහෙයුම් පද්ධති භාවිත කර ඇත.\nඉහත ප්‍රකාශවලින් නිවැරදි වන්නේ කුමක් ද?",
    options: [
      { id: "1", en: "(1) A and B only", si: "(1) A සහ B පමණි" },
      { id: "2", en: "(2) A and C only", si: "(2) A සහ C පමණි" },
      { id: "3", en: "(3) B and C only", si: "(3) B සහ C පමණි" },
      { id: "4", en: "(4) All A, B and C", si: "(4) A, B සහ C සියල්ලම" }
    ],
    correctOptionId: "3",
    explanationEn: "Statement A is FALSE (Vacuum tubes in 1st Gen; Transistors in 2nd Gen). Statement B is TRUE (FORTRAN/COBOL in 2nd Gen, high level languages in 3rd Gen). Statement C is TRUE (GUI OS appeared in 4th Gen). Therefore, B and C only is correct.",
    explanationSi: "A ප්‍රකාශය අසත්‍යයි (පළමු පරම්පරාවේ ශූන්‍ය පයිප්ප භාවිත විය, ට්‍රාන්සිස්ටර පැමිණියේ දෙවන පරම්පරාවේදී). B සහ C ප්‍රකාශ සත්‍ය වේ. එබැවින් නිවැරදි පිළිතුර (3) වේ."
  },
  {
    id: "pp-2023-p1-q1",
    year: 2023,
    paperType: "Paper I",
    questionNumber: "Q01",
    topicId: "1.2",
    subtopicTitleEn: "1.2 Information Systems - Input & Output",
    subtopicTitleSi: "1.2 තොරතුරු පද්ධති - ආදානය සහ ප්‍රතිදානය",
    type: "mcq",
    badgeText: "2023 O/L Paper I - Q01",
    questionEn: "1. Which of the following correctly pairs an input device and an output device of an Automated Teller Machine (ATM)?",
    questionSi: "1. ස්වයංක්‍රීය ටෙලර් යන්ත්‍රයක (ATM) ආදාන උපාංගයක් සහ ප්‍රතිදාන උපාංගයක් නිවැරදිව යුගලනය කර ඇති පිළිතුර කුමක්ද?",
    options: [
      { id: "1", en: "(1) PIN keypad and Touchscreen / Monitor", si: "(1) PIN යතුරුපුවරුව සහ ස්පර්ශ තිරය / මොනිටරය" },
      { id: "2", en: "(2) Cash dispenser and Receipt printer", si: "(2) මුදල් නිකුත් කිරීමේ ඒකකය සහ රිසිට්පත් මුද්‍රණ යන්ත්‍රය" },
      { id: "3", en: "(3) Card reader and Barcode scanner", si: "(3) කාඩ්පත් කියවනය සහ තීරුකේත කියවනය" },
      { id: "4", en: "(4) Receipt printer and Cash dispenser", si: "(4) රිසිට්පත් මුද්‍රණ යන්ත්‍රය සහ මුදල් නිකුත් කිරීමේ ඒකකය" }
    ],
    correctOptionId: "1",
    explanationEn: "The keypad is an Input device for entering the PIN and requested sum; the screen/display is an Output device displaying account information.",
    explanationSi: "PIN යතුරුපුවරුව යනු පරිශීලක රහස් අංකය ලබාදෙන ආදාන උපාංගයක් වන අතර, තිරය මඟින් ශේෂය හා උපදෙස් පෙන්වන ප්‍රතිදාන උපාංගයකි."
  },
  {
    id: "pp-2024-p1-q2",
    year: 2024,
    paperType: "Paper I",
    questionNumber: "Q02",
    topicId: "1.3",
    subtopicTitleEn: "1.3 Quality Information - Timeliness",
    subtopicTitleSi: "1.3 ගුණාත්මක තොරතුරු - කාලීන බව",
    type: "mcq",
    badgeText: "2024 O/L Paper I - Q02",
    questionEn: "2. A weather forecast received before heading out on a fishing journey is an example of which characteristic of quality information?",
    questionSi: "2. ධීවර ගමනක් යාමට පෙර කාලගුණ අනාවැකියක් ලැබීම ගුණාත්මක තොරතුරක කුමන ලක්ෂණයට උදාහරණයක් වේ ද?",
    options: [
      { id: "1", en: "(1) Timeliness (කාලීන බව)", si: "(1) කාලීන බව (Timeliness)" },
      { id: "2", en: "(2) Completeness (සම්පූර්ණ බව)", si: "(2) සම්පූර්ණ බව (Completeness)" },
      { id: "3", en: "(3) Cost effectiveness (පිරිවැය ඵලදායීතාව)", si: "(3) පිරිවැය ඵලදායීතාව (Cost effectiveness)" },
      { id: "4", en: "(4) Irrelevance (අනදාළ බව)", si: "(4) අනදාළ බව" }
    ],
    correctOptionId: "1",
    explanationEn: "Timeliness means information is available when decisions need to be made, like receiving storm alerts before launching boats.",
    explanationSi: "තීරණ ගැනීමට නියමිත වේලාවට තොරතුරු ලැබීම කාලීන බව (Timeliness) නම් වේ."
  },
  {
    id: "pp-2025-p1-q1",
    year: 2025,
    paperType: "Paper I",
    questionNumber: "Q01",
    topicId: "1.1",
    subtopicTitleEn: "1.1 Data vs Information",
    subtopicTitleSi: "1.1 දත්ත සහ තොරතුරු",
    type: "mcq",
    badgeText: "2025 O/L Paper I - Q01",
    questionEn: "1. In a hospital laboratory, a machine reads patient blood samples and prints a comprehensive Diagnostic Blood Profile report. What do the raw sensor voltage readings represent?",
    questionSi: "1. රෝහල් රසායනාගාරයක යන්ත්‍රයක් රෝගීන්ගේ රුධිර සාම්පල පරීක්ෂා කර සම්පූර්ණ රෝග විනිශ්චය වාර්තාවක් නිකුත් කරයි. එහිදී ලැබෙන අමු සංවේදක විද්‍යුත් කියවීම් නියෝජනය කරන්නේ කුමක් ද?",
    options: [
      { id: "1", en: "(1) Data (දත්ත)", si: "(1) දත්ත (Data)" },
      { id: "2", en: "(2) Information (තොරතුරු)", si: "(2) තොරතුරු (Information)" },
      { id: "3", en: "(3) Knowledge (දැනුම)", si: "(3) දැනුම (Knowledge)" },
      { id: "4", en: "(4) Wisdom (ප්‍රඥාව)", si: "(4) ප්‍රඥාව" }
    ],
    correctOptionId: "1",
    explanationEn: "Unprocessed sensor readings without context are raw data; once interpreted and formatted into medical profiles, they become information.",
    explanationSi: "සකස් නොකළ අමු සංවේදක කියවීම් දත්ත (Data) වන අතර, ඒවා විශ්ලේෂණය කර නිකුත් කරන වාර්තාව තොරතුරු වේ."
  },
  {
    id: "pp-2025-p2-q1",
    year: 2025,
    paperType: "Paper II",
    questionNumber: "Q01",
    topicId: "1.2",
    subtopicTitleEn: "1.2 Smart School Information System",
    subtopicTitleSi: "1.2 ස්මාර්ට් පාසල් තොරතුරු පද්ධතිය",
    type: "structured",
    badgeText: "2025 O/L Paper II - Q01",
    contextEn: "A school installs a modern Digital Student Attendance & Progress System where students scan their RFID student cards at the gate. The system sends an instant SMS to the parent and generates weekly class attendance analytics.",
    contextSi: "පාසලක් විසින් RFID ශිෂ්‍ය කාඩ්පත් ගේට්ටුවේදී ස්කෑන් කරන නවීන ඩිජිටල් ශිෂ්‍ය පැමිණීමේ පද්ධතියක් ස්ථාපනය කර ඇත. එමගින් දෙමාපියන්ට ක්ෂණික SMS පණිවිඩයක් යැවෙන අතර සතිපතා පැමිණීමේ ප්‍රස්තාර වාර්තා සකසයි.",
    questionEn: "State:\n(a) One input device in this system\n(b) One output of this system\n(c) One secondary storage medium used to preserve student attendance logs.",
    questionSi: "පහත දෑ නම් කරන්න:\n(a) මෙම පද්ධතියේ එක් ආදාන උපාංගයක්\n(b) මෙම පද්ධතියේ එක් ප්‍රතිදානයක්\n(c) ශිෂ්‍ය පැමිණීමේ ලඝු සටහන් සුරක්ෂිතව තබාගැනීමට යොදාගන්නා ද්විතීයික ආචයන මාධ්‍යයක්.",
    sampleAnswerEn: "(a) RFID Card Reader / Scanner\n(b) SMS notification to parents / Weekly attendance analytics report\n(c) Hard Disk Drive (HDD) / Solid State Drive (SSD) / Cloud Database Storage",
    sampleAnswerSi: "(a) RFID කාඩ්පත් කියවනය (RFID Card Reader)\n(b) දෙමාපියන්ට ලැබෙන SMS පණිවිඩය / සතිපතා පැමිණීමේ ප්‍රස්තාර වාර්තාව\n(c) දෘඩ තැටිය (Hard Disk) / SSD / වලාකුළු දත්ත සමුදාය (Cloud Storage)",
    markingRubricEn: [
      "1 mark for valid input device (RFID reader)",
      "1 mark for valid output (SMS / Analytics graph / Report)",
      "1 mark for valid storage medium (HDD / SSD / Server DB)"
    ],
    markingRubricSi: [
      "ආදාන උපාංගය සඳහා ලකුණු 1",
      "ප්‍රතිදානය සඳහා ලකුණු 1",
      "ආචයන මාධ්‍යය සඳහා ලකුණු 1"
    ],
    explanationEn: "RFID scanner provides input, SMS and printed reports are outputs, and database hard disk stores long-term logs.",
    explanationSi: "RFID කියවනය ආදානය සපයයි, SMS සහ මුද්‍රිත වාර්තා ප්‍රතිදාන වන අතර දෘඩ තැටිය දිගුකාලීන වාර්තා ආචයනය කරයි."
  }
];
