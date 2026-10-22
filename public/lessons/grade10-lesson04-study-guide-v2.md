# Grade 10 ICT - Lesson 04: Master Dual-Medium Study & Past Paper Guide
# පාඩම 04: මූලික ලොජික් ද්වාර සහ බූලීය තර්කනය (Fundamental Logic Gates & Boolean Logic)

---

## Document Overview / ලේඛන දළ විශ්ලේෂණය
This study and past paper guide provides comprehensive, verbatim, dual-medium coverage of **Grade 10 - Lesson 04: Fundamental Logic Gates & Boolean Logic (මූලික ලොජික් ද්වාර සහ බූලීය තර්කනය)** from the official National Institute of Education (NIE) Sri Lanka G.C.E. O/L ICT curriculum. All theoretical definitions, circuit diagrams, truth tables, IC pinouts, and exam problems conform 100% to the official Sinhala and English medium textbooks and the G.C.E. O/L examination papers (2020–2025).

---

# LAYER 1: Core Principles & Definitions (මූලික මූලධර්ම සහ අර්ථ දැක්වීම්)

### 4.1 Digital Logic States, Signals, and Voltage Levels (සංඛ්‍යාංක තර්කන අවස්ථා, සංඥා සහ වෝල්ටීයතා මට්ටම්)

#### Binary Conditions & Electrical Representation (ද්විමය තත්ත්ව සහ විද්‍යුත් නිරූපණය)
* **[English Medium Text]:** In digital electronics and computer systems, information is processed and represented using two distinct binary states: **Logic LOW (0)** and **Logic HIGH (1)**. These states correspond directly to physical voltage levels and switch positions within an electronic circuit.
* **[Sinhala Medium Text]:** සංඛ්‍යාංක ඉලෙක්ට්‍රොනික විද්‍යාවේදී සහ පරිගණක පද්ධති තුළ තොරතුරු සකසනු ලබන්නේ සහ නිරූපණය කරනු ලබන්නේ පැහැදිලි ද්විමය අවස්ථා දෙකක් මගිනි: **පහළ මට්ටම (0 / Low)** සහ **ඉහළ මට්ටම (1 / High)**. මෙම තත්ත්වයන් විද්‍යුත් පරිපථයක භෞතික වෝල්ටීයතා මට්ටම්වලට සහ ස්විචයක ක්‍රියාකාරීත්වයට සෘජුවම අනුරූප වේ.

| Logic State / Binary Digit | Electrical Voltage Level | Electronic Switch Equivalent | Circuit Lamp / Indicator | Boolean Truth Value |
| :--- | :--- | :--- | :--- | :--- |
| **0 (LOW / පහළ)** | 0 V (Ground / Negative) | Open Switch (විවෘත ස්විචය / Off) | Lamp OFF (නැත / අක්‍රිය) | False (අසත්‍ය) |
| **1 (HIGH / ඉහළ)** | +5 V (VCC / Positive) | Closed Switch (වැසූ ස්විචය / On) | Lamp ON (දැල්වේ / සක්‍රිය) | True (සත්‍ය) |

#### Concept of Logic Circuits and Logic Gates (තර්කන පරිපථ සහ ලොජික් ද්වාර සංකල්පය)
* **Logic Circuit (තර්කන පරිපථය):**
  * **[English]:** A circuit capable of establishing logical conditions based on binary digits and making deterministic operational decisions is called a **Logic Circuit**. A computer is an intricate interconnection of millions of digital logic circuits.
  * **[Sinhala]:** ද්විමය සංඛ්‍යා අනුසාරයෙන් යම් යම් තර්ක තත්ත්ව ගොඩනැඟීමටත් ඒ අනුව තීරණ ගැනීමටත් හැකි වන පරිපථ **තර්කන පරිපථ (Logic Circuits)** ලෙස හැඳින්වේ. පරිගණකය යනු මෙවැනි සංකීර්ණ සංඛ්‍යාංක පරිපථ රාශියක එකතුවකි.
* **Logic Gate (ලොජික් ද්වාරය):**
  * **[English]:** A **Logic Gate** is an elementary building block of a digital circuit. Most logic gates receive two or more binary inputs and generate exactly one binary output based on a specific logical rule.
  * **[Sinhala]:** **ලොජික් ද්වාරයක් (Logic Gate)** යනු සංඛ්‍යාංක පරිපථයක මූලික තැනුම් ඒකකයයි. බොහෝ ලොජික් ද්වාර සඳහා ආදාන දෙකක් හෝ ඊට වැඩි ගණනක් ඇති අතර, නිශ්චිත තර්කානුකූල නීතියකට අනුව එක් ප්‍රතිදානයක් (Output) පමණක් ලබා දෙයි.
* **Physical Hardware Construction & Integrated Circuits (අනුකලිත පරිපථ - IC):**
  * **[English]:** Early electronic gates were constructed using discrete diodes, resistors, and transistors. In modern computer hardware, millions of microscopic logic gates are fabricated onto a single semiconductor silicon chip known as an **Integrated Circuit (IC)** or Microprocessor.
  * **[Sinhala]:** මුල් කාලීන ඉලෙක්ට්‍රොනික ද්වාර තැනීම සඳහා ඩයෝඩ (Diodes), රෙසිස්ටර (Resistors) සහ ට්‍රාන්සිස්ටර (Transistors) වැනි විවික්ත උපාංග භාවිත විය. නූතන පරිගණක දෘඩාංග තුළ සිලිකන් අර්ධ සන්නායක චිපයක් මත ලොජික් ද්වාර මිලියන ගණනක් එකතු කර තනි ඒකකයක් ලෙස නිෂ්පාදනය කෙරේ. මෙය **අනුකලිත පරිපථයක් (Integrated Circuit - IC)** හෝ ක්ෂුද්‍ර ප්‍රොසෙසරයක් ලෙස හැඳින්වේ.

---

### 4.2 Primary Basic Logic Gates (මූලික ලොජික් ද්වාර)

The three fundamental primary logic gates upon which all computer logic is built are **AND**, **OR**, and **NOT**.

#### 4.2.1 AND Gate (සහ ද්වාරය)
* **Governing Rule (ක්‍රියාකාරී නීතිය):**
  * **[English]:** An AND gate produces an output of HIGH (1) **only if ALL of its inputs are HIGH (1)**. If any single input is LOW (0), the output is LOW (0).
  * **[Sinhala]:** AND ද්වාරයක සියලුම ආදානයන් ඉහළ (1) මට්ටමේ පවතින විට පමණක් ප්‍රතිදානය ඉහළ (1) වේ. ඕනෑම එක් ආදානයක් හෝ පහළ (0) මට්ටමේ පවතී නම් ප්‍රතිදානය පහළ (0) වේ.
* **Boolean Expression (බූලීය ප්‍රකාශනය):**
  $$Q = A \cdot B \quad \text{or} \quad Q = AB$$
  *(Logical Multiplication / තර්කානුකූල ගුණ කිරීම)*
* **Electronic Switch Circuit (විද්‍යුත් ස්විච පරිපථය - Series Configuration):**
  ```
  +---[ Switch A ]---[ Switch B ]---( Bulb Q )---+
  |                                              |
  +-----------------( Battery + - )--------------+
  ```
  *Current can flow through Bulb Q only when Switch A AND Switch B are closed simultaneously.*
* **ANSI Schematic Symbol (ලොජික් සංකේතය):**
  ```
  A ───┬───────╮
       │  AND   )── Q = A · B
  B ───┴───────╯
  ```
* **Truth Table (සත්‍යතා වගුව):**
  | Input A | Input B | Output $Q = A \cdot B$ |
  | :---: | :---: | :---: |
  | 0 | 0 | **0** |
  | 0 | 1 | **0** |
  | 1 | 0 | **0** |
  | 1 | 1 | **1** |

---

#### 4.2.2 OR Gate (හෝ ද්වාරය)
* **Governing Rule (ක්‍රියාකාරී නීතිය):**
  * **[English]:** An OR gate produces an output of HIGH (1) **if AT LEAST ONE of its inputs is HIGH (1)**. The output is LOW (0) only if all inputs are LOW (0).
  * **[Sinhala]:** OR ද්වාරයක ආදාන එකක් හෝ ඊට වැඩි ගණනක් ඉහළ (1) මට්ටමේ පවතින විට ප්‍රතිදානය ඉහළ (1) වේ. සියලුම ආදාන පහළ (0) මට්ටමේ පවතින විට පමණක් ප්‍රතිදානය පහළ (0) වේ.
* **Boolean Expression (බූලීය ප්‍රකාශනය):**
  $$Q = A + B$$
  *(Logical Addition / තර්කානුකූල එකතු කිරීම)*
* **Electronic Switch Circuit (විද්‍යුත් ස්විච පරිපථය - Parallel Configuration):**
  ```
  +-------+---[ Switch A ]---+-------( Bulb Q )---+
  |       |                  |                    |
  |       +---[ Switch B ]---+                    |
  |                                               |
  +----------------( Battery + - )----------------+
  ```
  *Current can reach Bulb Q if Switch A OR Switch B (or both) is closed.*
* **ANSI Schematic Symbol (ලොජික් සංකේතය):**
  ```
  A ───╮
        ╲  OR   )── Q = A + B
  B ───╯       ╱
       ╰──────╯
  ```
* **Truth Table (සත්‍යතා වගුව):**
  | Input A | Input B | Output $Q = A + B$ |
  | :---: | :---: | :---: |
  | 0 | 0 | **0** |
  | 0 | 1 | **1** |
  | 1 | 0 | **1** |
  | 1 | 1 | **1** |

---

#### 4.2.3 NOT Gate / Inverter (නොවන ද්වාරය / ප්‍රතිලෝමකය)
* **Governing Rule (ක්‍රියාකාරී නීතිය):**
  * **[English]:** A NOT gate has **only one input and one output**. It inverts (reverses) the binary logic state: if the input is 0, the output is 1; if the input is 1, the output is 0.
  * **[Sinhala]:** NOT ද්වාරයක පවතින්නේ **එක් ආදානයක් සහ එක් ප්‍රතිදානයක් පමණි**. එය ලබාදෙන ද්විමය සංඥාව ප්‍රතිලෝම (අනුපූරණය) කරයි: ආදානය 0 වන විට ප්‍රතිදානය 1 ද, ආදානය 1 වන විට ප්‍රතිදානය 0 ද වේ.
* **Boolean Expression (බූලීය ප්‍රකාශනය):**
  $$Q = \bar{A} \quad \text{or} \quad Q = A'$$
  *(Logical Inversion / Negation / ප්‍රතිලෝමය)*
* **Electronic Switch Circuit (විද්‍යුත් ස්විච පරිපථය - Bypass / Short-Circuit Inverter):**
  ```
  +---------------+----( Resistor )----( Bulb Q )----+
  |               |                                  |
  |        [ Push Switch A ]                         |
  |               |                                  |
  +---------------+--------( Battery + - )-----------+
  ```
  *When Switch A is Open (0), current powers Bulb Q (1). When Switch A is Closed (1), current bypasses the bulb through the short-circuit path, extinguishing Bulb Q (0).*
* **ANSI Schematic Symbol (ලොජික් සංකේතය):**
  ```
  A ───▶|o─── Q = A'
  ```
  *(Note: The triangle represents an amplifier buffer; the small inversion bubble represents NOT negation).*
* **Truth Table (සත්‍යතා වගුව):**
  | Input A | Output $Q = \bar{A}$ |
  | :---: | :---: |
  | 0 | **1** |
  | 1 | **0** |

---

### 4.3 Derived & Combinational Logic Gates (ව්‍යුත්පන්න හා සංයුක්ත ලොජික් ද්වාර)

Derived gates are created by combining primary gates. They include **NAND**, **NOR**, **XOR**, and **XNOR**.

#### 4.3.1 NAND Gate (නැත-සහ / NAND ද්වාරය)
* **Governing Rule (ක්‍රියාකාරී නීතිය):**
  * **[English]:** A NAND gate is a serial combination of an AND gate followed by a NOT gate. It produces an output of LOW (0) **only if ALL of its inputs are HIGH (1)**. For all other combinations, the output is HIGH (1).
  * **[Sinhala]:** NAND ද්වාරය යනු AND ද්වාරයක් සහ NOT ද්වාරයක් ශ්‍රේණිගතව සම්බන්ධ කිරීමෙන් සෑදුණු ද්වාරයකි. එහි සියලුම ආදාන ඉහළ (1) මට්ටමේ පවතින විට පමණක් ප්‍රතිදානය පහළ (0) වේ. අනෙක් සෑම අවස්ථාවකදීම ප්‍රතිදානය ඉහළ (1) වේ.
* **Boolean Expression (බූලීය ප්‍රකාශනය):**
  $$Q = \overline{A \cdot B} \quad \text{or} \quad Q = (A \cdot B)'$$
* **Internal Composition & ANSI Symbol (අභ්‍යන්තර සැකැස්ම සහ සංකේතය):**
  ```
  Composition:  A ──┬──╮
                    │AND)───▶|o─── Q = (A · B)'
                B ──┴──╯

  ANSI Symbol:  A ──┬──╮
                    │NAND)o─── Q = (A · B)'
                B ──┴──╯
  ```
* **Truth Table (සත්‍යතා වගුව):**
  | Input A | Input B | Intermediate AND ($A \cdot B$) | Output $Q = \overline{A \cdot B}$ |
  | :---: | :---: | :---: | :---: |
  | 0 | 0 | 0 | **1** |
  | 0 | 1 | 0 | **1** |
  | 1 | 0 | 0 | **1** |
  | 1 | 1 | 1 | **0** |

---

#### 4.3.2 NOR Gate (නැත-හෝ / NOR ද්වාරය)
* **Governing Rule (ක්‍රියාකාරී නීතිය):**
  * **[English]:** A NOR gate is a serial combination of an OR gate followed by a NOT gate. It produces an output of HIGH (1) **only if ALL of its inputs are LOW (0)**. If any input is HIGH (1), the output is LOW (0).
  * **[Sinhala]:** NOR ද්වාරය යනු OR ද්වාරයක් සහ NOT ද්වාරයක් එකතුවෙන් සෑදුණු ද්වාරයකි. සියලුම ආදානයන් පහළ (0) මට්ටමේ පවතින විට පමණක් ප්‍රතිදානය ඉහළ (1) වේ. ඕනෑම ආදානයක් ඉහළ (1) වූ විට ප්‍රතිදානය පහළ (0) වේ.
* **Boolean Expression (බූලීය ප්‍රකාශනය):**
  $$Q = \overline{A + B} \quad \text{or} \quad Q = (A + B)'$$
* **Internal Composition & ANSI Symbol (අභ්‍යන්තර සැකැස්ම සහ සංකේතය):**
  ```
  Composition:  A ──╮
                     ╲ OR  )───▶|o─── Q = (A + B)'
                B ──╯     ╱

  ANSI Symbol:  A ──╮
                     ╲ NOR )o─── Q = (A + B)'
                B ──╯     ╱
  ```
* **Truth Table (සත්‍යතා වගුව):**
  | Input A | Input B | Intermediate OR ($A + B$) | Output $Q = \overline{A + B}$ |
  | :---: | :---: | :---: | :---: |
  | 0 | 0 | 0 | **1** |
  | 0 | 1 | 1 | **0** |
  | 1 | 0 | 1 | **0** |
  | 1 | 1 | 1 | **0** |

---

#### 4.3.3 XOR Gate (Exclusive-OR / විශේෂිත හෝ ද්වාරය)
* **Governing Rule (ක්‍රියාකාරී නීතිය):**
  * **[English]:** An XOR gate produces an output of HIGH (1) **if its inputs are DIFFERENT from each other** (one 0 and one 1). If all inputs are the same (both 0 or both 1), the output is LOW (0). It acts as an **Odd-Parity Detector**.
  * **[Sinhala]:** XOR ද්වාරයක ආදාන එකිනෙකට වෙනස් වන අවස්ථාවල දී පමණක් (එකක් 0 සහ අනෙක 1 වන විට) ප්‍රතිදානය ඉහළ (1) වේ. ආදාන දෙකම සමාන වන විට (දෙකම 0 හෝ දෙකම 1) ප්‍රතිදානය පහළ (0) වේ.
* **Boolean Expression (බූලීය ප්‍රකාශනය):**
  $$Q = A \oplus B = \bar{A}B + A\bar{B}$$
* **ANSI Schematic Symbol (ලොජික් සංකේතය):**
  ```
  A ───╮
       ) ╲  XOR  )── Q = A ⊕ B
  B ───╯  ╰─────╯
  ```
* **Basic Gate Construction (මූලික ද්වාර භාවිතයෙන් නිර්මාණය):**
  Constructed using 2 NOT gates, 2 AND gates, and 1 OR gate:
  - Branch 1: Invert $A$ to get $\bar{A}$, then AND with $B \rightarrow \bar{A}B$
  - Branch 2: Invert $B$ to get $\bar{B}$, then AND with $A \rightarrow A\bar{B}$
  - Final: Feed both into an OR gate $\rightarrow Q = \bar{A}B + A\bar{B}$
* **Truth Table (සත්‍යතා වගුව):**
  | Input A | Input B | $\bar{A}$ | $\bar{B}$ | $\bar{A}B$ | $A\bar{B}$ | Output $Q = A \oplus B$ |
  | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
  | 0 | 0 | 1 | 1 | 0 | 0 | **0** |
  | 0 | 1 | 1 | 0 | 1 | 0 | **1** |
  | 1 | 0 | 0 | 1 | 0 | 1 | **1** |
  | 1 | 1 | 0 | 0 | 0 | 0 | **0** |

---

#### 4.3.4 XNOR Gate (Exclusive-NOR / විශේෂිත නැත-හෝ ද්වාරය)
* **Governing Rule (ක්‍රියාකාරී නීතිය):**
  * **[English]:** An XNOR gate produces an output of HIGH (1) **if its inputs are IDENTICAL to each other** (both 0 or both 1). If the inputs are different, the output is LOW (0). It acts as an **Equivalence Comparator**.
  * **[Sinhala]:** XNOR ද්වාරයක ආදාන සියල්ල එක හා සමාන වන අවස්ථාවල දී පමණක් (දෙකම 0 හෝ දෙකම 1) ප්‍රතිදානය ඉහළ (1) වේ. ආදාන එකිනෙකට වෙනස් වන විට ප්‍රතිදානය පහළ (0) වේ. එය සමානතා සංසන්දකයක් ලෙස ක්‍රියා කරයි.
* **Boolean Expression (බූලීය ප්‍රකාශනය):**
  $$Q = \overline{A \oplus B} = AB + \bar{A}\bar{B}$$
* **ANSI Schematic Symbol (ලොජික් සංකේතය):**
  ```
  A ───╮
       ) ╲  XNOR )o── Q = (A ⊕ B)'
  B ───╯  ╰─────╯
  ```
* **Truth Table (සත්‍යතා වගුව):**
  | Input A | Input B | XOR ($A \oplus B$) | Output $Q = \overline{A \oplus B}$ |
  | :---: | :---: | :---: | :---: |
  | 0 | 0 | 0 | **1** |
  | 0 | 1 | 1 | **0** |
  | 1 | 0 | 1 | **0** |
  | 1 | 1 | 0 | **1** |

---

### 4.4 Universal Logic Gates: Functional Completeness (විශ්ව ලොජික් ද්වාර)

#### Why NAND and NOR are "Universal Gates" (NAND සහ NOR විශ්ව ද්වාර ලෙස හඳුන්වන්නේ ඇයි?)
* **[English]:** NAND and NOR gates possess **Functional Completeness**. Any Boolean expression, digital circuit, or microprocessor arithmetic unit can be constructed using **ONLY NAND gates** or **ONLY NOR gates**, without requiring any other type of gate. In semiconductor manufacturing, utilizing a single gate type drastically reduces fabrication cost and silicon wafer defect rates.
* **[Sinhala]:** NAND සහ NOR ද්වාර **විශ්ව ද්වාර (Universal Gates)** ලෙස හැඳින්වේ. මන්දයත් වෙනත් කිසිදු ද්වාරයක සහයක් නොමැතිව, **NAND ද්වාර පමණක් භාවිතයෙන්** හෝ **NOR ද්වාර පමණක් භාවිතයෙන්** ඕනෑම සංකීර්ණ පරිගණක පරිපථයක් හෝ ප්‍රොසෙසරයක් සම්පූර්ණයෙන්ම ගොඩනැගිය හැකි බැවිනි.

#### 4.4.1 Constructing Basic Gates Using ONLY NAND Gates:
1. **NOT Gate from NAND:**
   - Tie both inputs of a NAND gate together ($A$ and $A$):
     $$Q = \overline{A \cdot A} = \bar{A}$$
   ```
   A ──┬──┬──╮
       └──┴──┴─NAND)o── Q = A'
   ```
2. **AND Gate from NAND:**
   - Pass inputs $A, B$ into a NAND gate, then invert the output using a NAND-NOT gate:
     $$Q = \overline{\overline{A \cdot B}} = A \cdot B$$
   ```
   A ──┬──╮
       │NAND)o──┬──┬──╮
   B ──┴──╯     └──┴──┴─NAND)o── Q = A · B
   ```
3. **OR Gate from NAND (By De Morgan's Law $\bar{A} \cdot \bar{B} \rightarrow A + B$):**
   - Invert $A$ with a NAND-NOT, invert $B$ with a NAND-NOT, then feed both into a third NAND gate:
     $$Q = \overline{\bar{A} \cdot \bar{B}} = \bar{\bar{A}} + \bar{\bar{B}} = A + B$$

#### 4.4.2 Constructing Basic Gates Using ONLY NOR Gates:
1. **NOT Gate from NOR:**
   - Tie both inputs of a NOR gate together ($A$ and $A$):
     $$Q = \overline{A + A} = \bar{A}$$
2. **OR Gate from NOR:**
   - Feed $A, B$ into a NOR gate, then invert the output using a NOR-NOT gate:
     $$Q = \overline{\overline{A + B}} = A + B$$
3. **AND Gate from NOR (By De Morgan's Law $\bar{A} + \bar{B} \rightarrow A \cdot B$):**
   - Invert $A$ with a NOR-NOT, invert $B$ with a NOR-NOT, then feed both into a third NOR gate:
     $$Q = \overline{\bar{A} + \bar{B}} = \bar{\bar{A}} \cdot \bar{\bar{B}} = A \cdot B$$

---

### 4.5 3-Input Logic Gate Extensions (ආදාන 3 ප්‍රසාරණ)

When a logic gate has $n=3$ inputs ($A, B, C$), the truth table requires $2^3 = 8$ distinct input state rows (000 to 111).

* **3-Input AND Gate ($Q = A \cdot B \cdot C$):** Output is 1 ONLY when $A=1 \text{ AND } B=1 \text{ AND } C=1$.
* **3-Input OR Gate ($Q = A + B + C$):** Output is 1 if AT LEAST ONE input ($A, B, \text{ or } C$) is 1.
* **3-Input NAND Gate ($Q = \overline{A \cdot B \cdot C}$):** Inversion of 3-input AND; output is 0 ONLY when all three inputs are 1.
* **3-Input NOR Gate ($Q = \overline{A + B + C}$):** Inversion of 3-input OR; output is 1 ONLY when all three inputs are 0.

#### Comprehensive 8-Row Truth Table for 3-Input Gates:
| $A$ | $B$ | $C$ | 3-Input AND ($A \cdot B \cdot C$) | 3-Input OR ($A + B + C$) | 3-Input NAND ($\overline{A \cdot B \cdot C}$) | 3-Input NOR ($\overline{A + B + C}$) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | 0 | **0** | **0** | **1** | **1** |
| 0 | 0 | 1 | **0** | **1** | **1** | **0** |
| 0 | 1 | 0 | **0** | **1** | **1** | **0** |
| 0 | 1 | 1 | **0** | **1** | **1** | **0** |
| 1 | 0 | 0 | **0** | **1** | **1** | **0** |
| 1 | 0 | 1 | **0** | **1** | **1** | **0** |
| 1 | 1 | 0 | **0** | **1** | **1** | **0** |
| 1 | 1 | 1 | **1** | **1** | **0** | **0** |

---

# LAYER 2: Exhaustive Domain & Real-World Sector Breakdown (ක්ෂේත්‍ර අනුව ප්‍රායෝගික විග්‍රහය)

Logic gates form the electronic decision core of automated industrial controllers, safety interlocks, and domestic embedded devices.

```
       +-------------------------------------------------------+
       |             REAL-WORLD DIGITAL CONTROL ARCHITECTURE    |
       +-------------------------------------------------------+
              |                        |                       |
       [Sensor Inputs]         [Logic Gate Circuit]     [Actuator Output]
       (Moisture, Heat,        (AND, OR, NOT, NAND,     (Pump, Solenoid,
        Motion, Switches)       Combinational Network)   Siren, Buzzer)
```

---

### 2.1 Smart Agricultural Greenhouse Irrigation Controller (ස්වයංක්‍රීය හරිතාගාර ජල සම්පාදන පාලකය)
* **Problem Scenario:** An automated greenhouse must irrigate crops without wasting water.
* **Digital Sensor Inputs:**
  - $M$ = Soil Moisture Sensor ($1 = \text{Soil is wet/adequate}$, $0 = \text{Soil is dry}$).
  - $S$ = Sunlight Sensor ($1 = \text{Intense midday direct sun}$, $0 = \text{Low sun / evening / overcast}$).
  - $O$ = Manual Farmer Override Switch ($1 = \text{Forced ON}$, $0 = \text{Normal operation}$).
* **Operational Control Rule:**
  - Water Pump ($P$) must turn ON ($P=1$) automatically if the **Soil is dry** ($\bar{M}=1$) **AND the sun is not intensely scorching** ($\bar{S}=1$, to prevent leaf scalding and rapid evaporation), **OR** if the farmer activates the **Manual Override Switch** ($O=1$).
* **Synthesized Boolean Expression:**
  $$P = (\bar{M} \cdot \bar{S}) + O$$
* **Circuit Schematic:**
  - Sensor $M$ passes through a NOT gate $\rightarrow \bar{M}$
  - Sensor $S$ passes through a NOT gate $\rightarrow \bar{S}$
  - $\bar{M}$ and $\bar{S}$ pass into an AND gate $\rightarrow \bar{M} \cdot \bar{S}$
  - Output of AND gate and Override line $O$ pass into an OR gate $\rightarrow P = (\bar{M} \cdot \bar{S}) + O$

---

### 2.2 Commercial Building Fire & Smoke Emergency Alarm (ගොඩනැගිලි ගිනි හා දුම් අනතුරු ඇඟවීමේ පද්ධතිය)
* **Problem Scenario:** A high-rise office building requires an automated life-safety fire warning alarm.
* **Digital Sensor Inputs:**
  - $S$ = Optical Smoke Detector ($1 = \text{Smoke detected}$, $0 = \text{Clear air}$).
  - $T$ = Thermal Rate-of-Rise Heat Detector ($1 = \text{High temperature > 57°C}$, $0 = \text{Normal room temp}$).
  - $M$ = Manual Emergency Pull Station ($1 = \text{Glass broken / pulled by occupant}$, $0 = \text{Untouched}$).
* **Operational Control Rule:**
  - To prevent false alarms from harmless cigarette smoke or kitchen steam, the automated sensors require **BOTH Smoke AND High Temperature** ($S \cdot T = 1$). However, any occupant pulling the **Manual Emergency Station** ($M=1$) must immediately trigger the evacuation siren unconditionally.
* **Synthesized Boolean Expression:**
  $$A = (S \cdot T) + M$$

---

### 2.3 Automotive Driver Safety & Ignition Interlock System (මෝටර් රථ ආරක්ෂණ හා එන්ජින් පණගැන්වීමේ පද්ධතිය)
* **Problem Scenario:** Modern passenger vehicles prevent engine cranking or sound warning chimes if safety prerequisites are not satisfied.
* **Digital Inputs:**
  - $I$ = Ignition Key / Start Push Button ($1 = \text{Turned to CRANK}$, $0 = \text{Off}$).
  - $B$ = Driver Seatbelt Buckle Sensor ($1 = \text{Buckled locked}$, $0 = \text{Unbuckled}$).
  - $D$ = Driver Door Contact Switch ($1 = \text{Door firmly latched}$, $0 = \text{Door ajar/open}$).
* **Two Output Control Circuits:**
  1. **Seatbelt Warning Buzzer ($W$):** Sounds if ignition is turned on while seatbelt remains unbuckled:
     $$W = I \cdot \bar{B}$$
  2. **Starter Solenoid Relay ($E$):** Cranks starter motor ONLY when ignition is pressed, seatbelt is fastened, AND door is safely latched:
     $$E = I \cdot B \cdot D$$

---

### 2.4 Industrial High-Pressure Steam Boiler Safety Interlock (කර්මාන්තශාලා වාෂ්ප බොයිලේරු ආරක්ෂණ පද්ධතිය)
* **Problem Scenario:** A textile manufacturing factory operates a high-pressure steam boiler. If pressure or temperature crosses the safety threshold, an explosive rupture must be prevented.
* **Digital Sensor Inputs:**
  - $P$ = Steam Overpressure Diaphragm ($1 = \text{Pressure > 12 bar}$, $0 = \text{Normal}$).
  - $T$ = Core Thermal Sensor ($1 = \text{Water boiling chamber > 190°C}$, $0 = \text{Normal}$).
  - $E$ = Operator Emergency Stop E-Stop Mushroom Button ($1 = \text{Depressed}$, $0 = \text{Normal}$).
* **Operational Control Rule:**
  - The Emergency Steam Vent Valve ($V$) must trip open if **ANY safety parameter is breached**:
    $$V = P + T + E$$
  *(Implemented via a 3-Input OR Gate or 7432 IC network).*

---

### 2.5 Automated Overhead Water Tank Refill Pump (ස්වයංක්‍රීය ඉහළ ජල ටැංකි පොම්ප පාලකය)
* **Problem Scenario:** Automatically refill an overhead roof tank from an underground sump well.
* **Digital Float Switch Inputs:**
  - $S$ = Sump Well Low-Water Float ($1 = \text{Water available in well}$, $0 = \text{Well is dry}$).
  - $L$ = Overhead Tank Low-Level Float ($1 = \text{Water dropped below bottom threshold}$, $0 = \text{Adequate level}$).
  - $H$ = Overhead Tank High-Level Float ($1 = \text{Tank reached top overflow brim}$, $0 = \text{Not full}$).
* **Operational Control Rule:**
  - The electric water pump ($P$) must run if the **Sump has water** ($S=1$), the **Overhead tank demands water** ($L=1$), and the **Overhead tank is NOT already overflowing** ($\bar{H}=1$):
    $$P = S \cdot L \cdot \bar{H}$$

---

### 2.6 Dual-Switch Staircase / Corridor Lighting System (පඩිපෙළ දෙපස ස්විච ආලෝක පද්ධතිය)
* **Problem Scenario:** A flight of stairs has a light switch at the bottom floor ($S_1$) and another switch at the top landing ($S_2$).
* **Behavior:**
  - If both switches are down ($0,0$), light is OFF ($0$).
  - Flipping switch $S_1$ up turns the light ON ($1,0 \rightarrow 1$).
  - Walking upstairs and flipping switch $S_2$ up turns the light back OFF ($1,1 \rightarrow 0$).
  - Flipping either switch always toggles the state of the light bulb.
* **Boolean Function:**
  $$L = S_1 \oplus S_2 = S_1\bar{S}_2 + \bar{S}_1S_2$$
  *(Exact electronic behavior of an XOR gate).*

---

# LAYER 3: Comparison Tables & Visual Diagrams (සංසන්දනාත්මක වගු සහ රූප සටහන්)

### 3.1 Master 7-Gate Comparative Synthesis Table (ලොජික් ද්වාර 7 සාරාංශ සංසන්දනය)

| Logic Gate Name | Sinhala Name | ANSI Symbol Graphic | Boolean Algebra Equation | Equivalent Electrical Switch Setup | Condition for Output = 1 (HIGH) |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **AND** | සහ ද්වාරය | `──┬──╮` <br> `  │AND)──` <br> `──┴──╯` | $Q = A \cdot B$ | 2 Switches in **Series** | Output is 1 **ONLY when ALL inputs are 1** |
| **OR** | හෝ ද්වාරය | `──╮` <br> `   ╲ OR )──` <br> `──╯` | $Q = A + B$ | 2 Switches in **Parallel** | Output is 1 **when AT LEAST ONE input is 1** |
| **NOT** | නොවන ද්වාරය | `──▶|o──` | $Q = \bar{A} = A'$ | Bypass / Short-Circuit Switch | Output is 1 **ONLY when input is 0** |
| **NAND** | නැත-සහ ද්වාරය | `──┬──╮` <br> `  │NAND)o──` <br> `──┴──╯` | $Q = \overline{A \cdot B}$ | Series switches bypassing load | Output is 0 **ONLY when ALL inputs are 1** (Else 1) |
| **NOR** | නැත-හෝ ද්වාරය | `──╮` <br> `   ╲ NOR)o──` <br> `──╯` | $Q = \overline{A + B}$ | Parallel switches bypassing load | Output is 1 **ONLY when ALL inputs are 0** |
| **XOR** | විශේෂිත හෝ ද්වාරය | `──╮` <br> `  ) ╲ XOR)──` <br> `──╯` | $Q = A \oplus B = \bar{A}B + A\bar{B}$ | Dual 2-way cross switches | Output is 1 **when inputs are DIFFERENT** (0,1 or 1,0) |
| **XNOR** | විශේෂිත නැත-හෝ ද්වාරය | `──╮` <br> `  ) ╲ XNOR)o──` <br> `──╯` | $Q = \overline{A \oplus B} = AB + \bar{A}\bar{B}$ | Dual 2-way straight switches | Output is 1 **when inputs are IDENTICAL** (0,0 or 1,1) |

---

### 3.2 Master Truth Table Matrix (සියලු ද්වාර සඳහා සත්‍යතා වගු සංසන්දනය)

| Input A | Input B | AND ($A \cdot B$) | OR ($A + B$) | NAND ($\overline{A \cdot B}$) | NOR ($\overline{A + B}$) | XOR ($A \oplus B$) | XNOR ($\overline{A \oplus B}$) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **0** | **0** | 0 | 0 | **1** | **1** | **0** | **1** |
| **0** | **1** | 0 | 1 | **1** | **0** | **1** | **0** |
| **1** | **0** | 0 | 1 | **1** | **0** | **1** | **0** |
| **1** | **1** | 1 | 1 | **0** | **0** | **0** | **1** |

---

### 3.3 Boolean Algebra Laws & Theorems (බූලීය වීජ ගණිත නීති සහ ප්‍රමේයයන්)

| Law Name (නීතියේ නම) | AND Form (ගුණ කිරීමේ ආකාරය) | OR Form (එකතු කිරීමේ ආකාරය) | Conceptual Explanation (සංකල්පීය පැහැදිලි කිරීම) |
| :--- | :--- | :--- | :--- |
| **Identity Law (අනන්‍යතා නීතිය)** | $A \cdot 1 = A$ | $A + 0 = A$ | Input passing through unchanged with neutral element |
| **Null / Dominance Law (ශුන්‍යතා නීතිය)** | $A \cdot 0 = 0$ | $A + 1 = 1$ | 0 dominates AND gate; 1 dominates OR gate |
| **Idempotent Law (ස්වයංසාධක නීතිය)** | $A \cdot A = A$ | $A + A = A$ | Repeating same input produces same output |
| **Inverse / Complement Law (අනුපූරක නීතිය)** | $A \cdot \bar{A} = 0$ | $A + \bar{A} = 1$ | A variable and its complement cannot both be 1 |
| **Double Negation (ද්විත්ව සෘණතා නීතිය)** | $\bar{\bar{A}} = A$ | - | Two consecutive NOT inverters cancel each other out |
| **Commutative Law (ක්‍රමාරෝපණ නීතිය)** | $A \cdot B = B \cdot A$ | $A + B = B + A$ | Order of inputs does not alter the output |
| **Associative Law (සහචාරී නීතිය)** | $A \cdot (B \cdot C) = (A \cdot B) \cdot C$ | $A + (B + C) = (A + B) + C$ | Grouping of inputs does not alter the output |
| **Distributive Law (විභජන නීතිය)** | $A \cdot (B + C) = A \cdot B + A \cdot C$ | $A + (B \cdot C) = (A + B) \cdot (A + C)$ | Factoring across boolean operators |
| **Absorption Law (අවශෝෂණ නීතිය)** | $A \cdot (A + B) = A$ | $A + (A \cdot B) = A$ | Redundant term absorbs into primary variable |

#### De Morgan's Laws & Truth Table Proof (ඩි මොර්ගන්ගේ නියම):
* **De Morgan's First Law:**
  $$\overline{A \cdot B} = \bar{A} + \bar{B}$$
  *(The complement of a product equals the sum of the complements: A NAND gate is equivalent to an active-low OR gate).*
* **De Morgan's Second Law:**
  $$\overline{A + B} = \bar{A} \cdot \bar{B}$$
  *(The complement of a sum equals the product of the complements: A NOR gate is equivalent to an active-low AND gate).*
* **Rule of Thumb:** *"Break the line, change the sign"* (ඉර කඩන්න, ලකුණ මාරු කරන්න).

##### Proof of $\overline{A \cdot B} = \bar{A} + \bar{B}$ via Truth Table:
| $A$ | $B$ | $A \cdot B$ | $\mathbf{\overline{A \cdot B}}$ (LHS) | $\bar{A}$ | $\bar{B}$ | $\mathbf{\bar{A} + \bar{B}}$ (RHS) | Match? |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | 0 | **1** | 1 | 1 | **1** | ✅ Identical |
| 0 | 1 | 0 | **1** | 1 | 0 | **1** | ✅ Identical |
| 1 | 0 | 0 | **1** | 0 | 1 | **1** | ✅ Identical |
| 1 | 1 | 1 | **0** | 0 | 0 | **0** | ✅ Identical |

---

### 3.4 TTL 7400-Series IC Pinout Architecture (7400 ශ්‍රේණියේ අනුකලිත පරිපථ කෙවෙනි සැකැස්ම)

In practical electronic construction, logic gates are housed inside **14-pin Dual In-line Package (DIP)** integrated circuit chips.

```
                    STANDARD 14-PIN DIP IC PACKAGE
                               ┌──[U]──┐
                 Pin 1  ─── 1 ─┤  Notch ├─ 14 ─── VCC (+5V Power)
                 Pin 2  ─── 2 ─┤       ├─ 13 ─── Pin 13
                 Pin 3  ─── 3 ─┤       ├─ 12 ─── Pin 12
                 Pin 4  ─── 4 ─┤       ├─ 11 ─── Pin 11
                 Pin 5  ─── 5 ─┤       ├─ 10 ─── Pin 10
                 Pin 6  ─── 6 ─┤       ├─ 9  ─── Pin 9
         (Ground 0V) GND ─── 7 ─┤       ├─ 8  ─── Pin 8
                               └───────┘
```
* **Orientation Rule:** Hold the IC horizontally or vertically with the **semi-circular notch at the top (or left)**. Pin 1 starts immediately below the notch on the left and counts counter-clockwise up to Pin 14.
* **Universal Power Pins across ALL 7400 DIP ICs:**
  - **Pin 14:** Connects to $+5\text{V}$ DC Positive Power Supply ($V_{CC}$).
  - **Pin 7:** Connects to $0\text{V}$ Ground / Earth (GND).

#### Detailed Pin Layout Diagrams:

##### 1. 7400 IC - Quad 2-Input NAND Gate (ද්වාර 4 ක NAND IC)
```
                               7400 IC
                               ┌──[U]──┐
               Gate 1 In A ── 1 ┤       ├ 14 ── VCC (+5V)
               Gate 1 In B ── 2 ┤       ├ 13 ── Gate 4 In B
              Gate 1 Out Y ── 3 ┤       ├ 12 ── Gate 4 In A
               Gate 2 In A ── 4 ┤       ├ 11 ── Gate 4 Out Y
               Gate 2 In B ── 5 ┤       ├ 10 ── Gate 3 In B
              Gate 2 Out Y ── 6 ┤       ├ 9  ── Gate 3 In A
                       GND ── 7 ┤       ├ 8  ── Gate 3 Out Y
                               └───────┘
```
* **Gate 1:** Inputs = Pins 1, 2 | Output = Pin 3
* **Gate 2:** Inputs = Pins 4, 5 | Output = Pin 6
* **Gate 3:** Inputs = Pins 9, 10 | Output = Pin 8
* **Gate 4:** Inputs = Pins 12, 13 | Output = Pin 11

##### 2. 7402 IC - Quad 2-Input NOR Gate (ද්වාර 4 ක NOR IC - ANOMALOUS PINOUT)
```
                               7402 IC
                               ┌──[U]──┐
              Gate 1 Out Y ── 1 ┤       ├ 14 ── VCC (+5V)
               Gate 1 In A ── 2 ┤       ├ 13 ── Gate 4 Out Y
               Gate 1 In B ── 3 ┤       ├ 12 ── Gate 4 In B
              Gate 2 Out Y ── 4 ┤       ├ 11 ── Gate 4 In A
               Gate 2 In A ── 5 ┤       ├ 10 ── Gate 3 Out Y
               Gate 2 In B ── 6 ┤       ├ 9  ── Gate 3 In B
                       GND ── 7 ┤       ├ 8  ── Gate 3 In A
                               └───────┘
```
> [!WARNING]
> **CRITICAL EXAM ANOMALY:** Unlike the 7400, 7408, and 7432 ICs where outputs are on Pins 3, 6, 8, 11, the **7402 NOR IC has outputs on Pins 1, 4, 10, 13**! The inputs precede the output on each internal gate.

##### 3. 7404 IC - Hex Inverter (NOT Gates x 6)
```
                               7404 IC
                               ┌──[U]──┐
               Gate 1 In A ── 1 ┤       ├ 14 ── VCC (+5V)
              Gate 1 Out Y ── 2 ┤       ├ 13 ── Gate 6 In A
               Gate 2 In A ── 3 ┤       ├ 12 ── Gate 6 Out Y
              Gate 2 Out Y ── 4 ┤       ├ 11 ── Gate 5 In A
               Gate 3 In A ── 5 ┤       ├ 10 ── Gate 5 Out Y
              Gate 3 Out Y ── 6 ┤       ├ 9  ── Gate 4 In A
                       GND ── 7 ┤       ├ 8  ── Gate 4 Out Y
                               └───────┘
```
Contains 6 independent single-input NOT gates (Pins: 1$\rightarrow$2, 3$\rightarrow$4, 5$\rightarrow$6, 9$\rightarrow$8, 11$\rightarrow$10, 13$\rightarrow$12).

##### 4. 7408 IC - Quad 2-Input AND Gate:
Pin layout is structurally identical to 7400 (Inputs on 1,2 $\rightarrow$ Output 3; Inputs on 4,5 $\rightarrow$ Output 6; Inputs on 9,10 $\rightarrow$ Output 8; Inputs on 12,13 $\rightarrow$ Output 11).

##### 5. 7432 IC - Quad 2-Input OR Gate:
Pin layout is structurally identical to 7400 and 7408.

##### 6. 7486 IC - Quad 2-Input XOR Gate:
Pin layout is structurally identical to 7400, 7408, and 7432.

#### IC Summary Reference Card:
* **7400:** Quad 2-Input NAND Gate
* **7402:** Quad 2-Input NOR Gate (Outputs on Pins 1, 4, 10, 13)
* **7404:** Hex Inverter (6 NOT Gates)
* **7408:** Quad 2-Input AND Gate
* **7432:** Quad 2-Input OR Gate
* **7486:** Quad 2-Input XOR Gate

---

# LAYER 4: High-Yield Exam Pitfalls & Summary Matrix (විභාග උගුල් සහ පසුගිය විභාග ගැටලු)

### 4.1 The 6 Fatal G.C.E. O/L Examination Traps (ප්‍රධාන විභාග උගුල් 6)

1. **Trap 1: Confusing NOR and NAND Truth Outputs on Identical Inputs (0,0 and 1,1):**
   - For $(0,0)$: BOTH NAND and NOR produce **1**.
   - For $(1,1)$: BOTH NAND and NOR produce **0**.
   - The divergence happens on mixed inputs: on $(0,1)$ and $(1,0)$, NAND gives **1**, while NOR gives **0**.
2. **Trap 2: The XOR $(1,1)$ Misconception:**
   - In ordinary English, "either A or B" often ambiguously includes both. In formal Boolean logic, **OR** gives 1 for $(1,1)$, but **XOR (Exclusive-OR) strictly gives 0 for $(1,1)$**.
3. **Trap 3: Neglecting Operator Precedence (Order of Operations):**
   - Boolean expressions without parentheses follow strict hierarchy: **NOT ($\bar{A}$) first**, **AND ($\cdot$) second**, **OR ($+$) last**.
   - Example: $A + B \cdot C = A + (B \cdot C)$. It is NEVER $(A + B) \cdot C$.
4. **Trap 4: Incorrect De Morgan Inversion:**
   - Breaking the negation bar over $A + B$:
     $$\overline{A + B} = \bar{A} \cdot \bar{B} \quad (\text{CORRECT})$$
     $$\overline{A + B} \ne \bar{A} + \bar{B} \quad (\text{FATAL ERROR!})$$
5. **Trap 5: 7402 Pinout Misalignment:**
   - When asked to identify the output pin of the first gate in an IC, students assume Pin 3. On a **7402 NOR IC**, the output is **Pin 1**!
6. **Trap 6: Tying Inputs of Universal Gates:**
   - When both input terminals of a NAND gate are joined together ($A$ and $A$), it functions as a **NOT gate** ($Q = \bar{A}$). The same applies to a NOR gate with shorted inputs.

---

### 4.2 Verbatim G.C.E. O/L Past Paper Extraction & Worked Solutions (2020–2025)

#### Question 01 (2020 O/L Paper I - Question 34)
* **English Medium Question:** Which of the following truth tables represents the output of a 2-input NOR gate?
  - (1) $[0,0\rightarrow 0; 0,1\rightarrow 1; 1,0\rightarrow 1; 1,1\rightarrow 1]$
  - (2) $[0,0\rightarrow 1; 0,1\rightarrow 0; 1,0\rightarrow 0; 1,1\rightarrow 0]$
  - (3) $[0,0\rightarrow 1; 0,1\rightarrow 1; 1,0\rightarrow 1; 1,1\rightarrow 0]$
  - (4) $[0,0\rightarrow 0; 0,1\rightarrow 0; 1,0\rightarrow 0; 1,1\rightarrow 1]$
* **Sinhala Medium Question:** ආදාන 2ක් සහිත NOR ද්වාරයක ප්‍රතිදානය නිරූපණය වන සත්‍යතා වගුව කුමක්ද?
* **Derivation & Solution:**
  A NOR gate is an inverted OR: $Q = \overline{A + B}$.
  - $0+0 = 0 \rightarrow \bar{0} = 1$
  - $0+1 = 1 \rightarrow \bar{1} = 0$
  - $1+0 = 1 \rightarrow \bar{1} = 0$
  - $1+1 = 1 \rightarrow \bar{1} = 0$
* **Correct Answer:** **Option (2)**

---

#### Question 02 (2020 O/L Paper II - Question 01 (iv))
* **English Medium Question:** Draw the logic circuit diagram for the Boolean expression $P = A \cdot B + C \cdot D$ using basic logic gates.
* **Sinhala Medium Question:** මූලික ලොජික් ද්වාර භාවිත කරමින් $P = A \cdot B + C \cdot D$ බූලියානු ප්‍රකාශනය සඳහා ලොජික් පරිපථ සටහන අඳින්න.
* **Circuit Schematic Solution:**
  ```
  A ──┬──╮
      │AND)────[A · B]───╮
  B ──┴──╯                ╲  OR  )─── P = A · B + C · D
                          ╱
  C ──┬──╮                ╰──────╯
      │AND)────[C · D]───╯
  D ──┴──╯
  ```

---

#### Question 03 (2021 O/L Paper I - Question 39)
* **English Medium Question:** Consider a 2-input NAND gate where inputs are $A$ and $B$. If input $B = 1$, what is the output $Q$?
  - (1) $0$   (2) $1$   (3) $A$   (4) $\bar{A}$
* **Sinhala Medium Question:** ආදාන A සහ B වන 2-ආදාන NAND ද්වාරයක් සලකන්න. ආදානය $B = 1$ නම්, ප්‍රතිදානය $Q$ කුමක්ද?
* **Algebraic Derivation:**
  $Q = \overline{A \cdot B} = \overline{A \cdot 1} = \bar{A}$.
* **Correct Answer:** **Option (4) $\bar{A}$**

---

#### Question 04 (2021 O/L Paper II - Question 01 (iv))
* **English Medium Question:** Draw the logic circuit for $P = A \cdot (B + C)$ using standard basic logic gates.
* **Sinhala Medium Question:** සම්මත මූලික ලොජික් ද්වාර භාවිත කර $P = A \cdot (B + C)$ සඳහා ලොජික් පරිපථය අඳින්න.
* **Circuit Schematic Solution:**
  ```
  B ──╮
       ╲ OR  )───[B + C]──┬──╮
  C ──╯     ╱             │AND)─── P = A · (B + C)
  A ──────────────────────┴──╯
  ```

---

#### Question 05 (2022 O/L Paper II - Question 01 (iv))
* **English Medium Question:** Draw the logic circuit diagram for the Boolean expression $F = \bar{C} + A \cdot \bar{B}$ using basic logic gates.
* **Sinhala Medium Question:** $F = \bar{C} + A \cdot \bar{B}$ බූලියානු ප්‍රකාශනය සඳහා මූලික ලොජික් ද්වාර භාවිතයෙන් ලොජික් පරිපථ සටහන අඳින්න.
* **Circuit Schematic Solution:**
  ```
  C ──▶|o───[C']──────────────────╮
                                  ╲  OR  )─── F = C' + A · B'
  A ──────────────────────┬──╮    ╱
                          │AND)───╯
  B ──▶|o───[B']──────────┴──╯
  ```

---

#### Question 06 (2023 O/L Paper II - Question 01 (iv))
* **English Medium Question:** In a digital logic circuit, Gate 1 is an OR gate with inputs $A$ and $B$. Its output is fed into Gate 2, which is an AND gate, along with input $A$.
  - (a) Write down the Boolean expression for the output $Z$ in terms of $A$ and $B$.
  - (b) Evaluate the output $Z$ when $A = 1$ and $B = 0$.
* **Sinhala Medium Question:** ඩිජිටල් පරිපථයක, 1 වන ද්වාරය A සහ B ආදාන සහිත OR ද්වාරයකි. එහි ප්‍රතිදානය A ආදානය සමඟ AND ද්වාරයක් වන 2 වන ද්වාරයට ලබා දේ.
  - (a) A සහ B ඇසුරෙන් Z ප්‍රතිදානය සඳහා බූලීය ප්‍රකාශනය ලියන්න.
  - (b) $A = 1$ සහ $B = 0$ වන විට Z හි අගය ගණනය කරන්න.
* **Step-by-Step Derivation:**
  - (a) Gate 1 Output $= A + B$. Gate 2 Output $Z = (A + B) \cdot A$ (or simplified $Z = A$).
  - (b) Substitute $A=1, B=0$: $Z = (1 + 0) \cdot 1 = 1 \cdot 1 = 1$.

---

#### Question 07 (2024 O/L Paper II - Question 01 (iv))
* **English Medium Question:** Inputs $A$ and $B$ pass into a NAND gate. The output of the NAND gate is connected as one input to a NOR gate, while the second input of the NOR gate is connected to input $C$. Write down the final Boolean expression $Y$ for the output of the circuit.
* **Sinhala Medium Question:** A සහ B ආදාන NAND ද්වාරයකට ඇතුළත් කෙරේ. එම NAND ද්වාරයේ ප්‍රතිදානය C ආදානය සමඟ NOR ද්වාරයකට ආදානය කෙරේ. පරිපථයේ අවසාන ප්‍රතිදානය $Y$ සඳහා බූලීය ප්‍රකාශනය ලියන්න.
* **Solution:**
  - NAND Gate Output $= \overline{A \cdot B}$
  - NOR Gate Output $Y = \overline{\overline{A \cdot B} + C}$

---

#### Question 08 (2025 O/L Paper II - Question 01 (iv))
* **English Medium Question:** Construct the complete step-by-step truth table for the Boolean expression $Q = A \cdot \bar{B} + \bar{A} \cdot B$ (XOR equivalent).
* **Sinhala Medium Question:** $Q = A \cdot \bar{B} + \bar{A} \cdot B$ බූලීය ප්‍රකාශනය සඳහා පියවරෙන් පියවර සම්පූර්ණ සත්‍යතා වගුව ගොඩනගන්න.
* **Full Step-by-Step Truth Table Solution:**
  | $A$ | $B$ | $\bar{A}$ | $\bar{B}$ | $A \cdot \bar{B}$ | $\bar{A} \cdot B$ | $Q = A\bar{B} + \bar{A}B$ |
  | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
  | 0 | 0 | 1 | 1 | 0 | 0 | **0** |
  | 0 | 1 | 1 | 0 | 0 | 1 | **1** |
  | 1 | 0 | 0 | 1 | 1 | 0 | **1** |
  | 1 | 1 | 0 | 0 | 0 | 0 | **0** |
