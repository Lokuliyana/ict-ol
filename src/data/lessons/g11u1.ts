// Verbatim dual-medium syllabus data extracted from public/lessons
import { GeneralLessonData } from '../allLessonsData';

export const G11_U1_DATA: GeneralLessonData = {
  "id": "g11-u1",
  "grade": "11",
  "unitNumber": 1,
  "titleEn": "Programming, Algorithms & Problem Solving",
  "titleSi": "ක්‍රමලේඛනය, ඇල්ගොරිතම සහ ගැටලු විසඳීම",
  "subtopics": [
    {
      "id": "g11-u1-st-1",
      "number": "1.1",
      "titleEn": "Analysis of a Problem",
      "titleSi": "ගැටලුවක් විශ්ලේෂණය කිරීම",
      "summaryEn": "Problem analysis concepts: identification of Inputs, Processes, Outputs (IPO), and selecting optimal solutions from the solution space.",
      "summarySi": "ගැටලු විශ්ලේෂණ සංකල්ප: ආදානය, සැකසීම, ප්‍රතිදානය (IPO) හඳුනාගැනීම සහ විසඳුම් අවකාශයෙන් සුදුසුම විසඳුම තෝරාගැනීම.",
      "blocks": [
        {
          "id": "b-g11-u1-1-1",
          "en": "Problem Analysis Concept:\nBefore solving a problem using a computer, it is necessary to identify the fundamental components of the problem. Analyzing a problem means systematically identifying its Inputs, Processes, and Outputs.\n\n* **Core IPO Components:**\n  * **Input (දත්ත ආදානය):** The data or raw items required from the user or external sources to solve the problem.\n  * **Process (ක්‍රියාවලිය / ප්‍රක්‍රියාව):** The step-by-step calculations, logic decisions, or transformations performed on inputs to obtain the desired result.\n  * **Output (ප්‍රතිදානය):** The final required result, calculated answer, or meaningful information obtained after processing.\n\n* **IPO Processing Pipeline:**\n[Input (Data)] ➔ [Process (Algorithm / CPU)] ➔ [Output (Information)]",
          "si": "ගැටලුවක් විශ්ලේෂණය කිරීමේ සංකල්පය:\nපරිගණකයක් මගින් ගැටලුවක් විසඳීමට ප්‍රථම එම ගැටලුවේ අඩංගු සංරචක හඳුනා ගැනීම අවශ්‍ය වේ. ගැටලුවක් විශ්ලේෂණය කිරීම යනු එහි ආදානය (Input), ක්‍රියාවලිය (Process) සහ ප්‍රතිදානය (Output) හඳුනා ගැනීමයි.\n\n* **මූලික ආදාන-සැකසුම්-ප්‍රතිදාන සංරචක:**\n  * **ආදානය (Input):** ගැටලුව විසඳීම සඳහා ලබා දෙන දත්ත හෝ අමුද්‍රව්‍ය ආදානය වේ.\n  * **ක්‍රියාවලිය / ප්‍රක්‍රියාව (Process):** ප්‍රතිදානය ලබා ගැනීම සඳහා ආදාන මත සිදු කරන පියවර, ගණනය කිරීම් හෝ රූපාන්තරණයන් ක්‍රියාවලිය වේ.\n  * **ප්‍රතිදානය (Output):** සැකසීමෙන් පසුව ලබා ගන්නා අවසාන අවශ්‍ය ප්‍රතිඵලය හෝ තොරතුරු ප්‍රතිදානය වේ.\n\n* **ආදාන-සැකසුම්-ප්‍රතිදාන ගැලීමේ ආකෘතිය:**\n[ආදානය (දත්ත)] ➔ [ක්‍රියාවලිය (ඇල්ගොරිතමය / CPU)] ➔ [ප්‍රතිදානය (තොරතුරු)]",
          "highlightTerm": "Problem Analysis Concept"
        },
        {
          "id": "b-g11-u1-1-2",
          "en": "Textbook Examples of Problem Analysis:\n\n* **Example 1: Calculating the Area of a Rectangle**\n  * **Input:** Length (`L`), Width (`W`)\n  * **Process:** Area = Length × Width\n  * **Output:** Area\n\n* **Example 2: Calculating Total and Average Marks of a Student**\n  * **Input:** Marks for 3 subjects (`M1`, `M2`, `M3`)\n  * **Process:**\n    - Total = M1 + M2 + M3\n    - Average = Total / 3\n  * **Output:** Total, Average",
          "si": "පෙළපොත් ගැටලු විශ්ලේෂණ උදාහරණ:\n\n* **උදාහරණය 1: සෘජුකෝණාස්‍රයක වර්ගඵලය ගණනය කිරීම**\n  * **ආදානය (Input):** දිග (`L`), පළල (`W`)\n  * **ක්‍රියාවලිය (Process):** වර්ගඵලය = දිග × පළල\n  * **ප්‍රතිදානය (Output):** වර්ගඵලය\n\n* **උදාහරණය 2: ශිෂ්‍යයෙකුගේ එකතුව සහ සාමාන්‍ය ලකුණු ගණනය කිරීම**\n  * **ආදානය (Input):** විෂයයන් 3 හි ලකුණු (`M1`, `M2`, `M3`)\n  * **ක්‍රියාවලිය (Process):**\n    - එකතුව = M1 + M2 + M3\n    - සාමාන්‍යය = එකතුව / 3\n  * **ප්‍රතිදානය (Output):** එකතුව, සාමාන්‍යය",
          "highlightTerm": "Textbook Examples of Problem Analysis"
        },
        {
          "id": "b-g11-u1-1-3",
          "en": "Alternative Solutions & Solution Space:\nA problem can often have more than one valid solution.\n\n* **Solution Space (විසඳුම් අවකාශය):**\n  * The collection of all possible valid solutions to a given problem is known as the **Solution Space**.\n  * Solving a problem effectively involves evaluating the alternatives and selecting the most suitable, resource-friendly, and computationally efficient solution from the solution space.",
          "si": "විකල්ප විසඳුම් සහ විසඳුම් අවකාශය:\nඑක් ගැටලුවක් විසඳීම සඳහා විසඳුම් එකකට වඩා පැවතිය හැක.\n\n* **විසඳුම් අවකාශය (Solution Space):**\n  * දී ඇති ගැටලුවක් සඳහා පැවතිය හැකි සියලුම විසඳුම්වල එකතුව **විසඳුම් අවකාශය** ලෙස හැඳින්වේ.\n  * විසඳුම් අවකාශය අතුරින් අඩු සම්පත් ප්‍රමාණයක් වැයවන, වඩාත්ම සුදුසු සහ කාර්යක්ෂම විසඳුම තෝරා ගැනීම ගැටලු විසඳීමේ දී තීරණාත්මක පියවරකි.",
          "highlightTerm": "Solution Space"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u1-1",
        "questionEn": "What are the three main components identified when analyzing a problem before developing a computer solution?",
        "questionSi": "පරිගණකයක් මඟින් ගැටලුවක් විසඳීමට පෙර එය විශ්ලේෂණය කිරීමේදී හඳුනාගන්නා ප්‍රධාන සංරචක තුන කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Input, Process, Output",
            "si": "ආදානය, ක්‍රියාවලිය, ප්‍රතිදානය"
          },
          {
            "id": "2",
            "en": "Hardware, Software, Firmware",
            "si": "දෘඩාංග, මෘදුකාංග, ස්ථිරාංග"
          },
          {
            "id": "3",
            "en": "Compiler, Interpreter, Assembler",
            "si": "සම්පාදකය, අර්ථවින්‍යාසකය, ඇසෙම්බ්ලරය"
          },
          {
            "id": "4",
            "en": "Bit, Byte, Character",
            "si": "බිටු, බයිට, අක්ෂර"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "Analyzing any computational problem requires identifying its Input (data needed), Process (operations performed), and Output (result obtained).",
        "explanationSi": "ඕනෑම පරිගණක ගැටලුවක් විසඳීමට පෙර එහි ආදානය (අවශ්‍ය දත්ත), ක්‍රියාවලිය (සිදුකරන ගණනය කිරීම්) සහ ප්‍රතිදානය (අවසාන ප්‍රතිඵලය) හඳුනාගත යුතුය."
      }
    },
    {
      "id": "g11-u1-st-2",
      "number": "1.2",
      "titleEn": "Algorithms & Control Structures",
      "titleSi": "ඇල්ගොරිතම සහ පාලන ව්‍යුහ",
      "summaryEn": "Algorithm characteristics (Definiteness, Finiteness, Input/Output, Effectiveness) and the 3 control structures (Sequence, Selection, Repetition).",
      "summarySi": "ඇල්ගොරිතම ලක්ෂණ (පැහැදිලි බව, නිමා වන බව, ආදාන/ප්‍රතිදාන, ඵලදායී බව) සහ ප්‍රධාන පාලන ව්‍යුහ 3 (අනුක්‍රමය, තේරීම, පුනරාවර්තනය).",
      "blocks": [
        {
          "id": "b-g11-u1-2-1",
          "en": "What is an Algorithm?:\nAn algorithm is a step-by-step sequence of unambiguous instructions designed to solve a specific problem in a finite amount of time.\n\n* **The 4 Fundamental Characteristics of a Good Algorithm:**\n  * **Definiteness (පැහැදිලි බව):** Each step must be precise, clear, and unambiguous with no room for confusion.\n  * **Finiteness (සන්තතික බව / නිමා වන බව):** The algorithm must terminate after a finite, countable number of steps.\n  * **Input & Output (ආදානය හා ප්‍රතිදානය):** Accepts zero or more clearly defined inputs and produces at least one meaningful output.\n  * **Effectiveness (ඵලදායී බව):** Every instruction must be feasible and simple enough to be executed accurately using basic operations.",
          "si": "ඇල්ගොරිතමයක් යනු කුමක්ද?:\nඇල්ගොරිතමයක් යනු යම් නිශ්චිත ගැටලුවක් විසඳීම සඳහා අනුගමනය කළ යුතු පියවරෙන් පියවර උපදෙස් සමූහයක පිළිවෙළයි.\n\n* **හොඳ ඇල්ගොරිතමයක මූලික ලක්ෂණ 4:**\n  * **පැහැදිලි බව (Definiteness):** සෑම පියවරක්ම අපැහැදිලි බවකින් තොරව ඉතා නිශ්චිත හා පැහැදිලි විය යුතුය.\n  * **නිමා වන බව / සන්තතික බව (Finiteness):** ඇල්ගොරිතමය සීමිත පියවර සංඛ්‍යාවකින් අවසන් (Terminate) විය යුතුය.\n  * **ආදාන හා ප්‍රතිදාන (Input & Output):** ශුන්‍යයක් හෝ ඊට වැඩි ආදාන ප්‍රමාණයක් ලබාගෙන අවම වශයෙන් එක් ප්‍රතිදානයක් හෝ නිපදවිය යුතුය.\n  * **ඵලදායී බව (Effectiveness):** සෑම උපදෙසක්ම ප්‍රායෝගිකව ක්‍රියාත්මක කළ හැකි සරල එකක් විය යුතුය.",
          "highlightTerm": "Algorithm & Characteristics"
        },
        {
          "id": "b-g11-u1-2-2",
          "en": "The 3 Fundamental Control Structures:\nAll computer programs and algorithms can be constructed using three basic control structures:\n\n* **1. Sequence (අනුක්‍රමය):**\n  * Instructions are executed one after another in the exact linear order in which they appear, from top to bottom.\n  * *Example:* Read marks ➔ Calculate sum ➔ Print result.\n\n* **2. Selection / Decision (තේරීම / තීරණය):**\n  * A logical condition is evaluated; if the condition is True, one execution path is taken; if False, an alternative path is taken.\n  * *Example:* If marks >= 50, Print \"Pass\", else Print \"Fail\".\n\n* **3. Repetition / Iteration / Loop (පුනරාවර්තනය / ලූප):**\n  * A block of instructions is executed repeatedly as long as a specified condition remains True (or until a condition is satisfied).\n  * *Example:* Repeat reading 10 student marks using a counter loop.",
          "si": "ප්‍රධාන පාලන ව්‍යුහ 3:\nඕනෑම පරිගණක වැඩසටහනක් හෝ ඇල්ගොරිතමයක් මූලික පාලන ව්‍යුහ තුනක් භාවිතයෙන් ගොඩනැගිය හැක:\n\n* **1. අනුක්‍රමය (Sequence):**\n  * උපදෙස් ලියා ඇති අනුපිළිවෙළටම ඉහළ සිට පහළට එකින් එක පිළිවෙළින් ක්‍රියාත්මක වීම.\n  * *උදාහරණ:* ලකුණු ලබාගැනීම ➔ එකතුව සෙවීම ➔ මුද්‍රණය කිරීම.\n\n* **2. තේරීම / තීරණය (Selection / Decision):**\n  * යම් කොන්දේසියක් පරීක්ෂා කර, එම කොන්දේසිය සත්‍ය (True) නම් එක් මඟක්ද, අසත්‍ය (False) නම් වෙනත් විකල්ප මඟක්ද තෝරාගෙන ක්‍රියාත්මක වීම.\n  * *උදාහරණ:* ලකුණු 50 හෝ වැඩි නම් \"Pass\", නැතහොත් \"Fail\" මුද්‍රණය කිරීම.\n\n* **3. පුනරාවර්තනය / ලූප (Repetition / Iteration / Loop):**\n  * යම් කොන්දේසියක් සත්‍යව පවතින තාක් හෝ සත්‍ය වන තෙක් යම් උපදෙස් සමූහයක් නැවත නැවතත් ක්‍රියාත්මක වීම.\n  * *උදාහරණ:* ශිෂ්‍යයන් 10 දෙනෙකුගේ ලකුණු එකතු කිරීම සඳහා ලූපයක් ක්‍රියාත්මක කිරීම.",
          "highlightTerm": "Control Structures"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u1-2",
        "questionEn": "Which characteristic ensures that an algorithm will terminate after a countable number of steps?",
        "questionSi": "ඇල්ගොරිතමයක් සීමිත පියවර සංඛ්‍යාවකින් අවසන් වන බව තහවුරු කරන ලක්ෂණය කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Finiteness",
            "si": "සන්තතික බව (Finiteness)"
          },
          {
            "id": "2",
            "en": "Definiteness",
            "si": "පැහැදිලි බව (Definiteness)"
          },
          {
            "id": "3",
            "en": "Effectiveness",
            "si": "ඵලදායී බව (Effectiveness)"
          },
          {
            "id": "4",
            "en": "Versatility",
            "si": "බහුකාර්ය බව (Versatility)"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "Finiteness guarantees that an algorithm will not run forever and must stop after completing a finite number of steps.",
        "explanationSi": "සන්තතික බව (Finiteness) මඟින් ඇල්ගොරිතමය අසීමිතව නොයන බවත්, සීමිත පියවර ගණනකින් නිමාවට පත්වන බවත් තහවුරු කරයි."
      }
    },
    {
      "id": "g11-u1-st-3",
      "number": "1.3",
      "titleEn": "Representation of Algorithms: Flowcharts & Pseudocode",
      "titleSi": "ඇල්ගොරිතම නිරූපණය: ගැලීම් සටහන් සහ පූර්ව කේත",
      "summaryEn": "Visual flowchart symbols (Terminal, I/O, Process, Decision, Connector, Flow Line) and structured pseudocode rules and standard keywords.",
      "summarySi": "ගැලීම් සටහන් සංකේත (ආරම්භය/අවසානය, ආදාන/ප්‍රතිදාන, ක්‍රියාවලිය, තීරණය, සම්බන්ධකය) සහ පූර්ව කේත රීති හා සම්මත මූලපද.",
      "blocks": [
        {
          "id": "b-g11-u1-3-1",
          "en": "Flowchart Representation:\nA flowchart is a graphical representation of an algorithm using standard geometric symbols connected by directional flowlines.\n\n* **Standard Flowchart Symbols:**\n  * **Terminal (Oval / Rounded Rectangle):** Indicates the Start or End of an algorithm.\n  * **Input / Output (Parallelogram):** Represents reading data input or printing output.\n  * **Process (Rectangle):** Represents arithmetic calculations, data transformations, or variable assignments.\n  * **Decision (Diamond / Rhombus):** Evaluates a condition with multiple exit paths (typically True/False).\n  * **Connector (Circle):** Connects separated flowchart segments without intersecting lines.\n  * **Flow Line (Arrowed Line):** Indicates the sequential direction of execution flow.",
          "si": "ගැලීම් සටහන් නිරූපණය:\nගැලීම් සටහනක් යනු සම්මත ජ්‍යාමිතික හැඩතල සහ දිශානතික රේඛා භාවිතයෙන් ඇල්ගොරිතමයක් රූපමය ආකාරයෙන් නිරූපණය කිරීමයි.\n\n* **සම්මත ගැලීම් සටහන් සංකේත:**\n  * **ප්‍රාරම්භය / අන්තය (Terminal - ඉලිප්සය):** ඇල්ගොරිතමයක ආරම්භය (Start) හෝ අවසානය (Stop/End) සලකුණු කරයි.\n  * **ආදාන / ප්‍රතිදාන (Input/Output - සමාන්තරාස්‍රය):** දත්ත ලබා ගැනීම (Read/Input) හෝ තොරතුරු ප්‍රදර්ශනය (Print/Output) නිරූපණය කරයි.\n  * **ක්‍රියාවලිය (Process - සෘජුකෝණාස්‍රය):** ගණනය කිරීම්, අගයන් පැවරීම් හෝ දත්ත සැකසුම් නිරූපණය කරයි.\n  * **තීරණය (Decision - රොම්බසය):** කොන්දේසි පරීක්ෂා කර True/False මගින් ගැලීමේ දිශාව තීරණය කරයි.\n  * **සම්බන්ධකය (Connector - කුඩා වෘත්තය):** ගැලීම් සටහනක විවිධ කොටස් යා කිරීමට භාවිත කරයි.\n  * **ගැලීම් රේඛාව (Flow Line - ඊතල රේඛාව):** උපදෙස් ක්‍රියාත්මක වන දිශාව පෙන්වයි.",
          "highlightTerm": "Flowchart Symbols"
        },
        {
          "id": "b-g11-u1-3-2",
          "en": "Pseudocode Rules & Standard Keywords:\nPseudocode is an informal, high-level description of an algorithm written in structured natural language resembling programming code without strict syntax rules.\n\n* **Standard Keywords (Capitalized):**\n  * **Start & End:** `BEGIN`, `END`\n  * **Input & Output:** `READ`, `INPUT`, `PRINT`, `WRITE`, `DISPLAY`\n  * **Selection:** `IF`, `THEN`, `ELSE`, `ENDIF`\n  * **Repetition:** `WHILE`, `DO`, `ENDWHILE`, `FOR`, `TO`, `ENDFOR`, `REPEAT`, `UNTIL`\n\n* **Key Formatting Rule:**\n  * Proper indentation must be used to show the scope of control structures and nested logic blocks.",
          "si": "පූර්ව කේත නීති සහ මූලපද:\nපූර්ව කේතයක් (Pseudocode) යනු පරිගණක ක්‍රමලේඛන භාෂාවක ව්‍යුහයට සමාන වන පරිදි සරල භාෂාවෙන් ඇල්ගොරිතමයක් ලිවීමේ ක්‍රමයකි.\n\n* **සම්මත ප්‍රධාන වචන (Keywords):**\n  * **ආරම්භය සහ අවසානය:** `BEGIN`, `END`\n  * **ආදානය සහ ප්‍රතිදානය:** `READ`, `INPUT`, `PRINT`, `WRITE`\n  * **තේරීම:** `IF`, `THEN`, `ELSE`, `ENDIF`\n  * **පුනරාවර්තනය:** `WHILE`, `DO`, `ENDWHILE`, `FOR`, `TO`, `ENDFOR`, `REPEAT`, `UNTIL`\n\n* **ප්‍රධාන රීතිය:**\n  * පාලන ව්‍යුහවල සීමාවන් පැහැදිලිව පෙන්වීම සඳහා නිවැරදිව පේළි ඇතුළට ගැනීම (Indentation) සිදු කළ යුතුය.",
          "highlightTerm": "Pseudocode Rules"
        }
      ],
      "examples": [
        {
          "id": "ex-11-1-3-1",
          "titleEn": "Flowchart Symbols Reference Table",
          "titleSi": "ගැලීම් සටහන් සංකේත සාරාංශය",
          "contentEn": "┌─────────────────────────┬──────────────────────────┬────────────────────────────────────────────────────────┐\n│ Symbol Name             │ Graphical Shape          │ Function / Meaning                                     │\n├─────────────────────────┼──────────────────────────┼────────────────────────────────────────────────────────┤\n│ Terminal                │ Oval / Rounded Rectangle │ Indicates Start or End of an algorithm                 │\n│ Input / Output          │ Parallelogram            │ Reading Input or Printing Output                       │\n│ Process                 │ Rectangle                │ Calculations or Data Assignment                        │\n│ Decision                │ Diamond (Rhombus)        │ Condition Evaluation with True/False paths             │\n│ Connector               │ Circle                   │ Connects sections of a flowchart without line overlap  │\n│ Flow Line               │ Arrow Line               │ Direction of execution flow                            │\n└─────────────────────────┴──────────────────────────┴────────────────────────────────────────────────────────┘",
          "contentSi": "┌─────────────────────────┬──────────────────────────┬────────────────────────────────────────────────────────┐\n│ සංකේතයේ නම             │ ජ්‍යාමිතික හැඩය           │ කාර්යය / අර්ථය                                          │\n├─────────────────────────┼──────────────────────────┼────────────────────────────────────────────────────────┤\n│ ප්‍රාරම්භය / අන්තය       │ ඉලිප්සය                  │ ඇල්ගොරිතමයේ ආරම්භය හෝ අවසානය සලකුණු කරයි               │\n│ ආදාන / ප්‍රතිදාන         │ සමාන්තරාස්‍රය            │ දත්ත ලබාගැනීම හෝ ප්‍රතිඵල ප්‍රදර්ශනය                    │\n│ ක්‍රියාවලිය              │ සෘජුකෝණාස්‍රය             │ ගණනය කිරීම් හෝ අගයන් පැවරීම                            │\n│ තීරණය                  │ රොම්බසය                  │ කොන්දේසි පරීක්ෂාව (True / False)                       │\n│ සම්බන්ධකය               │ කුඩා වෘත්තය              │ ගැලීම් සටහනේ විවිධ කොටස් යා කිරීම                       │\n│ ගැලීම් රේඛාව            │ ඊතල රේඛාව                │ ක්‍රියාත්මක වීමේ දිශාව පෙන්වීම                          │\n└─────────────────────────┴──────────────────────────┴────────────────────────────────────────────────────────┘"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u1-3",
        "questionEn": "Which flowchart symbol is used to represent condition evaluation with branching paths?",
        "questionSi": "කොන්දේසි පරීක්ෂා කර මාර්ග තීරණය කිරීම නිරූපණය කිරීමට භාවිත කරන ගැලීම් සටහන් සංකේතය කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Diamond / Rhombus (Decision)",
            "si": "රොම්බසය (තීරණය)"
          },
          {
            "id": "2",
            "en": "Parallelogram (Input/Output)",
            "si": "සමාන්තරාස්‍රය (ආදාන/ප්‍රතිදාන)"
          },
          {
            "id": "3",
            "en": "Rectangle (Process)",
            "si": "සෘජුකෝණාස්‍රය (ක්‍රියාවලිය)"
          },
          {
            "id": "4",
            "en": "Oval (Terminal)",
            "si": "ඉලිප්සය (ප්‍රාරම්භය/අන්තය)"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "The Diamond (Rhombus) symbol represents Decision points where conditions are tested, resulting in True/False branch paths.",
        "explanationSi": "රොම්බසය (තීරණය) සංකේතය මඟින් කොන්දේසි පරීක්ෂා කර සත්‍ය (True) හෝ අසත්‍ය (False) දිශාවන් ඔස්සේ පාලනය යොමු කරනු ලැබේ."
      }
    },
    {
      "id": "g11-u1-st-4",
      "number": "1.4",
      "titleEn": "Trace Tables / Variable Tracking",
      "titleSi": "හෝඩුවා වගු / විචල්‍ය ලුහුබැඳීමේ වගු",
      "summaryEn": "Trace table structure, variable tracking techniques, step-by-step loop dry-run execution, and logic error detection.",
      "summarySi": "හෝඩුවා වගු ව්‍යුහය, විචල්‍ය ලුහුබැඳීම, පියවරෙන් පියවර ලූප් ධාවනය සහ තර්කන දෝෂ හඳුනාගැනීම.",
      "blocks": [
        {
          "id": "b-g11-u1-4-1",
          "en": "What is a Trace Table?:\nA trace table is a structured testing and debugging technique used to verify algorithm correctness and ensure that no logic errors exist.\n\n* **Purpose & Mechanism:**\n  * It records step-by-step state changes of all variables throughout each iteration or sequential line.\n  * Helps identify off-by-one errors, infinite loops, and incorrect condition statements before writing actual code.\n\n* **Key Tracking Steps:**\n  1. List all variables and loop conditions as table column headers.\n  2. Follow code line by line and update variable values upon assignment.\n  3. Evaluate conditions as True or False to determine loop entry or exit.\n  4. Record final output values displayed upon termination.",
          "si": "හෝඩුවා වගුවක් යනු කුමක්ද?:\nහෝඩුවා වගුවක් (Trace Table) යනු ඇල්ගොරිතමයක තර්කන දෝෂ (Logic Errors) පවතීදැයි පරීක්ෂා කිරීමට සහ නිවැරදි බව තහවුරු කිරීමට භාවිත කරන සටහනකි.\n\n* **අරමුණ සහ ක්‍රියාකාරීත්වය:**\n  * ක්‍රියාත්මක වීමේදී සෑම පියවරකදීම විචල්‍යයන්ගේ අගයන් සිදුවන වෙනස්වීම් පියවරෙන් පියවර ලුහුබඳියි.\n  * කේත ලිවීමට පෙර අසීමිත ලූප (Infinite Loops) හෝ වැරදි කොන්දේසි හඳුනා ගැනීමට උපකාරී වේ.\n\n* **ප්‍රධාන ලුහුබැඳීමේ පියවර:**\n  1. සියලුම විචල්‍යයන් සහ කොන්දේසි වගුවේ තීරු ශීර්ෂ ලෙස සටහන් කිරීම.\n  2. කේතය පේළියෙන් පේළිය කියවා විචල්‍යයන්ගේ අගයන් යාවත්කාලීන කිරීම.\n  3. කොන්දේසි True ද False ද යන්න පරීක්ෂා කර ලූපයෙන් ඉවත් වීම හෝ නැවතීම තීරණය කිරීම.\n  4. තිරය මත දිස්වන අවසාන ප්‍රතිදානය සටහන් කිරීම.",
          "highlightTerm": "Trace Table Concept"
        }
      ],
      "examples": [
        {
          "id": "ex-11-1-4-1",
          "titleEn": "Trace Table Algorithm Execution Example",
          "titleSi": "හෝඩුවා වගු ඇල්ගොරිතම ධාවන උදාහරණය",
          "contentEn": "BEGIN\n    Count = 1\n    Sum = 0\n    WHILE Count <= 3 DO\n      Sum = Sum + Count\n      Count = Count + 1\n    ENDWHILE\n    PRINT Sum\n  END",
          "contentSi": "BEGIN\n    Count = 1\n    Sum = 0\n    WHILE Count <= 3 DO\n      Sum = Sum + Count\n      Count = Count + 1\n    ENDWHILE\n    PRINT Sum\n  END"
        }
      ],
      "tableData": {
        "headers": [
          {
            "en": "Step",
            "si": "පියවර"
          },
          {
            "en": "Count",
            "si": "Count"
          },
          {
            "en": "Sum",
            "si": "Sum"
          },
          {
            "en": "Condition: `Count <= 3`",
            "si": "කොන්දේසිය: `Count <= 3`"
          },
          {
            "en": "Output",
            "si": "ප්‍රතිදානය"
          }
        ],
        "rows": [
          {
            "col0": {
              "en": "Initial",
              "si": "ආරම්භක"
            },
            "col1": {
              "en": "1",
              "si": "1"
            },
            "col2": {
              "en": "0",
              "si": "0"
            },
            "col3": {
              "en": "-",
              "si": "-"
            },
            "col4": {
              "en": "-",
              "si": "-"
            }
          },
          {
            "col0": {
              "en": "Loop 1",
              "si": "ලූපය 1"
            },
            "col1": {
              "en": "1",
              "si": "1"
            },
            "col2": {
              "en": "0",
              "si": "0"
            },
            "col3": {
              "en": "True (1 <= 3)",
              "si": "True (1 <= 3)"
            },
            "col4": {
              "en": "-",
              "si": "-"
            }
          },
          {
            "col0": {
              "en": "Update 1",
              "si": "යාවත්කාලීනය 1"
            },
            "col1": {
              "en": "2",
              "si": "2"
            },
            "col2": {
              "en": "1",
              "si": "1"
            },
            "col3": {
              "en": "-",
              "si": "-"
            },
            "col4": {
              "en": "-",
              "si": "-"
            }
          },
          {
            "col0": {
              "en": "Loop 2",
              "si": "ලූපය 2"
            },
            "col1": {
              "en": "2",
              "si": "2"
            },
            "col2": {
              "en": "1",
              "si": "1"
            },
            "col3": {
              "en": "True (2 <= 3)",
              "si": "True (2 <= 3)"
            },
            "col4": {
              "en": "-",
              "si": "-"
            }
          },
          {
            "col0": {
              "en": "Update 2",
              "si": "යාවත්කාලීනය 2"
            },
            "col1": {
              "en": "3",
              "si": "3"
            },
            "col2": {
              "en": "3",
              "si": "3"
            },
            "col3": {
              "en": "-",
              "si": "-"
            },
            "col4": {
              "en": "-",
              "si": "-"
            }
          },
          {
            "col0": {
              "en": "Loop 3",
              "si": "ලූපය 3"
            },
            "col1": {
              "en": "3",
              "si": "3"
            },
            "col2": {
              "en": "3",
              "si": "3"
            },
            "col3": {
              "en": "True (3 <= 3)",
              "si": "True (3 <= 3)"
            },
            "col4": {
              "en": "-",
              "si": "-"
            }
          },
          {
            "col0": {
              "en": "Update 3",
              "si": "යාවත්කාලීනය 3"
            },
            "col1": {
              "en": "4",
              "si": "4"
            },
            "col2": {
              "en": "6",
              "si": "6"
            },
            "col3": {
              "en": "-",
              "si": "-"
            },
            "col4": {
              "en": "-",
              "si": "-"
            }
          },
          {
            "col0": {
              "en": "Loop 4",
              "si": "ලූපය 4"
            },
            "col1": {
              "en": "4",
              "si": "4"
            },
            "col2": {
              "en": "6",
              "si": "6"
            },
            "col3": {
              "en": "False (4 <= 3 - Loop Exits)",
              "si": "False (4 <= 3 - ලූපයෙන් ඉවත් වේ)"
            },
            "col4": {
              "en": "-",
              "si": "-"
            }
          },
          {
            "col0": {
              "en": "Print Output",
              "si": "ප්‍රතිදානය"
            },
            "col1": {
              "en": "4",
              "si": "4"
            },
            "col2": {
              "en": "6",
              "si": "6"
            },
            "col3": {
              "en": "-",
              "si": "-"
            },
            "col4": {
              "en": "6",
              "si": "6"
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g11-u1-4",
        "questionEn": "What is the primary purpose of constructing a trace table?",
        "questionSi": "හෝඩුවා වගුවක් (Trace Table) ගොඩනැගීමේ ප්‍රධාන අරමුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "To track variable value changes and detect logic errors in an algorithm",
            "si": "විචල්‍යයන්ගේ අගයන් ලුහුබැඳ ඇල්ගොරිතමයක තර්කන දෝෂ හඳුනා ගැනීම"
          },
          {
            "id": "2",
            "en": "To compile high-level code into machine executable binary",
            "si": "උසස් පෙළ කේත යන්ත්‍ර භාෂාව බවට පරිවර්තනය කිරීම"
          },
          {
            "id": "3",
            "en": "To design graphical user interfaces for desktop systems",
            "si": "පරිශීලක අතුරුමුහුණත් සැලසුම් කිරීම"
          },
          {
            "id": "4",
            "en": "To format the database schema into normalized relations",
            "si": "දත්ත සමුදා වගු ප්‍රමිතිකරණය කිරීම"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "A trace table records variable state changes at each step, helping developers detect logic errors and ensure algorithm correctness.",
        "explanationSi": "හෝඩුවා වගුවක් මඟින් සෑම පියවරකදීම විචල්‍යයන්ගේ අගයයන් වෙනස් වන ආකාරය නිරීක්ෂණය කර තර්කන දෝෂ හඳුනාගැනීම සිදු කරයි."
      }
    },
    {
      "id": "g11-u1-st-5",
      "number": "1.5",
      "titleEn": "Evolution of Programming Languages & Translators",
      "titleSi": "ක්‍රමලේඛන භාෂාවල පරිණාමය සහ පරිවර්තක",
      "summaryEn": "The 5 generations of programming languages (1GL to 5GL) and comparison of translators (Assembler, Compiler, Interpreter).",
      "summarySi": "ක්‍රමලේඛන භාෂා පරම්පරා 5 (1GL සිට 5GL දක්වා) සහ භාෂා පරිවර්තක සංසන්දනය (ඇසෙම්බ්ලරය, සම්පාදකය, අර්ථවින්‍යාසකය).",
      "blocks": [
        {
          "id": "b-g11-u1-5-1",
          "en": "The 5 Generations of Programming Languages:\n\n* **1GL - Machine Language (1 වන පරම්පරාව - යන්ත්‍ර භාෂාව):**\n  * Written purely in Binary code (`0`s and `1`s). Machine-dependent and directly executed by the CPU without translation; extremely difficult to write and debug.\n\n* **2GL - Assembly Language (2 වන පරම්පරාව - ඇසෙම්බ්ලි භාෂාව):**\n  * Uses symbolic short codes called **Mnemonics** (e.g., `ADD`, `SUB`, `MOV`, `LOAD`). Requires an **Assembler** to translate into machine code.\n\n* **3GL - High-Level Languages (3 වන පරම්පරාව - උසස් පෙළ භාෂා):**\n  * English-like statements and machine-independent. Examples: **Pascal**, **C**, **C++**, **Java**, **Python**. Requires **Compilers** or **Interpreters**.\n\n* **4GL - Very High-Level / Declarative (4 වන පරම්පරාව - ඉතා උසස් පෙළ භාෂා):**\n  * Non-procedural: programmers specify *what* result is required rather than *how* to compute it. Example: **SQL** for database queries.\n\n* **5GL - Natural Languages & AI (5 වන පරම්පරාව - කෘත්‍රිම බුද්ධි භාෂා):**\n  * Designed for problem-solving using constraints and knowledge bases rather than algorithmic steps. Used in Artificial Intelligence and Neural Networks. Examples: **PROLOG**, **LISP**.",
          "si": "ක්‍රමලේඛන භාෂාවල පරම්පරා 5:\n\n* **1GL - යන්ත්‍ර භාෂාව (Machine Language):**\n  * ද්විමය කේත (`0` සහ `1`) මඟින් පමණක් ලියනු ලැබේ. පරිගණකයේ CPU එකට සෘජුවම තේරුම් ගත හැකි අතර පරිවර්තක අවශ්‍ය නොවේ. මිනිසාට ක්‍රමලේඛනය කිරීම හා දෝෂ සෙවීම ඉතා අපහසුය.\n\n* **2GL - ඇසෙම්බ්ලි භාෂාව (Assembly Language):**\n  * ද්විමය කේත වෙනුවට කෙටි සංකේතාත්මක වචන (**Mnemonics** - උදා: `ADD`, `SUB`, `MOV`) භාවිත කරයි. යන්ත්‍ර කේත බවට පත් කිරීමට **ඇසෙම්බ්ලරයක් (Assembler)** අවශ්‍ය වේ.\n\n* **3GL - උසස් පෙළ භාෂා (High-Level Languages):**\n  * ඉංග්‍රීසි භාෂාවට සමාන, පරිගණක දෘඩාංග මත රඳා නොපවතින භාෂා වේ. උදාහරණ: **Pascal**, **C**, **C++**, **Java**, **Python**. පරිවර්තනය සඳහා **සම්පාදක (Compilers)** හෝ **අර්ථවින්‍යාසක (Interpreters)** අවශ්‍ය වේ.\n\n* **4GL - ඉතා උසස් පෙළ භාෂා (Very High-Level Languages):**\n  * පරිගණකයට කරන්නේ *කෙසේද* යන්න වෙනුවට අවශ්‍ය ප්‍රතිඵලය *කුමක්ද* යන්න පමණක් දක්වයි. උදාහරණ: දත්ත සමුදා විමසුම් සඳහා භාවිත වන **SQL**.\n\n* **5GL - කෘත්‍රිම බුද්ධි භාෂා (AI & Natural Languages):**\n  * කෘත්‍රිම බුද්ධිය සහ විශේෂඥ පද්ධති (Expert Systems) සඳහා භාවිත වේ. ඇල්ගොරිතම වෙනුවට කොන්දේසි හා සීමා මත පදනම්ව ගැටලු විසඳයි. උදාහරණ: **PROLOG**, **LISP**.",
          "highlightTerm": "5 Generations of Languages"
        },
        {
          "id": "b-g11-u1-5-2",
          "en": "Language Translators & Comparison:\nTranslators convert human-readable source code into binary machine code executable by the processor.\n\n* **The 3 Translator Types:**\n  * **Assembler (ඇසෙම්බ්ලරය):** Translates 2GL Assembly mnemonic code into 1GL Machine Code.\n  * **Compiler (කම්පයිලරය / සම්පාදකය):** Translates entire high-level program source code into an independent machine executable file (`.exe`) all at once before execution. Fast execution speed; reports all errors together. (e.g., Pascal, C, C++).\n  * **Interpreter (අන්තර්භාෂකය / අර්ථවින්‍යාසකය):** Translates and executes high-level source code line-by-line in real time. Slower execution; halts immediately on the first error encountered; creates no separate object file. (e.g., Python, JavaScript).",
          "si": "භාෂා පරිවර්තක සහ සංසන්දනය:\nමිනිසාට තේරුම් ගත හැකි ක්‍රමලේඛන කේත පරිගණකයට ක්‍රියාත්මක කළ හැකි ද්විමය යන්ත්‍ර කේත බවට හරවන මෘදුකාංග භාෂා පරිවර්තක නම් වේ.\n\n* **පරිවර්තක වර්ග 3:**\n  * **ඇසෙම්බ්ලරය (Assembler):** ඇසෙම්බ්ලි භාෂා විධාන (Mnemonics) යන්ත්‍ර භාෂාවට පරිවර්තනය කරයි.\n  * **සම්පාදකය / කම්පයිලරය (Compiler):** සම්පූර්ණ උසස් පෙළ වැඩසටහනම එකවර යන්ත්‍ර කේත බවට පරිවර්තනය කර වෙනම ස්වාධීන වස්තු ගොනුවක් (`.exe`) සාදයි. ධාවන වේගය ඉහළය; සියලු දෝෂ එකවර වාර්තා කරයි. (උදා: Pascal, C, C++).\n  * **අර්ථවින්‍යාසකය / අන්තර්භාෂකය (Interpreter):** මූල කේතය පේළියෙන් පේළිය කියවා පරිවර්තනය කර ක්ෂණිකව ක්‍රියාත්මක කරයි. වෙනම වස්තු ගොනුවක් නොසාදයි; දෝෂයක් හමු වූ වහාම ක්‍රියාත්මක වීම නතර වේ. (උදා: Python, JavaScript).",
          "highlightTerm": "Language Translators"
        }
      ],
      "examples": [
        {
          "id": "ex-11-1-5-1",
          "titleEn": "Translator Architecture Diagram",
          "titleSi": "භාෂා පරිවර්තක වර්ගීකරණ සටහන",
          "contentEn": "Language Translators (භාෂා පරිවර්තක)\n                                              │\n          +───────────────────────────────────┼───────────────────────────────────+\n          │                                   │                                   │\n      Assembler                           Compiler                            Interpreter\n    (ඇසෙම්බ්ලරය)                        (කම්පයිලරය)                          (අන්තර්භාෂකය)\n          │                                   │                                   │\n  Converts Assembly                Converts entire High-Level           Converts High-Level code\n  Mnemonics to Machine Code        source code to Machine Code          line-by-line into Machine\n  (ඇසෙම්බ්ලි කේත යන්ත්‍ර              all at once before execution         Code and executes line-by-line\n   කේත බවට හරවයි)                   (මුළු කේතයම එකවර පරිවර්තනය කරයි)      (පේළියෙන් පේළිය පරිවර්තනය කරයි)",
          "contentSi": "Language Translators (භාෂා පරිවර්තක)\n                                              │\n          +───────────────────────────────────┼───────────────────────────────────+\n          │                                   │                                   │\n      Assembler                           Compiler                            Interpreter\n    (ඇසෙම්බ්ලරය)                        (කම්පයිලරය)                          (අන්තර්භාෂකය)\n          │                                   │                                   │\n  Converts Assembly                Converts entire High-Level           Converts High-Level code\n  Mnemonics to Machine Code        source code to Machine Code          line-by-line into Machine\n  (ඇසෙම්බ්ලි කේත යන්ත්‍ර              all at once before execution         Code and executes line-by-line\n   කේත බවට හරවයි)                   (මුළු කේතයම එකවර පරිවර්තනය කරයි)      (පේළියෙන් පේළිය පරිවර්තනය කරයි)"
        }
      ],
      "tableData": {
        "headers": [
          {
            "en": "Feature",
            "si": "ලක්ෂණය"
          },
          {
            "en": "Compiler",
            "si": "කම්පයිලරය / සම්පාදකය"
          },
          {
            "en": "Interpreter",
            "si": "අන්තර්භාෂකය / අර්ථවින්‍යාසකය"
          }
        ],
        "rows": [
          {
            "col0": {
              "en": "Translation Mode",
              "si": "පරිවර්තන ක්‍රමය"
            },
            "col1": {
              "en": "Translates the entire program source code into machine object code at once.",
              "si": "සම්පූර්ණ වැඩසටහනම එකවර යන්ත්‍ර කේත බවට පරිවර්තනය කරයි."
            },
            "col2": {
              "en": "Translates source code line-by-line and executes immediately.",
              "si": "පේළියෙන් පේළිය කියවා පරිවර්තනය කර ක්‍රියාත්මක කරයි."
            }
          },
          {
            "col0": {
              "en": "Execution Speed",
              "si": "ක්‍රියාත්මක වීමේ වේගය"
            },
            "col1": {
              "en": "Fast execution after initial compilation.",
              "si": "පරිවර්තනයෙන් පසු ධාවනය ඉතා වේගවත්ය."
            },
            "col2": {
              "en": "Slower execution because each line is translated every time it runs.",
              "si": "ධාවනය මන්දගාමී වේ (සෑම අවස්ථාවකම පරිවර්තනය වේ)."
            }
          },
          {
            "col0": {
              "en": "Error Reporting",
              "si": "දෝෂ වාර්තා කිරීම"
            },
            "col1": {
              "en": "Reports all syntax errors together after analyzing the entire program.",
              "si": "සම්පූර්ණ වැඩසටහනම අවසානයේ සියලු දෝෂ එකවර පෙන්වයි."
            },
            "col2": {
              "en": "Stops execution at the exact line containing the first error.",
              "si": "දෝෂයක් ඇති පේළියේදී ක්‍රියාත්මක වීම වහාම නතර වේ."
            }
          },
          {
            "col0": {
              "en": "Object Code Creation",
              "si": "වස්තු කේත සෑදීම"
            },
            "col1": {
              "en": "Generates an independent object file (`.exe`).",
              "si": "ස්වාධීන `.exe` වස්තු ගොනුවක් සාදයි."
            },
            "col2": {
              "en": "Does NOT generate an intermediate object file.",
              "si": "වෙනම වස්තු ගොනුවක් නොසාදයි."
            }
          },
          {
            "col0": {
              "en": "Example Languages",
              "si": "උදාහරණ භාෂා"
            },
            "col1": {
              "en": "Pascal, C, C++, FORTRAN",
              "si": "Pascal, C, C++, FORTRAN"
            },
            "col2": {
              "en": "Python, BASIC, JavaScript, PHP",
              "si": "Python, BASIC, JavaScript, PHP"
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g11-u1-5",
        "questionEn": "Which language translator converts the entire high-level program source code into machine object code at once before execution?",
        "questionSi": "සම්පූර්ණ උසස් පෙළ වැඩසටහනම එකවර යන්ත්‍ර භාෂා වස්තු කේතයක් බවට පරිවර්තනය කරන්නේ කවරක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Compiler",
            "si": "සම්පාදකය (Compiler)"
          },
          {
            "id": "2",
            "en": "Interpreter",
            "si": "අර්ථවින්‍යාසකය (Interpreter)"
          },
          {
            "id": "3",
            "en": "Assembler",
            "si": "ඇසෙම්බ්ලරය (Assembler)"
          },
          {
            "id": "4",
            "en": "Linker",
            "si": "සම්බන්ධකය (Linker)"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "A Compiler translates all instructions of a high-level source code at once into an executable object file before execution.",
        "explanationSi": "සම්පාදකය (Compiler) මඟින් උසස් පෙළ කේතයේ සියලුම උපදෙස් එකවර යන්ත්‍ර භාෂාවට පරිවර්තනය කර වෙනම වස්තු ගොනුවක් සාදයි."
      }
    },
    {
      "id": "g11-u1-st-6",
      "number": "1.6",
      "titleEn": "Pascal Programming Language Syntax & Rules",
      "titleSi": "පැස්කල් ක්‍රමලේඛන භාෂා රීති",
      "summaryEn": "Pascal program structure, 5 basic data types, arithmetic/relational/assignment operators, control statements (if..else, for, while, repeat), and 1D arrays.",
      "summarySi": "පැස්කල් වැඩසටහන් ව්‍යුහය, දත්ත වර්ග 5, මෙහෙයුම්කාරක, පාලන ප්‍රකාශන (if..else, for, while, repeat) සහ ඒකමාන ඇරේ.",
      "blocks": [
        {
          "id": "b-g11-u1-6-1",
          "en": "Standard Structure of a Pascal Program:\nA Pascal program consists of three main sections: Program Header, Declaration Section, and Program Body.\n\n* **Program Header:** Starts with keyword `program` followed by program name and semicolon (e.g., `program CalculateArea;`).\n* **Declaration Section:** Declares constants (`const`), variables (`var`), and custom types before the main body.\n* **Execution Body:** Enclosed between `begin` and `end.` (ends with a period/dot). Every statement inside ends with a semicolon (`;`).\n\n* **Variable Declaration Syntax:**\n`var variable_name : data_type;` (e.g., `var radius, area : real; count : integer;`)",
          "si": "පැස්කල් වැඩසටහනක සම්මත ව්‍යුහය:\nපැස්කල් වැඩසටහනක් ප්‍රධාන කොටස් තුනකින් සමන්විත වේ: වැඩසටහන් ශීර්ෂය, ප්‍රකාශන කොටස සහ ප්‍රධාන විධාන කොටස.\n\n* **වැඩසටහන් ශීර්ෂය (Program Header):** `program` මූලපදයෙන් ආරම්භ වී වැඩසටහනේ නම සහ තනි තිත් කොමාවකින් (`;`) අවසන් වේ (උදා: `program CalculateArea;`).\n* **ප්‍රකාශන කොටස (Declaration Section):** විචල්‍යයන් (`var`), නියතයන් (`const`) ප්‍රධාන කොටසට ඉහළින් ප්‍රකාශ කෙරේ.\n* **ප්‍රධාන විධාන කොටස (Program Body):** `begin` මඟින් ආරම්භ වී තිතක් සහිත `end.` මඟින් අවසන් වේ. ඇතුළත ඇති උපදෙස් තනි තිත් කොමාවකින් (`;`) අවසන් වේ.\n\n* **විචල්‍ය ප්‍රකාශන ව්‍යුහය:**\n`var විචල්‍ය_නම : දත්ත_වර්ගය;` (උදා: `var radius, area : real; count : integer;`)",
          "highlightTerm": "Pascal Structure"
        },
        {
          "id": "b-g11-u1-6-2",
          "en": "Pascal Data Types (පැස්කල් දත්ත වර්ග 5):\nPascal enforces strong data typing across variables:\n\n* **`integer`:** Whole numbers without decimal points (e.g., `-15`, `0`, `100`).\n* **`real`:** Numbers with fractional or decimal parts (e.g., `3.14`, `-0.05`, `78.5`).\n* **`char`:** A single character enclosed in single quotation marks (e.g., `'A'`, `'y'`, `'5'`).\n* **`string`:** A sequence of characters/text enclosed in single quotation marks (e.g., `'Sri Lanka'`, `'Grade 11 ICT'`).\n* **`boolean`:** Logical truth values, strictly either `true` or `false`.",
          "si": "පැස්කල් දත්ත වර්ග 5:\nපැස්කල් භාෂාවේ ප්‍රධාන සම්මත දත්ත වර්ග 5ක් භාවිත වේ:\n\n* **`integer`:** දශමස්ථාන රහිත පූර්ණ සංඛ්‍යා (උදා: `-15`, `0`, `100`).\n* **`real`:** දශමස්ථාන සහිත තාත්වික සංඛ්‍යා (උදා: `3.14`, `-0.05`, `78.5`).\n* **`char`:** තනි උද්ධෘත පාඨ තුළ ඇති තනි අක්ෂරයක් (උදා: `'A'`, `'y'`, `'5'`).\n* **`string`:** තනි උද්ධෘත පාඨ තුළ ඇති අක්ෂර මාලාවක් හෝ වචන (උදා: `'Sri Lanka'`, `'Grade 11 ICT'`).\n* **`boolean`:** තාර්කික අගයන් (`true` හෝ `false` පමණි).",
          "highlightTerm": "Pascal Data Types"
        },
        {
          "id": "b-g11-u1-6-3",
          "en": "Pascal Operators:\n\n* **Arithmetic Operators:**\n  * `+` (Addition), `-` (Subtraction), `*` (Multiplication)\n  * `/` (Real Division): Returns a `real` result (e.g., `7 / 2 = 3.5`)\n  * **`div` (Integer Division):** Returns the whole integer quotient (e.g., `19 div 4 = 4`)\n  * **`mod` (Modulus):** Returns the integer remainder (e.g., `19 mod 4 = 3`)\n\n* **Relational Operators:**\n  * `=` (Equal), `<>` (Not Equal), `<` (Less than), `>` (Greater than), `<=` (Less or equal), `>=` (Greater or equal)\n\n* **Assignment Operator:**\n  * `:=` (Assigns evaluated value on right to variable on left, e.g., `total := total + mark;`)",
          "si": "පැස්කල් මෙහෙයුම්කාරක:\n\n* **අංක ගණිතමය මෙහෙයුම්කාරක:**\n  * `+` (එකතු කිරීම), `-` (අඩු කිරීම), `*` (ගුණ කිරීම)\n  * `/` (තාත්වික බෙදීම): දශම සහිත ප්‍රතිඵලයක් ලබාදෙයි (උදා: `7 / 2 = 3.5`)\n  * **`div` (පූර්ණ සංඛ්‍යාත්මක බෙදීම):** බෙදීමේ පූර්ණ සංඛ්‍යා ලබ්ධිය ලබාදෙයි (උදා: `19 div 4 = 4`)\n  * **`mod` (ශේෂය සෙවීම):** බෙදීමේ පූර්ණ සංඛ්‍යා ශේෂය ලබාදෙයි (උදා: `19 mod 4 = 3`)\n\n* **සම්බන්ධතා මෙහෙයුම්කාරක:**\n  * `=` (සමානයි), `<>` (අසමානයි), `<` (කුඩායි), `>` (විශාලයි), `<=` (කුඩා හෝ සමානයි), `>=` (විශාල හෝ සමානයි)\n\n* **පැවරුම් මෙහෙයුම්කාරකය:**\n  * `:=` (දකුණු පස ඇති අගය වම් පස ඇති විචල්‍යයට පවරයි, උදා: `total := total + mark;`)",
          "highlightTerm": "Pascal Operators"
        },
        {
          "id": "b-g11-u1-6-4",
          "en": "Pascal Control Statements Syntax:\n\n* **Selection (`if..then..else`):**\n  * *Syntax Note:* Never put a semicolon before `else`!\n  * *Example:*\n    `if (marks >= 50) then`\n    `  writeln('Pass')`\n    `else`\n    `  writeln('Fail');`\n\n* **Loop 1 (`for..to..do` - Counter-Controlled Loop):**\n  * Used when iteration count is known beforehand.\n  * `for i := 1 to 5 do writeln(i);`\n\n* **Loop 2 (`while..do` - Pre-Test Loop):**\n  * Tests condition at the beginning. If false initially, loop body executes 0 times.\n  * `while (count <= 5) do begin count := count + 1; end;`\n\n* **Loop 3 (`repeat..until` - Post-Test Loop):**\n  * Tests condition at the end. Loop body executes at least once! Loop stops when condition becomes True.",
          "si": "පැස්කල් පාලන ප්‍රකාශන ව්‍යුහ:\n\n* **තේරීම (`if..then..else`):**\n  * *විශේෂ විභාග රීතිය:* `else` ට පෙර පේළියේ කිසි විටෙකත් තනි තිත් කොමාව (`;`) නොයොදන්න!\n  * *උදාහරණ:*\n    `if (marks >= 50) then`\n    `  writeln('Pass')`\n    `else`\n    `  writeln('Fail');`\n\n* **ලූපය 1 (`for..to..do` - ගණක පාලිත ලූපය):**\n  * ධාවනය විය යුතු වාර ගණන කලින් දන්නා විට භාවිත වේ.\n  * `for i := 1 to 5 do writeln(i);`\n\n* **ලූපය 2 (`while..do` - පූර්ව පරීක්ෂා ලූපය):**\n  * කොන්දේසිය මුලින් පරීක්ෂා කෙරේ. කොන්දේසිය මුලින්ම අසත්‍ය නම් ලූපය ශුන්‍ය වාරයක් ක්‍රියාත්මක වේ.\n\n* **ලූපය 3 (`repeat..until` - පසු පරීක්ෂා ලූපය):**\n  * කොන්දේසිය අවසානයේ පරීක්ෂා කෙරේ. ලූපයේ කඳ අවම වශයෙන් එක් වරක් හෝ ක්‍රියාත්මක වේ! කොන්දේසිය සත්‍ය (True) වූ විට ලූපය නවතී.",
          "highlightTerm": "Pascal Control Statements"
        },
        {
          "id": "b-g11-u1-6-5",
          "en": "One-Dimensional Arrays in Pascal:\nAn array is a data structure that stores a fixed-size sequential collection of elements of the same data type under a single identifier name.\n\n* **Array Declaration Syntax:**\n  `var marks : array[1..5] of integer;`\n\n* **Array Storage & Access:**\n  * Each element is accessed using an integer index in square brackets: `marks[1]`, `marks[2]`, ... `marks[5]`.\n  * Elements are typically populated and traversed using a `for` loop.",
          "si": "පැස්කල් ඒකමාන ඇරේ (1D Arrays):\nඇරේ (Array) එකක් යනු එකම දත්ත වර්ගයට අයත් දත්ත සමූහයක් තනි නමකින් ගබඩා කර තබා ගත හැකි දත්ත ව්‍යුහයකි.\n\n* **ඇරේ ප්‍රකාශන ව්‍යුහය:**\n  `var marks : array[1..5] of integer;`\n\n* **ඇරේ දත්ත ඇතුළත් කිරීම සහ භාවිතය:**\n  * කොටු වරහන් තුළ ඇති දර්ශකය (Index) මඟින් එක් එක් අගය වෙත ළඟා වේ: `marks[1]`, `marks[2]`, ... `marks[5]`.\n  * ඇරේ එකකට දත්ත ලබා ගැනීමට සහ මුද්‍රණය කිරීමට සාමාන්‍යයෙන් `for` ලූපයක් භාවිත කරයි.",
          "highlightTerm": "Pascal 1D Arrays"
        }
      ],
      "examples": [
        {
          "id": "ex-11-1-6-1",
          "titleEn": "Complete Pascal Program Example",
          "titleSi": "සම්පූර්ණ පැස්කල් වැඩසටහන් උදාහරණය",
          "contentEn": "program CalculateArea;\nconst\n  PI = 3.14159;\nvar\n  radius, area : real;\nbegin\n  writeln('Enter radius:');\n  readln(radius);\n  area := PI * radius * radius;\n  writeln('Area = ', area:0:2);\nend.",
          "contentSi": "program CalculateArea;\nconst\n  PI = 3.14159;\nvar\n  radius, area : real;\nbegin\n  writeln('Enter radius:');\n  readln(radius);\n  area := PI * radius * radius;\n  writeln('Area = ', area:0:2);\nend."
        },
        {
          "id": "ex-11-1-6-2",
          "titleEn": "Pascal Array & Loop Example",
          "titleSi": "පැස්කල් ඇරේ සහ ලූප උදාහරණය",
          "contentEn": "program ArraySum;\nvar\n  marks : array[1..5] of integer;\n  i, sum : integer;\nbegin\n  sum := 0;\n  for i := 1 to 5 do\n  begin\n    readln(marks[i]);\n    sum := sum + marks[i];\n  end;\n  writeln('Sum = ', sum);\nend.",
          "contentSi": "program ArraySum;\nvar\n  marks : array[1..5] of integer;\n  i, sum : integer;\nbegin\n  sum := 0;\n  for i := 1 to 5 do\n  begin\n    readln(marks[i]);\n    sum := sum + marks[i];\n  end;\n  writeln('Sum = ', sum);\nend."
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u1-6",
        "questionEn": "What are the results of the Pascal arithmetic operations `19 div 4` and `19 mod 4`?",
        "questionSi": "`19 div 4` සහ `19 mod 4` යන පැස්කල් මෙහෙයුම්වල ප්‍රතිඵල පිළිවෙළින් කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "4 and 3",
            "si": "4 සහ 3"
          },
          {
            "id": "2",
            "en": "4.75 and 3",
            "si": "4.75 සහ 3"
          },
          {
            "id": "3",
            "en": "3 and 4",
            "si": "3 සහ 4"
          },
          {
            "id": "4",
            "en": "4 and 0",
            "si": "4 සහ 0"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "In Pascal, `div` computes integer quotient (19 div 4 = 4) and `mod` computes remainder (19 mod 4 = 3).",
        "explanationSi": "පැස්කල් හි `div` මඟින් පූර්ණ සංඛ්‍යා ලබ්ධියද (19 div 4 = 4), `mod` මඟින් ශේෂයද (19 mod 4 = 3) ලබා දෙයි."
      }
    }
  ],
  "pastPaperQuestions": [
    {
      "id": "pp-g11-u1-2020-1",
      "year": 2020,
      "paperType": "Paper II",
      "badgeText": "2020 O/L Paper II - Question 04",
      "questionEn": "4. (a) A user enters numbers one by one into a computer program. The program stops accepting numbers when the user enters -1. Finally, it displays the sum of all entered numbers (excluding -1).\n  Draw a flowchart to represent the above algorithm.\n  (b) Write a Pascal program to implement the above algorithm.",
      "questionSi": "4. (a) පරිශීලකයෙකු විසින් පරිගණක වැඩසටහනකට එකින් එක සංඛ්‍යා ඇතුළත් කරනු ලබයි. පරිශීලකයා විසින් -1 ඇතුළත් කළ විට වැඩසටහන සංඛ්‍යා ලබාගැනීම නතර කරයි. අවසානයේදී, එය ඇතුළත් කළ සියලුම සංඛ්‍යාවල එකතුව (-1 හැර) ප්‍රකාශ කරයි.\n  ඉහත ඇල්ගොරිතමය නිරූපණය කිරීමට ගැලීම් සටහනක් අඳින්න.\n  (b) ඉහත ඇල්ගොරිතමය ක්‍රියාත්මක කිරීම සඳහා පැස්කල් (Pascal) වැඩසටහනක් ලියන්න.",
      "type": "structured",
      "sampleAnswerEn": "Algorithms & Flowcharting:\n(a) Flowchart symbols: Oval (Terminal), Parallelogram (I/O), Rectangle (Process), Rhombus (Decision).\n(b) Trace table construction tracking variables X, Y, and Count through iterative loop.\n(c) Pascal syntax: while condition do, for i := 1 to n do.",
      "sampleAnswerSi": "ඇල්ගොරිතම සහ ගැලීම් සටහන්:\n(a) සංකේත: ඉලිප්සය (ආරම්භය/අවසානය), සමාන්තරාස්‍රය (ආදාන/ප්‍රතිදාන), සෘජුකෝණාස්‍රය (සැකසුම), රොම්බසය (තීරණය).\n(b) හෝඩුවා වගුව මගින් ලූපය තුළ විචල්‍ය අගයන් ලුහුබැඳීම.\n(c) පැස්කල් කේතය: while, for, if-then-else පාලන ව්‍යුහ.",
      "explanationEn": "Verbatim official examination question from 2020 O/L Paper II - Question 04.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper II - Question 04."
    },
    {
      "id": "pp-g11-u1-2021-2",
      "year": 2021,
      "paperType": "Paper I",
      "badgeText": "2021 O/L Paper I - Question 38",
      "questionEn": "What is the output of the following Pascal code snippet?\n  `x := 19 div 4; y := 19 mod 4; writeln(x, ' ', y);`",
      "questionSi": "පහත පැස්කල් කේත ඛණ්ඩයේ ප්‍රතිදානය කුමක්ද?\n  `x := 19 div 4; y := 19 mod 4; writeln(x, ' ', y);`",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "4 3",
          "si": "4 3"
        },
        {
          "id": "2",
          "en": "4.75 3",
          "si": "4.75 3"
        },
        {
          "id": "3",
          "en": "3 4",
          "si": "3 4"
        },
        {
          "id": "4",
          "en": "4 0",
          "si": "4 0"
        }
      ],
      "correctOptionId": "1",
      "explanationEn": "Verbatim official examination question from 2021 O/L Paper I - Question 38.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2021 O/L Paper I - Question 38."
    },
    {
      "id": "pp-g11-u1-2021-3",
      "year": 2021,
      "paperType": "Paper II",
      "badgeText": "2021 O/L Paper II - Question 04",
      "questionEn": "4. Consider the following algorithm represented in pseudocode:\n  ```text\n  BEGIN\n    Total = 0\n    FOR Count = 1 TO 5 DO\n      READ Mark\n      Total = Total + Mark\n    ENDFOR\n    Avg = Total / 5\n    PRINT Total, Avg\n  END\n  ```\n  (i) Identify the inputs, process, and outputs of the above algorithm.\n  (ii) Draw a flowchart corresponding to the given pseudocode.\n  (iii) Write a complete Pascal program for the above algorithm.",
      "questionSi": "4. පූර්ව කේතයෙන් දක්වා ඇති පහත ඇල්ගොරිතමය සලකා බලන්න:\n  ```text\n  BEGIN\n    Total = 0\n    FOR Count = 1 TO 5 DO\n      READ Mark\n      Total = Total + Mark\n    ENDFOR\n    Avg = Total / 5\n    PRINT Total, Avg\n  END\n  ```\n  (i) ඉහත ඇල්ගොරිතමයේ ආදානය, ක්‍රියාවලිය සහ ප්‍රතිදානය හඳුනා ගන්න.\n  (ii) දී ඇති පූර්ව කේතයට අදාළ ගැලීම් සටහන අඳින්න.\n  (iii) ඉහත ඇල්ගොරිතමය සඳහා සම්පූර්ණ පැස්කල් (Pascal) වැඩසටහනක් ලියන්න.",
      "type": "structured",
      "sampleAnswerEn": "Pseudocode and Pascal Implementation:\n(a) IPO Analysis: Input marks, Process calculate average, Output grade.\n(b) Trace table state verification for summation of 1 to 10.\n(c) Compilers vs Interpreters: Compiler translates entire source code before execution; Interpreter executes line by line.",
      "sampleAnswerSi": "ව්‍යාජ කේත සහ පැස්කල් ක්‍රමලේඛනය:\n(a) IPO විශ්ලේෂණය: ආදානය (ලකුණු), සැකසීම (සාමාන්‍යය සෙවීම), ප්‍රතිදානය (සාමාර්ථය).\n(b) 1 සිට 10 දක්වා එකතුව සෙවීම සඳහා හෝඩුවා වගුව.\n(c) සම්පාදක (Compilers) සහ අර්ථවින්‍යාසක (Interpreters) අතර වෙනස.",
      "explanationEn": "Verbatim official examination question from 2021 O/L Paper II - Question 04.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2021 O/L Paper II - Question 04."
    },
    {
      "id": "pp-g11-u1-2022-4",
      "year": 2022,
      "paperType": "Paper II",
      "badgeText": "2022 O/L Paper II - Question 04",
      "questionEn": "4. An algorithm is required to calculate the Body Mass Index (BMI) of a person using weight in kg ($W$) and height in meters ($H$). The formula is BMI = W / (H * H).\n  If BMI >= 25, output 'Overweight', else output 'Normal'.\n  (i) Draw a flowchart for this algorithm.\n  (ii) Write the pseudocode.\n  (iii) Complete the Pascal code snippet.",
      "questionSi": "4. පුද්ගලයෙකුගේ බර කිලෝග්‍රෑම් වලින් ($W$) සහ උස මීටර් වලින් ($H$) භාවිත කර ශරීර ස්කන්ධ දර්ශකය (BMI) ගණනය කිරීමට ඇල්ගොරිතමයක් අවශ්‍ය වේ. සූත්‍රය වන්නේ BMI = W / (H * H) වේ.\n  BMI >= 25 නම් 'Overweight' ලෙසද, නැතහොත් 'Normal' ලෙසද මුද්‍රණය කළ යුතුය.\n  (i) මෙම ඇල්ගොරිතමය සඳහා ගැලීම් සටහන අඳින්න.\n  (ii) පූර්ව කේතය ලියන්න.\n  (iii) පැස්කල් කේතය සම්පූර්ණ කරන්න.",
      "type": "structured",
      "sampleAnswerEn": "Loop control structures:\n(a) Pre-test loop: while (condition is checked before loop execution).\n(b) Post-test loop: repeat..until (body executes at least once before check).\n(c) Counter-controlled loop: for loop with fixed iteration count.",
      "sampleAnswerSi": "පුනරාවර්තන පාලන ව්‍යුහ:\n(a) පූර්ව-පරීක්ෂා ලූප: while (කොන්දේසිය මුලින් පරීක්ෂා කෙරේ).\n(b) පසු-පරීක්ෂා ලූප: repeat..until (අවම වශයෙන් එක් වරක් හෝ ක්‍රියාත්මක වේ).\n(c) ගණක පාලිත ලූප: for loop (නියමිත වාර ගණනක් ක්‍රියාත්මක වේ).",
      "explanationEn": "Verbatim official examination question from 2022 O/L Paper II - Question 04.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2022 O/L Paper II - Question 04."
    },
    {
      "id": "pp-g11-u1-2023-5",
      "year": 2023,
      "paperType": "Paper I",
      "badgeText": "2023 O/L Paper I - Question 39",
      "questionEn": "Which of the following language translators converts the entire high-level program source code into machine language object code at once before execution?",
      "questionSi": "උසස් පෙළ මුලාශ්‍ර කේතයක ඇති සියලුම උපදෙස් එකවර යන්ත්‍ර භාෂා වස්තු කේතයක් බවට පරිවර්තනය කරන්නේ පහත සඳහන් කවරක්ද?",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "Assembler",
          "si": "ඇසෙම්බ්ලරය"
        },
        {
          "id": "2",
          "en": "Compiler",
          "si": "කම්පයිලරය"
        },
        {
          "id": "3",
          "en": "Interpreter",
          "si": "අන්තර්භාෂකය"
        },
        {
          "id": "4",
          "en": "Text Editor",
          "si": "පෙළ සකසනය"
        }
      ],
      "correctOptionId": "2",
      "explanationEn": "Verbatim official examination question from 2023 O/L Paper I - Question 39: The compiler converts entire source code at once.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2023 O/L Paper I - Question 39: කම්පයිලරය මගින් මුළු කේතයම එකවර පරිවර්තනය කරයි."
    },
    {
      "id": "pp-g11-u1-2023-6",
      "year": 2023,
      "paperType": "Paper II",
      "badgeText": "2023 O/L Paper II - Question 04",
      "questionEn": "4. The following pseudocode is designed to find and print the maximum mark among 10 student marks:\n  ```text\n  BEGIN\n    READ MaxMark\n    Count = 1\n    WHILE Count < 10 DO\n      READ Mark\n      IF Mark > MaxMark THEN\n        MaxMark = Mark\n      ENDIF\n      Count = Count + 1\n    ENDWHILE\n    PRINT MaxMark\n  END\n  ```\n  (i) Construct a trace table assuming the input marks are 50, 62, 45, 80, 75, 30, 90, 85, 60, 70.\n  (ii) Write the equivalent Pascal code.",
      "questionSi": "4. ශිෂ්‍යයන් 10 දෙනෙකුගේ ලකුණු අතුරින් උපරිම ලකුණ සොයා මුද්‍රණය කිරීම සඳහා පහත පූර්ව කේතය නිර්මාණය කර ඇත:\n  ```text\n  BEGIN\n    READ MaxMark\n    Count = 1\n    WHILE Count < 10 DO\n      READ Mark\n      IF Mark > MaxMark THEN\n        MaxMark = Mark\n      ENDIF\n      Count = Count + 1\n    ENDWHILE\n    PRINT MaxMark\n  END\n  ```\n  (i) ලකුණු 50, 62, 45, 80, 75, 30, 90, 85, 60, 70 ලෙස ලැබෙන විට අදාළ හෝඩුවා වගුව (Trace Table) ගොඩනගන්න.\n  (ii) මීට අදාළ පැස්කල් (Pascal) කේතය ලියන්න.",
      "type": "structured",
      "sampleAnswerEn": "Trace table and Algorithmic logic:\n(a) Loop termination condition when count reaches maximum.\n(b) Final output values displayed on screen.\n(c) Pascal variable declarations: integer, real, boolean, char, string.",
      "sampleAnswerSi": "හෝඩුවා වගු සහ ක්‍රමලේඛන තර්කනය:\n(a) ලූපය අවසන් වීමේ කොන්දේසිය සපුරාලීම.\n(b) තිරය මත දර්ශනය වන අවසාන ප්‍රතිදානය.\n(c) පැස්කල් විචල්‍ය ප්‍රකාශන: integer, real, boolean, char, string.",
      "explanationEn": "Verbatim official examination question from 2023 O/L Paper II - Question 04.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2023 O/L Paper II - Question 04."
    },
    {
      "id": "pp-g11-u1-2024-7",
      "year": 2024,
      "paperType": "Paper II",
      "badgeText": "2024 O/L Paper II - Question 04",
      "questionEn": "4. An algorithm reads 5 integers into an array `A`, calculates their sum, and prints the sum.\n  (i) Draw a flowchart for the algorithm.\n  (ii) Write the complete Pascal program using a `for` loop and an array declaration `A : array[1..5] of integer;`.",
      "questionSi": "4. `A` නැමැති ඇරේ (array) එකකට පූර්ණ සංඛ්‍යා 5 ක් ලබාගෙන ඒවායේ එකතුව ගණනය කර මුද්‍රණය කරන ඇල්ගොරිතමයක් සලකා බලන්න.\n  (i) ඇල්ගොරිතමය සඳහා ගැලීම් සටහන අඳින්න.\n  (ii) `for` ලූපයක් සහ `A : array[1..5] of integer;` ප්‍රකාශනය භාවිත කරමින් සම්පූර්ණ පැස්කල් වැඩසටහන ලියන්න.",
      "type": "structured",
      "sampleAnswerEn": "Algorithm Design & Trace Table:\n(a) Constructing trace table for finding largest number among a list.\n(b) Flowchart drawing for finding even or odd numbers.\n(c) Pascal syntax debugging: missing semicolons, incorrect assignment operator (:=).",
      "sampleAnswerSi": "ඇල්ගොරිතම නිර්මාණය සහ හෝඩුවා වගුව:\n(a) සංඛ්‍යා ලැයිස්තුවකින් විශාලතම සංඛ්‍යාව සෙවීම සඳහා හෝඩුවා වගුව.\n(b) ඉරට්ට හෝ ඔත්තේ සංඛ්‍යා සෙවීම සඳහා ගැලීම් සටහන.\n(c) පැස්කල් කේත දෝෂ නිවැරදි කිරීම (තනි තිත් කොමාව, := ක්‍රියාකරු).",
      "explanationEn": "Verbatim official examination question from 2024 O/L Paper II - Question 04.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2024 O/L Paper II - Question 04."
    },
    {
      "id": "pp-g11-u1-2025-8",
      "year": 2025,
      "paperType": "Paper II",
      "badgeText": "2025 O/L Paper II - Question 04",
      "questionEn": "4. (a) State two main differences between a Compiler and an Interpreter.\n  (b) Consider the pseudocode below that prints all even numbers from 2 to 20:\n  ```text\n  BEGIN\n    Num = 2\n    WHILE Num <= 20 DO\n      PRINT Num\n      Num = Num + 2\n    ENDWHILE\n  END\n  ```\n  Convert the above pseudocode into a complete Pascal program.",
      "questionSi": "4. (a) කම්පයිලරයක් (Compiler) සහ අන්තර්භාෂකයක් (Interpreter) අතර ප්‍රධාන වෙනස්කම් 2 ක් දක්වන්න.\n  (b) 2 සිට 20 දක්වා ඇති සියලුම ඉරට්ටේ සංඛ්‍යා මුද්‍රණය කරන පහත පූර්ව කේතය සලකා බලන්න:\n  ```text\n  BEGIN\n    Num = 2\n    WHILE Num <= 20 DO\n      PRINT Num\n      Num = Num + 2\n    ENDWHILE\n  END\n  ```\n  ඉහත පූර්ව කේතය සම්පූර්ණ පැස්කල් (Pascal) වැඩසටහනක් බවට පරිවර්තනය කරන්න.",
      "type": "structured",
      "sampleAnswerEn": "Structured Programming Concepts:\n(a) Sequence, Selection, and Iteration.\n(b) Trace table state verification.\n(c) Pascal program writing with input readln and output writeln.",
      "sampleAnswerSi": "ව්‍යුහගත ක්‍රමලේඛන සංකල්ප:\n(a) අනුක්‍රමය, තේරීම සහ පුනරාවර්තනය.\n(b) හෝඩුවා වගුව භාවිතයෙන් විචල්‍ය අගයන් තහවුරු කිරීම.\n(c) readln සහ writeln භාවිතයෙන් පැස්කල් වැඩසටහන ලිවීම.",
      "explanationEn": "Verbatim official examination question from 2025 O/L Paper II - Question 04.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2025 O/L Paper II - Question 04."
    }
  ]
};
