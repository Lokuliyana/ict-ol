# Grade 10 ICT - Lesson 07: Dual-Medium Study & Past Paper Guide

## Document Overview
This study and past paper guide provides verbatim, dual-medium coverage of **Grade 10 - Lesson 07: Electronic Spreadsheets (ඉලෙක්ට්‍රොනික පැතුරුම්පත්)** from the official Sri Lankan O/L ICT curriculum. All theory content and exam questions are extracted word-for-word from the Grade 10 English Medium Textbook (`ICT G-10 E.pdf`), Grade 10 Sinhala Medium Textbook (`ict g10 S.pdf`), and official G.C.E. O/L examination past papers (2020–2025).

---

# SECTION A: Complete Learning Guide & Short Notes (Comprehensive Theory)

### 7.1 Introduction to Electronic Spreadsheets (ඉලෙක්ට්‍රොනික පැතුරුම්පත් පිළිබඳ හැඳින්වීම)

#### Core Concept & Definition (මූලික සංකල්පය සහ අර්ථ දැක්වීම)
* **[English Medium Text]:** "Electronic Spreadsheet software is an application software designed to organize, analyze, store and manipulate data in tabular form (rows and columns). It performs automated mathematical calculations quickly and accurately using formulas and functions."
* **[Sinhala Medium Text]:** "දත්ත පේළි (Rows) සහ තීරු (Columns) සහිත වගුගත සටහනක සංවිධානය කිරීමට, විශ්ලේෂණය කිරීමට, තැන්පත් කිරීමට සහ සකස් කිරීමට නිර්මාණය කර ඇති යෙදවුම් මෘදුකාංග ඉලෙක්ට්‍රොනික පැතුරුම්පත් (Electronic Spreadsheets) ලෙස හැඳින්වේ. සූත්‍ර (Formulas) සහ ශ්‍රිත (Functions) භාවිතයෙන් ගණිතමය ගණනය කිරීම් වේගවත්ව හා නිවැරදිව සිදු කිරීම මෙහි ප්‍රධාන කාර්යයයි."

#### Evolution & Examples of Spreadsheet Software (පැතුරුම්පත් මෘදුකාංගවල පරිණාමය හා උදාහරණ)
* **First Electronic Spreadsheet (පළමු ඉලෙක්ට්‍රොනික පැතුරුම්පත):**
  * **[English Medium Text]:** "VisiCalc (Visible Calculator) created by Dan Bricklin and Bob Frankston in 1979 for Apple II computer was the first electronic spreadsheet."
  * **[Sinhala Medium Text]:** "1979 දී ඩෑන් බ්‍රික්ලින් (Dan Bricklin) සහ බොබ් ෆ්‍රෑන්ක්ස්ටන් (Bob Frankston) විසින් Apple II පරිගණකය සඳහා නිර්මාණය කරන ලද VisiCalc ලොව පළමු ඉලෙක්ට්‍රොනික පැතුරුම්පත් මෘදුකාංගය වේ."
* **Software Examples (මෘදුකාංග සඳහා උදාහරණ):**
  * **Proprietary Software (හිමිකාර මෘදුකාංග):** Microsoft Excel, Lotus 1-2-3, Corel Quattro Pro.
  * **Free and Open Source Software (නිදහස් හා විවෘත මෘදුකාංග):** LibreOffice Calc, OpenOffice Calc.
  * **Cloud-based / Web Spreadsheets (වලාකුළු / අන්තර්ජාල ආශ්‍රිත පැතුරුම්පත්):** Google Sheets, Microsoft Office 365 Excel Online.

#### Advantages of Electronic Spreadsheets (ඉලෙක්ට්‍රොනික පැතුරුම්පත්වල වාසි)
* **[English Medium Text]:**
  1. Ability to perform calculations automatically and accurately.
  2. Ability to quickly update results when data changes (Automatic Recalculation).
  3. Ability to present data visually using Charts and Graphs.
  4. Ability to store, sort, and filter large amounts of data efficiently.
  5. Built-in mathematical, statistical, financial, and logical functions.
* **[Sinhala Medium Text]:**
  1. ගණනය කිරීම් ස්වයංක්‍රීයව හා නිවැරදිව සිදු කිරීමේ හැකියාව.
  2. දත්ත වෙනස් කළ විට ප්‍රතිඵල ක්ෂණිකව යාවත්කාලීන වීම (Automatic Recalculation).
  3. ප්‍රස්ථාර (Charts) මගින් දත්ත දෘශ්‍යමාන ලෙස නිරූපණය කිරීමේ හැකියාව.
  4. විශාල දත්ත ප්‍රමාණයක් කාර්යක්ෂමව තැන්පත් කිරීම, වර්ග කිරීම (Sorting) සහ පෙරීම (Filtering).
  5. ගණිතමය, සංඛ්‍යාත්මක, මූල්‍යමය සහ තාර්කික ශ්‍රිත රාශියක් අඩංගු වීම.

---

### 7.2 User Interface Components & Structure (පරිශීලක අතුරුමුහුණතේ සංරචක)

```
+-------------------------------------------------------------------------+
| Title Bar: [ Workbook1 - Microsoft Excel / LibreOffice Calc ]          |
+-------------------------------------------------------------------------+
| Menu / Ribbon: [ File | Edit | View | Insert | Format | Data | Tools ]  |
+---------------------+---------------------------------------------------+
| Name Box: [ A1 ]    | Formula Bar: [ =SUM(B2:B10)                     ] |
+---------------------+---------------------------------------------------+
| Column Headers      |  A  |  B  |  C  |  D  |  E  |  F  | ... | XFD    |
+---------------------+-----+-----+-----+-----+-----+-----+-----+--------+
| Row 1               |     |     |     |     |     |     |     |        |
| Row 2               |     | [Active Cell: A1]   |     |     |        |
| Row 3               |     |     |     |     |     |     |     |        |
| ...                 |     |     |     |     |     |     |     |        |
| Row 1048576         |     |     |     |     |     |     |     |        |
+---------------------+-----+-----+-----+-----+-----+-----+-----+--------+
| Sheet Tabs: [ Sheet1 ] [ Sheet2 ] [ Sheet3 ]   [+] Status Bar: [ Ready ]|
+-------------------------------------------------------------------------+
```

#### Key Terms and Definitions (ප්‍රධාන පද හා අර්ථ දැක්වීම්)

1. **Workbook (කාර්ය පොත):**
   * **[English Medium Text]:** "A spreadsheet file is called a Workbook. A workbook contains one or more worksheets."
   * **[Sinhala Medium Text]:** "පැතුරුම්පත් ගොනුවක් කාර්ය පොතක් (Workbook) ලෙස හැඳින්වේ. කාර්ය පොතක් වැඩපත්‍රිකා (Worksheets) එකකින් හෝ කිහිපයකින් සමන්විත වේ."

2. **Worksheet (වැඩපත්‍රිකාව):**
   * **[English Medium Text]:** "A grid of rows and columns used to enter and manipulate data."
   * **[Sinhala Medium Text]:** "දත්ත ඇතුළත් කිරීමට සහ සකස් කිරීමට භාවිත වන පේළි සහ තීරු සහිත ජාලය වැඩපත්‍රිකාවක් (Worksheet) නම් වේ."

3. **Rows and Columns (පේළි සහ තීරු):**
   * **Rows (පේළි):** Horizontal lines identified by numbers (`1, 2, 3, ...`). Maximum rows = **1,048,576**.
   * **Columns (තීරු):** Vertical lines identified by letters (`A, B, C, ..., Z, AA, AB, ..., XFD`). Maximum columns = **16,384** (up to `XFD`).

4. **Cell & Active Cell (සෛල සහ සක්‍රීය සෛලය):**
   * **Cell (සෛලය):** The intersection of a row and a column. Example: `B5` (Column `B`, Row `5`).
   * **Active Cell (සක්‍රීය සෛලය):** The currently selected cell highlighted with a thick dark border where data is entered.

5. **Name Box (නම කොටුව / සෛල ලිපින කොටුව):**
   * **[English Medium Text]:** "Displays the cell address / reference of the currently selected active cell."
   * **[Sinhala Medium Text]:** "මේ වන විට තෝරාගෙන ඇති සක්‍රීය සෛලයේ ලිපිනය (Cell Address) නිරූපණය කරයි."

6. **Formula Bar (සූත්‍ර තීරුව):**
   * **[English Medium Text]:** "Displays the data, formula or function entered into the active cell."
   * **[Sinhala Medium Text]:** "සක්‍රීය සෛලයේ ඇතුළත් කර ඇති දත්ත, සූත්‍රය හෝ ශ්‍රිතය ප්‍රකාශයට පත් කරයි."

7. **Cell Range (සෛල පරාසය):**
   * **[English Medium Text]:** "A block of selected contiguous cells identified by top-left cell address and bottom-right cell address separated by a colon (`:`). Example: `A1:C5`."
   * **[Sinhala Medium Text]:** "එකිනෙකට මායිම් වූ සෛල සමූහයක් සෛල පරාසයක් (Cell Range) ලෙස හැඳින්වේ. මෙය වම් පස ඉහළම සෛල ලිපිනය සහ දකුණු පස පහළම සෛල ලිපිනය අතර කෝලනයක් (`:`) තැබීමෙන් නිරූපණය කෙරේ. උදා: `A1:C5`."

---

### 7.3 Data Types in Spreadsheets (පැතුරුම්පත්වල භාවිත වන දත්ත වර්ග)

| Data Type (දත්ත වර්ගය) | Description & Alignment (විස්තරය සහ පෙළගැස්ම) | Examples (උදාහරණ) |
| :--- | :--- | :--- |
| **Label / Text (ලේබල / පෙළ)** | Non-numeric text data used for headings. Automatically aligned to the **LEFT**. | `Name`, `Grade 10`, `Subject` |
| **Value / Number (අගය / සංඛ්‍යා)** | Numeric values used for mathematical calculations. Automatically aligned to the **RIGHT**. | `75`, `125.50`, `-45` |
| **Formula (සූත්‍ර)** | User-defined mathematical expressions. MUST begin with an equal sign (`=`). | `=A1+B1`, `=(C2*5)/100` |
| **Function (ශ්‍රිත)** | Pre-defined built-in mathematical/logical formulas. MUST begin with `=`. | `=SUM(A1:A10)`, `=AVERAGE(B1:B5)` |
| **Date & Time (දිනය සහ වේලාව)** | Specific date and time formats aligned to the **RIGHT**. | `2024-10-06`, `10:30 AM` |

---

### 7.4 Mathematical Operators & Order of Precedence (ගණිතමය මෙහෙයුම්කාරක සහ ප්‍රමුඛතාව)

#### Mathematical Operators (ගණිතමය මෙහෙයුම්කාරක)
* **Addition (එකතු කිරීම):** `+`
* **Subtraction (අඩු කිරීම):** `-`
* **Multiplication (ගුණ කිරීම):** `*`
* **Division (බෙදීම):** `/`
* **Exponentiation / Power (බල නැගීම):** `^`

#### Operator Precedence Order (ප්‍රමුඛතා අනුපිළිවෙල)
When evaluating spreadsheet formulas, calculations follow strict mathematical precedence:

```
  1. Parentheses / Brackets (වහන්)          :  ( )
  2. Exponentiation (බල නැගීම)             :  ^
  3. Multiplication & Division (ගුණ/බෙදීම්) :  * and /  (Left to Right)
  4. Addition & Subtraction (එකතු/අඩුකිරීම්):  + and -  (Left to Right)
```

#### Formula Evaluation Examples (සූත්‍ර ගණනය කිරීමේ උදාහරණ)
* **Example 1:** `=10 + 5 * 2`
  - Step 1: Multiplication first $ightarrow 5 	imes 2 = 10$
  - Step 2: Addition $ightarrow 10 + 10 = 20$
* **Example 2:** `=(10 + 5) * 2`
  - Step 1: Parentheses first $ightarrow (10 + 5) = 15$
  - Step 2: Multiplication $ightarrow 15 	imes 2 = 30$
* **Example 3:** `=20 / 4 + 2 ^ 3`
  - Step 1: Exponentiation first $ightarrow 2^3 = 8$
  - Step 2: Division $ightarrow 20 / 4 = 5$
  - Step 3: Addition $ightarrow 5 + 8 = 13$

---

### 7.5 Basic Functions in Spreadsheets (මූලික පැතුරුම්පත් ශ්‍රිත)

All functions MUST begin with an equal sign (`=`), followed by the **Function Name**, opening bracket `(`, **Cell Range / Arguments**, and closing bracket `)`.

#### 1. SUM Function (එකතුව සෙවීමේ ශ්‍රිතය)
* **Purpose:** Calculates the total sum of numbers in a cell range.
* **Syntax:** `=SUM(start_cell:end_cell)`
* **Examples:**
  * `=SUM(A1:A5)` $ightarrow$ Calculates sum of cells A1, A2, A3, A4, A5.
  * `=SUM(A1, B2, C3)` $ightarrow$ Calculates sum of specific individual cells.

#### 2. AVERAGE Function (සාමාන්‍යය සෙවීමේ ශ්‍රිතය)
* **Purpose:** Calculates the arithmetic mean average of numbers in a cell range.
* **Syntax:** `=AVERAGE(start_cell:end_cell)`
* **Example:** `=AVERAGE(B2:B10)` $ightarrow$ Sum of values divided by count of numeric cells.

#### 3. MAX Function (උපරිම අගය සෙවීමේ ශ්‍රිතය)
* **Purpose:** Finds the highest / maximum numeric value in a cell range.
* **Syntax:** `=MAX(start_cell:end_cell)`
* **Example:** `=MAX(C1:C20)` $ightarrow$ Returns the largest number in C1 to C20.

#### 4. MIN Function (අවම අගය සෙවීමේ ශ්‍රිතය)
* **Purpose:** Finds the lowest / minimum numeric value in a cell range.
* **Syntax:** `=MIN(start_cell:end_cell)`
* **Example:** `=MIN(C1:C20)` $ightarrow$ Returns the smallest number in C1 to C20.

#### 5. COUNT & COUNTA Functions (ගණනය කිරීමේ ශ්‍රිත)
* **`COUNT` Function:** Counts ONLY cells containing **numeric values** within a range.
  * **Syntax:** `=COUNT(start_cell:end_cell)`
* **`COUNTA` Function:** Counts ALL **non-empty cells** (numbers, text, symbols) within a range.
  * **Syntax:** `=COUNTA(start_cell:end_cell)`

#### 6. Simple IF Function (තර්කික IF ශ්‍රිතය)
* **Purpose:** Evaluates a logical condition and returns one value if TRUE, and another value if FALSE.
* **Syntax:** `=IF(Logical_Test, Value_if_True, Value_if_False)`
* **Example:** `=IF(C2>=50, "Pass", "Fail")`
  * If cell `C2` contains `75` $ightarrow$ Returns `"Pass"`.
  * If cell `C2` contains `42` $ightarrow$ Returns `"Fail"`.

---

### 7.6 Cell Referencing Methods (සෛල යොමු කිරීමේ ක්‍රම)

Cell referencing defines how a cell address behaves when copied from one cell to another.

#### 1. Relative Cell Reference (සාපේක්ෂ සෛල යොමු කිරීම්)
* **[English Medium Text]:** "The cell address automatically changes relative to the new row or column position when copied."
* **[Sinhala Medium Text]:** "සූත්‍රයක් හෝ ශ්‍රිතයක් වෙනත් සෛලයකට පිටපත් කිරීමේ දී, පිටපත් කරන ස්ථානයට සාපේක්ෂව සෛල ලිපිනය ස්වයංක්‍රීයව වෙනස් වේ."
* **Format:** `A1`, `B5`
* **Example:** Formula `=A1+B1` in cell `C1` copied to cell `C2` becomes `=A2+B2`.

#### 2. Absolute Cell Reference (නිරපේක්ෂ සෛල යොමු කිරීම්)
* **[English Medium Text]:** "The cell address remains fixed and unchanged regardless of where it is copied. Indicated using the Dollar sign (`$`) before both Column letter and Row number."
* **[Sinhala Medium Text]:** "සූත්‍රයක් වෙනත් ඕනෑම සෛලයකට පිටපත් කළ ද සෛල ලිපිනය වෙනස් නොවී ස්ථාවරව පවතී. මෙහිදී තීරු අක්ෂරයට සහ පේළි අංකයට ඉදිරියෙන් ඩොලර් සලකුණ (`$`) යොදනු ලබයි."
* **Format:** `$A$1`, `$C$5`
* **Example:** Formula `=B2*$D$1` in cell `C2` copied to cell `C3` becomes `=B3*$D$1`.

#### 3. Mixed Cell Reference (මිශ්‍ර සෛල යොමු කිරීම්)
* **[English Medium Text]:** "Locks either only the column or only the row using the dollar sign (`$`)."
* **[Sinhala Medium Text]:** "තීරු අක්ෂරය හෝ පේළි අංකය යන දෙකෙන් එකක් පමණක් ස්ථාවරව තබා ගනිමින් ඩොලර් සලකුණ යොදනු ලබයි."
* **Format:** `$A1` (Column locked, Row relative) OR `A$1` (Row locked, Column relative).

---

### 7.7 Formatting & Charts (හැඩසැසීම සහ ප්‍රස්ථාර)

#### Cell Formatting Tools (සෛල හැඩසැසීමේ මෙවලම්)
* **Merge & Center (එක් කිරීම සහ මධ්‍යගත කිරීම):** Merges multiple selected cells into a single large cell and centers the text.
* **Wrap Text (පෙළ ඔතා තැබීම):** Displays long text on multiple lines within a single cell.
* **Number Formatting:** Setting currency symbols (`Rs.`, `$`), decimal places (`2` decimal places), percentage (`%`), date formats.

#### Spreadsheet Chart Types (ප්‍රස්ථාර වර්ග)
* **Column Chart (තීරු ප්‍රස්ථාර):** Compares discrete values vertically.
* **Bar Chart (තීරු/තති ප්‍රස්ථාර):** Compares discrete values horizontally.
* **Line Chart (රේඛීය ප්‍රස්ථාර):** Displays continuous trends over time.
* **Pie Chart (වට ප්‍රස්ථාර):** Shows proportions and percentages of a total whole (100%).

#### Chart Components (ප්‍රස්ථාරයක සංරචක)
* **Chart Title (ප්‍රස්ථාර මාතෘකාව):** Main heading of the chart.
* **X-Axis (කතිර අක්ෂය / තිරස් අක්ෂය):** Category axis.
* **Y-Axis (සිරස් අක්ෂය / අගය අක්ෂය):** Value axis.
* **Legend (සංකේත විස්තරය / ප්‍රස්ථාර යතුර):** Identifies data series with color boxes.
* **Data Labels (දත්ත ලේබල):** Shows exact numbers on top of chart bars or slices.

---

### 7.8 Spreadsheet Common Error Indicators (පැතුරුම්පත් දෝෂ නිරූපක)

| Error Code (දෝෂ කේතය) | Cause / Description (හේතුව සහ විස්තරය) |
| :--- | :--- |
| `#####` | Cell width is too narrow to display the number, or date is negative. |
| `#DIV/0!` | Attempting to divide a number by Zero (`0`) or an empty cell. |
| `#NAME?` | Misspelled function name or invalid formula text (e.g., `=SUMM(A1:A5)`). |
| `#VALUE!` | Wrong type of argument used in formula (e.g., trying to add text to a number `=A1+"Hello"`). |
| `#REF!` | Formula references a cell that has been deleted or is invalid. |
| `#NUM!` | Problem with a number in a formula or function (e.g., invalid math operation). |
| `#N/A` | Data value is not available for a function or lookup. |

---

# SECTION B: Complete O/L Past Paper Question Extraction (2020 – 2025)

### 2.1 Questions on Formulas, Precedence & Cell References

#### Question 01 (2020 O/L Paper I - Question 21)
* **Year & Question No:** 2020 O/L Paper I - Question 21
* **English Medium Question:**
  "21. Consider the following spreadsheet segment:
  Cell A1 = 10, Cell B1 = 20, Cell C1 = 5
  If the formula `=A1+B1/C1*2` is entered into cell D1, what value will be displayed in cell D1?
  (1) 12
  (2) 18
  (3) 28
  (4) 120"
* **Sinhala Medium Question:**
  "21. පහත සඳහන් පැතුරුම්පත් කොටස සලකා බලන්න:
  A1 සෛලය = 10, B1 සෛලය = 20, C1 සෛලය = 5
  D1 සෛලයට `=A1+B1/C1*2` සූත්‍රය ඇතුළත් කළ හොත්, D1 සෛලයේ දර්ශනය වන අගය කුමක්ද?
  (1) 12
  (2) 18
  (3) 28
  (4) 120"

#### Question 02 (2021 O/L Paper I - Question 22)
* **Year & Question No:** 2021 O/L Paper I - Question 22
* **English Medium Question:**
  "22. Which of the following shows the correct absolute cell reference for cell B5?
  (1) $B5
  (2) B$5
  (3) $B$5
  (4) #B#5"
* **Sinhala Medium Question:**
  "22. පහත දැක්වෙන ඒවායින් B5 සෛලය සඳහා නිවැරදි නිරපේක්ෂ සෛල යොමුව දක්වන්නේ කුමක්ද?
  (1) $B5
  (2) B$5
  (3) $B$5
  (4) #B#5"

#### Question 03 (2021 O/L Paper II - Question 03)
* **Year & Question No:** 2021 O/L Paper II - Question 03
* **English Medium Question:**
  "3. The following spreadsheet shows the sales details of a book shop:
  [ Table: A1='Book Name', B1='Unit Price (Rs.)', C1='Quantity Sold', D1='Total Amount (Rs.)' ]
  Row 2: Mathematics, 450, 10
  Row 3: Science, 500, 15
  Row 4: History, 350, 20
  Row 5: Total Sales Amount
  (a) Write down the formula required in cell D2 to calculate the Total Amount for Mathematics books.
  (b) Write down the function required in cell D5 to calculate the sum of Total Amounts for all books.
  (c) Write down the function required to find the maximum Quantity Sold in column C."
* **Sinhala Medium Question:**
  "3. පහත දැක්වෙන පැතුරුම්පත මගින් පොත් සැලක පොත් අලෙවි තොරතුරු නිරූපණය කෙරේ:
  [ වගුව: A1='පොතේ නම', B1='ඒකක මිල (රු.)', C1='අලෙවි වූ ප්‍රමාණය', D1='මුළු මුදල (රු.)' ]
  2 පේළිය: ගණිතය, 450, 10
  3 පේළිය: විද්‍යාව, 500, 15
  4 පේළිය: ඉතිහාසය, 350, 20
  5 පේළිය: මුළු අලෙවි මුදල
  (a) ගණිතය පොත් සඳහා මුළු මුදල ගණනය කිරීමට D2 සෛලයට ඇතුළත් කළ යුතු සූත්‍රය ලියන්න.
  (b) සියලුම පොත්වල මුළු අලෙවි මුදලේ එකතුව ලබා ගැනීමට D5 සෛලයට ඇතුළත් කළ යුතු ශ්‍රිතය ලියන්න.
  (c) C තීරුවේ ඇති වැඩිම අලෙවි වූ ප්‍රමාණය සෙවීම සඳහා ඇතුළත් කළ යුතු ශ්‍රිතය ලියන්න."

#### Question 04 (2022 O/L Paper I - Question 23)
* **Year & Question No:** 2022 O/L Paper I - Question 23
* **English Medium Question:**
  "23. In a spreadsheet, cell A1 contains 50 and B1 contains 10. If the formula `=A1/$B$1` in cell C1 is copied to cell C2, what will be the formula in cell C2?
  (1) =A2/$B$1
  (2) =A2/$B$2
  (3) =A1/$B$1
  (4) =A2/B2"
* **Sinhala Medium Question:**
  "23. පැතුරුම්පතක A1 සෛලයේ 50 ද B1 සෛලයේ 10 ද අඩංගු වේ. C1 සෛලයේ ඇති `=A1/$B$1` සූත්‍රය C2 සෛලයට පිටපත් කළ විට, C2 සෛලයේ ඇති වන සූත්‍රය කුමක්ද?
  (1) =A2/$B$1
  (2) =A2/$B$2
  (3) =A1/$B$1
  (4) =A2/B2"

#### Question 05 (2023 O/L Paper I - Question 22)
* **Year & Question No:** 2023 O/L Paper I - Question 22
* **English Medium Question:**
  "22. Which error code is displayed in a spreadsheet when a number is divided by zero?
  (1) #REF!
  (2) #VALUE!
  (3) #DIV/0!
  (4) #NAME?"
* **Sinhala Medium Question:**
  "22. පැතුරුම්පතක සංඛ්‍යාවක් ශූන්‍යයෙන් බෙදූ විට දර්ශනය වන දෝෂ කේතය කුමක්ද?
  (1) #REF!
  (2) #VALUE!
  (3) #DIV/0!
  (4) #NAME?"

#### Question 06 (2023 O/L Paper II - Question 03)
* **Year & Question No:** 2023 O/L Paper II - Question 03
* **English Medium Question:**
  "3. Consider the following spreadsheet used to calculate monthly employee salary and allowances:
  [ Columns: A=Emp ID, B=Name, C=Basic Salary, D=OT Hours, E=OT Rate, F=OT Amount, G=Gross Salary ]
  Row 2: E001, Kamal, 50000, 10, 500
  Row 3: E002, Nimal, 60000, 8, 500
  Row 4: E003, Suneth, 45000, 15, 500
  (i) Write a formula using cell references to calculate OT Amount in cell F2 (OT Amount = OT Hours * OT Rate).
  (ii) Write a formula to calculate Gross Salary in cell G2 (Gross Salary = Basic Salary + OT Amount).
  (iii) If the OT Rate (500) is given in a single cell `$H$1`, write the formula for cell F2 using an absolute cell reference so that it can be copied down to F3 and F4."
* **Sinhala Medium Question:**
  "3. සේවකයින්ගේ මාසික වැටුප් හා අතිකාල දීමනා ගණනය කිරීමට යොදාගන්නා පහත පැතුරුම්පත සලකා බලන්න:
  [ තීරු: A=සේවක අංකය, B=නම, C=මූලික වැටුප, D=අතිකාල පැය, E=අතිකාල අනුපාතය, F=අතිකාල මුදල, G=මුළු වැටුප ]
  2 පේළිය: E001, කමල්, 50000, 10, 500
  3 පේළිය: E002, නිමල්, 60000, 8, 500
  4 පේළිය: E003, සුනෙත්, 45000, 15, 500
  (i) F2 සෛලයේ අතිකාල මුදල ගණනය කිරීමට සෛල යොමු භාවිතයෙන් සූත්‍රයක් ලියන්න (අතිකාල මුදල = අතිකාල පැය * අතිකාල අනුපාතය).
  (ii) G2 සෛලයේ මුළු වැටුප ගණනය කිරීමට සූත්‍රයක් ලියන්න (මුළු වැටුප = මූලික වැටුප + අතිකාල මුදල).
  (iii) අතිකාල අනුපාතය (500) `$H$1` නමැති තනි සෛලයේ දී ඇත්නම්, F3 සහ F4 සෛල වෙත පහළට පිටපත් කළ හැකි වන පරිදි නිරපේක්ෂ සෛල යොමුවක් සහිතව F2 සෛලයට අදාළ සූත්‍රය ලියන්න."

#### Question 07 (2024 O/L Paper I - Question 20)
* **Year & Question No:** 2024 O/L Paper I - Question 20
* **English Medium Question:**
  "20. Which of the following functions counts only the cells containing numeric values in a range A1 to A10?
  (1) =COUNT(A1:A10)
  (2) =COUNTA(A1:A10)
  (3) =SUM(A1:A10)
  (4) =NUMBER(A1:A10)"
* **Sinhala Medium Question:**
  "20. A1 සිට A10 දක්වා පරාසය තුළ සංඛ්‍යාත්මක අගයන් පමණක් අඩංගු සෛල ගණනය කරනු ලබන ශ්‍රිතය කුමක්ද?
  (1) =COUNT(A1:A10)
  (2) =COUNTA(A1:A10)
  (3) =SUM(A1:A10)
  (4) =NUMBER(A1:A10)"

#### Question 08 (2025 O/L Paper I - Question 21)
* **Year & Question No:** 2025 O/L Paper I - Question 21
* **English Medium Question:**
  "21. What is the output of the spreadsheet formula `=IF(B2>=50, "PASS", "FAIL")` if cell B2 contains 45?
  (1) PASS
  (2) FAIL
  (3) 50
  (4) #VALUE!"
* **Sinhala Medium Question:**
  "21. B2 සෛලයේ 45 අඩංගු වන්නේ නම්, `=IF(B2>=50, "PASS", "FAIL")` පැතුරුම්පත් සූත්‍රයේ ප්‍රතිදානය කුමක්ද?
  (1) PASS
  (2) FAIL
  (3) 50
  (4) #VALUE!"

---
