// Verbatim dual-medium syllabus data extracted from public/lessons
import { GeneralLessonData } from '../allLessonsData';

export const G10_U4_DATA: GeneralLessonData = {
  id: 'g10-u4',
  grade: '10',
  unitNumber: 4,
  titleEn: 'Fundamental Logic Gates & Boolean Logic',
  titleSi: 'මූලික ලොජික් ද්වාර සහ බූලීය තර්කනය',
  subtopics: [
  {
    "id": "g10-u4-st-1",
    "number": "4.1",
    "titleEn": "Digital Logic States & Primary Basic Gates",
    "titleSi": "සංඛ්‍යාංක තර්කන අවස්ථා සහ මූලික ලොජික් ද්වාර",
    "summaryEn": "Binary conditions (0 and 1), electrical voltage representations, and primary gates: AND, OR, and NOT.",
    "summarySi": "ද්විමය අවස්ථා (0 සහ 1), විද්‍යුත් වෝල්ටීයතා නිරූපණය සහ මූලික ද්වාර: AND, OR සහ NOT.",
    "blocks": [
      {
        "id": "b-g10-u4-1-1",
        "en": "Digital Logic States & Voltage Levels:\nIn digital electronics and computer systems, all information is processed and represented using two distinct binary states: Logic LOW (0) and Logic HIGH (1). In standard TTL circuitry, Logic 0 corresponds to a low voltage level (0V / Ground / Open switch), while Logic 1 corresponds to a high voltage level (+5V / VCC / Closed switch). Every terminal in a digital circuit operates at one of these two binary voltage states at any given instant.",
        "si": "තර්කන අවස්ථා සහ වෝල්ටීයතා මට්ටම්:\nසංඛ්‍යාංක ඉලෙක්ට්‍රොනික විද්‍යාවේදී සහ පරිගණක පද්ධති තුළ තොරතුරු නිරූපණය කෙරෙන්නේ ද්විමය අවස්ථා දෙකකිනි: පහළ මට්ටම (0 / Low) සහ ඉහළ මට්ටම (1 / High). සම්මත TTL පරිපථවල ලොජික් 0 යනු පහළ වෝල්ටීයතාවයයි (0V / භූගත / විවෘත ස්විචය), ලොජික් 1 යනු ඉහළ වෝල්ටීයතාවයයි (+5V / VCC / වැසූ ස්විචය). ඕනෑම මොහොතක සංඛ්‍යාංක පරිපථයක අග්‍රයක් පවතින්නේ මෙම වෝල්ටීයතා මට්ටම් දෙකෙන් එකකය.",
        "highlightTerm": "Digital Logic States & Voltage Levels"
      },
      {
        "id": "b-g10-u4-1-2",
        "en": "Concept of Logic Gates & IC Construction:\nA logic gate is an elementary building block of a digital circuit. Most gates receive two or more binary inputs and produce exactly one binary output based on a defined logical rule. Logic circuits are constructed using semiconductor components such as transistors, diodes, and resistors. Today, millions of logic gates are fabricated onto a single miniature semiconductor chip called an Integrated Circuit (IC). The modern microprocessor contains billions of logic gates.",
        "si": "ලොජික් ද්වාර සංකල්පය සහ අනුකලිත පරිපථ (IC):\nලොජික් ද්වාරයක් යනු සංඛ්‍යාංක පරිපථයක මූලික තැනුම් ඒකකයයි. බොහෝ ද්වාර සඳහා ආදාන දෙකක් හෝ ඊට වැඩි ගණනක් ඇති අතර, නිශ්චිත තර්කානුකූල නීතියකට අනුව එක් ද්විමය ප්‍රතිදානයක් ලබා දෙයි. ට්‍රාන්සිස්ටර, ඩයෝඩ සහ රෙසිස්ටර වැනි අර්ධ සන්නායක මගින් මේවා ගොඩනගයි. වර්තමානයේ ලොජික් ද්වාර විශාල ප්‍රමාණයක් එකතු කර අනුකලිත පරිපථ (Integrated Circuit - IC) නමැති තනි චිපයක් ලෙස නිපදවයි. නූතන ක්ෂුද්‍ර ප්‍රොසෙසරයක ලොජික් ද්වාර බිලියන ගණනක් අඩංගු වේ.",
        "highlightTerm": "Concept of Logic Gates"
      },
      {
        "id": "b-g10-u4-1-3",
        "en": "AND Gate (Logical Multiplication):\n* **Logical Rule:** Output is HIGH (1) ONLY if ALL inputs are HIGH (1). If any input is LOW (0), output is LOW (0).\n* **Boolean Equation:** `Q = A · B` (or `Q = AB`)\n* **Electrical Switch Equivalent:** Two switches connected in **SERIES** (both switches must be closed for lamp to turn ON).",
        "si": "AND ද්වාරය (තාර්කික ගුණ කිරීම):\n* **තාර්කික නීතිය:** සියලු ආදානයන් ඉහළ (1) වන විට පමණක් ප්‍රතිදානය ඉහළ (1) වේ. එක් ආදානයක් හෝ 0 වූ විට ප්‍රතිදානය 0 වේ.\n* **බූලීය ප්‍රකාශනය:** `Q = A · B` (හෝ `Q = AB`)\n* **විද්‍යුත් පරිපථ සමානතාව:** බල්බය සමඟ **ශ්‍රේණිගතව (Series)** සම්බන්ධ කළ ස්විච දෙකකි (බල්බය දැල්වීමට ස්විච දෙකම වැසිය යුතුය).",
        "highlightTerm": "AND Gate"
      },
      {
        "id": "b-g10-u4-1-4",
        "en": "OR Gate (Logical Addition):\n* **Logical Rule:** Output is HIGH (1) if AT LEAST ONE input is HIGH (1). Output is LOW (0) only if all inputs are 0.\n* **Boolean Equation:** `Q = A + B`\n* **Electrical Switch Equivalent:** Two switches connected in **PARALLEL** (closing either switch A OR switch B completes circuit to light lamp).",
        "si": "OR ද්වාරය (තාර්කික එකතු කිරීම):\n* **තාර්කික නීතිය:** අවම වශයෙන් එක් ආදානයක් හෝ 1 වන විට ප්‍රතිදානය 1 වේ. සියලු ආදාන 0 වූ විට පමණක් ප්‍රතිදානය 0 වේ.\n* **බූලීය ප්‍රකාශනය:** `Q = A + B`\n* **විද්‍යුත් පරිපථ සමානතාව:** බල්බය සමඟ **සමාන්තරගතව (Parallel)** සම්බන්ධ කළ ස්විච දෙකකි (ස්විච A හෝ ස්විච B වැසූ විට බල්බය දැල්වේ).",
        "highlightTerm": "OR Gate"
      },
      {
        "id": "b-g10-u4-1-5",
        "en": "NOT Gate / Inverter (Logical Negation):\n* **Logical Rule:** Exactly ONE input and ONE output. Inverts the logic state: 0 becomes 1, and 1 becomes 0.\n* **Boolean Equation:** `Q = A'` (or `Q = Ā`)\n* **Electrical Switch Equivalent:** Switch connected in **PARALLEL** across the lamp (closing switch bypasses lamp via short circuit, turning it OFF).",
        "si": "NOT ද්වාරය (ප්‍රතිලෝමකය / තාර්කික ප්‍රතික්ෂේපය):\n* **තාර්කික නීතිය:** එක් ආදානයක් සහ එක් ප්‍රතිදානයක් පමණි. ආදානය ප්‍රතිලෝම කරයි: 0 නම් 1 ද, 1 නම් 0 ද වේ.\n* **බූලීය ප්‍රකාශනය:** `Q = A'` (හෝ `Q = Ā`)\n* **විද්‍යුත් පරිපථ සමානතාව:** බල්බයට **සමාන්තරගතව** සම්බන්ධ කළ ස්විචයකි (ස්විචය වැසූ විට ධාරාව බල්බය මඟහැර කෙටි පරිපථයක් ඔස්සේ ගලා බල්බය නිවී යයි).",
        "highlightTerm": "NOT Gate / Inverter"
      }
    ],
    "tableData": {
      "headers": [
        {
          "en": "Gate Name",
          "si": "ද්වාරයේ නම"
        },
        {
          "en": "Inputs / Outputs",
          "si": "ආදාන / ප්‍රතිදාන"
        },
        {
          "en": "Boolean Expression",
          "si": "බූලීය ප්‍රකාශනය"
        },
        {
          "en": "Electrical Switch Circuit",
          "si": "විද්‍යුත් ස්විච පරිපථය"
        },
        {
          "en": "Condition for Output = 1",
          "si": "ප්‍රතිදානය 1 වන අවස්ථාව"
        }
      ],
      "rows": [
        {
          "col1": {
            "en": "AND Gate",
            "si": "AND ද්වාරය"
          },
          "col2": {
            "en": "2 (or more) in, 1 out",
            "si": "ආදාන 2ක් හෝ වැඩි, ප්‍රතිදාන 1ක්"
          },
          "col3": {
            "en": "Q = A · B",
            "si": "Q = A · B"
          },
          "col4": {
            "en": "Switches in SERIES",
            "si": "ශ්‍රේණිගත ස්විච"
          },
          "col5": {
            "en": "ALL inputs are 1",
            "si": "සියලු ආදාන 1 වන විට පමණි"
          }
        },
        {
          "col1": {
            "en": "OR Gate",
            "si": "OR ද්වාරය"
          },
          "col2": {
            "en": "2 (or more) in, 1 out",
            "si": "ආදාන 2ක් හෝ වැඩි, ප්‍රතිදාන 1ක්"
          },
          "col3": {
            "en": "Q = A + B",
            "si": "Q = A + B"
          },
          "col4": {
            "en": "Switches in PARALLEL",
            "si": "සමාන්තරගත ස්විච"
          },
          "col5": {
            "en": "AT LEAST ONE input is 1",
            "si": "අවම වශයෙන් එක් ආදානයක් හෝ 1 වන විට"
          }
        },
        {
          "col1": {
            "en": "NOT Gate",
            "si": "NOT ද්වාරය"
          },
          "col2": {
            "en": "Exactly 1 in, 1 out",
            "si": "ආදාන 1ක් සහ ප්‍රතිදාන 1ක් පමණි"
          },
          "col3": {
            "en": "Q = A' (or Ā)",
            "si": "Q = A' (හෝ Ā)"
          },
          "col4": {
            "en": "Bypass switch across lamp",
            "si": "බල්බයට සමාන්තර බයිපාස් ස්විචය"
          },
          "col5": {
            "en": "Input is 0",
            "si": "ආදානය 0 වන විට"
          }
        }
      ]
    },
    "examples": [
      {
        "id": "ex-widget-4.1",
        "titleEn": "Interactive Logic Gate Simulator",
        "titleSi": "අන්තර්ක්‍රියාකාරී ලොජික් ද්වාර සමාකරණය",
        "isInteractiveWidget": "logic-gate"
      }
    ],
    "checkpointQuiz": {
      "id": "q-g10-u4-1",
      "questionEn": "Which electrical switch configuration correctly represents the operational behavior of an AND gate?",
      "questionSi": "AND ද්වාරයක ක්‍රියාකාරිත්වය නිවැරදිව නිරූපණය වන විද්‍යුත් ස්විච සැකැස්ම කුමක්ද?",
      "options": [
        {
          "id": "1",
          "en": "Two switches connected in SERIES with the lamp",
          "si": "බල්බය සමඟ ශ්‍රේණිගතව සම්බන්ධ කළ ස්විච දෙකක්"
        },
        {
          "id": "2",
          "en": "Two switches connected in PARALLEL with the lamp",
          "si": "බල්බය සමඟ සමාන්තරගතව සම්බන්ධ කළ ස්විච දෙකක්"
        },
        {
          "id": "3",
          "en": "A single push-switch connected across the lamp",
          "si": "බල්බය හරහා සම්බන්ධ කළ තනි ස්විචයක්"
        },
        {
          "id": "4",
          "en": "Three switches connected in a triangular bridge",
          "si": "ත්‍රිකෝණාකාර පාලමක් ලෙස සම්බන්ධ කළ ස්විච තුනක්"
        }
      ],
      "correctOptionId": "1",
      "explanationEn": "In a series circuit, current flows to the lamp only when BOTH switches A AND B are closed (1). This exactly matches AND logic.",
      "explanationSi": "ශ්‍රේණිගත පරිපථයකදී බල්බය දැල්වීමට ස්විච A සහ B යන දෙකම වැසිය යුතුය (1). මෙය AND තර්කනයට හරියටම සමාන වේ."
    }
  },
  {
    "id": "g10-u4-st-2",
    "number": "4.2",
    "titleEn": "Derived Gates & Universal Gate Synthesis",
    "titleSi": "ව්‍යුත්පන්න ද්වාර සහ විශ්ව ද්වාර සංස්ලේෂණය",
    "summaryEn": "Derived gates (NAND, NOR, XOR, XNOR) and using Universal Gates (NAND, NOR) for full circuit synthesis.",
    "summarySi": "ව්‍යුත්පන්න ද්වාර (NAND, NOR, XOR, XNOR) සහ විශ්ව ද්වාර මගින් සම්පූර්ණ පරිපථ නිර්මාණය කිරීම.",
    "blocks": [
      {
        "id": "b-g10-u4-2-1",
        "en": "NAND Gate (NOT-AND):\n* **Logical Composition:** Consists of an AND gate followed by an inverter (NOT).\n* **Logical Rule:** Output is LOW (0) ONLY when ALL inputs are HIGH (1). If any input is 0, output is HIGH (1).\n* **Boolean Equation:** `Q = (A · B)'` (or `(AB)̄`).",
        "si": "NAND ද්වාරය (නැත-සහ / NOT-AND):\n* **තාර්කික සංයුතිය:** AND ද්වාරයක ප්‍රතිදානයට NOT ද්වාරයක් සම්බන්ධ කිරීමෙන් සෑදේ.\n* **තාර්කික නීතිය:** සියලු ආදාන 1 වන විට පමණක් ප්‍රතිදානය 0 වේ. ඕනෑම ආදානයක් 0 වූ විට ප්‍රතිදානය 1 වේ.\n* **බූලීය ප්‍රකාශනය:** `Q = (A · B)'` (හෝ `(AB)̄`).",
        "highlightTerm": "NAND Gate"
      },
      {
        "id": "b-g10-u4-2-2",
        "en": "NOR Gate (NOT-OR):\n* **Logical Composition:** Consists of an OR gate followed by an inverter (NOT).\n* **Logical Rule:** Output is HIGH (1) ONLY when ALL inputs are LOW (0). If any input is 1, output is LOW (0).\n* **Boolean Equation:** `Q = (A + B)'` (or `(A + B)̄`).",
        "si": "NOR ද්වාරය (නැත-හෝ / NOT-OR):\n* **තාර්කික සංයුතිය:** OR ද්වාරයක ප්‍රතිදානයට NOT ද්වාරයක් සම්බන්ධ කිරීමෙන් සෑදේ.\n* **තාර්කික නීතිය:** සියලු ආදාන 0 වන විට පමණක් ප්‍රතිදානය 1 වේ. ඕනෑම ආදානයක් 1 වූ විට ප්‍රතිදානය 0 වේ.\n* **බූලීය ප්‍රකාශනය:** `Q = (A + B)'` (හෝ `(A + B)̄`).",
        "highlightTerm": "NOR Gate"
      },
      {
        "id": "b-g10-u4-2-3",
        "en": "XOR Gate (Exclusive-OR):\n* **Logical Rule:** Yields HIGH (1) when its inputs are **DIFFERENT** from each other (one 0 and one 1). If both inputs are identical (both 0 or both 1), output is LOW (0).\n* **Boolean Equation:** `Q = A ⊕ B = A·B' + A'·B`\n* **Application:** Binary half-adders and parity checkers.",
        "si": "XOR ද්වාරය (විශේෂිත හෝ / Exclusive-OR):\n* **තාර්කික නීතිය:** ආදානයන් එකිනෙකට **වෙනස්** වන විට (එකක් 0 සහ අනෙක 1) ප්‍රතිදානය 1 වේ. ආදාන දෙකම සමාන වන විට (දෙකම 0 හෝ දෙකම 1) ප්‍රතිදානය 0 වේ.\n* **බූලීය ප්‍රකාශනය:** `Q = A ⊕ B = A·B' + A'·B`\n* **ප්‍රධාන යෙදුම:** ද්විමය අර්ධ එකතුකාරක (Half Adder) සහ සමානතා පරීක්ෂක පරිපථ.",
        "highlightTerm": "XOR Gate"
      },
      {
        "id": "b-g10-u4-2-4",
        "en": "XNOR Gate (Exclusive-NOR / Equivalence):\n* **Logical Rule:** Yields HIGH (1) when its inputs are **IDENTICAL / EQUAL** (both 0 or both 1). If inputs are different, output is LOW (0).\n* **Boolean Equation:** `Q = (A ⊕ B)' = AB + A'B'`\n* **Application:** Acts as a digital comparator / equality detector.",
        "si": "XNOR ද්වාරය (විශේෂිත නැත-හෝ / Exclusive-NOR):\n* **තාර්කික නීතිය:** ආදාන දෙකම එකිනෙකට **සමාන** වන විට (දෙකම 0 හෝ දෙකම 1) ප්‍රතිදානය 1 වේ. ආදාන වෙනස් වූ විට ප්‍රතිදානය 0 වේ.\n* **බූලීය ප්‍රකාශනය:** `Q = (A ⊕ B)' = AB + A'B'`\n* **ප්‍රධාන යෙදුම:** අංකිත සමානතා සංසන්දකයක් (Comparator) ලෙස ක්‍රියා කිරීම.",
        "highlightTerm": "XNOR Gate"
      },
      {
        "id": "b-g10-u4-2-5",
        "en": "Universal Gate Synthesis (NAND & NOR):\nNAND and NOR are designated as \"Universal Gates\" because ANY basic logic gate (NOT, AND, OR) or combinational logic circuit can be constructed entirely using only NAND gates or only NOR gates. Fabricating integrated circuits using only one gate type dramatically lowers semiconductor manufacturing costs.\n* NOT from NAND: Tie both inputs of a NAND together (Q = (A·A)' = A').\n* AND from NAND: Pass NAND output into a second NAND wired as an inverter.\n* OR from NAND: Invert each input with a NAND first, then pass both into a NAND (De Morgan: (A'·B')' = A + B).",
        "si": "විශ්ව ද්වාර සංස්ලේෂණය (NAND සහ NOR):\nNAND සහ NOR ද්වාර \"විශ්ව ද්වාර\" (Universal Gates) ලෙස හැඳින්වේ. මන්දයත් වෙනත් කිසිදු ද්වාරයක් නොමැතිව, NAND ද්වාර පමණක් භාවිතයෙන් හෝ NOR ද්වාර පමණක් භාවිතයෙන් ඕනෑම මූලික ද්වාරයක් (NOT, AND, OR) හෝ සංකීර්ණ පරිපථයක් නිර්මාණය කළ හැකි බැවිනි. තනි වර්ගයක ද්වාර පමණක් භාවිත කිරීමෙන් IC නිෂ්පාදන පිරිවැය සැලකිය යුතු ලෙස අඩු වේ.\n* NAND මගින් NOT: NAND ද්වාරයේ ආදාන දෙකම එකට සම්බන්ධ කිරීම (Q = A').\n* NAND මගින් AND: NAND ද්වාරයක ප්‍රතිදානය ප්‍රතිලෝමකයක් ලෙස සැකසූ දෙවන NAND ද්වාරයකට යැවීම.\n* NAND මගින් OR: ආදාන දෙක වෙන වෙනම ප්‍රතිලෝම කර තෙවන NAND ද්වාරයකට යැවීම.",
        "highlightTerm": "Universal Gates (NAND & NOR)"
      }
    ],
    "tableData": {
      "headers": [
        {
          "en": "Derived Gate",
          "si": "ව්‍යුත්පන්න ද්වාරය"
        },
        {
          "en": "Boolean Equation",
          "si": "බූලීය සමීකරණය"
        },
        {
          "en": "Truth Condition (Output = 1)",
          "si": "ප්‍රතිදානය 1 වන අවස්ථාව"
        },
        {
          "en": "Truth Condition (Output = 0)",
          "si": "ප්‍රතිදානය 0 වන අවස්ථාව"
        }
      ],
      "rows": [
        {
          "col1": {
            "en": "NAND Gate",
            "si": "NAND ද්වාරය"
          },
          "col2": {
            "en": "Q = (A · B)'",
            "si": "Q = (A · B)'"
          },
          "col3": {
            "en": "Any input is 0 (00->1, 01->1, 10->1)",
            "si": "ඕනෑම ආදානයක් 0 වන විට"
          },
          "col4": {
            "en": "Both inputs are 1 (11->0)",
            "si": "ආදාන දෙකම 1 වන විට"
          }
        },
        {
          "col1": {
            "en": "NOR Gate",
            "si": "NOR ද්වාරය"
          },
          "col2": {
            "en": "Q = (A + B)'",
            "si": "Q = (A + B)'"
          },
          "col3": {
            "en": "Both inputs are 0 (00->1)",
            "si": "ආදාන දෙකම 0 වන විට"
          },
          "col4": {
            "en": "Any input is 1 (01->0, 10->0, 11->0)",
            "si": "ඕනෑම ආදානයක් 1 වන විට"
          }
        },
        {
          "col1": {
            "en": "XOR Gate",
            "si": "XOR ද්වාරය"
          },
          "col2": {
            "en": "Q = A ⊕ B",
            "si": "Q = A ⊕ B"
          },
          "col3": {
            "en": "Inputs are DIFFERENT (01->1, 10->1)",
            "si": "ආදාන එකිනෙකට වෙනස් විට"
          },
          "col4": {
            "en": "Inputs are SAME (00->0, 11->0)",
            "si": "ආදාන එකිනෙකට සමාන විට"
          }
        },
        {
          "col1": {
            "en": "XNOR Gate",
            "si": "XNOR ද්වාරය"
          },
          "col2": {
            "en": "Q = (A ⊕ B)'",
            "si": "Q = (A ⊕ B)'"
          },
          "col3": {
            "en": "Inputs are SAME (00->1, 11->1)",
            "si": "ආදාන එකිනෙකට සමාන විට"
          },
          "col4": {
            "en": "Inputs are DIFFERENT (01->0, 10->0)",
            "si": "ආදාන එකිනෙකට වෙනස් විට"
          }
        }
      ]
    },
    "examples": [
      {
        "id": "ex-widget-4.2",
        "titleEn": "Interactive Universal Gate Tester",
        "titleSi": "අන්තර්ක්‍රියාකාරී විශ්ව ද්වාර පරීක්ෂකය",
        "isInteractiveWidget": "logic-gate"
      }
    ],
    "checkpointQuiz": {
      "id": "q-g10-u4-2",
      "questionEn": "Which gate produces an output of HIGH (1) when its two binary inputs are DIFFERENT, and LOW (0) when they are IDENTICAL?",
      "questionSi": "ආදාන දෙක එකිනෙකට වෙනස් වන විට ප්‍රතිදානය 1 ද, සමාන වන විට 0 ද ලබා දෙන ලොජික් ද්වාරය කුමක්ද?",
      "options": [
        {
          "id": "1",
          "en": "XOR Gate",
          "si": "XOR ද්වාරය"
        },
        {
          "id": "2",
          "en": "XNOR Gate",
          "si": "XNOR ද්වාරය"
        },
        {
          "id": "3",
          "en": "NAND Gate",
          "si": "NAND ද්වාරය"
        },
        {
          "id": "4",
          "en": "NOR Gate",
          "si": "NOR ද්වාරය"
        }
      ],
      "correctOptionId": "1",
      "explanationEn": "The XOR (Exclusive-OR) gate outputs 1 only when inputs are mismatched (01 and 10). When inputs are identical (00 or 11), it outputs 0.",
      "explanationSi": "XOR ද්වාරය මගින් ආදාන දෙක වෙනස් වූ විට (01 සහ 10) ප්‍රතිදානය 1 ද, ආදාන සමාන වූ විට (00 සහ 11) ප්‍රතිදානය 0 ද ලබා දෙයි."
    }
  },
  {
    "id": "g10-u4-st-3",
    "number": "4.3",
    "titleEn": "3-Input Logic Gate Extensions & Truth Tables",
    "titleSi": "ආදාන 3 ලොජික් ද්වාර ප්‍රසාරණ සහ සත්‍යතා වගු",
    "summaryEn": "Multi-input logic gates (3-input AND, OR, NAND, NOR) and constructing 8-row truth tables.",
    "summarySi": "බහු ආදාන ලොජික් ද්වාර (3-ආදාන AND, OR, NAND, NOR) සහ පේළි 8 ක සත්‍යතා වගු ගොඩනැගීම.",
    "blocks": [
      {
        "id": "b-g10-u4-3-1",
        "en": "Truth Table Sizing & The 2ⁿ Rule:\nA truth table displays the complete output state for every possible combination of input values. For a digital circuit with n independent binary inputs, the total number of distinct input rows in its truth table is given by the exponential formula: Number of Rows = 2ⁿ.\n* 1 Input (A): 2¹ = 2 rows (0, 1)\n* 2 Inputs (A, B): 2² = 4 rows (00, 01, 10, 11)\n* 3 Inputs (A, B, C): 2³ = 8 rows (000 to 111)\n* 4 Inputs (A, B, C, D): 2⁴ = 16 rows (0000 to 1111)\nBinary inputs are written in standard ascending counting order: column A alternates every 4 rows, B every 2 rows, and C every 1 row.",
        "si": "සත්‍යතා වගු ප්‍රමාණය සහ 2ⁿ සූත්‍රය:\nසත්‍යතා වගුවක් යනු පරිපථයකට ලබා දිය හැකි සියලු ආදාන සංයෝජන සහ ඒ සඳහා ලැබෙන ප්‍රතිදානයන් පෙන්වන වගුවකි. ස්වාධීන ආදාන n සංඛ්‍යාවක් ඇති පරිපථයක සත්‍යතා වගුවේ මුළු පේළි ගණන 2ⁿ සූත්‍රයෙන් ගණනය කෙරේ:\n* ආදාන 1ක් (A): 2¹ = පේළි 2යි (0, 1)\n* ආදාන 2ක් (A, B): 2² = පේළි 4යි (00, 01, 10, 11)\n* ආදාන 3ක් (A, B, C): 2³ = පේළි 8යි (000 සිට 111 දක්වා)\n* ආදාන 4ක් (A, B, C, D): 2⁴ = පේළි 16යි\nසත්‍යතා වගුවක් ලිවීමේදී ආදාන ලියනු ලබන්නේ ආරෝහණ ද්විමය අනුපිළිවෙළටය: A තීරුව පේළි 4න් 4ටද, B තීරුව පේළි 2න් 2ටද, C තීරුව එකින් එකද මාරු වේ.",
        "highlightTerm": "Truth Table 2ⁿ Rule"
      },
      {
        "id": "b-g10-u4-3-2",
        "en": "3-Input Gate Operational Principles:\n* 3-Input AND Gate: Q = A · B · C. Output is 1 only when A=1 AND B=1 AND C=1 (row 111). All other 7 combinations produce 0.\n* 3-Input OR Gate: Q = A + B + C. Output is 1 if ANY input is 1. Output is 0 only when A=0 AND B=0 AND C=0 (row 000).\n* 3-Input NAND Gate: Q = (A · B · C)'. Output is 0 only when A=1, B=1, C=1. Output is 1 for all other 7 input combinations.\n* 3-Input NOR Gate: Q = (A + B + C)'. Output is 1 only when A=0, B=0, C=0. Output is 0 for all other 7 input combinations.",
        "si": "ආදාන 3 ලොජික් ද්වාරවල ක්‍රියාකාරිත්වය:\n* 3-ආදාන AND ද්වාරය: Q = A · B · C. A=1, B=1, සහ C=1 වන විට පමණක් (111 පේළිය) ප්‍රතිදානය 1 වේ. අනෙක් අවස්ථා 7 හිදීම ප්‍රතිදානය 0 වේ.\n* 3-ආදාන OR ද්වාරය: Q = A + B + C. අවම වශයෙන් එක් ආදානයක් හෝ 1 වූ විට ප්‍රතිදානය 1 වේ. සියලු ආදාන 0 වන විට පමණක් (000 පේළිය) ප්‍රතිදානය 0 වේ.\n* 3-ආදාන NAND ද්වාරය: Q = (A · B · C)'. A=1, B=1, C=1 වන විට පමණක් ප්‍රතිදානය 0 වේ. අනෙක් සියලු අවස්ථාවල 1 වේ.\n* 3-ආදාන NOR ද්වාරය: Q = (A + B + C)'. A=0, B=0, C=0 වන විට පමණක් ප්‍රතිදානය 1 වේ. අනෙක් සියලු අවස්ථාවල 0 වේ.",
        "highlightTerm": "3-Input Gate Operations"
      }
    ],
    "tableData": {
      "headers": [
        {
          "en": "A",
          "si": "A"
        },
        {
          "en": "B",
          "si": "B"
        },
        {
          "en": "C",
          "si": "C"
        },
        {
          "en": "AND (A·B·C)",
          "si": "AND"
        },
        {
          "en": "OR (A+B+C)",
          "si": "OR"
        },
        {
          "en": "NAND ((A·B·C)')",
          "si": "NAND"
        },
        {
          "en": "NOR ((A+B+C)')",
          "si": "NOR"
        }
      ],
      "rows": [
        {
          "col1": {
            "en": "0",
            "si": "0"
          },
          "col2": {
            "en": "0",
            "si": "0"
          },
          "col3": {
            "en": "0",
            "si": "0"
          },
          "col4": {
            "en": "0",
            "si": "0"
          },
          "col5": {
            "en": "0",
            "si": "0"
          },
          "col6": {
            "en": "1",
            "si": "1"
          },
          "col7": {
            "en": "1",
            "si": "1"
          }
        },
        {
          "col1": {
            "en": "0",
            "si": "0"
          },
          "col2": {
            "en": "0",
            "si": "0"
          },
          "col3": {
            "en": "1",
            "si": "1"
          },
          "col4": {
            "en": "0",
            "si": "0"
          },
          "col5": {
            "en": "1",
            "si": "1"
          },
          "col6": {
            "en": "1",
            "si": "1"
          },
          "col7": {
            "en": "0",
            "si": "0"
          }
        },
        {
          "col1": {
            "en": "0",
            "si": "0"
          },
          "col2": {
            "en": "1",
            "si": "1"
          },
          "col3": {
            "en": "0",
            "si": "0"
          },
          "col4": {
            "en": "0",
            "si": "0"
          },
          "col5": {
            "en": "1",
            "si": "1"
          },
          "col6": {
            "en": "1",
            "si": "1"
          },
          "col7": {
            "en": "0",
            "si": "0"
          }
        },
        {
          "col1": {
            "en": "0",
            "si": "0"
          },
          "col2": {
            "en": "1",
            "si": "1"
          },
          "col3": {
            "en": "1",
            "si": "1"
          },
          "col4": {
            "en": "0",
            "si": "0"
          },
          "col5": {
            "en": "1",
            "si": "1"
          },
          "col6": {
            "en": "1",
            "si": "1"
          },
          "col7": {
            "en": "0",
            "si": "0"
          }
        },
        {
          "col1": {
            "en": "1",
            "si": "1"
          },
          "col2": {
            "en": "0",
            "si": "0"
          },
          "col3": {
            "en": "0",
            "si": "0"
          },
          "col4": {
            "en": "0",
            "si": "0"
          },
          "col5": {
            "en": "1",
            "si": "1"
          },
          "col6": {
            "en": "1",
            "si": "1"
          },
          "col7": {
            "en": "0",
            "si": "0"
          }
        },
        {
          "col1": {
            "en": "1",
            "si": "1"
          },
          "col2": {
            "en": "0",
            "si": "0"
          },
          "col3": {
            "en": "1",
            "si": "1"
          },
          "col4": {
            "en": "0",
            "si": "0"
          },
          "col5": {
            "en": "1",
            "si": "1"
          },
          "col6": {
            "en": "1",
            "si": "1"
          },
          "col7": {
            "en": "0",
            "si": "0"
          }
        },
        {
          "col1": {
            "en": "1",
            "si": "1"
          },
          "col2": {
            "en": "1",
            "si": "1"
          },
          "col3": {
            "en": "0",
            "si": "0"
          },
          "col4": {
            "en": "0",
            "si": "0"
          },
          "col5": {
            "en": "1",
            "si": "1"
          },
          "col6": {
            "en": "1",
            "si": "1"
          },
          "col7": {
            "en": "0",
            "si": "0"
          }
        },
        {
          "col1": {
            "en": "1",
            "si": "1"
          },
          "col2": {
            "en": "1",
            "si": "1"
          },
          "col3": {
            "en": "1",
            "si": "1"
          },
          "col4": {
            "en": "1",
            "si": "1"
          },
          "col5": {
            "en": "1",
            "si": "1"
          },
          "col6": {
            "en": "0",
            "si": "0"
          },
          "col7": {
            "en": "0",
            "si": "0"
          }
        }
      ]
    },
    "checkpointQuiz": {
      "id": "q-g10-u4-3",
      "questionEn": "How many distinct rows are required in the truth table of a logic circuit that receives 4 binary inputs (A, B, C, D)?",
      "questionSi": "ද්විමය ආදාන 4ක් (A, B, C, D) ලබා ගන්නා තර්කන පරිපථයක සත්‍යතා වගුවක් සඳහා අවශ්‍ය පේළි ගණන කොපමණද?",
      "options": [
        {
          "id": "1",
          "en": "16 rows (2⁴ = 16)",
          "si": "පේළි 16යි (2⁴ = 16)"
        },
        {
          "id": "2",
          "en": "8 rows (2³ = 8)",
          "si": "පේළි 8යි (2³ = 8)"
        },
        {
          "id": "3",
          "en": "12 rows",
          "si": "පේළි 12යි"
        },
        {
          "id": "4",
          "en": "32 rows",
          "si": "පේළි 32යි"
        }
      ],
      "correctOptionId": "1",
      "explanationEn": "The row count of a truth table is given by 2ⁿ where n is the number of inputs. For 4 inputs, 2⁴ = 16 rows.",
      "explanationSi": "සත්‍යතා වගුවක පේළි ගණන 2ⁿ සූත්‍රයෙන් ගණනය කෙරේ. ආදාන 4ක් ඇති විට 2⁴ = පේළි 16කි."
    }
  },
  {
    "id": "g10-u4-st-4",
    "number": "4.4",
    "titleEn": "TTL 7400-Series Integrated Circuit (IC) Architecture",
    "titleSi": "7400 ශ්‍රේණියේ අනුකලිත පරිපථ (IC) ව්‍යුහය සහ කෙවෙනි",
    "summaryEn": "14-pin DIP packages, VCC (+5V Pin 14), Ground (0V Pin 7), notch orientation, and the 7402 pinout anomaly.",
    "summarySi": "කෙවෙනි 14 ක DIP ඇසුරුම්, VCC (+5V Pin 14), Ground (0V Pin 7) සහ 7402 IC හි සුවිශේෂී කෙවෙනි සැකැස්ම.",
    "blocks": [
      {
        "id": "b-g10-u4-4-1",
        "en": "14-Pin DIP Package Architecture & Orientation:\nStandard Transistor-Transistor Logic (TTL) logic gates are packaged inside 14-pin Dual In-line Packages (DIP). Pins are numbered counter-clockwise starting from the top-left of the orientation semi-circular notch:\n* Pin 14: VCC (+5V DC Positive Power Supply)\n* Pin 7: GND (0V Ground / Earth)\nConnecting power in reverse destroys the IC chip.",
        "si": "කෙවෙනි 14 ක DIP ඇසුරුම් ව්‍යුහය:\nසම්මත TTL ලොජික් ද්වාර නිපදවා ඇත්තේ කෙවෙනි 14 කින් යුත් DIP (Dual In-line Package) ඇසුරුම් වලිනි. කෙවෙනි අංකනය කරනු ලබන්නේ ඉහළ ඇති අඩකවාකාර කට්ට (Notch) වම්පස සිට වාමාවර්තව (counter-clockwise) 1 සිට 14 දක්වා ය:\n* කෙවෙනි 14: VCC (+5V DC ධන බල සැපයුම)\n* කෙවෙනි 7: GND (0V භූගතය / Ground)\nබල සැපයුම මාරු කර සම්බන්ධ කළහොත් IC චිපය විනාශ වේ.",
        "highlightTerm": "TTL IC Package Architecture"
      },
      {
        "id": "b-g10-u4-4-2",
        "en": "Official Textbook TTL IC Catalog:\n* 7400 IC: Quad 2-Input NAND Gate (Contains 4 independent NAND gates)\n* 7402 IC: Quad 2-Input NOR Gate (Contains 4 independent NOR gates)\n* 7404 IC: Hex Inverter NOT Gate (Contains 6 independent NOT gates)\n* 7408 IC: Quad 2-Input AND Gate (Contains 4 independent AND gates)\n* 7432 IC: Quad 2-Input OR Gate (Contains 4 independent OR gates)\n* 7486 IC: Quad 2-Input XOR Gate (Contains 4 independent XOR gates)\nIn standard 7400, 7408, 7432, 7486 ICs, pins 1 and 2 are inputs, and pin 3 is the output for Gate 1.",
        "si": "නිල පෙළපොතේ TTL IC නාමාවලිය:\n* 7400 IC: Quad 2-ආදාන NAND ද්වාරය (ස්වාධීන NAND ද්වාර 4ක් අඩංගුයි)\n* 7402 IC: Quad 2-ආදාන NOR ද්වාරය (ස්වාධීන NOR ද්වාර 4ක් අඩංගුයි)\n* 7404 IC: Hex Inverter NOT ද්වාරය (ස්වාධීන NOT ද්වාර 6ක් අඩංගුයි)\n* 7408 IC: Quad 2-ආදාන AND ද්වාරය (ස්වාධීන AND ද්වාර 4ක් අඩංගුයි)\n* 7432 IC: Quad 2-ආදාන OR ද්වාරය (ස්වාධීන OR ද්වාර 4ක් අඩංගුයි)\n* 7486 IC: Quad 2-ආදාන XOR ද්වාරය (ස්වාධීන XOR ද්වාර 4ක් අඩංගුයි)\nසම්මත 7400, 7408, 7432, 7486 IC වල පළමු ද්වාරයේ ආදාන කෙවෙනි 1, 2 වන අතර ප්‍රතිදානය කෙවෙනි 3 වේ.",
        "highlightTerm": "TTL IC Catalog"
      },
      {
        "id": "b-g10-u4-4-3",
        "en": "The 7402 NOR Pinout Inversion Anomaly (Critical Exam Trap):\nUnlike all other TTL logic gate ICs (7400, 7408, 7432, 7486) where inputs are located on pins 1,2 and output is pin 3, the 7402 Quad NOR IC has an inverted pin arrangement:\n* Gate 1: Pin 1 is the OUTPUT! Pins 2 and 3 are the INPUTS!\n* Gate 2: Pin 4 is the OUTPUT! Pins 5 and 6 are the INPUTS!\nThis distinction is frequently tested in O/L examination structured questions.",
        "si": "7402 NOR IC හි සුවිශේෂී කෙවෙනි සැකැස්ම (ප්‍රධාන විභාග උගුල):\nඅනෙක් සියලුම TTL IC (7400, 7408, 7432, 7486) වල ආදානය කෙවෙනි 1, 2 සහ ප්‍රතිදානය 3 වන නමුත්, 7402 NOR IC හි මෙය ප්‍රතිලෝමව පිහිටා ඇත:\n* ද්වාරය 1: කෙවෙනි 1 යනු ප්‍රතිදානයයි! කෙවෙනි 2 සහ 3 ආදානයන් වේ!\n* ද්වාරය 2: කෙවෙනි 4 යනු ප්‍රතිදානයයි! කෙවෙනි 5 සහ 6 ආදානයන් වේ!\nමෙම වෙනස O/L විභාගයේ ව්‍යුහගත ප්‍රශ්නවල නිතර අසනු ලබන ප්‍රධාන කරුණකි.",
        "highlightTerm": "7402 NOR Pinout Anomaly"
      }
    ],
    "tableData": {
      "headers": [
        {
          "en": "IC Number",
          "si": "IC අංකය"
        },
        {
          "en": "Logic Gate Type",
          "si": "ලොජික් ද්වාර වර්ගය"
        },
        {
          "en": "Gates per Chip",
          "si": "චිපයක ඇති ද්වාර ගණන"
        },
        {
          "en": "Gate 1 Inputs",
          "si": "1 වන ද්වාරයේ ආදාන"
        },
        {
          "en": "Gate 1 Output",
          "si": "1 වන ද්වාරයේ ප්‍රතිදානය"
        },
        {
          "en": "Power Pins",
          "si": "බල සැපයුම් කෙවෙනි"
        }
      ],
      "rows": [
        {
          "col1": {
            "en": "7400",
            "si": "7400"
          },
          "col2": {
            "en": "Quad 2-Input NAND",
            "si": "NAND ද්වාර"
          },
          "col3": {
            "en": "4",
            "si": "4"
          },
          "col4": {
            "en": "Pins 1, 2",
            "si": "කෙවෙනි 1, 2"
          },
          "col5": {
            "en": "Pin 3",
            "si": "කෙවෙනි 3"
          },
          "col6": {
            "en": "VCC: 14, GND: 7",
            "si": "VCC: 14, GND: 7"
          }
        },
        {
          "col1": {
            "en": "7402 (Anomaly)",
            "si": "7402 (සුවිශේෂී)"
          },
          "col2": {
            "en": "Quad 2-Input NOR",
            "si": "NOR ද්වාර"
          },
          "col3": {
            "en": "4",
            "si": "4"
          },
          "col4": {
            "en": "Pins 2, 3",
            "si": "කෙවෙනි 2, 3"
          },
          "col5": {
            "en": "Pin 1 (OUTPUT!)",
            "si": "කෙවෙනි 1 (ප්‍රතිදානය!)"
          },
          "col6": {
            "en": "VCC: 14, GND: 7",
            "si": "VCC: 14, GND: 7"
          }
        },
        {
          "col1": {
            "en": "7404",
            "si": "7404"
          },
          "col2": {
            "en": "Hex Inverter (NOT)",
            "si": "NOT ප්‍රතිලෝමක"
          },
          "col3": {
            "en": "6",
            "si": "6"
          },
          "col4": {
            "en": "Pin 1",
            "si": "කෙවෙනි 1"
          },
          "col5": {
            "en": "Pin 2",
            "si": "කෙවෙනි 2"
          },
          "col6": {
            "en": "VCC: 14, GND: 7",
            "si": "VCC: 14, GND: 7"
          }
        },
        {
          "col1": {
            "en": "7408",
            "si": "7408"
          },
          "col2": {
            "en": "Quad 2-Input AND",
            "si": "AND ද්වාර"
          },
          "col3": {
            "en": "4",
            "si": "4"
          },
          "col4": {
            "en": "Pins 1, 2",
            "si": "කෙවෙනි 1, 2"
          },
          "col5": {
            "en": "Pin 3",
            "si": "කෙවෙනි 3"
          },
          "col6": {
            "en": "VCC: 14, GND: 7",
            "si": "VCC: 14, GND: 7"
          }
        },
        {
          "col1": {
            "en": "7432",
            "si": "7432"
          },
          "col2": {
            "en": "Quad 2-Input OR",
            "si": "OR ද්වාර"
          },
          "col3": {
            "en": "4",
            "si": "4"
          },
          "col4": {
            "en": "Pins 1, 2",
            "si": "කෙවෙනි 1, 2"
          },
          "col5": {
            "en": "Pin 3",
            "si": "කෙවෙනි 3"
          },
          "col6": {
            "en": "VCC: 14, GND: 7",
            "si": "VCC: 14, GND: 7"
          }
        },
        {
          "col1": {
            "en": "7486",
            "si": "7486"
          },
          "col2": {
            "en": "Quad 2-Input XOR",
            "si": "XOR ද්වාර"
          },
          "col3": {
            "en": "4",
            "si": "4"
          },
          "col4": {
            "en": "Pins 1, 2",
            "si": "කෙවෙනි 1, 2"
          },
          "col5": {
            "en": "Pin 3",
            "si": "කෙවෙනි 3"
          },
          "col6": {
            "en": "VCC: 14, GND: 7",
            "si": "VCC: 14, GND: 7"
          }
        }
      ]
    },
    "checkpointQuiz": {
      "id": "q-g10-u4-4",
      "questionEn": "In a 7402 TTL Quad NOR Gate IC, which pin serves as the OUTPUT terminal for Gate 1?",
      "questionSi": "7402 TTL Quad NOR අනුකලිත පරිපථයේ (IC) 1 වන ද්වාරයේ ප්‍රතිදාන කෙවෙනිය (Output Pin) කුමක්ද?",
      "options": [
        {
          "id": "1",
          "en": "Pin 1",
          "si": "කෙවෙනි 1"
        },
        {
          "id": "2",
          "en": "Pin 3",
          "si": "කෙවෙනි 3"
        },
        {
          "id": "3",
          "en": "Pin 7",
          "si": "කෙවෙනි 7"
        },
        {
          "id": "4",
          "en": "Pin 14",
          "si": "කෙවෙනි 14"
        }
      ],
      "correctOptionId": "1",
      "explanationEn": "The 7402 NOR IC is uniquely configured with its outputs on pins 1, 4, 10, and 13. Pins 2 and 3 are inputs for Gate 1.",
      "explanationSi": "7402 NOR IC හි කෙවෙනි 1, 4, 10, සහ 13 ප්‍රතිදාන ලෙස සකසා ඇත. 1 වන ද්වාරයේ ආදාන වන්නේ කෙවෙනි 2 සහ 3 ය."
    }
  },
  {
    "id": "g10-u4-st-5",
    "number": "4.5",
    "titleEn": "Combinational Logic Circuits & Real-World Systems",
    "titleSi": "සංයුක්ත ලොජික් පරිපථ සහ ප්‍රායෝගික පද්ධති",
    "summaryEn": "De Morgan laws, Boolean algebra simplification, and automated real-world safety control circuits.",
    "summarySi": "ඩි මොර්ගන්ගේ නියම, බූලීය වීජ ගණිත සරල කිරීම් සහ සැබෑ ලෝකයේ ස්වයංක්‍රීය පාලන පද්ධති.",
    "blocks": [
      {
        "id": "b-g10-u4-5-1",
        "en": "Multi-Gate Circuit Evaluation & Boolean Expressions:\nCombinational logic circuits connect multiple basic and derived gates together. The final output Boolean expression is derived step-by-step from left to right:\n1. Identify the input signals at each primary gate.\n2. Write intermediate expressions at the output node of each internal gate.\n3. Combine intermediate expressions into the final output expression.\n* Example: Inputs A and B enter an AND gate (intermediate: A·B), which then enters an OR gate alongside input C. Final output: Q = (A·B) + C.",
        "si": "සංයුක්ත පරිපථ විශ්ලේෂණය සහ බූලීය ප්‍රකාශන:\nසංයුක්ත තර්කන පරිපථ යනු මූලික සහ ව්‍යුත්පන්න ලොජික් ද්වාර කිහිපයක් එකිනෙක සම්බන්ධ කර නිර්මාණය කළ පරිපථයි. අවසාන බූලීය ප්‍රකාශනය වමේ සිට දකුණට පියවරෙන් පියවර ලබා ගනී:\n1. එක් එක් ප්‍රාථමික ද්වාරයේ ආදාන සංඥා හඳුනා ගන්න.\n2. අභ්‍යන්තර ද්වාරවල ප්‍රතිදාන අග්‍ර අසල අතරමැදි ප්‍රකාශන ලියන්න.\n3. අතරමැදි ප්‍රකාශන එකතු කර අවසාන ප්‍රතිදාන සමීකරණය ලියන්න.\n* උදාහරණය: A සහ B ආදාන AND ද්වාරයකට ඇතුළු වේ (අතරමැදි: A·B). එම ප්‍රතිදානය C ආදානය සමඟ OR ද්වාරයකට ඇතුළු වේ. අවසාන ප්‍රතිදානය: Q = (A·B) + C වේ.",
        "highlightTerm": "Multi-Gate Circuit Evaluation"
      },
      {
        "id": "b-g10-u4-5-2",
        "en": "De Morgan's Laws & Boolean Simplification:\nDe Morgan's theorems allow simplifying inverted combinational circuits:\n1. First Law: The complement of a product equals the sum of the complements: (A · B)' = A' + B'. (A NAND gate is functionally equivalent to an OR gate with inverted inputs).\n2. Second Law: The complement of a sum equals the product of the complements: (A + B)' = A' · B'. (A NOR gate is functionally equivalent to an AND gate with inverted inputs).\nThese laws are used to convert expressions into NAND-only or NOR-only realizations.",
        "si": "ඩි මොර්ගන්ගේ නියම සහ බූලීය සරල කිරීම්:\nඩි මොර්ගන්ගේ ප්‍රමේයයන් මගින් ප්‍රතිලෝම සහිත සංයුක්ත පරිපථ සරල කළ හැක:\n1. පළමු නියමය: ගුණිතයක ප්‍රතිලෝමය යනු ප්‍රතිලෝමයන්ගේ එකතුවයි: (A · B)' = A' + B'. (NAND ද්වාරයක් යනු ආදාන ප්‍රතිලෝම කළ OR ද්වාරයකට සමාන වේ).\n2. දෙවන නියමය: එකතුවක ප්‍රතිලෝමය යනු ප්‍රතිලෝමයන්ගේ ගුණිතයයි: (A + B)' = A' · B'. (NOR ද්වාරයක් යනු ආදාන ප්‍රතිලෝම කළ AND ද්වාරයකට සමාන වේ).\nමෙම නියමයන් මගින් පරිපථ NAND හෝ NOR පමණක් භාවිත කර ප්‍රතිනිර්මාණය කිරීමට උපකාරී වේ.",
        "highlightTerm": "De Morgan's Laws"
      },
      {
        "id": "b-g10-u4-5-3",
        "en": "Real-World Automated Control & Safety Systems:\nLogic circuits form the core decision-making brain in everyday automated electronic devices:\n* Burglar Security Alarm: Alarm rings (1) if Door Sensor opens (1) AND Security Master Switch is Armed (1). Logic: Q = Door · Armed.\n* Automatic Night Street Light: Street lamp illuminates (1) if Dark Sensor LDR triggers (1) AND System Power is ON (1). Logic: Q = Dark · Power.\n* Industrial Fire Suppression: Water sprinkler activates (1) if Smoke Detector triggers (1) OR Temperature Heat Sensor triggers (1). Logic: Q = Smoke + Heat.\n* Microwave Oven Safety Interlock: Magnetron runs (1) only if Door is Closed (1) AND Timer > 0 (1) AND Start button pressed (1). Logic: Q = Door · Timer · Start.",
        "si": "සැබෑ ලෝකයේ ස්වයංක්‍රීය පාලන සහ ආරක්ෂක පද්ධති:\nඑදිනෙදා ස්වයංක්‍රීය ඉලෙක්ට්‍රොනික උපාංගවල තීරණ ගැනීමේ මූලික මොළය ලෙස ලොජික් පරිපථ ක්‍රියා කරයි:\n* නිවාස ආරක්ෂක අනතුරු ඇඟවීමේ සීනුව: දොර විවෘත වූ විට (1) සහ ප්‍රධාන ආරක්ෂක ස්විචය සක්‍රිය කර ඇති විට (1) සීනුව නාද වේ (1). තර්කනය: Q = දොර · ස්විචය (AND ද්වාරය).\n* ස්වයංක්‍රීය රාත්‍රී වීදි ලාම්පුව: පරිසරය අඳුරු වූ විට (LDR = 1) සහ ප්‍රධාන විදුලිය ඇති විට (1) ලාම්පුව දැල්වේ. තර්කනය: Q = අඳුර · විදුලිය (AND ද්වාරය).\n* කර්මාන්තශාලා ගිනි නිවන පද්ධතිය: දුම් සංවේදකය (Smoke = 1) හෝ අධික උෂ්ණත්ව සංවේදකය (Heat = 1) සක්‍රිය වූ විට ජල විදින ක්‍රියාත්මක වේ. තර්කනය: Q = දුම + උෂ්ණත්වය (OR ද්වාරය).\n* මයික්‍රෝවේව් උඳුන: දොර වැසී ඇති විට (1) සහ ටයිමරය ක්‍රියාත්මක විට (1) සහ Start බොත්තම එබූ විට (1) පමණක් ක්‍රියා කරයි. තර්කනය: Q = දොර · ටයිමරය · Start (AND ද්වාරය).",
        "highlightTerm": "Real-World Automated Systems"
      }
    ],
    "tableData": {
      "headers": [
        {
          "en": "Automated System",
          "si": "ස්වයංක්‍රීය පද්ධතිය"
        },
        {
          "en": "Sensors / Inputs",
          "si": "සංවේදක / ආදාන"
        },
        {
          "en": "Required Logic Gate",
          "si": "අවශ්‍ය ලොජික් ද්වාරය"
        },
        {
          "en": "Boolean Rule",
          "si": "බූලීය නීතිය"
        },
        {
          "en": "Action on Output = 1",
          "si": "ප්‍රතිදානය 1 වන විට සිදුවීම"
        }
      ],
      "rows": [
        {
          "col1": {
            "en": "Home Burglar Alarm",
            "si": "නිවාස ආරක්ෂක සීනුව"
          },
          "col2": {
            "en": "Door Magnetic Sensor (D), Arm Switch (S)",
            "si": "දොර සංවේදකය (D), ස්විචය (S)"
          },
          "col3": {
            "en": "AND Gate",
            "si": "AND ද්වාරය"
          },
          "col4": {
            "en": "Q = D · S",
            "si": "Q = D · S"
          },
          "col5": {
            "en": "Siren sounds",
            "si": "අනතුරු ඇඟවීමේ සීනුව නාද වේ"
          }
        },
        {
          "col1": {
            "en": "Factory Fire Sprinkler",
            "si": "ගිනි නිවන පද්ධතිය"
          },
          "col2": {
            "en": "Smoke Sensor (S), Heat Sensor (H)",
            "si": "දුම් සංවේදකය (S), උෂ්ණත්ව සංවේදකය (H)"
          },
          "col3": {
            "en": "OR Gate",
            "si": "OR ද්වාරය"
          },
          "col4": {
            "en": "Q = S + H",
            "si": "Q = S + H"
          },
          "col5": {
            "en": "Water valve opens",
            "si": "ජල විදින විවෘත වේ"
          }
        },
        {
          "col1": {
            "en": "Night Street Light",
            "si": "රාත්‍රී වීදි ලාම්පුව"
          },
          "col2": {
            "en": "LDR Darkness Sensor (L), Timer (T)",
            "si": "අඳුරු සංවේදකය (L), ටයිමරය (T)"
          },
          "col3": {
            "en": "AND Gate",
            "si": "AND ද්වාරය"
          },
          "col4": {
            "en": "Q = L · T",
            "si": "Q = L · T"
          },
          "col5": {
            "en": "Street lamp illuminates",
            "si": "වීදි ලාම්පුව දැල්වේ"
          }
        },
        {
          "col1": {
            "en": "Washing Machine Spin",
            "si": "රෙදි සෝදන යන්ත්‍රය"
          },
          "col2": {
            "en": "Lid Closed (C), Water Drained (D)",
            "si": "පියන වැසී (C), ජලය බැසගොස් (D)"
          },
          "col3": {
            "en": "AND Gate",
            "si": "AND ද්වාරය"
          },
          "col4": {
            "en": "Q = C · D",
            "si": "Q = C · D"
          },
          "col5": {
            "en": "Spin motor starts",
            "si": "මෝටරය භ්‍රමණය වේ"
          }
        }
      ]
    },
    "checkpointQuiz": {
      "id": "q-g10-u4-5",
      "questionEn": "An automated fire protection system should trigger the sprinkler if EITHER a smoke sensor (S) detects smoke OR a thermal sensor (T) detects extreme heat. Which logic gate must be used?",
      "questionSi": "දුම් සංවේදකය (S) මගින් දුම හඳුනාගත් විට හෝ තාප සංවේදකය (T) මගින් අධික උෂ්ණත්වය හඳුනාගත් විට ජල විදින ක්‍රියාත්මක විය යුතු නම්, භාවිත කළ යුතු ලොජික් ද්වාරය කුමක්ද?",
      "options": [
        {
          "id": "1",
          "en": "OR Gate (Q = S + T)",
          "si": "OR ද්වාරය (Q = S + T)"
        },
        {
          "id": "2",
          "en": "AND Gate (Q = S · T)",
          "si": "AND ද්වාරය (Q = S · T)"
        },
        {
          "id": "3",
          "en": "NOT Gate",
          "si": "NOT ද්වාරය"
        },
        {
          "id": "4",
          "en": "NAND Gate",
          "si": "NAND ද්වාරය"
        }
      ],
      "correctOptionId": "1",
      "explanationEn": "An OR gate outputs 1 when AT LEAST ONE input is active, ensuring either hazard triggers safety response.",
      "explanationSi": "OR ද්වාරයක ඕනෑම එක් ආදානයක් හෝ සක්‍රිය වූ විට (1) ප්‍රතිදානය 1 වන බැවින් අනතුරකදී ආරක්ෂක ක්‍රියාමාර්ගය වහාම ක්‍රියාත්මක වේ."
    }
  }
],
  pastPaperQuestions: [
  {
    "id": "pp-g10-u4-2020-01",
    "year": 2020,
    "paperType": "Paper I",
    "badgeText": "2020 O/L Paper I - Question 34",
    "questionEn": "Which of the following truth tables represents the output of a 2-input NOR gate?\n(1) [0,0->0; 0,1->1; 1,0->1; 1,1->1]\n(2) [0,0->1; 0,1->0; 1,0->0; 1,1->0]\n(3) [0,0->1; 0,1->1; 1,0->1; 1,1->0]\n(4) [0,0->0; 0,1->0; 1,0->0; 1,1->1]",
    "questionSi": "ආදාන 2ක් සහිත NOR ද්වාරයක ප්‍රතිදානය නිරූපණය වන සත්‍යතා වගුව කුමක්ද?\n(1) [0,0->0; 0,1->1; 1,0->1; 1,1->1]\n(2) [0,0->1; 0,1->0; 1,0->0; 1,1->0]\n(3) [0,0->1; 0,1->1; 1,0->1; 1,1->0]\n(4) [0,0->0; 0,1->0; 1,0->0; 1,1->1]",
    "type": "mcq",
    "options": [
      {
        "id": "1",
        "en": "Option (1)",
        "si": "1 වන වරණය"
      },
      {
        "id": "2",
        "en": "Option (2)",
        "si": "2 වන වරණය"
      },
      {
        "id": "3",
        "en": "Option (3)",
        "si": "3 වන වරණය"
      },
      {
        "id": "4",
        "en": "Option (4)",
        "si": "4 වන වරණය"
      }
    ],
    "correctOptionId": "2",
    "explanationEn": "A NOR gate outputs 1 ONLY when both inputs are 0; for all other combinations it outputs 0.",
    "explanationSi": "NOR ද්වාරයක ප්‍රතිදානය 1 වන්නේ ආදාන දෙකම 0 වන විට පමණි."
  },
  {
    "id": "pp-g10-u4-2020-02",
    "year": 2020,
    "paperType": "Paper II",
    "badgeText": "2020 O/L Paper II - Question 01 (iv)",
    "questionEn": "Draw the logic circuit diagram for the Boolean expression P = A · B + C · D using basic logic gates.",
    "questionSi": "මූලික ලොජික් ද්වාර භාවිත කරමින් P = A · B + C · D බූලීය ප්‍රකාශනය සඳහා ලොජික් පරිපථ සටහන අඳින්න.",
    "type": "structured",
    "sampleAnswerEn": "Circuit requires two 2-input AND gates followed by one 2-input OR gate:\n1. Input A and B into AND Gate 1 -> A·B\n2. Input C and D into AND Gate 2 -> C·D\n3. Connect outputs of both AND gates into an OR Gate -> P = A·B + C·D.",
    "sampleAnswerSi": "මූලික AND ද්වාර දෙකක් සහ එක් OR ද්වාරයක් අවශ්‍ය වේ:\n1. A සහ B ආදාන පළමු AND ද්වාරයට -> A·B\n2. C සහ D ආදාන දෙවන AND ද්වාරයට -> C·D\n3. එම ප්‍රතිදාන දෙක OR ද්වාරයට ඇතුළත් කළ විට -> P = A·B + C·D.",
    "explanationEn": "Official marking scheme requires 2 AND gates feeding into 1 OR gate.",
    "explanationSi": "නිල ලකුණු දීමේ පටිපාටිය අනුව AND ද්වාර 2 ක් සහ OR ද්වාර 1 ක් ඇඳිය යුතුය."
  },
  {
    "id": "pp-g10-u4-2021-03",
    "year": 2021,
    "paperType": "Paper I",
    "badgeText": "2021 O/L Paper I - Question 39",
    "questionEn": "Consider a 2-input NAND gate where inputs are A and B. If input B = 1, what is the output Q?\n(1) 0   (2) 1   (3) A   (4) A'",
    "questionSi": "ආදාන A සහ B වන 2-ආදාන NAND ද්වාරයක් සලකන්න. ආදානය B = 1 නම්, ප්‍රතිදානය Q කුමක්ද?\n(1) 0   (2) 1   (3) A   (4) A'",
    "type": "mcq",
    "options": [
      {
        "id": "1",
        "en": "0",
        "si": "0"
      },
      {
        "id": "2",
        "en": "1",
        "si": "1"
      },
      {
        "id": "3",
        "en": "A",
        "si": "A"
      },
      {
        "id": "4",
        "en": "A' (NOT A)",
        "si": "A' (NOT A)"
      }
    ],
    "correctOptionId": "4",
    "explanationEn": "Q = (A · B)' = (A · 1)' = A'. The NAND gate acts as an inverter.",
    "explanationSi": "Q = (A · B)' = (A · 1)' = A'. NAND ද්වාරය මෙහිදී ප්‍රතිලෝමකයක් ලෙස ක්‍රියා කරයි."
  },
  {
    "id": "pp-g10-u4-2021-04",
    "year": 2021,
    "paperType": "Paper II",
    "badgeText": "2021 O/L Paper II - Question 01 (iv)",
    "questionEn": "Draw the logic circuit for P = A · (B + C) using standard basic logic gates.",
    "questionSi": "සම්මත මූලික ලොජික් ද්වාර භාවිත කර P = A · (B + C) සඳහා ලොජික් පරිපථය අඳින්න.",
    "type": "structured",
    "sampleAnswerEn": "1. Connect inputs B and C to a 2-input OR gate -> (B + C)\n2. Connect the output of the OR gate and input A to a 2-input AND gate -> P = A · (B + C).",
    "sampleAnswerSi": "1. B සහ C ආදාන 2-ආදාන OR ද්වාරයකට සම්බන්ධ කරන්න -> (B + C)\n2. එම OR ද්වාරයේ ප්‍රතිදානය සහ A ආදානය 2-ආදාන AND ද්වාරයකට සම්බන්ධ කරන්න -> P = A · (B + C).",
    "explanationEn": "Constructed using 1 OR gate followed by 1 AND gate.",
    "explanationSi": "1 OR ද්වාරයක් සහ 1 AND ද්වාරයක් භාවිතයෙන් නිර්මාණය වේ."
  },
  {
    "id": "pp-g10-u4-2022-05",
    "year": 2022,
    "paperType": "Paper II",
    "badgeText": "2022 O/L Paper II - Question 01 (iv)",
    "questionEn": "Draw the logic circuit diagram for the Boolean expression F = C' + A · B' using basic logic gates.",
    "questionSi": "F = C' + A · B' බූලීය ප්‍රකාශනය සඳහා මූලික ලොජික් ද්වාර භාවිතයෙන් ලොජික් පරිපථ සටහන අඳින්න.",
    "type": "structured",
    "sampleAnswerEn": "1. Invert C using NOT gate -> C'\n2. Invert B using NOT gate -> B'\n3. Connect A and B' to an AND gate -> A·B'\n4. Connect C' and A·B' to an OR gate -> F = C' + A·B'.",
    "sampleAnswerSi": "1. C සංඥාව NOT ද්වාරයකින් ප්‍රතිලෝම කරන්න -> C'\n2. B සංඥාව NOT ද්වාරයකින් ප්‍රතිලෝම කරන්න -> B'\n3. A සහ B' ආදාන AND ද්වාරයකට සම්බන්ධ කරන්න -> A·B'\n4. C' සහ A·B' ප්‍රතිදාන OR ද්වාරයකට සම්බන්ධ කරන්න -> F = C' + A·B'.",
    "explanationEn": "Requires 2 NOT gates, 1 AND gate, and 1 OR gate.",
    "explanationSi": "NOT ද්වාර 2 ක්, AND ද්වාර 1 ක් සහ OR ද්වාර 1 ක් අවශ්‍ය වේ."
  },
  {
    "id": "pp-g10-u4-2023-06",
    "year": 2023,
    "paperType": "Paper II",
    "badgeText": "2023 O/L Paper II - Question 01 (iv)",
    "questionEn": "In a digital logic circuit, Gate 1 is an OR gate with inputs A and B. Its output is fed into Gate 2, which is an AND gate, along with input A. (a) Write down the Boolean expression for output Z. (b) Evaluate Z when A=1, B=0.",
    "questionSi": "ඩිජිටල් පරිපථයක, 1 වන ද්වාරය A සහ B ආදාන සහිත OR ද්වාරයකි. එහි ප්‍රතිදානය A ආදානය සමඟ AND ද්වාරයක් වන 2 වන ද්වාරයට ලබා දේ. (a) Z සඳහා බූලීය ප්‍රකාශනය ලියන්න. (b) A=1, B=0 වන විට Z හි අගය සොයන්න.",
    "type": "structured",
    "sampleAnswerEn": "(a) Z = (A + B) · A (which simplifies to A by absorption).\n(b) When A=1, B=0: Z = (1 + 0) · 1 = 1 · 1 = 1.",
    "sampleAnswerSi": "(a) Z = (A + B) · A\n(b) A=1, B=0 වන විට: Z = (1 + 0) · 1 = 1 · 1 = 1.",
    "explanationEn": "Full credit for Z = (A + B) · A and evaluating Z = 1.",
    "explanationSi": "Z = (A + B) · A සහ Z = 1 නිවැරදි පිළිතුර වේ."
  },
  {
    "id": "pp-g10-u4-2024-07",
    "year": 2024,
    "paperType": "Paper II",
    "badgeText": "2024 O/L Paper II - Question 01 (iv)",
    "questionEn": "Inputs A and B pass into a NAND gate. The output of the NAND gate is connected as one input to a NOR gate, while the second input is connected to input C. Write the final Boolean expression Y.",
    "questionSi": "A සහ B ආදාන NAND ද්වාරයකට ඇතුළත් කෙරේ. එහි ප්‍රතිදානය C ආදානය සමඟ NOR ද්වාරයකට ආදානය කෙරේ. අවසාන බූලීය ප්‍රකාශනය Y ලියන්න.",
    "type": "structured",
    "sampleAnswerEn": "NAND output = (A · B)'. NOR gate combines this with C: Y = ((A · B)' + C)'.",
    "sampleAnswerSi": "NAND ප්‍රතිදානය = (A · B)'. NOR ද්වාරයේ ප්‍රතිදානය Y = ((A · B)' + C)'.",
    "explanationEn": "Y = ((A · B)' + C)' correctly represents the cascading NAND-NOR combinational circuit.",
    "explanationSi": "NAND සහ NOR ද්වාර එකතුව නිවැරදිව නිරූපණය කරයි."
  },
  {
    "id": "pp-g10-u4-2025-08",
    "year": 2025,
    "paperType": "Paper II",
    "badgeText": "2025 O/L Paper II - Question 01 (iv)",
    "questionEn": "Construct the complete step-by-step truth table for the Boolean expression Q = A · B' + A' · B (XOR equivalency).",
    "questionSi": "Q = A · B' + A' · B බූලීය ප්‍රකාශනය සඳහා පියවරෙන් පියවර සම්පූර්ණ සත්‍යතා වගුව ගොඩනගන්න.",
    "type": "structured",
    "sampleAnswerEn": "Truth Table:\nA=0, B=0: A'=1, B'=1, A·B'=0, A'·B=0 -> Q=0\nA=0, B=1: A'=1, B'=0, A·B'=0, A'·B=1 -> Q=1\nA=1, B=0: A'=0, B'=1, A·B'=1, A'·B=0 -> Q=1\nA=1, B=1: A'=0, B'=0, A·B'=0, A'·B=0 -> Q=0",
    "sampleAnswerSi": "සත්‍යතා වගුව:\nA=0, B=0: A'=1, B'=1, A·B'=0, A'·B=0 -> Q=0\nA=0, B=1: A'=1, B'=0, A·B'=0, A'·B=1 -> Q=1\nA=1, B=0: A'=0, B'=1, A·B'=1, A'·B=0 -> Q=1\nA=1, B=1: A'=0, B'=0, A·B'=0, A'·B=0 -> Q=0",
    "explanationEn": "XOR equivalent table evaluating to 0, 1, 1, 0.",
    "explanationSi": "XOR සත්‍යතා වගුව: 0, 1, 1, 0."
  }
]
};
