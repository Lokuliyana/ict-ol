// Verbatim dual-medium syllabus data extracted from public/lessons
import { GeneralLessonData } from '../allLessonsData';

export const G10_U8_DATA: GeneralLessonData = {
  "id": "g10-u8",
  "grade": "10",
  "unitNumber": 8,
  "titleEn": "Database Management",
  "titleSi": "දත්ත සමුදා කළමනාකරණය",
  "subtopics": [
    {
      "id": "g10-u8-st-1",
      "number": "8.1",
      "titleEn": "Introduction to Database Management",
      "titleSi": "දත්ත සමුදා කළමනාකරණය පිළිබඳ හැඳින්වීම",
      "summaryEn": "Introduction to Database Management concepts, definitions, and examination competencies.",
      "summarySi": "දත්ත සමුදා කළමනාකරණය පිළිබඳ හැඳින්වීම සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g10-u8-1-1",
          "en": "#### Core Definitions & Concepts (මූලික අර්ථ දැක්වීම් සහ සංකල්ප)",
          "si": "#### Core Definitions & Concepts (මූලික අර්ථ දැක්වීම් සහ සංකල්ප)",
          "highlightTerm": "Core Definitions & Concepts"
        },
        {
          "id": "b-g10-u8-1-2",
          "en": "Data & Information in Databases:\nA collection of logically related data organized in a structured manner so that it can be easily accessed, managed, and updated is called a database.",
          "si": "දත්ත සමුදායක ඇති දත්ත සහ තොරතුරු:\nපහසුවෙන් ප්‍රවේශ විය හැකි, කළමනාකරණය කළ හැකි සහ යාවත්කාලීන කළ හැකි පරිදි ක්‍රමවත් ලෙස සංවිධානය කරන ලද, තර්කානුකූලව එකිනෙකට සම්බන්ධ දත්ත සමූහයක් දත්ත සමුදායක් (Database) ලෙස හැඳින්වේ.",
          "highlightTerm": "Data & Information in Databases"
        },
        {
          "id": "b-g10-u8-1-3",
          "en": "Manual vs. Electronic Databases:\nData stored in paper files, registers, address books, and library card index systems. Limitations: takes up physical space, slow data retrieval, risk of physical damage, high data redundancy, difficult to update.",
          "si": "අතින් පවත්වාගෙන යන සහ ඉලෙක්ට්‍රොනික දත්ත සමුදා:\nකඩදාසි ලිපිගොනු, ලේඛන, ලිපින පොත් සහ පුස්තකාල කාඩ්පත් පද්ධතිවල දත්ත තැන්පත් කිරීම. සීමාවන්: භෞතික ඉඩකඩ වැඩිපුර ගැනීම, දත්ත සොයා ගැනීමේ ප්‍රමාදය, භෞතික හානි සිදු වීමේ අවදානම, දත්ත පුනරාවර්තනය වැඩි වීම, යාවත්කාලීන කිරීමේ අපහසුව.\"\n  * **Electronic Database (ඉලෙක්ට්‍රොනික දත්ත සමුදාය):**\n    * **[English Medium Text]:** \"Data stored electronically using computer software. Advantages: fast search and retrieval, minimal data redundancy, efficient storage, easy data sharing, high security, easy backing up and updating.\"\n    * **[Sinhala Medium Text]:** \"පරිගණක මෘදුකාංග භාවිතයෙන් ඉලෙක්ට්‍රොනිකව දත්ත ගබඩා කිරීම. වාසි: දත්ත ඉක්මනින් සෙවීම සහ ලබා ගැනීම, දත්ත පුනරාවර්තනය අවම වීම, කාර්යක්ෂම ආචයනය, දත්ත පහසුවෙන් හුවමාරු කිරීම, ඉහළ ආරක්ෂාව, පහසුවෙන් පිටපත් (Backup) තබා ගැනීම සහ යාවත්කාලීන කිරීම.\"\n\n---",
          "highlightTerm": "Manual vs. Electronic Databases"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g10-u8-1",
        "questionEn": "Which of the following is the most accurate concept regarding Introduction to Database Management?",
        "questionSi": "දත්ත සමුදා කළමනාකරණය පිළිබඳ හැඳින්වීම පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Introduction to Database Management",
            "si": "දත්ත සමුදා කළමනාකරණය පිළිබඳ හැඳින්වීම පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
          },
          {
            "id": "2",
            "en": "Temporary bypass without hardware or software processing",
            "si": "දෘඩාංග හෝ මෘදුකාංග සැකසීමකින් තොර තාවකාලික මගහැරීමක්"
          },
          {
            "id": "3",
            "en": "Incompatible legacy instruction rejected by the system architecture",
            "si": "පද්ධති ව්‍යුහය මගින් ප්‍රතික්ෂේප කරනු ලබන නොගැලපෙන පැරණි උපදෙසක්"
          },
          {
            "id": "4",
            "en": "Unverified transmission noise discarded during transmission",
            "si": "සන්නිවේදනයේ දී ඉවතලන තහවුරු නොකළ සම්ප්‍රේෂණ ඝෝෂාවක්"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Introduction to Database Management.",
        "explanationSi": "1 වන වරණය මගින් දත්ත සමුදා කළමනාකරණය පිළිබඳ හැඳින්වීම පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g10-u8-st-2",
      "number": "8.2",
      "titleEn": "Data Hierarchy in Computers",
      "titleSi": "පරිගණකයේ දත්ත ධුරාවලිය",
      "summaryEn": "Data Hierarchy in Computers concepts, definitions, and examination competencies.",
      "summarySi": "පරිගණකයේ දත්ත ධුරාවලිය සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g10-u8-2-1",
          "en": "Data Hierarchy Definitions (දත්ත ධුරාවලියේ අර්ථ දැක්වීම්):**\n1. **Bit (බිටුව):** Binary digit `0` or `1`.\n2. **Byte / Character (බයිටය / අක්ෂරය):** 8 Bits representing a character.\n3. **Field / Attribute (ක්ෂේත්‍රය / ගුණාංගය):** A single category of information stored in a column (e.g., `Student_Name`, `Date_of_Birth`, `Telephone_No`).\n4. **Record / Tuple (වාර්තාව / ටපලනය):** A collection of related fields representing a single entity stored in a row (e.g., all details belonging to one specific student).\n5. **Table / Relation (වගුව / සබඳතාව):** A collection of logically related records stored in rows and columns.\n6. **Database (දත්ත සමුදාය):** A collection of related tables or files managed together.",
          "si": "Data Hierarchy Definitions (දත්ත ධුරාවලියේ අර්ථ දැක්වීම්):**\n1. **Bit (බිටුව):** Binary digit `0` or `1`.\n2. **Byte / Character (බයිටය / අක්ෂරය):** 8 Bits representing a character.\n3. **Field / Attribute (ක්ෂේත්‍රය / ගුණාංගය):** A single category of information stored in a column (e.g., `Student_Name`, `Date_of_Birth`, `Telephone_No`).\n4. **Record / Tuple (වාර්තාව / ටපලනය):** A collection of related fields representing a single entity stored in a row (e.g., all details belonging to one specific student).\n5. **Table / Relation (වගුව / සබඳතාව):** A collection of logically related records stored in rows and columns.\n6. **Database (දත්ත සමුදාය):** A collection of related tables or files managed together.",
          "highlightTerm": "Data Hierarchy Definitions"
        }
      ],
      "examples": [
        {
          "id": "ex-8-2-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "Database (දත්ත සමුදාය)\n                                      │\n                             Tables / Files (වගු)\n                                      │\n                             Records / Tuples (වාර්තා)\n                                      │\n                            Fields / Attributes (ක්ෂේත්‍ර)\n                                      │\n                                 Bytes (බයිට)\n                                      │\n                                  Bits (බිටු)",
          "contentSi": "Database (දත්ත සමුදාය)\n                                      │\n                             Tables / Files (වගු)\n                                      │\n                             Records / Tuples (වාර්තා)\n                                      │\n                            Fields / Attributes (ක්ෂේත්‍ර)\n                                      │\n                                 Bytes (බයිට)\n                                      │\n                                  Bits (බිටු)"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g10-u8-2",
        "questionEn": "Which of the following is the most accurate concept regarding Data Hierarchy in Computers?",
        "questionSi": "පරිගණකයේ දත්ත ධුරාවලිය පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Data Hierarchy in Computers",
            "si": "පරිගණකයේ දත්ත ධුරාවලිය පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
          },
          {
            "id": "2",
            "en": "Temporary bypass without hardware or software processing",
            "si": "දෘඩාංග හෝ මෘදුකාංග සැකසීමකින් තොර තාවකාලික මගහැරීමක්"
          },
          {
            "id": "3",
            "en": "Incompatible legacy instruction rejected by the system architecture",
            "si": "පද්ධති ව්‍යුහය මගින් ප්‍රතික්ෂේප කරනු ලබන නොගැලපෙන පැරණි උපදෙසක්"
          },
          {
            "id": "4",
            "en": "Unverified transmission noise discarded during transmission",
            "si": "සන්නිවේදනයේ දී ඉවතලන තහවුරු නොකළ සම්ප්‍රේෂණ ඝෝෂාවක්"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Data Hierarchy in Computers.",
        "explanationSi": "1 වන වරණය මගින් පරිගණකයේ දත්ත ධුරාවලිය පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g10-u8-st-3",
      "number": "8.3",
      "titleEn": "Relational Database Concepts & Key Components",
      "titleSi": "සබඳතා දත්ත සමුදා සංකල්ප සහ ප්‍රධාන සංරචක",
      "summaryEn": "Relational Database Concepts & Key Components concepts, definitions, and examination competencies.",
      "summarySi": "සබඳතා දත්ත සමුදා සංකල්ප සහ ප්‍රධාන සංරචක සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g10-u8-3-1",
          "en": "#### Relational Database Management System - RDBMS (සබඳතා දත්ත සමුදා කළමනාකරණ පද්ධති)",
          "si": "#### Relational Database Management System - RDBMS (සබඳතා දත්ත සමුදා කළමනාකරණ පද්ධති)",
          "highlightTerm": "Relational Database Management System - RDBMS"
        },
        {
          "id": "b-g10-u8-3-2",
          "en": "Definition:\nA database model that stores data in two-dimensional tables (consisting of rows and columns) and establishes relationships between tables using common fields is called a Relational Database Management System (RDBMS).",
          "si": "අර්ථ දැක්වීම:\nදත්ත ද්විමාන වගු (පේළි සහ තීරු) ලෙස ගබඩා කර, පොදු ක්ෂේත්‍ර භාවිතයෙන් වගු අතර සබඳතා ගොඩනගන දත්ත සමුදා ආකෘතිය සබඳතා දත්ත සමුදා කළමනාකරණ පද්ධතියක් (RDBMS) ලෙස හැඳින්වේ.\"\n  * *Software Examples:* Microsoft Access, MySQL, Oracle, PostgreSQL, SQLite.",
          "highlightTerm": "Definition"
        },
        {
          "id": "b-g10-u8-3-3",
          "en": "Primary Key and Foreign Key:\nA field or a combination of fields that uniquely identifies each record in a table. A primary key cannot contain NULL values and must contain unique values for every record.",
          "si": "ප්‍රාථමික යතුර සහ ආගන්තුක යතුර:\nවගුවක ඇති සෑම වාර්තාවක්ම අනන්‍යව (Unique) හඳුනා ගැනීම සඳහා යොදාගන්නා ක්ෂේත්‍රයක් හෝ ක්ෂේත්‍ර එකතුවක් ප්‍රාථමික යතුර (Primary Key) ලෙස හැඳින්වේ. ප්‍රාථමික යතුරක් සඳහා හිස් අගයන් (NULL) පැවතිය නොහැකි අතර සෑම වාර්තාවකටම වෙනස්ම වූ අගයක් තිබිය යුතුය.\"\n   * *Examples:* `Admission_No`, `NIC_Number`, `Item_Code`, `Index_No`.\n\n2. **Composite Primary Key (සංයුක්ත ප්‍රාථමික යතුර):**\n   * **[English Medium Text]:** \"When more than one field is combined together to form a unique identifier for a record in a table, it is called a Composite Primary Key.\"\n   * **[Sinhala Medium Text]:** \"වාර්තාවක් අනන්‍යව හඳුනා ගැනීමට ක්ෂේත්‍ර එකකට වඩා වැඩි ගණනක් එකතු කර සාදාගන්නා ප්‍රාථමික යතුර සංයුක්ත ප්‍රාථමික යතුරක් (Composite Primary Key) ලෙස හැඳින්වේ.\"\n\n3. **Foreign Key - FK (ආගන්තුක යතුර):**\n   * **[English Medium Text]:** \"A field in one table that refers to the Primary Key in another table to establish a relationship between the two tables.\"\n   * **[Sinhala Medium Text]:** \"වගු දෙකක් අතර සබඳතාව ගොඩනැගීම සඳහා එක් වගුවක ප්‍රාථමික යතුර වෙනත් වගුවක ක්ෂේත්‍රයක් ලෙස ඇතුළත් කළ විට එම ක්ෂේත්‍රය ආගන්තුක යතුර (Foreign Key) ලෙස හැඳින්වේ.\"\n\n---",
          "highlightTerm": "Primary Key and Foreign Key"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g10-u8-3",
        "questionEn": "Which of the following is the most accurate concept regarding Relational Database Concepts & Key Components?",
        "questionSi": "සබඳතා දත්ත සමුදා සංකල්ප සහ ප්‍රධාන සංරචක පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Relational Database Concepts & Key Components",
            "si": "සබඳතා දත්ත සමුදා සංකල්ප සහ ප්‍රධාන සංරචක පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
          },
          {
            "id": "2",
            "en": "Temporary bypass without hardware or software processing",
            "si": "දෘඩාංග හෝ මෘදුකාංග සැකසීමකින් තොර තාවකාලික මගහැරීමක්"
          },
          {
            "id": "3",
            "en": "Incompatible legacy instruction rejected by the system architecture",
            "si": "පද්ධති ව්‍යුහය මගින් ප්‍රතික්ෂේප කරනු ලබන නොගැලපෙන පැරණි උපදෙසක්"
          },
          {
            "id": "4",
            "en": "Unverified transmission noise discarded during transmission",
            "si": "සන්නිවේදනයේ දී ඉවතලන තහවුරු නොකළ සම්ප්‍රේෂණ ඝෝෂාවක්"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Relational Database Concepts & Key Components.",
        "explanationSi": "1 වන වරණය මගින් සබඳතා දත්ත සමුදා සංකල්ප සහ ප්‍රධාන සංරචක පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g10-u8-st-4",
      "number": "8.4",
      "titleEn": "Common Data Types in DBMS",
      "titleSi": "දත්ත සමුදායක භාවිත වන ප්‍රධාන දත්ත වර්ග",
      "summaryEn": "Common Data Types in DBMS concepts, definitions, and examination competencies.",
      "summarySi": "දත්ත සමුදායක භාවිත වන ප්‍රධාන දත්ත වර්ග සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g10-u8-4-1",
          "en": "Common Data Types in DBMS: Comprehensive examination syllabus study notes, tables, and specifications.",
          "si": "දත්ත සමුදායක භාවිත වන ප්‍රධාන දත්ත වර්ග: විභාග විෂය නිර්දේශයේ මූලික කෙටි සටහන්, වගු සහ පිරිවිතර.",
          "highlightTerm": "Common Data Types in DBMS"
        }
      ],
      "tableData": {
        "headers": [
          {
            "en": "Data Type",
            "si": "දත්ත වර්ගය"
          },
          {
            "en": "Description & Usage",
            "si": "විස්තරය සහ භාවිතය"
          },
          {
            "en": "Examples",
            "si": "උදාහරණ"
          }
        ],
        "rows": [
          {
            "col0": {
              "en": "Short Text / Text (පෙළ)",
              "si": "Short Text / Text (පෙළ)"
            },
            "col1": {
              "en": "Stores alphanumeric characters, letters, symbols, and numbers not used for calculations (Max 255 chars).",
              "si": "Stores alphanumeric characters, letters, symbols, and numbers not used for calculations (Max 255 chars)."
            },
            "col2": {
              "en": "`Name`, `Address`, `Index_No` (`S1024`)",
              "si": "`S1024`"
            }
          },
          {
            "col0": {
              "en": "Long Text / Memo (දීර්ඝ පෙළ)",
              "si": "Long Text / Memo (දීර්ඝ පෙළ)"
            },
            "col1": {
              "en": "Stores long text descriptions and paragraphs.",
              "si": "Stores long text descriptions and paragraphs."
            },
            "col2": {
              "en": "`Remarks`, `Description`",
              "si": "`Remarks`, `Description`"
            }
          },
          {
            "col0": {
              "en": "Number (සංඛ්‍යා)",
              "si": "Number (සංඛ්‍යා)"
            },
            "col1": {
              "en": "Stores numeric values used for mathematical calculations (integers, decimals).",
              "si": "Stores numeric values used for mathematical calculations (integers, decimals)."
            },
            "col2": {
              "en": "`Marks`, `Quantity`, `Age`",
              "si": "`Marks`, `Quantity`, `Age`"
            }
          },
          {
            "col0": {
              "en": "Date / Time (දිනය / වේලාව)",
              "si": "Date / Time (දිනය / වේලාව)"
            },
            "col1": {
              "en": "Stores dates, times, or combined date-time values in standard formats.",
              "si": "Stores dates, times, or combined date-time values in standard formats."
            },
            "col2": {
              "en": "`Date_of_Birth`, `Order_Date`",
              "si": "`Date_of_Birth`, `Order_Date`"
            }
          },
          {
            "col0": {
              "en": "Currency (මුදල්)",
              "si": "Currency (මුදල්)"
            },
            "col1": {
              "en": "Stores monetary values formatted with currency symbols and decimals.",
              "si": "Stores monetary values formatted with currency symbols and decimals."
            },
            "col2": {
              "en": "`Price`, `Salary`, `Fee`",
              "si": "`Price`, `Salary`, `Fee`"
            }
          },
          {
            "col0": {
              "en": "AutoNumber (ස්වයංක්‍රීය අංකය)",
              "si": "AutoNumber (ස්වයංක්‍රීය අංකය)"
            },
            "col1": {
              "en": "Automatically generates a unique sequential number for each new record added.",
              "si": "Automatically generates a unique sequential number for each new record added."
            },
            "col2": {
              "en": "`Student_ID`, `Invoice_No`",
              "si": "`Student_ID`, `Invoice_No`"
            }
          },
          {
            "col0": {
              "en": "Yes / No / Boolean (ඔව් / නැත)",
              "si": "Yes / No / Boolean (ඔව් / නැත)"
            },
            "col1": {
              "en": "Stores logical binary values (True/False, Yes/No, 1/0).",
              "si": "Stores logical binary values (True/False, Yes/No, 1/0)."
            },
            "col2": {
              "en": "`Is_Hosteller`, `Passed`",
              "si": "`Is_Hosteller`, `Passed`"
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g10-u8-4",
        "questionEn": "Which of the following is the most accurate concept regarding Common Data Types in DBMS?",
        "questionSi": "දත්ත සමුදායක භාවිත වන ප්‍රධාන දත්ත වර්ග පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Common Data Types in DBMS",
            "si": "දත්ත සමුදායක භාවිත වන ප්‍රධාන දත්ත වර්ග පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
          },
          {
            "id": "2",
            "en": "Temporary bypass without hardware or software processing",
            "si": "දෘඩාංග හෝ මෘදුකාංග සැකසීමකින් තොර තාවකාලික මගහැරීමක්"
          },
          {
            "id": "3",
            "en": "Incompatible legacy instruction rejected by the system architecture",
            "si": "පද්ධති ව්‍යුහය මගින් ප්‍රතික්ෂේප කරනු ලබන නොගැලපෙන පැරණි උපදෙසක්"
          },
          {
            "id": "4",
            "en": "Unverified transmission noise discarded during transmission",
            "si": "සන්නිවේදනයේ දී ඉවතලන තහවුරු නොකළ සම්ප්‍රේෂණ ඝෝෂාවක්"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Common Data Types in DBMS.",
        "explanationSi": "1 වන වරණය මගින් දත්ත සමුදායක භාවිත වන ප්‍රධාන දත්ත වර්ග පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g10-u8-st-5",
      "number": "8.5",
      "titleEn": "Database Operations & Objects",
      "titleSi": "දත්ත සමුදා මෙහෙයුම් සහ වස්තු",
      "summaryEn": "Database Operations & Objects concepts, definitions, and examination competencies.",
      "summarySi": "දත්ත සමුදා මෙහෙයුම් සහ වස්තු සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g10-u8-5-1",
          "en": "#### Core Database Objects (දත්ත සමුදා වස්තු):\n1. **Tables (වගු):** Used to store data in structured rows and columns.\n2. **Forms (ආකෘති පත්‍ර):** Used for user-friendly data entry, viewing, and editing records.\n3. **Queries (විමසුම්):** Used to search, filter, retrieve, and display specific data matching defined criteria from one or more tables.\n4. **Reports (වාර්තා):** Used to format, summarize, and print data retrieved from tables or queries for presentation/decision making.",
          "si": "#### Core Database Objects (දත්ත සමුදා වස්තු):\n1. **Tables (වගු):** Used to store data in structured rows and columns.\n2. **Forms (ආකෘති පත්‍ර):** Used for user-friendly data entry, viewing, and editing records.\n3. **Queries (විමසුම්):** Used to search, filter, retrieve, and display specific data matching defined criteria from one or more tables.\n4. **Reports (වාර්තා):** Used to format, summarize, and print data retrieved from tables or queries for presentation/decision making.",
          "highlightTerm": "Core Database Objects"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g10-u8-5",
        "questionEn": "Which of the following is the most accurate concept regarding Database Operations & Objects?",
        "questionSi": "දත්ත සමුදා මෙහෙයුම් සහ වස්තු පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Database Operations & Objects",
            "si": "දත්ත සමුදා මෙහෙයුම් සහ වස්තු පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
          },
          {
            "id": "2",
            "en": "Temporary bypass without hardware or software processing",
            "si": "දෘඩාංග හෝ මෘදුකාංග සැකසීමකින් තොර තාවකාලික මගහැරීමක්"
          },
          {
            "id": "3",
            "en": "Incompatible legacy instruction rejected by the system architecture",
            "si": "පද්ධති ව්‍යුහය මගින් ප්‍රතික්ෂේප කරනු ලබන නොගැලපෙන පැරණි උපදෙසක්"
          },
          {
            "id": "4",
            "en": "Unverified transmission noise discarded during transmission",
            "si": "සන්නිවේදනයේ දී ඉවතලන තහවුරු නොකළ සම්ප්‍රේෂණ ඝෝෂාවක්"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Database Operations & Objects.",
        "explanationSi": "1 වන වරණය මගින් දත්ත සමුදා මෙහෙයුම් සහ වස්තු පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    }
  ],
  "pastPaperQuestions": [
    {
      "id": "pp-g10-u8-2020-1",
      "year": 2020,
      "paperType": "Paper I",
      "badgeText": "2020 O/L Paper I - Question 28",
      "questionEn": "Consider the following database table containing student data:\n  `Student (IndexNo, StudentName, DOB, ClassCode)`\n  Which field is most suitable to be selected as the Primary Key of this table?",
      "questionSi": "සිසුන්ගේ දත්ත අඩංගු පහත සඳහන් දත්ත සමුදා වගුව සලකා බලන්න:\n  `Student (IndexNo, StudentName, DOB, ClassCode)`\n  මෙම වගුවේ ප්‍රාථමික යතුර (Primary Key) ලෙස තෝරා ගැනීමට වඩාත්ම සුදුසු ක්ෂේත්‍රය කුමක්ද?",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "IndexNo",
          "si": "IndexNo"
        },
        {
          "id": "2",
          "en": "StudentName",
          "si": "StudentName"
        },
        {
          "id": "3",
          "en": "DOB",
          "si": "DOB"
        },
        {
          "id": "4",
          "en": "ClassCode",
          "si": "ClassCode"
        }
      ],
      "correctOptionId": "1",
      "explanationEn": "Verbatim official examination question from 2020 O/L Paper I - Question 28.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper I - Question 28."
    },
    {
      "id": "pp-g10-u8-2020-2",
      "year": 2020,
      "paperType": "Paper II",
      "badgeText": "2020 O/L Paper II - Question 04",
      "questionEn": "4. (a) A database is maintained in a library to manage books and members. The following two tables are used:\n  `BOOK (BookID, Title, Author, Publisher, CategoryCode)`\n  `MEMBER (MemberID, MemberName, Address, TelephoneNo, DateJoined)`\n  (i) State the Primary Key of the BOOK table.\n  (ii) State the Primary Key of the MEMBER table.\n  (iii) If a new table `LEND (LendID, MemberID, BookID, IssueDate, DueDate)` is created to record book lending, state the Foreign Keys in the LEND table.",
      "questionSi": "4. (a) පොත් සහ සාමාජිකයන් කළමනාකරණය සඳහා පුස්තකාලයක දත්ත සමුදායක් පවත්වාගෙන යනු ලබයි. ඒ සඳහා පහත වගු දෙක භාවිත වේ:\n  `BOOK (BookID, Title, Author, Publisher, CategoryCode)`\n  `MEMBER (MemberID, MemberName, Address, TelephoneNo, DateJoined)`\n  (i) BOOK වගුවේ ප්‍රාථමික යතුර ලියන්න.\n  (ii) MEMBER වගුවේ ප්‍රාථමික යතුර ලියන්න.\n  (iii) පොත් බැහැරදීම සටහන් කිරීමට `LEND (LendID, MemberID, BookID, IssueDate, DueDate)` නමැති නවාංග වගුවක් සාදන්නේ නම්, LEND වගුවේ ඇති ආගන්තුක යතුරු (Foreign Keys) සඳහන් කරන්න.",
      "type": "structured",
      "sampleAnswerEn": "Algorithms & Flowcharting:\n(a) Flowchart symbols: Oval (Terminal), Parallelogram (I/O), Rectangle (Process), Rhombus (Decision).\n(b) Trace table construction tracking variables X, Y, and Count through iterative loop.\n(c) Pascal syntax: while condition do, for i := 1 to n do.",
      "sampleAnswerSi": "ඇල්ගොරිතම සහ ගැලීම් සටහන්:\n(a) සංකේත: ඉලිප්සය (ආරම්භය/අවසානය), සමාන්තරාස්‍රය (ආදාන/ප්‍රතිදාන), සෘජුකෝණාස්‍රය (සැකසුම), රොම්බසය (තීරණය).\n(b) හෝඩුවා වගුව මගින් ලූපය තුළ විචල්‍ය අගයන් ලුහුබැඳීම.\n(c) පැස්කල් කේතය: while, for, if-then-else පාලන ව්‍යුහ.",
      "explanationEn": "Verbatim official examination question from 2020 O/L Paper II - Question 04.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper II - Question 04."
    },
    {
      "id": "pp-g10-u8-2021-3",
      "year": 2021,
      "paperType": "Paper I",
      "badgeText": "2021 O/L Paper I - Question 27",
      "questionEn": "Which of the following database objects is used to search and retrieve specific records matching given conditions from a table?",
      "questionSi": "වගුවකින් ලබා දී ඇති කොන්දේසිවලට ගැලපෙන නිශ්චිත වාර්තා සෙවීම සහ ලබා ගැනීම සඳහා භාවිත වන දත්ත සමුදා වස්තුව කුමක්ද?",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "Form",
          "si": "ආකෘති පත්‍රය (Form)"
        },
        {
          "id": "2",
          "en": "Query",
          "si": "විමසුම (Query)"
        },
        {
          "id": "3",
          "en": "Report",
          "si": "වාර්තාව (Report)"
        },
        {
          "id": "4",
          "en": "Table",
          "si": "වගුව (Table)"
        }
      ],
      "correctOptionId": "1",
      "explanationEn": "Verbatim official examination question from 2021 O/L Paper I - Question 27.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2021 O/L Paper I - Question 27."
    },
    {
      "id": "pp-g10-u8-2021-4",
      "year": 2021,
      "paperType": "Paper II",
      "badgeText": "2021 O/L Paper II - Question 04",
      "questionEn": "4. Consider the following database tables used in a school canteen system:\n  `ITEM (ItemCode, ItemName, UnitPrice)`\n  `SALES (InvoiceNo, SaleDate, TotalAmount, CustomerID)`\n  `SALES_DETAILS (InvoiceNo, ItemCode, Quantity)`\n  (a) Write down the Primary Key of the ITEM table.\n  (b) Write down the Composite Primary Key of the SALES_DETAILS table.\n  (c) Write down the suitable Data Type for `UnitPrice` field.",
      "questionSi": "4. පාසල් ආපනශාලා පද්ධතියක භාවිත වන පහත දත්ත සමුදා වගු සලකා බලන්න:\n  `ITEM (ItemCode, ItemName, UnitPrice)`\n  `SALES (InvoiceNo, SaleDate, TotalAmount, CustomerID)`\n  `SALES_DETAILS (InvoiceNo, ItemCode, Quantity)`\n  (a) ITEM වගුවේ ප්‍රාථමික යතුර ලියන්න.\n  (b) SALES_DETAILS වගුවේ සංයුක්ත ප්‍රාථමික යතුර (Composite Primary Key) ලියන්න.\n  (c) `UnitPrice` ක්ෂේත්‍රය සඳහා වඩාත්ම සුදුසු දත්ත වර්ගය (Data Type) ලියන්න.",
      "type": "structured",
      "sampleAnswerEn": "Pseudocode and Pascal Implementation:\n(a) IPO Analysis: Input marks, Process calculate average, Output grade.\n(b) Trace table state verification for summation of 1 to 10.\n(c) Compilers vs Interpreters: Compiler translates entire source code before execution; Interpreter executes line by line.",
      "sampleAnswerSi": "ව්‍යාජ කේත සහ පැස්කල් ක්‍රමලේඛනය:\n(a) IPO විශ්ලේෂණය: ආදානය (ලකුණු), සැකසීම (සාමාන්‍යය සෙවීම), ප්‍රතිදානය (සාමාර්ථය).\n(b) 1 සිට 10 දක්වා එකතුව සෙවීම සඳහා හෝඩුවා වගුව.\n(c) සම්පාදක (Compilers) සහ අර්ථවින්‍යාසක (Interpreters) අතර වෙනස.",
      "explanationEn": "Verbatim official examination question from 2021 O/L Paper II - Question 04.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2021 O/L Paper II - Question 04."
    },
    {
      "id": "pp-g10-u8-2022-5",
      "year": 2022,
      "paperType": "Paper I",
      "badgeText": "2022 O/L Paper I - Question 26",
      "questionEn": "Which data type is most appropriate for a field named `TelephoneNo` storing values like `0712345678` in a database table?",
      "questionSi": "දත්ත සමුදා වගුවක `0712345678` වැනි අගයන් ගබඩා කරන `TelephoneNo` නමැති ක්ෂේත්‍රය සඳහා වඩාත්ම සුදුසු දත්ත වර්ගය කුමක්ද?",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "Currency",
          "si": "මුදල් (Currency)"
        },
        {
          "id": "2",
          "en": "Number",
          "si": "සංඛ්‍යා (Number)"
        },
        {
          "id": "3",
          "en": "Text",
          "si": "පෙළ (Text)"
        },
        {
          "id": "4",
          "en": "AutoNumber",
          "si": "ස්වයංක්‍රීය අංකය (AutoNumber)"
        }
      ],
      "correctOptionId": "1",
      "explanationEn": "Verbatim official examination question from 2022 O/L Paper I - Question 26.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2022 O/L Paper I - Question 26."
    },
    {
      "id": "pp-g10-u8-2022-6",
      "year": 2022,
      "paperType": "Paper II",
      "badgeText": "2022 O/L Paper II - Question 04",
      "questionEn": "4. A medical center maintains a relational database with the following tables:\n  `PATIENT (PatientID, PatientName, ContactNo, Gender)`\n  `DOCTOR (DoctorID, DoctorName, Specialization, Fee)`\n  `APPOINTMENT (AppNo, PatientID, DoctorID, AppDate, AppTime)`\n  (a) Identify the Primary Key for PATIENT and DOCTOR tables.\n  (b) Identify the Foreign Keys in the APPOINTMENT table.\n  (c) State the purpose of using Foreign Keys in a relational database.",
      "questionSi": "4. වෛද්‍ය මධ්‍යස්ථානයක් මගින් පහත වගු සහිත සබඳතා දත්ත සමුදායක් පවත්වාගෙන යනු ලබයි:\n  `PATIENT (PatientID, PatientName, ContactNo, Gender)`\n  `DOCTOR (DoctorID, DoctorName, Specialization, Fee)`\n  `APPOINTMENT (AppNo, PatientID, DoctorID, AppDate, AppTime)`\n  (a) PATIENT සහ DOCTOR වගුවල ප්‍රාථමික යතුරු හඳුනාගෙන ලියන්න.\n  (b) APPOINTMENT වගුවේ ඇති ආගන්තුක යතුරු ලියන්න.\n  (c) සබඳතා දත්ත සමුදායක ආගන්තුක යතුරු භාවිත කිරීමේ අරමුණ සඳහන් කරන්න.",
      "type": "structured",
      "sampleAnswerEn": "Loop control structures:\n(a) Pre-test loop: while (condition is checked before loop execution).\n(b) Post-test loop: repeat..until (body executes at least once before check).\n(c) Counter-controlled loop: for loop with fixed iteration count.",
      "sampleAnswerSi": "පුනරාවර්තන පාලන ව්‍යුහ:\n(a) පූර්ව-පරීක්ෂා ලූප: while (කොන්දේසිය මුලින් පරීක්ෂා කෙරේ).\n(b) පසු-පරීක්ෂා ලූප: repeat..until (අවම වශයෙන් එක් වරක් හෝ ක්‍රියාත්මක වේ).\n(c) ගණක පාලිත ලූප: for loop (නියමිත වාර ගණනක් ක්‍රියාත්මක වේ).",
      "explanationEn": "Verbatim official examination question from 2022 O/L Paper II - Question 04.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2022 O/L Paper II - Question 04."
    },
    {
      "id": "pp-g10-u8-2023-7",
      "year": 2023,
      "paperType": "Paper I",
      "badgeText": "2023 O/L Paper I - Question 28",
      "questionEn": "In a relational database, what is a row in a table called?",
      "questionSi": "සබඳතා දත්ත සමුදායක, වගුවක පේළියක් (Row) හඳුන්වනු ලබන්නේ කුමන නමකින්ද?",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "Attribute",
          "si": "ගුණාංගය (Attribute)"
        },
        {
          "id": "2",
          "en": "Field",
          "si": "ක්ෂේත්‍රය (Field)"
        },
        {
          "id": "3",
          "en": "Record / Tuple",
          "si": "වාර්තාව / ටපලනය (Record / Tuple)"
        },
        {
          "id": "4",
          "en": "Primary Key",
          "si": "ප්‍රාථමික යතුර (Primary Key)"
        }
      ],
      "correctOptionId": "1",
      "explanationEn": "Verbatim official examination question from 2023 O/L Paper I - Question 28.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2023 O/L Paper I - Question 28."
    },
    {
      "id": "pp-g10-u8-2023-8",
      "year": 2023,
      "paperType": "Paper II",
      "badgeText": "2023 O/L Paper II - Question 04",
      "questionEn": "4. Consider the following database tables of a vehicle rental company:\n  `VEHICLE (VehicleNo, VehicleType, DailyRate, Status)`\n  `CUSTOMER (NICNo, CustomerName, PhoneNo)`\n  `RENTAL (RentalID, VehicleNo, NICNo, RentDate, ReturnDate)`\n  (a) State the Primary Key of the VEHICLE table.\n  (b) State two Foreign Keys in the RENTAL table.\n  (c) State suitable data types for `RentDate` and `DailyRate` fields.",
      "questionSi": "4. වාහන කුලියට දෙන ආයතනයක පහත දත්ත සමුදා වගු සලකා බලන්න:\n  `VEHICLE (VehicleNo, VehicleType, DailyRate, Status)`\n  `CUSTOMER (NICNo, CustomerName, PhoneNo)`\n  `RENTAL (RentalID, VehicleNo, NICNo, RentDate, ReturnDate)`\n  (a) VEHICLE වගුවේ ප්‍රාථමික යතුර ලියන්න.\n  (b) RENTAL වගුවේ ඇති ආගන්තුක යතුරු දෙක සඳහන් කරන්න.\n  (c) `RentDate` සහ `DailyRate` ක්ෂේත්‍ර සඳහා සුදුසු දත්ත වර්ග සඳහන් කරන්න.",
      "type": "structured",
      "sampleAnswerEn": "Trace table and Algorithmic logic:\n(a) Loop termination condition when count reaches maximum.\n(b) Final output values displayed on screen.\n(c) Pascal variable declarations: integer, real, boolean, char, string.",
      "sampleAnswerSi": "හෝඩුවා වගු සහ ක්‍රමලේඛන තර්කනය:\n(a) ලූපය අවසන් වීමේ කොන්දේසිය සපුරාලීම.\n(b) තිරය මත දර්ශනය වන අවසාන ප්‍රතිදානය.\n(c) පැස්කල් විචල්‍ය ප්‍රකාශන: integer, real, boolean, char, string.",
      "explanationEn": "Verbatim official examination question from 2023 O/L Paper II - Question 04.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2023 O/L Paper II - Question 04."
    },
    {
      "id": "pp-g10-u8-2024-9",
      "year": 2024,
      "paperType": "Paper II",
      "badgeText": "2024 O/L Paper II - Question 04",
      "questionEn": "4. A school sports database contains the following tables:\n  `STUDENT (IndexNo, Name, House, Grade)`\n  `EVENT (EventCode, EventName, GenderCategory)`\n  `PARTICIPATION (IndexNo, EventCode, Place)`\n  (a) State the Primary Keys of STUDENT and EVENT tables.\n  (b) Identify the Composite Primary Key in PARTICIPATION table.\n  (c) Explain why `IndexNo` alone cannot be used as the primary key in PARTICIPATION table.",
      "questionSi": "4. පාසල් ක්‍රීඩා දත්ත සමුදායක පහත වගු අඩංගු වේ:\n  `STUDENT (IndexNo, Name, House, Grade)`\n  `EVENT (EventCode, EventName, GenderCategory)`\n  `PARTICIPATION (IndexNo, EventCode, Place)`\n  (a) STUDENT සහ EVENT වගුවල ප්‍රාථමික යතුරු ලියන්න.\n  (b) PARTICIPATION වගුවේ සංයුක්ත ප්‍රාථමික යතුර හඳුනාගෙන ලියන්න.\n  (c) PARTICIPATION වගුවේ ප්‍රාථමික යතුර ලෙස `IndexNo` පමණක් භාවිත කළ නොහැක්කේ මන්දැයි පැහැදිලි කරන්න.",
      "type": "structured",
      "sampleAnswerEn": "Algorithm Design & Trace Table:\n(a) Constructing trace table for finding largest number among a list.\n(b) Flowchart drawing for finding even or odd numbers.\n(c) Pascal syntax debugging: missing semicolons, incorrect assignment operator (:=).",
      "sampleAnswerSi": "ඇල්ගොරිතම නිර්මාණය සහ හෝඩුවා වගුව:\n(a) සංඛ්‍යා ලැයිස්තුවකින් විශාලතම සංඛ්‍යාව සෙවීම සඳහා හෝඩුවා වගුව.\n(b) ඉරට්ට හෝ ඔත්තේ සංඛ්‍යා සෙවීම සඳහා ගැලීම් සටහන.\n(c) පැස්කල් කේත දෝෂ නිවැරදි කිරීම (තනි තිත් කොමාව, := ක්‍රියාකරු).",
      "explanationEn": "Verbatim official examination question from 2024 O/L Paper II - Question 04.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2024 O/L Paper II - Question 04."
    },
    {
      "id": "pp-g10-u8-2025-10",
      "year": 2025,
      "paperType": "Paper II",
      "badgeText": "2025 O/L Paper II - Question 04",
      "questionEn": "4. An online store uses a database with the following structure:\n  `PRODUCT (ProductID, ProductName, Category, Price, StockQty)`\n  `ORDERS (OrderID, OrderDate, CustomerID, TotalAmount)`\n  `ORDER_ITEM (OrderID, ProductID, Quantity)`\n  (a) State the primary keys for PRODUCT and ORDERS tables.\n  (b) State the foreign keys in ORDER_ITEM table.\n  (c) Write down the suitable data types for `OrderDate`, `Price`, and `StockQty`.",
      "questionSi": "4. මාර්ගගත වෙළඳසැලක් පහත ව්‍යුහය සහිත දත්ත සමුදායක් භාවිත කරයි:\n  `PRODUCT (ProductID, ProductName, Category, Price, StockQty)`\n  `ORDERS (OrderID, OrderDate, CustomerID, TotalAmount)`\n  `ORDER_ITEM (OrderID, ProductID, Quantity)`\n  (a) PRODUCT සහ ORDERS වගුවල ප්‍රාථමික යතුරු සඳහන් කරන්න.\n  (b) ORDER_ITEM වගුවේ ඇති ආගන්තුක යතුරු සඳහන් කරන්න.\n  (c) `OrderDate`, `Price`, සහ `StockQty` ක්ෂේත්‍ර සඳහා සුදුසු දත්ත වර්ග ලියන්න.\"\n\n### 2.2 Unexamined Sub-topics Note (නොඅසන ලද උප-මාතෘකා පිළිබඳ සටහන)\n* All core sub-topics of Database Management (Primary/Foreign Keys, Data Types, Data Hierarchy, Database Objects, and Relational Table Relationships) have been regularly tested in O/L examinations between 2020 and 2025.",
      "type": "structured",
      "sampleAnswerEn": "Structured Programming Concepts:\n(a) Sequence, Selection, and Iteration.\n(b) Trace table state verification.\n(c) Pascal program writing with input readln and output writeln.",
      "sampleAnswerSi": "ව්‍යුහගත ක්‍රමලේඛන සංකල්ප:\n(a) අනුක්‍රමය, තේරීම සහ පුනරාවර්තනය.\n(b) හෝඩුවා වගුව භාවිතයෙන් විචල්‍ය අගයන් තහවුරු කිරීම.\n(c) readln සහ writeln භාවිතයෙන් පැස්කල් වැඩසටහන ලිවීම.",
      "explanationEn": "Verbatim official examination question from 2025 O/L Paper II - Question 04.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2025 O/L Paper II - Question 04."
    }
  ]
};
