# Grade 10 ICT - Lesson 08: Dual-Medium Study & Past Paper Guide

## Document Overview
This study and past paper guide provides verbatim, dual-medium coverage of **Grade 10 - Lesson 08: Database Management (දත්ත සමුදා කළමනාකරණය)** from the official Sri Lankan O/L ICT curriculum. All theory content and exam questions are extracted word-for-word from the Grade 10 English Medium Textbook (`ICT G-10 E.pdf`), Grade 10 Sinhala Medium Textbook (`ict g10 S.pdf`), and official G.C.E. O/L examination past papers (2020–2025).

---

# SECTION A: Complete Learning Guide & Short Notes (Comprehensive Theory)

### 8.1 Introduction to Database Management (දත්ත සමුදා කළමනාකරණය පිළිබඳ හැඳින්වීම)

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

---

### 8.2 Data Hierarchy in Computers (පරිගණකයේ දත්ත ධුරාවලිය)

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
  1. **Bit (බිටුව):** Binary digit `0` or `1`.
  2. **Byte / Character (බයිටය / අක්ෂරය):** 8 Bits representing a character.
  3. **Field / Attribute (ක්ෂේත්‍රය / ගුණාංගය):** A single category of information stored in a column (e.g., `Student_Name`, `Date_of_Birth`, `Telephone_No`).
  4. **Record / Tuple (වාර්තාව / ටපලනය):** A collection of related fields representing a single entity stored in a row (e.g., all details belonging to one specific student).
  5. **Table / Relation (වගුව / සබඳතාව):** A collection of logically related records stored in rows and columns.
  6. **Database (දත්ත සමුදාය):** A collection of related tables or files managed together.

---

### 8.3 Relational Database Concepts & Key Components (සබඳතා දත්ත සමුදා සංකල්ප සහ ප්‍රධාන සංරචක)

#### Relational Database Management System - RDBMS (සබඳතා දත්ත සමුදා කළමනාකරණ පද්ධති)
* **Definition (අර්ථ දැක්වීම):**
  * **[English Medium Text]:** "A database model that stores data in two-dimensional tables (consisting of rows and columns) and establishes relationships between tables using common fields is called a Relational Database Management System (RDBMS)."
  * **[Sinhala Medium Text]:** "දත්ත ද්විමාන වගු (පේළි සහ තීරු) ලෙස ගබඩා කර, පොදු ක්ෂේත්‍ර භාවිතයෙන් වගු අතර සබඳතා ගොඩනගන දත්ත සමුදා ආකෘතිය සබඳතා දත්ත සමුදා කළමනාකරණ පද්ධතියක් (RDBMS) ලෙස හැඳින්වේ."
  * *Software Examples:* Microsoft Access, MySQL, Oracle, PostgreSQL, SQLite.

#### Primary Key and Foreign Key (ප්‍රාථමික යතුර සහ ආගන්තුක යතුර)

1. **Primary Key - PK (ප්‍රාථමික යතුර):**
   * **[English Medium Text]:** "A field or a combination of fields that uniquely identifies each record in a table. A primary key cannot contain NULL values and must contain unique values for every record."
   * **[Sinhala Medium Text]:** "වගුවක ඇති සෑම වාර්තාවක්ම අනන්‍යව (Unique) හඳුනා ගැනීම සඳහා යොදාගන්නා ක්ෂේත්‍රයක් හෝ ක්ෂේත්‍ර එකතුවක් ප්‍රාථමික යතුර (Primary Key) ලෙස හැඳින්වේ. ප්‍රාථමික යතුරක් සඳහා හිස් අගයන් (NULL) පැවතිය නොහැකි අතර සෑම වාර්තාවකටම වෙනස්ම වූ අගයක් තිබිය යුතුය."
   * *Examples:* `Admission_No`, `NIC_Number`, `Item_Code`, `Index_No`.

2. **Composite Primary Key (සංයුක්ත ප්‍රාථමික යතුර):**
   * **[English Medium Text]:** "When more than one field is combined together to form a unique identifier for a record in a table, it is called a Composite Primary Key."
   * **[Sinhala Medium Text]:** "වාර්තාවක් අනන්‍යව හඳුනා ගැනීමට ක්ෂේත්‍ර එකකට වඩා වැඩි ගණනක් එකතු කර සාදාගන්නා ප්‍රාථමික යතුර සංයුක්ත ප්‍රාථමික යතුරක් (Composite Primary Key) ලෙස හැඳින්වේ."

3. **Foreign Key - FK (ආගන්තුක යතුර):**
   * **[English Medium Text]:** "A field in one table that refers to the Primary Key in another table to establish a relationship between the two tables."
   * **[Sinhala Medium Text]:** "වගු දෙකක් අතර සබඳතාව ගොඩනැගීම සඳහා එක් වගුවක ප්‍රාථමික යතුර වෙනත් වගුවක ක්ෂේත්‍රයක් ලෙස ඇතුළත් කළ විට එම ක්ෂේත්‍රය ආගන්තුක යතුර (Foreign Key) ලෙස හැඳින්වේ."

---

### 8.4 Common Data Types in DBMS (දත්ත සමුදායක භාවිත වන ප්‍රධාන දත්ත වර්ග)

| Data Type (දත්ත වර්ගය) | Description & Usage (විස්තරය සහ භාවිතය) | Examples (උදාහරණ) |
| :--- | :--- | :--- |
| **Short Text / Text (පෙළ)** | Stores alphanumeric characters, letters, symbols, and numbers not used for calculations (Max 255 chars). | `Name`, `Address`, `Index_No` (`S1024`) |
| **Long Text / Memo (දීර්ඝ පෙළ)** | Stores long text descriptions and paragraphs. | `Remarks`, `Description` |
| **Number (සංඛ්‍යා)** | Stores numeric values used for mathematical calculations (integers, decimals). | `Marks`, `Quantity`, `Age` |
| **Date / Time (දිනය / වේලාව)** | Stores dates, times, or combined date-time values in standard formats. | `Date_of_Birth`, `Order_Date` |
| **Currency (මුදල්)** | Stores monetary values formatted with currency symbols and decimals. | `Price`, `Salary`, `Fee` |
| **AutoNumber (ස්වයංක්‍රීය අංකය)** | Automatically generates a unique sequential number for each new record added. | `Student_ID`, `Invoice_No` |
| **Yes / No / Boolean (ඔව් / නැත)** | Stores logical binary values (True/False, Yes/No, 1/0). | `Is_Hosteller`, `Passed` |

---

### 8.5 Database Operations & Objects (දත්ත සමුදා මෙහෙයුම් සහ වස්තු)

#### Core Database Objects (දත්ත සමුදා වස්තු):
1. **Tables (වගු):** Used to store data in structured rows and columns.
2. **Forms (ආකෘති පත්‍ර):** Used for user-friendly data entry, viewing, and editing records.
3. **Queries (විමසුම්):** Used to search, filter, retrieve, and display specific data matching defined criteria from one or more tables.
4. **Reports (වාර්තා):** Used to format, summarize, and print data retrieved from tables or queries for presentation/decision making.

---

# SECTION B: Complete O/L Past Paper Question Extraction (2020 – 2025)

### 2.1 O/L Past Paper Questions on Databases

#### Question 01 (2020 O/L Paper I - Question 28)
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

#### Question 02 (2020 O/L Paper II - Question 04)
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
  (iii) පොත් බැහැරදීම සටහන් කිරීමට `LEND (LendID, MemberID, BookID, IssueDate, DueDate)` නමැති නවාංග වගුවක් සාදන්නේ නම්, LEND වගුවේ ඇති ආගන්තුක යතුරු (Foreign Keys) සඳහන් කරන්න."

#### Question 03 (2021 O/L Paper I - Question 27)
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

#### Question 04 (2021 O/L Paper II - Question 04)
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

#### Question 05 (2022 O/L Paper I - Question 26)
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

#### Question 06 (2022 O/L Paper II - Question 04)
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

#### Question 07 (2023 O/L Paper I - Question 28)
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

#### Question 08 (2023 O/L Paper II - Question 04)
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

#### Question 09 (2024 O/L Paper II - Question 04)
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

#### Question 10 (2025 O/L Paper II - Question 04)
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

### 2.2 Unexamined Sub-topics Note (නොඅසන ලද උප-මාතෘකා පිළිබඳ සටහන)
* All core sub-topics of Database Management (Primary/Foreign Keys, Data Types, Data Hierarchy, Database Objects, and Relational Table Relationships) have been regularly tested in O/L examinations between 2020 and 2025.
