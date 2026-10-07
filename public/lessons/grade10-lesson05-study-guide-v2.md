# Grade 10 ICT - Lesson 05: Dual-Medium Study & Past Paper Guide

## Document Overview
This study and past paper guide provides verbatim, dual-medium coverage of **Grade 10 - Lesson 05: Operating Systems (මෙහෙයුම් පද්ධති)** from the official Sri Lankan O/L ICT curriculum. All theory content and exam questions are extracted word-for-word from the Grade 10 English Medium Textbook (`ICT G-10 E.pdf`), Grade 10 Sinhala Medium Textbook (`ict g10 S.pdf`), and official G.C.E. O/L examination past papers (2020–2025).

---

# SECTION A: Complete Learning Guide & Short Notes (Comprehensive Theory)

### 5.1 Introduction to Operating Systems (මෙහෙයුම් පද්ධති හඳුන්වා දීම)

#### 5.1.1 Computer Components: Hardware, Firmware, Software (පරිගණක සංරචක: දෘඩාංග, ස්ථීරාංග, මෘදුකාංග)

* **Hardware (දෘඩාංග):**
  * **[English Medium Text]:** "Any physical component of a computer system with a definite shape is called a hardware. Examples of hardware include: mouse, keyboard, display unit, hard disk, speaker, printer etc."
  * **[Sinhala Medium Text]:** "දෘඩාංග (Hardware) යනු නිශ්චිත හැඩයක් සහිත, අපට ස්පර්ශ කළ හැකි, පරිගණකයේ භෞතික කොටස් වේ. ඒ අනුව යතුරු පුවරුව, මූසිකය, සංදර්ශකය, දෘඩ තැටිය, නාදකය සහ මුද්‍රණ යන්ත්‍රය යනු දෘඩාංග සඳහා උදාහරණ කිහිපයකි."

* **Firmware (ස්ථීරාංග):**
  * **[English Medium Text]:** "The booting instructions stored in the ROM (Read Only Memory) are called firmware. The initial text information displayed on the screen are displayed by firmware."
  * **[Sinhala Medium Text]:** "ස්ථීරාංග (Firmware) යනු පඨන මාත්‍ර මතකයෙහි (ROM) ස්ථාපිත, පරිගණකයේ මූලික ක්‍රියාත්මක (BOOT) වීමට අදාළ උපදෙස් වේ. පරිශීලකයා තිරය මත දකින ප්‍රථම තොරතුරු පඨන මාත්‍ර මතකය මගින් පෙන්වයි."

* **Booting Process (පරිගණකය පණගැන්වීමේ ක්‍රියාවලිය / Booting):**
  * **[English Medium Text]:** "How the initial operations of a computer are performed:
    1. When the user powers up the computer, the CPU executes BIOS instructions stored in ROM.
    2. Power-On Self-Test (POST) checks if hardware devices are functioning properly.
    3. The Operating System stored in the boot drive (hard disk) is loaded into Random Access Memory (RAM).
    4. Control of the computer is handed over to the Operating System, which provides the User Interface on the screen.
    This whole process is called 'Booting', which means loading an Operating System into the computer's RAM."
  * **[Sinhala Medium Text]:** "පරිගණකය පණගැන්වීමේ ක්‍රියාවලිය සිදුවන ආකාරය:
    1. පරිශීලකයා පරිගණකය බලගැන්වූ විට CPU මගින් ROM හි ඇති BIOS උපදෙස් ක්‍රියාත්මක කරයි.
    2. දෘඩාංග උපාංග නිසි ලෙස ක්‍රියා කරන්නේදැයි පරීක්ෂා කෙරේ (POST).
    3. අවසානයේ boot drive හි ඇතුළත් මෙහෙයුම් පද්ධතිය සසම්භාවී පිවිසුම් මතකයට (RAM) ප්‍රවේශ කර ගනියි.
    4. ඉන් පසු පරිගණකයේ පාලනය සම්පූර්ණයෙන්ම මෙහෙයුම් පද්ධතිය මගින් ලබා ගෙන පරිශීලකයාට අතුරුමුහුණතක් (User Interface) ලබා දෙයි.
    මෙම සම්පූර්ණ ක්‍රියාවලිය 'Booting' ලෙස හඳුන්වනු ලබන අතර එහි අර්ථය මෙහෙයුම් පද්ධතියක් පරිගණකයේ ප්‍රධාන මතකයට (RAM) ප්‍රවේශ කර ගැනීමයි."

---

#### 5.1.2 Classification of Software (මෘදුකාංග වර්ගීකරණය)

```
                            Software (මෘදුකාංග)
                                    │
          +─────────────────────────┴─────────────────────────+
          │                                                   │
System Software (පද්ධති මෘදුකාංග)                  Application Software (යෙදුම් මෘදුකාංග)
          │                                                   │
  ┌───────┼──────────────────────┐                    ┌───────┼──────────────────────┐
  │       │                      │                    │       │                      │
Operating  Utility           Language               Word    Spreadsheet           Database
 System   Software         Translators            Processing Software            Management
(මෙහෙයුම් (උපයෝගිතා        (භාෂා පරිවර්තක:        (වචන      (පැතුරුම්පත්)          (දත්ත
පද්ධති)   මෘදුකාංග)        Assembler, Compiler,   සකසුම්)                           සමුදාය)
                           Interpreter)
```

1. **System Software (පද්ධති මෘදුකාංග):**
   * **[English Medium Text]:** "System software manages the hardware and other software in a computer system. System software is generally divided into three types:
     a. Operating System
     b. Utility Software
     c. Language Translators (Assembler, Compiler, Interpreter)"
   * **[Sinhala Medium Text]:** "පද්ධති මෘදුකාංග (System Software) ප්‍රධාන වශයෙන් වර්ග තුනකට බෙදිය හැක:
     a. මෙහෙයුම් පද්ධති (Operating System)
     b. උපයෝගිතා මෘදුකාංග (Utility Software)
     c. භාෂා පරිවර්තක (Language Translators: එසෙම්බ්ලරය, සම්පාදකය, අර්ථවිනියාසකය)"

2. **Application Software (යෙදුම් මෘදුකාංග):**
   * **[English Medium Text]:** "The application software which runs on the Operating System is used to carry out computer-based activities of the user such as creating documents, mathematical functions, data entry, and computer games. Examples: Word processing, Spreadsheets, Database, Computer games, Web browsers."
   * **[Sinhala Medium Text]:** "මෙහෙයුම් පද්ධතියක් මත පමණක් ක්‍රියාත්මක වන යෙදුම් මෘදුකාංග (Application Software) පරිශීලකයාගේ පරිගණක ආශ්‍රිත ක්‍රියාකාරකම් (ලිපි ලේඛන සකස් කිරීම, ගණිත කර්ම, දත්ත රැස් කිරීම, පරිගණක ක්‍රීඩා) සඳහා යොදා ගනු ලබයි. උදා: වචන සකසුම්, පැතුරුම්පත්, දත්ත සමුදාය, පරිගණක ක්‍රීඩා, වෙබ් අන්වේක්ෂක."

---

#### 5.1.3 Importance & Resource Management Functions of an Operating System (මෙහෙයුම් පද්ධතියක අවශ්‍යතාවය සහ සම්පත් කළමනාකරණ කාර්යයන්)

* **Importance of OS (මෙහෙයුම් පද්ධතියේ අවශ්‍යතාවය):**
  * **[English Medium Text]:** "The software which facilitates the interaction between human user and hardware is the Operating System. The Operating System provides instructions for installation and management of various application software. It manages all the input, output, and computer memory too, which means that Operating System is the sole software which manages the whole computer system."
  * **[Sinhala Medium Text]:** "පරිගණකයේ ස්ථාපිත අනෙකුත් මෘදුකාංග සහ දෘඩාංග කළමනාකරණය කරමින් පරිශීලකයාට පරිගණකය භාවිත කිරීමට අවකාශය ලබා දෙන්නේ මෙහෙයුම් පද්ධතිය මගිනි. පරිගණකය ක්‍රියාත්මක වූ මොහොතේ සිට ක්‍රියා විරහිත වන තෙක් දෘඩාංග උපරිමයෙන් යොදාගනිමින් යෙදුම් මෘදුකාංග ක්‍රියාත්මක කිරීමට අවශ්‍ය පරිසරය ගොඩනගන්නේ මෙහෙයුම් පද්ධතියයි."

* **6 Core Resource Management Tasks (ප්‍රධාන සම්පත් කළමනාකරණ කාර්යයන් 6):**

  1. **Process Management (ක්‍රියාවලි කළමනාකරණය):**
     * **[English Medium Text]:** "A running computer program or part of the program is called a process. Operating System manages resource allocation such as allocation of CPU time, allocation of memory, and allocation of input/output devices for each process."
     * **[Sinhala Medium Text]:** "ක්‍රියාත්මක වන පරිගණක වැඩසටහනක් හෝ එහි කොටසක් ක්‍රියාවලියක් (Process) ලෙස හැඳින්වේ. මධ්‍ය සැකසුම් ඒකකයේ කාලය (CPU time) වෙන් කිරීම, මතකය වෙන් කිරීම සහ ආදාන/ප්‍රතිදාන උපාංග වෙන් කිරීම මෙහෙයුම් පද්ධතිය මගින් පාලනය කරයි."

  2. **Memory Management (මතක කළමනාකරණය):**
     * **[English Medium Text]:** "Operating System utilizes both Primary Memory (RAM) and Secondary Memory efficiently to ensure that enough memory is allocated for each process and freed once a process ends."
     * **[Sinhala Medium Text]:** "ප්‍රධාන මතකය (RAM) සහ ද්විතියික මතකය යන මතක ආකාර දෙකම කළමනාකරණය කරමින් එක් එක් ක්‍රියාවලියට අවශ්‍ය මතකය වෙන් කිරීම සහ ක්‍රියාවලිය අවසන් වූ පසු මතකය නිදහස් කිරීම සිදු කරයි."

  3. **Device Management (උපාංග කළමනාකරණය):**
     * **[English Medium Text]:** "Responsible for controlling peripheral devices using Device Controllers (hardware) and Device Drivers (software components). Plug and Play devices install drivers automatically, whereas older devices require manual installation."
     * **[Sinhala Medium Text]:** "පරිගණකයට සම්බන්ධිත පර්යන්ත උපාංග (Peripheral devices) පාලනය කිරීම. දෘඩාංග කොටස් සඳහා උපාංග පාලක (Device Controllers) ද, මෘදුකාංග පාලනය සඳහා ධාවක/එලවුම් වැඩසටහන් (Device Drivers) ද භාවිත කෙරේ."

  4. **File Management (ගොනු කළමනාකරණය):**
     * **[English Medium Text]:** "Manages files and folders: creating new files/folders, saving at suitable locations, renaming, deleting, changing paths, and organizing folder hierarchies."
     * **[Sinhala Medium Text]:** "දත්ත ගොනුවල (Files) සුරැකීම, ගොනු සඳහා පද පැවරීම, ෆෝල්ඩර (Folders) මගින් වර්ගීකරණය කිරීම, මකා දැමීම, නැවත ලබා ගැනීම සහ ගොනු පද්ධති පාලනය කිරීම."

  5. **Security Management (ආරක්ෂණ කළමනාකරණය):**
     * **[English Medium Text]:** "Protects computer from malware/viruses and unauthorized access using authentication (user accounts, passwords)."
     * **[Sinhala Medium Text]:** "පරිගණක වෛරස් වැනි අනිෂ්ට මෘදුකාංගවලින් සහ අන්අවසරයෙන් ප්‍රවේශ වන්නන්ගෙන් (Unauthorized access) පද්ධතිය ආරක්ෂා කිරීම."

  6. **Network Management (ජාල කළමනාකරණය):**
     * **[English Medium Text]:** "Supports wired and wireless network connectivity, remote access, data communication, and cloud computing resources."
     * **[Sinhala Medium Text]:** "රැහැන් සහිත සහ රැහැන් රහිත ජාල සම්බන්ධතා, දුරස්ථ ප්‍රවේශ (Remote access) සහ ජාලකරණ පහසුකම් පාලනය කිරීම."

---

#### 5.1.4 Types of User Interfaces (පරිශීලක අතුරුමුහුණත් වර්ග)

| User Interface Type (අතුරුමුහුණත් වර්ගය) | Full Name & Abbreviation | Characteristics & Features (ප්‍රධාන ලක්ෂණ) | Examples (උදාහරණ) |
| :--- | :--- | :--- | :--- |
| **Command Line Interface** | **CLI** (විධාන පේළි අතුරුමුහුණත) | Text-based; commands must be typed precisely on prompt line; non-user-friendly; requires remembering exact commands and syntax. | MS-DOS, Command Prompt, Terminal |
| **Graphical User Interface** | **GUI** (ප්‍රස්ථාරික පරිශීලක අතුරුමුහුණත) | Based on **WIMP** (**W**indows, **I**cons, **M**enus, **P**ointers); mouse-driven; highly user-friendly; visual environment. | Windows 10, Ubuntu Desktop, macOS, Android |

* **WIMP Concept in GUI:**
  * **W** - Windows (කවුළු)
  * **I** - Icons (නිරූපක)
  * **M** - Menus (මෙනු)
  * **P** - Pointer / Mouse (දර්ශකය / මූසිකය)

---

#### 5.1.5 Classification / Types of Operating Systems (මෙහෙයුම් පද්ධති වර්ගීකරණය)

1. **Single-User Operating System (තනි පරිශීලක මෙහෙයුම් පද්ධති):**
   * **[English Medium Text]:** "Provides service to only one person/user at a given time. Example: MS-DOS."
   * **[Sinhala Medium Text]:** "එක් වරකට එක් පරිශීලකයෙකුට පමණක් සේවා සපයන මෙහෙයුම් පද්ධති වේ."

2. **Multi-User Operating System (බහු පරිශීලක මෙහෙයුම් පද්ධති):**
   * **[English Medium Text]:** "Allows multiple users to access and utilize system resources simultaneously. Examples: Linux, Unix, Windows Server."
   * **[Sinhala Medium Text]:** "එක් වරකට පරිශීලකයින් කිහිප දෙනෙකුට පද්ධතියට සම්බන්ධ වී භාවිත කිරීමට අවකාශ සලසයි."

3. **Multi-Tasking Operating System (බහු කාර්ය මෙහෙයුම් පද්ධති):**
   * **[English Medium Text]:** "Allows multiple processes/programs to run simultaneously at the same time. Examples: Windows 10, Ubuntu, macOS, Android."
   * **[Sinhala Medium Text]:** "එක් වරකට ක්‍රියාවලි/වැඩසටහන් කිහිපයක් එකම අවස්ථාවේ ධාවනය කිරීමට පහසුකම් සලසයි."

4. **Real-Time Operating System (තත්‍ය කාල මෙහෙයුම් පද්ධති):**
   * **[English Medium Text]:** "Executes inputs and generates outputs within strict, guaranteed, precise time limits. Used in automated factory assembly lines, aircraft flight control, and medical life-support systems."
   * **[Sinhala Medium Text]:** "ලබා දෙන ආදාන සඳහා ක්ෂණිකව සහ නියමිත කාල රාමුවක් තුළ නිවැරදි ප්‍රතිදාන ලබා දෙන මෙහෙයුම් පද්ධති වේ."

---

#### 5.1.6 Utility Software Functions (උපයෝගිතා මෘදුකාංග සහ කාර්යයන්)

* **Disk Defragmentation (ප්‍රතිභාගීකරණය):**
  * **[English Medium Text]:** "Organizing the hard disk by rearranging fragmented clusters of small spaces together and creating a larger free space. This increases the efficiency and speed of the hard disk."
  * **[Sinhala Medium Text]:** "දෘඩ තැටිය පුරා කැබලි වී (fragmented) පවතින ගොනු කොටස් නැවත එක් කර අඛණ්ඩව පිහිටන පරිදි සකස් කිරීම. එමගින් දෘඩ තැටියේ කාර්යක්ෂමතාව සහ වේගය වැඩි වේ."

* **Disk Partitioning (තැටි පංගු කිරීම / Partitioning):**
  * **[English Medium Text]:** "Dividing an individual physical hard drive into multiple logical drives (e.g. C:, D:, E:)."
  * **[Sinhala Medium Text]:** "එක් භෞතික දෘඩ තැටියක් තර්කිකව කොටස් කිහිපයකට (C:, D:, E:) වෙන් කිරීම."

* **Disk Formatting (තැටි ආකෘතිකරණය / Formatting):**
  * **[English Medium Text]:** "Preparing a storage device (hard disk, flash drive) according to a specific file system format so that files and folders can be stored."
  * **[Sinhala Medium Text]:** "අදාළ මෙහෙයුම් පද්ධතියට ගැලපෙන ගොනු ආකෘතියක් භාවිත කරමින් දත්ත තැන්පත් කළ හැකි වන සේ දෘඩ තැටිය හෝ ෆ්ලෑෂ් ධාවකය සූදානම් කිරීම."

* **Other Utility Software Tools:**
  * **Anti-Virus Software:** Identifies and eliminates malicious software.
  * **File Compression:** Compresses large files into smaller archive sizes (e.g. .zip, .rar).
  * **Task Manager:** Displays running processes, CPU/RAM performance, and status.
  * **Backup Software:** Creates safety duplicates of critical data and hard drives.

---

### 5.2 Introduction to File Systems, Drives, Folders & Files (ගොනු පද්ධති, ඩ්‍රයිව්, ෆෝල්ඩර් සහ ගොනු)

#### 5.2.1 File Structure & Extensions (ගොනුවක ව්‍යුහය සහ දිගුව)

* **File Name Components:** Every file consists of two parts separated by a dot (`.`):
  $$\text{File Name} = \text{Primary Name} + \text{Dot (.)} + \text{File Extension}$$
  *Example:* `Lesson05.docx` $\rightarrow$ `Lesson05` (Primary Name), `.docx` (Extension indicating Word Processing Document).

* **Common File Systems:**
  * Windows: `FAT16`, `FAT32`, `NTFS`
  * Linux: `ext4`, `ReiserFS`

* **File Access Methods (ගොනු ප්‍රවේශ ක්‍රම):**
  1. **Sequential Access (අනුක්‍රමික ප්‍රවේශය):** Reading data step-by-step in numerical/chronological order from start to end (e.g. Magnetic Tape).
  2. **Random Access (සසම්භාවී ප්‍රවේශය):** Jumping directly to any specific data block or file location without reading previous records (e.g. Hard Disk, RAM, Flash Drive).

* **File Operations & Directory Path:**
  * **Recycle Bin (ප්‍රතිචක්‍රීකරණ බඳුන):** Temporarily holds deleted files until permanently emptied or restored using the **Restore** option.
  * **Path Hierarchy (ගොනු මග / Directory Path):**  
    `C:\Users\Student\Documents\ICT\Grade10_Lesson05.docx`

---

# SECTION B: Complete O/L Past Paper Question Extraction (2020 – 2025)

### 2.1 O/L Past Paper Questions on Operating Systems

#### Question 01 (2020 O/L Paper I - Question 08)
* **Year & Question No:** 2020 O/L Paper I - Question 08
* **English Medium Question:**
  "8. Which of the following contains only the examples of operating systems?
  (1) Android, Ubuntu, Windows 10
  (2) Ubuntu, Windows 10, Windows Explorer
  (3) Android, Windows 10, Windows Explorer
  (4) Android, Ubuntu, Windows Explorer"
* **Sinhala Medium Question:**
  "8. මෙහෙයුම් පද්ධතිවලට උදාහරණ පමණක් අඩංගු වන්නේ පහත කුමකද?
  (1) ඇන්ඩ්‍රොයිඩ්, උබුන්ටු, වින්ඩෝස් 10
  (2) උබුන්ටු, වින්ඩෝස් 10, වින්ඩෝස් එක්ස්ප්ලෝරර් (Windows Explorer)
  (3) ඇන්ඩ්‍රොයිඩ්, වින්ඩෝස් 10, වින්ඩෝස් එක්ස්ප්ලෝරර්
  (4) ඇන්ඩ්‍රොයිඩ්, උබුන්ටු, වින්ඩෝස් එක්ස්ප්ලෝරර්"

#### Question 02 (2020 O/L Paper I - Question 09)
* **Year & Question No:** 2020 O/L Paper I - Question 09
* **English Medium Question:**
  "9. Which of the following statement(s) is/are correct?
  A – A Graphical User Interface (GUI) provides the facility to use the mouse to execute the commands
  B – WIMP stands for Windows, Icons, Menus and Pointer
  C – Command Line Interface (CLI) is more user-friendly compared to Graphical User Interface (GUI)
  (1) A only          (2) B only          (3) A and B only          (4) B and C only"
* **Sinhala Medium Question:**
  "9. පහත සඳහන් වගන්ති අතරින් නිවැරදි වන්නේ කවරක්ද?
  A – විධාන ක්‍රියාත්මක කිරීම සඳහා මූසිකය භාවිත කිරීමේ පහසුව චිත්‍රක පරිශීලක අතුරුමුහුණතක් (GUI) මගින් ලබා දෙයි.
  B – WIMP මගින් දක්වන්නේ Windows (කවුළු), Icons (නිරූපක), Menus (මෙනු) සහ Pointer (දර්ශක) යන්නයි.
  C – චිත්‍රක පරිශීලක අතුරුමුහුණත් හා සසඳන විට, විධාන පේළි අතුරුමුහුණත (CLI) වඩා භාවිත මිතුරු (user-friendly) වේ.
  (1) A පමණි          (2) B පමණි          (3) A හා B පමණි          (4) B හා C පමණි"

#### Question 03 (2020 O/L Paper II - Question 01 (ii) (b))
* **Year & Question No:** 2020 O/L Paper II - Question 01 (ii) (b)
* **English Medium Question:**
  "1. (ii) Consider the following statement: An operating system is an example for ........................ .
  Select the correct term from the list: {hard disk, systems software, application software, RAM}"
* **Sinhala Medium Question:**
  "1. (ii) පහත දැක්වෙන ප්‍රකාශය සලකා බලන්න: මෙහෙයුම් පද්ධතියක් ........................ සඳහා උදාහරණයකි.
  පද ලැයිස්තුවෙන් නිවැරදි පදය තෝරන්න: {දෘඩ තැටිය, පද්ධති මෘදුකාංග (System software), යෙදුම් මෘදුකාංග (Application software), RAM}"

#### Question 04 (2021 O/L Paper I - Question 09)
* **Year & Question No:** 2021 O/L Paper I - Question 09
* **English Medium Question:**
  "9. Which of the following is the first software that must be installed on a computer after formatting its hard disk?
  (1) Office package          (2) Operating system          (3) Antivirus software          (4) Web browser"
* **Sinhala Medium Question:**
  "9. පුද්ගල පරිගණකයක දෘඩ තැටිය හැඩසවුම් (formatting) කළ පසු එහි මුලින්ම ස්ථාපනය කළ යුතු මෘදුකාංගය කුමක්ද?
  (1) කාර්යාල කට්ටලය (Office package)
  (2) මෙහෙයුම් පද්ධතිය (Operating system)
  (3) ප්‍රතිවෛරස් මෘදුකාංගය (Antivirus software)
  (4) වෙබ් අන්වේක්ෂකය (Web browser)"

#### Question 05 (2022 O/L Paper II - Question 01 (v))
* **Year & Question No:** 2022 O/L Paper II - Question 01 (v)
* **English Medium Question:**
  "1. (v) Raja powers on his laptop and uses a word processing application to type a letter. Afterwards, he shuts down the computer via the Operating System.
  Select the appropriate term from the list {BIOS, OS, OS, WP} for labels I, II, III, and IV representing software executing on the processor:
  I (Hardware Check at Startup) $\rightarrow$ II (Operating Environment) $\rightarrow$ III (Resource Manager) $\rightarrow$ IV (Word Processor Application)"
* **Sinhala Medium Question:**
  "1. (v) රාජා පරිගණකයක් පණ ගන්වා වචන සකසුම් යෙදවුමක් භාවිතයෙන් ලේඛනයක් යතුරු ලියනය කරයි. ඉන් පසු ඔහු මෙහෙයුම් පද්ධතිය හරහා පරිගණකය වසා දමයි (shut down).
  මෙම සන්දර්භයේදී පරිගණකයේ සකසනය (processor) මත ධාවනය වන්නන් I, II, III සහ IV සඳහා සුදුසු ආදේශක ලැයිස්තුවෙන් තෝරා ලියන්න.
  ලැයිස්තුව: {BIOS, OS, OS, WP}"

#### Question 06 (2023 O/L Paper II - Question 01 (i))
* **Year & Question No:** 2023 O/L Paper II - Question 01 (i)
* **English Medium Question:**
  "1. (i) When a computer is powered on, ...A... (Application software / BIOS) runs to check hardware. Then the Operating System is loaded into ...B... (Hard disk / RAM). This creates the environment for computer processes to run and displays a login interface to ...C... (User / Network). To manage other tasks and requirements, ...D... (Operating System / Anti-virus software) runs continuously."
* **Sinhala Medium Question:**
  "1. (i) පරිගණකය පණගැන්වූ විට, සියලු දෘඩාංග පරීක්ෂා කර ඒවා නිසිපරිදි ක්‍රියාත්මක වන බව තහවුරු කිරීමට ...A... (යෙදුම් මෘදුකාංගය / BIOS) ධාවනය වෙයි. ඉන්පසු මෙහෙයුම් පද්ධතිය ...B... (දෘඩ තැටියට / මතකයට (RAM)) ප්‍රවේශ (load) වේ. එය පරිගණකයේ ක්‍රියාහන් (processes) ධාවනය වීමට අවශ්‍ය මූලික පරිසරය සකසයි. ඉන්පසු th පරිශීලකයාට පරිගණකයට පූරණය වීමට (login) අතුරුමුහුණතක් සපයයි. පූරණය වීමෙන් පසු පරිශීලකයාට ක්‍රියාහන් කිහිපයක් ආරම්භ කළ හැක. එම ක්‍රියාහන්වල විවිධ අවශ්‍යතා සම්පූර්ණ කිරීමට සහ පරිගණකයේ අනෙකුත් කළමනාකරණ කටයුතු කිරීමට ...D... (ප්‍රතිවෛරස් මෘදුකාංගය / මෙහෙයුම් පද්ධතිය) අවශ්‍ය පරිදි ධාවනය වේ."

#### Question 07 (2024 O/L Paper I - Question 01)
* **Year & Question No:** 2024 O/L Paper I - Question 01
* **English Medium Question:**
  "1. The hard drive in a computer is formatted during maintenance. Which of the following should now be first installed in it?
  (1) a software firewall          (2) an anti-virus software          (3) an application software          (4) an operating system"
* **Sinhala Medium Question:**
  "1. නඩත්තුවකදී පරිගණකයක දෘඩ තැටිය ආකෘතිකරණය (format) කෙරිණි. පහත කවරක් දැන් එහි මුලින්ම ස්ථාපනය කළ යුතුද?
  (1) මෘදුකාංග ගිනිපවුරක් (firewall)
  (2) ප්‍රතිවෛරස් මෘදුකාංගයක්
  (3) යෙදුම් මෘදුකාංගයක්
  (4) මෙහෙයුම් පද්ධතියක්"

#### Question 08 (2024 O/L Paper I - Question 10)
* **Year & Question No:** 2024 O/L Paper I - Question 10
* **English Medium Question:**
  "10. Which of the following only contains examples of operating systems?
  (1) Adobe Photoshop, LibreOffice, Movie Maker, Notepad
  (2) Android, LibreOffice, MacOS, McAfee AntiVirus
  (3) Movie Maker, Norton AntiVirus, Ubuntu, Windows
  (4) Android, MacOS, Ubuntu, Windows"
* **Sinhala Medium Question:**
  "10. පහත දැක්වෙන කුමන වරණයෙහි මෙහෙයුම් පද්ධති සඳහා වූ උදාහරණ පමණක් අඩංගු වේද?
  (1) Adobe Photoshop, LibreOffice, Movie Maker, Notepad
  (2) Android, LibreOffice, MacOS, McAfee AntiVirus
  (3) Movie Maker, Norton AntiVirus, Ubuntu, Windows
  (4) Android, MacOS, Ubuntu, Windows"

#### Question 09 (2025 O/L Paper I - Question 02)
* **Year & Question No:** 2025 O/L Paper I - Question 02
* **English Medium Question:**
  "2. In which of the following are the instructions of the operating system of a computer executed?
  (1) caches          (2) main memory          (3) processor          (4) registers"
* **Sinhala Medium Question:**
  "2. පරිගණකයක මෙහෙයුම් පද්ධතියේ උපදෙස් ක්‍රියාත්මක (executed) වන්නේ පහත කුමකද?
  (1) නිහිත/වාරික මතකය (caches)
  (2) ප්‍රධාන මතකය (main memory)
  (3) සකසනය / මධ්‍ය සැකසුම් ඒකකය (processor)
  (4) රෙජිස්තර (registers)"

#### Question 10 (2025 O/L Paper I - Question 03)
* **Year & Question No:** 2025 O/L Paper I - Question 03
* **English Medium Question:**
  "3. What is the most suitable replacement for the blank in the following statement?
  'Even when my computer is off, its operating system, application software and all my data exist in its ........................ .'
  (1) caches          (2) hard disk          (3) main memory          (4) processor"
* **Sinhala Medium Question:**
  "3. පහත ප්‍රකාශයේ හිස්තැන සඳහා වඩාත්ම සුදුසු පදය කුමක්ද?
  'මගේ පරිගණකය ක්‍රියා විරහිත කර තිබුණද, එහි මෙහෙයුම් පද්ධතිය, යෙදුම් මෘදුකාංග සහ මගේ සියලුම දත්ත එහි ........................ තුළ පවතී.'
  (1) නිහිත මතකය (caches)
  (2) දෘඩ තැටිය (hard disk)
  (3) ප්‍රධාන මතකය (main memory)
  (4) සකසනය (processor)"

#### Question 11 (2025 O/L Paper I - Question 09)
* **Year & Question No:** 2025 O/L Paper I - Question 09
* **English Medium Question:**
  "9. Which of the following is not a task of an operating system?
  (1) Giving each user process the chance to run on the processor
  (2) Managing the memory of the computer
  (3) Managing the user files in a computer
  (4) Right-aligning text in a word processing document"
* **Sinhala Medium Question:**
  "9. මෙහෙයුම් පද්ධතියක කාර්යයක් නොවැන්නේ පහත කවරක්ද?
  (1) එක් එක් පරිශීලක ක්‍රියායනයට (process) සකසනයේ ධාවනය වීමට අවස්ථාව ලබාදීම
  (2) පරිගණකයේ මතකය කළමනාකරණය
  (3) පරිගණකයේ පරිශීලක ගොනු කළමනාකරණය
  (4) වචන සකසුම් ලේඛනයක පාඨ දකුණට තෙරෙපීම (right-aligning)"

#### Question 12 (2025 O/L Paper II - Question 01 (v) (a) & (b))
* **Year & Question No:** 2025 O/L Paper II - Question 01 (v) (a) & (b)
* **English Medium Question:**
  "1. (v) (a) A person has many files related to various subjects and he stores all of them in the 'Documents' folder of his computer. Isn't there a better method? Explain.
  (b) What is meant by 'Disk de-fragmentation'?"
* **Sinhala Medium Question:**
  "1. (v) (a) පුද්ගලයෙකු සතුව විවිධ විෂයයන්ට අදාළ ගොනු රැසක් ඇති අතර ඔහු ඒ සියල්ල තම පරිගණකයේ 'Documents' ෆෝල්ඩරයේ ගබඩා කරයි. මීට වඩා හොඳ ක්‍රමයක් නොමැතිද? පැහැදිලි කරන්න.
  (b) 'Disk de-fragmentation' (තැටි ප්‍රතිභාගීකරණය) යන්නෙන් අදහස් කරන්නේ කුමක්ද?"

---

### 2.2 Unexamined Sub-topics Note (නොඅසන ලද උප-මාතෘකා පිළිබඳ සටහන)
* All core sub-topics of Grade 10 - Lesson 05 (including OS concepts, GUI/CLI interfaces, resource management, utility tools, and file structure) have been directly examined in G.C.E. O/L past examination papers between 2020 and 2025.
