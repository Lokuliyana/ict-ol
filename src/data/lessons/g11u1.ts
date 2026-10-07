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
      "summaryEn": "Analysis of a Problem concepts, definitions, and examination competencies.",
      "summarySi": "ගැටලුවක් විශ්ලේෂණය කිරීම සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u1-1-1",
          "en": "#### 1.1.1 Core Definitions: Input, Process, Output (මූලික අර්ථ දැක්වීම්: ආදානය, ක්‍රියාවලිය, ප්‍රතිදානය)",
          "si": "#### 1.1.1 Core Definitions: Input, Process, Output (මූලික අර්ථ දැක්වීම්: ආදානය, ක්‍රියාවලිය, ප්‍රතිදානය)",
          "highlightTerm": "Core Definitions: Input, Process, Output"
        },
        {
          "id": "b-g11-u1-1-2",
          "en": "Problem Analysis Concept:\nBefore solving a problem using a computer, it is necessary to identify the components of the problem. Analyzing a problem means identifying the Inputs, Process and Outputs.",
          "si": "ගැටලුවක් විශ්ලේෂණය කිරීමේ සංකල්පය:\nපරිගණකයක් මගින් ගැටලුවක් විසඳීමට ප්‍රථම එම ගැටලුවේ අඩංගු සංරචක හඳුනා ගැනීම අවශ්‍ය වේ. ගැටලුවක් විශ්ලේෂණය කිරීම යනු එහි ආදානය (Input), ක්‍රියාවලිය (Process) සහ ප්‍රතිදානය (Output) හඳුනා ගැනීමයි.",
          "highlightTerm": "Problem Analysis Concept"
        },
        {
          "id": "b-g11-u1-1-3",
          "en": "Definitions of Components:\nThe data or raw items required to solve the problem.",
          "si": "සංරචකවල අර්ථ දැක්වීම්:\nගැටලුව විසඳීම සඳහා ලබා දෙන දත්ත හෝ අමුද්‍රව්‍ය ආදානය වේ.\"\n  2. **Process (ක්‍රියාවලිය / ප්‍රක්‍රියාව):**\n     * **[English Medium Text]:** \"The steps, calculations, or transformations performed on inputs to obtain the output.\"\n     * **[Sinhala Medium Text]:** \"ප්‍රතිදානය ලබා ගැනීම සඳහා ආදාන මත සිදු කරන පියවර, ගණනය කිරීම් හෝ රූපාන්තරණයන් ක්‍රියාවලිය වේ.\"\n  3. **Output (ප්‍රතිදානය):**\n     * **[English Medium Text]:** \"The final required result or information obtained after processing.\"\n     * **[Sinhala Medium Text]:** \"සැකසීමෙන් පසුව ලබා ගන්නා අවසාන අවශ්‍ය ප්‍රතිඵලය හෝ තොරතුරු ප්‍රතිදානය වේ.",
          "highlightTerm": "Definitions of Components"
        },
        {
          "id": "b-g11-u1-1-4",
          "en": "#### 1.1.2 Textbook Examples of Problem Analysis (පෙළපොත් උදාහරණ විශ්ලේෂණය)",
          "si": "#### 1.1.2 Textbook Examples of Problem Analysis (පෙළපොත් උදාහරණ විශ්ලේෂණය)",
          "highlightTerm": "Textbook Examples of Problem Analysis"
        },
        {
          "id": "b-g11-u1-1-5",
          "en": "Example 1: Calculating the Area of a Rectangle (සෘජුකෝණාස්‍රයක වර්ගඵලය ගණනය කිරීම)**\n* **Input (ආදානය):** Length ($L$), Width ($W$) / දිග ($L$), පළල ($W$)\n* **Process (ක්‍රියාවලිය):** $\text{Area} = \text{Length} \times \text{Width}$ / $\text{වර්ගඵලය} = \text{දිග} \times \text{පළල}$\n* **Output (ප්‍රතිදානය):** Area / වර්ගඵලය",
          "si": "Example 1: Calculating the Area of a Rectangle (සෘජුකෝණාස්‍රයක වර්ගඵලය ගණනය කිරීම)**\n* **Input (ආදානය):** Length ($L$), Width ($W$) / දිග ($L$), පළල ($W$)\n* **Process (ක්‍රියාවලිය):** $\text{Area} = \text{Length} \times \text{Width}$ / $\text{වර්ගඵලය} = \text{දිග} \times \text{පළල}$\n* **Output (ප්‍රතිදානය):** Area / වර්ගඵලය",
          "highlightTerm": "Example 1: Calculating the Area of a Rectangle"
        },
        {
          "id": "b-g11-u1-1-6",
          "en": "Example 2: Calculating Total and Average Marks of a Student (ශිෂ්‍යයෙකුගේ එකතුව සහ සාමාන්‍ය ලකුණු ගණනය කිරීම)**\n* **Input (ආදානය):** Marks for 3 subjects ($M1, M2, M3$) / විෂයයන් 3 හි ලකුණු ($M1, M2, M3$)\n* **Process (ක්‍රියාවලිය):**\n- $\text{Total} = M1 + M2 + M3$ / $\text{එකතුව} = M1 + M2 + M3$\n- $\text{Average} = \frac{\text{Total}}{3}$ / $\text{සාමාන්‍යය} = \frac{\text{එකතුව}}{3}$\n* **Output (ප්‍රතිදානය):** Total, Average / එකතුව, සාමාන්‍යය",
          "si": "Example 2: Calculating Total and Average Marks of a Student (ශිෂ්‍යයෙකුගේ එකතුව සහ සාමාන්‍ය ලකුණු ගණනය කිරීම)**\n* **Input (ආදානය):** Marks for 3 subjects ($M1, M2, M3$) / විෂයයන් 3 හි ලකුණු ($M1, M2, M3$)\n* **Process (ක්‍රියාවලිය):**\n- $\text{Total} = M1 + M2 + M3$ / $\text{එකතුව} = M1 + M2 + M3$\n- $\text{Average} = \frac{\text{Total}}{3}$ / $\text{සාමාන්‍යය} = \frac{\text{එකතුව}}{3}$\n* **Output (ප්‍රතිදානය):** Total, Average / එකතුව, සාමාන්‍යය",
          "highlightTerm": "Example 2: Calculating Total and Average Marks of a Student"
        },
        {
          "id": "b-g11-u1-1-7",
          "en": "Identification of Alternative Solutions & Solution Space:\nA problem can have more than one solution. The collection of all possible solutions to a given problem is called the Solution Space. Choosing the most suitable and efficient solution from the solution space is an important step in problem solving.",
          "si": "විකල්ප විසඳුම් හඳුනාගැනීම සහ විසඳුම් අවකාශය:\nඑක් ගැටලුවක් විසඳීම සඳහා විසඳුම් එකකට වඩා පැවතිය හැක. දී ඇති ගැටලුවක් සඳහා පැවතිය හැකි සියලුම විසඳුම්වල එකතුව 'විසඳුම් අවකාශය' (Solution Space) ලෙස හැඳින්වේ. විසඳුම් අවකාශය අතුරින් වඩාත් සුදුසු සහ කාර්යක්ෂම විසඳුම තෝරා ගැනීම ගැටලු විසඳීමේ දී ඉතා වැදගත් පියවරකි.\"\n\n---",
          "highlightTerm": "Identification of Alternative Solutions & Solution Space"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u1-1",
        "questionEn": "Which of the following is the most accurate concept regarding Analysis of a Problem?",
        "questionSi": "ගැටලුවක් විශ්ලේෂණය කිරීම පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Analysis of a Problem",
            "si": "ගැටලුවක් විශ්ලේෂණය කිරීම පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Analysis of a Problem.",
        "explanationSi": "1 වන වරණය මගින් ගැටලුවක් විශ්ලේෂණය කිරීම පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u1-st-2",
      "number": "1.2",
      "titleEn": "Algorithms & Control Structures",
      "titleSi": "ඇල්ගොරිතම සහ පාලන ව්‍යුහ",
      "summaryEn": "Algorithms & Control Structures concepts, definitions, and examination competencies.",
      "summarySi": "ඇල්ගොරිතම සහ පාලන ව්‍යුහ සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u1-2-1",
          "en": "What is an Algorithm?:\nAn algorithm is a step-by-step sequence of instructions designed to solve a specific problem in a finite amount of time.",
          "si": "ඇල්ගොරිතමයක් යනු කුමක්ද?:\nඇල්ගොරිතමයක් යනු යම් ගැටලුවක් විසඳීම සඳහා අනුගමනය කළ යුතු පියවරෙන් පියවර උපදෙස් සමූහයක පිළිවෙළයි.",
          "highlightTerm": "What is an Algorithm?"
        },
        {
          "id": "b-g11-u1-2-2",
          "en": "Key Characteristics of a Good Algorithm (හොඳ ඇල්ගොරිතමයක ලක්ෂණ):**\n1. **Definiteness (පැහැදිලි බව):** Each step must be clear and unambiguous. / සෑම පියවරක්ම පැහැදිලි විය යුතුය.\n2. **Finiteness (සන්තතික බව / නිමා වන බව):** Must terminate after a finite number of steps. / පියවර සීමිත සංඛ්‍යාවකින් අවසන් විය යුතුය.\n3. **Input & Output (ආදානය හා ප්‍රතිදානය):** Must accept zero or more inputs and produce at least one output. / ආදාන ලබාගෙන අවම වශයෙන් එක් ප්‍රතිදානයක්වත් ලබා දිය යුතුය.\n4. **Effectiveness (ඵලදායී බව):** Each instruction must be basic enough to be carried out effectively. / සෑම උපදෙසක්ම ක්‍රියාත්මක කළ හැකි ප්‍රායෝගික එකක් විය යුතුය.",
          "si": "Key Characteristics of a Good Algorithm (හොඳ ඇල්ගොරිතමයක ලක්ෂණ):**\n1. **Definiteness (පැහැදිලි බව):** Each step must be clear and unambiguous. / සෑම පියවරක්ම පැහැදිලි විය යුතුය.\n2. **Finiteness (සන්තතික බව / නිමා වන බව):** Must terminate after a finite number of steps. / පියවර සීමිත සංඛ්‍යාවකින් අවසන් විය යුතුය.\n3. **Input & Output (ආදානය හා ප්‍රතිදානය):** Must accept zero or more inputs and produce at least one output. / ආදාන ලබාගෙන අවම වශයෙන් එක් ප්‍රතිදානයක්වත් ලබා දිය යුතුය.\n4. **Effectiveness (ඵලදායී බව):** Each instruction must be basic enough to be carried out effectively. / සෑම උපදෙසක්ම ක්‍රියාත්මක කළ හැකි ප්‍රායෝගික එකක් විය යුතුය.",
          "highlightTerm": "Key Characteristics of a Good Algorithm"
        },
        {
          "id": "b-g11-u1-2-3",
          "en": "The 3 Fundamental Control Structures:\nInstructions are executed one after another in the exact order they appear, from top to bottom.",
          "si": "ප්‍රධාන පාලන ව්‍යුහ 3:\nඋපදෙස් ලියා ඇති අනුපිළිවෙළටම ඉහළ සිට පහළට එකින් එක පිළිවෙළින් ක්‍රියාත්මක වීම අනුක්‍රමය නම් වේ.\"\n\n2. **Selection / Decision (තේරීම / තීරණය):**\n   * **[English Medium Text]:** \"A condition is evaluated; if the condition is True, one path is taken, and if False, an alternative path is taken.\"\n   * **[Sinhala Medium Text]:** \"යම් කොන්දේසියක් පරීක්ෂා කර, එම කොන්දේසිය සත්‍ය (True) නම් එක් මගක්ද, අසත්‍ය (False) නම් වෙනත් මගක්ද තෝරාගෙන ක්‍රියාත්මක වීම තේරීම නම් වේ.\"\n\n3. **Repetition / Iteration / Loop (පුනරාවර්තනය / ලූප):**\n   * **[English Medium Text]:** \"A block of instructions is executed repeatedly as long as a specified condition remains True or until a condition becomes True.\"\n   * **[Sinhala Medium Text]:** \"යම් කොන්දේසියක් සත්‍ය වන තෙක් හෝ සත්‍යව පවතින තාක් යම් උපදෙස් සමූහයක් නැවත නැවතත් ක්‍රියාත්මක වීම පුනරාවර්තනය (ලූප) නම් වේ.\"\n\n---",
          "highlightTerm": "The 3 Fundamental Control Structures"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u1-2",
        "questionEn": "Which of the following is the most accurate concept regarding Algorithms & Control Structures?",
        "questionSi": "ඇල්ගොරිතම සහ පාලන ව්‍යුහ පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Algorithms & Control Structures",
            "si": "ඇල්ගොරිතම සහ පාලන ව්‍යුහ පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Algorithms & Control Structures.",
        "explanationSi": "1 වන වරණය මගින් ඇල්ගොරිතම සහ පාලන ව්‍යුහ පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u1-st-3",
      "number": "1.3",
      "titleEn": "Representation of Algorithms: Flowcharts & Pseudocode",
      "titleSi": "ඇල්ගොරිතම නිරූපණය",
      "summaryEn": "Representation of Algorithms: Flowcharts & Pseudocode concepts, definitions, and examination competencies.",
      "summarySi": "ඇල්ගොරිතම නිරූපණය සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u1-3-1",
          "en": "#### 1.3.1 Standard Flowchart Symbols (ගැලීම් සටහන් සංකේත)",
          "si": "#### 1.3.1 Standard Flowchart Symbols (ගැලීම් සටහන් සංකේත)",
          "highlightTerm": "Standard Flowchart Symbols"
        },
        {
          "id": "b-g11-u1-3-2",
          "en": "#### 1.3.2 Pseudocode Rules & Keywords (පූර්ව කේත නීති සහ මූලපද)",
          "si": "#### 1.3.2 Pseudocode Rules & Keywords (පූර්ව කේත නීති සහ මූලපද)",
          "highlightTerm": "Pseudocode Rules & Keywords"
        },
        {
          "id": "b-g11-u1-3-3",
          "en": "Pseudocode Rules (පූර්ව කේත නීති):**\n- Written in plain English / Sinhala resembling programming structure without strict syntax constraints.\n- Capitalized standard keywords: `BEGIN`, `END`, `READ`, `INPUT`, `PRINT`, `WRITE`, `IF`, `THEN`, `ELSE`, `ENDIF`, `WHILE`, `DO`, `ENDWHILE`, `FOR`, `TO`, `REPEAT`, `UNTIL`.\n- Proper indentation must be used to show control block scope.",
          "si": "Pseudocode Rules (පූර්ව කේත නීති):**\n- Written in plain English / Sinhala resembling programming structure without strict syntax constraints.\n- Capitalized standard keywords: `BEGIN`, `END`, `READ`, `INPUT`, `PRINT`, `WRITE`, `IF`, `THEN`, `ELSE`, `ENDIF`, `WHILE`, `DO`, `ENDWHILE`, `FOR`, `TO`, `REPEAT`, `UNTIL`.\n- Proper indentation must be used to show control block scope.",
          "highlightTerm": "Pseudocode Rules"
        }
      ],
      "examples": [
        {
          "id": "ex-11-1-3-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "┌─────────────────────────┬──────────────────────────┬────────────────────────────────────────────────────────┐\n│ Symbol Name (සංකේතය)    │ Graphical Shape (හැඩය)   │ Function / Meaning (කාර්යය)                            │\n├─────────────────────────┼──────────────────────────┼────────────────────────────────────────────────────────┤\n│ Terminal (ප්‍රාරම්භය/අන්තය)│ Oval / Rounded Rectangle │ Indicates Start or End of an algorithm (ආරම්භය/අවසානය)│\n│ Input / Output (ආදාන/ප්‍රතිදාන)│ Parallelogram (සමාන්තරාස්‍රය)│ Represents Reading Input or Printing Output (දත්ත ලබාගැනීම/ප්‍රතිදානය)│\n│ Process (ක්‍රියාවලිය)      │ Rectangle (සෘජුකෝණාස්‍රය) │ Represents Calculations or Data Assignment (ගණනය කිරීම්/අගයන් පැවරුම)│\n│ Decision (තීරණය)        │ Diamond (රොම්බසය)        │ Represents Condition Evaluation with True/False paths (කොන්දේසි පරීක්ෂාව)│\n│ Connector (සම්බන්ධකය)   │ Circle (කාල සලකුණ/වෘත්තය)│ Connects different sections of a flowchart (විවිධ කොටස් යා කිරීම)│\n│ Flow Line (ගැලීම් රේඛාව) │ Arrow Line (ඊතල රේඛාව)  │ Shows the direction of execution flow (ක්‍රියාත්මක වීමේ දිශාව) │\n└─────────────────────────┴──────────────────────────┴────────────────────────────────────────────────────────┘",
          "contentSi": "┌─────────────────────────┬──────────────────────────┬────────────────────────────────────────────────────────┐\n│ Symbol Name (සංකේතය)    │ Graphical Shape (හැඩය)   │ Function / Meaning (කාර්යය)                            │\n├─────────────────────────┼──────────────────────────┼────────────────────────────────────────────────────────┤\n│ Terminal (ප්‍රාරම්භය/අන්තය)│ Oval / Rounded Rectangle │ Indicates Start or End of an algorithm (ආරම්භය/අවසානය)│\n│ Input / Output (ආදාන/ප්‍රතිදාන)│ Parallelogram (සමාන්තරාස්‍රය)│ Represents Reading Input or Printing Output (දත්ත ලබාගැනීම/ප්‍රතිදානය)│\n│ Process (ක්‍රියාවලිය)      │ Rectangle (සෘජුකෝණාස්‍රය) │ Represents Calculations or Data Assignment (ගණනය කිරීම්/අගයන් පැවරුම)│\n│ Decision (තීරණය)        │ Diamond (රොම්බසය)        │ Represents Condition Evaluation with True/False paths (කොන්දේසි පරීක්ෂාව)│\n│ Connector (සම්බන්ධකය)   │ Circle (කාල සලකුණ/වෘත්තය)│ Connects different sections of a flowchart (විවිධ කොටස් යා කිරීම)│\n│ Flow Line (ගැලීම් රේඛාව) │ Arrow Line (ඊතල රේඛාව)  │ Shows the direction of execution flow (ක්‍රියාත්මක වීමේ දිශාව) │\n└─────────────────────────┴──────────────────────────┴────────────────────────────────────────────────────────┘"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u1-3",
        "questionEn": "Which of the following is the most accurate concept regarding Representation of Algorithms: Flowcharts & Pseudocode?",
        "questionSi": "ඇල්ගොරිතම නිරූපණය පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Representation of Algorithms: Flowcharts & Pseudocode",
            "si": "ඇල්ගොරිතම නිරූපණය පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Representation of Algorithms: Flowcharts & Pseudocode.",
        "explanationSi": "1 වන වරණය මගින් ඇල්ගොරිතම නිරූපණය පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u1-st-4",
      "number": "1.4",
      "titleEn": "Trace Tables / Variable Tracking",
      "titleSi": "හෝඩුවා වගු / ලුහුබැඳීමේ වගු",
      "summaryEn": "Trace Tables / Variable Tracking concepts, definitions, and examination competencies.",
      "summarySi": "හෝඩුවා වගු / ලුහුබැඳීමේ වගු සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u1-4-1",
          "en": "What is a Trace Table?:\nA trace table is a technique used to test algorithms, in order to make sure that no logic errors occur during the algorithm execution. It tracks the step-by-step changes of variable values.",
          "si": "හෝඩුවා වගුවක් යනු කුමක්ද?:\nහෝඩුවා වගුවක් (Trace Table) යනු ඇල්ගොරිතමයක තර්කන දෝෂ පවතීදැයි පරීක්ෂා කිරීම සඳහාත්, ක්‍රියාත්මක වීමේදී විචල්‍යයන්ගේ අගයන් පියවරෙන් පියවර වෙනස් වන ආකාරය නිරීක්ෂණය කිරීම සඳහාත් භාවිත කරන සටහනකි.",
          "highlightTerm": "What is a Trace Table?"
        },
        {
          "id": "b-g11-u1-4-2",
          "en": "#### Trace Table Example (උදාහරණය):",
          "si": "#### Trace Table Example (උදාහරණය):",
          "highlightTerm": "Trace Table Example"
        },
        {
          "id": "b-g11-u1-4-3",
          "en": "Algorithm:",
          "si": "Algorithm:",
          "highlightTerm": "Algorithm"
        },
        {
          "id": "b-g11-u1-4-4",
          "en": "Trace Table Execution Step-by-Step (හෝඩුවා වගු පියවර):",
          "si": "Trace Table Execution Step-by-Step (හෝඩුවා වගු පියවර):",
          "highlightTerm": "Trace Table Execution Step-by-Step"
        }
      ],
      "examples": [
        {
          "id": "ex-11-1-4-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "BEGIN\n    Count = 1\n    Sum = 0\n    WHILE Count <= 3 DO\n      Sum = Sum + Count\n      Count = Count + 1\n    ENDWHILE\n    PRINT Sum\n  END",
          "contentSi": "BEGIN\n    Count = 1\n    Sum = 0\n    WHILE Count <= 3 DO\n      Sum = Sum + Count\n      Count = Count + 1\n    ENDWHILE\n    PRINT Sum\n  END"
        }
      ],
      "tableData": {
        "headers": [
          {
            "en": "Step",
            "si": "Step"
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
            "si": "Condition: `Count <= 3`"
          },
          {
            "en": "Output",
            "si": "Output"
          }
        ],
        "rows": [
          {
            "col0": {
              "en": "Initial",
              "si": "Initial"
            },
            "col1": {
              "en": "1",
              "si": ""
            },
            "col2": {
              "en": "0",
              "si": ""
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
              "si": "Loop 1"
            },
            "col1": {
              "en": "1",
              "si": ""
            },
            "col2": {
              "en": "0",
              "si": ""
            },
            "col3": {
              "en": "True ($1 \\le 3$)",
              "si": "$1 \\le 3$"
            },
            "col4": {
              "en": "-",
              "si": "-"
            }
          },
          {
            "col0": {
              "en": "Update 1",
              "si": "Update 1"
            },
            "col1": {
              "en": "2",
              "si": ""
            },
            "col2": {
              "en": "1",
              "si": ""
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
              "si": "Loop 2"
            },
            "col1": {
              "en": "2",
              "si": ""
            },
            "col2": {
              "en": "1",
              "si": ""
            },
            "col3": {
              "en": "True ($2 \\le 3$)",
              "si": "$2 \\le 3$"
            },
            "col4": {
              "en": "-",
              "si": "-"
            }
          },
          {
            "col0": {
              "en": "Update 2",
              "si": "Update 2"
            },
            "col1": {
              "en": "3",
              "si": ""
            },
            "col2": {
              "en": "3",
              "si": ""
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
              "si": "Loop 3"
            },
            "col1": {
              "en": "3",
              "si": ""
            },
            "col2": {
              "en": "3",
              "si": ""
            },
            "col3": {
              "en": "True ($3 \\le 3$)",
              "si": "$3 \\le 3$"
            },
            "col4": {
              "en": "-",
              "si": "-"
            }
          },
          {
            "col0": {
              "en": "Update 3",
              "si": "Update 3"
            },
            "col1": {
              "en": "4",
              "si": ""
            },
            "col2": {
              "en": "6",
              "si": ""
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
              "si": "Loop 4"
            },
            "col1": {
              "en": "4",
              "si": ""
            },
            "col2": {
              "en": "6",
              "si": ""
            },
            "col3": {
              "en": "False ($4 \\le 3$ - Loop Exits)",
              "si": "$4 \\le 3$ - Loop Exits"
            },
            "col4": {
              "en": "-",
              "si": "-"
            }
          },
          {
            "col0": {
              "en": "Print",
              "si": "Print"
            },
            "col1": {
              "en": "4",
              "si": ""
            },
            "col2": {
              "en": "6",
              "si": ""
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
        "questionEn": "Which of the following is the most accurate concept regarding Trace Tables / Variable Tracking?",
        "questionSi": "හෝඩුවා වගු / ලුහුබැඳීමේ වගු පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Trace Tables / Variable Tracking",
            "si": "හෝඩුවා වගු / ලුහුබැඳීමේ වගු පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Trace Tables / Variable Tracking.",
        "explanationSi": "1 වන වරණය මගින් හෝඩුවා වගු / ලුහුබැඳීමේ වගු පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u1-st-5",
      "number": "1.5",
      "titleEn": "Evolution of Programming Languages & Translators",
      "titleSi": "ක්‍රමලේඛන භාෂාවල පරිණාමය සහ පරිවර්තක",
      "summaryEn": "Evolution of Programming Languages & Translators concepts, definitions, and examination competencies.",
      "summarySi": "ක්‍රමලේඛන භාෂාවල පරිණාමය සහ පරිවර්තක සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u1-5-1",
          "en": "#### 1.5.1 The 5 Generations of Programming Languages (ක්‍රමලේඛන භාෂාවල පරම්පරා 5)\n1. **1st Generation - First Generation Language (1GL - පළමු පරම්පරාව):**\n* **Machine Language (යන්ත්‍ර භාෂාව):** Written purely in Binary (`0`s and `1`s). Machine dependent, direct CPU execution without translation, extremely difficult for humans to program or debug.\n2. **2nd Generation - Second Generation Language (2GL - දෙවන පරම්පරාව):**\n* **Assembly Language (ඇසෙම්බ්ලි භාෂාව):** Uses short symbolic codes called **Mnemonics** (e.g. `ADD`, `SUB`, `MOV`, `LOAD`). Requires a translator called an **Assembler** to convert into machine code.\n3. **3rd Generation - Third Generation Language (3GL - තෙවන පරම්පරාව):**\n* **High-Level Languages (උසස් පෙළ භාෂා):** English-like statements, machine-independent. Examples: **Pascal**, **C**, **C++**, **Java**, **FORTRAN**, **COBOL**. Requires **Compilers** or **Interpreters**.\n4. **4th Generation - Fourth Generation Language (4GL - සිව්වන පරම්පරාව):**\n* **Very High-Level / Non-Procedural Languages (ඉතා උසස් පෙළ භාෂා):** Users specify *what* output is required rather than *how* to compute it. Example: **SQL** (Structured Query Language) for databases.\n5. **5th Generation - Fifth Generation Language (5GL - පස්වන පරම්පරාව):**\n* **Natural Languages & AI (ස්වාභාවික භාෂා හා කෘත්‍රිම බුද්ධිය):** Solves problems using constraints rather than algorithms; used in Artificial Intelligence, Expert Systems, and Neural Networks. Examples: **PROLOG**, **LISP**.",
          "si": "#### 1.5.1 The 5 Generations of Programming Languages (ක්‍රමලේඛන භාෂාවල පරම්පරා 5)\n1. **1st Generation - First Generation Language (1GL - පළමු පරම්පරාව):**\n* **Machine Language (යන්ත්‍ර භාෂාව):** Written purely in Binary (`0`s and `1`s). Machine dependent, direct CPU execution without translation, extremely difficult for humans to program or debug.\n2. **2nd Generation - Second Generation Language (2GL - දෙවන පරම්පරාව):**\n* **Assembly Language (ඇසෙම්බ්ලි භාෂාව):** Uses short symbolic codes called **Mnemonics** (e.g. `ADD`, `SUB`, `MOV`, `LOAD`). Requires a translator called an **Assembler** to convert into machine code.\n3. **3rd Generation - Third Generation Language (3GL - තෙවන පරම්පරාව):**\n* **High-Level Languages (උසස් පෙළ භාෂා):** English-like statements, machine-independent. Examples: **Pascal**, **C**, **C++**, **Java**, **FORTRAN**, **COBOL**. Requires **Compilers** or **Interpreters**.\n4. **4th Generation - Fourth Generation Language (4GL - සිව්වන පරම්පරාව):**\n* **Very High-Level / Non-Procedural Languages (ඉතා උසස් පෙළ භාෂා):** Users specify *what* output is required rather than *how* to compute it. Example: **SQL** (Structured Query Language) for databases.\n5. **5th Generation - Fifth Generation Language (5GL - පස්වන පරම්පරාව):**\n* **Natural Languages & AI (ස්වාභාවික භාෂා හා කෘත්‍රිම බුද්ධිය):** Solves problems using constraints rather than algorithms; used in Artificial Intelligence, Expert Systems, and Neural Networks. Examples: **PROLOG**, **LISP**.",
          "highlightTerm": "The 5 Generations of Programming Languages"
        },
        {
          "id": "b-g11-u1-5-2",
          "en": "#### 1.5.2 Language Translators (භාෂා පරිවර්තක)",
          "si": "#### 1.5.2 Language Translators (භාෂා පරිවර්තක)",
          "highlightTerm": "Language Translators"
        },
        {
          "id": "b-g11-u1-5-3",
          "en": "Detailed Comparison between Compiler and Interpreter (කම්පයිලරය සහ අන්තර්භාෂකය අතර වෙනස):",
          "si": "Detailed Comparison between Compiler and Interpreter (කම්පයිලරය සහ අන්තර්භාෂකය අතර වෙනස):",
          "highlightTerm": "Detailed Comparison between Compiler and Interpreter"
        }
      ],
      "examples": [
        {
          "id": "ex-11-1-5-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
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
            "si": "කම්පයිලරය"
          },
          {
            "en": "Interpreter",
            "si": "අන්තර්භාෂකය"
          }
        ],
        "rows": [
          {
            "col0": {
              "en": "Translation Mode (පරිවර්තන ක්‍රමය)",
              "si": "Translation Mode (පරිවර්තන ක්‍රමය)"
            },
            "col1": {
              "en": "Translates the entire program source code into machine object code at once. (සම්පූර්ණ වැඩසටහනම එකවර පරිවර්තනය කරයි.)",
              "si": "සම්පූර්ණ වැඩසටහනම එකවර පරිවර්තනය කරයි."
            },
            "col2": {
              "en": "Translates source code line-by-line and executes immediately. (පේළියෙන් පේළිය පරිවර්තනය කර ක්‍රියාත්මක කරයි.)",
              "si": "පේළියෙන් පේළිය පරිවර්තනය කර ක්‍රියාත්මක කරයි."
            }
          },
          {
            "col0": {
              "en": "Execution Speed (ක්‍රියාත්මක වීමේ වේගය)",
              "si": "Execution Speed (ක්‍රියාත්මක වීමේ වේගය)"
            },
            "col1": {
              "en": "Fast execution after initial compilation. (පරිවර්තනයෙන් පසු ධාවනය වේගවත්ය.)",
              "si": "පරිවර්තනයෙන් පසු ධාවනය වේගවත්ය."
            },
            "col2": {
              "en": "Slower execution because each line is translated every time it runs. (මන්දගාමී වේ.)",
              "si": "මන්දගාමී වේ."
            }
          },
          {
            "col0": {
              "en": "Error Reporting (දෝෂ වාර්තා කිරීම)",
              "si": "Error Reporting (දෝෂ වාර්තා කිරීම)"
            },
            "col1": {
              "en": "Reports all syntax errors together after analyzing the entire program. (සම්පූර්ණ වැඩසටහනම අවසානයේ සියලු දෝෂ පෙන්වයි.)",
              "si": "සම්පූර්ණ වැඩසටහනම අවසානයේ සියලු දෝෂ පෙන්වයි."
            },
            "col2": {
              "en": "Stops execution at the exact line containing the error. (දෝෂයක් ඇති පේළියේදී ක්‍රියාත්මක වීම නතර වේ.)",
              "si": "දෝෂයක් ඇති පේළියේදී ක්‍රියාත්මක වීම නතර වේ."
            }
          },
          {
            "col0": {
              "en": "Object Code Creation (වස්තු කේත සෑදීම)",
              "si": "Object Code Creation (වස්තු කේත සෑදීම)"
            },
            "col1": {
              "en": "Generates an independent object file (`.exe`). (වෙනම `.exe` ගොනුවක් සාදයි.)",
              "si": "`.exe`). (වෙනම `.exe` ගොනුවක් සාදයි."
            },
            "col2": {
              "en": "Does NOT generate an intermediate object file. (වෙනම ගොනුවක් නොසාදයි.)",
              "si": "වෙනම ගොනුවක් නොසාදයි."
            }
          },
          {
            "col0": {
              "en": "Example Languages (උදාහරණ භාෂා)",
              "si": "Example Languages (උදාහරණ භාෂා)"
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
        "questionEn": "Which of the following is the most accurate concept regarding Evolution of Programming Languages & Translators?",
        "questionSi": "ක්‍රමලේඛන භාෂාවල පරිණාමය සහ පරිවර්තක පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Evolution of Programming Languages & Translators",
            "si": "ක්‍රමලේඛන භාෂාවල පරිණාමය සහ පරිවර්තක පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Evolution of Programming Languages & Translators.",
        "explanationSi": "1 වන වරණය මගින් ක්‍රමලේඛන භාෂාවල පරිණාමය සහ පරිවර්තක පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u1-st-6",
      "number": "1.6",
      "titleEn": "Pascal Programming Language Syntax & Rules",
      "titleSi": "පැස්කල් ක්‍රමලේඛන භාෂා රීති",
      "summaryEn": "Pascal Programming Language Syntax & Rules concepts, definitions, and examination competencies.",
      "summarySi": "පැස්කල් ක්‍රමලේඛන භාෂා රීති සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u1-6-1",
          "en": "#### 1.6.1 Standard Structure of a Pascal Program (පැස්කල් වැඩසටහනක ව්‍යුහය)",
          "si": "#### 1.6.1 Standard Structure of a Pascal Program (පැස්කල් වැඩසටහනක ව්‍යුහය)",
          "highlightTerm": "Standard Structure of a Pascal Program"
        },
        {
          "id": "b-g11-u1-6-2",
          "en": "#### 1.6.2 Pascal Data Types (පැස්කල් දත්ත වර්ග 5)\n1. **`integer`:** Whole numbers (e.g. `-15, 0, 100`).\n2. **`real`:** Floating-point numbers with decimal parts (e.g. `3.14, -0.05, 78.5`).\n3. **`char`:** Single character enclosed in single quotes (e.g. `'A', 'y', '5'`).\n4. **`string`:** Sequence of text characters in single quotes (e.g. `'Sri Lanka', 'Grade 11 ICT'`).\n5. **`boolean`:** Logical condition values (`true` or `false`).",
          "si": "#### 1.6.2 Pascal Data Types (පැස්කල් දත්ත වර්ග 5)\n1. **`integer`:** Whole numbers (e.g. `-15, 0, 100`).\n2. **`real`:** Floating-point numbers with decimal parts (e.g. `3.14, -0.05, 78.5`).\n3. **`char`:** Single character enclosed in single quotes (e.g. `'A', 'y', '5'`).\n4. **`string`:** Sequence of text characters in single quotes (e.g. `'Sri Lanka', 'Grade 11 ICT'`).\n5. **`boolean`:** Logical condition values (`true` or `false`).",
          "highlightTerm": "Pascal Data Types"
        },
        {
          "id": "b-g11-u1-6-3",
          "en": "#### 1.6.3 Pascal Operators (පැස්කල් මෙහෙයුම්කාරක)",
          "si": "#### 1.6.3 Pascal Operators (පැස්කල් මෙහෙයුම්කාරක)",
          "highlightTerm": "Pascal Operators"
        },
        {
          "id": "b-g11-u1-6-4",
          "en": "Arithmetic Operators (අංක ගණිතමය):**\n- `+` (Addition), `-` (Subtraction), `*` (Multiplication), `/` (Real Division resulting in `real`).\n- **`div` (Integer Division / පූර්ණ සංඛ්‍යාත්මක බෙදීම):** Returns the integer quotient. e.g., `17 div 5 = 3`.\n- **`mod` (Modulus / ශේෂය බෙදීම):** Returns the integer remainder. e.g., `17 mod 5 = 2`.",
          "si": "Arithmetic Operators (අංක ගණිතමය):**\n- `+` (Addition), `-` (Subtraction), `*` (Multiplication), `/` (Real Division resulting in `real`).\n- **`div` (Integer Division / පූර්ණ සංඛ්‍යාත්මක බෙදීම):** Returns the integer quotient. e.g., `17 div 5 = 3`.\n- **`mod` (Modulus / ශේෂය බෙදීම):** Returns the integer remainder. e.g., `17 mod 5 = 2`.",
          "highlightTerm": "Arithmetic Operators"
        },
        {
          "id": "b-g11-u1-6-5",
          "en": "Relational Operators (සම්බන්ධතාව):**\n- `=` (Equal), `<>` (Not Equal), `<` (Less than), `>` (Greater than), `<=` (Less or equal), `>=` (Greater or equal).",
          "si": "Relational Operators (සම්බන්ධතාව):**\n- `=` (Equal), `<>` (Not Equal), `<` (Less than), `>` (Greater than), `<=` (Less or equal), `>=` (Greater or equal).",
          "highlightTerm": "Relational Operators"
        },
        {
          "id": "b-g11-u1-6-6",
          "en": "Assignment Operator (පැවරුම් මෙහෙයුම්කාරකය):**\n- `:=` (Assigns value on the right to variable on the left. e.g. `x := 10;`).",
          "si": "Assignment Operator (පැවරුම් මෙහෙයුම්කාරකය):**\n- `:=` (Assigns value on the right to variable on the left. e.g. `x := 10;`).",
          "highlightTerm": "Assignment Operator"
        },
        {
          "id": "b-g11-u1-6-7",
          "en": "#### 1.6.4 Pascal Control Statements Syntax (පාලන ප්‍රකාශන ව්‍යුහ)",
          "si": "#### 1.6.4 Pascal Control Statements Syntax (පාලන ප්‍රකාශන ව්‍යුහ)",
          "highlightTerm": "Pascal Control Statements Syntax"
        },
        {
          "id": "b-g11-u1-6-8",
          "en": "Selection (`if..then..else`):",
          "si": "Selection (`if..then..else`):",
          "highlightTerm": "Selection"
        },
        {
          "id": "b-g11-u1-6-9",
          "en": "Loop 1 (`for..to..do` - Fixed Iteration Loop):",
          "si": "Loop 1 (`for..to..do` - Fixed Iteration Loop):",
          "highlightTerm": "Loop 1"
        },
        {
          "id": "b-g11-u1-6-10",
          "en": "Loop 2 (`while..do` - Pre-test Loop):",
          "si": "Loop 2 (`while..do` - Pre-test Loop):",
          "highlightTerm": "Loop 2"
        },
        {
          "id": "b-g11-u1-6-11",
          "en": "Loop 3 (`repeat..until` - Post-test Loop):",
          "si": "Loop 3 (`repeat..until` - Post-test Loop):",
          "highlightTerm": "Loop 3"
        },
        {
          "id": "b-g11-u1-6-12",
          "en": "#### 1.6.5 One-Dimensional Arrays in Pascal (ඒකමාන ඇරේ / 1D Arrays)",
          "si": "#### 1.6.5 One-Dimensional Arrays in Pascal (ඒකමාන ඇරේ / 1D Arrays)",
          "highlightTerm": "One-Dimensional Arrays in Pascal"
        },
        {
          "id": "b-g11-u1-6-13",
          "en": "Declaration Syntax (ප්‍රකාශන ව්‍යුහය):",
          "si": "Declaration Syntax (ප්‍රකාශන ව්‍යුහය):",
          "highlightTerm": "Declaration Syntax"
        },
        {
          "id": "b-g11-u1-6-14",
          "en": "Reading & Accessing Array Elements (ඇරේ දත්ත ඇතුළත් කිරීම සහ භාවිතය):",
          "si": "Reading & Accessing Array Elements (ඇරේ දත්ත ඇතුළත් කිරීම සහ භාවිතය):",
          "highlightTerm": "Reading & Accessing Array Elements"
        }
      ],
      "examples": [
        {
          "id": "ex-11-1-6-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "program ProgramName;          { Program Header / වැඩසටහන් ශීර්ෂය }\nconst                         { Constant Declaration / නියත ප්‍රකාශනය }\n  PI = 3.14159;\nvar                           { Variable Declaration / විචල්‍ය ප්‍රකාශනය }\n  radius, area : real;\n  count : integer;\nbegin                         { Main Program Body Starts / ප්‍රධාන කොටස ආරම්භය }\n  writeln('Enter radius:');\n  readln(radius);\n  area := PI * radius * radius;\n  writeln('Area = ', area:0:2);\nend.                          { Main Program Body Ends with DOT / තිතෙන් අවසන් වේ }",
          "contentSi": "program ProgramName;          { Program Header / වැඩසටහන් ශීර්ෂය }\nconst                         { Constant Declaration / නියත ප්‍රකාශනය }\n  PI = 3.14159;\nvar                           { Variable Declaration / විචල්‍ය ප්‍රකාශනය }\n  radius, area : real;\n  count : integer;\nbegin                         { Main Program Body Starts / ප්‍රධාන කොටස ආරම්භය }\n  writeln('Enter radius:');\n  readln(radius);\n  area := PI * radius * radius;\n  writeln('Area = ', area:0:2);\nend.                          { Main Program Body Ends with DOT / තිතෙන් අවසන් වේ }"
        },
        {
          "id": "ex-11-1-6-2",
          "titleEn": "Schematic / Code Diagram 2",
          "titleSi": "පරිපථ / කේත සටහන 2",
          "contentEn": "if (marks >= 50) then\n    writeln('Pass')\n  else\n    writeln('Fail');  { Note: No semicolon before 'else'! }",
          "contentSi": "if (marks >= 50) then\n    writeln('Pass')\n  else\n    writeln('Fail');  { Note: No semicolon before 'else'! }"
        },
        {
          "id": "ex-11-1-6-3",
          "titleEn": "Schematic / Code Diagram 3",
          "titleSi": "පරිපථ / කේත සටහන 3",
          "contentEn": "for i := 1 to 10 do\n  begin\n    writeln('Count: ', i);\n  end;",
          "contentSi": "for i := 1 to 10 do\n  begin\n    writeln('Count: ', i);\n  end;"
        },
        {
          "id": "ex-11-1-6-4",
          "titleEn": "Schematic / Code Diagram 4",
          "titleSi": "පරිපථ / කේත සටහන 4",
          "contentEn": "count := 1;\n  while (count <= 5) do\n  begin\n    writeln(count);\n    count := count + 1;\n  end;",
          "contentSi": "count := 1;\n  while (count <= 5) do\n  begin\n    writeln(count);\n    count := count + 1;\n  end;"
        },
        {
          "id": "ex-11-1-6-5",
          "titleEn": "Schematic / Code Diagram 5",
          "titleSi": "පරිපථ / කේත සටහන 5",
          "contentEn": "count := 1;\n  repeat\n    writeln(count);\n    count := count + 1;\n  until (count > 5);",
          "contentSi": "count := 1;\n  repeat\n    writeln(count);\n    count := count + 1;\n  until (count > 5);"
        },
        {
          "id": "ex-11-1-6-6",
          "titleEn": "Schematic / Code Diagram 6",
          "titleSi": "පරිපථ / කේත සටහන 6",
          "contentEn": "var\n    marks : array[1..5] of integer;\n    i, sum : integer;",
          "contentSi": "var\n    marks : array[1..5] of integer;\n    i, sum : integer;"
        },
        {
          "id": "ex-11-1-6-7",
          "titleEn": "Schematic / Code Diagram 7",
          "titleSi": "පරිපථ / කේත සටහන 7",
          "contentEn": "sum := 0;\n  for i := 1 to 5 do\n  begin\n    readln(marks[i]);\n    sum := sum + marks[i];\n  end;",
          "contentSi": "sum := 0;\n  for i := 1 to 5 do\n  begin\n    readln(marks[i]);\n    sum := sum + marks[i];\n  end;"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u1-6",
        "questionEn": "Which of the following is the most accurate concept regarding Pascal Programming Language Syntax & Rules?",
        "questionSi": "පැස්කල් ක්‍රමලේඛන භාෂා රීති පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Pascal Programming Language Syntax & Rules",
            "si": "පැස්කල් ක්‍රමලේඛන භාෂා රීති පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Pascal Programming Language Syntax & Rules.",
        "explanationSi": "1 වන වරණය මගින් පැස්කල් ක්‍රමලේඛන භාෂා රීති පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
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
      "questionEn": "4. An algorithm is required to calculate the Body Mass Index (BMI) of a person using weight in kg ($W$) and height in meters ($H$). The formula is $\text{BMI} = \frac{W}{H^2}$.\n  If $\text{BMI} \\ge 25$, output 'Overweight', else output 'Normal'.\n  (i) Draw a flowchart for this algorithm.\n  (ii) Write the pseudocode.\n  (iii) Complete the Pascal code snippet.",
      "questionSi": "4. පුද්ගලයෙකුගේ බර කිලෝග්‍රෑම් වලින් ($W$) සහ උස මීටර් වලින් ($H$) භාවිත කර ශරීර ස්කන්ධ දර්ශකය (BMI) ගණනය කිරීමට ඇල්ගොරිතමයක් අවශ්‍ය වේ. සූත්‍රය වන්නේ $\text{BMI} = \frac{W}{H^2}$ වේ.\n  $\text{BMI} \\ge 25$ නම් 'Overweight' ලෙසද, නැතහොත් 'Normal' ලෙසද මුද්‍රණය කළ යුතුය.\n  (i) මෙම ඇල්ගොරිතමය සඳහා ගැලීම් සටහන අඳින්න.\n  (ii) පූර්ව කේතය ලියන්න.\n  (iii) පැස්කල් කේතය සම්පූර්ණ කරන්න.",
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
      "correctOptionId": "1",
      "explanationEn": "Verbatim official examination question from 2023 O/L Paper I - Question 39.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2023 O/L Paper I - Question 39."
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
