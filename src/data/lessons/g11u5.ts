// Verbatim dual-medium syllabus data extracted from public/lessons
import { GeneralLessonData } from '../allLessonsData';

export const G11_U5_DATA: GeneralLessonData = {
  "id": "g11-u5",
  "grade": "11",
  "unitNumber": 5,
  "titleEn": "Web Designing using HTML & CSS",
  "titleSi": "HTML සහ වෙබ් සංස්කාරක මගින් වෙබ් අඩවි නිර්මාණය",
  "subtopics": [
    {
      "id": "g11-u5-st-1",
      "number": "5.1",
      "titleEn": "Introduction to Web Design & Core Concepts",
      "titleSi": "වෙබ් අඩවි නිර්මාණය සහ මූලික සංකල්ප",
      "summaryEn": "Introduction to Web Design & Core Concepts concepts, definitions, and examination competencies.",
      "summarySi": "වෙබ් අඩවි නිර්මාණය සහ මූලික සංකල්ප සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u5-1-1",
          "en": "#### Core Definitions & Architectural Elements (මූලික අර්ථ දැක්වීම් සහ සංරචක)",
          "si": "#### Core Definitions & Architectural Elements (මූලික අර්ථ දැක්වීම් සහ සංරචක)",
          "highlightTerm": "Core Definitions & Architectural Elements"
        },
        {
          "id": "b-g11-u5-1-2",
          "en": "World Wide Web - WWW:\nA system of interlinked hypertext documents accessed via the Internet using a web browser.",
          "si": "ලෝක ව්‍යාප්ත ජාලය:\nවෙබ් බ්‍රවුසරයක් භාවිතයෙන් අන්තර්ජාලය ඔස්සේ පිවිසිය හැකි එකිනෙක හා සම්බන්ධිත හයිපර්ටෙක්ස් (Hypertext) ලේඛන පද්ධතියකි.",
          "highlightTerm": "World Wide Web - WWW"
        },
        {
          "id": "b-g11-u5-1-3",
          "en": "Web Page:\nA digital document on the World Wide Web created using HTML that contains text, images, audio, video, and hyperlinks.",
          "si": "වෙබ් පිටුව:\nHTML භාවිතයෙන් නිර්මාණය කරන ලද, පෙළ, පින්තූර, ශ්‍රව්‍ය, දෘශ්‍ය සහ හයිපර්ලින්ක් අඩංගු ලෝක ව්‍යාප්ත ජාලයේ ඇති ඩිජිටල් ලේඛනයකි.",
          "highlightTerm": "Web Page"
        },
        {
          "id": "b-g11-u5-1-4",
          "en": "Website:\nA collection of related web pages hosted under a single domain name on a web server.",
          "si": "වෙබ් අඩවිය:\nඑක් වසම් නාමයක් (Domain Name) යටතේ වෙබ් සේවාදායකයක ගබඩා කර ඇති එකිනෙකට සම්බන්ධිත වෙබ් පිටු සමූහයකි.",
          "highlightTerm": "Website"
        },
        {
          "id": "b-g11-u5-1-5",
          "en": "Home Page:\nThe main or introductory page of a website that usually serves as an index or table of contents for other pages.",
          "si": "මුල් පිටුව:\nවෙබ් අඩවියකට පිවිසෙන විට පළමුවෙන්ම දර්ශනය වන ප්‍රධාන හෝ හඳුන්වාදීමේ පිටුවයි. මෙය අනෙකුත් පිටු සඳහා පටුනක් ලෙස ක්‍රියා කරයි.",
          "highlightTerm": "Home Page"
        },
        {
          "id": "b-g11-u5-1-6",
          "en": "Static vs Dynamic Web Pages (ස්ථිතික සහ ගතික වෙබ් පිටු සසඳා බැලීම):",
          "si": "Static vs Dynamic Web Pages (ස්ථිතික සහ ගතික වෙබ් පිටු සසඳා බැලීම):",
          "highlightTerm": "Static vs Dynamic Web Pages"
        }
      ],
      "tableData": {
        "headers": [
          {
            "en": "Feature",
            "si": "ලක්ෂණය"
          },
          {
            "en": "Static Web Pages",
            "si": "ස්ථිතික වෙබ් පිටු"
          },
          {
            "en": "Dynamic Web Pages",
            "si": "ගතික වෙබ් පිටු"
          }
        ],
        "rows": [
          {
            "col0": {
              "en": "Content Change (අන්තර්ගතය වෙනස් වීම)",
              "si": "Content Change (අන්තර්ගතය වෙනස් වීම)"
            },
            "col1": {
              "en": "Content remains fixed for all users until manually edited in code. (කේතය අතින් වෙනස් කරන තෙක් සියලු පරිශීලකයන්ට එකම අන්තර්ගතයක් පෙනේ.)",
              "si": "කේතය අතින් වෙනස් කරන තෙක් සියලු පරිශීලකයන්ට එකම අන්තර්ගතයක් පෙනේ."
            },
            "col2": {
              "en": "Content updates automatically based on user interaction, time, or database queries. (පරිශීලක ක්‍රියාකාරීත්වය හෝ දත්ත සමුදාය මත අන්තර්ගතය ස්වයංක්‍රීයව වෙනස් වේ.)",
              "si": "පරිශීලක ක්‍රියාකාරීත්වය හෝ දත්ත සමුදාය මත අන්තර්ගතය ස්වයංක්‍රීයව වෙනස් වේ."
            }
          },
          {
            "col0": {
              "en": "Technologies Used (භාවිත වන තාක්ෂණයන්)",
              "si": "Technologies Used (භාවිත වන තාක්ෂණයන්)"
            },
            "col1": {
              "en": "HTML, CSS.",
              "si": "HTML, CSS."
            },
            "col2": {
              "en": "PHP, ASP.NET, JavaScript, MySQL, Python.",
              "si": "PHP, ASP.NET, JavaScript, MySQL, Python."
            }
          },
          {
            "col0": {
              "en": "Database Connection (දත්ත සමුදා සබඳතාව)",
              "si": "Database Connection (දත්ත සමුදා සබඳතාව)"
            },
            "col1": {
              "en": "No database connected. (දත්ත සමුදායන් සම්බන්ධ නොවේ.)",
              "si": "දත්ත සමුදායන් සම්බන්ධ නොවේ."
            },
            "col2": {
              "en": "Connected to backend databases. (පසුපස දත්ත සමුදායන් හා සම්බන්ධ වේ.)",
              "si": "පසුපස දත්ත සමුදායන් හා සම්බන්ධ වේ."
            }
          },
          {
            "col0": {
              "en": "Examples (උදාහරණ)",
              "si": "Examples (උදාහරණ)"
            },
            "col1": {
              "en": "Personal portfolio, simple school profile page.",
              "si": "Personal portfolio, simple school profile page."
            },
            "col2": {
              "en": "Facebook feed, online banking portal, online shopping cart.",
              "si": "Facebook feed, online banking portal, online shopping cart."
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g11-u5-1",
        "questionEn": "Which of the following is the most accurate concept regarding Introduction to Web Design & Core Concepts?",
        "questionSi": "වෙබ් අඩවි නිර්මාණය සහ මූලික සංකල්ප පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Introduction to Web Design & Core Concepts",
            "si": "වෙබ් අඩවි නිර්මාණය සහ මූලික සංකල්ප පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Introduction to Web Design & Core Concepts.",
        "explanationSi": "1 වන වරණය මගින් වෙබ් අඩවි නිර්මාණය සහ මූලික සංකල්ප පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u5-st-2",
      "number": "5.2",
      "titleEn": "HTML Document Structure & Fundamental Tags",
      "titleSi": "HTML ලේඛන ව්‍යුහය සහ මූලික ටැග්",
      "summaryEn": "HTML Document Structure & Fundamental Tags concepts, definitions, and examination competencies.",
      "summarySi": "HTML ලේඛන ව්‍යුහය සහ මූලික ටැග් සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u5-2-1",
          "en": "What is HTML?:\nHTML stands for **HyperText Markup Language**. It is the standard markup language used to design and structure web pages displayed in web browsers.",
          "si": "HTML යනු කුමක්ද?:\nHTML යනු **HyperText Markup Language** යන්නයි. මෙය වෙබ් බ්‍රවුසරවල දර්ශනය වන වෙබ් පිටු සකස් කිරීම සහ ව්‍යුහගත කිරීම සඳහා භාවිත වන සම්මත මාර්කප් භාෂාවයි.",
          "highlightTerm": "What is HTML?"
        },
        {
          "id": "b-g11-u5-2-2",
          "en": "#### Essential HTML Skeleton Code (සම්මත HTML කේත ව්‍යුහය):",
          "si": "#### Essential HTML Skeleton Code (සම්මත HTML කේත ව්‍යුහය):",
          "highlightTerm": "Essential HTML Skeleton Code"
        },
        {
          "id": "b-g11-u5-2-3",
          "en": "#### Anatomical Tags Breakdown (මූලික ටැග්වල කාර්යයන්):\n1. `<!DOCTYPE html>`: Declares document type as HTML5 to the web browser. (බ්‍රවුසරයට ලේඛන වර්ගය HTML5 ලෙස ප්‍රකාශ කරයි.)\n2. `<html> ... </html>`: Root element enclosing all HTML code on the page. (මුළු HTML ලේඛනයම ආවරණය කරන මූලික ටැගයයි.)\n3. `<head> ... </head>`: Contains metadata, title, and document header information not displayed in the main body area.\n4. `<title> ... </title>`: Sets the title displayed on the browser tab/title bar. (බ්‍රවුසර් ටැබයේ/මාතෘකා තීරුවේ දර්ශනය වන නම තීරණය කරයි.)\n5. `<body> ... </body>`: Encloses all visible content (text, images, tables, links, videos) rendered on the web page.",
          "si": "#### Anatomical Tags Breakdown (මූලික ටැග්වල කාර්යයන්):\n1. `<!DOCTYPE html>`: Declares document type as HTML5 to the web browser. (බ්‍රවුසරයට ලේඛන වර්ගය HTML5 ලෙස ප්‍රකාශ කරයි.)\n2. `<html> ... </html>`: Root element enclosing all HTML code on the page. (මුළු HTML ලේඛනයම ආවරණය කරන මූලික ටැගයයි.)\n3. `<head> ... </head>`: Contains metadata, title, and document header information not displayed in the main body area. (මෙටාඩේටා, මාතෘකාව සහ ලේඛන ශීර්ෂ තොරතුරු අඩංගු වේ.)\n4. `<title> ... </title>`: Sets the title displayed on the browser tab/title bar. (බ්‍රවුසර් ටැබයේ/මාතෘකා තීරුවේ දර්ශනය වන නම තීරණය කරයි.)\n5. `<body> ... </body>`: Encloses all visible content (text, images, tables, links, videos) rendered on the web page. (වෙබ් පිටුවේ දර්ශනය වන සියලුම අන්තර්ගතයන් අඩංගු වේ.)",
          "highlightTerm": "Anatomical Tags Breakdown"
        },
        {
          "id": "b-g11-u5-2-4",
          "en": "#### Container Tags vs Empty (Void) Tags (කන්ටේනර් ටැග් සහ හිස් ටැග්):",
          "si": "#### Container Tags vs Empty (Void) Tags (කන්ටේනර් ටැග් සහ හිස් ටැග්):",
          "highlightTerm": "Container Tags vs Empty"
        },
        {
          "id": "b-g11-u5-2-5",
          "en": "Container Tags (කන්ටේනර් / යුගල ටැග්):**\n* Require both Opening `<tag>` and Closing `</tag>` tags. (ආරම්භක සහ අවසාන ටැග් දෙකම අවශ්‍ය වේ.)\n* *Examples:* `<html>...</html>`, `<body>...</body>`, `<p>...</p>`, `<h1>...</h1>`, `<table>...</table>`.",
          "si": "Container Tags (කන්ටේනර් / යුගල ටැග්):**\n* Require both Opening `<tag>` and Closing `</tag>` tags. (ආරම්භක සහ අවසාන ටැග් දෙකම අවශ්‍ය වේ.)\n* *Examples:* `<html>...</html>`, `<body>...</body>`, `<p>...</p>`, `<h1>...</h1>`, `<table>...</table>`.",
          "highlightTerm": "Container Tags"
        },
        {
          "id": "b-g11-u5-2-6",
          "en": "Empty / Void Tags (එක්කල / හිස් ටැග්):**\n* Do NOT have a closing tag; self-contained single elements. (අවසාන ටැගයක් නොමැති තනි ටැග් වේ.)\n* *Examples:* `<br>` (Line break), `<hr>` (Horizontal rule), `<img>` (Image placement), `<meta>` (Metadata), `<input>` (Form input).",
          "si": "Empty / Void Tags (එක්කල / හිස් ටැග්):**\n* Do NOT have a closing tag; self-contained single elements. (අවසාන ටැගයක් නොමැති තනි ටැග් වේ.)\n* *Examples:* `<br>` (Line break), `<hr>` (Horizontal rule), `<img>` (Image placement), `<meta>` (Metadata), `<input>` (Form input).",
          "highlightTerm": "Empty / Void Tags"
        }
      ],
      "examples": [
        {
          "id": "ex-11-5-2-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "<!DOCTYPE html>\n<html>\n<head>\n    <title>My First Web Page</title>\n</head>\n<body>\n    <h1>Welcome to My Website</h1>\n    <p>This is a paragraph of text on my web page.</p>\n</body>\n</html>",
          "contentSi": "<!DOCTYPE html>\n<html>\n<head>\n    <title>My First Web Page</title>\n</head>\n<body>\n    <h1>Welcome to My Website</h1>\n    <p>This is a paragraph of text on my web page.</p>\n</body>\n</html>"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u5-2",
        "questionEn": "Which of the following is the most accurate concept regarding HTML Document Structure & Fundamental Tags?",
        "questionSi": "HTML ලේඛන ව්‍යුහය සහ මූලික ටැග් පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of HTML Document Structure & Fundamental Tags",
            "si": "HTML ලේඛන ව්‍යුහය සහ මූලික ටැග් පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for HTML Document Structure & Fundamental Tags.",
        "explanationSi": "1 වන වරණය මගින් HTML ලේඛන ව්‍යුහය සහ මූලික ටැග් පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u5-st-3",
      "number": "5.3",
      "titleEn": "Formatting Text in HTML",
      "titleSi": "HTML හි පෙළ හැඩසැසීම",
      "summaryEn": "Formatting Text in HTML concepts, definitions, and examination competencies.",
      "summarySi": "HTML හි පෙළ හැඩසැසීම සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u5-3-1",
          "en": "#### 5.3.1 Headings (මාතෘකා)\n* HTML provides **6 levels of headings** from `<h1>` (Largest / Most Important) down to `<h6>` (Smallest / Least Important).",
          "si": "#### 5.3.1 Headings (මාතෘකා)\n* HTML provides **6 levels of headings** from `<h1>` (Largest / Most Important) down to `<h6>` (Smallest / Least Important).",
          "highlightTerm": "Headings"
        },
        {
          "id": "b-g11-u5-3-2",
          "en": "Code Example:",
          "si": "Code Example:",
          "highlightTerm": "Code Example"
        },
        {
          "id": "b-g11-u5-3-3",
          "en": "#### 5.3.2 Paragraphs, Line Breaks & Horizontal Rules (ඡේද, පේළි කැඩීම් සහ තිරස් ඉරි)",
          "si": "#### 5.3.2 Paragraphs, Line Breaks & Horizontal Rules (ඡේද, පේළි කැඩීම් සහ තිරස් ඉරි)",
          "highlightTerm": "Paragraphs, Line Breaks & Horizontal Rules"
        },
        {
          "id": "b-g11-u5-3-4",
          "en": "Paragraph Tag `<p>`:** Creates a structural text paragraph with automatic top and bottom margins. (`<p> ... </p>`)",
          "si": "Paragraph Tag `<p>`:** Creates a structural text paragraph with automatic top and bottom margins. (`<p> ... </p>`)",
          "highlightTerm": "Paragraph Tag `<p>`:** Creates a structural text paragraph with automatic top and bottom margins."
        },
        {
          "id": "b-g11-u5-3-5",
          "en": "Line Break Tag `<br>`:** Forces text to start on a new line without adding paragraph spacing. (නව පේළියකින් ආරම්භ කිරීමට භාවිත කරයි.)",
          "si": "Line Break Tag `<br>`:** Forces text to start on a new line without adding paragraph spacing. (නව පේළියකින් ආරම්භ කිරීමට භාවිත කරයි.)",
          "highlightTerm": "Line Break Tag `<br>`:** Forces text to start on a new line without adding paragraph spacing."
        },
        {
          "id": "b-g11-u5-3-6",
          "en": "Horizontal Rule Tag `<hr>`:** Inserts a horizontal dividing line across the web page. (තිරස් බෙදුම් රේඛාවක් ඇතුළත් කරයි.)\n* *Attributes for `<hr>`:* `width=\"50%\"`, `size=\"5\"`, `color=\"blue\"`, `align=\"center\"`.",
          "si": "Horizontal Rule Tag `<hr>`:** Inserts a horizontal dividing line across the web page. (තිරස් බෙදුම් රේඛාවක් ඇතුළත් කරයි.)\n* *Attributes for `<hr>`:* `width=\"50%\"`, `size=\"5\"`, `color=\"blue\"`, `align=\"center\"`.",
          "highlightTerm": "Horizontal Rule Tag `<hr>`:** Inserts a horizontal dividing line across the web page."
        },
        {
          "id": "b-g11-u5-3-7",
          "en": "#### 5.3.3 Text Style Formatting Tags (පෙළ විලාස හැඩසැසුම් ටැග්):",
          "si": "#### 5.3.3 Text Style Formatting Tags (පෙළ විලාස හැඩසැසුම් ටැග්):",
          "highlightTerm": "Text Style Formatting Tags"
        },
        {
          "id": "b-g11-u5-3-8",
          "en": "#### 5.3.4 Font Styling & Attributes (`<font>` tag & CSS):",
          "si": "#### 5.3.4 Font Styling & Attributes (`<font>` tag & CSS):",
          "highlightTerm": "Font Styling & Attributes"
        },
        {
          "id": "b-g11-u5-3-9",
          "en": "Traditional `<font>` Tag Syntax:**\n* `face`: Specifies font family name (e.g. `Arial`, `Times New Roman`, `Calibri`).\n* `size`: Font size numeric scale from `1` (smallest) to `7` (largest), default is `3`.\n* `color`: Color name (e.g. `\"blue\"`) or Hexadecimal code (e.g. `\"#FF0000\"` for red).",
          "si": "Traditional `<font>` Tag Syntax:**\n* `face`: Specifies font family name (e.g. `Arial`, `Times New Roman`, `Calibri`).\n* `size`: Font size numeric scale from `1` (smallest) to `7` (largest), default is `3`.\n* `color`: Color name (e.g. `\"blue\"`) or Hexadecimal code (e.g. `\"#FF0000\"` for red).",
          "highlightTerm": "Traditional `<font>` Tag Syntax"
        }
      ],
      "examples": [
        {
          "id": "ex-11-5-3-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "<h1>Heading Level 1 (විශාලතම මාතෘකාව)</h1>\n  <h2>Heading Level 2</h2>\n  <h3>Heading Level 3</h3>\n  <h4>Heading Level 4</h4>\n  <h5>Heading Level 5</h5>\n  <h6>Heading Level 6 (කුඩාම මාතෘකාව)</h6>",
          "contentSi": "<h1>Heading Level 1 (විශාලතම මාතෘකාව)</h1>\n  <h2>Heading Level 2</h2>\n  <h3>Heading Level 3</h3>\n  <h4>Heading Level 4</h4>\n  <h5>Heading Level 5</h5>\n  <h6>Heading Level 6 (කුඩාම මාතෘකාව)</h6>"
        },
        {
          "id": "ex-11-5-3-2",
          "titleEn": "Schematic / Code Diagram 2",
          "titleSi": "පරිපථ / කේත සටහන 2",
          "contentEn": "<font face=\"Arial\" size=\"4\" color=\"red\">Formatted Text</font>",
          "contentSi": "<font face=\"Arial\" size=\"4\" color=\"red\">Formatted Text</font>"
        }
      ],
      "tableData": {
        "headers": [
          {
            "en": "Formatting Tag",
            "si": "ටැගය"
          },
          {
            "en": "HTML Effect",
            "si": "බලපෑම"
          },
          {
            "en": "Description",
            "si": "විස්තරය"
          }
        ],
        "rows": [
          {
            "col0": {
              "en": "`<b>text</b>` or `<strong>text</strong>`",
              "si": "`<b>text</b>` or `<strong>text</strong>`"
            },
            "col1": {
              "en": "Bold Text",
              "si": "Bold Text"
            },
            "col2": {
              "en": "Displays text in bold typeface. (තද අකුරු)",
              "si": "තද අකුරු"
            }
          },
          {
            "col0": {
              "en": "`<i>text</i>` or `<em>text</em>`",
              "si": "`<i>text</i>` or `<em>text</em>`"
            },
            "col1": {
              "en": "*Italic Text*",
              "si": "*Italic Text*"
            },
            "col2": {
              "en": "Displays text in italicized slant. (ඇල අකුරු)",
              "si": "ඇල අකුරු"
            }
          },
          {
            "col0": {
              "en": "`<u>text</u>`",
              "si": "`<u>text</u>`"
            },
            "col1": {
              "en": "<u>Underlined Text</u>",
              "si": "<u>Underlined Text</u>"
            },
            "col2": {
              "en": "Underlines text. (යටින් ඉරක් ඇඳීම)",
              "si": "යටින් ඉරක් ඇඳීම"
            }
          },
          {
            "col0": {
              "en": "`<sub>text</sub>`",
              "si": "`<sub>text</sub>`"
            },
            "col1": {
              "en": "H<sub>2</sub>O (Subscript)",
              "si": "Subscript"
            },
            "col2": {
              "en": "Renders text below normal baseline. (යටි ලකුණ)",
              "si": "යටි ලකුණ"
            }
          },
          {
            "col0": {
              "en": "`<sup>text</sup>`",
              "si": "`<sup>text</sup>`"
            },
            "col1": {
              "en": "X<sup>2</sup> (Superscript)",
              "si": "Superscript"
            },
            "col2": {
              "en": "Renders text above normal baseline. (උඩ ලකුණ)",
              "si": "උඩ ලකුණ"
            }
          },
          {
            "col0": {
              "en": "`<mark>text</mark>`",
              "si": "`<mark>text</mark>`"
            },
            "col1": {
              "en": "<mark>Highlighted Text</mark>",
              "si": "<mark>Highlighted Text</mark>"
            },
            "col2": {
              "en": "Highlights text with background color. (පෙළ ඉස්මතු කිරීම)",
              "si": "පෙළ ඉස්මතු කිරීම"
            }
          },
          {
            "col0": {
              "en": "`<small>text</small>`",
              "si": "`<small>text</small>`"
            },
            "col1": {
              "en": "Small Text",
              "si": "Small Text"
            },
            "col2": {
              "en": "Renders text one font size smaller. (කුඩා අකුරු)",
              "si": "කුඩා අකුරු"
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g11-u5-3",
        "questionEn": "Which of the following is the most accurate concept regarding Formatting Text in HTML?",
        "questionSi": "HTML හි පෙළ හැඩසැසීම පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Formatting Text in HTML",
            "si": "HTML හි පෙළ හැඩසැසීම පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Formatting Text in HTML.",
        "explanationSi": "1 වන වරණය මගින් HTML හි පෙළ හැඩසැසීම පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u5-st-4",
      "number": "5.4",
      "titleEn": "Lists in HTML",
      "titleSi": "HTML හි ලැයිස්තු",
      "summaryEn": "Lists in HTML concepts, definitions, and examination competencies.",
      "summarySi": "HTML හි ලැයිස්තු සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u5-4-1",
          "en": "HTML supports 2 main types of lists: **Ordered Lists (අංකිත ලැයිස්තු)** and **Unordered Lists (අනංකිත ලැයිස්තු)**.",
          "si": "HTML supports 2 main types of lists: **Ordered Lists (අංකිත ලැයිස්තු)** and **Unordered Lists (අනංකිත ලැයිස්තු)**.",
          "highlightTerm": "HTML supports 2 main types of lists: **Ordered Lists"
        },
        {
          "id": "b-g11-u5-4-2",
          "en": "#### 5.4.1 Ordered Lists `<ol>` (අංකිත ලැයිස්තු)\n* Displays list items with sequential numbers or letters using `<ol>` and `<li>` (List Item).",
          "si": "#### 5.4.1 Ordered Lists `<ol>` (අංකිත ලැයිස්තු)\n* Displays list items with sequential numbers or letters using `<ol>` and `<li>` (List Item).",
          "highlightTerm": "Ordered Lists `<ol>`"
        },
        {
          "id": "b-g11-u5-4-3",
          "en": "Attributes for `<ol>`:** `type=\"1|a|A|i|I\"`, `start=\"number\"`.",
          "si": "Attributes for `<ol>`:** `type=\"1|a|A|i|I\"`, `start=\"number\"`.",
          "highlightTerm": "Attributes for `<ol>`:** `type=\"1|a|A|i|I\"`, `start=\"number\"`"
        },
        {
          "id": "b-g11-u5-4-4",
          "en": "Example Code & Rendered Output:**\n*Rendered Output:*\nA. Input Devices\nB. Output Devices\nC. Storage Devices",
          "si": "Example Code & Rendered Output:**\n*Rendered Output:*\nA. Input Devices\nB. Output Devices\nC. Storage Devices",
          "highlightTerm": "Example Code & Rendered Output"
        },
        {
          "id": "b-g11-u5-4-5",
          "en": "#### 5.4.2 Unordered Lists `<ul>` (අනංකිත ලැයිස්තු)\n* Displays list items with bullet symbols using `<ul>` and `<li>`.",
          "si": "#### 5.4.2 Unordered Lists `<ul>` (අනංකිත ලැයිස්තු)\n* Displays list items with bullet symbols using `<ul>` and `<li>`.",
          "highlightTerm": "Unordered Lists `<ul>`"
        },
        {
          "id": "b-g11-u5-4-6",
          "en": "Attributes for `<ul>`:** `type=\"disc|circle|square\"`.",
          "si": "Attributes for `<ul>`:** `type=\"disc|circle|square\"`.",
          "highlightTerm": "Attributes for `<ul>`:** `type=\"disc|circle|square\"`"
        },
        {
          "id": "b-g11-u5-4-7",
          "en": "Example Code & Rendered Output:**\n*Rendered Output:*\n■ Monitor\n■ Printer\n■ Speaker",
          "si": "Example Code & Rendered Output:**\n*Rendered Output:*\n■ Monitor\n■ Printer\n■ Speaker",
          "highlightTerm": "Example Code & Rendered Output"
        }
      ],
      "examples": [
        {
          "id": "ex-11-5-4-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "<ol type=\"A\">\n      <li>Input Devices</li>\n      <li>Output Devices</li>\n      <li>Storage Devices</li>\n  </ol>",
          "contentSi": "<ol type=\"A\">\n      <li>Input Devices</li>\n      <li>Output Devices</li>\n      <li>Storage Devices</li>\n  </ol>"
        },
        {
          "id": "ex-11-5-4-2",
          "titleEn": "Schematic / Code Diagram 2",
          "titleSi": "පරිපථ / කේත සටහන 2",
          "contentEn": "<ul type=\"square\">\n      <li>Monitor</li>\n      <li>Printer</li>\n      <li>Speaker</li>\n  </ul>",
          "contentSi": "<ul type=\"square\">\n      <li>Monitor</li>\n      <li>Printer</li>\n      <li>Speaker</li>\n  </ul>"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u5-4",
        "questionEn": "Which of the following is the most accurate concept regarding Lists in HTML?",
        "questionSi": "HTML හි ලැයිස්තු පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Lists in HTML",
            "si": "HTML හි ලැයිස්තු පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Lists in HTML.",
        "explanationSi": "1 වන වරණය මගින් HTML හි ලැයිස්තු පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u5-st-5",
      "number": "5.5",
      "titleEn": "Inserting Images in HTML",
      "titleSi": "HTML වෙත රූප ඇතුළත් කිරීම",
      "summaryEn": "Inserting Images in HTML concepts, definitions, and examination competencies.",
      "summarySi": "HTML වෙත රූප ඇතුළත් කිරීම සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u5-5-1",
          "en": "#### The `<img>` Tag & Mandatory Attributes (රූප ටැගය සහ ගුණාංග):",
          "si": "#### The `<img>` Tag & Mandatory Attributes (රූප ටැගය සහ ගුණාංග):",
          "highlightTerm": "The `<img>` Tag & Mandatory Attributes"
        },
        {
          "id": "b-g11-u5-5-2",
          "en": "Syntax:",
          "si": "Syntax:",
          "highlightTerm": "Syntax"
        },
        {
          "id": "b-g11-u5-5-3",
          "en": "Attribute Definitions:**\n* `src` (Source - **Mandatory**): Specifies file path/URL of the image file. (රූප ගොනුවේ මාර්ගය/ලිපිනය දක්වයි.)\n* `alt` (Alternate Text - **Mandatory for Accessibility**): Text displayed if image fails to load or read by screen readers. (රූපය දර්ශනය නොවන්නේ නම් පෙන්වන පෙළ.)\n* `width`: Width of the image in pixels or percentage (e.g. `width=\"300\"` or `width=\"50%\"`).\n* `height`: Height of the image in pixels (e.g. `height=\"200\"`).\n* `border`: Border thickness around the image in pixels.",
          "si": "Attribute Definitions:**\n* `src` (Source - **Mandatory**): Specifies file path/URL of the image file. (රූප ගොනුවේ මාර්ගය/ලිපිනය දක්වයි.)\n* `alt` (Alternate Text - **Mandatory for Accessibility**): Text displayed if image fails to load or read by screen readers. (රූපය දර්ශනය නොවන්නේ නම් පෙන්වන පෙළ.)\n* `width`: Width of the image in pixels or percentage (e.g. `width=\"300\"` or `width=\"50%\"`).\n* `height`: Height of the image in pixels (e.g. `height=\"200\"`).\n* `border`: Border thickness around the image in pixels.",
          "highlightTerm": "Attribute Definitions"
        },
        {
          "id": "b-g11-u5-5-4",
          "en": "Supported Web Image Formats:** `.jpg` / `.jpeg`, `.png`, `.gif`, `.svg`, `.webp`.",
          "si": "Supported Web Image Formats:** `.jpg` / `.jpeg`, `.png`, `.gif`, `.svg`, `.webp`.",
          "highlightTerm": "Supported Web Image Formats:** `.jpg` / `.jpeg`, `.png`, `.gif`, `.svg`, `.webp`"
        }
      ],
      "examples": [
        {
          "id": "ex-11-5-5-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "<img src=\"images/computer.jpg\" alt=\"Personal Computer\" width=\"300\" height=\"200\" border=\"1\">",
          "contentSi": "<img src=\"images/computer.jpg\" alt=\"Personal Computer\" width=\"300\" height=\"200\" border=\"1\">"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u5-5",
        "questionEn": "Which of the following is the most accurate concept regarding Inserting Images in HTML?",
        "questionSi": "HTML වෙත රූප ඇතුළත් කිරීම පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Inserting Images in HTML",
            "si": "HTML වෙත රූප ඇතුළත් කිරීම පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Inserting Images in HTML.",
        "explanationSi": "1 වන වරණය මගින් HTML වෙත රූප ඇතුළත් කිරීම පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u5-st-6",
      "number": "5.6",
      "titleEn": "Hyperlinks in HTML",
      "titleSi": "HTML හි හයිපර්ලින්ක් / අධි-සම්බන්ධතා",
      "summaryEn": "Hyperlinks in HTML concepts, definitions, and examination competencies.",
      "summarySi": "HTML හි හයිපර්ලින්ක් / අධි-සම්බන්ධතා සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u5-6-1",
          "en": "#### The Anchor Tag `<a>` & `href` Attribute:",
          "si": "#### The Anchor Tag `<a>` & `href` Attribute:",
          "highlightTerm": "The Anchor Tag `<a>` & `href` Attribute"
        },
        {
          "id": "b-g11-u5-6-2",
          "en": "Syntax for External Web Link:",
          "si": "Syntax for External Web Link:",
          "highlightTerm": "Syntax for External Web Link"
        },
        {
          "id": "b-g11-u5-6-3",
          "en": "Syntax for Internal Page Link:",
          "si": "Syntax for Internal Page Link:",
          "highlightTerm": "Syntax for Internal Page Link"
        },
        {
          "id": "b-g11-u5-6-4",
          "en": "Syntax for Image Hyperlink (රූපයක් මගින් සබැඳියක් සෑදීම):",
          "si": "Syntax for Image Hyperlink (රූපයක් මගින් සබැඳියක් සෑදීම):",
          "highlightTerm": "Syntax for Image Hyperlink"
        },
        {
          "id": "b-g11-u5-6-5",
          "en": "Syntax for E-mail Link (`mailto:`):",
          "si": "Syntax for E-mail Link (`mailto:`):",
          "highlightTerm": "Syntax for E-mail Link"
        },
        {
          "id": "b-g11-u5-6-6",
          "en": "Key Attributes:**\n* `href` (Hypertext Reference): Destination URL or file path.\n* `target=\"_blank\"`: Opens the linked web page in a new browser window/tab.",
          "si": "Key Attributes:**\n* `href` (Hypertext Reference): Destination URL or file path.\n* `target=\"_blank\"`: Opens the linked web page in a new browser window/tab.",
          "highlightTerm": "Key Attributes"
        }
      ],
      "examples": [
        {
          "id": "ex-11-5-6-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "<a href=\"https://www.doenets.lk\" target=\"_blank\">Department of Examinations</a>",
          "contentSi": "<a href=\"https://www.doenets.lk\" target=\"_blank\">Department of Examinations</a>"
        },
        {
          "id": "ex-11-5-6-2",
          "titleEn": "Schematic / Code Diagram 2",
          "titleSi": "පරිපථ / කේත සටහන 2",
          "contentEn": "<a href=\"about.html\">About Us</a>",
          "contentSi": "<a href=\"about.html\">About Us</a>"
        },
        {
          "id": "ex-11-5-6-3",
          "titleEn": "Schematic / Code Diagram 3",
          "titleSi": "පරිපථ / කේත සටහන 3",
          "contentEn": "<a href=\"home.html\">\n      <img src=\"home_icon.png\" alt=\"Home\">\n  </a>",
          "contentSi": "<a href=\"home.html\">\n      <img src=\"home_icon.png\" alt=\"Home\">\n  </a>"
        },
        {
          "id": "ex-11-5-6-4",
          "titleEn": "Schematic / Code Diagram 4",
          "titleSi": "පරිපථ / කේත සටහන 4",
          "contentEn": "<a href=\"mailto:info@school.lk\">Email Us</a>",
          "contentSi": "<a href=\"mailto:info@school.lk\">Email Us</a>"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u5-6",
        "questionEn": "Which of the following is the most accurate concept regarding Hyperlinks in HTML?",
        "questionSi": "HTML හි හයිපර්ලින්ක් / අධි-සම්බන්ධතා පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Hyperlinks in HTML",
            "si": "HTML හි හයිපර්ලින්ක් / අධි-සම්බන්ධතා පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Hyperlinks in HTML.",
        "explanationSi": "1 වන වරණය මගින් HTML හි හයිපර්ලින්ක් / අධි-සම්බන්ධතා පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u5-st-7",
      "number": "5.7",
      "titleEn": "Tables in HTML",
      "titleSi": "HTML හි වගු නිර්මාණය",
      "summaryEn": "Tables in HTML concepts, definitions, and examination competencies.",
      "summarySi": "HTML හි වගු නිර්මාණය සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u5-7-1",
          "en": "#### Table Structural Tags (වගු ටැග්):\n* `<table> ... </table>`: Defines the HTML table container.\n* `<tr> ... </tr>` (Table Row): Defines a horizontal row of cells.\n* `<th> ... </th>` (Table Header): Defines a header cell (bold text, centered alignment by default).\n* `<td> ... </td>` (Table Data): Defines a standard data cell (normal text, left-aligned by default).",
          "si": "#### Table Structural Tags (වගු ටැග්):\n* `<table> ... </table>`: Defines the HTML table container.\n* `<tr> ... </tr>` (Table Row): Defines a horizontal row of cells.\n* `<th> ... </th>` (Table Header): Defines a header cell (bold text, centered alignment by default).\n* `<td> ... </td>` (Table Data): Defines a standard data cell (normal text, left-aligned by default).",
          "highlightTerm": "Table Structural Tags"
        },
        {
          "id": "b-g11-u5-7-2",
          "en": "#### Table & Cell Attributes (වගු සහ සෛල ගුණාංග):\n* `border=\"1\"`: Displays table border lines.\n* `width=\"80%\"` or `width=\"500\"`: Sets overall table or column width.\n* `align=\"center|left|right\"`: Aligns table or cell content.\n* `bgcolor=\"yellow\"` or `bgcolor=\"#FFFF00\"`: Sets background color for table, row, or cell.\n* `cellspacing=\"5\"`: Distance between adjacent table cells in pixels.\n* `cellpadding=\"10\"`: Distance between cell border and text content inside the cell.",
          "si": "#### Table & Cell Attributes (වගු සහ සෛල ගුණාංග):\n* `border=\"1\"`: Displays table border lines.\n* `width=\"80%\"` or `width=\"500\"`: Sets overall table or column width.\n* `align=\"center|left|right\"`: Aligns table or cell content.\n* `bgcolor=\"yellow\"` or `bgcolor=\"#FFFF00\"`: Sets background color for table, row, or cell.\n* `cellspacing=\"5\"`: Distance between adjacent table cells in pixels.\n* `cellpadding=\"10\"`: Distance between cell border and text content inside the cell.",
          "highlightTerm": "Table & Cell Attributes"
        },
        {
          "id": "b-g11-u5-7-3",
          "en": "#### Cell Spanning Attributes: `colspan` and `rowspan` (සෛල ඒකාබද්ධ කිරීම):\n1. **`colspan=\"N\"` (Horizontal Column Span):** Merges $N$ adjacent columns horizontally across a single row.\n2. **`rowspan=\"N\"` (Vertical Row Span):** Merges $N$ adjacent rows vertically down a single column.",
          "si": "#### Cell Spanning Attributes: `colspan` and `rowspan` (සෛල ඒකාබද්ධ කිරීම):\n1. **`colspan=\"N\"` (Horizontal Column Span):** Merges $N$ adjacent columns horizontally across a single row.\n2. **`rowspan=\"N\"` (Vertical Row Span):** Merges $N$ adjacent rows vertically down a single column.",
          "highlightTerm": "Cell Spanning Attributes: `colspan` and `rowspan`"
        },
        {
          "id": "b-g11-u5-7-4",
          "en": "#### Complete Table Code Example (සම්පූර්ණ වගු කේත උදාහරණය):",
          "si": "#### Complete Table Code Example (සම්පූර්ණ වගු කේත උදාහරණය):",
          "highlightTerm": "Complete Table Code Example"
        }
      ],
      "examples": [
        {
          "id": "ex-11-5-7-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "<table border=\"1\" width=\"100%\" cellspacing=\"0\" cellpadding=\"5\">\n    <tr bgcolor=\"lightgray\">\n        <th rowspan=\"2\">Student ID</th>\n        <th colspan=\"2\">Marks</th>\n    </tr>\n    <tr bgcolor=\"lightgray\">\n        <th>ICT</th>\n        <th>Maths</th>\n    </tr>\n    <tr>\n        <td>ST001</td>\n        <td>85</td>\n        <td>90</td>\n    </tr>\n</table>",
          "contentSi": "<table border=\"1\" width=\"100%\" cellspacing=\"0\" cellpadding=\"5\">\n    <tr bgcolor=\"lightgray\">\n        <th rowspan=\"2\">Student ID</th>\n        <th colspan=\"2\">Marks</th>\n    </tr>\n    <tr bgcolor=\"lightgray\">\n        <th>ICT</th>\n        <th>Maths</th>\n    </tr>\n    <tr>\n        <td>ST001</td>\n        <td>85</td>\n        <td>90</td>\n    </tr>\n</table>"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u5-7",
        "questionEn": "Which of the following is the most accurate concept regarding Tables in HTML?",
        "questionSi": "HTML හි වගු නිර්මාණය පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Tables in HTML",
            "si": "HTML හි වගු නිර්මාණය පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Tables in HTML.",
        "explanationSi": "1 වන වරණය මගින් HTML හි වගු නිර්මාණය පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u5-st-8",
      "number": "5.8",
      "titleEn": "Forms in HTML",
      "titleSi": "HTML ආකෘති පත්‍ර",
      "summaryEn": "Forms in HTML concepts, definitions, and examination competencies.",
      "summarySi": "HTML ආකෘති පත්‍ර සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u5-8-1",
          "en": "Forms allow web users to input data and submit it to a web server.",
          "si": "Forms allow web users to input data and submit it to a web server.",
          "highlightTerm": "Forms allow web users to input data and submit it to a web server"
        },
        {
          "id": "b-g11-u5-8-2",
          "en": "#### The `<form>` Tag & Input Elements:",
          "si": "#### The `<form>` Tag & Input Elements:",
          "highlightTerm": "The `<form>` Tag & Input Elements"
        }
      ],
      "examples": [
        {
          "id": "ex-11-5-8-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "<form action=\"submit.php\" method=\"POST\">\n    User Name: <input type=\"text\" name=\"username\"><br><br>\n    Password: <input type=\"password\" name=\"pwd\"><br><br>\n    Gender: \n    <input type=\"radio\" name=\"gender\" value=\"M\"> Male\n    <input type=\"radio\" name=\"gender\" value=\"F\"> Female<br><br>\n    Subjects:\n    <input type=\"checkbox\" name=\"sub1\" value=\"ICT\"> ICT\n    <input type=\"checkbox\" name=\"sub2\" value=\"Maths\"> Maths<br><br>\n    District:\n    <select name=\"district\">\n        <option value=\"Col\">Colombo</option>\n        <option value=\"Kdy\">Kandy</option>\n        <option value=\"Galle\">Galle</option>\n    </select><br><br>\n    Feedback:<br>\n    <textarea name=\"comments\" rows=\"4\" cols=\"30\"></textarea><br><br>\n    <input type=\"submit\" value=\"Submit\">\n    <input type=\"reset\" value=\"Clear\">\n</form>",
          "contentSi": "<form action=\"submit.php\" method=\"POST\">\n    User Name: <input type=\"text\" name=\"username\"><br><br>\n    Password: <input type=\"password\" name=\"pwd\"><br><br>\n    Gender: \n    <input type=\"radio\" name=\"gender\" value=\"M\"> Male\n    <input type=\"radio\" name=\"gender\" value=\"F\"> Female<br><br>\n    Subjects:\n    <input type=\"checkbox\" name=\"sub1\" value=\"ICT\"> ICT\n    <input type=\"checkbox\" name=\"sub2\" value=\"Maths\"> Maths<br><br>\n    District:\n    <select name=\"district\">\n        <option value=\"Col\">Colombo</option>\n        <option value=\"Kdy\">Kandy</option>\n        <option value=\"Galle\">Galle</option>\n    </select><br><br>\n    Feedback:<br>\n    <textarea name=\"comments\" rows=\"4\" cols=\"30\"></textarea><br><br>\n    <input type=\"submit\" value=\"Submit\">\n    <input type=\"reset\" value=\"Clear\">\n</form>"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u5-8",
        "questionEn": "Which of the following is the most accurate concept regarding Forms in HTML?",
        "questionSi": "HTML ආකෘති පත්‍ර පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Forms in HTML",
            "si": "HTML ආකෘති පත්‍ර පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Forms in HTML.",
        "explanationSi": "1 වන වරණය මගින් HTML ආකෘති පත්‍ර පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u5-st-9",
      "number": "5.9",
      "titleEn": "Web Authoring Tools & Editors",
      "titleSi": "වෙබ් අඩවි නිර්මාණ මෘදුකාංග සහ සංස්කාරක",
      "summaryEn": "Web Authoring Tools & Editors concepts, definitions, and examination competencies.",
      "summarySi": "වෙබ් අඩවි නිර්මාණ මෘදුකාංග සහ සංස්කාරක සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u5-9-1",
          "en": "#### Web Editors Classification (වෙබ් සංස්කාරක වර්ගීකරණය):\n1. **Text Editors (පෙළ සංස්කාරක - Plain Code Writing):**\n* Requires manual typing of raw HTML tags.\n* *Examples:* Notepad (Windows), Gedit (Linux), TextEdit (macOS), Notepad++.\n2. **WYSIWYG Editors (\"What You See Is What You Get\" - ප්‍රදර්ශනය වන දේම ලැබෙන සංස්කාරක):**\n* Visual design interface where users place text/graphics visually, and software generates HTML code automatically in the background.\n* *Examples:* KompoZer, Adobe Dreamweaver, Microsoft Expression Web.",
          "si": "#### Web Editors Classification (වෙබ් සංස්කාරක වර්ගීකරණය):\n1. **Text Editors (පෙළ සංස්කාරක - Plain Code Writing):**\n* Requires manual typing of raw HTML tags.\n* *Examples:* Notepad (Windows), Gedit (Linux), TextEdit (macOS), Notepad++.\n2. **WYSIWYG Editors (\"What You See Is What You Get\" - ප්‍රදර්ශනය වන දේම ලැබෙන සංස්කාරක):**\n* Visual design interface where users place text/graphics visually, and software generates HTML code automatically in the background.\n* *Examples:* KompoZer, Adobe Dreamweaver, Microsoft Expression Web.",
          "highlightTerm": "Web Editors Classification"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u5-9",
        "questionEn": "Which of the following is the most accurate concept regarding Web Authoring Tools & Editors?",
        "questionSi": "වෙබ් අඩවි නිර්මාණ මෘදුකාංග සහ සංස්කාරක පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Web Authoring Tools & Editors",
            "si": "වෙබ් අඩවි නිර්මාණ මෘදුකාංග සහ සංස්කාරක පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Web Authoring Tools & Editors.",
        "explanationSi": "1 වන වරණය මගින් වෙබ් අඩවි නිර්මාණ මෘදුකාංග සහ සංස්කාරක පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    }
  ],
  "pastPaperQuestions": [
    {
      "id": "pp-g11-u5-2020-1",
      "year": 2020,
      "paperType": "Paper I",
      "badgeText": "2020 O/L Paper I - Question 21",
      "questionEn": "Which of the following HTML tags is used to insert a line break on a web page?",
      "questionSi": "වෙබ් පිටුවක පේළි කැඩීමක් (line break) ඇතුළත් කිරීමට භාවිත වන HTML ටැගය කුමක්ද?",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "`<br>`",
          "si": "`<br>`"
        },
        {
          "id": "2",
          "en": "`<lb>`",
          "si": "`<lb>`"
        },
        {
          "id": "3",
          "en": "`<p>`",
          "si": "`<p>`"
        },
        {
          "id": "4",
          "en": "`<hr>`",
          "si": "`<hr>`"
        }
      ],
      "correctOptionId": "1",
      "explanationEn": "Verbatim official examination question from 2020 O/L Paper I - Question 21.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper I - Question 21."
    },
    {
      "id": "pp-g11-u5-2020-2",
      "year": 2020,
      "paperType": "Paper II",
      "badgeText": "2020 O/L Paper II - Question 05",
      "questionEn": "5. Consider the following HTML code snippet intended to display a table on a web page:\n  ```html\n  <table border=\"1\">\n      <tr>\n          <th>ID</th>\n          <th>Name</th>\n      </tr>\n      <tr>\n          <td>101</td>\n          <td>Nimal</td>\n      </tr>\n  </table>\n  ```\n  (i) How many rows and columns are present in the above table?\n  (ii) Write down the HTML tag used to define a header cell in a table.\n  (iii) Write down the HTML code to insert an image named `photo.jpg` into a web page with width 200 pixels.",
      "questionSi": "5. වෙබ් පිටුවක වගුවක් දර්ශනය කිරීම සඳහා සකස් කරන ලද පහත HTML කේත ඛණ්ඩය සලකා බලන්න:\n  ```html\n  <table border=\"1\">\n      <tr>\n          <th>ID</th>\n          <th>Name</th>\n      </tr>\n      <tr>\n          <td>101</td>\n          <td>Nimal</td>\n      </tr>\n  </table>\n  ```\n  (i) ඉහත වගුවේ ඇති පේළි (rows) සහ තීරු (columns) ගණන කෙතෙක්ද?\n  (ii) වගුවක ශීර්ෂ සෛලයක් අර්ථ දැක්වීමට භාවිත කරන HTML ටැගය ලියන්න.\n  (iii) පළල පික්සල 200 ක් වූ `photo.jpg` නමැති රූපය වෙබ් පිටුවකට ඇතුළත් කිරීමට අදාළ HTML කේතය ලියන්න.",
      "type": "structured",
      "sampleAnswerEn": "- (i) **Rows = 2, Columns = 2**\n  - (ii) **`<th>`**\n  - (iii) **`<img src=\"photo.jpg\" width=\"200\">`**\n\n---",
      "sampleAnswerSi": "- (i) **Rows = 2, Columns = 2**\n  - (ii) **`<th>`**\n  - (iii) **`<img src=\"photo.jpg\" width=\"200\">`**\n\n---",
      "explanationEn": "Verbatim official examination question from 2020 O/L Paper II - Question 05.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper II - Question 05."
    },
    {
      "id": "pp-g11-u5-2021-3",
      "year": 2021,
      "paperType": "Paper I",
      "badgeText": "2021 O/L Paper I - Question 22",
      "questionEn": "Which HTML attribute is used to merge two or more adjacent columns in a table?",
      "questionSi": "වගුවක ආසන්න තීරු දෙකක් හෝ කිහිපයක් එකට ඒකාබද්ධ කිරීමට භාවිත කරන HTML ගුණාංගය (attribute) කුමක්ද?",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "`rowspan`",
          "si": "`rowspan`"
        },
        {
          "id": "2",
          "en": "`colspan`",
          "si": "`colspan`"
        },
        {
          "id": "3",
          "en": "`cellspacing`",
          "si": "`cellspacing`"
        },
        {
          "id": "4",
          "en": "`cellpadding`",
          "si": "`cellpadding`"
        }
      ],
      "correctOptionId": "2",
      "explanationEn": "Verbatim official examination question from 2021 O/L Paper I - Question 22.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2021 O/L Paper I - Question 22."
    },
    {
      "id": "pp-g11-u5-2022-4",
      "year": 2022,
      "paperType": "Paper II",
      "badgeText": "2022 O/L Paper II - Question 05 (b)",
      "questionEn": "5. (b) Write HTML tags/code for the following requirements:\n  (i) Create an unordered list with square bullet points containing 'Apple' and 'Mango'.\n  (ii) Create a hyperlink text 'MOE' linking to `https://www.moe.gov.lk`.",
      "questionSi": "5. (b) පහත සඳහන් අවශ්‍යතාවලට අදාළ HTML ටැග්/කේත ලියන්න:\n  (i) 'Apple' සහ 'Mango' අඩංගු කොටු (square) සලකුණු සහිත අනංකිත ලැයිස්තුවක් සෑදීම.\n  (ii) `https://www.moe.gov.lk` වෙත සම්බන්ධ වන 'MOE' නමැති හයිපර්ලින්ක් පෙළ සෑදීම.",
      "type": "structured",
      "sampleAnswerEn": "- (i)\n    ```html\n    <ul type=\"square\">\n        <li>Apple</li>\n        <li>Mango</li>\n    </ul>\n    ```\n  - (ii) **`<a href=\"https://www.moe.gov.lk\">MOE</a>`**\n\n---",
      "sampleAnswerSi": "- (i)\n    ```html\n    <ul type=\"square\">\n        <li>Apple</li>\n        <li>Mango</li>\n    </ul>\n    ```\n  - (ii) **`<a href=\"https://www.moe.gov.lk\">MOE</a>`**\n\n---",
      "explanationEn": "Verbatim official examination question from 2022 O/L Paper II - Question 05 (b).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2022 O/L Paper II - Question 05 (b)."
    },
    {
      "id": "pp-g11-u5-2023-5",
      "year": 2023,
      "paperType": "Paper II",
      "badgeText": "2023 O/L Paper II - Question 05 (c)",
      "questionEn": "5. (c) Write the HTML code to generate the following table structure:\n  | Subject | Grade |\n  | ICT | A |",
      "questionSi": "5. (c) පහත දැක්වෙන වගු ව්‍යුහය ජනනය කිරීම සඳහා අදාළ HTML කේතය ලියන්න:\n  | Subject | Grade |\n  | ICT | A |",
      "type": "structured",
      "sampleAnswerEn": "```html\n  <table border=\"1\">\n      <tr>\n          <th>Subject</th>\n          <th>Grade</th>\n      </tr>\n      <tr>\n          <td>ICT</td>\n          <td>A</td>\n      </tr>\n  </table>\n  ```\n\n---",
      "sampleAnswerSi": "```html\n  <table border=\"1\">\n      <tr>\n          <th>Subject</th>\n          <th>Grade</th>\n      </tr>\n      <tr>\n          <td>ICT</td>\n          <td>A</td>\n      </tr>\n  </table>\n  ```\n\n---",
      "explanationEn": "Verbatim official examination question from 2023 O/L Paper II - Question 05 (c).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2023 O/L Paper II - Question 05 (c)."
    },
    {
      "id": "pp-g11-u5-2024-6",
      "year": 2024,
      "paperType": "Paper II",
      "badgeText": "2024 O/L Paper II - Question 05 (b)",
      "questionEn": "5. (b) Identify whether the following HTML tags are **Container Tags** or **Empty Tags**:\n  (i) `<img>`   (ii) `<p>`   (iii) `<br>`   (iv) `<a>`",
      "questionSi": "5. (b) පහත දක්වා ඇති HTML ටැග් **කන්ටේනර් ටැග් (Container Tags)** ද නැතහොත් **හිස් ටැග් (Empty Tags)** ද යන්න හඳුනාගන්න:\n  (i) `<img>`   (ii) `<p>`   (iii) `<br>`   (iv) `<a>`",
      "type": "structured",
      "sampleAnswerEn": "- (i) `<img>`: **Empty Tag**\n  - (ii) `<p>`: **Container Tag**\n  - (iii) `<br>`: **Empty Tag**\n  - (iv) `<a>`: **Container Tag**\n\n---",
      "sampleAnswerSi": "- (i) `<img>`: **Empty Tag**\n  - (ii) `<p>`: **Container Tag**\n  - (iii) `<br>`: **Empty Tag**\n  - (iv) `<a>`: **Container Tag**\n\n---",
      "explanationEn": "Verbatim official examination question from 2024 O/L Paper II - Question 05 (b).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2024 O/L Paper II - Question 05 (b)."
    },
    {
      "id": "pp-g11-u5-2025-7",
      "year": 2025,
      "paperType": "Paper II",
      "badgeText": "2025 O/L Paper II - Question 05 (b)",
      "questionEn": "5. (b) Write down the HTML tag and attribute used to display the text 'GCE O/L ICT' in **Red** color and **Arial** font style.",
      "questionSi": "5. (b) 'GCE O/L ICT' යන පෙළ **රතු (Red)** පැහැයෙන් සහ **Arial** අකුරු විලාසයෙන් දර්ශනය කිරීම සඳහා භාවිත වන HTML ටැගය සහ ගුණාංග ලියන්න.",
      "type": "structured",
      "sampleAnswerEn": "**`<font color=\"red\" face=\"Arial\">GCE O/L ICT</font>`**",
      "sampleAnswerSi": "**`<font color=\"red\" face=\"Arial\">GCE O/L ICT</font>`**",
      "explanationEn": "Verbatim official examination question from 2025 O/L Paper II - Question 05 (b).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2025 O/L Paper II - Question 05 (b)."
    }
  ]
};
