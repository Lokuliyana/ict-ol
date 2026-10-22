import { GeneralLessonData } from '../allLessonsData';

export const G10_U9_DATA: GeneralLessonData = {
  id: 'g10-u9',
  grade: '10',
  unitNumber: 9,
  titleEn: 'Database Management',
  titleSi: 'දත්ත සමුදා කළමනාකරණය',
  subtopics: [
    {
      id: 'g10-u9-st-1',
      number: '9.1',
      titleEn: 'Introduction to Database Management Concepts',
      titleSi: 'දත්ත සමුදා කළමනාකරණය පිළිබඳ හැඳින්වීම',
      summaryEn: 'Core concepts of Data vs Information, Manual file systems vs Electronic DBMS, and the Computer Data Hierarchy.',
      summarySi: 'දත්ත සහ තොරතුරු, සම්ප්‍රදායික ලිපිගොනු සහ ඉලෙක්ට්‍රොනික දත්ත සමුදා පද්ධති, සහ පරිගණක දත්ත ධුරාවලිය.',
      blocks: [
        {
          id: 'b-g10-u9-1-1',
          en: `* **Data (දත්ත):** Raw, unprocessed facts, numbers, or observations lacking context (e.g., "Kamal", "75", "2008-05-14").
* **Information (තොරතුරු):** Data processed and organized into meaningful context for decision-making (e.g., "Kamal scored 75 marks in ICT").
* **Database (දත්ත සමුදාය):** An organized collection of logically related data stored for efficient access, manipulation, and retrieval.`,
          si: `* **දත්ත (Data):** කිසියම් සන්දර්භයක් හෝ අර්ථයක් නොමැති, සැකසීමට ලක් නොකළ අමු කරුණු, සංඛ්‍යා හෝ නිරීක්ෂණ වේ (උදා: "කමල්", "75", "2008-05-14").
* **තොරතුරු (Information):** තීරණ ගැනීම සඳහා ප්‍රයෝජනවත් වන පරිදි අර්ථවත් අයුරින් සකසන ලද දත්ත වේ (උදා: "කමල් ICT විෂය සඳහා ලකුණු 75ක් ලබාගෙන ඇත").
* **දත්ත සමුදාය (Database):** පහසුවෙන් ප්‍රවේශ විය හැකි, කළමනාකරණය කළ හැකි සහ ලබාගත හැකි පරිදි සංවිධානය කරන ලද එකිනෙකට සම්බන්ධ දත්ත සමූහයකි.`,
          highlightTerm: 'Data vs Information'
        },
        {
          id: 'b-g10-u9-1-2',
          en: `* **Manual File System Architecture:** Traditional filing uses paper folders, filing cabinets, and physical ledgers.
* **Key Limitations & Disadvantages:**
  - **High Data Redundancy:** Unnecessary duplicate data recorded across multiple manual files.
  - **Data Inconsistency:** Updates in one file fail to reflect in others, causing conflicting records.
  - **Slow Search & Retrieval:** Manual leafing through paper files is slow and tedious.
  - **Physical Space Consumption:** Vast rooms and filing cabinets required for storage.
  - **Vulnerability to Physical Decay:** Readily damaged by fire, water, insects, or moisture.
  - **Lack of Concurrent Access:** Only one clerk can handle a physical folder at any given time.`,
          si: `* **සාම්ප්‍රදායික ලිපිගොනු පද්ධති:** කඩදාසි ලිපිගොනු, ලේඛන සහ කබඩ් භාවිතයෙන් දත්ත කළමනාකරණය කරයි.
* **ප්‍රධාන සීමාවන් සහ අවාසි:**
  - **ඉහළ දත්ත අතිරික්තය (Data Redundancy):** විවිධ ලිපිගොනුවල එකම දත්ත අනවශ්‍ය ලෙස නැවත නැවත සටහන් වීම.
  - **දත්තවල අසමතුලිතතාව (Data Inconsistency):** එක් ලිපිගොනුවක් යාවත්කාලීන කළ විට අනෙක් ගොනුවල නොගැලපීම් ඇතිවීම.
  - **දත්ත සෙවීමේ ප්‍රමාදය:** ලේඛන අතින් පෙරළා බැලීමට අධික කාලයක් වැයවීම.
  - **විශාල භෞතික ඉඩක් අවශ්‍ය වීම:** ලිපිගොනු ගබඩා කිරීමට විශාල කාමර හා කබඩ් අවශ්‍ය වීම.
  - **භෞතික හානි වීමේ අවදානම:** ගිනි ගැනීම්, ජල හානි, කෘමීන් හෝ දිරාපත් වීම්වලින් විනාශ විය හැකි වීම.
  - **එකවර ප්‍රවේශ විය නොහැකි වීම:** එක් අවස්ථාවකදී ලිපිගොනුවක් භාවිත කළ හැක්කේ එක් අයෙකුට පමණි.`,
          highlightTerm: 'Manual File System Limitations'
        },
        {
          id: 'b-g10-u9-1-3',
          en: `* **Electronic DBMS Core Advantages:**
  - **Centralized Data Storage:** Single synchronized storage eliminating fragmented copies.
  - **Minimized Data Redundancy:** Avoids duplicate data storage, saving disk space.
  - **High Data Consistency:** Changes made to a record update globally across all views.
  - **High-Speed Query Retrieval:** Millisecond search and calculation across millions of records.
  - **Concurrent Multi-User Access:** Many network users can read and write simultaneously.
  - **Role-Based Security:** User accounts, passwords, and permissions prevent unauthorized edits.
  - **Automated Validation & Backups:** Enforces data integrity rules and automated backup routines.`,
          si: `* **ඉලෙක්ට්‍රොනික දත්ත සමුදා (DBMS) ප්‍රධාන වාසි:**
  - **කේන්ද්‍රගත ආචයනය:** සියලු දත්ත තනි මධ්‍යගත පද්ධතියක ඒකාබද්ධව පැවතීම.
  - **අවම දත්ත අතිරික්තය:** දත්ත අනවශ්‍ය ලෙස පුනරාවර්තනය වීම වැළැක්වීම.
  - **ඉහළ දත්ත අනුකූලතාව:** එක් තැනක කරන සංශෝධනයක් සියලු අංශ වෙත ක්ෂණිකව යාවත්කාලීන වීම.
  - **මිලිතත්පර ගණනකින් දත්ත සෙවීම:** විමසුම් (Queries) මඟින් විශාල දත්ත අතරින් ක්ෂණිකව තොරතුරු ලබාගැනීම.
  - **එකවර බොහෝ දෙනෙකුට ප්‍රවේශය:** ජාලගතව පරිශීලකයින් විශාල පිරිසකට එකවර දත්ත හැසිරවීමට හැකි වීම.
  - **මුරපද හා ආරක්ෂාව:** පරිශීලක ගිණුම් හා වරප්‍රසාද මඟින් දත්තවල රහස්‍යභාවය රැකීම.
  - **ස්වයංක්‍රීය උපස්ථ (Backups):** දත්ත ස්වයංක්‍රීයව උපස්ථ පිටපත් කිරීම සහ වලංගුතා නීති පැනවීම.`,
          highlightTerm: 'Advantages of Electronic DBMS'
        },
        {
          id: 'b-g10-u9-1-4',
          en: `[Bit (0 or 1)] ➔ [Byte / Character] ➔ [Field / Attribute] ➔ [Record / Tuple] ➔ [Table / Relation] ➔ [Database]

* **Computer Data Hierarchy (Smallest to Largest):**
  - **Bit (බිටුව):** Smallest binary unit of data in computing, holding value 0 or 1.
  - **Byte (බයිටය):** 8 bits grouped together representing a character or symbol.
  - **Field / Attribute (ක්ෂේත්‍රය):** A table column containing a single property (e.g., StudentName).
  - **Record / Tuple (ලේඛනය):** A table row representing one complete entity (e.g., student's full record).
  - **Table / Relation (වගුව):** A 2-dimensional grid composed of rows and columns.
  - **Database (දත්ත සමුදාය):** An integrated collection of logically related tables.`,
          si: `[බිටුව (0 හෝ 1)] ➔ [බයිටය / අක්ෂරය] ➔ [ක්ෂේත්‍රය / තීරුව] ➔ [ලේඛනය / පේළිය] ➔ [වගුව / සබඳතාව] ➔ [දත්ත සමුදාය]

* **පරිගණකයේ දත්ත ධුරාවලිය (කුඩාම ඒකකයේ සිට විශාලතම ඒකකය දක්වා):**
  - **බිටුව (Bit):** පරිගණකයක ඇති කුඩාම දත්ත ඒකකය (0 හෝ 1).
  - **බයිටය (Byte):** අක්ෂරයක් නිරූපණය කරන බිටු 8ක එකතුව.
  - **ක්ෂේත්‍රය / විශේෂණය (Field):** තනි ගුණාංගයක් දක්වන වගුවේ තීරුවක් (උදා: StudentName).
  - **ලේඛනය / ටූපලය (Record):** එක් වස්තුවක් පිළිබඳ සියලු දත්ත අඩංගු වගුවේ පේළියක්.
  - **වගුව / සබඳතාව (Table):** පේළි සහ තීරු සහිත ද්විමාන ජාලය.
  - **දත්ත සමුදාය (Database):** එකිනෙකට තාර්කිකව සම්බන්ධ වූ වගු එකතුව.`,
          highlightTerm: 'Data Hierarchy'
        }
      ],
      examples: [
        {
          id: 'ex-g10-u9-1-1',
          titleEn: 'Data Hierarchy Diagram',
          titleSi: 'දත්ත ධුරාවලි සටහන',
          contentEn: `Database (දත්ත සමුදාය: SCHOOL_DB)
   │
   ├── Table (වගුව: STUDENT)
   │      │
   │      ├── Record (ලේඛනය / පේළිය: "S101 | Kamal Perera | 2008-05-14")
   │      │      │
   │      │      ├── Field (ක්ෂේත්‍රය / තීරුව: "Kamal Perera")
   │      │      │      │
   │      │      │      ├── Byte (බයිටය / අක්ෂරය: 'K' -> 01001011)
   │      │      │      │      │
   │      │      │      │      └── Bit (බිටුව: 0 or 1)`,
          contentSi: `Database (දත්ත සමුදාය: SCHOOL_DB)
   │
   ├── Table (වගුව: STUDENT)
   │      │
   │      ├── Record (ලේඛනය / පේළිය: "S101 | Kamal Perera | 2008-05-14")
   │      │      │
   │      │      ├── Field (ක්ෂේත්‍රය / තීරුව: "Kamal Perera")
   │      │      │      │
   │      │      │      ├── Byte (බයිටය / අක්ෂරය: 'K' -> 01001011)
   │      │      │      │      │
   │      │      │      │      └── Bit (බිටුව: 0 or 1)`
        }
      ],
      checkpointQuiz: {
        id: 'q-g10-u9-1',
        questionEn: 'Which sequence correctly represents the organizational hierarchy of data in computer systems from smallest to largest?',
        questionSi: 'කුඩාම ඒකකයේ සිට විශාලතම ඒකකය දක්වා පරිගණක දත්ත ධුරාවලිය නිවැරදිව පෙළගස්වා ඇති පිළිවෙළ කුමක්ද?',
        options: [
          { id: '1', en: 'Bit → Byte → Field → Record → Table → Database', si: 'බිටුව → බයිටය → ක්ෂේත්‍රය → ලේඛනය → වගුව → දත්ත සමුදාය' },
          { id: '2', en: 'Byte → Bit → Record → Field → Table → Database', si: 'බයිටය → බිටුව → ලේඛනය → ක්ෂේත්‍රය → වගුව → දත්ත සමුදාය' },
          { id: '3', en: 'Bit → Field → Byte → Record → Database → Table', si: 'බිටුව → ක්ෂේත්‍රය → බයිටය → ලේඛනය → දත්ත සමුදාය → වගුව' },
          { id: '4', en: 'Field → Record → Byte → Bit → Table → Database', si: 'ක්ෂේත්‍රය → ලේඛනය → බයිටය → බිටුව → වගුව → දත්ත සමුදාය' }
        ],
        correctOptionId: '1',
        explanationEn: 'The data hierarchy flows: Bit (binary digit) → Byte (character) → Field (column) → Record (row) → Table (file) → Database.',
        explanationSi: 'දත්ත ධුරාවලිය පෙළගැසෙන්නේ: බිටුව → බයිටය (අක්ෂරය) → ක්ෂේත්‍රය (තීරුව) → ලේඛනය (පේළිය) → වගුව → දත්ත සමුදාය යන අනුපිළිවෙළටයි.'
      }
    },
    {
      id: 'g10-u9-st-2',
      number: '9.2',
      titleEn: 'Relational Database Concepts, Keys & Data Types',
      titleSi: 'සම්බන්ධතා දත්ත සමුදා සංකල්ප, යතුරු සහ දත්ත වර්ග',
      summaryEn: 'Relational architecture (RDBMS), Primary Key, Candidate Key, Alternate Key, Composite Key, Foreign Key, Integrity Constraints, and Data Types.',
      summarySi: 'සම්බන්ධතා දත්ත සමුදාය (RDBMS), ප්‍රාථමික යතුරු, ආගන්තුක යතුරු, අපේක්ෂක යතුරු, සංයුක්ත යතුරු, යොමු අඛණ්ඩතාව සහ දත්ත වර්ග.',
      blocks: [
        {
          id: 'b-g10-u9-2-1',
          en: `* **RDBMS Core Architecture:**
  - **Relational Model:** Organizes data into 2-dimensional tables (Relations) comprising rows (Tuples) and columns (Attributes).
  - **Table Relationships:** Links between tables are established using matching common fields.
  - **Industry Examples:** Microsoft Access, LibreOffice Base, MySQL, and Oracle Database.`,
          si: `* **සම්බන්ධතා දත්ත සමුදා (RDBMS) මූලික ව්‍යුහය:**
  - **සම්බන්ධතා ආකෘතිය:** දත්ත පේළි (ටූපල) සහ තීරු (විශේෂණ) සහිත ද්විමාන වගු (සබඳතා) ලෙස සංවිධානය කරයි.
  - **වගු අතර සබඳතා:** වගු අතර සම්බන්ධතා ගොඩනගන්නේ පොදු ගැලපෙන ක්ෂේත්‍ර භාවිතයෙනි.
  - **ප්‍රධාන මෘදුකාංග උදාහරණ:** Microsoft Access, LibreOffice Base, MySQL, සහ Oracle.`,
          highlightTerm: 'RDBMS Definition'
        },
        {
          id: 'b-g10-u9-2-2',
          en: `* **Relational Database Key Classifications:**
  - **Candidate Key (අපේක්ෂක යතුර):** Any attribute or combination of attributes capable of uniquely identifying a record.
  - **Primary Key - PK (ප්‍රාථමික යතුර):** The chosen candidate key. Must be strictly unique and can NEVER contain NULL values (**Entity Integrity Rule**).
  - **Alternate Key (විකල්ප යතුර):** Any eligible candidate key not selected as the primary key.
  - **Composite Primary Key (සංයුක්ත ප්‍රාථමික යතුර):** Formed by combining two or more fields together when no single field can guarantee uniqueness alone.`,
          si: `* **සම්බන්ධතා දත්ත සමුදා යතුරු වර්ගීකරණය:**
  - **අපේක්ෂක යතුර (Candidate Key):** ලේඛනයක් අනන්‍යව හඳුනාගැනීමේ හැකියාව ඇති ඕනෑම ක්ෂේත්‍රයක් හෝ ක්ෂේත්‍ර එකතුවකි.
  - **ප්‍රාථමික යතුර (Primary Key):** තෝරාගත් ප්‍රධාන අපේක්ෂක යතුරයි. එය අනිවාර්යයෙන්ම අනන්‍ය විය යුතු අතර කිසිවිටෙකත් හිස් (NULL) විය නොහැක (**Entity Integrity නීතිය**).
  - **විකල්ප යතුර (Alternate Key):** ප්‍රාථමික යතුර ලෙස තෝරා නොගත් අනෙකුත් අපේක්ෂක යතුරුයි.
  - **සංයුක්ත ප්‍රාථමික යතුර (Composite Primary Key):** තනි ක්ෂේත්‍රයකින් අනන්‍යතාව තහවුරු කළ නොහැකි වූ විට ක්ෂේත්‍ර දෙකක් හෝ වැඩි ගණනක් එකතු කර සාදාගන්නා යතුරයි.`,
          highlightTerm: 'Database Keys'
        },
        {
          id: 'b-g10-u9-2-3',
          en: `* **Foreign Key & Referential Integrity Constraints:**
  - **Foreign Key - FK (ආගන්තුක යතුර):** A field in a child table that matches the Primary Key of a parent table, establishing a relational link between them.
  - **Referential Integrity Rule:** Mandates that a Foreign Key value in the child table MUST match an existing Primary Key in the parent table (or be set to NULL), strictly preventing orphaned child records.`,
          si: `* **ආගන්තුක යතුර සහ යොමු අඛණ්ඩතාව:**
  - **ආගන්තුක යතුර (Foreign Key):** මව් වගුවක ප්‍රාථමික යතුර හා සම්බන්ධ වෙමින් වගු දෙක අතර සබඳතාව ගොඩනැගීමට දරු වගුවේ යොදන ක්ෂේත්‍රයයි.
  - **යොමු අඛණ්ඩතාව (Referential Integrity):** දරු වගුවේ ආගන්තුක යතුරක අගයක් මව් වගුවේ ප්‍රාථමික යතුරෙහි අනිවාර්යයෙන්ම තිබිය යුතු බවට තහවුරු කරමින් වලංගු නොවන හෝ අතරමං වූ දත්ත ඇතුළත් වීම වළක්වයි.`,
          highlightTerm: 'Foreign Key & Referential Integrity'
        },
        {
          id: 'b-g10-u9-2-4',
          en: `* **DBMS Data Types:**
  - **Short Text:** Up to 255 alphanumeric characters (used for names, phone numbers, NICs).
  - **Long Text / Memo:** Up to 65,535+ characters for descriptive notes and long remarks.
  - **Number:** Numeric values used in mathematical calculations.
  - **Date/Time:** Calendar dates and timestamps.
  - **Currency:** Monetary values with fixed decimal precision.
  - **AutoNumber:** Automatically generated sequential unique integer (ideal for surrogate primary keys).
  - **Yes/No:** Boolean logical flag (True/False).
* **Key Field Properties:**
  - **Field Size:** Sets maximum character length or numeric limit.
  - **Default Value:** Automatically populated preset value for new records.
  - **Validation Rule:** Logic expression restricting input values (e.g., \`>=0 AND <=100\`).
  - **Validation Text:** Custom error message displayed when a validation rule is violated.
  - **Required:** Enforces that a field cannot be left blank (Not Null).`,
          si: `* **DBMS දත්ත වර්ග (Data Types):**
  - **Short Text:** අක්ෂර 255 දක්වා (නම්, දුරකථන අංක, NIC සඳහා).
  - **Long Text / Memo:** අක්ෂර 65,535+ දක්වා දීර්ඝ විස්තර සඳහා.
  - **Number:** ගණිතමය ගණනය කිරීම් සඳහා භාවිත වන සංඛ්‍යාත්මක අගයන්.
  - **Date/Time:** දින දර්ශන දින සහ වේලාවන්.
  - **Currency:** ස්ථාවර දශම නිරවද්‍යතාවක් සහිත මුදල් අගයන්.
  - **AutoNumber:** ස්වයංක්‍රීයව ජනනය වන අනන්‍ය අනුක්‍රමික පූර්ණ සංඛ්‍යාව (ප්‍රාථමික යතුරු සඳහා සුදුසුයි).
  - **Yes/No:** බූලීය තාර්කික අගයන් (සත්‍ය/අසත්‍ය).
* **ප්‍රධාන ක්ෂේත්‍ර ගුණාංග (Field Properties):**
  - **Field Size:** ක්ෂේත්‍රයේ උපරිම අක්ෂර ප්‍රමාණය හෝ අගය පරාසය.
  - **Default Value (පෙරනිමි අගය):** නව ලේඛනයක් සඳහා පෙරනිමියෙන් ඇතුළත් වන අගය.
  - **Validation Rule (වලංගුතා නීතිය):** ඇතුළත් කිරීම් පාලනය කරන තාර්කික නීතිය (උදා: \`>=0 AND <=100\`).
  - **Validation Text:** වලංගුතා නීතිය උල්ලංඝනය වූ විට පෙන්වන දෝෂ පණිවිඩය.
  - **Required:** ක්ෂේත්‍රය හිස්ව (NULL) තැබීම වැළැක්වීමේ අවශ්‍යතාව.`,
          highlightTerm: 'Data Types & Field Properties'
        }
      ],
      examples: [
        {
          id: 'ex-g10-u9-2-1',
          titleEn: 'Relational Schema Linkage Example',
          titleSi: 'සම්බන්ධතා ක්‍රමලේඛ සබඳතා ආදර්ශය',
          contentEn: `STUDENT Table:
StudentID [PK] | NIC_No [Alt Key] | FullName      | ClassID [FK]
S001           | 200812301234     | Kamal Perera  | C10A
S002           | 200845607890     | Nimal Silva   | C10B

CLASS Table:
ClassID [PK]   | ClassName        | ClassTeacher
C10A           | Grade 10-A       | Mr. Perera
C10B           | Grade 10-B       | Ms. Fernando`,
          contentSi: `STUDENT Table:
StudentID [PK] | NIC_No [Alt Key] | FullName      | ClassID [FK]
S001           | 200812301234     | Kamal Perera  | C10A
S002           | 200845607890     | Nimal Silva   | C10B

CLASS Table:
ClassID [PK]   | ClassName        | ClassTeacher
C10A           | Grade 10-A       | Mr. Perera
C10B           | Grade 10-B       | Ms. Fernando`
        }
      ],
      checkpointQuiz: {
        id: 'q-g10-u9-2',
        questionEn: 'Which database rule ensures that a Foreign Key value in a child table must match an existing Primary Key in the parent table?',
        questionSi: 'දරුවකු වැනි වගුවක (Child table) ඇති ආගන්තුක යතුරක අගයක් මව් වගුවේ ප්‍රාථමික යතුරෙහි අනිවාර්යයෙන්ම තිබිය යුතු බවට තහවුරු කරන දත්ත සමුදා නීතිය කුමක්ද?',
        options: [
          { id: '1', en: 'Referential Integrity', si: 'යොමු අඛණ්ඩතාව (Referential Integrity)' },
          { id: '2', en: 'Entity Integrity', si: 'එන්ටිටි අඛණ්ඩතාව (Entity Integrity)' },
          { id: '3', en: 'Domain Redundancy', si: 'වසම් අතිරික්තය' },
          { id: '4', en: 'Data Normalization Rule 0', si: 'දත්ත සාමාන්‍යකරණය' }
        ],
        correctOptionId: '1',
        explanationEn: 'Referential Integrity guarantees that relationships between tables remain consistent and prevents invalid orphaned records.',
        explanationSi: 'යොමු අඛණ්ඩතාව (Referential Integrity) මඟින් වගු අතර සබඳතාවල නිරවද්‍යතාව ආරක්ෂා කරන අතර වලංගු නොවන අගයන් ඇතුළත් වීම වළක්වයි.'
      }
    },
    {
      id: 'g10-u9-st-3',
      number: '9.3',
      titleEn: 'Entity-Relationship (ER) Modeling & Cardinality',
      titleSi: 'එන්ටිටි-සබඳතා (ER) ආකෘතිකරණය සහ කාඩිනැලිටි',
      summaryEn: 'ER symbols (Entities, Attributes, Relationships), Cardinality ratios (1:1, 1:N, M:N), and Junction tables.',
      summarySi: 'ER සංකේත (එන්ටිටි, විශේෂණ, සබඳතා), කාඩිනැලිටි අනුපාත (1:1, 1:N, M:N) සහ සන්ධි වගු මඟින් M:N නිරාකරණය.',
      blocks: [
        {
          id: 'b-g10-u9-3-1',
          en: `* **ER Modeling Building Blocks:**
  - **Entity (එන්ටිටිය):** A real-world person, place, or object about which data is maintained (drawn as a **Rectangle**).
  - **Attribute (විශේෂණය):** An individual property describing an entity (drawn as an **Oval / Ellipse**).
  - **Relationship (සබඳතාව):** An association or linkage between entities (drawn as a **Diamond**).`,
          si: `* **ER ආකෘතිකරණයේ මූලික සංරචක:**
  - **එන්ටිටිය (Entity):** දත්ත රැස් කරන සැබෑ ලෝකයේ වස්තුවක් හෝ පුද්ගලයෙකි (**සෘජුකෝණාස්‍ර** මඟින් නිරූපණය වේ).
  - **විශේෂණය (Attribute):** එන්ටිටියක් විස්තර කරන තනි ගුණාංගයකි (**ඉලිප්ස** මඟින් නිරූපණය වේ).
  - **සබඳතාව (Relationship):** එන්ටිටි අතර පවතින සබඳතාවයි (**රොම්බස** මඟින් නිරූපණය වේ).`,
          highlightTerm: 'ER Diagram Components'
        },
        {
          id: 'b-g10-u9-3-2',
          en: `* **One-to-One (1:1) Cardinality:**
  - **Definition:** Exactly one instance of entity A matches at most one instance of entity B, and vice versa.
  - **Real-World Examples:** Citizen ↔ NIC Number, Person ↔ Passport, School ↔ Principal.
  - **Implementation:** The Primary Key of either table can be placed as a Foreign Key in the other table.`,
          si: `* **එකකට එක (1:1) සබඳතාව:**
  - **අර්ථ දැක්වීම:** A එන්ටිටියේ එක් අවස්ථාවකට B එන්ටිටියේ ගැළපෙන්නේ එක් අවස්ථාවක් පමණි (ප්‍රතිලෝමවද එසේමය).
  - **සැබෑ ලෝක උදාහරණ:** පුරවැසියා ↔ ජාතික හැඳුනුම්පත, පුද්ගලයා ↔ විදේශ ගමන් බලපත්‍රය, පාසල ↔ විදුහල්පති.
  - **ක්‍රියාත්මක කිරීම:** වගු දෙකෙන් ඕනෑම එකක ප්‍රාථමික යතුර අනෙක් වගුවේ ආගන්තුක යතුරක් ලෙස ඇතුළත් කිරීම.`,
          highlightTerm: 'One-to-One (1:1)'
        },
        {
          id: 'b-g10-u9-3-3',
          en: `* **One-to-Many (1:N) Cardinality:**
  - **Definition:** One instance in entity A matches multiple instances in entity B, but each instance in B matches only one in A.
  - **Real-World Examples:** Customer ↔ Orders, Mother ↔ Children, Class ↔ Students, Department ↔ Employees.
  - **Golden Implementation Rule:** The Primary Key of the **ONE (1)** side must ALWAYS be placed as a Foreign Key in the **MANY (N)** side table.`,
          si: `* **එකකට බොහෝ (1:N) සබඳතාව:**
  - **අර්ථ දැක්වීම:** A එන්ටිටියේ එක් අවස්ථාවකට B හි අවස්ථා කිහිපයක් ද, B හි එක් අවස්ථාවකට A හි එක් අවස්ථාවක් ද ගැළපේ.
  - **සැබෑ ලෝක උදාහරණ:** පාරිභෝගිකයා ↔ ඇණවුම්, මව ↔ දරුවන්, පන්තිය ↔ සිසුන්, දෙපාර්තමේන්තුව ↔ සේවකයින්.
  - **ස්වර්ණමය නීතිය:** සැමවිටම **"එක" (1)** පැත්තේ ප්‍රාථමික යතුර, **"බොහෝ" (N)** පැත්තේ වගුවේ ආගන්තුක යතුරක් ලෙස ඇතුළත් කළ යුතුය.`,
          highlightTerm: 'One-to-Many (1:N)'
        },
        {
          id: 'b-g10-u9-3-4',
          en: `* **Many-to-Many (M:N) Cardinality & Resolution:**
  - **Definition:** Multiple instances in A match multiple instances in B, and vice versa.
  - **Real-World Examples:** Student ↔ Subjects, Doctor ↔ Patients, Order ↔ Items, Author ↔ Books.
  - **Decomposition Rule:** M:N relationships CANNOT be connected directly in an RDBMS.
  - **Resolution Mechanism:** Decomposed into two **1:N** relationships using an intermediate **Junction Table (Associative Table)** containing composite foreign keys.`,
          si: `* **බොහෝ දේට බොහෝ (M:N) සබඳතාව සහ නිරාකරණය:**
  - **අර්ථ දැක්වීම:** A එන්ටිටියේ එක් අවස්ථාවකට B හි අවස්ථා කිහිපයක් ද, B හි එක් අවස්ථාවකට A හි අවස්ථා කිහිපයක් ද ගැළපේ.
  - **සැබෑ ලෝක උදාහරණ:** සිසුන් ↔ විෂයයන්, වෛද්‍යවරයා ↔ රෝගීන්, ඇණවුම් ↔ භාණ්ඩ, කතුවරයා ↔ පොත්.
  - **නිරාකරණ නීතිය:** M:N සබඳතා RDBMS තුළ සෘජුව සම්බන්ධ කළ නොහැක.
  - **විසඳුම:** සංයුක්ත ආගන්තුක යතුරු සහිත **සන්ධි හෝ මැදිහත් වගුවක් (Junction Table)** යොදාගනිමින් එය **1:N** සබඳතා දෙකක් බවට පත් කිරීම.`,
          highlightTerm: 'Many-to-Many (M:N)'
        }
      ],
      examples: [
        {
          id: 'ex-g10-u9-3-1',
          titleEn: 'Resolving Many-to-Many using a Junction Table',
          titleSi: 'මැදිහත් වගුවක් මඟින් M:N සබඳතාවක් නිරාකරණය කිරීම',
          contentEn: `STUDENT Table:
StudentID [PK], StudentName, DOB

SUBJECT Table:
SubjectCode [PK], SubjectName, Credits

ENROLLMENT Table (Junction Table):
(StudentID [FK], SubjectCode [FK]) [Composite Primary Key], Grade, ExamYear`,
          contentSi: `STUDENT Table:
StudentID [PK], StudentName, DOB

SUBJECT Table:
SubjectCode [PK], SubjectName, Credits

ENROLLMENT Table (Junction Table):
(StudentID [FK], SubjectCode [FK]) [Composite Primary Key], Grade, ExamYear`
        }
      ],
      checkpointQuiz: {
        id: 'q-g10-u9-3',
        questionEn: 'When resolving a Many-to-Many (M:N) relationship between Students and Subjects, what database structure is required?',
        questionSi: 'සිසුන් සහ විෂයයන් අතර පවතින බොහෝ දේට බොහෝ (M:N) සබඳතාව නිරාකරණය කිරීම සඳහා නිර්මාණය කළ යුතු දත්ත සමුදා ව්‍යුහය කුමක්ද?',
        options: [
          { id: '1', en: 'A Junction / Associative Table', si: 'සන්ධි හෝ මැදිහත් වගුවක් (Junction Table)' },
          { id: '2', en: 'A Database View', si: 'දත්ත සමුදා දසුනක් (View)' },
          { id: '3', en: 'A Foreign Key on both tables pointing to each other', si: 'වගු දෙකෙහිම එකිනෙකාට යොමු වන ආගන්තුක යතුරු' },
          { id: '4', en: 'A Database Report', si: 'දත්ත සමුදා වාර්තාවක් (Report)' }
        ],
        correctOptionId: '1',
        explanationEn: 'M:N relationships cannot be connected directly; an intermediate Junction Table is introduced with composite foreign keys, converting M:N into two 1:N links.',
        explanationSi: 'M:N සබඳතා සෘජුව සම්බන්ධ කළ නොහැකි බැවින් සන්ධි වගුවක් (Junction Table) නිර්මාණය කර එය 1:N සබඳතා දෙකක් බවට පත් කරයි.'
      }
    },
    {
      id: 'g10-u9-st-4',
      number: '9.4',
      titleEn: 'The 4 Core Database Objects: Tables, Forms, Queries, Reports',
      titleSi: 'දත්ත සමුදායක ප්‍රධාන වස්තු 4: වගු, ආකෘති, විමසුම්, වාර්තා',
      summaryEn: 'Operational characteristics of Tables (Design vs Datasheet), Forms, Queries (Criteria grid, AND vs OR), and Reports.',
      summarySi: 'වගු (සැලසුම් සහ දත්ත පත්‍රිකා දසුන), ආකෘති පත්‍ර, විමසුම් (සැලසුම් ජාලකය, AND සහ OR තාර්කිකත්වය) සහ වාර්තා.',
      blocks: [
        {
          id: 'b-g10-u9-4-1',
          en: `* **Tables (දත්ත වගු):**
  - Foundational structure where raw data is organized and stored in rows and columns.
  - **Design View:** Used to specify field names, select data types, configure field sizes, and designate Primary Keys.
  - **Datasheet View:** Used for entering, viewing, editing, and navigating actual record data.`,
          si: `* **වගු (Tables):**
  - දත්ත පේළි සහ තීරු ලෙස ගබඩා කරන මූලික ව්‍යුහයයි.
  - **Design View:** ක්ෂේත්‍ර නම්, දත්ත වර්ග, ප්‍රමාණ සහ ප්‍රාථමික යතුරු සැකසීම සඳහා යොදාගනී.
  - **Datasheet View:** දත්ත ඇතුළත් කිරීම, බැලීම සහ සංස්කරණය සඳහා යොදාගනී.`,
          highlightTerm: 'Tables'
        },
        {
          id: 'b-g10-u9-4-2',
          en: `* **Forms (ආකෘති පත්‍ර):**
  - Graphical user-friendly interface designed for data entry, editing, and navigation.
  - Protects raw table structures from unauthorized accidental changes.
  - Enriches user workflow with combo-boxes, radio buttons, and action buttons.`,
          si: `* **ආකෘති පත්‍ර (Forms):**
  - දත්ත ඇතුළත් කිරීමට, සංස්කරණය කිරීමට සහ බැලීමට භාවිත කරන පරිශීලක-හිතකාමී අතුරුමුහුණතයි.
  - වගුවට සෘජුව වන හානි හෝ වැරදි වෙනස්කම් වළක්වයි.
  - බොත්තම්, පතන මෙනු (Drop-down) සහ කොටු මඟින් දත්ත ඇතුළත් කිරීම පහසු කරයි.`,
          highlightTerm: 'Forms'
        },
        {
          id: 'b-g10-u9-4-3',
          en: `* **Queries (විමසුම්):**
  - Operational tool to search, filter, calculate, and extract specific records matching predefined conditions across one or more tables.
* **Query Design Grid Logic Rules:**
  - **Logical AND:** Conditions entered on the **SAME criteria row** must both be satisfied simultaneously.
  - **Logical OR:** Conditions entered on **DIFFERENT rows** (Criteria row vs. Or row) require either condition to be satisfied.
* **Common Comparison & Search Operators:**
  - **Relational:** \`=\`, \`>\`, \`<\`, \`>=\`, \`<=\`, \`<>\` (Not equal).
  - **Range & Wildcard:** \`BETWEEN ... AND ...\`, \`LIKE\` (Pattern matching).`,
          si: `* **විමසුම් (Queries):**
  - දී ඇති කොන්දේසි මත පදනම්ව වගු එකකින් හෝ කිහිපයකින් නිශ්චිත දත්ත පෙරීමට, සෙවීමට, ගණනය කිරීමට සහ ලබාගැනීමට භාවිත වන මෙවලමයි.
* **විමසුම් සැලසුම් ජාලකයේ (Query Design Grid) තාර්කික නීති:**
  - **තාර්කික AND:** **එකම පේළියේ** ලියන කොන්දේසි සියල්ල එකවර සත්‍ය විය යුතුය.
  - **තාර්කික OR:** **වෙනස් පේළිවල** (Criteria සහ Or) ලියන කොන්දේසි අතුරින් එකක් හෝ සත්‍ය විය යුතුය.
* **ප්‍රධාන සංසන්දනාත්මක හා සෙවුම් ක්‍රියාකරක:**
  - **සම්බන්ධක:** \`=\`, \`>\`, \`<\`, \`>=\`, \`<=\`, \`<>\` (අසමාන).
  - **පරාස හා රටා:** \`BETWEEN ... AND ...\`, \`LIKE\` (රටා ගැලපීම).`,
          highlightTerm: 'Queries & Criteria Logic'
        },
        {
          id: 'b-g10-u9-4-4',
          en: `* **Reports (වාර්තා):**
  - Output object specifically designed to format, group, calculate (totals, averages), and summarize processed data.
  - Tailored for formal paper printing, handouts, and executive administrative decision-making.`,
          si: `* **වාර්තා (Reports):**
  - දත්ත මුද්‍රණය කිරීමට සහ පරිපාලනමය තීරණ ගැනීම සඳහා දත්ත කාණ්ඩ කිරීමට, එකතු හා සාමාන්‍යයන් ගණනය කර සාරාංශ කිරීමට ඉදිරිපත් කරන මෙවලමයි.
  - විධිමත් මුද්‍රණ ලේඛන සහ කළමනාකාරීත්ව සමාලෝචන සඳහා විශේෂයෙන් සකසා ඇත.`,
          highlightTerm: 'Reports'
        }
      ],
      examples: [
        {
          id: 'ex-g10-u9-4-1',
          titleEn: 'Query Design Grid Evaluation',
          titleSi: 'විමසුම් සැලසුම් ජාලක ඇගයීම',
          contentEn: `Field:    | StudentID | Name       | District   | Marks
Table:    | STUDENT   | STUDENT    | STUDENT    | EXAM
Sort:     |           | Ascending  |            |
Show:     | [X]       | [X]        | [X]        | [X]
Criteria: |           |            | ="Galle"   | >= 75
Or:       |           |            | ="Matara"  | >= 75

Result: Students from Galle with Marks >= 75 OR Students from Matara with Marks >= 75.`,
          contentSi: `Field:    | StudentID | Name       | District   | Marks
Table:    | STUDENT   | STUDENT    | STUDENT    | EXAM
Sort:     |           | Ascending  |            |
Show:     | [X]       | [X]        | [X]        | [X]
Criteria: |           |            | ="Galle"   | >= 75
Or:       |           |            | ="Matara"  | >= 75

ප්‍රතිඵලය: ගාල්ල දිස්ත්‍රික්කයේ ලකුණු 75ට වැඩි හෝ මාතර දිස්ත්‍රික්කයේ ලකුණු 75ට වැඩි සිසුන් පෙරී ලැබේ.`
        }
      ],
      checkpointQuiz: {
        id: 'q-g10-u9-4',
        questionEn: 'Which database object formats and presents summarized data specifically for printed distribution or administrative review?',
        questionSi: 'මුද්‍රණය කිරීමට සහ කළමනාකාරීත්වයට ඉදිරිපත් කිරීමට දත්ත සාරාංශගතව සකස් කරන දත්ත සමුදා මෙවලම කුමක්ද?',
        options: [
          { id: '1', en: 'Report', si: 'වාර්තාව (Report)' },
          { id: '2', en: 'Table', si: 'වගුව (Table)' },
          { id: '3', en: 'Query', si: 'විමසුම (Query)' },
          { id: '4', en: 'Form', si: 'ආකෘතිය (Form)' }
        ],
        correctOptionId: '1',
        explanationEn: 'Reports are specifically designed for formal printing, layout formatting, grouping, and displaying summaries for administrative review.',
        explanationSi: 'වාර්තා (Reports) නිර්මාණය කර ඇත්තේ දත්ත මුද්‍රණය කිරීමට සහ විධිමත් අයුරින් සාරාංශගත කර ප්‍රදර්ශනය කිරීමටයි.'
      }
    },
    {
      id: 'g10-u9-st-5',
      number: '9.5',
      titleEn: 'Real-World Database Systems & Examination Pitfalls',
      titleSi: 'සැබෑ ලෝක පද්ධති සහ විභාග උගුල් විශ්ලේෂණය',
      summaryEn: 'Analyzing institutional systems (Library, Hospital, POS), relational notation, and the Top O/L exam traps.',
      summarySi: 'ආයතනික පද්ධති (පුස්තකාල, රෝහල්, සුපිරි වෙළඳසැල්), සම්බන්ධතා ක්‍රමලේඛ ලිවීම සහ විභාග උගුල් මඟහරවා ගැනීම.',
      blocks: [
        {
          id: 'b-g10-u9-5-1',
          en: `* **Real-World Systems Architecture & Junction Tables:**
  - **Library System:** \`BOOK\` and \`MEMBER\` (M:N) resolved by \`BORROW\` junction table (\`BorrowID [PK]\`, \`BookID [FK]\`, \`MemberID [FK]\`, \`DueDate\`).
  - **Hospital System:** \`PATIENT\` and \`DOCTOR\` (M:N) resolved by \`APPOINTMENT\` junction table (\`AppNo [PK]\`, \`PatientID [FK]\`, \`DoctorID [FK]\`, \`AppDate\`).
  - **Supermarket POS:** \`INVOICE\` and \`ITEM\` (M:N) resolved by \`INVOICE_ITEM\` junction table (\`InvoiceNo [FK]\`, \`ItemCode [FK]\`, \`QtySold\`).`,
          si: `* **සැබෑ ලෝක පද්ධති ව්‍යුහය සහ මැදිහත් වගු:**
  - **පුස්තකාල පද්ධතිය:** \`BOOK\` සහ \`MEMBER\` (M:N) සබඳතාව \`BORROW\` වගුව මඟින් නිරාකරණය වේ (\`BorrowID [PK]\`, \`BookID [FK]\`, \`MemberID [FK]\`, \`DueDate\`).
  - **රෝහල් පද්ධතිය:** \`PATIENT\` සහ \`DOCTOR\` (M:N) සබඳතාව \`APPOINTMENT\` වගුව මඟින් නිරාකරණය වේ (\`AppNo [PK]\`, \`PatientID [FK]\`, \`DoctorID [FK]\`, \`AppDate\`).
  - **සුපිරි වෙළඳසැල් POS:** \`INVOICE\` සහ \`ITEM\` (M:N) සබඳතාව \`INVOICE_ITEM\` වගුව මඟින් නිරාකරණය වේ (\`InvoiceNo [FK]\`, \`ItemCode [FK]\`, \`QtySold\`).`,
          highlightTerm: 'Real-World Systems'
        },
        {
          id: 'b-g10-u9-5-2',
          en: `* **Top O/L Examination Traps:**
  1. **Phone Number & NIC Data Type Trap:** Telephone numbers (e.g. \`0771234567\`) and NICs MUST be stored as **Short Text**, never Number (numeric data drops leading zeros and fails on legacy letter 'V').
  2. **Primary Key Nullability Trap:** Fields like StudentName, Phone, or DOB are invalid as Primary Keys because names duplicate, birthdays match, and phone numbers can be null/missing.
  3. **Foreign Key Placement Trap (1:N):** In a 1:N relationship, always place the Primary Key of the **ONE** side into the **MANY** side table (never vice versa).
  4. **Query Criteria AND vs OR Trap:**
     - Conditions on the **same criteria row** operate under logical **AND**.
     - Conditions on **different criteria rows** operate under logical **OR**.`,
          si: `* **ප්‍රධාන O/L විභාග උගුල් සහ නීති:**
  1. **දුරකථන අංක සහ NIC උගුල:** දුරකථන අංක (උදා: \`0771234567\`) සහ හැඳුනුම්පත් අංක සඳහා අනිවාර්යයෙන්ම **Short Text** තෝරාගත යුතුය (Number භාවිත කළහොත් ආරම්භක \`0\` මැකී යන අතර \`V\` වැනි අක්ෂර ඇතුළත් කළ නොහැක).
  2. **ප්‍රාථමික යතුරු තේරීමේ උගුල:** නම්, දුරකථන හෝ උපන් දින ප්‍රාථමික යතුරු ලෙස නොගත යුතුය (නම් සහ උපන් දින සමාන විය හැකි අතර දුරකථන අංක හිස් විය හැක).
  3. **ආගන්තුක යතුරු පිහිටුමේ උගුල (1:N):** සැමවිටම "එක" (1) පැත්තේ ප්‍රාථමික යතුර, "බොහෝ" (N) පැත්තේ වගුවට ආගන්තුක යතුරක් ලෙස ඇතුළත් කළ යුතුය.
  4. **විමසුම් AND සහ OR උගුල:**
     - **එකම පේළියේ** ලියන කොන්දේසි තාර්කික **AND** ලෙස ක්‍රියාත්මක වේ.
     - **වෙනස් පේළිවල** (Criteria සහ Or) ලියන කොන්දේසි තාර්කික **OR** ලෙස ක්‍රියාත්මක වේ.`,
          highlightTerm: 'Exam Traps'
        }
      ],
      checkpointQuiz: {
        id: 'q-g10-u9-5',
        questionEn: 'Why should a telephone number such as "0771234567" be stored as Short Text instead of Number data type?',
        questionSi: '"0771234567" වැනි දුරකථන අංකයක් Number වෙනුවට Short Text ලෙස ගබඩා කළ යුත්තේ මන්ද?',
        options: [
          { id: '1', en: 'The DBMS eliminates the leading zero in numeric fields, and phone numbers are not mathematically calculated', si: 'සංඛ්‍යා ක්ෂේත්‍රවලදී ආරම්භක බිංදුව ඉවත් වන අතර දුරකථන අංක ගණිතමය ගණනය කිරීම්වලට ලක් නොවේ' },
          { id: '2', en: 'Numeric fields cannot accept more than 4 digits in a database', si: 'දත්ත සමුදායක සංඛ්‍යා ක්ෂේත්‍රයකට ඉලක්කම් 4කට වඩා ඇතුළත් කළ නොහැක' },
          { id: '3', en: 'Text data types cannot be queried using queries', si: 'පෙළ දත්ත වර්ග විමසුම් මගින් සෙවිය නොහැක' },
          { id: '4', en: 'All fields in modern databases must only be Short Text', si: 'නූතන දත්ත සමුදායන්හි සියලු ක්ෂේත්‍ර Short Text විය යුතුය' }
        ],
        correctOptionId: '1',
        explanationEn: 'Numeric data types drop leading zeros, converting 0771234567 into 771234567. Since telephone numbers are identifiers with no calculation needs, Short Text is mandatory.',
        explanationSi: 'සංඛ්‍යා දත්ත වර්ගයකදී ආරම්භක බිංදුව (`0`) ස්වයංක්‍රීයව මැකී යන අතර, දුරකථන අංක මත ගණනය කිරීම් සිදු නොකරන බැවින් කෙටි පෙළ (Short Text) යෙදිය යුතුය.'
      }
    }
  ],
  pastPaperQuestions: [
    {
      id: 'pp-g10-u9-2020-1',
      year: 2020,
      paperType: 'Paper I',
      badgeText: '2020 Paper I Q28',
      type: 'mcq',
      questionEn: 'Consider the database table Student (IndexNo, StudentName, DOB, ClassCode). Which field is most suitable as the Primary Key of this table?\n(1) IndexNo\n(2) StudentName\n(3) DOB\n(4) ClassCode',
      questionSi: 'Student (IndexNo, StudentName, DOB, ClassCode) යන දත්ත සමුදා වගුව සලකා බලන්න. මෙම වගුවේ ප්‍රාථමික යතුර (Primary Key) ලෙස තෝරා ගැනීමට වඩාත්ම සුදුසු ක්ෂේත්‍රය කුමක්ද?\n(1) IndexNo\n(2) StudentName\n(3) DOB\n(4) ClassCode',
      options: [
        { id: '1', en: 'IndexNo', si: 'IndexNo' },
        { id: '2', en: 'StudentName', si: 'StudentName' },
        { id: '3', en: 'DOB', si: 'DOB' },
        { id: '4', en: 'ClassCode', si: 'ClassCode' }
      ],
      correctOptionId: '1',
      explanationEn: 'IndexNo is unique for each student and cannot contain null values. StudentName, DOB, and ClassCode can all have duplicate values.',
      explanationSi: 'IndexNo සෑම සිසුවෙකුටම අනන්‍ය වන අතර හිස් (Null) විය නොහැක. අනෙක් සියලු ක්ෂේත්‍රවල අගයන් පුනරාවර්තනය විය හැක.'
    },
    {
      id: 'pp-g10-u9-2020-2',
      year: 2020,
      paperType: 'Paper II',
      badgeText: '2020 Paper II Q04',
      type: 'structured',
      questionEn: 'A database is maintained in a library with BOOK (BookID, Title, Author, Publisher, CategoryCode) and MEMBER (MemberID, MemberName, Address, TelephoneNo, DateJoined).\n(i) State the Primary Key of the BOOK table.\n(ii) State the Primary Key of the MEMBER table.\n(iii) If a new table LEND (LendID, MemberID, BookID, IssueDate, DueDate) is created to record book lending, state the Foreign Keys in the LEND table.',
      questionSi: 'පුස්තකාලයක BOOK (BookID, Title, Author, Publisher, CategoryCode) සහ MEMBER (MemberID, MemberName, Address, TelephoneNo, DateJoined) වගු භාවිත වේ.\n(i) BOOK වගුවේ ප්‍රාථමික යතුර ලියන්න.\n(ii) MEMBER වගුවේ ප්‍රාථමික යතුර ලියන්න.\n(iii) පොත් බැහැරදීම සටහන් කිරීමට LEND (LendID, MemberID, BookID, IssueDate, DueDate) නමැති නව වගුවක් සාදන්නේ නම්, LEND වගුවේ ඇති ආගන්තුක යතුරු (Foreign Keys) සඳහන් කරන්න.',
      sampleAnswerEn: '(i) BookID\n(ii) MemberID\n(iii) MemberID and BookID',
      sampleAnswerSi: '(i) BookID\n(ii) MemberID\n(iii) MemberID සහ BookID',
      explanationEn: 'BookID and MemberID are the primary keys of their respective entity tables, and appear as foreign keys in the junction table LEND.',
      explanationSi: 'BookID සහ MemberID අදාළ වගුවල ප්‍රාථමික යතුරු වන අතර, LEND නමැති සන්ධි වගුවේ ඒවා ආගන්තුක යතුරු ලෙස පවතී.'
    },
    {
      id: 'pp-g10-u9-2021-3',
      year: 2021,
      paperType: 'Paper I',
      badgeText: '2021 Paper I Q27',
      type: 'mcq',
      questionEn: 'Which of the following database objects is used to search and retrieve specific records matching given conditions from a table?\n(1) Form\n(2) Query\n(3) Report\n(4) Table',
      questionSi: 'වගුවකින් ලබා දී ඇති කොන්දේසිවලට ගැලපෙන නිශ්චිත වාර්තා සෙවීම සහ ලබා ගැනීම සඳහා භාවිත වන දත්ත සමුදා වස්තුව කුමක්ද?\n(1) ආකෘති පත්‍රය (Form)\n(2) විමසුම (Query)\n(3) වාර්තාව (Report)\n(4) වගුව (Table)',
      options: [
        { id: '1', en: 'Form', si: 'ආකෘති පත්‍රය (Form)' },
        { id: '2', en: 'Query', si: 'විමසුම (Query)' },
        { id: '3', en: 'Report', si: 'වාර්තාව (Report)' },
        { id: '4', en: 'Table', si: 'වගුව (Table)' }
      ],
      correctOptionId: '2',
      explanationEn: 'Queries are specifically engineered to filter, sort, search, and extract data meeting user-defined criteria.',
      explanationSi: 'විමසුම් (Queries) මඟින් කොන්දේසි මත පදනම්ව දත්ත පෙරීම, සෙවීම සහ ලබාගැනීම සිදු කරයි.'
    },
    {
      id: 'pp-g10-u9-2021-4',
      year: 2021,
      paperType: 'Paper II',
      badgeText: '2021 Paper II Q04',
      type: 'structured',
      questionEn: 'Consider the database tables used in a school canteen system:\nITEM (ItemCode, ItemName, UnitPrice)\nSALES (InvoiceNo, SaleDate, TotalAmount, CustomerID)\nSALES_DETAILS (InvoiceNo, ItemCode, Quantity)\n(a) Write down the Primary Key of the ITEM table.\n(b) Write down the Composite Primary Key of the SALES_DETAILS table.\n(c) Write down the suitable Data Type for UnitPrice field.',
      questionSi: 'පාසල් ආපනශාලා පද්ධතියක භාවිත වන පහත දත්ත සමුදා වගු සලකා බලන්න:\nITEM (ItemCode, ItemName, UnitPrice)\nSALES (InvoiceNo, SaleDate, TotalAmount, CustomerID)\nSALES_DETAILS (InvoiceNo, ItemCode, Quantity)\n(a) ITEM වගුවේ ප්‍රාථමික යතුර ලියන්න.\n(b) SALES_DETAILS වගුවේ සංයුක්ත ප්‍රාථමික යතුර (Composite Primary Key) ලියන්න.\n(c) UnitPrice ක්ෂේත්‍රය සඳහා වඩාත්ම සුදුසු දත්ත වර්ගය (Data Type) ලියන්න.',
      sampleAnswerEn: '(a) ItemCode\n(b) (InvoiceNo + ItemCode)\n(c) Currency or Number',
      sampleAnswerSi: '(a) ItemCode\n(b) (InvoiceNo + ItemCode)\n(c) Currency (මුදල්) හෝ Number (සංඛ්‍යා)',
      explanationEn: 'ItemCode uniquely identifies items. In SALES_DETAILS, InvoiceNo and ItemCode combine to form a Composite Primary Key. UnitPrice represents monetary value.',
      explanationSi: 'ItemCode මඟින් භාණ්ඩ අනන්‍යව හඳුනාගනී. SALES_DETAILS හි InvoiceNo සහ ItemCode එකතු වී සංයුක්ත ප්‍රාථමික යතුරක් සාදයි. UnitPrice සඳහා මුදල් හෝ සංඛ්‍යා දත්ත වර්ගය සුදුසු වේ.'
    },
    {
      id: 'pp-g10-u9-2022-5',
      year: 2022,
      paperType: 'Paper I',
      badgeText: '2022 Paper I Q26',
      type: 'mcq',
      questionEn: 'Which data type is most appropriate for a field named TelephoneNo storing values like 0712345678 in a database table?\n(1) Currency\n(2) Number\n(3) Text\n(4) AutoNumber',
      questionSi: 'දත්ත සමුදා වගුවක 0712345678 වැනි අගයන් ගබඩා කරන TelephoneNo නමැති ක්ෂේත්‍රය සඳහා වඩාත්ම සුදුසු දත්ත වර්ගය කුමක්ද?\n(1) මුදල් (Currency)\n(2) සංඛ්‍යා (Number)\n(3) පෙළ (Text)\n(4) ස්වයංක්‍රීය අංකය (AutoNumber)',
      options: [
        { id: '1', en: 'Currency', si: 'මුදල් (Currency)' },
        { id: '2', en: 'Number', si: 'සංඛ්‍යා (Number)' },
        { id: '3', en: 'Text', si: 'පෙළ (Text / Short Text)' },
        { id: '4', en: 'AutoNumber', si: 'ස්වයංක්‍රීය අංකය (AutoNumber)' }
      ],
      correctOptionId: '3',
      explanationEn: 'Telephone numbers start with a leading zero which is eliminated in Number fields, and they do not undergo arithmetic operations. Short Text is required.',
      explanationSi: 'සංඛ්‍යා දත්ත වර්ගයකදී ආරම්භක බිංදුව (0) මැකී යන අතර දුරකථන අංක මත ගණනය කිරීම් සිදු නොකරන බැවින් Text (Short Text) යෙදිය යුතුය.'
    },
    {
      id: 'pp-g10-u9-2022-6',
      year: 2022,
      paperType: 'Paper II',
      badgeText: '2022 Paper II Q04',
      type: 'structured',
      questionEn: 'A medical center maintains: PATIENT (PatientID, PatientName, ContactNo, Gender), DOCTOR (DoctorID, DoctorName, Specialization, Fee), APPOINTMENT (AppNo, PatientID, DoctorID, AppDate, AppTime).\n(a) Identify the Primary Key for PATIENT and DOCTOR tables.\n(b) Identify the Foreign Keys in the APPOINTMENT table.\n(c) State the purpose of using Foreign Keys in a relational database.',
      questionSi: 'වෛද්‍ය මධ්‍යස්ථානයක: PATIENT (PatientID, PatientName, ContactNo, Gender), DOCTOR (DoctorID, DoctorName, Specialization, Fee), APPOINTMENT (AppNo, PatientID, DoctorID, AppDate, AppTime).\n(a) PATIENT සහ DOCTOR වගුවල ප්‍රාථමික යතුරු හඳුනාගෙන ලියන්න.\n(b) APPOINTMENT වගුවේ ඇති ආගන්තුක යතුරු ලියන්න.\n(c) සබඳතා දත්ත සමුදායක ආගන්තුක යතුරු භාවිත කිරීමේ අරමුණ සඳහන් කරන්න.',
      sampleAnswerEn: '(a) PATIENT: PatientID | DOCTOR: DoctorID\n(b) PatientID and DoctorID\n(c) To establish relationships between tables and maintain referential integrity.',
      sampleAnswerSi: '(a) PATIENT: PatientID | DOCTOR: DoctorID\n(b) PatientID සහ DoctorID\n(c) වගු අතර සබඳතා ගොඩනැගීම සහ යොමු අඛණ්ඩතාව (Referential Integrity) ආරක්ෂා කිරීම.',
      explanationEn: 'PatientID and DoctorID are primary keys in parent tables and link into APPOINTMENT as foreign keys, enforcing referential integrity.',
      explanationSi: 'PatientID සහ DoctorID මව් වගුවල ප්‍රාථමික යතුරු වන අතර APPOINTMENT වගුවේ ආගන්තුක යතුරු ලෙස පවතිමින් වගු අතර සබඳතාව ආරක්ෂා කරයි.'
    },
    {
      id: 'pp-g10-u9-2023-7',
      year: 2023,
      paperType: 'Paper I',
      badgeText: '2023 Paper I Q28',
      type: 'mcq',
      questionEn: 'In a relational database, what is a row in a table called?\n(1) Attribute\n(2) Field\n(3) Record / Tuple\n(4) Primary Key',
      questionSi: 'සබඳතා දත්ත සමුදායක, වගුවක පේළියක් (Row) හඳුන්වනු ලබන්නේ කුමන නමකින්ද?\n(1) ගුණාංගය (Attribute)\n(2) ක්ෂේත්‍රය (Field)\n(3) වාර්තාව / ටපලනය (Record / Tuple)\n(4) ප්‍රාථමික යතුර (Primary Key)',
      options: [
        { id: '1', en: 'Attribute', si: 'ගුණාංගය (Attribute)' },
        { id: '2', en: 'Field', si: 'ක්ෂේත්‍රය (Field)' },
        { id: '3', en: 'Record / Tuple', si: 'වාර්තාව / ටපලනය (Record / Tuple)' },
        { id: '4', en: 'Primary Key', si: 'ප්‍රාථමික යතුර (Primary Key)' }
      ],
      correctOptionId: '3',
      explanationEn: 'Rows in relational tables are called Records or Tuples; columns are called Fields or Attributes.',
      explanationSi: 'වගුවක තිරස් පේළි වාර්තා (Records) හෝ ටූපල (Tuples) ලෙසත්, සිරස් තීරු ක්ෂේත්‍ර (Fields) හෝ විශේෂණ (Attributes) ලෙසත් හඳුන්වයි.'
    },
    {
      id: 'pp-g10-u9-2023-8',
      year: 2023,
      paperType: 'Paper II',
      badgeText: '2023 Paper II Q04',
      type: 'structured',
      questionEn: 'Consider the database tables of a vehicle rental company:\nVEHICLE (VehicleNo, VehicleType, DailyRate, Status)\nCUSTOMER (NICNo, CustomerName, PhoneNo)\nRENTAL (RentalID, VehicleNo, NICNo, RentDate, ReturnDate)\n(a) State the Primary Key of the VEHICLE table.\n(b) State two Foreign Keys in the RENTAL table.\n(c) State suitable data types for RentDate and DailyRate fields.',
      questionSi: 'වාහන කුලියට දෙන ආයතනයක පහත දත්ත සමුදා වගු සලකා බලන්න:\nVEHICLE (VehicleNo, VehicleType, DailyRate, Status)\nCUSTOMER (NICNo, CustomerName, PhoneNo)\nRENTAL (RentalID, VehicleNo, NICNo, RentDate, ReturnDate)\n(a) VEHICLE වගුවේ ප්‍රාථමික යතුර ලියන්න.\n(b) RENTAL වගුවේ ඇති ආගන්තුක යතුරු දෙක සඳහන් කරන්න.\n(c) RentDate සහ DailyRate ක්ෂේත්‍ර සඳහා සුදුසු දත්ත වර්ග සඳහන් කරන්න.',
      sampleAnswerEn: '(a) VehicleNo\n(b) VehicleNo and NICNo\n(c) RentDate: Date/Time | DailyRate: Currency or Number',
      sampleAnswerSi: '(a) VehicleNo\n(b) VehicleNo සහ NICNo\n(c) RentDate: Date/Time (දිනය/වේලාව) | DailyRate: Currency (මුදල්) හෝ Number (සංඛ්‍යා)',
      explanationEn: 'VehicleNo uniquely identifies vehicles. VehicleNo and NICNo link into RENTAL. Dates require Date/Time and monetary rates require Currency.',
      explanationSi: 'VehicleNo වාහන අනන්‍යව හඳුනාගනී. VehicleNo සහ NICNo ආගන්තුක යතුරු වේ. දින සඳහා Date/Time ද, ගාස්තු සඳහා Currency ද සුදුසු වේ.'
    },
    {
      id: 'pp-g10-u9-2024-9',
      year: 2024,
      paperType: 'Paper II',
      badgeText: '2024 Paper II Q04',
      type: 'structured',
      questionEn: 'A school sports database contains:\nSTUDENT (IndexNo, Name, House, Grade)\nEVENT (EventCode, EventName, GenderCategory)\nPARTICIPATION (IndexNo, EventCode, Place)\n(a) State the Primary Keys of STUDENT and EVENT tables.\n(b) Identify the Composite Primary Key in PARTICIPATION table.\n(c) Explain why IndexNo alone cannot be used as the primary key in PARTICIPATION table.',
      questionSi: 'පාසල් ක්‍රීඩා දත්ත සමුදායක:\nSTUDENT (IndexNo, Name, House, Grade)\nEVENT (EventCode, EventName, GenderCategory)\nPARTICIPATION (IndexNo, EventCode, Place)\n(a) STUDENT සහ EVENT වගුවල ප්‍රාථමික යතුරු ලියන්න.\n(b) PARTICIPATION වගුවේ සංයුක්ත ප්‍රාථමික යතුර හඳුනාගෙන ලියන්න.\n(c) PARTICIPATION වගුවේ ප්‍රාථමික යතුර ලෙස IndexNo පමණක් භාවිත කළ නොහැක්කේ මන්දැයි පැහැදිලි කරන්න.',
      sampleAnswerEn: '(a) STUDENT: IndexNo | EVENT: EventCode\n(b) (IndexNo + EventCode)\n(c) Because one student can participate in multiple sports events, IndexNo will have duplicate values across rows. A Primary Key cannot contain duplicates.',
      sampleAnswerSi: '(a) STUDENT: IndexNo | EVENT: EventCode\n(b) (IndexNo + EventCode)\n(c) එක් ශිෂ්‍යයෙකු ඉසව් කිහිපයකට සහභාගී වන බැවින් IndexNo අගය නැවත නැවත ලියැවේ. ප්‍රාථමික යතුරක අගයන් පුනරාවර්තනය විය නොහැක.',
      explanationEn: 'A single student competes in multiple events, repeating IndexNo. Combining IndexNo and EventCode forms a unique Composite Primary Key.',
      explanationSi: 'එක් ශිෂ්‍යයෙක් ඉසව් කිහිපයකට තරග කරන බැවින් IndexNo පුනරාවර්තනය වේ. IndexNo සහ EventCode එක් කර සංයුක්ත ප්‍රාථමික යතුරක් සෑදිය යුතුය.'
    },
    {
      id: 'pp-g10-u9-2025-10',
      year: 2025,
      paperType: 'Paper II',
      badgeText: '2025 Paper II Q04',
      type: 'structured',
      questionEn: 'An online store uses a database with:\nPRODUCT (ProductID, ProductName, Category, Price, StockQty)\nORDERS (OrderID, OrderDate, CustomerID, TotalAmount)\nORDER_ITEM (OrderID, ProductID, Quantity)\n(a) State the primary keys for PRODUCT and ORDERS tables.\n(b) State the foreign keys in ORDER_ITEM table.\n(c) Write down the suitable data types for OrderDate, Price, and StockQty.',
      questionSi: 'මාර්ගගත වෙළඳසැලක:\nPRODUCT (ProductID, ProductName, Category, Price, StockQty)\nORDERS (OrderID, OrderDate, CustomerID, TotalAmount)\nORDER_ITEM (OrderID, ProductID, Quantity)\n(a) PRODUCT සහ ORDERS වගුවල ප්‍රාථමික යතුරු සඳහන් කරන්න.\n(b) ORDER_ITEM වගුවේ ඇති ආගන්තුක යතුරු සඳහන් කරන්න.\n(c) OrderDate, Price, සහ StockQty ක්ෂේත්‍ර සඳහා සුදුසු දත්ත වර්ග ලියන්න.',
      sampleAnswerEn: '(a) PRODUCT: ProductID | ORDERS: OrderID\n(b) OrderID and ProductID\n(c) OrderDate: Date/Time | Price: Currency or Number | StockQty: Number',
      sampleAnswerSi: '(a) PRODUCT: ProductID | ORDERS: OrderID\n(b) OrderID සහ ProductID\n(c) OrderDate: Date/Time | Price: Currency හෝ Number | StockQty: Number',
      explanationEn: 'ProductID and OrderID are primary keys. ORDER_ITEM is a junction table with OrderID and ProductID as foreign keys. Dates, monetary prices, and counts have distinct matching types.',
      explanationSi: 'ProductID සහ OrderID ප්‍රාථමික යතුරු වේ. ORDER_ITEM යනු OrderID සහ ProductID ආගන්තුක යතුරු ලෙස අඩංගු සන්ධි වගුවකි.'
    }
  ],
  glossary: [
    {
      termEn: 'Database Management System (DBMS)',
      termSi: 'දත්ත සමුදා කළමනාකරණ පද්ධතිය',
      defEn: 'System software that provides facilities for creating, querying, updating, and administering databases.',
      defSi: 'දත්ත සමුදායන් නිර්මාණය කිරීමට, විමසීමට, යාවත්කාලීන කිරීමට සහ පරිපාලනය කිරීමට පහසුකම් සපයන පද්ධති මෘදුකාංගයකි.',
      exampleEn: 'Microsoft Access, MySQL, Oracle Database',
      exampleSi: 'මයික්‍රොසොෆ්ට් ඇක්සස්, මයිඑස්කිව්එල්, ඔරකල්'
    },
    {
      termEn: 'Relational DBMS (RDBMS)',
      termSi: 'සම්බන්ධතා දත්ත සමුදා කළමනාකරණ පද්ධතිය',
      defEn: 'A database management system that manages relational tables linked together through common matching keys.',
      defSi: 'පොදු යතුරු මගින් එකිනෙකට සම්බන්ධ කරන ලද ද්විමාන වගු කළමනාකරණය කරන පද්ධතියකි.',
      exampleEn: 'PostgreSQL, SQLite, MariaDB',
      exampleSi: 'පෝස්ට්ග්‍රෙස්කිව්එල්, එස්කිව්එල් ලයිට්'
    },
    {
      termEn: 'Primary Key (PK)',
      termSi: 'ප්‍රාථමික යතුර',
      defEn: 'A unique attribute that unequivocally identifies each record in a table and cannot contain null values.',
      defSi: 'වගුවක සෑම ලේඛනයක්ම අනන්‍යව හඳුනා ගන්නා අතර හිස් (Null) අගයන් නොපවතින ක්ෂේත්‍රයකි.',
      exampleEn: 'AdmissionNo, NIC_Number, ItemCode',
      exampleSi: 'ඇතුළත් වීමේ අංකය, ජාතික හැඳුනුම්පත් අංකය'
    },
    {
      termEn: 'Foreign Key (FK)',
      termSi: 'ආගන්තුක යතුර',
      defEn: 'A field in a table that references the Primary Key of another parent table to establish a relational link.',
      defSi: 'වෙනත් මව් වගුවක ප්‍රාථමික යතුරක් හා සම්බන්ධ වෙමින් වගු අතර සබඳතාව ගොඩනගන ක්ෂේත්‍රයකි.',
      exampleEn: 'ClassID in STUDENT table referencing CLASS table',
      exampleSi: 'ශිෂ්‍ය වගුවේ ඇති ClassID ක්ෂේත්‍රය'
    },
    {
      termEn: 'Composite Primary Key',
      termSi: 'සංයුක්ත ප්‍රාථමික යතුර',
      defEn: 'A Primary Key made up of two or more attributes combined together to guarantee uniqueness.',
      defSi: 'අනන්‍යතාව තහවුරු කිරීම සඳහා ක්ෂේත්‍ර දෙකක් හෝ වැඩි ගණනක් එක් කර සාදාගන්නා ප්‍රාථමික යතුරකි.',
      exampleEn: '(StudentID + SubjectCode) in RESULT table',
      exampleSi: 'ප්‍රතිඵල වගුවේ (ශිෂ්‍ය අංකය + විෂය කේතය)'
    },
    {
      termEn: 'Candidate Key',
      termSi: 'අපේක්ෂක යතුර',
      defEn: 'Any field or minimal set of fields in a table capable of uniquely identifying each row.',
      defSi: 'වගුවක සෑම ලේඛනයක්ම අනන්‍යව හඳුනාගැනීමේ හැකියාව ඇති ඕනෑම ක්ෂේත්‍රයකි.',
      exampleEn: 'StudentID, NIC_No, and Email in STUDENT table',
      exampleSi: 'ශිෂ්‍ය අංකය, හැඳුනුම්පත් අංකය සහ විද්‍යුත් තැපෑල'
    },
    {
      termEn: 'Alternate Key',
      termSi: 'විකල්ප යතුර',
      defEn: 'A candidate key that was not selected as the primary key of the table.',
      defSi: 'ප්‍රාථමික යතුර ලෙස තෝරා නොගත් ඉතිරි අපේක්ෂක යතුරකි.',
      exampleEn: 'NIC_No when StudentID is selected as PK',
      exampleSi: 'ශිෂ්‍ය අංකය PK ලෙස ගත් විට හැඳුනුම්පත් අංකය'
    },
    {
      termEn: 'Referential Integrity',
      termSi: 'යොමු අඛණ්ඩතාව',
      defEn: 'Constraint ensuring that Foreign Key values must match an existing parent Primary Key, preventing orphaned records.',
      defSi: 'ආගන්තුක යතුරක අගයක් මව් වගුවේ ප්‍රාථමික යතුරෙහි අනිවාර්යයෙන්ම තිබිය යුතු බවට තහවුරු කරන නීතියයි.',
      exampleEn: 'Cannot assign a student to non-existent Class C99',
      exampleSi: 'නොපවතින පන්තියකට ශිෂ්‍යයෙකු ඇතුළත් කළ නොහැක'
    },
    {
      termEn: 'Entity Integrity',
      termSi: 'එන්ටිටි අඛණ්ඩතාව',
      defEn: 'Constraint rule stating that no primary key attribute may contain NULL values.',
      defSi: 'ප්‍රාථමික යතුරක කිසිවිටෙකත් හිස් (NULL) අගයන් නොපැවතිය යුතු බවට පනවා ඇති නීතියයි.',
      exampleEn: 'A student cannot be registered without an AdmissionNo',
      exampleSi: 'ඇතුළත් වීමේ අංකයක් නොමැතිව ශිෂ්‍යයෙකු ලියාපදිංචි කළ නොහැක'
    },
    {
      termEn: 'Junction Table (Associative Table)',
      termSi: 'සන්ධි හෝ මැදිහත් වගුව',
      defEn: 'A bridge table used to resolve a Many-to-Many relationship into two One-to-Many relationships.',
      defSi: 'M:N සබඳතාවක් 1:N සබඳතා දෙකක් බවට පත් කර නිරාකරණය කිරීම සඳහා නිර්මාණය කරන අතරමැදි වගුවකි.',
      exampleEn: 'BORROW table linking STUDENT and BOOK',
      exampleSi: 'ශිෂ්‍යයා සහ පොත සම්බන්ධ කරන ණයට දීමේ වගුව'
    },
    {
      termEn: 'Form',
      termSi: 'ආකෘති පත්‍රය',
      defEn: 'A graphical user interface for safe and intuitive data entry, viewing, and record editing.',
      defSi: 'දත්ත ආරක්ෂිතව හා පහසුවෙන් ඇතුළත් කිරීමට, බැලීමට හා සංස්කරණය කිරීමට සපයන අතුරුමුහුණතකි.',
      exampleEn: 'Student Registration Form with buttons and text boxes',
      exampleSi: 'බොත්තම් සහිත ශිෂ්‍ය ලියාපදිංචි ආකෘති පත්‍රය'
    },
    {
      termEn: 'Query',
      termSi: 'විමසුම',
      defEn: 'An operational request used to filter, calculate, sort, and extract records matching criteria from tables.',
      defSi: 'කොන්දේසි මත පදනම්ව වගු තුළින් නිශ්චිත දත්ත පෙරීමට, සෙවීමට, ගණනය කිරීමට සහ ලබාගැනීමට භාවිත වන මෙවලමකි.',
      exampleEn: 'Selecting all students with Marks >= 75 in ICT',
      exampleSi: 'ICT ලකුණු 75ට වැඩි සියලු සිසුන් සෙවීම'
    },
    {
      termEn: 'Report',
      termSi: 'වාර්තාව',
      defEn: 'A database object designed to format, summarize, calculate, and present data for printing and distribution.',
      defSi: 'දත්ත මුද්‍රණය කිරීමට සහ විධිමත් ලෙස සාරාංශගත කර ඉදිරිපත් කිරීමට සකස් කරන මෙවලමකි.',
      exampleEn: 'Term Test Mark Sheet grouped by class with averages',
      exampleSi: 'පන්ති අනුව සාමාන්‍යයන් සහිත වාර විභාග ලකුණු ලේඛනය'
    }
  ]
};
