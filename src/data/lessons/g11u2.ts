// Verbatim dual-medium syllabus data extracted from public/lessons
import { GeneralLessonData } from '../allLessonsData';

export const G11_U2_DATA: GeneralLessonData = {
  "id": "g11-u2",
  "grade": "11",
  "unitNumber": 2,
  "titleEn": "System Development Life Cycle (SDLC)",
  "titleSi": "පද්ධති සංවර්ධන ජීවන චක්‍රය",
  "subtopics": [
    {
      "id": "g11-u2-st-1",
      "number": "2.1",
      "titleEn": "Concept of a System & Information Systems",
      "titleSi": "පද්ධතියක් සහ තොරතුරු පද්ධතියක් පිළිබඳ සංකල්පය",
      "summaryEn": "Definition of a system, basic IPO components, Manual vs Computer-Based Information Systems (CBIS), and relative advantages.",
      "summarySi": "පද්ධතියක අර්ථ දැක්වීම, මූලික IPO සංරචක, අත්අයුරු හා පරිගණක පාදක තොරතුරු පද්ධති (CBIS) සහ ඒවායේ සංසන්දනාත්මක වාසි.",
      "blocks": [
        {
          "id": "b-g11-u2-1-1",
          "en": "Concept of a System & Basic Elements:\nA system is a collection of interrelated components that interact together to achieve a specific common objective.\n\n* **The 3 Basic Elements of Any System:**\n  * **Input (ආදානය):** Resources, raw items, or data received from the external environment to operate the system.\n  * **Process (සැකසීම / ක්‍රියාවලිය):** The coordinated actions, transformations, or calculations performed on inputs.\n  * **Output (ප්‍රතිදානය):** The final required results or services produced by the system.\n\n* **System Dataflow Pipeline:**\n[Input (ආදානය)] ➔ [Process (සැකසීම)] ➔ [Output (ප්‍රතිදානය)]\n\n* **Textbook Examples:**\n  * **School as a System:** Input: Students, Teachers; Process: Teaching-learning activities; Output: Educated, responsible citizens.\n  * **Weather Forecasting System:** Input: Temperature, atmospheric pressure, wind direction; Process: Meteorological computations; Output: Weather forecast reports.",
          "si": "පද්ධතියක් සහ එහි මූලික සංරචක පිළිබඳ සංකල්පය:\nපද්ධතියක් යනු යම් පොදු අරමුණක් සාක්ෂාත් කර ගැනීම සඳහා නිරන්තර අන්තර්-ක්‍රියාකාරීත්වයෙන් යුතු සංරචක සමූහයක එකතුවකි.\n\n* **ඕනෑම පද්ධතියක මූලික සංරචක 3:**\n  * **ආදානය (Input):** පද්ධතිය ක්‍රියාත්මක වීම සඳහා බාහිර පරිසරයෙන් ලබාගන්නා සම්පත්, අමුද්‍රව්‍ය හෝ දත්ත.\n  * **සැකසීම / ක්‍රියාවලිය (Process):** ප්‍රතිදානය ලබාගැනීම සඳහා ආදාන මත සිදු කරනු ලබන මෙහෙයුම්, පරිවර්තන හෝ ගණනය කිරීම්.\n  * **ප්‍රතිදානය (Output):** පද්ධතිය මඟින් බාහිර පරිසරය වෙත ලබාදෙන අවසාන ප්‍රතිඵල හෝ සේවාවන්.\n\n* **පද්ධති ගැලීමේ ආකෘතිය:**\n[ආදානය (Input)] ➔ [සැකසීම (Process)] ➔ [ප්‍රතිදානය (Output)]\n\n* **පෙළපොත් උදාහරණ:**\n  * **පාසල පද්ධතියක් ලෙස:** ආදානය: සිසුන්, ගුරුවරුන්; සැකසීම: ඉගෙනුම් ඉගැන්වීම් ක්‍රියාවලිය; ප්‍රතිදානය: රටට වැඩදායක උගත් යහපත් පුරවැසියන්.\n  * **කාලගුණ අනාවැකි පද්ධතිය:** ආදානය: උෂ්ණත්වය, පීඩනය, සුළඟේ දිශාව; සැකසීම: දත්ත විශ්ලේෂණය; ප්‍රතිදානය: හෙට දිනයේ කාලගුණ අනාවැකිය.",
          "highlightTerm": "System Concept & IPO"
        },
        {
          "id": "b-g11-u2-1-2",
          "en": "Information Systems & Classification:\nAn Information System is a system designed to collect, process, store, and distribute information to support decision-making.\n\n* **1. Manual Information Systems (අත්අයුරු / හස්තීය තොරතුරු පද්ධති):**\n  * All operations (recording, calculating, filing) are performed manually by human effort without digital computing assistance.\n  * *Examples:* Paper library ledger, manual attendance register, printed telephone directory.\n\n* **2. Computer Based Information Systems - CBIS (පරිගණක පාදක තොරතුරු පද්ධති):**\n  * Uses computer hardware, software, telecommunications, and databases to convert data into useful information.\n  * *Examples:* Automated hospital management system, computerized school database, automated banking system (ATM/online).",
          "si": "තොරතුරු පද්ධති සහ වර්ගීකරණය:\nදත්ත එක්රැස් කර, සකස් කර, ආචයනය කර තොරතුරු බවට පත් කරන පද්ධතියක් තොරතුරු පද්ධතියක් (Information System) ලෙස හැඳින්වේ.\n\n* **1. අත්අයුරු / හස්තීය තොරතුරු පද්ධති (Manual Systems):**\n  * සියලුම දත්ත සටහන් කිරීම්, ගණනය කිරීම් සහ ගොනු කිරීම් මිනිස් දෑතින්ම සිදු කරන පද්ධති වේ.\n  * *උදාහරණ:* කඩදාසි පුස්තකාල ලේඛන, අත්අයුරු පැමිණීමේ ලේඛන, මුද්‍රිත දුරකථන නාමාවලිය.\n\n* **2. පරිගණක පාදක තොරතුරු පද්ධති (CBIS):**\n  * පරිගණක දෘඩාංග, මෘදුකාංග සහ දත්ත සමුදා භාවිතයෙන් දත්ත කාර්යක්ෂමව තොරතුරු බවට පත් කරන පද්ධති වේ.\n  * *උදාහරණ:* රෝහල් කළමනාකරණ පද්ධති, පරිගණකගත පාසල් දත්ත සමුදාය, මාර්ගගත බැංකු පද්ධති.",
          "highlightTerm": "Information Systems & CBIS"
        },
        {
          "id": "b-g11-u2-1-3",
          "en": "Comparison: Manual Systems vs. Computer-Based Systems:\n\n* **Accuracy:** Manual systems are prone to human errors; CBIS minimizes errors through programmed algorithms.\n* **Speed & Efficiency:** Manual processing is slow and labor-intensive; CBIS processes vast datasets in milliseconds.\n* **Storage Space:** Manual systems require large rooms with physical filing cabinets; CBIS stores millions of records in miniature solid-state drives.\n* **Security & Backups:** Paper records are vulnerable to fire, theft, pests, and loss; CBIS enables password protection, encryption, and offsite cloud backups.\n* **Data Retrieval:** Searching paper records takes hours; CBIS provides instant search results within seconds.",
          "si": "අත්අයුරු සහ පරිගණක පාදක පද්ධති අතර සංසන්දනය:\n\n* **නිරවද්‍යතාව:** හස්තීය පද්ධතිවල මිනිස් අත්වැරදීම් නිසා දෝෂ ඇතිවීමේ ඉඩකඩ වැඩිය; පරිගණක පාදක පද්ධතිවල දෝෂ අවම වේ.\n* **වේගය හා කාර්යක්ෂමතාව:** හස්තීයව දත්ත සැකසීමට වැඩි කාලයක් ගතවේ; පරිගණක පාදක පද්ධති මඟින් මිලි තත්පර කිහිපයකින් කාර්යයන් ඉටු කරයි.\n* **භෞතික ඉඩ ප්‍රමාණය:** ලිපිගොනු සහ කබඩ් සඳහා විශාල ඉඩක් අවශ්‍ය වේ; පරිගණක පාදක පද්ධතිවල ඉතා සුළු ඉඩක විශාල දත්ත ප්‍රමාණයක් රැස් කළ හැක.\n* **ආරක්ෂාව සහ උපස්ථ (Backups):** කඩදාසි ලේඛන ගින්නට, හානිවීම්වලට ගොදුරු විය හැක; පරිගණක පද්ධති සඳහා මුරපද සහ ක්ෂණික උපස්ථ යෙදිය හැක.\n* **දත්ත සෙවීම:** ලේඛන අතරින් දත්ත සෙවීම දුෂ්කරය; පරිගණක පද්ධති මඟින් ක්ෂණිකව දත්ත පෙරීම (Filter) සහ සෙවීම කළ හැක.",
          "highlightTerm": "Manual vs CBIS Comparison"
        }
      ],
      "examples": [
        {
          "id": "ex-11-2-1-1",
          "titleEn": "IPO System Block Diagram",
          "titleSi": "ආදාන-සැකසුම්-ප්‍රතිදාන ආකෘති සටහන",
          "contentEn": "┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐\n│      Input       │ ────► │     Process      │ ─────►│      Output      │\n│     (ආදානය)      │       │     (සැකසීම)     │       │    (ප්‍රතිදානය)   │\n└──────────────────┘       └──────────────────┘       └──────────────────┘",
          "contentSi": "┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐\n│      Input       │ ────► │     Process      │ ─────►│      Output      │\n│     (ආදානය)      │       │     (සැකසීම)     │       │    (ප්‍රතිදානය)   │\n└──────────────────┘       └──────────────────┘       └──────────────────┘"
        }
      ],
      "tableData": {
        "headers": [
          {
            "en": "Feature",
            "si": "ලක්ෂණය"
          },
          {
            "en": "Manual System",
            "si": "අත්අයුරු / හස්තීය පද්ධතිය"
          },
          {
            "en": "Computer Based System",
            "si": "පරිගණක පාදක පද්ධතිය (CBIS)"
          }
        ],
        "rows": [
          {
            "col0": {
              "en": "Accuracy & Errors",
              "si": "නිරවද්‍යතාව හා දෝෂ"
            },
            "col1": {
              "en": "Prone to human calculating and transcription errors.",
              "si": "මිනිස් අත්වැරදීම් නිසා දෝෂ ඇතිවීමට ඇති ඉඩකඩ වැඩිය."
            },
            "col2": {
              "en": "Errors are minimal with automated software logic.",
              "si": "වැඩසටහන්ගත නීති අනුව සැකසෙන බැවින් දෝෂ අවම වේ."
            }
          },
          {
            "col0": {
              "en": "Efficiency & Speed",
              "si": "කාර්යක්ෂමතාව හා වේගය"
            },
            "col1": {
              "en": "Processing requires significant time and manual labor.",
              "si": "තොරතුරු සකසා ගැනීම සඳහා වැඩි කාලයක් ගතවේ."
            },
            "col2": {
              "en": "Extremely fast and automated high-throughput processing.",
              "si": "ඉතා කෙටි කාලයකින් කාර්යක්ෂමව තොරතුරු සකසා ගත හැක."
            }
          },
          {
            "col0": {
              "en": "Storage & Physical Space",
              "si": "ගබඩා කිරීම හා භෞතික ඉඩ"
            },
            "col1": {
              "en": "Requires large physical rooms, cupboards, and file folders.",
              "si": "දත්ත ගබඩා කිරීමට විශාල කාමර, කබඩ් සහ ගොනු අවශ්‍ය වේ."
            },
            "col2": {
              "en": "Enormous volumes of data stored in tiny solid-state storage.",
              "si": "ඉතා සුළු ඉඩකඩක විශාල දත්ත ප්‍රමාණයක් ඩිජිටල්ව සුරකියි."
            }
          },
          {
            "col0": {
              "en": "Security & Backup",
              "si": "ආරක්ෂාව හා උපස්ථ"
            },
            "col1": {
              "en": "Vulnerable to fire, physical damage, theft, and loss.",
              "si": "ගිනි ගැනීම්, ස්වාභාවික විපත් සහ නැතිවීම්වලට ගොදුරු වේ."
            },
            "col2": {
              "en": "High security through passwords, encryption, and offsite backups.",
              "si": "මුරපද, ගුප්තකේතනය සහ බාහිර උපස්ථ මඟින් ආරක්ෂාව තහවුරු කරයි."
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g11-u2-1",
        "questionEn": "What type of information system converts data into information using computer hardware and software?",
        "questionSi": "පරිගණක දෘඩාංග සහ මෘදුකාංග ආධාරයෙන් දත්ත තොරතුරු බවට පත් කරන පද්ධති හඳුන්වන්නේ කුමන නමකින්ද?",
        "options": [
          {
            "id": "1",
            "en": "Computer Based Information System (CBIS)",
            "si": "පරිගණක පාදක තොරතුරු පද්ධති (CBIS)"
          },
          {
            "id": "2",
            "en": "Manual Information System",
            "si": "අත්අයුරු / හස්තීය තොරතුරු පද්ධති"
          },
          {
            "id": "3",
            "en": "Closed Physical System",
            "si": "සංවෘත භෞතික පද්ධති"
          },
          {
            "id": "4",
            "en": "Standalone Microcontroller",
            "si": "හුදකලා ක්ෂුද්‍ර පාලක"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "A Computer-Based Information System (CBIS) utilizes hardware, software, databases, and networks to transform data into information.",
        "explanationSi": "පරිගණක පාදක තොරතුරු පද්ධති (CBIS) මඟින් පරිගණක හා මෘදුකාංග ආධාරයෙන් දත්ත කාර්යක්ෂමව තොරතුරු බවට පත් කරනු ලබයි."
      }
    },
    {
      "id": "g11-u2-st-2",
      "number": "2.2",
      "titleEn": "System Development Life Cycle - SDLC",
      "titleSi": "පද්ධති සංවර්ධන ජීවන චක්‍රය",
      "summaryEn": "The 7 structured phases of SDLC: Requirements & Feasibility, Analysis, Design, Coding, Testing, Deployment, and Maintenance.",
      "summarySi": "SDLC හි ව්‍යුහගත අදියර 7: අවශ්‍යතා හා ශක්‍යතාව, විශ්ලේෂණය, සැලසුම්කරණය, කේතනය, පරීක්ෂාව, ස්ථාපනය සහ නඩත්තුව.",
      "blocks": [
        {
          "id": "b-g11-u2-2-1",
          "en": "Core SDLC Definition & Overview of Phases:\nSystem Development Life Cycle (SDLC) is a structured, step-by-step engineering framework used to design, develop, test, deploy, and maintain an information system effectively.\n\n* **The 7 Sequential SDLC Phases:**\n  1. **Identification of Requirements & Feasibility Study (අවශ්‍යතා හඳුනා ගැනීම හා ශක්‍යතා අධ්‍යයනය)**\n  2. **System Analysis (පද්ධති විශ්ලේෂණය)**\n  3. **System Design (පද්ධති සැලසුම් කිරීම)**\n  4. **Software Development / Coding (පද්ධති සංවර්ධනය / කේතනය කිරීම)**\n  5. **Testing & Quality Assurance (පද්ධති පරීක්ෂාව)**\n  6. **Implementation / Deployment (පද්ධතිය ස්ථාපනය කිරීම)**\n  7. **System Maintenance (පද්ධති නඩත්තුව)**\n\n* **SDLC Lifecycle Flow:**\n[Requirements] ➔ [Analysis] ➔ [Design] ➔ [Coding] ➔ [Testing] ➔ [Deployment] ➔ [Maintenance]",
          "si": "SDLC හි මූලික අර්ථ දැක්වීම සහ අදියර 7:\nතොරතුරු පද්ධතියක් සාර්ථකව සැලසුම් කිරීම, සංවර්ධනය කිරීම, පරීක්ෂා කිරීම, ස්ථාපනය කිරීම සහ නඩත්තු කිරීම සඳහා අනුගමනය කරනු ලබන ව්‍යුහගත පියවරෙන් පියවර ක්‍රියාවලිය පද්ධති සංවර්ධන ජීවන චක්‍රය (SDLC) ලෙස හැඳින්වේ.\n\n* **SDLC හි ප්‍රධාන අනුක්‍රමික අදියර 7:**\n  1. **අවශ්‍යතා හඳුනා ගැනීම සහ ශක්‍යතා අධ්‍යයනය (Requirements & Feasibility)**\n  2. **පද්ධති විශ්ලේෂණය (System Analysis)**\n  3. **පද්ධති සැලසුම් කිරීම (System Design)**\n  4. **මෘදුකාංග සංවර්ධනය / කේතනය (Development / Coding)**\n  5. **පද්ධති පරීක්ෂාව (System Testing)**\n  6. **පද්ධතිය ස්ථාපනය කිරීම (Deployment / Implementation)**\n  7. **පද්ධති නඩත්තුව (System Maintenance)**\n\n* **SDLC අදියර ගැලීමේ ආකෘතිය:**\n[අවශ්‍යතා හඳුනා ගැනීම] ➔ [විශ්ලේෂණය] ➔ [සැලසුම් කිරීම] ➔ [කේතනය] ➔ [පරීක්ෂාව] ➔ [ස්ථාපනය] ➔ [නඩත්තුව]",
          "highlightTerm": "SDLC Definition & Phases"
        },
        {
          "id": "b-g11-u2-2-2",
          "en": "Phase 1: Requirements Gathering & Feasibility Study:\n\n* **The 5 Requirement Gathering Techniques:**\n  * **1. Interviews (සම්මුඛ සාකච්ඡා):** Meeting users directly face-to-face to ask qualitative in-depth questions.\n  * **2. Questionnaires (ප්‍රශ්නාවලිය):** Distributing structured forms to a large distributed audience to gather quantitative feedback quickly.\n  * **3. Observations (නිරීක්ෂණය):** Watching users perform daily workflows in their natural working environment directly.\n  * **4. Document Review (ලේඛන පරීක්ෂාව):** Inspecting current forms, registers, manuals, and reports to understand data flow.\n  * **5. Prototyping (මූලාකෘතිකරණය):** Building an interactive preliminary model to demonstrate features and gather early feedback.\n\n* **The 3 Feasibility Study Dimensions:**\n  * **Technical Feasibility:** Checking whether required hardware, software, network, and technical skills exist.\n  * **Operational Feasibility:** Evaluating whether the proposed solution will solve the organizational problem and be embraced by users.\n  * **Economic Feasibility:** Cost-Benefit analysis evaluating whether financial returns outweigh development expenses.",
          "si": "අදියර 1: අවශ්‍යතා හඳුනා ගැනීම සහ ශක්‍යතා අධ්‍යයනය:\n\n* **අවශ්‍යතා රැස් කිරීමේ ප්‍රධාන ශිල්පක්‍රම 5:**\n  * **1. සම්මුඛ සාකච්ඡා (Interviews):** පරිශීලකයන් පෞද්ගලිකව හමු වී ප්‍රශ්න ඇසීමෙන් ගැඹුරු තොරතුරු ලබා ගැනීම.\n  * **2. ප්‍රශ්නාවලිය (Questionnaires):** විශාල පිරිසකගෙන් කෙටි කලකින් තොරතුරු රැස් කිරීමට මුද්‍රිත හෝ ඩිජිටල් ප්‍රශ්න පත්‍ර ලබා දීම.\n  * **3. නිරීක්ෂණය (Observation):** වත්මන් පද්ධතියේ ක්‍රියාකාරිත්වය සේවකයන් ක්‍රියාකරන ආකාරය සෘජුවම බලා නිරීක්ෂණය කිරීම.\n  * **4. ලේඛන පරීක්ෂාව (Document Review):** වත්මන් ආකෘති පත්‍ර, වාර්තා, ගොනු සහ උපදෙස් සංග්‍රහ පරික්ෂා කිරීම.\n  * **5. මූලාකෘතිකරණය (Prototyping):** යෝජිත පද්ධතියේ වැඩකරන ආදර්ශකයක් සාදා පරිශීලකයන්ගේ ප්‍රතිචාර ලබා ගැනීම.\n\n* **ශක්‍යතා අධ්‍යයනයේ ප්‍රධාන මානයන් 3:**\n  * **තාක්ෂණික ශක්‍යතාව (Technical):** අවශ්‍ය දෘඩාංග, මෘදුකාංග සහ තාක්ෂණික දැනුම පවතීදැයි සලකා බැලීම.\n  * **ක්‍රියාකාරී / මෙහෙයුම් ශක්‍යතාව (Operational):** නව පද්ධතියෙන් ගැටලුව විසඳේද සහ සේවකයන් එය පිළිගන්නේදැයි සලකා බැලීම.\n  * **ආර්ථික ශක්‍යතාව (Economic):** පිරිවැය-ප්‍රතිලාභ විශ්ලේෂණය (වියදමට වඩා ප්‍රතිලාභ වැඩිදැයි බැලීම).",
          "highlightTerm": "Requirements & Feasibility"
        },
        {
          "id": "b-g11-u2-2-3",
          "en": "Phases 2 to 4: Analysis, Design & Coding:\n\n* **Phase 2: System Analysis (පද්ධති විශ්ලේෂණය):**\n  * Detailed study of the existing system to define functional and non-functional requirements.\n  * Uses modeling tools: **Data Flow Diagrams (DFD)** to map information flows, and **Entity Relationship Diagrams (ERD)** to model database entities.\n\n* **Phase 3: System Design (පද්ධති සැලසුම් කිරීම):**\n  * Architectural blueprinting: designing User Interfaces (UI screens), report layouts, database table schemas, and algorithm flowcharts.\n\n* **Phase 4: Software Development / Coding (කේතනය කිරීම):**\n  * Translating design specifications into working software source code using high-level programming languages (e.g., Pascal, Python, C#, Java).",
          "si": "අදියර 2 සිට 4 දක්වා: විශ්ලේෂණය, සැලසුම්කරණය සහ කේතනය:\n\n* **අදියර 2: පද්ධති විශ්ලේෂණය (System Analysis):**\n  * පවතින පද්ධතියේ දුර්වලතා හඳුනාගෙන නව පද්ධතියේ කාර්යබද්ධ හා කාර්යබද්ධ නොවන අවශ්‍යතා නිර්වචනය කිරීම.\n  * මෙවලම්: දත්ත ගැලීම් සටහන් (**DFD**) සහ එන්ටිටි සබඳතා සටහන් (**ERD**) භාවිත කෙරේ.\n\n* **අදියර 3: පද්ධති සැලසුම් කිරීම (System Design):**\n  * පරිශීලක අතුරුමුහුණත් (UI), ආදාන ආකෘති, ප්‍රතිදාන වාර්තා, දත්ත සමුදා වගු සහ ඇල්ගොරිතම සැලසුම් කිරීම.\n\n* **අදියර 4: මෘදුකාංග සංවර්ධනය / කේතනය (Coding):**\n  * සැලසුම් කළ විවිතරයන් උසස් පෙළ ක්‍රමලේඛන භාෂාවක් (Pascal, Python, Java) මඟින් පරිගණක කේත බවට පත් කිරීම.",
          "highlightTerm": "Analysis, Design & Coding"
        },
        {
          "id": "b-g11-u2-2-4",
          "en": "Phase 5: System Testing & Quality Assurance:\nTesting ensures that the software satisfies all user requirements and operates without errors.\n\n* **The 4 Levels of Testing:**\n  * **1. Unit Testing (ඒකක පරීක්ෂාව):** Testing individual functions, subroutines, or modules independently.\n  * **2. Integration Testing (අනුකලන පරීක්ෂාව):** Testing communication and data exchange between combined modules.\n  * **3. System Testing (පද්ධති පරීක්ෂාව):** Testing the entire complete software end-to-end against all technical requirements.\n  * **4. User Acceptance Testing - UAT (පිළිගැනීමේ පරීක්ෂාව):** End users test the system in their actual environment before signing off.\n\n* **Test Data Types:**\n  * **Valid Data (වලංගු දත්ත):** Values within expected limits (e.g., Exam Mark = 75).\n  * **Invalid Data (අවලංගු දත්ත):** Out-of-range or incorrect format values (e.g., Exam Mark = 150 or -20) to check error handling.\n  * **Boundary Data (සීමාකාරී දත්ත):** Values right at the minimum and maximum extremes (e.g., Exam Mark = 0, Mark = 100).",
          "si": "අදියර 5: පද්ධති පරීක්ෂාව සහ තත්ත්ව සහතිකය:\nපද්ධතිය පරිශීලක අවශ්‍යතා නිසි ලෙස ඉටු කරන්නේද සහ දෝෂ රහිතදැයි තහවුරු කිරීම පරීක්ෂාවේ අරමුණයි.\n\n* **පරීක්ෂාවේ ප්‍රධාන මට්ටම් 4:**\n  * **1. ඒකක පරීක්ෂාව (Unit Testing):** තනි තනි මොඩියුල හෝ විධාන වෙන වෙනම පරීක්ෂා කිරීම.\n  * **2. අනුකලන පරීක්ෂාව (Integration Testing):** මොඩියුල එකිනෙක සම්බන්ධ කළ පසු දත්ත හුවමාරුව නිවැරදිදැයි පරීක්ෂා කිරීම.\n  * **3. පද්ධති පරීක්ෂාව (System Testing):** සමස්ත පද්ධතියම එකතු කර සමස්තයක් ලෙස පරීක්ෂා කිරීම.\n  * **4. පිළිගැනීමේ පරීක්ෂාව (User Acceptance Testing - UAT):** පද්ධතිය භාරගැනීමට පෙර සැබෑ පරිශීලකයන් විසින් පරීක්ෂා කිරීම.\n\n* **පරීක්ෂණ දත්ත වර්ග 3:**\n  * **වලංගු දත්ත (Valid Data):** නියමිත පරාසය තුළ ඇති සාමාන්‍ය දත්ත (උදා: ලකුණු = 75).\n  * **අවලංගු දත්ත (Invalid Data):** පරාසයෙන් පිටස්තර දත්ත (උදා: ලකුණු = 150 හෝ -20) මඟින් දෝෂ හසුරුවන ආකාරය බැලීම.\n  * **සීමාකාරී දත්ත (Boundary Data):** පරාසයේ උපරිම සහ අවම අන්තවල පිහිටි දත්ත (උදා: ලකුණු = 0, ලකුණු = 100).",
          "highlightTerm": "System Testing & Test Data"
        },
        {
          "id": "b-g11-u2-2-5",
          "en": "Phase 6: System Deployment Strategies (ස්ථාපන ක්‍රම 4):\n\n* **1. Direct Deployment (සෘජු ස්ථාපනය):**\n  * The old system is immediately shut down and replaced by the new system on a specified date.\n  * *Pros:* Fastest, lowest dual running cost. *Cons:* Highest risk; system failure brings operations to a complete halt.\n\n* **2. Parallel Deployment (සමාන්තර ස්ථාපනය):**\n  * Both old and new systems operate simultaneously side-by-side for a specific trial period.\n  * *Pros:* Lowest risk; old system acts as a real-time safety backup. *Cons:* Highest cost; double workload for staff.\n\n* **3. Pilot Deployment (නියමු ස්ථාපනය):**\n  * New system is deployed in only one branch, department, or location first before organization-wide rollout.\n  * *Pros:* Risk is localized to one site. *Cons:* Takes longer for full company rollout.\n\n* **4. Phased Deployment (අදියරමය ස්ථාපනය):**\n  * System modules are introduced progressively in sequential stages over time.\n  * *Pros:* Users adapt gradually module-by-module. *Cons:* Complex integration between old and new modules.",
          "si": "අදියර 6: පද්ධතිය ස්ථාපනය කිරීමේ ක්‍රම 4:\n\n* **1. සෘජු ස්ථාපනය (Direct Deployment):**\n  * නියමිත දිනයකදී පැරණි පද්ධතිය සම්පූර්ණයෙන්ම නවතා නව පද්ධතිය කෙළින්ම භාවිතයට ගැනීම.\n  * *වාසි:* ඉතා ඉක්මන්, පිරිවැය අඩුයි. *අවාසි:* අවදානම ඉහළම වේ; පද්ධතිය බිඳ වැටුණහොත් සියලු කටයුතු ඇනහිටී.\n\n* **2. සමාන්තර ස්ථාපනය (Parallel Deployment):**\n  * පැරණි හා නව පද්ධති දෙකම එකවර යම් කාලයක් සමාන්තරව පවත්වාගෙන යාම.\n  * *වාසි:* අවදානම අවමයි; පැරණි පද්ධතිය උපස්ථයක් ලෙස පවතී. *අවාසි:* වියදම අධිකයි, සේවකයන්ට දෙගුණයක වැඩ.\n\n* **3. නියමු ස්ථාපනය (Pilot Deployment):**\n  * නව පද්ධතිය මුලින්ම එක් ශාඛාවක හෝ එක් අංශයක පමණක් ක්‍රියාත්මක කර බැලීම.\n  * *වාසි:* දෝෂ ඇති වුවහොත් බලපාන්නේ එක් ශාඛාවකට පමණි. *අවාසි:* මුළු ආයතනයටම යෙදවීමට වැඩි කාලයක් ගතවේ.\n\n* **4. අදියරමය ස්ථාපනය (Phased Deployment):**\n  * නව පද්ධතියේ මොඩියුල කොටසින් කොටස අදියර වශයෙන් ක්‍රමිකව හඳුන්වා දීම.\n  * *වාසි:* සේවකයන්ට ක්‍රමයෙන් හුරුවිය හැක. *අවාසි:* පැරණි හා නව කොටස් අතර සම්බන්ධීකරණය සංකීර්ණ වේ.",
          "highlightTerm": "4 Deployment Strategies"
        },
        {
          "id": "b-g11-u2-2-6",
          "en": "Phase 7: System Maintenance Types (පද්ධති නඩත්තු වර්ග 4):\nMaintenance keeps the deployed system running reliably and aligned with changing organizational needs.\n\n* **1. Corrective Maintenance (නිවැරදි කිරීමේ නඩත්තුව):**\n  * Fixing software bugs, logic flaws, and coding errors discovered by users during regular day-to-day operations.\n\n* **2. Adaptive Maintenance (අනුකූලතා නඩත්තුව):**\n  * Modifying the system to work in changing operating environments (e.g., OS upgrades, new hardware, legal tax changes).\n\n* **3. Perfective Maintenance (පරිපූර්ණත්ව නඩත්තුව):**\n  * Adding new features, improving system performance, and optimizing user interfaces based on user enhancement requests.\n\n* **4. Preventive Maintenance (පූර්වාරක්ෂක නඩත්තුව):**\n  * Performing proactive security patching, code refactoring, and database indexing to prevent future system failures.",
          "si": "අදියර 7: පද්ධති නඩත්තු වර්ග 4:\nපද්ධතිය ක්‍රියාත්මක වීමේදී පැන නගින ගැටලු නිරාකරණය කරමින් පවත්වාගෙන යාම නඩත්තුවේ කාර්යයයි.\n\n* **1. නිවැරදි කිරීමේ නඩත්තුව (Corrective Maintenance):**\n  * පද්ධතිය එදිනෙදා භාවිතයේදී හමුවන මෘදුකාංග දෝෂ (Bugs) සහ වැරදි සකස් කිරීම.\n\n* **2. අනුකූලතා නඩත්තුව (Adaptive Maintenance):**\n  * නව මෙහෙයුම් පද්ධති, දෘඩාංග හෝ නීතිමය වෙනස්කම්වලට අනුකූල වන සේ පද්ධතිය වෙනස් කිරීම.\n\n* **3. පරිපූර්ණත්ව නඩත්තුව (Perfective Maintenance):**\n  * පද්ධතියේ කාර්යක්ෂමතාව වැඩි කිරීම සහ පරිශීලකයන්ගේ නව අවශ්‍යතා අනුව අලුත් පහසුකම් එක් කිරීම.\n\n* **4. පූර්වාරක්ෂක නඩත්තුව (Preventive Maintenance):**\n  * අනාගතයේදී සිදුවිය හැකි දෝෂ හා ආරක්ෂක ගැටලු වැළැක්වීම සඳහා සිදුකරන පූර්ව පරීක්ෂණ සහ ආරක්ෂක යාවත්කාලීන කිරීම්.",
          "highlightTerm": "4 Maintenance Types"
        }
      ],
      "examples": [
        {
          "id": "ex-11-2-2-1",
          "titleEn": "SDLC 7-Phase Linear Workflow",
          "titleSi": "SDLC අදියර 7 හි ගැලීම් සටහන",
          "contentEn": "┌─────────────────────────────────────────┐\n│  1. Identification of Requirements      │\n│     (අවශ්‍යතා හඳුනා ගැනීම)               │\n└────────────────────┬────────────────────┘\n                     │\n                     ▼\n┌─────────────────────────────────────────┐\n│  2. System Analysis (පද්ධති විශ්ලේෂණය)   │\n└────────────────────┬────────────────────┘\n                     │\n                     ▼\n┌─────────────────────────────────────────┐\n│  3. System Design (පද්ධති සැලසුම් කිරීම)  │\n└────────────────────┬────────────────────┘\n                     │\n                     ▼\n┌─────────────────────────────────────────┐\n│  4. Software Development / Coding       │\n│     (පද්ධති සංවර්ධනය / කේතනය කිරීම)     │\n└────────────────────┬────────────────────┘\n                     │\n                     ▼\n┌─────────────────────────────────────────┐\n│  5. Testing & Quality Assurance         │\n│     (පද්ධති පරීක්ෂාව)                   │\n└────────────────────┬────────────────────┘\n                     │\n                     ▼\n┌─────────────────────────────────────────┐\n│  6. Implementation / Deployment         │\n│     (පද්ධතිය ස්ථාපනය කිරීම)             │\n└────────────────────┬────────────────────┘\n                     │\n                     ▼\n┌─────────────────────────────────────────┐\n│  7. System Maintenance (පද්ධති නඩත්තුව) │\n└─────────────────────────────────────────┘",
          "contentSi": "┌─────────────────────────────────────────┐\n│  1. Identification of Requirements      │\n│     (අවශ්‍යතා හඳුනා ගැනීම)               │\n└────────────────────┬────────────────────┘\n                     │\n                     ▼\n┌─────────────────────────────────────────┐\n│  2. System Analysis (පද්ධති විශ්ලේෂණය)   │\n└────────────────────┬────────────────────┘\n                     │\n                     ▼\n┌─────────────────────────────────────────┐\n│  3. System Design (පද්ධති සැලසුම් කිරීම)  │\n└────────────────────┬────────────────────┘\n                     │\n                     ▼\n┌─────────────────────────────────────────┐\n│  4. Software Development / Coding       │\n│     (පද්ධති සංවර්ධනය / කේතනය කිරීම)     │\n└────────────────────┬────────────────────┘\n                     │\n                     ▼\n┌─────────────────────────────────────────┐\n│  5. Testing & Quality Assurance         │\n│     (පද්ධති පරීක්ෂාව)                   │\n└────────────────────┬────────────────────┘\n                     │\n                     ▼\n┌─────────────────────────────────────────┐\n│  6. Implementation / Deployment         │\n│     (පද්ධතිය ස්ථාපනය කිරීම)             │\n└────────────────────┬────────────────────┘\n                     │\n                     ▼\n┌─────────────────────────────────────────┐\n│  7. System Maintenance (පද්ධති නඩත්තුව) │\n└─────────────────────────────────────────┘"
        }
      ],
      "tableData": {
        "headers": [
          {
            "en": "Deployment Method",
            "si": "ස්ථාපන ක්‍රමය"
          },
          {
            "en": "How It Works",
            "si": "ක්‍රියාත්මක වන ආකාරය"
          },
          {
            "en": "Advantages",
            "si": "වාසි"
          },
          {
            "en": "Disadvantages",
            "si": "අවාසි"
          }
        ],
        "rows": [
          {
            "col0": {
              "en": "Direct Deployment",
              "si": "සෘජු ස්ථාපනය"
            },
            "col1": {
              "en": "Old system is stopped completely and replaced by the new system on a specified date.",
              "si": "පැරණි පද්ධතිය සම්පූර්ණයෙන්ම නවතා නව පද්ධතිය සෘජුවම ක්‍රියාත්මක කරයි."
            },
            "col2": {
              "en": "Fastest rollout; lowest operational cost with zero duplication.",
              "si": "ඉතා ඉක්මන්, පිරිවැය අඩුය."
            },
            "col3": {
              "en": "Highest risk; failure disrupts business immediately.",
              "si": "අවදානම ඉහළම වේ, දත්ත අහිමි විය හැක."
            }
          },
          {
            "col0": {
              "en": "Parallel Deployment",
              "si": "සමාන්තර ස්ථාපනය"
            },
            "col1": {
              "en": "Both old and new systems run simultaneously side-by-side for a trial period.",
              "si": "පැරණි හා නව පද්ධති දෙකම යම් කාලයක් සමාන්තරව පවත්වාගෙන යයි."
            },
            "col2": {
              "en": "Lowest risk; old system acts as an instant fallback backup.",
              "si": "අවදානම අවම වේ, පැරණි පද්ධතිය උපස්ථයක් ලෙස පවතී."
            },
            "col3": {
              "en": "Highest operational cost; double workload for operators.",
              "si": "පිරිවැය අධිකය, සේවකයන්ට දෙගුණයක වැඩ ප්‍රමාණයක් ඇත."
            }
          },
          {
            "col0": {
              "en": "Pilot Deployment",
              "si": "නියමු ස්ථාපනය"
            },
            "col1": {
              "en": "New system is deployed to only one branch or department before full rollout.",
              "si": "නව පද්ධතිය මුලින්ම එක් අංශයක හෝ ශාඛාවක පමණක් ස්ථාපනය කර බලයි."
            },
            "col2": {
              "en": "Issues are safely localized to one site without enterprise-wide risk.",
              "si": "සමස්ත ආයතනයටම ඇති අවදානම අඩුය."
            },
            "col3": {
              "en": "Takes longer time to achieve complete company-wide rollout.",
              "si": "සමස්ත ආයතනයටම ස්ථාපනය කිරීමට වැඩි කාලයක් ගතවේ."
            }
          },
          {
            "col0": {
              "en": "Phased Deployment",
              "si": "අදියරමය ස්ථාපනය"
            },
            "col1": {
              "en": "New system modules are deployed in progressive sequential stages.",
              "si": "නව පද්ධතියේ කොටස්/මොඩියුල අදියරෙන් අදියර ස්ථාපනය කරයි."
            },
            "col2": {
              "en": "Users adapt gradually module-by-module.",
              "si": "පරිශීලකයන්ට ක්‍රමයෙන් හුරු විය හැක."
            },
            "col3": {
              "en": "Complex temporary interfaces needed between old and new modules.",
              "si": "පැරණි හා නව කොටස් අතර සම්බන්ධතාව පවත්වාගැනීම සංකීර්ණ වේ."
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g11-u2-2",
        "questionEn": "Which deployment method carries the lowest operational risk by running both the old and new systems simultaneously?",
        "questionSi": "පැරණි සහ නව පද්ධති දෙකම එකවර පවත්වාගෙන යමින් අඩුම මෙහෙයුම් අවදානමක් සහිත ස්ථාපන ක්‍රමය කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Parallel Deployment",
            "si": "සමාන්තර ස්ථාපනය (Parallel Deployment)"
          },
          {
            "id": "2",
            "en": "Direct Deployment",
            "si": "සෘජු ස්ථාපනය (Direct Deployment)"
          },
          {
            "id": "3",
            "en": "Pilot Deployment",
            "si": "නියමු ස්ථාපනය (Pilot Deployment)"
          },
          {
            "id": "4",
            "en": "Phased Deployment",
            "si": "අදියරමය ස්ථාපනය (Phased Deployment)"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "Parallel Deployment is the safest strategy because the legacy system remains fully operational as a live backup if the new system encounters defects.",
        "explanationSi": "සමාන්තර ස්ථාපනයේදී පද්ධති දෙකම එකවර ක්‍රියාත්මක වන බැවින් නව පද්ධතියේ දෝෂයක් ඇති වුවද පැරණි පද්ධතිය උපස්ථයක් ලෙස පවතින බැවින් අවදානම අවම වේ."
      }
    },
    {
      "id": "g11-u2-st-3",
      "number": "2.3",
      "titleEn": "System Development Life Cycle Models",
      "titleSi": "පද්ධති සංවර්ධන ජීවන චක්‍ර ආකෘති",
      "summaryEn": "Comparison of classic SDLC models: Waterfall Model (linear sequential) vs Iterative Incremental Model (cyclical increments).",
      "summarySi": "සම්භාව්‍ය SDLC ආකෘති සංසන්දනය: දියඇලි ආකෘතිය (රේඛීය අනුක්‍රමික) සහ පුනර්කරණ-වර්ධී ආකෘතිය (චක්‍රීය සංවර්ධනය).",
      "blocks": [
        {
          "id": "b-g11-u2-3-1",
          "en": "Waterfall Model (දියඇලි ආකෘතිය):\nThe Waterfall Model is a classic linear-sequential development model where progress flows downwards like a waterfall through distinct phases.\n\n* **Key Characteristics:**\n  * Each phase must be 100% completed, verified, and signed off before the next phase begins.\n  * Highly disciplined, rigid, and simple to understand and manage with clear milestones.\n  * Best suited for small to medium projects where requirements are fixed, clear, and will not change.\n\n* **Key Limitation:**\n  * Working software is delivered only at the very end of the lifecycle, making it inflexible to changing user requirements.",
          "si": "දියඇලි ආකෘතිය (Waterfall Model):\nදියඇලි ආකෘතිය යනු දියඇල්ලක් පහළට ගලා යන්නාක් මෙන් එක් අදියරක් අවසන් වූ පසු ඊළඟ අදියර ආරම්භ වන රේඛීය අනුක්‍රමික ආකෘතියකි.\n\n* **ප්‍රධාන ලක්ෂණ:**\n  * එක් අදියරක් 100% ක් සම්පූර්ණ වී අනුමත වූ පසු පමණක් ඊළඟ අදියර ආරම්භ වේ.\n  * කළමනාකරණය ඉතා සරල හා පැහැදිලි වේ.\n  * අවශ්‍යතා ස්ථිර, වෙනස් නොවන සහ පැහැදිලි සරල ව්‍යාපෘති සඳහා වඩාත් සුදුසුය.\n\n* **ප්‍රධාන සීමාව / අවාසිය:**\n  * වැඩකරන මෘදුකාංගය දැකගත හැක්කේ ජීවන චක්‍රයේ අවසානයේදීම පමණි; අතරමගදී අවශ්‍යතා වෙනස් කිරීමට නොහැක.",
          "highlightTerm": "Waterfall Model"
        },
        {
          "id": "b-g11-u2-3-2",
          "en": "Iterative Incremental Model (පුනර්කරණ-වර්ධී ආකෘතිය):\nThe system is developed in repeating cycles (iterative) and released in small functional portions at a time (incremental).\n\n* **Key Characteristics:**\n  * Starts by implementing a small, well-defined subset of requirements into a working mini-system.\n  * Each repeated iteration goes through requirements, design, coding, and testing to add new features.\n  * Allows stakeholders and clients to provide real-world feedback early and continuously.\n  * Highly adaptable to evolving business requirements in complex modern software projects.",
          "si": "පුනර්කරණ-වර්ධී ආකෘතිය (Iterative Incremental Model):\nපද්ධතිය නැවත නැවත සිදුවන චක්‍ර (Iterative) සහ ක්‍රමයෙන් එකතු වන කුඩා කොටස් (Incremental) වශයෙන් සංවර්ධනය කෙරේ.\n\n* **ප්‍රධාන ලක්ෂණ:**\n  * මූලික කුඩා අවශ්‍යතා කිහිපයකින් ආරම්භ කර ක්‍රමයෙන් නව කොටස් එකතු කරමින් පද්ධතිය විශාල කරයි.\n  * සෑම වටයකදීම සැලසුම්, කේතනය සහ පරීක්ෂාව සිදුවේ.\n  * පරිශීලකයන්ට මෘදුකාංගය කලින්ම අත්හදා බලා නිරන්තර ප්‍රතිපෝෂණ (Feedback) ලබා දිය හැක.\n  * අවශ්‍යතා නිතර වෙනස් වන සංකීර්ණ ව්‍යාපෘති සඳහා ඉතා උචිත වේ.",
          "highlightTerm": "Iterative Incremental Model"
        }
      ],
      "examples": [
        {
          "id": "ex-11-2-3-1",
          "titleEn": "Waterfall Sequential Architecture",
          "titleSi": "දියඇලි ආකෘති අනුක්‍රමික සටහන",
          "contentEn": "[ Identification of Requirements ]\n                 │\n                 ▼\n        [ Planning Solution / Design ]\n                 │\n                 ▼\n        [ Implementation / Coding ]\n                 │\n                 ▼\n        [ Testing and Debugging ]\n                 │\n                 ▼\n        [ Deployment of System ]\n                 │\n                 ▼\n        [ System Maintenance ]",
          "contentSi": "[ අවශ්‍යතා හඳුනා ගැනීම ]\n                 │\n                 ▼\n        [ සැලසුම්කරණය ]\n                 │\n                 ▼\n        [ කේතනය / සංවර්ධනය ]\n                 │\n                 ▼\n        [ පරීක්ෂාව සහ නිදොස් කිරීම ]\n                 │\n                 ▼\n        [ ස්ථාපනය ]\n                 │\n                 ▼\n        [ නඩත්තුව ]"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u2-3",
        "questionEn": "Which SDLC model is characterized by sequential, linear progression where each phase must be completed before the next phase begins?",
        "questionSi": "එක් අදියරක් සම්පූර්ණයෙන්ම අවසන් වූ පසු පමණක් ඊළඟ අදියර ආරම්භ වන රේඛීය අනුක්‍රමික SDLC ආකෘතිය කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Waterfall Model",
            "si": "දියඇලි ආකෘතිය (Waterfall Model)"
          },
          {
            "id": "2",
            "en": "Iterative Incremental Model",
            "si": "පුනර්කරණ-වර්ධී ආකෘතිය (Iterative Incremental Model)"
          },
          {
            "id": "3",
            "en": "Agile Scrum Model",
            "si": "ස්ක්‍රම් ආකෘතිය (Scrum Model)"
          },
          {
            "id": "4",
            "en": "Spiral Model",
            "si": "සර්පිල ආකෘතිය (Spiral Model)"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "The Waterfall model proceeds strictly in linear order from requirements down to maintenance, completing each step fully before advancing.",
        "explanationSi": "දියඇලි ආකෘතිය (Waterfall Model) යනු එක් පියවරක් සම්පූර්ණ වූ පසු පමණක් ඊළඟ පියවරට ගමන් කරන රේඛීය අනුක්‍රමික ආකෘතියකි."
      }
    }
  ],
  "pastPaperQuestions": [
    {
      "id": "pp-g11-u2-2020-1",
      "year": 2020,
      "paperType": "Paper I",
      "badgeText": "2020 O/L Paper I - Question 10",
      "questionEn": "10. Assume that you are the leader of a team assigned to develop a new information system for your school. Which of the following techniques can be used to identify requirements for this system?\n  A – Observation   B – Interviews   C – Prototyping",
      "questionSi": "10. ඔබ ඔබේ පාසල සඳහා නව තොරතුරු පද්ධතියක් සංවර්ධනය කිරීමට පවරන ලද කණ්ඩායමක නායකයා යැයි සිතන්න. මෙම පද්ධතිය සඳහා අවශ්‍යතා හඳුනා ගැනීමට පහත සඳහන් කුමන ශිල්පක්‍රම භාවිත කළ හැකිද?\n  A – නිරීක්ෂණය   B – සම්මුඛ සාකච්ඡා   C – මූලාකෘතිකරණය (Prototyping)",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "A and B only",
          "si": "A සහ B පමණි"
        },
        {
          "id": "2",
          "en": "A and C only",
          "si": "A සහ C පමණි"
        },
        {
          "id": "3",
          "en": "B and C only",
          "si": "B සහ C පමණි"
        },
        {
          "id": "4",
          "en": "All A, B and C",
          "si": "A, B සහ C සියල්ලම"
        }
      ],
      "correctOptionId": "4",
      "explanationEn": "Observation, Interviews, and Prototyping are all standard requirement gathering techniques recognized in the syllabus.",
      "explanationSi": "නිරීක්ෂණය, සම්මුඛ සාකච්ඡා සහ මූලාකෘතිකරණය යන තුනම අවශ්‍යතා හඳුනාගැනීම සඳහා භාවිත කළ හැකි සම්මත ශිල්පක්‍රම වේ."
    },
    {
      "id": "pp-g11-u2-2020-2",
      "year": 2020,
      "paperType": "Paper II",
      "badgeText": "2020 O/L Paper II - Question 06",
      "questionEn": "6. (i) List three methods used for requirement identification in the System Development Life Cycle (SDLC).\n  (ii) Name the four deployment methods used in SDLC.\n  (iii) A bank decides to introduce a new online banking system. Explain why parallel deployment is the most suitable deployment method for this scenario.",
      "questionSi": "6. (i) පද්ධති සංවර්ධන ජීවන චක්‍රයේ (SDLC) අවශ්‍යතා හඳුනා ගැනීම සඳහා භාවිත කරන ක්‍රම තුනක් ලියන්න.\n  (ii) SDLC හි භාවිත වන ස්ථාපන ක්‍රම හතර නම් කරන්න.\n  (iii) බැංකුවක් නව මාර්ගගත (Online) බැංකු පද්ධතියක් හඳුන්වා දීමට තීරණය කරයි. මෙම අවස්ථාව සඳහා සමාන්තර ස්ථාපනය (Parallel deployment) වඩාත්ම සුදුසු ස්ථාපන ක්‍රමය වන්නේ මන්දැයි පැහැදිලි කරන්න.",
      "type": "structured",
      "sampleAnswerEn": "SDLC Requirements & Deployment:\n(i) Three requirement gathering methods: Interviews, Questionnaires, Observation (or Prototyping, Document Review).\n(ii) Four deployment methods: Direct, Parallel, Pilot, Phased.\n(iii) Parallel deployment is ideal for banking because financial systems cannot tolerate downtime or data loss; the legacy system acts as a reliable live safety backup until the new system is fully proven.",
      "sampleAnswerSi": "SDLC අවශ්‍යතා සහ ස්ථාපනය:\n(i) අවශ්‍යතා හඳුනාගැනීමේ ක්‍රම 3: සම්මුඛ සාකච්ඡා, ප්‍රශ්නාවලි, නිරීක්ෂණය (හෝ මූලාකෘතිකරණය, ලේඛන පරීක්ෂාව).\n(ii) ස්ථාපන ක්‍රම 4: සෘජු, සමාන්තර, නියමු, අදියරමය.\n(iii) බැංකු පද්ධතිවල දෝෂයක් ඇති වුවහොත් මූල්‍යමය හානිය වළක්වා ගැනීමට පැරණි පද්ධතිය සජීවී උපස්ථයක් ලෙස පවතින බැවින් සමාන්තර ස්ථාපනය වඩාත්ම සුදුසු වේ.",
      "explanationEn": "Verbatim official examination question from 2020 O/L Paper II - Question 06.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper II - Question 06."
    },
    {
      "id": "pp-g11-u2-2021-3",
      "year": 2021,
      "paperType": "Paper II",
      "badgeText": "2021 O/L Paper II - Question 06 (ii) & (iii)",
      "questionEn": "6. (ii) A hospital is planning to introduce a new computerized system to overcome the issues in the existing patient management system. A team was assigned to do the development of the above system.\n  (a) The team decides to develop the system in small portions allowing the hospital management to provide regular feedback. What is the most suitable system development life cycle model that the team should use?\n  (b) The hospital management conducts a testing session to decide whether the newly developed system can be approved or not. What is the test that the hospital management should perform?\n  (c) The hospital management wanted to terminate the existing system immediately and replace it with the newly developed one. What is the deployment method wanted by the hospital management?\n  (d) The development team suggested introducing the new system initially to the Kandy branch of the hospital before deploying it to all other branches. What is the deployment method suggested by the development team?\n  (iii) A school library is planning to introduce a computerized library management system to replace the existing manual system. List two techniques that could be used for requirement identification.",
      "questionSi": "6. (ii) රෝහලක් පවතින රෝගී කළමනාකරණ පද්ධතියේ ගැටලු නිරාකරණය කර ගැනීම සඳහා නව පරිගණකගත පද්ධතියක් හඳුන්වා දීමට සැලසුම් කරයි.\n  (a) රෝහල් කළමනාකාරීත්වයට නිරන්තර ප්‍රතිපෝෂණ ලබා දීමට ඉඩ සලසමින් පද්ධතිය කුඩා කොටස් වශයෙන් සංවර්ධනය කිරීමට කණ්ඩායම තීරණය කරයි. කණ්ඩායම භාවිත කළ යුතු වඩාත්ම සුදුසු පද්ධති සංවර්ධන ජීවන චක්‍ර ආකෘතිය කුමක්ද?\n  (b) අලුතින් සංවර්ධනය කරන ලද පද්ධතිය අනුමත කළ හැකිද නැද්ද යන්න තීරණය කිරීම සඳහා රෝහල් කළමනාකාරීත්වය පරීක්ෂණ සැසියක් පවත්වයි. රෝහල් කළමනාකාරීත්වය විසින් සිදු කළ යුතු පරීක්ෂණය කුමක්ද?\n  (c) පවතින පද්ධතිය වහාම නවතා දමා එය වෙනුවට අලුතින් සංවර්ධනය කරන ලද පද්ධතිය යෙදවීමට රෝහල් කළමනාකාරීත්වයට අවශ්‍ය විය. රෝහල් කළමනාකාරීත්වයට අවශ්‍ය ස්ථාපන ක්‍රමය කුමක්ද?\n  (d) සංවර්ධන කණ්ඩායම යෝජනා කළේ අනෙකුත් සියලුම ශාඛාවලට ස්ථාපනය කිරීමට පෙර නව පද්ධතිය මුලින්ම රෝහලේ මහනුවර ශාඛාවට හඳුන්වා දීමටයි. සංවර්ධන කණ්ඩායම යෝජනා කළ ස්ථාපන ක්‍රමය කුමක්ද?\n  (iii) පාසල් පුස්තකාලයක් පවතින හස්තීය පද්ධතිය වෙනුවට පරිගණකගත පුස්තකාල කළමනාකරණ පද්ධතියක් හඳුන්වා දීමට සැලසුම් කරයි. අවශ්‍යතා හඳුනා ගැනීම සඳහා භාවිත කළ හැකි ශිල්පක්‍රම දෙකක් ලියන්න.",
      "type": "structured",
      "sampleAnswerEn": "Applied SDLC Scenario Analysis:\n(a) Iterative Incremental Model.\n(b) User Acceptance Testing (UAT).\n(c) Direct Deployment.\n(d) Pilot Deployment.\n(iii) Interviews, Questionnaires, Observation, Document Review, Prototyping.",
      "sampleAnswerSi": "ව්‍යවහාරික SDLC අවස්ථා විශ්ලේෂණය:\n(a) පුනර්කරණ-වර්ධී ආකෘතිය (Iterative Incremental Model).\n(b) පිළිගැනීමේ පරීක්ෂාව (User Acceptance Testing - UAT).\n(c) සෘජු ස්ථාපනය (Direct Deployment).\n(d) නියමු ස්ථාපනය (Pilot Deployment).\n(iii) සම්මුඛ සාකච්ඡා, ප්‍රශ්නාවලි, නිරීක්ෂණය, ලේඛන පරීක්ෂාව, මූලාකෘතිකරණය.",
      "explanationEn": "Verbatim official examination question from 2021 O/L Paper II - Question 06 (ii) & (iii).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2021 O/L Paper II - Question 06 (ii) & (iii)."
    },
    {
      "id": "pp-g11-u2-2022-4",
      "year": 2022,
      "paperType": "Paper I",
      "badgeText": "2022 O/L Paper I - Question 34",
      "questionEn": "Which of the following lists the selected activities of the System Development Life Cycle in the correct order?",
      "questionSi": "පද්ධති සංවර්ධන ජීවන චක්‍රයේ (System Development Life Cycle) තෝරාගත් ක්‍රියාකාරකම් පහත කුමක නිවැරදි අනුපිළිවෙලින් දැක්වේ ද?",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "Coding -> Solution design -> Requirement identification -> Testing -> Deployment",
          "si": "කේතකරණය -> විසඳුම සැලසුම් කිරීම -> අවශ්‍යතා හඳුනාගැනීම -> පරීක්ෂා කිරීම -> පිහිටුවීම"
        },
        {
          "id": "2",
          "en": "Requirement identification -> Solution design -> Coding -> Testing -> Deployment",
          "si": "අවශ්‍යතා හඳුනාගැනීම -> විසඳුම සැලසුම් කිරීම -> කේතකරණය -> පරීක්ෂා කිරීම -> පිහිටුවීම"
        },
        {
          "id": "3",
          "en": "Solution design -> Coding -> Requirement identification -> Deployment -> Testing",
          "si": "විසඳුම සැලසුම් කිරීම -> කේතකරණය -> අවශ්‍යතා හඳුනාගැනීම -> පිහිටුවීම -> පරීක්ෂා කිරීම"
        },
        {
          "id": "4",
          "en": "Solution design -> Requirement identification -> Coding -> Deployment -> Testing",
          "si": "විසඳුම සැලසුම් කිරීම -> අවශ්‍යතා හඳුනාගැනීම -> කේතකරණය -> පිහිටුවීම -> පරීක්ෂා කිරීම"
        }
      ],
      "correctOptionId": "2",
      "explanationEn": "Correct SDLC sequence: Requirement identification -> Solution design -> Coding -> Testing -> Deployment.",
      "explanationSi": "නිවැරදි SDLC අනුපිළිවෙල: අවශ්‍යතා හඳුනාගැනීම -> විසඳුම සැලසුම් කිරීම -> කේතකරණය -> පරීක්ෂා කිරීම -> පිහිටුවීම වේ."
    },
    {
      "id": "pp-g11-u2-2023-5",
      "year": 2023,
      "paperType": "Paper II",
      "badgeText": "2023 O/L Paper II - Question 01 (ix)",
      "questionEn": "1. (ix) (a) 'Identification of requirements' is the first step in the System Development Life Cycle (SDLC). List its 2nd, 3rd, 4th and 5th steps in the correct order.\n  (b) In which step of SDLC is the use of prototypes most productive?",
      "questionSi": "1. (ix) (a) පද්ධති සංවර්ධන ජීවන චක්‍රයේ (SDLC) පළමු පියවර 'අවශ්‍යතා හඳුනා ගැනීම' වේ. එහි 2 වන, 3 වන, 4 වන සහ 5 වන පියවර නිවැරදි අනුපිළිවෙලින් ලියන්න.\n  (b) SDLC හි මූලාකෘති (prototypes) භාවිතය වඩාත්ම ඵලදායී වන්නේ කවර පියවරේදීද?",
      "type": "structured",
      "sampleAnswerEn": "SDLC Sequence and Prototyping:\n(a) 2nd: System Analysis, 3rd: System Design, 4th: Software Development / Coding, 5th: Testing & Quality Assurance.\n(b) Prototyping is most productive in the 1st step: Identification of requirements (to clarify user expectations).",
      "sampleAnswerSi": "SDLC අනුපිළිවෙල සහ මූලාකෘතිකරණය:\n(a) 2 වන: පද්ධති විශ්ලේෂණය, 3 වන: පද්ධති සැලසුම් කිරීම, 4 වන: කේතනය / සංවර්ධනය, 5 වන: පද්ධති පරීක්ෂාව.\n(b) මූලාකෘති වඩාත්ම ඵලදායී වන්නේ පළමු පියවර වන 'අවශ්‍යතා හඳුනා ගැනීමේ' පියවරේදීය.",
      "explanationEn": "Verbatim official examination question from 2023 O/L Paper II - Question 01 (ix).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2023 O/L Paper II - Question 01 (ix)."
    },
    {
      "id": "pp-g11-u2-2024-6",
      "year": 2024,
      "paperType": "Paper II",
      "badgeText": "2024 O/L Paper II - Question 01 (viii)",
      "questionEn": "1. (viii) (a) In the 'requirements identification' phase of the System Development Life Cycle, the use of 'prototypes' could be beneficial. What are meant by 'prototypes'?\n  (b) The following gives the sequence of phases in the System Development Life Cycle:\n  Requirements identification -> Design of the solution -> A -> B -> C -> Maintenance.\n  Write down the phases represented by the labels A, B and C.",
      "questionSi": "1. (viii) (a) පද්ධති සංවර්ධන ජීවන චක්‍රයේ 'අවශ්‍යතා හඳුනා ගැනීමේ' පියවරේදී 'මූලාකෘති' (prototypes) භාවිතය ප්‍රයෝජනවත් විය හැක. 'මූලාකෘති' යන්නෙන් අදහස් කරන්නේ කුමක්ද?\n  (b) පහත දැක්වෙන්නේ පද්ධති සංවර්ධන ජීවන චක්‍රයේ පියවර අනුපිළිවෙලයි:\n  අවශ්‍යතා හඳුනා ගැනීම -> විසඳුම සැලසුම් කිරීම -> A -> B -> C -> නඩත්තුව.\n  A, B සහ C ලේබල් මගින් නිරූපණය වන පියවර ලියන්න.",
      "type": "structured",
      "sampleAnswerEn": "Prototypes and Phase Labels:\n(a) A prototype is a preliminary, scaled-down working model of the system built to demonstrate functionality, test concepts, and gather user feedback.\n(b) A: Software Development / Coding, B: Testing, C: Deployment (Implementation).",
      "sampleAnswerSi": "මූලාකෘති සහ අදියර නම් කිරීම:\n(a) මූලාකෘතියක් යනු යෝජිත පද්ධතියේ ක්‍රියාකාරීත්වය පෙන්වීමට, අදහස් පරීක්ෂා කිරීමට සහ පරිශීලක අදහස් ලබාගැනීමට සාදන මූලික වැඩකරන ආදර්ශකයකි.\n(b) A: කේතනය (Coding), B: පරීක්ෂාව (Testing), C: ස්ථාපනය (Deployment).",
      "explanationEn": "Verbatim official examination question from 2024 O/L Paper II - Question 01 (viii).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2024 O/L Paper II - Question 01 (viii)."
    },
    {
      "id": "pp-g11-u2-2025-7",
      "year": 2025,
      "paperType": "Paper II",
      "badgeText": "2025 O/L Paper II - Question 01 (ix)",
      "questionEn": "1. (ix) (a) The second and third steps of the System Development Life Cycle are respectively 'Design' and 'Coding'. List one task that has to be done during the above Design step.\n  (b) Will it be beneficial to communicate with the users during the Design step? Explain.",
      "questionSi": "1. (ix) (a) පද්ධති සංවර්ධන ජීවන චක්‍රයේ දෙවන හා තෙවන පියවර පිළිවෙළින් 'සැලසුම් කිරීම' සහ 'කේතකරණය' වේ. ඉහත සැලසුම් කිරීමේ පියවරේදී සිදු කළ යුතු එක් කාර්යයක් ලියන්න.\n  (b) සැලසුම් කිරීමේ පියවරේදී පරිශීලකයන් සමඟ සන්නිවේදනය කිරීම ප්‍රයෝජනවත් වේද? පැහැදිලි කරන්න.",
      "type": "structured",
      "sampleAnswerEn": "System Design Tasks & Stakeholder Communication:\n(a) Tasks in Design step: Designing User Interfaces (UI screens), database schema design, input form layout, output report formatting, or algorithmic flowcharting.\n(b) Yes, communicating with users during design ensures that UI screens and workflows align with actual user expectations and prevents costly redesign rework after coding.",
      "sampleAnswerSi": "සැලසුම් කිරීමේ කාර්යයන් සහ සන්නිවේදනය:\n(a) සැලසුම් කිරීමේදී සිදුකරන කාර්යයන්: පරිශීලක අතුරුමුහුණත් (UI) සැලසුම් කිරීම, දත්ත සමුදා වගු සැලසුම් කිරීම, ආදාන ආකෘති හෝ ප්‍රතිදාන වාර්තා සැකසීම.\n(b) ඔව්, පරිශීලකයන් සමඟ සන්නිවේදනය කිරීමෙන් අතුරුමුහුණත් ඔවුන්ගේ අවශ්‍යතාවලට ගැළපෙන බව තහවුරු කරගත හැකි අතර කේතනයෙන් පසු වැයවන කාලය හා මුදල් ඉතිරි වේ.",
      "explanationEn": "Verbatim official examination question from 2025 O/L Paper II - Question 01 (ix).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2025 O/L Paper II - Question 01 (ix)."
    }
  ]
};
