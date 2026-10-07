# Grade 10 ICT - Lesson 03: Dual-Medium Study & Past Paper Guide

## Document Overview
This study and past paper guide provides verbatim, dual-medium coverage of **Grade 10 - Lesson 03: Data Representation in Computer Systems (පරිගණක පද්ධති තුළ දත්ත නිරූපණය)** from the official Sri Lankan O/L ICT curriculum. All theory content and exam questions are extracted word-for-word from the Grade 10 English Medium Textbook, Grade 10 Sinhala Medium Textbook, and official G.C.E. O/L examination past papers (2020–2025).

---

# SECTION A: Complete Learning Guide & Short Notes (Comprehensive Theory)

### 3.1 Computer Data Representation (පරිගණකයේ දත්ත නිරූපණය)

#### Key Concepts & Voltage Signals (මූලික සංකල්ප සහ වෝල්ටීයතා සංඥා)
* **[English Medium Text]:** "Computer represents data in two signal states. There are two Voltage levels for these two symbols. One is named as the high voltage level and the other is named as low voltage level. '0' and '1' digits respectively represent these low and high voltage levels in a circuit. Thus, '1' and '0' status are equal to the 'On' and 'Off' states of an electronic circuit. Any data in the world can be represented on the computer using these two digits."
* **[Sinhala Medium Text]:** "පරිගණකයක දත්ත නිරූපණය කරන්නේ සංඥා අවස්ථා දෙකකිනි. මෙම සංකේත දෙක සඳහා වෝල්ටීයතා මට්ටම් දෙකක් පවතී. එකක් ඉහළ වෝල්ටීයතා මට්ටම ලෙසත් අනෙක පහළ වෝල්ටීයතා මට්ටම ලෙසත් හැඳින්වේ. විද්‍යුත් පරිපථයක මෙම පහළ සහ ඉහළ වෝල්ටීයතා මට්ටම් පිළිවෙළින් '0' සහ '1' ඉලක්කම් මගින් නිරූපණය කෙරේ. මෙසේ '1' සහ '0' අවස්ථා විද්‍යුත් පරිපථයක 'ස්විචය වැසූ (On)' සහ 'ස්විචය විවෘත (Off)' අවස්ථාවලට සමාන වේ. ලොව ඕනෑම දත්තයක් මෙම ඉලක්කම් දෙක භාවිතයෙන් පරිගණකයේ නිරූපණය කළ හැක."

---

### 3.1.3 RGB to Hexadecimal Color Representation & Conversion (RGB සහ ෂඩ්දශමය jළන kිරූපණය හා පරිවර්තනය)

#### Fundamental Concept & Structure (මූලික සංකල්පය සහ ව්‍යුහය)
* **[English Medium Text]:** "In computer graphics and web design, any colour can be made with the combination of different degrees of Red, Green and Blue (RGB). The value of each primary colour ranges from 0 to 255 in decimal. In computer systems, these colour values are indicated in hexadecimal numbers starting with '#' or '&H' symbol. The hexadecimal code consists of six characters (`#RRGGBB`), where the first two digits represent Red, the middle two represent Green, and the last two represent Blue."
* **[Sinhala Medium Text]:** "පරිගණක ප්‍රස්තාරික සහ වෙබ් අඩවි නිර්මාණයේ දී රතු (Red), කොළ (Green) සහ නිල් (Blue) යන මූලික වර්ණවල එකතුවෙන් ඕනෑම වර්ණයක් සාදා ගත හැක. මෙහි එක් එක් මූලික වර්ණයෙහි අගය දශමය සංඛ්‍යාවලින් 0 සිට 255 දක්වා පරාසයක පවතී. පරිගණක පද්ධති තුළ මෙම වර්ණ අගයන් '#' හෝ '&H' (ampersand) සංකේතයෙන් ආරම්භ වන ෂඩ්දශමය සංඛ්‍යාවලින් දක්වනු ලබයි. මෙම ෂඩ්දශමය කේතය අක්ෂර 6 කින් (`#RRGGBB`) සමන්විත වන අතර, පළමු අක්ෂර දෙකෙන් රතු ද, මැද අක්ෂර දෙකෙන් කොළ ද, අවසාන අක්ෂර දෙකෙන් නිල් ද නිරූපණය කෙරේ."

#### Step-by-Step Conversion Example: Dark Purple (තද දම් පාට)
* **Decimal RGB Values:** Red = 135, Green = 31, Blue = 120 $ightarrow$ `RGB (135, 31, 120)`
* **Converting Each RGB Value to Hexadecimal:**
  1. **Red ($135_{10}$):** $135 \div 16 = 8$ with remainder $7 ightarrow 87_{16}$
  2. **Green ($31_{10}$):** $31 \div 16 = 1$ with remainder $15 	ext{ (F)} ightarrow 1F_{16}$
  3. **Blue ($120_{10}$):** $120 \div 16 = 7$ with remainder $8 ightarrow 78_{16}$
* **Combined Hexadecimal Colour Code:** `#871F78` or `&H871F78`

#### Textbook Table 3.13: RGB and Hexadecimal Colour Equivalences (පෙළපොතේ 3.13 වගුව)

| Name of Colour (වර්ණයේ නම) | Colour (වර්ණය) | Hexadecimal Value (ෂඩ්දශමය අගය) | R (Red) | G (Green) | B (Blue) | Step-by-Step Calculation (ගණනය කිරීම් පියවර) |
| :--- | :---: | :--- | :--- | :--- | :--- | :--- |
| **Dark Purple (තද දම්)** | 🟣 | **#871F78** / **&H871F78** | 135 | 31 | 120 | $135 ightarrow 87_{16}, 31 ightarrow 1F_{16}, 120 ightarrow 78_{16}$ |
| **Light Pink (ළා රෝස)** | 🌸 | **#FFB6C1** | 255 | 182 | 193 | $255 ightarrow FF_{16}, 182 ightarrow B6_{16}, 193 ightarrow C1_{16}$ |
| **Sky Blue (අහස් නිල්)** | 🟦 | **#3299CC** | 50 | 153 | 204 | $50 ightarrow 32_{16}, 153 ightarrow 99_{16}, 204 ightarrow CC_{16}$ |
| **Pure Green (තනි කොළ)** | 🟢 | **#00FF00** | 0 | 255 | 0 | $0 ightarrow 00_{16}, 255 ightarrow FF_{16}, 0 ightarrow 00_{16}$ |
| **Pure Yellow (තනි කහ)** | 🟡 | **#FFEE00** | 255 | 238 | 0 | $255 ightarrow FF_{16}, 238 ightarrow EE_{16}, 0 ightarrow 00_{16}$ |

---

### 3.2 Number Systems (සංඛ්‍යා පද්ධති)

#### Fundamental Definitions: Unit, Number, Base/Radix (මූලික අර්ථ දැක්වීම්: ඒකකය, සංඛ්‍යාව, mdoh/Radix)
* **Unit (ඒකකය):**
  * **[English Medium Text]:** "Unit is a single object. For instance, a mango, a Rupee, and a day can be considered a unit."
  * **[Sinhala Medium Text]:** "ඒකකයක් යනු තනි වස්තුවකි. උදාහරණයක් ලෙස අඹ ගෙඩියක්, රුපියලක් සහ දිනයක් ඒකකයක් ලෙස සැලකිය හැක."

* **Number (සංඛ්‍යාව):**
  * **[English Medium Text]:** "A number is a symbol which represents a unit or quantity."
  * **[Sinhala Medium Text]:** "සංඛ්‍යාවක් යනු ඒකකයක් හෝ ප්‍රමාණයක් නිරූපණය කරන සංකේතයකි."

* **Base / Radix (පද පද්ධතියේ mdoh / Radix):**
  * **[English Medium Text]:** "A number of symbols used in a number system is called the base/radix. The base of any number system is indicated in decimal numbers."
  * **[Sinhala Medium Text]:** "සංඛ්‍යා පද්ධතියක භාවිත වන සංකේත ගණන එහි mdoh (Base / Radix) ලෙස හැඳින්වේ. ඕනෑම සංඛ්‍යා පද්ධතියක mdoh දක්වනු ලබන්නේ දශමය සංඛ්‍යාවලිනි."

#### The 4 Main Number Systems Used in Computers (පරිගණකයේ භාවිත වන ප්‍රධාන සංඛ්‍යා පද්ධති 4)

| Number System (සංඛ්‍යා පද්ධතිය) | Base Value (mdoh) | Digits and Alphabetic Characters Used (භාවිත වන ඉලක්කම් හා සංකේත) |
| :--- | :--- | :--- |
| **Binary (ද්විමය)** | 2 | `0, 1` |
| **Octal (අෂ්ටමය)** | 8 | `0, 1, 2, 3, 4, 5, 6, 7` |
| **Decimal (දශමය)** | 10 | `0, 1, 2, 3, 4, 5, 6, 7, 8, 9` |
| **Hexadecimal (ෂඩ්දශමය)** | 16 | `0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F` |

* **Hexadecimal Letter Equivalences (ෂඩ්දශමය අක්ෂර අගයන්):**
  * **[English Medium Text]:** "In the hexadecimal number system, ten digits are used from 0 to 9 and for the other 6 digits, A, B, C, D, E and F symbols are used. Here, A, B, C, D, E and F are used to represent 10, 11, 12, 13, 14 and 15."
  * **[Sinhala Medium Text]:** "ෂඩ්දශමය සංඛ්‍යා පද්ධතියේ දී 0 සිට 9 දක්වා ඉලක්කම් 10 ක් ද, ඉතිරි ඉලක්කම් 6 සඳහා A, B, C, D, E සහ F සංකේත ද භාවිත කෙරේ. මෙහි දී A, B, C, D, E සහ F පිළිවෙළින් 10, 11, 12, 13, 14 සහ 15 නිරූපණය කිරීමට යොදා ගැනේ."

---

### 3.3 Most and Least Significant Values (වැඩිම හා අඩුම රිසි/ෆෙසිසි සංඛ්‍යාංක හා බිටු)

#### 3.3.1 Most Significant Digit (MSD) and Least Significant Digit (LSD)
* **[English Medium Text]:** "When a whole number is read from left to right, the number in the right most end is the least significant positional value and the number in the left most end which is not 0 is the most significant positional value. In decimal numbers, the value in the right extreme after the decimal point which is not 0 becomes the least significant positional value and the number in the left extreme of the decimal point which is not 0 becomes the most significant positional value."
* **[Sinhala Medium Text]:** "පූර්ණ සංඛ්‍යාවක් ජ්වමේ සිට දකුණට කියවීමේ දී දකුණු කෙළවරේම පිහිටි අගය අඩුම ෆෙසිසි සංඛ්‍යාංකය (LSD) වන අතර ජ්වම් කෙළවරින්ම පිහිටි ශූන්‍ය නොවන අගය වැඩිම ෆෙසිසි සංඛ්‍යාංකය (MSD) වේ. දශම සංඛ්‍යාවල දී දශම තිතට දකුණු පසින් ඈතින්ම පිහිටි ශූන්‍ය නොවන අගය අඩුම ෆෙසිසි සංඛ්‍යාංකය වන අතර දශම තිතට ජ්වම් පසින් ඈතින්ම පිහිටි ශූන්‍ය නොවන අගය වැඩිම ෆෙසිසි සංඛ්‍යාංකය වේ."

#### 3.3.2 Most Significant Bit (MSB) and Least Significant Bit (LSB)
* **[English Medium Text]:** "Only the Binary Number System is used to find the most significant bit (MSB) and the least significant bit (LSB). In a whole number, read from left to right, the value in the right extreme is the least significant bit and the value in the left extreme which is not 0 is the most significant bit. In binary decimal numbers, the value in the right extreme of the decimal point which is not 0 is the least significant bit and the value in the left extreme of the decimal point which is not 0 is the most significant bit."
* **[Sinhala Medium Text]:** "වැඩිම (MSB) හා අඩුම (LSB) ෆෙසිසි බිටුව තීරණය කිරීමේ දී ද්විමය සංඛ්‍යා පද්ධතිය සඳහා පමණක් භාවිත කෙරේ. පූර්ණ ද්විමය සංඛ්‍යාවක ජ්වමේ සිට දකුණට කියවීමේ දී දකුණු කෙළවරේම පිහිටි අගය අඩුම ෆෙසිසි බිටුව (LSB) වන අතර ජ්වම් කෙළවරින්ම පිහිටි ශූන්‍ය නොවන අගය වැඩිම ෆෙසිසි බිටුව (MSB) වේ."

---

### 3.4 & 3.5 Number System Conversions (සංඛ්‍යා පද්ධති අතර පරිවර්තනය)

#### Conversion Rules & Methods (පරිවර්තන නීති සහ ක්‍රම):

1. **Decimal to Binary / Octal / Hexadecimal (දශමය සංඛ්‍යා වෙනත් mdොහවලට හැරවීම):**
   * **[English Medium Text]:** "Divide the given decimal number by the target base (2, 8, or 16) until the quotient is 0. Write down all the remainders from bottom to top to form the converted number."
   * **[Sinhala Medium Text]:** "ලැබෙන ලබ්ධිය ශූන්‍ය වන තෙක් ලබා දී ඇති දශමය සංඛ්‍යාව අදාළ mdොහයෙන් (2, 8, හෝ 16) බෙදා ලැබෙන ශේෂයන් යට සිට ඉහළට (අග සිට මුලට) සටහන් කරන්න."

2. **Binary / Octal / Hexadecimal to Decimal (වෙනත් mdොහ දශමය සංඛ්‍යාවලට හැරවීම):**
   * **[English Medium Text]:** "Multiply each digit by its corresponding positional weight ($2^n, 8^n, 16^n$) and sum all the values together."
   * **[Sinhala Medium Text]:** "එක් එක් සංඛ්‍යාංකය එහි ස්ථානීය nr සාධකයෙන් ($2^n, 8^n, 16^n$) ගුණ කර ලැබෙන අගයන් සියල්ල එකතු කරන්න."

3. **Binary to Octal & Octal to Binary (ද්විමය හා අෂ්ටමය අතර පරිවර්තනය - 3 Bits):**
   * **[English Medium Text]:** "Since $8 = 2^3$, three binary bits represent one octal digit. Group binary bits into clusters of 3 from right to left (add leading 0s if necessary) and convert each cluster to an octal digit."
   * **[Sinhala Medium Text]: $8 = 2^3$ වන බැවින් අෂ්ටමය සංඛ්‍යාංකයක් නිරූපණයට ද්විමය බිටු 3 ක් භාවිත වේ. දකුණේ සිට ජ්වමට බිටු 3 බැගින් කාණ්ඩ කර (අවශ්‍ය නම් 0 යොදා) එකී කාණ්ඩ අෂ්ටමය සංඛ්‍යාංක බවට පත් කරන්න."

4. **Binary to Hexadecimal & Hexadecimal to Binary (ද්විමය හා ෂඩ්දශමය අතර පරිවර්තනය - 4 Bits):**
   * **[English Medium Text]:** "Since $16 = 2^4$, four binary bits represent one hexadecimal digit. Group binary bits into clusters of 4 from right to left and convert each cluster to a hexadecimal character (0-9, A-F)."
   * **[Sinhala Medium Text]: $16 = 2^4$ වන බැවින් ෂඩ්දශමය සංඛ්‍යාංකයක් නිරූපණයට ද්විමය බිටු 4 ක් භාවිත වේ. දකුණේ සිට ජ්වමට බිටු 4 බැගින් කාණ්ඩ කර අදාළ ෂඩ්දශමය සංකේතය (0-9, A-F) ලියන්න."

5. **Octal to Hexadecimal & Hexadecimal to Octal (අෂ්ටමය හා ෂඩ්දශමය අතර පරිවර්තනය):**
   * **[English Medium Text]:** "Convert the starting number to binary first (3 bits per octal digit or 4 bits per hexadecimal digit), then regroup into 4-bit clusters (for hex) or 3-bit clusters (for octal)."
   * **[Sinhala Medium Text]:** "පළමුව ලබා දී ඇති සංඛ්‍යාව ද්විමය බවට පත් කර (අෂ්ටමය සඳහා බිටු 3 බැගින් / ෂඩ්දශමය සඳහා බිටු 4 බැගින්), පසුව නැවත බිටු 4 බැගින් (ෂඩ්දශමය සඳහා) හෝ බිටු 3 බැගින් (අෂ්ටමය සඳහා) කාණ්ඩ කරන්න."

---

### 3.6 Data Storage Capacity & Capacity Conversions (දත්ත ආචයන ධාරිතාව සහ ධාරිතා පරිවර්තන)

#### Fundamental Capacity Units & Exact Mathematical Formulas (මූලික ධාරිතා ඒකක සහ ගණිතමය සූත්‍ර)

* **Bit (බිටුව):** Smallest binary storage unit (`0` or `1`).
* **Nibble (නිබලය):** $4 	ext{ Bits} = rac{1}{2} 	ext{ Byte}$
* **Byte (බයිටය):** $8 	ext{ Bits}$
* **Kilobyte (KB):** $1024 	ext{ Bytes} = 2^{10} 	ext{ Bytes}$
* **Megabyte (MB):** $1024 	ext{ KB} = 1024 	imes 1024 	ext{ Bytes} = 1,048,576 	ext{ Bytes} = 2^{20} 	ext{ Bytes}$
* **Gigabyte (GB):** $1024 	ext{ MB} = 1024 	imes 1024 	ext{ KB} = 1024 	imes 1024 	imes 1024 	ext{ Bytes} = 1,073,741,824 	ext{ Bytes} = 2^{30} 	ext{ Bytes}$
* **Terabyte (TB):** $1024 	ext{ GB} = 1024 	imes 1024 	imes 1024 	imes 1024 	ext{ Bytes} = 1,099,511,627,776 	ext{ Bytes} = 2^{40} 	ext{ Bytes}$
* **Petabyte (PB):** $1024 	ext{ TB} = 2^{50} 	ext{ Bytes}$

#### Step-by-Step Capacity Conversion Examples (නියමිත ධාරිතා පරිවර්තන උදාහරණ)

1. **Converting Gigabytes (GB) to Bytes (e.g., 4 GB in Bytes):**
   * $1 	ext{ GB} = 1024 	imes 1024 	imes 1024 	ext{ Bytes} = 2^{30} 	ext{ Bytes}$
   * $4 	ext{ GB} = 4 	imes (1024 	imes 1024 	imes 1024) 	ext{ Bytes} = 4 	imes 2^{30} 	ext{ Bytes} = 4,294,967,296 	ext{ Bytes}$

2. **Converting Terabytes (TB) to Kilobytes (KB) (e.g., 1 TB in KB - 2023 O/L Exam):**
   * $1 	ext{ TB} = 1024 	ext{ GB}$
   * $1024 	ext{ GB} = 1024 	imes 1024 	ext{ MB}$
   * $1024 	imes 1024 	ext{ MB} = 1024 	imes 1024 	imes 1024 	ext{ KB}$
   * Therefore, $1 	ext{ TB} = 1024 	imes 1024 	imes 1024 	ext{ KB}$

3. **Converting Megabytes (MB) to Bytes (e.g., 256 MB in Bytes):**
   * $256 	ext{ MB} = 256 	imes 1024 	imes 1024 	ext{ Bytes} = 2^8 	imes 2^{20} 	ext{ Bytes} = 2^{28} 	ext{ Bytes}$

#### Textbook Table 3.14: Storage Units, Exact Bytes & Text Page Equivalences (පෙළපොතේ 3.14 වගුව)

| Name (නම) | Abbreviation (සංක්ෂිප්තය) | Approximate Bytes (ආසන්න nhsg) | Exact Bytes (නිවැරදි nhsg) | Approximate Text Pages (ආසන්න A4 පිටු) |
| :--- | :--- | :--- | :--- | :--- |
| **Byte** | B | One (එකක්) | $1$ | 1 character |
| **Kilobyte** | KB | One Thousand (දහසක්) | $1,024 = 2^{10}$ | $rac{1}{2}$ A4 page |
| **Megabyte** | MB | One Million (මිලියනයක්) | $1,048,576 = 2^{20}$ | 500 A4 pages |
| **Gigabyte** | GB | One Billion (බිලියනයක්) | $1,073,741,824 = 2^{30}$ | 500,000 A4 pages |
| **Terabyte** | TB | One Trillion (ට්‍රිලියනයක්) | $1,099,511,627,776 = 2^{40}$ | 500,000,000 A4 pages |

---

### 3.7 Coding Systems in Computers (පරිගණකවල භාවිත වන කේත ක්‍රම)

#### Comparison of Computer Coding Schemes (කේත ක්‍රම සසඳා බැලීම)

| Code System (කේත ක්‍රමය) | Full Name (සම්පූර්ණ නමය) | Number of Bits Used (භාවිත වන බිටු ගණන) | Total Representable Symbols (නිරූපණය කළ හැකි සංකේත ගණන) | Key Features & Applications (ප්‍රධාන ලක්ෂණ සහ යෙදීම්) |
| :--- | :--- | :--- | :--- | :--- |
| **BCD** | Binary Coded Decimal | 4 Bits | $2^4 = 16$ symbols | Used in early computing; represents decimal digits 0 to 9. |
| **ASCII** | American Standard Code for Information Interchange | 7 Bits | $2^7 = 128$ characters | Approved by ANSI; represents English text and control characters. |
| **EBCDIC** | Extended Binary Coded Decimal Interchange Code | 8 Bits | $2^8 = 256$ characters | Used primarily in IBM Mainframe computers. |
| **Unicode** | Universal Character Encoding | 16 Bits | $2^{16} = 65,536$ symbols | Initiated by ISO & Unicode Consortium; represents all international languages (Sinhala, Tamil, Chinese, Japanese) and emojis. |

---

# SECTION B: Complete O/L Past Paper Question Extraction (2020 – 2025)

### 2.1 Questions on Number System Conversions & Comparisons

#### Question 01 (2020 O/L Paper I - Question 33)
* **Year & Question No:** 2020 O/L Paper I - Question 33
* **English Medium Question:**
  "33. Which of the following contains numbers in ascending order?
  (1) $64_{16}, 226_8, 200_{10}, 101011_2$
  (2) $101011_2, 64_{16}, 226_8, 200_{10}$
  (3) $101011_2, 64_{16}, 200_{10}, 226_8$
  (4) $200_{10}, 226_8, 101011_2, 64_{16}$"
* **Sinhala Medium Question:**
  "33. පහත කුමන වරණයෙහි දී ඇති සංඛ්‍යා හතරෙහි ආරෝහණ පටිපාටියට දක්වේ ද?
  (1) $64_{16}, 226_8, 200_{10}, 101011_2$
  (2) $101011_2, 64_{16}, 226_8, 200_{10}$
  (3) $101011_2, 64_{16}, 200_{10}, 226_8$
  (4) $200_{10}, 226_8, 101011_2, 64_{16}$"

#### Question 02 (2020 O/L Paper II - Question 01 (iii) (a))
* **Year & Question No:** 2020 O/L Paper II - Question 01 (iii) (a)
* **English Medium Question:**
  "1. (iii) (a) Convert the octal number $867_8$ to its binary equivalent. Show the major steps of your calculation." *(Note: Official paper text)*
* **Sinhala Medium Question:**
  "1. (iii) (a) $867_8$ අෂ්ටමය සංඛ්‍යාව එහි ද්විමය තුල්‍ය සංඛ්‍යාවට පරිවර්තනය කරන්න. ඔබේ ගණනය කිරීමේ ප්‍රධාන පියවර දක්වන්න."

#### Question 03 (2021 O/L Paper II - Question 01 (iii) (a))
* **Year & Question No:** 2021 O/L Paper II - Question 01 (iii) (a)
* **English Medium Question:**
  "1. (iii) (a) Convert $47_{10}$ to its binary equivalent."
* **Sinhala Medium Question:**
  "1. (iii) (a) $47_{10}$ හි ද්විමය තුල්‍ය සංඛ්‍යාවට පරිවර්තනය කරන්න."

#### Question 04 (2022 O/L Paper I - Question 06)
* **Year & Question No:** 2022 O/L Paper I - Question 06
* **English Medium Question:**
  "6. Which of the following is the largest?
  (1) $1000 0100_2$   (2) $15_8$   (3) $85_{10}$   (4) $C2_{16}$"
* **Sinhala Medium Question:**
  "6. පහත දැක්වෙන ඒවායින් විශාලතම අගය කුමක්ද?
  (1) $1000 0100_2$   (2) $15_8$   (3) $85_{10}$   (4) $C2_{16}$"

#### Question 05 (2022 O/L Paper I - Question 07)
* **Year & Question No:** 2022 O/L Paper I - Question 07
* **English Medium Question:**
  "7. Which of the following is the decimal equivalent of binary $1000 0101_2$?
  (1) $85_{10}$   (2) $133_{10}$   (3) $161_{10}$   (4) $266_{10}$"
* **Sinhala Medium Question:**
  "7. $1000 0101_2$ ද්විමය සංඛ්‍යාවේ දශමය තුල්‍ය අගය කුමක්ද?
  (1) $85_{10}$   (2) $133_{10}$   (3) $161_{10}$   (4) $266_{10}$"

#### Question 06 (2022 O/L Paper I - Question 08)
* **Year & Question No:** 2022 O/L Paper I - Question 08
* **English Medium Question:**
  "8. Which of the following is the hexadecimal equivalent of octal $1156_8$?
  (1) $26E_{16}$   (2) $484_{16}$   (3) $109C_{16}$   (4) $2204_{16}$"
* **Sinhala Medium Question:**
  "8. $1156_8$ අෂ්ටමය සංඛ්‍යාවේ ෂඩ්දශමය තුල්‍ය අගය කුමක්ද?
  (1) $26E_{16}$   (2) $484_{16}$   (3) $109C_{16}$   (4) $2204_{16}$"

#### Question 07 (2023 O/L Paper I - Question 06)
* **Year & Question No:** 2023 O/L Paper I - Question 06
* **English Medium Question:**
  "6. Which of the following is the octal equivalent of decimal $216_{10}$?
  (1) $40_8$   (2) $43_8$   (3) $73_8$   (4) $330_8$"
* **Sinhala Medium Question:**
  "6. දශමය $216_{10}$ ට තුල්‍ය අෂ්ටමය සංඛ්‍යාව කුමක්ද?
  (1) $40_8$   (2) $43_8$   (3) $73_8$   (4) $330_8$"

#### Question 08 (2023 O/L Paper I - Question 07)
* **Year & Question No:** 2023 O/L Paper I - Question 07
* **English Medium Question:**
  "7. Which of the following is the decimal equivalent of binary $1000 1000_2$?
  (1) $24_{10}$   (2) $136_{10}$   (3) $272_{10}$   (4) $1024_{10}$"
* **Sinhala Medium Question:**
  "7. ද්විමය $1000 1000_2$ ට තුල්‍ය දශමය සංඛ්‍යාව කුමක්ද?
  (1) $24_{10}$   (2) $136_{10}$   (3) $272_{10}$   (4) $1024_{10}$"

#### Question 09 (2023 O/L Paper I - Question 08)
* **Year & Question No:** 2023 O/L Paper I - Question 08
* **English Medium Question:**
  "8. Which of the following is the hexadecimal equivalent of octal $1572_8$?
  (1) $DE8_{16}$   (2) $37A_{16}$   (3) $3710_{16}$   (4) $12562_{16}$"
* **Sinhala Medium Question:**
  "8. අෂ්ටමය $1572_8$ ට තුල්‍ය ෂඩ්දශමය සංඛ්‍යාව කුමක්ද?
  (1) $DE8_{16}$   (2) $37A_{16}$   (3) $3710_{16}$   (4) $12562_{16}$"

#### Question 10 (2024 O/L Paper I - Question 06)
* **Year & Question No:** 2024 O/L Paper I - Question 06
* **English Medium Question:**
  "6. Which of the following is the octal equivalent of binary $1000110_2$?
  (1) $46_8$   (2) $70_8$   (3) $106_8$   (4) $430_8$"
* **Sinhala Medium Question:**
  "6. ද්විමය $1000110_2$ ට තුල්‍ය අෂ්ටක සංඛ්‍යාව කුමක්ද?
  (1) $46_8$   (2) $70_8$   (3) $106_8$   (4) $430_8$"

#### Question 11 (2024 O/L Paper I - Question 07)
* **Year & Question No:** 2024 O/L Paper I - Question 07
* **English Medium Question:**
  "7. Which of the following is the decimal equivalent of binary $10001000_2$?
  (1) $64_{10}$   (2) $132_{10}$   (3) $136_{10}$   (4) $260_{10}$"
* **Sinhala Medium Question:**
  "7. ද්විමය $10001000_2$ ට තුල්‍ය දශමය සංඛ්‍යාව කුමක්ද?
  (1) $64_{10}$   (2) $132_{10}$   (3) $136_{10}$   (4) $260_{10}$"

#### Question 12 (2024 O/L Paper II - Question 01 (iii))
* **Year & Question No:** 2024 O/L Paper II - Question 01 (iii)
* **English Medium Question:**
  "1. (iii) (a) Write down the binary equivalent of $74_{10}$.
  (b) Write down the hexadecimal equivalent of $1046_8$."
* **Sinhala Medium Question:**
  "1. (iii) (a) $74_{10}$ හි ද්විමය තුල්‍ය සංඛ්‍යාව ලියන්න.
  (b) $1046_8$ හි ෂඩ්දශමය තුල්‍ය සංඛ්‍යාව ලියන්න."

---

### 2.2 Questions on Character Coding Schemes (ASCII & Unicode)

#### Question 13 (2020 O/L Paper II - Question 01 (iii) (b))
* **Year & Question No:** 2020 O/L Paper II - Question 01 (iii) (b)
* **English Medium Question:**
  "1. (iii) (b) If $1011010_2$ represents character 'Z' in ASCII code, what is the ASCII code for character 'X'?"
* **Sinhala Medium Question:**
  "1. (iii) (b) $1011010_2$ මගින් ASCII හි 'Z' නිරූපණය වේ නම්, 'X' අක්ෂරයේ ASCII කේතය කුමක්ද?"

#### Question 14 (2021 O/L Paper II - Question 01 (iii) (b))
* **Year & Question No:** 2021 O/L Paper II - Question 01 (iii) (b)
* **English Medium Question:**
  "1. (iii) (b) Following is an extract from the ASCII table. Write down the correct octal value replacement for the '?' symbol.
  Character: a, Decimal: 97, Hexadecimal: 61, Binary: 1100001, Octal: ?"
* **Sinhala Medium Question:**
  "1. (iii) (b) මෙහි දැක්වෙන්නේ ASCII වගුවේ උපුටා ගැනීමකි. '?' ලකුණින් දක්වා ඇති දෙයට අදාළ අෂ්ටක අගය ලියා දක්වන්න.
  අක්ෂරය: a, දශමය: 97, ෂඩ්දශමය: 61, ද්විමය: 1100001, අෂ්ටමය: ?"

#### Question 15 (2022 O/L Paper I - Question 10)
* **Year & Question No:** 2022 O/L Paper I - Question 10
* **English Medium Question:**
  "10. Consider the character codes: O - 79, / - 47, L - 76, o - 111, l - 108. Which of the following will be the ASCII representation of O/L in binary?
  (1) 1001111 1001100
  (2) 1101111 1101100
  (3) 1001111 0101111 1001100
  (4) 1101111 0101111 1101100"
* **Sinhala Medium Question:**
  "10. O - 79, / - 47, L - 76, o - 111, l - 108 යන අනුලක්ෂණ අගයන් සලකන්න. O/L හි ASCII නිරූපණය ද්විමය ලෙස පහත කවරක දැක්වේද?
  (1) 1001111 1001100
  (2) 1101111 1101100
  (3) 1001111 0101111 1001100
  (4) 1101111 0101111 1101100"

#### Question 16 (2023 O/L Paper I - Question 10)
* **Year & Question No:** 2023 O/L Paper I - Question 10
* **English Medium Question:**
  "10. Which of the following statements are true regarding the ASCII coding system?
  A – Characters E and e are represented using the same code.
  B – # and $ symbols have different codes.
  C – Sinhala characters do not have ASCII codes.
  (1) B only   (2) A and C only   (3) B and C only   (4) All A, B and C"
* **Sinhala Medium Question:**
  "10. ASCII කේත ක්‍රමය සම්බන්ධයෙන් පහත කවර ප්‍රකාශ නිවැරදි වේද?
  A – අක්ෂර E සහ e එකම කේතයෙන් නිරූපණය වේ.
  B – # සහ $ සංකේත සඳහා වෙනස් කේත ඇත.
  C – සිංහල අක්ෂර සඳහා ASCII කේත නොමැත.
  (1) B පමණක්   (2) A සහ C පමණක්   (3) B සහ C පමණක්   (4) A, B සහ C සියල්ලම"

#### Question 17 (2024 O/L Paper I - Question 09)
* **Year & Question No:** 2024 O/L Paper I - Question 09
* **English Medium Question:**
  "9. Consider the following statements P and Q:
  P – When a character (e.g. 'A') is entered into a digital computer, it is converted to a unique pattern of 0s and 1s.
  Q – ASCII code is used to assign standard numerical values for 128 characters used in computers.
  Which of the following is valid regarding the above statements?
  (1) Both statements P and Q are correct and the ASCII code described in Statement Q assists the task mentioned in Statement P.
  (2) Both statements P and Q are correct but the points presented in the two statements are not related.
  (3) Statement P is correct but statement Q is incorrect.
  (4) Both statements are incorrect."
* **Sinhala Medium Question:**
  "9. පහත P සහ Q ප්‍රකාශ සලකන්න:
  P – කෙනෙකු සංඛ්‍යාංක පරිගණකයකට (digital computer) යම් අනුලක්ෂණයක් (A යැයි සිතන්න) ඇතුළත් කළ විට, එය 0 සහ 1 න් සෑදුණු විශේෂිත රටාවකට පරිවර්තනය වේ.
  Q – පරිගණකයක භාවිත වන අනුලක්ෂණ 128 ක් සඳහා සම්මත සංඛ්‍යාත්මක අගයන් පැවරීමට ASCII කේතය භාවිත කෙරේ.
  ඉහත ප්‍රකාශ සම්බන්ධයෙන් පහත කවරක් වලංගු වේද?
  (1) P සහ Q ප්‍රකාශ දෙකම නිවැරදි වන අතර, Q ප්‍රකාශයේ විස්තර කෙරෙන ASCII කේතය, P ප්‍රකාශයේ සඳහන් කාර්යය සඳහා උපකාරී වේ.
  (2) P සහ Q ප්‍රකාශ දෙකම නිවැරදි වන නමුත් ඒවායින් සඳහන් කෙරෙන කරුණු අතර සබඳතාවක් නැත.
  (3) P ප්‍රකාශය නිවැරදි වන නමුත් Q ප්‍රකාශය වැරදි ය.
  (4) ප්‍රකාශ දෙකම වැරදි ය."

---

### 2.3 Questions on Data Storage Capacity & Calculation

#### Question 18 (2023 O/L Paper I - Question 09)
* **Year & Question No:** 2023 O/L Paper I - Question 09
* **English Medium Question:**
  "9. One Terabyte (1 TB) is equal to
  (1) $1024 \text{ KB}.$
  (2) $1024 \times 1024 \text{ KB}.$
  (3) $1024 \times 1024 \times 1024 \text{ KB}.$
  (4) $1024 \times 1024 \times 1024 \times 1024 \text{ KB}.$"
* **Sinhala Medium Question:**
  "9. ටෙරා බයිට් 1 ක් (1 TB) සමාන වන්නේ,
  (1) $1024 \text{ KB} \text{ වලට වේ.}$
  (2) $1024 \times 1024 \text{ KB} \text{ වලට වේ.}$
  (3) $1024 \times 1024 \times 1024 \text{ KB} \text{ වලට වේ.}$
  (4) $1024 \times 1024 \times 1024 \times 1024 \text{ KB} \text{ වලට වේ.}"

#### Question 19 (2024 O/L Paper I - Question 08)
* **Year & Question No:** 2024 O/L Paper I - Question 08
* **English Medium Question:**
  "8. Rani wants to store the following files in a USB Flash drive:
  trees.pdf (500 MB), config.txt (534 bytes), nickels.mp4 (2 GB), report.docx (900 KB)
  Which of the following is the lowest capacity USB drive that is sufficient to store them?
  (1) 2 GB   (2) 4 GB   (3) 8 GB   (4) 16 GB"
* **Sinhala Medium Question:**
  "8. USB ෆ්ලෑෂ් ධාවකයෙක පහත ගොනු ආචයනය කිරීමට රාණිට අවශ්‍ය වේ:
  Trees.pdf (500MB), config.txt (534 bytes), nickels.mp4 (2GB), report.docx (900 KB)
  ඒවා ආචයනය කිරීමට ෑහෙන අවම ධාරිතාවයක් සහිත USB ධාවකය පහත කවරක් ද?
  (1) 2 GB   (2) 4 GB   (3) 8 GB   (4) 16 GB"

---

### 2.4 Unexamined Sub-topics (2020 – 2025)
* **Note:** No direct past paper questions were found from 2020 to 2025 for:
  - BCD (Binary Coded Decimal) conversion questions or EBCDIC questions.
  - Finding Most Significant Bit (MSB) / Least Significant Bit (LSB) directly in structured essay questions.


### 2.2 Questions on Data Storage Capacity & File Calculations

#### Question 05 (2020 O/L Paper I - Question 03)
* **Year & Question No:** 2020 O/L Paper I - Question 03
* **English Medium Question:**
  "3. Which of the following represents the units of measurements of data in computer systems in the ascending order of their size?
  (1) Bit, Byte, Kilobyte, Terabyte
  (2) Byte, Bit, Kilobyte, Terabyte
  (3) Megabyte, Kilobyte, Bit, Byte
  (4) Terabyte, Gigabyte, Megabyte, Kilobyte"
* **Sinhala Medium Question:**
  "3. පරිගණක පද්ධතිවල දත්ත මැනීමේ ඒකක ඒවායේ ප්‍රමාණයේ ආරෝහණ පටිපාටියට දක්වා ඇත්තේ පහත සඳහන් කුමක ද?
  (1) බිටුව, බයිටය, කිලෝබයිටය, ටෙරාබයිටය
  (2) බයිටය, බිටුව, කිලෝබයිටය, ටෙරාබයිටය
  (3) මෙගාබයිටය, කිලෝබයිටය, බිටුව, බයිටය
  (4) ටෙරාබයිටය, ගිගාබයිටය, මෙගාබයිටය, කිලෝබයිටය"

#### Question 06 (2022 O/L Paper I - Question 09)
* **Year & Question No:** 2022 O/L Paper I - Question 09
* **English Medium Question:**
  "9. Amara wants to copy the following four files (with the given file sizes) to a USB drive:
  `invitation.doc (15kB)`, `yesterday.mp3 (26MB)`, `concert.mp4 (150MB)`, `tajmahal.jpg (28kB)`
  From the following four empty USB drives with the given capacities, which is the most economical drive that can be used to store the above files?
  (1) 1GB            (2) 2GB            (3) 128MB           (4) 256MB"
* **Sinhala Medium Question:**
  "9. අමරට පහත දැක්වෙන ගොනු හතර (දී ඇති ගොනු ප්‍රමාණ සහිත) USB ධාවකයකට පිටපත් කිරීමට අවශ්‍ය වේ:
  `invitation.doc (15kB)`, `yesterday.mp3 (26MB)`, `concert.mp4 (150MB)`, `tajmahal.jpg (28kB)`
  දී ඇති ධාරිතාවන් සහිත පහත දැක්වෙන හිස් USB ධාවක හතරෙන්, ඉහත ගොනු තැන්පත් කිරීමට භාවිත කළ හැකි වඩාත්ම පිරිවැය සාපේක්ෂ (අඩුම මිල) ධාවකය කුමක්ද?
  (1) 1GB            (2) 2GB            (3) 128MB           (4) 256MB"

#### Question 07 (2023 O/L Paper I - Question 09)
* **Year & Question No:** 2023 O/L Paper I - Question 09
* **English Medium Question:**
  "9. One Terabyte (1 TB) is equal to
  (1) 1024 KB.
  (2) 1024 × 1024 KB.
  (3) 1024 × 1024 × 1024 KB.
  (4) 1024 × 1024 × 1024 × 1024 KB."
* **Sinhala Medium Question:**
  "9. ටෙරා nhsg 1 ක් (1 TB) සමාන වන්නේ,
  (1) 1024 KB වලට වේ.
  (2) 1024 × 1024 KB වලට වේ.
  (3) 1024 × 1024 × 1024 KB වලට වේ.
  (4) 1024 × 1024 × 1024 × 1024 KB වලට වේ."

#### Question 08 (2024 O/L Paper I - Question 08)
* **Year & Question No:** 2024 O/L Paper I - Question 08
* **English Medium Question:**
  "8. Rani wants to store the following files in a USB Flash drive:
  `trees.pdf (500 MB)`, `config.txt (534 bytes)`, `nickels.mp4 (2 GB)`, `report.docx (900 KB)`
  Which of the following is the lowest capacity USB drive that is sufficient to store them?
  (1) 2 GB    (2) 4 GB   (3) 8 GB   (4) 16 GB"
* **Sinhala Medium Question:**
  "8. USB ෆ්ලෑෂ් ධාවකයක පහත ගොනු ආචයනය කිරීමට රාණිට අවශ්‍ය වේ:
  `trees.pdf (500 MB)`, `config.txt (534 bytes)`, `nickels.mp4 (2 GB)`, `report.docx (900 KB)`
  ඒවා ආචයනය කිරීමට සෑහෙන අඩුම ධාරිතාව සහිත USB ධාවකය පහත කුමක්ද?
  (1) 2 GB    (2) 4 GB   (3) 8 GB   (4) 16 GB"

#### Question 09 (2025 O/L Paper I - Question 07)
* **Year & Question No:** 2025 O/L Paper I - Question 07
* **English Medium Question:**
  "7. A USB flash drive has 256 MB of free space. A video file of 0.3 GB, an image file of 300 KB, and a document file of 400 bytes need to be copied to this drive. Which of the following statements is correct?
  (1) Only the document file can be copied.
  (2) Only the image file and the document file can be copied.
  (3) Only the video file can be copied.
  (4) All three files can be copied."
* **Sinhala Medium Question:**
  "7. USB ෆ්ලෑෂ් ධාවකයක 256 MB ක නොමිලේ ඉඩ ප්‍රමාණයක් ඇත. 0.3 GB ක වීඩියෝ ගොනුවක්, 300 KB ක රූප ගොනුවක් සහ බයිට 400 ක ලේඛන ගොනුවක් මෙම ධාවකයට පිටපත් කළ යුතුය. පහත සඳහන් ප්‍රකාශවලින් නිවැරදි වන්නේ කුමක්ද?
  (1) ලේඛන ගොනුව පමණක් පිටපත් කළ හැක.
  (2) රූප ගොනුව සහ ලේඛන ගොනුව පමණක් පිටපත් කළ හැක.
  (3) වීඩියෝ ගොනුව පමණක් පිටපත් කළ හැක.
  (4) ගොනු තුනම පිටපත් කළ හැක."
