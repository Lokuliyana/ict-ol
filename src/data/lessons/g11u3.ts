// Verbatim dual-medium syllabus data extracted from public/lessons
import { GeneralLessonData } from '../allLessonsData';

export const G11_U3_DATA: GeneralLessonData = {
  "id": "g11-u3",
  "grade": "11",
  "unitNumber": 3,
  "titleEn": "The Internet and Electronic Mail",
  "titleSi": "අන්තර්ජාලය සහ විද්‍යුත් තැපෑල",
  "subtopics": [
    {
      "id": "g11-u3-st-1",
      "number": "3.1",
      "titleEn": "Introduction to the Internet & Network Architecture",
      "titleSi": "අන්තර්ජාලය හැඳින්වීම සහ ජාල ආකෘතිය",
      "summaryEn": "Internet definition (Information Superhighway, Global Village), governance by The Internet Society, Client-Server architecture, downloading vs uploading, and key server types.",
      "summarySi": "අන්තර්ජාලයේ අර්ථ දැක්වීම (තොරතුරු සුපිරි මහා මාර්ගය, ගෝලීය ගම්මානය), අන්තර්ජාල සංගමයේ පාලනය, සේවාලාභී-සේවාදායක ආකෘතිය, බාගත කිරීම හා උඩුගත කිරීම, සහ ප්‍රධාන සේවාදායක වර්ග.",
      "blocks": [
        {
          "id": "b-g11-u3-1-1",
          "en": "What is the Internet?:\nThe Internet is an interconnected global network of computer networks. It is the fastest available way to share information across the global community (Information Superhighway). Through extensive Internet connectivity, the modern world has transformed into an interconnected **Global Village**.\n\n* **Governance & Ethics:**\n  * The Internet possesses no single centralized owner or government authority.\n  * A non-profit international organization called **'The Internet Society' (ISOC)** oversees ethics, policy guidelines, protocols, and technical architecture maintaining operational integrity.",
          "si": "අන්තර්ජාලය යනු කුමක්ද?:\nඅන්තර්ජාලය යනු ලොව පුරා විසිරී ඇති පරිගණක ජාලයන්ගේ එකතුවකි. එය ලෝක ප්‍රජාව සමඟ ක්ෂණිකව තොරතුරු හුවමාරු කර ගැනීමේ වේගවත්ම මාර්ගයයි (**තොරතුරු සුපිරි මහා මාර්ගය - Information Superhighway**). අන්තර්ජාලය නිසා මුළු ලෝකයම එක් කුඩා **ගෝලීය ගම්මානයක් (Global Village)** බවට පත්ව ඇත.\n\n* **පාලනය සහ ආචාරධර්ම:**\n  * අන්තර්ජාලයට තනි පුද්ගල හෝ රාජ්‍ය හිමිකරුවෙකු නොමැත.\n  * **'අන්තර්ජාල සංගමය' (The Internet Society - ISOC)** නමැති ලාභ නොලබන ජාත්‍යන්තර සංවිධානය මඟින් අන්තර්ජාල භාවිතයට අදාළ ආචාරධර්ම, ප්‍රතිපත්ති සහ සම්මත නියමාවලීන් පවත්වාගෙන යනු ලබයි.",
          "highlightTerm": "Internet Concept & Governance"
        },
        {
          "id": "b-g11-u3-1-2",
          "en": "Client-Server Network Architecture:\nThe Internet is a Wide Area Network (WAN) built fundamentally on the **Client-Server Model**.\n\n* **Server Computer (සේවාදායක පරිගණකය):** A high-performance computer that hosts, manages, and distributes resources, files, and services required by client computers.\n* **Client Computer (සේවාලාභී පරිගණකය):** An end-user device (PC, laptop, smartphone) that requests services and resources from a server.\n* **Downloading (බාගත කිරීම):** The process of retrieving data or files from a remote server computer to a local client computer.\n* **Uploading (උඩුගත කිරීම):** The process of sending data or files from a local client computer to a remote server computer.",
          "si": "සේවාලාභී - සේවාදායක ආකෘතිය (Client-Server Architecture):\nඅන්තර්ජාලය යනු පුළුල් ප්‍රදේශ ජාලයක් (WAN) වන අතර එය මූලිකවම **සේවාලාභී - සේවාදායක (Client-Server) ආකෘතිය** මත පදනම්ව ක්‍රියාත්මක වේ.\n\n* **සේවාදායක පරිගණකය (Server):** සේවාලාභී පරිගණක වෙත අවශ්‍ය සම්පත්, වෙබ් පිටු, ගොනු සහ සේවාවන් බෙදා දෙනු ලබන ප්‍රධාන පරිගණකයයි.\n* **සේවාලාභී පරිගණකය (Client):** සේවාදායකයෙන් තොරතුරු හා සේවාවන් ඉල්ලා සිටින පරිශීලක පරිගණකය හෝ ස්මාර්ට් ජංගම දුරකථනයයි.\n* **බාගත කිරීම (Downloading):** සේවාදායක පරිගණකයේ ඇති තොරතුරු හෝ ගොනු සේවාලාභී පරිගණකය වෙත ලබා ගැනීමයි.\n* **උඩුගත කිරීම (Uploading):** සේවාලාභී පරිගණකයේ ඇති තොරතුරු හෝ ගොනු සේවාදායක පරිගණකය වෙත යැවීමයි.",
          "highlightTerm": "Client-Server Architecture"
        },
        {
          "id": "b-g11-u3-1-3",
          "en": "Key Types of Server Computers:\n\n* **Web Server (වෙබ් සේවාදායකය):** Stores web pages, graphics, and HTML documents, serving them to client web browsers upon HTTP/HTTPS request.\n* **Mail Server (විද්‍යුත් තැපැල් සේවාදායකය):** Manages, routes, and stores electronic mail across the Internet using email protocols.\n* **DNS Server (වසම් නාම සේවාදායකය):** Acts like an Internet phonebook, translating human-friendly domain names (e.g., `google.com`) into numerical IP addresses (e.g., `172.217.160.196`).\n* **FTP Server (ගොනු සේවාදායකය):** Dedicated to uploading, downloading, and storing large enterprise data files.",
          "si": "ප්‍රධාන සේවාදායක පරිගණක වර්ග:\n\n* **වෙබ් සේවාදායකය (Web Server):** වෙබ් පිටු සහ අදාළ ගොනු ගබඩා කර තබා ගන්නා අතර, සේවාලාභී වෙබ් අන්වේශක වෙත HTTP ඉල්ලීම් අනුව ඒවා සපයයි.\n* **විද්‍යුත් තැපැල් සේවාදායකය (Mail Server):** අන්තර්ජාලය හරහා විද්‍යුත් තැපැල් පණිවුඩ යැවීම, ලැබීම සහ කළමනාකරණය සිදු කරයි.\n* **වසම් නාම සේවාදායකය (DNS Server):** මිනිසාට හුරුපුරුදු වසම් නාම (Domain Names) පරිගණක එකිනෙක හඳුනාගන්නා සංඛ්‍යාත්මක IP ලිපින බවට පරිවර්තනය කරයි.\n* **ගොනු සේවාදායකය (FTP Server):** විශාල ධාරිතාවකින් යුතු ගොනු ආරක්ෂිතව උඩුගත කිරීමට හා බාගත කිරීමට පහසුකම් සලසයි.",
          "highlightTerm": "Key Server Types"
        }
      ],
      "examples": [
        {
          "id": "ex-11-3-1-1",
          "titleEn": "Client-Server Interaction Diagram",
          "titleSi": "සේවාලාභී-සේවාදායක අන්තර්ක්‍රියා සටහන",
          "contentEn": "Query / Request (ඉල්ලීම)\n   ┌────────────────────────────────────────┐\n   │                                        │\n   ▼                                        │\n┌──────────────┐                       ┌────┴─────────┐\n│ Client PC    │                       │ Server Computer│\n│ (සේවාලාභියා)  ├──────────────────────►│ (සේවාදායකය)  │\n└──────────────┘                       └────┬─────────┘\n   ▲                                        │\n   │       Response / Data (ප්‍රතිචාරය)        │\n   └────────────────────────────────────────┘",
          "contentSi": "Query / Request (ඉල්ලීම)\n   ┌────────────────────────────────────────┐\n   │                                        │\n   ▼                                        │\n┌──────────────┐                       ┌────┴─────────┐\n│ Client PC    │                       │ Server Computer│\n│ (සේවාලාභියා)  ├──────────────────────►│ (සේවාදායකය)  │\n└──────────────┘                       └────┬─────────┘\n   ▲                                        │\n   │       Response / Data (ප්‍රතිචාරය)        │\n   └────────────────────────────────────────┘"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u3-1",
        "questionEn": "What term describes the process of transferring files or data from a remote server computer to a local client computer?",
        "questionSi": "දුරස්ථ සේවාදායක පරිගණකයක ඇති දත්ත හෝ ගොනු සේවාලාභී පරිගණකය වෙත ලබා ගැනීමේ ක්‍රියාවලිය හඳුන්වන්නේ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Downloading",
            "si": "බාගත කිරීම (Downloading)"
          },
          {
            "id": "2",
            "en": "Uploading",
            "si": "උඩුගත කිරීම (Uploading)"
          },
          {
            "id": "3",
            "en": "Streaming",
            "si": "මාධ්‍ය සැපයුම (Streaming)"
          },
          {
            "id": "4",
            "en": "Broadcasting",
            "si": "විකාශනය (Broadcasting)"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "Downloading retrieves resources from a server to a client computer, whereas Uploading transmits files from a client to a server.",
        "explanationSi": "සේවාදායක පරිගණකයේ ඇති ගොනු සේවාලාභී පරිගණකය වෙත ලබා ගැනීම බාගත කිරීම (Downloading) වන අතර සේවාදායකය වෙත යැවීම උඩුගත කිරීම (Uploading) වේ."
      }
    },
    {
      "id": "g11-u3-st-2",
      "number": "3.2",
      "titleEn": "Uniform Resource Locator - URL",
      "titleSi": "එකාකාර සම්පත් නිශ්චායකය",
      "summaryEn": "URL definition, structural breakdown (Protocol, Service, Domain Name, Directory Path, File Name), and Top-Level Domains (gTLD vs ccTLD).",
      "summarySi": "URL හි අර්ථ දැක්වීම, කොටස් ව්‍යුහය (නියමාවලිය, සේවාව, වසම් නාමය, ගොනු පථය, ගොනුවේ නම) සහ ඉහළ මට්ටමේ වසම් (gTLD සහ ccTLD).",
      "blocks": [
        {
          "id": "b-g11-u3-2-1",
          "en": "Concept & Purpose of URL:\nThe system used to uniquely identify and address various resources, web pages, and documents on the World Wide Web is the **Uniform Resource Locator (URL)**.\n\n* Every resource on the Internet has a unique address string specifying the communication protocol and server path to access it.",
          "si": "එකාකාර සම්පත් නිශ්චායකය (URL) පිළිබඳ සංකල්පය:\nලෝක විසිරි වියමනෙහි (WWW) ඇති විවිධ සම්පත්, වෙබ් පිටු සහ ගොනු අනන්‍යව හඳුනා ගැනීමට සහ ඒ වෙත ළඟා වීමට යොදා ගන්නා ලිපින ක්‍රමය **එකාකාර සම්පත් නිශ්චායකය (Uniform Resource Locator - URL)** නම් වේ.\n\n* අන්තර්ජාලයේ ඇති සෑම සම්පතකටම එය ලබාගත හැකි නියමාවලිය සහ සේවාදායකයේ ඇති පිහිටීම දක්වන අනන්‍ය URL ලිපිනයක් ඇත.",
          "highlightTerm": "URL Concept"
        },
        {
          "id": "b-g11-u3-2-2",
          "en": "Structural Breakdown of a URL:\nConsider the sample URL: `http://www.edupub.gov.lk/e-books/english/ict.pdf`\n\n* **1. Protocol (`http://`):** The communication rule governing data transfer (Hypertext Transfer Protocol).\n* **2. Service / Subdomain (`www`):** World Wide Web internet service hosting the content.\n* **3. Domain Name (`edupub.gov.lk`):** Unique human-readable name of the web server hosting the website.\n  * `edupub` = Organization name\n  * `gov` = Category Domain (Government)\n  * `lk` = Country Code Top-Level Domain (Sri Lanka)\n* **4. Directory Path (`/e-books/english/`):** Specific hierarchical folder directory path on the server.\n* **5. File Name (`ict.pdf`):** Specific requested document or resource.",
          "si": "URL එකක කොටස් ව්‍යුහය:\nඋදාහරණ URL එක සලකන්න: `http://www.edupub.gov.lk/e-books/english/ict.pdf`\n\n* **1. නියමාවලිය (`http://`):** දත්ත සන්නිවේදනය සඳහා භාවිත කරන නීති පද්ධතිය (Hypertext Transfer Protocol).\n* **2. සේවාව (`www`):** අන්තර්ජාල සේවාව (World Wide Web).\n* **3. වසම් නාමය (`edupub.gov.lk`):** වෙබ් අඩවිය පිහිටි සේවාදායක පරිගණකයේ අනන්‍ය නාමය.\n  * `edupub` = ආයතනයේ නම\n  * `gov` = කාණ්ඩ වසම (රාජ්‍ය අංශය)\n  * `lk` = රට නිරූපණය කරන ඉහළ මට්ටමේ වසම (ශ්‍රී ලංකාව)\n* **4. ගොනු පථය (`/e-books/english/`):** සේවාදායකයේ ගොනුව තැන්පත් කර ඇති ෆෝල්ඩර මාර්ගය.\n* **5. ගොනුවේ නම (`ict.pdf`):** පරිශීලකයා විසින් ඉල්ලා ඇති නිශ්චිත ගොනුව.",
          "highlightTerm": "URL Anatomy"
        },
        {
          "id": "b-g11-u3-2-3",
          "en": "Top-Level Domains - TLD:\nDomain names end with Top-Level Domains categorized into Generic and Country-Code domains:\n\n* **1. Generic Top-Level Domains (gTLD - සංස්ථාපිත/වර්ගීකෘත වසම්):**\n  * `.com` : Commercial organizations (ව්‍යාපාරික ආයතන)\n  * `.org` : Non-profit organizations (ලාභ නොලබන සංවිධාන)\n  * `.gov` : Government departments and public agencies (රාජ්‍ය ආයතන)\n  * `.edu` / `.ac` : Educational & academic institutions (අධ්‍යාපනික ආයතන)\n  * `.net` : Network infrastructure & ISP services (ජාල සේවා සපයන්නන්)\n\n* **2. Country-Code Top-Level Domains (ccTLD - රටවල් නිරූපණය කරන වසම්):**\n  * `.lk` : Sri Lanka | `.uk` : United Kingdom | `.us` : United States | `.jp` : Japan | `.au` : Australia",
          "si": "ඉහළ මට්ටමේ වසම් (Top-Level Domains - TLD):\nවසම් නාමවල අවසානයට යොදන TLD කොටස් ප්‍රධාන කාණ්ඩ දෙකකට බෙදේ:\n\n* **1. සංස්ථාපිත / වර්ගීකෘත වසම් (gTLD):**\n  * `.com` : ව්‍යාපාරික හා වෙළඳ ආයතන\n  * `.org` : ලාභ නොලබන සංවිධාන\n  * `.gov` : රජයේ අමාත්‍යාංශ හා දෙපාර්තමේන්තු\n  * `.edu` / `.ac` : පාසල්, විශ්වවිද්‍යාල හා අධ්‍යාපනික ආයතන\n  * `.net` : අන්තර්ජාල ජාල යටිතල පහසුකම් සපයන්නන්\n\n* **2. රටවල් නිරූපණය කරන වසම් (ccTLD):**\n  * `.lk` : ශ්‍රී ලංකාව | `.uk` : එක්සත් රාජධානිය | `.us` : ඇමරිකා එක්සත් ජනපදය | `.jp` : ජපානය | `.au` : ඕස්ට්‍රේලියාව",
          "highlightTerm": "Top-Level Domains"
        }
      ],
      "examples": [
        {
          "id": "ex-11-3-2-1",
          "titleEn": "URL Architectural Schema",
          "titleSi": "URL ව්‍යුහාත්මක රූප සටහන",
          "contentEn": "http://  www.  edupub.  gov.  lk /e-books/english/ ict.pdf\n───────  ────  ───────  ────  ── ───────────────── ───────\n   │       │      │      │    │          │            │\n   │       │      │      │    │          │            └── File Name (ගොනුවේ නම)\n   │       │      │      │    │          └────────────── Directory Path (ගොනු පථය)\n   │       │      │      │    └──────────────────────── Top-Level Country Domain (.lk)\n   │       │      │      └───────────────────────────── Category Domain (.gov)\n   │       │      └──────────────────────────────────── Organization Domain (edupub)\n   │       └─────────────────────────────────────────── Service / Subdomain (www)\n   └─────────────────────────────────────────────────── Protocol (නියමාවලිය - http)",
          "contentSi": "http://  www.  edupub.  gov.  lk /e-books/english/ ict.pdf\n───────  ────  ───────  ────  ── ───────────────── ───────\n   │       │      │      │    │          │            │\n   │       │      │      │    │          │            └── File Name (ගොනුවේ නම)\n   │       │      │      │    │          └────────────── Directory Path (ගොනු පථය)\n   │       │      │      │    └──────────────────────── Top-Level Country Domain (.lk)\n   │       │      │      └───────────────────────────── Category Domain (.gov)\n   │       │      └──────────────────────────────────── Organization Domain (edupub)\n   │       └─────────────────────────────────────────── Service / Subdomain (www)\n   └─────────────────────────────────────────────────── Protocol (නියමාවලිය - http)"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u3-2",
        "questionEn": "In the URL `http://www.nie.lk/syllabus/ict.pdf`, which component represents the domain name?",
        "questionSi": "`http://www.nie.lk/syllabus/ict.pdf` යන URL හි වසම් නාමය (Domain Name) නිරූපණය කරන්නේ කවරක්ද?",
        "options": [
          {
            "id": "1",
            "en": "www.nie.lk",
            "si": "www.nie.lk"
          },
          {
            "id": "2",
            "en": "http://",
            "si": "http://"
          },
          {
            "id": "3",
            "en": "/syllabus/",
            "si": "/syllabus/"
          },
          {
            "id": "4",
            "en": "ict.pdf",
            "si": "ict.pdf"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "In the given URL, `www.nie.lk` is the domain name of the hosting server, `http` is the protocol, `/syllabus/` is the path, and `ict.pdf` is the file.",
        "explanationSi": "දී ඇති URL හි `www.nie.lk` යනු සේවාදායකයේ වසම් නාමය වන අතර, `http` යනු නියමාවලිය ද, `/syllabus/` යනු ගොනු පථය ද, `ict.pdf` යනු ගොනුව ද වේ."
      }
    },
    {
      "id": "g11-u3-st-3",
      "number": "3.3",
      "titleEn": "IP Addresses and Domain Name System - DNS",
      "titleSi": "IP ලිපින සහ වසම් නාම සේවාදායකය",
      "summaryEn": "IP address concept, Dotted Decimal Notation (IPv4 structure), and DNS name resolution process translating domain names to IP addresses.",
      "summarySi": "IP ලිපින සංකල්පය, තිත් දශම අංකනය (IPv4), සහ වසම් නාම IP ලිපින බවට හරවන DNS සේවාදායකයේ කාර්යභාරය.",
      "blocks": [
        {
          "id": "b-g11-u3-3-1",
          "en": "IP Address (Internet Protocol Address):\nAn IP address is a unique numerical identifier assigned to every device (computer, phone, printer, router) connected to a computer network using Internet Protocol.\n\n* **Dotted Decimal Notation (තිත් දශම අංකනය):**\n  * Standard IPv4 addresses consist of **4 numbers** separated by periods (dots).\n  * Each of the 4 numbers ranges strictly from **0 to 255** (e.g., `192.168.1.1`, `172.64.85.24`).\n  * Values exceeding 255 (e.g., `192.214.78.256`) or containing fewer/more than 4 numbers are invalid.\n* **Assignment:** Assigned to client devices by the **Internet Service Provider (ISP)**.",
          "si": "IP ලිපිනය (Internet Protocol Address):\nඅන්තර්ජාලයට හෝ පරිගණක ජාලයකට සම්බන්ධ වන සෑම උපාංගයක්ම අනන්‍යව හඳුනාගැනීම සඳහා පවරනු ලබන සංඛ්‍යාත්මක ලිපිනය IP ලිපිනය ලෙස හැඳින්වේ.\n\n* **තිත් දශම අංකනය (Dotted Decimal Notation):**\n  * සම්මත IPv4 ලිපිනයක් තිත් මඟින් වෙන් කරන ලද **සංඛ්‍යා 4 කින්** සමන්විත වේ.\n  * එක් එක් සංඛ්‍යාව **0 සිට 255 දක්වා** වූ පරාසයක අගයක් ගනී (උදා: `192.168.1.1`, `172.64.85.24`).\n  * 255 ට වැඩි අගයන් (උදා: `192.214.78.256`) හෝ කොටස් 4 ට අඩු/වැඩි ලිපින වලංගු නොවේ.\n* **පැවරීම:** පරිශීලක පරිගණක වෙත IP ලිපින පවරනු ලබන්නේ **අන්තර්ජාල සේවා සපයන්නා (ISP)** විසිනි.",
          "highlightTerm": "IP Address & Dotted Decimal"
        },
        {
          "id": "b-g11-u3-3-2",
          "en": "Domain Name System - DNS:\nWhile humans easily recall alphabetic words and names (e.g., `google.com`), computer networking hardware operates strictly using numerical IP addresses (`172.217.160.196`).\n\n* **DNS Server Function:**\n  * The Domain Name Server (DNS) acts as the directory index of the Internet.\n  * When a user enters a domain name into a browser, the DNS translates the domain name into the corresponding server IP address, directing the client to the correct server.",
          "si": "වසම් නාම සේවාදායකය (Domain Name System - DNS):\nමිනිසාට මතක තබා ගැනීමට පහසු වන්නේ වචනවලින් යුතු වසම් නාම (`google.com`) වුවද, පරිගණක එකිනෙක සන්නිවේදනය කරන්නේ සංඛ්‍යාත්මක IP ලිපින (`172.217.160.196`) මඟිනි.\n\n* **DNS සේවාදායකයේ කාර්යය:**\n  * DNS සේවාදායකය අන්තර්ජාලයේ නාමාවලියක් ලෙස ක්‍රියා කරයි.\n  * පරිශීලකයා වෙබ් අන්වේශකයේ වසම් නාමය ටයිප් කළ විට, DNS සේවාදායකය මඟින් එම වසම් නාමයට අදාළ සංඛ්‍යාත්මක IP ලිපිනය සොයා පරිගණකය වෙත ලබා දෙයි.",
          "highlightTerm": "DNS Resolution"
        }
      ],
      "examples": [
        {
          "id": "ex-11-3-3-1",
          "titleEn": "DNS Name Resolution Workflow",
          "titleSi": "DNS නාම පරිවර්තන ගැලීම් සටහන",
          "contentEn": "User types: \"www.google.com\"\n       │\n       ▼\n ┌──────────┐  Translates \"www.google.com\"   ┌──────────────┐\n │ Client   ├───────────────────────────────►│  DNS Server  │\n │ Browser  │◄──────────────────────────────┤ (DNS සේවාදායකය)│\n └──────────┘  Returns IP: \"172.217.160.196\" └──────────────┘",
          "contentSi": "User types: \"www.google.com\"\n       │\n       ▼\n ┌──────────┐  Translates \"www.google.com\"   ┌──────────────┐\n │ Client   ├───────────────────────────────►│  DNS Server  │\n │ Browser  │◄──────────────────────────────┤ (DNS සේවාදායකය)│\n └──────────┘  Returns IP: \"172.217.160.196\" └──────────────┘"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u3-3",
        "questionEn": "Which service translates human-friendly domain names (e.g., www.google.com) into numerical IP addresses required by computers?",
        "questionSi": "මිනිසාට හුරුපුරුදු වසම් නාම පරිගණකවලට අවශ්‍ය සංඛ්‍යාත්මක IP ලිපින බවට පරිවර්තනය කරන සේවාව කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Domain Name System (DNS)",
            "si": "වසම් නාම පද්ධතිය (DNS)"
          },
          {
            "id": "2",
            "en": "Dynamic Host Configuration Protocol (DHCP)",
            "si": "ගතික ධාරක වින්‍යාස නියමාවලිය (DHCP)"
          },
          {
            "id": "3",
            "en": "File Transfer Protocol (FTP)",
            "si": "ගොනු හුවමාරු නියමාවලිය (FTP)"
          },
          {
            "id": "4",
            "en": "Simple Mail Transfer Protocol (SMTP)",
            "si": "සරල තැපැල් හුවමාරු නියමාවලිය (SMTP)"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "DNS (Domain Name System) translates human-readable alphanumeric domain names into machine-readable numerical IP addresses.",
        "explanationSi": "DNS සේවාදායකය මඟින් මිනිසාට මතක තබාගත හැකි වසම් නාම පරිගණකවලට අවශ්‍ය සංඛ්‍යාත්මක IP ලිපින බවට හරවනු ලබයි."
      }
    },
    {
      "id": "g11-u3-st-4",
      "number": "3.4",
      "titleEn": "Internet Protocols",
      "titleSi": "අන්තර්ජාල නියමාවලීන්",
      "summaryEn": "Protocol definition and core networking protocols: HTTP, HTTPS, TCP/IP, FTP, ICMP, and email protocols (SMTP, POP3, IMAP).",
      "summarySi": "නියමාවලියක අර්ථ දැක්වීම සහ ප්‍රධාන ජාල නියමාවලීන්: HTTP, HTTPS, TCP/IP, FTP, ICMP සහ විද්‍යුත් තැපැල් නියමාවලීන් (SMTP, POP3, IMAP).",
      "blocks": [
        {
          "id": "b-g11-u3-4-1",
          "en": "What is an Internet Protocol?:\nA protocol is a standardized set of rules and formats governing data communications across computer networks.\n\n* **Web Transfer Protocols:**\n  * **HTTP (Hypertext Transfer Protocol):** Standard rule for transferring unencrypted web pages, HTML text, and media between web servers and client browsers.\n  * **HTTPS (Hypertext Transfer Protocol Secure):** Secure, encrypted version of HTTP using SSL/TLS encryption. Essential for online banking, e-commerce, and password submissions to prevent data interception.",
          "si": "අන්තර්ජාල නියමාවලියක් යනු කුමක්ද?:\nජාලයක් ඔස්සේ පරිගණක අතර දත්ත සන්නිවේදනය පාලනය කිරීම සඳහා සකස් කරන ලද සම්මත නීති සහ රෙගුලාසි මාලාවක් නියමාවලියක් (Protocol) ලෙස හැඳින්වේ.\n\n* **වෙබ් පිටු ප්‍රේරණ නියමාවලීන්:**\n  * **HTTP (Hypertext Transfer Protocol):** වෙබ් සේවාදායක සහ වෙබ් අන්වේශක අතර වෙබ් පිටු සහ HTML ලේඛන හුවමාරු කර ගැනීමේ මූලික නියමාවලියයි.\n  * **HTTPS (Hypertext Transfer Protocol Secure):** දත්ත ගුප්තකේතනය (Encryption) කර ආරක්ෂිතව සම්ප්‍රේෂණය කරන HTTP අනුවාදයයි. මාර්ගගත බැංකු කටයුතු සහ ඊ-වාණිජ්‍ය ගනුදෙනු සඳහා අනිවාර්යයෙන් භාවිත වේ.",
          "highlightTerm": "Protocols & HTTP/HTTPS"
        },
        {
          "id": "b-g11-u3-4-2",
          "en": "Network Backbone & File Protocols:\n\n* **TCP/IP (Transmission Control Protocol / Internet Protocol):**\n  * The core architectural backbone suite of the Internet.\n  * **TCP** divides messages into manageable packets, numbers them, and reassembles them at the destination.\n  * **IP** handles logical addressing and routing of packets from source to destination.\n\n* **FTP (File Transfer Protocol):**\n  * Standard protocol designed specifically for transferring large files (software, video archives) between client and server computers over the Internet.\n\n* **ICMP (Internet Control Message Protocol):**\n  * Handles diagnostic network testing and error reporting (e.g., `ping` commands).",
          "si": "ජාල කොඳුනාරටි සහ ගොනු නියමාවලීන්:\n\n* **TCP/IP (Transmission Control Protocol / Internet Protocol):**\n  * අන්තර්ජාලයේ මූලික පදනම වන ප්‍රධාන නියමාවලි යුගලයයි.\n  * **TCP** මඟින් දත්ත පැකට්ටු (Packets) වලට වෙන් කර, අංකනය කර, ගමනාන්තයේදී නැවත එකලස් කරයි.\n  * **IP** මඟින් ලිපිනයන් පවරමින් නිවැරදි ගමනාන්තය වෙත පැකට්ටු යොමු කරයි.\n\n* **FTP (File Transfer Protocol):**\n  * විද්‍යුත් තැපෑලෙන් යැවිය නොහැකි විශාල ධාරිතාවකින් යුතු ගොනු අන්තර්ජාලය ඔස්සේ හුවමාරු කිරීම සඳහා භාවිත වේ.\n\n* **ICMP (Internet Control Message Protocol):**\n  * ජාල දෝෂ වාර්තා කිරීම සහ රෝග විනිශ්චය සඳහා (උදා: `ping` විධානය) භාවිත කෙරේ.",
          "highlightTerm": "TCP/IP & FTP"
        },
        {
          "id": "b-g11-u3-4-3",
          "en": "Email Transmission Protocols:\n\n* **SMTP (Simple Mail Transfer Protocol):**\n  * Used for sending electronic mail messages from client to server and transferring emails between mail servers.\n\n* **POP3 (Post Office Protocol version 3):**\n  * Downloads received emails from the mail server to the local client computer and typically deletes them from the server.\n\n* **IMAP (Internet Message Access Protocol):**\n  * Manages and reads emails interactively directly on the remote mail server without downloading, allowing synchronized access across multiple devices.",
          "si": "විද්‍යුත් තැපැල් නියමාවලීන්:\n\n* **SMTP (Simple Mail Transfer Protocol):**\n  * සේවාලාභියාගෙන් සේවාදායකය වෙත සහ තැපැල් සේවාදායකයන් (Mail Servers) අතර විද්‍යුත් තැපැල් ලිපි යැවීම සඳහා භාවිත වේ.\n\n* **POP3 (Post Office Protocol version 3):**\n  * ලැබුණු ලිපි සේවාදායකයෙන් දේශීය පරිගණකයට බාගත කරගැනීමට භාවිත වන අතර බාගත කළ පසු සාමාන්‍යයෙන් සේවාදායකයෙන් මකා දැමේ.\n\n* **IMAP (Internet Message Access Protocol):**\n  * ලිපි බාගත නොකර සෘජුවම සේවාදායකය තුළදීම කළමනාකරණය කිරීමට ඉඩ ලබාදෙන අතර උපාංග කිහිපයකින් සමමුහුර්තව ලිපි පරික්ෂා කළ හැක.",
          "highlightTerm": "Email Protocols (SMTP, POP3, IMAP)"
        }
      ],
      "tableData": {
        "headers": [
          {
            "en": "Protocol",
            "si": "නියමාවලිය"
          },
          {
            "en": "Full Name",
            "si": "සම්පූර්ණ නම"
          },
          {
            "en": "Core Function & Exam Role",
            "si": "ප්‍රධාන කාර්යය සහ විභාග නිපුණතාව"
          }
        ],
        "rows": [
          {
            "col0": {
              "en": "HTTP",
              "si": "HTTP"
            },
            "col1": {
              "en": "Hypertext Transfer Protocol",
              "si": "Hypertext Transfer Protocol"
            },
            "col2": {
              "en": "Transfers unencrypted web pages between web server and web browser.",
              "si": "වෙබ් සේවාදායකය සහ වෙබ් අන්වේශකය අතර සාමාන්‍ය වෙබ් පිටු හුවමාරුව."
            }
          },
          {
            "col0": {
              "en": "HTTPS",
              "si": "HTTPS"
            },
            "col1": {
              "en": "Hypertext Transfer Protocol Secure",
              "si": "Hypertext Transfer Protocol Secure"
            },
            "col2": {
              "en": "Encrypted secure transfer for online banking, payments, and private logins.",
              "si": "මාර්ගගත බැංකු හා ඊ-වාණිජ්‍ය ගනුදෙනු සඳහා ආරක්ෂිත ගුප්තකේතන වෙබ් හුවමාරුව."
            }
          },
          {
            "col0": {
              "en": "TCP/IP",
              "si": "TCP/IP"
            },
            "col1": {
              "en": "Transmission Control Protocol / Internet Protocol",
              "si": "Transmission Control Protocol / Internet Protocol"
            },
            "col2": {
              "en": "Core backbone suite governing packet splitting, routing, and IP addressing.",
              "si": "දත්ත පැකට්ටු වෙන් කිරීම, මඟ පෙන්වීම සහ ලිපින පැවරීම පාලනය කරන ප්‍රධාන පදනම."
            }
          },
          {
            "col0": {
              "en": "FTP",
              "si": "FTP"
            },
            "col1": {
              "en": "File Transfer Protocol",
              "si": "File Transfer Protocol"
            },
            "col2": {
              "en": "Transferring and sharing large capacity files across the Internet.",
              "si": "විශාල ධාරිතාවකින් යුතු ගොනු උඩුගත කිරීම හා බාගත කිරීම."
            }
          },
          {
            "col0": {
              "en": "SMTP",
              "si": "SMTP"
            },
            "col1": {
              "en": "Simple Mail Transfer Protocol",
              "si": "Simple Mail Transfer Protocol"
            },
            "col2": {
              "en": "Sending electronic mail messages between mail servers across the network.",
              "si": "තැපැල් සේවාදායකයන් අතර විද්‍යුත් තැපැල් පණිවුඩ හුවමාරු කිරීම."
            }
          },
          {
            "col0": {
              "en": "POP3",
              "si": "POP3"
            },
            "col1": {
              "en": "Post Office Protocol v3",
              "si": "Post Office Protocol v3"
            },
            "col2": {
              "en": "Downloading received emails from server to local storage.",
              "si": "සේවාදායකයේ ඇති ලිපි පරිශීලකයාගේ පරිගණකයට බාගත කිරීම."
            }
          },
          {
            "col0": {
              "en": "IMAP",
              "si": "IMAP"
            },
            "col1": {
              "en": "Internet Message Access Protocol",
              "si": "Internet Message Access Protocol"
            },
            "col2": {
              "en": "Interactive direct management of emails hosted on server.",
              "si": "සේවාදායකයේ ඇති ලිපි සෘජුවම බලා කළමනාකරණය කිරීම."
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g11-u3-4",
        "questionEn": "Which protocol is used for encrypted and secure transmission of sensitive web data in online banking and e-commerce?",
        "questionSi": "මාර්ගගත බැංකු කටයුතු සහ ඊ-වාණිජ්‍යයේදී සංවේදී වෙබ් දත්ත ආරක්ෂිතව හා ගුප්තකේතනය කර හුවමාරු කිරීමට භාවිත කරන නියමාවලිය කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "HTTPS",
            "si": "HTTPS"
          },
          {
            "id": "2",
            "en": "HTTP",
            "si": "HTTP"
          },
          {
            "id": "3",
            "en": "FTP",
            "si": "FTP"
          },
          {
            "id": "4",
            "en": "ICMP",
            "si": "ICMP"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "HTTPS uses SSL/TLS encryption to protect sensitive data like credit card numbers and passwords during web transit.",
        "explanationSi": "HTTPS මඟින් SSL/TLS ගුප්තකේතනය භාවිත කර මාර්ගගත බැංකු ගනුදෙනු සහ මුරපද අන්තර්ජාලය ඔස්සේ ආරක්ෂිතව හුවමාරු කරයි."
      }
    },
    {
      "id": "g11-u3-st-5",
      "number": "3.5",
      "titleEn": "Key Services Provided by the Internet",
      "titleSi": "අන්තර්ජාලයේ ප්‍රධාන සේවාවන්",
      "summaryEn": "World Wide Web (WWW vs Internet), Web Browsers vs Search Engines, File Transfer, Remote Access, Streaming Media, and VoIP.",
      "summarySi": "ලෝක විසිරි වියමන (WWW හා අන්තර්ජාලය අතර වෙනස), වෙබ් අන්වේශක හා සෙවුම් යන්ත්‍ර, ගොනු හුවමාරුව, දුරස්ථ පිවිසුම, මාධ්‍ය සැපයුම සහ VoIP.",
      "blocks": [
        {
          "id": "b-g11-u3-5-1",
          "en": "World Wide Web (WWW) vs. Search Engines:\n\n* **World Wide Web (WWW):**\n  * A massive collection of multimedia web pages interconnected by hyperlinks.\n  * Invented by **Sir Tim Berners-Lee** in 1989.\n  * **Key Distinction:** WWW is *a service* operating on top of the physical infrastructure of the Internet; the Internet is NOT the WWW!\n  * **Home Page:** The main landing entry page of any website.\n\n* **Web Browser vs. Search Engine:**\n  * **Web Browser:** An application software used to view, render, and navigate web pages (e.g., *Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge*).\n  * **Search Engine:** A web-based service used to locate information across the WWW using keywords when the exact URL is unknown (e.g., *Google, Yahoo, Bing, DuckDuckGo*).",
          "si": "ලෝක විසිරි වියමන (WWW) සහ සෙවුම් යන්ත්‍ර:\n\n* **ලෝක විසිරි වියමන (World Wide Web - WWW):**\n  * අධිසන්ධක (Hyperlinks) මඟින් එකිනෙකට සම්බන්ධ වූ අතිවිශාල වෙබ් පිටු එකතුවකි.\n  * 1989 දී **ශ්‍රීමත් ටිම් බර්නර්ස් ලී** විසින් නිර්මාණය කරන ලදී.\n  * **ප්‍රධාන වෙනස:** ලෝක විසිරි වියමන යනු අන්තර්ජාල යටිතල පහසුකම මත ක්‍රියාත්මක වන *සේවාවක්* පමණි; අන්තර්ජාලය සහ WWW යනු එකක් නොවේ!\n  * **මුල් පිටුව (Home Page):** වෙබ් අඩවියකට පිවිසෙන විට මුලින්ම දිස්වන ප්‍රධාන පිටුවයි.\n\n* **වෙබ් අන්වේශක සහ සෙවුම් යන්ත්‍ර:**\n  * **වෙබ් අන්වේශකය (Web Browser):** වෙබ් පිටු නැරඹීම සඳහා භාවිත කරන යෙදුම් මෘදුකාංගයකි (උදා: *Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge*).\n  * **සෙවුම් යන්ත්‍රය (Search Engine):** නිශ්චිත URL එක නොදන්නා විට යතුරුපද (Keywords) මඟින් තොරතුරු සෙවීමට උපකාරී වන වෙබ් මෙවලමකි (උදා: *Google, Yahoo, Bing*).",
          "highlightTerm": "WWW, Browsers & Search Engines"
        },
        {
          "id": "b-g11-u3-5-2",
          "en": "Other Key Internet Services:\n\n* **File Transfer (FTP):** Sharing large documents and installer packages.\n* **Remote Access & Management:** Remotely accessing and administering servers or remote desktop machines (e.g., Telnet, SSH, Remote Desktop).\n* **Streaming Media:** Playing audio and video files directly in real time over the web without downloading the entire media file first (e.g., *YouTube, Netflix*).\n* **VoIP (Voice over Internet Protocol):** Real-time voice and video communication across IP networks instead of traditional telephone lines (e.g., *Zoom, WhatsApp, Skype*).\n* **Cloud Computing:** On-demand access to remote computing power and storage over the web.",
          "si": "අන්තර්ජාලයේ අනෙකුත් ප්‍රධාන සේවාවන්:\n\n* **ගොනු හුවමාරුව (FTP):** විද්‍යුත් තැපෑලෙන් යැවිය නොහැකි විශාල ගොනු හුවමාරු කිරීම.\n* **දුරස්ථ ප්‍රවේශය (Remote Access):** වෙනත් ස්ථානයක ඇති පරිගණකයකට හෝ සේවාදායකයකට දුරස්ථව සම්බන්ධ වී පාලනය කිරීම (උදා: Remote Desktop, SSH).\n* **මාධ්‍ය සැපයුම (Streaming Media):** සම්පූර්ණ ගොනුව බාගත වන තෙක් නොසිට තත්‍ය කාලීනව ශ්‍රව්‍ය හා දෘශ්‍ය නැරඹීම (උදා: *YouTube, Netflix*).\n* **VoIP (Voice over Internet Protocol):** සාම්ප්‍රදායික දුරකථන මාර්ග වෙනුවට අන්තර්ජාලය හරහා හඬ සහ වීඩියෝ ඇමතුම් ලබාගැනීම (උදා: *Zoom, WhatsApp, Teams*).\n* **වලාකුළු පරිගණකකරණය (Cloud Computing):** අන්තර්ජාලය ඔස්සේ දුරස්ථව පරිගණක සම්පත් හා දත්ත ගබඩා භාවිත කිරීම.",
          "highlightTerm": "Internet Services"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u3-5",
        "questionEn": "Which statement correctly describes the relationship between the Internet and the World Wide Web (WWW)?",
        "questionSi": "අන්තර්ජාලය සහ ලෝක විසිරි වියමන (WWW) අතර සම්බන්ධතාව පිළිබඳ නිවැරදි ප්‍රකාශය කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "The World Wide Web is one of the many services provided over the Internet",
            "si": "ලෝක විසිරි වියමන යනු අන්තර්ජාලය ඔස්සේ ක්‍රියාත්මක වන ප්‍රධාන සේවාවන්ගෙන් එකකි"
          },
          {
            "id": "2",
            "en": "The Internet is a service operating within the World Wide Web",
            "si": "අන්තර්ජාලය යනු ලෝක විසිරි වියමන තුළ ක්‍රියාත්මක වන සේවාවකි"
          },
          {
            "id": "3",
            "en": "The Internet and the World Wide Web are identical terms for the same network",
            "si": "අන්තර්ජාලය සහ ලෝක විසිරි වියමන යනු එකම ජාලය සඳහා වන සමාන පද වේ"
          },
          {
            "id": "4",
            "en": "The World Wide Web is a private local area network",
            "si": "ලෝක විසිරි වියමන යනු පෞද්ගලික ප්‍රාදේශීය ජාලයකි"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "The Internet is the global network infrastructure, while the World Wide Web (WWW) is a service running on top of it.",
        "explanationSi": "අන්තර්ජාලය යනු ගෝලීය ජාල යටිතල පහසුකම වන අතර, ලෝක විසිරි වියමන (WWW) යනු ඒ මත ක්‍රියාත්මක වන එක් ප්‍රධාන සේවාවකි."
      }
    },
    {
      "id": "g11-u3-st-6",
      "number": "3.6",
      "titleEn": "Electronic Mail - E-Mail System",
      "titleSi": "විද්‍යුත් තැපැල් පද්ධතිය",
      "summaryEn": "Email structure (username@domain), advantages, header fields (To, Cc, Bcc rules), attachment handling, folders, and operations (Reply vs Reply All).",
      "summarySi": "විද්‍යුත් තැපැල් ලිපිනයක ව්‍යුහය, වාසි, ශීර්ෂක ක්ෂේත්‍ර (To, Cc, Bcc නීති), ඇමුණුම්, ෆෝල්ඩර සහ මෙහෙයුම් (Reply සහ Reply All වෙනස).",
      "blocks": [
        {
          "id": "b-g11-u3-6-1",
          "en": "E-mail Concepts & Address Anatomy:\nElectronic Mail (E-mail) is a transmission method for exchanging digital messages instantly across networks.\n\n* **Advantages:** Extremely fast transmission, low operational cost, ability to attach multimedia files, and 24/7 global accessibility.\n* **Email Address Structure:**\n  Consider `exams@doenets.lk`:\n  * `exams` : **User Name / Account Name**\n  * `@` : **At Symbol (සම්බන්ධක සංකේතය)**\n  * `doenets.lk` : **Domain Name** of the mail server hosting the mailbox",
          "si": "විද්‍යුත් තැපෑල පිළිබඳ සංකල්පය සහ ලිපින ව්‍යුහය:\nවිද්‍යුත් තැපෑල (E-mail) යනු පරිගණක ජාල හරහා ක්ෂණිකව ලිපි සහ පණිවුඩ හුවමාරු කර ගැනීමේ කාර්යක්ෂම ක්‍රමයයි.\n\n* **වාසි:** ක්ෂණිකව ලැබීම, ඉතා අඩු පිරිවැය, විවිධ මාධ්‍ය ගොනු ඇමිණිය හැකි වීම සහ ඕනෑම තැනක සිට පිවිසිය හැකි වීම.\n* **විද්‍යුත් තැපැල් ලිපිනයක ව්‍යුහය:**\n  `exams@doenets.lk` සලකන්න:\n  * `exams` : **පරිශීලක නාමය (User Name)**\n  * `@` : **At සංකේතය**\n  * `doenets.lk` : තැපැල් සේවාදායකයේ **වසම් නාමය (Domain Name)**",
          "highlightTerm": "Email Address Anatomy"
        },
        {
          "id": "b-g11-u3-6-2",
          "en": "E-mail Header Fields & Visibility Rules:\n\n* **To (ප්‍රධාන ලබන්නා):** The primary intended recipient(s). Their address is visible to everyone in `To`, `Cc`, and `Bcc`.\n* **Cc - Carbon Copy (ද්විතීයික ලබන්නා):** Courtesy copy recipients. Visible to all other recipients in `To`, `Cc`, and `Bcc`.\n* **Bcc - Blind Carbon Copy (රහසිගත ලබන්නා):**\n  * Addresses placed in `Bcc` are **HIDDEN from all recipients in `To` and `Cc`**!\n  * Recipients in `To` and `Cc` cannot know that a `Bcc` recipient was sent the email.\n  * The `Bcc` recipient can see everyone in `To` and `Cc`.\n* **Subject:** Concise title summarizing the message topic.\n* **Attachment (📎):** Icon used to attach digital documents, PDFs, or photos.",
          "si": "විද්‍යුත් තැපැල් ශීර්ෂක ක්ෂේත්‍ර සහ දෘශ්‍යතා රීති:\n\n* **To (ප්‍රධාන ලබන්නා):** ලිපිය සෘජුවම යොමු වන ප්‍රධාන ලබන්නා. මෙම ලිපිනය `To`, `Cc`, සහ `Bcc` හි සිටින සැමටම පෙනේ.\n* **Cc - පිටපත් (Carbon Copy):** දැනුවත් කිරීම සඳහා පිටපතක් යවන ලබන්නා. මෙම ලිපිනයද `To`, `Cc`, `Bcc` හි සිටින සැමටම පෙනේ.\n* **Bcc - රහස්‍ය පිටපත් (Blind Carbon Copy):**\n  * `Bcc` හි සඳහන් ලිපිනයන් **`To` සහ `Cc` හි සිටින කිසිවෙකුටත් නොපෙනේ (සැඟව පවතී)**!\n  * `To` සහ `Cc` හි සිටින අය, `Bcc` හි සිටින අයට ලිපිය ලැබුණු බව නොදනී.\n  * නමුත් `Bcc` හි සිටින ලබන්නාට `To` සහ `Cc` හි සියලු දෙනාගේ ලිපින පෙනේ.\n* **Subject (විෂය):** ලිපිය කුමක් පිළිබඳවද යන්න කෙටියෙන් දක්වන ශීර්ෂය.\n* **Attachment (ඇමුණුම - 📎):** ලිපියට අමතරව වෙනම PDF, රූප හෝ ලේඛන ගොනු එකතු කිරීමේ අයිකනය.",
          "highlightTerm": "Email Header Rules (To, Cc, Bcc)"
        },
        {
          "id": "b-g11-u3-6-3",
          "en": "Email Folders & Key Operations:\n\n* **Standard Folders:**\n  * **Inbox:** Holds incoming received messages.\n  * **Sent:** Stores messages that have been successfully transmitted.\n  * **Drafts:** Stores composed, unsent messages for future editing.\n  * **Trash / Bin:** Holds deleted messages before permanent deletion.\n  * **Spam / Junk:** Automated filter holding unsolicited, promotional, or harmful bulk messages.\n\n* **Key Operations:**\n  * **Reply:** Sends a response ONLY to the original sender.\n  * **Reply All:** Sends the response to the original sender AND all recipients in `To` and `Cc`.\n  * **Forward:** Resends a received email message to a new recipient.",
          "si": "විද්‍යුත් තැපැල් ෆෝල්ඩර සහ මෙහෙයුම්:\n\n* **ප්‍රධාන ෆෝල්ඩර:**\n  * **Inbox (ලැබුණු ලිපි):** ලැබෙන නව පණිවුඩ තැන්පත් වේ.\n  * **Sent (යැවූ ලිපි):** සාර්ථකව යවන ලද ලිපි තැන්පත් වේ.\n  * **Drafts (කෙටුම්පත්):** ලියා අවසන් නොකළ, නොයැවූ ලිපි සුරැකේ.\n  * **Trash (ඉවත් කළ ලිපි):** මකා දැමූ ලිපි තාවකාලිකව තැන්පත් වේ.\n  * **Spam (අනවශ්‍ය / ආයාචිත ලිපි):** අනවශ්‍ය ප්‍රචාරක හෝ අන්තරායකර ලිපි ස්වයංක්‍රීයව වෙන් කර තබයි.\n\n* **ප්‍රධාන මෙහෙයුම්:**\n  * **Reply:** ලිපිය එවූ **මුල් පුද්ගලයාට පමණක්** පිළිතුරු යවයි.\n  * **Reply All:** මුල් පුද්ගලයා ඇතුළු **`To` සහ `Cc` හි සිටින සියලුම දෙනාට** පිළිතුරු යවයි.\n  * **Forward:** තමන්ට ලැබුණු ලිපියක් වෙනත් නව පාර්ශවයකට යොමු කරයි.",
          "highlightTerm": "Folders & Operations (Reply vs Reply All)"
        }
      ],
      "examples": [
        {
          "id": "ex-11-3-6-1",
          "titleEn": "Email Message Interface Model",
          "titleSi": "විද්‍යුත් තැපැල් පණිවුඩ අතුරුමුහුණත",
          "contentEn": "┌────────────────────────────────────────────────────────────────────────┐\n│ New Message                                                   ─ ◻ ×    │\n├────────────────────────────────────────────────────────────────────────┤\n│ To      : sasikala7@gmail.com                                          │\n│ Cc      : bpdasun@yahoo.com                                            │\n│ Bcc     : monali@sltnet.lk                                             │\n│ Subject : O/L Results Released                                         │\n├────────────────────────────────────────────────────────────────────────┤\n│ Dear All,                                                              │\n│ Please find attached my official G.C.E. O/L results sheet.             │\n│ [📎 Results.pdf]                                                      │\n│ [ Send ]                                                               │\n└────────────────────────────────────────────────────────────────────────┘",
          "contentSi": "┌────────────────────────────────────────────────────────────────────────┐\n│ New Message                                                   ─ ◻ ×    │\n├────────────────────────────────────────────────────────────────────────┤\n│ To      : sasikala7@gmail.com                                          │\n│ Cc      : bpdasun@yahoo.com                                            │\n│ Bcc     : monali@sltnet.lk                                             │\n│ Subject : O/L Results Released                                         │\n├────────────────────────────────────────────────────────────────────────┤\n│ Dear All,                                                              │\n│ Please find attached my official G.C.E. O/L results sheet.             │\n│ [📎 Results.pdf]                                                      │\n│ [ Send ]                                                               │\n└────────────────────────────────────────────────────────────────────────┘"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u3-6",
        "questionEn": "If an email recipient is placed in the 'Bcc' field, what is the visibility rule regarding their email address?",
        "questionSi": "විද්‍යුත් තැපැල් පණිවුඩයක ලබන්නෙකු 'Bcc' ක්ෂේත්‍රයට ඇතුළත් කළ විට ඔවුන්ගේ ලිපිනයේ දෘශ්‍යතාව කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "The Bcc recipient's address is hidden from recipients in the To and Cc fields",
            "si": "Bcc හි සිටින ලබන්නාගේ ලිපිනය To සහ Cc හි සිටින අයට නොපෙනී සැඟව පවතී"
          },
          {
            "id": "2",
            "en": "The Bcc recipient's address is visible only to recipients in the To field",
            "si": "Bcc හි ලිපිනය To හි සිටින අයට පමණක් පෙනේ"
          },
          {
            "id": "3",
            "en": "The Bcc recipient cannot view the email body or attachments",
            "si": "Bcc හි සිටින ලබන්නාට පණිවුඩයේ කඳ හෝ ඇමුණුම් බැලිය නොහැක"
          },
          {
            "id": "4",
            "en": "The Bcc recipient's address replaces the sender's address",
            "si": "Bcc හි ලිපිනය එවන්නාගේ ලිපිනය වෙනුවට ආදේශ වේ"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "Blind Carbon Copy (Bcc) hides recipient addresses from anyone listed in the To and Cc fields.",
        "explanationSi": "Bcc (Blind Carbon Copy) හි සිටින ලබන්නන්ගේ ලිපිනය To සහ Cc හි සිටින කිසිදු ලබන්නෙකුට නොපෙනී රහසිගතව පවතී."
      }
    },
    {
      "id": "g11-u3-st-7",
      "number": "3.7",
      "titleEn": "Cloud Computing Concepts & Service Models",
      "titleSi": "වලාකුළු පරිගණකකරණය",
      "summaryEn": "Cloud computing definition and the 3 delivery service models: IaaS, PaaS, and SaaS, with examples, benefits, and trade-offs.",
      "summarySi": "වලාකුළු පරිගණකකරණයේ අර්ථ දැක්වීම සහ ප්‍රධාන සේවා මාදිලි 3 (IaaS, PaaS, SaaS), උදාහරණ, වාසි සහ සීමාවන්.",
      "blocks": [
        {
          "id": "b-g11-u3-7-1",
          "en": "What is Cloud Computing?:\nCloud computing is the delivery of computing services—including servers, storage, databases, networking, and software—over the Internet ('the cloud') on demand.\n\n* Instead of maintaining on-premise physical servers or running software locally on desktop hard drives, organizations access scalable shared computing resources hosted in remote data centers.",
          "si": "වලාකුළු පරිගණකකරණය යනු කුමක්ද?:\nඅන්තර්ජාලය (Cloud) හරහා පරිගණක සේවාදායක, දත්ත ආචයනය, දත්ත සමුදා, ජාලකරණය සහ මෘදුකාංග අවශ්‍යතාව පරිදි ඉල්ලුම මත ලබා දීමේ තාක්ෂණය වලාකුළු පරිගණකකරණය (Cloud Computing) ලෙස හැඳින්වේ.\n\n* දේශීයව පරිගණකවල මෘදුකාංග ස්ථාපනය කිරීම හෝ දෘඩාංග නඩත්තු කිරීම වෙනුවට අන්තර්ජාලය ඔස්සේ දුරස්ථ සම්පත් පහසුවෙන් භාවිත කිරීමට මේ මඟින් ඉඩ සැලසේ.",
          "highlightTerm": "Cloud Computing Concept"
        },
        {
          "id": "b-g11-u3-7-2",
          "en": "The 3 Cloud Service Models (IaaS, PaaS, SaaS):\n\n* **1. Infrastructure as a Service (IaaS - යටිතල පහසුකම් සේවාව):**\n  * Provides virtualized computing hardware over the web, including server space, virtual machines, storage blocks, and firewall networks.\n  * *Examples:* Amazon Web Services (AWS EC2), Google Cloud Compute Engine, Microsoft Azure VMs.\n\n* **2. Platform as a Service (PaaS - සංවර්ධන පරිසර සේවාව):**\n  * Provides a complete development and deployment environment (operating systems, database engines, web servers, compilers) for programmers to build and run applications without managing underlying hardware.\n  * *Examples:* Google App Engine, Heroku, AWS Elastic Beanstalk.\n\n* **3. Software as a Service (SaaS - මෘදුකාංග සේවාව):**\n  * Provides fully functional end-user software hosted in the cloud accessible directly through a web browser.\n  * *Examples:* Google Docs, Google Drive, MS Office 365 Online, Canva, Gmail.\n  * *Benefits:* Zero local installation required; automatic updates; accessible anywhere from any device; lower hardware costs.\n  * *Limitations:* Requires continuous high-speed Internet access; potential vendor lock-in.",
          "si": "වලාකුළු සේවා මාදිලි 3 (IaaS, PaaS, SaaS):\n\n* **1. යටිතල පහසුකම් සේවාව (Infrastructure as a Service - IaaS):**\n  * දත්ත ගබඩා කිරීමට සහ මෘදුකාංග ධාවනයට අවශ්‍ය සේවාදායක පරිගණක (Servers), මතකය සහ ජාල පහසුකම් අතථ්‍යව (Virtual) සපයයි.\n  * *උදාහරණ:* AWS EC2, Google Cloud Compute, Microsoft Azure.\n\n* **2. සංවර්ධන පරිසර සේවාව (Platform as a Service - PaaS):**\n  * මෘදුකාංග නිර්මාණය කරන ක්‍රමලේඛකයන්ට අවශ්‍ය මෙහෙයුම් පද්ධති, දත්ත සමුදා සහ ක්‍රමලේඛන භාෂා පරිසරයන් සපයන මාදිලියයි.\n  * *උදාහරණ:* Google App Engine, Heroku.\n\n* **3. මෘදුකාංග සේවාව (Software as a Service - SaaS):**\n  * පරිගණකයේ මෘදුකාංග ස්ථාපනය නොකර වෙබ් අන්වේශකයක් (Web Browser) හරහා සෘජුවම මෘදුකාංග භාවිත කිරීමට අවස්ථාව සලසයි.\n  * *උදාහරණ:* Google Docs, MS Office 365 Online, Canva, Gmail.\n  * *වාසි:* පරිගණකයේ ස්ථාපනය කිරීමට අවශ්‍ය නොවීම, ස්වයංක්‍රීය යාවත්කාලීන වීම්, ඕනෑම තැනක සිට පිවිසිය හැකි වීම, පිරිවැය අඩු වීම.\n  * *සීමාවන්:* අඛණ්ඩ අන්තර්ජාල සම්බන්ධතාවක් අත්‍යවශ්‍ය වීම.",
          "highlightTerm": "IaaS, PaaS, SaaS Models"
        }
      ],
      "examples": [
        {
          "id": "ex-11-3-7-1",
          "titleEn": "Cloud Computing Architecture",
          "titleSi": "වලාකුළු සේවා ස්ථර සටහන",
          "contentEn": "┌─────────────────────────────────────────┐\n                  │          CLOUD COMPUTING SERVICES       │\n                  └────────────────────┬────────────────────┘\n                                       │\n         ┌─────────────────────────────┼─────────────────────────────┐\n         │                             │                             │\n         ▼                             ▼                             ▼\n┌─────────────────┐           ┌─────────────────┐           ┌─────────────────┐\n│     I a a S     │           │     P a a S     │           │     S a a S     │\n│ Infrastructure  │           │   Platform as   │           │   Software as   │\n│   as a Service  │           │   a Service     │           │   a Service     │\n└─────────────────┘           └─────────────────┘           └─────────────────┘",
          "contentSi": "┌─────────────────────────────────────────┐\n                  │          CLOUD COMPUTING SERVICES       │\n                  └────────────────────┬────────────────────┘\n                                       │\n         ┌─────────────────────────────┼─────────────────────────────┐\n         │                             │                             │\n         ▼                             ▼                             ▼\n┌─────────────────┐           ┌─────────────────┐           ┌─────────────────┐\n│     I a a S     │           │     P a a S     │           │     S a a S     │\n│ Infrastructure  │           │   Platform as   │           │   Software as   │\n│   as a Service  │           │   a Service     │           │   a Service     │\n└─────────────────┘           └─────────────────┘           └─────────────────┘"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u3-7",
        "questionEn": "Which cloud computing model allows users to access applications directly via a web browser without installing software locally?",
        "questionSi": "පරිගණකයේ මෘදුකාංග ස්ථාපනය නොකර වෙබ් අන්වේශකයක් හරහා සෘජුවම මෘදුකාංග භාවිත කිරීමට ඉඩ සලසන වලාකුළු ආකෘතිය කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Software as a Service (SaaS)",
            "si": "මෘදුකාංග සේවාව (SaaS)"
          },
          {
            "id": "2",
            "en": "Infrastructure as a Service (IaaS)",
            "si": "යටිතල පහසුකම් සේවාව (IaaS)"
          },
          {
            "id": "3",
            "en": "Platform as a Service (PaaS)",
            "si": "සංවර්ධන පරිසර සේවාව (PaaS)"
          },
          {
            "id": "4",
            "en": "Hardware as a Service (HaaS)",
            "si": "දෘඩාංග සේවාව (HaaS)"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "SaaS (Software as a Service) hosts complete software applications on the cloud accessible directly through web browsers (e.g., Google Docs).",
        "explanationSi": "SaaS මඟින් පරිශීලකයාගේ පරිගණකයේ මෘදුකාංග ස්ථාපනයකින් තොරව වෙබ් අන්වේශකයක් හරහා සෘජුවම මෘදුකාංග භාවිතයට ඉඩ සලසයි."
      }
    },
    {
      "id": "g11-u3-st-8",
      "number": "3.8",
      "titleEn": "Cyber Security, Malware & Protection",
      "titleSi": "සයිබර් ආරක්ෂාව සහ අන්තරායකර මෘදුකාංග",
      "summaryEn": "Common malware categories (Viruses, Worms, Trojans, Spyware, Phishing, Bots, Spam), protective countermeasures (Firewalls, Antivirus, Backups), and Sri Lanka CERT|CC.",
      "summarySi": "අන්තරායකර මෘදුකාංග වර්ග (වෛරස, පණුවන්, ට්‍රෝජන්, ඔත්තු මෘදුකාංග, තත්තුබෑම, ආයාචිත තැපෑල), ආරක්ෂණ ක්‍රම (ගිනිපවුරු, වෛරස් මර්ධක, උපස්ථ) සහ ශ්‍රී ලංකා CERT|CC.",
      "blocks": [
        {
          "id": "b-g11-u3-8-1",
          "en": "Malicious Software / Malware Categories:\nMalware is any software intentionally designed to cause damage to a computer, server, client, or computer network.\n\n* **1. Computer Virus (පරිගණක වෛරස):** Malicious executable program that attaches itself to existing legitimate host files and corrupts, damages, or deletes files upon execution.\n* **2. Computer Worm (පරිගණක පණුවන්):** Standalone self-replicating malware that spreads across computer networks without needing a host program, consuming bandwidth and slowing network traffic.\n* **3. Trojan Horse (ට්‍රෝජන් අශ්වයා):** Malware disguised as legitimate, useful software that tricks users into installing it, creating backdoors for unauthorized remote access.\n* **4. Spyware (ඔත්තු බලන මෘදුකාංග):** Covertly monitors user keyboard activities, browsing habits, and steals personal passwords and banking details.\n* **5. Phishing (තත්තුබෑම):** Fraudulent practice of impersonating trustworthy organizations (e.g., banks) via deceptive emails/websites to steal credentials and card numbers.\n* **6. Bots (බොට්ස්):** Automated malicious scripts executing coordinated network attacks.\n* **7. Spam (ආයාචිත තැපෑල):** Unsolicited commercial or malicious bulk emails sent to millions of users.",
          "si": "අන්තරායකර මෘදුකාංග (Malware) වර්ග:\nපරිගණක පද්ධතියකට, ගොනුවලට හෝ පරිගණක ජාලයකට හානි සිදුකිරීමේ චේතනාවෙන් නිර්මාණය කරන ලද මෘදුකාංග අන්තරායකර මෘදුකාංග (Malware) නම් වේ.\n\n* **1. පරිගණක වෛරස (Computer Viruses):** වෙනත් නීත්‍යානුකූල ධාරක ගොනුවකට බද්ධ වී ක්‍රියාත්මක වෙමින් ගොනු විනාශ කරන හා දත්ත මකා දමන අනිෂ්ට කේත වේ.\n* **2. පරිගණක පණුවන් (Computer Worms):** ධාරක ගොනුවක් අවශ්‍ය නොවී ජාලය ඔස්සේ ස්වයංක්‍රීයව බෝවෙමින් ජාල කලාප පළල නාස්ති කර පරිගණක මන්දගාමී කරන මෘදුකාංග වේ.\n* **3. ට්‍රෝජන් අශ්වයා (Trojan Horse):** ප්‍රයෝජනවත් මෘදුකාංගයක් ලෙස වෙස්වලාගෙන පරිශීලකයා රවටා පරිගණකයට ඇතුළු වී අනවසර ප්‍රවේශයන් විවෘත කරන මෘදුකාංග වේ.\n* **4. ඔත්තු බලන මෘදුකාංග (Spyware):** පරිශීලකයාගේ අනුදැනුමකින් තොරව පරිගණක ක්‍රියාකාරකම් නිරීක්ෂණය කරමින් මුරපද සහ බැංකු තොරතුරු සොරකම් කරන මෘදුකාංග වේ.\n* **5. තත්තුබෑම (Phishing):** පිළිගත් ආයතන (බැංකු වැනි) ලෙස පෙනී සිටිමින් ව්‍යාජ ඊමේල් හෝ වෙබ් අඩවි මඟින් පරිශීලකයන් රවටා මුරපද ලබාගැනීමේ වංචනික ක්‍රියාවලියයි.\n* **6. බොට්ස් (Bots):** ජාලය ඔස්සේ ස්වයංක්‍රීයව හානිකර ක්‍රියාකාරකම් සිදු කරන මෘදුකාංග වේ.\n* **7. ආයාචිත තැපෑල (Spam):** ඉල්ලීමකින් තොරව විශාල පිරිසකට එකවර එවනු ලබන අනවශ්‍ය වෙළඳ හෝ හානිකර ඊමේල් පණිවුඩ වේ.",
          "highlightTerm": "Malware Types"
        },
        {
          "id": "b-g11-u3-8-2",
          "en": "Defenses & Protective Measures:\n\n* **1. Antivirus Software (වෛරස් මර්ධක මෘදුකාංග):** Installing and frequently updating reputable antivirus protection (*Kaspersky, Norton, BitDefender, Avast, AVG*) to detect and quarantine malware signatures.\n* **2. Firewall (ගිනි පවුර):** A hardware or software security barrier that monitors and filters incoming and outgoing network traffic, blocking unauthorized intrusion attempts.\n* **3. Passwords & User Accounts:** Using strong passwords (letters, numbers, symbols) and standard non-administrative accounts for daily tasks.\n* **4. Regular Data Backups (දත්ත උපස්ථ):** Creating routine duplicate copies of critical files on external or cloud storage to protect against system crashes.",
          "si": "ආරක්ෂණ ක්‍රම සහ පිළියම්:\n\n* **1. වෛරස් මර්ධක මෘදුකාංග (Antivirus Software):** පිළිගත් වෛරස් මර්ධක මෘදුකාංග ස්ථාපනය කර නිරන්තරයෙන් යාවත්කාලීන කිරීම (*Kaspersky, BitDefender, Norton, Avast*).\n* **2. ගිනි පවුර (Firewall):** පරිගණකයකට හෝ ජාලයකට ඇතුළු වන හා පිටවන දත්ත පරීක්ෂා කර අනවසර ප්‍රවේශයන් වළක්වන දෘඩාංග හෝ මෘදුකාංග ආරක්ෂක පවුරකි.\n* **3. ශක්තිමත් මුරපද සහ පරිශීලක ගිණුම්:** සංකීර්ණ මුරපද භාවිත කිරීම සහ එදිනෙදා කාර්යයන් සඳහා පරිපාලක නොවන සාමාන්‍ය ගිණුම් භාවිත කිරීම.\n* **4. දත්ත උපස්ථ (Regular Backups):** පද්ධතිය බිඳ වැටීමකදී දත්ත ආරක්ෂා කරගැනීම සඳහා වැදගත් ලිපිගොනුවල පිටපත් බාහිර ධාවකවල හෝ වලාකුළෙහි සුරැකීම.",
          "highlightTerm": "Countermeasures & Firewalls"
        },
        {
          "id": "b-g11-u3-8-3",
          "en": "Cyber Security in Sri Lanka & Sri Lanka CERT|CC:\n\n* **Sri Lanka CERT|CC (Computer Emergency Readiness Team | Coordination Centre):**\n  * Established under **ICTA (Information and Communication Technology Agency)** as the national focal organization for cyber security.\n  * Responsible for monitoring cyber incidents, responding to national security threats, providing cyber forensics, and certifying Information Security Management Systems (ISMS) across public and private sector institutions.",
          "si": "ශ්‍රී ලංකාවේ සයිබර් ආරක්ෂාව සහ ශ්‍රී ලංකා CERT|CC:\n\n* **ශ්‍රී ලංකා CERT|CC (Sri Lanka Computer Emergency Readiness Team):**\n  * ශ්‍රී ලංකා තොරතුරු හා සන්නිවේදන තාක්ෂණ නියෝජිතායතනය (**ICTA**) යටතේ පිහිටුවන ලද සයිබර් ආරක්ෂාව පිළිබඳ ජාතික මධ්‍යස්ථානයයි.\n  * සයිබර් ප්‍රහාර නිරීක්ෂණය කිරීම, ආරක්ෂක සිදුවීම්වලට ක්ෂණික ප්‍රතිචාර දැක්වීම සහ රාජ්‍ය හා පෞද්ගලික ආයතන සඳහා තොරතුරු ආරක්ෂණ උපදෙස් ලබා දීම සිදු කරයි.",
          "highlightTerm": "Sri Lanka CERT|CC"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u3-8",
        "questionEn": "What type of malware is self-replicating and spreads automatically across network connections without requiring a host executable file?",
        "questionSi": "ධාරක ගොනුවක් අවශ්‍ය නොවී ජාලය හරහා ස්වයංක්‍රීයව බෝවෙමින් කලාප පළල නාස්ති කරන අන්තරායකර මෘදුකාංග වර්ගය කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Computer Worm",
            "si": "පරිගණක පණුවන් (Computer Worm)"
          },
          {
            "id": "2",
            "en": "Trojan Horse",
            "si": "ට්‍රෝජන් අශ්වයා (Trojan Horse)"
          },
          {
            "id": "3",
            "en": "Spyware",
            "si": "ඔත්තු බලන මෘදුකාංග (Spyware)"
          },
          {
            "id": "4",
            "en": "Macro Virus",
            "si": "මැක්‍රෝ වෛරස (Macro Virus)"
          }
        ],
        "correctOptionId": "1",
        "explanationEn": "A Computer Worm is a standalone self-replicating malware that spreads across computer networks on its own without needing a host program.",
        "explanationSi": "පරිගණක පණුවන් (Computer Worms) ධාරක ගොනුවක් අවශ්‍ය නොවී ස්වාධීනව ජාලය ඔස්සේ ස්වයංක්‍රීයව බෝවෙමින් ජාල ක්‍රියාකාරිත්වය අඩපණ කරයි."
      }
    }
  ],
  "pastPaperQuestions": [
    {
      "id": "pp-g11-u3-2020-1",
      "year": 2020,
      "paperType": "Paper I",
      "badgeText": "2020 O/L Paper I - Question 24",
      "questionEn": "Which of the following statements are correct?\n  A – Search engines are used to find information on the World Wide Web (WWW) when the relevant URL is unknown\n  B – SMTP is used to transfer messages between mail servers\n  C – FTP is used to view web pages on the World Wide Web",
      "questionSi": "පහත දැක්වෙන ප්‍රකාශ අතුරින් කවරක් නිවැරදි වේ ද?\n  A – අදාළ URL එක නොදන්නා විට ලෝක විසිරි වියමනෙන් (WWW) තොරතුරු සොයා ගැනීමට සෙවුම් යන්ත්‍ර (Search Engines) භාවිත කෙරේ.\n  B – තැපැල් සේවාදායකයන් (mail servers) අතර පණිවුඩ හුවමාරු කිරීම සඳහා SMTP භාවිත කෙරේ.\n  C – ලෝක විසිරි වියමනෙහි වෙබ් පිටු නැරඹීම සඳහා FTP භාවිත කෙරේ.",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "A and B only",
          "si": "A සහ B පමණි"
        },
        {
          "id": "2",
          "en": "A and C only",
          "si": "A සහ C පමණි"
        },
        {
          "id": "3",
          "en": "B and C only",
          "si": "B සහ C පමණි"
        },
        {
          "id": "4",
          "en": "All A, B and C",
          "si": "A, B සහ C සියල්ලම"
        }
      ],
      "correctOptionId": "1",
      "explanationEn": "A and B are correct. C is incorrect because FTP transfers files, while web pages are viewed using HTTP/HTTPS.",
      "explanationSi": "A සහ B නිවැරදි වේ. C වැරදි වන්නේ වෙබ් පිටු නැරඹීමට HTTP/HTTPS භාවිත කරන බැවිනි (FTP භාවිත වන්නේ ගොනු හුවමාරුවටයි)."
    },
    {
      "id": "pp-g11-u3-2020-2",
      "year": 2020,
      "paperType": "Paper I",
      "badgeText": "2020 O/L Paper I - Question 25",
      "questionEn": "Which of the following statements is correct regarding the Internet and World Wide Web (WWW)?",
      "questionSi": "අන්තර්ජාලය සහ ලෝක විසිරි වියමන (WWW) සම්බන්ධයෙන් පහත දැක්වෙන ප්‍රකාශ අතුරින් කවරක් නිවැරදි වේ ද?",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "The Internet is a service of the World Wide Web",
          "si": "අන්තර්ජාලය යනු ලෝක විසිරි වියමනෙහි සේවාවකි"
        },
        {
          "id": "2",
          "en": "The World Wide Web is a service of the Internet",
          "si": "ලෝක විසිරි වියමන යනු අන්තර්ජාලයේ සේවාවකි"
        },
        {
          "id": "3",
          "en": "The Internet and World Wide Web are the same",
          "si": "අන්තර්ජාලය සහ ලෝක විසිරි වියමන යනු එකක්ම වේ"
        },
        {
          "id": "4",
          "en": "The World Wide Web is a private network",
          "si": "ලෝක විසිරි වියමන යනු පෞද්ගලික ජාලයකි"
        }
      ],
      "correctOptionId": "2",
      "explanationEn": "The World Wide Web (WWW) is a key information service hosted on top of the global Internet infrastructure.",
      "explanationSi": "ලෝක විසිරි වියමන (WWW) යනු අන්තර්ජාලය නමැති යටිතල පහසුකම මත ක්‍රියාත්මක වන ප්‍රධාන සේවාවකි."
    },
    {
      "id": "pp-g11-u3-2020-3",
      "year": 2020,
      "paperType": "Paper II",
      "badgeText": "2020 O/L Paper II - Question 01 (iv)",
      "questionEn": "1. (iv) Fill in the blanks (a) to (e) using the most suitable terms from the list given below:\n  [List: backup, password, firewall, phishing, virus, spamming]\n  (a) A ................... can be used to prevent unauthorized access to data stored in a standalone computer.\n  (b) Having a ................... is necessary for the safety of essential data in case of a computer crash.\n  (c) ................... is an act of cheating users to collect user names and passwords of electronic bank accounts.\n  (d) A ................... can be used to safeguard a computer system from harmful software.\n  (e) A ................... enters a computer as an executable file and can erase files.",
      "questionSi": "1. (iv) පහත දක්වා ඇති පද ලැයිස්තුවෙන් වඩාත්ම සුදුසු පද තෝරා (a) සිට (e) දක්වා හිස්තැන් පුරවන්න:\n  [පද ලැයිස්තුව: backup, password, firewall, phishing, virus, spamming]\n  (a) අන්අවසර ප්‍රවේශ වැළැක්වීම මගින් තනිව පවතින පරිගණකයක ආචිත දත්ත ආරක්ෂා කිරීමට ................... ක් භාවිත කරනු ලැබේ.\n  (b) පරිගණකයක ක්‍රියාකාරීත්වය ඇනහිටින අවස්ථාවක අත්‍යවශ්‍ය දත්තවල සුරක්ෂිතතාව සඳහා ................... කර තිබීම අවශ්‍ය වේ.\n  (c) විද්‍යුත් බෑංකු ගිණුම්වල පරිශීලක නාම සහ මුරපද එකතු කර ගැනීමේ කාර්යය සඳහා පරිශීලකයින්ව රැවටීමේ ක්‍රියාව ................... ලෙස හැඳින්වේ.\n  (d) පරිගණක පද්ධතියක් හානිකර මෘදුකාංගවලින් ආරක්ෂා කර ගැනීමට ................... ක් භාවිත කළ හැක.\n  (e) ................... පරිගණකයකට ඇතුළු වන්නේ ධාවනය කළ හැකි ගොනුවක් (executable file) ලෙස වන අතර ගොනු මකා දැමිය හැක.",
      "type": "structured",
      "sampleAnswerEn": "(a) password\n(b) backup\n(c) phishing\n(d) firewall\n(e) virus",
      "sampleAnswerSi": "(a) මුරපදය (password)\n(b) උපස්ථ (backup)\n(c) තත්තුබෑම (phishing)\n(d) ගිනිපවුර (firewall)\n(e) වෛරසය (virus)",
      "explanationEn": "Verbatim official examination question from 2020 O/L Paper II - Question 01 (iv).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper II - Question 01 (iv)."
    },
    {
      "id": "pp-g11-u3-2020-4",
      "year": 2020,
      "paperType": "Paper II",
      "badgeText": "2020 O/L Paper II - Question 03 (i)",
      "questionEn": "3. (i) Write down two advantages of using SaaS (Software as a Service), which is a cloud computing service, for an institute.",
      "questionSi": "3. (i) වලාකුළු පරිගණක (cloud computing) සේවාවක් වූ SaaS (Software as a Service) භාවිත කිරීමේ දී ආයතනයකට ලැබෙන වාසි දෙකක් ලියන්න.",
      "type": "structured",
      "sampleAnswerEn": "1. No need to purchase individual licenses or install software locally on every computer.\n2. Automatic software updates and maintenance managed by the cloud service provider.\n3. Access data and applications from any device anywhere with an Internet connection.",
      "sampleAnswerSi": "1. එක් එක් පරිගණකයට වෙන වෙනම මෘදුකාංග මිලදී ගැනීම හෝ ස්ථාපනය කිරීම අවශ්‍ය නොවේ.\n2. මෘදුකාංග යාවත්කාලීන කිරීම් සේවා සපයන්නා විසින් ස්වයංක්‍රීයව සිදු කරයි.\n3. අන්තර්ජාලය ඇති ඕනෑම තැනක සිට ඕනෑම උපාංගයකින් ප්‍රවේශ විය හැක.",
      "explanationEn": "Verbatim official examination question from 2020 O/L Paper II - Question 03 (i).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper II - Question 03 (i)."
    },
    {
      "id": "pp-g11-u3-2021-5",
      "year": 2021,
      "paperType": "Paper I",
      "badgeText": "2021 O/L Paper I - Question 21",
      "questionEn": "Which of the following statements are correct?\n  A – HTML tags determine how the web pages are displayed in a web browser.\n  B – A URL uniquely identifies a web page on the World Wide Web (WWW).\n  C – Hyperlinks allow to link web pages on the World Wide Web.",
      "questionSi": "පහත සඳහන් කුමන ප්‍රකාශ නිවැරදි වන්නේ ද?\n  A – HTML හිජුලන මගින් වෙබ් අන්වේශකය තුළ දී වෙබ් පිටු දිස්වන අයුරු තීරණය කරයි.\n  B – ලෝක විසිරි වියමනෙහි දී (WWW) වෙබ් පිටුවක් අනන්‍යව හඳුනාගනු ලබන්නේ URL මගිනි.\n  C – අධි සන්ධක (hyperlinks), ලෝක විසිරි වියමනෙහි දී වෙබ් පිටු සම්බන්ධ කිරීමට ඉඩ ලබා දෙයි.",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "A and B only",
          "si": "A සහ B පමණි"
        },
        {
          "id": "2",
          "en": "A and C only",
          "si": "A සහ C පමණි"
        },
        {
          "id": "3",
          "en": "B and C only",
          "si": "B සහ C පමණි"
        },
        {
          "id": "4",
          "en": "All A, B and C",
          "si": "A, B සහ C සියල්ලම"
        }
      ],
      "correctOptionId": "4",
      "explanationEn": "All statements A, B, and C are correct definitions in web technologies.",
      "explanationSi": "A, B සහ C යන සියලු ප්‍රකාශ නිවැරදි වේ."
    },
    {
      "id": "pp-g11-u3-2021-6",
      "year": 2021,
      "paperType": "Paper I",
      "badgeText": "2021 O/L Paper I - Question 24",
      "questionEn": "Which of the following is a correct example for an Internet Protocol (IP) address?",
      "questionSi": "පහත සඳහන් ඒවායින් Internet Protocol (IP) ලිපිනයක් සඳහා නිවැරදි උදාහරණය වන්නේ කුමක්ද?",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "172.64.85",
          "si": "172.64.85"
        },
        {
          "id": "2",
          "en": "172.64.85.24",
          "si": "172.64.85.24"
        },
        {
          "id": "3",
          "en": "192.214.78.80.1",
          "si": "192.214.78.80.1"
        },
        {
          "id": "4",
          "en": "192.214.78.256",
          "si": "192.214.78.256"
        }
      ],
      "correctOptionId": "2",
      "explanationEn": "A valid IPv4 address has exactly four decimal numbers between 0 and 255 separated by dots (`172.64.85.24`).",
      "explanationSi": "වලංගු IPv4 ලිපිනයක් තිත් මඟින් වෙන් වූ 0-255 අතර සංඛ්‍යා 4 කින් සමන්විත වේ (`172.64.85.24`)."
    },
    {
      "id": "pp-g11-u3-2021-7",
      "year": 2021,
      "paperType": "Paper I",
      "badgeText": "2021 O/L Paper I - Question 25",
      "questionEn": "Which of the following is the commonly used folder that stores deleted messages in an email system?",
      "questionSi": "පහත සඳහන් ඒවායින් විද්‍යුත් තැපැල් පද්ධතියක මකා දැමූ පණිවුඩ තැන්පත් වන සාමාන්‍යයෙන් භාවිත වන ෆෝල්ඩරය කුමක්ද?",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "Draft",
          "si": "Draft"
        },
        {
          "id": "2",
          "en": "Inbox",
          "si": "Inbox"
        },
        {
          "id": "3",
          "en": "Spam",
          "si": "Spam"
        },
        {
          "id": "4",
          "en": "Trash",
          "si": "Trash"
        }
      ],
      "correctOptionId": "4",
      "explanationEn": "The Trash / Bin folder temporarily holds deleted messages in email software.",
      "explanationSi": "විද්‍යුත් තැපැල් මෘදුකාංගයක මකා දමන ලද ලිපි තාවකාලිකව තැන්පත් වන්නේ Trash (ඉවත් කළ ලිපි) ෆෝල්ඩරයේය."
    },
    {
      "id": "pp-g11-u3-2021-8",
      "year": 2021,
      "paperType": "Paper II",
      "badgeText": "2021 O/L Paper II - Question 05 (vii)",
      "questionEn": "5. (vii) Match the descriptions labelled P to S with the correct terms from the list given below:\n  [List: FTP, SMTP, URL, IP address, IaaS, Trash, Draft, SaaS]\n  P – Used for electronic mail exchange among mail servers on the Internet\n  Q – Provides access to the software installed in the cloud\n  R – Folder to store mails that are composed to be sent, but not completed yet\n  S – Used to uniquely identify a computer on the Internet",
      "questionSi": "5. (vii) P සිට S දක්වා වූ ලේබල මගින් දැක්වෙන විස්තර, ලබා දී ඇති පද ලැයිස්තුවෙන් තෝරා ගැලපෙන්න:\n  [පද ලැයිස්තුව: FTP, SMTP, URL, IP address, IaaS, Trash, Draft, SaaS]\n  P – අන්තර්ජාලයේ පවතින තැපැල් සේවාදායක අතර විද්‍යුත් තැපැල් හුවමාරුව සඳහා භාවිත වේ.\n  Q – වලාකුළෙහි (cloud) ස්ථාපනය කරන ලද මෘදුකාංගවලට ප්‍රවේශය ලබා දෙයි.\n  R – යැවීමට පිළියෙළ කරන ලද, එහෙත් සම්පූර්ණ නොවූ ලිපි ආචයනය සඳහා වූ ෆෝල්ඩරය\n  S – අන්තර්ජාලයේ පවතින පරිගණකයක් අනන්‍යව හඳුනාගැනීමට භාවිත වේ.",
      "type": "structured",
      "sampleAnswerEn": "P ➔ SMTP\nQ ➔ SaaS\nR ➔ Draft\nS ➔ IP address",
      "sampleAnswerSi": "P ➔ SMTP\nQ ➔ SaaS\nR ➔ කෙටුම්පත් (Draft)\nS ➔ IP ලිපිනය (IP address)",
      "explanationEn": "Verbatim official examination question from 2021 O/L Paper II - Question 05 (vii).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2021 O/L Paper II - Question 05 (vii)."
    },
    {
      "id": "pp-g11-u3-2022-9",
      "year": 2022,
      "paperType": "Paper II",
      "badgeText": "2022 O/L Paper II - Question 05 (i) & (ii)",
      "questionEn": "5. (i) Match descriptions P - S with terms from List: {DNS, email address, FTP, HTTP, hyperlink, IP address, SMTP, URL}\n  P – Used for communication between web server and web client\n  Q – Used to uniquely identify a web page in a web server\n  R – Used to identify a computer uniquely on the Internet\n  S – Used to transfer emails between two email servers\n\n  (ii) Choose examples for A - G from List: {.lk, Firefox, Google, IaaS, Pascal, PHP, Twitter, Wordpress, www.nie.lk}\n  A – A content management system\n  B – A top level domain name\n  C – A web browser\n  D – A search engine\n  E – A social network\n  F – A cloud computing service\n  G – A programming language used for web page development",
      "questionSi": "5. (i) P - S විස්තර ලබා දී ඇති පද ලැයිස්තුව සමඟ ගැලපෙන්න:\n  P – වෙබ් සේවාදායකය සහ වෙබ් සේවාලාභියා අතර සන්නිවේදනය සඳහා භාවිත වේ\n  Q – වෙබ් සේවාදායකයක වෙබ් පිටුවක් අනන්‍යව හඳුනාගැනීමට භාවිත වේ\n  R – අන්තර්ජාලයේ පරිගණකයක් අනන්‍යව හඳුනාගැනීමට භාවිත වේ\n  S – තැපැල් සේවාදායක දෙකක් අතර විද්‍යුත් තැපැල් හුවමාරුව සඳහා භාවිත වේ\n\n  (ii) A - G සඳහා අදාළ උදාහරණ ලැයිස්තුවෙන් තෝරන්න:\n  A – සංකල්ප කළමනාකරණ පද්ධතියක් (CMS)\n  B – ඉහළ මට්ටමේ වසම් නාමයක් (TLD)\n  C – වෙබ් අන්වේශකයක් (Web Browser)\n  D – සෙවුම් යන්ත්‍රයක් (Search Engine)\n  E – සමාජ ජාලයක් (Social Network)\n  F – වලාකුළු පරිගණක සේවාවක් (Cloud Service)\n  G – වෙබ් පිටු ගොඩනැගීමට භාවිත කරන ක්‍රමලේඛන භාෂාවක්",
      "type": "structured",
      "sampleAnswerEn": "(i): P ➔ HTTP, Q ➔ URL, R ➔ IP address, S ➔ SMTP\n(ii): A ➔ Wordpress, B ➔ .lk, C ➔ Firefox, D ➔ Google, E ➔ Twitter, F ➔ IaaS, G ➔ PHP",
      "sampleAnswerSi": "(i): P ➔ HTTP, Q ➔ URL, R ➔ IP ලිපිනය, S ➔ SMTP\n(ii): A ➔ Wordpress, B ➔ .lk, C ➔ Firefox, D ➔ Google, E ➔ Twitter, F ➔ IaaS, G ➔ PHP",
      "explanationEn": "Verbatim official examination question from 2022 O/L Paper II - Question 05 (i) & (ii).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2022 O/L Paper II - Question 05 (i) & (ii)."
    },
    {
      "id": "pp-g11-u3-2023-10",
      "year": 2023,
      "paperType": "Paper II",
      "badgeText": "2023 O/L Paper II - Question 05 (i) & (ii)",
      "questionEn": "5. (i) Match P - S with List: {DNS, email address, HTTP, IP address, SMTP, URL}\n  P – A protocol for electronic mail transmission\n  Q – A protocol used for transmitting web pages over the Internet\n  R – A unique identifier for a device on the Internet\n  S – The address of a specific web page\n\n  (ii) Choose appropriate example for 1 - 6 from List: {A – 192.168.1.1, B – https://www.example.com, C – Java, D – john.doe@example.com, E – SaaS, F – TCP/IP, G – xyz.example.com, H – Ubuntu}\n  1 – Protocol   2 – IP Address   3 – Email Address   4 – Domain Name   5 – URL   6 – Operating System",
      "questionSi": "5. (i) P - S විස්තර ලබා දී ඇති පද ලැයිස්තුව සමඟ ගැලපෙන්න:\n  P – විද්‍යුත් තැපැල් ප්‍රේරණය සඳහා වූ නියමාවලියක්\n  Q – අන්තර්ජාලය හරහා වෙබ් පිටු ප්‍රේරණයට භාවිත වන නියමාවලියක්\n  R – අන්තර්ජාලයේ ඇති උපාංගයක් සඳහා වූ අනන්‍ය හඳුනාගැනීම\n  S – නිශ්චිත වෙබ් පිටුවක ලිපිනය\n\n  (ii) 1 - 6 සඳහා සුදුසු උදාහරණ ලැයිස්තුවෙන් තෝරන්න:\n  1 – නියමාවලියක්   2 – IP ලිපිනයක්   3 – B-තැපැල් ලිපිනයක්   4 – වසම් නාමයක්   5 – URL එකක්   6 – මෙහෙයුම් පද්ධතියක්",
      "type": "structured",
      "sampleAnswerEn": "(i): P ➔ SMTP, Q ➔ HTTP, R ➔ IP address, S ➔ URL\n(ii): 1 ➔ F (TCP/IP), 2 ➔ A (192.168.1.1), 3 ➔ D (john.doe@example.com), 4 ➔ G (xyz.example.com), 5 ➔ B (https://www.example.com), 6 ➔ H (Ubuntu)",
      "sampleAnswerSi": "(i): P ➔ SMTP, Q ➔ HTTP, R ➔ IP ලිපිනය, S ➔ URL\n(ii): 1 ➔ F (TCP/IP), 2 ➔ A (192.168.1.1), 3 ➔ D (john.doe@example.com), 4 ➔ G (xyz.example.com), 5 ➔ B (https://www.example.com), 6 ➔ H (Ubuntu)",
      "explanationEn": "Verbatim official examination question from 2023 O/L Paper II - Question 05 (i) & (ii).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2023 O/L Paper II - Question 05 (i) & (ii)."
    },
    {
      "id": "pp-g11-u3-2023-11",
      "year": 2023,
      "paperType": "Paper II",
      "badgeText": "2023 O/L Paper II - Question 01 (x)",
      "questionEn": "1. (x) Consider the email header given below:\n  To: riyas@example.com\n  Cc: raja@abc.com, saman@example.com\n  Bcc: sheron@abc.com\n  Indicate whether the following statements labelled A to D are true or false:\n  A – riyas is the primary recipient of the email.\n  B – raja will know that sheron also received the email.\n  C – riyas can see that the email was also sent to saman.\n  D – Everyone in the To and Cc fields can see each other's email addresses.",
      "questionSi": "1. (x) පහත දැක්වෙන විද්‍යුත් තැපැල් ශීර්ෂකය සලකන්න:\n  To: riyas@example.com\n  Cc: raja@abc.com, saman@example.com\n  Bcc: sheron@abc.com\n  A සිට D දක්වා වූ ප්‍රකාශ සත්‍ය ද අසත්‍ය ද යන්න දක්වන්න:\n  A – riyas යනු විද්‍යුත් තැපෑලේ ප්‍රධාන ලබන්නා වේ.\n  B – sheron හට ද මෙම ලිපිය ලැබුණු බව raja දැන ගනු ඇත.\n  C – saman හට ද මෙම ලිපිය යැවූ බව riyas හට පෙනෙනු ඇත.\n  D – To සහ Cc හි සිටින සියලු දෙනාටම එකිනෙකාගේ විද්‍යුත් තැපැල් ලිපින පෙනෙනු ඇත.",
      "type": "structured",
      "sampleAnswerEn": "A ➔ True\nB ➔ False (Bcc recipients are completely hidden from To and Cc)\nC ➔ True (saman is in Cc, visible to riyas in To)\nD ➔ True (all To and Cc addresses are mutually visible)",
      "sampleAnswerSi": "A ➔ සත්‍යයි (riyas ප්‍රධාන ලබන්නා වේ)\nB ➔ අසත්‍යයි (Bcc හි සිටින sheron ගැන raja නොදනී)\nC ➔ සත්‍යයි (Cc හි සිටින saman ව riyas හට පෙනේ)\nD ➔ සත්‍යයි (To සහ Cc හි සිටින සැමට එකිනෙකාගේ ලිපින පෙනේ)",
      "explanationEn": "Verbatim official examination question from 2023 O/L Paper II - Question 01 (x).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2023 O/L Paper II - Question 01 (x)."
    },
    {
      "id": "pp-g11-u3-2024-12",
      "year": 2024,
      "paperType": "Paper II",
      "badgeText": "2024 O/L Paper II - Question 05 (i)",
      "questionEn": "5. (i) Match descriptions A to J with items from List: {1 - DNS, 2 - Facebook, 3 - Firefox, 4 - Google, 5 - IaaS, 6 - PHP, 7 - SMTP, 8 - WordPress, 9 - YouTube, 10 - Zoom}\n  A – A search engine that helps to find information online\n  B – A social media platform to create and share content with others\n  C – A cloud computing service providing virtualized computing resources\n  D – A web browser for accessing website\n  E – A platform to create and manage websites and blogs\n  F – A protocol used to send and receive emails over the internet\n  G – A protocol that maps domain to IP address\n  H – A platform for hosting and sharing video content\n  I – A video conferencing tool for virtual meetings\n  J – A language used to create dynamic web page",
      "questionSi": "5. (i) A සිට J දක්වා වූ විස්තර අංකිත ලැයිස්තුවේ අයතමයක් සමඟ ගැලපෙන්න:\n  [ලැයිස්තුව: 1 - DNS, 2 - Facebook, 3 - Firefox, 4 - Google, 5 - IaaS, 6 - PHP, 7 - SMTP, 8 - WordPress, 9 - YouTube, 10 - Zoom]\n  A – මාර්ගගත තොරතුරු ලබා ගැනීමට උපකාරී වන සෙවුම් යන්ත්‍රයක්\n  B – අන් අය සමඟ සම්බන්ධ වීමට සහ සංකල්ප බෙදා ගැනීමට සමාජ මාධ්‍ය වේදිකාවක්\n  C – අතථ්‍ය පරිගණක සම්පත් සපයන වලාකුළු පරිගණක සේවාවක්\n  D – වෙබ් අඩවිවලට ප්‍රවේශ වීමට අන්වේශකයක්\n  E – වෙබ් අඩවි සහ බ්ලොග් සෑදීමට සහ කළමනාකරණය කිරීමට වේදිකාවක්\n  F – අන්තර්ජාලය හරහා විද්‍යුත් තැපැල් ලිපි යැවීමට සහ ලබා ගැනීමට භාවිත කරන නියමාවලියක්\n  G – වසම් නාම IP ලිපිනවලට අනුරූපණය කරන නියමාවලියක්\n  H – වීඩියෝ සංකල්ප සත්කාරකත්වය සහ බෙදා ගැනීමට වේදිකාවක්\n  I – අතථ්‍ය රැස්වීම් සඳහා වීඩියෝ සම්මන්ත්‍රණ මෙවලමක්\n  J – ගතික වෙබ් පිටු නිර්මාණයට භාවිත කරන භාෂාවක්",
      "type": "structured",
      "sampleAnswerEn": "A ➔ 4 (Google)\nB ➔ 2 (Facebook)\nC ➔ 5 (IaaS)\nD ➔ 3 (Firefox)\nE ➔ 8 (WordPress)\nF ➔ 7 (SMTP)\nG ➔ 1 (DNS)\nH ➔ 9 (YouTube)\nI ➔ 10 (Zoom)\nJ ➔ 6 (PHP)",
      "sampleAnswerSi": "A ➔ 4 (Google)\nB ➔ 2 (Facebook)\nC ➔ 5 (IaaS)\nD ➔ 3 (Firefox)\nE ➔ 8 (WordPress)\nF ➔ 7 (SMTP)\nG ➔ 1 (DNS)\nH ➔ 9 (YouTube)\nI ➔ 10 (Zoom)\nJ ➔ 6 (PHP)",
      "explanationEn": "Verbatim official examination question from 2024 O/L Paper II - Question 05 (i).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2024 O/L Paper II - Question 05 (i)."
    },
    {
      "id": "pp-g11-u3-2024-13",
      "year": 2024,
      "paperType": "Paper II",
      "badgeText": "2024 O/L Paper II - Question 06 (ix) & (x)",
      "questionEn": "6. (ix) (a) Give an example of an IP address in dotted decimal notation.\n  (b) Indicate True or False for email statements A to C:\n  A – The email addresses of the 'BCC' recipients are hidden from other recipients.\n  B – The email addresses of the 'CC' recipients are visible to everyone.\n  C – When one clicks the 'Reply to all' option the original sender and all other recipients on the To and Cc receive the reply.",
      "questionSi": "6. (ix) (a) IP ලිපිනයකට නිදසුනක් තිත් දශමය ආකාරයට ලියන්න.\n  (b) B-තැපැල් ලිපියක් සම්බන්ධයෙන් A සිට C දක්වා ප්‍රකාශවල සත්‍ය/අසත්‍ය බව දක්වන්න:\n  A – 'BCC' ලබන්නන්ගේ B-තැපැල් ලිපින සසුන් ලබන්නන්ගෙන් සැඟව පවතී.\n  B – 'CC' ලබන්නන්ගේ B-තැපැල් ලිපින අන් සියලු ලබන්නන්ට දැකිය හැක.\n  C – 'Reply to all' ක්ලික් කළ විට මුල් ලිපිය එවූ අයට සහ To හා CC යටතේ සිටින සියලු ලබන්නන්ට පිළිතුරු යැවේ.",
      "type": "structured",
      "sampleAnswerEn": "(a) Example IP: `192.168.1.1` (or `172.64.85.24`)\n(b):\nA ➔ True\nB ➔ True\nC ➔ True",
      "sampleAnswerSi": "(a) නිදසුන: `192.168.1.1` (හෝ `172.64.85.24`)\n(b):\nA ➔ සත්‍යයි\nB ➔ සත්‍යයි\nC ➔ සත්‍යයි",
      "explanationEn": "Verbatim official examination question from 2024 O/L Paper II - Question 06 (ix) & (x).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2024 O/L Paper II - Question 06 (ix) & (x)."
    },
    {
      "id": "pp-g11-u3-2025-14",
      "year": 2025,
      "paperType": "Paper II",
      "badgeText": "2025 O/L Paper II - Question 06 (i) & (ii)",
      "questionEn": "6. (i) Match descriptions A to F with List: {1 – DNS, 2 – HTTP, 3 – hyperlink, 4 – IP address, 5 – Lasso tool, 6 – Memory address, 7 – SaaS, 8 – Search engine, 9 – SMTP, 10 – web server}\n  A – A service that converts a domain name into a numerical address\n  B – A tool used to find websites by entering keywords\n  C – Clickable text that opens another page\n  D – The computer that stores and provides web pages\n  E – The numerical address assigned to a website\n  F – The protocol used to transfer web pages",
      "questionSi": "6. (i) A සිට F දක්වා විස්තර ලබා දී ඇති ලැයිස්තුවේ අංකය සමඟ ගැලපෙන්න:\n  A – වසම් නාමයක් සංඛ්‍යාත්මක ලිපිනයකට පරිවර්තනය කරන සේවාව\n  B – යතුරු පද ඇතුළත් කිරීමෙන් වෙබ් අඩවි සෙවීමට භාවිත කරන මෙවලම\n  C – වෙනත් පිටුවක් විවෘත කරන ක්ලික් කළ හැකි පාඨය\n  D – වෙබ් පිටු තැන්පත් කර තබා ගන්නා සහ සපයන පරිගණකය\n  E – වෙබ් අඩවියකට පවරා ඇති සංඛ්‍යාත්මක ලිපිනය\n  F – වෙබ් පිටු ප්‍රේරණයට භාවිත කරන නියමාවලිය",
      "type": "structured",
      "sampleAnswerEn": "A ➔ 1 (DNS)\nB ➔ 8 (Search engine)\nC ➔ 3 (hyperlink)\nD ➔ 10 (web server)\nE ➔ 4 (IP address)\nF ➔ 2 (HTTP)",
      "sampleAnswerSi": "A ➔ 1 (DNS)\nB ➔ 8 (Search engine)\nC ➔ 3 (hyperlink)\nD ➔ 10 (web server)\nE ➔ 4 (IP address)\nF ➔ 2 (HTTP)",
      "explanationEn": "Verbatim official examination question from 2025 O/L Paper II - Question 06 (i) & (ii).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2025 O/L Paper II - Question 06 (i) & (ii)."
    },
    {
      "id": "pp-g11-u3-2025-15",
      "year": 2025,
      "paperType": "Paper II",
      "badgeText": "2025 O/L Paper II - Question 01 (x)",
      "questionEn": "1. (x) (a) Write down the domain name of the following URL:\n  `http://www.ugc.lk/admissions/2026/handbook.html`\n  (b) Write down the file name of the URL given in (a) above.\n  (c) What is the use of the 📎 icon available in an email software?\n  (d) What is the difference between 'Reply' and 'Reply all' options available in an email software?",
      "questionSi": "1. (x) (a) `http://www.ugc.lk/admissions/2026/handbook.html` යන URL හි වසම් නාමය ලියන්න.\n  (b) ඉහත URL හි ගොනු නාමය ලියන්න.\n  (c) B-තැපැල් මෘදුකාංගයක ඇති 📎 අයිකනය භාවිත වන්නේ කුමකටද?\n  (d) B-තැපැල් මෘදුකාංගයක ඇති 'Reply' සහ 'Reply all' අතර වෙනස කුමක්ද?",
      "type": "structured",
      "sampleAnswerEn": "(a) Domain Name: `www.ugc.lk` (or `ugc.lk`)\n(b) File Name: `handbook.html`\n(c) 📎 Icon Use: To attach external documents, images, and files to the email message.\n(d) Difference: 'Reply' sends a response only to the original sender, whereas 'Reply all' sends the response to the original sender AND all other recipients in the `To` and `Cc` lists.",
      "sampleAnswerSi": "(a) වසම් නාමය: `www.ugc.lk` (හෝ `ugc.lk`)\n(b) ගොනු නාමය: `handbook.html`\n(c) 📎 අයිකනයේ කාර්යය: විද්‍යුත් තැපැල් පණිවුඩයට බාහිර ලේඛන, පින්තූර හෝ PDF ගොනු ඇමිණීම.\n(d) වෙනස: 'Reply' මඟින් ලිපිය එවූ මුල් පුද්ගලයාට පමණක් පිළිතුරු යවන අතර, 'Reply all' මඟින් මුල් පුද්ගලයා ඇතුළු `To` සහ `Cc` හි සිටින සියලු දෙනාටම පිළිතුරු යවයි.",
      "explanationEn": "Verbatim official examination question from 2025 O/L Paper II - Question 01 (x).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2025 O/L Paper II - Question 01 (x)."
    }
  ]
};
