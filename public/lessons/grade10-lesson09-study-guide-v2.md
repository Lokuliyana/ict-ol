# Grade 10 ICT - Lesson 09: Dual-Medium Study & Past Paper Guide
# ශ්‍රේණිය 10 ICT - 09 පාඩම: දත්ත සමුදා කළමනාකරණය (Database Management)

## Document Overview
This study and past paper guide provides verbatim, dual-medium coverage of **Grade 10 - Lesson 09: Database Management (දත්ත සමුදා කළමනාකරණය)** from the official National Institute of Education (NIE) Sri Lanka G.C.E. O/L ICT curriculum. All theoretical foundations, relational schemas, ER cardinality rules, DBMS objects, and examination questions are extracted word-for-word and synchronized with the official Grade 10 English Medium Textbook (`ICT G-10 E.pdf`), Grade 10 Sinhala Medium Textbook (`ict g10 S.pdf`), and official G.C.E. O/L examination past papers (2020–2025).

---

# SECTION A: Complete Learning Guide & Short Notes (Comprehensive Theory)
# සම්පූර්ණ ඉගෙනුම් මාර්ගෝපදේශය සහ කෙටි සටහන් (විස්තීර්ණ සිද්ධාන්ත)

---

### 9.1 Introduction to Database Management (දත්ත සමුදා කළමනාකරණය පිළිබඳ හැඳින්වීම)

#### Core Definitions & Concepts (මූලික අර්ථ දැක්වීම් සහ සංකල්ප)
* **Data & Information in Databases (දත්ත සමුදායක ඇති දත්ත සහ තොරතුරු):**
  * **[English Medium Text]:** "A collection of logically related data organized in a structured manner so that it can be easily accessed, managed, and updated is called a database."
  * **[Sinhala Medium Text]:** "පහසුවෙන් ප්‍රවේශ විය හැකි, කළමනාකරණය කළ හැකි සහ යාවත්කාලීන කළ හැකි පරිදි ක්‍රමවත් ලෙස සංවිධානය කරන ලද, තර්කානුකූලව එකිනෙකට සම්බන්ධ දත්ත සමූහයක් දත්ත සමුදායක් (Database) ලෙස හැඳින්වේ."

* **Manual vs. Electronic Databases (අතින් පවත්වාගෙන යන සහ ඉලෙක්ට්‍රොනික දත්ත සමුදා):**
  * **Manual / Traditional Database (අතින් පවත්වාගෙන යන / සම්ප්‍රදායික දත්ත සමුදාය):**
    * **[English Medium Text]:** "Data stored in paper files, registers, address books, and library card index systems. Limitations: takes up physical space, slow data retrieval, risk of physical damage, high data redundancy, difficult to update."
    * **[Sinhala Medium Text]:** "කඩදාසි ලිපිගොනු, ලේඛන, ලිපින පොත් සහ පුස්තකාල කාඩ්පත් පද්ධතිවල දත්ත තැන්පත් කිරීම. සීමාවන්: භෞතික ඉඩකඩ වැඩිපුර ගැනීම, දත්ත සොයා ගැනීමේ ප්‍රමාදය, භෞතික හානි සිදු වීමේ අවදානම, දත්ත පුනරාවර්තනය වැඩි වීම, යාවත්කාලීන කිරීමේ අපහසුව."
  * **Electronic Database (ඉලෙක්ට්‍රොනික දත්ත සමුදාය):**
    * **[English Medium Text]:** "Data stored electronically using computer software. Advantages: fast search and retrieval, minimal data redundancy, efficient storage, easy data sharing, high security, easy backing up and updating."
    * **[Sinhala Medium Text]:** "පරිගණක මෘදුකාංග භාවිතයෙන් ඉලෙක්ට්‍රොනිකව දත්ත ගබඩා කිරීම. වාසි: දත්ත ඉක්මනින් සෙවීම සහ ලබා ගැනීම, දත්ත පුනරාවර්තනය අවම වීම, කාර්යක්ෂම ආචයනය, දත්ත පහසුවෙන් හුවමාරු කිරීම, ඉහළ ආරක්ෂාව, පහසුවෙන් පිටපත් (Backup) තබා ගැනීම සහ යාවත්කාලීන කිරීම."

#### Comparison Matrix (සංසන්දනාත්මක න්‍යාසය):

| Evaluation Dimension (ඇගයීම් ලක්ෂණය) | Manual Paper File System (සාම්ප්‍රදායික ලිපිගොනු පද්ධතිය) | Electronic DBMS (ඉලෙක්ට්‍රොනික දත්ත සමුදා පද්ධතිය) |
| :--- | :--- | :--- |
| **Storage Medium (ආචයන මාධ්‍ය)** | Paper files, record books, card index cabinets | Digital disks, magnetic drives, SSDs, cloud servers |
| **Physical Space (භෞතික ඉඩකඩ)** | Requires large file rooms and storage cabinets | Extremely compact; fits on a microchip or hard drive |
| **Search Speed (සෙවීමේ වේගය)** | Slow; manually flipping pages takes minutes or hours | Instantaneous; millisecond indexed queries |
| **Data Redundancy (දත්ත අතිරික්තය)** | High; same details rewritten across different books | Minimized; central tables linked through keys |
| **Data Consistency (දත්ත අනුකූලතාව)** | Low; updating one file leaves others outdated | High; updates reflect immediately across all views |
| **Multi-user Access (බහු-පරිශීලක ප්‍රවේශය)** | Only one person can access a physical file at a time | Hundreds of users access concurrently over network |
| **Security (ආරක්ෂාව)** | Vulnerable to physical theft, snooping, or fire | Strong password policies, user roles, encryption |
| **Backup & Recovery (උපස්ථ පිටපත්)** | Tedious, expensive, and manual photocopying | Fully automated scheduled backups and cloud sync |

---

### 9.2 Data Hierarchy in Computers (පරිගණකයේ දත්ත ධුරාවලිය)

In electronic computer systems, data is structured hierarchically from the smallest indivisible physical building block up to comprehensive database environments:

```
                            Database (දත්ත සමුදාය)
                                      │
                             Tables / Files (වගු)
                                      │
                             Records / Tuples (වාර්තා)
                                      │
                            Fields / Attributes (ක්ෂේත්‍ර)
                                      │
                                 Bytes (බයිට)
                                      │
                                  Bits (බිටු)
```

* **Data Hierarchy Definitions (දත්ත ධුරාවලියේ අර්ථ දැක්වීම්):**
  1. **Bit (බිටුව):** Binary digit `0` or `1`. Smallest unit of data in computer architecture.
  2. **Byte / Character (බයිටය / අක්ෂරය):** 8 Bits representing a character, letter, or symbol (e.g., `'A'`, `'7'`).
  3. **Field / Attribute (ක්ෂේත්‍රය / ගුණාංගය):** A single category of information stored in a column (e.g., `Student_Name`, `Date_of_Birth`, `Telephone_No`).
  4. **Record / Tuple (වාර්තාව / ටපලනය):** A collection of related fields representing a single entity stored in a horizontal row (e.g., all details belonging to one specific student).
  5. **Table / Relation (වගුව / සබඳතාව):** A collection of logically related records stored systematically in rows and columns under a unified name (e.g., `STUDENT` table).
  6. **Database (දත්ත සමුදාය):** A collection of related tables, files, queries, forms, and reports managed together.

---

### 9.3 Relational Database Concepts & Key Components (සබඳතා දත්ත සමුදා සංකල්ප සහ ප්‍රධාන සංරචක)

#### Relational Database Management System - RDBMS (සබඳතා දත්ත සමුදා කළමනාකරණ පද්ධති)
* **Definition (අර්ථ දැක්වීම):**
  * **[English Medium Text]:** "A database model that stores data in two-dimensional tables (consisting of rows and columns) and establishes relationships between tables using common fields is called a Relational Database Management System (RDBMS)."
  * **[Sinhala Medium Text]:** "දත්ත ද්විමාන වගු (පේළි සහ තීරු) ලෙස ගබඩා කර, පොදු ක්ෂේත්‍ර භාවිතයෙන් වගු අතර සබඳතා ගොඩනගන දත්ත සමුදා ආකෘතිය සබඳතා දත්ත සමුදා කළමනාකරණ පද්ධතියක් (RDBMS) ලෙස හැඳින්වේ."
  * *Software Examples:* Microsoft Access, LibreOffice Base, MySQL, Oracle Database, PostgreSQL, SQLite.

#### Primary Key and Foreign Key (ප්‍රාථමික යතුර සහ ආගන්තුක යතුර)

```
+-----------------------------------------------------------------------------------+
| TABLE: STUDENT                                                                    |
+-------------+---------------+-------------------+---------------+-----------------+
| StudentID   | NIC_No        | FullName          | DateOfBirth   | ClassID (FK)    |
| [PK]        | [Candidate]   |                   |               |                 |
+-------------+---------------+-------------------+---------------+-----------------+
| S1001       | 200812301234  | Kamal Perera      | 2008-03-12    | C10A            |
| S1002       | 200845607890  | Nimal Silva       | 2008-07-25    | C10B            |
| S1003       | 200878902345  | Suneth Bandara    | 2008-01-09    | C10A            |
+-------------+---------------+-------------------+---------------+-----------------+
                                                                          │
                                  Referential Integrity Link             │
                                                                          ▼
+-----------------------------------------------------------------------------------+
| TABLE: CLASS                                                                      |
+------------------------------------+-----------------------------+----------------+
| ClassID [PK]                       | ClassName                   | TeacherName    |
+------------------------------------+-----------------------------+----------------+
| C10A                               | Grade 10-A                  | Mr. Perera     |
| C10B                               | Grade 10-B                  | Ms. Fernando   |
+------------------------------------+-----------------------------+----------------+
```

1. **Candidate Key (අපේක්ෂක යතුර):**
   * **[English Medium Text]:** Any field or combination of fields within a table that has the ability to uniquely identify every record without duplication.
   * **[Sinhala Medium Text]:** වගුවක සෑම ලේඛනයක්ම අනන්‍යව හඳුනාගැනීමේ හැකියාව ඇති ඕනෑම ක්ෂේත්‍රයක් (හෝ ක්ෂේත්‍ර එකතුවක්) අපේක්ෂක යතුරක් (Candidate Key) ලෙස හැඳින්වේ.
2. **Primary Key - PK (ප්‍රාථමික යතුර):**
   * **[English Medium Text]:** "A field or a combination of fields that uniquely identifies each record in a table. A primary key cannot contain NULL values and must contain unique values for every record."
   * **[Sinhala Medium Text]:** "වගුවක ඇති සෑම වාර්තාවක්ම අනන්‍යව (Unique) හඳුනා ගැනීම සඳහා යොදාගන්නා ක්ෂේත්‍රයක් හෝ ක්ෂේත්‍ර එකතුවක් ප්‍රාථමික යතුර (Primary Key) ලෙස හැඳින්වේ. ප්‍රාථමික යතුරක් සඳහා හිස් අගයන් (NULL) පැවතිය නොහැකි අතර සෑම වාර්තාවකටම වෙනස්ම වූ අගයක් තිබිය යුතුය."
   * *Examples:* `Admission_No`, `NIC_Number`, `Item_Code`, `Index_No`, `BookID`.
3. **Alternate Key (විකල්ප යතුර):**
   * **[English Medium Text]:** Any candidate key that is not selected as the primary key.
   * **[Sinhala Medium Text]:** ප්‍රාථමික යතුර ලෙස තෝරා නොගත් ඉතිරි අපේක්ෂක යතුරු විකල්ප යතුරු (Alternate Keys) ලෙස හැඳින්වේ.
4. **Composite Primary Key (සංයුක්ත ප්‍රාථමික යතුර):**
   * **[English Medium Text]:** "When more than one field is combined together to form a unique identifier for a record in a table, it is called a Composite Primary Key."
   * **[Sinhala Medium Text]:** "වාර්තාවක් අනන්‍යව හඳුනා ගැනීමට ක්ෂේත්‍ර එකකට වඩා වැඩි ගණනක් එකතු කර සාදාගන්නා ප්‍රාථමික යතුර සංයුක්ත ප්‍රාථමික යතුරක් (Composite Primary Key) ලෙස හැඳින්වේ."
   * *Example:* In a sports participation table `PARTICIPATION (IndexNo, EventCode, Place)`, neither `IndexNo` nor `EventCode` is unique on its own. `(IndexNo + EventCode)` together form the Composite Primary Key.
5. **Foreign Key - FK (ආගන්තුක යතුර):**
   * **[English Medium Text]:** "A field in one table that refers to the Primary Key in another table to establish a relationship between the two tables."
   * **[Sinhala Medium Text]:** "වගු දෙකක් අතර සබඳතාව ගොඩනැගීම සඳහා එක් වගුවක ප්‍රාථමික යතුර වෙනත් වගුවක ක්ෂේත්‍රයක් ලෙස ඇතුළත් කළ විට එම ක්ෂේත්‍රය ආගන්තුක යතුර (Foreign Key) ලෙස හැඳින්වේ."
6. **Referential Integrity (යොමු අඛණ්ඩතාව):**
   * **[English Medium Text]:** A constraint rule ensuring that Foreign Key values in a child table must match an existing Primary Key in the parent table, preventing orphaned records.
   * **[Sinhala Medium Text]:** ආගන්තුක යතුරක අඩංගු අගයක් මව් වගුවේ ප්‍රාථමික යතුරෙහි අනිවාර්යයෙන්ම තිබිය යුතු බවට තහවුරු කරන නීතිය යොමු අඛණ්ඩතාව (Referential Integrity) නම් වේ.

---

### 9.4 Entity-Relationship (ER) Cardinality & Real-World Modeling (සබඳතා කාඩිනැලිටි සහ ආකෘතිකරණය)

```
1. ONE-TO-ONE (1:1):
   [ CITIZEN ] ──────── ( Has ) ──────── [ NIC ]
   1 Citizen has exactly 1 NIC; 1 NIC belongs to 1 Citizen.

2. ONE-TO-MANY (1:N):
   [ CUSTOMER ] ──────── ( Places ) ───────< [ ORDERS ]
   1 Customer places Many Orders; Each Order belongs to 1 Customer.
   *RULE: Primary Key of CUSTOMER (CustomerID) becomes Foreign Key in ORDERS!

3. MANY-TO-MANY (M:N):
   [ STUDENT ] >─────── ( Studies ) ───────< [ SUBJECT ]
   1 Student studies Many Subjects; 1 Subject is studied by Many Students.
   *RULE: Cannot link directly! Decompose into two 1:N links using a Junction Table!
```

* **One-to-One (1:1):** Citizen ↔ NIC; Person ↔ Passport; School ↔ Principal.
* **One-to-Many (1:N):** Customer ↔ Orders; Mother ↔ Children; Department ↔ Employees; Publisher ↔ Books.
  * **Golden Rule:** The Primary Key of the "One" side must always be placed as a Foreign Key in the "Many" side.
* **Many-to-Many (M:N):** Student ↔ Subjects; Doctor ↔ Patients; Order ↔ Items; Author ↔ Books.
  * **Decomposition Rule:** Decompose using an intermediate **Junction Table** (Associative Table) with composite foreign keys that form a Composite Primary Key.

---

### 9.5 Common Data Types in DBMS (දත්ත සමුදායක භාවිත වන ප්‍රධාන දත්ත වර්ග)

| Data Type (දත්ත වර්ගය) | Description & Usage (විස්තරය සහ භාවිතය) | Examples (උදාහරණ) | Exam Rule (විභාග නීතිය) |
| :--- | :--- | :--- | :--- |
| **Short Text / Text (පෙළ)** | Stores alphanumeric characters, letters, symbols, and numbers not used for calculations (Max 255 chars). | `Name`, `Address`, `Index_No`, `TelephoneNo`, `NICNo` | **Critical Rule:** Telephone numbers (`0712345678`) and NICs must **always** be Short Text, never Number (to preserve leading zeros and characters). |
| **Long Text / Memo (දීර්ඝ පෙළ)** | Stores long text descriptions and paragraphs up to 65,535+ chars. | `Remarks`, `MedicalDescription`, `Abstract` | Used when text exceeds 255 characters. |
| **Number (සංඛ්‍යා)** | Stores numeric values used for mathematical calculations (integers, decimals). | `Marks`, `Quantity`, `Age`, `StockQty` | Use only for quantitative metrics subject to math operations. |
| **Date / Time (දිනය / වේලාව)** | Stores dates, times, or combined date-time values in standard formats. | `Date_of_Birth`, `OrderDate`, `RentDate` | Enables calendar validation and date arithmetic. |
| **Currency (මුදල්)** | Stores monetary values formatted with currency symbols and fixed decimal precision. | `Price`, `Salary`, `Fee`, `DailyRate` | Always preferred over standard Number for money. |
| **AutoNumber (ස්වයංක්‍රීය අංකය)** | Automatically generates a unique sequential number for each new record added. | `Student_ID`, `InvoiceNo`, `RentalID` | Ideal for artificial unique Primary Keys. |
| **Yes / No / Boolean (ඔව් / නැත)** | Stores logical binary values (True/False, Yes/No, 1/0). | `Is_Hosteller`, `Passed`, `Status` | High efficiency (1 bit storage). |

---

### 9.6 Database Operations & The 4 Core Objects (දත්ත සමුදා මෙහෙයුම් සහ ප්‍රධාන වස්තු 4)

1. **Tables (වගු):** Used to store structured data in rows and columns permanently.
   * **Design View (සැලසුම් දසුන):** Define field names, choose data types, configure field size and properties, set primary key.
   * **Datasheet View (දත්ත පත්‍රිකා දසුන):** View, enter, and edit record rows.
2. **Forms (ආකෘති පත්‍ර):** Used for user-friendly graphical data entry, viewing, and editing records while protecting raw table architecture from accidental modifications.
3. **Queries (විමසුම්):** Used to search, filter, retrieve, and display specific data matching defined criteria from one or more tables.
   * **Criteria Row Logic:** Same row = `AND` logic; Different rows = `OR` logic. Operators: `=`, `>`, `<`, `>=`, `<=`, `<>`, `BETWEEN ... AND ...`, `LIKE "S*"`.
4. **Reports (වාර්තා):** Used to format, calculate, summarize, and print data retrieved from tables or queries for presentation and administrative decision-making.

---

# SECTION B: Complete O/L Past Paper Question Extraction (2020 – 2025)
# නිල අධ්‍යයන පොදු සහතික පත්‍ර සාමාන්‍ය පෙළ විභාග ප්‍රශ්න හා ආදර්ශ විසඳුම්

---

### Question 01 (2020 O/L Paper I - Question 28)
* **Year & Question No:** 2020 O/L Paper I - Question 28
* **English Medium Question:**
  "28. Consider the following database table containing student data:
  `Student (IndexNo, StudentName, DOB, ClassCode)`
  Which field is most suitable to be selected as the Primary Key of this table?
  (1) IndexNo
  (2) StudentName
  (3) DOB
  (4) ClassCode"
* **Sinhala Medium Question:**
  "28. සිසුන්ගේ දත්ත අඩංගු පහත සඳහන් දත්ත සමුදා වගුව සලකා බලන්න:
  `Student (IndexNo, StudentName, DOB, ClassCode)`
  මෙම වගුවේ ප්‍රාථමික යතුර (Primary Key) ලෙස තෝරා ගැනීමට වඩාත්ම සුදුසු ක්ෂේත්‍රය කුමක්ද?
  (1) IndexNo
  (2) StudentName
  (3) DOB
  (4) ClassCode"
* **Correct Answer:** **(1) IndexNo**
* **Rationale:**  
  * **English:** `IndexNo` is strictly unique for every student and cannot contain null values. `StudentName`, `DOB`, and `ClassCode` can contain duplicates across multiple students.
  * **සිංහල:** `IndexNo` සෑම සිසුවෙකුටම අනන්‍ය වන අතර හිස් (Null) විය නොහැක. එකම නම, උපන් දිනය හෝ පන්ති කේතය සිසුන් කිහිපදෙනෙකුට තිබිය හැක.

---

### Question 02 (2020 O/L Paper II - Question 04)
* **Year & Question No:** 2020 O/L Paper II - Question 04
* **English Medium Question:**
  "4. (a) A database is maintained in a library to manage books and members. The following two tables are used:
  `BOOK (BookID, Title, Author, Publisher, CategoryCode)`
  `MEMBER (MemberID, MemberName, Address, TelephoneNo, DateJoined)`
  (i) State the Primary Key of the BOOK table.
  (ii) State the Primary Key of the MEMBER table.
  (iii) If a new table `LEND (LendID, MemberID, BookID, IssueDate, DueDate)` is created to record book lending, state the Foreign Keys in the LEND table."
* **Sinhala Medium Question:**
  "4. (a) පොත් සහ සාමාජිකයන් කළමනාකරණය සඳහා පුස්තකාලයක දත්ත සමුදායක් පවත්වාගෙන යනු ලබයි. ඒ සඳහා පහත වගු දෙක භාවිත වේ:
  `BOOK (BookID, Title, Author, Publisher, CategoryCode)`
  `MEMBER (MemberID, MemberName, Address, TelephoneNo, DateJoined)`
  (i) BOOK වගුවේ ප්‍රාථමික යතුර ලියන්න.
  (ii) MEMBER වගුවේ ප්‍රාථමික යතුර ලියන්න.
  (iii) පොත් බැහැරදීම සටහන් කිරීමට `LEND (LendID, MemberID, BookID, IssueDate, DueDate)` නමැති නව වගුවක් සාදන්නේ නම්, LEND වගුවේ ඇති ආගන්තුක යතුරු (Foreign Keys) සඳහන් කරන්න."
* **Model Answer (ආදර්ශ පිළිතුර):**
  * **(i)** `BookID`
  * **(ii)** `MemberID`
  * **(iii)** `MemberID` and `BookID`

---

### Question 03 (2021 O/L Paper I - Question 27)
* **Year & Question No:** 2021 O/L Paper I - Question 27
* **English Medium Question:**
  "27. Which of the following database objects is used to search and retrieve specific records matching given conditions from a table?
  (1) Form
  (2) Query
  (3) Report
  (4) Table"
* **Sinhala Medium Question:**
  "27. වගුවකින් ලබා දී ඇති කොන්දේසිවලට ගැලපෙන නිශ්චිත වාර්තා සෙවීම සහ ලබා ගැනීම සඳහා භාවිත වන දත්ත සමුදා වස්තුව කුමක්ද?
  (1) ආකෘති පත්‍රය (Form)
  (2) විමසුම (Query)
  (3) වාර්තාව (Report)
  (4) වගුව (Table)"
* **Correct Answer:** **(2) Query / විමසුම**
* **Rationale:**  
  * **English:** Queries are designed specifically to filter, search, sort, and extract records meeting user criteria.
  * **සිංහල:** පරිශීලකයා විසින් දෙන ලද කොන්දේසි මත පදනම්ව දත්ත පෙරීම, සෙවීම සහ ලබාගැනීම විමසුම් (Queries) මගින් සිදු කෙරේ.

---

### Question 04 (2021 O/L Paper II - Question 04)
* **Year & Question No:** 2021 O/L Paper II - Question 04
* **English Medium Question:**
  "4. Consider the following database tables used in a school canteen system:
  `ITEM (ItemCode, ItemName, UnitPrice)`
  `SALES (InvoiceNo, SaleDate, TotalAmount, CustomerID)`
  `SALES_DETAILS (InvoiceNo, ItemCode, Quantity)`
  (a) Write down the Primary Key of the ITEM table.
  (b) Write down the Composite Primary Key of the SALES_DETAILS table.
  (c) Write down the suitable Data Type for `UnitPrice` field."
* **Sinhala Medium Question:**
  "4. පාසල් ආපනශාලා පද්ධතියක භාවිත වන පහත දත්ත සමුදා වගු සලකා බලන්න:
  `ITEM (ItemCode, ItemName, UnitPrice)`
  `SALES (InvoiceNo, SaleDate, TotalAmount, CustomerID)`
  `SALES_DETAILS (InvoiceNo, ItemCode, Quantity)`
  (a) ITEM වගුවේ ප්‍රාථමික යතුර ලියන්න.
  (b) SALES_DETAILS වගුවේ සංයුක්ත ප්‍රාථමික යතුර (Composite Primary Key) ලියන්න.
  (c) `UnitPrice` ක්ෂේත්‍රය සඳහා වඩාත්ම සුදුසු දත්ත වර්ගය (Data Type) ලියන්න."
* **Model Answer (ආදර්ශ පිළිතුර):**
  * **(a)** `ItemCode`
  * **(b)** `(InvoiceNo + ItemCode)`
  * **(c)** `Currency` or `Number` (මුදල් හෝ සංඛ්‍යා)

---

### Question 05 (2022 O/L Paper I - Question 26)
* **Year & Question No:** 2022 O/L Paper I - Question 26
* **English Medium Question:**
  "26. Which data type is most appropriate for a field named `TelephoneNo` storing values like `0712345678` in a database table?
  (1) Currency
  (2) Number
  (3) Text
  (4) AutoNumber"
* **Sinhala Medium Question:**
  "26. දත්ත සමුදා වගුවක `0712345678` වැනි අගයන් ගබඩා කරන `TelephoneNo` නමැති ක්ෂේත්‍රය සඳහා වඩාත්ම සුදුසු දත්ත වර්ගය කුමක්ද?
  (1) මුදල් (Currency)
  (2) සංඛ්‍යා (Number)
  (3) පෙළ (Text)
  (4) ස්වයංක්‍රීය අංකය (AutoNumber)"
* **Correct Answer:** **(3) Text / පෙළ (Short Text)**
* **Rationale:**  
  * **English:** Storing telephone numbers as Number removes the leading zero (`071...` becomes `71...`). Also, no mathematical operations are performed on telephone numbers.
  * **සිංහල:** සංඛ්‍යා දත්ත වර්ගයකදී ආරම්භක බිංදුව (`0`) ස්වයංක්‍රීයව මැකී යන අතර දුරකථන අංක මත ගණිත කර්ම සිදු නොකරන බැවින් Text (Short Text) යෙදිය යුතුය.

---

### Question 06 (2022 O/L Paper II - Question 04)
* **Year & Question No:** 2022 O/L Paper II - Question 04
* **English Medium Question:**
  "4. A medical center maintains a relational database with the following tables:
  `PATIENT (PatientID, PatientName, ContactNo, Gender)`
  `DOCTOR (DoctorID, DoctorName, Specialization, Fee)`
  `APPOINTMENT (AppNo, PatientID, DoctorID, AppDate, AppTime)`
  (a) Identify the Primary Key for PATIENT and DOCTOR tables.
  (b) Identify the Foreign Keys in the APPOINTMENT table.
  (c) State the purpose of using Foreign Keys in a relational database."
* **Sinhala Medium Question:**
  "4. වෛද්‍ය මධ්‍යස්ථානයක් මගින් පහත වගු සහිත සබඳතා දත්ත සමුදායක් පවත්වාගෙන යනු ලබයි:
  `PATIENT (PatientID, PatientName, ContactNo, Gender)`
  `DOCTOR (DoctorID, DoctorName, Specialization, Fee)`
  `APPOINTMENT (AppNo, PatientID, DoctorID, AppDate, AppTime)`
  (a) PATIENT සහ DOCTOR වගුවල ප්‍රාථමික යතුරු හඳුනාගෙන ලියන්න.
  (b) APPOINTMENT වගුවේ ඇති ආගන්තුක යතුරු ලියන්න.
  (c) සබඳතා දත්ත සමුදායක ආගන්තුක යතුරු භාවිත කිරීමේ අරමුණ සඳහන් කරන්න."
* **Model Answer (ආදර්ශ පිළිතුර):**
  * **(a)** `PATIENT`: `PatientID` | `DOCTOR`: `DoctorID`
  * **(b)** `PatientID` and `DoctorID`
  * **(c)** To establish links/relationships between tables and ensure referential integrity. (වගු අතර සබඳතා ගොඩනැගීම සහ යොමු අඛණ්ඩතාව තහවුරු කිරීම).

---

### Question 07 (2023 O/L Paper I - Question 28)
* **Year & Question No:** 2023 O/L Paper I - Question 28
* **English Medium Question:**
  "28. In a relational database, what is a row in a table called?
  (1) Attribute
  (2) Field
  (3) Record / Tuple
  (4) Primary Key"
* **Sinhala Medium Question:**
  "28. සබඳතා දත්ත සමුදායක, වගුවක පේළියක් (Row) හඳුන්වනු ලබන්නේ කුමන නමකින්ද?
  (1) ගුණාංගය (Attribute)
  (2) ක්ෂේත්‍රය (Field)
  (3) වාර්තාව / ටපලනය (Record / Tuple)
  (4) ප්‍රාථමික යතුර (Primary Key)"
* **Correct Answer:** **(3) Record / Tuple (වාර්තාව / ටපලනය)**
* **Rationale:**  
  * **English:** Rows in relational database tables are called Records or Tuples; columns are called Attributes or Fields.
  * **සිංහල:** වගුවක තිරස් පේළි වාර්තා (Records) හෝ ටූපල (Tuples) ලෙසත්, සිරස් තීරු ක්ෂේත්‍ර (Fields) හෝ විශේෂණ (Attributes) ලෙසත් හඳුන්වයි.

---

### Question 08 (2023 O/L Paper II - Question 04)
* **Year & Question No:** 2023 O/L Paper II - Question 04
* **English Medium Question:**
  "4. Consider the following database tables of a vehicle rental company:
  `VEHICLE (VehicleNo, VehicleType, DailyRate, Status)`
  `CUSTOMER (NICNo, CustomerName, PhoneNo)`
  `RENTAL (RentalID, VehicleNo, NICNo, RentDate, ReturnDate)`
  (a) State the Primary Key of the VEHICLE table.
  (b) State two Foreign Keys in the RENTAL table.
  (c) State suitable data types for `RentDate` and `DailyRate` fields."
* **Sinhala Medium Question:**
  "4. වාහන කුලියට දෙන ආයතනයක පහත දත්ත සමුදා වගු සලකා බලන්න:
  `VEHICLE (VehicleNo, VehicleType, DailyRate, Status)`
  `CUSTOMER (NICNo, CustomerName, PhoneNo)`
  `RENTAL (RentalID, VehicleNo, NICNo, RentDate, ReturnDate)`
  (a) VEHICLE වගුවේ ප්‍රාථමික යතුර ලියන්න.
  (b) RENTAL වගුවේ ඇති ආගන්තුක යතුරු දෙක සඳහන් කරන්න.
  (c) `RentDate` සහ `DailyRate` ක්ෂේත්‍ර සඳහා සුදුසු දත්ත වර්ග සඳහන් කරන්න."
* **Model Answer (ආදර්ශ පිළිතුර):**
  * **(a)** `VehicleNo`
  * **(b)** `VehicleNo` and `NICNo`
  * **(c)** `RentDate`: Date/Time (දිනය/වේලාව) | `DailyRate`: Currency or Number (මුදල් හෝ සංඛ්‍යා)

---

### Question 09 (2024 O/L Paper II - Question 04)
* **Year & Question No:** 2024 O/L Paper II - Question 04
* **English Medium Question:**
  "4. A school sports database contains the following tables:
  `STUDENT (IndexNo, Name, House, Grade)`
  `EVENT (EventCode, EventName, GenderCategory)`
  `PARTICIPATION (IndexNo, EventCode, Place)`
  (a) State the Primary Keys of STUDENT and EVENT tables.
  (b) Identify the Composite Primary Key in PARTICIPATION table.
  (c) Explain why `IndexNo` alone cannot be used as the primary key in PARTICIPATION table."
* **Sinhala Medium Question:**
  "4. පාසල් ක්‍රීඩා දත්ත සමුදායක පහත වගු අඩංගු වේ:
  `STUDENT (IndexNo, Name, House, Grade)`
  `EVENT (EventCode, EventName, GenderCategory)`
  `PARTICIPATION (IndexNo, EventCode, Place)`
  (a) STUDENT සහ EVENT වගුවල ප්‍රාථමික යතුරු ලියන්න.
  (b) PARTICIPATION වගුවේ සංයුක්ත ප්‍රාථමික යතුර හඳුනාගෙන ලියන්න.
  (c) PARTICIPATION වගුවේ ප්‍රාථමික යතුර ලෙස `IndexNo` පමණක් භාවිත කළ නොහැක්කේ මන්දැයි පැහැදිලි කරන්න."
* **Model Answer (ආදර්ශ පිළිතුර):**
  * **(a)** `STUDENT`: `IndexNo` | `EVENT`: `EventCode`
  * **(b)** `(IndexNo + EventCode)`
  * **(c)** One student can participate in multiple sports events, so `IndexNo` would repeat across rows. Duplication violates the uniqueness constraint required of a primary key. (එක් ශිෂ්‍යයෙකු ඉසව් කිහිපයකට සහභාගී වන බැවින් `IndexNo` අගය නැවත නැවත ලියැවේ; ප්‍රාථමික යතුරක අගයන් පුනරාවර්තනය විය නොහැක.)

---

### Question 10 (2025 O/L Paper II - Question 04)
* **Year & Question No:** 2025 O/L Paper II - Question 04
* **English Medium Question:**
  "4. An online store uses a database with the following structure:
  `PRODUCT (ProductID, ProductName, Category, Price, StockQty)`
  `ORDERS (OrderID, OrderDate, CustomerID, TotalAmount)`
  `ORDER_ITEM (OrderID, ProductID, Quantity)`
  (a) State the primary keys for PRODUCT and ORDERS tables.
  (b) State the foreign keys in ORDER_ITEM table.
  (c) Write down the suitable data types for `OrderDate`, `Price`, and `StockQty`."
* **Sinhala Medium Question:**
  "4. මාර්ගගත වෙළඳසැලක් පහත ව්‍යුහය සහිත දත්ත සමුදායක් භාවිත කරයි:
  `PRODUCT (ProductID, ProductName, Category, Price, StockQty)`
  `ORDERS (OrderID, OrderDate, CustomerID, TotalAmount)`
  `ORDER_ITEM (OrderID, ProductID, Quantity)`
  (a) PRODUCT සහ ORDERS වගුවල ප්‍රාථමික යතුරු සඳහන් කරන්න.
  (b) ORDER_ITEM වගුවේ ඇති ආගන්තුක යතුරු සඳහන් කරන්න.
  (c) `OrderDate`, `Price`, සහ `StockQty` ක්ෂේත්‍ර සඳහා සුදුසු දත්ත වර්ග ලියන්න."
* **Model Answer (ආදර්ශ පිළිතුර):**
  * **(a)** `PRODUCT`: `ProductID` | `ORDERS`: `OrderID`
  * **(b)** `OrderID` and `ProductID`
  * **(c)** `OrderDate`: Date/Time (දිනය/වේලාව) | `Price`: Currency / Number (මුදල් හෝ සංඛ්‍යා) | `StockQty`: Number (සංඛ්‍යා)
