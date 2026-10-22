import { GeneralLessonData } from '../allLessonsData';

export const G10_U6_DATA: GeneralLessonData = {
  id: "g10-u7",
  grade: "10",
  unitNumber: 7,
  titleEn: "Electronic Spreadsheets",
  titleSi: "ඉලෙක්ට්‍රොනික පැතුරුම්පත්",
  subtopics: [
    {
      id: "g10-u7-st-1",
      number: "7.1",
      titleEn: "Introduction to Electronic Spreadsheets",
      titleSi: "ඉලෙක්ට්‍රොනික පැතුරුම්පත් පිළිබඳ හැඳින්වීම",
      summaryEn: "Core concepts, evolution from VisiCalc to modern cloud spreadsheets, and key calculation advantages.",
      summarySi: "මූලික සංකල්ප, VisiCalc සිට වලාකුළු පැතුරුම්පත් දක්වා පරිණාමය සහ ගණනය කිරීමේ ප්‍රධාන වාසි.",
      blocks: [
        {
          id: "b-g10-u7-1-1",
          en: "Electronic Spreadsheet software is application software designed to organize, store, manipulate, calculate, and analyze numerical and textual data arranged in a grid of rows and columns (tabular form). It automates complex mathematical and logical calculations with high speed and precision.",
          si: "ඉලෙක්ට්‍රොනික පැතුරුම්පත් යනු පේළි (Rows) සහ තීරු (Columns) සහිත වගුගත ජාලයක (Tabular grid) දත්ත සංවිධානය කිරීමට, ගබඩා කිරීමට, හැසිරවීමට, ගණනය කිරීමට සහ විශ්ලේෂණය කිරීමට නිර්මාණය කර ඇති යෙදවුම් මෘදුකාංගයකි. සූත්‍ර (Formulas) සහ ශ්‍රිත (Functions) භාවිතයෙන් සංකීර්ණ ගණිතමය සහ තාර්කික මෙහෙයුම් වේගවත්ව හා නිවැරදිව ස්වයංක්‍රීයව සිදු කිරීම මෙහි ප්‍රධාන කාර්යයයි.",
          highlightTerm: "Electronic Spreadsheet Definition",
          highlightTermSi: "ඉලෙක්ට්‍රොනික පැතුරුම්පත් සංකල්පය සහ අර්ථ දැක්වීම"
        },
        {
          id: "b-g10-u7-1-2",
          en: "VisiCalc (Visible Calculator), created in 1979 by Dan Bricklin and Bob Frankston for the Apple II microcomputer, was the world's first electronic spreadsheet software. It revolutionized business accounting by replacing manual paper ledger books with automated screen-based calculations.",
          si: "1979 දී ඩෑන් බ්‍රික්ලින් (Dan Bricklin) සහ බොබ් ෆ්‍රෑන්ක්ස්ටන් (Bob Frankston) විසින් Apple II පරිගණකය සඳහා නිර්මාණය කරන ලද VisiCalc ලොව ප්‍රථම ඉලෙක්ට්‍රොනික පැතුරුම්පත් මෘදුකාංගය වේ. සාම්ප්‍රදායික අතින් ලියන ලෙජර් පොත් වෙනුවට තිරය මත ස්වයංක්‍රීය ගණනය කිරීම් හඳුන්වා දෙමින් එය ව්‍යාපාරික ක්ෂේත්‍රයේ විප්ලවීය වෙනසක් ඇති කළේය.",
          highlightTerm: "VisiCalc & Spreadsheet Evolution",
          highlightTermSi: "VisiCalc සහ පැතුරුම්පත් පරිණාමය"
        },
        {
          id: "b-g10-u7-1-3",
          en: "Spreadsheet applications are classified into:\n* **Proprietary Commercial Software:** Microsoft Excel, Lotus 1-2-3, Corel Quattro Pro, Apple Numbers\n* **Free and Open Source Software (FOSS):** LibreOffice Calc, Apache OpenOffice Calc\n* **Cloud-based Web Spreadsheets:** Google Sheets, Microsoft Excel Online",
          si: "පැතුරුම්පත් මෘදුකාංග ප්‍රධාන කාණ්ඩ 3කට වර්ග කෙරේ:\n* **හිමිකාර වාණිජ මෘදුකාංග (Proprietary Commercial):** Microsoft Excel, Lotus 1-2-3, Corel Quattro Pro, Apple Numbers\n* **නිදහස් හා විවෘත මූලාශ්‍ර මෘදුකාංග (FOSS):** LibreOffice Calc, Apache OpenOffice Calc\n* **වලාකුළු ආශ්‍රිත මාර්ගගත පැතුරුම්පත් (Cloud-based Web):** Google Sheets, Microsoft Excel Online",
          highlightTerm: "Software Classifications & Examples",
          highlightTermSi: "මෘදුකාංග වර්ගීකරණය සහ උදාහරණ"
        },
        {
          id: "b-g10-u7-1-4",
          en: "Key advantages of electronic spreadsheets include:\n* **Automated & Rapid Calculations:** Eliminates manual human arithmetic errors.\n* **Automatic Recalculation:** Results update instantly whenever input cell values change.\n* **What-If Analysis & Forecasting:** Test different scenarios to predict outcomes.\n* **Visual Data Presentation:** Generate charts (Column, Bar, Line, Pie) directly from data.\n* **Data Organization:** Efficient sorting, filtering, and structuring of extensive data sets.",
          si: "ඉලෙක්ට්‍රොනික පැතුරුම්පත්වල ප්‍රධාන වාසි:\n* **ස්වයංක්‍රීය හා වේගවත් ගණනය කිරීම්:** මිනිස් දෝෂවලින් තොරව නිවැරදිව හා වේගවත්ව ගණනය කිරීම.\n* **ස්වයංක්‍රීය යළි ගණනය කිරීම (Automatic Recalculation):** ආදාන සෛලවල අගයන් වෙනස් වූ වහාම ප්‍රතිඵල ක්ෂණිකව යාවත්කාලීන වීම.\n* **අනුමාන විශ්ලේෂණය (What-If Analysis):** ආදාන අගයන් වෙනස් කරමින් අනාගත ප්‍රතිඵල පුරෝකථනය කිරීම.\n* **දෘශ්‍යමාන දත්ත ඉදිරිපත් කිරීම:** දත්ත ඇසුරෙන් විවිධ ප්‍රස්ථාර (තීරු, රේඛීය, වට) නිර්මාණය කිරීම.\n* **දත්ත සංවිධානය:** විශාල දත්ත කාර්යක්ෂමව වර්ග කිරීම (Sorting) සහ පෙරීම (Filtering).",
          highlightTerm: "Core Advantages & Recalculation",
          highlightTermSi: "ප්‍රධාන වාසි සහ ස්වයංක්‍රීය යළි ගණනය"
        }
      ],
      checkpointQuiz: {
        id: "q-g10-u7-1",
        questionEn: "What was the world's first electronic spreadsheet software developed for personal computers?",
        questionSi: "පුද්ගලික පරිගණක සඳහා නිර්මාණය කරන ලද ලොව ප්‍රථම ඉලෙක්ට්‍රොනික පැතුරුම්පත් මෘදුකාංගය කුමක්ද?",
        options: [
          { id: "1", en: "Lotus 1-2-3", si: "Lotus 1-2-3" },
          { id: "2", en: "VisiCalc", si: "VisiCalc" },
          { id: "3", en: "Microsoft Excel", si: "Microsoft Excel" },
          { id: "4", en: "LibreOffice Calc", si: "LibreOffice Calc" }
        ],
        correctOptionId: "2",
        explanationEn: "VisiCalc was created in 1979 by Dan Bricklin and Bob Frankston for the Apple II computer as the first electronic spreadsheet.",
        explanationSi: "1979 දී ඩෑන් බ්‍රික්ලින් සහ බොබ් ෆ්‍රෑන්ක්ස්ටන් විසින් Apple II පරිගණකය සඳහා නිර්මාණය කරන ලද VisiCalc ලොව ප්‍රථම ඉලෙක්ට්‍රොනික පැතුරුම්පතයි."
      }
    },
    {
      id: "g10-u7-st-2",
      number: "7.2",
      titleEn: "User Interface Components & Grid Architecture",
      titleSi: "පරිශීලක අතුරුමුහුණතේ සංරචක සහ ව්‍යුහය",
      summaryEn: "Workbooks, worksheets, rows, columns, cell coordinates, Name Box, and Formula Bar.",
      summarySi: "කාර්ය පොත්, වැඩපත්‍රිකා, පේළි, තීරු, සෛල ඛණ්ඩාංක, නම කොටුව සහ සූත්‍ර තීරුව.",
      blocks: [
        {
          id: "b-g10-u7-2-1",
          en: "A Workbook is the entire saved spreadsheet file (e.g., .xlsx or .ods). Each workbook contains one or more Worksheets. A Worksheet is a single grid of intersecting horizontal rows and vertical columns used to enter, organize, and calculate data.",
          si: "කාර්ය පොතක් (Workbook) යනු පරිගණකයේ සුරකින ලද සම්පූර්ණ පැතුරුම්පත් ගොනුවයි (උදා: .xlsx හෝ .ods). එක් කාර්ය පොතක් තුළ වැඩපත්‍රිකා (Worksheets) එකක් හෝ කිහිපයක් අඩංගු විය හැක. වැඩපත්‍රිකාවක් යනු දත්ත ඇතුළත් කිරීමට හා ගණනය කිරීමට භාවිත වන තිරස් පේළි සහ සිරස් තීරුවලින් සමන්විත තනි වැඩතලයයි.",
          highlightTerm: "Workbook vs Worksheet Architecture",
          highlightTermSi: "කාර්ය පොත සහ වැඩපත්‍රිකාව"
        },
        {
          id: "b-g10-u7-2-2",
          en: "Rows are horizontal lines identified by numbers (1, 2, 3, ...) up to 1,048,576 rows. Columns are vertical lines identified by letters (A, B, C, ..., Z, AA, AB, ..., up to XFD) totaling 16,384 columns in modern spreadsheets like MS Excel and LibreOffice Calc.",
          si: "පේළි (Rows) යනු '1' සිට '1,048,576' දක්වා අංක මගින් හඳුනාගන්නා තිරස් රේඛා වේ. තීරු (Columns) යනු 'A, B, ..., Z, AA, ..., XFD' දක්වා අක්ෂර මගින් හඳුනාගන්නා සිරස් රේඛා වන අතර නූතන පැතුරුම්පත්වල මුළු තීරු ගණන 16,384 කි.",
          highlightTerm: "Rows, Columns & Grid Capacity",
          highlightTermSi: "පේළි, තීරු සහ ජාල ධාරිතාව"
        },
        {
          id: "b-g10-u7-2-3",
          en: "A Cell is the intersection of a row and a column, identified by its unique Cell Address (e.g., B5 = column B, row 5). The Active Cell is the currently selected cell outlined with a thick border. The Name Box displays the address of the active cell, while the Formula Bar displays the formula, function, or underlying value entered into that cell.",
          si: "තීරුවක් සහ පේළියක් එකිනෙක ඡේදනය වන ස්ථානය සෛලයක් (Cell) නම් වන අතර එය සෛල ලිපිනයකින් (Cell Address) අනන්‍යව හඳුනාගනී (උදා: B5 = B තීරුව, 5 පේළිය). තෝරාගෙන ඇති සෛලය සක්‍රීය සෛලය (Active Cell) වේ. නම කොටුව (Name Box) මගින් සක්‍රීය සෛලයේ ලිපිනය දර්ශනය කරන අතර, සූත්‍ර තීරුව (Formula Bar) මගින් එම සෛලයේ අඩංගු සූත්‍රය, ශ්‍රිතය හෝ සැබෑ අගය ප්‍රකාශයට පත් කරයි.",
          highlightTerm: "Cell, Name Box & Formula Bar",
          highlightTermSi: "සෛලය, නම කොටුව සහ සූත්‍ර තීරුව"
        },
        {
          id: "b-g10-u7-2-4",
          en: "A Cell Range is a block of contiguous selected cells defined by the top-left cell address and bottom-right cell address separated by a colon (:). Example: A1:C5 encompasses all cells bounded between row 1 to 5 and column A to C. In formulas, ranges MUST use colons (e.g., =SUM(A1:A10)), never hyphens or dots.",
          si: "එකිනෙකට මායිම් වූ සෛල සමූහයක් සෛල පරාසයක් (Cell Range) නම් වේ. මෙය ඉහළ වම්පස සෛල ලිපිනය සහ පහළ දකුණුපස සෛල ලිපිනය අතර කෝලනයක් (:) තැබීමෙන් නිරූපණය කෙරේ (උදා: A1:C5). සූත්‍ර සහ ශ්‍රිත සඳහා සෛල පරාස ලියන විට අනිවාර්යයෙන්ම කෝලනය (:) භාවිත කළ යුතුය (උදා: =SUM(A1:A10)).",
          highlightTerm: "Cell Range & Colon Syntax",
          highlightTermSi: "සෛල පරාසය සහ කෝලන (:) භාවිතය"
        }
      ],
      checkpointQuiz: {
        id: "q-g10-u7-2",
        questionEn: "Which user interface component displays the cell address of the currently active cell?",
        questionSi: "මේ වන විට තෝරාගෙන ඇති සක්‍රීය සෛලයේ ලිපිනය (Cell Address) නිරූපණය කරන සංරචකය කුමක්ද?",
        options: [
          { id: "1", en: "Status Bar", si: "තත්ත්ව තීරුව (Status Bar)" },
          { id: "2", en: "Formula Bar", si: "සූත්‍ර තීරුව (Formula Bar)" },
          { id: "3", en: "Name Box", si: "නම කොටුව (Name Box)" },
          { id: "4", en: "Title Bar", si: "මාතෘකා තීරුව (Title Bar)" }
        ],
        correctOptionId: "3",
        explanationEn: "The Name Box displays the address (e.g., A1, B5) of the currently selected active cell.",
        explanationSi: "නම කොටුව (Name Box) මඟින් සක්‍රීය සෛලයේ ලිපිනය (උදා: A1, B5) දර්ශනය කෙරේ."
      }
    },
    {
      id: "g10-u7-st-3",
      number: "7.3",
      titleEn: "Data Types in Spreadsheets",
      titleSi: "පැතුරුම්පත්වල භාවිත වන දත්ත වර්ග",
      summaryEn: "Labels, values, formulas, functions, date/time formats, and default alignment rules.",
      summarySi: "ලේබල, අගයන්, සූත්‍ර, ශ්‍රිත, දිනය/වේලාව ආකෘති සහ පෙරනිමි පෙළගැස්වීම් නීති.",
      blocks: [
        {
          id: "b-g10-u7-3-1",
          en: "Labels (Text Data) are non-numeric characters, headings, and descriptions (e.g., 'Student Name', 'Grade 10'). By default, spreadsheet applications automatically align Labels to the LEFT edge of the cell.",
          si: "ලේබල (පෙළ දත්ත) යනු සංඛ්‍යාත්මක නොවන අක්ෂර, ශීර්ෂ පාඨ සහ විස්තර වේ (උදා: 'ශිෂ්‍ය නම', 'ශ්‍රේණිය 10'). පෙරනිමියෙන් (By default) පැතුරුම්පත් මෘදුකාංග මගින් ලේබල සෛලයේ වම් පසට (LEFT) පෙළගස්වනු ලබයි.",
          highlightTerm: "Labels & Left Alignment",
          highlightTermSi: "ලේබල සහ පෙරනිමි වම් පෙළගැස්ම"
        },
        {
          id: "b-g10-u7-3-2",
          en: "Values (Numeric Data) are numbers used for mathematical computations (e.g., 85, 1500.50, -42). By default, spreadsheets automatically align Values and currency figures to the RIGHT edge of the cell.",
          si: "අගයන් (සංඛ්‍යාත්මක දත්ත) යනු ගණිතමය ගණනය කිරීම් සඳහා භාවිත වන සංඛ්‍යා වේ (උදා: 85, 1500.50, -42). පෙරනිමියෙන් (By default) පැතුරුම්පත් මෘදුකාංග මගින් සංඛ්‍යාත්මක අගයන් සෛලයේ දකුණු පසට (RIGHT) පෙළගස්වනු ලබයි.",
          highlightTerm: "Values & Right Alignment",
          highlightTermSi: "අගයන් සහ පෙරනිමි දකුණු පෙළගැස්ම"
        },
        {
          id: "b-g10-u7-3-3",
          en: "Formulas and Functions are mathematical expressions and built-in calculation procedures. Every formula or function MUST begin with an equals sign (=). For example, =A1+B1 or =SUM(A1:A5). If the equals sign is omitted, the spreadsheet treats the entry as plain label text.",
          si: "සූත්‍ර (Formulas) සහ ශ්‍රිත (Functions) යනු පරිශීලකයා ලියන ගණිතමය ප්‍රකාශන සහ මෘදුකාංගයේ ඇති ගොඩනැඟූ ශ්‍රිත වේ. සෑම සූත්‍රයක් හෝ ශ්‍රිතයක්ම අනිවාර්යයෙන්ම සමාන ලකුණෙන් (=) ආරම්භ විය යුතුය (උදා: =A1+B1 හෝ =SUM(A1:A5)). සමාන ලකුණ නොයෙදුවහොත් පැතුරුම්පත එය සාමාන්‍ය පෙළක් (Label) ලෙස සලකයි.",
          highlightTerm: "Formulas, Functions & Equal Sign",
          highlightTermSi: "සූත්‍ර, ශ්‍රිත සහ සමාන ලකුණ (=)"
        },
        {
          id: "b-g10-u7-3-4",
          en: "Date & Time data types represent calendar dates and clock times (e.g., '2025-10-12', '08:30 AM'). Internally, spreadsheets store dates as serial numbers to enable date arithmetic. Dates and times are aligned to the RIGHT by default.",
          si: "දිනය සහ වේලාව (Date & Time) දත්ත වර්ග මගින් දිනදසුන් දින සහ වේලාවන් නිරූපණය කෙරේ (උදා: '2025-10-12', '08:30 AM'). අභ්‍යන්තරව දින ගණනය කිරීම් සඳහා ඒවා අනුක්‍රමික සංඛ්‍යා ලෙස ගබඩා වන අතර පෙරනිමියෙන් දකුණු පසට (RIGHT) පෙළගැසේ.",
          highlightTerm: "Date and Time Data Types",
          highlightTermSi: "දිනය සහ වේලාව දත්ත වර්ග"
        }
      ],
      tableData: {
        headers: [
          { en: "Data Type", si: "දත්ත වර්ගය" },
          { en: "Description", si: "විස්තරය" },
          { en: "Default Alignment", si: "පෙරනිමි පෙළගැස්ම" },
          { en: "Examples", si: "උදාහරණ" }
        ],
        rows: [
          {
            type: { en: "Label / Text", si: "ලේබල / පෙළ" },
            desc: { en: "Headings, titles, names", si: "ශීර්ෂ, නම්, පෙළ විස්තර" },
            align: { en: "LEFT", si: "වමට (LEFT)" },
            eg: { en: "Name, Grade, Subject", si: "නම, ශ්‍රේණිය, විෂය" }
          },
          {
            type: { en: "Value / Number", si: "අගය / සංඛ්‍යා" },
            desc: { en: "Numeric data for calculations", si: "ගණනය කිරීම් සඳහා සංඛ්‍යා" },
            align: { en: "RIGHT", si: "දකුණට (RIGHT)" },
            eg: { en: "75, 1250.00, -20", si: "75, 1250.00, -20" }
          },
          {
            type: { en: "Formula", si: "සූත්‍ර" },
            desc: { en: "User expressions starting with =", si: "සමාන ලකුණෙන් ඇරඹෙන ප්‍රකාශන" },
            align: { en: "RIGHT (result)", si: "දකුණට (ප්‍රතිඵලය)" },
            eg: { en: "=A1*B1, =C2+10", si: "=A1*B1, =C2+10" }
          },
          {
            type: { en: "Function", si: "ශ්‍රිත" },
            desc: { en: "Pre-defined tools starting with =", si: "ගොඩනැඟූ ගණනය මෙවලම්" },
            align: { en: "RIGHT (result)", si: "දකුණට (ප්‍රතිඵලය)" },
            eg: { en: "=SUM(A1:A10), =AVERAGE(B2:B5)", si: "=SUM(A1:A10), =AVERAGE(B2:B5)" }
          },
          {
            type: { en: "Date & Time", si: "දිනය සහ වේලාව" },
            desc: { en: "Calendar dates and time formats", si: "දින හා වේලා ආකෘති" },
            align: { en: "RIGHT", si: "දකුණට (RIGHT)" },
            eg: { en: "2025-10-12, 10:30 AM", si: "2025-10-12, 10:30 AM" }
          }
        ]
      },
      checkpointQuiz: {
        id: "q-g10-u7-3",
        questionEn: "How are Label (text) data and Value (numeric) data aligned by default within spreadsheet cells?",
        questionSi: "පැතුරුම්පත් සෛල තුළ ලේබල (පෙළ) දත්ත සහ අගයන් (සංඛ්‍යාත්මක) දත්ත පෙරනිමියෙන් පෙළගැසෙන්නේ කෙසේද?",
        options: [
          { id: "1", en: "Labels to the Left; Values to the Right", si: "ලේබල වම් පසට ද, අගයන් දකුණු පසට ද" },
          { id: "2", en: "Labels to the Right; Values to the Left", si: "ලේබල දකුණු පසට ද, අගයන් වම් පසට ද" },
          { id: "3", en: "Both Labels and Values to the Center", si: "ලේබල සහ අගයන් දෙකම මධ්‍යගතව" },
          { id: "4", en: "Both Labels and Values to the Left", si: "ලේබල සහ අගයන් දෙකම වම් පසට" }
        ],
        correctOptionId: "1",
        explanationEn: "In standard spreadsheets, Text/Labels align to the Left while Numbers/Values align to the Right.",
        explanationSi: "පැතුරුම්පත්වල සම්මත නීතිය අනුව පෙළ/ලේබල වමටත් (Left), සංඛ්‍යා/අගයන් දකුණටත් (Right) පෙරනිමියෙන් පෙළගැසේ."
      }
    },
    {
      id: "g10-u7-st-4",
      number: "7.4",
      titleEn: "Mathematical Operators & Order of Precedence",
      titleSi: "ගණිතමය මෙහෙයුම්කාරක සහ ප්‍රමුඛතාව",
      summaryEn: "Arithmetic operators (+, -, *, /, ^), precedence order (PEMDAS/BODMAS), and step-by-step formula evaluation.",
      summarySi: "ගණිතමය මෙහෙයුම්කාරක (+, -, *, /, ^), ප්‍රමුඛතා අනුපිළිවෙල සහ සූත්‍ර සුළු කිරීමේ පියවර.",
      blocks: [
        {
          id: "b-g10-u7-4-1",
          en: "Spreadsheets use standard arithmetic operators:\n* **Addition (`+`):** `=A1+B1`\n* **Subtraction (`-`):** `=A1-B1`\n* **Multiplication (`*`):** `=A1*B1`\n* **Division (`/`):** `=A1/B1`\n* **Exponentiation / Power (`^`):** `=A1^2`\n\nAll formulas and functions MUST begin with an equals sign (`=`).",
          si: "පැතුරුම්පත්වල භාවිත වන සම්මත ගණිතමය මෙහෙයුම්කාරක:\n* **එකතු කිරීම (`+`):** `=A1+B1`\n* **අඩු කිරීම (`-`):** `=A1-B1`\n* **ගුණ කිරීම (`*`):** `=A1*B1`\n* **බෙදීම (`/`):** `=A1/B1`\n* **බල නැගීම (`^`):** `=A1^2`\n\nසියලුම සූත්‍ර සහ ශ්‍රිත අනිවාර්යයෙන්ම සමාන ලකුණෙන් (`=`) ආරම්භ විය යුතුය.",
          highlightTerm: "Spreadsheet Arithmetic Operators",
          highlightTermSi: "ගණිතමය මෙහෙයුම්කාරක (+, -, *, /, ^)"
        },
        {
          id: "b-g10-u7-4-2",
          en: "Operator Precedence determines calculation order (BODMAS / PEMDAS):\n* **1. Parentheses / Brackets `( )`:** Evaluated first.\n* **2. Exponentiation (`^`):** Evaluated second.\n* **3. Multiplication (`*`) & Division (`/`):** Equal priority; evaluated from left to right.\n* **4. Addition (`+`) & Subtraction (`-`):** Equal priority; evaluated from left to right.",
          si: "මෙහෙයුම්කාරක ප්‍රමුඛතා අනුපිළිවෙල (BODMAS/PEMDAS):\n* **1. වරහන් `( )`:** ප්‍රථමයෙන් සුළු වේ.\n* **2. බල නැගීම (`^`):** දෙවනුව සුළු වේ.\n* **3. ගුණ කිරීම (`*`) සහ බෙදීම (`/`):** සමාන ප්‍රමුඛතාව; වමේ සිට දකුණට සුළු වේ.\n* **4. එකතු කිරීම (`+`) සහ අඩු කිරීම (`-`):** සමාන ප්‍රමුඛතාව; වමේ සිට දකුණට සුළු වේ.",
          highlightTerm: "Order of Operator Precedence",
          highlightTermSi: "මෙහෙයුම්කාරක ප්‍රමුඛතා අනුපිළිවෙල (BODMAS)"
        },
        {
          id: "b-g10-u7-4-3",
          en: "Step-by-step formula evaluation examples:\n* `=10 + 5 * 2` ➔ Multiplication first (`5 * 2 = 10`), then addition ➔ `= 10 + 10 = 20`\n* `=(10 + 5) * 2` ➔ Parentheses first (`10 + 5 = 15`), then multiplication ➔ `= 15 * 2 = 30`\n* `=20 / 4 + 2 ^ 3` ➔ Exponent first (`2^3 = 8`), then division (`20 / 4 = 5`), then addition ➔ `= 5 + 8 = 13`",
          si: "පියවරෙන් පියවර සූත්‍ර සුළු කිරීමේ උදාහරණ:\n* `=10 + 5 * 2` ➔ ප්‍රථමයෙන් ගුණ කිරීම (`5 * 2 = 10`), පසුව එකතු කිරීම ➔ `= 10 + 10 = 20`\n* `=(10 + 5) * 2` ➔ ප්‍රථමයෙන් වරහන් (`10 + 5 = 15`), පසුව ගුණ කිරීම ➔ `= 15 * 2 = 30`\n* `=20 / 4 + 2 ^ 3` ➔ ප්‍රථමයෙන් බල නැගීම (`2^3 = 8`), පසුව බෙදීම (`20 / 4 = 5`), පසුව එකතු කිරීම ➔ `= 5 + 8 = 13`",
          highlightTerm: "Step-by-Step Formula Evaluation",
          highlightTermSi: "පියවරෙන් පියවර සූත්‍ර සුළු කිරීම"
        }
      ],
      checkpointQuiz: {
        id: "q-g10-u7-4",
        questionEn: "If cell A1 = 10, B1 = 20, and C1 = 5, what value is displayed in cell D1 for the formula =A1+B1/C1*2?",
        questionSi: "A1 = 10, B1 = 20, සහ C1 = 5 නම්, D1 සෛලයට ඇතුළත් කළ =A1+B1/C1*2 සූත්‍රයේ ප්‍රතිඵලය කුමක්ද?",
        options: [
          { id: "1", en: "12", si: "12" },
          { id: "2", en: "18", si: "18" },
          { id: "3", en: "28", si: "28" },
          { id: "4", en: "120", si: "120" }
        ],
        correctOptionId: "2",
        explanationEn: "B1/C1 = 20/5 = 4. Then 4 * 2 = 8 (left-to-right division & multiplication). Finally A1 + 8 = 10 + 8 = 18.",
        explanationSi: "ප්‍රමුඛතාව අනුව පළමුව බෙදීම: 20/5 = 4. දෙවනුව ගුණ කිරීම: 4 * 2 = 8. අවසානයේ එකතු කිරීම: 10 + 8 = 18."
      }
    },
    {
      id: "g10-u7-st-5",
      number: "7.5",
      titleEn: "Basic Functions in Spreadsheets",
      titleSi: "මූලික පැතුරුම්පත් ශ්‍රිත",
      summaryEn: "Built-in calculation tools: SUM, AVERAGE, MIN, MAX, COUNT, COUNTA, and logical IF.",
      summarySi: "ගොඩනැගූ ගණනය කිරීම් මෙවලම්: SUM, AVERAGE, MIN, MAX, COUNT, COUNTA, සහ තාර්කික IF.",
      blocks: [
        {
          id: "b-g10-u7-5-1",
          en: "A Function is a pre-programmed formula built into spreadsheet software. Syntax: =FUNCTION_NAME(arguments). The function starts with an equals sign (=), followed by the function name (in uppercase by convention), and an argument enclosed in parentheses, typically a cell range such as (A1:A10).",
          si: "ශ්‍රිතයක් (Function) යනු පැතුරුම්පත් මෘදුකාංගය තුළ ඇති පෙර සැකසූ සූත්‍රයකි. සම්මත සැකැස්ම: =ශ්‍රිත_නාමය(විචල්‍යයන්). එය සමාන ලකුණෙන් (=) ආරම්භ වී, ශ්‍රිතයේ නම සහ වරහන් තුළ සෛල පරාසය (උදා: A1:A10) ලබා දිය යුතුය.",
          highlightTerm: "Function Structure & Syntax",
          highlightTermSi: "ශ්‍රිතයක සැකැස්ම සහ නීති"
        },
        {
          id: "b-g10-u7-5-2",
          en: "Common statistical functions:\n* **`=SUM(range)`:** Calculates the total sum of numbers in the specified range.\n* **`=AVERAGE(range)`:** Calculates the arithmetic mean (sum divided by count of numeric cells).\n* **`=MAX(range)`:** Identifies and returns the highest numeric value in the range.\n* **`=MIN(range)`:** Identifies and returns the lowest numeric value in the range.",
          si: "මූලික සංඛ්‍යානමය ශ්‍රිත:\n* **`=SUM(range)`:** සෛල පරාසයේ ඇති සියලු සංඛ්‍යාවල එකතුව ගණනය කරයි.\n* **`=AVERAGE(range)`:** සෛල පරාසයේ ඇති සංඛ්‍යාවල මධ්‍යන්‍යය (සාමාන්‍යය) ගණනය කරයි.\n* **`=MAX(range)`:** සෛල පරාසයේ අඩංගු උපරිම (විශාලතම) අගය ලබා දෙයි.\n* **`=MIN(range)`:** සෛල පරාසයේ අඩංගු අවම (කුඩාතම) අගය ලබා දෙයි.",
          highlightTerm: "Statistical Functions: SUM, AVERAGE, MIN, MAX",
          highlightTermSi: "සංඛ්‍යානමය ශ්‍රිත: SUM, AVERAGE, MIN, MAX"
        },
        {
          id: "b-g10-u7-5-3",
          en: "Differences between COUNT and COUNTA:\n* **`=COUNT(range)`:** Counts ONLY cells containing numeric numbers. Text and blank cells are ignored.\n* **`=COUNTA(range)`:** Counts ALL non-empty cells (numbers, text, labels, symbols, formulas). Only completely blank cells are ignored.",
          si: "COUNT සහ COUNTA අතර වෙනස:\n* **`=COUNT(range)`:** ගණනය කරන්නේ සංඛ්‍යා (Numbers) අඩංගු සෛල පමණි. පෙළ සහ හිස් සෛල නොසලකා හරියි.\n* **`=COUNTA(range)`:** හිස් නොවන (Non-empty) සියලු සෛල (සංඛ්‍යා, පෙළ, සංකේත) ගණනය කරයි. සම්පූර්ණයෙන්ම හිස් සෛල පමණක් නොසලකා හරියි.",
          highlightTerm: "Counting Functions: COUNT vs COUNTA",
          highlightTermSi: "ගණනය කිරීමේ ශ්‍රිත: COUNT සහ COUNTA"
        },
        {
          id: "b-g10-u7-5-4",
          en: "The IF Function makes logical decisions: Syntax: =IF(Logical_Test, Value_if_True, Value_if_False). Example: =IF(C2>=50, \"Pass\", \"Fail\"). If cell C2 contains 65, the test is True and 'Pass' is returned; if C2 contains 40, 'Fail' is returned. Text outputs in IF functions MUST be enclosed in double quotes.",
          si: "තාර්කික IF ශ්‍රිතය මඟින් කොන්දේසියක් පරීක්ෂා කර තීරණ ගැනීමේ ගණනය කිරීම් සිදු කරයි. සැකැස්ම: =IF(කොන්දේසිය, සත්‍ය_විට_අගය, අසත්‍ය_විට_අගය). උදා: =IF(C2>=50, \"Pass\", \"Fail\"). C2 සෛලයේ අගය 65 නම් 'Pass' ද, 40 නම් 'Fail' ද ප්‍රතිඵලය වේ. IF ශ්‍රිතයේ පෙළ ප්‍රතිදාන ද්විත්ව උද්ධෘත ලකුණු (\") තුළ ලිවිය යුතුය.",
          highlightTerm: "Decision Making: Simple IF Function",
          highlightTermSi: "තීරණ ගැනීම: සරල IF ශ්‍රිතය"
        }
      ],
      checkpointQuiz: {
        id: "q-g10-u7-5",
        questionEn: "Which function counts only cells that contain numeric values within the range A1:A10?",
        questionSi: "A1:A10 පරාසය තුළ සංඛ්‍යාත්මක අගයන් පමණක් අඩංගු සෛල ගණන ගණනය කරන ශ්‍රිතය කුමක්ද?",
        options: [
          { id: "1", en: "=COUNTA(A1:A10)", si: "=COUNTA(A1:A10)" },
          { id: "2", en: "=COUNT(A1:A10)", si: "=COUNT(A1:A10)" },
          { id: "3", en: "=COUNTNUM(A1:A10)", si: "=COUNTNUM(A1:A10)" },
          { id: "4", en: "=SUM(A1:A10)", si: "=SUM(A1:A10)" }
        ],
        correctOptionId: "2",
        explanationEn: "COUNT counts only numeric cells. COUNTA counts all non-empty cells including text.",
        explanationSi: "COUNT ශ්‍රිතය මඟින් සංඛ්‍යාත්මක අගයන් සහිත සෛල පමණක් ගණනය කරන අතර COUNTA මඟින් හිස් නොවන සියලු සෛල ගණනය කරයි."
      }
    },
    {
      id: "g10-u7-st-6",
      number: "7.6",
      titleEn: "Cell Referencing Methods",
      titleSi: "සෛල යොමු කිරීමේ ක්‍රම",
      summaryEn: "Relative referencing (A1), Absolute referencing ($A$1), and Mixed referencing ($A1, A$1).",
      summarySi: "සාපේක්ෂ සෛල යොමු (A1), නිරපේක්ෂ සෛල යොමු ($A$1), සහ මිශ්‍ර සෛල යොමු ($A1, A$1).",
      blocks: [
        {
          id: "b-g10-u7-6-1",
          en: "Relative Cell Referencing: When a formula is copied to another cell, the cell addresses automatically adjust relative to the new row or column position. Example: If =A1+B1 in cell C1 is copied down to cell C2, it automatically becomes =A2+B2.",
          si: "සාපේක්ෂ සෛල යොමු (Relative Referencing): සූත්‍රයක් වෙනත් සෛලයකට පිටපත් කිරීමේදී, පිටපත් කරන නව ස්ථානයට සාපේක්ෂව සෛල ලිපිනයන් ස්වයංක්‍රීයව වෙනස් වේ. උදා: C1 සෛලයේ ඇති =A1+B1 සූත්‍රය C2 සෛලයට පිටපත් කළ විට එය ස්වයංක්‍රීයව =A2+B2 බවට පත්වේ.",
          highlightTerm: "Relative Cell Referencing",
          highlightTermSi: "සාපේක්ෂ සෛල යොමු"
        },
        {
          id: "b-g10-u7-6-2",
          en: "Absolute Cell Referencing: The cell address remains fixed and locked regardless of where the formula is copied. Indicated by placing a Dollar sign ($) before both the column letter and row number (e.g., $A$1). Essential when multiplying multiple rows by a fixed tax rate, discount rate, or interest rate cell.",
          si: "නිරපේක්ෂ සෛල යොමු (Absolute Referencing): සූත්‍රය වෙනත් ඕනෑම ස්ථානයකට පිටපත් කළද සෛල ලිපිනය වෙනස් නොවී ස්ථාවරව පවතී. මෙහිදී තීරු අක්ෂරයට සහ පේළි අංකයට ඉදිරියෙන් ඩොලර් සලකුණ ($) යොදනු ලබයි (උදා: $A$1). ස්ථාවර බදු ප්‍රතිශතයක් හෝ පොලී අනුපාතයක් වැනි තනි සෛලයක අගයකින් අනෙක් පේළි ගුණ කිරීමේදී මෙය අත්‍යවශ්‍ය වේ.",
          highlightTerm: "Absolute Cell Referencing ($A$1)",
          highlightTermSi: "නිරපේක්ෂ සෛල යොමු ($A$1)"
        },
        {
          id: "b-g10-u7-6-3",
          en: "Mixed Cell Referencing locks either only the column or only the row:\n* **`$A1`:** Column A is locked (fixed), while row 1 adjusts relatively when copied.\n* **`A$1`:** Row 1 is locked (fixed), while column A adjusts relatively when copied.\n\n*Shortcut:* Press the `F4` key repeatedly to cycle through Relative (`A1`), Absolute (`$A$1`), and Mixed (`$A1`, `A$1`).",
          si: "මිශ්‍ර සෛල යොමු (Mixed Referencing):\n* **`$A1`:** A තීරුව ස්ථාවරව අගුළු ලා (Fixed), පේළිය සාපේක්ෂව පවතී.\n* **`A$1`:** 1 පේළිය ස්ථාවරව අගුළු ලා (Fixed), තීරුව සාපේක්ෂව පවතී.\n\n*කෙටිමං යතුර:* `F4` යතුර එබීමෙන් සාපේක්ෂ (`A1`), නිරපේක්ෂ (`$A$1`), සහ මිශ්‍ර (`$A1`, `A$1`) යොමු අතර මාරු විය හැක.",
          highlightTerm: "Mixed Cell Referencing & F4 Key",
          highlightTermSi: "මිශ්‍ර සෛල යොමු සහ F4 යතුර"
        }
      ],
      checkpointQuiz: {
        id: "q-g10-u7-6",
        questionEn: "If the formula =A1*$B$1 in cell C1 is copied down to cell C2, what formula will appear in cell C2?",
        questionSi: "C1 සෛලයේ ඇති =A1*$B$1 සූත්‍රය C2 සෛලය වෙත පහළට පිටපත් කළ විට, C2 සෛලයේ දිස්වන සූත්‍රය කුමක්ද?",
        options: [
          { id: "1", en: "=A2*$B$1", si: "=A2*$B$1" },
          { id: "2", en: "=A2*$B$2", si: "=A2*$B$2" },
          { id: "3", en: "=A1*$B$1", si: "=A1*$B$1" },
          { id: "4", en: "=A2*B1", si: "=A2*B1" }
        ],
        correctOptionId: "1",
        explanationEn: "A1 is relative and shifts to A2; $B$1 is absolute and remains locked as $B$1.",
        explanationSi: "A1 සාපේක්ෂ බැවින් A2 ලෙස වෙනස් වන අතර, $B$1 නිරපේක්ෂ බැවින් නොවෙනස්ව $B$1 ලෙසම පවතී."
      }
    },
    {
      id: "g10-u7-st-7",
      number: "7.7",
      titleEn: "Formatting & Charts",
      titleSi: "හැඩසැසීම සහ ප්‍රස්ථාර",
      summaryEn: "Cell formatting (Merge & Center, Wrap Text, currency) and visual charts (Column, Bar, Line, Pie).",
      summarySi: "සෛල හැඩසැසීම (එක් කිරීම හා මධ්‍යගත කිරීම, පෙළ ඔතා තැබීම) සහ ප්‍රස්ථාර (තීරු, තති, රේඛීය, වට).",
      blocks: [
        {
          id: "b-g10-u7-7-1",
          en: "Cell formatting tools:\n* **Merge & Center:** Combines multiple adjacent cells into a single larger cell and centers the text (ideal for table titles).\n* **Wrap Text:** Displays long multi-word text across multiple lines inside a single cell without changing column width.\n* **Number Formatting:** Controls decimal places, currency signs (`Rs.`, `$`), percentages (`%`), and date representations.",
          si: "සෛල හැඩසැසීමේ මෙවලම්:\n* **Merge & Center:** යාබද සෛල කිහිපයක් එක් තනි විශාල සෛලයක් බවට පත්කර පෙළ මධ්‍යගත කරයි (වගු ශීර්ෂ සඳහා සුදුසුය).\n* **Wrap Text:** තීරුවේ පළල වෙනස් නොකර දිගු පෙළ පේළි කිහිපයකින් සෛලය තුළ දිස්කරවයි.\n* **සංඛ්‍යා හැඩසැසීම (Number Formatting):** දශමස්ථාන ගණන, මුදල් ඒකක (`රු.`, `$`), ප්‍රතිශත (`%`), සහ දින ආකෘති පාලනය කරයි.",
          highlightTerm: "Cell Formatting Tools",
          highlightTermSi: "සෛල හැඩසැසීමේ මෙවලම්"
        },
        {
          id: "b-g10-u7-7-2",
          en: "Spreadsheet chart types:\n* **Column Chart:** Compares discrete data categories using vertical bars.\n* **Bar Chart:** Compares discrete data categories using horizontal bars.\n* **Line Chart:** Displays continuous trends and changes over continuous time intervals.\n* **Pie Chart:** Shows proportions and percentage contributions of individual parts to a single 100% whole.",
          si: "පැතුරුම්පත් ප්‍රස්ථාර වර්ග:\n* **තීරු ප්‍රස්ථාරය (Column Chart):** සිරස් තීරු මඟින් විවිධ කාණ්ඩ එකිනෙක සංසන්දනය කරයි.\n* **තති ප්‍රස්ථාරය (Bar Chart):** තිරස් තීරු මඟින් විවිධ කාණ්ඩ එකිනෙක සංසන්දනය කරයි.\n* **රේඛීය ප්‍රස්ථාරය (Line Chart):** කාලයත් සමඟ සිදුවන දත්ත ප්‍රවණතා (Trends) සහ වෙනස්වීම් පෙන්වයි.\n* **වට ප්‍රස්ථාරය (Pie Chart):** සමස්තයකට (100%) එක් එක් කොටස්වල ප්‍රතිශතමය සහ අනුපාතමය දායකත්වය පෙන්වයි.",
          highlightTerm: "Chart Types: Column, Bar, Line, Pie",
          highlightTermSi: "ප්‍රස්ථාර වර්ග: තීරු, තති, රේඛීය, වට"
        },
        {
          id: "b-g10-u7-7-3",
          en: "Essential chart components:\n* **Chart Title:** Main heading identifying what the chart displays.\n* **X-Axis (Category Axis):** Horizontal axis displaying data category labels.\n* **Y-Axis (Value Axis):** Vertical axis displaying the numerical value scale.\n* **Legend:** Color-coded or pattern key identifying each data series.\n* **Data Labels:** Exact numeric values printed directly on bars, points, or pie slices.",
          si: "ප්‍රස්ථාරයක ප්‍රධාන සංරචක:\n* **ප්‍රස්ථාර මාතෘකාව (Chart Title):** ප්‍රස්ථාරයෙන් නිරූපණය වන දත්ත විස්තර කරන ප්‍රධාන ශීර්ෂය.\n* **X-අක්ෂය (කාණ්ඩ අක්ෂය):** දත්ත කාණ්ඩ ලේබල පෙන්වන තිරස් අක්ෂය.\n* **Y-අක්ෂය (අගය අක්ෂය):** සංඛ්‍යාත්මක පරිමාණය පෙන්වන සිරස් අක්ෂය.\n* **ප්‍රස්ථාර යතුර (Legend):** විවිධ දත්ත ශ්‍රේණි වර්ණ හෝ රටා මඟින් හඳුනාගැනීමට දෙන විස්තරය.\n* **දත්ත ලේබල (Data Labels):** තීරු හෝ වට කොටස් මත සටහන් වන නිශ්චිත අගයන්.",
          highlightTerm: "Chart Anatomy & Essential Elements",
          highlightTermSi: "ප්‍රස්ථාරයක ප්‍රධාන සංරචක"
        }
      ],
      checkpointQuiz: {
        id: "q-g10-u7-7",
        questionEn: "Which chart type is best suited to display the percentage contribution of different budget expenses to a total 100% household budget?",
        questionSi: "මුළු පවුලේ අයවැයෙන් (100%) විවිධ වියදම් දැරූ ප්‍රතිශතමය දායකත්වය නිරූපණය කිරීමට වඩාත්ම සුදුසු ප්‍රස්ථාර වර්ගය කුමක්ද?",
        options: [
          { id: "1", en: "Line Chart", si: "රේඛීය ප්‍රස්ථාරය (Line Chart)" },
          { id: "2", en: "Pie Chart", si: "වට ප්‍රස්ථාරය (Pie Chart)" },
          { id: "3", en: "Scatter Chart", si: "විසිරුණු ප්‍රස්ථාරය (Scatter Chart)" },
          { id: "4", en: "Area Chart", si: "ක්ෂේත්‍ර ප්‍රස්ථාරය (Area Chart)" }
        ],
        correctOptionId: "2",
        explanationEn: "A Pie Chart represents proportions and percentages contributing to a 100% whole.",
        explanationSi: "මුළු සමස්තයක (100%) ප්‍රතිශත හා අනුපාත නිරූපණය කිරීමට වඩාත්ම සුදුසු වන්නේ වට ප්‍රස්ථාරයයි (Pie Chart)."
      }
    },
    {
      id: "g10-u7-st-8",
      number: "7.8",
      titleEn: "Spreadsheet Common Error Indicators",
      titleSi: "පැතුරුම්පත් දෝෂ නිරූපක",
      summaryEn: "Understanding and resolving common spreadsheet errors: #####, #DIV/0!, #NAME?, #VALUE!, #REF!, #NUM!, #N/A.",
      summarySi: "පැතුරුම්පත්වල සුලබ දෝෂ හඳුනාගැනීම හා විසඳීම: #####, #DIV/0!, #NAME?, #VALUE!, #REF!, #NUM!, #N/A.",
      blocks: [
        {
          id: "b-g10-u7-8-1",
          en: "Common syntax and width errors:\n* **`#####`:** Column width is too narrow to display the number, or a date is negative. *Fix:* Drag column border to widen.\n* **`#DIV/0!`:** Formula attempts to divide a number by zero (`0`) or an empty cell. *Fix:* Provide a non-zero divisor.\n* **`#NAME?`:** Misspelled function name (e.g., `=SUMM(A1:A5)`) or unquoted text in a formula. *Fix:* Correct the spelling.",
          si: "පළල සහ වාක්‍ය ඛණ්ඩ දෝෂ:\n* **`#####`:** සංඛ්‍යාව හෝ දිනය දර්ශනය කිරීමට තීරුවේ පළල ප්‍රමාණවත් නොවීම. *විසඳුම:* තීරුවේ මායිම ඇද පළල් කරන්න.\n* **`#DIV/0!`:** සූත්‍රයකින් ශූන්‍යයෙන් (`0`) හෝ හිස් සෛලයකින් බෙදීමට තැත් කිරීම. *විසඳුම:* ශූන්‍ය නොවන බෙදුම්කාරකයක් යොදන්න.\n* **`#NAME?`:** ශ්‍රිතයක නම වැරදි ලෙස ලිවීම (උදා: `=SUMM(A1:A5)`) හෝ සූත්‍රයක උද්ධෘත නොමැති පෙළ යෙදීම. *විසඳුම:* අක්ෂර වින්‍යාසය නිවැරදි කරන්න.",
          highlightTerm: "Column Width & Syntax Errors",
          highlightTermSi: "පළල සහ වාක්‍ය ඛණ්ඩ දෝෂ (#####, #DIV/0!, #NAME?)"
        },
        {
          id: "b-g10-u7-8-2",
          en: "Data and reference errors:\n* **`#VALUE!`:** Incompatible data type used in a mathematical operation (e.g., `=A1+'Book'`). *Fix:* Ensure numeric operands.\n* **`#REF!`:** Formula refers to a cell that has been deleted or moved. *Fix:* Update with a valid cell reference.\n* **`#NUM!`:** A calculation generates an invalid numeric result (e.g., square root of a negative number).\n* **`#N/A`:** Value is not available to a lookup function.",
          si: "දත්ත සහ යොමු දෝෂ:\n* **`#VALUE!`:** ගණිතමය සූත්‍රයකට වැරදි දත්ත වර්ගයක් ලබා දීම (උදා: `=A1+'Book'`). *විසඳුම:* සංඛ්‍යාත්මක අගයන් පමණක් භාවිත කරන්න.\n* **`#REF!`:** සූත්‍රය යොමු කළ සෛලය මකා දමා (Deleted) තිබීම. *විසඳුම:* වලංගු සෛල ලිපිනයක් ඇතුළත් කරන්න.\n* **`#NUM!`:** අවලංගු සංඛ්‍යාත්මක ගණනයක් සිදුවීම (උදා: සෘණ සංඛ්‍යාවක වර්ගමූලය).\n* **`#N/A`:** සෙවුම් ශ්‍රිතයකින් අදාළ අගය සොයාගත නොහැකි වීම.",
          highlightTerm: "Data Type & Reference Errors",
          highlightTermSi: "දත්ත වර්ග සහ යොමු දෝෂ (#VALUE!, #REF!, #NUM!, #N/A)"
        }
      ],
      tableData: {
        headers: [
          { en: "Error Code", si: "දෝෂ කේතය" },
          { en: "Cause / Meaning", si: "හේතුව / තේරුම" },
          { en: "Corrective Action", si: "නිවැරදි කිරීමේ පියවර" }
        ],
        rows: [
          {
            code: { en: "#####", si: "#####" },
            cause: { en: "Column is too narrow to display the number, or negative date.", si: "සංඛ්‍යාව පෙන්වීමට තීරුවේ පළල මදිවීම." },
            action: { en: "Drag or double-click column boundary to widen column.", si: "තීරුවේ මායිම මත double-click කර පළල වැඩි කරන්න." }
          },
          {
            code: { en: "#DIV/0!", si: "#DIV/0!" },
            cause: { en: "Formula attempts to divide by zero (0) or blank cell.", si: "ශූන්‍යයෙන් (0) හෝ හිස් සෛලයකින් බෙදීමට උත්සාහ කිරීම." },
            action: { en: "Change divisor to a non-zero number.", si: "බෙදන අගය ශූන්‍ය නොවන අගයක් බවට පත් කරන්න." }
          },
          {
            code: { en: "#NAME?", si: "#NAME?" },
            cause: { en: "Misspelled function name or invalid formula text.", si: "ශ්‍රිතයේ නම වැරදි ලෙස ලිවීම (උදා: =SUMM(A1:A5))." },
            action: { en: "Correct the spelling of function name or cell address.", si: "ශ්‍රිතයේ නමේ අක්ෂර වින්‍යාසය නිවැරදි කරන්න." }
          },
          {
            code: { en: "#VALUE!", si: "#VALUE!" },
            cause: { en: "Wrong data type used in math formula (e.g., =A1+\"Book\").", si: "ගණිතමය සූත්‍රයකට පෙළ (Text) ආදේශ කිරීම." },
            action: { en: "Ensure all formula arguments contain numeric values.", si: "සූත්‍රයේ ඇති සියලු අගයන් සංඛ්‍යාත්මක බව තහවුරු කරන්න." }
          },
          {
            code: { en: "#REF!", si: "#REF!" },
            cause: { en: "Formula references a cell that was deleted.", si: "සූත්‍රයේ යොමු කළ සෛලය මකා දමා තිබීම." },
            action: { en: "Update formula with an existing valid cell address.", si: "වලංගු පවතින සෛල ලිපිනයක් සූත්‍රයට ඇතුළත් කරන්න." }
          }
        ]
      },
      checkpointQuiz: {
        id: "q-g10-u7-8",
        questionEn: "What does the error code '#####' indicate when displayed inside a spreadsheet cell?",
        questionSi: "පැතුරුම්පත් සෛලයක '#####' දෝෂ කේතය දිස්වීමෙන් අදහස් වන්නේ කුමක්ද?",
        options: [
          { id: "1", en: "Division by zero", si: "ශූන්‍යයෙන් බෙදීමක් සිදු වී ඇත" },
          { id: "2", en: "The column width is too narrow to display the number", si: "සංඛ්‍යාව දර්ශනය කිරීමට සෛලයේ පළල ප්‍රමාණවත් නොවේ" },
          { id: "3", en: "A cell reference was deleted", si: "සෛල යොමුවක් මකා දමා ඇත" },
          { id: "4", en: "The function name is misspelled", si: "ශ්‍රිතයේ නම වැරදි ලෙස ලියා ඇත" }
        ],
        correctOptionId: "2",
        explanationEn: "##### indicates that the cell column width is insufficient to show the numeric value. Widen the column to resolve.",
        explanationSi: "##### මඟින් අදහස් වන්නේ සංඛ්‍යාත්මක අගය පෙන්වීමට තීරුවේ පළල මදි බවයි. තීරුව පළල් කිරීමෙන් මෙය විසඳේ."
      }
    }
  ],
  pastPaperQuestions: [
    {
      id: "pp-g10-u7-2020-q21",
      year: 2020,
      paperType: "Paper I",
      badgeText: "2020 O/L Paper I - Q21",
      questionEn: "Consider the following spreadsheet values: Cell A1 = 10, Cell B1 = 20, Cell C1 = 5. If the formula =A1+B1/C1*2 is entered into cell D1, what value will be displayed in cell D1?",
      questionSi: "පහත පැතුරුම්පත් අගයන් සලකන්න: A1 සෛලය = 10, B1 සෛලය = 20, C1 සෛලය = 5. D1 සෛලයට =A1+B1/C1*2 සූත්‍රය ඇතුළත් කළ හොත්, D1 සෛලයේ දර්ශනය වන අගය කුමක්ද?",
      type: "mcq",
      options: [
        { id: "1", en: "12", si: "12" },
        { id: "2", en: "18", si: "18" },
        { id: "3", en: "28", si: "28" },
        { id: "4", en: "120", si: "120" }
      ],
      correctOptionId: "2",
      explanationEn: "Precedence: Division/Multiplication first from left to right: B1/C1 = 20/5 = 4; then 4 * 2 = 8; then addition: 10 + 8 = 18.",
      explanationSi: "ප්‍රමුඛතාව අනුව: වමේ සිට දකුණට බෙදීම පළමුව: 20/5 = 4; දෙවනුව ගුණ කිරීම: 4 * 2 = 8; අවසානයේ එකතු කිරීම: 10 + 8 = 18."
    },
    {
      id: "pp-g10-u7-2021-q22",
      year: 2021,
      paperType: "Paper I",
      badgeText: "2021 O/L Paper I - Q22",
      questionEn: "Which of the following shows the correct absolute cell reference for cell B5?",
      questionSi: "පහත දැක්වෙන ඒවායින් B5 සෛලය සඳහා නිවැරදි නිරපේක්ෂ සෛල යොමුව දක්වන්නේ කුමක්ද?",
      type: "mcq",
      options: [
        { id: "1", en: "$B5", si: "$B5" },
        { id: "2", en: "B$5", si: "B$5" },
        { id: "3", en: "$B$5", si: "$B$5" },
        { id: "4", en: "#B#5", si: "#B#5" }
      ],
      correctOptionId: "3",
      explanationEn: "An absolute cell reference requires a dollar sign ($) before both the column letter and the row number ($B$5).",
      explanationSi: "නිරපේක්ෂ සෛල යොමුවකදී තීරු අක්ෂරයට සහ පේළි අංකයට ඉදිරියෙන් ඩොලර් සලකුණ ($) යෙදිය යුතුය ($B$5)."
    },
    {
      id: "pp-g10-u7-2021-p2-q3",
      year: 2021,
      paperType: "Paper II",
      badgeText: "2021 O/L Paper II - Q03",
      questionEn: "A spreadsheet contains book sales details: A1='Book Name', B1='Unit Price', C1='Quantity Sold', D1='Total Amount'. Row 2 contains: Mathematics, 450, 10. Row 5 contains: Total Sales Amount. (a) Write the formula for cell D2 to calculate Total Amount. (b) Write the function for cell D5 to calculate sum of all total amounts. (c) Write the function to find maximum quantity sold in column C.",
      questionSi: "පොත් අලෙවි තොරතුරු පැතුරුම්පතක A1='පොතේ නම', B1='ඒකක මිල', C1='අලෙවි ප්‍රමාණය', D1='මුළු මුදල'. 2 පේළිය: ගණිතය, 450, 10. 5 පේළිය: මුළු අලෙවි මුදල. (a) ගණිතය පොත් සඳහා මුළු මුදල ගණනය කිරීමට D2 සෛලයට අදාළ සූත්‍රය ලියන්න. (b) මුළු අලෙවි එකතුවට D5 සෛලයට අදාළ ශ්‍රිතය ලියන්න. (c) C තීරුවේ වැඩිම අලෙවි ප්‍රමාණය සෙවීමේ ශ්‍රිතය ලියන්න.",
      type: "structured",
      sampleAnswerEn: "(a) =B2*C2\n(b) =SUM(D2:D4)\n(c) =MAX(C2:C4)",
      sampleAnswerSi: "(a) =B2*C2\n(b) =SUM(D2:D4)\n(c) =MAX(C2:C4)",
      explanationEn: "Multiplication uses * operator (=B2*C2); Summation uses =SUM(); Maximum uses =MAX().",
      explanationSi: "ගුණ කිරීමට * යොදාගනී (=B2*C2); එකතුවට =SUM() ද; උපරිමයට =MAX() ද භාවිත වේ."
    },
    {
      id: "pp-g10-u7-2022-q23",
      year: 2022,
      paperType: "Paper I",
      badgeText: "2022 O/L Paper I - Q23",
      questionEn: "In a spreadsheet, cell A1 contains 50 and B1 contains 10. If the formula =A1/$B$1 in cell C1 is copied to cell C2, what will be the formula in cell C2?",
      questionSi: "පැතුරුම්පතක A1 සෛලයේ 50 ද B1 සෛලයේ 10 ද අඩංගු වේ. C1 සෛලයේ ඇති =A1/$B$1 සූත්‍රය C2 සෛලයට පිටපත් කළ විට, C2 සෛලයේ ඇති වන සූත්‍රය කුමක්ද?",
      type: "mcq",
      options: [
        { id: "1", en: "=A2/$B$1", si: "=A2/$B$1" },
        { id: "2", en: "=A2/$B$2", si: "=A2/$B$2" },
        { id: "3", en: "=A1/$B$1", si: "=A1/$B$1" },
        { id: "4", en: "=A2/B2", si: "=A2/B2" }
      ],
      correctOptionId: "1",
      explanationEn: "A1 is relative and increments to A2. $B$1 has absolute dollar anchors and remains locked as $B$1.",
      explanationSi: "A1 සාපේක්ෂ බැවින් A2 බවට පත්වන අතර, $B$1 නිරපේක්ෂ බැවින් නොවෙනස්ව $B$1 ලෙසම පවතී."
    },
    {
      id: "pp-g10-u7-2023-q22",
      year: 2023,
      paperType: "Paper I",
      badgeText: "2023 O/L Paper I - Q22",
      questionEn: "Which error code is displayed in a spreadsheet when a formula attempts to divide a number by zero?",
      questionSi: "පැතුරුම්පතක සූත්‍රයකින් සංඛ්‍යාවක් ශූන්‍යයෙන් බෙදීමට තැත් කළ විට දර්ශනය වන දෝෂ කේතය කුමක්ද?",
      type: "mcq",
      options: [
        { id: "1", en: "#REF!", si: "#REF!" },
        { id: "2", en: "#VALUE!", si: "#VALUE!" },
        { id: "3", en: "#DIV/0!", si: "#DIV/0!" },
        { id: "4", en: "#NAME?", si: "#NAME?" }
      ],
      correctOptionId: "3",
      explanationEn: "Dividing by zero or an empty cell produces the #DIV/0! error indicator.",
      explanationSi: "ශූන්‍යයෙන් (0) බෙදූ විට #DIV/0! දෝෂ කේතය නිකුත් වේ."
    },
    {
      id: "pp-g10-u7-2023-p2-q3",
      year: 2023,
      paperType: "Paper II",
      badgeText: "2023 O/L Paper II - Q03",
      questionEn: "A monthly employee salary sheet has: Column C=Basic Salary, D=OT Hours, E=OT Rate (500), F=OT Amount, G=Gross Salary. (i) Write formula for F2 to calculate OT Amount (OT Hours * OT Rate). (ii) Write formula for G2 to calculate Gross Salary (Basic Salary + OT Amount). (iii) If OT Rate is fixed in cell $H$1, write formula for F2 that can be copied down.",
      questionSi: "මාසික වැටුප් සටහනක: C=මූලික වැටුප, D=අතිකාල පැය, E=අතිකාල අනුපාතය, F=අතිකාල මුදල, G=මුළු වැටුප. (i) F2 සෛලයට අතිකාල මුදල ගණනය කිරීමට සූත්‍රය ලියන්න. (ii) G2 සෛලයේ මුළු වැටුපට සූත්‍රය ලියන්න. (iii) අතිකාල අනුපාතය $H$1 සෛලයේ ඇති විට F2 සඳහා පිටපත් කළ හැකි සූත්‍රය ලියන්න.",
      type: "structured",
      sampleAnswerEn: "(i) =D2*E2\n(ii) =C2+F2\n(iii) =D2*$H$1",
      sampleAnswerSi: "(i) =D2*E2\n(ii) =C2+F2\n(iii) =D2*$H$1",
      explanationEn: "In (iii), $H$1 is absolute, ensuring the rate cell remains fixed when copied down to F3 and F4.",
      explanationSi: "(iii) හි $H$1 නිරපේක්ෂ සෛල යොමුවක් වන අතර පහළට පිටපත් කිරීමේදී අනුපාත සෛලය නොවෙනස්ව පවතී."
    },
    {
      id: "pp-g10-u7-2024-q20",
      year: 2024,
      paperType: "Paper I",
      badgeText: "2024 O/L Paper I - Q20",
      questionEn: "Which of the following spreadsheet functions counts ONLY the cells containing numeric values within the range A1:A10?",
      questionSi: "A1:A10 පරාසය තුළ සංඛ්‍යාත්මක අගයන් පමණක් අඩංගු සෛල ගණනය කරන ශ්‍රිතය වන්නේ කුමක්ද?",
      type: "mcq",
      options: [
        { id: "1", en: "=COUNTA(A1:A10)", si: "=COUNTA(A1:A10)" },
        { id: "2", en: "=COUNT(A1:A10)", si: "=COUNT(A1:A10)" },
        { id: "3", en: "=COUNTIF(A1:A10)", si: "=COUNTIF(A1:A10)" },
        { id: "4", en: "=TOTAL(A1:A10)", si: "=TOTAL(A1:A10)" }
      ],
      correctOptionId: "2",
      explanationEn: "=COUNT() counts only numeric cells. =COUNTA() counts all non-empty cells.",
      explanationSi: "=COUNT() ශ්‍රිතය මඟින් සංඛ්‍යාත්මක අගයන් පමණක් ගණනය කෙරේ. =COUNTA() මඟින් හිස් නොවන සියලු සෛල ගණනය කෙරේ."
    },
    {
      id: "pp-g10-u7-2024-p2-q3",
      year: 2024,
      paperType: "Paper II",
      badgeText: "2024 O/L Paper II - Q03",
      questionEn: "In a student marksheet: C2:E2 contains Subject 1, Subject 2, Subject 3 marks. Total in F2, Average in G2, Result ('Pass'/'Fail' if Average >= 50) in H2. (a) Write function for Total in F2. (b) Write function for Average in G2. (c) Write function for Result in H2. (d) Name the most suitable chart to show proportion of each subject mark contributing to total marks.",
      questionSi: "ශිෂ්‍ය ලකුණු සටහනක C2:E2 සෛලවල විෂය 3 ක ලකුණු අඩංගු වේ. F2 හි එකතුව ද, G2 හි සාමාන්‍යය ද, H2 හි ප්‍රතිඵලය (සාමාන්‍යය >= 50 නම් 'Pass' නැතහොත් 'Fail') ද වේ. (a) F2 සඳහා ශ්‍රිතය ලියන්න. (b) G2 සඳහා ශ්‍රිතය ලියන්න. (c) H2 සඳහා ශ්‍රිතය ලියන්න. (d) එක් එක් විෂය ලකුණු මුළු ලකුණට දැක්වූ ප්‍රතිශතය පෙන්වීමට සුදුසු ප්‍රස්ථාරය නම් කරන්න.",
      type: "structured",
      sampleAnswerEn: "(a) =SUM(C2:E2)\n(b) =AVERAGE(C2:E2)\n(c) =IF(G2>=50, \"Pass\", \"Fail\")\n(d) Pie Chart",
      sampleAnswerSi: "(a) =SUM(C2:E2)\n(b) =AVERAGE(C2:E2)\n(c) =IF(G2>=50, \"Pass\", \"Fail\")\n(d) වට ප්‍රස්ථාරය (Pie Chart)",
      explanationEn: "Total = SUM, Average = AVERAGE, Conditional logic = IF, Part-to-whole proportions = Pie Chart.",
      explanationSi: "එකතුව = SUM, සාමාන්‍යය = AVERAGE, කොන්දේසි සහිත ප්‍රතිඵලය = IF, සමස්තයක ප්‍රතිශත = වට ප්‍රස්ථාරය (Pie Chart)."
    }
  ],
  glossary: [
    {
      termEn: "Electronic Spreadsheet",
      termSi: "ඉලෙක්ට්‍රොනික පැතුරුම්පත",
      definitionEn: "Application software designed to organize, calculate, and analyze numerical data in tabular rows and columns.",
      definitionSi: "දත්ත පේළි සහ තීරු සහිත වගුගත ජාලයක සංවිධානය කිරීමට, ගණනය කිරීමට සහ විශ්ලේෂණය කිරීමට නිර්මාණය කර ඇති යෙදවුම් මෘදුකාංගයකි."
    },
    {
      termEn: "Workbook",
      termSi: "කාර්ය පොත",
      definitionEn: "A complete spreadsheet file containing one or more worksheets.",
      definitionSi: "වැඩපත්‍රිකා එකකින් හෝ කිහිපයකින් සමන්විත සම්පූර්ණ පැතුරුම්පත් ගොනුවකි."
    },
    {
      termEn: "Worksheet",
      termSi: "වැඩපත්‍රිකාව",
      definitionEn: "A single grid of rows and columns used to enter and manipulate data.",
      definitionSi: "දත්ත ඇතුළත් කිරීමට හා සකස් කිරීමට භාවිත වන පේළි සහ තීරු සහිත තනි වැඩතලයකි."
    },
    {
      termEn: "Cell",
      termSi: "සෛලය",
      definitionEn: "The intersection of a row and a column identified by its column letter and row number (e.g., B5).",
      definitionSi: "තීරුවක් සහ පේළියක් එකිනෙක ඡේදනය වන කුඩා කොටුවයි (උදා: B5)."
    },
    {
      termEn: "Active Cell",
      termSi: "සක්‍රීය සෛලය",
      definitionEn: "The currently selected cell outlined with a thick border where keystrokes and data input occur.",
      definitionSi: "මේ මොහොතේ තෝරාගෙන ඇති තද මායිමකින් වටවූ දත්ත ඇතුළත් කළ හැකි සෛලයයි."
    },
    {
      termEn: "Name Box",
      termSi: "නම කොටුව (සෛල ලිපින කොටුව)",
      definitionEn: "The UI box displaying the cell address of the currently active cell.",
      definitionSi: "මේ වන විට තෝරාගෙන ඇති සක්‍රීය සෛලයේ ලිපිනය දර්ශනය කරන කොටුවයි."
    },
    {
      termEn: "Formula Bar",
      termSi: "සූත්‍ර තීරුව",
      definitionEn: "Displays the underlying formula, function, or content of the active cell.",
      definitionSi: "සක්‍රීය සෛලයේ අඩංගු සැබෑ සූත්‍රය, ශ්‍රිතය හෝ අගය ප්‍රකාශයට පත් කරන තීරුවයි."
    },
    {
      termEn: "Cell Range",
      termSi: "සෛල පරාසය",
      definitionEn: "A contiguous block of selected cells separated by a colon, e.g., A1:C5.",
      definitionSi: "එකිනෙකට මායිම් වූ සෛල සමූහයක් වන අතර කෝලනයක් මගින් නිරූපණය කෙරේ (A1:C5)."
    },
    {
      termEn: "Relative Cell Reference",
      termSi: "සාපේක්ෂ සෛල යොමුව",
      definitionEn: "Cell address that automatically adjusts relative to the new position when copied.",
      definitionSi: "සූත්‍රයක් පිටපත් කිරීමේදී නව ස්ථානයට සාපේක්ෂව සෛල ලිපිනය ස්වයංක්‍රීයව වෙනස් වන යොමු ක්‍රමයයි."
    },
    {
      termEn: "Absolute Cell Reference",
      termSi: "නිරපේක්ෂ සෛල යොමුව",
      definitionEn: "Cell address locked with dollar signs ($A$1) that remains fixed when copied.",
      definitionSi: "ඩොලර් සලකුණ ($) මඟින් පේළිය සහ තීරුව අගුළු ලා පිටපත් කළද නොවෙනස්ව පවතින සෛල යොමුවයි."
    },
    {
      termEn: "Automatic Recalculation",
      termSi: "ස්වයංක්‍රීය යළි ගණනය කිරීම",
      definitionEn: "Feature where changing an input cell immediately recalculates and updates all dependent formula results.",
      definitionSi: "ආදාන සෛලයක අගයක් වෙනස් වූ වහාම ඊට සම්බන්ධ සියලු සූත්‍රවල ප්‍රතිඵල ක්ෂණිකව යාවත්කාලීන වීමේ විශේෂාංගයයි."
    },
    {
      termEn: "Legend",
      termSi: "ප්‍රස්ථාර යතුර (සංකේත විස්තරය)",
      definitionEn: "A chart component identifying different data series using color-coded labels.",
      definitionSi: "ප්‍රස්ථාරයක ඇති විවිධ දත්ත ශ්‍රේණි වර්ණ මගින් හඳුනාගැනීමට උපකාරී වන විස්තර කොටසයි."
    }
  ]
};
