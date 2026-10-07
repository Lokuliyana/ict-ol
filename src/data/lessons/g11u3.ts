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
      "summaryEn": "Introduction to the Internet & Network Architecture concepts, definitions, and examination competencies.",
      "summarySi": "අන්තර්ජාලය හැඳින්වීම සහ ජාල ආකෘතිය සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u3-1-1",
          "en": "What is the Internet?:\nThe Internet is a collection of computer networks around the world. It is the fastest available way to share information with the world community (Information super highway). With the use of Internet today, the whole world has become a global village.",
          "si": "අන්තර්ජාලය යනු කුමක්ද?:\nඅන්තර්ජාලය යනු ලොව පුරා ඇති පරිගණක ජාලයන්ගේ එකතුවකි. එය ලෝක ප්‍රජාව සමඟ තොරතුරු හුවමාරු කර ගැනීමේ වේගවත්ම මාර්ගයයි (තොරතුරු සුපිරි මහා මාර්ගය - Information Super Highway). අද වන විට අන්තර්ජාලය භාවිතය නිසා මුළු ලෝකයම එක් ගම්මානයක් (Global Village) බවට පත්ව ඇත.",
          "highlightTerm": "What is the Internet?"
        },
        {
          "id": "b-g11-u3-1-2",
          "en": "Governance & Ethics:\nThe Internet does not possess a single owner and a non-profitable organization called 'The Internet Society' is in charge of the ethics and principles related to the use of the Internet and the protocols which maintain Internet operations.",
          "si": "පාලනය සහ ආචාරධර්ම:\nඅන්තර්ජාලයට තනි හිමිකරුවෙකු නොමැති අතර 'අන්තර්ජාල සංගමය' (The Internet Society) නමැති ලාභ නොලබන සංවිධානය මගින් අන්තර්ජාලය භාවිතයට අදාළ ආචාරධර්ම, ප්‍රතිපත්ති සහ නියමාවලීන් පවත්වා ගෙන යනු ලබයි.\"\n\n---",
          "highlightTerm": "Governance & Ethics"
        },
        {
          "id": "b-g11-u3-1-3",
          "en": "Client-Server Architecture:\nThe Internet is a Wide Area Network (WAN) which is based on a Client-Server Model. Hence, all the computers in Internet belong either to the type of servers or clients.",
          "si": "සේවාලාභී - සේවාදායක ආකෘතිය:\nඅන්තර්ජාලය යනු පුළුල් ප්‍රදේශ ජාලයක් (WAN - Wide Area Network) වන අතර එය සේවාලාභී - සේවාදායක (Client-Server) ආකෘතිය මත පදනම්ව සකස් වී ඇත.",
          "highlightTerm": "Client-Server Architecture"
        },
        {
          "id": "b-g11-u3-1-4",
          "en": "Core Definitions:\nThe computer that distributes the resources required by the client computer is called the server.",
          "si": "මූලික අර්ථ දැක්වීම්:\nසේවාලාභී පරිගණක වෙත අවශ්‍ය සම්පත් බෙදා දෙනු ලබන පරිගණකය සේවාදායක පරිගණකය (Server) ලෙස හැඳින්වේ.\"\n  2. **Downloading (බාගත කිරීම):**\n     * **[English Medium Text]:** \"The activity of retrieving information from the server computers to client computers is called downloading.\"\n     * **[Sinhala Medium Text]:** \"සේවාදායක පරිගණකවල ඇති තොරතුරු සේවාලාභී පරිගණක වෙත ලබා ගැනීම 'බාගත කිරීම' (Downloading) ලෙස හැඳින්වේ.\"\n  3. **Uploading (උඩුගත කිරීම):**\n     * **[English Medium Text]:** \"The activity of providing information from client computers to server computers is called uploading.\"\n     * **[Sinhala Medium Text]:** \"සේවාලාභී පරිගණකවල ඇති තොරතුරු සේවාදායක පරිගණක වෙත ලබා දීම 'උඩුගත කිරීම' (Uploading) ලෙස හැඳින්වේ.\"\n\n---",
          "highlightTerm": "Core Definitions"
        },
        {
          "id": "b-g11-u3-1-5",
          "en": "#### 3.1.3 Key Types of Server Computers (ප්‍රධාන සේවාදායක පරිගණක වර්ග)\n1. **Web Server (ඡාල සේවාදායකය):** Stores web pages and provides them to client computers upon request.\n2. **Mail Server (විද්‍යුත් තැපැල් සේවාදායකය):** Stores electronic mail and handles incoming/outgoing e-mail transfer across the Internet.\n3. **DNS Server (වසම් නාම සේවාදායකය):** Translates human-friendly Domain Names into numerical IP addresses.",
          "si": "#### 3.1.3 Key Types of Server Computers (ප්‍රධාන සේවාදායක පරිගණක වර්ග)\n1. **Web Server (ඡාල සේවාදායකය):** Stores web pages and provides them to client computers upon request.\n2. **Mail Server (විද්‍යුත් තැපැල් සේවාදායකය):** Stores electronic mail and handles incoming/outgoing e-mail transfer across the Internet.\n3. **DNS Server (වසම් නාම සේවාදායකය):** Translates human-friendly Domain Names into numerical IP addresses.",
          "highlightTerm": "Key Types of Server Computers"
        }
      ],
      "examples": [
        {
          "id": "ex-11-3-1-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "Query / Request (ඉල්ලීම)\n   ┌────────────────────────────────────────┐\n   │                                        │\n   ▼                                        │\n┌──────────────┐                       ┌────┴─────────┐\n│ Client PC    │                       │ Server Computer│\n│ (සේවාලාභියා)  ├──────────────────────►│ (සේවාදායකය)  │\n└──────────────┘                       └────┬─────────┘\n   ▲                                        │\n   │       Response / Data (ප්‍රතිචාරය)        │\n   └────────────────────────────────────────┘",
          "contentSi": "Query / Request (ඉල්ලීම)\n   ┌────────────────────────────────────────┐\n   │                                        │\n   ▼                                        │\n┌──────────────┐                       ┌────┴─────────┐\n│ Client PC    │                       │ Server Computer│\n│ (සේවාලාභියා)  ├──────────────────────►│ (සේවාදායකය)  │\n└──────────────┘                       └────┬─────────┘\n   ▲                                        │\n   │       Response / Data (ප්‍රතිචාරය)        │\n   └────────────────────────────────────────┘"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u3-1",
        "questionEn": "Which of the following is the most accurate concept regarding Introduction to the Internet & Network Architecture?",
        "questionSi": "අන්තර්ජාලය හැඳින්වීම සහ ජාල ආකෘතිය පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Introduction to the Internet & Network Architecture",
            "si": "අන්තර්ජාලය හැඳින්වීම සහ ජාල ආකෘතිය පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Introduction to the Internet & Network Architecture.",
        "explanationSi": "1 වන වරණය මගින් අන්තර්ජාලය හැඳින්වීම සහ ජාල ආකෘතිය පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u3-st-2",
      "number": "3.2",
      "titleEn": "Uniform Resource Locator - URL",
      "titleSi": "එකාකාර සම්පත් නිශ්චායකය",
      "summaryEn": "Uniform Resource Locator - URL concepts, definitions, and examination competencies.",
      "summarySi": "එකාකාර සම්පත් නිශ්චායකය සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u3-2-1",
          "en": "Concept & Purpose:\nThe system used to uniquely identify various resources in web sites is the Uniform Resource Locator (URL).",
          "si": "සංකල්පය සහ කාර්යය:\nවෙබ් අඩවි තුළ පවතින විවිධ සම්පත් අනන්‍යව හඳුනා ගැනීමට යොදා ගන්නා ක්‍රමය එකාකාර සම්පත් නිශ්චායකය (URL - Uniform Resource Locator) වේ.\"\n\n---",
          "highlightTerm": "Concept & Purpose"
        },
        {
          "id": "b-g11-u3-2-2",
          "en": "#### 3.2.2 Structural Breakdown of a URL (URL එකක කොටස් ව්‍යුහය)\nConsider the sample URL: `http://www.edupub.gov.lk/e-books/english/ict.pdf`",
          "si": "#### 3.2.2 Structural Breakdown of a URL (URL එකක කොටස් ව්‍යුහය)\nConsider the sample URL: `http://www.edupub.gov.lk/e-books/english/ict.pdf`",
          "highlightTerm": "Structural Breakdown of a URL"
        },
        {
          "id": "b-g11-u3-2-3",
          "en": "#### 3.2.3 Top Level Domains - TLD (ඉහළ මට්ටමේ වසම්)\nDomain names are categorized into **Generic Top-Level Domains (gTLD)** and **Country Code Top-Level Domains (ccTLD)**.\n1. **Generic Top-Level Domains (සංස්ථාපිත/වර්ගීකෘත වසම්):**\n* `.com` - Commercial Organizations (ව්‍යාපාරික ආයතන)\n* `.org` - Non-profit Organizations (ලාභ නොලබන සංවිධාන)\n* `.gov` - Government / Public Sector (රාජ්‍ය ආයතන)\n* `.edu` / `.ac` - Educational Institutions (අධ්‍යාපනික ආයතන)\n* `.net` - Network Infrastructure / Service Providers (ජාල සේවා සපයන්නන්)\n* `.info` - Information Services (තොරතුරු සේවාවන්)\n2. **Country Code Top-Level Domains (රටවල් නිරූපණය කරන වසම්):**\n* `.lk` - Sri Lanka (ශ්‍රී ලංකාව)\n* `.uk` - United Kingdom (එක්සත් රාජධානිය)\n* `.us` - United States of America (ඇමරිකා එක්සත් ජනපදය)\n* `.jp` - Japan (ජපානය)\n* `.au` - Australia (ඕස්ට්‍රේලියාව)",
          "si": "#### 3.2.3 Top Level Domains - TLD (ඉහළ මට්ටමේ වසම්)\nDomain names are categorized into **Generic Top-Level Domains (gTLD)** and **Country Code Top-Level Domains (ccTLD)**.\n1. **Generic Top-Level Domains (සංස්ථාපිත/වර්ගීකෘත වසම්):**\n* `.com` - Commercial Organizations (ව්‍යාපාරික ආයතන)\n* `.org` - Non-profit Organizations (ලාභ නොලබන සංවිධාන)\n* `.gov` - Government / Public Sector (රාජ්‍ය ආයතන)\n* `.edu` / `.ac` - Educational Institutions (අධ්‍යාපනික ආයතන)\n* `.net` - Network Infrastructure / Service Providers (ජාල සේවා සපයන්නන්)\n* `.info` - Information Services (තොරතුරු සේවාවන්)\n2. **Country Code Top-Level Domains (රටවල් නිරූපණය කරන වසම්):**\n* `.lk` - Sri Lanka (ශ්‍රී ලංකාව)\n* `.uk` - United Kingdom (එක්සත් රාජධානිය)\n* `.us` - United States of America (ඇමරිකා එක්සත් ජනපදය)\n* `.jp` - Japan (ජපානය)\n* `.au` - Australia (ඕස්ට්‍රේලියාව)",
          "highlightTerm": "Top Level Domains - TLD"
        }
      ],
      "examples": [
        {
          "id": "ex-11-3-2-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "http://  www.  edupub.  gov.  lk /e-books/english/ ict.pdf\n  ───────  ────  ───────  ────  ── ───────────────── ───────\n     │       │      │      │    │          │            │\n     │       │      │      │    │          │            └── File Name (ගොනුවේ නම)\n     │       │      │      │    │          └────────────── Directory Path (ගොනු පථය)\n     │       │      │      │    └──────────────────────── Top-Level Country Domain (.lk)\n     │       │      │      └───────────────────────────── Category Domain (.gov)\n     │       │      └──────────────────────────────────── Organization Domain (edupub)\n     │       └─────────────────────────────────────────── Service / Subdomain (www)\n     └─────────────────────────────────────────────────── Protocol (නියමාවලිය - http)",
          "contentSi": "http://  www.  edupub.  gov.  lk /e-books/english/ ict.pdf\n  ───────  ────  ───────  ────  ── ───────────────── ───────\n     │       │      │      │    │          │            │\n     │       │      │      │    │          │            └── File Name (ගොනුවේ නම)\n     │       │      │      │    │          └────────────── Directory Path (ගොනු පථය)\n     │       │      │      │    └──────────────────────── Top-Level Country Domain (.lk)\n     │       │      │      └───────────────────────────── Category Domain (.gov)\n     │       │      └──────────────────────────────────── Organization Domain (edupub)\n     │       └─────────────────────────────────────────── Service / Subdomain (www)\n     └─────────────────────────────────────────────────── Protocol (නියමාවලිය - http)"
        }
      ],
      "tableData": {
        "headers": [
          {
            "en": "Component",
            "si": "කොටස"
          },
          {
            "en": "Part in Sample URL",
            "si": "Part in Sample URL"
          },
          {
            "en": "Explanation",
            "si": "විස්තරය"
          }
        ],
        "rows": [
          {
            "col0": {
              "en": "Protocol (නියමාවලිය)",
              "si": "Protocol (නියමාවලිය)"
            },
            "col1": {
              "en": "`http://`",
              "si": "`http://`"
            },
            "col2": {
              "en": "Rules used for data communication (Hypertext Transfer Protocol).",
              "si": "Rules used for data communication (Hypertext Transfer Protocol)."
            }
          },
          {
            "col0": {
              "en": "Service (සේවාව)",
              "si": "Service (සේවාව)"
            },
            "col1": {
              "en": "`www`",
              "si": "`www`"
            },
            "col2": {
              "en": "Service on the Internet (World Wide Web).",
              "si": "Service on the Internet (World Wide Web)."
            }
          },
          {
            "col0": {
              "en": "Domain Name (වසම් නාමය)",
              "si": "Domain Name (වසම් නාමය)"
            },
            "col1": {
              "en": "`edupub.gov.lk`",
              "si": "`edupub.gov.lk`"
            },
            "col2": {
              "en": "Unique name assigned to the web server hosting the website.",
              "si": "Unique name assigned to the web server hosting the website."
            }
          },
          {
            "col0": {
              "en": "Directory Path (ගොනු පථය)",
              "si": "Directory Path (ගොනු පථය)"
            },
            "col1": {
              "en": "`/e-books/english/`",
              "si": "`/e-books/english/`"
            },
            "col2": {
              "en": "Specific folder location on the web server.",
              "si": "Specific folder location on the web server."
            }
          },
          {
            "col0": {
              "en": "File Name (ගොනුවේ නම)",
              "si": "File Name (ගොනුවේ නම)"
            },
            "col1": {
              "en": "`ict.pdf`",
              "si": "`ict.pdf`"
            },
            "col2": {
              "en": "Specific resource or document requested.",
              "si": "Specific resource or document requested."
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g11-u3-2",
        "questionEn": "Which of the following is the most accurate concept regarding Uniform Resource Locator - URL?",
        "questionSi": "එකාකාර සම්පත් නිශ්චායකය පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Uniform Resource Locator - URL",
            "si": "එකාකාර සම්පත් නිශ්චායකය පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Uniform Resource Locator - URL.",
        "explanationSi": "1 වන වරණය මගින් එකාකාර සම්පත් නිශ්චායකය පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u3-st-3",
      "number": "3.3",
      "titleEn": "IP Addresses and Domain Name System - DNS",
      "titleSi": "IP ලිපින සහ වසම් නාම සේවාදායකය",
      "summaryEn": "IP Addresses and Domain Name System - DNS concepts, definitions, and examination competencies.",
      "summarySi": "IP ලිපින සහ වසම් නාම සේවාදායකය සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u3-3-1",
          "en": "IP Address:\nAn IP address is used to uniquely identify a computer or device on the Internet. It is represented in 'Dotted Decimal Notation' consisting of four numbers ranging from 0 to 255 separated by full stops.",
          "si": "IP ලිපිනය:\nඅන්තර්ජාලයේ ඇති ඕනෑම පරිගණකයක් හෝ උපාංගයක් අනන්‍යව හඳුනා ගැනීමට IP (Internet Protocol) ලිපිනය භාවිත කෙරේ. මෙය දශම තිතෙන් වෙන් කරන ලද 0 සිට 255 දක්වා වූ අගයන් හතරකින් දක්වනු ලබන අතර එය 'Dotted Decimal Notation' ලෙස හැඳින්වේ.",
          "highlightTerm": "IP Address"
        },
        {
          "id": "b-g11-u3-3-2",
          "en": "Example:** `172.64.85.24`, `192.168.1.1`",
          "si": "Example:** `172.64.85.24`, `192.168.1.1`",
          "highlightTerm": "Example:** `172.64.85.24`, `192.168.1.1`"
        },
        {
          "id": "b-g11-u3-3-3",
          "en": "ISP Role:** Assigned to computers by an **Internet Service Provider (ISP)**.",
          "si": "ISP Role:** Assigned to computers by an **Internet Service Provider (ISP)**.",
          "highlightTerm": "ISP Role:** Assigned to computers by an **Internet Service Provider"
        },
        {
          "id": "b-g11-u3-3-4",
          "en": "Domain Name System - DNS:\nDomain name is used to uniquely identify a web site in a human-friendly format. Domain Name Server (DNS) converts the human-readable domain name into a numerical IP address required by computers.",
          "si": "වසම් නාම සේවාදායකය:\nමිනිසාට මතක තබා ගැනීමේ පහසුව සඳහා වසම් නාම (Domain Names) භාවිත කරන අතර, පරිගණක එකිනෙක හඳුනා ගන්නේ IP ලිපින මගිනි. වසම් නාම සේවාදායකය (DNS Server) මගින් සිදු කරන්නේ අදාළ වසම් නාමය පරිගණකයට තේරෙන සංඛ්‍යාත්මක IP ලිපිනය බවට පරිවර්තනය කිරීමයි.\"\n\n\n\n\n---",
          "highlightTerm": "Domain Name System - DNS"
        }
      ],
      "examples": [
        {
          "id": "ex-11-3-3-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "User types: \"www.google.com\"\n       │\n       ▼\n ┌──────────┐  Translates \"www.google.com\"   ┌──────────────┐\n │ Client   ├───────────────────────────────►│  DNS Server  │\n │ Browser  │◄──────────────────────────────┤ (DNS සේවාදායකය)│\n └──────────┘  Returns IP: \"172.217.160.196\" └──────────────┘",
          "contentSi": "User types: \"www.google.com\"\n       │\n       ▼\n ┌──────────┐  Translates \"www.google.com\"   ┌──────────────┐\n │ Client   ├───────────────────────────────►│  DNS Server  │\n │ Browser  │◄──────────────────────────────┤ (DNS සේවාදායකය)│\n └──────────┘  Returns IP: \"172.217.160.196\" └──────────────┘"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u3-3",
        "questionEn": "Which of the following is the most accurate concept regarding IP Addresses and Domain Name System - DNS?",
        "questionSi": "IP ලිපින සහ වසම් නාම සේවාදායකය පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of IP Addresses and Domain Name System - DNS",
            "si": "IP ලිපින සහ වසම් නාම සේවාදායකය පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for IP Addresses and Domain Name System - DNS.",
        "explanationSi": "1 වන වරණය මගින් IP ලිපින සහ වසම් නාම සේවාදායකය පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u3-st-4",
      "number": "3.4",
      "titleEn": "Internet Protocols",
      "titleSi": "අන්තර්ජාල නියමාවලීන්",
      "summaryEn": "Internet Protocols concepts, definitions, and examination competencies.",
      "summarySi": "අන්තර්ජාල නියමාවලීන් සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u3-4-1",
          "en": "Definition (අර්ථ දැක්වීම):** A set of standard rules and guidelines used to govern data communication between computers across a network.",
          "si": "Definition (අර්ථ දැක්වීම):** A set of standard rules and guidelines used to govern data communication between computers across a network.",
          "highlightTerm": "Definition (අර්ථ දැක්වීම):** A set of standard rules and guidelines used to govern data communication between computers across a network"
        },
        {
          "id": "b-g11-u3-4-2",
          "en": "#### Core Internet Protocols Summary Table (ප්‍රධාන නියමාවලී වගුව):",
          "si": "#### Core Internet Protocols Summary Table (ප්‍රධාන නියමාවලී වගුව):",
          "highlightTerm": "Core Internet Protocols Summary Table"
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
            "si": "සම්පූර්ණ නමය"
          },
          {
            "en": "Core Function & Application",
            "si": "ප්‍රධාන කාර්යය සහ යෙදීම"
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
              "en": "Transferring web pages and HTML documents between web servers and client web browsers.",
              "si": "Transferring web pages and HTML documents between web servers and client web browsers."
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
              "en": "Encrypted and secure transfer of web pages (used in e-banking and e-commerce).",
              "si": "Encrypted and secure transfer of web pages (used in e-banking and e-commerce)."
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
              "en": "Core backbone protocol governing packet transmission and IP addressing across WAN.",
              "si": "Core backbone protocol governing packet transmission and IP addressing across WAN."
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
              "en": "Transferring large files between computers over the Internet (uploading/downloading).",
              "si": "Transferring large files between computers over the Internet (uploading/downloading)."
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
              "en": "Sending electronic mails between mail servers across the Internet.",
              "si": "Sending electronic mails between mail servers across the Internet."
            }
          },
          {
            "col0": {
              "en": "POP3",
              "si": "POP3"
            },
            "col1": {
              "en": "Post Office Protocol version 3",
              "si": "Post Office Protocol version 3"
            },
            "col2": {
              "en": "Downloading received emails from a mail server to a local client computer.",
              "si": "Downloading received emails from a mail server to a local client computer."
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
              "en": "Accessing and managing emails directly on the mail server interactively.",
              "si": "Accessing and managing emails directly on the mail server interactively."
            }
          },
          {
            "col0": {
              "en": "ICMP",
              "si": "ICMP"
            },
            "col1": {
              "en": "Internet Control Message Protocol",
              "si": "Internet Control Message Protocol"
            },
            "col2": {
              "en": "Handling network error reporting and diagnostic control messages.",
              "si": "Handling network error reporting and diagnostic control messages."
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g11-u3-4",
        "questionEn": "Which of the following is the most accurate concept regarding Internet Protocols?",
        "questionSi": "අන්තර්ජාල නියමාවලීන් පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Internet Protocols",
            "si": "අන්තර්ජාල නියමාවලීන් පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Internet Protocols.",
        "explanationSi": "1 වන වරණය මගින් අන්තර්ජාල නියමාවලීන් පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u3-st-5",
      "number": "3.5",
      "titleEn": "Key Services Provided by the Internet",
      "titleSi": "අන්තර්ජාලයේ ප්‍රධාන සේවාවන්",
      "summaryEn": "Key Services Provided by the Internet concepts, definitions, and examination competencies.",
      "summarySi": "අන්තර්ජාලයේ ප්‍රධාන සේවාවන් සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u3-5-1",
          "en": "1. **World Wide Web (WWW - ලෝක විසිරි වියමන):**\n* Large collection of electronic documents (web pages) linked via hyperlinks.\n* Invented by **Sir Tim Berners-Lee**.\n* Accessed using a **Web Browser** (e.g. *Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, Opera*).\n* **Home Page (මුල් පිටුව):** The main entry page of a website.\n2. **Search Engines (සෙවුම් යන්ත්‍ර):**\n* Web tools used to search information using keywords when the exact URL is unknown (*Google, Yahoo, Bing, Ask, MSN*).\n3. **File Transfer Protocol (FTP - ගොනු හුවමාරුව):**\n* Used for sending/receiving large capacity files that cannot be attached in standard emails.\n4. **Remote Access & Management (දුරස්ථ පිවිසුමය):**\n* Controlling and operating remote server computers over a network (e.g. Telnet, SSH, Remote Desktop).\n5. **Streaming Media (මාධ්‍ය සැපයුම):**\n* Real-time audio and video playback without needing to download the entire file first (*YouTube, Netflix*).\n6. **Electronic Mail (E-mail - විද්‍යුත් තැපෑල):**\n* Fastest and most economical method of message communication globally.\n7. **Cloud Computing (වලාකුළු පරිගණකකරණය):**\n* Accessing remote computing resources and storage online.",
          "si": "1. **World Wide Web (WWW - ලෝක විසිරි වියමන):**\n* Large collection of electronic documents (web pages) linked via hyperlinks.\n* Invented by **Sir Tim Berners-Lee**.\n* Accessed using a **Web Browser** (e.g. *Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, Opera*).\n* **Home Page (මුල් පිටුව):** The main entry page of a website.\n2. **Search Engines (සෙවුම් යන්ත්‍ර):**\n* Web tools used to search information using keywords when the exact URL is unknown (*Google, Yahoo, Bing, Ask, MSN*).\n3. **File Transfer Protocol (FTP - ගොනු හුවමාරුව):**\n* Used for sending/receiving large capacity files that cannot be attached in standard emails.\n4. **Remote Access & Management (දුරස්ථ පිවිසුමය):**\n* Controlling and operating remote server computers over a network (e.g. Telnet, SSH, Remote Desktop).\n5. **Streaming Media (මාධ්‍ය සැපයුම):**\n* Real-time audio and video playback without needing to download the entire file first (*YouTube, Netflix*).\n6. **Electronic Mail (E-mail - විද්‍යුත් තැපෑල):**\n* Fastest and most economical method of message communication globally.\n7. **Cloud Computing (වලාකුළු පරිගණකකරණය):**\n* Accessing remote computing resources and storage online.",
          "highlightTerm": "World Wide Web"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u3-5",
        "questionEn": "Which of the following is the most accurate concept regarding Key Services Provided by the Internet?",
        "questionSi": "අන්තර්ජාලයේ ප්‍රධාන සේවාවන් පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Key Services Provided by the Internet",
            "si": "අන්තර්ජාලයේ ප්‍රධාන සේවාවන් පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Key Services Provided by the Internet.",
        "explanationSi": "1 වන වරණය මගින් අන්තර්ජාලයේ ප්‍රධාන සේවාවන් පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u3-st-6",
      "number": "3.6",
      "titleEn": "Electronic Mail - E-Mail System",
      "titleSi": "විද්‍යුත් තැපැල් පද්ධතිය",
      "summaryEn": "Electronic Mail - E-Mail System concepts, definitions, and examination competencies.",
      "summarySi": "විද්‍යුත් තැපැල් පද්ධතිය සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u3-6-1",
          "en": "#### 3.6.1 Advantages of E-mail (විද්‍යුත් තැපෑලේ වාසි)",
          "si": "#### 3.6.1 Advantages of E-mail (විද්‍යුත් තැපෑලේ වාසි)",
          "highlightTerm": "Advantages of E-mail"
        },
        {
          "id": "b-g11-u3-6-2",
          "en": "High Speed (ඉහළ වේගය):** Delivered within seconds anywhere globally.",
          "si": "High Speed (ඉහළ වේගය):** Delivered within seconds anywhere globally.",
          "highlightTerm": "High Speed (ඉහළ වේගය):** Delivered within seconds anywhere globally"
        },
        {
          "id": "b-g11-u3-6-3",
          "en": "Low Cost (අඩු පිරිවැය):** Only requires an active Internet connection.",
          "si": "Low Cost (අඩු පිරිවැය):** Only requires an active Internet connection.",
          "highlightTerm": "Low Cost (අඩු පිරිවැය):** Only requires an active Internet connection"
        },
        {
          "id": "b-g11-u3-6-4",
          "en": "Versatility & Attachments (විවිධ මාධ්‍ය හුවමාරුව):** Ability to attach documents, photos, audio, and video files.",
          "si": "Versatility & Attachments (විවිධ මාධ්‍ය හුවමාරුව):** Ability to attach documents, photos, audio, and video files.",
          "highlightTerm": "Versatility & Attachments (විවිධ මාධ්‍ය හුවමාරුව):** Ability to attach documents, photos, audio, and video files"
        },
        {
          "id": "b-g11-u3-6-5",
          "en": "Global Access (ඕනෑම තැනක සිට පිවිසිය හැකි වීම):** Accessible anytime from any device with Internet.",
          "si": "Global Access (ඕනෑම තැනක සිට පිවිසිය හැකි වීම):** Accessible anytime from any device with Internet.",
          "highlightTerm": "Global Access (ඕනෑම තැනක සිට පිවිසිය හැකි වීම):** Accessible anytime from any device with Internet"
        },
        {
          "id": "b-g11-u3-6-6",
          "en": "#### 3.6.2 E-mail Address Structure (විද්‍යුත් තැපැල් ලිපිනයක ව්‍යුහය)",
          "si": "#### 3.6.2 E-mail Address Structure (විද්‍යුත් තැපැල් ලිපිනයක ව්‍යුහය)",
          "highlightTerm": "E-mail Address Structure"
        },
        {
          "id": "b-g11-u3-6-7",
          "en": "Example:** `exams@doenets.lk`\n- `exams` = **Username (පරිශීලක නමය)**\n- `@` = **At Symbol (සංකේතය)**\n- `doenets.lk` = **Domain Name (වසම් නමය)",
          "si": "Example:** `exams@doenets.lk`\n- `exams` = **Username (පරිශීලක නමය)**\n- `@` = **At Symbol (සංකේතය)**\n- `doenets.lk` = **Domain Name (වසම් නමය)",
          "highlightTerm": "Example:** `exams@doenets.lk`"
        },
        {
          "id": "b-g11-u3-6-8",
          "en": "#### 3.6.3 E-mail Header Fields & Recipient Rules (විද්‍යුත් තැපැල් පණිවුඩයක සංරචක)",
          "si": "#### 3.6.3 E-mail Header Fields & Recipient Rules (විද්‍යුත් තැපැල් පණිවුඩයක සංරචක)",
          "highlightTerm": "E-mail Header Fields & Recipient Rules"
        },
        {
          "id": "b-g11-u3-6-9",
          "en": "#### 3.6.4 Standard E-mail Folders (විද්‍යුත් තැපැල් ෆෝල්ඩර)",
          "si": "#### 3.6.4 Standard E-mail Folders (විද්‍යුත් තැපැල් ෆෝල්ඩර)",
          "highlightTerm": "Standard E-mail Folders"
        },
        {
          "id": "b-g11-u3-6-10",
          "en": "Inbox (ලැබුණු ලිපි):** Stores received messages.",
          "si": "Inbox (ලැබුණු ලිපි):** Stores received messages.",
          "highlightTerm": "Inbox (ලැබුණු ලිපි):** Stores received messages"
        },
        {
          "id": "b-g11-u3-6-11",
          "en": "Sent (යැවූ ලිපි):** Stores sent messages.",
          "si": "Sent (යැවූ ලිපි):** Stores sent messages.",
          "highlightTerm": "Sent (යැවූ ලිපි):** Stores sent messages"
        },
        {
          "id": "b-g11-u3-6-12",
          "en": "Drafts (කෙටුම්පත්):** Stores composed messages that have not been sent yet.",
          "si": "Drafts (කෙටුම්පත්):** Stores composed messages that have not been sent yet.",
          "highlightTerm": "Drafts (කෙටුම්පත්):** Stores composed messages that have not been sent yet"
        },
        {
          "id": "b-g11-u3-6-13",
          "en": "Trash / Deleted (ඉවත් කළ ලිපි):** Stores deleted messages temporarily before permanent erasure.",
          "si": "Trash / Deleted (ඉවත් කළ ලිපි):** Stores deleted messages temporarily before permanent erasure.",
          "highlightTerm": "Trash / Deleted (ඉවත් කළ ලිපි):** Stores deleted messages temporarily before permanent erasure"
        },
        {
          "id": "b-g11-u3-6-14",
          "en": "Spam / Junk (ආයාචිත / අන්තරායකර ලිපි):** Filters out unwanted, unsolicited bulk promotional or harmful emails away from the Inbox.",
          "si": "Spam / Junk (ආයාචිත / අන්තරායකර ලිපි):** Filters out unwanted, unsolicited bulk promotional or harmful emails away from the Inbox.",
          "highlightTerm": "Spam / Junk (ආයාචිත / අන්තරායකර ලිපි):** Filters out unwanted, unsolicited bulk promotional or harmful emails away from the Inbox"
        },
        {
          "id": "b-g11-u3-6-15",
          "en": "#### 3.6.5 E-mail Operations (විද්‍යුත් තැපැල් මෙහෙයුම්)",
          "si": "#### 3.6.5 E-mail Operations (විද්‍යුත් තැපැල් මෙහෙයුම්)",
          "highlightTerm": "E-mail Operations"
        },
        {
          "id": "b-g11-u3-6-16",
          "en": "Compose / New:** Creating a new email message.",
          "si": "Compose / New:** Creating a new email message.",
          "highlightTerm": "Compose / New:** Creating a new email message"
        },
        {
          "id": "b-g11-u3-6-17",
          "en": "Reply:** Replying **ONLY to the original sender** of the email.",
          "si": "Reply:** Replying **ONLY to the original sender** of the email.",
          "highlightTerm": "Reply:** Replying **ONLY to the original sender** of the email"
        },
        {
          "id": "b-g11-u3-6-18",
          "en": "Reply All:** Replying to the original sender **AND ALL recipients** listed in the `To` and `Cc` fields.",
          "si": "Reply All:** Replying to the original sender **AND ALL recipients** listed in the `To` and `Cc` fields.",
          "highlightTerm": "Reply All:** Replying to the original sender **AND ALL recipients** listed in the `To` and `Cc` fields"
        },
        {
          "id": "b-g11-u3-6-19",
          "en": "Forward:** Resending a received email message to a new third-party recipient.",
          "si": "Forward:** Resending a received email message to a new third-party recipient.",
          "highlightTerm": "Forward:** Resending a received email message to a new third-party recipient"
        }
      ],
      "examples": [
        {
          "id": "ex-11-3-6-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "┌────────────────────────────────────────────────────────────────────────┐\n│ New Message                                                   ─ ◻ ×    │\n├────────────────────────────────────────────────────────────────────────┤\n│ To      : sasikala7@gmail.com                                          │\n│ Cc      : bpdasun@yahoo.com                                            │\n│ Bcc     : monali@sltnet.lk                                             │\n│ Subject : O/L Results Released                                         │\n├────────────────────────────────────────────────────────────────────────┤\n│ Dear All,                                                              │\n│                                                                        │\n│ Please find attached my official G.C.E. O/L examination results sheet.  │\n│                                                                        │\n│ Best regards,                                                          │\n│ Shani                                                                  │\n├────────────────────────────────────────────────────────────────────────┤\n│ [📎 Results.pdf]                                                      │\n│ ┌──────┐                                                               │\n│ │ Send │ 🎨 📎 🔗 😃 💾                                                │\n│ └──────┘                                                               │\n└────────────────────────────────────────────────────────────────────────┘",
          "contentSi": "┌────────────────────────────────────────────────────────────────────────┐\n│ New Message                                                   ─ ◻ ×    │\n├────────────────────────────────────────────────────────────────────────┤\n│ To      : sasikala7@gmail.com                                          │\n│ Cc      : bpdasun@yahoo.com                                            │\n│ Bcc     : monali@sltnet.lk                                             │\n│ Subject : O/L Results Released                                         │\n├────────────────────────────────────────────────────────────────────────┤\n│ Dear All,                                                              │\n│                                                                        │\n│ Please find attached my official G.C.E. O/L examination results sheet.  │\n│                                                                        │\n│ Best regards,                                                          │\n│ Shani                                                                  │\n├────────────────────────────────────────────────────────────────────────┤\n│ [📎 Results.pdf]                                                      │\n│ ┌──────┐                                                               │\n│ │ Send │ 🎨 📎 🔗 😃 💾                                                │\n│ └──────┘                                                               │\n└────────────────────────────────────────────────────────────────────────┘"
        }
      ],
      "tableData": {
        "headers": [
          {
            "en": "Header Field",
            "si": "ක්ෂේත්‍රය"
          },
          {
            "en": "Meaning & Recipient Visibility Rules",
            "si": "අර්ථය සහ විස්තරය"
          }
        ],
        "rows": [
          {
            "col0": {
              "en": "To (ලබන්නා)",
              "si": "To (ලබන්නා)"
            },
            "col1": {
              "en": "Primary Recipient(s): Direct addressee(s). Email address is VISIBLE to ALL recipients (`To`, `Cc`, and `Bcc`).",
              "si": "Primary Recipient(s): Direct addressee(s). Email address is VISIBLE to ALL recipients (`To`, `Cc`, and `Bcc`)."
            }
          },
          {
            "col0": {
              "en": "Cc (Carbon Copy)",
              "si": "Cc (Carbon Copy)"
            },
            "col1": {
              "en": "Secondary Recipient(s): Courtesy copy. Email address is VISIBLE to ALL recipients (`To`, `Cc`, and `Bcc`).",
              "si": "Secondary Recipient(s): Courtesy copy. Email address is VISIBLE to ALL recipients (`To`, `Cc`, and `Bcc`)."
            }
          },
          {
            "col0": {
              "en": "Bcc (Blind Carbon Copy)",
              "si": "Bcc (Blind Carbon Copy)"
            },
            "col1": {
              "en": "Tertiary Recipient(s): Hidden copy. Email address is HIDDEN from `To` and `Cc` recipients. The `Bcc` recipient CAN see all `To` and `Cc` addresses, but `To` and `Cc` recipients CANNOT see who was placed in `Bcc`.",
              "si": "Tertiary Recipient(s): Hidden copy. Email address is HIDDEN from `To` and `Cc` recipients. The `Bcc` recipient CAN see all `To` and `Cc` addresses, but `To` and `Cc` recipients CANNOT see who was placed in `Bcc`."
            }
          },
          {
            "col0": {
              "en": "Subject (විෂය)",
              "si": "Subject (විෂය)"
            },
            "col1": {
              "en": "Brief text summary describing the topic or purpose of the email.",
              "si": "Brief text summary describing the topic or purpose of the email."
            }
          },
          {
            "col0": {
              "en": "Body (පණිවුඩය)",
              "si": "Body (පණිවුඩය)"
            },
            "col1": {
              "en": "The main text content of the email message.",
              "si": "The main text content of the email message."
            }
          },
          {
            "col0": {
              "en": "Attachment (ඇමුණුම - 📎)",
              "si": "Attachment (ඇමුණුම - 📎)"
            },
            "col1": {
              "en": "External files (PDFs, images, Word docs) attached to the email.",
              "si": "External files (PDFs, images, Word docs) attached to the email."
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g11-u3-6",
        "questionEn": "Which of the following is the most accurate concept regarding Electronic Mail - E-Mail System?",
        "questionSi": "විද්‍යුත් තැපැල් පද්ධතිය පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Electronic Mail - E-Mail System",
            "si": "විද්‍යුත් තැපැල් පද්ධතිය පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Electronic Mail - E-Mail System.",
        "explanationSi": "1 වන වරණය මගින් විද්‍යුත් තැපැල් පද්ධතිය පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u3-st-7",
      "number": "3.7",
      "titleEn": "Cloud Computing Concepts & Service Models",
      "titleSi": "වලාකුළු පරිගණකකරණය",
      "summaryEn": "Cloud Computing Concepts & Service Models concepts, definitions, and examination competencies.",
      "summarySi": "වලාකුළු පරිගණකකරණය සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u3-7-1",
          "en": "Definition (අර්ථ දැක්වීම):** The practice of using a network of remote servers hosted on the Internet to store, manage, and process data, rather than relying on a local physical server or personal computer.",
          "si": "Definition (අර්ථ දැක්වීම):** The practice of using a network of remote servers hosted on the Internet to store, manage, and process data, rather than relying on a local physical server or personal computer.",
          "highlightTerm": "Definition (අර්ථ දැක්වීම):** The practice of using a network of remote servers hosted on the Internet to store, manage, and process data, rather than relying on a local physical server or personal computer"
        },
        {
          "id": "b-g11-u3-7-2",
          "en": "Cloud Service Models:\nProvides virtualized computing infrastructure such as servers, storage space, network bandwidth, and firewalls over the Internet.",
          "si": "වලාකුළු සේවා මාදිලි 3:\nදත්ත ගබඩා කිරීමට සහ මෘදුකාංග ක්‍රියාත්මක කිරීමට අවශ්‍ය සේවාදායක පරිගණක අවකාශය (Server Space), මතක ධාරිතාව සහ ගිනි පවුරු (Firewall) වැනි යටිතල පහසුකම් අතථ්‍යව (Virtual) ලබා දීම.\"\n   * **Example:** AWS, Google Cloud Infrastructure, Virtual Server Hosting.\n\n2. **Platform as a Service - PaaS (සංවර්ධන පරිසර සේවාව):**\n   * **[English Medium Text]:** \"Provides a complete hardware and software environment for software developers to design, code, test, and deploy applications without purchasing local OS or compilers.\"\n   * **[Sinhala Medium Text]:** \"මෘදුකාංග නිෂ්පාදනය සහ සංවර්ධනය සඳහා අවශ්‍ය වන මෙහෙයුම් පද්ධති, ක්‍රමලේඛන භාෂා පරිසර, දත්ත සමුදා සහ වෙබ් සේවාදායක පහසුකම් සපයන මාදිලිය.\"\n   * **Example:** Google App Engine, Heroku.\n\n3. **Software as a Service - SaaS (මෘදුකාංග සේවාව):**\n   * **[English Medium Text]:** \"Provides access to fully functional software applications hosted in the cloud directly via a web browser, eliminating the need for local software installation and license management.\"\n   * **[Sinhala Medium Text]:** \"පරිශීලකයාගේ පරිගණකයේ හෝ ජංගම දුරකථනයේ මෘදුකාංග ස්ථාපනය (Install) නොකර, වෙබ් අන්වේශකයක් (Web Browser) හරහා අන්තර්ජාලයේ ඇති මෘදුකාංග සෘජුවම භාවිත කිරීමට පහසුකම් සැලසීම.\"\n   * **Example:** Google Docs, MS Office 365 Online, Canva, Gmail.\n   * **Advantages of SaaS:** No local installation required, automatic software updates, accessible from any device anywhere, lower hardware/licensing costs.\n   * **Disadvantages of SaaS:** Requires continuous high-speed Internet connection; potential data privacy and vendor lock-in concerns.\n\n---",
          "highlightTerm": "Cloud Service Models"
        }
      ],
      "examples": [
        {
          "id": "ex-11-3-7-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "┌─────────────────────────────────────────┐\n                  │          CLOUD COMPUTING SERVICES       │\n                  └────────────────────┬────────────────────┘\n                                       │\n         ┌─────────────────────────────┼─────────────────────────────┐\n         │                             │                             │\n         ▼                             ▼                             ▼\n┌─────────────────┐           ┌─────────────────┐           ┌─────────────────┐\n│     I a a S     │           │     P a a S     │           │     S a a S     │\n│ Infrastructure  │           │   Platform as   │           │   Software as   │\n│   as a Service  │           │   a Service     │           │   a Service     │\n└─────────────────┘           └─────────────────┘           └─────────────────┘",
          "contentSi": "┌─────────────────────────────────────────┐\n                  │          CLOUD COMPUTING SERVICES       │\n                  └────────────────────┬────────────────────┘\n                                       │\n         ┌─────────────────────────────┼─────────────────────────────┐\n         │                             │                             │\n         ▼                             ▼                             ▼\n┌─────────────────┐           ┌─────────────────┐           ┌─────────────────┐\n│     I a a S     │           │     P a a S     │           │     S a a S     │\n│ Infrastructure  │           │   Platform as   │           │   Software as   │\n│   as a Service  │           │   a Service     │           │   a Service     │\n└─────────────────┘           └─────────────────┘           └─────────────────┘"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u3-7",
        "questionEn": "Which of the following is the most accurate concept regarding Cloud Computing Concepts & Service Models?",
        "questionSi": "වලාකුළු පරිගණකකරණය පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Cloud Computing Concepts & Service Models",
            "si": "වලාකුළු පරිගණකකරණය පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Cloud Computing Concepts & Service Models.",
        "explanationSi": "1 වන වරණය මගින් වලාකුළු පරිගණකකරණය පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g11-u3-st-8",
      "number": "3.8",
      "titleEn": "Cyber Security, Malware & Protection",
      "titleSi": "සයිබර් ආරක්ෂාව සහ අන්තරායකර මෘදුකාංග",
      "summaryEn": "Cyber Security, Malware & Protection concepts, definitions, and examination competencies.",
      "summarySi": "සයිබර් ආරක්ෂාව සහ අන්තරායකර මෘදුකාංග සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g11-u3-8-1",
          "en": "#### 3.8.1 Common Malicious Software / Malware Types (අන්තරායකර මෘදුකාංග වර්ග)\n1. **Computer Virus (පරිගණක වෛරස):** Malicious executable code that attaches to host files and corrupts or erases computer data.\n2. **Computer Worm (පරිගණක පණුවන්):** Self-replicating malware that spreads across computer networks without needing a host file, consuming bandwidth and slowing down systems.\n3. **Trojan Horse (ට්‍රෝජන් අශ්වයා):** Malware disguised as legitimate software that opens backdoor unauthorized access to hackers.\n4. **Spyware (ඔත්තු බලන මෘදුකාංග):** Secretly monitors user activities and steals personal logins, passwords, and sensitive information.\n5. **Phishing (තත්තුබෑම):** Fraudulent practice of sending fake emails or links appearing from reputable institutions (e.g. banks) to trick users into revealing credit card or banking passwords.\n6. **Bots (බොට්ස්):** Automated scripts operating over networks to scrape private conversational data.\n7. **Browser Hijacker (අතිරික්සු කොල්ලකරුවන්):** Misdirects user web traffic to unwanted advertising sites.\n8. **Spam (ආයාචිත තැපෑල):** Unsolicited bulk emails sent to millions of users.",
          "si": "#### 3.8.1 Common Malicious Software / Malware Types (අන්තරායකර මෘදුකාංග වර්ග)\n1. **Computer Virus (පරිගණක වෛරස):** Malicious executable code that attaches to host files and corrupts or erases computer data.\n2. **Computer Worm (පරිගණක පණුවන්):** Self-replicating malware that spreads across computer networks without needing a host file, consuming bandwidth and slowing down systems.\n3. **Trojan Horse (ට්‍රෝජන් අශ්වයා):** Malware disguised as legitimate software that opens backdoor unauthorized access to hackers.\n4. **Spyware (ඔත්තු බලන මෘදුකාංග):** Secretly monitors user activities and steals personal logins, passwords, and sensitive information.\n5. **Phishing (තත්තුබෑම):** Fraudulent practice of sending fake emails or links appearing from reputable institutions (e.g. banks) to trick users into revealing credit card or banking passwords.\n6. **Bots (බොට්ස්):** Automated scripts operating over networks to scrape private conversational data.\n7. **Browser Hijacker (අතිරික්සු කොල්ලකරුවන්):** Misdirects user web traffic to unwanted advertising sites.\n8. **Spam (ආයාචිත තැපෑල):** Unsolicited bulk emails sent to millions of users.",
          "highlightTerm": "Common Malicious Software / Malware Types"
        },
        {
          "id": "b-g11-u3-8-2",
          "en": "#### 3.8.2 Prevention & Defense Measures (ආරක්ෂණ උපක්‍රම)",
          "si": "#### 3.8.2 Prevention & Defense Measures (ආරක්ෂණ උපක්‍රම)",
          "highlightTerm": "Prevention & Defense Measures"
        },
        {
          "id": "b-g11-u3-8-3",
          "en": "Virus Guard / Antivirus:** Install reputable, updated antivirus software (*Avast, Kaspersky, Norton, BitDefender, AVG, Avira*).",
          "si": "Virus Guard / Antivirus:** Install reputable, updated antivirus software (*Avast, Kaspersky, Norton, BitDefender, AVG, Avira*).",
          "highlightTerm": "Virus Guard / Antivirus:** Install reputable, updated antivirus software"
        },
        {
          "id": "b-g11-u3-8-4",
          "en": "Firewall (ගිනි පවුර):** Blocks unauthorized network intrusions and illegal access attempts.",
          "si": "Firewall (ගිනි පවුර):** Blocks unauthorized network intrusions and illegal access attempts.",
          "highlightTerm": "Firewall (ගිනි පවුර):** Blocks unauthorized network intrusions and illegal access attempts"
        },
        {
          "id": "b-g11-u3-8-5",
          "en": "Passwords & User Accounts:** Maintain strong passwords and use standard user accounts rather than administrator accounts for daily work.",
          "si": "Passwords & User Accounts:** Maintain strong passwords and use standard user accounts rather than administrator accounts for daily work.",
          "highlightTerm": "Passwords & User Accounts:** Maintain strong passwords and use standard user accounts rather than administrator accounts for daily work"
        },
        {
          "id": "b-g11-u3-8-6",
          "en": "Data Backups (දත්ත උපස්ථ):** Regularly save duplicate copies of critical files on external storage.",
          "si": "Data Backups (දත්ත උපස්ථ):** Regularly save duplicate copies of critical files on external storage.",
          "highlightTerm": "Data Backups (දත්ත උපස්ථ):** Regularly save duplicate copies of critical files on external storage"
        },
        {
          "id": "b-g11-u3-8-7",
          "en": "#### 3.8.3 Cyber Security Organizations in Sri Lanka (ශ්‍රී ලංකාවේ සයිබර් ආරක්ෂණ ආයතන)",
          "si": "#### 3.8.3 Cyber Security Organizations in Sri Lanka (ශ්‍රී ලංකාවේ සයිබර් ආරක්ෂණ ආයතන)",
          "highlightTerm": "Cyber Security Organizations in Sri Lanka"
        },
        {
          "id": "b-g11-u3-8-8",
          "en": "Sri Lanka CERT|CC (Sri Lanka Computer Emergency Readiness Team | Coordination Centre):**\n* The national agency established under **ICTA (Information and Communication Technology Agency)** responsible for maintaining Cyber Security, handling incident response, and certifying **Information Security Management Systems (ISMS)** for citizens, businesses, and state institutions.",
          "si": "Sri Lanka CERT|CC (Sri Lanka Computer Emergency Readiness Team | Coordination Centre):**\n* The national agency established under **ICTA (Information and Communication Technology Agency)** responsible for maintaining Cyber Security, handling incident response, and certifying **Information Security Management Systems (ISMS)** for citizens, businesses, and state institutions.",
          "highlightTerm": "Sri Lanka CERT|CC"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g11-u3-8",
        "questionEn": "Which of the following is the most accurate concept regarding Cyber Security, Malware & Protection?",
        "questionSi": "සයිබර් ආරක්ෂාව සහ අන්තරායකර මෘදුකාංග පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Cyber Security, Malware & Protection",
            "si": "සයිබර් ආරක්ෂාව සහ අන්තරායකර මෘදුකාංග පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Cyber Security, Malware & Protection.",
        "explanationSi": "1 වන වරණය මගින් සයිබර් ආරක්ෂාව සහ අන්තරායකර මෘදුකාංග පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
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
      "explanationEn": "Verbatim official examination question from 2020 O/L Paper I - Question 24.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper I - Question 24."
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
      "explanationEn": "Verbatim official examination question from 2020 O/L Paper I - Question 25.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper I - Question 25."
    },
    {
      "id": "pp-g11-u3-2020-3",
      "year": 2020,
      "paperType": "Paper II",
      "badgeText": "2020 O/L Paper II - Question 01 (iv)",
      "questionEn": "1. (iv) Fill in the blanks (a) to (e) using the most suitable terms from the list given below:\n  [List: backup, password, firewall, phishing, virus, spamming]\n  (a) A ................... can be used to prevent unauthorized access to data stored in a standalone computer.\n  (b) Having a ................... is necessary for the safety of essential data in case of a computer crash.\n  (c) ................... is an act of cheating users to collect user names and passwords of electronic bank accounts.\n  (d) A ................... can be used to safeguard a computer system from harmful software.\n  (e) A ................... enters a computer as an executable file and can erase files.",
      "questionSi": "1. (iv) පහත දක්වා ඇති පද ලැයිස්තුවෙන් වඩාත්ම සුදුසු පද තෝරා (a) සිට (e) දක්වා හිස්තැන් පුරවන්න:\n  [පද ලැයිස්තුව: backup, password, firewall, phishing, virus, spamming]\n  (a) අන්අවසර ප්‍රවේශ වැළැක්වීම මගින් තනිව පවතින පරිගණකයක ආචිත දත්ත ආරක්ෂා කිරීමට ................... ක් භාවිත කරනු ලැබේ.\n  (b) පරිගණකයක ක්‍රියාකාරීත්වය ඇනහිටින අවස්ථාවක අත්‍යවශ්‍ය දත්තවල සුරක්ෂිතතාව සඳහා ................... කර තිබීම අවශ්‍ය වේ.\n  (c) විද්‍යුත් බෑංකු ගිණුම්වල පරිශීලක නාම සහ මුරපද එකතු කර ගැනීමේ කාර්යය සඳහා පරිශීලකයින්ව රැවටීමේ ක්‍රියාව ................... ලෙස හැඳින්වේ.\n  (d) පරිගණක පද්ධතියක් හානිකර මෘදුකාංගවලින් ආරක්ෂා කර ගැනීමට ................... ක් භාවිත කළ හැක.\n  (e) ................... පරිගණකයකට ඇතුළු වන්නේ ධාවනය කළ හැකි ගොනුවක් (executable file) ලෙස වන අතර ගොනු මකා දැමිය හැක.",
      "type": "structured",
      "sampleAnswerEn": "- (a) **password** / මුරපදය\n  - (b) **backup** / උපස්ථ\n  - (c) **phishing** / තත්තුබෑම\n  - (d) **firewall** / ගිනිපවුර\n  - (e) **virus** / වෛරසය\n\n---",
      "sampleAnswerSi": "- (a) **password** / මුරපදය\n  - (b) **backup** / උපස්ථ\n  - (c) **phishing** / තත්තුබෑම\n  - (d) **firewall** / ගිනිපවුර\n  - (e) **virus** / වෛරසය\n\n---",
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
      "sampleAnswerEn": "1. No need to install software locally on individual computers.\n  2. Reduces hardware purchasing and software licensing costs for the institute.\n  3. Automatic updates managed by the cloud service provider.\n\n---",
      "sampleAnswerSi": "1. No need to install software locally on individual computers.\n  2. Reduces hardware purchasing and software licensing costs for the institute.\n  3. Automatic updates managed by the cloud service provider.\n\n---",
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
      "explanationEn": "Verbatim official examination question from 2021 O/L Paper I - Question 21.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2021 O/L Paper I - Question 21."
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
      "explanationEn": "Verbatim official examination question from 2021 O/L Paper I - Question 24.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2021 O/L Paper I - Question 24."
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
      "explanationEn": "Verbatim official examination question from 2021 O/L Paper I - Question 25.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2021 O/L Paper I - Question 25."
    },
    {
      "id": "pp-g11-u3-2021-8",
      "year": 2021,
      "paperType": "Paper II",
      "badgeText": "2021 O/L Paper II - Question 05 (vii)",
      "questionEn": "5. (vii) Match the descriptions labelled P to S with the correct terms from the list given below:\n  [List: FTP, SMTP, URL, IP address, IaaS, Trash, Draft, SaaS]\n  P – Used for electronic mail exchange among mail servers on the Internet\n  Q – Provides access to the software installed in the cloud\n  R – Folder to store mails that are composed to be sent, but not completed yet\n  S – Used to uniquely identify a computer on the Internet",
      "questionSi": "5. (vii) P සිට S දක්වා වූ ලේබල මගින් දැක්වෙන විස්තර, ලබා දී ඇති පද ලැයිස්තුවෙන් තෝරා ගැලපෙන්න:\n  [පද ලැයිස්තුව: FTP, SMTP, URL, IP address, IaaS, Trash, Draft, SaaS]\n  P – අන්තර්ජාලයේ පවතින තැපැල් සේවාදායක අතර විද්‍යුත් තැපැල් හුවමාරුව සඳහා භාවිත වේ.\n  Q – වලාකුළෙහි (cloud) ස්ථාපනය කරන ලද මෘදුකාංගවලට ප්‍රවේශය ලබා දෙයි.\n  R – යැවීමට පිළියෙළ කරන ලද, එහෙත් සම්පූර්ණ නොවූ ලිපි ආචයනය සඳහා වූ ෆෝල්ඩරය\n  S – අන්තර්ජාලයේ පවතින පරිගණකයක් අනන්‍යව හඳුනාගැනීමට භාවිත වේ.",
      "type": "structured",
      "sampleAnswerEn": "- P $\nightarrow$ **SMTP**\n  - Q $",
      "sampleAnswerSi": "- P $\nightarrow$ **SMTP**\n  - Q $",
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
      "sampleAnswerEn": "- **(i):** P $\nightarrow$ **HTTP**, Q $\nightarrow$ **URL**, R $\nightarrow$ **IP address**, S $\nightarrow$ **SMTP**\n  - **(ii):** A $",
      "sampleAnswerSi": "- **(i):** P $\nightarrow$ **HTTP**, Q $\nightarrow$ **URL**, R $\nightarrow$ **IP address**, S $\nightarrow$ **SMTP**\n  - **(ii):** A $",
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
      "sampleAnswerEn": "- **(i):** P $\nightarrow$ **SMTP**, Q $\nightarrow$ **HTTP**, R $\nightarrow$ **IP address**, S $\nightarrow$ **URL**\n  - **(ii):** 1 $",
      "sampleAnswerSi": "- **(i):** P $\nightarrow$ **SMTP**, Q $\nightarrow$ **HTTP**, R $\nightarrow$ **IP address**, S $\nightarrow$ **URL**\n  - **(ii):** 1 $",
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
      "sampleAnswerEn": "- A $\nightarrow$ **True** / සත්‍යයි\n  - B $",
      "sampleAnswerSi": "- A $\nightarrow$ **True** / සත්‍යයි\n  - B $",
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
      "sampleAnswerEn": "- A $\nightarrow$ **4 (Google)**\n  - B $",
      "sampleAnswerSi": "- A $\nightarrow$ **4 (Google)**\n  - B $",
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
      "sampleAnswerEn": "- (a) `192.168.1.1` (or any valid 4-number IP dotted decimal address)\n  - (b):\n    - A $",
      "sampleAnswerSi": "- (a) `192.168.1.1` (or any valid 4-number IP dotted decimal address)\n  - (b):\n    - A $",
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
      "sampleAnswerEn": "- A $\nightarrow$ **1 (DNS)**\n  - B $",
      "sampleAnswerSi": "- A $\nightarrow$ **1 (DNS)**\n  - B $",
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
      "sampleAnswerEn": "- (a) **Domain Name:** `www.ugc.lk` (or `ugc.lk`)\n  - (b) **File Name:** `handbook.html`\n  - (c) **📎 Icon Use:** To attach external files (documents, images, PDFs) to the email message.\n  - (d) **Difference:** 'Reply' sends the response only to the original sender, whereas 'Reply all' sends the response to the original sender AND all other recipients in the `To` and `Cc` lists.",
      "sampleAnswerSi": "- (a) **Domain Name:** `www.ugc.lk` (or `ugc.lk`)\n  - (b) **File Name:** `handbook.html`\n  - (c) **📎 Icon Use:** To attach external files (documents, images, PDFs) to the email message.\n  - (d) **Difference:** 'Reply' sends the response only to the original sender, whereas 'Reply all' sends the response to the original sender AND all other recipients in the `To` and `Cc` lists.",
      "explanationEn": "Verbatim official examination question from 2025 O/L Paper II - Question 01 (x).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2025 O/L Paper II - Question 01 (x)."
    }
  ]
};
