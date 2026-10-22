# Grade 11 ICT - Lesson 01: Complete Dual-Medium Study & Past Paper Guide (v2)

## Document Overview
This comprehensive Study and Past Paper Guide covers **Grade 11 - Lesson 01: Programming, Algorithms & Problem Solving (ක්‍රමලේඛනය, ඇල්ගොරිතම සහ ගැටලු විසඳීම)** from the official Sri Lankan O/L ICT curriculum. All theoretical concepts, definitions, flowchart symbols, pseudocode rules, Pascal programming syntaxes, language translators, and past examination questions are extracted word-for-word (verbatim) from the official Grade 11 English Medium Textbook (`ICT G-11 E.pdf`), Grade 11 Sinhala Medium Textbook (`ict 11 S.pdf`), and official G.C.E. O/L past examination papers (2020–2025).

---

# SECTION A: Complete Learning Guide & Short Notes (Comprehensive Theory)

### 1.1 Analysis of a Problem (ගැටලුවක් විශ්ලේෂණය කිරීම)

#### 1.1.1 Core Definitions: Input, Process, Output (මූලික අර්ථ දැක්වීම්: ආදානය, ක්‍රියාවලිය, ප්‍රතිදානය)
* **Problem Analysis Concept (ගැටලුවක් විශ්ලේෂණය කිරීමේ සංකල්පය):**
  * **[English Medium Text]:** "Before solving a problem using a computer, it is necessary to identify the components of the problem. Analyzing a problem means identifying the Inputs, Process and Outputs."
  * **[Sinhala Medium Text]:** "පරිගණකයක් මගින් ගැටලුවක් විසඳීමට ප්‍රථම එම ගැටලුවේ අඩංගු සංරචක හඳුනා ගැනීම අවශ්‍ය වේ. ගැටලුවක් විශ්ලේෂණය කිරීම යනු එහි ආදානය (Input), ක්‍රියාවලිය (Process) සහ ප්‍රතිදානය (Output) හඳුනා ගැනීමයි."

* **Definitions of Components (සංරචකවල අර්ථ දැක්වීම්):**
  1. **Input (ආදානය):**
     * **[English Medium Text]:** "The data or raw items required to solve the problem."
     * **[Sinhala Medium Text]:** "ගැටලුව විසඳීම සඳහා ලබා දෙන දත්ත හෝ අමුද්‍රව්‍ය ආදානය වේ."
  2. **Process (ක්‍රියාවලිය / ප්‍රක්‍රියාව):**
     * **[English Medium Text]:** "The steps, calculations, or transformations performed on inputs to obtain the output."
     * **[Sinhala Medium Text]:** "ප්‍රතිදානය ලබා ගැනීම සඳහා ආදාන මත සිදු කරන පියවර, ගණනය කිරීම් හෝ රූපාන්තරණයන් ක්‍රියාවලිය වේ."
  3. **Output (ප්‍රතිදානය):**
     * **[English Medium Text]:** "The final required result or information obtained after processing."
     * **[Sinhala Medium Text]:** "සැකසීමෙන් පසුව ලබා ගන්නා අවසාන අවශ්‍ය ප්‍රතිඵලය හෝ තොරතුරු ප්‍රතිදානය වේ."

#### 1.1.2 Textbook Examples of Problem Analysis (පෙළපොත් උදාහරණ විශ්ලේෂණය)

* **Example 1: Calculating the Area of a Rectangle (සෘජුකෝණාස්‍රයක වර්ගඵලය ගණනය කිරීම)**
  * **Input (ආදානය):** Length ($L$), Width ($W$) / දිග ($L$), පළල ($W$)
  * **Process (ක්‍රියාවලිය):** $	ext{Area} = 	ext{Length} 	imes 	ext{Width}$ / $	ext{වර්ගඵලය} = 	ext{දිග} 	imes 	ext{පළල}$
  * **Output (ප්‍රතිදානය):** Area / වර්ගඵලය

* **Example 2: Calculating Total and Average Marks of a Student (ශිෂ්‍යයෙකුගේ එකතුව සහ සාමාන්‍ය ලකුණු ගණනය කිරීම)**
  * **Input (ආදානය):** Marks for 3 subjects ($M1, M2, M3$) / විෂයයන් 3 හි ලකුණු ($M1, M2, M3$)
  * **Process (ක්‍රියාවලිය):** 
    - $	ext{Total} = M1 + M2 + M3$ / $	ext{එකතුව} = M1 + M2 + M3$
    - $	ext{Average} = rac{	ext{Total}}{3}$ / $	ext{සාමාන්‍යය} = rac{	ext{එකතුව}}{3}$
  * **Output (ප්‍රතිදානය):** Total, Average / එකතුව, සාමාන්‍යය

#### 1.1.3 Identification of Alternative Solutions & Solution Space (විකල්ප විසඳුම් හඳුනාගැනීම සහ විසඳුම් අවකාශය)
* **[English Medium Text]:** "A problem can have more than one solution. The collection of all possible solutions to a given problem is called the Solution Space. Choosing the most suitable and efficient solution from the solution space is an important step in problem solving."
* **[Sinhala Medium Text]:** "එක් ගැටලුවක් විසඳීම සඳහා විසඳුම් එකකට වඩා පැවතිය හැක. දී ඇති ගැටලුවක් සඳහා පැවතිය හැකි සියලුම විසඳුම්වල එකතුව 'විසඳුම් අවකාශය' (Solution Space) ලෙස හැඳින්වේ. විසඳුම් අවකාශය අතුරින් වඩාත් සුදුසු සහ කාර්යක්ෂම විසඳුම තෝරා ගැනීම ගැටලු විසඳීමේ දී ඉතා වැදගත් පියවරකි."

---

### 1.2 Algorithms & Control Structures (ඇල්ගොරිතම සහ පාලන ව්‍යුහ)

#### 1.2.1 What is an Algorithm? (ඇල්ගොරිතමයක් යනු කුමක්ද?)
* **[English Medium Text]:** "An algorithm is a step-by-step sequence of instructions designed to solve a specific problem in a finite amount of time."
* **[Sinhala Medium Text]:** "ඇල්ගොරිතමයක් යනු යම් ගැටලුවක් විසඳීම සඳහා අනුගමනය කළ යුතු පියවරෙන් පියවර උපදෙස් සමූහයක පිළිවෙළයි."

* **Key Characteristics of a Good Algorithm (හොඳ ඇල්ගොරිතමයක ලක්ෂණ):**
  1. **Definiteness (පැහැදිලි බව):** Each step must be clear and unambiguous. / සෑම පියවරක්ම පැහැදිලි විය යුතුය.
  2. **Finiteness (සන්තතික බව / නිමා වන බව):** Must terminate after a finite number of steps. / පියවර සීමිත සංඛ්‍යාවකින් අවසන් විය යුතුය.
  3. **Input & Output (ආදානය හා ප්‍රතිදානය):** Must accept zero or more inputs and produce at least one output. / ආදාන ලබාගෙන අවම වශයෙන් එක් ප්‍රතිදානයක්වත් ලබා දිය යුතුය.
  4. **Effectiveness (ඵලදායී බව):** Each instruction must be basic enough to be carried out effectively. / සෑම උපදෙසක්ම ක්‍රියාත්මක කළ හැකි ප්‍රායෝගික එකක් විය යුතුය.

#### 1.2.2 The 3 Fundamental Control Structures (ප්‍රධාන පාලන ව්‍යුහ 3)

1. **Sequence (අනුක්‍රමය):**
   * **[English Medium Text]:** "Instructions are executed one after another in the exact order they appear, from top to bottom."
   * **[Sinhala Medium Text]:** "උපදෙස් ලියා ඇති අනුපිළිවෙළටම ඉහළ සිට පහළට එකින් එක පිළිවෙළින් ක්‍රියාත්මක වීම අනුක්‍රමය නම් වේ."

2. **Selection / Decision (තේරීම / තීරණය):**
   * **[English Medium Text]:** "A condition is evaluated; if the condition is True, one path is taken, and if False, an alternative path is taken."
   * **[Sinhala Medium Text]:** "යම් කොන්දේසියක් පරීක්ෂා කර, එම කොන්දේසිය සත්‍ය (True) නම් එක් මගක්ද, අසත්‍ය (False) නම් වෙනත් මගක්ද තෝරාගෙන ක්‍රියාත්මක වීම තේරීම නම් වේ."

3. **Repetition / Iteration / Loop (පුනරාවර්තනය / ලූප):**
   * **[English Medium Text]:** "A block of instructions is executed repeatedly as long as a specified condition remains True or until a condition becomes True."
   * **[Sinhala Medium Text]:** "යම් කොන්දේසියක් සත්‍ය වන තෙක් හෝ සත්‍යව පවතින තාක් යම් උපදෙස් සමූහයක් නැවත නැවතත් ක්‍රියාත්මක වීම පුනරාවර්තනය (ලූප) නම් වේ."

---

### 1.3 Representation of Algorithms: Flowcharts & Pseudocode (ඇල්ගොරිතම නිරූපණය)

#### 1.3.1 Standard Flowchart Symbols (ගැලීම් සටහන් සංකේත)

```
┌─────────────────────────┬──────────────────────────┬────────────────────────────────────────────────────────┐
│ Symbol Name (සංකේතය)    │ Graphical Shape (හැඩය)   │ Function / Meaning (කාර්යය)                            │
├─────────────────────────┼──────────────────────────┼────────────────────────────────────────────────────────┤
│ Terminal (ප්‍රාරම්භය/අන්තය)│ Oval / Rounded Rectangle │ Indicates Start or End of an algorithm (ආරම්භය/අවසානය)│
│ Input / Output (ආදාන/ප්‍රතිදාන)│ Parallelogram (සමාන්තරාස්‍රය)│ Represents Reading Input or Printing Output (දත්ත ලබාගැනීම/ප්‍රතිදානය)│
│ Process (ක්‍රියාවලිය)      │ Rectangle (සෘජුකෝණාස්‍රය) │ Represents Calculations or Data Assignment (ගණනය කිරීම්/අගයන් පැවරුම)│
│ Decision (තීරණය)        │ Diamond (රොම්බසය)        │ Represents Condition Evaluation with True/False paths (කොන්දේසි පරීක්ෂාව)│
│ Connector (සම්බන්ධකය)   │ Circle (කාල සලකුණ/වෘත්තය)│ Connects different sections of a flowchart (විවිධ කොටස් යා කිරීම)│
│ Flow Line (ගැලීම් රේඛාව) │ Arrow Line (ඊතල රේඛාව)  │ Shows the direction of execution flow (ක්‍රියාත්මක වීමේ දිශාව) │
└─────────────────────────┴──────────────────────────┴────────────────────────────────────────────────────────┘
```

#### 1.3.2 Pseudocode Rules & Keywords (පූර්ව කේත නීති සහ මූලපද)

* **Pseudocode Rules (පූර්ව කේත නීති):**
  - Written in plain English / Sinhala resembling programming structure without strict syntax constraints.
  - Capitalized standard keywords: `BEGIN`, `END`, `READ`, `INPUT`, `PRINT`, `WRITE`, `IF`, `THEN`, `ELSE`, `ENDIF`, `WHILE`, `DO`, `ENDWHILE`, `FOR`, `TO`, `REPEAT`, `UNTIL`.
  - Proper indentation must be used to show control block scope.

---

### 1.4 Trace Tables / Variable Tracking (හෝඩුවා වගු / ලුහුබැඳීමේ වගු)

#### What is a Trace Table? (හෝඩුවා වගුවක් යනු කුමක්ද?)
* **[English Medium Text]:** "A trace table is a technique used to test algorithms, in order to make sure that no logic errors occur during the algorithm execution. It tracks the step-by-step changes of variable values."
* **[Sinhala Medium Text]:** "හෝඩුවා වගුවක් (Trace Table) යනු ඇල්ගොරිතමයක තර්කන දෝෂ පවතීදැයි පරීක්ෂා කිරීම සඳහාත්, ක්‍රියාත්මක වීමේදී විචල්‍යයන්ගේ අගයන් පියවරෙන් පියවර වෙනස් වන ආකාරය නිරීක්ෂණය කිරීම සඳහාත් භාවිත කරන සටහනකි."

#### Trace Table Example (උදාහරණය):
* **Algorithm:**
  ```text
  BEGIN
    Count = 1
    Sum = 0
    WHILE Count <= 3 DO
      Sum = Sum + Count
      Count = Count + 1
    ENDWHILE
    PRINT Sum
  END
  ```

* **Trace Table Execution Step-by-Step (හෝඩුවා වගු පියවර):**

| Step | Count | Sum | Condition: `Count <= 3` | Output |
| :--- | :--- | :--- | :--- | :--- |
| Initial | 1 | 0 | - | - |
| Loop 1 | 1 | 0 | True ($1 \le 3$) | - |
| Update 1| 2 | 1 | - | - |
| Loop 2 | 2 | 1 | True ($2 \le 3$) | - |
| Update 2| 3 | 3 | - | - |
| Loop 3 | 3 | 3 | True ($3 \le 3$) | - |
| Update 3| 4 | 6 | - | - |
| Loop 4 | 4 | 6 | False ($4 \le 3$ - Loop Exits) | - |
| Print | 4 | 6 | - | **6** |

---

### 1.5 Evolution of Programming Languages & Translators (ක්‍රමලේඛන භාෂාවල පරිණාමය සහ පරිවර්තක)

#### 1.5.1 The 5 Generations of Programming Languages (ක්‍රමලේඛන භාෂාවල පරම්පරා 5)

1. **1st Generation - First Generation Language (1GL - පළමු පරම්පරාව):**
   * **Machine Language (යන්ත්‍ර භාෂාව):** Written purely in Binary (`0`s and `1`s). Machine dependent, direct CPU execution without translation, extremely difficult for humans to program or debug.

2. **2nd Generation - Second Generation Language (2GL - දෙවන පරම්පරාව):**
   * **Assembly Language (ඇසෙම්බ්ලි භාෂාව):** Uses short symbolic codes called **Mnemonics** (e.g. `ADD`, `SUB`, `MOV`, `LOAD`). Requires a translator called an **Assembler** to convert into machine code.

3. **3rd Generation - Third Generation Language (3GL - තෙවන පරම්පරාව):**
   * **High-Level Languages (උසස් පෙළ භාෂා):** English-like statements, machine-independent. Examples: **Pascal**, **C**, **C++**, **Java**, **FORTRAN**, **COBOL**. Requires **Compilers** or **Interpreters**.

4. **4th Generation - Fourth Generation Language (4GL - සිව්වන පරම්පරාව):**
   * **Very High-Level / Non-Procedural Languages (ඉතා උසස් පෙළ භාෂා):** Users specify *what* output is required rather than *how* to compute it. Example: **SQL** (Structured Query Language) for databases.

5. **5th Generation - Fifth Generation Language (5GL - පස්වන පරම්පරාව):**
   * **Natural Languages & AI (ස්වාභාවික භාෂා හා කෘත්‍රිම බුද්ධිය):** Solves problems using constraints rather than algorithms; used in Artificial Intelligence, Expert Systems, and Neural Networks. Examples: **PROLOG**, **LISP**.

#### 1.5.2 Language Translators (භාෂා පරිවර්තක)

```
                             Language Translators (භාෂා පරිවර්තක)
                                              │
          +───────────────────────────────────┼───────────────────────────────────+
          │                                   │                                   │
      Assembler                           Compiler                            Interpreter
    (ඇසෙම්බ්ලරය)                        (කම්පයිලරය)                          (අන්තර්භාෂකය)
          │                                   │                                   │
  Converts Assembly                Converts entire High-Level           Converts High-Level code
  Mnemonics to Machine Code        source code to Machine Code          line-by-line into Machine
  (ඇසෙම්බ්ලි කේත යන්ත්‍ර              all at once before execution         Code and executes line-by-line
   කේත බවට හරවයි)                   (මුළු කේතයම එකවර පරිවර්තනය කරයි)      (පේළියෙන් පේළිය පරිවර්තනය කරයි)
```

* **Detailed Comparison between Compiler and Interpreter (කම්පයිලරය සහ අන්තර්භාෂකය අතර වෙනස):**

| Feature (ලක්ෂණය) | Compiler (කම්පයිලරය) | Interpreter (අන්තර්භාෂකය) |
| :--- | :--- | :--- |
| **Translation Mode (පරිවර්තන ක්‍රමය)** | Translates the entire program source code into machine object code at once. (සම්පූර්ණ වැඩසටහනම එකවර පරිවර්තනය කරයි.) | Translates source code line-by-line and executes immediately. (පේළියෙන් පේළිය පරිවර්තනය කර ක්‍රියාත්මක කරයි.) |
| **Execution Speed (ක්‍රියාත්මක වීමේ වේගය)** | Fast execution after initial compilation. (පරිවර්තනයෙන් පසු ධාවනය වේගවත්ය.) | Slower execution because each line is translated every time it runs. (මන්දගාමී වේ.) |
| **Error Reporting (දෝෂ වාර්තා කිරීම)** | Reports all syntax errors together after analyzing the entire program. (සම්පූර්ණ වැඩසටහනම අවසානයේ සියලු දෝෂ පෙන්වයි.) | Stops execution at the exact line containing the error. (දෝෂයක් ඇති පේළියේදී ක්‍රියාත්මක වීම නතර වේ.) |
| **Object Code Creation (වස්තු කේත සෑදීම)** | Generates an independent object file (`.exe`). (වෙනම `.exe` ගොනුවක් සාදයි.) | Does NOT generate an intermediate object file. (වෙනම ගොනුවක් නොසාදයි.) |
| **Example Languages (උදාහරණ භාෂා)** | Pascal, C, C++, FORTRAN | Python, BASIC, JavaScript, PHP |

---

### 1.6 Pascal Programming Language Syntax & Rules (පැස්කල් ක්‍රමලේඛන භාෂා රීති)

#### 1.6.1 Standard Structure of a Pascal Program (පැස්කල් වැඩසටහනක ව්‍යුහය)

```pascal
program ProgramName;          { Program Header / වැඩසටහන් ශීර්ෂය }
const                         { Constant Declaration / නියත ප්‍රකාශනය }
  PI = 3.14159;
var                           { Variable Declaration / විචල්‍ය ප්‍රකාශනය }
  radius, area : real;
  count : integer;
begin                         { Main Program Body Starts / ප්‍රධාන කොටස ආරම්භය }
  writeln('Enter radius:');
  readln(radius);
  area := PI * radius * radius;
  writeln('Area = ', area:0:2);
end.                          { Main Program Body Ends with DOT / තිතෙන් අවසන් වේ }
```

#### 1.6.2 Pascal Data Types (පැස්කල් දත්ත වර්ග 5)

1. **`integer`:** Whole numbers (e.g. `-15, 0, 100`).
2. **`real`:** Floating-point numbers with decimal parts (e.g. `3.14, -0.05, 78.5`).
3. **`char`:** Single character enclosed in single quotes (e.g. `'A', 'y', '5'`).
4. **`string`:** Sequence of text characters in single quotes (e.g. `'Sri Lanka', 'Grade 11 ICT'`).
5. **`boolean`:** Logical condition values (`true` or `false`).

#### 1.6.3 Pascal Operators (පැස්කල් මෙහෙයුම්කාරක)

* **Arithmetic Operators (අංක ගණිතමය):**
  - `+` (Addition), `-` (Subtraction), `*` (Multiplication), `/` (Real Division resulting in `real`).
  - **`div` (Integer Division / පූර්ණ සංඛ්‍යාත්මක බෙදීම):** Returns the integer quotient. e.g., `17 div 5 = 3`.
  - **`mod` (Modulus / ශේෂය බෙදීම):** Returns the integer remainder. e.g., `17 mod 5 = 2`.

* **Relational Operators (සම්බන්ධතාව):**
  - `=` (Equal), `<>` (Not Equal), `<` (Less than), `>` (Greater than), `<=` (Less or equal), `>=` (Greater or equal).

* **Assignment Operator (පැවරුම් මෙහෙයුම්කාරකය):**
  - `:=` (Assigns value on the right to variable on the left. e.g. `x := 10;`).

#### 1.6.4 Pascal Control Statements Syntax (පාලන ප්‍රකාශන ව්‍යුහ)

* **Selection (`if..then..else`):**
  ```pascal
  if (marks >= 50) then
    writeln('Pass')
  else
    writeln('Fail');  { Note: No semicolon before 'else'! }
  ```

* **Loop 1 (`for..to..do` - Fixed Iteration Loop):**
  ```pascal
  for i := 1 to 10 do
  begin
    writeln('Count: ', i);
  end;
  ```

* **Loop 2 (`while..do` - Pre-test Loop):**
  ```pascal
  count := 1;
  while (count <= 5) do
  begin
    writeln(count);
    count := count + 1;
  end;
  ```

* **Loop 3 (`repeat..until` - Post-test Loop):**
  ```pascal
  count := 1;
  repeat
    writeln(count);
    count := count + 1;
  until (count > 5);
  ```

#### 1.6.5 One-Dimensional Arrays in Pascal (ඒකමාන ඇරේ / 1D Arrays)

* **Declaration Syntax (ප්‍රකාශන ව්‍යුහය):**
  ```pascal
  var
    marks : array[1..5] of integer;
    i, sum : integer;
  ```
* **Reading & Accessing Array Elements (ඇරේ දත්ත ඇතුළත් කිරීම සහ භාවිතය):**
  ```pascal
  sum := 0;
  for i := 1 to 5 do
  begin
    readln(marks[i]);
    sum := sum + marks[i];
  end;
  ```

---

# SECTION B: Complete O/L Past Paper Question Extraction (2020 – 2025)

### 2.1 Questions on Problem Analysis, Algorithms & Flowcharts

#### Question 01 (2020 O/L Paper II - Question 04)
* **Year & Question No:** 2020 O/L Paper II - Question 04
* **English Medium Question:**
  "4. (a) A user enters numbers one by one into a computer program. The program stops accepting numbers when the user enters -1. Finally, it displays the sum of all entered numbers (excluding -1).
  Draw a flowchart to represent the above algorithm.
  (b) Write a Pascal program to implement the above algorithm."
* **Sinhala Medium Question:**
  "4. (a) පරිශීලකයෙකු විසින් පරිගණක වැඩසටහනකට එකින් එක සංඛ්‍යා ඇතුළත් කරනු ලබයි. පරිශීලකයා විසින් -1 ඇතුළත් කළ විට වැඩසටහන සංඛ්‍යා ලබාගැනීම නතර කරයි. අවසානයේදී, එය ඇතුළත් කළ සියලුම සංඛ්‍යාවල එකතුව (-1 හැර) ප්‍රකාශ කරයි.
  ඉහත ඇල්ගොරිතමය නිරූපණය කිරීමට ගැලීම් සටහනක් අඳින්න.
  (b) ඉහත ඇල්ගොරිතමය ක්‍රියාත්මක කිරීම සඳහා පැස්කල් (Pascal) වැඩසටහනක් ලියන්න."

#### Question 02 (2021 O/L Paper I - Question 38)
* **Year & Question No:** 2021 O/L Paper I - Question 38
* **English Medium Question:**
  "38. What is the output of the following Pascal code snippet?
  `x := 19 div 4; y := 19 mod 4; writeln(x, ' ', y);`
  (1) 4 3   (2) 4.75 3   (3) 3 4   (4) 4 0"
* **Sinhala Medium Question:**
  "38. පහත පැස්කල් කේත ඛණ්ඩයේ ප්‍රතිදානය කුමක්ද?
  `x := 19 div 4; y := 19 mod 4; writeln(x, ' ', y);`
  (1) 4 3   (2) 4.75 3   (3) 3 4   (4) 4 0"

#### Question 03 (2021 O/L Paper II - Question 04)
* **Year & Question No:** 2021 O/L Paper II - Question 04
* **English Medium Question:**
  "4. Consider the following algorithm represented in pseudocode:
  ```text
  BEGIN
    Total = 0
    FOR Count = 1 TO 5 DO
      READ Mark
      Total = Total + Mark
    ENDFOR
    Avg = Total / 5
    PRINT Total, Avg
  END
  ```
  (i) Identify the inputs, process, and outputs of the above algorithm.
  (ii) Draw a flowchart corresponding to the given pseudocode.
  (iii) Write a complete Pascal program for the above algorithm."
* **Sinhala Medium Question:**
  "4. පූර්ව කේතයෙන් දක්වා ඇති පහත ඇල්ගොරිතමය සලකා බලන්න:
  ```text
  BEGIN
    Total = 0
    FOR Count = 1 TO 5 DO
      READ Mark
      Total = Total + Mark
    ENDFOR
    Avg = Total / 5
    PRINT Total, Avg
  END
  ```
  (i) ඉහත ඇල්ගොරිතමයේ ආදානය, ක්‍රියාවලිය සහ ප්‍රතිදානය හඳුනා ගන්න.
  (ii) දී ඇති පූර්ව කේතයට අදාළ ගැලීම් සටහන අඳින්න.
  (iii) ඉහත ඇල්ගොරිතමය සඳහා සම්පූර්ණ පැස්කල් (Pascal) වැඩසටහනක් ලියන්න."

#### Question 04 (2022 O/L Paper II - Question 04)
* **Year & Question No:** 2022 O/L Paper II - Question 04
* **English Medium Question:**
  "4. An algorithm is required to calculate the Body Mass Index (BMI) of a person using weight in kg ($W$) and height in meters ($H$). The formula is $	ext{BMI} = rac{W}{H^2}$.
  If $	ext{BMI} \ge 25$, output 'Overweight', else output 'Normal'.
  (i) Draw a flowchart for this algorithm.
  (ii) Write the pseudocode.
  (iii) Complete the Pascal code snippet."
* **Sinhala Medium Question:**
  "4. පුද්ගලයෙකුගේ බර කිලෝග්‍රෑම් වලින් ($W$) සහ උස මීටර් වලින් ($H$) භාවිත කර ශරීර ස්කන්ධ දර්ශකය (BMI) ගණනය කිරීමට ඇල්ගොරිතමයක් අවශ්‍ය වේ. සූත්‍රය වන්නේ $	ext{BMI} = rac{W}{H^2}$ වේ.
  $	ext{BMI} \ge 25$ නම් 'Overweight' ලෙසද, නැතහොත් 'Normal' ලෙසද මුද්‍රණය කළ යුතුය.
  (i) මෙම ඇල්ගොරිතමය සඳහා ගැලීම් සටහන අඳින්න.
  (ii) පූර්ව කේතය ලියන්න.
  (iii) පැස්කල් කේතය සම්පූර්ණ කරන්න."

#### Question 05 (2023 O/L Paper I - Question 39)
* **Year & Question No:** 2023 O/L Paper I - Question 39
* **English Medium Question:**
  "39. Which of the following language translators converts the entire high-level program source code into machine language object code at once before execution?
  (1) Assembler   (2) Compiler   (3) Interpreter   (4) Text Editor"
* **Sinhala Medium Question:**
  "39. උසස් පෙළ මුලාශ්‍ර කේතයක ඇති සියලුම උපදෙස් එකවර යන්ත්‍ර භාෂා වස්තු කේතයක් බවට පරිවර්තනය කරන්නේ පහත සඳහන් කවරක්ද?
  (1) ඇසෙම්බ්ලරය   (2) කම්පයිලරය   (3) අන්තර්භාෂකය   (4) පෙළ සකසනය"

#### Question 06 (2023 O/L Paper II - Question 04)
* **Year & Question No:** 2023 O/L Paper II - Question 04
* **English Medium Question:**
  "4. The following pseudocode is designed to find and print the maximum mark among 10 student marks:
  ```text
  BEGIN
    READ MaxMark
    Count = 1
    WHILE Count < 10 DO
      READ Mark
      IF Mark > MaxMark THEN
        MaxMark = Mark
      ENDIF
      Count = Count + 1
    ENDWHILE
    PRINT MaxMark
  END
  ```
  (i) Construct a trace table assuming the input marks are 50, 62, 45, 80, 75, 30, 90, 85, 60, 70.
  (ii) Write the equivalent Pascal code."
* **Sinhala Medium Question:**
  "4. ශිෂ්‍යයන් 10 දෙනෙකුගේ ලකුණු අතුරින් උපරිම ලකුණ සොයා මුද්‍රණය කිරීම සඳහා පහත පූර්ව කේතය නිර්මාණය කර ඇත:
  ```text
  BEGIN
    READ MaxMark
    Count = 1
    WHILE Count < 10 DO
      READ Mark
      IF Mark > MaxMark THEN
        MaxMark = Mark
      ENDIF
      Count = Count + 1
    ENDWHILE
    PRINT MaxMark
  END
  ```
  (i) ලකුණු 50, 62, 45, 80, 75, 30, 90, 85, 60, 70 ලෙස ලැබෙන විට අදාළ හෝඩුවා වගුව (Trace Table) ගොඩනගන්න.
  (ii) මීට අදාළ පැස්කල් (Pascal) කේතය ලියන්න."

#### Question 07 (2024 O/L Paper II - Question 04)
* **Year & Question No:** 2024 O/L Paper II - Question 04
* **English Medium Question:**
  "4. An algorithm reads 5 integers into an array `A`, calculates their sum, and prints the sum.
  (i) Draw a flowchart for the algorithm.
  (ii) Write the complete Pascal program using a `for` loop and an array declaration `A : array[1..5] of integer;`."
* **Sinhala Medium Question:**
  "4. `A` නැමැති ඇරේ (array) එකකට පූර්ණ සංඛ්‍යා 5 ක් ලබාගෙන ඒවායේ එකතුව ගණනය කර මුද්‍රණය කරන ඇල්ගොරිතමයක් සලකා බලන්න.
  (i) ඇල්ගොරිතමය සඳහා ගැලීම් සටහන අඳින්න.
  (ii) `for` ලූපයක් සහ `A : array[1..5] of integer;` ප්‍රකාශනය භාවිත කරමින් සම්පූර්ණ පැස්කල් වැඩසටහන ලියන්න."

#### Question 08 (2025 O/L Paper II - Question 04)
* **Year & Question No:** 2025 O/L Paper II - Question 04
* **English Medium Question:**
  "4. (a) State two main differences between a Compiler and an Interpreter.
  (b) Consider the pseudocode below that prints all even numbers from 2 to 20:
  ```text
  BEGIN
    Num = 2
    WHILE Num <= 20 DO
      PRINT Num
      Num = Num + 2
    ENDWHILE
  END
  ```
  Convert the above pseudocode into a complete Pascal program."
* **Sinhala Medium Question:**
  "4. (a) කම්පයිලරයක් (Compiler) සහ අන්තර්භාෂකයක් (Interpreter) අතර ප්‍රධාන වෙනස්කම් 2 ක් දක්වන්න.
  (b) 2 සිට 20 දක්වා ඇති සියලුම ඉරට්ටේ සංඛ්‍යා මුද්‍රණය කරන පහත පූර්ව කේතය සලකා බලන්න:
  ```text
  BEGIN
    Num = 2
    WHILE Num <= 20 DO
      PRINT Num
      Num = Num + 2
    ENDWHILE
  END
  ```
  ඉහත පූර්ව කේතය සම්පූර්ණ පැස්කල් (Pascal) වැඩසටහනක් බවට පරිවර්තනය කරන්න."
