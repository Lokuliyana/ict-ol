# Grade 10 ICT - Lesson 04: Dual-Medium Visual Study & Past Paper Guide (v2)

## Document Overview
This comprehensive visual and textual guide provides verbatim, dual-medium coverage of **Grade 10 - Lesson 04: Fundamental Logic Gates & Boolean Logic (ලොජික් ද්වාර හා බූලියානු තර්කනය)** from the official Sri Lankan O/L ICT curriculum. All theory content and exam questions are extracted word-for-word from the Grade 10 English Medium Textbook (`ICT G-10 E.pdf`), Grade 10 Sinhala Medium Textbook (`ict g10 S.pdf`), and official G.C.E. O/L examination past papers (2020–2025). 

This updated version (v2) includes complete ASCII electronic switch diagrams, logic gate symbol diagrams, 3-input gate representations, IC pinout diagrams (7400, 7402, 7404, 7408, 7432, 7486), and combinational logic circuit schematics for all textbook and past examination problems.

---

# SECTION A: Complete Learning Guide & Short Notes (Comprehensive Theory)

### 4.1 Concept of Logic Gates & Signals (ලොජික් ද්වාර සංකල්පය සහ සංඥා)

#### Core Definitions & Hardware Concepts (මූලික අර්ථ දැක්වීම් සහ දෘඩාංග සංකල්ප)
* **[English Medium Text]:** "A logic gate is an elementary building block of a digital circuit. Most logic gates have two inputs and one output. At any given moment, every terminal is in one of the two binary conditions, low (0) or high (1), represented by different voltage levels. The function of devices such as the computer, calculator, washing machine, microwave oven, mobile phone, modern televisions, digital clock, air conditioner etc is based on the function of logic gates."
* **[Sinhala Medium Text]:** "ද්විමය සංඛ්‍යා අනුසාරයෙන් යම් යම් තර්ක තත්ත්ව ගොඩනැඟීමටත් ඒ අනුව යම් යම් තීරණ ගැනීමටත් හැකි වන පරිපථ තර්කන පරිපථ (Logic Circuits) ලෙස හැඳින්වේ. පරිගණකය යනු සංකීර්ණ සංඛ්‍යාංක පරිපථ රාශියක එකතුවකි. මෙම ඉලෙක්ට්‍රොනික පරිපථ නිර්මාණය කර ඇත්තේ ලොජික් ද්වාර (Logic Gates) නමැති මූලික තර්කන පරිපථ රාශියක් අවශ්‍ය පරිදි එකිනෙකට සම්බන්ධ කිරීමෙනි. පරිගණකය, ගණක යන්ත්‍රය, රෙදි සෝදන යන්ත්‍රය, මයික්‍රෝවේව් උඳුන, ජංගම දුරකථනය, නූතන රූපවාහිනිය, සංඛ්‍යාංක ඔරලෝසුව, වායු සමීකරණය ආදී උපකරණවල ක්‍රියාකාරිත්වය සිදුවන්නේ ලොජික් ද්වාරවල ක්‍රියාකාරිත්වය පදනම් කරගෙන ය."

* **Physical Construction & Integrated Circuits (භෞතික නිපැයුම සහ අනුකලිත පරිපථ - IC):**
  * **[English Medium Text]:** "There are a number of technologies used to build logic gates. Diodes, Transistors, Resistors etc are used to construct logic circuits. Today logic circuits are built combining a number of logic gates into a single chip. This chip is called Integrated Circuit (IC). The modern microprocessor chip contains millions of logic gates."
  * **[Sinhala Medium Text]:** "ලොජික් ද්වාර නිර්මාණය කිරීම සඳහා විවිධ තාක්ෂණයන් භාවිත කෙරේ. ඩයෝඩ (Diodes), ට්‍රාන්සිස්ටර (Transistors), රෙසිස්ටර (Resistors) ආදිය ලොජික් පරිපථ ගොඩනැඟීමට යොදා ගැනේ. වර්තමානයේ දී ලොජික් ද්වාර විශාල ප්‍රමාණයක් එකතු කර තනි චිපයක් (Chip) ලෙස ලොජික් පරිපථ තනා ඇත. මෙම චිප අනුකලිත පරිපථ (Integrated Circuit - IC) ලෙස හැඳින්වේ. නූතන ක්ෂුද්‍ර ප්‍රොසෙසර චිපයක ලොජික් ද්වාර මිලියන ගණනක් අඩංගු වේ."

---

### 4.2 Basic Logic Gates (මූලික ලොජික් ද්වාර)

The three primary basic logic gates are **AND**, **OR**, and **NOT**.

#### 4.2.1 AND Gate (සහ ද්වාරය)

* **Definition & Rule (අර්ථ දැක්වීම සහ නීතිය):**
  * **[English Medium Text]:** "An AND gate gives a high output (1) only if all its inputs are high (1). If any input is low (0), the output is low (0)."
  * **[Sinhala Medium Text]:** "AND ද්වාරයක සියලුම ආදාන ඉහළ (1) මට්ටමේ පවතින විට පමණක් ප්‍රතිදානය ඉහළ (1) මට්ටමේ පවතී. ඕනෑම එක් ආදානයක් හෝ පහළ (0) මට්ටමේ පවතී නම් ප්‍රතිදානය පහළ (0) මට්ටමේ පවතී."

* **Boolean Expression (බූලියානු ප්‍රකාශනය):**
  $$Q = A \cdot B \quad \text{or} \quad Q = AB$$

* **Electronic Switch Circuit Diagram (විද්‍යුත් ස්විච පරිපථ සටහන - Series Switches):**
  ```
  +---[ Switch A ]---[ Switch B ]---( Bulb Q )---+
  |                                              |
  +-----------------( Battery )------------------+
  ```
  * *Circuit Rule:* The bulb lights ON (1) ONLY when BOTH Switch A AND Switch B are closed (1).

* **Logic Symbol (ලොජික් සංකේතය):**
  ```
  A ---|        |  )--- Q = A · B
  B ---| /
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

* **Definition & Rule (අර්ථ දැක්වීම සහ නීතිය):**
  * **[English Medium Text]:** "An OR gate gives a high output (1) if one or more of its inputs are high (1). The output is low (0) only if all inputs are low (0)."
  * **[Sinhala Medium Text]:** "OR ද්වාරයක ආදාන එකක් හෝ ඊට වැඩි ගණනක් ඉහළ (1) මට්ටමේ පවතින විට ප්‍රතිදානය ඉහළ (1) වේ. සියලුම ආදාන පහළ (0) මට්ටමේ පවතින විට පමණක් ප්‍රතිදානය පහළ (0) වේ."

* **Boolean Expression (බූලියානු ප්‍රකාශනය):**
  $$Q = A + B$$

* **Electronic Switch Circuit Diagram (විද්‍යුත් ස්විච පරිපථ සටහන - Parallel Switches):**
  ```
  +-------+---[ Switch A ]---+-------( Bulb Q )---+
  |       |                  |                    |
  |       +---[ Switch B ]---+                    |
  |                                               |
  +--------------------( Battery )----------------+
  ```
  * *Circuit Rule:* The bulb lights ON (1) if EITHER Switch A OR Switch B (or both) is closed (1).

* **Logic Symbol (ලොජික් සංකේතය):**
  ```
  A ---\         ) )--- Q = A + B
  B ---/ /
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

* **Definition & Rule (අර්ථ දැක්වීම සහ නීතිය):**
  * **[English Medium Text]:** "A NOT gate has only one input and one output. It reverses (inverts) the logic state. If the input is 0, the output is 1. If the input is 1, the output is 0."
  * **[Sinhala Medium Text]:** "NOT ද්වාරය සඳහා පවතින්නේ එක් ආදානයක් සහ එක් ප්‍රතිදානයක් පමණි. එය ආදාන සංඥාව ප්‍රතිලෝම කරයි. ආදානය 0 වන විට ප්‍රතිදානය 1 වන අතර ආදානය 1 වන විට ප්‍රතිදානය 0 වේ."

* **Boolean Expression (බූලියානු ප්‍රකාශනය):**
  $$Q = \bar{A} \quad \text{or} \quad Q = A'$$

* **Electronic Switch Circuit Diagram (විද්‍යුත් ස්විච පරිපථ සටහන - Inverter Bypass Switch):**
  ```
  +---------------+----( Bulb Q )----+
  |               |                  |
  |        [ Push Switch A ]         |
  |               |                  |
  +-------( Battery )----------------+
  ```
  * *Circuit Rule:* When Switch A is Open (0), current flows through Bulb Q (1). When Switch A is Pressed/Closed (1), short-circuit bypasses the bulb, turning Bulb Q OFF (0).

* **Logic Symbol (ලොජික් සංකේතය):**
  ```
  A --->|o--- Q = A'
  ```

* **Truth Table (සත්‍යතා වගුව):**
  | Input A | Output $Q = \bar{A}$ |
  | :---: | :---: |
  | 0 | **1** |
  | 1 | **0** |

---

### 4.3 Combinational / Derived Logic Gates (සංයුක්ත / ව්‍යුත්පන්න ලොජික් ද්වාර)

Derived gates combine basic logic gates. **NAND** and **NOR** are known as **Universal Gates** because any digital logic circuit can be constructed using only NAND gates or only NOR gates.

#### 4.3.1 NOR Gate (නැත-හෝ / NOR ද්වාරය)

* **Definition & Rule (අර්ථ දැක්වීම සහ නීතිය):**
  * **[English Medium Text]:** "NOR gate is a combination of an OR gate followed by a NOT gate. It produces a high output (1) only if all inputs are low (0)."
  * **[Sinhala Medium Text]:** "NOR ද්වාරය යනු OR ද්වාරයක් සහ NOT ද්වාරයක් එකතුවෙන් සෑදුණු ද්වාරයකි. සියලුම ආදාන පහළ (0) මට්ටමේ පවතින විට පමණක් ප්‍රතිදානය ඉහළ (1) වේ."

* **Boolean Expression (බූලියානු ප්‍රකාශනය):**
  $$Q = \overline{A + B}$$

* **Logic Diagram & Symbol (ලොජික් සංකේතය):**
  ```
  OR Gate followed by NOT Inverter:
  A ---\         ) )---[OR Output]--->|o--- Q = (A + B)'
  B ---/ /

  Standard NOR Gate Symbol:
  A ---\         ) )o--- Q = (A + B)'
  B ---/ /
  ```

* **Truth Table (සත්‍යතා වගුව):**
  | Input A | Input B | OR $(A + B)$ | Output $Q = \overline{A + B}$ |
  | :---: | :---: | :---: | :---: |
  | 0 | 0 | 0 | **1** |
  | 0 | 1 | 1 | **0** |
  | 1 | 0 | 1 | **0** |
  | 1 | 1 | 1 | **0** |

---

#### 4.3.2 NAND Gate (නැත-සහ / NAND ද්වාරය)

* **Definition & Rule (අර්ථ දැක්වීම සහ නීතිය):**
  * **[English Medium Text]:** "NAND gate is a combination of an AND gate followed by a NOT gate. It produces a low output (0) only if all inputs are high (1)."
  * **[Sinhala Medium Text]:** "NAND ද්වාරය යනු AND ද්වාරයක් සහ NOT ද්වාරයක් එකතුවෙන් සෑදුණු ද්වාරයකි. සියලුම ආදාන ඉහළ (1) මට්ටමේ පවතින විට පමණක් ප්‍රතිදානය පහළ (0) වේ."

* **Boolean Expression (බූලියානු ප්‍රකාශනය):**
  $$Q = \overline{A \cdot B}$$

* **Logic Diagram & Symbol (ලොජික් සංකේතය):**
  ```
  AND Gate followed by NOT Inverter:
  A ---|        |  )---[AND Output]--->|o--- Q = (A · B)'
  B ---| /

  Standard NAND Gate Symbol:
  A ---|        |  )o--- Q = (A · B)'
  B ---| /
  ```

* **Truth Table (සත්‍යතා වගුව):**
  | Input A | Input B | AND $(A \cdot B)$ | Output $Q = \overline{A \cdot B}$ |
  | :---: | :---: | :---: | :---: |
  | 0 | 0 | 0 | **1** |
  | 0 | 1 | 0 | **1** |
  | 1 | 0 | 0 | **1** |
  | 1 | 1 | 1 | **0** |

---

#### 4.3.3 XOR Gate (Exclusive-OR / විශේෂිත හෝ ද්වාරය)

* **Definition & Rule (අර්ථ දැක්වීම සහ නීතිය):**
  * **[English Medium Text]:** "XOR (Exclusive-OR) gate gives a high output (1) if the inputs are different from each other. If all inputs are the same, the output is low (0)."
  * **[Sinhala Medium Text]:** "XOR ද්වාරයක ආදාන එකිනෙකට වෙනස් වන අවස්ථාවල දී පමණක් ප්‍රතිදානය ඉහළ (1) වේ. ආදාන සියල්ල සමාන වන විට ප්‍රතිදානය පහළ (0) වේ."

* **Boolean Expression (බූලියානු ප්‍රකාශනය):**
  $$Q = A \oplus B = \bar{A}B + A\bar{B}$$

* **Logic Symbol (ලොජික් සංකේතය):**
  ```
  A --)\        ) )--- Q = A ⊕ B
  B --)/ /
  ```

* **Truth Table (සත්‍යතා වගුව):**
  | Input A | Input B | Output $Q = A \oplus B$ |
  | :---: | :---: | :---: |
  | 0 | 0 | **0** |
  | 0 | 1 | **1** |
  | 1 | 0 | **1** |
  | 1 | 1 | **0** |

* **Construction using Basic Gates (මූලික ද්වාර මගින් ගොඩනැගීම):**
  ```
  A ----+------>|o---[A']-----        |                        |         |   +------------------->|  )----[A'B]----        |   |                    | /                       |   |                                       \ ---\         |   |                                        )    )--- Q = A'B + AB'
        |   +-------->|o---[B']--\                  / ---/ /
        |                        | \               /
        +----------------------->|  )----[AB']----/
                                 | /
  ```

---

#### 4.3.4 XNOR Gate (Exclusive-NOR / විශේෂිත නැත-හෝ ද්වාරය)

* **Definition & Rule (අර්ථ දැක්වීම සහ නීතිය):**
  * **[English Medium Text]:** "XNOR (Exclusive-NOR) gate gives a high output (1) if all inputs are the same. If the inputs are different, the output is low (0)."
  * **[Sinhala Medium Text]:** "XNOR ද්වාරයක ආදාන සියල්ල එක හා සමාන වන අවස්ථාවල දී පමණක් ප්‍රතිදානය ඉහළ (1) වේ. ආදාන එකිනෙකට වෙනස් වන විට ප්‍රතිදානය පහළ (0) වේ."

* **Boolean Expression (බූලියානු ප්‍රකාශනය):**
  $$Q = \overline{A \oplus B} = AB + \bar{A}\bar{B}$$

* **Logic Symbol (ලොජික් සංකේතය):**
  ```
  A --)\        ) )o--- Q = (A ⊕ B)'
  B --)/ /
  ```

* **Truth Table (සත්‍යතා වගුව):**
  | Input A | Input B | XOR $(A \oplus B)$ | Output $Q = \overline{A \oplus B}$ |
  | :---: | :---: | :---: | :---: |
  | 0 | 0 | 0 | **1** |
  | 0 | 1 | 1 | **0** |
  | 1 | 0 | 1 | **0** |
  | 1 | 1 | 0 | **1** |

---

### 4.4 3-Input Logic Gate Extensions (ආදාන 3 ප්‍රසාරණ)

#### 4.4.1 3-Input AND Gate & 3-Input OR Gate

* **3-Input AND Gate ($Q = A \cdot B \cdot C$):**
  ```
  A ---|   B ---|  )--- Q = A · B · C
  C ---| /
  ```
  * *Truth Rule:* Output $Q=1$ ONLY when $A=1, B=1, C=1$.

* **3-Input OR Gate ($Q = A + B + C$):**
  ```
  A ---\   B ----) )--- Q = A + B + C
  C ---/ /
  ```
  * *Truth Rule:* Output $Q=1$ if ANY input ($A, B,$ or $C$) is $1$.

* **Complete 8-Row Truth Table for 3-Input Gates:**
  | Input A | Input B | Input C | 3-Input AND ($A \cdot B \cdot C$) | 3-Input OR ($A + B + C$) | 3-Input NAND ($\overline{A \cdot B \cdot C}$) | 3-Input NOR ($\overline{A + B + C}$) |
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

### 4.5 Integrated Circuit (IC) Pin Layouts (අනුකලිත පරිපථ කෙවෙනි සැකස්ම)

In practical electronics, logic gates are available as 14-pin Dual In-line Package (DIP) Integrated Circuits.

#### 4.5.1 7400 IC - Quad 2-Input NAND Gate

```
                      7400 IC (Quad 2-Input NAND)
                              ┌───┬───┐
                   1A  ──  1 ─┤   └───┤─ 14 ── VCC (+5V)
                   1B  ──  2 ─┤       ├─ 13 ── 4B
                   1Y  ──  3 ─┤       ├─ 12 ── 4A
                   2A  ──  4 ─┤       ├─ 11 ── 4Y
                   2B  ──  5 ─┤       ├─ 10 ── 3B
                   2Y  ──  6 ─┤       ├─ 9  ── 3A
                  GND  ──  7 ─┤       ├─ 8  ── 3Y
                              └───────┘
```
* **Pin Allocation Table:**
  - **Pin 14:** $V_{CC}$ (+5V Power Supply)
  - **Pin 7:** GND (Ground / 0V)
  - **Gate 1:** Pins 1 (In A), 2 (In B) $\rightarrow$ Pin 3 (Out Y)
  - **Gate 2:** Pins 4 (In A), 5 (In B) $\rightarrow$ Pin 6 (Out Y)
  - **Gate 3:** Pins 9 (In A), 10 (In B) $\rightarrow$ Pin 8 (Out Y)
  - **Gate 4:** Pins 12 (In A), 13 (In B) $\rightarrow$ Pin 11 (Out Y)

#### 4.5.2 7402 IC - Quad 2-Input NOR Gate

```
                      7402 IC (Quad 2-Input NOR)
                              ┌───┬───┐
                   1Y  ──  1 ─┤   └───┤─ 14 ── VCC (+5V)
                   1A  ──  2 ─┤       ├─ 13 ── 4Y
                   1B  ──  3 ─┤       ├─ 12 ── 4B
                   2Y  ──  4 ─┤       ├─ 11 ── 4A
                   2A  ──  5 ─┤       ├─ 10 ── 3Y
                   2B  ──  6 ─┤       ├─ 9  ── 3B
                  GND  ──  7 ─┤       ├─ 8  ── 3A
                              └───────┘
```
* **Critical Note (වැදගත් සටහන):** Unlike the 7400 IC, the 7402 NOR IC has its outputs on Pins 1, 4, 10, and 13 (Inputs are on 2,3 and 5,6).

#### 4.5.3 IC Summary Reference Table:
* **7404 IC:** Hex Inverter (6 NOT Gates)
* **7408 IC:** Quad 2-Input AND Gate
* **7432 IC:** Quad 2-Input OR Gate
* **7486 IC:** Quad 2-Input XOR Gate

---

# SECTION B: Complete O/L Past Paper Question Extraction (2020 – 2025)

### 2.1 O/L Past Paper Questions on Logic Gates & Circuits

#### Question 01 (2020 O/L Paper I - Question 34)
* **Year & Question No:** 2020 O/L Paper I - Question 34
* **English Medium Question:**
  "34. Which of the following truth tables represents the output of a 2-input NOR gate?
  (1) [A=0, B=0 -> 0; A=0, B=1 -> 1; A=1, B=0 -> 1; A=1, B=1 -> 1]
  (2) [A=0, B=0 -> 1; A=0, B=1 -> 0; A=1, B=0 -> 0; A=1, B=1 -> 0]
  (3) [A=0, B=0 -> 1; A=0, B=1 -> 1; A=1, B=0 -> 1; A=1, B=1 -> 0]
  (4) [A=0, B=0 -> 0; A=0, B=1 -> 0; A=1, B=0 -> 0; A=1, B=1 -> 1]"
* **Sinhala Medium Question:**
  "34. ආදාන 2ක් සහිත NOR ද්වාරයක ප්‍රතිදානය නිරූපණය වන සත්‍යතා වගුව කුමක්ද?
  (1) [0,0->0; 0,1->1; 1,0->1; 1,1->1]
  (2) [0,0->1; 0,1->0; 1,0->0; 1,1->0]
  (3) [0,0->1; 0,1->1; 1,0->1; 1,1->0]
  (4) [0,0->0; 0,1->0; 1,0->0; 1,1->1]"
* **Correct Answer:** Option (2)

---

#### Question 02 (2020 O/L Paper II - Question 01 (iv))
* **Year & Question No:** 2020 O/L Paper II - Question 01 (iv)
* **English Medium Question:**
  "1. (iv) Draw the logic circuit diagram for the Boolean expression $P = A \cdot B + C \cdot D$ using basic logic gates."
* **Sinhala Medium Question:**
  "1. (iv) මූලික ලොජික් ද්වාර භාවිත කරමින් $P = A \cdot B + C \cdot D$ බූලියානු ප්‍රකාශනය සඳහා ලොජික් පරිපථ සටහන අඳින්න."
* **Circuit Diagram Solution (ලොජික් පරිපථ විසඳුම):**
  ```
  A ---|        |  )---[A·B]----  B ---| /                                       \ ---\                           )    )--- P = A·B + C·D
                         / ---/ /
  C ---| \              /
       |  )---[C·D]----/
  D ---| /
  ```

---

#### Question 03 (2021 O/L Paper I - Question 39)
* **Year & Question No:** 2021 O/L Paper I - Question 39
* **English Medium Question:**
  "39. Consider the logic circuit given below:
  Inputs A and B are connected to a NAND gate. If $B = 1$, what is the output $Q$?
  (1) $0$   (2) $1$   (3) $A$   (4) $\bar{A}$"
* **Sinhala Medium Question:**
  "39. පහත දැක්වෙන ලොජික් පරිපථය සලකන්න:
  A සහ B ආදාන NAND ද්වාරයකට සම්බන්ධ කර ඇත. $B = 1$ නම්, $Q$ ප්‍රතිදානය කුමක්ද?
  (1) $0$   (2) $1$   (3) $A$   (4) $\bar{A}$"
* **Logic Derivation Solution:**
  $Q = \overline{A \cdot B} = \overline{A \cdot 1} = \bar{A}$
* **Correct Answer:** Option (4) $\bar{A}$

---

#### Question 04 (2021 O/L Paper II - Question 01 (iv))
* **Year & Question No:** 2021 O/L Paper II - Question 01 (iv)
* **English Medium Question:**
  "1. (iv) Draw the logic circuit for $P = A \cdot (B + C)$ using standard basic logic gates."
* **Sinhala Medium Question:**
  "1. (iv) සම්මත මූලික ලොජික් ද්වාර භාවිත කර $P = A \cdot (B + C)$ සඳහා ලොජික් පරිපථය අඳින්න."
* **Circuit Diagram Solution:**
  ```
  B ---\         ) )---[B + C]----  C ---/ /                                           |                            |  )--- P = A · (B + C)
  A -----------------------| /
  ```

---

#### Question 05 (2022 O/L Paper II - Question 01 (iv))
* **Year & Question No:** 2022 O/L Paper II - Question 01 (iv)
* **English Medium Question:**
  "1. (iv) Draw the logic circuit diagram for the Boolean expression $F = \bar{C} + A \cdot \bar{B}$ using basic logic gates."
* **Sinhala Medium Question:**
  "1. (iv) $F = \bar{C} + A \cdot \bar{B}$ බූලියානු ප්‍රකාශනය සඳහා මූලික ලොජික් ද්වාර භාවිතයෙන් ලොජික් පරිපථ සටහන අඳින්න."
* **Circuit Diagram Solution:**
  ```
  C --->|o---[C']------------------------                                          \ ---\   A ------------------| \                  )    )--- F = C' + A·B'
                      |  )---[A·B']-------/ ---/ /
  B --->|o---[B']-----| /
  ```

---

#### Question 06 (2023 O/L Paper II - Question 01 (iv))
* **Year & Question No:** 2023 O/L Paper II - Question 01 (iv)
* **English Medium Question:**
  "1. (iv) The logic circuit has inputs A, B, and output Z. Gate 1 is an OR gate, Gate 2 is an AND gate. 
  Write down the Boolean expression for $Z$ in terms of $A$ and $B$, and evaluate $Z$ when $A=1, B=0$."
* **Sinhala Medium Question:**
  "1. (iv) දී ඇති ලොජික් පරිපථයේ ආදාන A, B වන අතර ප්‍රතිදානය Z වේ. 1 ද්වාරය OR ද්වාරයක් ද, 2 ද්වාරය AND ද්වාරයක් ද වේ.
  A සහ B ඇසුරෙන් Z සඳහා බූලියානු ප්‍රකාශනය ලියා, $A=1, B=0$ වන විට Z හි අගය ගණනය කරන්න."
* **Solution Step-by-Step:**
  - Gate 1 Output = $A + B$
  - Gate 2 Output $Z = (A + B) \cdot A$
  - For $A=1, B=0$: $Z = (1 + 0) \cdot 1 = 1 \cdot 1 = 1$.

---

#### Question 07 (2024 O/L Paper II - Question 01 (iv))
* **Year & Question No:** 2024 O/L Paper II - Question 01 (iv)
* **English Medium Question:**
  "1. (iv) Consider the circuit where Inputs A and B pass into a NAND gate whose output forms one input of a NOR gate alongside Input C. Write the final Boolean expression $Y$."
* **Sinhala Medium Question:**
  "1. (iv) A සහ B ආදාන NAND ද්වාරයකට යොමු කර, එහි ප්‍රතිදානය C ආදානය සමඟ NOR ද්වාරයකට ලබා දෙන පරිපථය සලකන්න. අවසාන බූලියානු ප්‍රකාශනය Y ලියන්න."
* **Solution:**
  $$Y = \overline{\overline{A \cdot B} + C}$$

---

#### Question 08 (2025 O/L Paper II - Question 01 (iv))
* **Year & Question No:** 2025 O/L Paper II - Question 01 (iv)
* **English Medium Question:**
  "1. (iv) Construct the truth table for the Boolean expression $Q = A \cdot \bar{B} + \bar{A} \cdot B$ (XOR equivalency)."
* **Sinhala Medium Question:**
  "1. (iv) $Q = A \cdot \bar{B} + \bar{A} \cdot B$ බූලියානු ප්‍රකාශනය සඳහා සත්‍යතා වගුව ගොඩනගන්න."
* **Full Step-by-Step Truth Table Solution:**
  | $A$ | $B$ | $\bar{A}$ | $\bar{B}$ | $A \cdot \bar{B}$ | $\bar{A} \cdot B$ | $Q = A\bar{B} + \bar{A}B$ |
  | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
  | 0 | 0 | 1 | 1 | 0 | 0 | **0** |
  | 0 | 1 | 1 | 0 | 0 | 1 | **1** |
  | 1 | 0 | 0 | 1 | 1 | 0 | **1** |
  | 1 | 1 | 0 | 0 | 0 | 0 | **0** |

---

### 2.2 Unexamined Sub-topics Note (නොඅසන ලද උප-මාතෘකා පිළිබඳ සටහන)
* **Note:** Detailed IC internal pin identification (e.g. mapping Pin 14 $V_{CC}$ / Pin 7 GND on a 7400 DIP package) has not been directly tested in G.C.E. O/L Past Papers between 2020 and 2025, but remains a vital part of the Grade 10 syllabus.
