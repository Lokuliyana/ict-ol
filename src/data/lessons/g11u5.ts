// Verbatim dual-medium syllabus data for Grade 11 Lesson 5
import { GeneralLessonData } from '../allLessonsData';

export const G11_U5_DATA: GeneralLessonData = {
  id: "g11-u5",
  grade: "11",
  unitNumber: 5,
  titleEn: "Web Designing using HTML & Web Editors",
  titleSi: "HTML සහ වෙබ් සංස්කාරක මගින් වෙබ් අඩවි නිර්මාණය",
  subtopics: [
    {
      id: "g11-u5-st-1",
      number: "5.1",
      titleEn: "Introduction to Web Design & Core Concepts",
      titleSi: "වෙබ් අඩවි නිර්මාණය සහ මූලික සංකල්ප",
      summaryEn: "World Wide Web (WWW), web pages, websites, home pages, and static vs dynamic web pages.",
      summarySi: "ලෝක ව්‍යාප්ත ජාලය (WWW), වෙබ් පිටු, වෙබ් අඩවි, මුල් පිටුව, සහ ස්ථිතික හා ගතික වෙබ් පිටු සංසන්දනය.",
      blocks: [
        {
          id: "b-g11-u5-1-1",
          en: "* **Core Architectural Definitions:**\n  * **World Wide Web (WWW):** A global distributed system of interlinked hypertext documents and multimedia resources accessed over the Internet via web browsers.\n  * **Web Page:** An electronic document created using HTML and related technologies containing formatted text, graphics, audio, video, and hyperlinks.\n  * **Website:** A collection of related, interlinked web pages hosted under a single domain name on a web server.\n  * **Home Page:** The primary introductory entry page of a website, serving as an index or table of contents connecting visitors to sub-pages.\n* **Static vs. Dynamic Web Pages:**\n  * **Static Web Pages:**\n    * Content remains fixed and identical for every user until a web designer manually edits the HTML/CSS source code.\n    * Built primarily with HTML and CSS; does not connect to backend databases.\n    * *Examples:* Personal resume portfolio, simple school profile, informational brochures.\n  * **Dynamic Web Pages:**\n    * Content changes automatically in real time based on user interactions, login sessions, location, or database queries.\n    * Built with client-side scripting and server-side technologies (PHP, Python, ASP.NET, JavaScript, Node.js) connected to relational databases (MySQL, PostgreSQL).\n    * *Examples:* Online banking portals, social media feeds (Facebook), e-commerce product catalogs (Amazon).",
          si: "* **මූලික වෙබ් සංකල්ප සහ අර්ථ දැක්වීම්:**\n  * **ලෝක ව්‍යාප්ත ජාලය (World Wide Web - WWW):** වෙබ් බ්‍රවුසරයක් භාවිතයෙන් අන්තර්ජාලය ඔස්සේ පිවිසිය හැකි, එකිනෙකට සම්බන්ධිත හයිපර්ටෙක්ස් (Hypertext) ලේඛන සහ බහුමාධ්‍ය සම්පත් පද්ධතියකි.\n  * **වෙබ් පිටුව (Web Page):** HTML සහ ආශ්‍රිත තාක්ෂණයන් භාවිතයෙන් නිර්මාණය කරන ලද, පෙළ, රූප, ශ්‍රව්‍ය, දෘශ්‍ය සහ හයිපර්ලින්ක් අඩංගු අංකිත ලේඛනයකි.\n  * **වෙබ් අඩවිය (Website):** එක් වසම් නාමයක් (Domain Name) යටතේ වෙබ් සේවාදායකයක ගබඩා කර ඇති එකිනෙකට සම්බන්ධිත වෙබ් පිටු සමූහයකි.\n  * **මුල් පිටුව (Home Page):** වෙබ් අඩවියකට පිවිසෙන විට පළමුවෙන්ම දර්ශනය වන ප්‍රධාන හෝ හඳුන්වාදීමේ පිටුවයි; මෙය අනෙකුත් පිටු සඳහා පටුනක් ලෙස ක්‍රියා කරයි.\n* **ස්ථිතික සහ ගතික වෙබ් පිටු සංසන්දනය:**\n  * **ස්ථිතික වෙබ් පිටු (Static Web Pages):**\n    * කේතය අතින් වෙනස් කරන තෙක් සියලුම පරිශීලකයන්ට දිස්වන්නේ එකම ස්ථාවර අන්තර්ගතයකි.\n    * මූලික වශයෙන් HTML සහ CSS මගින් නිර්මාණය වන අතර පසුපස දත්ත සමුදායන් (Databases) හා සම්බන්ධ නොවේ.\n    * *උදාහරණ:* පුද්ගලික ජීව දත්ත පිටු, පාසල් තොරතුරු විස්තර පිටු.\n  * **ගතික වෙබ් පිටු (Dynamic Web Pages):**\n    * පරිශීලකයාගේ ක්‍රියාකාරීත්වය, පිවිසෙන වේලාව හෝ දත්ත සමුදා විමසුම් මත අන්තර්ගතය ස්වයංක්‍රීයව වෙනස් වේ.\n    * සේවාදායක පාර්ශ්ව කේත (PHP, ASP.NET, Python) සහ දත්ත සමුදායන් (MySQL) සමග සම්බන්ධ වී ක්‍රියාත්මක වේ.\n    * *උදාහරණ:* මාර්ගගත බැංකු පද්ධති, සමාජ ජාල (Facebook), මාර්ගගත සාප්පු සවාරි (Amazon).",
          highlightTerm: "Web Fundamentals & Static vs Dynamic Pages"
        }
      ],
      checkpointQuiz: {
        id: "q-g11-u5-1",
        questionEn: "Which of the following statements correctly distinguishes a Dynamic Web Page from a Static Web Page?",
        questionSi: "ගතික වෙබ් පිටුවක් (Dynamic Web Page) ස්ථිතික වෙබ් පිටුවකින් (Static Web Page) වෙනස් වන ආකාරය නිවැරදිව දක්වන්නේ පහත කවර ප්‍රකාශයද?",
        options: [
          {
            id: "1",
            en: "A dynamic web page updates its content automatically based on user interaction and backend database queries.",
            si: "ගතික වෙබ් පිටුවක අන්තර්ගතය පරිශීලක ක්‍රියාකාරීත්වය සහ දත්ත සමුදා විමසුම් මත ස්වයංක්‍රීයව වෙනස් වේ."
          },
          {
            id: "2",
            en: "A dynamic web page cannot contain images or hyperlinks on web browsers.",
            si: "ගතික වෙබ් පිටුවක රූප හෝ හයිපර්ලින්ක් ඇතුළත් කළ නොහැක."
          },
          {
            id: "3",
            en: "A static web page requires server-side PHP scripts and a relational database connection.",
            si: "ස්ථිතික වෙබ් පිටුවක් සඳහා සේවාදායක පාර්ශ්වයේ PHP කේත සහ දත්ත සමුදා සබඳතාවක් අනිවාර්ය වේ."
          },
          {
            id: "4",
            en: "A static web page displays different personalized information for every user who visits.",
            si: "ස්ථිතික වෙබ් පිටුවකට පිවිසෙන සෑම පරිශීලකයෙකුටම වෙනස් වූ පෞද්ගලීකරණය කළ තොරතුරු පෙන්වයි."
          }
        ],
        correctOptionId: "1",
        explanationEn: "Dynamic web pages interact with databases and backend logic to deliver customized content in real time, whereas static web pages display fixed content hardcoded in HTML.",
        explanationSi: "ගතික වෙබ් පිටු දත්ත සමුදායන් සමග සම්බන්ධ වී තොරතුරු ස්වයංක්‍රීයව යාවත්කාලීන කර පෙන්වන අතර, ස්ථිතික පිටු පෙන්වන්නේ HTML හි ලියන ලද ස්ථාවර අන්තර්ගතය පමණි."
      }
    },
    {
      id: "g11-u5-st-2",
      number: "5.2",
      titleEn: "HTML Document Structure & Fundamental Tags",
      titleSi: "HTML ලේඛන ව්‍යුහය සහ මූලික ටැග්",
      summaryEn: "HTML syntax, document skeleton (DOCTYPE, html, head, title, body), and container tags vs empty (void) tags.",
      summarySi: "HTML කේත සම්මුති, මූලික ලේඛන සැකිල්ල (DOCTYPE, html, head, title, body) සහ කන්ටේනර් ටැග් හා හිස් ටැග්.",
      blocks: [
        {
          id: "b-g11-u5-2-1",
          en: "* **What is HTML?** HTML stands for **HyperText Markup Language**. It is the standard authoring markup language used to structure documents and pages on the World Wide Web.\n* **Standard HTML Document Skeleton:**\n  ```html\n  <!DOCTYPE html>\n  <html>\n  <head>\n      <title>My First Web Page</title>\n  </head>\n  <body>\n      <h1>Welcome to My Website</h1>\n      <p>This is a paragraph of text on my web page.</p>\n  </body>\n  </html>\n  ```\n* **Core Structural Tags:**\n  * `<!DOCTYPE html>`: Document type declaration telling the browser to render the page in standard HTML5 mode.\n  * `<html> ... </html>`: The root element enclosing all HTML elements on the web page.\n  * `<head> ... </head>`: Header container holding document metadata, title, character encoding, and style links (not rendered in the visible viewport).\n  * `<title> ... </title>`: Sets the document title displayed on browser tabs and bookmarks.\n  * `<body> ... </body>`: Body element enclosing all visible page contents (headings, paragraphs, images, tables, links).\n* **Container Tags vs. Empty (Void) Tags:**\n  * **Container Tags:** Require both an opening `<tag>` and a closing `</tag>` with content between them.\n    * *Examples:* `<html>...</html>`, `<head>...</head>`, `<body>...</body>`, `<h1>...</h1>`, `<p>...</p>`, `<table>...</table>`, `<a>...</a>`.\n  * **Empty / Void Tags:** Standalone tags that do NOT have a closing tag and cannot contain child text.\n    * *Examples:* `<br>` (line break), `<hr>` (horizontal dividing line), `<img>` (image), `<input>` (form field), `<meta>`.",
          si: "* **HTML යනු කුමක්ද?** HTML යනු **HyperText Markup Language** යන්නයි. මෙය ලෝක ව්‍යාප්ත ජාලයේ වෙබ් පිටු ව්‍යුහගත කිරීම සඳහා භාවිත වන සම්මත මාර්කප් භාෂාවයි.\n* **සම්මත HTML ලේඛන සැකිල්ල:**\n  ```html\n  <!DOCTYPE html>\n  <html>\n  <head>\n      <title>මාගේ පළමු වෙබ් පිටුව</title>\n  </head>\n  <body>\n      <h1>වෙබ් අඩවියට සාදරයෙන් පිළිගනිමු</h1>\n      <p>මෙය මගේ වෙබ් පිටුවේ ඡේදයකි.</p>\n  </body>\n  </html>\n  ```\n* **මූලික ව්‍යුහාත්මක ටැග්:**\n  * `<!DOCTYPE html>`: වෙබ් ලේඛන වර්ගය HTML5 බව බ්‍රවුසරයට ප්‍රකාශ කරයි.\n  * `<html> ... </html>`: මුළු HTML ලේඛනයම ආවරණය කරන මූලික රූට් (root) ටැගයයි.\n  * `<head> ... </head>`: ලේඛනයේ මෙටා දත්ත, මාතෘකාව සහ ශීර්ෂ තොරතුරු අඩංගු වන ප්‍රදේශයයි (තිරය මත සෘජුව නොපෙනේ).\n  * `<title> ... </title>`: බ්‍රවුසර් ටැබ් එකේ සහ මාතෘකා තීරුවේ දිස්වන නම තීරණය කරයි.\n  * `<body> ... </body>`: වෙබ් පිටුවේ දර්ශනය වන සියලුම අන්තර්ගතයන් (මාතෘකා, ඡේද, පින්තූර, වගු, ලින්ක්) අඩංගු වන ප්‍රධාන බඳ කොටසයි.\n* **කන්ටේනර් ටැග් සහ හිස් ටැග් (Container vs Empty Tags):**\n  * **කන්ටේනර් ටැග් (Container Tags):** ආරම්භක `<tag>` සහ අවසාන `</tag>` යුගලක් සහිත ටැග් වේ.\n    * *උදාහරණ:* `<html>...</html>`, `<body>...</body>`, `<p>...</p>`, `<h1>...</h1>`, `<table>...</table>`, `<a>...</a>`.\n  * **හිස් ටැග් (Empty / Void Tags):** වෙනම වැසීමේ ටැගයක් නොමැති තනි ස්වයං-සම්පූර්ණ ටැග් වේ.\n    * *උදාහරණ:* `<br>` (පේළි කැඩීම), `<hr>` (තිරස් බෙදුම් රේඛාව), `<img>` (පින්තූර), `<input>` (ආකෘති පත්‍ර ආදානය).",
          highlightTerm: "HTML Skeleton & Container vs Empty Tags"
        }
      ],
      checkpointQuiz: {
        id: "q-g11-u5-2",
        questionEn: "Which of the following contains ONLY Empty (Void) HTML tags that do not have a closing tag?",
        questionSi: "වෙනම වැසීමේ ටැගයක් (Closing tag) නොමැති හිස් ටැග් (Empty / Void tags) පමණක් අඩංගු වන්නේ පහත කුමකද?",
        options: [
          {
            id: "1",
            en: "<br>, <hr>, <img>",
            si: "<br>, <hr>, <img>"
          },
          {
            id: "2",
            en: "<p>, <h1>, <body>",
            si: "<p>, <h1>, <body>"
          },
          {
            id: "3",
            en: "<table>, <tr>, <td>",
            si: "<table>, <tr>, <td>"
          },
          {
            id: "4",
            en: "<a>, <title>, <html>",
            si: "<a>, <title>, <html>"
          }
        ],
        correctOptionId: "1",
        explanationEn: "<br> (line break), <hr> (horizontal rule), and <img> (image) are void/empty tags that do not enclose content and have no closing tags.",
        explanationSi: "<br> (පේළි කැඩීම), <hr> (තිරස් රේඛාව) සහ <img> (පින්තූර) යනු වැසීමේ ටැග් නොමැති හිස් ටැග් (Empty Tags) වේ."
      }
    },
    {
      id: "g11-u5-st-3",
      number: "5.3",
      titleEn: "Formatting Text in HTML",
      titleSi: "HTML හි පෙළ හැඩසැසීම",
      summaryEn: "Heading tags (h1 to h6), paragraphs (<p>), line breaks (<br>), horizontal rules (<hr>), formatting styles (b, i, u, sub, sup), and font attributes.",
      summarySi: "මාතෘකා ටැග් (h1 සිට h6 දක්වා), ඡේද (<p>), පේළි කැඩීම් (<br>), තිරස් ඉරි (<hr>), පෙළ විලාස (b, i, u, sub, sup) සහ font ගුණාංග.",
      blocks: [
        {
          id: "b-g11-u5-3-1",
          en: "* **Heading Elements:** HTML provides 6 tiered heading levels: `<h1>` (largest, highest hierarchy) down to `<h6>` (smallest, lowest hierarchy).\n* **Text Layout Tags:**\n  * `<p> ... </p>`: Paragraph tag, adds automatic vertical margin spacing above and below.\n  * `<br>`: Line break tag, forces following text to the next line without adding paragraph margin.\n  * `<hr>`: Horizontal rule tag, renders a visual dividing line across the page width (`width=\"80%\"`, `size=\"3\"`, `color=\"blue\"`).\n* **Text Styling Tags:**\n  * `<b>` or `<strong>`: Displays text in bold typeface.\n  * `<i>` or `<em>`: Displays text in italics (emphasis).\n  * `<u>`: Underlines text.\n  * `<sub>`: Subscript (renders below baseline, e.g. `H<sub>2</sub>O` $\\rightarrow$ H₂O).\n  * `<sup>`: Superscript (renders above baseline, e.g. `X<sup>2</sup>` $\\rightarrow$ X²).\n  * `<small>`: Renders text one font size smaller.\n* **The `<font>` Tag and Attributes:**\n  * Syntax: `<font face=\"Arial\" size=\"5\" color=\"red\">Formatted Text</font>`\n  * `face`: Specifies font typeface (e.g. `Arial`, `Times New Roman`).\n  * `size`: Numeric scale from `1` (smallest) to `7` (largest); default is `3`.\n  * `color`: Color name (`\"blue\"`) or hexadecimal color code (`\"#FF0000\"`).",
          si: "* **මාතෘකා මට්ටම් (Headings):** HTML හි මාතෘකා මට්ටම් 6ක් ඇත: `<h1>` (විශාලතම සහ ප්‍රධානම) සිට `<h6>` (කුඩාම) දක්වා.\n* **පිරිසැලසුම් ටැග්:**\n  * `<p> ... </p>`: ඡේද ටැගය, ඡේදයකට පෙර හා පසු ඉඩ තබයි.\n  * `<br>`: පේළි කැඩුම් ටැගය, හිස්තැන් නොතබා ඊළඟ පේළියට ගමන් කරයි.\n  * `<hr>`: තිරස් බෙදුම් රේඛාවක් අඳින ටැගයයි (`width=\"80%\"`, `size=\"3\"`, `color=\"blue\"`).\n* **පෙළ විලාස හැඩසැසුම් ටැග්:**\n  * `<b>` හෝ `<strong>`: තද අකුරු (Bold).\n  * `<i>` හෝ `<em>`: ඇල අකුරු (Italic).\n  * `<u>`: යටින් ඉරක් ඇඳීම (Underline).\n  * `<sub>`: යටි ලකුණු (Subscript, උදා: `H<sub>2</sub>O` $\\rightarrow$ H₂O).\n  * `<sup>`: උඩ ලකුණු (Superscript, උදා: `X<sup>2</sup>` $\\rightarrow$ X²).\n  * `<small>`: කුඩා අකුරු.\n* **`<font>` ටැගය සහ ගුණාංග:**\n  * කේතය: `<font face=\"Arial\" size=\"5\" color=\"red\">හැඩසැසූ පෙළ</font>`\n  * `face`: අකුරු විලාසයේ නම (උදා: `Arial`, `Times New Roman`).\n  * `size`: අකුරු ප්‍රමාණය 1 (කුඩාම) සිට 7 (විශාලතම) දක්වා; පෙරනිමි අගය 3 වේ.\n  * `color`: වර්ණයේ නම (`\"red\"`) හෝ ෂඩ්දශම කේතය (`\"#FF0000\"`).",
          highlightTerm: "HTML Text Formatting & Font Attributes"
        }
      ],
      checkpointQuiz: {
        id: "q-g11-u5-3",
        questionEn: "Which HTML tag is used to display the chemical formula of Water with the number '2' rendered as a subscript (H₂O)?",
        questionSi: "ජලයේ රසායනික සූත්‍රය වන H₂O හි '2' ඉලක්කම යටි ලකුණක් (subscript) ලෙස පෙන්වීමට භාවිත වන නිවැරදි HTML කේතය කුමක්ද?",
        options: [
          {
            id: "1",
            en: "H<sub>2</sub>O",
            si: "H<sub>2</sub>O"
          },
          {
            id: "2",
            en: "H<sup>2</sup>O",
            si: "H<sup>2</sup>O"
          },
          {
            id: "3",
            en: "H<small>2</small>O",
            si: "H<small>2</small>O"
          },
          {
            id: "4",
            en: "H<font size=\"2\">2</font>O",
            si: "H<font size=\"2\">2</font>O"
          }
        ],
        correctOptionId: "1",
        explanationEn: "The <sub> tag defines subscript text (hanging below baseline), while <sup> defines superscript text.",
        explanationSi: "<sub> (Subscript) ටැගය මගින් අකුරක් පාදමට පහළින් (යටි ලකුණක් ලෙස) දක්වන අතර <sup> (Superscript) මගින් උඩ ලකුණක් ලෙස දක්වයි."
      }
    },
    {
      id: "g11-u5-st-4",
      number: "5.4",
      titleEn: "Lists in HTML",
      titleSi: "HTML හි ලැයිස්තු",
      summaryEn: "Ordered lists (<ol>), unordered lists (<ul>), list items (<li>), and numbering/bullet styling attributes.",
      summarySi: "අංකිත ලැයිස්තු (<ol>), අනංකිත ලැයිස්තු (<ul>), ලැයිස්තු අයිතම (<li>), සහ අංක හා බුලට් ගුණාංග.",
      blocks: [
        {
          id: "b-g11-u5-4-1",
          en: "* **Ordered Lists (`<ol>` - අංකිත ලැයිස්තු):**\n  * Displays sequential list items numbered with digits or letters.\n  * Encloses list elements with `<ol> ... </ol>` and marks individual entries with `<li> ... </li>` (List Item).\n  * **Attributes:**\n    * `type`: Sets numbering style (`type=\"1\"` [default 1, 2, 3], `type=\"a\"` [a, b, c], `type=\"A\"` [A, B, C], `type=\"i\"` [i, ii, iii], `type=\"I\"` [I, II, III]).\n    * `start`: Sets starting integer value (e.g. `<ol type=\"A\" start=\"3\">` begins at 'C').\n* **Unordered Lists (`<ul>` - අනංකිත ලැයිස්තු):**\n  * Displays non-sequential list items styled with bullet symbols.\n  * Encloses list elements with `<ul> ... </ul>` and individual entries with `<li> ... </li>`.\n  * **Attributes:**\n    * `type`: Sets bullet marker shape (`type=\"disc\"` [solid circle, default], `type=\"circle\"` [hollow circle], `type=\"square\"` [solid square]).",
          si: "* **අංකිත ලැයිස්තු (`<ol>` - Ordered Lists):**\n  * අයිතම අනුක්‍රමික අංක හෝ අක්ෂර මගින් පෙළගස්වයි.\n  * `<ol> ... </ol>` තුළ ලැයිස්තුව පිහිටුවන අතර සෑම අයිතමයක්ම `<li> ... </li>` (List Item) ටැගය මගින් සලකුණු කරයි.\n  * **ගුණාංග (Attributes):**\n    * `type`: අංකන විලාසය තීරණය කරයි (`1`, `a`, `A`, `i`, `I`).\n    * `start`: ආරම්භක අගය තීරණය කරයි (උදා: `<ol type=\"A\" start=\"3\">` යනු C අකුරෙන් ආරම්භ වීමයි).\n* **අනංකිත ලැයිස්තු (`<ul>` - Unordered Lists):**\n  * අයිතම විශේෂිත සංකේත (Bullets) මගින් පෙළගස්වයි.\n  * `<ul> ... </ul>` තුළ ලැයිස්තුව පිහිටුවන අතර එක් එක් අයිතමය `<li>` මගින් සලකුණු කරයි.\n  * **ගුණාංග (Attributes):**\n    * `type`: බුලට් ලකුණේ හැඩය තීරණය කරයි (`type=\"disc\"` [කළු තිත් - පෙරනිමි], `type=\"circle\"` [හිස් වෘත්ත], `type=\"square\"` [කළු කොටු]).",
          highlightTerm: "HTML Ordered vs Unordered Lists"
        }
      ],
      checkpointQuiz: {
        id: "q-g11-u5-4",
        questionEn: "Which HTML code snippet correctly creates an unordered list with square bullet markers?",
        questionSi: "කොටු (square) සලකුණු සහිත අනංකිත ලැයිස්තුවක් නිවැරදිව සාදන HTML කේත ඛණ්ඩය කුමක්ද?",
        options: [
          {
            id: "1",
            en: "<ul type=\"square\"> <li>Item 1</li> <li>Item 2</li> </ul>",
            si: "<ul type=\"square\"> <li>Item 1</li> <li>Item 2</li> </ul>"
          },
          {
            id: "2",
            en: "<ol type=\"square\"> <li>Item 1</li> <li>Item 2</li> </ol>",
            si: "<ol type=\"square\"> <li>Item 1</li> <li>Item 2</li> </ol>"
          },
          {
            id: "3",
            en: "<list shape=\"square\"> <li>Item 1</li> </list>",
            si: "<list shape=\"square\"> <li>Item 1</li> </list>"
          },
          {
            id: "4",
            en: "<dl type=\"box\"> <dt>Item 1</dt> </dl>",
            si: "<dl type=\"box\"> <dt>Item 1</dt> </dl>"
          }
        ],
        correctOptionId: "1",
        explanationEn: "Unordered lists use the <ul> container with the type attribute set to 'square', 'disc', or 'circle'.",
        explanationSi: "අනංකිත ලැයිස්තු සඳහා <ul> ටැගය සමග type=\"square\" ගුණාංගය භාවිත වේ."
      }
    },
    {
      id: "g11-u5-st-5",
      number: "5.5",
      titleEn: "Inserting Images in HTML",
      titleSi: "HTML වෙත රූප ඇතුළත් කිරීම",
      summaryEn: "The <img> tag, essential attributes (src, alt, width, height, border), and supported web graphic formats.",
      summarySi: "<img> ටැගය, අත්‍යවශ්‍ය ගුණාංග (src, alt, width, height, border) සහ වෙබ් රූප ආකෘති.",
      blocks: [
        {
          id: "b-g11-u5-5-1",
          en: "* **The `<img>` Tag:** An empty (void) tag used to embed images directly into a web document.\n* **Essential Attributes:**\n  * `src` (Source - **Mandatory**): Specifies relative file path or absolute URL pointing to the image file (e.g. `src=\"images/logo.png\"`).\n  * `alt` (Alternate Text - **Mandatory for Accessibility**): Text displayed if the image fails to load or read by screen readers for visually impaired users.\n  * `width`: Specifies display width in pixels or percentage (e.g. `width=\"300\"` or `width=\"50%\"`).\n  * `height`: Specifies display height in pixels (e.g. `height=\"200\"`).\n  * `border`: Border thickness around the image in pixels (e.g. `border=\"1\"`).\n* **Code Example:**\n  ```html\n  <img src=\"school.jpg\" alt=\"School Building\" width=\"400\" height=\"300\" border=\"2\">\n  ```\n* **Standard Web Image Formats:** JPEG (`.jpg`/`.jpeg`), PNG (`.png`), GIF (`.gif`), SVG (`.svg`), WebP (`.webp`).",
          si: "* **`<img>` ටැගය:** වෙබ් පිටුවකට පින්තූරයක් ඇතුළත් කිරීමට භාවිත වන හිස් (Empty) ටැගයකි.\n* **අත්‍යවශ්‍ය ගුණාංග (Attributes):**\n  * `src` (Source - **අනිවාර්යයි**): රූප ගොනුව පවතින ලිපිනය හෝ ගොනු මාර්ගය දක්වයි (උදා: `src=\"images/logo.png\"`).\n  * `alt` (Alternate Text - **ප්‍රවේශ්‍යතාව සඳහා අනිවාර්යයි**): කිසියම් හේතුවකින් රූපය දර්ශනය නොවන්නේ නම් ඒ වෙනුවට පෙන්වන විකල්ප පෙළයි.\n  * `width`: රූපයේ පළල පික්සලවලින් හෝ ප්‍රතිශතයකින් දක්වයි (උදා: `width=\"300\"`).\n  * `height`: රූපයේ උස පික්සලවලින් දක්වයි (උදා: `height=\"200\"`).\n  * `border`: රූපය වටා ඇති බෝඩරයේ ඝනකම පික්සලවලින් දක්වයි.\n* **කේත උදාහරණය:**\n  ```html\n  <img src=\"school.jpg\" alt=\"පාසල් ගොඩනැගිල්ල\" width=\"400\" height=\"300\" border=\"2\">\n  ```\n* **වෙබ් පිටු සඳහා සුදුසු රූප ආකෘති:** JPEG (`.jpg`), PNG (`.png`), GIF (`.gif`), SVG (`.svg`).",
          highlightTerm: "The img Tag & Attributes"
        }
      ],
      checkpointQuiz: {
        id: "q-g11-u5-5",
        questionEn: "Which HTML attribute specifies an alternative text to display if an image cannot be loaded by the web browser?",
        questionSi: "වෙබ් බ්‍රවුසරයකට රූපයක් පූරණය කරගත නොහැකි වූ විට ඒ වෙනුවට දර්ශනය වන විකල්ප පෙළ දැක්වීමට භාවිත කරන HTML ගුණාංගය කුමක්ද?",
        options: [
          {
            id: "1",
            en: "src",
            si: "src"
          },
          {
            id: "2",
            en: "alt",
            si: "alt"
          },
          {
            id: "3",
            en: "title",
            si: "title"
          },
          {
            id: "4",
            en: "href",
            si: "href"
          }
        ],
        correctOptionId: "2",
        explanationEn: "The 'alt' (alternative text) attribute provides fallback text if the image fails to load and aids screen reader accessibility.",
        explanationSi: "රූපය දර්ශනය නොවන්නේ නම් ඒ වෙනුවට පෙන්වන විකල්ප පෙළ දැක්වීමට 'alt' (Alternate Text) ගුණාංගය භාවිත වේ."
      }
    },
    {
      id: "g11-u5-st-6",
      number: "5.6",
      titleEn: "Hyperlinks in HTML",
      titleSi: "HTML හි හයිපර්ලින්ක් / අධි-සම්බන්ධතා",
      summaryEn: "Anchor tag (<a>), href attribute, internal and external links, image hyperlinks, mailto links, and target attributes.",
      summarySi: "ඇන්කර් ටැගය (<a>), href ගුණාංගය, අභ්‍යන්තර හා බාහිර සබැඳි, රූප හයිපර්ලින්ක්, ඊමේල් සබැඳි සහ target ගුණාංගය.",
      blocks: [
        {
          id: "b-g11-u5-6-1",
          en: "* **The Anchor Tag (`<a>`):** Creates clickable hyperlinks navigating users to other pages, external websites, specific page anchors, or email clients.\n* **Essential Attributes:**\n  * `href` (Hypertext Reference - **Mandatory**): Destination URL, page path, or resource identifier.\n  * `target`: Specifies where to open the linked document.\n    * `target=\"_blank\"`: Opens destination in a new browser window or tab.\n    * `target=\"_self\"`: Opens destination in the current frame/tab (default behavior).\n* **Hyperlink Types:**\n  * **External Link:** `<a href=\"https://www.moe.gov.lk\" target=\"_blank\">Ministry of Education</a>`\n  * **Internal Page Link:** `<a href=\"contact.html\">Contact Us</a>`\n  * **Image Hyperlink (clickable image button):**\n    ```html\n    <a href=\"home.html\">\n        <img src=\"home_icon.png\" alt=\"Home Button\">\n    </a>\n    ```\n  * **Email Link (`mailto:`):** `<a href=\"mailto:info@school.lk\">Send Email</a>`",
          si: "* **ඇන්කර් ටැගය (`<a>` - Anchor Tag):** වෙනත් වෙබ් පිටුවකට, බාහිර වෙබ් අඩවියකට හෝ විද්‍යුත් තැපෑලකට සම්බන්ධ වන ක්ලික් කළ හැකි හයිපර්ලින්ක් නිර්මාණය කරයි.\n* **ප්‍රධාන ගුණාංග (Attributes):**\n  * `href` (Hypertext Reference - **අනිවාර්යයි**): සබැඳියෙන් යොමු විය යුතු ඉලක්කගත වෙබ් ලිපිනය හෝ ගොනු නාමය දක්වයි.\n  * `target`: සබැඳිය විවෘත විය යුතු ආකාරය තීරණය කරයි.\n    * `target=\"_blank\"`: නව බ්‍රවුසර් කවුළුවක හෝ ටැබ් එකක සබැඳිය විවෘත කරයි.\n    * `target=\"_self\"`: පවතින කවුළුවේම විවෘත කරයි (පෙරනිමි ක්‍රමය).\n* **හයිපර්ලින්ක් වර්ග:**\n  * **බාහිර සබැඳි:** `<a href=\"https://www.moe.gov.lk\" target=\"_blank\">අධ්‍යාපන අමාත්‍යාංශය</a>`\n  * **අභ්‍යන්තර සබැඳි:** `<a href=\"contact.html\">අප අමතන්න</a>`\n  * **රූපයක් මගින් සබැඳියක් සෑදීම (Image Hyperlink):**\n    ```html\n    <a href=\"home.html\">\n        <img src=\"home_icon.png\" alt=\"මුල් පිටුව\">\n    </a>\n    ```\n  * **ඊමේල් සබැඳි (`mailto:`):** `<a href=\"mailto:info@school.lk\">ඊමේල් එවන්න</a>`",
          highlightTerm: "The Anchor Tag & Hyperlink Navigation"
        }
      ],
      checkpointQuiz: {
        id: "q-g11-u5-6",
        questionEn: "Which HTML attribute opens a hyperlinked destination page in a completely new browser tab or window?",
        questionSi: "හයිපර්ලින්ක් එකක් මත ක්ලික් කළ විට එම පිටුව සම්පූර්ණයෙන්ම නව බ්‍රවුසර් ටැබ් එකක විවෘත කිරීමට භාවිත කරන ගුණාංගය කුමක්ද?",
        options: [
          {
            id: "1",
            en: "target=\"_blank\"",
            si: "target=\"_blank\""
          },
          {
            id: "2",
            en: "target=\"_new\"",
            si: "target=\"_new\""
          },
          {
            id: "3",
            en: "window=\"open\"",
            si: "window=\"open\""
          },
          {
            id: "4",
            en: "href=\"_blank\"",
            si: "href=\"_blank\""
          }
        ],
        correctOptionId: "1",
        explanationEn: "Specifying target=\"_blank\" inside an <a> tag instructs the browser to open the linked resource in a new tab.",
        explanationSi: "<a> ටැගය තුළ target=\"_blank\" යෙදීමෙන් අදාළ සබැඳිය නව බ්‍රවුසර් ටැබ් එකක විවෘත වේ."
      }
    },
    {
      id: "g11-u5-st-7",
      number: "5.7",
      titleEn: "Tables in HTML",
      titleSi: "HTML හි වගු නිර්මාණය",
      summaryEn: "Table structure tags (table, tr, th, td), styling attributes (border, bgcolor, cellspacing, cellpadding), and cell spanning (colspan, rowspan).",
      summarySi: "වගු ව්‍යුහාත්මක ටැග් (table, tr, th, td), හැඩසැසුම් ගුණාංග (border, bgcolor, cellspacing, cellpadding) සහ සෛල ඒකාබද්ධ කිරීම (colspan, rowspan).",
      blocks: [
        {
          id: "b-g11-u5-7-1",
          en: "* **Table Structure Elements:**\n  * `<table> ... </table>`: Defines the table container.\n  * `<tr> ... </tr>` (Table Row): Encloses a horizontal row of cells.\n  * `<th> ... </th>` (Table Header): Defines a header cell (bold text, centered alignment by default).\n  * `<td> ... </td>` (Table Data): Defines a standard data cell (regular weight text, left aligned by default).\n* **Table & Cell Formatting Attributes:**\n  * `border=\"1\"`: Displays visible borders around the table and cells.\n  * `width=\"80%\"` or `width=\"600\"`: Sets table width in percentage or absolute pixels.\n  * `align=\"center|left|right\"`: Horizontal alignment of table or cell contents.\n  * `bgcolor=\"#EFEFEF\"`: Sets background color for the entire table, a row (`<tr>`), or an individual cell (`<td>`).\n  * `cellspacing=\"5\"`: Space in pixels between adjacent cells.\n  * `cellpadding=\"10\"`: Padding distance in pixels between cell borders and the text inside.\n* **Cell Spanning Attributes:**\n  * **`colspan=\"N\"` (Column Span):** Merges $N$ adjacent cells horizontally across columns.\n  * **`rowspan=\"N\"` (Row Span):** Merges $N$ adjacent cells vertically across rows.\n* **Code Example with Colspan & Rowspan:**\n  ```html\n  <table border=\"1\" width=\"100%\" cellspacing=\"0\" cellpadding=\"5\">\n      <tr>\n          <th rowspan=\"2\">Student ID</th>\n          <th colspan=\"2\">Term Marks</th>\n      </tr>\n      <tr>\n          <th>ICT</th>\n          <th>Maths</th>\n      </tr>\n      <tr>\n          <td>ST101</td>\n          <td>88</td>\n          <td>92</td>\n      </tr>\n  </table>\n  ```",
          si: "* **වගු ව්‍යුහාත්මක ටැග්:**\n  * `<table> ... </table>`: වගුව අර්ථ දක්වන මූලික කන්ටේනරයයි.\n  * `<tr> ... </tr>` (Table Row): තිරස් පේළියක් නිර්මාණය කරයි.\n  * `<th> ... </th>` (Table Header): ශීර්ෂ සෛලයක් නිර්මාණය කරයි (පෙරනිමියෙන්ම තද අකුරු සහ මැදට පෙළගැසේ).\n  * `<td> ... </td>` (Table Data): සාමාන්‍ය දත්ත සෛලයක් නිර්මාණය කරයි (සාමාන්‍ය අකුරු සහ වමට පෙළගැසේ).\n* **වගු හැඩසැසුම් ගුණාංග:**\n  * `border=\"1\"`: වගුව වටා මායිම් රේඛා දර්ශනය කරයි.\n  * `width=\"80%\"`: වගුවේ පළල තීරණය කරයි.\n  * `align=\"center|left|right\"`: වගුව හෝ සෛල අන්තර්ගතය පෙළගස්වයි.\n  * `bgcolor=\"yellow\"`: වගුවට, පේළියකට (`<tr>`) හෝ සෛලයකට (`<td>`) පසුබිම් වර්ණයක් ලබා දෙයි.\n  * `cellspacing`: සෛල දෙකක් අතර පවතින පරතරය පික්සලවලින් දක්වයි.\n  * `cellpadding`: සෛලයේ මායිම සහ එහි ඇති පෙළ අතර පරතරය පික්සලවලින් දක්වයි.\n* **සෛල ඒකාබද්ධ කිරීමේ ගුණාංග:**\n  * **`colspan=\"N\"`:** තිරස් අතට යාබද තීරු (Columns) $N$ සංඛ්‍යාවක් එකට ඒකාබද්ධ කරයි.\n  * **`rowspan=\"N\"`:** සිරස් අතට යාබද පේළි (Rows) $N$ සංඛ්‍යාවක් එකට ඒකාබද්ධ කරයි.",
          highlightTerm: "HTML Tables, Colspan & Rowspan"
        }
      ],
      checkpointQuiz: {
        id: "q-g11-u5-7",
        questionEn: "Which HTML attribute is used to merge two or more adjacent horizontal columns across a single table row?",
        questionSi: "වගුවක තනි පේළියක් තුළ යාබද තීරු (columns) දෙකක් හෝ කිහිපයක් තිරස් අතට ඒකාබද්ධ කිරීමට භාවිත කරන HTML ගුණාංගය කුමක්ද?",
        options: [
          {
            id: "1",
            en: "rowspan",
            si: "rowspan"
          },
          {
            id: "2",
            en: "colspan",
            si: "colspan"
          },
          {
            id: "3",
            en: "cellspacing",
            si: "cellspacing"
          },
          {
            id: "4",
            en: "cellpadding",
            si: "cellpadding"
          }
        ],
        correctOptionId: "2",
        explanationEn: "colspan merges adjacent cells horizontally across columns, while rowspan merges cells vertically across rows.",
        explanationSi: "colspan ගුණාංගය මගින් තිරස් අතට තීරු ඒකාබද්ධ කරන අතර, rowspan මගින් සිරස් අතට පේළි ඒකාබද්ධ කරයි."
      }
    },
    {
      id: "g11-u5-st-8",
      number: "5.8",
      titleEn: "Forms in HTML",
      titleSi: "HTML ආකෘති පත්‍ර",
      summaryEn: "The <form> element, input types (text, password, radio, checkbox, submit, reset), dropdowns (<select>), and textareas.",
      summarySi: "<form> ටැගය, ආදාන වර්ග (text, password, radio, checkbox, submit, reset), පතන ලැයිස්තු (<select>) සහ බහු-පේළි පෙළ කොටු (<textarea>).",
      blocks: [
        {
          id: "b-g11-u5-8-1",
          en: "* **The `<form>` Element:** Allows users to input, select, and submit data to a backend web server for processing.\n* **Form Container Attributes:**\n  * `action=\"process.php\"`: Destination URL or backend script that processes the form submission.\n  * `method=\"GET|POST\"`: HTTP transmission protocol (`POST` is secure and hides data from the URL, `GET` appends form data in URL parameters).\n* **Core Form Input Controls:**\n  * `<input type=\"text\" name=\"user\">`: Single-line text entry box.\n  * `<input type=\"password\" name=\"pwd\">`: Masked password input (characters replaced with asterisks/bullets).\n  * `<input type=\"radio\" name=\"gender\" value=\"M\">`: Radio button allowing selection of exactly ONE option from a group sharing the same `name`.\n  * `<input type=\"checkbox\" name=\"sub\" value=\"ICT\">`: Checkbox allowing selection of multiple independent options.\n  * `<select name=\"district\"> <option value=\"COL\">Colombo</option> </select>`: Dropdown selection menu.\n  * `<textarea name=\"bio\" rows=\"4\" cols=\"30\"></textarea>`: Multi-line scrollable text input.\n  * `<input type=\"submit\" value=\"Submit\">`: Button that submits form data to the server.\n  * `<input type=\"reset\" value=\"Clear\">`: Button that resets all fields back to default values.",
          si: "* **`<form>` ටැගය:** පරිශීලකයන්ට දත්ත ඇතුළත් කිරීමට සහ එම දත්ත සේවාදායකය (Server) වෙත යැවීමට භාවිත වන ආකෘති පත්‍ර සකස් කරයි.\n* **ආකෘති පත්‍ර ගුණාංග:**\n  * `action=\"process.php\"`: ආකෘති පත්‍රයේ දත්ත යොමු විය යුතු පසුපස වැඩසටහනේ ලිපිනය.\n  * `method=\"POST|GET\"`: දත්ත සම්ප්‍රේෂණය කරන ක්‍රමය (`POST` ක්‍රමය වඩාත් ආරක්ෂිත වන අතර දත්ත URL එකෙහි නොපෙන්වයි).\n* **ප්‍රධාන ආදාන පාලක (Input Controls):**\n  * `<input type=\"text\">`: තනි පේළියේ පෙළ කොටුව.\n  * `<input type=\"password\">`: මුරපද කොටුව (අකුරු වෙනුවට තිත් හෝ තරු ලකුණු පෙනේ).\n  * `<input type=\"radio\">`: එකම `name` එකක් සහිත විකල්ප සමූහයකින් එක් විකල්පයක් පමණක් තේරීමට භාවිත කරන රේඩියෝ බොත්තම.\n  * `<input type=\"checkbox\">`: එකවර විකල්ප කිහිපයක් තෝරා ගැනීමට හැකි පිරික්සුම් කොටුව (Checkbox).\n  * `<select>` සහ `<option>`: පතන ලැයිස්තුව (Dropdown list).\n  * `<textarea>`: පේළි කිහිපයකින් යුත් විශාල පෙළ කොටුව.\n  * `<input type=\"submit\">`: දත්ත සේවාදායකයට යවන බොත්තම (Submit).\n  * `<input type=\"reset\">`: ඇතුළත් කළ දත්ත මකා මුල් තත්ත්වයට පත් කරන බොත්තම (Reset).",
          highlightTerm: "HTML Forms & Input Controls"
        }
      ],
      checkpointQuiz: {
        id: "q-g11-u5-8",
        questionEn: "Which HTML input control allows a user to select only ONE option from a mutually exclusive group of options?",
        questionSi: "විකල්ප සමූහයකින් එකක් පමණක් තෝරා ගැනීමට ඉඩ සලසන HTML ආදාන පාලකය (Input Control) කුමක්ද?",
        options: [
          {
            id: "1",
            en: "<input type=\"radio\">",
            si: "<input type=\"radio\">"
          },
          {
            id: "2",
            en: "<input type=\"checkbox\">",
            si: "<input type=\"checkbox\">"
          },
          {
            id: "3",
            en: "<input type=\"text\">",
            si: "<input type=\"text\">"
          },
          {
            id: "4",
            en: "<input type=\"submit\">",
            si: "<input type=\"submit\">"
          }
        ],
        correctOptionId: "1",
        explanationEn: "Radio buttons (<input type=\"radio\">) sharing the same name attribute ensure mutually exclusive selection where only one option can be selected at a time.",
        explanationSi: "එකම name ගුණාංගය සහිත Radio බොත්තම් (<input type=\"radio\">) සමූහයකින් එකවර තෝරාගත හැක්කේ එක් විකල්පයක් පමණි."
      }
    },
    {
      id: "g11-u5-st-9",
      number: "5.9",
      titleEn: "Web Authoring Tools & Editors",
      titleSi: "වෙබ් අඩවි නිර්මාණ මෘදුකාංග සහ සංස්කාරක",
      summaryEn: "Classification of web authoring tools: Text editors (Notepad, Notepad++) vs WYSIWYG editors (KompoZer, Dreamweaver).",
      summarySi: "වෙබ් නිර්මාණ මෘදුකාංග වර්ගීකරණය: පෙළ සංස්කාරක (Notepad, Notepad++) සහ WYSIWYG සංස්කාරක (KompoZer, Dreamweaver).",
      blocks: [
        {
          id: "b-g11-u5-9-1",
          en: "* **Classification of Web Editors:**\n  * **1. Text Editors (පෙළ සංස්කාරක - Manual Coding):**\n    * Lightweight plain-text editors requiring developers to manually type all raw HTML tags and code syntax.\n    * Provides deep code control, minimal system resource usage, and lightweight files.\n    * *Examples:* Notepad (Windows), TextEdit (macOS - Plain Text mode), Gedit (Linux), Notepad++.\n  * **2. WYSIWYG Editors (\"What You See Is What You Get\"):**\n    * Visual graphical user interfaces where developers place text, images, and tables visually like a word processor.\n    * The software automatically generates underlying HTML and CSS source code in the background.\n    * Fast for prototyping, but generated code can be bloated.\n    * *Examples:* KompoZer, Adobe Dreamweaver, Microsoft Expression Web, BlueGriffon.",
          si: "* **වෙබ් සංස්කාරක වර්ගීකරණය:**\n  * **1. පෙළ සංස්කාරක (Text Editors - සෘජු කේත ලිවීම):**\n    * HTML ටැග් සහ කේත අතින් ටයිප් කිරීමට අවශ්‍ය වන සරල පෙළ සංස්කාරක වේ.\n    * කේතය පිළිබඳ පූර්ණ පාලනයක් නිර්මාණකරුට ලැබෙන අතර පරිගණක මතකය අඩුවෙන් භාවිත වේ.\n    * *උදාහරණ:* Notepad (Windows), TextEdit (macOS), Gedit (Linux), Notepad++.\n  * **2. WYSIWYG සංස්කාරක (\"What You See Is What You Get\" - ප්‍රදර්ශනය වන දේම ලැබෙන සංස්කාරක):**\n    * වර්ඩ් ප්‍රොසෙසරයක මෙන් දෘශ්‍යමාන අතුරුමුහුණතක් මත පෙළ සහ පින්තූර සැකසූ විට, මෘදුකාංගය විසින් පසුබිමින් ස්වයංක්‍රීයව HTML කේත ජනනය කරයි.\n    * කේත කටපාඩම් නොකර ඉක්මනින් වෙබ් පිටු නිර්මාණය කිරීමට පහසුය.\n    * *උදාහරණ:* KompoZer, Adobe Dreamweaver, Microsoft Expression Web.",
          highlightTerm: "Text Editors vs WYSIWYG Web Authoring Tools"
        }
      ],
      checkpointQuiz: {
        id: "q-g11-u5-9",
        questionEn: "What is the key advantage of a WYSIWYG (What You See Is What You Get) web editor over a traditional plain text editor?",
        questionSi: "සාම්ප්‍රදායික සරල පෙළ සංස්කාරකයකට වඩා WYSIWYG වෙබ් සංස්කාරකයක (උදා: KompoZer) ඇති ප්‍රධාන වාසිය කුමක්ද?",
        options: [
          {
            id: "1",
            en: "It allows users to design web pages visually while automatically generating the underlying HTML code in the background.",
            si: "පසුබිමින් ස්වයංක්‍රීයව HTML කේත ජනනය කරමින්, වෙබ් පිටු දෘශ්‍යමාන ලෙස නිර්මාණය කිරීමට පරිශීලකයාට ඉඩ ලබා දීම."
          },
          {
            id: "2",
            en: "It requires developers to write pure machine language binary code (0s and 1s) directly.",
            si: "සංවර්ධකයාට සෘජුවම ද්විමය කේත (0 සහ 1) ලිවීමට අනිවාර්ය කිරීම."
          },
          {
            id: "3",
            en: "It completely eliminates the need for internet browsers to display web pages.",
            si: "වෙබ් පිටු ප්‍රදර්ශනය කිරීම සඳහා වෙබ් බ්‍රවුසර අවශ්‍යතාව සම්පූර්ණයෙන්ම ඉවත් කිරීම."
          },
          {
            id: "4",
            en: "It restricts web page styling to black and white monochrome displays only.",
            si: "වෙබ් පිටු කළු සහ සුදු ඒකවර්ණ ලෙස පමණක් නිර්මාණය කිරීමට සීමා කිරීම."
          }
        ],
        correctOptionId: "1",
        explanationEn: "WYSIWYG editors like KompoZer enable visual layout and design without manually coding every tag, generating standard HTML code automatically.",
        explanationSi: "WYSIWYG සංස්කාරක මගින් සෑම ටැගයක්ම අතින් නොලියා දෘශ්‍යමාන අතුරුමුහුණතක් ඔස්සේ නිර්මාණය කිරීමට හැකි අතර පසුබිමින් කේතය ස්වයංක්‍රීයව ජනනය වේ."
      }
    }
  ],
  pastPaperQuestions: [
    {
      id: "pp-g11-u5-2020-1",
      year: 2020,
      paperType: "Paper I",
      badgeText: "2020 O/L Paper I - Question 21",
      questionEn: "Which of the following HTML tags is used to insert a line break on a web page?",
      questionSi: "වෙබ් පිටුවක පේළි කැඩීමක් (line break) ඇතුළත් කිරීමට භාවිත වන HTML ටැගය කුමක්ද?",
      type: "mcq",
      options: [
        { id: "1", en: "<br>", si: "<br>" },
        { id: "2", en: "<lb>", si: "<lb>" },
        { id: "3", en: "<p>", si: "<p>" },
        { id: "4", en: "<hr>", si: "<hr>" }
      ],
      correctOptionId: "1",
      explanationEn: "The <br> tag is an empty tag that forces a line break without paragraph spacing.",
      explanationSi: "<br> යනු ඡේද පරතරයක් නොතබා පේළියක් කැඩීම සඳහා භාවිත වන හිස් (Empty) ටැගයයි."
    },
    {
      id: "pp-g11-u5-2020-2",
      year: 2020,
      paperType: "Paper II",
      badgeText: "2020 O/L Paper II - Question 05",
      questionEn: "5. Consider the following HTML code snippet intended to display a table on a web page:\n```html\n<table border=\"1\">\n    <tr>\n        <th>ID</th>\n        <th>Name</th>\n    </tr>\n    <tr>\n        <td>101</td>\n        <td>Nimal</td>\n    </tr>\n</table>\n```\n(i) How many rows and columns are present in the above table?\n(ii) Write down the HTML tag used to define a header cell in a table.\n(iii) Write down the HTML code to insert an image named `photo.jpg` into a web page with width 200 pixels.",
      questionSi: "5. වෙබ් පිටුවක වගුවක් දර්ශනය කිරීම සඳහා සකස් කරන ලද පහත HTML කේත ඛණ්ඩය සලකා බලන්න:\n```html\n<table border=\"1\">\n    <tr>\n        <th>ID</th>\n        <th>Name</th>\n    </tr>\n    <tr>\n        <td>101</td>\n        <td>Nimal</td>\n    </tr>\n</table>\n```\n(i) ඉහත වගුවේ ඇති පේළි (rows) සහ තීරු (columns) ගණන කෙතෙක්ද?\n(ii) වගුවක ශීර්ෂ සෛලයක් අර්ථ දැක්වීමට භාවිත කරන HTML ටැගය ලියන්න.\n(iii) පළල පික්සල 200ක් වූ `photo.jpg` නමැති රූපය වෙබ් පිටුවකට ඇතුළත් කිරීමට අදාළ HTML කේතය ලියන්න.",
      type: "structured",
      sampleAnswerEn: "(i) Rows = 2, Columns = 2\n(ii) <th>\n(iii) <img src=\"photo.jpg\" width=\"200\">",
      sampleAnswerSi: "(i) පේළි (Rows) = 2, තීරු (Columns) = 2\n(ii) <th>\n(iii) <img src=\"photo.jpg\" width=\"200\">",
      explanationEn: "Official marking criteria for table structure and image insertion syntax.",
      explanationSi: "HTML වගු ව්‍යුහය සහ රූප ඇතුළත් කිරීමේ කේත සඳහා නිල ලකුණු දීමේ පිළිතුරු."
    },
    {
      id: "pp-g11-u5-2021-3",
      year: 2021,
      paperType: "Paper I",
      badgeText: "2021 O/L Paper I - Question 22",
      questionEn: "Which HTML attribute is used to merge two or more adjacent columns in a table?",
      questionSi: "වගුවක ආසන්න තීරු දෙකක් හෝ කිහිපයක් එකට ඒකාබද්ධ කිරීමට භාවිත කරන HTML ගුණාංගය (attribute) කුමක්ද?",
      type: "mcq",
      options: [
        { id: "1", en: "rowspan", si: "rowspan" },
        { id: "2", en: "colspan", si: "colspan" },
        { id: "3", en: "cellspacing", si: "cellspacing" },
        { id: "4", en: "cellpadding", si: "cellpadding" }
      ],
      correctOptionId: "2",
      explanationEn: "The colspan attribute merges multiple adjacent columns horizontally.",
      explanationSi: "colspan ගුණාංගය මගින් තිරස් අතට තීරු කිහිපයක් එකට ඒකාබද්ධ කරයි."
    },
    {
      id: "pp-g11-u5-2022-4",
      year: 2022,
      paperType: "Paper II",
      badgeText: "2022 O/L Paper II - Question 05 (b)",
      questionEn: "5. (b) Write HTML tags/code for the following requirements:\n(i) Create an unordered list with square bullet points containing 'Apple' and 'Mango'.\n(ii) Create a hyperlink text 'MOE' linking to `https://www.moe.gov.lk`.",
      questionSi: "5. (b) පහත සඳහන් අවශ්‍යතාවලට අදාළ HTML ටැග්/කේත ලියන්න:\n(i) 'Apple' සහ 'Mango' අඩංගු කොටු (square) සලකුණු සහිත අනංකිත ලැයිස්තුවක් සෑදීම.\n(ii) `https://www.moe.gov.lk` වෙත සම්බන්ධ වන 'MOE' නමැති හයිපර්ලින්ක් පෙළ සෑදීම.",
      type: "structured",
      sampleAnswerEn: "(i)\n```html\n<ul type=\"square\">\n    <li>Apple</li>\n    <li>Mango</li>\n</ul>\n```\n(ii) `<a href=\"https://www.moe.gov.lk\">MOE</a>`",
      sampleAnswerSi: "(i)\n```html\n<ul type=\"square\">\n    <li>Apple</li>\n    <li>Mango</li>\n</ul>\n```\n(ii) `<a href=\"https://www.moe.gov.lk\">MOE</a>`",
      explanationEn: "Official marking scheme for unordered list with square type attribute and anchor tag href.",
      explanationSi: "කොටු බුලට් සහිත අනංකිත ලැයිස්තු සහ ඇන්කර් ටැගය මගින් හයිපර්ලින්ක් සෑදීමේ නිල පිළිතුරු."
    },
    {
      id: "pp-g11-u5-2023-5",
      year: 2023,
      paperType: "Paper II",
      badgeText: "2023 O/L Paper II - Question 05 (c)",
      questionEn: "5. (c) Write the HTML code to generate the following table structure:\n| Subject | Grade |\n| ICT | A |",
      questionSi: "5. (c) පහත දැක්වෙන වගු ව්‍යුහය ජනනය කිරීම සඳහා අදාළ HTML කේතය ලියන්න:\n| Subject | Grade |\n| ICT | A |",
      type: "structured",
      sampleAnswerEn: "```html\n<table border=\"1\">\n    <tr>\n        <th>Subject</th>\n        <th>Grade</th>\n    </tr>\n    <tr>\n        <td>ICT</td>\n        <td>A</td>\n    </tr>\n</table>\n```",
      sampleAnswerSi: "```html\n<table border=\"1\">\n    <tr>\n        <th>Subject</th>\n        <th>Grade</th>\n    </tr>\n    <tr>\n        <td>ICT</td>\n        <td>A</td>\n    </tr>\n</table>\n```",
      explanationEn: "Standard table code using border attribute, tr for rows, th for headers, and td for data cells.",
      explanationSi: "border, tr, th, සහ td ටැග් භාවිතයෙන් සම්මත වගුවක් නිර්මාණය කිරීමේ නිල පිළිතුර."
    },
    {
      id: "pp-g11-u5-2024-6",
      year: 2024,
      paperType: "Paper II",
      badgeText: "2024 O/L Paper II - Question 05 (b)",
      questionEn: "5. (b) Identify whether the following HTML tags are Container Tags or Empty Tags:\n(i) `<img>`   (ii) `<p>`   (iii) `<br>`   (iv) `<a>`",
      questionSi: "5. (b) පහත දක්වා ඇති HTML ටැග් කන්ටේනර් ටැග් (Container Tags) ද නැතහොත් හිස් ටැග් (Empty Tags) ද යන්න හඳුනාගන්න:\n(i) `<img>`   (ii) `<p>`   (iii) `<br>`   (iv) `<a>`",
      type: "structured",
      sampleAnswerEn: "(i) <img>: Empty Tag\n(ii) <p>: Container Tag\n(iii) <br>: Empty Tag\n(iv) <a>: Container Tag",
      sampleAnswerSi: "(i) <img>: හිස් ටැගයකි (Empty Tag)\n(ii) <p>: කන්ටේනර් ටැගයකි (Container Tag)\n(iii) <br>: හිස් ටැගයකි (Empty Tag)\n(iv) <a>: කන්ටේනර් ටැගයකි (Container Tag)",
      explanationEn: "Container tags require opening and closing pairs, whereas Empty tags are self-contained with no closing tag.",
      explanationSi: "කන්ටේනර් ටැග් සඳහා ආරම්භක හා අවසාන ටැග් යුගලක් අවශ්‍ය වන අතර, හිස් ටැග් සඳහා වැසීමේ ටැග් නොමැත."
    },
    {
      id: "pp-g11-u5-2025-7",
      year: 2025,
      paperType: "Paper II",
      badgeText: "2025 O/L Paper II - Question 05 (b)",
      questionEn: "5. (b) Write down the HTML tag and attributes used to display the text 'GCE O/L ICT' in Red color and Arial font style.",
      questionSi: "5. (b) 'GCE O/L ICT' යන පෙළ රතු (Red) පැහැයෙන් සහ Arial අකුරු විලාසයෙන් දර්ශනය කිරීම සඳහා භාවිත වන HTML ටැගය සහ ගුණාංග ලියන්න.",
      type: "structured",
      sampleAnswerEn: "<font color=\"red\" face=\"Arial\">GCE O/L ICT</font>",
      sampleAnswerSi: "<font color=\"red\" face=\"Arial\">GCE O/L ICT</font>",
      explanationEn: "The <font> tag utilizes the 'color' attribute for text color and 'face' for font typeface family.",
      explanationSi: "<font> ටැගයේ color=\"red\" මගින් රතු පැහැයද face=\"Arial\" මගින් අකුරු විලාසයද නියම කෙරේ."
    }
  ]
};
