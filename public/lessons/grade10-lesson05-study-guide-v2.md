# Grade 10 ICT - Lesson 05: Master Dual-Medium Study & Past Paper Guide
# මෙහෙයුම් පද්ධති (Operating Systems)

## Document Overview
This master dual-medium study guide provides 100% comprehensive, verbatim coverage of **Grade 10 - Lesson 05: Operating Systems (මෙහෙයුම් පද්ධති)** from the official Sri Lankan National Institute of Education (NIE) G.C.E. Ordinary Level ICT curriculum.

All theoretical concepts, technical definitions, diagrams, comparison tables, and examination questions adhere strictly to:
1. Official Grade 10 English Medium Textbook (`ICT G-10 E.pdf`)
2. Official Grade 10 Sinhala Medium Textbook (`ict g10 S.pdf`)
3. Official Department of Examinations G.C.E. O/L Past Papers (2020–2025)

The guide is constructed following the 4-layer master architecture:
- **Layer 1:** Core Principles & Definitions (මූලික මූලධර්ම සහ අර්ථ දැක්වීම්)
- **Layer 2:** Exhaustive Domain & Real-World Sector Breakdown (සම්පත් කළමනාකරණ කාර්යයන් සහ සැබෑ ලෝක යෙදවුම්)
- **Layer 3:** Comparison Tables & Visual Architecture Diagrams (සංසන්දනාත්මක වගු සහ රූප සටහන්)
- **Layer 4:** High-Yield Exam Pitfalls, Term Glossary & Past Paper Bank 2020–2025 (විභාග උගුල්, පාරිභාෂික ශබ්දකෝෂය සහ පසුගිය විභාග ප්‍රශ්න)

---

# SECTION A: Complete 4-Layer Master Learning Guide

---

## 🏛️ LAYER 1: Core Principles & Definitions (මූලික මූලධර්ම සහ අර්ථ දැක්වීම්)

### 1.1 Computer Components: Hardware, Firmware, Software (පරිගණක සංරචක: දෘඩාංග, ස්ථීරාංග, මෘදුකාංග)

* **Hardware (දෘඩාංග):**
  * **[English Medium Text]:** "Any physical component of a computer system with a definite shape that can be touched and seen is called hardware. Examples include: mouse, keyboard, monitor/display unit, hard disk, speaker, printer, CPU, and system board."
  * **[Sinhala Medium Text]:** "දෘඩාංග (Hardware) යනු නිශ්චිත හැඩයක් සහිත, අපට ස්පර්ශ කළ හැකි සහ දැකිය හැකි, පරිගණකයේ භෞතික කොටස් වේ. යතුරුපුවරුව, මූසිකය, සංදර්ශකය, දෘඩ තැටිය, නාදකය, මුද්‍රණ යන්ත්‍රය සහ මවුපුවරුව දෘඩාංග සඳහා උදාහරණ වේ."

* **Firmware (ස්ථීරාංග):**
  * **[English Medium Text]:** "The booting instructions stored in the ROM (Read Only Memory) are called firmware. The initial text information displayed on the screen are displayed by firmware. Firmware holds the initial boot-up instructions (BIOS/UEFI) required to start the computer."
  * **[Sinhala Medium Text]:** "ස්ථීරාංග (Firmware) යනු පඨන මාත්‍ර මතකයෙහි (ROM) ස්ථාපිත, පරිගණකයේ මූලික ක්‍රියාත්මක (BOOT) වීමට අදාළ උපදෙස් වේ. පරිශීලකයා තිරය මත දකින ප්‍රථම තොරතුරු පඨන මාත්‍ර මතකය මගින් පෙන්වයි. පරිගණකය පණගැන්වීමට (Booting) අවශ්‍ය මූලික උපදෙස් (BIOS/UEFI) මෙහි අඩංගු වේ."

* **Software (මෘදුකාංග):**
  * **[English Medium Text]:** "A set of organized computer instructions or programs written in a computer language to perform specific tasks on a computer system. Software cannot be physically touched."
  * **[Sinhala Medium Text]:** "මෘදුකාංග (Software) යනු පරිගණක පද්ධතියක් මගින් නිශ්චිත කාර්යයක් ඉටු කර ගැනීම සඳහා පරිගණක භාෂාවකින් ලියන ලද උපදෙස් මාලාවක් හෝ වැඩසටහන් සමූහයකි. මෘදුකාංග භෞතිකව ස්පර්ශ කළ නොහැක."

---

### 1.2 The Computer Booting Sequence (පරිගණකය පණගැන්වීමේ ක්‍රියාවලිය / Booting)

* **Definition of Booting (පණගැන්වීම යනු කුමක්ද?):**
  * **[English Medium Text]:** "Booting is the entire process of powering on a computer, performing initial hardware diagnostics, and loading the Operating System from secondary storage (e.g., hard disk/SSD) into main memory (RAM) so that the computer is ready for user interaction."
  * **[Sinhala Medium Text]:** "පරිගණකය බලගැන්වූ මොහොතේ සිට දෘඩාංග නිසි පරිදි ක්‍රියා කරන්නේදැයි පරීක්ෂා කර, ද්විතීයික ආචයනයේ (දෘඩ තැටියේ/SSD) ඇති මෙහෙයුම් පද්ධතිය ප්‍රධාන මතකයට (RAM) පූරණය කර පරිශීලකයාට භාවිතයට සූදානම් කරදීමේ සමස්ත ක්‍රියාවලිය පණගැන්වීම (Booting) ලෙස හැඳින්වේ."

* **Official Textbook 4-Step Booting Sequence (නිල පෙළපොත් පණගැන්වීමේ පියවර 4):**
  * **[English Medium Text]:**
    1. When the user powers up the computer, the CPU executes BIOS instructions stored in ROM.
    2. Power-On Self-Test (POST) checks if hardware devices are functioning properly.
    3. The Operating System stored in the boot drive (hard disk) is loaded into Random Access Memory (RAM).
    4. Control of the computer is handed over to the Operating System, which provides the User Interface on the screen.  
    *This whole process is called 'Booting', which means loading an Operating System into the computer's RAM.*
  * **[Sinhala Medium Text]:**
    1. පරිශීලකයා පරිගණකය බලගැන්වූ විට CPU මගින් ROM හි ඇති BIOS උපදෙස් ක්‍රියාත්මක කරයි.
    2. දෘඩාංග උපාංග නිසි ලෙස ක්‍රියා කරන්නේදැයි පරීක්ෂා කෙරේ (POST).
    3. අවසානයේ boot drive හි ඇතුළත් මෙහෙයුම් පද්ධතිය සසම්භාවී පිවිසුම් මතකයට (RAM) ප්‍රවේශ කර ගනියි.
    4. ඉන් පසු පරිගණකයේ පාලනය සම්පූර්ණයෙන්ම මෙහෙයුම් පද්ධතිය මගින් ලබා ගෙන පරිශීලකයාට අතුරුමුහුණතක් (User Interface) ලබා දෙයි.  
    *මෙම සම්පූර්ණ ක්‍රියාවලිය 'Booting' ලෙස හඳුන්වනු ලබන අතර එහි අර්ථය මෙහෙයුම් පද්ධතියක් පරිගණකයේ ප්‍රධාන මතකයට (RAM) ප්‍රවේශ කර ගැනීමයි.*

* **Types of Booting (පණගැන්වීමේ ආකාර):**
  1. **Cold Boot (සීතල පණගැන්වීම):**
     * **[English]:** Turning on the computer from a completely switched-off / unpowered state using the physical power switch.
     * **[Sinhala]:** පරිගණකයේ විදුලි බලය සම්පූර්ණයෙන්ම විසන්ධි වී ඇති අවස්ථාවක බල ස්විචය (Power Button) මගින් පරිගණකය මුල සිට පණගැන්වීම.
  2. **Warm Boot / Reboot (උණුසුම් පණගැන්වීම):**
     * **[English]:** Restarting the computer system while power remains continuously supplied (e.g., using OS Restart option or Ctrl+Alt+Del) without cutting main electricity.
     * **[Sinhala]:** විදුලි සැපයුම නොකඩවා පවතින අතරතුර මෙහෙයුම් පද්ධතියේ Restart විධානය හෝ යතුරුපුවරු කෙටිමං මගින් පද්ධතිය නැවත පණගැන්වීම.

* **Sequential Steps of the Booting Process (පණගැන්වීමේ පියවර අනුපිළිවෙල):**
  1. **Power Supply Stabilization:** Electricity flows to the motherboard and CPU.
  2. **BIOS Execution:** The CPU reads and executes the **BIOS (Basic Input Output System)** / UEFI instructions permanently stored in ROM.
  3. **POST (Power-On Self-Test):** The BIOS initiates POST diagnostic routines to verify that all vital hardware components (RAM, CPU, Keyboard, Hard Disk, Video Display) are present, connected, and functioning properly.
  4. **Locating Boot Drive:** BIOS searches the configured boot order list (Hard Disk, SSD, USB Drive, Optical Drive) for the Master Boot Record (MBR) / bootloader partition.
  5. **Loading OS Kernel to RAM:** The bootstrap loader copies the core Operating System files (**Kernel**) from the secondary storage into the computer's **RAM (Random Access Memory)**.
  6. **Handover of Control & UI Display:** Control of the computer system is transferred from BIOS to the Operating System. The OS initializes system services, device drivers, and presents the User Interface (Desktop / Login screen) to the user.

---

### 1.3 Classification of Software (මෘදුකාංග වර්ගීකරණය)

```
                            Software (මෘදුකාංග)
                                     │
           +─────────────────────────┴─────────────────────────+
           │                                                   │
System Software (පද්ධති මෘදුකාංග)                  Application Software (යෙදුම් මෘදුකාංග)
           │                                                   │
   ┌───────┼──────────────────────┐                    ┌───────┼──────────────────────┐
   │       │                      │                    │       │                      │
Operating  Utility           Language               General-Purpose        Special-Purpose /
 System   Software         Translators                Software             Tailor-Made Software
(මෙහෙයුම් (උපයෝගිතා        (භාෂා පරිවර්තක:           (පොදු කාර්ය යෙදුම්:      (විශේෂ කාර්ය යෙදුම්:
පද්ධති)   මෘදුකාංග)        Assembler, Compiler,     Word, Excel, Browser)    Payroll, Hospital)
                           Interpreter)
```

1. **System Software (පද්ධති මෘදුකාංග):**
   * **[English Medium Text]:** "System software manages the hardware and other software in a computer system. System software is generally divided into three types:
     a. Operating System (මෙහෙයුම් පද්ධති)
     b. Utility Software (උපයෝගිතා මෘදුකාංග)
     c. Language Translators: Assembler, Compiler, Interpreter (භාෂා පරිවර්තක: එසෙම්බ්ලරය, සම්පාදකය, අර්ථවිනියාසකය)"
   * **[Sinhala Medium Text]:** "පද්ධති මෘදුකාංග (System Software) මගින් පරිගණකයේ දෘඩාංග සහ අනෙකුත් මෘදුකාංග කළමනාකරණය, පාලනය සහ මෙහෙයවීම සිදු කරයි. පද්ධති මෘදුකාංග ප්‍රධාන වශයෙන් වර්ග තුනකට බෙදිය හැක:
     a. මෙහෙයුම් පද්ධති (Operating System)
     b. උපයෝගිතා මෘදුකාංග (Utility Software)
     c. භාෂා පරිවර්තක (Language Translators: එසෙම්බ්ලරය, සම්පාදකය, අර්ථවිනියාසකය)"

2. **Application Software (යෙදුම් මෘදුකාංග):**
   * **[English Medium Text]:** "The application software which runs on the Operating System is used to carry out computer-based activities of the user such as creating documents, mathematical functions, data entry, and computer games. Examples: Word processing, Spreadsheets, Database, Computer games, Web browsers."
   * **[Sinhala Medium Text]:** "මෙහෙයුම් පද්ධතියක් මත පමණක් ක්‍රියාත්මක වන යෙදුම් මෘදුකාංග (Application Software) පරිශීලකයාගේ පරිගණක ආශ්‍රිත ක්‍රියාකාරකම් (ලිපි ලේඛන සකස් කිරීම, ගණිත කර්ම, දත්ත රැස් කිරීම, පරිගණක ක්‍රීඩා) සඳහා යොදා ගනු ලබයි. උදා: වචන සකසුම්, පැතුරුම්පත්, දත්ත සමුදාය, පරිගණක ක්‍රීඩා, වෙබ් අන්වේක්ෂක."

---

### 1.4 Fundamental Definition of an Operating System (මෙහෙයුම් පද්ධතියක මූලික අර්ථ දැක්වීම)

* **[English Medium Text]:** "An Operating System (OS) is the primary system software that manages computer hardware, system software resources, and provides common services and a user interface for application software programs. It acts as an essential intermediary/interface between the user, application software, and computer hardware."
* **[Sinhala Medium Text]:** "මෙහෙයුම් පද්ධතියක් (Operating System - OS) යනු පරිගණක දෘඩාංග සහ මෘදුකාංග සම්පත් කළමනාකරණය කරමින්, යෙදුම් මෘදුකාංග සඳහා පොදු සේවාවන් සහ පරිශීලක අතුරුමුහුණතක් සපයන ප්‍රධාන පද්ධති මෘදුකාංගයයි. එය පරිශීලකයා, යෙදුම් මෘදුකාංග සහ පරිගණක දෘඩාංග අතර අත්‍යවශ්‍ය මාධ්‍යස්ථයක්/සම්බන්ධීකාරකයක් ලෙස ක්‍රියා කරයි."

---

## ⚙️ LAYER 2: Exhaustive Domain & Real-World Sector Breakdown (සම්පත් කළමනාකරණ කාර්යයන් සහ සැබෑ ලෝක යෙදවුම්)

### 2.1 The 6 Core Resource Management Functions of an Operating System (මෙහෙයුම් පද්ධතියක ප්‍රධාන සම්පත් කළමනාකරණ කාර්යයන් 6)

1. **Process Management (ක්‍රියාවලි කළමනාකරණය):**
   * **Concept:** A program currently loaded in memory and being executed by the CPU is called a **Process**.
   * **OS Responsibility:**
     * Schedules which process gets processor time on the CPU (CPU Scheduling).
     * Allocates CPU clock cycles fairly using algorithms like Round Robin or Priority Scheduling.
     * Manages process lifecycle states: **New $\rightarrow$ Ready $\rightarrow$ Running $\rightarrow$ Waiting/Blocked $\rightarrow$ Terminated**.
     * Handles multitasking: rapidly switching execution between active programs so they appear to run simultaneously.

2. **Memory Management (මතක කළමනාකරණය):**
   * **Concept:** Coordinating Primary Memory (RAM) and caching resources to execute multiple programs without crashing.
   * **OS Responsibility:**
     * Tracks the status of every byte in RAM (free vs. allocated).
     * Dynamically allocates memory blocks when a program starts and immediately frees/deallocates memory when a process finishes.
     * Implements **Virtual Memory (අතථ්‍ය මතකය)**: When physical RAM is exhausted, the OS reserves a section of the secondary storage (Paging file / Swap space) to act as temporary RAM, swapping inactive memory pages back and forth.

3. **Device Management (උපාංග කළමනාකරණය):**
   * **Concept:** Controlling input, output, and storage peripheral devices connected to the computer.
   * **OS Responsibility:**
     * Communicates with hardware components using **Device Controllers** (hardware electronic chips integrated on motherboards/expansion cards) and **Device Drivers** (specialized software programs written by hardware manufacturers that translate OS commands into device hardware signals).
     * Provides **Plug and Play (PnP)** capability: Automatically detecting newly connected hardware (e.g., USB mouse or flash drive), matching its hardware ID, and loading the appropriate driver without manual system reconfiguration.
     * Manages printing buffers through **Spooling** (Simultaneous Peripheral Operations On-Line) so users can continue working while documents queue for printing.

4. **File Management (ගොනු කළමනාකරණය):**
   * **Concept:** Organizing digital data files and directories systematically on storage media.
   * **OS Responsibility:**
     * Manages file storage hierarchies: creating folders/directories, renaming, moving, copying, and deleting files.
     * Keeps track of file locations on disk sectors using file systems (e.g., NTFS Master File Table, FAT File Allocation Table).
     * Enforces file access permissions (Read-only, Write/Modify, Execute, Full Control).
     * Manages the **Recycle Bin / Trash Can**: provides a safety buffer where deleted files can be restored to their original path before permanent deletion.

5. **Security Management (ආරක්ෂණ කළමනාකරණය):**
   * **Concept:** Safeguarding system integrity, user privacy, and sensitive data from unauthorized access or malicious programs.
   * **OS Responsibility:**
     * User Authentication: Managing user profiles, login credentials, passwords, PINs, and biometric verification.
     * Access Control & Authorization: Separating administrator privileges from standard user accounts to prevent unauthorized system file modifications.
     * Integration with firewalls, audit logging, and antivirus tools to detect and quarantine malware/viruses.

6. **Network Management (ජාල කළමනාකරණය):**
   * **Concept:** Enabling communication and resource sharing across interconnected computer networks.
   * **OS Responsibility:**
     * Manages wired (Ethernet) and wireless (Wi-Fi, Bluetooth) network interface controllers.
     * Handles data communication protocols (TCP/IP), network addressing, and packet transmission.
     * Enables shared network resources: sharing network printers, shared network folders/drives, remote desktop sessions, and cloud storage access.

---

### 2.2 Classification of Operating Systems (මෙහෙයුම් පද්ධති වර්ගීකරණය)

| Classification Dimension | Type | Technical Definition & Mechanics | Real-World Application Sectors & Examples |
| :--- | :--- | :--- | :--- |
| **User Capacity** (පරිශීලක ධාරිතාව) | **Single-User OS** (තනි පරිශීලක) | Supports only one active user at any given moment. System resources belong exclusively to one session. | Personal desktop computers, legacy systems (MS-DOS, Windows 95, classic mobile devices). |
| | **Multi-User OS** (බහු පරිශීලක) | Allows multiple users on different terminals/clients to access, execute programs, and share system resources simultaneously. | Enterprise web servers, university mainframes, cloud data centers (Linux, UNIX, Windows Server). |
| **Tasking Capability** (කාර්ය සාධන ධාරිතාව) | **Single-Tasking OS** (තනි කාර්ය) | Executes only one program/process in memory at a time; user must close current program before opening another. | MS-DOS, embedded microwave controllers, simple microcontroller firmwares. |
| | **Multi-Tasking OS** (බහු කාර්ය) | Executes multiple programs and processes concurrently by sharing CPU time-slices and memory spaces. | Modern PCs and smartphones: typing a document while listening to Spotify and downloading files (Windows 11, macOS, Android, Ubuntu). |
| **Response Latency** (ප්‍රතිචාර කාල සීමාව) | **Real-Time OS (RTOS)** (තත්‍ය කාල) | Executes operations and produces outputs within strict, guaranteed, deterministic time limits (zero latency tolerance). | Critical mission systems: Aircraft flight control (Fly-by-wire), Automotive ABS brakes & airbags, Medical ICU ventilators, Nuclear plant telemetry, Industrial assembly robots (VxWorks, FreeRTOS, QNX). |
| | **General-Purpose OS** (පොදු කාර්ය) | Optimizes average throughput and user experience; does not guarantee millisecond-strict response deadlines. | Everyday consumer computers and smartphones (Windows, macOS, Android, Linux Mint). |
| **Licensing Model** (බලපත්‍ර ආකෘතිය) | **Proprietary OS** (හිමිකාර / Closed-Source) | Commercial software owned by a corporation; source code is hidden/closed; users purchase a license to use under strict terms. | Commercial desktops, laptops, phones: Microsoft Windows 11, Apple macOS, Apple iOS. |
| | **FOSS OS** (නිදහස් හා විවෘත මූලාශ්‍ර) | Free and Open-Source Software; source code is publicly accessible; users can freely run, study, modify, and redistribute. | Community distributions, educational setups, internet infrastructure: Linux (Ubuntu, Fedora, Debian, BOSS Linux, Linux Mint). |

---

### 2.3 Comprehensive Utility Software Breakdown (උපයෝගිතා මෘදුකාංග ගැඹුරු විශ්ලේෂණය)

Utility software comprises system programs designed to maintain, optimize, configure, analyze, and protect the computer system.

1. **Disk Defragmentation (තැටි ප්‍රතිභාගීකරණය):**
   * **The Problem:** Over time, as files are created, edited, resized, and deleted on a Hard Disk Drive (HDD), the operating system splits large files into pieces called **clusters** and saves them across non-contiguous (scattered) empty sectors throughout the disk surface. This condition is called **fragmentation**. To read a fragmented file, the mechanical read/write head must physically move back and forth across different disk tracks, causing noticeable lag and slow performance.
   * **The Solution:** The Disk Defragmenter utility analyzes the drive, reads the separated fragments, and rearranges them into contiguous (continuous) sectors while grouping all free space into one large continuous block.
   * **Crucial Exam Rule:** Disk defragmentation **does NOT delete any files** and **does NOT increase total physical disk capacity**. It simply reorganizes file clusters to **increase data retrieval speed and disk efficiency**.

2. **Disk Partitioning (තැටි පංගු කිරීම):**
   * **Mechanism:** Dividing a single physical hard drive or SSD into multiple distinct, independent logical drives or volumes (e.g., `C:`, `D:`, `E:`).
   * **Benefits:**
     * **OS Isolation:** Isolates operating system system files on drive `C:` from personal user data on drive `D:`. If the OS crashes or requires formatting, user data remains intact.
     * **Dual Booting:** Allows installing two different operating systems on the same physical computer (e.g., Windows on `C:` and Ubuntu Linux on `D:`).
     * **Backup Efficiency:** Simplifies localized volume-level backups.

3. **Disk Formatting (තැටි ආකෘතිකරණය):**
   * **Mechanism:** Preparing a storage medium (hard disk, SSD, USB flash drive, SD card) to receive and organize data according to a specific file system standard.
   * **Process:** Creates tracks, sectors, and allocation blocks, and generates the file allocation table / master index.
   * **Result:** Erases existing pointers and directory structures, rendering previously stored data inaccessible to normal operations.

4. **File Compression Utilities (ගොනු සම්පීඩන මෘදුකාංග):**
   * **Mechanism:** Employs lossless mathematical compression algorithms to encode file data using fewer bytes (e.g., WinRAR, 7-Zip, WinZip creating `.zip`, `.rar`, `.7z` archives).
   * **Benefits:** Saves storage space and accelerates file transmission over the internet/email attachments.

5. **Task Manager (කාර්ය කළමනාකරු):**
   * **Mechanism:** Built-in system monitor displaying real-time telemetry of active processes, CPU utilization, RAM consumption, disk I/O, and network activity.
   * **Troubleshooting Role:** Allows users to forcibly terminate ("End Task") frozen, unresponsive, or resource-hogging background applications.

6. **Anti-Virus Software (ප්‍රතිවෛරස් මෘදුකාංග):**
   * **Mechanism:** Continuously scans files in memory and storage against known virus signatures and heuristic patterns to detect, block, quarantine, and eliminate malware, worms, and trojans (e.g., Windows Defender, Kaspersky, Norton).

7. **Backup and Restore Utilities (ආරක්ෂිත පිටපත් සහ ප්‍රතිසාධන මෙවලම්):**
   * **Mechanism:** Automates regular duplication of critical files, databases, or entire disk images onto external drives or cloud storage, allowing full system recovery during drive failure.

---

### 2.4 File Systems, File Structure, Extensions & Access Methods (ගොනු පද්ධති, ව්‍යුහය සහ ප්‍රවේශ ක්‍රම)

#### File Anatomy & Extension Table (ගොනුවක ව්‍යුහය සහ දිගු)
* **File Name Structure:** `[Primary Name (මූලික නම)] + [Dot (.)] + [File Extension (ගොනු දිගුව)]`
*Example:* `ICT_Syllabus_2026.docx` ➔ `ICT_Syllabus_2026` is the Primary Name given by the user, while `.docx` is the Extension automatically assigned by the operating system to indicate a Microsoft Word Document.

| Domain / Category | Common File Extensions | Associated Application / File Format Description |
| :--- | :--- | :--- |
| **Word Processing & Text** | `.docx`, `.doc`, `.odt`, `.txt`, `.rtf`, `.pdf` | Microsoft Word, LibreOffice Writer, Plain Text, Adobe Acrobat |
| **Spreadsheets** | `.xlsx`, `.xls`, `.ods`, `.csv` | Microsoft Excel, LibreOffice Calc, Comma Separated Values |
| **Presentations** | `.pptx`, `.ppt`, `.odp` | Microsoft PowerPoint, LibreOffice Impress |
| **Raster Images / Graphics** | `.jpeg`, `.jpg`, `.png`, `.gif`, `.bmp`, `.tiff` | Photographs, Web graphics with transparency, Animated GIFs, Bitmaps |
| **Vector Graphics** | `.svg`, `.ai`, `.eps` | Scalable Vector Graphics, Adobe Illustrator vector shapes |
| **Audio** | `.mp3`, `.wav`, `.aac`, `.flac`, `.ogg` | Compressed MP3 audio, Uncompressed CD audio waveform, FLAC lossless |
| **Video** | `.mp4`, `.avi`, `.mkv`, `.mov`, `.wmv` | MPEG-4 Video, Audio Video Interleave, Matroska, QuickTime Video |
| **Executable & System** | `.exe`, `.msi`, `.bat`, `.sh`, `.dll` | Windows executable programs, Installer packages, Batch scripts, Shell scripts |
| **Compressed Archives** | `.zip`, `.rar`, `.7z`, `.tar`, `.gz` | Compressed archive packages |
| **Web & Hypertext** | `.html`, `.htm`, `.css`, `.js` | Webpages, Cascading Style Sheets, JavaScript program scripts |

#### Common File Systems (පොදු ගොනු පද්ධති වර්ග)
* **Windows File Systems:** `FAT16`, `FAT32`, `NTFS`
* **Linux File Systems:** `ext4`, `ReiserFS`

#### File Systems Technical Breakdown (ගොනු පද්ධති සංසන්දනය)
* **FAT16 (File Allocation Table 16):**
  * Early MS-DOS and Windows 95 file system supporting small disk partitions up to 2 GB.
* **FAT32 (File Allocation Table 32):**
  * Developed by Microsoft; universally compatible across Windows, macOS, Linux, game consoles, and cameras.
  * **Critical Limitation:** Cannot store any single file larger than **4 GB**. Maximum partition size is limited to 2 TB in standard Windows formatting.
  * Lacks advanced file permissions and encryption.
* **NTFS (New Technology File System):**
  * Default modern Windows file system.
  * Supports virtually unlimited file sizes (up to 16 TB+ per single file) and multi-terabyte volumes.
  * Features file-level encryption (EFS), security access control lists (ACL permissions), and journaling (recovers quickly from crashes).
* **ext4 (Fourth Extended Filesystem):**
  * Standard modern file system used across Linux operating systems.
  * Features high performance, journaling, large volume support, and POSIX permissions.
* **ReiserFS:**
  * High-performance journaling file system for Linux particularly effective for handling large numbers of small files.

#### File Access Methods (ගොනු ප්‍රවේශ ක්‍රම)
1. **Sequential Access (අනුක්‍රමික ප්‍රවේශය):**
   * **Mechanism:** Data records must be accessed one after another in chronological, physical order starting from the beginning of the medium to the target record.
   * **Example:** Magnetic Tape (චුම්බක පටි) used for archival server backups. To read record #500, the machine must physically wind through records #1 to #499.
2. **Direct / Random Access (සසම්භාවී ප්‍රවේශය):**
   * **Mechanism:** The system can jump directly to any physical sector, block, or address immediately using an index without traversing preceding data.
   * **Example:** Hard Disks (HDD), Solid State Drives (SSD), USB Flash Drives, Optical Discs (CD/DVD), and RAM.

#### Hierarchical Directory Path Structure (ගොනු ධූරාවලිය සහ ගොනු මග)
* **Root Directory (මූල බහලුම):** The top-most level of the drive hierarchy (e.g., `C:\` in Windows or `/` in Linux).
* **Directory Path (ගොනු මග):** The complete address indicating the exact location of a file through parent folders and subfolders.
* **Absolute Path Example:**  
  `C:\Users\Student\Documents\ICT\Grade10_Lesson05.docx`
  * `C:\` = Drive / Root Directory
  * `Users\Student\Documents\ICT\` = Folder Hierarchy (Sub-directories)
  * `Grade10_Lesson05.docx` = Target File Name

---

## 📊 LAYER 3: Comparison Tables & Visual Architecture Diagrams (සංසන්දනාත්මක වගු සහ රූප සටහන්)

### 3.1 Visual Diagram 1: Cold Booting Sequence Pipeline (පරිගණකය පණගැන්වීමේ ගැලීම් සටහන)

```
[ User Presses Power Switch ] (විදුලි බලය ලබා දීම)
             │
             ▼
[ CPU Executes BIOS / UEFI Instructions from ROM ] (ROM මතකයේ BIOS ක්‍රියාත්මක වීම)
             │
             ▼
[ POST (Power-On Self-Test) Diagnoses Hardware Components ] (POST මගින් දෘඩාංග පරීක්ෂාව)
             │
             ▼
[ BIOS Locates Bootable Secondary Storage Device (HDD/SSD/USB) ] (Boot Drive හඳුනා ගැනීම)
             │
             ▼
[ Bootstrap Loader Copies OS Kernel into RAM ] (මෙහෙයුම් පද්ධතියේ Kernel ගොනු RAM වෙත පැටවීම)
             │
             ▼
[ Control of Computer Transferred to OS ] (පරිගණකයේ පාලනය මෙහෙයුම් පද්ධතියට පැවරීම)
             │
             ▼
[ OS Loads Device Drivers & Services ] (ධාවක සහ සේවාවන් සක්‍රීය වීම)
             │
             ▼
[ User Interface (GUI Desktop / CLI Prompt) Displayed to User ] (පරිශීලක අතුරුමුහුණත දිස්වීම)
```

---

### 3.2 Visual Diagram 2: Disk Defragmentation Mechanism (තැටි ප්‍රතිභාගීකරණ ක්‍රියාවලිය)

```
BEFORE DEFRAGMENTATION (කැබලි වූ / ප්‍රතිභාගීකරණයට පෙර):
Disk Sectors: [File A-1] [File B-1] [Free] [File A-2] [File C-1] [File B-2] [Free] [File A-3]
(Read head must seek repeatedly back and forth across different disk tracks -> Slow read speed!)

AFTER DEFRAGMENTATION (ප්‍රතිභාගීකරණයෙන් පසු):
Disk Sectors: [File A-1] [File A-2] [File A-3] [File B-1] [File B-2] [File C-1] [Free] [Free]
(All clusters of each file are stored contiguously -> Fast sequential read & unified free space!)
```

---

### 3.3 Visual Diagram 3: Hierarchical File Directory Tree (ධූරාවලි ගොනු ව්‍යුහය)

```
                       C:\ (Root Directory / මූල බහලුම)
                                    │
           +────────────────────────┴────────────────────────+
           │                                                 │
     Program Files                                         Users
           │                                                 │
   ┌───────┴───────┐                                      Student
   │               │                                         │
Microsoft      LibreOffice                         ┌─────────┴─────────┐
 Office                                            │                   │
                                               Documents            Pictures
                                                   │                   │
                                                  ICT              School_Trip.jpg
                                                   │
                                      Grade10_Lesson05.docx
```

---

### 3.4 Comparison Table 1: Command Line Interface (CLI) vs. Graphical User Interface (GUI)

| Comparison Factor | Command Line Interface - CLI (විධාන පේළි අතුරුමුහුණත) | Graphical User Interface - GUI (ප්‍රස්ථාරික පරිශීලක අතුරුමුහුණත) |
| :--- | :--- | :--- |
| **Primary Interaction Mode** | Text-only typed character commands entered at prompt. | Mouse pointer, clicks, icons, windows, menus, and touch. |
| **Underlying Metaphor** | Text prompt line (`C:\>`, `$`). | **WIMP** (**W**indows, **I**cons, **M**enus, **P**ointer). |
| **User Friendliness** | Steep learning curve; difficult for beginners; non-user-friendly. | Highly intuitive, visual, and user-friendly for all ages. |
| **Memory Requirement** | Exact commands and precise syntax must be memorized. | Users do not need to memorize commands; commands are visible in menus. |
| **System Resource Usage** | Extremely low RAM and CPU consumption; runs on minimal specs. | Significantly higher RAM, graphics GPU, and processor power. |
| **Execution Speed** | Very fast execution for skilled administrative batch jobs. | Slower due to heavy graphics rendering layers. |
| **Real-World Examples** | MS-DOS, Linux Terminal (Bash), Windows Command Prompt (cmd), Cisco Router Shell. | Microsoft Windows 11, Apple macOS, Ubuntu Desktop, Android, iOS. |

---

### 3.5 Comparison Table 2: The WIMP Elements of GUI (GUI හි WIMP සංරචක 4)

| Component | Abbreviation Letter | Technical Description (තාක්ෂණික විස්තරය) | Real-World GUI Examples |
| :--- | :---: | :--- | :--- |
| **Windows** (කවුළු) | **W** | A rectangular on-screen viewing area containing a running program or document. Can be moved, resized, minimized, and maximized. | File Explorer window, Word document window, Browser tab window. |
| **Icons** (නිරූපක) | **I** | Small pictorial graphic symbols representing programs, files, folders, shortcuts, or system devices. | Folder icon, Recycle Bin trashcan, Printer icon, App shortcut logo. |
| **Menus** (මෙනු) | **M** | Drop-down, pop-up, or context lists displaying available commands and selectable options. | File menu (New, Open, Save, Print), Right-click Context menu. |
| **Pointers** (දර්ශක) | **P** | An on-screen symbol (arrow, crosshair, hand) moved by a pointing device (mouse, touchpad, trackball) to select items. | Arrow pointer, Text insertion cursor (`I-beam`), Link hand pointer. |

---

### 3.6 Comparison Table 3: Utility Tools: Defragmentation vs. Formatting vs. Partitioning

| Parameter | Disk Defragmentation (ප්‍රතිභාගීකරණය) | Disk Formatting (ආකෘතිකරණය) | Disk Partitioning (පංගු කිරීම) |
| :--- | :--- | :--- | :--- |
| **Core Purpose** | Rearranges scattered non-contiguous file clusters into contiguous sectors. | Configures storage medium with a file system architecture and tracks. | Divides single physical drive into multiple independent logical volumes. |
| **Effect on Existing Files** | **No files deleted.** Contents and file paths remain intact. | **Erases existing directory tables.** File links are destroyed. | Prepares disk volume boundaries; non-destructive when shrinking unused space. |
| **Effect on Total Drive Capacity** | **Zero change** in total physical capacity. Increases read/write efficiency. | Sets partition usable capacity based on file system overhead. | Splits total physical capacity into designated drive sizes (e.g., 200GB `C:` + 800GB `D:`). |
| **When to Perform** | Routinely when mechanical hard drive experiences performance slowdown. | Upon buying a new drive, changing file system, or before clean OS reinstall. | When configuring a new computer or separating OS from user files. |

---

## 🎯 LAYER 4: High-Yield Exam Pitfalls, Term Glossary & Past Paper Bank (විභාග උගුල්, පාරිභාෂික ශබ්දකෝෂය සහ පසුගිය විභාග ප්‍රශ්න)

### 4.1 High-Yield G.C.E. O/L Examination Traps (විභාගයේදී අනිවාර්යයෙන්ම හසුවන උගුල්)

* ⚠️ **Exam Trap 1: "Where does the Operating System actually execute?"**
  * *Trap:* Students often write "Hard Disk" or "RAM".
  * *Correct Fact:* The OS kernel is **stored on the hard disk** when turned off; it is **loaded into RAM** during boot; but its instructions are **executed by the PROCESSOR / CPU**! (Directly tested in 2025 O/L Paper I - Question 02).
* ⚠️ **Exam Trap 2: "What software runs first when a computer powers on?"**
  * *Trap:* Students select "Operating System" or "Antivirus".
  * *Correct Fact:* The **BIOS/UEFI firmware stored in ROM** executes first to run the POST hardware diagnostic. The OS is loaded only after POST succeeds! (Directly tested in 2021 O/L Paper I - Question 09 and 2023 O/L Paper II - Question 01).
* ⚠️ **Exam Trap 3: "Does Disk Defragmentation create more storage space or delete files?"**
  * *Trap:* Students believe defragmentation frees up gigabytes of new space or deletes temporary files.
  * *Correct Fact:* Defragmentation **neither deletes files nor increases total disk capacity**. It merely reorganizes scattered clusters to sit continuously next to each other, improving drive read/write speed! (Tested in 2025 O/L Paper II - Question 01 (v)).
* ⚠️ **Exam Trap 4: "Is an Operating System an Application Software?"**
  * *Trap:* Confusing System Software with Application Software.
  * *Correct Fact:* An Operating System is strictly a **System Software**. Word processors, web browsers, and media players are Application Software.
* ⚠️ **Exam Trap 5: "Real-Time OS does NOT just mean 'fast'."**
  * *Trap:* Defining Real-Time OS as simply "a high-speed computer".
  * *Correct Fact:* Real-Time means **strict, guaranteed, deterministic time deadlines**. If an automotive airbag or missile controller responds even 50 milliseconds late, catastrophic failure occurs.
* ⚠️ **Exam Trap 6: "First Software Installed After Formatting Hard Disk"**
  * *Trap:* Students select "Antivirus" or "Office Package".
  * *Correct Fact:* An empty, newly formatted hard drive has no operating environment; the **Operating System must be installed first** before any application or antivirus software can function. (Tested in 2021 O/L Paper I - Q09 & 2024 O/L Paper I - Q01).

---

### 4.2 Comprehensive Key Terms & Definitions Glossary (පාරිභාෂික ශබ්දකෝෂය)

1. **Operating System (මෙහෙයුම් පද්ධතිය):** System software that manages computer hardware, programs, memory, files, and user interface.
2. **Booting (පණගැන්වීම):** The sequential process of powering up a computer, verifying hardware via POST, and loading the OS from secondary storage to RAM.
3. **BIOS (මූලික ආදාන ප්‍රතිදාන පද්ධතිය):** Basic Input Output System; firmware on ROM containing boot and POST instructions.
4. **POST (Power-On Self-Test):** Firmware hardware diagnostic check executed before OS loading.
5. **Kernel (කර්නලය):** The central core of the operating system that resides permanently in RAM to manage hardware and CPU scheduling.
6. **Command Line Interface - CLI (විධාන පේළි අතුරුමුහුණත):** A text-based user interface where commands are typed on a prompt line.
7. **Graphical User Interface - GUI (ප්‍රස්ථාරික පරිශීලක අතුරුමුහුණත):** A visual user interface based on Windows, Icons, Menus, and Pointers (WIMP).
8. **Device Driver (උපාංග ධාවකය):** Specialized software that allows the operating system to communicate with a specific peripheral hardware device.
9. **Plug and Play - PnP (පේනුගත කර ධාවනය):** System feature enabling hardware to be automatically recognized and configured upon connection.
10. **Virtual Memory (අතථ්‍ය මතකය):** Memory management technique where secondary storage acts as temporary RAM extension.
11. **Disk Defragmentation (තැටි ප්‍රතිභාගීකරණය):** Reorganizing non-contiguous fragmented file clusters into contiguous sectors to improve read/write performance.
12. **Disk Partitioning (තැටි පංගු කිරීම):** Dividing a single physical disk drive into multiple distinct logical drives (`C:`, `D:`).
13. **Disk Formatting (තැටි ආකෘතිකරණය):** Initializing a disk medium with tracks, sectors, and file system tables to prepare it for file storage.
14. **Real-Time Operating System - RTOS (තත්‍ය කාල මෙහෙයුම් පද්ධති):** An OS that processes data and responds within strict, guaranteed time constraints.
15. **FOSS (නිදහස් හා විවෘත මූලාශ්‍ර මෘදුකාංග):** Free and Open-Source Software where source code is freely available to inspect, modify, and redistribute.

---

### 4.3 Summary Matrix of O/L Exam Subtopic Frequency (2020 – 2025)

| Subtopic in Syllabus | 2020 O/L | 2021 O/L | 2022 O/L | 2023 O/L | 2024 O/L | 2025 O/L | Total Exam Appearances |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **OS Examples & Definition** | P1-Q08, P2-Q1(ii) | — | — | — | P1-Q10 | P1-Q03 | **4** |
| **GUI, CLI & WIMP Concepts** | P1-Q09 | — | — | — | — | — | **1** |
| **Booting Sequence & BIOS/POST** | — | P1-Q09 | P2-Q1(v) | P2-Q1(i) | P1-Q01 | P1-Q02 | **5** |
| **OS Resource Management Functions** | — | — | — | — | — | P1-Q09 | **1** |
| **Utility Software & Defragmentation** | — | — | — | — | — | P2-Q1(v) | **1** |
| **File Management & Folders** | — | — | — | — | — | P2-Q1(v) | **1** |

---

# SECTION B: Complete O/L Past Paper Question Extraction (2020 – 2025)

### Question 01 (2020 O/L Paper I - Question 08)
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
* **Answer & Rationale:**
  * **Correct Option:** **(1)**
  * **English:** Android is a mobile OS, Ubuntu is a Linux OS, and Windows 10 is a desktop OS. Windows Explorer is a file management utility/application, not an operating system.
  * **Sinhala:** ඇන්ඩ්‍රොයිඩ්, උබුන්ටු සහ වින්ඩෝස් 10 යන සියල්ල මෙහෙයුම් පද්ධති වේ. Windows Explorer යනු මෙහෙයුම් පද්ධතියක් නොව ගොනු කළමනාකරණය කරන යෙදුමකි.

---

### Question 02 (2020 O/L Paper I - Question 09)
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
* **Answer & Rationale:**
  * **Correct Option:** **(3) A and B only**
  * **English:** A is true because GUIs are mouse-driven. B is true because WIMP stands for Windows, Icons, Menus, Pointer. C is false because CLI requires memorizing complex syntax and is much less user-friendly than GUI.
  * **Sinhala:** A නිවැරදිය (GUI මූසිකය භාවිත කරයි). B නිවැරදිය (WIMP = Windows, Icons, Menus, Pointer). C වැරදිය (CLI භාවිත මිතුරු නැත; එය භාවිත කිරීමට විධාන මතක තබා ගත යුතුය).

---

### Question 03 (2020 O/L Paper II - Question 01 (ii) (b))
* **English Medium Question:**
  "1. (ii) Consider the following statement: An operating system is an example for ........................ .
  Select the correct term from the list: {hard disk, systems software, application software, RAM}"
* **Sinhala Medium Question:**
  "1. (ii) පහත දැක්වෙන ප්‍රකාශය සලකා බලන්න: මෙහෙයුම් පද්ධතියක් ........................ සඳහා උදාහරණයකි.
  පද ලැයිස්තුවෙන් නිවැරදි පදය තෝරන්න: {දෘඩ තැටිය, පද්ධති මෘදුකාංග (System software), යෙදුම් මෘදුකාංග (Application software), RAM}"
* **Answer & Rationale:**
  * **Correct Term:** **systems software (පද්ධති මෘදුකාංග)**
  * **English:** Operating systems belong to the category of system software, which manages hardware and software resources.
  * **Sinhala:** මෙහෙයුම් පද්ධතියක් යනු දෘඩාංග සහ මෘදුකාංග කළමනාකරණය කරන පද්ධති මෘදුකාංගයකි.

---

### Question 04 (2021 O/L Paper I - Question 09)
* **English Medium Question:**
  "9. Which of the following is the first software that must be installed on a computer after formatting its hard disk?
  (1) Office package          (2) Operating system          (3) Antivirus software          (4) Web browser"
* **Sinhala Medium Question:**
  "9. පුද්ගල පරිගණකයක දෘඩ තැටිය හැඩසවුම් (formatting) කළ පසු එහි මුලින්ම ස්ථාපනය කළ යුතු මෘදුකාංගය කුමක්ද?
  (1) කාර්යාල කට්ටලය (Office package)
  (2) මෙහෙයුම් පද්ධතිය (Operating system)
  (3) ප්‍රතිවෛරස් මෘදුකාංගය (Antivirus software)
  (4) වෙබ් අන්වේක්ෂකය (Web browser)"
* **Answer & Rationale:**
  * **Correct Option:** **(2) Operating system**
  * **English:** Formatting erases the drive; before running any application software or antivirus, the base operating system must be installed to manage hardware and execute software.
  * **Sinhala:** දෘඩ තැටිය හැඩසවුම් (format) කළ විට එහි කිසිදු මෘදුකාංගයක් නොමැත. යෙදුම් හෝ ප්‍රතිවෛරස් මෘදුකාංග ධාවනය කිරීමට පෙර මූලික මෙහෙයුම් පද්ධතිය ස්ථාපනය කළ යුතුය.

---

### Question 05 (2022 O/L Paper II - Question 01 (v))
* **English Medium Question:**
  "1. (v) Raja powers on his laptop and uses a word processing application to type a letter. Afterwards, he shuts down the computer via the Operating System.
  Select the appropriate term from the list {BIOS, OS, OS, WP} for labels I, II, III, and IV representing software executing on the processor:
  I (Hardware Check at Startup) $\rightarrow$ II (Operating Environment) $\rightarrow$ III (Resource Manager) $\rightarrow$ IV (Word Processor Application)"
* **Sinhala Medium Question:**
  "1. (v) රාජා පරිගණකයක් පණ ගන්වා වචන සකසුම් යෙදවුමක් භාවිතයෙන් ලේඛනයක් යතුරු ලියනය කරයි. ඉන් පසු ඔහු මෙහෙයුම් පද්ධතිය හරහා පරිගණකය වසා දමයි (shut down).
  මෙම සන්දර්භයේදී පරිගණකයේ සකසනය (processor) මත ධාවනය වන්නන් I, II, III සහ IV සඳහා සුදුසු ආදේශක ලැයිස්තුවෙන් තෝරා ලියන්න: {BIOS, OS, OS, WP}"
* **Answer & Rationale:**
  * **Correct Labels:**
    * **I:** **BIOS** (Performs initial POST hardware checks)
    * **II:** **OS** (Provides platform and launches applications)
    * **III:** **OS** (Manages resources and controls shutdown)
    * **IV:** **WP** (Word Processing application used to type letter)

---

### Question 06 (2023 O/L Paper II - Question 01 (i))
* **English Medium Question:**
  "1. (i) When a computer is powered on, ...A... (Application software / BIOS) runs to check hardware. Then the Operating System is loaded into ...B... (Hard disk / RAM). This creates the environment for computer processes to run and displays a login interface to ...C... (User / Network). To manage other tasks and requirements, ...D... (Operating System / Anti-virus software) runs continuously."
* **Sinhala Medium Question:**
  "1. (i) පරිගණකය පණගැන්වූ විට, සියලු දෘඩාංග පරීක්ෂා කර ඒවා නිසිපරිදි ක්‍රියාත්මක වන බව තහවුරු කිරීමට ...A... (යෙදුම් මෘදුකාංගය / BIOS) ධාවනය වෙයි. ඉන්පසු මෙහෙයුම් පද්ධතිය ...B... (දෘඩ තැටියට / මතකයට (RAM)) ප්‍රවේශ (load) වේ. එය පරිගණකයේ ක්‍රියාහන් (processes) ධාවනය වීමට අවශ්‍ය මූලික පරිසරය සකසයි. ඉන්පසු පරිශීලකයාට පරිගණකයට පූරණය වීමට (login) අතුරුමුහුණතක් සපයයි. පූරණය වීමෙන් පසු පරිශීලකයාට ක්‍රියාහන් කිහිපයක් ආරම්භ කළ හැක. එම ක්‍රියාහන්වල විවිධ අවශ්‍යතා සම්පූර්ණ කිරීමට සහ පරිගණකයේ අනෙකුත් කළමනාකරණ කටයුතු කිරීමට ...D... (ප්‍රතිවෛරස් මෘදුකාංගය / මෙහෙයුම් පද්ධතිය) අවශ්‍ය පරිදි ධාවනය වේ."
* **Answer & Rationale:**
  * **A:** **BIOS**
  * **B:** **RAM (මතකයට)**
  * **C:** **User (පරිශීලකයා)**
  * **D:** **Operating System (මෙහෙයුම් පද්ධතිය)**

---

### Question 07 (2024 O/L Paper I - Question 01)
* **English Medium Question:**
  "1. The hard drive in a computer is formatted during maintenance. Which of the following should now be first installed in it?
  (1) a software firewall          (2) an anti-virus software          (3) an application software          (4) an operating system"
* **Sinhala Medium Question:**
  "1. නඩත්තුවකදී පරිගණකයක දෘඩ තැටිය ආකෘතිකරණය (format) කෙරිණි. පහත කවරක් දැන් එහි මුලින්ම ස්ථාපනය කළ යුතුද?
  (1) මෘදුකාංග ගිනිපවුරක් (firewall)
  (2) ප්‍රතිවෛරස් මෘදුකාංගයක්
  (3) යෙදුම් මෘදුකාංගයක්
  (4) මෙහෙයුම් පද්ධතියක්"
* **Answer & Rationale:**
  * **Correct Option:** **(4) an operating system (මෙහෙයුම් පද්ධතියක්)**
  * **English:** Firewalls, antiviruses, and application software cannot install or run without an underlying operating system.
  * **Sinhala:** මෙහෙයුම් පද්ධතියක් නොමැතිව ගිනිපවුරු, ප්‍රතිවෛරස් හෝ යෙදුම් මෘදුකාංග ස්ථාපනය කිරීමට නොහැක.

---

### Question 08 (2024 O/L Paper I - Question 10)
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
* **Answer & Rationale:**
  * **Correct Option:** **(4) Android, MacOS, Ubuntu, Windows**
  * **English:** Option 4 contains purely operating systems. Option 1 contains application software. Option 2 and 3 include antivirus software and application packages.
  * **Sinhala:** 4 වන වරණයේ ඇත්තේ මෙහෙයුම් පද්ධති පමණි (Android, MacOS, Ubuntu, Windows). අනෙක් වරණවල යෙදුම් මෘදුකාංග සහ ප්‍රතිවෛරස් මෘදුකාංග අඩංගු වේ.

---

### Question 09 (2025 O/L Paper I - Question 02)
* **English Medium Question:**
  "2. In which of the following are the instructions of the operating system of a computer executed?
  (1) caches          (2) main memory          (3) processor          (4) registers"
* **Sinhala Medium Question:**
  "2. පරිගණකයක මෙහෙයුම් පද්ධතියේ උපදෙස් ක්‍රියාත්මක (executed) වන්නේ පහත කුමකද?
  (1) නිහිත/වාරික මතකය (caches)
  (2) ප්‍රධාන මතකය (main memory)
  (3) සකසනය / මධ්‍ය සැකසුම් ඒකකය (processor)
  (4) රෙජිස්තර (registers)"
* **Answer & Rationale:**
  * **Correct Option:** **(3) processor (සකසනය)**
  * **English:** All instructions in a computer system (whether from the OS or application software) are executed by the CPU / processor. Main memory and caches only store instructions.
  * **Sinhala:** මෙහෙයුම් පද්ධතියේ සහ සියලුම වැඩසටහන්වල උපදෙස් ක්‍රියාත්මක කරනු ලබන්නේ සකසනය (processor / CPU) මගිනි. මතකය මගින් සිදු කරන්නේ උපදෙස් රඳවා තබා ගැනීම පමණි.

---

### Question 10 (2025 O/L Paper I - Question 03)
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
* **Answer & Rationale:**
  * **Correct Option:** **(2) hard disk (දෘඩ තැටිය)**
  * **English:** The hard disk is non-volatile secondary storage that retains data permanently when electricity is switched off. Caches, main memory (RAM), and processor registers lose data when unpowered.
  * **Sinhala:** දෘඩ තැටිය යනු අස්ථාවර නොවන (non-volatile) ද්විතීයික ආචයනයක් බැවින් විදුලිය නොමැති විටද දත්ත සුරැකී පවතී. RAM සහ නිහිත මතකය විදුලිය විසන්ධි වූ විට මැකී යයි.

---

### Question 11 (2025 O/L Paper I - Question 09)
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
* **Answer & Rationale:**
  * **Correct Option:** **(4) Right-aligning text in a word processing document**
  * **English:** Aligning text is an application-level task performed by Word Processing software, not a system resource management task of an operating system.
  * **Sinhala:** පාඨ දකුණට තෙරෙපීම (Right-alignment) යනු වචන සකසුම් (Word Processing) යෙදුම් මෘදුකාංගයක කාර්යයක් වන අතර එය මෙහෙයුම් පද්ධතියක කාර්යයක් නොවේ.

---

### Question 12 (2025 O/L Paper II - Question 01 (v) (a) & (b))
* **English Medium Question:**
  "1. (v) (a) A person has many files related to various subjects and he stores all of them in the 'Documents' folder of his computer. Isn't there a better method? Explain.
  (b) What is meant by 'Disk de-fragmentation'?"
* **Sinhala Medium Question:**
  "1. (v) (a) පුද්ගලයෙකු සතුව විවිධ විෂයයන්ට අදාළ ගොනු රැසක් ඇති අතර ඔහු ඒ සියල්ල තම පරිගණකයේ 'Documents' ෆෝල්ඩරයේ ගබඩා කරයි. මීට වඩා හොඳ ක්‍රමයක් නොමැතිද? පැහැදිලි කරන්න.
  (b) 'Disk de-fragmentation' (තැටි ප්‍රතිභාගීකරණය) යන්නෙන් අදහස් කරන්නේ කුමක්ද?"
* **Answer & Rationale:**
  * **Part (a) Model Answer:**
    * **English:** Yes, there is a better method. He should create separate sub-folders for each subject within the 'Documents' folder (e.g., `ICT`, `Science`, `Maths`) and store the corresponding files inside them. This establishes a clean hierarchical directory structure, avoids clutter, and enables faster file retrieval.
    * **Sinhala:** ඔව්, මීට වඩා හොඳ ක්‍රමයක් ඇත. 'Documents' ෆෝල්ඩරය තුළ එක් එක් විෂය සඳහා වෙන වෙනම උප-ෆෝල්ඩර (Sub-folders: උදා: `ICT`, `Science`, `Maths`) සාදා, අදාළ ගොනු ඒ තුළ ගබඩා කළ හැක. එමගින් ධූරාවලි ගොනු ව්‍යුහයක් ගොඩනැගෙන අතර ගොනු සෙවීම පහසු සහ කාර්යක්ෂම වේ.
  * **Part (b) Model Answer:**
    * **English:** Disk de-fragmentation is the process of physically reorganizing scattered, non-contiguous file pieces (clusters) on a hard disk drive into continuous, contiguous sectors. This minimizes read/write head movement, thereby increasing hard disk read speed and operational efficiency.
    * **Sinhala:** තැටි ප්‍රතිභාගීකරණය (Disk Defragmentation) යනු දෘඩ තැටිය පුරා විසිරී කැබලි වී (fragmented) පවතින ගොනු කොටස් නැවත එක් කර අඛණ්ඩව පිහිටන පරිදි සකස් කිරීමේ ක්‍රියාවලියයි. එමගින් දෘඩ තැටියේ කියවීමේ/ලිවීමේ වේගය සහ කාර්යක්ෂමතාව වැඩි වේ.
