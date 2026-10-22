// Verbatim dual-medium syllabus data extracted from public/lessons
import { GeneralLessonData } from '../allLessonsData';

export const G10_U2_DATA: GeneralLessonData = {
  "id": "g10-u2",
  "grade": "10",
  "unitNumber": 2,
  "titleEn": "The Computer System & System Components",
  "titleSi": "පරිගණක පද්ධතිය සහ පද්ධති සංරචක",
  "subtopics": [
    {
      "id": "g10-u2-st-1",
      "number": "2.1",
      "titleEn": "Concept & Functions of a Computer System",
      "titleSi": "පරිගණක පද්ධතියේ සංකල්පය සහ කාර්යයන්",
      "summaryEn": "Definition of computer system, 4 fundamental functions (IPOS: Input, Process, Storage, Output), and 5 core characteristics.",
      "summarySi": "පරිගණක පද්ධතියේ අර්ථ දැක්වීම, මූලික පද්ධති කාර්යයන් 4 (ආදානය, සැකසීම, ආචයනය, ප්‍රතිදානය) සහ සුවිශේෂී ලක්ෂණ 5.",
      "blocks": [
        {
          "id": "b-g10-u2-1-1",
          "en": "Core Definition & IPOS Cycle:\nA computer is an electronic device which accepts raw data as input, processes it according to stored instructions, and produces meaningful information as output.\n\n* **The 4 Fundamental System Functions (IPOS Model):**\n  - **Input (දත්ත ආදානය):** Accepting raw data and instructions through input devices (e.g., keyboard, mouse, barcode reader).\n  - **Processing (දත්ත සැකසීම):** Manipulating and calculating data within the Central Processing Unit (ALU & CU) to convert it into information.\n  - **Output (තොරතුරු ප්‍රතිදානය):** Presenting processed results to the user via output devices (e.g., monitor, printer, speakers).\n  - **Storage (දත්ත ආචයනය):** Retaining data and instructions in Primary Memory (RAM) for immediate processing and Secondary Storage (HDD/SSD) for long-term retrieval.\n\n* **Operational Dataflow Architecture:**\n[Input (Data)] ➔ [Processing (CPU)] ➔ [Output (Information)]\n↕\n[Storage (Primary & Secondary Memory)]",
          "si": "මූලික අර්ථ දැක්වීම සහ IPOS ආකෘතිය:\nපරිගණකය යනු අමුදත්ත ආදානය කරගෙන, තැන්පත් කර ඇති උපදෙස් අනුව ඒවා සකස් කර, අපේක්ෂිත තොරතුරු ප්‍රතිදානය කරන ඉලෙක්ට්‍රොනික උපාංගයකි.\n\n* **පරිගණක පද්ධතියක මූලික කාර්යයන් 4 (IPOS ආකෘතිය):**\n  - **ආදානය (Input):** ආදාන උපාංග (යතුරුපුවරුව, මූසිකය, තීරු කේත කියවනය) මඟින් අමුදත්ත සහ විධාන පද්ධතියට ඇතුළත් කර ගැනීම.\n  - **සැකසීම (Processing):** මධ්‍ය සැකසුම් ඒකකය (ALU සහ CU) මඟින් දත්ත අර්ථවත් තොරතුරු බවට පරිවර්තනය කිරීම.\n  - **ප්‍රතිදානය (Output):** සකසන ලද ප්‍රතිඵල පරිශීලකයා වෙත (මොනිටරය, මුද්‍රණ යන්ත්‍රය) ඉදිරිපත් කිරීම.\n  - **ආචයනය (Storage):** දත්ත සහ උපදෙස් ක්ෂණික භාවිතය සඳහා ප්‍රධාන මතකයේද (RAM), අනාගත භාවිතය සඳහා ද්විතීයික මතකයේද (HDD/SSD) සුරැකීම.\n\n* **පද්ධති දත්ත ගැලීමේ ආකෘතිය:**\n[ආදානය (දත්ත)] ➔ [සැකසීම (CPU)] ➔ [ප්‍රතිදානය (තොරතුරු)]\n↕\n[ආචයනය (ප්‍රාථමික සහ ද්විතීයික මතකය)]",
          "highlightTerm": "Core Definition & IPOS Functions"
        },
        {
          "id": "b-g10-u2-1-2",
          "en": "Characteristics of a Computer:\n1. **Speed (වේගය):** Calculations are done in fractions of seconds; millions of instructions processed per second.\n2. **Accuracy (නිරවද්‍යතාව):** Accurate results according to correct instructions and data. Errors stem from flawed input (**GIGO - Garbage In, Garbage Out**).\n3. **Diligence / Efficiency (කාර්යක්ෂමතාව / නොපසුබට බව):** Does not get tired; processes continuously 24/7 with zero fatigue.\n4. **Versatility (බහුකාර්ය බව):** Can be used for completely different tasks by switching software applications.\n5. **Storage & Retrieval (සුරැකීම හා නැවත ලබා ගැනීම):** Stores massive amounts of data in small physical units and retrieves it in microseconds.",
          "si": "පරිගණකයේ සුවිශේෂී ලක්ෂණ:\n1. **වේගය (Speed):** ගණනය කිරීම් සඳහා ඉතා සුළු කාලයක් ගත වේ; තත්පරයකදී උපදෙස් මිලියන ගණනක් ක්‍රියාත්මක කරයි.\n2. **නිරවද්‍යතාව (Accuracy):** නිවැරදි උපදෙස් හා දත්ත වලට අනුව නිවැරදි ප්‍රතිඵල ලබා දෙයි. දෝෂ ඇතිවන්නේ මිනිස් දත්ත ඇතුළත් කිරීමේ වරදිනි (**GIGO - කුණු ඇතුළත් කළ විට කුණු ලැබේ**).\n3. **නොපසුබට බව / කාර්යක්ෂමතාව (Diligence):** වෙහෙසට පත් නොවේ; පැය 24 පුරා අඛණ්ඩව නිවැරදිව ක්‍රියා කරයි.\n4. **බහුකාර්ය බව (Versatility):** මෘදුකාංග වෙනස් කිරීම මඟින් විවිධාකාර ක්ෂේත්‍ර රැසක කාර්යයන් ඉටු කරගත හැක.\n5. **සුරැකීම හා නැවත ලබා ගැනීම (Storage & Retrieval):** කුඩා ඒකකයක විශාල දත්ත ප්‍රමාණයක් රැස් කර ඉතා ඉක්මනින් නැවත ලබාගත හැක.",
          "highlightTerm": "Characteristics of a Computer"
        }
      ],
      "examples": [
        {
          "id": "ex-g10-u2-1-1",
          "titleEn": "Interactive IPO System Diagram",
          "titleSi": "අන්තර්ක්‍රියාකාරී ආදාන-සැකසුම්-ප්‍රතිදාන ආකෘතිය",
          "isInteractiveWidget": "system-diagram"
        }
      ],
      "tableData": {
        "headers": [
          {
            "en": "Characteristic",
            "si": "ලක්ෂණය"
          },
          {
            "en": "Technical Meaning",
            "si": "තාක්ෂණික අර්ථය"
          },
          {
            "en": "Exam Trap / Rule",
            "si": "විභාග උගුල / රීතිය"
          }
        ],
        "rows": [
          {
            "feature": {
              "en": "Speed",
              "si": "වේගය"
            },
            "meaning": {
              "en": "Millions of instructions per second (MIPS)",
              "si": "තත්පරයට උපදෙස් මිලියන ගණනක් සැකසීම"
            },
            "trap": {
              "en": "Measured in clock cycles (Hz/GHz), not transfer baud rate",
              "si": "ඔරලෝසු සංඛ්‍යාතයෙන් (Hz/GHz) මනිනු ලබයි"
            }
          },
          {
            "feature": {
              "en": "Accuracy",
              "si": "නිරවද්‍යතාව"
            },
            "meaning": {
              "en": "Strict algorithmic computation without rounding errors",
              "si": "ඇල්ගොරිතමයට අනුකූල නිවැරදි ප්‍රතිඵල"
            },
            "trap": {
              "en": "Errors are caused by human data entry, described as GIGO",
              "si": "දෝෂ ඇතිවන්නේ මිනිස් ආදානය නිසාය (GIGO)"
            }
          },
          {
            "feature": {
              "en": "Diligence",
              "si": "නොපසුබට බව"
            },
            "meaning": {
              "en": "Continuous execution with zero fatigue over 24 hours",
              "si": "වෙහෙසකින් තොරව පැය 24 පුරා ක්‍රියා කිරීම"
            },
            "trap": {
              "en": "Does not slow down or degrade quality over continuous operations",
              "si": "අඛණ්ඩ ක්‍රියාකාරිත්වයේ දී ගුණාත්මකභාවය අඩු නොවේ"
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g10-u2-1",
        "questionEn": "Which term best explains when incorrect data entered into a computer produces incorrect output information?",
        "questionSi": "පරිගණකයකට වැරදි දත්ත ආදානය කිරීමෙන් වැරදි ප්‍රතිදානයක් ලැබීමේ සංසිද්ධිය වඩාත්ම නිවැරදිව හඳුන්වන්නේ කුමන නමකින්ද?",
        "options": [
          {
            "id": "1",
            "en": "GIGO (Garbage In, Garbage Out)",
            "si": "GIGO (කුණු ඇතුළත් කළ විට කුණු ලැබේ)"
          },
          {
            "id": "2",
            "en": "FIFO (First In, First Out)",
            "si": "FIFO (පළමුව ඇතුළු වූ දේ පළමුව පිටවීම)"
          },
          {
            "id": "3",
            "en": "CPU Throttling",
            "si": "CPU ක්‍රියාකාරිත්වය සීමා වීම"
          },
          {
            "id": "4",
            "en": "Cache Miss",
            "si": "කෑෂ් මතක මඟහැරීම"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "GIGO (Garbage In, Garbage Out) emphasizes that computers compute accurately; wrong output is caused by faulty human input.",
        "explanationSi": "GIGO යන්නෙන් අදහස් වන්නේ පරිගණකය නිවැරදිව ගණනය කරන නමුත් මිනිසා විසින් වැරදි දත්ත දුනහොත් ප්‍රතිදානයද වැරදි වන බවයි."
      }
    },
    {
      "id": "g10-u2-st-2",
      "number": "2.2",
      "titleEn": "Classification of Computers",
      "titleSi": "පරිගණක වර්ගීකරණය",
      "summaryEn": "Classification by physical size and processing power (Super, Mainframe, Mini, Micro) and by signal technology (Analog, Digital, Hybrid).",
      "summarySi": "භෞතික ප්‍රමාණය හා සැකසුම් බලය අනුව (සුපිරි, මහා, මධ්‍ය, ක්ෂුද්‍ර) සහ සංඥා තාක්ෂණය අනුව (ප්‍රතිසම, සංඛ්‍යාංක, මිශ්‍ර) වර්ගීකරණය.",
      "blocks": [
        {
          "id": "b-g10-u2-2-1",
          "en": "Classification Overview:\nComputers are classified based on two core criteria:\n1. **Physical Size & Processing Power (භෞතික ප්‍රමාණය හා බලය අනුව)**\n2. **Operating Technology / Signals (ක්‍රියාකාරී තාක්ෂණය හා සංඥා අනුව)**.",
          "si": "වර්ගීකරණ හැඳින්වීම:\nපරිගණක ප්‍රධාන නිර්ණායක දෙකක් පදනම් කරගෙන වර්ගීකරණය කෙරේ:\n1. **භෞතික ප්‍රමාණය සහ සැකසුම් බලය අනුව**\n2. **ක්‍රියාකාරී නිර්මාණ තාක්ෂණය සහ සංඥා අනුව**.",
          "highlightTerm": "Classification Overview"
        },
        {
          "id": "b-g10-u2-2-2",
          "en": "Classification by Physical Size & Processing Power:\n1. **Super Computers (සුපිරි පරිගණක):** Most powerful processing capability in a given time limit. Used for scientific/engineering workloads, weather simulations, space research (NASA), and defense. Extremely large, rare, and expensive.\n2. **Mainframe Computers (මහා පරිගණක):** Connects thousands of simultaneous users and terminals to share centralized data and programs. Heavily used in commercial banking networks and airline reservation systems.\n3. **Mini / Medium Computers (මධ්‍ය පරිගණක):** Mid-range multi-user computers, smaller and less costly than mainframes. Used in medium businesses and university departments.\n4. **Micro / Personal Computers (ක්ෂුද්‍ර / පුද්ගල පරිගණක - PC):** Smallest computers designed for individual personal use. Examples include Desktops, Laptops, and handheld smartphones/tablets.",
          "si": "භෞතික ප්‍රමාණය අනුව වර්ගීකරණය:\n1. **සුපිරි පරිගණක (Super Computers):** නිශ්චිත කාලයකදී කළ හැකි කාර්ය ප්‍රමාණය අතින් උපරිම බලසම්පන්න වේ. කාලගුණ අනාවැකි, අභ්‍යවකාශ ගවේෂණ (NASA) හා විද්‍යාත්මක පර්යේෂණ සඳහා යොදාගනී. ඉතා විශාලය, දුර්ලභය, මිල අධිකය.\n2. **මහා පරිගණක (Mainframe Computers):** පරිශීලකයින් හා පර්යන්ත (Terminals) දහස් ගණනක් එකවර සම්බන්ධ කරමින් මධ්‍යගත දත්ත හුවමාරු කරයි. වාණිජ බැංකු සහ ගුවන් ගමන් වෙන්කිරීම් සඳහා ප්‍රධාන වශයෙන් භාවිත වේ.\n3. **මධ්‍ය පරිගණක (Mini Computers):** මහා පරිගණක වලට වඩා ප්‍රමාණයෙන් හා මිලෙන් අඩු මධ්‍යම පරිමාණ ව්‍යාපාර හා විශ්වවිද්‍යාල සඳහා යොදාගන්නා පරිගණක වේ.\n4. **ක්ෂුද්‍ර පරිගණක (Micro Computers / PC):** තනි පුද්ගල භාවිතය සඳහා නිර්මාණය කළ කුඩාම පරිගණක වේ. මේස පරිගණක (Desktop), ලැප්ටොප් (Laptop), සහ ස්මාර්ට්ෆෝන් මීට අයත් වේ.",
          "highlightTerm": "Classification by Physical Size"
        },
        {
          "id": "b-g10-u2-2-3",
          "en": "Classification by Technology & Signals:\n1. **Analog Computers (ප්‍රතිසම පරිගණක):** Operate by measuring continuous physical variations (speed, temperature, voltage, pressure). Examples: Automobile speedometer, mercury thermometer, analog pressure gauge.\n2. **Digital Computers (සංඛ්‍යාංක පරිගණක):** Operate by identifying discrete electrical pulses representing binary digits (0 and 1). All modern personal computers and smartphones are digital.\n3. **Hybrid Computers (මිශ්‍ර පරිගණක):** Combines the measurement speed of analog systems with the precision of digital computers. **Primary O/L Exam Example: Hospital ECG machine** (reads analog heartbeat electrical signals, converts them to digital values, and prints graphs).",
          "si": "නිර්මාණ තාක්ෂණය අනුව වර්ගීකරණය:\n1. **ප්‍රතිසම පරිගණක (Analog Computers):** පීඩනය, උෂ්ණත්වය, වේගය වැනි අඛණ්ඩව වෙනස්වන භෞතික ප්‍රතිසම සංඥා මැනීමෙන් ක්‍රියා කරයි. උදා: මෝටර් රථ වේගමාපකය, කාලගුණ මිණුම්.\n2. **සංඛ්‍යාංක පරිගණක (Digital Computers):** විවික්ත ද්වීමය සංඛ්‍යා (0 සහ 1) හඳුනා ගනිමින් ක්‍රියා කරයි. එදිනෙදා භාවිත කරන සියලුම සාමාන්‍ය පරිගණක මීට අයත් වේ.\n3. **මිශ්‍ර පරිගණක (Hybrid Computers):** ප්‍රතිසම සහ සංඛ්‍යාංක යන දෙවර්ගයේම එකතුවකි. **විභාග ප්‍රධාන උදාහරණය: රෝහල්වල භාවිත වන ECG යන්ත්‍රය** (හෘදයේ ප්‍රතිසම සංඥා ලබාගෙන සංඛ්‍යාංක දත්ත බවට පත් කර මුද්‍රණය කරයි).",
          "highlightTerm": "Classification by Technology"
        }
      ],
      "tableData": {
        "headers": [
          {
            "en": "Type",
            "si": "වර්ගය"
          },
          {
            "en": "Signal / Metric",
            "si": "සංඥාව / මිණුම"
          },
          {
            "en": "Typical Real-World Use",
            "si": "ප්‍රායෝගික භාවිතය"
          }
        ],
        "rows": [
          {
            "type": {
              "en": "Supercomputer",
              "si": "සුපිරි පරිගණකය"
            },
            "signal": {
              "en": "PetaFLOPS high-speed math",
              "si": "අධිවේගී ගණිත සැකසුම්"
            },
            "use": {
              "en": "NASA, climate modeling, defense research",
              "si": "නාසා, කාලගුණ අනාවැකි, ආරක්ෂක අංශ"
            }
          },
          {
            "type": {
              "en": "Mainframe",
              "si": "මහා පරිගණකය"
            },
            "signal": {
              "en": "Massive parallel I/O throughput",
              "si": "විශාල පරිශීලක දත්ත හුවමාරුව"
            },
            "use": {
              "en": "Commercial banking networks, airline ticketing",
              "si": "වාණිජ බැංකු ජාල, ගුවන් ටිකට්පත් වෙන්කිරීම්"
            }
          },
          {
            "type": {
              "en": "Hybrid Computer",
              "si": "මිශ්‍ර පරිගණකය"
            },
            "signal": {
              "en": "Analog wave converted to digital binary",
              "si": "ප්‍රතිසම තරංග සංඛ්‍යාංක බවට පත් කිරීම"
            },
            "use": {
              "en": "Hospital Intensive Care ECG machine",
              "si": "රෝහල් දැඩි සත්කාර ඒකකයේ ECG යන්ත්‍රය"
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g10-u2-2",
        "questionEn": "Which computer type is an ECG machine used in hospital intensive care units to observe heart activity?",
        "questionSi": "රෝහල්වල හෘදයේ ක්‍රියාකාරීත්වය නිරීක්ෂණය කිරීමට භාවිත කරන ECG යන්ත්‍රය අයත් වන්නේ කුමන පරිගණක කාණ්ඩයටද?",
        "options": [
          {
            "id": "1",
            "en": "Hybrid Computer",
            "si": "මිශ්‍ර පරිගණකය (Hybrid Computer)"
          },
          {
            "id": "2",
            "en": "Pure Analog Computer",
            "si": "ප්‍රතිසම පරිගණකය පමණි (Analog Computer)"
          },
          {
            "id": "3",
            "en": "Mainframe Computer",
            "si": "මහා පරිගණකය (Mainframe Computer)"
          },
          {
            "id": "4",
            "en": "Super Computer",
            "si": "සුපිරි පරිගණකය (Super Computer)"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "An ECG machine is a Hybrid Computer: it measures analog heart wave pulses, converts them to digital values, and computes/prints medical charts.",
        "explanationSi": "ECG යන්ත්‍රය මිශ්‍ර පරිගණකයකි: එය හෘදයේ ප්‍රතිසම තරංග සංඥා ලබාගෙන සංඛ්‍යාංක අගයන් බවට හරවා ප්‍රස්ථාර මුද්‍රණය කරයි."
      }
    },
    {
      "id": "g10-u2-st-3",
      "number": "2.3",
      "titleEn": "Function of a Computer System & Von Neumann Architecture",
      "titleSi": "පරිගණක පද්ධතියක ක්‍රියාකාරිත්වය සහ ජෝන් වොන් නියුමන් ආකෘතිය",
      "summaryEn": "Von Neumann stored-program architecture, data/instruction vs control signal flow (dotted vs solid line), and system buses (data, address, control).",
      "summarySi": "ජෝන් වොන් නියුමන් ආකෘතිය, දත්ත සහ පාලන සංඥා ගැලීම (කැඩුණු ඉර හා තනි ඉර), සහ පද්ධති බස් මාර්ග (දත්ත, ලිපින, පාලන).",
      "blocks": [
        {
          "id": "b-g10-u2-3-1",
          "en": "Von Neumann Architecture & Stored-Program Blueprint:\nDesigned by John Von Neumann in 1945. Modern computers store both program instructions and working data in the same Primary Memory.\n\n* **Signal & Data Flow Representation (O/L Exam Standard):**\n  - **Dotted Line (කැඩුණු ඉර - Data & Instructions):** Input Devices ➔ Primary Memory ➔ CPU (Registers/ALU) ➔ Primary Memory ➔ Output / Secondary Storage.\n  - **Solid Line (තනි ඉර - Control Signals):** Issued strictly by the **Control Unit (CU)** to direct all system hardware units.",
          "si": "ජෝන් වොන් නියුමන් ආකෘතිය සහ සංඥා ගැලීම:\n1945 දී ජෝන් වොන් නියුමන් විසින් හඳුන්වා දුන් ආකෘතියයි. මෙහිදී පරිගණක වැඩසටහන් උපදෙස් සහ දත්ත යන දෙකම එකම ප්‍රධාන මතකය තුළ ගබඩා කරනු ලැබේ.\n\n* **සංඥා සහ දත්ත ගැලීම නිරූපණය (O/L විභාග ප්‍රමිතිය):**\n  - **කැඩුණු ඉර (Dotted Line - දත්ත හා උපදෙස් ගැලීම):** ආදාන උපාංග ➔ ප්‍රධාන මතකය ➔ CPU (රෙජිස්ටර/ALU) ➔ ප්‍රධාන මතකය ➔ ප්‍රතිදාන / ද්විතීයික ආචයනය.\n  - **තනි ඉර (Solid Line - පාලන සංඥා):** **පාලන ඒකකය (CU)** මඟින් සියලුම දෘඩාංග උපාංග පාලනය සඳහා නිකුත් කරන විධාන සංඥා වේ.",
          "highlightTerm": "Von Neumann Architecture"
        },
        {
          "id": "b-g10-u2-3-2",
          "en": "System Bus Architecture:\nA bus is a collection of parallel electrical conductor lines that transmit signals between computer components.\n1. **Data Bus (දත්ත බසය):** **Bidirectional (ද්වි-දිශානත)**. Carries actual data words between CPU, memory, and devices.\n2. **Address Bus (ලිපින බසය):** **Unidirectional (ඒක-දිශානත)** from CPU to memory/devices. Specifies the exact physical memory location to read from or write to.\n3. **Control Bus (පාලන බසය):** Carries timing clock pulses and operational commands (Read, Write, Interrupt, Reset) from the Control Unit.",
          "si": "පද්ධති බස් මාර්ග (System Buses):\nබස් මාර්ගයක් යනු පරිගණක සංරචක අතර සංඥා ගෙනයන සමාන්තර සන්නායක රැහැන් සමූහයකි.\n1. **දත්ත බසය (Data Bus):** **ද්වි-දිශානත (Bidirectional)** වේ. CPU, මතකය සහ උපාංග අතර සත්‍ය දත්ත හුවමාරු කරයි.\n2. **ලිපින බසය (Address Bus):** **ඒක-දිශානත (Unidirectional)** වේ (CPU වෙතින් මතකය දෙසට පමණි). දත්ත කියවිය යුතු හෝ ලිවිය යුතු මතක ලිපිනය තීරණය කරයි.\n3. **පාලන බසය (Control Bus):** පාලන ඒකකය මඟින් නිකුත් කරන කියවීම් (Read), ලිවීම් (Write) සහ කාල පාලන සංඥා ගෙන යයි.",
          "highlightTerm": "System Bus Architecture"
        }
      ],
      "examples": [
        {
          "id": "ex-g10-u2-3-1",
          "titleEn": "Interactive Motherboard & Bus Highway",
          "titleSi": "මවුපුවරුව සහ බස් මාර්ග අන්තර්ක්‍රියාකාරී පුවරුව",
          "isInteractiveWidget": "cpu_bus"
        }
      ],
      "tableData": {
        "headers": [
          {
            "en": "System Bus",
            "si": "පද්ධති බසය"
          },
          {
            "en": "Directional Flow",
            "si": "ගැලීමේ දිශාව"
          },
          {
            "en": "Function / Carried Signal",
            "si": "කාර්යය / ගෙනයන සංඥාව"
          }
        ],
        "rows": [
          {
            "bus": {
              "en": "Data Bus",
              "si": "දත්ත බසය"
            },
            "direction": {
              "en": "Bidirectional (Two-way)",
              "si": "ද්වි-දිශානත (දෙපසටම)"
            },
            "func": {
              "en": "Transmits data bytes between CPU and RAM",
              "si": "CPU සහ මතකය අතර දත්ත හුවමාරු කරයි"
            }
          },
          {
            "bus": {
              "en": "Address Bus",
              "si": "ලිපින බසය"
            },
            "direction": {
              "en": "Unidirectional (CPU -> Memory only)",
              "si": "ඒක-දිශානත (CPU වෙතින් මතකයට පමණි)"
            },
            "func": {
              "en": "Carries memory address pointer specifying location",
              "si": "දත්ත පිහිටි මතක කුටියේ ලිපිනය ගෙන යයි"
            }
          },
          {
            "bus": {
              "en": "Control Bus",
              "si": "පාලන බසය"
            },
            "direction": {
              "en": "Unidirectional / Bidirectional lines",
              "si": "පාලන සංඥා දිශාව අනුව"
            },
            "func": {
              "en": "Carries Read/Write commands and clock synchronizations",
              "si": "කියවීම්/ලිවීම් සහ කාල සංඥා නිකුත් කරයි"
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g10-u2-3",
        "questionEn": "In a Von Neumann architecture diagram, which lines represent control signals and data flow respectively?",
        "questionSi": "වොන් නියුමන් ආකෘති සටහනක පාලන සංඥා සහ දත්ත ගැලීම පිළිවෙළින් නිරූපණය කරන්නේ කෙසේද?",
        "options": [
          {
            "id": "1",
            "en": "Control signals: Solid line; Data flow: Dotted line",
            "si": "පාලන සංඥා: තනි ඉර; දත්ත ගැලීම: කැඩුණු ඉර"
          },
          {
            "id": "2",
            "en": "Control signals: Dotted line; Data flow: Solid line",
            "si": "පාලන සංඥා: කැඩුණු ඉර; දත්ත ගැලීම: තනි ඉර"
          },
          {
            "id": "3",
            "en": "Both are drawn as solid red lines",
            "si": "දෙකම රතු තනි ඉරි වලින්"
          },
          {
            "id": "4",
            "en": "Both are drawn as dotted yellow lines",
            "si": "දෙකම කහ කැඩුණු ඉරි වලින්"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "In official textbook Figure 2.10: Control signals from the CU are drawn as solid lines, while data and instruction flow is drawn as dotted lines.",
        "explanationSi": "නිල පෙළපොත් රූප සටහනට අනුව පාලන ඒකකයෙන් නිකුත් වන පාලන සංඥා තනි ඉරකින් ද, දත්ත සහ උපදෙස් ගැලීම කැඩුණු ඉරකින් ද දක්වයි."
      }
    },
    {
      "id": "g10-u2-st-4",
      "number": "2.4",
      "titleEn": "Physical Hardware & Internal CPU Architecture",
      "titleSi": "ප්‍රධාන භෞතික සංරචක සහ මධ්‍ය සැකසුම් ඒකකයේ අභ්‍යන්තර ආකෘතිය",
      "summaryEn": "CPU components (ALU, CU, Registers), clock speed, machine execution cycle, cache memory mechanism, input/output devices, memory hierarchy (RAM vs ROM), and ports.",
      "summarySi": "CPU සංරචක (ALU, CU, රෙජිස්ටර), ඔරලෝසු වේගය, උපදෙස් චක්‍රය, වාරික මතකය, ආදාන/ප්‍රතිදාන උපාංග, මතක ධූරාවලිය සහ කෙවෙනි.",
      "blocks": [
        {
          "id": "b-g10-u2-4-1",
          "en": "Central Processing Unit (CPU) Core Architecture:\nOften hailed as the **Brain of the computer**, the CPU executes commands, runs the OS, and coordinates application software.\n\n* **Three Main Internal Units:**\n  1. **Arithmetic and Logical Unit - ALU (අංක ගණිතමය හා තාර්කික ඒකකය):** Performs arithmetic (+, -, *, /) and logical decisions (=, <, >, <=, >=, !=, AND, OR, NOT).\n  2. **Control Unit - CU (පාලන ඒකකය):** Directs and orchestrates all hardware devices, decodes instructions, and transmits timing signals.\n  3. **Memory Registers (රෙජිස්තර):** Smallest capacity, ultra high-speed storage locations situated directly inside the CPU silicon die to temporarily hold immediate data for the ALU.",
          "si": "මධ්‍ය සැකසුම් ඒකකය (CPU) සහ අභ්‍යන්තර සංරචක:\nපරිගණකයේ **මොළය** ලෙස හඳුන්වනු ලබන මධ්‍ය සැකසුම් ඒකකය විධානයන්ට අනුව ක්‍රියාත්මක වන අතර මෙහෙයුම් පද්ධතිය සහ යෙදවුම් මෘදුකාංග හසුරුවයි.\n\n* **ප්‍රධාන අභ්‍යන්තර කොටස් 3:**\n  1. **අංක ගණිතමය හා තාර්කික ඒකකය (ALU):** සියලු වර්ගයේ ගණිතමය (+, -, *, /) සහ තාර්කික සංසන්දන සිදු කරයි.\n  2. **පාලන ඒකකය (CU):** පරිගණකයේ සියලුම උපාංග පාලනය කරමින් නියමිත පිළිවෙළට ක්‍රියාත්මක වීමට පාලන සංඥා නිකුත් කරයි.\n  3. **රෙජිස්ටර (Memory Registers):** CPU තුළම පිහිටි, කුඩාම ධාරිතාවයකින් යුත්, උපරිම වේගවත් තාවකාලික මතක කුටි වේ.",
          "highlightTerm": "CPU Core Architecture"
        },
        {
          "id": "b-g10-u2-4-2",
          "en": "CPU Clock Speed & Machine Execution Cycle:\n* **System Clock Speed:** Measured in **Hertz (Hz)**, **Megahertz (MHz = 10⁶ Hz)**, and **Gigahertz (GHz = 10⁹ Hz)**.\n* **4-Stage Machine Execution Cycle:**\n  1. **Fetch (ලබා ගැනීම):** Fetch instruction from RAM/Cache into CPU registers.\n  2. **Decode (විකේතනය කිරීම):** Control Unit decodes instruction into micro-signals.\n  3. **Execute (ක්‍රියාත්මක කිරීම):** ALU executes the mathematical calculation or logic branch.\n  4. **Store (තැන්පත් කිරීම):** The output is stored back in registers or primary memory.",
          "si": "පද්ධති ඔරලෝසුව සහ උපදෙස් ක්‍රියාත්මක කිරීමේ චක්‍රය:\n* **ඔරලෝසු වේගය:** මනිනු ලබන්නේ **හර්ට්ස් (Hz)**, **මෙගාහර්ට්ස් (MHz = 10⁶ Hz)**, සහ **ගිගාහර්ට්ස් (GHz = 10⁹ Hz)** යන ඒකක වලිනි.\n* **උපදෙස් ක්‍රියාත්මක කිරීමේ චක්‍රයේ පියවර 4:**\n  1. **ලබා ගැනීම (Fetch):** උපදෙස් ප්‍රධාන මතකයෙන් CPU රෙජිස්ටර වෙත ලබා ගැනීම.\n  2. **විකේතනය (Decode):** පාලන ඒකකය මඟින් උපදෙස විදුලි සංඥා බවට තේරුම් ගැනීම.\n  3. **ක්‍රියාත්මක කිරීම (Execute):** ALU මඟින් ගණනය කිරීම හෝ තාර්කික ක්‍රියාව සිදු කිරීම.\n  4. **තැන්පත් කිරීම (Store):** ලැබුණු ප්‍රතිඵලය රෙජිස්ටරයේ හෝ ප්‍රධාන මතකයේ තැන්පත් කිරීම.",
          "highlightTerm": "CPU Clock Speed & Machine Cycle"
        },
        {
          "id": "b-g10-u2-4-3",
          "en": "Cache Memory Mechanism & Memory Hierarchy:\n* **Cache Memory (වාරික මතකය):** High-speed volatile memory acting as the buffer/mediator between the ultra-fast CPU and slower Primary Memory (RAM). Frequently accessed instructions are kept in cache to eliminate processor waiting bottlenecks.\n* **Access Flow:** Step 1: CPU queries Cache ➔ Step 2: Cache Hit (data supplied at full bus speed) ➔ Step 3: Cache Miss (CPU queries RAM) ➔ Step 4: Data copied from RAM to Cache and delivered to CPU.\n* **Access Speed Hierarchy:** Registers > Cache Memory > RAM > ROM > Solid State (SSD) > Hard Disk (HDD) > Optical Disks > Magnetic Tape.",
          "si": "වාරික මතකය සහ මතක ධූරාවලිය:\n* **වාරික මතකය (Cache Memory):** CPU සහ ප්‍රධාන මතකය (RAM) අතර අතරමැදියා ලෙස ක්‍රියා කරන අධිවේගී මතකයයි. නිතර භාවිත වන උපදෙස් මෙහි රඳවා තබා ගනී.\n* **දත්ත ලබා ගැනීමේ පියවර:** පියවර 1: CPU විසින් කෑෂ් මතකය පරීක්ෂා කරයි ➔ පියවර 2: දත්ත තිබේ නම් (Cache Hit) ක්ෂණිකව ලබා ගනී ➔ පියවර 3: දත්ත නැතිනම් (Cache Miss) RAM මතකයට යයි ➔ පියවර 4: RAM වෙතින් කෑෂ් මතකයට පිටපත් කර CPU වෙත සපයයි.\n* **ප්‍රවේශ වේග ධූරාවලිය:** රෙජිස්ටර > කෑෂ් මතකය > RAM > ROM > SSD > දෘඪ තැටිය (HDD) > ප්‍රකාශ තැටි (CD/DVD) > චුම්බක පටි.",
          "highlightTerm": "Cache Memory & Hierarchy"
        },
        {
          "id": "b-g10-u2-4-4",
          "en": "Primary Memory vs Secondary Storage Media:\n* **Primary Memory (ප්‍රධාන මතකය):** Directly accessible by CPU.\n  - **RAM (Random Access Memory):** Volatile, temporary read-write memory holding active programs and working data. Data lost when powered off.\n  - **ROM (Read Only Memory):** Non-volatile, permanent memory containing boot firmware (**BIOS - Basic Input Output System**).\n* **Secondary Storage (ද්විතීයික ආචයනය):** Permanent non-volatile storage.\n  - **Magnetic Media:** Hard Disk Drive (HDD), Magnetic Tape (long-term archive backups).\n  - **Optical Media:** CD (~700MB), DVD (~4.7GB), Blu-ray (25GB - 50GB). Uses laser beam technology.\n  - **Solid State Media:** USB Flash Drives, SD memory cards, Solid State Drives (SSD). No moving parts; durable and fast.",
          "si": "ප්‍රාථමික මතකය සහ ද්විතීයික ආචයනය:\n* **ප්‍රධාන මතකය (Primary Memory):** CPU වෙත සෘජුව සම්බන්ධ වේ.\n  - **RAM:** විදුලිය විසන්ධි වූ විට දත්ත මැකී යන (Volatile), කියවිය හැකි හා ලිවිය හැකි තාවකාලික මතකයයි.\n  - **ROM:** විදුලිය විසන්ධි වුවද දත්ත නොමැකෙන (Non-volatile), පරිගණකය ආරම්භ කරන **BIOS** උපදෙස් සහිත ස්ථිර මතකයයි.\n* **ද්විතීයික ආචයනය (Secondary Storage):** දත්ත ස්ථිරව සුරැකීමට යොදාගනී.\n  - **චුම්බක මාධ්‍ය:** දෘඪ තැටිය (HDD), චුම්බක පටි (බැකප් පිටපත් සඳහා).\n  - **ප්‍රකාශ මාධ්‍ය:** CD (~700MB), DVD (~4.7GB), Blu-ray (25GB - 50GB). ලේසර් කිරණ භාවිත කරයි.\n  - **ඝන තත්ත්වයේ මාධ්‍ය (SSD):** චලනය වන කොටස් නැත; USB ෆ්ලෑෂ් ඩ්‍රයිව්, SSD.",
          "highlightTerm": "Primary vs Secondary Storage"
        },
        {
          "id": "b-g10-u2-4-5",
          "en": "Input/Output Devices & Ports:\n* **Input Devices:** Keyboard, Mouse, Barcode Reader, MICR (bank cheques), OCR (printed text to editable digital text), OMR (evaluating MCQ sheets), Scanner, Touchscreen.\n* **Output Devices:** Visual Display Units (CRT, LCD, LED), Printers (Dot Matrix - impact/ribbon; Inkjet - liquid spray; Thermal - POS/ATM paper; Laser - toner powder), Plotters (architectural blueprints).\n* **Computer Ports:**\n  - **VGA (15-pin):** Transmits **analog video only**.\n  - **HDMI (19-pin):** Transmits **digital high-definition video AND multi-channel audio simultaneously**.\n  - **USB:** High-speed universal serial bus for peripherals.\n  - **RJ-45 (Ethernet):** Connects twisted-pair cables to Local Area Networks (LAN).\n  - **Audio 3.5mm:** Green = Headphones/Audio Out, Pink = Microphone In.",
          "si": "ආදාන/ප්‍රතිදාන උපාංග සහ කෙවෙනි:\n* **ආදාන උපාංග:** යතුරුපුවරුව, මූසිකය, තීරු කේත කියවනය, MICR (බැංකු චෙක්පත්), OCR (මුද්‍රිත අකුරු ඩිජිටල් පෙළ බවට පත් කිරීම), OMR (MCQ පිළිතුරු පත්‍ර ඇගයීම), ස්කෑනරය.\n* **ප්‍රතිදාන උපාංග:** පරිගණක තිර (CRT, LCD, LED), මුද්‍රණ යන්ත්‍ර (තිත් න්‍යාස, තීන්ත විදුම්, තාප - ATM/POS බිල්පත්, ලේසර්), ප්ලෝටර් (ඉංජිනේරු සැලසුම් ඇඳීමට).\n* **පරිගණක කෙවෙනි (Ports):**\n  - **VGA (කෙවෙනි 15):** **ප්‍රතිසම වීඩියෝ සංඥා පමණක්** සම්ප්‍රේෂණය කරයි.\n  - **HDMI (කෙවෙනි 19):** **ඩිජිටල් වීඩියෝ සහ ශ්‍රව්‍ය (Audio) යන දෙකම එකවර** සම්ප්‍රේෂණය කරයි.\n  - **USB:** විවිධ බාහිර උපාංග සම්බන්ධ කරන විශ්ව අනුක්‍රමික බසය.\n  - **RJ-45 (Ethernet):** LAN ජාල කේබල් සම්බන්ධ කරන ජාල කෙවෙනිය.\n  - **ශ්‍රව්‍ය කෙවෙනි:** කොළ = හෙඩ්ෆෝන්, රෝස = මයික්‍රෆෝනය.",
          "highlightTerm": "Input/Output Devices & Ports"
        }
      ],
      "tableData": {
        "headers": [
          {
            "en": "Port / Component",
            "si": "කෙවෙනිය / උපාංගය"
          },
          {
            "en": "Signal Standard",
            "si": "සංඥා ප්‍රමිතිය"
          },
          {
            "en": "O/L Exam Focus",
            "si": "විභාග විශේෂත්වය"
          }
        ],
        "rows": [
          {
            "comp": {
              "en": "VGA Port",
              "si": "VGA කෙවෙනිය"
            },
            "standard": {
              "en": "15-pin D-Sub (Analog Video Only)",
              "si": "15-පින් (ප්‍රතිසම වීඩියෝ පමණි)"
            },
            "focus": {
              "en": "Does NOT carry audio; visual projector/monitor only",
              "si": "ශබ්දය සම්ප්‍රේෂණය නොකරයි; වීඩියෝ පමණි"
            }
          },
          {
            "comp": {
              "en": "HDMI Port",
              "si": "HDMI කෙවෙනිය"
            },
            "standard": {
              "en": "19-pin Digital (Video + Multi-channel Audio)",
              "si": "ඩිජිටල් (වීඩියෝ + ශ්‍රව්‍ය එකවර)"
            },
            "focus": {
              "en": "Transmits uncompressed high-def video AND audio over 1 cable",
              "si": "වීඩියෝ සහ ශ්‍රව්‍ය යන දෙකම එකම කේබලයකින්"
            }
          },
          {
            "comp": {
              "en": "MICR",
              "si": "MICR කියවනය"
            },
            "standard": {
              "en": "Magnetic Ink Character Recognition",
              "si": "චුම්බක තීන්ත අනුලක්ෂණ කියවීම"
            },
            "focus": {
              "en": "Authenticates bank cheque routing numbers",
              "si": "බැංකු චෙක්පත් වල අංක කියවීමට යොදාගනී"
            }
          },
          {
            "comp": {
              "en": "OMR",
              "si": "OMR කියවනය"
            },
            "standard": {
              "en": "Optical Mark Recognition",
              "si": "ප්‍රකාශ සලකුණු කියවීම"
            },
            "focus": {
              "en": "Automated grading of shaded MCQ answer sheets",
              "si": "MCQ පිළිතුරු පත්‍ර ස්වයංක්‍රීයව ලකුණු කිරීමට"
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g10-u2-4",
        "questionEn": "Which computer port transmits high-definition digital video and multi-channel audio simultaneously through a single cable?",
        "questionSi": "තනි කේබලයක් හරහා අධි-විභේදන ඩිජිටල් වීඩියෝ සහ ශ්‍රව්‍ය (Audio) යන දෙකම එකවර සම්ප්‍රේෂණය කරන්නේ කුමන කෙවෙනිය මඟින්ද?",
        "options": [
          {
            "id": "1",
            "en": "HDMI Port",
            "si": "HDMI කෙවෙනිය"
          },
          {
            "id": "2",
            "en": "VGA Port",
            "si": "VGA කෙවෙනිය"
          },
          {
            "id": "3",
            "en": "Serial Port",
            "si": "අනුක්‍රමික කෙවෙනිය (Serial Port)"
          },
          {
            "id": "4",
            "en": "Parallel Port",
            "si": "සමාන්තර කෙවෙනිය (Parallel Port)"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "HDMI (High-Definition Multimedia Interface) transmits high-definition video AND audio simultaneously, whereas VGA transmits analog video only.",
        "explanationSi": "HDMI කෙවෙනිය මඟින් ඩිජිටල් වීඩියෝ සහ ශ්‍රව්‍ය යන දෙකම එකවර සම්ප්‍රේෂණය කරයි (VGA මඟින් වීඩියෝ පමණි)."
      }
    }
  ],
  "glossary": [
    {
      "termEn": "Central Processing Unit (CPU)",
      "termSi": "මධ්‍ය සැකසුම් ඒකකය (CPU)",
      "definitionEn": "The primary electronic circuitry that executes instructions comprising a computer program.",
      "definitionSi": "පරිගණක වැඩසටහන් උපදෙස් ක්‍රියාත්මක කරන ප්‍රධාන විද්‍යුත් පරිපථ ඒකකයයි."
    },
    {
      "termEn": "Arithmetic and Logical Unit (ALU)",
      "termSi": "අංක ගණිතමය හා තාර්කික ඒකකය (ALU)",
      "definitionEn": "Sub-unit of the CPU that carries out arithmetic calculations and logical decisions.",
      "definitionSi": "ගණිතමය ගණනය කිරීම් සහ තාර්කික සංසන්දනයන් සිදු කරන CPU කොටසයි."
    },
    {
      "termEn": "Control Unit (CU)",
      "termSi": "පාලන ඒකකය (CU)",
      "definitionEn": "Component of the processor that directs and coordinates operations of all computer devices.",
      "definitionSi": "පරිගණකයේ සියලුම උපාංගයන්හි ක්‍රියාකාරිත්වය මෙහෙයවන හා පාලනය කරන ඒකකයයි."
    },
    {
      "termEn": "Memory Registers",
      "termSi": "රෙජිස්ටර (Memory Registers)",
      "definitionEn": "Ultra-fast temporary storage locations located inside the CPU silicon die.",
      "definitionSi": "CPU තුළම පිහිටි උපරිම වේගවත් තාවකාලික මතක කුටි වේ."
    },
    {
      "termEn": "Cache Memory",
      "termSi": "වාරික මතකය (Cache Memory)",
      "definitionEn": "High-speed volatile buffer memory situated between CPU and RAM to store frequently used instructions.",
      "definitionSi": "CPU සහ RAM අතර පිහිටි නිතර භාවිත වන දත්ත තබා ගන්නා අධිවේගී මතකයයි."
    },
    {
      "termEn": "Random Access Memory (RAM)",
      "termSi": "සසම්භාවී පිවිසුම් මතකය (RAM)",
      "definitionEn": "Volatile, read-write primary memory holding active operating system components and user programs.",
      "definitionSi": "විදුලිය විසන්ධි වූ විට මැකී යන, ක්‍රියාත්මක වැඩසටහන් රඳවන ප්‍රධාන මතකයයි."
    },
    {
      "termEn": "Read Only Memory (ROM)",
      "termSi": "පඨන මාත්‍ර මතකය (ROM)",
      "definitionEn": "Non-volatile primary memory holding permanent startup firmware (BIOS).",
      "definitionSi": "විදුලිය විසන්ධි වුවද නොමැකෙන, පරිගණකය ආරම්භක BIOS උපදෙස් අඩංගු මතකයයි."
    },
    {
      "termEn": "System Bus",
      "termSi": "පද්ධති බසය (System Bus)",
      "definitionEn": "Parallel electrical communication channels divided into Data, Address, and Control buses.",
      "definitionSi": "දත්ත, ලිපින සහ පාලන බස් මාර්ග වලින් සමන්විත සන්නිවේදන රැහැන් පද්ධතියයි."
    },
    {
      "termEn": "HDMI Port",
      "termSi": "HDMI කෙවෙනිය",
      "definitionEn": "High-Definition Multimedia Interface transmitting uncompressed digital video and multi-channel audio.",
      "definitionSi": "ඩිජිටල් වීඩියෝ සහ ශ්‍රව්‍ය යන දෙකම එකවර සම්ප්‍රේෂණය කරන කෙවෙනියයි."
    },
    {
      "termEn": "VGA Port",
      "termSi": "VGA කෙවෙනිය",
      "definitionEn": "15-pin analog video interface transmitting display signals without audio.",
      "definitionSi": "ශබ්දය රහිතව ප්‍රතිසම වීඩියෝ සංඥා පමණක් සම්ප්‍රේෂණය කරන 15-පින් කෙවෙනියයි."
    }
  ],
  "pastPaperQuestions": [
    {
      "id": "pp-g10-u2-2020-1",
      "year": 2020,
      "paperType": "Paper I",
      "unitId": "g10-u2",
      "unitNumber": 2,
      "unitTitleEn": "The Computer System & System Components",
      "unitTitleSi": "පරිගණක පද්ධතිය සහ පද්ධති සංරචක",
      "type": "mcq",
      "badgeText": "2020 O/L Paper I - Question 01",
      "questionEn": "Which of the following contains only input devices?",
      "questionSi": "පහත දැක්වෙන ඒවායින් ආදාන උපාංග පමණක් අඩංගු වන්නේ කුමක ද?",
      "options": [
        {
          "id": "1",
          "en": "Multimedia projector, Printer, Keyboard, Mouse",
          "si": "බහුමාධ්‍ය ප්‍රක්ෂේපකය, මුද්‍රකය, යතුරුපුවරුව, මූසිකය"
        },
        {
          "id": "2",
          "en": "Printer, Keyboard, Touch screen, Joystick",
          "si": "මුද්‍රකය, යතුරුපුවරුව, ස්පර්ශ තිරය, ජෝයිස්ටික්"
        },
        {
          "id": "3",
          "en": "Monitor, Light pen, Multimedia projector, Keyboard",
          "si": "මොනිටරය, ආලෝක පෑන, බහුමාධ්‍ය ප්‍රක්ෂේපකය, යතුරුපුවරුව"
        },
        {
          "id": "4",
          "en": "Mouse, Keyboard, Light pen, Joystick",
          "si": "මූසිකය, යතුරුපුවරුව, ආලෝක පෑන, ජෝයිස්ටික්"
        }
      ],
      "correctOptionId": "4",
      "markingRubricEn": [],
      "markingRubricSi": [],
      "explanationEn": "Verbatim official examination question from 2020 O/L Paper I - Question 01.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper I - Question 01."
    },
    {
      "id": "pp-g10-u2-2021-2",
      "year": 2021,
      "paperType": "Paper I",
      "unitId": "g10-u2",
      "unitNumber": 2,
      "unitTitleEn": "The Computer System & System Components",
      "unitTitleSi": "පරිගණක පද්ධතිය සහ පද්ධති සංරචක",
      "type": "mcq",
      "badgeText": "2021 O/L Paper I - Question 02",
      "questionEn": "Which of the following group consists of only input devices?",
      "questionSi": "පහත සඳහන් කවරක් ආදාන උපාංග පමණක් අඩංගු කාණ්ඩයක් වේ ද?",
      "options": [
        {
          "id": "1",
          "en": "Barcode Reader, CRT Monitor, Joystick",
          "si": "තීරු කේත කියවනය, CRT මොනිටරය, ජෝයිස්ටික්"
        },
        {
          "id": "2",
          "en": "Barcode Reader, Plotter, Webcam",
          "si": "තීරු කේත කියවනය, ප්ලෝටරය, වෙබ් කැමරාව"
        },
        {
          "id": "3",
          "en": "Keyboard, Mouse, Scanner",
          "si": "යතුරු පුවරුව, මූසිකය, ස්කෑනරය"
        },
        {
          "id": "4",
          "en": "Multimedia Projector, Printer, Scanner",
          "si": "බහු-මාධ්‍ය ප්‍රක්ෂේපකය, මුද්‍රකය, ස්කෑනරය"
        }
      ],
      "correctOptionId": "3",
      "markingRubricEn": [],
      "markingRubricSi": [],
      "explanationEn": "Verbatim official examination question from 2021 O/L Paper I - Question 02.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2021 O/L Paper I - Question 02."
    },
    {
      "id": "pp-g10-u2-2021-3",
      "year": 2021,
      "paperType": "Paper II",
      "unitId": "g10-u2",
      "unitNumber": 2,
      "unitTitleEn": "The Computer System & System Components",
      "unitTitleSi": "පරිගණක පද්ධතිය සහ පද්ධති සංරචක",
      "type": "structured",
      "badgeText": "2021 O/L Paper II - Question 01 (i)",
      "questionEn": "1. (i) A school intends to record teacher attendance using a fingerprint scanner connected to a computer system. The system generates a monthly attendance report.\n  Write down one example for input and one example for output in the above information system.",
      "questionSi": "1. (i) එක්තරා පාසලක ගුරුවරු පරිගණක පද්ධතියකට සම්බන්ධ කර ඇති ඇඟිලි සලකුණු යන්ත්‍රයක් භාවිතයෙන් පැමිණීම සටහන් කිරීමට අපේක්ෂා කරති. මෙම පද්ධතිය මගින් මාසිකව පැමිණීමේ වාර්තාවක් ජනනය කරයි.\n  ඉහත තොරතුරු පද්ධතියේ ආදානයක් සඳහා එක් උදාහරණයක් සහ ප්‍රතිදානයක් සඳහා එක් උදාහරණයක් ලියන්න.",
      "options": [],
      "correctOptionId": "1",
      "sampleAnswerEn": "- Input: Fingerprint scan / teacher fingerprint data.\n  - Output: Monthly teacher attendance report / attendance summary sheet.",
      "sampleAnswerSi": "- Input: Fingerprint scan / teacher fingerprint data.\n  - Output: Monthly teacher attendance report / attendance summary sheet.",
      "markingRubricEn": [
        "- Input: Fingerprint scan / teacher fingerprint data.\n  - Output: Monthly teacher attendance report / attendance summary sheet."
      ],
      "markingRubricSi": [
        "- Input: Fingerprint scan / teacher fingerprint data.\n  - Output: Monthly teacher attendance report / attendance summary sheet."
      ],
      "explanationEn": "Verbatim official examination question from 2021 O/L Paper II - Question 01 (i).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2021 O/L Paper II - Question 01 (i)."
    },
    {
      "id": "pp-g10-u2-2022-4",
      "year": 2022,
      "paperType": "Paper I",
      "unitId": "g10-u2",
      "unitNumber": 2,
      "unitTitleEn": "The Computer System & System Components",
      "unitTitleSi": "පරිගණක පද්ධතිය සහ පද්ධති සංරචක",
      "type": "mcq",
      "badgeText": "2022 O/L Paper I - Question 02",
      "questionEn": "Which of the following lists only output devices?",
      "questionSi": "පහත දක්වා ඇති ලැයිස්තු අතුරින් ප්‍රතිදාන උපාංග පමණක් දක්වා ඇති ලැයිස්තුව කුමක්ද?",
      "options": [
        {
          "id": "1",
          "en": "Barcode reader, magnetic ink character reader, scanner",
          "si": "තීරු කේත කියවනය, චුම්බක තීන්ත අනුලක්ෂණ කියවනය, ස්කෑනරය"
        },
        {
          "id": "2",
          "en": "Joystick, microphone, webcam",
          "si": "ජෝයිස්ටික්, මයික්‍රෆෝනය, වෙබ් කැමරාව"
        },
        {
          "id": "3",
          "en": "Keyboard, light pen, mouse",
          "si": "යතුරු පුවරුව, ආලෝක පෑන, මූසිකය"
        },
        {
          "id": "4",
          "en": "Plotter, projector, speaker",
          "si": "ප්ලෝටරය, ප්‍රක්ෂේපකය, ස්පීකරය"
        }
      ],
      "correctOptionId": "4",
      "markingRubricEn": [],
      "markingRubricSi": [],
      "explanationEn": "Verbatim official examination question from 2022 O/L Paper I - Question 02.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2022 O/L Paper I - Question 02."
    },
    {
      "id": "pp-g10-u2-2022-5",
      "year": 2022,
      "paperType": "Paper I",
      "unitId": "g10-u2",
      "unitNumber": 2,
      "unitTitleEn": "The Computer System & System Components",
      "unitTitleSi": "පරිගණක පද්ධතිය සහ පද්ධති සංරචක",
      "type": "mcq",
      "badgeText": "2022 O/L Paper I - Question 03",
      "questionEn": "The device similar to the one shown is usually used by Architects who design buildings. What is it?",
      "questionSi": "රූපයේ දැක්වෙන ආකාරයේ උපාංගයක් සාමාන්‍යයෙන් ගොඩනැගිලි සැලසුම් කරන ගෘහ නිර්මාණ ශිල්පීන් විසින් භාවිත කරනු ලබයි. එම උපාංගය කුමක්ද?",
      "options": [
        {
          "id": "1",
          "en": "Dotmatrix printer",
          "si": "තිත් න්‍යාස මුද්‍රකය"
        },
        {
          "id": "2",
          "en": "Inkjet printer",
          "si": "තීන්ත විදුම් මුද්‍රකය"
        },
        {
          "id": "3",
          "en": "Multimedia projector",
          "si": "බහුමාධ්‍ය ප්‍රක්ෂේපකය"
        },
        {
          "id": "4",
          "en": "Plotter",
          "si": "ප්ලෝටරය"
        }
      ],
      "correctOptionId": "4",
      "markingRubricEn": [],
      "markingRubricSi": [],
      "explanationEn": "Verbatim official examination question from 2022 O/L Paper I - Question 03.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2022 O/L Paper I - Question 03."
    },
    {
      "id": "pp-g10-u2-2023-6",
      "year": 2023,
      "paperType": "Paper I",
      "unitId": "g10-u2",
      "unitNumber": 2,
      "unitTitleEn": "The Computer System & System Components",
      "unitTitleSi": "පරිගණක පද්ධතිය සහ පද්ධති සංරචක",
      "type": "mcq",
      "badgeText": "2023 O/L Paper I - Question 02",
      "questionEn": "Which of the following devices could be used to capture English text from printed documents?",
      "questionSi": "මුද්‍රිත ලේඛනවලින් ඉංග්‍රීසි පාඨ (text) උකහා ගැනීමට පහත කුමන උපාංගය භාවිත කළ හැකි ද?",
      "options": [
        {
          "id": "1",
          "en": "Bar Code Reader",
          "si": "තීරු කේත කියවනය (bar code reader)"
        },
        {
          "id": "2",
          "en": "Magnetic Ink Character Reader (MICR)",
          "si": "චුම්බක තීන්ත අනුලක්ෂණ කියවනය (MICR)"
        },
        {
          "id": "3",
          "en": "Optical Character Recognition (OCR) device",
          "si": "ප්‍රකාශ අක්ෂර සංජානන (OCR) උපාංගය"
        },
        {
          "id": "4",
          "en": "Optical Mark Recognition (OMR) device",
          "si": "ප්‍රකාශ සලකුණු සංජානන (OMR) උපාංගය"
        }
      ],
      "correctOptionId": "3",
      "markingRubricEn": [],
      "markingRubricSi": [],
      "explanationEn": "Verbatim official examination question from 2023 O/L Paper I - Question 02.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2023 O/L Paper I - Question 02."
    },
    {
      "id": "pp-g10-u2-2020-7",
      "year": 2020,
      "paperType": "Paper I",
      "unitId": "g10-u2",
      "unitNumber": 2,
      "unitTitleEn": "The Computer System & System Components",
      "unitTitleSi": "පරිගණක පද්ධතිය සහ පද්ධති සංරචක",
      "type": "mcq",
      "badgeText": "2020 O/L Paper I - Question 03",
      "questionEn": "Which of the following represents the units of measurements of data in computer systems in the ascending order of their size?",
      "questionSi": "පරිගණක පද්ධතිවල දත්ත මිනුම් ඒකක, ඒවායේ විශාලත්වයට අනුව ආරෝහණ පටිපාටියට දක්වන්නේ පහත කුමක් මගින් ද?",
      "options": [
        {
          "id": "1",
          "en": "Bit, Byte, Kilobyte, Terabyte",
          "si": "බිටුව, බයිටය, කිලෝබයිටය, ටෙරාබයිටය"
        },
        {
          "id": "2",
          "en": "Byte, Bit, Kilobyte, Terabyte",
          "si": "බයිටය, බිටුව, කිලෝබයිටය, ටෙරාබයිටය"
        },
        {
          "id": "3",
          "en": "Megabyte, Kilobyte, Bit, Byte",
          "si": "මෙගාබයිටය, කිලෝබයිටය, බිටුව, බයිටය"
        },
        {
          "id": "4",
          "en": "Terabyte, Gigabyte, Megabyte, Kilobyte",
          "si": "ටෙරාබයිටය, ගිගාබයිටය, මෙගාබයිටය, කිලෝබයිටය"
        }
      ],
      "correctOptionId": "1",
      "markingRubricEn": [],
      "markingRubricSi": [],
      "explanationEn": "Verbatim official examination question from 2020 O/L Paper I - Question 03.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper I - Question 03."
    },
    {
      "id": "pp-g10-u2-2020-8",
      "year": 2020,
      "paperType": "Paper I",
      "unitId": "g10-u2",
      "unitNumber": 2,
      "unitTitleEn": "The Computer System & System Components",
      "unitTitleSi": "පරිගණක පද්ධතිය සහ පද්ධති සංරචක",
      "type": "mcq",
      "badgeText": "2020 O/L Paper I - Question 04",
      "questionEn": "Which of the following shows the storage devices of a desktop computer in descending order of storage capacity?",
      "questionSi": "මේස පරිගණකයක් තුළ පවතින ආචයන උපාංග (storage devices), ඒවායේ ආචයන ධාරිතාව අනුව අවරෝහණ පටිපාටියට දක්වන්නේ කුමකින් ද?",
      "options": [
        {
          "id": "1",
          "en": "Register, Cache memory, Hard disk",
          "si": "රෙජිස්තර (Registers), නිහිත මතකය (Cache Memory), ආර්ඩ ඩිස්කය"
        },
        {
          "id": "2",
          "en": "Hard disk, RAM, Register",
          "si": "ආර්ඩ ඩිස්කය, සසම්භාවී මතක ප්‍රවේශය (RAM), රෙජිස්තර"
        },
        {
          "id": "3",
          "en": "RAM, Register, Cache memory",
          "si": "RAM, රෙජිස්තර, නිහිත මතකය"
        },
        {
          "id": "4",
          "en": "RAM, Cache memory, Hard disk",
          "si": "RAM, නිහිත මතකය, ආර්ඩ ඩිස්කය"
        }
      ],
      "correctOptionId": "2",
      "markingRubricEn": [],
      "markingRubricSi": [],
      "explanationEn": "Verbatim official examination question from 2020 O/L Paper I - Question 04.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper I - Question 04."
    },
    {
      "id": "pp-g10-u2-2020-9",
      "year": 2020,
      "paperType": "Paper I",
      "unitId": "g10-u2",
      "unitNumber": 2,
      "unitTitleEn": "The Computer System & System Components",
      "unitTitleSi": "පරිගණක පද්ධතිය සහ පද්ධති සංරචක",
      "type": "mcq",
      "badgeText": "2020 O/L Paper I - Question 05",
      "questionEn": "Which of the following are true about the secondary memory of a computer system?\n  A – Data is not erased even if the computer is switched off\n  B – Solid state devices can be used as secondary memory\n  C – Secondary memory is a part of the CPU memory",
      "questionSi": "පරිගණක පද්ධතියක ද්විතියික මතකය පිළිබඳව පහත දැක්වෙන ප්‍රකාශවලින් කවරක් සත්‍ය වේ ද?\n  A - පරිගණකය ක්‍රියා විරහිත කළ ද දත්ත මැලවී නොයයි\n  B - ඝන තත්ත්වයේ උපාංග (Solid state devices) ද්විතියික මතකය ලෙස භාවිත කළ හැක\n  C - ද්විතියික මතකය යනු CPU මතකයේ කොටසකි",
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
      "correctOptionId": "1",
      "markingRubricEn": [],
      "markingRubricSi": [],
      "explanationEn": "Verbatim official examination question from 2020 O/L Paper I - Question 05.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper I - Question 05."
    },
    {
      "id": "pp-g10-u2-2020-10",
      "year": 2020,
      "paperType": "Paper II",
      "unitId": "g10-u2",
      "unitNumber": 2,
      "unitTitleEn": "The Computer System & System Components",
      "unitTitleSi": "පරිගණක පද්ධතිය සහ පද්ධති සංරචක",
      "type": "structured",
      "badgeText": "2020 O/L Paper II - Question 01 (ii) (a)",
      "questionEn": "1. (ii) Consider the following incomplete statement:\n  Identify the matching term for label A from the list of terms given below:\n  List of terms: {hard disk, systems software, application software, RAM}\n  (a) The ....................A.................... is the primary storage device of desktop computers.",
      "questionSi": "1. (ii) පහත දැක්වෙන අසම්පූර්ණ ප්‍රකාශය සලකා බලන්න:\n  පහත දී ඇති පද ලැයිස්තුවෙන් A ලේබලය සඳහා ගැලපෙන පදය තෝරන්න:\n  පද ලැයිස්තුව: {ආර්ඩ ඩිස්කය, පද්ධති මෘදුකාංග (System software), යෙදුම් මෘදුකාංග (Application software), RAM}\n  (a) මේස පරිගණකවල ප්‍රාථමික ආචයන උපාංගය (primary storage device) ....................A.................... වේ.",
      "options": [],
      "correctOptionId": "1",
      "sampleAnswerEn": "- Label A: RAM (Random Access Memory)",
      "sampleAnswerSi": "- Label A: RAM (Random Access Memory)",
      "markingRubricEn": [
        "- Label A: RAM (Random Access Memory)"
      ],
      "markingRubricSi": [
        "- Label A: RAM (Random Access Memory)"
      ],
      "explanationEn": "Verbatim official examination question from 2020 O/L Paper II - Question 01 (ii) (a).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper II - Question 01 (ii) (a)."
    },
    {
      "id": "pp-g10-u2-2021-11",
      "year": 2021,
      "paperType": "Paper I",
      "unitId": "g10-u2",
      "unitNumber": 2,
      "unitTitleEn": "The Computer System & System Components",
      "unitTitleSi": "පරිගණක පද්ධතිය සහ පද්ධති සංරචක",
      "type": "mcq",
      "badgeText": "2021 O/L Paper I - Question 03",
      "questionEn": "Which of the following cannot be used to permanently store data?",
      "questionSi": "දත්ත ස්ථීර වශයෙන්ම ආචයනය (store) කිරීම සඳහා පහත සඳහන් දෑ අතුරින් කවරක් භාවිත කළ නොහැකි වන්නේ ද?",
      "options": [
        {
          "id": "1",
          "en": "Hard disk",
          "si": "ආර්ඩ ඩිස්කය"
        },
        {
          "id": "2",
          "en": "Magnetic tape",
          "si": "චුම්බක පටිය (Magnetic tape)"
        },
        {
          "id": "3",
          "en": "Random Access Memory (RAM)",
          "si": "සසම්භාවී ප්‍රවේශ මතකය (RAM)"
        },
        {
          "id": "4",
          "en": "USB Flash Drive",
          "si": "USB සැණෙලි මතකය (USB Flash Drive)"
        }
      ],
      "correctOptionId": "3",
      "markingRubricEn": [],
      "markingRubricSi": [],
      "explanationEn": "Verbatim official examination question from 2021 O/L Paper I - Question 03.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2021 O/L Paper I - Question 03."
    },
    {
      "id": "pp-g10-u2-2021-12",
      "year": 2021,
      "paperType": "Paper I",
      "unitId": "g10-u2",
      "unitNumber": 2,
      "unitTitleEn": "The Computer System & System Components",
      "unitTitleSi": "පරිගණක පද්ධතිය සහ පද්ධති සංරචක",
      "type": "mcq",
      "badgeText": "2021 O/L Paper I - Question 04",
      "questionEn": "Which of the following correctly shows the given storage components of a particular computer system in descending order of their storage capacity?",
      "questionSi": "පරිගණක පද්ධතියක දී ඇති ආචයන (storage) සංරචක ඒවායේ ආචයන ධාරිතාවට අනුව අවරෝහණ පිළිවෙළට නිවැරදිව දක්වන්නේ කුමක්ද?",
      "options": [
        {
          "id": "1",
          "en": "Hard disk, Cache memory, Main memory",
          "si": "ආර්ඩ ඩිස්කය, නිහිත මතකය, ප්‍රධාන මතකය"
        },
        {
          "id": "2",
          "en": "Hard disk, Main memory, Cache memory",
          "si": "ආර්ඩ ඩිස්කය, ප්‍රධාන මතකය, නිහිත මතකය"
        },
        {
          "id": "3",
          "en": "Main memory, Cache memory, Hard disk",
          "si": "ප්‍රධාන මතකය, නිහිත මතකය, ආර්ඩ ඩිස්කය"
        },
        {
          "id": "4",
          "en": "Main memory, Hard disk, Cache memory",
          "si": "ප්‍රධාන මතකය, ආර්ඩ ඩිස්කය, නිහිත මතකය"
        }
      ],
      "correctOptionId": "2",
      "markingRubricEn": [],
      "markingRubricSi": [],
      "explanationEn": "Verbatim official examination question from 2021 O/L Paper I - Question 04.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2021 O/L Paper I - Question 04."
    },
    {
      "id": "pp-g10-u2-2022-13",
      "year": 2022,
      "paperType": "Paper I",
      "unitId": "g10-u2",
      "unitNumber": 2,
      "unitTitleEn": "The Computer System & System Components",
      "unitTitleSi": "පරිගණක පද්ධතිය සහ පද්ධති සංරචක",
      "type": "mcq",
      "badgeText": "2022 O/L Paper I - Question 04",
      "questionEn": "Which of the following lists the correct order of instruction flow when the user executes a computer program?",
      "questionSi": "පරිශීලකයෙකු පරිගණක වැඩසටහනක් ක්‍රියාත්මක කිරීමේදී උපදෙස් ගැලීමේ නිවැරදි පිළිවෙළ දක්වන්නේ පහත සඳහන් කුමක්ද?",
      "options": [
        {
          "id": "1",
          "en": "Hard disk ➔ cache memory ➔ main memory ➔ registers",
          "si": "ආර්ඩ ඩිස්කය ➔ නිහිත මතකය ➔ ප්‍රධාන මතකය ➔ රෙජිස්තර"
        },
        {
          "id": "2",
          "en": "Hard disk ➔ main memory ➔ cache memory ➔ registers",
          "si": "ආර්ඩ ඩිස්කය ➔ ප්‍රධාන මතකය ➔ නිහිත මතකය ➔ රෙජිස්තර"
        },
        {
          "id": "3",
          "en": "Main memory ➔ hard disk ➔ registers ➔ cache memory",
          "si": "ප්‍රධාන මතකය ➔ ආර්ඩ ඩිස්කය ➔ රෙජිස්තර ➔ නිහිත මතකය"
        },
        {
          "id": "4",
          "en": "Registers ➔ hard disk ➔ cache memory ➔ main memory",
          "si": "රෙජිස්තර ➔ ආර්ඩ ඩිස්කය ➔ නිහිත මතකය ➔ ප්‍රධාන මතකය"
        }
      ],
      "correctOptionId": "2",
      "markingRubricEn": [],
      "markingRubricSi": [],
      "explanationEn": "Verbatim official examination question from 2022 O/L Paper I - Question 04.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2022 O/L Paper I - Question 04."
    },
    {
      "id": "pp-g10-u2-2023-14",
      "year": 2023,
      "paperType": "Paper I",
      "unitId": "g10-u2",
      "unitNumber": 2,
      "unitTitleEn": "The Computer System & System Components",
      "unitTitleSi": "පරිගණක පද්ධතිය සහ පද්ධති සංරචක",
      "type": "mcq",
      "badgeText": "2023 O/L Paper I - Question 01",
      "questionEn": "Consider the following hardware specifications of a computer:\n  Which of the following indicates processor speed, cache memory, RAM capacity and number of USB ports respectively?",
      "questionSi": "පරිගණකයක පහත දැක්වෙන දෘඩාංග පිරිවිතර සලකා බලන්න:\n  පිළිවෙළින් ප්‍රොසෙසරයේ වේගය, නිහිත මතකය, RAM ධාරිතාව සහ USB කෙවෙනි සංඛ්‍යාව දක්වන්නේ කුමක්ද?",
      "options": [
        {
          "id": "1",
          "en": "Processor: 16MB, Cache: 3.6 GHz, RAM: 8GB, 4 USB ports",
          "si": "ප්‍රොසෙසරය: 16MB, නිහිත මතකය: 3.6 GHz, RAM: 8GB, 4 USB කෙවෙනි"
        },
        {
          "id": "2",
          "en": "Processor: 8GB, Cache: 16MB, RAM: 3.6 GHz, 8 USB ports",
          "si": "ප්‍රොසෙසරය: 8GB, නිහිත මතකය: 16MB, RAM: 3.6 GHz, 8 USB කෙවෙනි"
        },
        {
          "id": "3",
          "en": "Processor: 3.6 GHz, Cache: 8GB, RAM: 16MB, 6 USB ports",
          "si": "ප්‍රොසෙසරය: 3.6 GHz, නිහිත මතකය: 8GB, RAM: 16MB, 6 USB කෙවෙනි"
        },
        {
          "id": "4",
          "en": "Processor: 3.6 GHz, Cache: 16MB, RAM: 8GB, 8 USB ports",
          "si": "ප්‍රොසෙසරය: 3.6 GHz, නිහිත මතකය: 16MB, RAM: 8GB, 8 USB කෙවෙනි"
        }
      ],
      "correctOptionId": "4",
      "markingRubricEn": [],
      "markingRubricSi": [],
      "explanationEn": "Verbatim official examination question from 2023 O/L Paper I - Question 01.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2023 O/L Paper I - Question 01."
    },
    {
      "id": "pp-g10-u2-2023-15",
      "year": 2023,
      "paperType": "Paper I",
      "unitId": "g10-u2",
      "unitNumber": 2,
      "unitTitleEn": "The Computer System & System Components",
      "unitTitleSi": "පරිගණක පද්ධතිය සහ පද්ධති සංරචක",
      "type": "mcq",
      "badgeText": "2023 O/L Paper I - Question 03",
      "questionEn": "Which of the following is a solid state device?",
      "questionSi": "පහත කුමක් ඝන තත්ත්ව (solid state) උපාංගයක් වේ ද?",
      "options": [
        {
          "id": "1",
          "en": "Compact Disk",
          "si": "සංයුක්ත තැටිය"
        },
        {
          "id": "2",
          "en": "Hard Disk Drive",
          "si": "ආර්ඩ ඩිස්ක් ධාවකය"
        },
        {
          "id": "3",
          "en": "Magnetic Tape Drive",
          "si": "චුම්බක පටි ධාවකය"
        },
        {
          "id": "4",
          "en": "USB Flash Drive",
          "si": "USB සැණෙලි ධාවකය"
        }
      ],
      "correctOptionId": "4",
      "markingRubricEn": [],
      "markingRubricSi": [],
      "explanationEn": "Verbatim official examination question from 2023 O/L Paper I - Question 03.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2023 O/L Paper I - Question 03."
    },
    {
      "id": "pp-g10-u2-2023-16",
      "year": 2023,
      "paperType": "Paper I",
      "unitId": "g10-u2",
      "unitNumber": 2,
      "unitTitleEn": "The Computer System & System Components",
      "unitTitleSi": "පරිගණක පද්ධතිය සහ පද්ධති සංරචක",
      "type": "mcq",
      "badgeText": "2023 O/L Paper I - Question 04",
      "questionEn": "Which of the following executes the instructions of computer programs?",
      "questionSi": "පරිගණක ක්‍රමලේඛවල උපදෙස් (instructions) ක්‍රියාත්මක (execute) කරන්නේ පහත කුමක් ද?",
      "options": [
        {
          "id": "1",
          "en": "Cache",
          "si": "නිහිත මතකය"
        },
        {
          "id": "2",
          "en": "Central Processing Unit (CPU)",
          "si": "මධ්‍ය සැකසුම් ඒකකය (CPU)"
        },
        {
          "id": "3",
          "en": "Hard Disk",
          "si": "ආර්ඩ ඩිස්කය"
        },
        {
          "id": "4",
          "en": "Random Access Memory (RAM)",
          "si": "සසම්භාවී ප්‍රවේශ මතකය (RAM)"
        }
      ],
      "correctOptionId": "2",
      "markingRubricEn": [],
      "markingRubricSi": [],
      "explanationEn": "Verbatim official examination question from 2023 O/L Paper I - Question 04.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2023 O/L Paper I - Question 04."
    },
    {
      "id": "pp-g10-u2-2025-17",
      "year": 2025,
      "paperType": "Paper I",
      "unitId": "g10-u2",
      "unitNumber": 2,
      "unitTitleEn": "The Computer System & System Components",
      "unitTitleSi": "පරිගණක පද්ධතිය සහ පද්ධති සංරචක",
      "type": "mcq",
      "badgeText": "2025 O/L Paper I - Question 03",
      "questionEn": "Even when my computer is off, its operating system, application software and all my data exist in its ________________'",
      "questionSi": "මගේ පරිගණකය ක්‍රියා විරහිත කර ඇති විට පවා එහි මෙහෙයුම් පද්ධතිය, යෙදුම් මෘදුකාංග සහ මගේ සියලු දත්ත එහි ________________ තුළ පවතී.'",
      "options": [
        {
          "id": "1",
          "en": "caches",
          "si": "නිහිත මතකය"
        },
        {
          "id": "2",
          "en": "hard disk",
          "si": "ආර්ඩ ඩිස්කය"
        },
        {
          "id": "3",
          "en": "main memory",
          "si": "ප්‍රධාන මතකය"
        },
        {
          "id": "4",
          "en": "processor",
          "si": "ප්‍රොසෙසරය"
        }
      ],
      "correctOptionId": "2",
      "markingRubricEn": [],
      "markingRubricSi": [],
      "explanationEn": "Verbatim official examination question from 2025 O/L Paper I - Question 03.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2025 O/L Paper I - Question 03."
    },
    {
      "id": "pp-g10-u2-2025-18",
      "year": 2025,
      "paperType": "Paper I",
      "unitId": "g10-u2",
      "unitNumber": 2,
      "unitTitleEn": "The Computer System & System Components",
      "unitTitleSi": "පරිගණක පද්ධතිය සහ පද්ධති සංරචක",
      "type": "mcq",
      "badgeText": "2025 O/L Paper I - Question 07",
      "questionEn": "A USB flash drive has 256 MB of free space. A video file of 0.3 GB, an image file of 300 KB, and a document file of 400 bytes need to be copied to this drive. Which of the following statements is correct?",
      "questionSi": "USB සැණෙලි ධාවකයක 256 MB නොමිලේ ඉඩ ඇත. 0.3 GB වීඩියෝ ගොනුවක්, 300 KB රූප ගොනුවක් සහ බයිට 400 ක ලේඛන ගොනුවක් මෙම ධාවකයට පිටපත් කළ යුතුය. පහත සඳහන් ප්‍රකාශවලින් නිවැරදි වන්නේ කුමක්ද?",
      "options": [
        {
          "id": "1",
          "en": "Only the document file can be copied.",
          "si": "ලේඛන ගොනුව පමණක් පිටපත් කළ හැක."
        },
        {
          "id": "2",
          "en": "Only the image file and the document file can be copied.",
          "si": "රූප ගොනුව සහ ලේඛන ගොනුව පමණක් පිටපත් කළ හැක."
        },
        {
          "id": "3",
          "en": "All three files can be copied.",
          "si": "ගොනු තුනම පිටපත් කළ හැක."
        },
        {
          "id": "4",
          "en": "None of the files can be copied.",
          "si": "කිසිදු ගොනුවක් පිටපත් කළ නොහැක."
        }
      ],
      "correctOptionId": "2",
      "markingRubricEn": [],
      "markingRubricSi": [],
      "explanationEn": "Verbatim official examination question from 2025 O/L Paper I - Question 07.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2025 O/L Paper I - Question 07."
    },
    {
      "id": "pp-g10-u2-2022-19",
      "year": 2022,
      "paperType": "Paper II",
      "unitId": "g10-u2",
      "unitNumber": 2,
      "unitTitleEn": "The Computer System & System Components",
      "unitTitleSi": "පරිගණක පද්ධතිය සහ පද්ධති සංරචක",
      "type": "structured",
      "badgeText": "2022 O/L Paper II - Question 01 (ii)",
      "questionEn": "1. (ii) Four ports of a laptop computer labelled A to D are shown in a diagram.\n  (a) Write down the label of the port that can be used to connect a projector using a VGA cable.\n  (b) Write down the label of the port to which a USB flash drive can be connected to backup important files of the laptop.",
      "questionSi": "1. (ii) උකුළු පරිගණකයක කෙවෙනි (ports) හතරක් A - D දක්වා ලේබල් කර රූපයේ දක්වා ඇත.\n  (a) ප්‍රක්ෂේපකයක් VGA කේබලයකින් සම්බන්ධ කිරීමට යොදාගත හැකි කෙවෙනියේ ලේබලය ලියන්න.\n  (b) උකුළු පරිගණකයේ වැදගත් ගොනු උපස්ථ (backup) කිරීමට USB සැණෙලි ධාවකයක් (flash drive) සම්බන්ධ කළ හැකි කෙවෙනියේ ලේබලය ලියන්න.",
      "options": [],
      "correctOptionId": "1",
      "sampleAnswerEn": "- (a) Port A (VGA port - 15 pin)\n  - (b) Port B (USB port)",
      "sampleAnswerSi": "- (a) Port A (VGA port - 15 pin)\n  - (b) Port B (USB port)",
      "markingRubricEn": [
        "- (a) Port A (VGA port - 15 pin)\n  - (b) Port B (USB port)"
      ],
      "markingRubricSi": [
        "- (a) Port A (VGA port - 15 pin)\n  - (b) Port B (USB port)"
      ],
      "explanationEn": "Verbatim official examination question from 2022 O/L Paper II - Question 01 (ii).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2022 O/L Paper II - Question 01 (ii)."
    }
  ]
};
