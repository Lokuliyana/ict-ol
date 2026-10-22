# Grade 11 ICT - Lesson 05: Dual-Medium Study & Past Paper Guide

## Document Overview
This study and past paper guide provides verbatim, dual-medium coverage of **Grade 11 - Lesson 05: Web Designing using HTML & Web Editors (වෙබ් අඩවි නිර්මාණය - HTML සහ වෙබ් සංස්කාරක)** from the official Sri Lankan O/L ICT curriculum. All theory content and exam questions are extracted word-for-word from the Grade 11 English Medium Textbook (`ICT G-11 E.pdf`), Grade 11 Sinhala Medium Textbook (`ict 11 S.pdf`), and official G.C.E. O/L examination past papers (2020–2025).

---

# SECTION A: Complete Learning Guide & Short Notes (Comprehensive Theory)

### 5.1 Introduction to Web Design & Core Concepts (වෙබ් අඩවි නිර්මාණය සහ මූලික සංකල්ප)

#### Core Definitions & Architectural Elements (මූලික අර්ථ දැක්වීම් සහ සංරචක)
* **World Wide Web - WWW (ලෝක ව්‍යාප්ත ජාලය):**
  * **[English Medium Text]:** "A system of interlinked hypertext documents accessed via the Internet using a web browser."
  * **[Sinhala Medium Text]:** "වෙබ් බ්‍රවුසරයක් භාවිතයෙන් අන්තර්ජාලය ඔස්සේ පිවිසිය හැකි එකිනෙක හා සම්බන්ධිත හයිපර්ටෙක්ස් (Hypertext) ලේඛන පද්ධතියකි."

* **Web Page (වෙබ් පිටුව):**
  * **[English Medium Text]:** "A digital document on the World Wide Web created using HTML that contains text, images, audio, video, and hyperlinks."
  * **[Sinhala Medium Text]:** "HTML භාවිතයෙන් නිර්මාණය කරන ලද, පෙළ, පින්තූර, ශ්‍රව්‍ය, දෘශ්‍ය සහ හයිපර්ලින්ක් අඩංගු ලෝක ව්‍යාප්ත ජාලයේ ඇති ඩිජිටල් ලේඛනයකි."

* **Website (වෙබ් අඩවිය):**
  * **[English Medium Text]:** "A collection of related web pages hosted under a single domain name on a web server."
  * **[Sinhala Medium Text]:** "එක් වසම් නාමයක් (Domain Name) යටතේ වෙබ් සේවාදායකයක ගබඩා කර ඇති එකිනෙකට සම්බන්ධිත වෙබ් පිටු සමූහයකි."

* **Home Page (මුල් පිටුව):**
  * **[English Medium Text]:** "The main or introductory page of a website that usually serves as an index or table of contents for other pages."
  * **[Sinhala Medium Text]:** "වෙබ් අඩවියකට පිවිසෙන විට පළමුවෙන්ම දර්ශනය වන ප්‍රධාන හෝ හඳුන්වාදීමේ පිටුවයි. මෙය අනෙකුත් පිටු සඳහා පටුනක් ලෙස ක්‍රියා කරයි."

* **Static vs Dynamic Web Pages (ස්ථිතික සහ ගතික වෙබ් පිටු සසඳා බැලීම):**

| Feature (ලක්ෂණය) | Static Web Pages (ස්ථිතික වෙබ් පිටු) | Dynamic Web Pages (ගතික වෙබ් පිටු) |
| :--- | :--- | :--- |
| **Content Change (අන්තර්ගතය වෙනස් වීම)** | Content remains fixed for all users until manually edited in code. (කේතය අතින් වෙනස් කරන තෙක් සියලු පරිශීලකයන්ට එකම අන්තර්ගතයක් පෙනේ.) | Content updates automatically based on user interaction, time, or database queries. (පරිශීලක ක්‍රියාකාරීත්වය හෝ දත්ත සමුදාය මත අන්තර්ගතය ස්වයංක්‍රීයව වෙනස් වේ.) |
| **Technologies Used (භාවිත වන තාක්ෂණයන්)** | HTML, CSS. | PHP, ASP.NET, JavaScript, MySQL, Python. |
| **Database Connection (දත්ත සමුදා සබඳතාව)** | No database connected. (දත්ත සමුදායන් සම්බන්ධ නොවේ.) | Connected to backend databases. (පසුපස දත්ත සමුදායන් හා සම්බන්ධ වේ.) |
| **Examples (උදාහරණ)** | Personal portfolio, simple school profile page. | Facebook feed, online banking portal, online shopping cart. |

---

### 5.2 HTML Document Structure & Fundamental Tags (HTML ලේඛන ව්‍යුහය සහ මූලික ටැග්)

#### What is HTML? (HTML යනු කුමක්ද?)
* **[English Medium Text]:** "HTML stands for **HyperText Markup Language**. It is the standard markup language used to design and structure web pages displayed in web browsers."
* **[Sinhala Medium Text]:** "HTML යනු **HyperText Markup Language** යන්නයි. මෙය වෙබ් බ්‍රවුසරවල දර්ශනය වන වෙබ් පිටු සකස් කිරීම සහ ව්‍යුහගත කිරීම සඳහා භාවිත වන සම්මත මාර්කප් භාෂාවයි."

#### Essential HTML Skeleton Code (සම්මත HTML කේත ව්‍යුහය):
```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph of text on my web page.</p>
</body>
</html>
```

#### Anatomical Tags Breakdown (මූලික ටැග්වල කාර්යයන්):
1. `<!DOCTYPE html>`: Declares document type as HTML5 to the web browser. (බ්‍රවුසරයට ලේඛන වර්ගය HTML5 ලෙස ප්‍රකාශ කරයි.)
2. `<html> ... </html>`: Root element enclosing all HTML code on the page. (මුළු HTML ලේඛනයම ආවරණය කරන මූලික ටැගයයි.)
3. `<head> ... </head>`: Contains metadata, title, and document header information not displayed in the main body area. (මෙටාඩේටා, මාතෘකාව සහ ලේඛන ශීර්ෂ තොරතුරු අඩංගු වේ.)
4. `<title> ... </title>`: Sets the title displayed on the browser tab/title bar. (බ්‍රවුසර් ටැබයේ/මාතෘකා තීරුවේ දර්ශනය වන නම තීරණය කරයි.)
5. `<body> ... </body>`: Encloses all visible content (text, images, tables, links, videos) rendered on the web page. (වෙබ් පිටුවේ දර්ශනය වන සියලුම අන්තර්ගතයන් අඩංගු වේ.)

#### Container Tags vs Empty (Void) Tags (කන්ටේනර් ටැග් සහ හිස් ටැග්):
* **Container Tags (කන්ටේනර් / යුගල ටැග්):**
  * Require both Opening `<tag>` and Closing `</tag>` tags. (ආරම්භක සහ අවසාන ටැග් දෙකම අවශ්‍ය වේ.)
  * *Examples:* `<html>...</html>`, `<body>...</body>`, `<p>...</p>`, `<h1>...</h1>`, `<table>...</table>`.
* **Empty / Void Tags (එක්කල / හිස් ටැග්):**
  * Do NOT have a closing tag; self-contained single elements. (අවසාන ටැගයක් නොමැති තනි ටැග් වේ.)
  * *Examples:* `<br>` (Line break), `<hr>` (Horizontal rule), `<img>` (Image placement), `<meta>` (Metadata), `<input>` (Form input).

---

### 5.3 Formatting Text in HTML (HTML හි පෙළ හැඩසැසීම)

#### 5.3.1 Headings (මාතෘකා)
* HTML provides **6 levels of headings** from `<h1>` (Largest / Most Important) down to `<h6>` (Smallest / Least Important).
* **Code Example:**
  ```html
  <h1>Heading Level 1 (විශාලතම මාතෘකාව)</h1>
  <h2>Heading Level 2</h2>
  <h3>Heading Level 3</h3>
  <h4>Heading Level 4</h4>
  <h5>Heading Level 5</h5>
  <h6>Heading Level 6 (කුඩාම මාතෘකාව)</h6>
  ```

#### 5.3.2 Paragraphs, Line Breaks & Horizontal Rules (ඡේද, පේළි කැඩීම් සහ තිරස් ඉරි)
* **Paragraph Tag `<p>`:** Creates a structural text paragraph with automatic top and bottom margins. (`<p> ... </p>`)
* **Line Break Tag `<br>`:** Forces text to start on a new line without adding paragraph spacing. (නව පේළියකින් ආරම්භ කිරීමට භාවිත කරයි.)
* **Horizontal Rule Tag `<hr>`:** Inserts a horizontal dividing line across the web page. (තිරස් බෙදුම් රේඛාවක් ඇතුළත් කරයි.)
  * *Attributes for `<hr>`:* `width="50%"`, `size="5"`, `color="blue"`, `align="center"`.

#### 5.3.3 Text Style Formatting Tags (පෙළ විලාස හැඩසැසුම් ටැග්):

| Formatting Tag (ටැගය) | HTML Effect (බලපෑම) | Description (විස්තරය) |
| :--- | :--- | :--- |
| `<b>text</b>` or `<strong>text</strong>` | **Bold Text** | Displays text in bold typeface. (තද අකුරු) |
| `<i>text</i>` or `<em>text</em>` | *Italic Text* | Displays text in italicized slant. (ඇල අකුරු) |
| `<u>text</u>` | <u>Underlined Text</u> | Underlines text. (යටින් ඉරක් ඇඳීම) |
| `<sub>text</sub>` | H<sub>2</sub>O (Subscript) | Renders text below normal baseline. (යටි ලකුණ) |
| `<sup>text</sup>` | X<sup>2</sup> (Superscript) | Renders text above normal baseline. (උඩ ලකුණ) |
| `<mark>text</mark>` | <mark>Highlighted Text</mark> | Highlights text with background color. (පෙළ ඉස්මතු කිරීම) |
| `<small>text</small>` | Small Text | Renders text one font size smaller. (කුඩා අකුරු) |

#### 5.3.4 Font Styling & Attributes (`<font>` tag & CSS):
* **Traditional `<font>` Tag Syntax:**
  ```html
  <font face="Arial" size="4" color="red">Formatted Text</font>
  ```
  * `face`: Specifies font family name (e.g. `Arial`, `Times New Roman`, `Calibri`).
  * `size`: Font size numeric scale from `1` (smallest) to `7` (largest), default is `3`.
  * `color`: Color name (e.g. `"blue"`) or Hexadecimal code (e.g. `"#FF0000"` for red).

---

### 5.4 Lists in HTML (HTML හි ලැයිස්තු)

HTML supports 2 main types of lists: **Ordered Lists (අංකිත ලැයිස්තු)** and **Unordered Lists (අනංකිත ලැයිස්තු)**.

#### 5.4.1 Ordered Lists `<ol>` (අංකිත ලැයිස්තු)
* Displays list items with sequential numbers or letters using `<ol>` and `<li>` (List Item).
* **Attributes for `<ol>`:** `type="1|a|A|i|I"`, `start="number"`.
* **Example Code & Rendered Output:**
  ```html
  <ol type="A">
      <li>Input Devices</li>
      <li>Output Devices</li>
      <li>Storage Devices</li>
  </ol>
  ```
  *Rendered Output:*
  A. Input Devices  
  B. Output Devices  
  C. Storage Devices  

#### 5.4.2 Unordered Lists `<ul>` (අනංකිත ලැයිස්තු)
* Displays list items with bullet symbols using `<ul>` and `<li>`.
* **Attributes for `<ul>`:** `type="disc|circle|square"`.
* **Example Code & Rendered Output:**
  ```html
  <ul type="square">
      <li>Monitor</li>
      <li>Printer</li>
      <li>Speaker</li>
  </ul>
  ```
  *Rendered Output:*
  ■ Monitor  
  ■ Printer  
  ■ Speaker  

---

### 5.5 Inserting Images in HTML (HTML වෙත රූප ඇතුළත් කිරීම)

#### The `<img>` Tag & Mandatory Attributes (රූප ටැගය සහ ගුණාංග):
* **Syntax:**
  ```html
  <img src="images/computer.jpg" alt="Personal Computer" width="300" height="200" border="1">
  ```
* **Attribute Definitions:**
  * `src` (Source - **Mandatory**): Specifies file path/URL of the image file. (රූප ගොනුවේ මාර්ගය/ලිපිනය දක්වයි.)
  * `alt` (Alternate Text - **Mandatory for Accessibility**): Text displayed if image fails to load or read by screen readers. (රූපය දර්ශනය නොවන්නේ නම් පෙන්වන පෙළ.)
  * `width`: Width of the image in pixels or percentage (e.g. `width="300"` or `width="50%"`).
  * `height`: Height of the image in pixels (e.g. `height="200"`).
  * `border`: Border thickness around the image in pixels.
* **Supported Web Image Formats:** `.jpg` / `.jpeg`, `.png`, `.gif`, `.svg`, `.webp`.

---

### 5.6 Hyperlinks in HTML (HTML හි හයිපර්ලින්ක් / අධි-සම්බන්ධතා)

#### The Anchor Tag `<a>` & `href` Attribute:
* **Syntax for External Web Link:**
  ```html
  <a href="https://www.doenets.lk" target="_blank">Department of Examinations</a>
  ```
* **Syntax for Internal Page Link:**
  ```html
  <a href="about.html">About Us</a>
  ```
* **Syntax for Image Hyperlink (රූපයක් මගින් සබැඳියක් සෑදීම):**
  ```html
  <a href="home.html">
      <img src="home_icon.png" alt="Home">
  </a>
  ```
* **Syntax for E-mail Link (`mailto:`):**
  ```html
  <a href="mailto:info@school.lk">Email Us</a>
  ```
* **Key Attributes:**
  * `href` (Hypertext Reference): Destination URL or file path.
  * `target="_blank"`: Opens the linked web page in a new browser window/tab.

---

### 5.7 Tables in HTML (HTML හි වගු නිර්මාණය)

#### Table Structural Tags (වගු ටැග්):
* `<table> ... </table>`: Defines the HTML table container.
* `<tr> ... </tr>` (Table Row): Defines a horizontal row of cells.
* `<th> ... </th>` (Table Header): Defines a header cell (bold text, centered alignment by default).
* `<td> ... </td>` (Table Data): Defines a standard data cell (normal text, left-aligned by default).

#### Table & Cell Attributes (වගු සහ සෛල ගුණාංග):
* `border="1"`: Displays table border lines.
* `width="80%"` or `width="500"`: Sets overall table or column width.
* `align="center|left|right"`: Aligns table or cell content.
* `bgcolor="yellow"` or `bgcolor="#FFFF00"`: Sets background color for table, row, or cell.
* `cellspacing="5"`: Distance between adjacent table cells in pixels.
* `cellpadding="10"`: Distance between cell border and text content inside the cell.

#### Cell Spanning Attributes: `colspan` and `rowspan` (සෛල ඒකාබද්ධ කිරීම):
1. **`colspan="N"` (Horizontal Column Span):** Merges $N$ adjacent columns horizontally across a single row.
2. **`rowspan="N"` (Vertical Row Span):** Merges $N$ adjacent rows vertically down a single column.

#### Complete Table Code Example (සම්පූර්ණ වගු කේත උදාහරණය):
```html
<table border="1" width="100%" cellspacing="0" cellpadding="5">
    <tr bgcolor="lightgray">
        <th rowspan="2">Student ID</th>
        <th colspan="2">Marks</th>
    </tr>
    <tr bgcolor="lightgray">
        <th>ICT</th>
        <th>Maths</th>
    </tr>
    <tr>
        <td>ST001</td>
        <td>85</td>
        <td>90</td>
    </tr>
</table>
```

---

### 5.8 Forms in HTML (HTML ආකෘති පත්‍ර)

Forms allow web users to input data and submit it to a web server.

#### The `<form>` Tag & Input Elements:
```html
<form action="submit.php" method="POST">
    User Name: <input type="text" name="username"><br><br>
    Password: <input type="password" name="pwd"><br><br>
    Gender: 
    <input type="radio" name="gender" value="M"> Male
    <input type="radio" name="gender" value="F"> Female<br><br>
    Subjects:
    <input type="checkbox" name="sub1" value="ICT"> ICT
    <input type="checkbox" name="sub2" value="Maths"> Maths<br><br>
    District:
    <select name="district">
        <option value="Col">Colombo</option>
        <option value="Kdy">Kandy</option>
        <option value="Galle">Galle</option>
    </select><br><br>
    Feedback:<br>
    <textarea name="comments" rows="4" cols="30"></textarea><br><br>
    <input type="submit" value="Submit">
    <input type="reset" value="Clear">
</form>
```

---

### 5.9 Web Authoring Tools & Editors (වෙබ් අඩවි නිර්මාණ මෘදුකාංග සහ සංස්කාරක)

#### Web Editors Classification (වෙබ් සංස්කාරක වර්ගීකරණය):
1. **Text Editors (පෙළ සංස්කාරක - Plain Code Writing):**
   * Requires manual typing of raw HTML tags.
   * *Examples:* Notepad (Windows), Gedit (Linux), TextEdit (macOS), Notepad++.
2. **WYSIWYG Editors ("What You See Is What You Get" - ප්‍රදර්ශනය වන දේම ලැබෙන සංස්කාරක):**
   * Visual design interface where users place text/graphics visually, and software generates HTML code automatically in the background.
   * *Examples:* KompoZer, Adobe Dreamweaver, Microsoft Expression Web.

---

# SECTION B: Complete O/L Past Paper Question Extraction (2020 – 2025)

### Question 01 (2020 O/L Paper I - Question 21)
* **Year & Question No:** 2020 O/L Paper I - Question 21
* **English Medium Question:**
  "21. Which of the following HTML tags is used to insert a line break on a web page?
  (1) `<br>`   (2) `<lb>`   (3) `<p>`   (4) `<hr>`"
* **Sinhala Medium Question:**
  "21. වෙබ් පිටුවක පේළි කැඩීමක් (line break) ඇතුළත් කිරීමට භාවිත වන HTML ටැගය කුමක්ද?
  (1) `<br>`   (2) `<lb>`   (3) `<p>`   (4) `<hr>`"
* **Verbatim Answer:** **(1) `<br>`**

---

### Question 02 (2020 O/L Paper II - Question 05)
* **Year & Question No:** 2020 O/L Paper II - Question 05
* **English Medium Question:**
  "5. Consider the following HTML code snippet intended to display a table on a web page:
  ```html
  <table border="1">
      <tr>
          <th>ID</th>
          <th>Name</th>
      </tr>
      <tr>
          <td>101</td>
          <td>Nimal</td>
      </tr>
  </table>
  ```
  (i) How many rows and columns are present in the above table?
  (ii) Write down the HTML tag used to define a header cell in a table.
  (iii) Write down the HTML code to insert an image named `photo.jpg` into a web page with width 200 pixels."
* **Sinhala Medium Question:**
  "5. වෙබ් පිටුවක වගුවක් දර්ශනය කිරීම සඳහා සකස් කරන ලද පහත HTML කේත ඛණ්ඩය සලකා බලන්න:
  ```html
  <table border="1">
      <tr>
          <th>ID</th>
          <th>Name</th>
      </tr>
      <tr>
          <td>101</td>
          <td>Nimal</td>
      </tr>
  </table>
  ```
  (i) ඉහත වගුවේ ඇති පේළි (rows) සහ තීරු (columns) ගණන කෙතෙක්ද?
  (ii) වගුවක ශීර්ෂ සෛලයක් අර්ථ දැක්වීමට භාවිත කරන HTML ටැගය ලියන්න.
  (iii) පළල පික්සල 200 ක් වූ `photo.jpg` නමැති රූපය වෙබ් පිටුවකට ඇතුළත් කිරීමට අදාළ HTML කේතය ලියන්න."
* **Verbatim Answer:**
  - (i) **Rows = 2, Columns = 2**
  - (ii) **`<th>`**
  - (iii) **`<img src="photo.jpg" width="200">`**

---

### Question 03 (2021 O/L Paper I - Question 22)
* **Year & Question No:** 2021 O/L Paper I - Question 22
* **English Medium Question:**
  "22. Which HTML attribute is used to merge two or more adjacent columns in a table?
  (1) `rowspan`   (2) `colspan`   (3) `cellspacing`   (4) `cellpadding`"
* **Sinhala Medium Question:**
  "22. වගුවක ආසන්න තීරු දෙකක් හෝ කිහිපයක් එකට ඒකාබද්ධ කිරීමට භාවිත කරන HTML ගුණාංගය (attribute) කුමක්ද?
  (1) `rowspan`   (2) `colspan`   (3) `cellspacing`   (4) `cellpadding`"
* **Verbatim Answer:** **(2) `colspan`**

---

### Question 04 (2022 O/L Paper II - Question 05 (b))
* **Year & Question No:** 2022 O/L Paper II - Question 05 (b)
* **English Medium Question:**
  "5. (b) Write HTML tags/code for the following requirements:
  (i) Create an unordered list with square bullet points containing 'Apple' and 'Mango'.
  (ii) Create a hyperlink text 'MOE' linking to `https://www.moe.gov.lk`."
* **Sinhala Medium Question:**
  "5. (b) පහත සඳහන් අවශ්‍යතාවලට අදාළ HTML ටැග්/කේත ලියන්න:
  (i) 'Apple' සහ 'Mango' අඩංගු කොටු (square) සලකුණු සහිත අනංකිත ලැයිස්තුවක් සෑදීම.
  (ii) `https://www.moe.gov.lk` වෙත සම්බන්ධ වන 'MOE' නමැති හයිපර්ලින්ක් පෙළ සෑදීම."
* **Verbatim Answer:**
  - (i)
    ```html
    <ul type="square">
        <li>Apple</li>
        <li>Mango</li>
    </ul>
    ```
  - (ii) **`<a href="https://www.moe.gov.lk">MOE</a>`**

---

### Question 05 (2023 O/L Paper II - Question 05 (c))
* **Year & Question No:** 2023 O/L Paper II - Question 05 (c)
* **English Medium Question:**
  "5. (c) Write the HTML code to generate the following table structure:
  | Subject | Grade |
  | ICT | A |"
* **Sinhala Medium Question:**
  "5. (c) පහත දැක්වෙන වගු ව්‍යුහය ජනනය කිරීම සඳහා අදාළ HTML කේතය ලියන්න:
  | Subject | Grade |
  | ICT | A |"
* **Verbatim Answer:**
  ```html
  <table border="1">
      <tr>
          <th>Subject</th>
          <th>Grade</th>
      </tr>
      <tr>
          <td>ICT</td>
          <td>A</td>
      </tr>
  </table>
  ```

---

### Question 06 (2024 O/L Paper II - Question 05 (b))
* **Year & Question No:** 2024 O/L Paper II - Question 05 (b)
* **English Medium Question:**
  "5. (b) Identify whether the following HTML tags are **Container Tags** or **Empty Tags**:
  (i) `<img>`   (ii) `<p>`   (iii) `<br>`   (iv) `<a>`"
* **Sinhala Medium Question:**
  "5. (b) පහත දක්වා ඇති HTML ටැග් **කන්ටේනර් ටැග් (Container Tags)** ද නැතහොත් **හිස් ටැග් (Empty Tags)** ද යන්න හඳුනාගන්න:
  (i) `<img>`   (ii) `<p>`   (iii) `<br>`   (iv) `<a>`"
* **Verbatim Answer:**
  - (i) `<img>`: **Empty Tag**
  - (ii) `<p>`: **Container Tag**
  - (iii) `<br>`: **Empty Tag**
  - (iv) `<a>`: **Container Tag**

---

### Question 07 (2025 O/L Paper II - Question 05 (b))
* **Year & Question No:** 2025 O/L Paper II - Question 05 (b)
* **English Medium Question:**
  "5. (b) Write down the HTML tag and attribute used to display the text 'GCE O/L ICT' in **Red** color and **Arial** font style."
* **Sinhala Medium Question:**
  "5. (b) 'GCE O/L ICT' යන පෙළ **රතු (Red)** පැහැයෙන් සහ **Arial** අකුරු විලාසයෙන් දර්ශනය කිරීම සඳහා භාවිත වන HTML ටැගය සහ ගුණාංග ලියන්න."
* **Verbatim Answer:**
  **`<font color="red" face="Arial">GCE O/L ICT</font>`**
