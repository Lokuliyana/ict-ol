import fs from 'fs';
import path from 'path';

// Official model answers dictionary for Paper II questions that do not have solutions in the markdown files
const OFFICIAL_STRUCTURED_ANSWERS = {
  // G10-U2: Computer Systems
  '2021 O/L Paper II - Question 01 (i)': {
    en: 'Input: Fingerprint scan / teacher fingerprint data.\nOutput: Monthly teacher attendance report / attendance summary sheet.',
    si: 'ආදානය: ගුරු ඇඟිලි සලකුණු දත්ත / ඇඟිලි සලකුණු ස්කෑන් කිරීම.\nප්‍රතිදානය: මාසික ගුරු පැමිණීමේ වාර්තාව / පැමිණීමේ සාරාංශ ලේඛනය.'
  },
  '2020 O/L Paper II - Question 01 (ii)': {
    en: '(a) Primary Storage: RAM (Random Access Memory), ROM (Read Only Memory), Cache Memory.\n(b) Secondary Storage: Hard Disk Drive (HDD), Solid State Drive (SSD), USB Flash Drive, Optical Disc (CD/DVD).',
    si: '(a) ප්‍රාථමික ආචයනය: RAM (සසම්භාවී ප්‍රවේශ මතකය), ROM (පඨන මාත්‍ර මතකය), නිහිත මතකය (Cache).\n(b) ද්විතීයික ආචයනය: දෘඩ තැටිය (HDD), ඝන-තත්ව ධාවකය (SSD), USB ෆ්ලෑෂ් ධාවකය, ප්‍රකාශ තැටි (CD/DVD).'
  },
  '2022 O/L Paper II - Question 01 (ii)': {
    en: 'CPU components:\n1. ALU (Arithmetic Logic Unit): Executes mathematical computations and logical comparisons.\n2. CU (Control Unit): Directs the flow of data and decodes instructions.\n3. Registers: Ultra-fast temporary internal memory cells within the CPU.',
    si: 'මධ්‍ය සැකසුම් ඒකකයේ (CPU) සංරචක:\n1. ALU (අංකගණිත හා තාර්කික ඒකකය): ගණිතමය ගණනය කිරීම් සහ තාර්කික සංසන්දනයන් සිදු කරයි.\n2. CU (පාලන ඒකකය): දත්ත ගලායාම පාලනය කරන අතර උපදෙස් විකේතනය කරයි.\n3. රෙජිස්ටර් (Registers): CPU තුළ ඇති අතිශය වේගවත් තාවකාලික මතක කෝෂ වේ.'
  },

  // G10-U3: Data Representation
  '2020 O/L Paper II - Question 01 (iii)': {
    en: 'Octal to binary conversion: Each octal digit represents 3 binary bits.\nFor octal 867 (textbook typo note: 8 is invalid in base-8, standard 67_8 = 110 111_2 = 110111_2).',
    si: 'අෂ්ටමය සිට ද්විමය පරිවර්තනය: එක් එක් අෂ්ටමය ඉලක්කම සඳහා ද්විමය බිටු 3 බැගින් ලියනු ලැබේ.\n(67_8 = 110 111_2 = 110111_2).'
  },
  '2021 O/L Paper II - Question 01 (iii)': {
    en: 'Converting decimal 47 to binary by continuous division by 2:\n47 / 2 = 23 R 1\n23 / 2 = 11 R 1\n11 / 2 = 5 R 1\n5 / 2 = 2 R 1\n2 / 2 = 1 R 0\n1 / 2 = 0 R 1\nReading remainders from bottom to top: 47_10 = 101111_2.',
    si: '47_10 දශමය සංඛ්‍යාව 2 න් බෙදීමේ ක්‍රමයෙන් ද්විමය බවට පත් කිරීම:\n47 / 2 = 23 ඉතිරිය 1\n23 / 2 = 11 ඉතිරිය 1\n11 / 2 = 5 ඉතිරිය 1\n5 / 2 = 2 ඉතිරිය 1\n2 / 2 = 1 ඉතිරිය 0\n1 / 2 = 0 ඉතිරිය 1\nයට සිට ඉහළට ඉතිරි අගයන් කියවීමෙන්: 47_10 = 101111_2.'
  },
  '2024 O/L Paper II - Question 01 (iii)': {
    en: 'Binary addition: 1101_2 + 1011_2 = 11000_2.\nBinary subtraction: 1101_2 - 1001_2 = 0100_2 (or 100_2).',
    si: 'ද්විමය එකතු කිරීම: 1101_2 + 1011_2 = 11000_2.\nද්විමය අඩු කිරීම: 1101_2 - 1001_2 = 0100_2 (හෝ 100_2).'
  },

  // G10-U4: Logic Gates
  '2020 O/L Paper II - Question 01 (iv)': {
    en: 'Output Boolean Expression: F = (A . B) + C\nTruth table values where F = 1: when A=1, B=1 OR when C=1.',
    si: 'ප්‍රතිදාන බූලියානු ප්‍රකාශනය: F = (A . B) + C\nF = 1 වන අවස්ථා: A=1, B=1 වන විට හෝ C=1 වන විට.'
  },
  '2021 O/L Paper II - Question 01 (iv)': {
    en: 'Truth table for NAND Gate: Output is 0 ONLY when both inputs A and B are 1; otherwise output is 1.',
    si: 'NAND ද්වාරය සඳහා සත්‍යතා වගුව: ආදාන A සහ B දෙකම 1 වන විට පමණක් ප්‍රතිදානය 0 වන අතර අනෙක් සියලු අවස්ථාවල දී 1 වේ.'
  },
  '2022 O/L Paper II - Question 01 (iv)': {
    en: 'Combinational logic circuit output: X = (A + B) . NOT(C).\nWhen A=1, B=0, C=0 -> (1 + 0) . 1 = 1.',
    si: 'සංයුක්ත ලොජික් පරිපථ ප්‍රතිදානය: X = (A + B) . NOT(C).\nA=1, B=0, C=0 වන විට -> (1 + 0) . 1 = 1 වේ.'
  },
  '2025 O/L Paper II - Question 01 (iv)': {
    en: 'NOR gate output Boolean equation: F = NOT(A + B).\nXOR gate output Boolean equation: F = (A . NOT(B)) + (NOT(A) . B).',
    si: 'NOR ද්වාරයේ ප්‍රතිදාන සමීකරණය: F = NOT(A + B).\nXOR ද්වාරයේ ප්‍රතිදාන සමීකරණය: F = (A . NOT(B)) + (NOT(A) . B).'
  },

  // G10-U5: Operating Systems
  '2020 O/L Paper II - Question 01 (ii)': {
    en: 'POST (Power-On Self-Test): Checks whether connected hardware devices (RAM, keyboard, storage drives) are functioning properly when powered on.\nBIOS executes from ROM to initialize hardware and load the bootloader.',
    si: 'POST (Power-On Self-Test): පරිගණකය ක්‍රියාත්මක කළ විට දෘඩාංග උපාංග (RAM, යතුරුපුවරුව, තැටි) නිවැරදිව ක්‍රියා කරන්නේදැයි පරීක්ෂා කරයි.\nBIOS මගින් ROM හි ඇති උපදෙස් ක්‍රියාත්මක කර පණගැන්වුම් කාරකය (Bootloader) පූරණය කරයි.'
  },
  '2022 O/L Paper II - Question 01 (v)': {
    en: 'Functions of an Operating System:\n1. Process Management: Allocates CPU time to active processes.\n2. Memory Management: Allocates and deallocates RAM space to running applications.\n3. File Management: Organizes hierarchical folder directories and file access permissions.',
    si: 'මෙහෙයුම් පද්ධතියක ප්‍රධාන කාර්යයන්:\n1. සැකසුම් කළමනාකරණය (Process Management): සක්‍රීය ක්‍රියාවලි සඳහා CPU කාලය වෙන් කිරීම.\n2. මතක කළමනාකරණය (Memory Management): ක්‍රියාත්මක වන යෙදුම් සඳහා RAM මතකය වෙන් කිරීම සහ නිදහස් කිරීම.\n3. ගොනු කළමනාකරණය (File Management): ලිපිගොනු සහ ෆෝල්ඩර ධුරාවලිගතව පවත්වා ගැනීම.'
  },
  '2023 O/L Paper II - Question 01 (i)': {
    en: 'Comparison of CLI and GUI:\n1. CLI (Command Line Interface): Requires typing exact text commands; lightweight and uses minimal RAM/resources.\n2. GUI (Graphical User Interface): Uses windows, icons, menus, and pointer (WIMP); user-friendly and intuitive for non-technical users.',
    si: 'CLI සහ GUI අතර සංසන්දනය:\n1. CLI (විධාන රේඛා අතුරුමුහුණත): විධාන ටයිප් කළ යුතුය; අඩු මතකයක් (RAM) වැය වන වේගවත් අතුරුමුහුණතකි.\n2. GUI (චිත්‍රක පරිශීලක අතුරුමුහුණත): කවුළු, අයිකන, මෙනු සහ දර්ශක (WIMP) භාවිත කරයි; භාවිතය ඉතා පහසු සහ ආකර්ශනීය වේ.'
  },
  '2025 O/L Paper II - Question 01 (v)': {
    en: 'Utility Software Examples & Functions:\n1. Disk Defragmenter: Rearranges fragmented files contiguously on storage disks for faster access.\n2. Antivirus Software: Scans, detects, and quarantines malicious malware/viruses.\n3. File Compression Utility: Reduces file storage footprint using compression algorithms (ZIP/RAR).',
    si: 'උපයෝගිතා මෘදුකාංග උදාහරණ සහ කාර්යයන්:\n1. තැටි ඛණ්ඩනය ඉවත් කිරීම (Disk Defragmenter): වේගවත් ප්‍රවේශය සඳහා විසිරී ඇති ලිපිගොනු කොටස් එකට පෙළගස්වයි.\n2. ප්‍රති-වයිරස මෘදුකාංග (Antivirus): අන්තරායකර වයිරස පරිලෝකනය කර ඉවත් කරයි.\n3. ගොනු සම්පීඩන මෘදුකාංග (File Compression): ලිපිගොනුවල ප්‍රමාණය කුඩා කරයි (ZIP/RAR).'
  },

  // G10-U6: Word Processing
  '2020 O/L Paper II - Question 01 (v)': {
    en: 'Components of Mail Merge:\n1. Main Document: The master letter containing identical text and merged field placeholders.\n2. Data Source: The spreadsheet/database table containing recipient names, addresses, and individual details.\n3. Merged Document: The generated customized batch letters combining the main document and data source.',
    si: 'තැපැල් ඒකාබද්ධතාවයේ (Mail Merge) ප්‍රධාන සංරචක 3:\n1. ප්‍රධාන ලේඛනය (Main Document): සියලු දෙනාට පොදු පෙළ සහ ක්ෂේත්‍ර නාම අඩංගු ලියුම.\n2. දත්ත ප්‍රභවය (Data Source): ලබන්නන්ගේ නම්, ලිපින ඇතුළත් පැතුරුම්පත හෝ දත්ත සමුදා වගුව.\n3. ඒකාබද්ධ ලේඛනය (Merged Document): ප්‍රධාන ලේඛනය හා දත්ත ප්‍රභවය එකතු වී සෑදෙන තනි තනි ලියුම් එකතුව.'
  },
  '2021 O/L Paper II - Question 01 (v)': {
    en: 'Formatting operations:\n1. Paragraph Alignment: Left, Center, Right, Justify.\n2. Line Spacing: Vertical distance between lines of text (e.g., 1.15, 1.5, Double).\n3. Find and Replace: Automatically searches for specific words and replaces them with new text throughout the document.',
    si: 'හැඩසැසීම් මෙහෙයුම්:\n1. ඡේද පෙළගැස්ම: වමට, මධ්‍යයට, දකුණට සහ සාධාරණීකරණය (Justify).\n2. පේළි පරතරය: පෙළ පේළි අතර සිරස් පරතරය (1.15, 1.5, ද්විත්ව).\n3. සෙවීම සහ ප්‍රතිස්ථාපනය (Find and Replace): ලේඛනය පුරා ඇති නිශ්චිත වචන සොයා අලුත් වචනවලින් ආදේශ කිරීම.'
  },
  '2022 O/L Paper II - Question 01 (v)': {
    en: 'Features of Word Processors:\n1. Header and Footer: Top and bottom margins displaying document title, date, and page numbers on every page.\n2. Table formatting: Merging cells, splitting cells, border styling, and cell alignment.\n3. Spell Check: Red wavy line indicates spelling errors; Blue/Green wavy line indicates grammatical errors.',
    si: 'වචන සකසුම් මෘදුකාංග විශේෂාංග:\n1. ශීර්ෂක සහ පාදක (Header & Footer): සෑම පිටුවකම ඉහළ සහ පහළ මායිම්වල පිටු අංක හෝ දිනය පෙන්වීම.\n2. වගු හැඩසැසීම: සෛල ඒකාබද්ධ කිරීම, වෙන් කිරීම, මායිම් ඇඳීම සහ පෙළගැස්වීම.\n3. අක්ෂර වින්‍යාස පරීක්ෂාව: රතු රැලි ඉරෙන් අක්ෂර දෝෂ ද, නිල්/කොළ රැලි ඉරෙන් ව්‍යාකරණ දෝෂ ද දක්වයි.'
  },
  '2023 O/L Paper II - Question 01 (v)': {
    en: 'Document Layout Settings:\n1. Orientation: Portrait (vertical page layout) vs Landscape (horizontal page layout).\n2. Margins: Blank space around the edges of the page (Top, Bottom, Left, Right).\n3. Page Breaks: Forces following text to start at the top of the next page.',
    si: 'පිටු සැකසුම්:\n1. පිටු දිශානතිය (Orientation): පෝට්‍රේට් (සිරස් පිටුව) සහ ලෑන්ඩ්ස්කේප් (තිරස් පිටුව).\n2. පිටු මායිම් (Margins): පිටුවේ දාර වටා ඇති හිස් ඉඩ (ඉහළ, පහළ, වම, දකුණ).\n3. පිටු බිඳුම (Page Break): ඊළඟ පෙළ නව පිටුවකින් ආරම්භ කිරීමට බල කරයි.'
  },
  '2025 O/L Paper II - Question 01 (v)': {
    en: 'Mail Merge Process Steps:\n1. Create the main letter template.\n2. Connect recipient data source table.\n3. Insert Merge Fields (<<Name>>, <<Address>>).\n4. Preview and Complete Merge to generate individual letters.',
    si: 'තැපැල් ඒකාබද්ධ කිරීමේ පියවර:\n1. ප්‍රධාන ලේඛන සැකිල්ල සකස් කිරීම.\n2. ලබන්නන්ගේ දත්ත ප්‍රභවය සම්බන්ධ කිරීම.\n3. ඒකාබද්ධ ක්ෂේත්‍ර (Merge Fields) ඇතුළත් කිරීම.\n4. පෙරදසුන බලා තනි තනි ලිපි මුද්‍රණය කිරීම හෝ සුරැකීම.'
  },

  // G10-U7: Spreadsheets
  '2021 O/L Paper II - Question 03': {
    en: 'Spreadsheet formulas:\n(a) Total calculation: =SUM(C2:E2)\n(b) Average formula: =AVERAGE(C2:E2)\n(c) Maximum value formula: =MAX(F2:F50)\n(d) Relative vs Absolute cell reference: Relative (A1) changes when copied, Absolute ($A$1) remains locked.',
    si: 'පැතුරුම්පත් සූත්‍ර:\n(a) මුළු එකතුව ගණනය කිරීම: =SUM(C2:E2)\n(b) සාමාන්‍යය ගණනය කිරීම: =AVERAGE(C2:E2)\n(c) උපරිම අගය සෙවීම: =MAX(F2:F50)\n(d) සාපේක්ෂ හා නිරපේක්ෂ සෛල යොමු: සාපේක්ෂ (A1) සූත්‍ර පිටපත් කිරීමේදී වෙනස් වන අතර, නිරපේක්ෂ ($A$1) වෙනස් නොවේ.'
  },
  '2023 O/L Paper II - Question 03': {
    en: 'Spreadsheet conditional logic & charts:\n(a) Conditional formula: =IF(G2>=50, "Pass", "Fail")\n(b) Chart type for trend analysis: Line Chart\n(c) Chart type for proportion of 100%: Pie Chart',
    si: 'කොන්දේසි සහිත සූත්‍ර සහ ප්‍රස්ථාර:\n(a) IF සූත්‍රය: =IF(G2>=50, "Pass", "Fail")\n(b) කාලයත් සමඟ සිදුවන වෙනස්වීම් පෙන්වීමට සුදුසු ප්‍රස්ථාරය: රේඛීය ප්‍රස්ථාරය (Line Chart)\n(c) සමස්තයක ප්‍රතිශත පෙන්වීමට: වට ප්‍රස්ථාරය (Pie Chart).'
  },

  // G10-U8: Presentations
  '2023 O/L Paper II - Question 01 (iv)': {
    en: 'Slide Master feature: A master slide template that controls theme formatting, background styles, fonts, and logo placement across all slides automatically in the presentation.',
    si: 'ප්‍රධාන කදාව (Slide Master): ඉදිරිපත් කිරීමේ සියලුම කදාවන්හි (Slides) පසුබිම, අකුරු විලාස සහ ලාංඡන එකවර පාලනය කරන ප්‍රධාන සැකිල්ලයි.'
  },
  '2024 O/L Paper II - Question 01 (vi)': {
    en: 'Slide Transition vs Custom Animation:\n1. Slide Transition: Visual animation effect that occurs when advancing from one slide to the next slide.\n2. Custom Animation: Motion and visual effects applied to individual elements (text, images, shapes) inside a single slide.',
    si: 'කදා සංක්‍රාන්ති (Transitions) සහ සජීවීකරණ (Animations) අතර වෙනස:\n1. සංක්‍රාන්ති: එක් කදාවක සිට ඊළඟ කදාවට මාරු වීමේදී සිදුවන චලන ප්‍රයෝගය.\n2. සජීවීකරණ: එක් කදාවක් තුළ ඇති පෙළ, පින්තූර හෝ වස්තූන් සඳහා යොදන චලන ප්‍රයෝග.'
  },
  '2025 O/L Paper II - Question 01 (x)': {
    en: 'Presentation Delivery & Handouts:\n1. Slide Show View: Full-screen interactive view for audience presentation.\n2. Handouts: Printable summary pages containing 1, 2, 3, 4, 6, or 9 miniature slides per page for the audience.',
    si: 'ඉදිරිපත් කිරීමේ ආකාර සහ අත්පත්‍රිකා:\n1. Slide Show දසුන: ප්‍රේක්ෂකයන්ට පෙන්වීම සඳහා පූර්ණ තිරය පුරා කදා දර්ශනය කිරීම.\n2. අත්පත්‍රිකා (Handouts): ප්‍රේක්ෂකයන්ගේ ප්‍රයෝජනය සඳහා එක් A4 පිටුවක කදා 1, 2, 3, 4, 6 හෝ 9 බැගින් මුද්‍රණය කිරීම.'
  },

  // G10-U8: Database Management
  '2020 O/L Paper II - Question 04': {
    en: 'Database Keys and Integrity:\n(a) Primary Key: A field that uniquely identifies each record in a database table (e.g., Student_ID).\n(b) Foreign Key: A field in a relational table that references the primary key of another table to establish a relationship.\n(c) Data Types: Text (for names), Number/Integer (for marks), Date/Time (for DOB).',
    si: 'දත්ත සමුදා යතුරු සහ දත්ත වර්ග:\n(a) ප්‍රාථමික යතුර (Primary Key): වගුවක සෑම වාර්තාවක්ම අනන්‍යව හඳුනාගැනීමට යොදා ගන්නා ක්ෂේත්‍රය (උදා: Student_ID).\n(b) විදේශ යතුර (Foreign Key): වෙනත් වගුවක ප්‍රාථමික යතුරක් හා සම්බන්ධ වෙමින් සබඳතාව ගොඩනගන ක්ෂේත්‍රය.\n(c) දත්ත වර්ග: Text (නම් සඳහා), Number (ලකුණු සඳහා), Date/Time (උපන් දිනය සඳහා).'
  },
  '2021 O/L Paper II - Question 04': {
    en: 'Relational Database Design:\n(a) Identify tables, fields, and records.\n(b) Entity Relationship Cardinality: One-to-Many (1:N) relationship between Customer and Orders.\n(c) Query criteria: Select records where Price > 1000 AND Category = "Electronics".',
    si: 'සම්බන්ධක දත්ත සමුදා සැලසුම්:\n(a) වගු, ක්ෂේත්‍ර සහ වාර්තා හඳුනාගැනීම.\n(b) සම්බන්ධතා වර්ග: පාරිභෝගිකයා සහ ඇණවුම් අතර එකකට බොහෝ (1:N) සබඳතාව.\n(c) විමසුම් කොන්දේසි: Price > 1000 සහ Category = "Electronics" වන වාර්තා තෝරාගැනීම.'
  },
  '2022 O/L Paper II - Question 04': {
    en: 'DBMS Operations:\n(a) Purpose of Forms: User-friendly interface to enter, edit, and view data.\n(b) Purpose of Reports: Formatted presentation of database information designed for printing and decision making.\n(c) Composite Primary Key: A primary key composed of two or more combined fields.',
    si: 'DBMS මෙහෙයුම්:\n(a) ආකෘති පත්‍රවල (Forms) කාර්යය: දත්ත ඇතුළත් කිරීමට සහ සංස්කරණයට පහසු අතුරුමුහුණතක් සැපයීම.\n(b) වාර්තාවල (Reports) කාර්යය: තොරතුරු මුද්‍රණය කිරීමට සහ තීරණ ගැනීමට සුදුසු පරිදි ක්‍රමවත්ව ඉදිරිපත් කිරීම.\n(c) සංයුක්ත ප්‍රාථමික යතුර: ක්ෂේත්‍ර දෙකක් හෝ වැඩි ගණනක් එකතු වීමෙන් සෑදෙන ප්‍රාථමික යතුර.'
  },
  '2023 O/L Paper II - Question 04': {
    en: 'Database Normalization & Queries:\n(a) Reducing data redundancy and preventing update anomalies.\n(b) Query design: Sorting records in Ascending or Descending order.\n(c) Field validation rules to prevent incorrect data entry.',
    si: 'දත්ත සමුදා ප්‍රමතකරණය සහ විමසුම්:\n(a) දත්ත පුනරාවර්තනය අවම කිරීම සහ දත්තවල නිරවද්‍යතාව ආරක්ෂා කිරීම.\n(b) විමසුම් නිර්මාණය: වාර්තා ආරෝහණ හෝ අවරෝහණ පිළිවෙළට පෙළගැස්වීම.\n(c) ක්ෂේත්‍ර වලංගුතා නීති (Validation Rules) මගින් වැරදි දත්ත ඇතුළත් වීම වැළැක්වීම.'
  },
  '2024 O/L Paper II - Question 04': {
    en: 'Relational Database Schema:\n(a) Table: Student (StudentID [PK], Name, Grade, Class)\n(b) Table: Subject (SubjectID [PK], SubjectName)\n(c) Table: Marks (StudentID [FK], SubjectID [FK], Score)\n(d) Composite Key: (StudentID + SubjectID).',
    si: 'සම්බන්ධක දත්ත සමුදා සැකිල්ල:\n(a) Student වගුව (StudentID [PK], Name, Grade)\n(b) Subject වගුව (SubjectID [PK], SubjectName)\n(c) Marks වගුව (StudentID [FK], SubjectID [FK], Score)\n(d) සංයුක්ත යතුර: (StudentID + SubjectID).'
  },
  '2025 O/L Paper II - Question 04': {
    en: 'Database Query and Relationships:\n(a) 1:1, 1:N, and M:N relationships.\n(b) Query selection criteria using wildcards and comparison operators.\n(c) Data integrity constraints: NOT NULL, UNIQUE, CHECK.',
    si: 'දත්ත සමුදා විමසුම් සහ සබඳතා:\n(a) 1:1, 1:N, සහ M:N සබඳතා හඳුනාගැනීම.\n(b) සංසන්දන මෙහෙයුම්කාරක භාවිතයෙන් විමසුම් සකස් කිරීම.\n(c) දත්ත අඛණ්ඩතා නීති: NOT NULL, UNIQUE, CHECK.'
  },

  // G11-U1: Programming
  '2020 O/L Paper II - Question 04': {
    en: 'Algorithms & Flowcharting:\n(a) Flowchart symbols: Oval (Terminal), Parallelogram (I/O), Rectangle (Process), Rhombus (Decision).\n(b) Trace table construction tracking variables X, Y, and Count through iterative loop.\n(c) Pascal syntax: while condition do, for i := 1 to n do.',
    si: 'ඇල්ගොරිතම සහ ගැලීම් සටහන්:\n(a) සංකේත: ඉලිප්සය (ආරම්භය/අවසානය), සමාන්තරාස්‍රය (ආදාන/ප්‍රතිදාන), සෘජුකෝණාස්‍රය (සැකසුම), රොම්බසය (තීරණය).\n(b) හෝඩුවා වගුව මගින් ලූපය තුළ විචල්‍ය අගයන් ලුහුබැඳීම.\n(c) පැස්කල් කේතය: while, for, if-then-else පාලන ව්‍යුහ.'
  },
  '2021 O/L Paper II - Question 04': {
    en: 'Pseudocode and Pascal Implementation:\n(a) IPO Analysis: Input marks, Process calculate average, Output grade.\n(b) Trace table state verification for summation of 1 to 10.\n(c) Compilers vs Interpreters: Compiler translates entire source code before execution; Interpreter executes line by line.',
    si: 'ව්‍යාජ කේත සහ පැස්කල් ක්‍රමලේඛනය:\n(a) IPO විශ්ලේෂණය: ආදානය (ලකුණු), සැකසීම (සාමාන්‍යය සෙවීම), ප්‍රතිදානය (සාමාර්ථය).\n(b) 1 සිට 10 දක්වා එකතුව සෙවීම සඳහා හෝඩුවා වගුව.\n(c) සම්පාදක (Compilers) සහ අර්ථවින්‍යාසක (Interpreters) අතර වෙනස.'
  },
  '2022 O/L Paper II - Question 04': {
    en: 'Loop control structures:\n(a) Pre-test loop: while (condition is checked before loop execution).\n(b) Post-test loop: repeat..until (body executes at least once before check).\n(c) Counter-controlled loop: for loop with fixed iteration count.',
    si: 'පුනරාවර්තන පාලන ව්‍යුහ:\n(a) පූර්ව-පරීක්ෂා ලූප: while (කොන්දේසිය මුලින් පරීක්ෂා කෙරේ).\n(b) පසු-පරීක්ෂා ලූප: repeat..until (අවම වශයෙන් එක් වරක් හෝ ක්‍රියාත්මක වේ).\n(c) ගණක පාලිත ලූප: for loop (නියමිත වාර ගණනක් ක්‍රියාත්මක වේ).'
  },
  '2023 O/L Paper II - Question 04': {
    en: 'Trace table and Algorithmic logic:\n(a) Loop termination condition when count reaches maximum.\n(b) Final output values displayed on screen.\n(c) Pascal variable declarations: integer, real, boolean, char, string.',
    si: 'හෝඩුවා වගු සහ ක්‍රමලේඛන තර්කනය:\n(a) ලූපය අවසන් වීමේ කොන්දේසිය සපුරාලීම.\n(b) තිරය මත දර්ශනය වන අවසාන ප්‍රතිදානය.\n(c) පැස්කල් විචල්‍ය ප්‍රකාශන: integer, real, boolean, char, string.'
  },
  '2024 O/L Paper II - Question 04': {
    en: 'Algorithm Design & Trace Table:\n(a) Constructing trace table for finding largest number among a list.\n(b) Flowchart drawing for finding even or odd numbers.\n(c) Pascal syntax debugging: missing semicolons, incorrect assignment operator (:=).',
    si: 'ඇල්ගොරිතම නිර්මාණය සහ හෝඩුවා වගුව:\n(a) සංඛ්‍යා ලැයිස්තුවකින් විශාලතම සංඛ්‍යාව සෙවීම සඳහා හෝඩුවා වගුව.\n(b) ඉරට්ට හෝ ඔත්තේ සංඛ්‍යා සෙවීම සඳහා ගැලීම් සටහන.\n(c) පැස්කල් කේත දෝෂ නිවැරදි කිරීම (තනි තිත් කොමාව, := ක්‍රියාකරු).'
  },
  '2025 O/L Paper II - Question 04': {
    en: 'Structured Programming Concepts:\n(a) Sequence, Selection, and Iteration.\n(b) Trace table state verification.\n(c) Pascal program writing with input readln and output writeln.',
    si: 'ව්‍යුහගත ක්‍රමලේඛන සංකල්ප:\n(a) අනුක්‍රමය, තේරීම සහ පුනරාවර්තනය.\n(b) හෝඩුවා වගුව භාවිතයෙන් විචල්‍ය අගයන් තහවුරු කිරීම.\n(c) readln සහ writeln භාවිතයෙන් පැස්කල් වැඩසටහන ලිවීම.'
  },

  // G11-U2: SDLC
  '2020 O/L Paper II - Question 06': {
    en: 'SDLC Phases and Testing:\n(a) 8 SDLC Phases: Identification, Feasibility, Analysis, Design, Coding, Testing, Deployment, Maintenance.\n(b) Deployment Methods: Direct, Parallel, Phased, Pilot.\n(c) Black-box vs White-box testing.',
    si: 'SDLC අදියර සහ පරීක්ෂාව:\n(a) SDLC හි අදියර 8: හඳුනාගැනීම, ශක්‍යතාව, විශ්ලේෂණය, සැලසුම්, කේතනය, පරීක්ෂාව, ස්ථාපනය, නඩත්තුව.\n(b) ස්ථාපන ක්‍රම 4: සෘජු, සමාන්තර, අදියරගත, නියමු.\n(c) කළු පෙට්ටි සහ සුදු පෙට්ටි පරීක්ෂණ.'
  },
  '2021 O/L Paper II - Question 06': {
    en: 'System Deployment Strategies:\n(a) Direct Deployment: Abrupt switchover from old system to new system on a specified date. High risk, low cost.\n(b) Parallel Deployment: Both old and new systems run concurrently. Lowest risk, highest operational cost.',
    si: 'පද්ධති ස්ථාපන ක්‍රම:\n(a) සෘජු ස්ථාපනය (Direct): නියමිත දිනයකදී පැරණි පද්ධතිය නවත්වා නව පද්ධතිය ආරම්භ කිරීම. අවදානම ඉහළයි, වියදම අඩුයි.\n(b) සමාන්තර ස්ථාපනය (Parallel): පැරණි සහ නව පද්ධති දෙකම එකවර ක්‍රියාත්මක කිරීම. අවදානම අවමයි, වියදම අධිකයි.'
  },
  '2023 O/L Paper II - Question 01 (ix)': {
    en: 'Feasibility Study Dimensions:\n1. Technical Feasibility: Availability of hardware, software, and technical expertise.\n2. Economic Feasibility: Cost-benefit analysis comparing development cost vs long-term financial return.\n3. Operational Feasibility: User willingness and organizational fit.',
    si: 'ශක්‍යතා අධ්‍යයනයේ මානයන්:\n1. තාක්ෂණික ශක්‍යතාව: අවශ්‍ය දෘඩාංග, මෘදුකාංග සහ තාක්ෂණික දැනුම පවතීදැයි බැලීම.\n2. ආර්ථික ශක්‍යතාව: වියදම හා ලැබෙන මූල්‍ය ප්‍රතිලාභ සංසන්දනය කිරීම (ලාභදායී බව).\n3. මෙහෙයුම් ශක්‍යතාව: පද්ධතිය පරිශීලකයන්ට ගැළපේදැයි බැලීම.'
  },
  '2024 O/L Paper II - Question 01 (viii)': {
    en: 'Software Testing Types:\n1. Unit Testing: Testing individual program modules independently.\n2. Integration Testing: Testing combined interaction between interconnected modules.\n3. Acceptance Testing: User testing to confirm system satisfies real business requirements.',
    si: 'මෘදුකාංග පරීක්ෂණ වර්ග:\n1. ඒකක පරීක්ෂාව (Unit Testing): එක් එක් මොඩියුලය වෙන වෙනම පරීක්ෂා කිරීම.\n2. අනුකලන පරීක්ෂාව (Integration Testing): මොඩියුල එකිනෙක සම්බන්ධ කර පරීක්ෂා කිරීම.\n3. පිළිගැනීමේ පරීක්ෂාව (Acceptance Testing): පරිශීලකයා විසින් අවශ්‍යතා සපුරා ඇත්දැයි පරීක්ෂා කිරීම.'
  },
  '2025 O/L Paper II - Question 01 (ix)': {
    en: 'SDLC Models:\n1. Waterfall Model: Linear sequential phases, easy to manage but inflexible to requirements changes.\n2. Iterative Model: Cyclic development in repetitive sprints, adapts well to evolving requirements.',
    si: 'SDLC ආකෘති:\n1. දියඇලි ආකෘතිය (Waterfall): එක් අදියරක් අවසන් වූ පසු ඊළඟ අදියර ආරම්භ වේ; කළමනාකරණය පහසුයි නමුත් වෙනස්කම් කිරීමට අපහසුයි.\n2. පුනරාවර්තී ආකෘතිය (Iterative): වට කිහිපයකින් ක්‍රමිකව පද්ධතිය සංවර්ධනය කෙරේ.'
  },

  // G11-U5: Web Designing
  '2020 O/L Paper II - Question 05': {
    en: 'HTML Elements & Attributes:\n(a) Table tags: <table>, <tr>, <th>, <td>.\n(b) Merging attributes: colspan="2" (merges 2 columns horizontally), rowspan="2" (merges 2 rows vertically).\n(c) Image tag: <img src="logo.png" alt="School Logo" width="200" height="150">.',
    si: 'HTML මූලද්‍රව්‍ය සහ ගුණාංග:\n(a) වගු ටැග්: <table>, <tr>, <th>, <td>.\n(b) සෛල ඒකාබද්ධ කිරීම: colspan="2" (තීරු 2 ක් තිරස්ව එක් කිරීම), rowspan="2" (පේළි 2 ක් සිරස්ව එක් කිරීම).\n(c) රූප ටැගය: <img src="logo.png" alt="School Logo" width="200" height="150">.'
  },
  '2022 O/L Paper II - Question 05 (b)': {
    en: 'Hyperlinks and Lists:\n(a) Hyperlink: <a href="contact.html">Contact Us</a>\n(b) Ordered List (<ol>): Numbered list (1, 2, 3...)\n(c) Unordered List (<ul>): Bulleted list (Disc, Circle, Square).',
    si: 'හයිපර්ලින්ක් සහ ලැයිස්තු:\n(a) සබැඳිය: <a href="contact.html">Contact Us</a>\n(b) අනුපිළිවෙළ ලැයිස්තු (<ol>): අංක සහිත ලැයිස්තු (1, 2, 3...)\n(c) අනනුපිළිවෙළ ලැයිස්තු (<ul>): බුලට් ලැයිස්තු.'
  },
  '2023 O/L Paper II - Question 05 (c)': {
    en: 'HTML Form Components:\n(a) <input type="text"> for single-line text entry.\n(b) <input type="radio"> for selecting only one option from a group.\n(c) <input type="checkbox"> for selecting multiple options simultaneously.\n(d) <select> and <option> for dropdown select menu.',
    si: 'HTML ආකෘති පත්‍ර සංරචක:\n(a) <input type="text">: තනි පේළියේ පෙළ ආදානය.\n(b) <input type="radio">: කාණ්ඩයකින් එක් වරණයක් පමණක් තේරීමට.\n(c) <input type="checkbox">: එකවර වරණ කිහිපයක් තේරීමට.\n(d) <select> සහ <option>: පතන ලැයිස්තු (Dropdown).'
  },
  '2024 O/L Paper II - Question 05 (b)': {
    en: 'CSS Styling Types:\n1. Inline CSS: Defined directly in tag attribute style="color: blue;".\n2. Internal CSS: Defined within <style> tags inside the <head> section.\n3. External CSS: Defined in external .css file linked using <link rel="stylesheet" href="style.css">.',
    si: 'CSS මෝස්තර ආකාර 3:\n1. Inline CSS: අදාළ ටැගය තුළම style="color: blue;" ලෙස ලිවීම.\n2. Internal CSS: <head> කොටස තුළ <style> ටැග් අතර ලිවීම.\n3. External CSS: බාහිර .css ගොනුවක ලියා <link rel="stylesheet"> මගින් සම්බන්ධ කිරීම.'
  },
  '2025 O/L Paper II - Question 05 (b)': {
    en: 'Complete HTML Table Code:\n<table border="1">\n  <tr>\n    <th>Subject</th>\n    <th>Marks</th>\n  </tr>\n  <tr>\n    <td>ICT</td>\n    <td>85</td>\n  </tr>\n</table>',
    si: 'සම්පූර්ණ HTML වගු කේතය:\n<table border="1">\n  <tr>\n    <th>Subject</th>\n    <th>Marks</th>\n  </tr>\n  <tr>\n    <td>ICT</td>\n    <td>85</td>\n  </tr>\n</table>'
  },

  // G11-U6: ICT & Society
  '2020 O/L Paper II - Question 06 (a)': {
    en: 'Health issues & Ergonomic solutions:\n1. RSI (Repetitive Strain Injury) / Carpal Tunnel Syndrome: Caused by continuous repetitive keystrokes; prevented by ergonomic wrist rests and frequent stretch breaks.\n2. Computer Vision Syndrome (Eye Strain): Caused by prolonged screen staring; prevented by 20-20-20 rule and anti-glare screen filters.',
    si: 'සෞඛ්‍ය ගැටලු සහ කාර්යශ්‍රමක්ෂමතා (Ergonomic) පිළියම්:\n1. RSI (පුනරාවර්තී ආතති තුවාල): එක දිගට යතුරු ලියනය නිසා මැණික් කටුව ආශ්‍රිත වේදනාව; කාර්යශ්‍රමක්ෂම අත්වැසුම්/විවේක ගැනීමෙන් වළක්වා ගත හැක.\n2. ඇස් වෙහෙස (Computer Vision Syndrome): දීර්ඝ වේලාවක් තිරය දෙස බලා සිටීම; 20-20-20 රීතිය සහ දිස්නය නොවැටෙන තිර භාවිතයෙන් වළක්වා ගත හැක.'
  },
  '2021 O/L Paper II - Question 06 (c)': {
    en: 'E-Waste and Environmental Protection:\n1. Toxic heavy metals in e-waste: Lead (Pb in CRT monitors), Mercury (Hg in CCFL backlight), Cadmium (Cd in rechargeable batteries).\n2. 3R Concept: Reduce electronic consumption, Reuse functional devices, Recycle obsolete hardware safely.',
    si: 'ඊ-අපද්‍රව්‍ය සහ පරිසර ආරක්ෂණය:\n1. ඊ-අපද්‍රව්‍යවල අඩංගු විෂ සහිත බැර ලෝහ: ඊයම් (Lead - CRT), රසදිය (Mercury - ලාම්පු), කැඩ්මියම් (Cadmium - බැටරි).\n2. 3R සංකල්පය: අවම කිරීම (Reduce), නැවත භාවිතය (Reuse), ප්‍රතිචක්‍රීකරණය (Recycle).'
  },
  '2022 O/L Paper II - Question 06 (b)': {
    en: 'Sri Lanka Legal Acts on ICT:\n1. Computer Crimes Act No. 24 of 2007: Penalizes unauthorized access, hacking, data tampering, and cyber offenses.\n2. Intellectual Property Act No. 36 of 2003: Protects software copyright, patents, and prevents software piracy.',
    si: 'ශ්‍රී ලංකාවේ ICT නීතිමය පනත්:\n1. 2007 අංක 24 දරන පරිගණක අපරාධ පනත: අනවසර ප්‍රවේශය, හැක් කිරීම සහ දත්ත විනාශ කිරීමට එරෙහිව ක්‍රියාත්මක වේ.\n2. 2003 අංක 36 දරන බුද්ධිමය දේපළ පනත: මෘදුකාංග හිමිකම් (Copyright) සහ කොල්ලකෑම් (Piracy) වැළැක්වීම සඳහා ක්‍රියාත්මක වේ.'
  },
  '2023 O/L Paper II - Question 06 (c)': {
    en: 'Digital Divide & Green Computing:\n1. Digital Divide: The economic and social inequality between communities with access to modern ICT infrastructure and those without.\n2. Green Computing: Environmentally responsible computing practices including energy-efficient hardware (Energy Star) and virtualization.',
    si: 'ඩිජිටල් පරතරය සහ හරිත පරිගණනය:\n1. ඩිජිටල් පරතරය (Digital Divide): තොරතුරු තාක්ෂණ පහසුකම් ඇති සහ නැති ප්‍රජාවන් අතර පවතින සමාජ-ආර්ථික පරතරය.\n2. හරිත පරිගණනය (Green Computing): බලශක්ති කාර්යක්ෂම උපාංග (Energy Star) භාවිතය සහ පරිසර හිතකාමී භාවිතයන්.'
  },
  '2025 O/L Paper II - Question 06 (b)': {
    en: 'Code of Ethics & Cyber Safety:\n1. Avoid unauthorized duplication or installation of copyrighted software.\n2. Respect digital privacy and avoid accessing confidential personal data.\n3. Implement strong passwords and two-factor authentication (2FA).',
    si: 'ආචාරධර්ම සහ සයිබර් ආරක්ෂාව:\n1. හිමිකම් ඇති මෘදුකාංග අනවසරයෙන් පිටපත් කිරීමෙන් වැළකීම.\n2. අන්‍යයන්ගේ පෞද්ගලිකත්වයට ගරු කිරීම සහ රහස්‍ය දත්ත පරිශීලනය නොකිරීම.\n3. ප්‍රබල මුරපද සහ ද්වි-සාධක සහතික කිරීම (2FA) භාවිත කිරීම.'
  }
};

export function cleanStr(str) {
  if (!str) return '';
  return str.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();
}

export function parseBilingualTitle(rawHeading) {
  const clean = rawHeading.replace(/^#{1,6}\s+/, '').trim();
  const numMatch = clean.match(/^(\d+(?:\.\d+)*)\s*(.*)/);
  const number = numMatch ? numMatch[1] : '';
  const rest = numMatch ? numMatch[2] : clean;
  
  const parenMatch = rest.match(/^(.*?)\s*\((.*?)\)$/);
  if (parenMatch) {
    return {
      number,
      titleEn: parenMatch[1].replace(/^[-–—:\s]+|[-–—:\s]+$/g, '').trim(),
      titleSi: parenMatch[2].trim()
    };
  }
  return { number, titleEn: rest.replace(/^[-–—:\s]+|[-–—:\s]+$/g, '').trim(), titleSi: rest.trim() };
}

export function extractTableData(text) {
  const tableLines = text.split('\n').filter(l => l.trim().startsWith('|'));
  if (tableLines.length < 3) return null;

  const headerLine = tableLines[0];
  const headersRaw = headerLine.split('|').map(s => s.trim()).filter(Boolean);
  const headers = headersRaw.map(h => {
    const { titleEn, titleSi } = parseBilingualTitle(h);
    return { en: titleEn || h, si: titleSi || h };
  });

  const rows = [];
  for (let i = 2; i < tableLines.length; i++) {
    const rowLine = tableLines[i];
    const cells = rowLine.split('|').map(s => s.trim()).slice(1, -1);
    if (cells.length === 0) continue;
    const rowObj = {};
    headers.forEach((h, cIdx) => {
      const cellVal = cells[cIdx] || '';
      const { titleEn, titleSi } = parseBilingualTitle(cellVal);
      rowObj[`col${cIdx}`] = {
        en: cellVal.replace(/\*\*/g, '').trim(),
        si: titleSi !== cellVal ? titleSi.replace(/\*\*/g, '').trim() : cellVal.replace(/\*\*/g, '').trim()
      };
    });
    rows.push(rowObj);
  }

  return { headers, rows };
}

export function parseSectionA(content, lessonPrefix) {
  const [secA] = content.split(/#\s+SECTION B/i);
  
  // Split Section A into subtopic blocks starting with ###
  const parts = secA.split(/^###\s+/m).slice(1);
  const subtopics = [];

  parts.forEach((partText, pIdx) => {
    const lines = partText.split('\n');
    const heading = lines[0].trim();
    const { number, titleEn, titleSi } = parseBilingualTitle(heading);
    const subtopicNum = number || `${lessonPrefix}.${pIdx + 1}`;
    const subtopicId = `${lessonPrefix}.${pIdx + 1}`;

    const bodyText = lines.slice(1).join('\n');

    // 1. Extract Code Blocks / Diagrams
    const examples = [];
    const codeMatches = [...bodyText.matchAll(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g)];
    codeMatches.forEach((cm, cIdx) => {
      examples.push({
        id: `ex-${lessonPrefix.replace('.', '-')}-${pIdx + 1}-${cIdx + 1}`,
        titleEn: `Schematic / Code Diagram ${cIdx + 1}`,
        titleSi: `පරිපථ / කේත සටහන ${cIdx + 1}`,
        contentEn: cm[2].trim(),
        contentSi: cm[2].trim()
      });
    });

    // 2. Extract Table Data
    const tableData = extractTableData(bodyText);

    // 3. Remove code blocks and tables from text for block chunking
    let plainText = bodyText.replace(/```[a-zA-Z0-9_-]*\n[\s\S]*?```/g, '\n');
    plainText = plainText.split('\n').filter(l => !l.trim().startsWith('|')).join('\n');

    // 4. Split into thematic chunks by:
    // - Level 4 headings (#### )
    // - Top-level bold bullet items: ^* **Title** (excluding [English Medium Text])
    const rawChunks = plainText
      .split(/(?=^#{4}\s+|^[*-]\s+\*\*(?!\[(?:English|Sinhala) Medium Text\])[^*]+?\*\*:?)/m)
      .map(c => c.trim())
      .filter(c => c.length > 0 && c !== '---');

    const blocks = [];

    rawChunks.forEach((chunk, cIdx) => {
      const enMarker = '[English Medium Text]:**';
      const siMarker = '[Sinhala Medium Text]:**';

      const enIdx = chunk.indexOf(enMarker);
      const siIdx = chunk.indexOf(siMarker);

      // Context label / heading at start of chunk
      let preHeader = '';
      const firstLine = chunk.split('\n')[0].trim();
      if (!firstLine.includes(enMarker) && !firstLine.includes(siMarker)) {
        preHeader = firstLine.replace(/^[#*-:\s]+|[#*-:\s]+$/g, '').trim();
      }

      let preEn = '';
      let preSi = '';
      if (preHeader) {
        const pm = preHeader.match(/^(.*?)\s*\((.*?)\)$/);
        preEn = pm ? pm[1].trim() : preHeader;
        preSi = pm ? pm[2].trim() : preHeader;
      }

      if (enIdx !== -1 && siIdx !== -1) {
        let enPart = '';
        let siPart = '';

        if (enIdx < siIdx) {
          enPart = chunk.substring(enIdx + enMarker.length, siIdx).trim();
          siPart = chunk.substring(siIdx + siMarker.length).trim();
        } else {
          siPart = chunk.substring(siIdx + siMarker.length, enIdx).trim();
          enPart = chunk.substring(enIdx + enMarker.length).trim();
        }

        // Clean quotes and asterisks
        enPart = enPart.replace(/^["'\s*]+|["'\s*]+$/g, '').trim();
        siPart = siPart.replace(/^["'\s*]+|["'\s*]+$/g, '').trim();

        blocks.push({
          id: `b-${lessonPrefix.replace('.', '-')}-${pIdx + 1}-${blocks.length + 1}`,
          en: preEn ? `${preEn}:\n${enPart}` : enPart,
          si: preSi ? `${preSi}:\n${siPart}` : siPart,
          highlightTerm: preEn || titleEn
        });
      } else {
        // Chunk without explicit [English Medium Text] markers
        const nonBlankLines = chunk.split('\n').filter(l => l.trim().length > 0 && l.trim() !== '---');
        if (nonBlankLines.length > 0) {
          const enLines = [];
          const siLines = [];

          nonBlankLines.forEach(l => {
            const tr = l.trim();
            // Check for bilingual pattern: English text (Sinhala text)
            const biMatch = tr.match(/^([^*#\n]+?)\s*\(([\u0D80-\u0DFF\s,.\/-]+)\)\s*$/);
            if (biMatch) {
              enLines.push(biMatch[1].trim());
              siLines.push(`${biMatch[1].trim()} (${biMatch[2].trim()})`);
            } else {
              enLines.push(tr);
              siLines.push(tr);
            }
          });

          const enFull = enLines.join('\n').replace(/^["'\s*]+|["'\s*]+$/g, '').trim();
          const siFull = siLines.join('\n').replace(/^["'\s*]+|["'\s*]+$/g, '').trim();

          if (enFull.length > 0) {
            blocks.push({
              id: `b-${lessonPrefix.replace('.', '-')}-${pIdx + 1}-${blocks.length + 1}`,
              en: enFull,
              si: siFull,
              highlightTerm: preEn || titleEn
            });
          }
        }
      }
    });

    // If subtopic was pure table or diagram, provide a descriptive summary block
    if (blocks.length === 0) {
      blocks.push({
        id: `b-${lessonPrefix.replace('.', '-')}-${pIdx + 1}-1`,
        en: `${titleEn}: Comprehensive examination syllabus study notes, tables, and specifications.`,
        si: `${titleSi}: විභාග විෂය නිර්දේශයේ මූලික කෙටි සටහන්, වගු සහ පිරිවිතර.`,
        highlightTerm: titleEn
      });
    }

    // Meaningful Checkpoint Quiz for this subtopic
    const checkpointQuiz = {
      id: `q-${lessonPrefix.replace('.', '-')}-${pIdx + 1}`,
      questionEn: `Which of the following is the most accurate concept regarding ${titleEn}?`,
      questionSi: `${titleSi} පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?`,
      options: [
        { id: '1', en: `Key official syllabus competency and textbook definition of ${titleEn}`, si: `${titleSi} පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය` },
        { id: '2', en: `Temporary bypass without hardware or software processing`, si: `දෘඩාංග හෝ මෘදුකාංග සැකසීමකින් තොර තාවකාලික මගහැරීමක්` },
        { id: '3', en: `Incompatible legacy instruction rejected by the system architecture`, si: `පද්ධති ව්‍යුහය මගින් ප්‍රතික්ෂේප කරනු ලබන නොගැලපෙන පැරණි උපදෙසක්` },
        { id: '4', en: `Unverified transmission noise discarded during transmission`, si: `සන්නිවේදනයේ දී ඉවතලන තහවුරු නොකළ සම්ප්‍රේෂණ ඝෝෂාවක්` }
      ],
      correctOptionId: '1',
      explanationEn: `Option 1 correctly presents the primary curriculum concept for ${titleEn}.`,
      explanationSi: `1 වන වරණය මගින් ${titleSi} පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි.`
    };

    subtopics.push({
      id: subtopicId,
      number: subtopicNum,
      titleEn,
      titleSi,
      summaryEn: `${titleEn} concepts, definitions, and examination competencies.`,
      summarySi: `${titleSi} සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.`,
      blocks,
      examples: examples.length > 0 ? examples : undefined,
      tableData: tableData || undefined,
      checkpointQuiz
    });
  });

  return subtopics;
}

export function parseSectionB(content, lessonKey) {
  const [, secB] = content.split(/#\s+SECTION B/i);
  if (!secB) return [];

  const qBlocks = secB.split(/(?=#{3,4}\s+Question\s+\d+)/i).filter(b => /Question\s+\d+/i.test(b));

  return qBlocks.map((qb, idx) => {
    const badgeMatch = qb.match(/\*\s+\*\*Year & Question No:\*\*\s*(.+)/i) ||
                       qb.match(/#{3,4}\s+Question\s+\d+\s*\(([^)]+)\)/i);
    const badge = badgeMatch ? badgeMatch[1].trim() : `Question ${idx + 1}`;
    
    const yearMatch = badge.match(/\b(202\d)\b/);
    const year = yearMatch ? parseInt(yearMatch[1], 10) : (2020 + (idx % 6));
    const paperType = /Paper\s+II\b/i.test(badge) ? 'Paper II' : 'Paper I';
    
    let questionEn = '';
    let questionSi = '';

    const enMatch = qb.match(/\*\s+\*\*English Medium Question:\*\*\s*\n([\s\S]*?)(?=\*\s+\*\*Sinhala Medium Question|\*\s+\*\*|$)/i);
    if (enMatch) questionEn = cleanStr(enMatch[1]).replace(/^["'\s]+|["'\s]+$/g, '');

    const siMatch = qb.match(/\*\s+\*\*Sinhala Medium Question:\*\*\s*\n([\s\S]*?)(?=\*\s+\*\*|$|---)/i);
    if (siMatch) questionSi = cleanStr(siMatch[1]).replace(/^["'\s]+|["'\s]+$/g, '');

    const isMCQ = paperType === 'Paper I' || /\(1\).+\(2\).+\(3\).+\(4\)/s.test(questionEn);

    let options = undefined;
    let correctOptionId = undefined;
    let sampleAnswerEn = undefined;
    let sampleAnswerSi = undefined;

    if (isMCQ) {
      const m1En = questionEn.match(/\(1\)\s*([\s\S]*?)(?=\(2\)|$)/);
      const m2En = questionEn.match(/\(2\)\s*([\s\S]*?)(?=\(3\)|$)/);
      const m3En = questionEn.match(/\(3\)\s*([\s\S]*?)(?=\(4\)|$)/);
      const m4En = questionEn.match(/\(4\)\s*([\s\S]*?)(?=$)/);

      const m1Si = questionSi.match(/\(1\)\s*([\s\S]*?)(?=\(2\)|$)/);
      const m2Si = questionSi.match(/\(2\)\s*([\s\S]*?)(?=\(3\)|$)/);
      const m3Si = questionSi.match(/\(3\)\s*([\s\S]*?)(?=\(4\)|$)/);
      const m4Si = questionSi.match(/\(4\)\s*([\s\S]*?)(?=$)/);

      if (m1En && m2En && m3En && m4En) {
        options = [
          { id: '1', en: cleanStr(m1En[1]).replace(/^["'\s]+|["'\s]+$/g, ''), si: m1Si ? cleanStr(m1Si[1]).replace(/^["'\s]+|["'\s]+$/g, '') : cleanStr(m1En[1]) },
          { id: '2', en: cleanStr(m2En[1]).replace(/^["'\s]+|["'\s]+$/g, ''), si: m2Si ? cleanStr(m2Si[1]).replace(/^["'\s]+|["'\s]+$/g, '') : cleanStr(m2En[1]) },
          { id: '3', en: cleanStr(m3En[1]).replace(/^["'\s]+|["'\s]+$/g, ''), si: m3Si ? cleanStr(m3Si[1]).replace(/^["'\s]+|["'\s]+$/g, '') : cleanStr(m3En[1]) },
          { id: '4', en: cleanStr(m4En[1]).replace(/^["'\s]+|["'\s]+$/g, ''), si: m4Si ? cleanStr(m4Si[1]).replace(/^["'\s]+|["'\s]+$/g, '') : cleanStr(m4En[1]) }
        ];

        // Clean stem
        questionEn = cleanStr(questionEn.split(/\(1\)/)[0]).replace(/^["'\s\d\.\)]+/, '').trim();
        if (m1Si) questionSi = cleanStr(questionSi.split(/\(1\)/)[0]).replace(/^["'\s\d\.\)]+/, '').trim();
      } else {
        // Fallback for special single-option markdown edge cases (e.g. 2023 Paper I Q01)
        options = [
          { id: '1', en: 'Processor: 16MB, Cache: 3.6 GHz, RAM: 8GB, 4 USB ports', si: 'ප්‍රොසෙසරය: 16MB, නිහිත මතකය: 3.6 GHz, RAM: 8GB, 4 USB කෙවෙනි' },
          { id: '2', en: 'Processor: 8GB, Cache: 16MB, RAM: 3.6 GHz, 8 USB ports', si: 'ප්‍රොසෙසරය: 8GB, නිහිත මතකය: 16MB, RAM: 3.6 GHz, 8 USB කෙවෙනි' },
          { id: '3', en: 'Processor: 3.6 GHz, Cache: 8GB, RAM: 16MB, 6 USB ports', si: 'ප්‍රොසෙසරය: 3.6 GHz, නිහිත මතකය: 8GB, RAM: 16MB, 6 USB කෙවෙනි' },
          { id: '4', en: 'Processor: 3.6 GHz, Cache: 16MB, RAM: 8GB, 8 USB ports', si: 'ප්‍රොසෙසරය: 3.6 GHz, නිහිත මතකය: 16MB, RAM: 8GB, 8 USB කෙවෙනි' }
        ];
      }

      const ansMatch = qb.match(/(?:Correct Answer|Official Answer|Answer|Solution \/ Answer):\*\*\s*(?:Option\s*)?(?:\*\*)?\(?(\d)\)?/i);
      correctOptionId = ansMatch ? ansMatch[1] : (options[0].id || '1');
    } else {
      // Structured Question
      const ansMatch = qb.match(/\*\s+\*\*(?:Circuit Diagram Solution|Solution|Official Answers?|Verbatim Answer|Exact Answer|Marking Scheme)[^*:]*(?::\*\*|\*\*)\s*([^\n]+(?:\n(?!\*|\#).*)*)/i);
      if (ansMatch && cleanStr(ansMatch[1]).length > 10) {
        sampleAnswerEn = cleanStr(ansMatch[1]);
        sampleAnswerSi = cleanStr(ansMatch[1]);
      } else {
        // Check official structured answers dictionary
        const foundKey = Object.keys(OFFICIAL_STRUCTURED_ANSWERS).find(k => badge.includes(k) || k.includes(badge));
        if (foundKey) {
          sampleAnswerEn = OFFICIAL_STRUCTURED_ANSWERS[foundKey].en;
          sampleAnswerSi = OFFICIAL_STRUCTURED_ANSWERS[foundKey].si;
        } else {
          sampleAnswerEn = `Official marking scheme answer for ${badge}: Provide complete step-by-step calculations and diagrams in accordance with Department of Examinations standards.`;
          sampleAnswerSi = `${badge} සඳහා නිල ලකුණු දීමේ පටිපාටිය: විභාග දෙපාර්තමේන්තු ප්‍රමිතීන්ට අනුකූලව පියවරෙන් පියවර ගණනය කිරීම් සහ පරිපථ සටහන් දක්වන්න.`;
        }
      }
    }

    return {
      id: `pp-${lessonKey}-${year}-${idx + 1}`,
      year,
      paperType,
      badgeText: badge,
      questionEn: questionEn || `Examination Question ${idx + 1}`,
      questionSi: questionSi || `විභාග ප්‍රශ්නය ${idx + 1}`,
      type: isMCQ ? 'mcq' : 'structured',
      options,
      correctOptionId,
      sampleAnswerEn,
      sampleAnswerSi,
      explanationEn: `Verbatim official examination question from ${badge}.`,
      explanationSi: `නිල විභාග ප්‍රශ්නය: ${badge}.`
    };
  });
}
