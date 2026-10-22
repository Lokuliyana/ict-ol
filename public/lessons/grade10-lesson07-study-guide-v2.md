# Grade 10 ICT - Lesson 07: Complete Dual-Medium Master Study Guide
# පාඩම 07: ඉලෙක්ට්‍රොනික පැතුරුම්පත් (Electronic Spreadsheets)

---

## Document Overview / ලේඛන දළ විශ්ලේෂණය
This comprehensive dual-medium master study guide covers **Grade 10 - Unit 07: Electronic Spreadsheets (ඉලෙක්ට්‍රොනික පැතුරුම්පත්)** in strict compliance with the National Institute of Education (NIE) Sri Lanka G.C.E. Ordinary Level ICT syllabus, teacher instructional guides (TIG), official textbooks, and past examination papers (2020–2025).

---

# LAYER 1: Core Principles & Definitions (මූලික මූලධර්ම සහ අර්ථ දැක්වීම්)

### 1.1 Definition & Concept of Electronic Spreadsheets (ඉලෙක්ට්‍රොනික පැතුරුම්පත් සංකල්පය සහ අර්ථ දැක්වීම)

* **Definition / අර්ථ දැක්වීම:**
  - **English:** An Electronic Spreadsheet is application software designed to organize, store, manipulate, calculate, and analyze numerical and textual data arranged in a grid of rows and columns (tabular form). It automates complex mathematical, statistical, financial, and logical operations with high speed and precision.
  - **සිංහල:** ඉලෙක්ට්‍රොනික පැතුරුම්පතක් යනු පේළි (Rows) සහ තීරු (Columns) සහිත වගුගත ජාලයක (Tabular grid) දත්ත සංවිධානය කිරීමට, ගබඩා කිරීමට, හැසිරවීමට, ගණනය කිරීමට සහ විශ්ලේෂණය කිරීමට නිර්මාණය කර ඇති යෙදවුම් මෘදුකාංගයකි. සූත්‍ර (Formulas) සහ ශ්‍රිත (Functions) භාවිතයෙන් සංකීර්ණ ගණිතමය, සංඛ්‍යානමය, මූල්‍යමය සහ තාර්කික මෙහෙයුම් ඉහළ වේගයකින් හා නිරවද්‍යතාවයකින් ස්වයංක්‍රීයව සිදු කිරීම මෙහි මූලික කාර්යයයි.

* **Historical Evolution / ඓතිහාසික පරිණාමය:**
  - **VisiCalc (Visible Calculator):** The world's first electronic spreadsheet software, developed in **1979** by **Dan Bricklin** and **Bob Frankston** for the Apple II microcomputer. It revolutionized business computing by replacing manual pen-and-paper accounting ledger sheets.
  - **සිංහල:** 1979 දී **ඩෑන් බ්‍රික්ලින් (Dan Bricklin)** සහ **බොබ් ෆ්‍රෑන්ක්ස්ටන් (Bob Frankston)** විසින් Apple II පරිගණකය සඳහා නිර්මාණය කරන ලද **VisiCalc** ලොව ප්‍රථම ඉලෙක්ට්‍රොනික පැතුරුම්පත් මෘදුකාංගය වේ. සාම්ප්‍රදායික අතින් ලියන ලෙජර් පොත් වෙනුවට ව්‍යාපාරික පරිගණක භාවිතයේ විප්ලවීය වෙනසක් ඇති කළේය.

* **Software Categories & Examples / පැතුරුම්පත් මෘදුකාංග වර්ගීකරණය හා උදාහරණ:**
  1. **Proprietary Commercial Software (හිමිකාර වාණිජ මෘදුකාංග):**
     - Microsoft Excel (Microsoft Office suite)
     - Lotus 1-2-3 (Historical IBM standard)
     - Corel Quattro Pro
     - Apple Numbers (macOS / iOS)
  2. **Free and Open Source Software - FOSS (නිදහස් හා විවෘත මූලාශ්‍ර මෘදුකාංග):**
     - LibreOffice Calc (The Document Foundation)
     - Apache OpenOffice Calc
     - Gnumeric
  3. **Cloud-Based / Web Spreadsheets (වලාකුළු ආශ්‍රිත මාර්ගගත පැතුරුම්පත්):**
     - Google Sheets (Google Workspace)
     - Microsoft Excel Online (Office 365)
     - Zoho Sheet

* **Core Advantages of Electronic Spreadsheets / පැතුරුම්පත්වල ප්‍රධාන වාසි:**
  1. **Automated Calculations (ස්වයංක්‍රීය ගණනය කිරීම්):** Rapid and accurate execution of mathematical formulas and built-in functions.
  2. **Automatic Recalculation (ස්වයංක්‍රීය යළි ගණනය කිරීම):** When any input value in a worksheet is altered, all dependent formulas recalculate instantly and update the final results without manual intervention.
  3. **What-If Analysis & Modeling (අනුමාන විශ්ලේෂණය):** Ability to test various scenarios and forecasts by changing variable values.
  4. **Graphical Data Visualization (දෘශ්‍ය දත්ත නිරූපණය):** Visualizing numeric patterns and trends using Column, Bar, Line, and Pie charts.
  5. **Efficient Large-Scale Data Management (දත්ත කාර්යක්ෂම කළමනාකරණය):** Sorting (ascending/descending) and filtering large data records instantly.

---

### 1.2 User Interface Components & Grid Architecture (පරිශීලක අතුරුමුහුණතේ සංරචක සහ ව්‍යුහය)

```
+-----------------------------------------------------------------------------------------+
| Title Bar: [ Book1 - Microsoft Excel / LibreOffice Calc ]                     [_] [O] [X]|
+-----------------------------------------------------------------------------------------+
| Ribbon / Menu Bar: [ Home | Insert | Page Layout | Formulas | Data | Review | View ]    |
+----------------------+------------------------------------------------------------------+
| Name Box: [ B2     ] | Formula Bar: [ fx  |=SUM(C2:D2)                                ] |
+----------------------+------------------------------------------------------------------+
|      |       A       |        B       |        C       |        D       |       E       |
+------+---------------+----------------+----------------+----------------+---------------+
|  1   | Student Name  | Term 1 Marks   | Term 2 Marks   | Term 3 Marks   | Total Marks   |
+------+---------------+----------------+----------------+----------------+---------------+
|  2   | Nimal Perera  | [Active Cell]  |       85       |       90       | =SUM(B2:D2)   |
+------+---------------+----------------+----------------+----------------+---------------+
|  3   | Kamal Silva   |       72       |       68       |       74       |       214     |
+------+---------------+----------------+----------------+----------------+---------------+
| ...  |               |                |                |                |               |
|1048576|               |                |                |                |               |
+------+---------------+----------------+----------------+----------------+---------------+
| [|<] [<] [>] [>|]  [ Sheet1 ] [ Sheet2 ] [ Sheet3 ]  [+]   Status Bar: [ READY ] [100%]|
+-----------------------------------------------------------------------------------------+
```

#### Detailed Definitions of Grid Components / ප්‍රධාන සංරචකවල නිරවද්‍ය අර්ථ දැක්වීම්:

1. **Workbook (කාර්ය පොත):**
   - **English:** A workbook is the complete spreadsheet file saved on storage (e.g., `.xlsx`, `.ods`). It acts as a binder containing one or more individual worksheets.
   - **සිංහල:** කාර්ය පොතක් යනු ගබඩා මාධ්‍යයක සුරකින සම්පූර්ණ පැතුරුම්පත් ගොනුවයි (උදා: `.xlsx`, `.ods`). එය වැඩපත්‍රිකා එකකින් හෝ කිහිපයකින් සමන්විත ප්‍රධාන ගොනුව වේ.

2. **Worksheet (වැඩපත්‍රිකාව):**
   - **English:** A single working page or grid within a workbook consisting of intersecting rows and columns used to enter, organize, and calculate data.
   - **සිංහල:** කාර්ය පොතක් තුළ ඇති, දත්ත ඇතුළත් කිරීමට සහ ගණනය කිරීමට භාවිත වන තිරස් පේළි සහ සිරස් තීරුවලින් සමන්විත තනි වැඩතලයකි.

3. **Rows (පේළි):**
   - **English:** Horizontal divisions of a worksheet identified by numeric numbers starting from `1` up to **1,048,576** (in modern Excel/Calc).
   - **සිංහල:** වැඩපත්‍රිකාවක තිරස් අතට පිහිටි කොටස් වේ. ඒවා `1` සිට **1,048,576** දක්වා අංකවලින් හඳුනාගැනේ.

4. **Columns (තීරු):**
   - **English:** Vertical divisions of a worksheet identified by alphabetical letters starting from `A, B, C, ..., Z, AA, AB, ..., XFD` totaling **16,384** columns.
   - **සිංහල:** වැඩපත්‍රිකාවක සිරස් අතට පිහිටි කොටස් වේ. ඒවා `A, B, C, ..., Z, AA, AB, ..., XFD` දක්වා අක්ෂරවලින් හඳුනාගන්නා අතර මුළු තීරු ගණන **16,384** කි.

5. **Cell & Active Cell (සෛලය සහ සක්‍රීය සෛලය):**
   - **Cell (සෛලය):** The intersection point of a specific column and row. Identified uniquely by its **Cell Address / Cell Reference** (Column letter followed by Row number, e.g., `B5`, `C12`).
   - **Active Cell (සක්‍රීය සක්‍රීය සෛලය):** The currently selected cell highlighted with a bold dark outline. Keystrokes, data input, and formula editing take place in the active cell.
   - **සිංහල:** තීරුවක් සහ පේළියක් එකිනෙක ඡේදනය වන කුඩා කොටුව **සෛලයක් (Cell)** වේ. එය තීරු අක්ෂරය සහ පේළි අංකය මගින් සෛල ලිපිනයක් (Cell Address) ලෙස අනන්‍යව හඳුනාගනී (උදා: `B5`). මේ මොහොතේ තෝරාගෙන ඇති තද මායිමකින් වටවූ සෛලය **සක්‍රීය සෛලය (Active Cell)** නම් වේ.

6. **Name Box (නම කොටුව / සෛල ලිපින කොටුව):**
   - **English:** An input box located to the left of the formula bar that displays the cell address of the currently active cell (e.g., `A1`) or the name of a selected range.
   - **සිංහල:** සූත්‍ර තීරුවට වම් පසින් පිහිටි කොටුව වන අතර, වර්තමානයේ තෝරාගෙන ඇති සක්‍රීය සෛලයේ ලිපිනය (උදා: `A1`) මෙහි දර්ශනය වේ.

7. **Formula Bar (සූත්‍ර තීරුව):**
   - **English:** A long text bar located above the column headers displaying the actual contents, raw data, mathematical formula, or built-in function of the active cell. While the active cell shows the calculated result, the Formula Bar shows the underlying formula.
   - **සිංහල:** තීරු ශීර්ෂයන්ට ඉහළින් පිහිටි තීරුවයි. සක්‍රීය සෛලය තුළ අඩංගු සැබෑ දත්ත, සූත්‍රය හෝ ශ්‍රිතය මෙහි ප්‍රදර්ශනය වේ. සෛලය තුළ ගණනය කළ අවසන් අගය පෙන්වන විට, සූත්‍ර තීරුවේ ඊට අදාළ සූත්‍රය දැකගත හැක.

8. **Cell Range (සෛල පරාසය):**
   - **Contiguous Range (යාබද සෛල පරාසය):** A rectangular block of adjacent cells denoted by the top-left cell address, a colon (`:`), and the bottom-right cell address (e.g., `A1:C5` denotes 15 cells from row 1 to 5 across columns A to C).
   - **Non-Contiguous Range (නොයාබද සෛල):** Cells located apart separated by a comma (`,`) or semicolon (`;`) (e.g., `A1, B3, C5`).
   - **සිංහල:** එකිනෙකට යාබදව පිහිටි සෛල කාණ්ඩයක් **සෛල පරාසයක් (Cell Range)** ලෙස හැඳින්වේ. එය වම් පස ඉහළ සෛල ලිපිනය, කෝලනයක් (`:`) සහ දකුණු පස පහළ සෛල ලිපිනය මගින් ලියනු ලැබේ (උදා: `A1:C5`). යාබද නොවන සෛල කොමාවකින් (`,`) වෙන් කෙරේ (උදා: `A1, C3`).

---

# LAYER 2: Exhaustive Domain Breakdown & Mechanics (ක්‍රියාකාරීත්වය සහ යාන්ත්‍රණය පිළිබඳ ගැඹුරු විග්‍රහය)

### 2.1 Data Types & Default Alignments (දත්ත වර්ග සහ පෙරනිමි පෙළගැස්ම)

Spreadsheets automatically detect and classify data entered into cells. Default alignments provide visual verification of data integrity:

| Data Type (දත්ත වර්ගය) | Technical Nature (තාක්ෂණික ස්වභාවය) | Default Alignment (පෙරනිමි පෙළගැස්ම) | Concrete Examples (ප්‍රායෝගික උදාහරණ) |
| :--- | :--- | :--- | :--- |
| **Labels / Text (ලේබල / පෙළ)** | Letters, words, alphanumeric codes, titles, and numbers formatted as text. Cannot be used directly in arithmetic calculations. | **Align Left (වමට පෙළගැසේ)** | `Index No`, `Student Name`, `Grade 10B`, `'0712345678` |
| **Values / Numbers (අගයන් / සංඛ්‍යා)** | Numeric integers, decimals, positive/negative amounts used in mathematical calculations. | **Align Right (දකුණට පෙළගැසේ)** | `250`, `45.75`, `-18`, `0.05` |
| **Formulas & Functions (සූත්‍ර සහ ශ්‍රිත)** | Mathematical and logical instructions beginning with `=`. The displayed output aligns according to result type. | **Right if number, Left if text** | `=A1+B1`, `=SUM(C1:C10)`, `=IF(A1>50,"Pass","Fail")` |
| **Date & Time (දිනය සහ වේලාව)** | Calendar dates and clock times stored internally as sequential serial numbers. | **Align Right (දකුණට පෙළගැසේ)** | `2024-10-12`, `14:30:00`, `10/05/2026` |
| **Boolean / Logical (තාර්කික අගයන්)** | Logical condition evaluation results (`TRUE` or `FALSE`). | **Align Center (මධ්‍යගත වේ)** | `TRUE`, `FALSE` |

> [!TIP]
> **Exam Pitfall:** If a number is preceded by a single apostrophe (e.g., `'100`), the spreadsheet treats it as **Text / Label** and aligns it to the **LEFT**. It will be excluded by the `=COUNT()` function!

---

### 2.2 Mathematical Operators & Order of Precedence (ගණිතමය මෙහෙයුම්කාරක සහ ප්‍රමුඛතා නීති)

#### Mathematical Operators:
* **Addition (එකතු කිරීම):** `+`
* **Subtraction (අඩු කිරීම):** `-`
* **Multiplication (ගුණ කිරීම):** `*` (Asterisk - not `x` or `×`)
* **Division (බෙදීම):** `/` (Forward slash - not `÷` or `\`)
* **Exponentiation / Power (බල නැගීම):** `^` (Caret)

#### Strict Evaluation Hierarchy (ප්‍රමුඛතා අනුපිළිවෙල):
Spreadsheets evaluate formulas strictly using the mathematical precedence rules:
1. **Level 1:** Parentheses / Brackets `( )` (Innermost brackets evaluated first)
2. **Level 2:** Exponentiation `^`
3. **Level 3:** Multiplication `*` and Division `/` (Equal precedence; evaluated strictly from **Left to Right**)
4. **Level 4:** Addition `+` and Subtraction `-` (Equal precedence; evaluated strictly from **Left to Right**)

```
        HIGHEST PRECEDENCE:  ( )  Brackets
                             ^    Exponentiation
                             * /  Multiplication & Division (Left -> Right)
        LOWEST PRECEDENCE:   + -  Addition & Subtraction (Left -> Right)
```

#### Step-by-Step Stepwise Computations:
* **Drill 1:** `=10 + 20 / 4 * 2`
  - Step 1 (Division): `20 / 4 = 5` $\rightarrow$ `=10 + 5 * 2`
  - Step 2 (Multiplication): `5 * 2 = 10` $\rightarrow$ `=10 + 10`
  - Step 3 (Addition): `10 + 10 = 20` $\rightarrow$ **Result: 20**
* **Drill 2:** `=(10 + 20) / (4 * 2) + 2 ^ 3`
  - Step 1 (Parentheses): `(10 + 20) = 30` and `(4 * 2) = 8` $\rightarrow$ `=30 / 8 + 2 ^ 3`
  - Step 2 (Exponentiation): `2 ^ 3 = 8` $\rightarrow$ `=30 / 8 + 8`
  - Step 3 (Division): `30 / 8 = 3.75` $\rightarrow$ `=3.75 + 8`
  - Step 4 (Addition): `3.75 + 8 = 11.75` $\rightarrow$ **Result: 11.75**
* **Drill 3:** `=100 - 20 - 10 + 5`
  - Step 1 (Left-to-right subtraction): `100 - 20 = 80` $\rightarrow$ `=80 - 10 + 5`
  - Step 2 (Left-to-right subtraction): `80 - 10 = 70` $\rightarrow$ `=70 + 5`
  - Step 3 (Addition): `70 + 5 = 75` $\rightarrow$ **Result: 75**

---

### 2.3 Built-in Functions & Syntaxes (මූලික හා ප්‍රධාන පැතුරුම්පත් ශ්‍රිත)

A **Function** is a pre-programmed, built-in formula designed to perform specialized mathematical, statistical, or logical operations.
Every function adheres to the universal syntax:
```excel
=FUNCTION_NAME(argument1, argument2, ...)
```

#### 1. Statistical & Mathematical Functions:
1. **`=SUM(range)` (එකතුව සෙවීම):**
   - Calculates the algebraic total of all numbers within the range.
   - Example: `=SUM(B2:B10)` adds cells B2 through B10.
   - Example with distinct arguments: `=SUM(A1, B2, C3, 50)`.
2. **`=AVERAGE(range)` (සාමාන්‍යය සෙවීම):**
   - Calculates the arithmetic mean (Total Sum divided by the count of numeric cells).
   - Ignores blank cells and labels/text.
   - Example: If range contains values `10, 20, 30`, `=AVERAGE(A1:A3)` returns `20`.
3. **`=MAX(range)` (උපරිම අගය සෙවීම):**
   - Identifies and returns the largest numerical value in the specified range.
   - Example: `=MAX(D2:D50)` returns the highest exam score.
4. **`=MIN(range)` (අවම අගය සෙවීම):**
   - Identifies and returns the smallest numerical value in the specified range.
   - Example: `=MIN(D2:D50)` returns the lowest temperature reading.
5. **`=COUNT(range)` (සංඛ්‍යාත්මක සෛල ගණන සෙවීම):**
   - Counts **ONLY cells containing numeric numbers** (including dates). Ignores empty cells and text labels.
   - Example: In range `{12, "Pass", 45, "", 90}`, `=COUNT()` returns **3**.
6. **`=COUNTA(range)` (හිස් නොවන සෛල ගණන සෙවීම):**
   - Counts **ALL non-empty cells** regardless of data type (numbers, text labels, symbols, booleans, error codes).
   - Example: In range `{12, "Pass", 45, "", 90}`, `=COUNTA()` returns **4**.
7. **`=COUNTBLANK(range)` (හිස් සෛල ගණන සෙවීම):**
   - Counts the total number of empty, blank cells in the designated range.
8. **`=ROUND(number, num_digits)` (වටයන ලද අගය සෙවීම):**
   - Rounds a numeric value to a specified number of decimal decimal places.
   - Example: `=ROUND(45.678, 2)` returns `45.68`. `=ROUND(45.678, 0)` returns `46`.
9. **`=INT(number)` (පූර්ණ සංඛ්‍යාත්මක කොටස සෙවීම):**
   - Rounds down a number to the nearest integer.
   - Example: `=INT(45.9)` returns `45`.

#### 2. Logical Decision-Making: The `IF` Function
The `IF` function tests a logical condition and branches into two possible outcomes:
```excel
=IF(Logical_Test, Value_if_True, Value_if_False)
```

* **Logical Comparison Operators:**
  - Equal to: `=`
  - Not equal to: `<>`
  - Greater than: `>`
  - Less than: `<`
  - Greater than or equal to: `>=`
  - Less than or equal to: `<=`
* **Single Condition Example:**
  - Formula: `=IF(C2>=50, "Pass", "Fail")`
  - If cell `C2` is `68`, condition `68 >= 50` is TRUE $\rightarrow$ displays `"Pass"`.
  - If cell `C2` is `42`, condition `42 >= 50` is FALSE $\rightarrow$ displays `"Fail"`.
* **Numeric Output Example:**
  - Calculating discount: `=IF(D2>10000, D2*0.1, 0)`
* **Nested IF Function (කූඩු කළ IF ශ්‍රිතය):**
  - Evaluating multiple grade tiers:
  - `=IF(M2>=75, "A", IF(M2>=65, "B", IF(M2>=50, "C", "S")))`

---

### 2.4 Cell Referencing Methods (සෛල යොමු කිරීමේ ක්‍රමවේද)

Cell referencing determines how a cell address behaves when a formula is copied or replicated across rows and columns via the **Fill Handle**.

```
+-----------------------------------------------------------------------------------------+
| Cell Reference Type  | Syntax Format | Column Behavior (Horizontal) | Row Behavior (Vertical)   |
+----------------------+---------------+------------------------------+---------------------------+
| Relative (සාපේක්ෂ)  | A1            | Changes (A -> B -> C)        | Changes (1 -> 2 -> 3)     |
| Absolute (නිරපේක්ෂ) | $A$1          | Locked ($A remains $A)       | Locked ($1 remains $1)    |
| Mixed (මිශ්‍ර - Col)  | $A1           | Locked ($A remains $A)       | Changes (1 -> 2 -> 3)     |
| Mixed (මිශ්‍ර - Row)  | A$1           | Changes (A -> B -> C)        | Locked ($1 remains $1)    |
+-----------------------------------------------------------------------------------------+
```

#### Detailed Explanation & Propagation Mechanics:

1. **Relative Cell Reference (සාපේක්ෂ සෛල යොමුව):**
   - **Mechanism:** Refers to cells based on their relative distance from the formula cell. When copied to another row or column, the row numbers and column letters adjust automatically.
   - **Syntax:** `A1`, `B5`, `C10`.
   - **Replication Scenario:**
     - Formula in `C1`: `=A1+B1`
     - Copied down to `C2`: becomes `=A2+B2` (Row increments by 1)
     - Copied down to `C3`: becomes `=A3+B3`
     - Copied right to `D1`: becomes `=B1+C1` (Column shifts by 1)

2. **Absolute Cell Reference (නිරපේක්ෂ සෛල යොමුව):**
   - **Mechanism:** Refers to a fixed, exact cell coordinate on the worksheet. The Dollar Sign (`$`) placed before the column letter locks the column, and before the row number locks the row. It never shifts regardless of where the formula is copied.
   - **Syntax:** `$A$1`, `$D$5`. (Keyboard shortcut: `F4`).
   - **Replication Scenario (Universal Rate / Tax Calculation):**
     - Cell `H1` contains the VAT tax rate: `18%`.
     - Formula in cell `E2`: `=D2 * $H$1`
     - When copied down to cell `E3`: becomes `=D3 * $H$1` (D2 changed to D3, but `$H$1` remains perfectly locked).
     - When copied down to cell `E4`: becomes `=D4 * $H$1`.

3. **Mixed Cell Reference (මිශ්‍ර සෛල යොමුව):**
   - **Mechanism:** Locks either only the column or only the row while allowing the other coordinate to adjust dynamically.
   - **Formats:**
     - `$A1` (Locked Column, Relative Row): Column remains fixed at `A` when copied horizontally, but row changes when copied vertically.
     - `A$1` (Relative Column, Locked Row): Column adjusts when copied horizontally, but row remains locked at row `1` when copied vertically.
   - **Application Example:** Creating a 10x10 multiplication table with `= $A2 * B$1`.

---

### 2.5 Formatting, Sorting, and Filtering (හැඩසැසීම, වර්ගීකරණය සහ පෙරීම)

1. **Cell Formatting Tools (සෛල හැඩසැසීම):**
   - **Merge & Center (එක් කිරීම සහ මධ්‍යගත කිරීම):** Combines two or more adjacent cells into a single larger cell and centers the text horizontally. Commonly used for table headings.
   - **Wrap Text (පෙළ ඔතා තැබීම):** Automatically wraps long textual content into multiple vertical lines within a single cell, expanding row height so no text is clipped.
   - **Number Formatting:** Setting currency symbols (`Rs.`, `$`), specifying decimal precision (e.g., forcing two decimals `150.00`), formatting dates (`YYYY-MM-DD`), and displaying percentages (`75%`).

2. **Data Sorting (දත්ත වර්ගීකරණය):**
   - Rearranging data rows in a defined order based on values in one or more columns:
   - **Ascending Order (ආරෝහණ පිළිවෙල):** Smallest to largest for numbers (`1, 2, 3...`), alphabetical order for text (`A to Z`), earliest to latest for dates.
   - **Descending Order (අවරෝහණ පිළිවෙල):** Largest to smallest for numbers (`9, 8, 7...`), reverse alphabetical order for text (`Z to A`), latest to earliest for dates.

3. **Data Filtering (දත්ත පෙරීම):**
   - Temporarily hiding rows that do not meet specified criteria while displaying only matching records, without deleting any data.
   - **AutoFilter (ස්වයංක්‍රීය පෙරහන):** Adds drop-down arrows to column headers allowing users to select specific criteria (e.g., filtering all students from `"Colombo"` district who scored `> 75`).

---

### 2.6 Chart Types & Visual Representation (ප්‍රස්ථාර වර්ග සහ දෘශ්‍යකරණය)

Charts convert numerical data into visual representations, enabling rapid analysis of proportions, trends, and comparisons.

```
+-----------------------------------------------------------------------------------------+
| Chart Type (ප්‍රස්ථාර වර්ගය) | Primary Purpose (ප්‍රධාන අරමුණ)    | Best Real-World Use Case (සුදුසුම අවස්ථාව)|
+-----------------------------+------------------------------------+-------------------------------------------+
| 1. Column Chart (තීරු)      | Compares discrete categories       | Comparing term test marks of 5 students   |
|                             | vertically using vertical bars     | or monthly sales figures of 4 branches    |
+-----------------------------+------------------------------------+-------------------------------------------+
| 2. Bar Chart (තිරස් තීරු)   | Compares discrete categories       | Comparing items with long category labels |
|                             | horizontally using horizontal bars | or ranking items horizontally             |
+-----------------------------+------------------------------------+-------------------------------------------+
| 3. Line Chart (රේඛීය)       | Displays continuous trends and     | Tracking temperature changes over 24 hrs  |
|                             | changes over continuous time       | or patient heartbeat over 7 days          |
+-----------------------------+------------------------------------+-------------------------------------------+
| 4. Pie Chart (වට / පයි)     | Displays relative proportions /    | Budget allocation (100% total breakdown)  |
|                             | percentages of a whole (100%)      | or market share of mobile operators       |
+-----------------------------+------------------------------------+-------------------------------------------+
```

#### Anatomical Components of a Chart / ප්‍රස්ථාරයක ප්‍රධාන සංරචක:
* **Chart Title (ප්‍රස්ථාර මාතෘකාව):** Explanatory heading describing the chart's content.
* **X-Axis / Category Axis (කතිර අක්ෂය / තිරස් අක්ෂය):** Horizontal baseline displaying independent category labels (e.g., Student names, Months).
* **Y-Axis / Value Axis (සිරස් අක්ෂය / අගය අක්ෂය):** Vertical scale displaying numerical measurements (e.g., Marks 0–100, Revenue in Rupees).
* **Legend (ප්‍රස්ථාර යතුර / සංකේත විස්තරය):** A visual key displaying color codes or patterns that distinguish different data series.
* **Data Labels (දත්ත ලේබල):** Precise numerical values printed directly above bars or slices.
* **Gridlines (ජාල රේඛා):** Horizontal or vertical guide lines extending across the plot area to make reading values easier.

---

### 2.7 Common Error Codes & Troubleshooting (පැතුරුම්පත් දෝෂ කේත සහ දෝෂ නිවාරණය)

When a spreadsheet formula cannot execute or resolve properly, it generates a standard error indicator:

| Error Code (දෝෂය) | Exact Cause (නිශ්චිත හේතුව) | Real-World Trigger (ප්‍රායෝගික උදාහරණය) | Troubleshooting Fix (දෝෂය නිවැරදි කිරීම) |
| :--- | :--- | :--- | :--- |
| `#####` | The column width is too narrow to display the complete numeric value or formatted date. | Number `1250000.00` typed into a column with width of 4 characters. | Drag column border wider or double-click header for **AutoFit**. |
| `#DIV/0!` | Attempting to divide a number by Zero (`0`) or by an empty blank cell. | Formula `=A1/B1` when cell `B1` contains `0` or is empty. | Correct divisor to a non-zero value or check with `=IF(B1=0, 0, A1/B1)`. |
| `#NAME?` | Misspelled function name, invalid formula syntax, or text entered without quotes. | Entering `=SUMM(A1:A5)` or `=IF(A1>50, Pass, Fail)` without quotes. | Fix spelling to `=SUM(A1:A5)` and enclose text strings in quotes (`"Pass"`). |
| `#VALUE!` | Mathematical operation performed on incompatible data types. | Entering `=A1 + B1` when cell `A1` is `"Hello"` and `B1` is `50`. | Ensure all formula arguments are numbers, or use `=SUM(A1, B1)` which ignores text. |
| `#REF!` | Formula references a cell that has been deleted or pasted over. | Formula `=A1+B1+C1` and user deletes Column `B` completely. | Undo deletion or update formula to refer to valid existing cells. |
| `#NUM!` | Formula contains invalid numerical values (e.g., square root of negative number or number too large). | Evaluating `=SQRT(-25)`. | Ensure numeric values satisfy mathematical domains. |
| `#N/A` | "No Value Available". A lookup function fails to locate the target search item. | Running a search formula on a code that does not exist in the table. | Verify lookup table keys. |
| `#NULL!` | Incorrect range separator used (e.g., space between two ranges that do not intersect). | Entering `=SUM(A1 A5)` instead of `=SUM(A1:A5)`. | Replace accidental space with a colon (`:`) or comma (`,`). |

---

# LAYER 3: Comparison Tables & Visual Diagrams (සංසන්දනාත්මක වගු සහ රූප සටහන්)

### 3.1 Differentiating Key Spreadsheet Concepts (ප්‍රධාන සංකල්ප අතර වෙනස)

#### Table 1: Relative vs. Absolute vs. Mixed Cell Referencing
| Feature (ලක්ෂණය) | Relative Referencing (සාපේක්ෂ) | Absolute Referencing (නිරපේක්ෂ) | Mixed Referencing (මිශ්‍ර) |
| :--- | :--- | :--- | :--- |
| **Syntax Example** | `B2` | `$B$2` | `$B2` (Col locked) or `B$2` (Row locked) |
| **Dollar Sign (`$`) Usage** | None | Placed before both Column and Row | Placed before either Column OR Row |
| **Vertical Copy (Down Rows)** | Row number increments (`B2 -> B3 -> B4`) | Stays completely fixed (`$B$2`) | `$B2 -> $B3` (Row changes); `B$2` stays `B$2` |
| **Horizontal Copy (Across Cols)** | Column letter increments (`B2 -> C2 -> D2`)| Stays completely fixed (`$B$2`) | `$B2` stays `$B2`; `B$2 -> C$2` (Col changes) |
| **Typical Use Case** | Calculating row-by-row totals (`Qty * Price`)| Multiplying every row by a fixed tax rate or constant cell | Creating 2D cross-tabulation matrices / lookup grids |

#### Table 2: `COUNT` vs. `COUNTA` vs. `COUNTBLANK` vs. `COUNTIF`
| Function (ශ්‍රිතය) | What it Counts (ගණනය කරන්නේ කුමක්ද?) | Treats Text / Labels | Treats Blanks | Treats Errors |
| :--- | :--- | :--- | :--- | :--- |
| `=COUNT(range)` | Numbers and Dates only | **Ignored (0)** | **Ignored (0)** | **Ignored (0)** |
| `=COUNTA(range)` | All non-empty cells | **Counted (1)** | **Ignored (0)** | **Counted (1)** |
| `=COUNTBLANK(range)`| Empty, completely blank cells | **Ignored (0)** | **Counted (1)** | **Ignored (0)** |
| `=COUNTIF(range, criteria)`| Cells matching a specific condition | Condition-based | Condition-based | Condition-based |

#### Table 3: Formula vs. Built-in Function
| Comparison Factor (සංසන්දන සාධකය) | Formula (සූත්‍ර) | Built-in Function (ශ්‍රිත) |
| :--- | :--- | :--- |
| **Definition** | User-constructed mathematical expression using operators. | Pre-defined, pre-programmed formula provided by software. |
| **Example** | `=(A1+A2+A3+A4+A5)/5` | `=AVERAGE(A1:A5)` |
| **Efficiency on Large Ranges**| Extremely cumbersome and prone to typing errors for large ranges. | Highly efficient, concise, and clean (`=SUM(A1:A1000)`). |
| **Text Handling** | May throw `#VALUE!` if a cell contains text during addition. | Intelligently ignores text cells automatically. |

---

# LAYER 4: High-Yield Exam Pitfalls & O/L Past Paper Matrix (විභාග උගුල් සහ පසුගිය විභාග ගැටලු විග්‍රහය)

### 4.1 Frequent Examination Pitfalls & Traps (නිතර සිදුවන විභාග වැරදි)

> [!CAUTION]
> 1. **Omitting the Equal Sign (`=`):** Any expression entered without a leading `=` (e.g., `SUM(A1:A10)` or `A1+B1`) is treated as plain **Label / Text** and will NOT calculate!
> 2. **Operator Symbol Confusion:** In spreadsheets, multiplication MUST be written as `*` (not `x`), and division MUST be written as `/` (not `÷`). Entering `=A1 x B1` results in `#NAME?`.
> 3. **Text Arguments in IF without Quotes:** In `=IF(A1>=50, Pass, Fail)`, the words `Pass` and `Fail` must be enclosed in double quotes: `=IF(A1>=50, "Pass", "Fail")`. Omitting quotes throws a `#NAME?` error!
> 4. **Formula Copy Drift:** When formula `=A1+B$1` in `C1` is copied down to `C3`:
>    - Row distance = $+2$.
>    - `A1` (relative) becomes `A3`.
>    - `B$1` (locked row) remains `B$1`.
>    - Resulting formula in `C3`: `=A3+B$1`.
> 5. **`COUNT` vs `COUNTA` in Mark Sheets:** If a student was absent and marked `"AB"`, `=COUNT()` will NOT count the student, but `=COUNTA()` will count them!

---

### 4.2 Comprehensive O/L Past Paper Extraction & Solutions (2020 – 2025)

#### Question 01 (2020 O/L Paper I - Question 21)
* **Stem:** Consider the following spreadsheet segment: Cell A1 = 10, Cell B1 = 20, Cell C1 = 5. If the formula `=A1+B1/C1*2` is entered into cell D1, what value will be displayed in cell D1?
  - (1) 12
  - (2) 18
  - (3) 28
  - (4) 120
* **Sinhala:** පහත සඳහන් පැතුරුම්පත් කොටස සලකා බලන්න: A1 സෛලය = 10, B1 = 20, C1 = 5. D1 സෛලයට `=A1+B1/C1*2` සූත්‍රය ඇතුළත් කළ හොත්, D1 හි දර්ශනය වන අගය කුමක්ද?
* **Step-by-Step Working / විසඳුම:**
  - Formula: `=10 + 20 / 5 * 2`
  - Step 1 (Division first): `20 / 5 = 4` $\rightarrow$ `=10 + 4 * 2`
  - Step 2 (Multiplication next): `4 * 2 = 8` $\rightarrow$ `=10 + 8`
  - Step 3 (Addition): `10 + 8 = 18`
* **Correct Option:** **(2) 18**

---

#### Question 02 (2021 O/L Paper I - Question 22)
* **Stem:** Which of the following shows the correct absolute cell reference for cell B5?
  - (1) $B5
  - (2) B$5
  - (3) $B$5
  - (4) #B#5
* **Sinhala:** පහත දැක්වෙන ඒවායින් B5 සෛලය සඳහා නිවැරදි නිරපේක්ෂ සෛල යොමුව දක්වන්නේ කුමක්ද?
* **Explanation / පැහැදිලි කිරීම:**
  - Absolute cell referencing requires dollar signs (`$`) in front of BOTH the column letter and row number: `$B$5`.
* **Correct Option:** **(3) $B$5**

---

#### Question 03 (2021 O/L Paper II - Question 03)
* **Spreadsheet Context:** A book shop sales sheet has:
  - Row 1: Headers (A='Book Name', B='Unit Price', C='Quantity Sold', D='Total Amount')
  - Row 2: Mathematics, 450, 10
  - Row 3: Science, 500, 15
  - Row 4: History, 350, 20
  - Row 5: Total Sales Amount
* **Tasks & Model Answers:**
  - **(a)** Write down the formula required in cell D2 to calculate Total Amount for Mathematics books:
    - **Model Answer:** `=B2*C2`
  - **(b)** Write down the function required in cell D5 to calculate the sum of Total Amounts for all books:
    - **Model Answer:** `=SUM(D2:D4)`
  - **(c)** Write down the function required to find the maximum Quantity Sold in column C:
    - **Model Answer:** `=MAX(C2:C4)`

---

#### Question 04 (2022 O/L Paper I - Question 23)
* **Stem:** In a spreadsheet, cell A1 contains 50 and B1 contains 10. If the formula `=A1/$B$1` in cell C1 is copied to cell C2, what will be the formula in cell C2?
  - (1) =A2/$B$1
  - (2) =A2/$B$2
  - (3) =A1/$B$1
  - (4) =A2/B2
* **Sinhala:** පැතුරුම්පතක A1 සෛලයේ 50 ද B1 හි 10 ද ඇත. C1 සෛලයේ ඇති `=A1/$B$1` සූත්‍රය C2 සෛලයට පිටපත් කළ විට C2 හි ඇති වන සූත්‍රය කුමක්ද?
* **Explanation / පැහැදිලි කිරීම:**
  - Copying down by 1 row: Relative reference `A1` becomes `A2`. Absolute reference `$B$1` remains unchanged as `$B$1`. The resulting formula is `=A2/$B$1`.
* **Correct Option:** **(1) =A2/$B$1**

---

#### Question 05 (2023 O/L Paper I - Question 22)
* **Stem:** Which error code is displayed in a spreadsheet when a number is divided by zero?
  - (1) #REF!
  - (2) #VALUE!
  - (3) #DIV/0!
  - (4) #NAME?
* **Sinhala:** පැතුරුම්පතක සංඛ්‍යාවක් ශූන්‍යයෙන් බෙදූ විට දර්ශනය වන දෝෂ කේතය කුමක්ද?
* **Correct Option:** **(3) #DIV/0!**

---

#### Question 06 (2023 O/L Paper II - Question 03)
* **Spreadsheet Context:** Employee monthly salary calculation sheet:
  - Columns: A=Emp ID, B=Name, C=Basic Salary, D=OT Hours, E=OT Rate, F=OT Amount, G=Gross Salary.
  - Rows 2–4: Employees E001, E002, E003.
  - Cell H1 contains the global OT Rate (500).
* **Tasks & Model Answers:**
  - **(i)** Write a formula using cell references to calculate OT Amount in cell F2:
    - **Model Answer:** `=D2*E2`
  - **(ii)** Write a formula to calculate Gross Salary in cell G2:
    - **Model Answer:** `=C2+F2`
  - **(iii)** If OT Rate (500) is given in cell `$H$1`, write the formula for cell F2 using an absolute cell reference so that it can be copied down to F3 and F4:
    - **Model Answer:** `=D2*$H$1`

---

#### Question 07 (2024 O/L Paper I - Question 20)
* **Stem:** Which of the following functions counts only the cells containing numeric values in a range A1 to A10?
  - (1) =COUNT(A1:A10)
  - (2) =COUNTA(A1:A10)
  - (3) =SUM(A1:A10)
  - (4) =NUMBER(A1:A10)
* **Sinhala:** A1 සිට A10 දක්වා පරාසය තුළ සංඛ්‍යාත්මක අගයන් පමණක් අඩංගු සෛල ගණනය කරනු ලබන ශ්‍රිතය කුමක්ද?
* **Explanation / පැහැදිලි කිරීම:**
  - `=COUNT()` counts only numeric cells. `=COUNTA()` counts all non-blank cells.
* **Correct Option:** **(1) =COUNT(A1:A10)**

---

#### Question 08 (2025 O/L Paper I - Question 21)
* **Stem:** What is the output of the spreadsheet formula `=IF(B2>=50, "PASS", "FAIL")` if cell B2 contains 45?
  - (1) PASS
  - (2) FAIL
  - (3) 50
  - (4) #VALUE!
* **Sinhala:** B2 සෛලයේ 45 අඩංගු වන්නේ නම්, `=IF(B2>=50, "PASS", "FAIL")` පැතුරුම්පත් සූත්‍රයේ ප්‍රතිදානය කුමක්ද?
* **Explanation / පැහැදිලි කිරීම:**
  - Condition `45 >= 50` evaluates to FALSE. Therefore, the formula outputs `"FAIL"`.
* **Correct Option:** **(2) FAIL**
