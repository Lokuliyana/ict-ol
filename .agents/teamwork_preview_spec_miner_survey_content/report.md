# Comprehensive Syllabus Content Specification Report
**Project:** Sri Lankan G.C.E. O/L ICT Gamified Micro-Learning Web Application  
**Author:** Syllabus Content Spec Miner  
**Date:** 2026-10-07 / 2026-10-08  
**Scope:** Grade 10 (Units 01–09), Grade 11 (Units 01–06), Data Model Schemas, Compilation & Validation Pipeline

---

## 1. Executive Summary & Specification Sources
This specification documents the complete curriculum, data schemas, interactive flashcard/quiz mechanics, and validation pipeline for the Sri Lankan G.C.E. O/L Information and Communication Technology (ICT) micro-learning platform.

### Authoritative Specification Sources:
1. **National Institute of Education (NIE) Sri Lanka:** Official G.C.E. O/L ICT Syllabus & Teacher Instructional Manuals (Grade 10 & Grade 11).
2. **Department of Educational Publications Sri Lanka:** Official Grade 10 & 11 ICT textbooks in English Medium and Sinhala Medium (`ICT G-10 E.pdf`, `ict g10 S.pdf`, `ICT G-11 E.pdf`, `ict g11 S.pdf`).
3. **Department of Examinations Sri Lanka:** Official G.C.E. O/L ICT Past Examination Papers & Marking Schemes (2020, 2021, 2022, 2023, 2024, 2025).
4. **Project Requirements Document (`ORIGINAL_REQUEST.md`):** Core requirements R1 through R5, Acceptance Criteria, and sandbox mappings.
5. **Existing Workspace Codebase & Assets:** `src/data/curriculum.ts`, `src/data/lesson01Data.ts`, `src/data/allLessonsData.ts`, `src/data/pastPapersData.ts`, `public/lessons/*.md`, `scripts/generate-all-lessons.mjs`, `scripts/verify-content.mjs`.

---

## Features Discovered

| # | Category | Feature | Description | Inputs | Outputs | Error Behavior | Discovered Via |
|---|----------|---------|-------------|--------|---------|----------------|----------------|
| 1 | Curriculum | G10 9-Unit Standard Structure | Decomposes Grade 10 into 9 discrete units (decoupling Unit 03 Data Representation from Unit 04 Logic Gates). | Grade 10 syllabus curriculum config | 9 Grade 10 Units with distinct IDs `g10-u01` to `g10-u09` | Throws validation error if fewer than 9 units in Grade 10 | NIE Syllabus / ORIGINAL_REQUEST.md R3 & R4 |
| 2 | Curriculum | G11 6-Unit Standard Structure | Maps Grade 11 into 6 discrete units covering programming, SDLC, networking, multimedia, web, and society. | Grade 11 syllabus curriculum config | 6 Grade 11 Units with distinct IDs `g11-u01` to `g11-u06` | Throws validation error if fewer than 6 units in Grade 11 | NIE Syllabus / ORIGINAL_REQUEST.md R3 |
| 3 | Curriculum | 100% Dual-Medium Parity | Every title, competency, takeaway, bullet point, prompt, option, and explanation exists identically in English (`en`) and Sinhala (`si`). | Bilingual raw text blocks and JSON fields | Symmetric bilingual JSON payloads | Compilation failure if either language is empty, missing, or mismatched | ORIGINAL_REQUEST.md R3 / verify-content.mjs |
| 4 | Schema | `LevelNode` Data Model | Represents a quest node on the Duolingo-style winding map with order, type, rewards, and associated content. | Unit ID, node order, title, type (`station`, `boss`, `sandbox`), flashcard refs, quiz refs | Strict typed `LevelNode` object | Schema validator flags missing fields or orphan prerequisites | ORIGINAL_REQUEST.md R1 & R3 / QuestRoadmap.tsx |
| 5 | Schema | `TheoryCard` Data Model | Micro-learning story flashcard model structured for Instagram-story segmented viewing with top 40% widget and bottom 60% micro-bullets. | Card ID, bilingual title, widgetType, widgetData, microBulletPoints, keyTakeaway | Valid `TheoryCard` object | Rejects empty micro-bullets or missing takeaways | ORIGINAL_REQUEST.md R2 & R3 / TheoryBriefingCard.tsx |
| 6 | Schema | `QuizQuestion` Data Model | Blind quiz question model supporting 4 options, 0-based correct index, and bilingual explanations. | Question ID, prompt (`en`/`si`), 4 options, `correctIndex` (0-3), explanation (`en`/`si`) | Valid `QuizQuestion` object | Rejects out-of-bounds `correctIndex`, non-4 options, or untranslated strings | ORIGINAL_REQUEST.md R2 & R3 / LinearLessonRunner.tsx |
| 7 | Engine | Story Flashcard Engine | `/study/[nodeId]` segmented card runner with top visual infographic widget, bottom bullets, and thumb controls. | `nodeId`, user language mode (`dual`, `en`, `si`) | Segmented bar progress, visual widget canvas, bullet points, navigation buttons | Fallbacks to safe default if widget unsupported | ORIGINAL_REQUEST.md R2 |
| 8 | Engine | Blind Quiz Engine | `/quiz/[nodeId]` two-phase evaluation where options start neutral and evaluation triggers only on tapping `Check Answer`. | Option selection, tap `Check Answer` | Emerald/crimson feedback, rationale reveal, heart deduction (-1), shake effect | Life depletion modal if hearts reach 0 | ORIGINAL_REQUEST.md R2 & Acceptance Criteria |
| 9 | Engine | Level Completion Drawer | Confetti celebration, 1-3 star calculation based on accuracy (>=70% / >=90%), XP reward, and zero dead-end routes. | Final quiz score, total questions | Animated drawer with stars, XP tally, `Next Quest` / `Review` actions | Clamps stars to [1, 3] | ORIGINAL_REQUEST.md R2 / CompletionDrawer.tsx |
| 10 | Pipeline | Content Compiler & Validator | CLI compilation and validation suite (`scripts/compile-content.ts` / `npm run validate:content`). | Markdown study guides in `public/lessons` and raw data | Compiled production JSON under `src/data/compiled/` with zero errors | Exits with non-zero status code on schema, range, or parity errors | ORIGINAL_REQUEST.md R3 / scripts/ |
| 11 | Sandboxes | G10-U03 8-Bit Switchboard | Interactive 8-bit lever switches calculating binary powers ($2^7$ to $2^0$) and decimal totals. | User toggle clicks on 8 bit levers | Binary string, decimal sum, power breakdown | Clamps inputs to 0-255 | ORIGINAL_REQUEST.md R4 |
| 12 | Sandboxes | G10-U03 Color Chamber | 3-channel RGB sliders (0-255) dynamically rendering hex color codes (#RRGGBB). | R, G, B slider values | Hexadecimal color swatch and CSS color string | Clamps values to [0, 255] | ORIGINAL_REQUEST.md R4 / g10u3.ts |
| 13 | Sandboxes | G10-U04 Logic Gate Breadboard | Interactive breadboard for AND, OR, NOT, NAND, NOR, XOR, XNOR gates and 7400-series IC pins. | Input signal toggles (A, B) and gate selections | Output logic levels (0/1), live truth tables, IC pin highlights | Detects invalid gate combinations | ORIGINAL_REQUEST.md R4 / LogicGateSimulator.tsx |
| 14 | Sandboxes | G10-U07 Spreadsheet Laser Grid | Interactive cell reference visualizer displaying relative vs absolute (`$A$1`) cell locking behavior. | Formula dragging, cell selection | Laser ray visualization of referenced cells, formula update preview | Alerts on circular or out-of-bound references | ORIGINAL_REQUEST.md R4 |
| 15 | Sandboxes | G11-U01 Trace Table Scrubber | Variable register stepping scrubber executing loops and condition branches step-by-step. | Algorithmic step forward/backward buttons | Live trace table row updates, highlighted active code line | Halts on max loop limit to prevent infinite loops | ORIGINAL_REQUEST.md R4 / TraceTableScrubber.tsx |
| 16 | Sandboxes | G11-U05 HTML Table Mason | Interactive visual table cell merger demonstrating `colspan` and `rowspan` code generation. | Grid cell selections, merge triggers | Live table render and synchronized HTML source code preview | Rejects overlapping or invalid grid spans | ORIGINAL_REQUEST.md R4 |
| 17 | Exam Arena | Past Paper Boss Gauntlets | End-of-unit Boss Nodes featuring authentic 2020–2025 G.C.E. O/L past paper problems with marking rubrics. | Past paper question set for specified unit | Timed challenge or practice mode with official marking schemes | Blocks completion until minimum mastery reached | ORIGINAL_REQUEST.md R5 / pastPapersData.ts |

---

## Edge Cases

| # | Feature | Input | Observed Behavior |
|---|---------|-------|-------------------|
| 1 | Bilingual Text | Missing Sinhala string (empty `""` or `undefined`) | Content validator throws: `Missing Sinhala translation for key at path [X]`. Build halts. |
| 2 | Quiz Option Count | Quiz question with only 3 options instead of 4 | Validator fails with `Question [id] must have exactly 4 options for standard MCQ`. |
| 3 | `correctIndex` Out of Bounds | `correctIndex: 4` or `correctIndex: -1` on 4-option question | Validator fails: `correctIndex must be integer within [0, options.length - 1]`. |
| 4 | Life Economy Depletion | User with 0 hearts attempts to enter `/quiz/[nodeId]` | Route is blocked; renders Life Depletion Modal prompting study flashcards or waiting 30-min recharge cycle. |
| 5 | Blind Quiz Answer Privacy | Inspecting DOM/Props prior to clicking `Check Answer` | No correct indicator classes (`bg-emerald-500`, checkmark icon) are rendered in DOM until `state.checked === true`. |
| 6 | Flashcard Navigation Bounds | Tapping `Back` on first card or `Next` on last card | First card disables `Back`; last card transforms `Next` button into `Start Quiz` CTA. |
| 7 | Star Threshold Calculation | User scores 69% on quiz | Yields 1 star (<70% = 1 star; >=70% = 2 stars; >=90% = 3 stars). |
| 8 | Octal Base-8 Digits in G10-U03 | Entering digit '8' or '9' into Base-8 converter | Number converter highlights invalid character error: Octal only permits digits 0–7. |
| 9 | Spreadsheet Error `#DIV/0!` | Spreadsheet formula `=A1/0` | Displays `#DIV/0!` error badge with micro-explanation of zero-division error. |
| 10 | Pascal Loop Bounds in G11-U01 | `for i := 10 downto 1 do` vs `to` | Trace table scrubber reverses decrement register correctly and terminates at loop limit. |
| 11 | HTML Table Mason Colspan Overlap | Merging cells that cross existing multi-row boundaries | Visual grid validator prevents irregular table distortions by highlighting collision boundaries. |
| 12 | NIC Decoder Leap Year / Century | Old 9-digit NIC vs New 12-digit NIC with day numbers > 500 (Female) | Accurately subtracts 500 to extract day of year; checks February 29 bounds for leap years. |

---

## 2. Complete Sri Lankan G.C.E. O/L ICT Syllabus Specification

### Structure Overview:
The official curriculum published by the National Institute of Education (NIE) and the Department of Examinations encompasses **15 total units**:
- **Grade 10:** 9 Units (Units 01 to 09)
- **Grade 11:** 6 Units (Units 01 to 06)

*Note on Unit 03 & Unit 04:* In some legacy local summaries, "Data Representation" and "Logic Gates" were merged into a single topic. In the authoritative NIE syllabus and `ORIGINAL_REQUEST.md` (R4), **Unit 03 is Data Representation** and **Unit 04 is Logic Gates & Boolean Logic**, each requiring dedicated sandboxes and quest paths.

---

### Grade 10 Syllabus Units (01 through 09)

#### Grade 10 - Unit 01: Basic Concepts of Information and Communication Technology
* **Title (EN):** Basic Concepts of Information and Communication Technology  
* **Title (SI):** තොරතුරු හා සන්නිවේදන තාක්ෂණයේ මූලික සංකල්ප  
* **Learning Competency:**  
  * **EN:** Distinguishes between data and information, analyzes information systems, evaluates the attributes of quality information, and assesses the societal applications and evolution of computing.
  * **SI:** දත්ත සහ තොරතුරු අතර වෙනස හඳුනා ගනී, තොරතුරු පද්ධති විශ්ලේෂණය කරයි, ගුණාත්මක තොරතුරක ලක්ෂණ ඇගයීමට ලක් කරයි, සහ ICT යෙදීම් හා පරිගණක පරිණාමය විමර්ශනය කරයි.
* **Key Concepts & Subtopics:**
  1. **1.1 Data and Information (දත්ත සහ තොරතුරු):** Definition of raw data (unprocessed symbols/facts), definition of information (processed data with meaning for decision-making). Examples: term test mark sheets, National Identity Card (NIC) number parsing.
  2. **1.2 Information Systems (තොරතුරු පද්ධති):** System concept (Input -> Process -> Output -> Storage). Manual vs automated systems. Examples: school attendance system, ATM banking, POS billing.
  3. **1.3 Attributes of Quality Information (ගුණාත්මක තොරතුරක ලක්ෂණ):** Timeliness (කාලීන බව), Accuracy (නිරවද්‍යතාව), Completeness (සම්පූර්ණ බව), Relevancy (අදාළ බව), Cost-effectiveness (පිරිවැය ඵලදායී බව).
  4. **1.4 ICT Definition & Technologies (ICT හඳුන්වාදීම):** Integration of computing with communication networks.
  5. **1.5 Applications of ICT (ICT යෙදවුම්):** e-Government (G2C, G2B, G2G), Healthcare & Telemedicine, Education (LMS/Moodle), Agriculture, Transportation, Online Banking.
  6. **1.6 Demerits & Challenges of ICT (ICT හි අවාසි):** Digital addiction, cyber threats, social isolation, e-waste hazards.
  7. **1.7 Evolution of Computing & Generations (පරිගණක පරිණාමය හා පරම්පරා):**
     * Mechanical Era: Abacus, Pascaline, Leibniz Wheel, Charles Babbage's Analytical Engine (Father of Computing), Ada Lovelace (First Programmer).
     * 1st Gen (1940-1956): Vacuum Tubes (ENIAC, EDVAC).
     * 2nd Gen (1956-1963): Transistors.
     * 3rd Gen (1964-1971): Integrated Circuits (IC).
     * 4th Gen (1971-Present): Microprocessors / VLSI (Very Large Scale Integration).
     * 5th Gen (Present & Beyond): Artificial Intelligence (AI), ULSI, Quantum Computing.

#### Grade 10 - Unit 02: The Computer System & System Components
* **Title (EN):** The Computer System & System Components  
* **Title (SI):** පරිගණක පද්ධතිය සහ පද්ධති සංරචක  
* **Learning Competency:**  
  * **EN:** Identifies the structural hardware architecture of computer systems, classifies computers by size and technology, examines CPU components, memory hierarchy, and peripheral ports.
  * **SI:** පරිගණක පද්ධතියක දෘඩාංග ව්‍යුහය හඳුනා ගනී, ප්‍රමාණය හා තාක්ෂණය අනුව වර්ගීකරණය කරයි, මධ්‍ය සැකසුම් ඒකකය, මතක ධූරාවලිය සහ කෙවෙනි (Ports) විමර්ශනය කරයි.
* **Key Concepts & Subtopics:**
  1. **2.1 Characteristics & Functions of a Computer System:** Speed, accuracy, efficiency/diligence, versatility, storage capacity. Input, Process, Output, Storage.
  2. **2.2 Computer Classification:**
     * By Size: Supercomputers, Mainframes, Minicomputers, Microcomputers (Desktops, Laptops, Tablets, Smartphones).
     * By Technology: Digital, Analog, Hybrid.
  3. **2.3 Von Neumann Architecture:** Stored-program concept, unified memory bus.
  4. **2.4 CPU Internal Components:**
     * **ALU (Arithmetic Logic Unit):** Mathematical computations (+, -, *, /) and logical comparisons (<, >, =, AND, OR).
     * **CU (Control Unit):** Fetches instructions, decodes opcodes, coordinates control signals.
     * **Registers:** High-speed internal CPU storage (Program Counter, Instruction Register, Accumulator, Memory Address Register).
  5. **2.5 Memory Hierarchy & Storage Devices:**
     * Primary Memory: Registers (fastest, smallest) -> Cache Memory (L1, L2, L3) -> RAM (Random Access Memory, volatile) -> ROM (Read Only Memory, non-volatile, holds BIOS/bootstraps: PROM, EPROM, EEPROM).
     * Secondary Storage: Magnetic (HDD, Tape), Optical (CD, DVD, Blu-Ray), Solid-State (SSD, Flash Drive, SD Card).
  6. **2.6 Input & Output Devices:** Keyboards, mice, barcode scanners, OMR, OCR, MICR, biometric scanners, monitors (CRT, LCD, LED, OLED), printers (Impact vs Non-impact: Dot-matrix, Inkjet, Laser, 3D), speakers, multimedia projectors.
  7. **2.7 Computer Ports & Interfaces:** USB (Type-A, Type-C), HDMI, VGA, RJ-45 (Ethernet), Audio jacks, DisplayPort.

#### Grade 10 - Unit 03: Data Representation in Computer Systems
* **Title (EN):** Data Representation in Computer Systems  
* **Title (SI):** පරිගණක පද්ධති තුළ දත්ත නිරූපණය  
* **Learning Competency:**  
  * **EN:** Converts numbers across Decimal, Binary, Octal, and Hexadecimal systems, explains digital voltage levels, calculates storage capacities, and analyzes character encoding schemes (ASCII, Unicode, BCD).
  * **SI:** දශමය, ද්වීමය, අෂ්ටමය සහ ෂඩ්දශමය පද්ධති අතර පරිවර්තනය කරයි, වෝල්ටීයතා මට්ටම් විස්තර කරයි, ආචයන ධාරිතාව ගණනය කරයි, සහ අක්ෂර කේතන (ASCII, Unicode, BCD) විශ්ලේෂණය කරයි.
* **Key Concepts & Subtopics:**
  1. **3.1 Digital Voltage Signals:** Binary states: High Voltage (1 / True / Switch Closed) vs Low Voltage (0 / False / Switch Open).
  2. **3.2 Number Systems & Bases:**
     * Decimal (Base 10): Digits 0–9.
     * Binary (Base 2): Bits 0, 1.
     * Octal (Base 8): Digits 0–7.
     * Hexadecimal (Base 16): Symbols 0–9 and A–F (A=10, B=11, C=12, D=13, E=14, F=15).
  3. **3.3 Positional Value & Significance:** Most Significant Digit/Bit (MSD/MSB), Least Significant Digit/Bit (LSD/LSB).
  4. **3.4 Radix Conversions:**
     * Decimal to Binary/Octal/Hex (Repeated Division with remainders).
     * Binary/Octal/Hex to Decimal (Positional power expansion $\sum d \times r^k$).
     * Binary to Octal (3-bit grouping) & Octal to Binary (3-bit expansion).
     * Binary to Hexadecimal (4-bit grouping) & Hexadecimal to Binary (4-bit expansion).
  5. **3.5 Binary Arithmetic:** Binary addition, subtraction, carry bits.
  6. **3.6 Storage Units & Capacity:**
     * 1 Bit (b) = binary 0 or 1.
     * 1 Byte (B) = 8 Bits = 1 Character.
     * 1 Kilobyte (KB) = 1,024 Bytes ($2^{10}$).
     * 1 Megabyte (MB) = 1,024 KB ($2^{20}$).
     * 1 Gigabyte (GB) = 1,024 MB ($2^{30}$).
     * 1 Terabyte (TB) = 1,024 GB ($2^{40}$).
     * 1 Petabyte (PB) = 1,024 TB ($2^{50}$).
  7. **3.7 Character Coding Schemes:**
     * **BCD (Binary Coded Decimal):** 4-bit representation of decimal digits 0-9.
     * **ASCII (American Standard Code for Information Interchange):** 7-bit standard (128 characters) and 8-bit extended (256 characters).
     * **EBCDIC:** 8-bit mainframe character set.
     * **Unicode:** 16-bit to 32-bit universal character standard (UTF-8, UTF-16) covering all global languages including Sinhala and Tamil.
  8. **3.8 Color Representation:** 24-bit True Color: 8-bit Red + 8-bit Green + 8-bit Blue ($256 \times 256 \times 256 = 16.7M$ colors) represented in Hexadecimal `#RRGGBB`.
* **Associated Sandbox:**
  * **8-Bit Switchboard (lever toggles calculating binary to decimal).**
  * **Color Chamber (RGB sliders 0-255 translating to Hex color swatch).**

#### Grade 10 - Unit 04: Fundamental Logic Gates & Boolean Logic
* **Title (EN):** Fundamental Logic Gates & Boolean Logic  
* **Title (SI):** ලොජික් ද්වාර හා බූලියානු තර්කනය  
* **Learning Competency:**  
  * **EN:** Analyzes logic gate circuit behavior, constructs truth tables, expresses Boolean algebraic functions, and maps 7400-series Integrated Circuit (IC) pinouts.
  * **SI:** ලොජික් ද්වාර පරිපථ ක්‍රියාකාරිත්වය විශ්ලේෂණය කරයි, සත්‍යතා වගු ගොඩනගයි, බූලියානු සමීකරණ ලියයි, සහ 7400 කාණ්ඩයේ අනුකලිත පරිපථ (IC) කෙවෙනි සැකස්ම හඳුනා ගනී.
* **Key Concepts & Subtopics:**
  1. **4.1 Concept of Logic Gates:** Elementary building blocks of digital electronic systems. Switch equivalents (Series = AND, Parallel = OR).
  2. **4.2 Basic Logic Gates:**
     * **AND Gate:** $F = A \cdot B$. Output is 1 only when BOTH inputs are 1.
     * **OR Gate:** $F = A + B$. Output is 1 when AT LEAST ONE input is 1.
     * **NOT Gate (Inverter):** $F = \overline{A}$. Inverts signal (0 -> 1, 1 -> 0).
  3. **4.3 Combinational / Derived Logic Gates:**
     * **NAND Gate:** $F = \overline{A \cdot B}$. Inverted AND (Output 0 only when both are 1).
     * **NOR Gate:** $F = \overline{A + B}$. Inverted OR (Output 1 only when both are 0).
     * **XOR Gate (Exclusive OR):** $F = A \oplus B = (A \cdot \overline{B}) + (\overline{A} \cdot B)$. Output 1 when inputs are DIFFERENT.
     * **XNOR Gate (Exclusive NOR):** $F = \overline{A \oplus B}$. Output 1 when inputs are IDENTICAL.
  4. **4.4 Truth Tables & Combinational Logic Circuits:** Formulating multi-gate circuits from real-world scenarios (e.g. fire alarms, safety locks) and tracing signal logic.
  5. **4.5 Integrated Circuits (7400-Series TTL):**
     * Dual In-line Package (DIP-14): Pin 14 = VCC (+5V), Pin 7 = GND (Ground).
     * **7400:** Quad 2-Input NAND Gate.
     * **7402:** Quad 2-Input NOR Gate.
     * **7404:** Hex Inverter (NOT).
     * **7408:** Quad 2-Input AND Gate.
     * **7432:** Quad 2-Input OR Gate.
     * **7486:** Quad 2-Input XOR Gate.
* **Associated Sandbox:**
  * **Neon Logic Gate Breadboard (drag/toggle AND, OR, NOT, NAND, NOR, XOR with live truth table indicator).**

#### Grade 10 - Unit 05: Operating Systems
* **Title (EN):** Operating Systems  
* **Title (SI):** මෙහෙයුම් පද්ධති  
* **Learning Competency:**  
  * **EN:** Explains the booting sequence and firmware execution, analyzes core operating system resource management functions, contrasts user interfaces, and categorizes utility software.
  * **SI:** පරිගණක පණගැන්වීමේ පියවර හා ස්ථීරාංග කාර්යභාරය විස්තර කරයි, මෙහෙයුම් පද්ධති සම්පත් කළමනාකරණ කාර්යයන් විශ්ලේෂණය කරයි, පරිශීලක අතුරුමුහුණත් සංසන්දනය කරයි, සහ උපයෝගිතා මෘදුකාංග වර්ගීකරණය කරයි.
* **Key Concepts & Subtopics:**
  1. **5.1 Hardware, Firmware, Software:** Firmware stored in ROM (BIOS/UEFI), executes POST (Power-On Self-Test), loads master boot record and OS kernel.
  2. **5.2 Software Classification:** System Software (Operating Systems, Utility Programs, Device Drivers) vs Application Software (General Purpose, Specialized/Custom). Proprietary vs Free & Open Source Software (FOSS).
  3. **5.3 Core Functions of an OS:**
     * Process Management (CPU scheduling, multitasking).
     * Memory Management (RAM allocation/deallocation, virtual memory).
     * File Management (Hierarchical folder directories, access rights).
     * Device / I/O Management (Spooling, device drivers).
     * Security & User Access Control (Authentication, permissions).
  4. **5.4 User Interfaces:** Command-Line Interface (CLI - MSDOS, Linux terminal) vs Graphical User Interface (GUI - Windows, macOS, Ubuntu desktop) vs Touch UI.
  5. **5.5 Operating System Classifications:** Single-user Single-task (MS-DOS), Single-user Multi-task (Windows, macOS), Multi-user Multi-task (Linux, Unix), Real-Time OS (RTOS).
  6. **5.6 Utility Programs:** Disk Defragmenter, Antivirus software, Backup utilities, Disk Cleanup, File Compression (ZIP, RAR).
  7. **5.7 File System Organization:** Drives, folders/directories, filenames, extensions (.docx, .xlsx, .pdf, .jpg, .mp3, .exe), file paths.

#### Grade 10 - Unit 06: Word Processing
* **Title (EN):** Word Processing  
* **Title (SI):** වචන සකසුම්  
* **Learning Competency:**  
  * **EN:** Creates and formats digital documents, organizes structured data in tables, applies proofreading tools, and automates mass correspondence using Mail Merge.
  * **SI:** ඩිජිටල් ලේඛන සකස් කර හැඩගන්වයි, වගු තුළ දත්ත සංවිධානය කරයි, සංස්කරණ මෙවලම් භාවිත කරයි, සහ තැපැල් ඒකාබද්ධතාව (Mail Merge) මගින් ලිපි ස්වයංක්‍රීය කරයි.
* **Key Concepts & Subtopics:**
  1. **6.1 Introduction to Word Processing:** Manual typewriter vs word processor advantages (easy editing, neat printing, digital storage, formatting flexibility).
  2. **6.2 UI Elements & Shortcuts:** Ribbon/Menu bar, Ruler, Status bar. Standard shortcuts (Ctrl+N, Ctrl+O, Ctrl+S, Ctrl+P, Ctrl+Z, Ctrl+Y, Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+A, Ctrl+F).
  3. **6.3 Formatting:**
     * Font: Typeface, size, bold, italic, underline, strike-through, subscript ($H_2O$), superscript ($X^2$), highlight color.
     * Paragraph: Alignment (Left, Center, Right, Justify), Line spacing, Indentation, Bullet points, Numbered lists.
     * Page: Margins, Orientation (Portrait vs Landscape), Page size (A4, Letter), Breaks, Columns.
  4. **6.4 Tables, Headers/Footers & Objects:** Inserting tables, merging/splitting cells, cell borders, inserting images, shapes, symbols, page numbers.
  5. **6.5 Proofreading Tools:** Spell check (red squiggly line), Grammar check (blue/green line), Find & Replace, Word Count, Thesaurus.
  6. **6.6 Mail Merge:** Automation of personalized batch letters. Three key components: Main Document (ප්‍රධාන ලේඛනය), Data Source (දත්ත ප්‍රභවය), Merged Document (ඒකාබද්ධ ලේඛනය).

#### Grade 10 - Unit 07: Electronic Spreadsheets
* **Title (EN):** Electronic Spreadsheets  
* **Title (SI):** ඉලෙක්ට්‍රොනික පැතුරුම්පත්  
* **Learning Competency:**  
  * **EN:** Formulates spreadsheet calculations, applies relative and absolute cell references, evaluates built-in mathematical/logical functions, and generates visual charts.
  * **SI:** පැතුරුම්පත් ගණනය කිරීම් සිදු කරයි, සාපේක්ෂ හා නිරපේක්ෂ සෛල යොමු නිවැරදිව භාවිත කරයි, ගණිතමය හා තාර්කික ශ්‍රිත ඇගයීමට ලක් කරයි, සහ ප්‍රස්ථාර නිර්මාණය කරයි.
* **Key Concepts & Subtopics:**
  1. **7.1 Fundamentals of Spreadsheets:** Workbooks, worksheets, grid of rows (numbered 1, 2, 3...) and columns (lettered A, B, C...).
  2. **7.2 Cell Addressing & Data Types:** Active cell, Name box, Formula bar. Data types: Labels (Text - left-aligned by default), Values (Numbers - right-aligned by default), Formulas (starts with `=`).
  3. **7.3 Operators & Precedence:** Arithmetic operators (`+`, `-`, `*`, `/`, `^`), Relational operators (`>`, `<`, `=`, `>=`, `<=`, `<>`). Operator precedence (BODMAS: Brackets -> Exponentiation -> Multiplication/Division -> Addition/Subtraction).
  4. **7.4 Built-In Functions:**
     * `SUM(range)`: Total of numbers.
     * `AVERAGE(range)`: Mean value.
     * `MIN(range)`: Minimum value.
     * `MAX(range)`: Maximum value.
     * `COUNT(range)`: Count of numeric cells.
     * `COUNTA(range)`: Count of non-empty cells.
     * `IF(condition, value_if_true, value_if_false)`: Conditional branch evaluation.
  5. **7.5 Cell Referencing Methods:**
     * Relative Referencing (e.g. `A1`): Adjusts row and column coordinates dynamically when copied/dragged.
     * Absolute Referencing (e.g. `$A$1`): Locks row and column coordinates firmly using `$` signs.
     * Mixed Referencing (e.g. `$A1` locks column A, `A$1` locks row 1).
  6. **7.6 Charts & Error Codes:** Bar charts, Column charts, Pie charts (showing percentage proportions), Line charts (trends over time). Common errors: `#####` (column too narrow), `#DIV/0!` (division by zero), `#VALUE!` (wrong argument type), `#NAME?` (unrecognized function name), `#REF!` (invalid cell reference).
* **Associated Sandbox:**
  * **Spreadsheet Laser Grid & Reference Anchors (interactive visual demonstration of relative vs absolute `$A$1` formula dragging).**

#### Grade 10 - Unit 08: Electronic Presentations
* **Title (EN):** Electronic Presentations  
* **Title (SI):** ඉලෙක්ට්‍රොනික සමර්පණ  
* **Learning Competency:**  
  * **EN:** Designs structured digital slide presentations, manages slide templates with Slide Master, configures transitions and custom animations, and prepares delivery handouts.
  * **SI:** ව්‍යුහාත්මක ඩිජිටල් කදා නිර්මාණය කරයි, Slide Master භාවිතයෙන් සැකිලි කළමනාකරණය කරයි, සංක්‍රාන්ති හා අභිමත සජීවීකරණ සකස් කරයි, සහ අත්පත්‍රිකා (Handouts) මුද්‍රණය කරයි.
* **Key Concepts & Subtopics:**
  1. **8.1 Quality Presentation Guidelines:** The 6x6 rule (maximum 6 lines per slide, 6 words per line), consistent font families, high color contrast between text and background, relevant multimedia.
  2. **8.2 Software Interfaces & Slide Master:** Slide Pane, Slide Sorter, Notes Pane. Slide Master (controls global theme, fonts, logos across all slides simultaneously).
  3. **8.3 Slide Transitions vs Custom Animations:**
     * Slide Transition: Visual effect that occurs when moving from one slide to the next during slide show.
     * Custom Animation: Visual/audio effect applied to specific objects (text, images, shapes) within a single slide. Four categories: Entrance (ඇතුළුවීමේ), Emphasis (අවධාරණ), Exit (පිටවීමේ), Motion Paths (චලන මාර්ග).
  4. **8.4 Delivery & Handout Views:** Slide Show mode (F5 from beginning, Shift+F5 from current slide), Presenter View, printing handouts (1, 2, 3, 4, 6, 9 slides per page).

#### Grade 10 - Unit 09: Database Management
* **Title (EN):** Database Management  
* **Title (SI):** දත්ත සමුදා කළමනාකරණය  
* **Learning Competency:**  
  * **EN:** Models relational database tables, identifies primary, foreign, and composite keys, determines entity relationship cardinalities, and constructs selection queries.
  * **SI:** සම්බන්ධක දත්ත සමුදා වගු සැලසුම් කරයි, ප්‍රාථමික, විදේශ සහ සංයුක්ත යතුරු හඳුනා ගනී, සම්බන්ධතා (Cardinality) තීරණය කරයි, සහ තෝරාගැනීමේ විමසුම් (Queries) සකස් කරයි.
* **Key Concepts & Subtopics:**
  1. **9.1 Database Concepts:** Limitations of traditional manual filing systems (data redundancy, inconsistency, physical damage, slow search) vs DBMS advantages (reduced redundancy, fast retrieval, integrity, security).
  2. **9.2 Data Hierarchy:** Bit -> Byte/Character -> Field (Attribute/Column) -> Record (Tuple/Row) -> Table (Entity/Relation) -> Database.
  3. **9.3 Keys in Relational Databases:**
     * Primary Key (ප්‍රාථමික යතුර): Unique identifier for each record in a table (cannot contain NULL values).
     * Foreign Key (විදේශ යතුර): Attribute in one table that matches the Primary Key of another table, establishing a relationship.
     * Composite Key (සංයුක්ත යතුර): Primary key composed of two or more combined fields.
  4. **9.4 Entity Relationships & Cardinality:** One-to-One (1:1), One-to-Many (1:N), Many-to-Many (M:N).
  5. **9.5 Database Objects:**
     * Tables: Raw structured data store.
     * Forms: User-friendly interface for data entry and display.
     * Queries: Filter and retrieve specific records based on criteria (e.g. `Marks >= 75 AND City = 'Kandy'`).
     * Reports: Formatted presentation of query/table data for printing.

---

### Grade 11 Syllabus Units (01 through 06)

#### Grade 11 - Unit 01: Programming, Algorithms & Problem Solving
* **Title (EN):** Programming, Algorithms & Problem Solving  
* **Title (SI):** ක්‍රමලේඛනය, ඇල්ගොරිතම සහ ගැටලු විසඳීම  
* **Learning Competency:**  
  * **EN:** Analyzes computational problems using IPO charts, constructs algorithms using flowcharts and pseudocode, tracks variable state transitions using trace tables, and translates logic into Pascal programming code.
  * **SI:** ආදාන-සැකසුම්-ප්‍රතිදාන (IPO) මගින් ගැටලු විශ්ලේෂණය කරයි, ගැලීම් සටහන් හා ව්‍යාජ කේත මගින් ඇල්ගොරිතම නිර්මාණය කරයි, හෝඩුවා වගු (Trace Tables) මගින් විචල්‍ය ලුහුබඳියි, සහ පැස්කල් කේත රචනා කරයි.
* **Key Concepts & Subtopics:**
  1. **1.1 Problem Analysis:** Input, Process, Output (IPO) breakdown. Determining solution spaces and alternative logic paths.
  2. **1.2 Algorithms & Control Structures:**
     * Sequence (අනුක්‍රමය): Step-by-step linear execution.
     * Selection (තේරීම / තීරණ): Single selection (`IF-THEN`), Dual selection (`IF-THEN-ELSE`), Multi-selection (`CASE-OF`).
     * Iteration / Repetition (පුනරාවර්තනය / ලූප්): Definite loop (`FOR..TO..DO`), Indefinite pre-test loop (`WHILE..DO`), Indefinite post-test loop (`REPEAT..UNTIL`).
  3. **1.3 Representation of Algorithms:**
     * ANSI Standard Flowchart Symbols: Terminator (Oval/Capsule), Process (Rectangle), Input/Output (Parallelogram), Decision (Diamond), Connector (Circle), Flow line (Arrow).
     * Pseudocode conventions: Keywords in capital letters (`BEGIN`, `END`, `READ`, `WRITE`, `IF`, `THEN`, `ELSE`, `WHILE`, `DO`, `FOR`).
  4. **1.4 Trace Tables:** Step-by-step variable tracking table recording memory registers across loop iterations and conditional branches.
  5. **1.5 Programming Language Evolution & Translators:**
     * Generations: 1GL (Machine Code - 0s and 1s), 2GL (Assembly Language - Mnemonics), 3GL (High-Level Procedural: Pascal, C), 4GL (SQL), 5GL (AI / Prolog).
     * Translators: Assembler (Assembly -> Machine), Compiler (translates entire source code into object code at once, fast execution), Interpreter (translates and executes code line-by-line, easy debugging).
  6. **1.6 Pascal Syntax & Data Types:**
     * Structure: `program Name;`, `var`, `begin ... end.`
     * Data Types: `integer`, `real`, `char`, `string`, `boolean`.
     * Operators: Arithmetic (`+`, `-`, `*`, `/`, `div` integer quotient, `mod` remainder), Assignment (`:=`), Relational (`=`, `<>`, `<`, `>`, `<=`, `>=`), Logical (`and`, `or`, `not`).
     * Arrays: 1D array declaration (`array[1..10] of integer;`).
* **Associated Sandbox:**
  * **Flowchart Trace Table Scrubber (interactive variable register stepping through conditional loops).**

#### Grade 11 - Unit 02: System Development Life Cycle (SDLC)
* **Title (EN):** System Development Life Cycle (SDLC)  
* **Title (SI):** පද්ධති සංවර්ධන ජීවන චක්‍රය  
* **Learning Competency:**  
  * **EN:** Evaluates information systems, analyzes all eight phases of the System Development Life Cycle, contrasts deployment strategies, and evaluates system testing methodologies.
  * **SI:** තොරතුරු පද්ධති ඇගයීමට ලක් කරයි, SDLC අදියර 8 විශ්ලේෂණය කරයි, පද්ධති ස්ථාපන ක්‍රම 4 සංසන්දනය කරයි, සහ මෘදුකාංග පරීක්ෂණ ක්‍රමවේද ඇගයීමට ලක් කරයි.
* **Key Concepts & Subtopics:**
  1. **2.1 System Concepts:** Definition of a system, manual systems vs computer-based systems, benefits of computerization.
  2. **2.2 The Eight SDLC Phases:**
     1. Identification of Requirement / Problem definition (අවශ්‍යතා හඳුනා ගැනීම).
     2. Feasibility Study (ශක්‍යතා අධ්‍යයනය): Technical, Economic/Financial, Operational, Legal, Schedule feasibility.
     3. System Analysis (පද්ධති විශ්ලේෂණය): Fact-finding techniques (Interviews, Questionnaires, Observation, Document inspection); Data Flow Diagrams (DFD).
     4. System Design (පද්ධති සැලසුම්කරණය): UI/UX input forms, report outputs, database schemas.
     5. Software Development / Coding (කේතනය): Writing program code in programming language.
     6. System Testing (පරීක්ෂා කිරීම): Unit testing, Integration testing, System testing, Acceptance testing (Alpha and Beta testing). Black-box testing (functional, without code view) vs White-box testing (internal code logic verification).
     7. System Deployment / Implementation (පද්ධති ස්ථාපනය):
        * Direct Deployment (සෘජු ස්ථාපනය): Abrupt switch from old to new. Risky, fast, low cost.
        * Parallel Deployment (සමාන්තර ස්ථාපනය): Old and new systems run simultaneously. Safest, high cost, double workload.
        * Phased Deployment (අදියරගත ස්ථාපනය): Modules introduced step-by-step.
        * Pilot Deployment (නියමු ස්ථාපනය): Entire system introduced in one branch/department first.
     8. System Maintenance (පද්ධති නඩත්තුව): Corrective (fixing bugs), Adaptive (updating for OS/hardware changes), Perfective (adding new features), Preventive (preventing future failures).
  3. **2.3 SDLC Models:** Waterfall Model (sequential, rigid) vs Iterative/Incremental Model (cyclical, evolving) vs Spiral Model (risk-driven).

#### Grade 11 - Unit 03: The Internet and Electronic Mail
* **Title (EN):** The Internet and Electronic Mail  
* **Title (SI):** අන්තර්ජාලය සහ විද්‍යුත් තැපෑල  
* **Learning Competency:**  
  * **EN:** Analyzes Internet client-server architecture, decodes URL components and IP/DNS resolution, compares Internet protocols, manages electronic mail operations, and evaluates cloud computing models.
  * **SI:** සේවාලාභී-සේවාදායක ආකෘතිය විශ්ලේෂණය කරයි, URL කොටස් හා IP/DNS ක්‍රියාවලිය විමර්ශනය කරයි, ප්‍රොටෝකෝල සංසන්දනය කරයි, ඊ-මේල් පද්ධතිය කළමනාකරණය කරයි, සහ වලාකුළු පරිගණක සේවා මාදිලි ඇගයීමට ලක් කරයි.
* **Key Concepts & Subtopics:**
  1. **3.1 Internet Architecture & Client-Server:** World-wide network of interconnected networks. Clients request resources; servers (Web, Mail, DNS, File) process and deliver them.
  2. **3.2 Uniform Resource Locator (URL):** Structural parts: Protocol (`https://`) + Subdomain (`www.`) + Domain Name (`moe.gov`) + Top-Level Domain (`.lk`) + Port (`:443`) + Directory Path (`/downloads/`) + File Name (`ict.pdf`). Top-Level Domains: Generic (.com, .org, .edu, .gov, .net) vs Country Code ccTLD (.lk, .uk, .in, .jp, .au).
  3. **3.3 IP Addresses & DNS Resolution:** IPv4 (32-bit address, 4 octets: `192.168.1.1`) vs IPv6 (128-bit hexadecimal address). DNS (Domain Name System) translates human-readable domain names into machine-routable IP addresses.
  4. **3.4 Internet Protocols:** HTTP (Hypertext Transfer Protocol - port 80), HTTPS (Secure encrypted - port 443), FTP (File Transfer Protocol - port 21), TCP/IP (Transmission Control Protocol / Internet Protocol), SMTP (Simple Mail Transfer Protocol - outgoing mail), POP3 (Post Office Protocol v3 - downloads & deletes mail from server), IMAP (Internet Message Access Protocol - syncs mail across devices on server).
  5. **3.5 Electronic Mail (E-mail):** Address format `username@hostname.domain`. Header fields: `To:` (primary recipient), `Cc:` (Carbon Copy, visible to all), `Bcc:` (Blind Carbon Copy, hidden from other recipients), `Subject:`. Attachments, spam/junk, phishing alerts.
  6. **3.6 Cloud Computing:** Deployment models (Public, Private, Hybrid). Service models:
     * **IaaS (Infrastructure as a Service):** Virtual servers, storage, networking (e.g. AWS EC2, Google Cloud Compute).
     * **PaaS (Platform as a Service):** Development environments and databases (e.g. Heroku, Firebase).
     * **SaaS (Software as a Service):** End-user web applications (e.g. Google Docs, Microsoft 365, Gmail).
  7. **3.7 Cyber Security Organizations in Sri Lanka:** Sri Lanka CERT|CC (Computer Emergency Readiness Team | Coordination Center).

#### Grade 11 - Unit 04: Use of Multimedia Technologies
* **Title (EN):** Use of Multimedia Technologies  
* **Title (SI):** බහුමාධ්‍ය භාවිතය  
* **Learning Competency:**  
  * **EN:** Contrasts raster and vector digital graphics, analyzes lossy and lossless graphic compression, calculates digital media file sizes, and explains 2D animation and audio-video production principles.
  * **SI:** රැස්ටර් සහ වෙක්ටර් චිත්‍රක අතර වෙනස දක්වයි, හානිකර හා හානි රහිත සංකෝචන ක්‍රම විශ්ලේෂණය කරයි, ඩිජිටල් මාධ්‍ය ගොනු ප්‍රමාණ ගණනය කරයි, සහ 2D සජීවීකරණ හා ශ්‍රව්‍ය-දෘශ්‍ය මූලධර්ම විස්තර කරයි.
* **Key Concepts & Subtopics:**
  1. **4.1 Digital Graphics Elements:** Pixels, Resolution (DPI / PPI), Color depth (1-bit monochrome = 2 colors, 8-bit = 256 colors, 24-bit True Color = 16.7M colors).
  2. **4.2 Raster (Bitmap) vs Vector Graphics:**
     * Raster: Composed of pixel grids. Loses quality and pixelates when zoomed. Formats: JPEG, PNG, GIF, BMP, TIFF. Software: GIMP, Photoshop.
     * Vector: Composed of mathematical lines, shapes, and formulas. Retains crisp quality at infinite zoom. Formats: SVG, EPS, AI, CDR. Software: Inkscape, Illustrator.
  3. **4.3 Compression Techniques:**
     * Lossy Compression (හානිකර සංකෝචනය): Permanently discards redundant visual/audio data to achieve tiny file sizes (e.g. JPEG for photos, MP3 for audio, MP4 for video).
     * Lossless Compression (හානි රහිත සංකෝචනය): Compresses file without losing any original data bits (e.g. PNG, GIF, WAV, FLAC, ZIP).
  4. **4.4 File Size Calculation:**
     * Image file size (bytes) = $\frac{\text{Width} \times \text{Height} \times \text{Color Depth (bits)}}{8}$.
  5. **4.5 2D Animation Principles:** Frames, Frame Rate (Frames Per Second - FPS), Keyframes, Tweening (generating intermediate frames between keyframes), Onion Skinning.
  6. **4.6 Audio & Video Editing:** Sampling rate (e.g. 44.1 kHz CD audio), bit depth, channels (Mono vs Stereo). Audio editing software (Audacity). Video multi-track timeline, transitions, rendering.

#### Grade 11 - Unit 05: Web Designing using HTML & CSS
* **Title (EN):** Web Designing using HTML & CSS  
* **Title (SI):** HTML සහ වෙබ් සංස්කාරක මගින් වෙබ් අඩවි නිර්මාණය  
* **Learning Competency:**  
  * **EN:** Constructs semantic HTML5 web pages, builds complex tables using `colspan` and `rowspan`, creates interactive input forms, and styles pages using cascading style sheets (CSS).
  * **SI:** සම්මත HTML5 වෙබ් පිටු ගොඩනගයි, `colspan` සහ `rowspan` භාවිතයෙන් වගු නිර්මාණය කරයි, ආකෘති පත්‍ර (Forms) සකස් කරයි, සහ CSS මගින් පිටු හැඩගන්වයි.
* **Key Concepts & Subtopics:**
  1. **5.1 HTML Document Architecture:** `<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, `<body>`. Container tags (paired) vs Empty/Void tags (`<br>`, `<hr>`, `<img>`).
  2. **5.2 Text Formatting Tags:** Headings `<h1>` (largest) to `<h6>` (smallest), paragraphs `<p>`, line breaks `<br>`, horizontal rule `<hr>`, bold `<b>`/`<strong>`, italic `<i>`/`<em>`, underline `<u>`, subscript `<sub>`, superscript `<sup>`.
  3. **5.3 Lists:**
     * Ordered List `<ol>` with `type="1|a|A|i|I"` and `start="n"`.
     * Unordered List `<ul>` with `type="disc|circle|square"`.
     * List items `<li>`.
  4. **5.4 Hyperlinks & Images:**
     * Links: `<a href="URL" target="_blank">Link Text</a>`. Absolute vs relative paths. Anchor links (`href="#section"`).
     * Images: `<img src="path.jpg" alt="Description" width="300" height="200">`.
  5. **5.5 Tables in HTML:**
     * Tags: `<table>`, `<tr>` (table row), `<th>` (header cell - bold and centered), `<td>` (data cell).
     * Attributes: `border`, `cellpadding`, `cellspacing`.
     * Cell merging: `colspan="n"` (merges columns horizontally), `rowspan="n"` (merges rows vertically).
  6. **5.6 User Input Forms:** `<form>`, `<input type="text|password|radio|checkbox|submit|reset">`, `<select>` and `<option>` (dropdown menus), `<textarea>` (multi-line text input).
  7. **5.7 CSS Styling:** Inline styles (`style="..."`), Internal stylesheet (`<style>` in `<head>`), External stylesheet (`<link rel="stylesheet" href="style.css">`). Basic properties: `color`, `background-color`, `font-family`, `font-size`, `text-align`, `border`.
* **Associated Sandbox:**
  * **HTML Table Mason (interactive colspan/rowspan cell merger with live grid and source preview).**

#### Grade 11 - Unit 06: ICT and Society, Ethics & Legal Issues
* **Title (EN):** ICT and Society, Ethics & Legal Issues  
* **Title (SI):** තොරතුරු සහ සන්නිවේදන තාක්ෂණය හා සමාජය  
* **Learning Competency:**  
  * **EN:** Identifies legal frameworks regarding intellectual property and computer crimes in Sri Lanka, applies ergonomic practices to prevent occupational health disorders, and implements green computing and e-waste management.
  * **SI:** ශ්‍රී ලංකාවේ බුද්ධිමය දේපළ හා පරිගණක අපරාධ නීති හඳුනා ගනී, කාර්යශ්‍රමක්ෂමතා (Ergonomics) පුරුදු අනුගමනය කරයි, සහ හරිත පරිගණනය හා ඊ-අපද්‍රව්‍ය කළමනාකරණය ක්‍රියාත්මක කරයි.
* **Key Concepts & Subtopics:**
  1. **6.1 Ethical & Legal Frameworks:**
     * Code of Ethics in computing: respect for privacy, unauthorized access, honesty.
     * Software Licenses: Proprietary/Commercial, Freeware, Shareware, Open Source (FOSS). Software piracy and cracking.
     * **Intellectual Property Act No. 36 of 2003 (Sri Lanka):** Copyrights, patents, trademarks.
     * **Computer Crimes Act No. 24 of 2007 (Sri Lanka):** Criminalization of unauthorized access to computers, planting malware, unauthorized modification/denial of service, electronic extortion.
  2. **6.2 Ergonomics & Occupational Health:**
     * Ergonomics definition: Science of designing the workplace environment and equipment to fit the human body for safety, comfort, and productivity.
     * Health Disorders: Repetitive Strain Injury (RSI), Carpal Tunnel Syndrome (CTS), Computer Vision Syndrome (CVS), posture-related back and neck pains.
     * Ergonomic Guidelines: 90-degree angle for elbows and knees, monitor top edge at eye level, 20–24 inches viewing distance, 20-20-20 rule (every 20 minutes, look at an object 20 feet away for 20 seconds).
  3. **6.3 Environmental Hazards & E-Waste:**
     * E-Waste (Electronic Waste): Discarded computers, batteries, circuit boards.
     * Toxic heavy metals: Lead (Pb - damages nervous system), Mercury (Hg - brain and kidney damage), Cadmium (Cd - toxic to lungs and kidneys), Hexavalent Chromium (Cr - carcinogenic).
     * The 3R Concept: Reduce (අඩු කිරීම), Reuse (නැවත භාවිතය), Recycle (ප්‍රතිචක්‍රීකරණය).
     * Green Computing: Energy Star power-saving modes, virtualization, cloud shared hardware, proper recycling protocols.
  4. **6.4 Digital Divide & Emerging Trends:**
     * Digital Divide: The economic and social inequality between communities that have access to modern ICT and those that do not.
     * Emerging Technologies: Artificial Intelligence (AI), Internet of Things (IoT), Big Data, Autonomous vehicles, Cloud computing.

---

## 3. Data Model Schemas (`LevelNode`, `TheoryCard`, `QuizQuestion`)

Below is the definitive TypeScript contract to be implemented in `src/types/content.ts` (or `src/types/curriculum.ts`):

```typescript
// ==========================================
// CORE TYPE DEFINITIONS FOR ICT O/L CONTENT
// ==========================================

export type GradeLevel = '10' | '11';
export type LanguageCode = 'en' | 'si';
export type LanguageMode = 'dual' | 'en' | 'si';

export interface BilingualText {
  en: string;
  si: string;
}

export type NodeType = 'station' | 'boss' | 'sandbox' | 'checkpoint';

export type SandboxId =
  | 'g10-u03-switchboard'
  | 'g10-u03-color-chamber'
  | 'g10-u04-logic-breadboard'
  | 'g10-u07-spreadsheet-laser'
  | 'g11-u01-trace-table'
  | 'g11-u05-html-mason';

export type InfographicWidgetType =
  | 'system-diagram'
  | 'nic-decoder'
  | 'timeline-slider'
  | 'switchboard-preview'
  | 'color-chamber-preview'
  | 'logic-gate-preview'
  | 'truth-table'
  | 'pinout-diagram'
  | 'memory-pyramid'
  | 'port-showcase'
  | 'os-architecture'
  | 'word-ribbon'
  | 'spreadsheet-grid'
  | 'presentation-slide-master'
  | 'database-schema'
  | 'flowchart-symbol'
  | 'sdlc-waterfall'
  | 'url-structure'
  | 'osi-tcp-stack'
  | 'email-header'
  | 'raster-vs-vector'
  | 'html-tag-tree'
  | 'table-grid'
  | 'ergonomic-posture'
  | 'ewaste-hazard-chart';

// ------------------------------------------
// 1. THEORY FLASHCARD SCHEMA
// ------------------------------------------
export interface MicroBulletPoint {
  en: string;
  si: string;
  highlightEn?: string;
  highlightSi?: string;
}

export interface TheoryCard {
  id: string; // e.g. "tc-g10-u01-n01-c01"
  title: BilingualText;
  widgetType: InfographicWidgetType;
  widgetData?: Record<string, any>; // Props or parameters for top 40% widget
  microBulletPoints: MicroBulletPoint[]; // Bottom 60% concise bullets (3-5 points)
  keyTakeaway: BilingualText; // Highlighted bottom box
  audioCue?: string; // Optional audio feedback / voiceover URL
}

// ------------------------------------------
// 2. QUIZ QUESTION SCHEMA
// ------------------------------------------
export interface QuizOption {
  id: string; // "opt-0", "opt-1", "opt-2", "opt-3"
  en: string;
  si: string;
}

export interface QuizQuestion {
  id: string; // e.g. "qq-g10-u01-n01-q01"
  prompt: BilingualText;
  codeSnippet?: string; // Optional code block / formula snippet
  imageSrc?: string; // Optional diagram / circuit image
  options: [QuizOption, QuizOption, QuizOption, QuizOption]; // Exactly 4 options
  correctIndex: 0 | 1 | 2 | 3; // Strict 0-based range check
  explanation: BilingualText; // Revealed ONLY after tapping "Check Answer"
  difficulty?: 'easy' | 'medium' | 'hard';
  pastPaperRef?: {
    year: number; // 2020 - 2025
    paperType: 'Paper I' | 'Paper II';
    questionNumber: string;
  };
}

// ------------------------------------------
// 3. LEVEL NODE SCHEMA
// ------------------------------------------
export interface LevelNode {
  id: string; // e.g. "g10-u01-n01"
  grade: GradeLevel;
  unitNumber: number; // Grade 10: 1..9, Grade 11: 1..6
  orderIndex: number; // Progressive order on quest map
  type: NodeType;
  title: BilingualText;
  subtitle: BilingualText;
  icon: string; // SVG or Lucide identifier
  xpReward: number; // Standard: 50-80 XP, Boss: 150-300 XP
  sandboxId?: SandboxId; // Trigger for embedded or linked engineering sandbox
  prerequisiteNodeId?: string | null; // Pointer to previous node for unlocking
  theoryCards: TheoryCard[]; // Flashcards for /study/[nodeId]
  quizQuestions: QuizQuestion[]; // Questions for /quiz/[nodeId]
}

// ------------------------------------------
// 4. UNIT PROGRESSION CONTAINER
// ------------------------------------------
export interface UnitCurriculum {
  id: string; // "g10-u01"
  grade: GradeLevel;
  unitNumber: number;
  title: BilingualText;
  description: BilingualText;
  badgeColor: string;
  icon: string;
  sandboxIds: SandboxId[];
  nodes: LevelNode[];
}
```

---

## 4. Micro-Learning Loop Engines & State Architecture

### A. Story Flashcard Engine (`/study/[nodeId]`)
* **Progress Header:** Instagram-story style segmented horizontal progress bar at top (each segment corresponding to one `TheoryCard`). Active segment animates linearly; past segments stay solid amber/indigo.
* **Split Card Layout:**
  * **Top 40% Visual Widget:** Dedicated interactive or SVG infographic (e.g. `SystemDiagram`, `NICDecoder`, `LogicGatePreview`, `MemoryPyramid`, `UrlStructure`).
  * **Bottom 60% Micro-Bullets:** Concise, high-contrast micro-bullet points with bold colored highlight chips (`highlightEn`/`highlightSi`). No walls of text; strictly designed for rapid mobile comprehension.
  * **Key Takeaway Banner:** Bottom pinned badge summarizing the core exam principle.
* **Thumb-Zone Controls (Bottom 25%):**
  * Left: `Skip to Quiz` secondary button (for confident students).
  * Right: `Got It! Next` primary button (>= 48px hit target).
  * Back tap on left screen half returns to previous card.

### B. Blind Quiz Engine (`/quiz/[nodeId]`)
* **Strict Two-Phase Evaluation Protocol:**
  1. **Phase 1 (Neutral Initial State):**
     * Options are rendered with neutral slate/border backgrounds.
     * No answer clues, checkmarks, or green/red indicators exist in the DOM or state.
     * Tapping an option simply toggles a neutral selection highlight (`border-indigo-500 ring-2 ring-indigo-500/20`).
     * `Check Answer` button is active in thumb-zone.
  2. **Phase 2 (Evaluation Reveal on Tap):**
     * Upon tapping `Check Answer`:
       * If Correct: Option card lights up emerald green (`bg-emerald-500/10 border-emerald-500 text-emerald-600`), plays success sound ping, displays checkmark badge.
       * If Incorrect: Option card turns crimson red (`bg-rose-500/10 border-rose-500 text-rose-600`), triggers subtle haptic/CSS shake animation, deducts 1 heart container from persistent store. The actual correct option lights up with a dashed emerald border.
       * Bilingual Explanation box animates open below the options.
       * Primary action button morphs into `Continue` / `Next Question`.
* **Heart & Game Economy Integration:**
  * User begins with 5 hearts.
  * Each incorrect blind quiz answer deducts 1 heart (`hearts = Math.max(0, hearts - 1)`).
  * When hearts reach 0, the **Life Depletion Modal** appears: blocks further quiz attempts and routes user to `/study/[nodeId]` flashcards to review theory, or waits for the 30-minute auto-replenishment timer.

### C. Level Completion Drawer (`CompletionDrawer.tsx`)
* **Trigger:** Invoked upon finishing the final question in `/quiz/[nodeId]`.
* **Fanfare:** Canvas confetti burst (`colors: ['#4f46e5', '#10b981', '#f59e0b', '#ec4899']`).
* **Star Calculation:**
  * 3 Stars: Accuracy $\ge 90\%$ (e.g., 5/5 or 4/4).
  * 2 Stars: Accuracy $\ge 70\%$ (e.g., 4/5 or 3/4).
  * 1 Star: Accuracy $< 70\%$ (completed with retries).
* **XP Award:** Adds `node.xpReward` to total XP score in persistent store.
* **Zero Dead-End Forward Routing:**
  * Primary CTA: `Next Part` (routes immediately to next sequential node).
  * Secondary CTA: `Review Flashcards` (reopens `/study/[nodeId]`).
  * Tertiary CTA: `Return to Quest Map` (routes back to `/`).

---

## 5. Content Compilation & Validation Pipeline

### Pipeline Workflow:
```
public/lessons/*.md & src/data/*.ts
                 │
                 ▼
  [ scripts/compile-content.ts ]
  - Parse markdown and structured data
  - Verify LevelNode, TheoryCard, QuizQuestion schemas
  - Validate correctIndex boundaries [0, 3]
  - Validate 100% Bilingual Parity (EN & SI)
  - Verify node sequencing & unique IDs
                 │
                 ├── If any error -> Exit code 1 with line & field diagnostics
                 ▼
  Compiled Production Bundles in `src/data/compiled/`
```

### Validation Invariants to Enforce:
1. **Curriculum Topology:**
   * Grade 10 MUST have exactly 9 units (`g10-u01` through `g10-u09`).
   * Grade 11 MUST have exactly 6 units (`g11-u01` through `g11-u06`).
   * Total units in curriculum = 15.
2. **Schema Integrity:**
   * Every node must have non-empty `id`, `grade`, `unitNumber`, `title.en`, `title.si`, and positive `xpReward`.
   * Every node must contain at least 2 `theoryCards` and at least 3 `quizQuestions` (Boss nodes contain at least 5 past paper questions).
3. **Bilingual Parity:**
   * Every `en` string must have a matching `si` string with length $\ge 3$ characters.
   * Neither language may contain uncompiled placeholders (e.g., `"TBD"`, `"TODO"`, `"[Sinhala Text]"`).
   * Number of micro-bullet points in English must match Sinhala identically.
4. **Quiz Answer Range:**
   * `options` array length MUST equal 4 for every multiple-choice question.
   * `correctIndex` MUST be integer $0 \le \text{correctIndex} \le 3$.
   * Option IDs must be distinct.
5. **ID Uniqueness:**
   * Global set of all `node.id` values must have `Set.size === totalNodes`.
   * All `TheoryCard.id` and `QuizQuestion.id` must be globally distinct across all grades.

---

## 6. Complete Content Inventory & Node Breakdown

### Grade 10 Content Inventory (Units 01 to 09)

| Unit ID | Unit Title (EN) | Unit Title (SI) | Planned Nodes | Quest Breakdown | Associated Sandboxes / Interactive Features | Past Papers |
|---------|-----------------|-----------------|---------------|-----------------|---------------------------------------------|-------------|
| **g10-u01** | Basic Concepts of ICT | තොරතුරු හා සන්නිවේදන තාක්ෂණයේ මූලික සංකල්ප | 5 Nodes | • N1: Data vs Information (Station)<br>• N2: Quality Info Attributes (Station)<br>• N3: ICT Applications & e-Gov (Station)<br>• N4: Computing Evolution & 1-5th Gen (Station)<br>• N5: Unit 1 Boss: Past Paper Arena (Boss) | • NIC Decoder (Interactive Widget)<br>• Info System Flowchart Widget<br>• Timeline Slider (1st to 5th Gen) | 12 Questions (2020–2025) |
| **g10-u02** | The Computer System & System Components | පරිගණක පද්ධතිය සහ පද්ධති සංරචක | 4 Nodes | • N1: System Architecture & CPU (Station)<br>• N2: Memory Hierarchy & Storage (Station)<br>• N3: Input/Output & Ports (Station)<br>• N4: Unit 2 Boss: Hardware Exam Master (Boss) | • Interactive System Diagram Widget<br>• Memory Pyramid Access Speed Visualizer<br>• Port Matcher Widget | 19 Questions (2020–2025) |
| **g10-u03** | Data Representation in Computer Systems | පරිගණක පද්ධති තුළ දත්ත නිරූපණය | 4 Nodes | • N1: Binary Switchboard & Bases (Station)<br>• N2: Radix Conversions & Arithmetic (Station)<br>• N3: Character Encoding & Hex Colors (Station)<br>• N4: Unit 3 Boss: Binary Citadel (Boss) | • **8-Bit Switchboard (lever toggles computing binary/decimal)**<br>• **Color Chamber (RGB sliders to Hex)** | 16 Questions (2020–2025) |
| **g10-u04** | Fundamental Logic Gates & Boolean Logic | ලොජික් ද්වාර හා බූලියානු තර්කනය | 4 Nodes | • N1: Basic Gates (AND, OR, NOT) (Station)<br>• N2: Derived Gates (NAND, NOR, XOR, XNOR) (Station)<br>• N3: 7400 IC Pinouts & Combinational Circuits (Station)<br>• N4: Unit 4 Boss: Logic Gate Gauntlet (Boss) | • **Neon Logic Gate Breadboard (drag/toggle sandbox with live truth table)**<br>• 7400 IC Pin Inspector | 16 Questions (2020–2025) |
| **g10-u05** | Operating Systems | මෙහෙයුම් පද්ධති | 3 Nodes | • N1: Firmware, Booting & Interfaces (Station)<br>• N2: OS Resource Management & Utilities (Station)<br>• N3: Unit 5 Boss: OS Challenge (Boss) | • Boot Sequence Interactive Flow<br>• CLI vs GUI Interactive Terminal Simulator | 12 Questions (2020–2025) |
| **g10-u06** | Word Processing | වචන සකසුම් | 3 Nodes | • N1: Formatting & Page Layouts (Station)<br>• N2: Tables & Mail Merge Workflow (Station)<br>• N3: Unit 6 Boss: Document Master (Boss) | • Interactive Ribbon Inspector<br>• Mail Merge Step-by-Step Generator | 10 Questions (2020–2025) |
| **g10-u07** | Electronic Spreadsheets | ඉලෙක්ට්‍රොනික පැතුරුම්පත් | 4 Nodes | • N1: Cell References & Relative vs Absolute (Station)<br>• N2: Mathematical Formulas & Built-in Functions (Station)<br>• N3: Chart Creation & Error Handling (Station)<br>• N4: Unit 7 Boss: Spreadsheet Grandmaster (Boss) | • **Spreadsheet Laser Grid & Reference Anchors (relative vs absolute $A$1 visualizer)** | 8 Questions (2020–2025) |
| **g10-u08** | Electronic Presentations | ඉලෙක්ට්‍රොනික සමර්පණ | 3 Nodes | • N1: Presentation Design & Slide Master (Station)<br>• N2: Slide Transitions & Custom Animations (Station)<br>• N3: Unit 8 Boss: Presentation Ace (Boss) | • Slide Master Template Sandbox<br>• Animation Timing Sequencer | 6 Questions (2020–2025) |
| **g10-u09** | Database Management | දත්ත සමුදා කළමනාකරණය | 3 Nodes | • N1: Relational Tables & Primary/Foreign Keys (Station)<br>• N2: Entity Relationships & Queries (Station)<br>• N3: Unit 9 Boss: Database Vault (Boss) | • Visual ER Diagram Relationship Linker<br>• SQL/Query Criteria Filter Builder | 10 Questions (2020–2025) |

---

### Grade 11 Content Inventory (Units 01 to 06)

| Unit ID | Unit Title (EN) | Unit Title (SI) | Planned Nodes | Quest Breakdown | Associated Sandboxes / Interactive Features | Past Papers |
|---------|-----------------|-----------------|---------------|-----------------|---------------------------------------------|-------------|
| **g11-u01** | Programming, Algorithms & Problem Solving | ක්‍රමලේඛනය, ඇල්ගොරිතම සහ ගැටලු විසඳීම | 5 Nodes | • N1: Problem Analysis (IPO) & Algorithms (Station)<br>• N2: Flowchart Symbols & Pseudocode (Station)<br>• N3: Trace Table Scrubber & Loop Stepper (Station)<br>• N4: Pascal Programming Language Syntax (Station)<br>• N5: Unit 1 Boss: Algorithm Arena (Boss) | • **Flowchart Trace Table Scrubber (variable register stepping)**<br>• Pascal Interactive Terminal Runner<br>• Flowchart Drag-and-Drop Mason | 8 Questions (2020–2025) |
| **g11-u02** | System Development Life Cycle (SDLC) | පද්ධති සංවර්ධන ජීවන චක්‍රය | 4 Nodes | • N1: System Concepts & 8 SDLC Phases (Station)<br>• N2: System Testing & Deployment Strategies (Station)<br>• N3: SDLC Waterfall vs Iterative Models (Station)<br>• N4: Unit 2 Boss: SDLC Commander (Boss) | • SDLC Phase Sequencer<br>• Deployment Strategy Decision Matrix<br>• DFD (Data Flow Diagram) Drafter | 7 Questions (2020–2025) |
| **g11-u03** | The Internet and Electronic Mail | අන්තර්ජාලය සහ විද්‍යුත් තැපෑල | 4 Nodes | • N1: Client-Server & URL/IP/DNS Resolution (Station)<br>• N2: Internet Protocols & Email Headers (Station)<br>• N3: Cloud Computing (IaaS, PaaS, SaaS) & SLCERT (Station)<br>• N4: Unit 3 Boss: Cyber Route Master (Boss) | • URL Breakdown Explorer<br>• DNS Resolution Route Runner<br>• Email Header Decrypter | 15 Questions (2020–2025) |
| **g11-u04** | Use of Multimedia Technologies | බහුමාධ්‍ය භාවිතය | 3 Nodes | • N1: Raster vs Vector & Graphic Compression (Station)<br>• N2: 2D Animation & Audio/Video Principles (Station)<br>• N3: Unit 4 Boss: Multimedia Producer (Boss) | • Raster vs Vector Zoom Inspector<br>• Image File Size Calculator Tool | 13 Questions (2020–2025) |
| **g11-u05** | Web Designing using HTML & CSS | HTML සහ වෙබ් සංස්කාරක මගින් වෙබ් අඩවි නිර්මාණය | 4 Nodes | • N1: HTML Structure, Headings & Text Formatting (Station)<br>• N2: Lists, Hyperlinks & Media (Station)<br>• N3: HTML Table Mason (Colspan & Rowspan) & Forms (Station)<br>• N4: Unit 5 Boss: Web Architect (Boss) | • **HTML Table Mason (interactive colspan/rowspan visual cell merger)**<br>• Live HTML Preview Sandbox | 7 Questions (2020–2025) |
| **g11-u06** | ICT and Society, Ethics & Legal Issues | තොරතුරු සහ සන්නිවේදන තාක්ෂණය හා සමාජය | 3 Nodes | • N1: Ethics, Intellectual Property & Computer Crimes Act (Station)<br>• N2: Ergonomics, Health & Green Computing 3R (Station)<br>• N3: Unit 6 Boss: Society & Cyber Ethics (Boss) | • Ergonomic Posture Checkup Interactive<br>• E-Waste Heavy Metal Hazard Matrix | 9 Questions (2020–2025) |

---

## 7. Past Paper Coverage Inventory (2020–2025)

The platform integrates authentic G.C.E. O/L past examination questions from the Department of Examinations Sri Lanka across both Paper I (MCQ) and Paper II (Structured Essay):
* **2020 Examination:** 18 questions across G10 & G11
* **2021 Examination:** 19 questions across G10 & G11
* **2022 Examination:** 17 questions across G10 & G11
* **2023 Examination:** 18 questions across G10 & G11
* **2024 Examination:** 21 questions across G10 & G11
* **2025 Examination:** 22 questions across G10 & G11
* **Total Past Paper Database:** 115+ verified, dual-medium examination questions fully parsed with official marking scheme rationales.

---

## 8. Summary of Critical Architectural Recommendations
1. **Decouple G10 Units 03 and 04 in Curriculum:**
   In the initial `curriculum.ts`, Data Representation and Logic Gates were combined. They must be partitioned into Unit 03 (Data Representation) and Unit 04 (Logic Gates) to establish strict 9-unit alignment with the NIE curriculum and R4 sandboxes.
2. **Schema Uniformity:**
   Standardize all lesson data in `src/data/lessons/` into the new `LevelNode`, `TheoryCard`, and `QuizQuestion` schemas, compiling into `src/data/compiled/` via `scripts/compile-content.ts`.
3. **Automate Continuous Parity Testing:**
   Include `npm run validate:content` in the CI/build scripts before `npm run build` to catch untranslated strings, improper option lengths, or invalid `correctIndex` values prior to deployment.
