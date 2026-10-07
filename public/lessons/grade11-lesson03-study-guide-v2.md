# Grade 11 ICT - Lesson 03: Complete Dual-Medium Study & Past Paper Guide (v2)

## Document Overview
This study and past paper guide provides 100% comprehensive, verbatim, dual-medium coverage of **Grade 11 - Lesson 03: The Internet and the Electronic Mail (අන්තර්ජාලය සහ විද්‍යුත් තැපෑල)** from the official Sri Lankan O/L ICT curriculum. All theory content and exam questions are extracted word-for-word from the Grade 11 English Medium Textbook (`ICT G-11 E.pdf`), Grade 11 Sinhala Medium Textbook (`ict 11 S.pdf`), and official G.C.E. O/L examination past papers (2020–2025).

---

# SECTION A: Complete Learning Guide & Short Notes (Comprehensive Theory)

### 3.1 Introduction to the Internet & Network Architecture (අන්තර්ජාලය හැඳින්වීම සහ ජාල ආකෘතිය)

#### 3.1.1 What is the Internet? (අන්තර්ජාලය යනු කුමක්ද?)
* **[English Medium Text]:** "The Internet is a collection of computer networks around the world. It is the fastest available way to share information with the world community (Information super highway). With the use of Internet today, the whole world has become a global village."
* **[Sinhala Medium Text]:** "අන්තර්ජාලය යනු ලොව පුරා ඇති පරිගණක ජාලයන්ගේ එකතුවකි. එය ලෝක ප්‍රජාව සමඟ තොරතුරු හුවමාරු කර ගැනීමේ වේගවත්ම මාර්ගයයි (තොරතුරු සුපිරි මහා මාර්ගය - Information Super Highway). අද වන විට අන්තර්ජාලය භාවිතය නිසා මුළු ලෝකයම එක් ගම්මානයක් (Global Village) බවට පත්ව ඇත."

* **Governance & Ethics (පාලනය සහ ආචාරධර්ම):**
  * **[English Medium Text]:** "The Internet does not possess a single owner and a non-profitable organization called 'The Internet Society' is in charge of the ethics and principles related to the use of the Internet and the protocols which maintain Internet operations."
  * **[Sinhala Medium Text]:** "අන්තර්ජාලයට තනි හිමිකරුවෙකු නොමැති අතර 'අන්තර්ජාල සංගමය' (The Internet Society) නමැති ලාභ නොලබන සංවිධානය මගින් අන්තර්ජාලය භාවිතයට අදාළ ආචාරධර්ම, ප්‍රතිපත්ති සහ නියමාවලීන් පවත්වා ගෙන යනු ලබයි."

---

#### 3.1.2 Client-Server Architecture (සේවාලාභී - සේවාදායක ආකෘතිය)
* **[English Medium Text]:** "The Internet is a Wide Area Network (WAN) which is based on a Client-Server Model. Hence, all the computers in Internet belong either to the type of servers or clients."
* **[Sinhala Medium Text]:** "අන්තර්ජාලය යනු පුළුල් ප්‍රදේශ ජාලයක් (WAN - Wide Area Network) වන අතර එය සේවාලාභී - සේවාදායක (Client-Server) ආකෘතිය මත පදනම්ව සකස් වී ඇත."

```
           Query / Request (ඉල්ලීම)
   ┌────────────────────────────────────────┐
   │                                        │
   ▼                                        │
┌──────────────┐                       ┌────┴─────────┐
│ Client PC    │                       │ Server Computer│
│ (සේවාලාභියා)  ├──────────────────────►│ (සේවාදායකය)  │
└──────────────┘                       └────┬─────────┘
   ▲                                        │
   │       Response / Data (ප්‍රතිචාරය)        │
   └────────────────────────────────────────┘
```

* **Core Definitions (මූලික අර්ථ දැක්වීම්):**
  1. **Server Computer (සේවාදායක පරිගණකය):**
     * **[English Medium Text]:** "The computer that distributes the resources required by the client computer is called the server."
     * **[Sinhala Medium Text]:** "සේවාලාභී පරිගණක වෙත අවශ්‍ය සම්පත් බෙදා දෙනු ලබන පරිගණකය සේවාදායක පරිගණකය (Server) ලෙස හැඳින්වේ."
  2. **Downloading (බාගත කිරීම):**
     * **[English Medium Text]:** "The activity of retrieving information from the server computers to client computers is called downloading."
     * **[Sinhala Medium Text]:** "සේවාදායක පරිගණකවල ඇති තොරතුරු සේවාලාභී පරිගණක වෙත ලබා ගැනීම 'බාගත කිරීම' (Downloading) ලෙස හැඳින්වේ."
  3. **Uploading (උඩුගත කිරීම):**
     * **[English Medium Text]:** "The activity of providing information from client computers to server computers is called uploading."
     * **[Sinhala Medium Text]:** "සේවාලාභී පරිගණකවල ඇති තොරතුරු සේවාදායක පරිගණක වෙත ලබා දීම 'උඩුගත කිරීම' (Uploading) ලෙස හැඳින්වේ."

---

#### 3.1.3 Key Types of Server Computers (ප්‍රධාන සේවාදායක පරිගණක වර්ග)
1. **Web Server (ඡාල සේවාදායකය):** Stores web pages and provides them to client computers upon request.
2. **Mail Server (විද්‍යුත් තැපැල් සේවාදායකය):** Stores electronic mail and handles incoming/outgoing e-mail transfer across the Internet.
3. **DNS Server (වසම් නාම සේවාදායකය):** Translates human-friendly Domain Names into numerical IP addresses.

---

### 3.2 Uniform Resource Locator - URL (එකාකාර සම්පත් නිශ්චායකය)

#### 3.2.1 Concept & Purpose (සංකල්පය සහ කාර්යය)
* **[English Medium Text]:** "The system used to uniquely identify various resources in web sites is the Uniform Resource Locator (URL)."
* **[Sinhala Medium Text]:** "වෙබ් අඩවි තුළ පවතින විවිධ සම්පත් අනන්‍යව හඳුනා ගැනීමට යොදා ගන්නා ක්‍රමය එකාකාර සම්පත් නිශ්චායකය (URL - Uniform Resource Locator) වේ."

---

#### 3.2.2 Structural Breakdown of a URL (URL එකක කොටස් ව්‍යුහය)

Consider the sample URL: `http://www.edupub.gov.lk/e-books/english/ict.pdf`

```
  http://  www.  edupub.  gov.  lk /e-books/english/ ict.pdf
  ───────  ────  ───────  ────  ── ───────────────── ───────
     │       │      │      │    │          │            │
     │       │      │      │    │          │            └── File Name (ගොනුවේ නම)
     │       │      │      │    │          └────────────── Directory Path (ගොනු පථය)
     │       │      │      │    └──────────────────────── Top-Level Country Domain (.lk)
     │       │      │      └───────────────────────────── Category Domain (.gov)
     │       │      └──────────────────────────────────── Organization Domain (edupub)
     │       └─────────────────────────────────────────── Service / Subdomain (www)
     └─────────────────────────────────────────────────── Protocol (නියමාවලිය - http)
```

| Component (කොටස) | Part in Sample URL | Explanation (විස්තරය) |
| :--- | :--- | :--- |
| **Protocol (නියමාවලිය)** | `http://` | Rules used for data communication (Hypertext Transfer Protocol). |
| **Service (සේවාව)** | `www` | Service on the Internet (World Wide Web). |
| **Domain Name (වසම් නාමය)** | `edupub.gov.lk` | Unique name assigned to the web server hosting the website. |
| **Directory Path (ගොනු පථය)** | `/e-books/english/` | Specific folder location on the web server. |
| **File Name (ගොනුවේ නම)** | `ict.pdf` | Specific resource or document requested. |

---

#### 3.2.3 Top Level Domains - TLD (ඉහළ මට්ටමේ වසම්)

Domain names are categorized into **Generic Top-Level Domains (gTLD)** and **Country Code Top-Level Domains (ccTLD)**.

1. **Generic Top-Level Domains (සංස්ථාපිත/වර්ගීකෘත වසම්):**
   * `.com` - Commercial Organizations (ව්‍යාපාරික ආයතන)
   * `.org` - Non-profit Organizations (ලාභ නොලබන සංවිධාන)
   * `.gov` - Government / Public Sector (රාජ්‍ය ආයතන)
   * `.edu` / `.ac` - Educational Institutions (අධ්‍යාපනික ආයතන)
   * `.net` - Network Infrastructure / Service Providers (ජාල සේවා සපයන්නන්)
   * `.info` - Information Services (තොරතුරු සේවාවන්)

2. **Country Code Top-Level Domains (රටවල් නිරූපණය කරන වසම්):**
   * `.lk` - Sri Lanka (ශ්‍රී ලංකාව)
   * `.uk` - United Kingdom (එක්සත් රාජධානිය)
   * `.us` - United States of America (ඇමරිකා එක්සත් ජනපදය)
   * `.jp` - Japan (ජපානය)
   * `.au` - Australia (ඕස්ට්‍රේලියාව)

---

### 3.3 IP Addresses and Domain Name System - DNS (IP ලිපින සහ වසම් නාම සේවාදායකය)

#### 3.3.1 IP Address (IP ලිපිනය)
* **[English Medium Text]:** "An IP address is used to uniquely identify a computer or device on the Internet. It is represented in 'Dotted Decimal Notation' consisting of four numbers ranging from 0 to 255 separated by full stops."
* **[Sinhala Medium Text]:** "අන්තර්ජාලයේ ඇති ඕනෑම පරිගණකයක් හෝ උපාංගයක් අනන්‍යව හඳුනා ගැනීමට IP (Internet Protocol) ලිපිනය භාවිත කෙරේ. මෙය දශම තිතෙන් වෙන් කරන ලද 0 සිට 255 දක්වා වූ අගයන් හතරකින් දක්වනු ලබන අතර එය 'Dotted Decimal Notation' ලෙස හැඳින්වේ."
* **Example:** `172.64.85.24`, `192.168.1.1`
* **ISP Role:** Assigned to computers by an **Internet Service Provider (ISP)**.

---

#### 3.3.2 Domain Name System - DNS (වසම් නාම සේවාදායකය)
* **[English Medium Text]:** "Domain name is used to uniquely identify a web site in a human-friendly format. Domain Name Server (DNS) converts the human-readable domain name into a numerical IP address required by computers."
* **[Sinhala Medium Text]:** "මිනිසාට මතක තබා ගැනීමේ පහසුව සඳහා වසම් නාම (Domain Names) භාවිත කරන අතර, පරිගණක එකිනෙක හඳුනා ගන්නේ IP ලිපින මගිනි. වසම් නාම සේවාදායකය (DNS Server) මගින් සිදු කරන්නේ අදාළ වසම් නාමය පරිගණකයට තේරෙන සංඛ්‍යාත්මක IP ලිපිනය බවට පරිවර්තනය කිරීමයි."

```
 User types: "www.google.com"
       │
       ▼
 ┌──────────┐  Translates "www.google.com"   ┌──────────────┐
 │ Client   ├───────────────────────────────►│  DNS Server  │
 │ Browser  │◄──────────────────────────────┤ (DNS සේවාදායකය)│
 └──────────┘  Returns IP: "172.217.160.196" └──────────────┘
```

---

### 3.4 Internet Protocols (අන්තර්ජාල නියමාවලීන්)

* **Definition (අර්ථ දැක්වීම):** A set of standard rules and guidelines used to govern data communication between computers across a network.

#### Core Internet Protocols Summary Table (ප්‍රධාන නියමාවලී වගුව):

| Protocol (නියමාවලිය) | Full Name (සම්පූර්ණ නමය) | Core Function & Application (ප්‍රධාන කාර්යය සහ යෙදීම) |
| :--- | :--- | :--- |
| **HTTP** | Hypertext Transfer Protocol | Transferring web pages and HTML documents between web servers and client web browsers. |
| **HTTPS** | Hypertext Transfer Protocol Secure | Encrypted and secure transfer of web pages (used in e-banking and e-commerce). |
| **TCP/IP** | Transmission Control Protocol / Internet Protocol | Core backbone protocol governing packet transmission and IP addressing across WAN. |
| **FTP** | File Transfer Protocol | Transferring large files between computers over the Internet (uploading/downloading). |
| **SMTP** | Simple Mail Transfer Protocol | Sending electronic mails between mail servers across the Internet. |
| **POP3** | Post Office Protocol version 3 | Downloading received emails from a mail server to a local client computer. |
| **IMAP** | Internet Message Access Protocol | Accessing and managing emails directly on the mail server interactively. |
| **ICMP** | Internet Control Message Protocol | Handling network error reporting and diagnostic control messages. |

---

### 3.5 Key Services Provided by the Internet (අන්තර්ජාලයේ ප්‍රධාන සේවාවන්)

1. **World Wide Web (WWW - ලෝක විසිරි වියමන):**
   * Large collection of electronic documents (web pages) linked via hyperlinks.
   * Invented by **Sir Tim Berners-Lee**.
   * Accessed using a **Web Browser** (e.g. *Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, Opera*).
   * **Home Page (මුල් පිටුව):** The main entry page of a website.
2. **Search Engines (සෙවුම් යන්ත්‍ර):**
   * Web tools used to search information using keywords when the exact URL is unknown (*Google, Yahoo, Bing, Ask, MSN*).
3. **File Transfer Protocol (FTP - ගොනු හුවමාරුව):**
   * Used for sending/receiving large capacity files that cannot be attached in standard emails.
4. **Remote Access & Management (දුරස්ථ පිවිසුමය):**
   * Controlling and operating remote server computers over a network (e.g. Telnet, SSH, Remote Desktop).
5. **Streaming Media (මාධ්‍ය සැපයුම):**
   * Real-time audio and video playback without needing to download the entire file first (*YouTube, Netflix*).
6. **Electronic Mail (E-mail - විද්‍යුත් තැපෑල):**
   * Fastest and most economical method of message communication globally.
7. **Cloud Computing (වලාකුළු පරිගණකකරණය):**
   * Accessing remote computing resources and storage online.

---

### 3.6 Electronic Mail - E-Mail System (විද්‍යුත් තැපැල් පද්ධතිය)

#### 3.6.1 Advantages of E-mail (විද්‍යුත් තැපෑලේ වාසි)
* **High Speed (ඉහළ වේගය):** Delivered within seconds anywhere globally.
* **Low Cost (අඩු පිරිවැය):** Only requires an active Internet connection.
* **Versatility & Attachments (විවිධ මාධ්‍ය හුවමාරුව):** Ability to attach documents, photos, audio, and video files.
* **Global Access (ඕනෑම තැනක සිට පිවිසිය හැකි වීම):** Accessible anytime from any device with Internet.

---

#### 3.6.2 E-mail Address Structure (විද්‍යුත් තැපැල් ලිපිනයක ව්‍යුහය)

* **Example:** `exams@doenets.lk`
  - `exams` = **Username (පරිශීලක නමය)**
  - `@` = **At Symbol (සංකේතය)**
  - `doenets.lk` = **Domain Name (වසම් නමය)**

---

#### 3.6.3 E-mail Header Fields & Recipient Rules (විද්‍යුත් තැපැල් පණිවුඩයක සංරචක)

```
┌────────────────────────────────────────────────────────────────────────┐
│ New Message                                                   ─ ◻ ×    │
├────────────────────────────────────────────────────────────────────────┤
│ To      : sasikala7@gmail.com                                          │
│ Cc      : bpdasun@yahoo.com                                            │
│ Bcc     : monali@sltnet.lk                                             │
│ Subject : O/L Results Released                                         │
├────────────────────────────────────────────────────────────────────────┤
│ Dear All,                                                              │
│                                                                        │
│ Please find attached my official G.C.E. O/L examination results sheet.  │
│                                                                        │
│ Best regards,                                                          │
│ Shani                                                                  │
├────────────────────────────────────────────────────────────────────────┤
│ [📎 Results.pdf]                                                      │
│ ┌──────┐                                                               │
│ │ Send │ 🎨 📎 🔗 😃 💾                                                │
│ └──────┘                                                               │
└────────────────────────────────────────────────────────────────────────┘
```

| Header Field (ක්ෂේත්‍රය) | Meaning & Recipient Visibility Rules (අර්ථය සහ විස්තරය) |
| :--- | :--- |
| **To (ලබන්නා)** | **Primary Recipient(s):** Direct addressee(s). Email address is **VISIBLE to ALL** recipients (`To`, `Cc`, and `Bcc`). |
| **Cc (Carbon Copy)** | **Secondary Recipient(s):** Courtesy copy. Email address is **VISIBLE to ALL** recipients (`To`, `Cc`, and `Bcc`). |
| **Bcc (Blind Carbon Copy)** | **Tertiary Recipient(s):** Hidden copy. Email address is **HIDDEN from `To` and `Cc`** recipients. The `Bcc` recipient **CAN see** all `To` and `Cc` addresses, but `To` and `Cc` recipients **CANNOT see** who was placed in `Bcc`. |
| **Subject (විෂය)** | Brief text summary describing the topic or purpose of the email. |
| **Body (පණිවුඩය)** | The main text content of the email message. |
| **Attachment (ඇමුණුම - 📎)** | External files (PDFs, images, Word docs) attached to the email. |

---

#### 3.6.4 Standard E-mail Folders (විද්‍යුත් තැපැල් ෆෝල්ඩර)
* **Inbox (ලැබුණු ලිපි):** Stores received messages.
* **Sent (යැවූ ලිපි):** Stores sent messages.
* **Drafts (කෙටුම්පත්):** Stores composed messages that have not been sent yet.
* **Trash / Deleted (ඉවත් කළ ලිපි):** Stores deleted messages temporarily before permanent erasure.
* **Spam / Junk (ආයාචිත / අන්තරායකර ලිපි):** Filters out unwanted, unsolicited bulk promotional or harmful emails away from the Inbox.

---

#### 3.6.5 E-mail Operations (විද්‍යුත් තැපැල් මෙහෙයුම්)
* **Compose / New:** Creating a new email message.
* **Reply:** Replying **ONLY to the original sender** of the email.
* **Reply All:** Replying to the original sender **AND ALL recipients** listed in the `To` and `Cc` fields.
* **Forward:** Resending a received email message to a new third-party recipient.

---

### 3.7 Cloud Computing Concepts & Service Models (වලාකුළු පරිගණකකරණය)

* **Definition (අර්ථ දැක්වීම):** The practice of using a network of remote servers hosted on the Internet to store, manage, and process data, rather than relying on a local physical server or personal computer.

```
                  ┌─────────────────────────────────────────┐
                  │          CLOUD COMPUTING SERVICES       │
                  └────────────────────┬────────────────────┘
                                       │
         ┌─────────────────────────────┼─────────────────────────────┐
         │                             │                             │
         ▼                             ▼                             ▼
┌─────────────────┐           ┌─────────────────┐           ┌─────────────────┐
│     I a a S     │           │     P a a S     │           │     S a a S     │
│ Infrastructure  │           │   Platform as   │           │   Software as   │
│   as a Service  │           │   a Service     │           │   a Service     │
└─────────────────┘           └─────────────────┘           └─────────────────┘
```

#### 3 Cloud Service Models (වලාකුළු සේවා මාදිලි 3):

1. **Infrastructure as a Service - IaaS (යටිතල පහසුකම් සේවාව):**
   * **[English Medium Text]:** "Provides virtualized computing infrastructure such as servers, storage space, network bandwidth, and firewalls over the Internet."
   * **[Sinhala Medium Text]:** "දත්ත ගබඩා කිරීමට සහ මෘදුකාංග ක්‍රියාත්මක කිරීමට අවශ්‍ය සේවාදායක පරිගණක අවකාශය (Server Space), මතක ධාරිතාව සහ ගිනි පවුරු (Firewall) වැනි යටිතල පහසුකම් අතථ්‍යව (Virtual) ලබා දීම."
   * **Example:** AWS, Google Cloud Infrastructure, Virtual Server Hosting.

2. **Platform as a Service - PaaS (සංවර්ධන පරිසර සේවාව):**
   * **[English Medium Text]:** "Provides a complete hardware and software environment for software developers to design, code, test, and deploy applications without purchasing local OS or compilers."
   * **[Sinhala Medium Text]:** "මෘදුකාංග නිෂ්පාදනය සහ සංවර්ධනය සඳහා අවශ්‍ය වන මෙහෙයුම් පද්ධති, ක්‍රමලේඛන භාෂා පරිසර, දත්ත සමුදා සහ වෙබ් සේවාදායක පහසුකම් සපයන මාදිලිය."
   * **Example:** Google App Engine, Heroku.

3. **Software as a Service - SaaS (මෘදුකාංග සේවාව):**
   * **[English Medium Text]:** "Provides access to fully functional software applications hosted in the cloud directly via a web browser, eliminating the need for local software installation and license management."
   * **[Sinhala Medium Text]:** "පරිශීලකයාගේ පරිගණකයේ හෝ ජංගම දුරකථනයේ මෘදුකාංග ස්ථාපනය (Install) නොකර, වෙබ් අන්වේශකයක් (Web Browser) හරහා අන්තර්ජාලයේ ඇති මෘදුකාංග සෘජුවම භාවිත කිරීමට පහසුකම් සැලසීම."
   * **Example:** Google Docs, MS Office 365 Online, Canva, Gmail.
   * **Advantages of SaaS:** No local installation required, automatic software updates, accessible from any device anywhere, lower hardware/licensing costs.
   * **Disadvantages of SaaS:** Requires continuous high-speed Internet connection; potential data privacy and vendor lock-in concerns.

---

### 3.8 Cyber Security, Malware & Protection (සයිබර් ආරක්ෂාව සහ අන්තරායකර මෘදුකාංග)

#### 3.8.1 Common Malicious Software / Malware Types (අන්තරායකර මෘදුකාංග වර්ග)
1. **Computer Virus (පරිගණක වෛරස):** Malicious executable code that attaches to host files and corrupts or erases computer data.
2. **Computer Worm (පරිගණක පණුවන්):** Self-replicating malware that spreads across computer networks without needing a host file, consuming bandwidth and slowing down systems.
3. **Trojan Horse (ට්‍රෝජන් අශ්වයා):** Malware disguised as legitimate software that opens backdoor unauthorized access to hackers.
4. **Spyware (ඔත්තු බලන මෘදුකාංග):** Secretly monitors user activities and steals personal logins, passwords, and sensitive information.
5. **Phishing (තත්තුබෑම):** Fraudulent practice of sending fake emails or links appearing from reputable institutions (e.g. banks) to trick users into revealing credit card or banking passwords.
6. **Bots (බොට්ස්):** Automated scripts operating over networks to scrape private conversational data.
7. **Browser Hijacker (අතිරික්සු කොල්ලකරුවන්):** Misdirects user web traffic to unwanted advertising sites.
8. **Spam (ආයාචිත තැපෑල):** Unsolicited bulk emails sent to millions of users.

---

#### 3.8.2 Prevention & Defense Measures (ආරක්ෂණ උපක්‍රම)
* **Virus Guard / Antivirus:** Install reputable, updated antivirus software (*Avast, Kaspersky, Norton, BitDefender, AVG, Avira*).
* **Firewall (ගිනි පවුර):** Blocks unauthorized network intrusions and illegal access attempts.
* **Passwords & User Accounts:** Maintain strong passwords and use standard user accounts rather than administrator accounts for daily work.
* **Data Backups (දත්ත උපස්ථ):** Regularly save duplicate copies of critical files on external storage.

---

#### 3.8.3 Cyber Security Organizations in Sri Lanka (ශ්‍රී ලංකාවේ සයිබර් ආරක්ෂණ ආයතන)
* **Sri Lanka CERT|CC (Sri Lanka Computer Emergency Readiness Team | Coordination Centre):**
  * The national agency established under **ICTA (Information and Communication Technology Agency)** responsible for maintaining Cyber Security, handling incident response, and certifying **Information Security Management Systems (ISMS)** for citizens, businesses, and state institutions.

---

# SECTION B: Complete O/L Past Paper Question Extraction (2020 – 2025)

### Question 01 (2020 O/L Paper I - Question 24)
* **Year & Question No:** 2020 O/L Paper I - Question 24
* **English Medium Question:**
  "24. Which of the following statements are correct?
  A – Search engines are used to find information on the World Wide Web (WWW) when the relevant URL is unknown
  B – SMTP is used to transfer messages between mail servers
  C – FTP is used to view web pages on the World Wide Web
  (1) A and B only   (2) A and C only   (3) B and C only   (4) All A, B and C"
* **Sinhala Medium Question:**
  "24. පහත දැක්වෙන ප්‍රකාශ අතුරින් කවරක් නිවැරදි වේ ද?
  A – අදාළ URL එක නොදන්නා විට ලෝක විසිරි වියමනෙන් (WWW) තොරතුරු සොයා ගැනීමට සෙවුම් යන්ත්‍ර (Search Engines) භාවිත කෙරේ.
  B – තැපැල් සේවාදායකයන් (mail servers) අතර පණිවුඩ හුවමාරු කිරීම සඳහා SMTP භාවිත කෙරේ.
  C – ලෝක විසිරි වියමනෙහි වෙබ් පිටු නැරඹීම සඳහා FTP භාවිත කෙරේ.
  (1) A සහ B පමණි   (2) A සහ C පමණි   (3) B සහ C පමණි   (4) A, B සහ C සියල්ලම"
* **Solution / Answer:** Option **(1)** (A and B only). *(C is incorrect because HTTP/HTTPS is used to view web pages, not FTP).*

---

### Question 02 (2020 O/L Paper I - Question 25)
* **Year & Question No:** 2020 O/L Paper I - Question 25
* **English Medium Question:**
  "25. Which of the following statements is correct regarding the Internet and World Wide Web (WWW)?
  (1) The Internet is a service of the World Wide Web
  (2) The World Wide Web is a service of the Internet
  (3) The Internet and World Wide Web are the same
  (4) The World Wide Web is a private network"
* **Sinhala Medium Question:**
  "25. අන්තර්ජාලය සහ ලෝක විසිරි වියමන (WWW) සම්බන්ධයෙන් පහත දැක්වෙන ප්‍රකාශ අතුරින් කවරක් නිවැරදි වේ ද?
  (1) අන්තර්ජාලය යනු ලෝක විසිරි වියමනෙහි සේවාවකි
  (2) ලෝක විසිරි වියමන යනු අන්තර්ජාලයේ සේවාවකි
  (3) අන්තර්ජාලය සහ ලෝක විසිරි වියමන යනු එකක්ම වේ
  (4) ලෝක විසිරි වියමන යනු පෞද්ගලික ජාලයකි"
* **Solution / Answer:** Option **(2)** (World Wide Web is a service of the Internet).

---

### Question 03 (2020 O/L Paper II - Question 01 (iv))
* **Year & Question No:** 2020 O/L Paper II - Question 01 (iv)
* **English Medium Question:**
  "1. (iv) Fill in the blanks (a) to (e) using the most suitable terms from the list given below:
  [List: backup, password, firewall, phishing, virus, spamming]
  (a) A ................... can be used to prevent unauthorized access to data stored in a standalone computer.
  (b) Having a ................... is necessary for the safety of essential data in case of a computer crash.
  (c) ................... is an act of cheating users to collect user names and passwords of electronic bank accounts.
  (d) A ................... can be used to safeguard a computer system from harmful software.
  (e) A ................... enters a computer as an executable file and can erase files."
* **Sinhala Medium Question:**
  "1. (iv) පහත දක්වා ඇති පද ලැයිස්තුවෙන් වඩාත්ම සුදුසු පද තෝරා (a) සිට (e) දක්වා හිස්තැන් පුරවන්න:
  [පද ලැයිස්තුව: backup, password, firewall, phishing, virus, spamming]
  (a) අන්අවසර ප්‍රවේශ වැළැක්වීම මගින් තනිව පවතින පරිගණකයක ආචිත දත්ත ආරක්ෂා කිරීමට ................... ක් භාවිත කරනු ලැබේ.
  (b) පරිගණකයක ක්‍රියාකාරීත්වය ඇනහිටින අවස්ථාවක අත්‍යවශ්‍ය දත්තවල සුරක්ෂිතතාව සඳහා ................... කර තිබීම අවශ්‍ය වේ.
  (c) විද්‍යුත් බෑංකු ගිණුම්වල පරිශීලක නාම සහ මුරපද එකතු කර ගැනීමේ කාර්යය සඳහා පරිශීලකයින්ව රැවටීමේ ක්‍රියාව ................... ලෙස හැඳින්වේ.
  (d) පරිගණක පද්ධතියක් හානිකර මෘදුකාංගවලින් ආරක්ෂා කර ගැනීමට ................... ක් භාවිත කළ හැක.
  (e) ................... පරිගණකයකට ඇතුළු වන්නේ ධාවනය කළ හැකි ගොනුවක් (executable file) ලෙස වන අතර ගොනු මකා දැමිය හැක."
* **Solution / Answer:**
  - (a) **password** / මුරපදය
  - (b) **backup** / උපස්ථ
  - (c) **phishing** / තත්තුබෑම
  - (d) **firewall** / ගිනිපවුර
  - (e) **virus** / වෛරසය

---

### Question 04 (2020 O/L Paper II - Question 03 (i))
* **Year & Question No:** 2020 O/L Paper II - Question 03 (i)
* **English Medium Question:**
  "3. (i) Write down two advantages of using SaaS (Software as a Service), which is a cloud computing service, for an institute."
* **Sinhala Medium Question:**
  "3. (i) වලාකුළු පරිගණක (cloud computing) සේවාවක් වූ SaaS (Software as a Service) භාවිත කිරීමේ දී ආයතනයකට ලැබෙන වාසි දෙකක් ලියන්න."
* **Solution / Answer:**
  1. No need to install software locally on individual computers.
  2. Reduces hardware purchasing and software licensing costs for the institute.
  3. Automatic updates managed by the cloud service provider.

---

### Question 05 (2021 O/L Paper I - Question 21)
* **Year & Question No:** 2021 O/L Paper I - Question 21
* **English Medium Question:**
  "21. Which of the following statements are correct?
  A – HTML tags determine how the web pages are displayed in a web browser.
  B – A URL uniquely identifies a web page on the World Wide Web (WWW).
  C – Hyperlinks allow to link web pages on the World Wide Web.
  (1) A and B only   (2) A and C only   (3) B and C only   (4) All A, B and C"
* **Sinhala Medium Question:**
  "21. පහත සඳහන් කුමන ප්‍රකාශ නිවැරදි වන්නේ ද?
  A – HTML හිජුලන මගින් වෙබ් අන්වේශකය තුළ දී වෙබ් පිටු දිස්වන අයුරු තීරණය කරයි.
  B – ලෝක විසිරි වියමනෙහි දී (WWW) වෙබ් පිටුවක් අනන්‍යව හඳුනාගනු ලබන්නේ URL මගිනි.
  C – අධි සන්ධක (hyperlinks), ලෝක විසිරි වියමනෙහි දී වෙබ් පිටු සම්බන්ධ කිරීමට ඉඩ ලබා දෙයි.
  (1) A සහ B පමණි   (2) A සහ C පමණි   (3) B සහ C පමණි   (4) A, B සහ C සියල්ලම"
* **Solution / Answer:** Option **(4)** (All A, B and C).

---

### Question 06 (2021 O/L Paper I - Question 24)
* **Year & Question No:** 2021 O/L Paper I - Question 24
* **English Medium Question:**
  "24. Which of the following is a correct example for an Internet Protocol (IP) address?
  (1) 172.64.85   (2) 172.64.85.24   (3) 192.214.78.80.1   (4) 192.214.78.256"
* **Sinhala Medium Question:**
  "24. පහත සඳහන් ඒවායින් Internet Protocol (IP) ලිපිනයක් සඳහා නිවැරදි උදාහරණය වන්නේ කුමක්ද?
  (1) 172.64.85   (2) 172.64.85.24   (3) 192.214.78.80.1   (4) 192.214.78.256"
* **Solution / Answer:** Option **(2)** (`172.64.85.24`). *(Option 1 has only 3 octets, Option 3 has 5 octets, Option 4 contains 256 which exceeds max value 255).*

---

### Question 07 (2021 O/L Paper I - Question 25)
* **Year & Question No:** 2021 O/L Paper I - Question 25
* **English Medium Question:**
  "25. Which of the following is the commonly used folder that stores deleted messages in an email system?
  (1) Draft   (2) Inbox   (3) Spam   (4) Trash"
* **Sinhala Medium Question:**
  "25. පහත සඳහන් ඒවායින් විද්‍යුත් තැපැල් පද්ධතියක මකා දැමූ පණිවුඩ තැන්පත් වන සාමාන්‍යයෙන් භාවිත වන ෆෝල්ඩරය කුමක්ද?
  (1) Draft   (2) Inbox   (3) Spam   (4) Trash"
* **Solution / Answer:** Option **(4)** (Trash).

---

### Question 08 (2021 O/L Paper II - Question 05 (vii))
* **Year & Question No:** 2021 O/L Paper II - Question 05 (vii)
* **English Medium Question:**
  "5. (vii) Match the descriptions labelled P to S with the correct terms from the list given below:
  [List: FTP, SMTP, URL, IP address, IaaS, Trash, Draft, SaaS]
  P – Used for electronic mail exchange among mail servers on the Internet
  Q – Provides access to the software installed in the cloud
  R – Folder to store mails that are composed to be sent, but not completed yet
  S – Used to uniquely identify a computer on the Internet"
* **Sinhala Medium Question:**
  "5. (vii) P සිට S දක්වා වූ ලේබල මගින් දැක්වෙන විස්තර, ලබා දී ඇති පද ලැයිස්තුවෙන් තෝරා ගැලපෙන්න:
  [පද ලැයිස්තුව: FTP, SMTP, URL, IP address, IaaS, Trash, Draft, SaaS]
  P – අන්තර්ජාලයේ පවතින තැපැල් සේවාදායක අතර විද්‍යුත් තැපැල් හුවමාරුව සඳහා භාවිත වේ.
  Q – වලාකුළෙහි (cloud) ස්ථාපනය කරන ලද මෘදුකාංගවලට ප්‍රවේශය ලබා දෙයි.
  R – යැවීමට පිළියෙළ කරන ලද, එහෙත් සම්පූර්ණ නොවූ ලිපි ආචයනය සඳහා වූ ෆෝල්ඩරය
  S – අන්තර්ජාලයේ පවතින පරිගණකයක් අනන්‍යව හඳුනාගැනීමට භාවිත වේ."
* **Solution / Answer:**
  - P $ightarrow$ **SMTP**
  - Q $ightarrow$ **SaaS**
  - R $ightarrow$ **Draft**
  - S $ightarrow$ **IP address**

---

### Question 09 (2022 O/L Paper II - Question 05 (i) & (ii))
* **Year & Question No:** 2022 O/L Paper II - Question 05 (i) & (ii)
* **English Medium Question:**
  "5. (i) Match descriptions P - S with terms from List: {DNS, email address, FTP, HTTP, hyperlink, IP address, SMTP, URL}
  P – Used for communication between web server and web client
  Q – Used to uniquely identify a web page in a web server
  R – Used to identify a computer uniquely on the Internet
  S – Used to transfer emails between two email servers

  (ii) Choose examples for A - G from List: {.lk, Firefox, Google, IaaS, Pascal, PHP, Twitter, Wordpress, www.nie.lk}
  A – A content management system
  B – A top level domain name
  C – A web browser
  D – A search engine
  E – A social network
  F – A cloud computing service
  G – A programming language used for web page development"
* **Sinhala Medium Question:**
  "5. (i) P - S විස්තර ලබා දී ඇති පද ලැයිස්තුව සමඟ ගැලපෙන්න:
  P – වෙබ් සේවාදායකය සහ වෙබ් සේවාලාභියා අතර සන්නිවේදනය සඳහා භාවිත වේ
  Q – වෙබ් සේවාදායකයක වෙබ් පිටුවක් අනන්‍යව හඳුනාගැනීමට භාවිත වේ
  R – අන්තර්ජාලයේ පරිගණකයක් අනන්‍යව හඳුනාගැනීමට භාවිත වේ
  S – තැපැල් සේවාදායක දෙකක් අතර විද්‍යුත් තැපැල් හුවමාරුව සඳහා භාවිත වේ

  (ii) A - G සඳහා අදාළ උදාහරණ ලැයිස්තුවෙන් තෝරන්න:
  A – සංකල්ප කළමනාකරණ පද්ධතියක් (CMS)
  B – ඉහළ මට්ටමේ වසම් නාමයක් (TLD)
  C – වෙබ් අන්වේශකයක් (Web Browser)
  D – සෙවුම් යන්ත්‍රයක් (Search Engine)
  E – සමාජ ජාලයක් (Social Network)
  F – වලාකුළු පරිගණක සේවාවක් (Cloud Service)
  G – වෙබ් පිටු ගොඩනැගීමට භාවිත කරන ක්‍රමලේඛන භාෂාවක්"
* **Solution / Answer:**
  - **(i):** P $ightarrow$ **HTTP**, Q $ightarrow$ **URL**, R $ightarrow$ **IP address**, S $ightarrow$ **SMTP**
  - **(ii):** A $ightarrow$ **Wordpress**, B $ightarrow$ **.lk**, C $ightarrow$ **Firefox**, D $ightarrow$ **Google**, E $ightarrow$ **Twitter**, F $ightarrow$ **IaaS**, G $ightarrow$ **PHP**

---

### Question 10 (2023 O/L Paper II - Question 05 (i) & (ii))
* **Year & Question No:** 2023 O/L Paper II - Question 05 (i) & (ii)
* **English Medium Question:**
  "5. (i) Match P - S with List: {DNS, email address, HTTP, IP address, SMTP, URL}
  P – A protocol for electronic mail transmission
  Q – A protocol used for transmitting web pages over the Internet
  R – A unique identifier for a device on the Internet
  S – The address of a specific web page

  (ii) Choose appropriate example for 1 - 6 from List: {A – 192.168.1.1, B – https://www.example.com, C – Java, D – john.doe@example.com, E – SaaS, F – TCP/IP, G – xyz.example.com, H – Ubuntu}
  1 – Protocol   2 – IP Address   3 – Email Address   4 – Domain Name   5 – URL   6 – Operating System"
* **Sinhala Medium Question:**
  "5. (i) P - S විස්තර ලබා දී ඇති පද ලැයිස්තුව සමඟ ගැලපෙන්න:
  P – විද්‍යුත් තැපැල් ප්‍රේරණය සඳහා වූ නියමාවලියක්
  Q – අන්තර්ජාලය හරහා වෙබ් පිටු ප්‍රේරණයට භාවිත වන නියමාවලියක්
  R – අන්තර්ජාලයේ ඇති උපාංගයක් සඳහා වූ අනන්‍ය හඳුනාගැනීම
  S – නිශ්චිත වෙබ් පිටුවක ලිපිනය

  (ii) 1 - 6 සඳහා සුදුසු උදාහරණ ලැයිස්තුවෙන් තෝරන්න:
  1 – නියමාවලියක්   2 – IP ලිපිනයක්   3 – B-තැපැල් ලිපිනයක්   4 – වසම් නාමයක්   5 – URL එකක්   6 – මෙහෙයුම් පද්ධතියක්"
* **Solution / Answer:**
  - **(i):** P $ightarrow$ **SMTP**, Q $ightarrow$ **HTTP**, R $ightarrow$ **IP address**, S $ightarrow$ **URL**
  - **(ii):** 1 $ightarrow$ **F (TCP/IP)**, 2 $ightarrow$ **A (192.168.1.1)**, 3 $ightarrow$ **D (john.doe@example.com)**, 4 $ightarrow$ **G (xyz.example.com)**, 5 $ightarrow$ **B (https://www.example.com)**, 6 $ightarrow$ **H (Ubuntu)**

---

### Question 11 (2023 O/L Paper II - Question 01 (x))
* **Year & Question No:** 2023 O/L Paper II - Question 01 (x)
* **English Medium Question:**
  "1. (x) Consider the email header given below:
  To: riyas@example.com
  Cc: raja@abc.com, saman@example.com
  Bcc: sheron@abc.com
  Indicate whether the following statements labelled A to D are true or false:
  A – riyas is the primary recipient of the email.
  B – raja will know that sheron also received the email.
  C – riyas can see that the email was also sent to saman.
  D – Everyone in the To and Cc fields can see each other's email addresses."
* **Sinhala Medium Question:**
  "1. (x) පහත දැක්වෙන විද්‍යුත් තැපැල් ශීර්ෂකය සලකන්න:
  To: riyas@example.com
  Cc: raja@abc.com, saman@example.com
  Bcc: sheron@abc.com
  A සිට D දක්වා වූ ප්‍රකාශ සත්‍ය ද අසත්‍ය ද යන්න දක්වන්න:
  A – riyas යනු විද්‍යුත් තැපෑලේ ප්‍රධාන ලබන්නා වේ.
  B – sheron හට ද මෙම ලිපිය ලැබුණු බව raja දැන ගනු ඇත.
  C – saman හට ද මෙම ලිපිය යැවූ බව riyas හට පෙනෙනු ඇත.
  D – To සහ Cc හි සිටින සියලු දෙනාටම එකිනෙකාගේ විද්‍යුත් තැපැල් ලිපින පෙනෙනු ඇත."
* **Solution / Answer:**
  - A $ightarrow$ **True** / සත්‍යයි
  - B $ightarrow$ **False** / අසත්‍යයි *(Bcc recipients are hidden from To and Cc)*
  - C $ightarrow$ **True** / සත්‍යයි
  - D $ightarrow$ **True** / සත්‍යයි

---

### Question 12 (2024 O/L Paper II - Question 05 (i))
* **Year & Question No:** 2024 O/L Paper II - Question 05 (i)
* **English Medium Question:**
  "5. (i) Match descriptions A to J with items from List: {1 - DNS, 2 - Facebook, 3 - Firefox, 4 - Google, 5 - IaaS, 6 - PHP, 7 - SMTP, 8 - WordPress, 9 - YouTube, 10 - Zoom}
  A – A search engine that helps to find information online
  B – A social media platform to create and share content with others
  C – A cloud computing service providing virtualized computing resources
  D – A web browser for accessing website
  E – A platform to create and manage websites and blogs
  F – A protocol used to send and receive emails over the internet
  G – A protocol that maps domain to IP address
  H – A platform for hosting and sharing video content
  I – A video conferencing tool for virtual meetings
  J – A language used to create dynamic web page"
* **Sinhala Medium Question:**
  "5. (i) A සිට J දක්වා වූ විස්තර අංකිත ලැයිස්තුවේ අයතමයක් සමඟ ගැලපෙන්න:
  [ලැයිස්තුව: 1 - DNS, 2 - Facebook, 3 - Firefox, 4 - Google, 5 - IaaS, 6 - PHP, 7 - SMTP, 8 - WordPress, 9 - YouTube, 10 - Zoom]
  A – මාර්ගගත තොරතුරු ලබා ගැනීමට උපකාරී වන සෙවුම් යන්ත්‍රයක්
  B – අන් අය සමඟ සම්බන්ධ වීමට සහ සංකල්ප බෙදා ගැනීමට සමාජ මාධ්‍ය වේදිකාවක්
  C – අතථ්‍ය පරිගණක සම්පත් සපයන වලාකුළු පරිගණක සේවාවක්
  D – වෙබ් අඩවිවලට ප්‍රවේශ වීමට අන්වේශකයක්
  E – වෙබ් අඩවි සහ බ්ලොග් සෑදීමට සහ කළමනාකරණය කිරීමට වේදිකාවක්
  F – අන්තර්ජාලය හරහා විද්‍යුත් තැපැල් ලිපි යැවීමට සහ ලබා ගැනීමට භාවිත කරන නියමාවලියක්
  G – වසම් නාම IP ලිපිනවලට අනුරූපණය කරන නියමාවලියක්
  H – වීඩියෝ සංකල්ප සත්කාරකත්වය සහ බෙදා ගැනීමට වේදිකාවක්
  I – අතථ්‍ය රැස්වීම් සඳහා වීඩියෝ සම්මන්ත්‍රණ මෙවලමක්
  J – ගතික වෙබ් පිටු නිර්මාණයට භාවිත කරන භාෂාවක්"
* **Solution / Answer:**
  - A $ightarrow$ **4 (Google)**
  - B $ightarrow$ **2 (Facebook)**
  - C $ightarrow$ **5 (IaaS)**
  - D $ightarrow$ **3 (Firefox)**
  - E $ightarrow$ **8 (WordPress)**
  - F $ightarrow$ **7 (SMTP)**
  - G $ightarrow$ **1 (DNS)**
  - H $ightarrow$ **9 (YouTube)**
  - I $ightarrow$ **10 (Zoom)**
  - J $ightarrow$ **6 (PHP)**

---

### Question 13 (2024 O/L Paper II - Question 06 (ix) & (x))
* **Year & Question No:** 2024 O/L Paper II - Question 06 (ix) & (x)
* **English Medium Question:**
  "6. (ix) (a) Give an example of an IP address in dotted decimal notation.
  (b) Indicate True or False for email statements A to C:
  A – The email addresses of the 'BCC' recipients are hidden from other recipients.
  B – The email addresses of the 'CC' recipients are visible to everyone.
  C – When one clicks the 'Reply to all' option the original sender and all other recipients on the To and Cc receive the reply."
* **Sinhala Medium Question:**
  "6. (ix) (a) IP ලිපිනයකට නිදසුනක් තිත් දශමය ආකාරයට ලියන්න.
  (b) B-තැපැල් ලිපියක් සම්බන්ධයෙන් A සිට C දක්වා ප්‍රකාශවල සත්‍ය/අසත්‍ය බව දක්වන්න:
  A – 'BCC' ලබන්නන්ගේ B-තැපැල් ලිපින සසුන් ලබන්නන්ගෙන් සැඟව පවතී.
  B – 'CC' ලබන්නන්ගේ B-තැපැල් ලිපින අන් සියලු ලබන්නන්ට දැකිය හැක.
  C – 'Reply to all' ක්ලික් කළ විට මුල් ලිපිය එවූ අයට සහ To හා CC යටතේ සිටින සියලු ලබන්නන්ට පිළිතුරු යැවේ."
* **Solution / Answer:**
  - (a) `192.168.1.1` (or any valid 4-number IP dotted decimal address)
  - (b):
    - A $ightarrow$ **True** / සත්‍යයි
    - B $ightarrow$ **True** / සත්‍යයි
    - C $ightarrow$ **True** / සත්‍යයි

---

### Question 14 (2025 O/L Paper II - Question 06 (i) & (ii))
* **Year & Question No:** 2025 O/L Paper II - Question 06 (i) & (ii)
* **English Medium Question:**
  "6. (i) Match descriptions A to F with List: {1 – DNS, 2 – HTTP, 3 – hyperlink, 4 – IP address, 5 – Lasso tool, 6 – Memory address, 7 – SaaS, 8 – Search engine, 9 – SMTP, 10 – web server}
  A – A service that converts a domain name into a numerical address
  B – A tool used to find websites by entering keywords
  C – Clickable text that opens another page
  D – The computer that stores and provides web pages
  E – The numerical address assigned to a website
  F – The protocol used to transfer web pages"
* **Sinhala Medium Question:**
  "6. (i) A සිට F දක්වා විස්තර ලබා දී ඇති ලැයිස්තුවේ අංකය සමඟ ගැලපෙන්න:
  A – වසම් නාමයක් සංඛ්‍යාත්මක ලිපිනයකට පරිවර්තනය කරන සේවාව
  B – යතුරු පද ඇතුළත් කිරීමෙන් වෙබ් අඩවි සෙවීමට භාවිත කරන මෙවලම
  C – වෙනත් පිටුවක් විවෘත කරන ක්ලික් කළ හැකි පාඨය
  D – වෙබ් පිටු තැන්පත් කර තබා ගන්නා සහ සපයන පරිගණකය
  E – වෙබ් අඩවියකට පවරා ඇති සංඛ්‍යාත්මක ලිපිනය
  F – වෙබ් පිටු ප්‍රේරණයට භාවිත කරන නියමාවලිය"
* **Solution / Answer:**
  - A $ightarrow$ **1 (DNS)**
  - B $ightarrow$ **8 (Search engine)**
  - C $ightarrow$ **3 (hyperlink)**
  - D $ightarrow$ **10 (web server)**
  - E $ightarrow$ **4 (IP address)**
  - F $ightarrow$ **2 (HTTP)**

---

### Question 15 (2025 O/L Paper II - Question 01 (x))
* **Year & Question No:** 2025 O/L Paper II - Question 01 (x)
* **English Medium Question:**
  "1. (x) (a) Write down the domain name of the following URL:
  `http://www.ugc.lk/admissions/2026/handbook.html`
  (b) Write down the file name of the URL given in (a) above.
  (c) What is the use of the 📎 icon available in an email software?
  (d) What is the difference between 'Reply' and 'Reply all' options available in an email software?"
* **Sinhala Medium Question:**
  "1. (x) (a) `http://www.ugc.lk/admissions/2026/handbook.html` යන URL හි වසම් නාමය ලියන්න.
  (b) ඉහත URL හි ගොනු නාමය ලියන්න.
  (c) B-තැපැල් මෘදුකාංගයක ඇති 📎 අයිකනය භාවිත වන්නේ කුමකටද?
  (d) B-තැපැල් මෘදුකාංගයක ඇති 'Reply' සහ 'Reply all' අතර වෙනස කුමක්ද?"
* **Solution / Answer:**
  - (a) **Domain Name:** `www.ugc.lk` (or `ugc.lk`)
  - (b) **File Name:** `handbook.html`
  - (c) **📎 Icon Use:** To attach external files (documents, images, PDFs) to the email message.
  - (d) **Difference:** 'Reply' sends the response only to the original sender, whereas 'Reply all' sends the response to the original sender AND all other recipients in the `To` and `Cc` lists.
