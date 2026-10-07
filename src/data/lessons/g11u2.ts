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
      "summaryEn": "Concept of a System & Information Systems concepts, definitions, and examination competencies.",
      "summarySi": "පද්ධතියක් සහ තොරතුරු පද්ධතියක් පිළිබඳ සංකල්පය සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u2-1-1",
          "en": "#### 2.1.1 What is a System? (පද්ධතියක් යනු කුමක්ද?)",
          "si": "#### 2.1.1 What is a System? (පද්ධතියක් යනු කුමක්ද?)",
          "highlightTerm": "What is a System?"
        },
        {
          "id": "b-g11-u2-1-2",
          "en": "Definition:\nA system is a collection of components that interact to achieve a specific task.",
          "si": "Definition:\nපද්ධතියක් යනු යම් පොදු අරමුණක් සාක්ෂාත් කර ගැනීම සඳහා නිරන්තර අන්තර්-ක්‍රියාකාරීත්වයෙන් යුතු සංරචක සමූහයක එකතුවකි.",
          "highlightTerm": "Definition"
        },
        {
          "id": "b-g11-u2-1-3",
          "en": "Textbook Illustration (Road Construction Machine / මාර්ග සංවර්ධන යන්ත්‍රය):**\n* When the components forming a road construction machine are not interconnected, the machine does not function properly and road construction is not possible.\n* When components are interconnected and work together towards a common goal, the machine functions as a system.",
          "si": "Textbook Illustration (Road Construction Machine / මාර්ග සංවර්ධන යන්ත්‍රය):**\n* When the components forming a road construction machine are not interconnected, the machine does not function properly and road construction is not possible.\n* When components are interconnected and work together towards a common goal, the machine functions as a system.",
          "highlightTerm": "Textbook Illustration"
        },
        {
          "id": "b-g11-u2-1-4",
          "en": "Basic Elements of a System:\nA system consists of three basic components: 1. Input, 2. Process, 3. Output. Input received by a system is converted to output by processing.",
          "si": "පද්ධතියක මූලික සංරචක 3:\nඕනෑම පද්ධතියක් මූලික සංරචක 3 කින් සමන්විත වේ: 1. ආදානය (Input), 2. සැකසීම / ක්‍රියාවලිය (Process), 3. ප්‍රතිදානය (Output). පද්ධතියකට ලැබෙන ආදාන, සැකසීම මගින් ප්‍රතිදාන බවට පත් කෙරේ.",
          "highlightTerm": "Basic Elements of a System"
        },
        {
          "id": "b-g11-u2-1-5",
          "en": "Textbook Examples (පෙළපොත් උදාහරණ):**\n* **Example 1: School as a System (පාසල පද්ධතියක් ලෙස):**\n* **System (පද්ධතිය):** School (පාසල)\n* **Objective (අරමුණ):** To produce responsible, worthwhile, just citizens to society (රටට දෑයට වැඩදායක යහපත් පූර්ණ පූර්වැසියන් බිහිකිරීම).\n* **Input (ආදානය):** Children / Students (ළමුන් / සිසුන්).\n* **Process (සැකසීම):** The child is subjected to the teaching/learning process through interactions of teachers and other resources (ගුරුවරුන් හා සසුන් අන්‍යන්‍ය ක්‍රියාකාරීත්වයෙන් ඉගෙනුම් ඉගැන්වීම් ක්‍රියාවලිය).\n* **Output (ප්‍රතිදානය):** Providing good, educated citizens to the country (යහපත් පූර්වැසියන් ජාතියට දායාද කිරීම).\n* **Example 2: Weather Forecasting System (කාලගුණ අනාවැකි පද්ධතිය):**\n* **Input (ආදානය):** Atmospheric pressure, temperature, wind direction, humidity (වායුගෝල පීඩනය, උෂ්ණත්වය, සුළඟේ දිශාව, තෙතමනය).\n* **Process (සැකසීම):** Analyzing and computing meteorological data (දත්ත විශ්ලේෂණය හා ගණනය).\n* **Output (ප්‍රතිදානය):** Tomorrow's weather forecast report (හෙට දිනයේ කාලගුණ අනාවැකිය).",
          "si": "Textbook Examples (පෙළපොත් උදාහරණ):**\n* **Example 1: School as a System (පාසල පද්ධතියක් ලෙස):**\n* **System (පද්ධතිය):** School (පාසල)\n* **Objective (අරමුණ):** To produce responsible, worthwhile, just citizens to society (රටට දෑයට වැඩදායක යහපත් පූර්ණ පූර්වැසියන් බිහිකිරීම).\n* **Input (ආදානය):** Children / Students (ළමුන් / සිසුන්).\n* **Process (සැකසීම):** The child is subjected to the teaching/learning process through interactions of teachers and other resources (ගුරුවරුන් හා සසුන් අන්‍යන්‍ය ක්‍රියාකාරීත්වයෙන් ඉගෙනුම් ඉගැන්වීම් ක්‍රියාවලිය).\n* **Output (ප්‍රතිදානය):** Providing good, educated citizens to the country (යහපත් පූර්වැසියන් ජාතියට දායාද කිරීම).\n* **Example 2: Weather Forecasting System (කාලගුණ අනාවැකි පද්ධතිය):**\n* **Input (ආදානය):** Atmospheric pressure, temperature, wind direction, humidity (වායුගෝල පීඩනය, උෂ්ණත්වය, සුළඟේ දිශාව, තෙතමනය).\n* **Process (සැකසීම):** Analyzing and computing meteorological data (දත්ත විශ්ලේෂණය හා ගණනය).\n* **Output (ප්‍රතිදානය):** Tomorrow's weather forecast report (හෙට දිනයේ කාලගුණ අනාවැකිය).",
          "highlightTerm": "Textbook Examples"
        },
        {
          "id": "b-g11-u2-1-6",
          "en": "Information Systems:\nA system which converts data into Information is known as an information system.",
          "si": "තොරතුරු පද්ධති:\nදත්ත, තොරතුරු බවට පත් කරන පද්ධතියක් තොරතුරු පද්ධතියක් (Information System) ලෙස හැඳින්වේ.",
          "highlightTerm": "Information Systems"
        },
        {
          "id": "b-g11-u2-1-7",
          "en": "Classification of Information Systems:\nIn this type of system all processes are done manually by human hands.",
          "si": "තොරතුරු පද්ධති වර්ගීකරණය:\nමිනිසා තම දෑතින්ම දත්ත සකස් කර ප්‍රතිදාන ලබා දෙන පද්ධති අත්අයුරු / හස්තීය තොරතුරු පද්ධති ලෙස හැඳින්වේ.\"\n   * *Examples:* Manual student progress report system, paper library register, physical telephone directory book.\n2. **Computer Based Information Systems - CBIS (පරිගණක පාදක තොරතුරු පද්ධති):**\n   * **[English Medium Text]:** \"A system which converts data into Information using a computer is known as a computer based information system.\"\n   * **[Sinhala Medium Text]:** \"පරිගණකයක් හා මෘදුකාංග ආධාරයෙන් දත්ත තොරතුරු බවට පත් කරන පද්ධති පරිගණක පාදක තොරතුරු පද්ධති ලෙස හැඳින්වේ.\"\n   * *Examples:* Computerized library management system, computerized student database, automated banking system.",
          "highlightTerm": "Classification of Information Systems"
        },
        {
          "id": "b-g11-u2-1-8",
          "en": "#### 2.1.5 Benefits of Computer Based Systems (පරිගණක පාදක පද්ධතිවල වාසි)",
          "si": "#### 2.1.5 Benefits of Computer Based Systems (පරිගණක පාදක පද්ධතිවල වාසි)",
          "highlightTerm": "Benefits of Computer Based Systems"
        },
        {
          "id": "b-g11-u2-1-9",
          "en": "Example: Computer Based Library System (පරිගණක පාදක පුස්තකාල පද්ධතියක වාසි):**\n- Ability to maintain accurate records of those who have borrowed books.\n- Possibility to list those who have failed to return books on due dates quickly.\n- Establishes an online system for remote reservation and searching for books.\n- Ability to provide e-books to members.\n- Computer based library system can be networked with the main office to confirm return of books when issuing leaving certificates.",
          "si": "Example: Computer Based Library System (පරිගණක පාදක පුස්තකාල පද්ධතියක වාසි):**\n- Ability to maintain accurate records of those who have borrowed books.\n- Possibility to list those who have failed to return books on due dates quickly.\n- Establishes an online system for remote reservation and searching for books.\n- Ability to provide e-books to members.\n- Computer based library system can be networked with the main office to confirm return of books when issuing leaving certificates.",
          "highlightTerm": "Example: Computer Based Library System"
        },
        {
          "id": "b-g11-u2-1-10",
          "en": "#### 2.1.6 Comparison: Manual Systems vs. Computer Based Information Systems (අත්අයුරු සහ පරිගණක පාදක තොරතුරු පද්ධති අතර ප්‍රධාන වෙනස්කම්)",
          "si": "#### 2.1.6 Comparison: Manual Systems vs. Computer Based Information Systems (අත්අයුරු සහ පරිගණක පාදක තොරතුරු පද්ධති අතර ප්‍රධාන වෙනස්කම්)",
          "highlightTerm": "Comparison: Manual Systems vs. Computer Based Information Systems"
        }
      ],
      "examples": [
        {
          "id": "ex-11-2-1-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐\n        │      Input       │ ────► │     Process      │ ─────►│      Output      │\n        │     (ආදානය)      │       │     (සැකසීම)     │       │    (ප්‍රතිදානය)   │\n        └──────────────────┘       └──────────────────┘       └──────────────────┘",
          "contentSi": "┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐\n        │      Input       │ ────► │     Process      │ ─────►│      Output      │\n        │     (ආදානය)      │       │     (සැකසීම)     │       │    (ප්‍රතිදානය)   │\n        └──────────────────┘       └──────────────────┘       └──────────────────┘"
        },
        {
          "id": "ex-11-2-1-2",
          "titleEn": "Schematic / Code Diagram 2",
          "titleSi": "පරිපථ / කේත සටහන 2",
          "contentEn": "┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐\n        │       Data       │ ────► │     Process      │ ─────►│   Information    │\n        │      (දත්ත)      │       │     (සැකසීම)     │       │    (තොරතුරු)    │\n        └──────────────────┘       └──────────────────┘       └──────────────────┘",
          "contentSi": "┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐\n        │       Data       │ ────► │     Process      │ ─────►│   Information    │\n        │      (දත්ත)      │       │     (සැකසීම)     │       │    (තොරතුරු)    │\n        └──────────────────┘       └──────────────────┘       └──────────────────┘"
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
            "si": "පරිගණක පාදක පද්ධතිය"
          }
        ],
        "rows": [
          {
            "col0": {
              "en": "Accuracy & Errors (නිරවද්‍යතාව හා දෝෂ)",
              "si": "Accuracy & Errors (නිරවද්‍යතාව හා දෝෂ)"
            },
            "col1": {
              "en": "Since data is manually processed, there is more room for error.<br>(දත්ත හස්තීයව සකසන බැවින් දෝෂ ඇතිවීමට ඇති ඉඩකඩ වැඩිය.)",
              "si": "දත්ත හස්තීයව සකසන බැවින් දෝෂ ඇතිවීමට ඇති ඉඩකඩ වැඩිය."
            },
            "col2": {
              "en": "Errors are minimal with data processed by a computer program.<br>(සකසන ලද වැඩසටහනකට අනුව සිදුවන බැවින් දෝෂ ඇතිවීම අවම වේ.)",
              "si": "සකසන ලද වැඩසටහනකට අනුව සිදුවන බැවින් දෝෂ ඇතිවීම අවම වේ."
            }
          },
          {
            "col0": {
              "en": "Efficiency & Speed (කාර්යක්ෂමතාව හා වේගය)",
              "si": "Efficiency & Speed (කාර්යක්ෂමතාව හා වේගය)"
            },
            "col1": {
              "en": "Processing of data is less efficient / takes more time.<br>(තොරතුරු සකසා ගැනීම සඳහා වැඩි කාලයක් ගතවේ / කාර්යක්ෂමතාව අඩුය.)",
              "si": "තොරතුරු සකසා ගැනීම සඳහා වැඩි කාලයක් ගතවේ / කාර්යක්ෂමතාව අඩුය."
            },
            "col2": {
              "en": "Data can be processed more efficiently and quickly.<br>(ඉතා කෙටි කාලයකින් කාර්යක්ෂමව තොරතුරු සකසා ගත හැක.)",
              "si": "ඉතා කෙටි කාලයකින් කාර්යක්ෂමව තොරතුරු සකසා ගත හැක."
            }
          },
          {
            "col0": {
              "en": "Storage & Physical Space (ගබඩා කිරීම හා භෞතික ඉඩ)",
              "si": "Storage & Physical Space (ගබඩා කිරීම හා භෞතික ඉඩ)"
            },
            "col1": {
              "en": "Requires a large space for data storage (filing cabinets, cupboards required).<br>(දත්ත ගබඩා කිරීම සඳහා විශාල ඉඩ ප්‍රමාණයක් අවශ්‍ය වන අතර කබඩ් ආදිය අවශ්‍ය වේ.)",
              "si": "filing cabinets, cupboards required).<br>(දත්ත ගබඩා කිරීම සඳහා විශාල ඉඩ ප්‍රමාණයක් අවශ්‍ය වන අතර කබඩ් ආදිය අවශ්‍ය වේ."
            },
            "col2": {
              "en": "Large amounts of data can be stored in a small physical space using database software.<br>(ඉතා සුළු ඉඩ ප්‍රමාණයක විශාල දත්ත ප්‍රමාණයක් ගබඩා කර තබා ගත හැක.)",
              "si": "ඉතා සුළු ඉඩ ප්‍රමාණයක විශාල දත්ත ප්‍රමාණයක් ගබඩා කර තබා ගත හැක."
            }
          },
          {
            "col0": {
              "en": "Security & Backups (ආරක්ෂාව හා උපස්ථ)",
              "si": "Security & Backups (ආරක්ෂාව හා උපස්ථ)"
            },
            "col1": {
              "en": "Data is open to a lot of threats (fire, damage, loss); not as safe.<br>(දත්ත නොයෙක් ව්‍යසනවලට භාජනය විය හැකි අතර ආරක්ෂාව සාපේක්ෂව අඩුය.)",
              "si": "fire, damage, loss); not as safe.<br>(දත්ත නොයෙක් ව්‍යසනවලට භාජනය විය හැකි අතර ආරක්ෂාව සාපේක්ෂව අඩුය."
            },
            "col2": {
              "en": "Security can be ensured with backups and the use of passwords.<br>(උපස්ථ (Backups) යොදාගැනීමෙන් හා මුරපද භාවිතයෙන් වැඩි ආරක්ෂාවක් ලබාගත හැක.)",
              "si": "උපස්ථ (Backups) යොදාගැනීමෙන් හා මුරපද භාවිතයෙන් වැඩි ආරක්ෂාවක් ලබාගත හැක."
            }
          },
          {
            "col0": {
              "en": "Data Searching & Analysis (දත්ත සෙවීම හා විශ්ලේෂණය)",
              "si": "Data Searching & Analysis (දත්ත සෙවීම හා විශ්ලේෂණය)"
            },
            "col1": {
              "en": "Difficult to search, organize, and analyze data.<br>(දත්ත සොයා ගැනීම සහ විශ්ලේෂණය කිරීම අපහසු වේ.)",
              "si": "දත්ත සොයා ගැනීම සහ විශ්ලේෂණය කිරීම අපහසු වේ."
            },
            "col2": {
              "en": "Fast searching, filtering, and efficient automated data analysis.<br>(දත්ත පහසුවෙන් සොයාගත හැකි අතර විශ්ලේෂණය කිරීම ඉතා පහසුය.)",
              "si": "දත්ත පහසුවෙන් සොයාගත හැකි අතර විශ්ලේෂණය කිරීම ඉතා පහසුය."
            }
          },
          {
            "col0": {
              "en": "Manpower & Cost (මානව සම්පත හා පිරිවැය)",
              "si": "Manpower & Cost (මානව සම්පත හා පිරිවැය)"
            },
            "col1": {
              "en": "More manpower is needed to manage paper files.<br>(ගොනු පවත්වාගෙන යාම සඳහා වැඩි මානව සම්පතක් අවශ්‍ය වේ.)",
              "si": "ගොනු පවත්වාගෙන යාම සඳහා වැඩි මානව සම්පතක් අවශ්‍ය වේ."
            },
            "col2": {
              "en": "Less manpower needed, reducing long-term operational cost.<br>(අවශ්‍ය වන මානව සම්පත අඩු වන අතර මෙහෙයුම් පිරිවැය ද අඩු වේ.)",
              "si": "අවශ්‍ය වන මානව සම්පත අඩු වන අතර මෙහෙයුම් පිරිවැය ද අඩු වේ."
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g11-u2-1",
        "questionEn": "Which of the following is the most accurate concept regarding Concept of a System & Information Systems?",
        "questionSi": "පද්ධතියක් සහ තොරතුරු පද්ධතියක් පිළිබඳ සංකල්පය පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Concept of a System & Information Systems",
            "si": "පද්ධතියක් සහ තොරතුරු පද්ධතියක් පිළිබඳ සංකල්පය පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
          },
          {
            "id": "2",
            "en": "Temporary bypass without hardware or software processing",
            "si": "දෘඩාංග හෝ මෘදුකාංග සැකසීමකින් තොර තාවකාලික මගහැරීමක්"
          },
          {
            "id": "3",
            "en": "Incompatible legacy instruction rejected by the system architecture",
            "si": "පද්ධති ව්‍යුහය මගින් ප්‍රතික්ෂේප කරනු ලබන නොගැලපෙන පැරණි උපදෙසක්"
          },
          {
            "id": "4",
            "en": "Unverified transmission noise discarded during transmission",
            "si": "සන්නිවේදනයේ දී ඉවතලන තහවුරු නොකළ සම්ප්‍රේෂණ ඝෝෂාවක්"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Concept of a System & Information Systems.",
        "explanationSi": "1 වන වරණය මගින් පද්ධතියක් සහ තොරතුරු පද්ධතියක් පිළිබඳ සංකල්පය පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u2-st-2",
      "number": "2.2",
      "titleEn": "System Development Life Cycle - SDLC",
      "titleSi": "පද්ධති සංවර්ධන ජීවන චක්‍රය",
      "summaryEn": "System Development Life Cycle - SDLC concepts, definitions, and examination competencies.",
      "summarySi": "පද්ධති සංවර්ධන ජීවන චක්‍රය සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u2-2-1",
          "en": "Core SDLC Definition:\nSystem Development Life Cycle (SDLC) is a structured, step-by-step framework used to design, develop, test, deploy, and maintain an information system effectively.",
          "si": "පද්ධති සංවර්ධන ජීවන චක්‍රයේ අර්ථ දැක්වීම:\nතොරතුරු පද්ධතියක් සාර්ථකව සැලසුම් කිරීම, සංවර්ධනය කිරීම, පරීක්ෂා කිරීම, ස්ථාපනය කිරීම සහ නඩත්තු කිරීම සඳහා අනුගමනය කරනු ලබන ව්‍යුහගත පියවරෙන් පියවර ක්‍රියාවලිය පද්ධති සංවර්ධන ජීවන චක්‍රය (SDLC) ලෙස හැඳින්වේ.\"\n\n\n\n\n---",
          "highlightTerm": "Core SDLC Definition"
        },
        {
          "id": "b-g11-u2-2-2",
          "en": "Step 1: Identification of Requirements & Feasibility Study:\nMeeting users directly to ask questions and collect detailed information about system requirements.",
          "si": "අවශ්‍යතා හඳුනා ගැනීම සහ ශක්‍යතා අධ්‍යයනය:\nපරිශීලකයන් පෞද්ගලිකව හමු වී ප්‍රශ්න ඇසීම මගින් පද්ධති අවශ්‍යතා පිළිබඳ සවිස්තරාත්මක තොරතුරු රැස් කිරීම.\"\n   * **Questionnaires (ප්‍රශ්නාවලිය):**\n     * **[English Medium Text]:** \"Distributing printed or digital questionnaires to a large group of users to gather data quickly.\"\n     * **[Sinhala Medium Text]:** \"විශාල පිරිසකගෙන් ඉක්මනින් තොරතුරු රැස් කිරීම සඳහා මුද්‍රිත හෝ ඩිජිටල් ප්‍රශ්නාවලි ලබා දීම.\"\n   * **Observations (නිරීක්ෂණය):**\n     * **[English Medium Text]:** \"Watching the existing system processes and user activities directly in the actual working environment.\"\n     * **[Sinhala Medium Text]:** \"වත්මන් පද්ධතියේ ක්‍රියාකාරීත්වය සහ සේවකයන්ගේ කාර්යයන් සෘජුවම බලා නිරීක්ෂණය කිරීම.\"\n   * **Document Review / Sample Collection (ලේඛන පරීක්ෂාව):**\n     * **[English Medium Text]:** \"Examining existing forms, reports, files, and manuals to understand current system procedures.\"\n     * **[Sinhala Medium Text]:** \"වත්මන් පද්ධතියේ භාවිත වන ආකෘති පත්‍ර, වාර්තා, ගොනු සහ උපදෙස් සංග්‍රහ පරීක්ෂා කිරීම.\"\n   * **Prototyping (මූලාකෘතිකරණය):**\n     * **[English Medium Text]:** \"Creating a working model or prototype of the proposed system to demonstrate functionality and gather feedback.\"\n     * **[Sinhala Medium Text]:** \"යෝජිත පද්ධතියේ වැඩකරන මූලාකෘතියක් (Prototype) සාදා පරිශීලකයන්ට පෙන්වා අදහස් හා යෝජනා ලබා ගැනීම.\"\n\n2. **Feasibility Study Types (ශක්‍යතා අධ්‍යයන වර්ග):**\n   * **Technical Feasibility (තාක්ෂණික ශක්‍යතාව):**\n     * **[English Medium Text]:** \"Assessing whether required hardware, software, and technical skills are available to build the system.\"\n     * **[Sinhala Medium Text]:** \"පද්ධතිය සංවර්ධනය කිරීමට අවශ්‍ය දෘඩාංග, මෘදුකාංග සහ තාක්ෂණික දැනුම පවතීදැයි අධ්‍යයනය කිරීම.\"\n   * **Operational Feasibility (ක්‍රියාකාරී ශක්‍යතාව):**\n     * **[English Medium Text]:** \"Evaluating whether the proposed system will solve the organization's problem and be accepted by users.\"\n     * **[Sinhala Medium Text]:** \"යෝජිත පද්ධතිය මගින් ආයතනයේ ගැටලුව විසඳෙන්නේද සහ පරිශීලකයන් එය පිළිගන්නේදැයි අධ්‍යයනය කිරීම.\"\n   * **Economic Feasibility / Cost-Benefit Analysis (ආර්ථික / පිරිවැය-ප්‍රතිලාභ ශක්‍යතාව):**\n     * **[English Medium Text]:** \"Determining whether the financial benefits of the new system outweigh the development and maintenance costs.\"\n     * **[Sinhala Medium Text]:** \"නව පද්ධතියෙන් ලැබෙන මූල්‍යමය ප්‍රතිලාභ එහි සංවර්ධන හා නඩත්තු පිරිවැයට වඩා වැඩිදැයි අධ්‍යයනය කිරීම.\"\n\n---",
          "highlightTerm": "Step 1: Identification of Requirements & Feasibility Study"
        },
        {
          "id": "b-g11-u2-2-3",
          "en": "Step 2: System Analysis:\nSystem Analysis involves studying the existing system in detail, identifying its weaknesses and constraints, and defining functional and non-functional requirements for the new system.",
          "si": "පද්ධති විශ්ලේෂණය:\nපද්ධති විශ්ලේෂණයේ දී වත්මන් පද්ධතිය සවිස්තරාත්මකව අධ්‍යයනය කර, එහි පවතින දුර්වලතා හා සීමාවන් හඳුනාගෙන, නව පද්ධතියට අදාළ කාර්යබද්ධ (Functional) සහ කාර්යබද්ධ නොවන (Non-functional) අවශ්‍යතා නිර්වචනය කරනු ලබයි.",
          "highlightTerm": "Step 2: System Analysis"
        },
        {
          "id": "b-g11-u2-2-4",
          "en": "System Analysis Modeling Tools:**\n* **Data Flow Diagram - DFD (දත්ත ගැලීම් සටහන්):** Visual representation of data movement, processes, data stores, and external entities.\n* **Entity Relationship Diagram - ERD (එන්ටිටි සබඳතා සටහන්):** Conceptual representation of database tables and relationships.",
          "si": "System Analysis Modeling Tools:**\n* **Data Flow Diagram - DFD (දත්ත ගැලීම් සටහන්):** Visual representation of data movement, processes, data stores, and external entities.\n* **Entity Relationship Diagram - ERD (එන්ටිටි සබඳතා සටහන්):** Conceptual representation of database tables and relationships.",
          "highlightTerm": "System Analysis Modeling Tools"
        },
        {
          "id": "b-g11-u2-2-5",
          "en": "Step 3: System Design:\nDesigning the architecture of the new system, including User Interfaces (UI), Input Forms, Output Reports, Database Schema, and Logical Control Algorithms.",
          "si": "පද්ධති සැලසුම් කිරීම:\nනව පද්ධතියේ ගෘහ නිර්මාණ ශිල්පය, පරිශීලක අතුරුමුහුණත් (UI), ආදාන ආකෘති පත්‍ර, ප්‍රතිදාන වාර්තා, දත්ත සමුදා සැලසුම් සහ ලොජික් ඇල්ගොරිතම සැලසුම් කිරීම මෙහිදී සිදු කෙරේ.\"\n\n---",
          "highlightTerm": "Step 3: System Design"
        },
        {
          "id": "b-g11-u2-2-6",
          "en": "Step 4: Software Development / Coding:\nTranslating system design specifications into functional software using a high-level programming language (such as Pascal, Python, C#, or Java).",
          "si": "පද්ධති සංවර්ධනය / කේතනය කිරීම:\nපද්ධති සැලසුම් විවිතරයන් උසස් පෙළ ක්‍රමලේඛන භාෂාවක් (Pascal, Python, C#, Java වැනි) භාවිතයෙන් ක්‍රියාකාරී මෘදුකාංග කේත බවට පරිවර්තනය කිරීම.\"\n\n---",
          "highlightTerm": "Step 4: Software Development / Coding"
        },
        {
          "id": "b-g11-u2-2-7",
          "en": "#### Step 5: System Testing & Quality Assurance (පද්ධති පරීක්ෂාව)\n1. **Levels of System Testing (පද්ධති පරීක්ෂාවේ මට්ටම්):**\n* **Unit Testing (ඒකක පරීක්ෂාව):**\n* Testing individual software components, modules, or functions independently.\n* තනි මෘදුකාංග ඒකක හෝ මොඩියුල වෙන් වෙන් වශයෙන් පරීක්ෂා කිරීම.\n* **Integration Testing (අනුකලන පරීක්ෂාව):**\n* Testing combined modules together to ensure seamless data flow between components.\n* මොඩියුල කිහිපයක් එකිනෙකට සම්බන්ධ කර දත්ත හුවමාරුව නිවැරදිදැයි පරීක්ෂා කිරීම.\n* **System Testing (පද්ධති පරීක්ෂාව):**\n* Testing the complete, fully integrated system end-to-end against requirements.\n* සම්පූර්ණ පද්ධතියම එකතු කර සමස්තයක් ලෙස පරීක්ෂා කිරීම.\n* **User Acceptance Testing - UAT (පිළිගැනීමේ පරීක්ෂාව):**\n* Testing conducted by actual end users / clients in the real operational environment before final acceptance.\n* පද්ධතිය භාර ගැනීමට පෙර සැබෑ පරිශීලකයන් / පාරිභෝගිකයන් විසින් පද්ධතිය පරීක්ෂා කිරීම.\n2. **Test Data Types (පරීක්ෂණ දත්ත වර්ග):**\n* **Valid Data (වලංගු දත්ත):** Normal input data within expected ranges (e.g. Mark = 75).\n* **Invalid Data (අවලංගු දත්ත):** Out-of-bound or incorrect format data to check error handling (e.g. Mark = 150 or Mark = -20).\n* **Boundary Data (සීමාකාරී දත්ත):** Data values exactly on the minimum and maximum boundaries (e.g. Mark = 0, Mark = 100).",
          "si": "#### Step 5: System Testing & Quality Assurance (පද්ධති පරීක්ෂාව)\n1. **Levels of System Testing (පද්ධති පරීක්ෂාවේ මට්ටම්):**\n* **Unit Testing (ඒකක පරීක්ෂාව):**\n* Testing individual software components, modules, or functions independently.\n* තනි මෘදුකාංග ඒකක හෝ මොඩියුල වෙන් වෙන් වශයෙන් පරීක්ෂා කිරීම.\n* **Integration Testing (අනුකලන පරීක්ෂාව):**\n* Testing combined modules together to ensure seamless data flow between components.\n* මොඩියුල කිහිපයක් එකිනෙකට සම්බන්ධ කර දත්ත හුවමාරුව නිවැරදිදැයි පරීක්ෂා කිරීම.\n* **System Testing (පද්ධති පරීක්ෂාව):**\n* Testing the complete, fully integrated system end-to-end against requirements.\n* සම්පූර්ණ පද්ධතියම එකතු කර සමස්තයක් ලෙස පරීක්ෂා කිරීම.\n* **User Acceptance Testing - UAT (පිළිගැනීමේ පරීක්ෂාව):**\n* Testing conducted by actual end users / clients in the real operational environment before final acceptance.\n* පද්ධතිය භාර ගැනීමට පෙර සැබෑ පරිශීලකයන් / පාරිභෝගිකයන් විසින් පද්ධතිය පරීක්ෂා කිරීම.\n2. **Test Data Types (පරීක්ෂණ දත්ත වර්ග):**\n* **Valid Data (වලංගු දත්ත):** Normal input data within expected ranges (e.g. Mark = 75).\n* **Invalid Data (අවලංගු දත්ත):** Out-of-bound or incorrect format data to check error handling (e.g. Mark = 150 or Mark = -20).\n* **Boundary Data (සීමාකාරී දත්ත):** Data values exactly on the minimum and maximum boundaries (e.g. Mark = 0, Mark = 100).",
          "highlightTerm": "Step 5: System Testing & Quality Assurance"
        },
        {
          "id": "b-g11-u2-2-8",
          "en": "#### Step 6: System Implementation / Deployment Methods (පද්ධතිය ස්ථාපනය කිරීමේ ක්‍රම 4)",
          "si": "#### Step 6: System Implementation / Deployment Methods (පද්ධතිය ස්ථාපනය කිරීමේ ක්‍රම 4)",
          "highlightTerm": "Step 6: System Implementation / Deployment Methods"
        },
        {
          "id": "b-g11-u2-2-9",
          "en": "#### Step 7: System Maintenance (පද්ධති නඩත්තුව)",
          "si": "#### Step 7: System Maintenance (පද්ධති නඩත්තුව)",
          "highlightTerm": "Step 7: System Maintenance"
        },
        {
          "id": "b-g11-u2-2-10",
          "en": "Types of System Maintenance (පද්ධති නඩත්තු වර්ග 4):**\n1. **Corrective Maintenance (නිවැරදි කිරීමේ නඩත්තුව):**\n* Fixing software bugs, coding errors, or logic defects discovered during daily operations.\n* පද්ධතිය භාවිත කිරීමේදී හමුවන දෝෂ (Bugs) සහ වැරදි සකස් කිරීම.\n2. **Adaptive Maintenance (අනුකූලතා නඩත්තුව):**\n* Modifying software to work in new operating environments (e.g., OS upgrade, new hardware, legal/policy changes).\n* නව මෙහෙයුම් පද්ධති, දෘඩාංග හෝ නීතිමය වෙනස්කම්වලට අනුකූල වන සේ පද්ධතිය වෙනස් කිරීම.\n3. **Perfective Maintenance (පරිපූර්ණත්ව නඩත්තුව):**\n* Enhancing features, improving performance, or adding new user requirements to make the system better.\n* පද්ධතියේ කාර්යක්ෂමතාව වැඩි කිරීම සහ පරිශීලකයන්ගේ අලුත් අවශ්‍යතා එකතු කිරීම.\n4. **Preventive Maintenance (පූර්වාරක්ෂක නඩත්තුව):**\n* Routine checks, code refactoring, and security patches to prevent future software failures.\n* අනාගතයේදී සිදුවිය හැකි දෝෂ වැළැක්වීම සඳහා සිදුකරන පූර්වාරක්ෂක නඩත්තු කටයුතු.",
          "si": "Types of System Maintenance (පද්ධති නඩත්තු වර්ග 4):**\n1. **Corrective Maintenance (නිවැරදි කිරීමේ නඩත්තුව):**\n* Fixing software bugs, coding errors, or logic defects discovered during daily operations.\n* පද්ධතිය භාවිත කිරීමේදී හමුවන දෝෂ (Bugs) සහ වැරදි සකස් කිරීම.\n2. **Adaptive Maintenance (අනුකූලතා නඩත්තුව):**\n* Modifying software to work in new operating environments (e.g., OS upgrade, new hardware, legal/policy changes).\n* නව මෙහෙයුම් පද්ධති, දෘඩාංග හෝ නීතිමය වෙනස්කම්වලට අනුකූල වන සේ පද්ධතිය වෙනස් කිරීම.\n3. **Perfective Maintenance (පරිපූර්ණත්ව නඩත්තුව):**\n* Enhancing features, improving performance, or adding new user requirements to make the system better.\n* පද්ධතියේ කාර්යක්ෂමතාව වැඩි කිරීම සහ පරිශීලකයන්ගේ අලුත් අවශ්‍යතා එකතු කිරීම.\n4. **Preventive Maintenance (පූර්වාරක්ෂක නඩත්තුව):**\n* Routine checks, code refactoring, and security patches to prevent future software failures.\n* අනාගතයේදී සිදුවිය හැකි දෝෂ වැළැක්වීම සඳහා සිදුකරන පූර්වාරක්ෂක නඩත්තු කටයුතු.",
          "highlightTerm": "Types of System Maintenance"
        }
      ],
      "examples": [
        {
          "id": "ex-11-2-2-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "┌─────────────────────────────────────────┐\n        │  1. Identification of Requirements      │\n        │     (අවශ්‍යතා හඳුනා ගැනීම)               │\n        └────────────────────┬────────────────────┘\n                             │\n                             ▼\n        ┌─────────────────────────────────────────┐\n        │  2. System Analysis (පද්ධති විශ්ලේෂණය)   │\n        └────────────────────┬────────────────────┘\n                             │\n                             ▼\n        ┌─────────────────────────────────────────┐\n        │  3. System Design (පද්ධති සැලසුම් කිරීම)  │\n        └────────────────────┬────────────────────┘\n                             │\n                             ▼\n        ┌─────────────────────────────────────────┐\n        │  4. Software Development / Coding       │\n        │     (පද්ධති සංවර්ධනය / කේතනය කිරීම)     │\n        └────────────────────┬────────────────────┘\n                             │\n                             ▼\n        ┌─────────────────────────────────────────┐\n        │  5. Testing & Quality Assurance         │\n        │     (පද්ධති පරීක්ෂාව)                   │\n        └────────────────────┬────────────────────┘\n                             │\n                             ▼\n        ┌─────────────────────────────────────────┐\n        │  6. Implementation / Deployment         │\n        │     (පද්ධතිය ස්ථාපනය කිරීම)             │\n        └────────────────────┬────────────────────┘\n                             │\n                             ▼\n        ┌─────────────────────────────────────────┐\n        │  7. System Maintenance (පද්ධති නඩත්තුව) │\n        └─────────────────────────────────────────┘",
          "contentSi": "┌─────────────────────────────────────────┐\n        │  1. Identification of Requirements      │\n        │     (අවශ්‍යතා හඳුනා ගැනීම)               │\n        └────────────────────┬────────────────────┘\n                             │\n                             ▼\n        ┌─────────────────────────────────────────┐\n        │  2. System Analysis (පද්ධති විශ්ලේෂණය)   │\n        └────────────────────┬────────────────────┘\n                             │\n                             ▼\n        ┌─────────────────────────────────────────┐\n        │  3. System Design (පද්ධති සැලසුම් කිරීම)  │\n        └────────────────────┬────────────────────┘\n                             │\n                             ▼\n        ┌─────────────────────────────────────────┐\n        │  4. Software Development / Coding       │\n        │     (පද්ධති සංවර්ධනය / කේතනය කිරීම)     │\n        └────────────────────┬────────────────────┘\n                             │\n                             ▼\n        ┌─────────────────────────────────────────┐\n        │  5. Testing & Quality Assurance         │\n        │     (පද්ධති පරීක්ෂාව)                   │\n        └────────────────────┬────────────────────┘\n                             │\n                             ▼\n        ┌─────────────────────────────────────────┐\n        │  6. Implementation / Deployment         │\n        │     (පද්ධතිය ස්ථාපනය කිරීම)             │\n        └────────────────────┬────────────────────┘\n                             │\n                             ▼\n        ┌─────────────────────────────────────────┐\n        │  7. System Maintenance (පද්ධති නඩත්තුව) │\n        └─────────────────────────────────────────┘"
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
              "en": "Direct Deployment<br>(සෘජු ස්ථාපනය)",
              "si": "Direct Deployment<br>(සෘජු ස්ථාපනය)"
            },
            "col1": {
              "en": "Old system is completely shut down and replaced immediately by the new system.<br>(පැරණි පද්ධතිය සම්පූර්ණයෙන්ම නවතා නව පද්ධතිය සෘජුවම ක්‍රියාත්මක කරයි.)",
              "si": "පැරණි පද්ධතිය සම්පූර්ණයෙන්ම නවතා නව පද්ධතිය සෘජුවම ක්‍රියාත්මක කරයි."
            },
            "col2": {
              "en": "• Fastest implementation.<br>• Lowest initial operational cost.<br>(ඉතා ඉක්මන්, පිරිවැය අඩුය.)",
              "si": "ඉතා ඉක්මන්, පිරිවැය අඩුය."
            },
            "col3": {
              "en": "• Highest risk.<br>• If new system fails, business operations stop.<br>(අවදානම ඉහළම වේ, දත්ත අහිමි විය හැක.)",
              "si": "අවදානම ඉහළම වේ, දත්ත අහිමි විය හැක."
            }
          },
          {
            "col0": {
              "en": "Parallel Deployment<br>(සමාන්තර ස්ථාපනය)",
              "si": "Parallel Deployment<br>(සමාන්තර ස්ථාපනය)"
            },
            "col1": {
              "en": "Both old and new systems run simultaneously side-by-side for a specific period.<br>(පැරණි හා නව පද්ධති දෙකම යම් කාලයක් සමාන්තරව පවත්වාගෙන යයි.)",
              "si": "පැරණි හා නව පද්ධති දෙකම යම් කාලයක් සමාන්තරව පවත්වාගෙන යයි."
            },
            "col2": {
              "en": "• Safest method.<br>• Backup system available if new system fails.<br>(අවදානම අවම වේ, පැරණි පද්ධතිය උපස්ථයක් ලෙස පවතී.)",
              "si": "අවදානම අවම වේ, පැරණි පද්ධතිය උපස්ථයක් ලෙස පවතී."
            },
            "col3": {
              "en": "• Highest operational cost.<br>• Double workload for staff.<br>(පිරිවැය අධිකය, සේවකයන්ට දෙගුණයක වැඩ ප්‍රමාණයක් ඇත.)",
              "si": "පිරිවැය අධිකය, සේවකයන්ට දෙගුණයක වැඩ ප්‍රමාණයක් ඇත."
            }
          },
          {
            "col0": {
              "en": "Pilot Deployment<br>(නියමු ස්ථාපනය)",
              "si": "Pilot Deployment<br>(නියමු ස්ථාපනය)"
            },
            "col1": {
              "en": "New system is implemented in one branch or department first before full rollout.<br>(නව පද්ධතිය මුලින්ම එක් අංශයක හෝ එක් ශාඛාවක පමණක් ස්ථාපනය කර බලයි.)",
              "si": "නව පද්ධතිය මුලින්ම එක් අංශයක හෝ එක් ශාඛාවක පමණක් ස්ථාපනය කර බලයි."
            },
            "col2": {
              "en": "• Low risk for whole organization.<br>• Issues isolated to one branch.<br>(සමස්ත ආයතනයටම ඇති අවදානම අඩුය.)",
              "si": "සමස්ත ආයතනයටම ඇති අවදානම අඩුය."
            },
            "col3": {
              "en": "• Takes longer for full company-wide deployment.<br>(සමස්ත ආයතනයටම ස්ථාපනය කිරීමට වැඩි කාලයක් ගතවේ.)",
              "si": "සමස්ත ආයතනයටම ස්ථාපනය කිරීමට වැඩි කාලයක් ගතවේ."
            }
          },
          {
            "col0": {
              "en": "Phased Deployment<br>(අදියරමය ස්ථාපනය)",
              "si": "Phased Deployment<br>(අදියරමය ස්ථාපනය)"
            },
            "col1": {
              "en": "New system modules are deployed in progressive phases/stages over time.<br>(නව පද්ධතියේ කොටස්/මොඩියුල අදියරෙන් අදියර ස්ථාපනය කරයි.)",
              "si": "නව පද්ධතියේ කොටස්/මොඩියුල අදියරෙන් අදියර ස්ථාපනය කරයි."
            },
            "col2": {
              "en": "• Users can adapt gradually.<br>• Problems isolated to specific module.<br>(පරිශීලකයන්ට ක්‍රමයෙන් හුරු විය හැක.)",
              "si": "පරිශීලකයන්ට ක්‍රමයෙන් හුරු විය හැක."
            },
            "col3": {
              "en": "• System integration issues between old/new modules.<br>(පැරණි හා නව කොටස් අතර සම්බන්ධතාව පවත්වාගැනීම සංකීර්ණ වේ.)",
              "si": "පැරණි හා නව කොටස් අතර සම්බන්ධතාව පවත්වාගැනීම සංකීර්ණ වේ."
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g11-u2-2",
        "questionEn": "Which of the following is the most accurate concept regarding System Development Life Cycle - SDLC?",
        "questionSi": "පද්ධති සංවර්ධන ජීවන චක්‍රය පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of System Development Life Cycle - SDLC",
            "si": "පද්ධති සංවර්ධන ජීවන චක්‍රය පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
          },
          {
            "id": "2",
            "en": "Temporary bypass without hardware or software processing",
            "si": "දෘඩාංග හෝ මෘදුකාංග සැකසීමකින් තොර තාවකාලික මගහැරීමක්"
          },
          {
            "id": "3",
            "en": "Incompatible legacy instruction rejected by the system architecture",
            "si": "පද්ධති ව්‍යුහය මගින් ප්‍රතික්ෂේප කරනු ලබන නොගැලපෙන පැරණි උපදෙසක්"
          },
          {
            "id": "4",
            "en": "Unverified transmission noise discarded during transmission",
            "si": "සන්නිවේදනයේ දී ඉවතලන තහවුරු නොකළ සම්ප්‍රේෂණ ඝෝෂාවක්"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for System Development Life Cycle - SDLC.",
        "explanationSi": "1 වන වරණය මගින් පද්ධති සංවර්ධන ජීවන චක්‍රය පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u2-st-3",
      "number": "2.3",
      "titleEn": "System Development Life Cycle Models",
      "titleSi": "පද්ධති සංවර්ධන ජීවන චක්‍ර ආකෘති",
      "summaryEn": "System Development Life Cycle Models concepts, definitions, and examination competencies.",
      "summarySi": "පද්ධති සංවර්ධන ජීවන චක්‍ර ආකෘති සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u2-3-1",
          "en": "#### 1. Waterfall Model (දියඇලි ආකෘතිය)",
          "si": "#### 1. Waterfall Model (දියඇලි ආකෘතිය)",
          "highlightTerm": "Waterfall Model"
        },
        {
          "id": "b-g11-u2-3-2",
          "en": "Key Characteristics:**\n* Sequential linear flow — each phase must be 100% completed before moving to the next.\n* Rigid and structured — suitable for simple projects with fixed, clear requirements.\n* **Limitation:** User sees the working software only at the end of the life cycle.",
          "si": "Key Characteristics:**\n* Sequential linear flow — each phase must be 100% completed before moving to the next.\n* Rigid and structured — suitable for simple projects with fixed, clear requirements.\n* **Limitation:** User sees the working software only at the end of the life cycle.",
          "highlightTerm": "Key Characteristics"
        },
        {
          "id": "b-g11-u2-3-3",
          "en": "#### 2. Iterative Incremental Model (පුනර්කරණ-වර්ධී ආකෘතිය)",
          "si": "#### 2. Iterative Incremental Model (පුනර්කරණ-වර්ධී ආකෘතිය)",
          "highlightTerm": "Iterative Incremental Model"
        },
        {
          "id": "b-g11-u2-3-4",
          "en": "Key Characteristics:**\n* System is developed in repeating cycles (iterative) and small portions at a time (incremental).\n* Starts with a simple sub-set of requirements, then enhances versions through repeated feedback loops.\n* Allows developers to incorporate learning from previous cycles and user feedback early.",
          "si": "Key Characteristics:**\n* System is developed in repeating cycles (iterative) and small portions at a time (incremental).\n* Starts with a simple sub-set of requirements, then enhances versions through repeated feedback loops.\n* Allows developers to incorporate learning from previous cycles and user feedback early.",
          "highlightTerm": "Key Characteristics"
        }
      ],
      "examples": [
        {
          "id": "ex-11-2-3-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "[ Identification of Requirements ]\n                 │\n                 ▼\n        [ Planning Solution ]\n                 │\n                 ▼\n        [ Implementation / Coding ]\n                 │\n                 ▼\n        [ Testing and Debugging ]\n                 │\n                 ▼\n        [ Deployment of System ]\n                 │\n                 ▼\n        [ System Maintenance ]",
          "contentSi": "[ Identification of Requirements ]\n                 │\n                 ▼\n        [ Planning Solution ]\n                 │\n                 ▼\n        [ Implementation / Coding ]\n                 │\n                 ▼\n        [ Testing and Debugging ]\n                 │\n                 ▼\n        [ Deployment of System ]\n                 │\n                 ▼\n        [ System Maintenance ]"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u2-3",
        "questionEn": "Which of the following is the most accurate concept regarding System Development Life Cycle Models?",
        "questionSi": "පද්ධති සංවර්ධන ජීවන චක්‍ර ආකෘති පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of System Development Life Cycle Models",
            "si": "පද්ධති සංවර්ධන ජීවන චක්‍ර ආකෘති පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
          },
          {
            "id": "2",
            "en": "Temporary bypass without hardware or software processing",
            "si": "දෘඩාංග හෝ මෘදුකාංග සැකසීමකින් තොර තාවකාලික මගහැරීමක්"
          },
          {
            "id": "3",
            "en": "Incompatible legacy instruction rejected by the system architecture",
            "si": "පද්ධති ව්‍යුහය මගින් ප්‍රතික්ෂේප කරනු ලබන නොගැලපෙන පැරණි උපදෙසක්"
          },
          {
            "id": "4",
            "en": "Unverified transmission noise discarded during transmission",
            "si": "සන්නිවේදනයේ දී ඉවතලන තහවුරු නොකළ සම්ප්‍රේෂණ ඝෝෂාවක්"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for System Development Life Cycle Models.",
        "explanationSi": "1 වන වරණය මගින් පද්ධති සංවර්ධන ජීවන චක්‍ර ආකෘති පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    }
  ],
  "pastPaperQuestions": [
    {
      "id": "pp-g11-u2-2020-1",
      "year": 2020,
      "paperType": "Paper I",
      "badgeText": "2020 O/L Paper I - Question 10 & 11",
      "questionEn": "Assume that you are the leader of a team assigned to develop a new information system for your school. Which of the following techniques can be used to identify requirements for this system?\n  A – Observation   B – Interviews   C – Prototyping",
      "questionSi": "ඔබ ඔබේ පාසල සඳහා නව තොරතුරු පද්ධතියක් සංවර්ධනය කිරීමට පවරන ලද කණ්ඩායමක නායකයා යැයි සිතන්න. මෙම පද්ධතිය සඳහා අවශ්‍යතා හඳුනා ගැනීමට පහත සඳහන් කුමන ශිල්පක්‍රම භාවිත කළ හැකිද?\n  A – නිරීක්ෂණය   B – සම්මුඛ සාකච්ඡා   C – මූලාකෘතිකරණය (Prototyping)",
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
          "en": "All A, B and C\n\n  11. Which of the following is the correct order of activities in the Software Development Life Cycle (SDLC)?\n  A – Implementation   B – Requirement identification   C – Design   D – Deployment   E – Testing   F – Maintenance\n  (1) D, B, C, A, E and F   (2) B, D, C, A, F and E   (3) B, C, A, E, D and F   (4) B, C, D, A, E and F",
          "si": "A, B සහ C සියල්ලම\n\n  11. මෘදුකාංග සංවර්ධන ජීවන චක්‍රයේ (SDLC) ක්‍රියාකාරකම්වල නිවැරදි අනුපිළිවෙල කුමක්ද?\n  A – ස්ථාපනය (Implementation)   B – අවශ්‍යතා හඳුනා ගැනීම   C – සැලසුම් කිරීම   D – පද්ධතිය පිහිටුවීම (Deployment)   E – පරීක්ෂාව   F – නඩත්තුව\n  (1) D, B, C, A, E සහ F   (2) B, D, C, A, F සහ E   (3) B, C, A, E, D සහ F   (4) B, C, D, A, E සහ F"
        }
      ],
      "correctOptionId": "1",
      "explanationEn": "Verbatim official examination question from 2020 O/L Paper I - Question 10 & 11.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper I - Question 10 & 11."
    },
    {
      "id": "pp-g11-u2-2020-2",
      "year": 2020,
      "paperType": "Paper II",
      "badgeText": "2020 O/L Paper II - Question 06",
      "questionEn": "6. (i) List three methods used for requirement identification in the System Development Life Cycle (SDLC).\n  (ii) Name the four deployment methods used in SDLC.\n  (iii) A bank decides to introduce a new online banking system. Explain why parallel deployment is the most suitable deployment method for this scenario.",
      "questionSi": "6. (i) පද්ධති සංවර්ධන ජීවන චක්‍රයේ (SDLC) අවශ්‍යතා හඳුනා ගැනීම සඳහා භාවිත කරන ක්‍රම තුනක් ලියන්න.\n  (ii) SDLC හි භාවිත වන ස්ථාපන ක්‍රම හතර නම් කරන්න.\n  (iii) බැංකුවක් නව මාර්ගගත (Online) බැංකු පද්ධතියක් හඳුන්වා දීමට තීරණය කරයි. මෙම අවස්ථාව සඳහා සමාන්තර ස්ථාපනය (Parallel deployment) වඩාත්ම සුදුසු ස්ථාපන ක්‍රමය වන්නේ මන්දැයි පැහැදිලි කරන්න.",
      "type": "structured",
      "sampleAnswerEn": "SDLC Phases and Testing:\n(a) 8 SDLC Phases: Identification, Feasibility, Analysis, Design, Coding, Testing, Deployment, Maintenance.\n(b) Deployment Methods: Direct, Parallel, Phased, Pilot.\n(c) Black-box vs White-box testing.",
      "sampleAnswerSi": "SDLC අදියර සහ පරීක්ෂාව:\n(a) SDLC හි අදියර 8: හඳුනාගැනීම, ශක්‍යතාව, විශ්ලේෂණය, සැලසුම්, කේතනය, පරීක්ෂාව, ස්ථාපනය, නඩත්තුව.\n(b) ස්ථාපන ක්‍රම 4: සෘජු, සමාන්තර, අදියරගත, නියමු.\n(c) කළු පෙට්ටි සහ සුදු පෙට්ටි පරීක්ෂණ.",
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
      "sampleAnswerEn": "System Deployment Strategies:\n(a) Direct Deployment: Abrupt switchover from old system to new system on a specified date. High risk, low cost.\n(b) Parallel Deployment: Both old and new systems run concurrently. Lowest risk, highest operational cost.",
      "sampleAnswerSi": "පද්ධති ස්ථාපන ක්‍රම:\n(a) සෘජු ස්ථාපනය (Direct): නියමිත දිනයකදී පැරණි පද්ධතිය නවත්වා නව පද්ධතිය ආරම්භ කිරීම. අවදානම ඉහළයි, වියදම අඩුයි.\n(b) සමාන්තර ස්ථාපනය (Parallel): පැරණි සහ නව පද්ධති දෙකම එකවර ක්‍රියාත්මක කිරීම. අවදානම අවමයි, වියදම අධිකයි.",
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
          "si": "කේතකරණය (coding) -> විසඳුම සැලසුම් කිරීම (solution design) -> අවශ්‍යතා හඳුනාගැනීම (requirement identification) -> පරීක්ෂා කිරීම (testing) -> පිහිටුවීම (deployment)"
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
      "correctOptionId": "1",
      "explanationEn": "Verbatim official examination question from 2022 O/L Paper I - Question 34.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2022 O/L Paper I - Question 34."
    },
    {
      "id": "pp-g11-u2-2023-5",
      "year": 2023,
      "paperType": "Paper II",
      "badgeText": "2023 O/L Paper II - Question 01 (ix)",
      "questionEn": "1. (ix) (a) 'Identification of requirements' is the first step in the System Development Life Cycle (SDLC). List its 2nd, 3rd, 4th and 5th steps in the correct order.\n  (b) In which step of SDLC is the use of prototypes most productive?",
      "questionSi": "1. (ix) (a) පද්ධති සංවර්ධන ජීවන චක්‍රයේ (SDLC) පළමු පියවර 'අවශ්‍යතා හඳුනා ගැනීම' වේ. එහි 2 වන, 3 වන, 4 වන සහ 5 වන පියවර නිවැරදි අනුපිළිවෙලින් ලියන්න.\n  (b) SDLC හි මූලාකෘති (prototypes) භාවිතය වඩාත්ම ඵලදායී වන්නේ කවර පියවරේදීද?",
      "type": "structured",
      "sampleAnswerEn": "Feasibility Study Dimensions:\n1. Technical Feasibility: Availability of hardware, software, and technical expertise.\n2. Economic Feasibility: Cost-benefit analysis comparing development cost vs long-term financial return.\n3. Operational Feasibility: User willingness and organizational fit.",
      "sampleAnswerSi": "ශක්‍යතා අධ්‍යයනයේ මානයන්:\n1. තාක්ෂණික ශක්‍යතාව: අවශ්‍ය දෘඩාංග, මෘදුකාංග සහ තාක්ෂණික දැනුම පවතීදැයි බැලීම.\n2. ආර්ථික ශක්‍යතාව: වියදම හා ලැබෙන මූල්‍ය ප්‍රතිලාභ සංසන්දනය කිරීම (ලාභදායී බව).\n3. මෙහෙයුම් ශක්‍යතාව: පද්ධතිය පරිශීලකයන්ට ගැළපේදැයි බැලීම.",
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
      "sampleAnswerEn": "Software Testing Types:\n1. Unit Testing: Testing individual program modules independently.\n2. Integration Testing: Testing combined interaction between interconnected modules.\n3. Acceptance Testing: User testing to confirm system satisfies real business requirements.",
      "sampleAnswerSi": "මෘදුකාංග පරීක්ෂණ වර්ග:\n1. ඒකක පරීක්ෂාව (Unit Testing): එක් එක් මොඩියුලය වෙන වෙනම පරීක්ෂා කිරීම.\n2. අනුකලන පරීක්ෂාව (Integration Testing): මොඩියුල එකිනෙක සම්බන්ධ කර පරීක්ෂා කිරීම.\n3. පිළිගැනීමේ පරීක්ෂාව (Acceptance Testing): පරිශීලකයා විසින් අවශ්‍යතා සපුරා ඇත්දැයි පරීක්ෂා කිරීම.",
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
      "sampleAnswerEn": "SDLC Models:\n1. Waterfall Model: Linear sequential phases, easy to manage but inflexible to requirements changes.\n2. Iterative Model: Cyclic development in repetitive sprints, adapts well to evolving requirements.",
      "sampleAnswerSi": "SDLC ආකෘති:\n1. දියඇලි ආකෘතිය (Waterfall): එක් අදියරක් අවසන් වූ පසු ඊළඟ අදියර ආරම්භ වේ; කළමනාකරණය පහසුයි නමුත් වෙනස්කම් කිරීමට අපහසුයි.\n2. පුනරාවර්තී ආකෘතිය (Iterative): වට කිහිපයකින් ක්‍රමිකව පද්ධතිය සංවර්ධනය කෙරේ.",
      "explanationEn": "Verbatim official examination question from 2025 O/L Paper II - Question 01 (ix).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2025 O/L Paper II - Question 01 (ix)."
    }
  ]
};
