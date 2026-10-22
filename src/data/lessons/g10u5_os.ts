import { GeneralLessonData } from '../allLessonsData';

export const G10_U5_OS_DATA: GeneralLessonData = {
  id: 'g10-u5',
  grade: '10',
  unitNumber: 5,
  titleEn: 'Operating Systems',
  titleSi: 'මෙහෙයුම් පද්ධති',
  subtopics: [
    {
      id: 'g10-u5-st-1',
      number: '5.1',
      titleEn: 'Computer Components, Software Classification & Booting Sequence',
      titleSi: 'පරිගණක සංරචක, මෘදුකාංග වර්ගීකරණය සහ Booting ක්‍රියාවලිය',
      summaryEn: 'Physical hardware, non-volatile ROM firmware, system vs application software classification, and the 4-phase computer booting sequence.',
      summarySi: 'භෞතික දෘඩාංග, ROM ස්ථීරාංග, පද්ධති හා යෙදුම් මෘදුකාංග වර්ගීකරණය සහ පරිගණකය පණගැන්වීමේ (Booting) 4-පියවර ක්‍රියාවලිය.',
      blocks: [
        {
          id: 'b-g10-u5-1-1',
          highlightTerm: 'Hardware',
          highlightTermSi: 'දෘඩාංග',
          en: 'Hardware refers to the physical, tangible electronic and mechanical components of a computer system that possess a definite physical shape. Hardware components include input devices (mouse, keyboard, scanner), processing units (CPU, motherboard), storage devices (hard disk, SSD, RAM), and output devices (monitor, printer, speaker). Without software instructions, hardware cannot perform any logical operations independently.',
          si: 'දෘඩාංග (Hardware) යනු නිශ්චිත හැඩයක් සහිත, අපට ස්පර්ශ කළ හැකි, පරිගණකයේ භෞතික, ඉලෙක්ට්‍රොනික හා යාන්ත්‍රික සංරචක වේ. යතුරුපුවරුව, මූසිකය, සංදර්ශකය, මධ්‍ය සැකසුම් ඒකකය (CPU), දෘඩ තැටිය, RAM මතකය සහ මුද්‍රණ යන්ත්‍රය දෘඩාංග සඳහා උදාහරණ වේ. මෘදුකාංග මගින් ලබා දෙන උපදෙස් නොමැතිව දෘඩාංගවලට ස්වාධීනව කිසිදු කාර්යයක් කළ නොහැක.'
        },
        {
          id: 'b-g10-u5-1-2',
          highlightTerm: 'Firmware',
          highlightTermSi: 'ස්ථීරාංග',
          en: 'Firmware refers to permanent, low-level operational instructions and programs permanently etched into non-volatile Read Only Memory (ROM) chips at the time of manufacturing. Firmware cannot be erased when electrical power is switched off. In computers, firmware (specifically BIOS - Basic Input/Output System or modern UEFI) contains the essential startup code executed immediately when electrical power is applied.',
          si: 'ස්ථීරාංග (Firmware) යනු පරිගණක නිෂ්පාදන අවස්ථාවේදීම පඨන මාත්‍ර මතකයෙහි (ROM) ස්ථිරව තැන්පත් කරන ලද විශේෂ මූලික උපදෙස් මාලාවන් වේ. පරිගණකයේ විදුලිය විසන්ධි වුවද මෙම උපදෙස් නොමැකේ. BIOS (Basic Input/Output System) හෝ UEFI යනු ස්ථීරාංග සඳහා ප්‍රධානතම උදාහරණය වන අතර, පරිගණකය පණගන්වන මොහොතේ මුලින්ම ක්‍රියාත්මක වන්නේ මෙම උපදෙස් වේ.'
        },
        {
          id: 'b-g10-u5-1-3',
          highlightTerm: 'Booting Process & POST',
          highlightTermSi: 'පණගැන්වීමේ ක්‍රියාවලිය හා POST',
          en: 'Booting is the automated process of loading the operating system from secondary storage (such as a hard drive or SSD) into primary memory (RAM) and handing over system control to the OS. When powered on, the CPU executes BIOS from ROM, initiates the Power-On Self-Test (POST) to diagnose motherboard hardware and RAM, reads the Master Boot Record (MBR) from the boot drive, loads the OS kernel into RAM, and presents the User Interface. Cold Booting occurs from a powered-off state; Warm Booting (Rebooting) occurs via system restart without power interruption.',
          si: 'Booting යනු ද්විතීයික ආචයනයෙහි (දෘඩ තැටිය හෝ SSD) ඇති මෙහෙයුම් පද්ධතිය ප්‍රධාන මතකය (RAM) වෙත පටවා පරිගණකයේ පාලනය මෙහෙයුම් පද්ධතියට භාරදීමේ ස්වයංක්‍රීය ක්‍රියාවලියයි. පරිගණකය බලගැන්වූ විට CPU මගින් ROM හි ඇති BIOS ක්‍රියාත්මක කර POST පරීක්ෂාවෙන් දෘඩාංග ක්‍රියාකාරීත්වය තහවුරු කරයි. ඉන්පසු මෙහෙයුම් පද්ධතිය RAM මතකයට පටවා තිරය මත අතුරුමුහුණත පෙන්වයි. විදුලිය විසන්ධිව තිබූ පරිගණකයක් මුල සිට පණගැන්වීම Cold Booting වන අතර, විදුලිය නොකඩා Restart කිරීම Warm Booting වේ.'
        },
        {
          id: 'b-g10-u5-1-4',
          highlightTerm: 'System vs Application Software',
          highlightTermSi: 'පද්ධති හා යෙදුම් මෘදුකාංග',
          en: 'Software is classified into two primary categories: System Software and Application Software. System Software manages and controls computer hardware and provides a stable operational platform for other programs; it comprises Operating Systems (Windows, Linux), Utility Software (Defragmenter, Antivirus), and Language Translators (Assembler, Compiler, Interpreter). Application Software consists of programs designed directly for end-user productive tasks such as document typing, calculations, graphic design, and web browsing.',
          si: 'පරිගණක මෘදුකාංග ප්‍රධාන කොටස් දෙකකට බෙදේ: පද්ධති මෘදුකාංග (System Software) සහ යෙදුම් මෘදුකාංග (Application Software). පරිගණක දෘඩාංග කළමනාකරණය කරමින් අනෙකුත් මෘදුකාංග ක්‍රියාත්මක වීමට අවශ්‍ය පසුබිම සලසන්නේ පද්ධති මෘදුකාංග මගිනි; මෙහෙයුම් පද්ධති, උපයෝගිතා මෘදුකාංග සහ භාෂා පරිවර්තක ඊට අයත් වේ. යෙදුම් මෘදුකාංග යනු පරිශීලකයාගේ එදිනෙදා කාර්යයන් (ලිපි ලිවීම, ගණනය කිරීම්, චිත්‍ර ඇඳීම, අන්තර්ජාලය පරිශීලනය) සඳහා නිර්මාණය කළ වැඩසටහන් වේ.'
        }
      ],
      examples: [
        {
          id: 'ex-5-1-1',
          titleEn: 'The 4-Step Booting Sequence Pipeline',
          titleSi: 'පරිගණකය පණගැන්වීමේ පියවර 4 ගැලීම් සටහන',
          contentEn: '1. Power Surge -> PSU stabilizes voltage (+12V, +5V) and triggers CPU Power-Good signal.\n2. ROM Firmware Execution -> CPU reads BIOS/UEFI firmware stored in non-volatile ROM.\n3. POST Routine -> Hardware diagnostic checks CPU registers, RAM chips, and keyboard.\n4. OS Load to RAM -> Bootloader reads OS kernel from secondary storage and loads it into primary RAM.'
        }
      ],
      tableData: {
        headers: [
          { en: 'Component / Phase', si: 'සංරචකය / අදියර' },
          { en: 'Memory Medium', si: 'මතක මාධ්‍යය' },
          { en: 'Primary Responsibility', si: 'ප්‍රධාන කාර්යභාරය' },
          { en: 'Volatility', si: 'අස්ථාවර බව' }
        ],
        rows: [
          {
            col0: { en: 'BIOS / Firmware', si: 'BIOS / ස්ථීරාංගය' },
            col1: { en: 'ROM (Read Only Memory)', si: 'ROM (පඨන මාත්‍ර මතකය)' },
            col2: { en: 'Executes POST hardware diagnostic & locates boot drive', si: 'POST දෘඩාංග පරීක්ෂාව සහ boot drive හඳුනා ගැනීම' },
            col3: { en: 'Non-Volatile (Permanent)', si: 'නොමැකෙන මතකය (ස්ථිරයි)' }
          },
          {
            col0: { en: 'Operating System Kernel', si: 'මෙහෙයුම් පද්ධති කර්නලය' },
            col1: { en: 'RAM (Main Memory)', si: 'RAM (ප්‍රධාන මතකය)' },
            col2: { en: 'Manages CPU scheduling, memory partitions, and user UI', si: 'CPU කාලය, මතකය සහ අතුරුමුහුණත පාලනය කිරීම' },
            col3: { en: 'Volatile (Cleared at power off)', si: 'මැකෙන මතකය (විදුලිය නැතිවිට මැකේ)' }
          },
          {
            col0: { en: 'OS Storage Image', si: 'මෙහෙයුම් පද්ධති ගොනු' },
            col1: { en: 'HDD / SSD (Secondary Storage)', si: 'HDD / SSD (ද්විතීයික ආචයනය)' },
            col2: { en: 'Permanent disk storage of OS binaries and user files', si: 'OS ගොනු සහ පරිශීලක දත්ත ස්ථිරව ගබඩා කිරීම' },
            col3: { en: 'Non-Volatile (Permanent)', si: 'නොමැකෙන මතකය (ස්ථිරයි)' }
          }
        ]
      },
      checkpointQuiz: {
        id: 'cp-5-1',
        questionEn: 'What is the diagnostic routine performed by the BIOS during the computer boot sequence?',
        questionSi: 'පරිගණකය පණගැන්වීමේදී BIOS මගින් සිදු කරනු ලබන මූලික දෘඩාංග පරීක්ෂාව කුමක්ද?',
        options: [
          { id: 'opt-a', en: 'Disk Defragmentation', si: 'තැටි ප්‍රතිභාගීකරණය' },
          { id: 'opt-b', en: 'Power-On Self-Test (POST)', si: 'Power-On Self-Test (POST)' },
          { id: 'opt-c', en: 'Virtual Memory Paging', si: 'අතථ්‍ය මතක පිටු සැකසුම' },
          { id: 'opt-d', en: 'Antivirus Malware Scan', si: 'ප්‍රතිවෛරස් ස්කෑන් පරීක්ෂාව' }
        ],
        correctOptionId: 'opt-b',
        explanationEn: 'The BIOS in ROM automatically executes the Power-On Self-Test (POST) to diagnose motherboard hardware components before the bootloader fetches the OS from secondary storage.',
        explanationSi: 'මෙහෙයුම් පද්ධතිය RAM වෙත පැටවීමට පෙර ROM හි ඇති BIOS මගින් POST (Power-On Self-Test) පරීක්ෂාව ධාවනය කර සියලු දෘඩාංග නිවැරදිව ක්‍රියා කරන්නේදැයි තහවුරු කරයි.'
      }
    },
    {
      id: 'g10-u5-st-2',
      number: '5.2',
      titleEn: 'Operating System Classification, Architecture & User Interfaces',
      titleSi: 'මෙහෙයුම් පද්ධති වර්ගීකරණය සහ පරිශීලක අතුරුමුහුණත්',
      summaryEn: 'Single-user vs multi-user, multi-tasking and RTOS categories, contrasted alongside Command Line Interface (CLI) and Graphical User Interface (GUI) with WIMP elements.',
      summarySi: 'තනි හා බහු පරිශීලක, බහු කාර්ය හා තත්‍ය කාල (RTOS) වර්ගීකරණයන්, CLI සහ WIMP මූලධර්ම සහිත GUI අතුරුමුහුණත් සංසන්දනය.',
      blocks: [
        {
          id: 'b-g10-u5-2-1',
          highlightTerm: 'Operating System Classification',
          highlightTermSi: 'මෙහෙයුම් පද්ධති වර්ගීකරණය',
          en: 'Operating systems are classified based on user and task handling capabilities:\n* **Single-User Single-Tasking:** Supports one user running only one application at a time (e.g., MS-DOS).\n* **Single-User Multi-Tasking:** Allows a single user to run multiple programs concurrently (e.g., Windows 10/11, macOS).\n* **Multi-User:** Allows multiple concurrent network users to access shared system resources simultaneously (e.g., Linux, Unix, Windows Server).\n* **Real-Time Operating System (RTOS):** Delivers guaranteed outputs within rigid, deterministic deadlines without delay (e.g., VxWorks, QNX in aircraft fly-by-wire, car ABS, medical life support).',
          si: 'මෙහෙයුම් පද්ධති ඒවායේ කාර්යයන් සහ පරිශීලක පහසුකම් අනුව වර්ගීකරණය කෙරේ:\n* **තනි පරිශීලක තනි කාර්ය (Single-User Single-Tasking):** එක් වරකට එක් පරිශීලකයෙකුට එක් කාර්යයක් පමණක් කළ හැක (උදා: MS-DOS).\n* **තනි පරිශීලක බහු කාර්ය (Single-User Multi-Tasking):** එක් පරිශීලකයෙකුට වැඩසටහන් කිහිපයක් එකවර ධාවනය කළ හැක (උදා: Windows 10/11, macOS).\n* **බහු පරිශීලක (Multi-User):** පරිශීලකයින් කිහිප දෙනෙකුට එකවර පද්ධතියට ප්‍රවේශ විය හැක (උදා: Linux, Unix, Windows Server).\n* **තත්‍ය කාල (RTOS):** දැඩි කාල සීමාවක් තුළ නියත ලෙස ප්‍රතිදාන ලබා දෙයි (උදා: ගුවන් යානා පාලනය, රෝහල් ජීවිතාරක්ෂක පද්ධති, මෝටර් රථ ABS).'
        },
        {
          id: 'b-g10-u5-2-2',
          highlightTerm: 'Command Line Interface (CLI)',
          highlightTermSi: 'විධාන රේඛා අතුරුමුහුණත (CLI)',
          en: 'Command Line Interface (CLI) is a text-based user interface where the user types specific syntax commands at a prompt (e.g., DIR, COPY, DEL in MS-DOS or ls, cp, rm in Linux Terminal) and presses Enter to execute them. CLI requires very low RAM and processor resources and allows swift scripting and remote administration, but requires the user to memorize precise command names, syntax, and parameter switches.',
          si: 'විධාන රේඛා අතුරුමුහුණත (CLI) යනු පරිශීලකයා විසින් පෙළ ආකාරයේ නිශ්චිත විධාන (commands) යතුරු ලියනය කර පරිගණකය මෙහෙයවන අතුරුමුහුණතකි (උදා: MS-DOS, Linux Terminal). CLI ක්‍රියාත්මක වීමට ඉතා අඩු RAM මතකයක් සහ සකසන බලයක් ප්‍රමාණවත් වන අතර පද්ධති පරිපාලනයට වේගවත් වේ. නමුත් පරිශීලකයා සියලු විධාන සහ ඒවායේ නිවැරදි අක්ෂර වින්‍යාසය කටපාඩමින් මතක තබා ගත යුතුය.'
        },
        {
          id: 'b-g10-u5-2-3',
          highlightTerm: 'Graphical User Interface (GUI) & WIMP',
          highlightTermSi: 'චිත්‍රක පරිශීලක අතුරුමුහුණත සහ WIMP',
          en: 'Graphical User Interface (GUI) is a visual, intuitive interface based on the WIMP paradigm:\n* **Windows:** Divided rectangular screen display areas presenting distinct running tasks.\n* **Icons:** Visual pictorial symbols representing files, folders, and software applications.\n* **Menus:** Drop-down or pop-up lists of selectable command options.\n* **Pointers:** On-screen navigational indicators manipulated by a mouse, touch, or stylus.\n\nGUI is highly user-friendly for beginners because tasks are executed by pointing and clicking rather than memorizing complex syntax.',
          si: 'චිත්‍රක පරිශීලක අතුරුමුහුණත (GUI) යනු WIMP සංකල්පය මත පදනම් වූ දෘශ්‍යමාන අතුරුමුහුණතකි:\n* **Windows (කවුළු):** තිරය මත ධාවනය වන විවිධ කාර්යයන් නිරූපණය කරන සෘජුකෝණාස්‍රාකාර කොටස්.\n* **Icons (නිරූපක):** ගොනු, ෆෝල්ඩර සහ වැඩසටහන් නියෝජනය කරන කුඩා චිත්‍රක රූප.\n* **Menus (මෙනු):** තෝරාගත හැකි විධාන විකල්ප ඇතුළත් ලැයිස්තු.\n* **Pointers (දර්ශක):** මූසිකය හෝ ස්පර්ශය මඟින් තිරය මත හසුරුවන ඊතලය.\n\nවිධාන කටපාඩම් කිරීම වෙනුවට ක්ලික් කිරීමෙන් ක්‍රියාත්මක වන බැවින් GUI අතුරුමුහුණත පරිශීලක-හිතකාමී වේ.'
        }
      ],
      examples: [
        {
          id: 'ex-5-2-1',
          titleEn: 'CLI vs GUI Practical Interaction',
          titleSi: 'CLI සහ GUI ප්‍රායෝගික භාවිතය',
          contentEn: 'CLI Action: typing "mkdir ICT_Projects" and pressing Enter creates a folder using ~2 MB memory.\nGUI Action: Right-click -> New -> Folder, naming "ICT_Projects" requires graphical rendering via windowing manager using ~80 MB memory.'
        }
      ],
      tableData: {
        headers: [
          { en: 'Dimension / Feature', si: 'මිනුම / ලක්ෂණය' },
          { en: 'Command Line Interface (CLI)', si: 'විධාන රේඛා අතුරුමුහුණත (CLI)' },
          { en: 'Graphical User Interface (GUI)', si: 'චිත්‍රක පරිශීලක අතුරුමුහුණත (GUI)' }
        ],
        rows: [
          {
            col0: { en: 'Interaction Method', si: 'අන්තර්ක්‍රියා ක්‍රමය' },
            col1: { en: 'Text typing via keyboard syntax', si: 'යතුරුපුවරුවෙන් පෙළ විධාන යතුරු ලියනය කිරීම' },
            col2: { en: 'Pointing and clicking via mouse on visual WIMP elements', si: 'මූසිකය භාවිතයෙන් WIMP අංග මත ක්ලික් කිරීම' }
          },
          {
            col0: { en: 'Learning Curve', si: 'ඉගෙනීමේ පහසුව' },
            col1: { en: 'Steep (requires memorizing commands)', si: 'අපහසුයි (විධාන කටපාඩම් කළ යුතුය)' },
            col2: { en: 'Gentle and intuitive (ideal for beginners)', si: 'ඉතා පහසුයි සහ පරිශීලක-හිතකාමීයි' }
          },
          {
            col0: { en: 'System Resource Usage', si: 'පද්ධති සම්පත් භාවිතය' },
            col1: { en: 'Extremely low RAM and minimal CPU overhead', si: 'ඉතා අඩු RAM හා CPU ශක්තියක් වැය වේ' },
            col2: { en: 'High RAM and GPU graphics rendering overhead', si: 'වැඩි මතකයක් සහ චිත්‍රක සකසන බලයක් අවශ්‍ය වේ' }
          },
          {
            col0: { en: 'Examples', si: 'උදාහරණ' },
            col1: { en: 'MS-DOS, Linux Bash Terminal, PowerShell', si: 'MS-DOS, Linux Bash Terminal, PowerShell' },
            col2: { en: 'Windows 10/11, Ubuntu GNOME, macOS, Android', si: 'Windows 10/11, Ubuntu GNOME, macOS, Android' }
          }
        ]
      },
      checkpointQuiz: {
        id: 'cp-5-2',
        questionEn: 'Which element is NOT part of the traditional GUI WIMP paradigm?',
        questionSi: 'සාම්ප්‍රදායික චිත්‍රක පරිශීලක අතුරුමුහුණතේ (GUI) WIMP සංකල්පයට අයත් නොවන්නේ කුමක්ද?',
        options: [
          { id: 'opt-a', en: 'Windows', si: 'කවුළු (Windows)' },
          { id: 'opt-b', en: 'Icons', si: 'නිරූපක (Icons)' },
          { id: 'opt-c', en: 'Pointers', si: 'දර්ශක (Pointers)' },
          { id: 'opt-d', en: 'Punch cards', si: 'සිදුරුපත් (Punch cards)' }
        ],
        correctOptionId: 'opt-d',
        explanationEn: 'WIMP stands for Windows, Icons, Menus, and Pointers. Punch cards were 1st-generation input media, not an element of modern graphical user interfaces.',
        explanationSi: 'WIMP යනු Windows, Icons, Menus, Pointers වේ. සිදුරුපත් යනු පළමු පරම්පරාවේ ආදාන මාධ්‍යයක් මිස GUI අතුරුමුහුණතක කොටසක් නොවේ.'
      }
    },
    {
      id: 'g10-u5-st-3',
      number: '5.3',
      titleEn: 'The 6 Core Resource Management Functions of an Operating System',
      titleSi: 'මෙහෙයුම් පද්ධතියක ප්‍රධාන සම්පත් කළමනාකරණ කාර්යයන් 6',
      summaryEn: 'Process, Memory (Virtual Memory), Device (Drivers), File, Security, and Network resource allocation responsibilities.',
      summarySi: 'ක්‍රියාවලි, මතක (අතථ්‍ය මතකය), උපාංග (Drivers), ගොනු, ආරක්ෂණ සහ ජාල සම්පත් කළමනාකරණ කාර්යභාරය.',
      blocks: [
        {
          id: 'b-g10-u5-3-1',
          highlightTerm: 'Process Management',
          highlightTermSi: 'ක්‍රියාවලි කළමනාකරණය',
          en: 'A program loaded into memory and currently executing is defined as a Process. Process Management is the OS function that schedules and allocates CPU time slices among concurrent tasks, transitions processes between Ready, Running, Blocked, and Terminated states, and prevents system lockups through multitasking and time-sharing algorithms.',
          si: 'ක්‍රියාත්මක වෙමින් පවතින පරිගණක වැඩසටහනක් හෝ එහි කොටසක් ක්‍රියාවලියක් (Process) ලෙස හැඳින්වේ. ක්‍රියාවලි කළමනාකරණය මගින් මධ්‍ය සැකසුම් ඒකකයේ කාලය (CPU Time) ක්‍රියාවලි අතර සාධාරණව බෙදා දීම, ක්‍රියාවලිවල තත්ත්වය (Ready, Running, Blocked, Terminated) පාලනය කිරීම සහ බහු කාර්ය (Multitasking) කාර්යක්ෂමව මෙහෙයවීම සිදු කරයි.'
        },
        {
          id: 'b-g10-u5-3-2',
          highlightTerm: 'Memory Management & Virtual Memory',
          highlightTermSi: 'මතක කළමනාකරණය සහ අතථ්‍ය මතකය',
          en: 'Memory Management tracks every byte of primary memory (RAM), allocating partition blocks to newly launched processes and reclaiming (freeing) memory when programs terminate. When physical RAM becomes exhausted, the OS creates Virtual Memory by designating a portion of secondary storage (hard drive/SSD paging file) as simulated RAM, swapping inactive memory pages to disk to prevent crash errors.',
          si: 'මතක කළමනාකරණය මගින් ප්‍රධාන මතකයේ (RAM) ඉඩ කාර්යක්ෂමව පාලනය කරයි. නව වැඩසටහනක් ආරම්භ වන විට RAM මතකයෙන් ඉඩ වෙන් කිරීමත්, වැඩසටහන අවසන් වූ විට එම මතකය නිදහස් කිරීමත් සිදු කරයි. RAM මතකය පිරී ගිය විට, දෘඩ තැටියේ කොටසක් ප්‍රධාන මතකය සේ භාවිත කරමින් අතථ්‍ය මතකය (Virtual Memory) නිර්මාණය කර පරිගණකය අක්‍රිය වීම වළක්වයි.'
        },
        {
          id: 'b-g10-u5-3-3',
          highlightTerm: 'Device Management & Drivers',
          highlightTermSi: 'උපාංග කළමනාකරණය සහ ධාවක',
          en: 'Device Management coordinates communication between CPU and peripheral hardware devices using Device Controllers (hardware circuit boards) and Device Drivers (software translators that interpret OS instructions into hardware-specific signals). Plug and Play (PnP) functionality automatically detects, configures, and installs drivers when new peripherals are connected.',
          si: 'උපාංග කළමනාකරණය මගින් පරිගණකයට සම්බන්ධ සියලුම පර්යන්ත උපාංග (මුද්‍රණ යන්ත්‍ර, ස්කෑනර්, මූසික) පාලනය කරයි. දෘඩාංග මට්ටමින් උපාංග පාලක (Device Controllers) ද, මෘදුකාංග මට්ටමින් ධාවක මෘදුකාංග (Device Drivers) ද භාවිත කරයි. Plug and Play (PnP) පහසුකම මගින් නව උපාංගයක් සම්බන්ධ කළ විගස ස්වයංක්‍රීයව හඳුනාගෙන ධාවක ස්ථාපනය කරයි.'
        },
        {
          id: 'b-g10-u5-3-4',
          highlightTerm: 'File, Security & Network Management',
          highlightTermSi: 'ගොනු, ආරක්ෂණ සහ ජාල කළමනාකරණය',
          en: 'Specialized management responsibilities of the operating system:\n* **File Management:** Structures data into files and folders across storage media, regulating create, read, edit, delete, and directory operations.\n* **Security Management:** Protects system resources through user authentication (passwords, PINs, biometrics), access control permissions, and malware defenses.\n* **Network Management:** Governs communication protocols and drivers for local area network (LAN), Wi-Fi, Internet access, and distributed resource sharing.',
          si: 'මෙහෙයුම් පද්ධතියේ විශේෂිත කළමනාකරණ කාර්යයන්:\n* **ගොනු කළමනාකරණය (File Management):** දත්ත ගොනු (Files) සහ ෆෝල්ඩර (Folders) ලෙස සංවිධානය කර සුරැකීම, මැකීම සහ ප්‍රවේශ පාලනය නියාමනය කරයි.\n* **ආරක්ෂණ කළමනාකරණය (Security Management):** මුරපද (Passwords), PIN සහ ජෛවමිතික මඟින් පරිශීලක අනන්‍යතාව තහවුරු කර අනවසර ප්‍රවේශ වැළැක්වීම.\n* **ජාල කළමනාකරණය (Network Management):** රැහැන් සහිත හා රැහැන් රහිත (Wi-Fi) ජාල හරහා දත්ත සන්නිවේදනය හා සම්පත් හුවමාරුව පාලනය කිරීම.'
        }
      ],
      examples: [
        {
          id: 'ex-5-3-1',
          titleEn: 'Virtual Memory Paging Swapping Mechanism',
          titleSi: 'අතථ්‍ය මතක පිටු මාරු කිරීමේ ක්‍රියාවලිය',
          contentEn: 'When physical RAM (e.g. 8 GB) reaches 100% capacity while opening an image editor, the OS memory manager transfers idle background pages of an open web browser to the secondary storage paging file (pagefile.sys / swap partition), making physical RAM available for immediate active operations.'
        }
      ],
      tableData: {
        headers: [
          { en: 'Management Function', si: 'කළමනාකරණ කාර්යය' },
          { en: 'Core Resource Governed', si: 'පාලනය වන ප්‍රධාන සම්පත' },
          { en: 'Key Mechanism / Technology', si: 'ප්‍රධාන යාන්ත්‍රණය / තාක්ෂණය' },
          { en: 'O/L Practical Example', si: 'සා/පෙළ ප්‍රායෝගික උදාහරණය' }
        ],
        rows: [
          {
            col0: { en: 'Process Management', si: 'ක්‍රියාවලි කළමනාකරණය' },
            col1: { en: 'CPU Processor Time', si: 'CPU සකසන කාලය' },
            col2: { en: 'Time-sharing, Round-Robin scheduling', si: 'කාලය බෙදාදීම සහ කාල ඛණ්ඩ වෙන් කිරීම' },
            col3: { en: 'Multitasking: typing Word doc while music player plays', si: 'ගීත අසන අතරතුර ලේඛනයක් සකස් කිරීම' }
          },
          {
            col0: { en: 'Memory Management', si: 'මතක කළමනාකරණය' },
            col1: { en: 'RAM & Secondary Swap File', si: 'RAM සහ ද්විතීයික swap ඉඩ' },
            col2: { en: 'Virtual Memory Paging & dynamic allocation', si: 'අතථ්‍ය මතකය සහ පිටු මාරු කිරීම (Paging)' },
            col3: { en: 'Allocating RAM when launching browser; freeing on exit', si: 'වැඩසටහන ආරම්භයේදී RAM ලබා දී අවසානයේ නිදහස් කිරීම' }
          },
          {
            col0: { en: 'Device Management', si: 'උපාංග කළමනාකරණය' },
            col1: { en: 'I/O Peripherals & Buses', si: 'ආදාන/ප්‍රතිදාන පර්යන්ත උපාංග' },
            col2: { en: 'Device Drivers, Controllers, Plug and Play', si: 'ධාවක මෘදුකාංග (Drivers) සහ Plug and Play' },
            col3: { en: 'Plugging USB mouse; OS auto-configures driver', si: 'USB මූසිකයක් සම්බන්ධ කළ විගස ස්වයංක්‍රීයව ක්‍රියාත්මක වීම' }
          },
          {
            col0: { en: 'File Management', si: 'ගොනු කළමනාකරණය' },
            col1: { en: 'Storage Media Sectors', si: 'ආචයන මාධ්‍ය ක්ෂේත්‍ර' },
            col2: { en: 'File Allocation Table, Directory Trees', si: 'ගොනු ව්‍යුහය, ෆෝල්ඩර ධූරාවලිය සහ ගොනු මග' },
            col3: { en: 'Creating folder, renaming, deleting to Recycle Bin', si: 'ෆෝල්ඩර සෑදීම, නම් වෙනස් කිරීම, ප්‍රතිචක්‍රීකරණ බඳුනට යැවීම' }
          },
          {
            col0: { en: 'Security Management', si: 'ආරක්ෂණ කළමනාකරණය' },
            col1: { en: 'User Accounts & Data Assets', si: 'පරිශීලක ගිණුම් සහ දත්ත' },
            col2: { en: 'Authentication, Access Control Lists (ACL)', si: 'මුරපද, පරිශීලක අවසර සහ අයිතිවාසිකම්' },
            col3: { en: 'Logging in with username and password', si: 'පරිශීලක නාමය හා මුරපදය මගින් ලොග් වීම' }
          },
          {
            col0: { en: 'Network Management', si: 'ජාල කළමනාකරණය' },
            col1: { en: 'Network Interface Card (NIC) & Bandwidth', si: 'ජාල කාඩ්පත (NIC) සහ කලාප පළල' },
            col2: { en: 'TCP/IP protocols, Wi-Fi drivers, sharing', si: 'ජාල ප්‍රොටෝකෝල සහ රැහැන් රහිත සම්බන්ධතා' },
            col3: { en: 'Sharing printer across school computer lab network', si: 'පරිගණක විද්‍යාගාරයේ මුද්‍රණ යන්ත්‍රයක් ජාලගතව බෙදාගැනීම' }
          }
        ]
      },
      checkpointQuiz: {
        id: 'cp-5-3',
        questionEn: 'What is the function of Virtual Memory in modern Operating Systems?',
        questionSi: 'නවීන මෙහෙයුම් පද්ධතිවල "අතථ්‍ය මතකය (Virtual Memory)" මගින් ඉටු කරනු ලබන කාර්යභාරය කුමක්ද?',
        options: [
          { id: 'opt-a', en: 'Supplying backup electrical power during blackouts', si: 'විදුලිය විසන්ධි වූ විට අමතර විදුලිය ලබාදීම' },
          { id: 'opt-b', en: 'Extending physical RAM capacity by utilizing designated secondary storage hard disk space', si: 'ද්විතීයික ආචයනයේ කොටසක් භාවිත කරමින් ප්‍රධාන RAM මතක ධාරිතාව අථත්‍ය ලෙස පුළුල් කිරීම' },
          { id: 'opt-c', en: 'Burning optical compact discs automatically', si: 'ස්වයංක්‍රීයව සංයුක්ත තැටි ලිවීම' },
          { id: 'opt-d', en: 'Preventing dust accumulation on motherboard chips', si: 'මවුපුවරුවේ දූවිලි බැඳීම වැළැක්වීම' }
        ],
        correctOptionId: 'opt-b',
        explanationEn: 'Virtual memory temporarily pages inactive memory blocks to designated secondary storage disk swap space when physical RAM becomes exhausted, preventing application crashes.',
        explanationSi: 'ප්‍රධාන RAM මතකය පිරී ගිය විට, දෘඩ තැටියේ කොටසක් අථත්‍ය මතකයක් ලෙස භාවිත කරමින් පරිගණකයේ ක්‍රියාකාරීත්වය අඛණ්ඩව පවත්වා ගැනීම අතථ්‍ය මතකයේ කාර්යයයි.'
      }
    },
    {
      id: 'g10-u5-st-4',
      number: '5.4',
      titleEn: 'Comprehensive Utility Software Breakdown',
      titleSi: 'උපයෝගිතා මෘදුකාංග ගැඹුරු විශ්ලේෂණය',
      summaryEn: 'Disk defragmentation, partitioning, formatting, file compression, antivirus, and task management system maintenance tools.',
      summarySi: 'තැටි ප්‍රතිභාගීකරණය, ආකෘතිකරණය, පංගු කිරීම, ගොනු සම්පීඩනය, ප්‍රතිවෛරස් සහ කාර්ය කළමනාකරණ නඩත්තු මෙවලම්.',
      blocks: [
        {
          id: 'b-g10-u5-4-1',
          highlightTerm: 'Disk Defragmentation',
          highlightTermSi: 'තැටි ප්‍රතිභාගීකරණය',
          en: 'Disk Defragmentation is a maintenance utility that inspects mechanical hard drives and rearranges scattered, fragmented non-contiguous file blocks into single contiguous physical clusters while consolidating free space into one large contiguous block. This minimizes read/write head movement across disk platters, drastically accelerating file access speeds and overall system performance. (Note: Defragmentation is intended for mechanical HDDs, not solid-state drives).',
          si: 'තැටි ප්‍රතිභාගීකරණය (Disk Defragmentation) යනු දෘඩ තැටිය පුරා විසිරී, කැබලි වී (fragmented) ඇති ගොනු කොටස් නැවත එක්රැස් කර අඛණ්ඩ පොකුරු (contiguous clusters) ලෙස පෙළගස්වන සහ හිස් ඉඩ එකතු කරන උපයෝගිතා මෘදුකාංගයකි. එමගින් කියවීම්/ලිවීම් හිසෙහි අනවශ්‍ය චලනයන් අඩු වී දෘඩ තැටියේ ගොනු කියවීමේ වේගය හා පද්ධති කාර්යක්ෂමතාව සැලකිය යුතු ලෙස ඉහළ යයි.'
        },
        {
          id: 'b-g10-u5-4-2',
          highlightTerm: 'Disk Partitioning & Formatting',
          highlightTermSi: 'තැටි පංගු කිරීම සහ ආකෘතිකරණය',
          en: 'Disk Partitioning is the process of dividing a single physical hard drive into multiple distinct logical drives (e.g., C: for OS, D: for Personal Data, E: for Backups), isolating system files from user data and enabling multi-OS dual-boot configurations. Disk Formatting is the process of preparing a storage medium for file storage by establishing tracks, sectors, and a designated file system structure (e.g., NTFS, FAT32), permanently wiping all existing directory tables and data on that partition.',
          si: 'තැටි පංගු කිරීම (Disk Partitioning) යනු එක් භෞතික දෘඩ තැටියක් තර්කික කොටස් කිහිපයකට (C:, D:, E:) වෙන් කිරීමයි. එමගින් මෙහෙයුම් පද්ධතිය සහ පරිශීලක දත්ත වෙන් කර තැබිය හැකි අතර මෙහෙයුම් පද්ධති කිහිපයක් එකවර ස්ථාපනය කිරීමටද ඉඩ ලැබේ. තැටි ආකෘතිකරණය (Formatting) යනු අදාළ ගොනු පද්ධතියට (NTFS, FAT32) අනුකූලව දත්ත ගබඩා කළ හැකි පරිදි ධාවකය සූදානම් කිරීම වන අතර මෙහිදී එම කොටසේ ඇති සියලු පැරණි දත්ත මුළුමනින්ම මැකී යයි.'
        },
        {
          id: 'b-g10-u5-4-3',
          highlightTerm: 'File Compression, Task Manager & Antivirus',
          highlightTermSi: 'ගොනු සම්පීඩනය, Task Manager සහ ප්‍රතිවෛරස්',
          en: 'Other vital utility software tools include:\n* **File Compression (e.g., WinRAR, 7-Zip):** Encodes data using mathematical algorithms to reduce archive sizes (`.zip`, `.rar`), conserving disk space and speeding up file transmission.\n* **Task Manager:** Monitors active processes, CPU utilization, and RAM allocation in real time, allowing users to forcefully terminate unresponsive ("Not Responding") frozen programs.\n* **Anti-Virus Software:** Scans storage files, detects malware signatures, and quarantines or removes malicious threats.',
          si: 'අනෙකුත් ප්‍රධාන උපයෝගිතා මෘදුකාංග අතර:\n* **ගොනු සම්පීඩන මෘදුකාංග (WinRAR, 7-Zip):** ගොනුවක ප්‍රමාණය කුඩා කර (`.zip`, `.rar`) ආචයන ඉඩ ඉතිරි කර දෙන අතර අන්තර්ජාලයෙන් යැවීම පහසු කරයි.\n* **කාර්ය කළමනාකරු (Task Manager):** ක්‍රියාත්මක වන වැඩසටහන්, CPU හා RAM වැයවීම සජීවීව පෙන්වන අතර ක්‍රියා විරහිත වූ ("Not Responding") වැඩසටහන් බලහත්කාරයෙන් නැවැත්වීමට ඉඩ සලසයි.\n* **ප්‍රතිවෛරස් මෘදුකාංග:** පරිගණකය අනිෂ්ට මෘදුකාංග හා වෛරස්වලින් ස්කෑන් කර ආරක්ෂා කරයි.'
        }
      ],
      examples: [
        {
          id: 'ex-5-4-1',
          titleEn: 'HDD Cluster Reorganization Simulation',
          titleSi: 'දෘඩ තැටි පොකුරු ප්‍රතිසංවිධානය',
          contentEn: 'Fragmented State: [File A Part 1] [Free] [File B] [File A Part 2] [Free] [File A Part 3]\nRead head must jump across 3 disk regions to open File A.\nDefragmented State: [File A1, A2, A3 Contiguous] [File B] [Free Contiguous Space]\nRead head reads File A sequentially in one smooth rotation.'
        }
      ],
      tableData: {
        headers: [
          { en: 'Utility Operation', si: 'උපයෝගිතා මෙහෙයුම' },
          { en: 'Core Primary Action', si: 'ප්‍රධාන ක්‍රියාකාරීත්වය' },
          { en: 'Effect on Existing Data', si: 'දත්ත මත වන බලපෑම' },
          { en: 'Primary System Benefit', si: 'ප්‍රධාන වාසිය' }
        ],
        rows: [
          {
            col0: { en: 'Disk Defragmentation', si: 'තැටි ප්‍රතිභාගීකරණය' },
            col1: { en: 'Reorganizes scattered file blocks into contiguous clusters', si: 'විසිරී ඇති ගොනු කොටස් එකට පෙළගැස්වීම' },
            col2: { en: '100% Preserved (Zero data erased)', si: 'දත්ත සුරැකේ (දත්ත නොමැකේ)' },
            col3: { en: 'Reduces read-head seek time; accelerates file loading speed', si: 'කියවීමේ වේගය හා පද්ධති කාර්යක්ෂමතාව වැඩි කිරීම' }
          },
          {
            col0: { en: 'Disk Formatting', si: 'තැටි ආකෘතිකරණය' },
            col1: { en: 'Applies file system structure (tracks/sectors) to drive', si: 'ගොනු පද්ධතිය සකස් කර ධාවකය සූදානම් කිරීම' },
            col2: { en: 'Completely Wiped (All files permanently erased)', si: 'සියලු දත්ත මුළුමනින්ම මැකී යයි' },
            col3: { en: 'Prepares fresh drive or partition for reliable file storage', si: 'නව ගොනු තැන්පත් කිරීමට ඉඩ සලසයි' }
          },
          {
            col0: { en: 'Disk Partitioning', si: 'තැටි පංගු කිරීම' },
            col1: { en: 'Divides one physical HDD into multiple logical drives (C:, D:)', si: 'භෞතික තැටිය තර්කික කොටස්වලට වෙන් කිරීම' },
            col2: { en: 'Configured at setup; repartitioning may alter data', si: 'පිහිටුවීමේදී සිදු කෙරේ; දත්ත වෙන් කර තබයි' },
            col3: { en: 'Separates OS system files from personal user files', si: 'OS ගොනු හා පරිශීලක ගොනු වෙන් කර තැබීම' }
          }
        ]
      },
      checkpointQuiz: {
        id: 'cp-5-4',
        questionEn: 'Which utility software reorganizes scattered file clusters into contiguous areas on a mechanical hard disk?',
        questionSi: 'දෘඪ තැටියක විසිරී ඇති ගොනු කොටස් එක් තැනකට ගෙන ඒම සඳහා භාවිත වන උපයෝගිතා මෘදුකාංගය කුමක්ද?',
        options: [
          { id: 'opt-a', en: 'Disk Defragmenter', si: 'තැටි ප්‍රතිභාගීකරණය (Disk Defragmenter)' },
          { id: 'opt-b', en: 'Screen Saver', si: 'තිර සුරැකුම' },
          { id: 'opt-c', en: 'Calculator', si: 'ගණක යන්ත්‍රය' },
          { id: 'opt-d', en: 'Font Viewer', si: 'අකුරු නරඹනය' }
        ],
        correctOptionId: 'opt-a',
        explanationEn: 'The Disk Defragmenter utility physically reorganizes scattered, non-contiguous file blocks into contiguous sectors on a hard drive, reducing read/write head movement and boosting read speeds.',
        explanationSi: 'තැටි ප්‍රතිභාගීකරණය (Disk Defragmenter) මගින් දෘඩ තැටිය පුරා විසිරී ඇති ගොනු කැබලි එක තැනකට ගෙනැවිත් අඛණ්ඩව පිහිටුවීමෙන් කියවීමේ වේගය වැඩි කරයි.'
      }
    },
    {
      id: 'g10-u5-st-5',
      number: '5.5',
      titleEn: 'File Systems, Directory Hierarchy & Access Methods',
      titleSi: 'ගොනු පද්ධති, ධූරාවලි ගොනු මග සහ ප්‍රවේශ ක්‍රම',
      summaryEn: 'File anatomy and extensions, FAT32/NTFS/ext4 comparisons, root directory tree hierarchies, path syntax, and sequential vs random access methods.',
      summarySi: 'ගොනු ව්‍යුහය හා දිගු, FAT32/NTFS සංසන්දනය, මූල බහලුම් ගොනු මග සහ අනුක්‍රමික හා සසම්භාවී ප්‍රවේශ ක්‍රම.',
      blocks: [
        {
          id: 'b-g10-u5-5-1',
          highlightTerm: 'File Anatomy & Extensions',
          highlightTermSi: 'ගොනු ව්‍යුහය සහ දිගු',
          en: 'Every computer file name consists of two parts separated by a dot (.): the Primary File Name and the File Extension (e.g., in "Report.docx", "Report" is the primary name chosen by user, and ".docx" is the extension). The file extension identifies the file format and dictates which default application software opens it. Common extensions include: Documents (.docx, .pdf, .txt), Spreadsheets (.xlsx, .csv), Presentations (.pptx), Images (.jpg, .png), Audio (.mp3), Video (.mp4), Executables (.exe, .bat), and System files (.sys, .dll).',
          si: 'සෑම ගොනු නාමයක්ම තිතකින් (.) වෙන් වූ ප්‍රධාන කොටස් දෙකකින් සමන්විත වේ: මූලික නම (Primary File Name) සහ ගොනු දිගුව (File Extension) වේ. උදාහරණයක් ලෙස "Report.docx" හි "Report" යනු මූලික නම වන අතර ".docx" යනු ගොනු දිගුවයි. ගොනු දිගුව මගින් ගොනුවේ වර්ගය හඳුනා ගන්නා අතර එය විවෘත කළ යුතු මෘදුකාංගය තීරණය කරයි. උදා: .docx (වචන සකසුම්), .xlsx (පැතුරුම්පත්), .pptx (ඉදිරිපත් කිරීම්), .jpg (පින්තූර), .mp3 (ශ්‍රව්‍ය), .mp4 (වීඩියෝ), .exe (ක්‍රියාත්මක කළ හැකි ගොනු).'
        },
        {
          id: 'b-g10-u5-5-2',
          highlightTerm: 'File Systems (FAT32, NTFS, ext4)',
          highlightTermSi: 'ගොනු පද්ධති (FAT32, NTFS, ext4)',
          en: 'A File System defines how data is stored, indexed, and retrieved on storage drives:\n* **FAT32 (File Allocation Table 32):** Universal cross-platform compatibility across Windows, Mac, Linux, and USB drives; strict 4 GB maximum single file size limit; no built-in file encryption or security permissions.\n* **NTFS (New Technology File System):** Modern default for Windows, supporting massive file sizes (up to 16 TB), journaling, file compression, and robust user permission security.\n* **ext4 (Extended File System 4):** High-performance default journaling file system for Linux distributions.',
          si: 'ගොනු පද්ධතියක් (File System) මඟින් ආචයන ධාවක තුළ දත්ත ගබඩා කර තබන සහ නැවත ලබා ගන්නා ආකාරය පාලනය කරයි:\n* **FAT32 (File Allocation Table 32):** Windows, Mac, Linux සහ USB ධාවක සඳහා පොදුවේ සහාය දක්වයි; තනි ගොනුවක උපරිම ප්‍රමාණය 4 GB ට සීමා වේ; ගොනු සංකේතනය හෝ ආරක්ෂක අවසර නොමැත.\n* **NTFS (New Technology File System):** නවීන Windows මෙහෙයුම් පද්ධතියේ සම්මතය වන අතර විශාල ගොනු (16 TB දක්වා), ගොනු සංකේතනය (encryption) සහ ආරක්ෂක අවසර (permissions) සඳහා සහාය දක්වයි.\n* **ext4 (Extended File System 4):** Linux මෙහෙයුම් පද්ධති සඳහා භාවිත වන ඉහළ කාර්යක්ෂමතාවයකින් යුතු සම්මත ගොනු පද්ධතියයි.'
        },
        {
          id: 'b-g10-u5-5-3',
          highlightTerm: 'Directory Hierarchy & File Access Methods',
          highlightTermSi: 'ධූරාවලි ගොනු මග සහ ප්‍රවේශ ක්‍රම',
          en: 'Operating systems organize folders and files into a tree-structured Hierarchical Directory. The top-level folder on a storage drive is called the Root Directory (e.g., C:\\). A File Path traces the exact navigational route from the drive letter down through subfolders to the target file (e.g., C:\\Users\\Student\\Documents\\ICT\\Lesson05.docx). File Access Methods dictate how records inside a file are read: Sequential Access reads records one after another in order from beginning to end (e.g., magnetic tape, text log files); Random (Direct) Access allows the read pointer to jump instantly to any specific record without scanning through preceding entries (e.g., database tables on hard drives and SSDs).',
          si: 'මෙහෙයුම් පද්ධතිය තුළ ගොනු සහ ෆෝල්ඩර ගසක හැඩයට ධූරාවලි බහලුම් ව්‍යුහයක් (Hierarchical Directory) ලෙස සංවිධානය වේ. ධාවකයක ඉහළින්ම පිහිටි ප්‍රධාන ෆෝල්ඩරය මූල බහලුම (Root Directory - C:\\) වේ. ගොනු මග (File Path) යනු ධාවකයේ සිට ඉලක්කගත ගොනුව දක්වා පිහිටීම නිරූපණය කරන සම්පූර්ණ ලිපිනයයි. ගොනු ප්‍රවේශ ක්‍රම: (1) අනුක්‍රමික ප්‍රවේශය (Sequential Access): මුල සිට අගට අනුපිළිවෙලින් දත්ත කියවීම (චුම්භක පටි); (2) සසම්භාවී ප්‍රවේශය (Random/Direct Access): අතරමැදි දත්ත නොකියවා අවශ්‍ය ඕනෑම වාර්තාවකට ක්ෂණිකව ප්‍රවේශ වීම (දෘඩ තැටි සහ දත්ත සමුදා).'
        }
      ],
      examples: [
        {
          id: 'ex-5-5-1',
          titleEn: 'Hierarchical Path Navigation Breakdown',
          titleSi: 'ධූරාවලි ගොනු මග විග්‍රහය',
          contentEn: 'Consider path: C:\\Users\\Student\\Documents\\ICT\\Grade10_Lesson05.docx\n- "C:\\" = Drive Letter and Root Directory\n- "Users\\Student\\Documents\\ICT\\" = Sub-directory hierarchy (nested folders)\n- "Grade10_Lesson05" = Primary file name chosen by user\n- ".docx" = File extension indicating Word Processing document'
        }
      ],
      tableData: {
        headers: [
          { en: 'File System Type', si: 'ගොනු පද්ධති වර්ගය' },
          { en: 'Max Single File Size', si: 'තනි ගොනුවක උපරිම ප්‍රමාණය' },
          { en: 'Security & Permissions', si: 'ආරක්ෂාව සහ අවසර' },
          { en: 'Primary Ecosystem', si: 'ප්‍රධාන භාවිතය' }
        ],
        rows: [
          {
            col0: { en: 'FAT32 (File Allocation Table 32)', si: 'FAT32 (File Allocation Table)' },
            col1: { en: '4 GB (Strict Limit)', si: '4 GB (තදබල සීමාවකි)' },
            col2: { en: 'None (Basic storage only, no encryption)', si: 'නැත (ගොනු සංකේතනය හෝ අවසර නැත)' },
            col3: { en: 'USB flash drives, memory cards, legacy systems', si: 'USB ධාවක, මතක කාඩ්පත්, පැරණි පද්ධති' }
          },
          {
            col0: { en: 'NTFS (New Technology File System)', si: 'NTFS (New Technology File System)' },
            col1: { en: '16 TB (Practically unlimited for consumer)', si: '16 TB (ඉතා විශාල ගොනු සඳහා)' },
            col2: { en: 'High (User permissions, compression, encryption, journaling)', si: 'ඉහළයි (පරිශීලක අවසර, සංකේතනය, Journaling)' },
            col3: { en: 'Modern Windows OS hard drives and SSDs', si: 'නවීන Windows මෙහෙයුම් පද්ධති දෘඩ තැටි' }
          },
          {
            col0: { en: 'ext4 (Extended File System 4)', si: 'ext4 (Linux Extended Filesystem)' },
            col1: { en: '16 TB', si: '16 TB' },
            col2: { en: 'High (Linux permission model, journaling)', si: 'ඉහළයි (Linux අවසර සහ Journaling)' },
            col3: { en: 'Modern Linux distributions (Ubuntu, Debian, Fedora)', si: 'නවීන Linux බෙදාහැරීම් (Ubuntu, Debian)' }
          }
        ]
      },
      checkpointQuiz: {
        id: 'cp-5-5',
        questionEn: 'In the file path C:\\Users\\Student\\Documents\\ICT\\TermTest.docx, what is the role of ".docx"?',
        questionSi: 'C:\\Users\\Student\\Documents\\ICT\\TermTest.docx යන ගොනු මගෙහි ".docx" මගින් ඉටු කරන කාර්යභාරය කුමක්ද?',
        options: [
          { id: 'opt-a', en: 'It identifies the root directory drive', si: 'එය මූල බහලුම් ධාවකය හඳුනා ගනී' },
          { id: 'opt-b', en: 'It indicates the file format and default application software', si: 'එය ගොනුවේ ආකෘතිය හා විවෘත කළ යුතු මෘදුකාංගය දක්වයි' },
          { id: 'opt-c', en: 'It specifies the physical track on the disk platter', si: 'එය තැටියේ භෞතික ඛණ්ඩය දක්වයි' },
          { id: 'opt-d', en: 'It dictates the user access password', si: 'එය පරිශීලක මුරපදය තීරණය කරයි' },
        ],
        correctOptionId: 'opt-b',
        explanationEn: 'The file extension (.docx) identifies the document format and signals the operating system to open the file with the default Word Processing application software.',
        explanationSi: 'ගොනු දිගුව (.docx) මගින් ගොනුවේ ආකෘතිය හඳුනා ගන්නා අතර, එය වචන සකසුම් යෙදුම් මෘදුකාංගයකින් විවෘත කළ යුතු බව මෙහෙයුම් පද්ධතියට දැනුම් දෙයි.'
      }
    }
  ],
  glossary: [
    {
      termEn: 'Operating System',
      termSi: 'මෙහෙයුම් පද්ධතිය',
      definitionEn: 'System software that manages computer hardware, programs, memory, files, and provides the user interface.',
      definitionSi: 'පරිගණක දෘඩාංග, යෙදුම් මෘදුකාංග, මතකය, ගොනු පාලනය කරමින් පරිශීලකයාට අතුරුමුහුණත සපයන පද්ධති මෘදුකාංගයයි.'
    },
    {
      termEn: 'Booting',
      termSi: 'පණගැන්වීම',
      definitionEn: 'The automated sequence of powering up a computer, executing POST hardware diagnostics, and loading the OS kernel into RAM.',
      definitionSi: 'පරිගණකය බලගැන්වූ විට POST පරීක්ෂාව සිදු කර මෙහෙයුම් පද්ධතිය RAM මතකයට පටවා ගැනීමේ ස්වයංක්‍රීය ක්‍රියාවලියයි.'
    },
    {
      termEn: 'BIOS / UEFI',
      termSi: 'මූලික ආදාන ප්‍රතිදාන පද්ධතිය',
      definitionEn: 'Basic Input Output System; permanent non-volatile firmware stored on ROM containing boot instructions.',
      definitionSi: 'ROM මතකයේ ස්ථිරව තැන්පත් කර ඇති, පරිගණකය පණගැන්වීමට අදාළ මූලික උපදෙස් සහිත ස්ථීරාංගයයි.'
    },
    {
      termEn: 'POST (Power-On Self-Test)',
      termSi: 'POST පරීක්ෂාව',
      definitionEn: 'Firmware diagnostic routine executed immediately at startup to verify that CPU, RAM, and essential hardware are operational.',
      definitionSi: 'පරිගණකය පණගැන්වීමේදී දෘඩාංග නිවැරදිව ක්‍රියා කරන්නේදැයි පරීක්ෂා කිරීමට ROM මගින් ක්‍රියාත්මක කරන පරීක්ෂාවයි.'
    },
    {
      termEn: 'Kernel',
      termSi: 'කර්නලය',
      definitionEn: 'The foundational core component of the operating system that resides permanently in RAM to manage hardware and CPU time.',
      definitionSi: 'ප්‍රධාන මතකයේ රැඳී සිටිමින් දෘඩාංග හා සම්පත් කළමනාකරණය කරන මෙහෙයුම් පද්ධතියේ ප්‍රධානතම හරයයි.'
    },
    {
      termEn: 'Command Line Interface (CLI)',
      termSi: 'විධාන රේඛා අතුරුමුහුණත (CLI)',
      definitionEn: 'A text-based user interface where commands are typed on a prompt line with precise syntax.',
      definitionSi: 'යතුරුපුවරුව මගින් පෙළ විධාන යතුරු ලියනය කර පරිගණකය මෙහෙයවන අතුරුමුහුණතකි.'
    },
    {
      termEn: 'Graphical User Interface (GUI)',
      termSi: 'චිත්‍රක පරිශීලක අතුරුමුහුණත (GUI)',
      definitionEn: 'An intuitive visual interface based on the WIMP paradigm: Windows, Icons, Menus, and Pointers.',
      definitionSi: 'කවුළු, නිරූපක, මෙනු සහ දර්ශක (WIMP) භාවිතයෙන් ක්‍රියාත්මක වන දෘශ්‍යමාන අතුරුමුහුණතකි.'
    },
    {
      termEn: 'Device Driver',
      termSi: 'උපාංග ධාවකය',
      definitionEn: 'Specialized software component that translates OS instructions into device-specific hardware signals.',
      definitionSi: 'මෙහෙයුම් පද්ධතිය සහ පර්යන්ත දෘඩාංග උපාංග අතර සන්නිවේදනය ඇති කරන විශේෂ මෘදුකාංගයයි.'
    },
    {
      termEn: 'Plug and Play (PnP)',
      termSi: 'පේනුගත කර ධාවනය (Plug and Play)',
      definitionEn: 'A hardware-software feature enabling newly connected devices to be automatically recognized and configured.',
      definitionSi: 'නව උපාංගයක් පරිගණකයට සම්බන්ධ කළ විගස ස්වයංක්‍රීයව හඳුනාගෙන ධාවක ස්ථාපනය කිරීමේ පහසුකමයි.'
    },
    {
      termEn: 'Virtual Memory',
      termSi: 'අතථ්‍ය මතකය',
      definitionEn: 'A memory management technique where secondary storage acts as temporary simulated RAM during memory exhaustion.',
      definitionSi: 'RAM මතකය පිරී ගිය විට දෘඩ තැටියේ කොටසක් ප්‍රධාන මතකය ලෙස භාවිත කරමින් ක්‍රියාකාරීත්වය රැකගැනීමේ ක්‍රමයයි.'
    },
    {
      termEn: 'Disk Defragmentation',
      termSi: 'තැටි ප්‍රතිභාගීකරණය',
      definitionEn: 'Reorganizing non-contiguous fragmented file clusters into contiguous sectors to improve disk read/write performance.',
      definitionSi: 'දෘඩ තැටියේ විසිරී ඇති ගොනු කොටස් එකතු කර අඛණ්ඩ පොකුරු ලෙස පෙළගස්වා කියවීමේ වේගය වැඩි කිරීමයි.'
    },
    {
      termEn: 'Disk Partitioning',
      termSi: 'තැටි පංගු කිරීම',
      definitionEn: 'Dividing an individual physical hard drive into multiple distinct logical drives (e.g. C:, D:, E:).',
      definitionSi: 'එක් භෞතික දෘඩ තැටියක් තර්කික ධාවක කිහිපයකට (C:, D:) වෙන් කිරීමේ ක්‍රියාවලියයි.'
    },
    {
      termEn: 'Disk Formatting',
      termSi: 'තැටි ආකෘතිකරණය',
      definitionEn: 'Preparing a storage medium by creating tracks, sectors, and a file system table, permanently wiping all previous data.',
      definitionSi: 'දත්ත ගබඩා කළ හැකි වන සේ ගොනු පද්ධතියක් පිහිටුවා තැටිය සූදානම් කිරීම වන අතර මෙහිදී පැරණි දත්ත මැකී යයි.'
    },
    {
      termEn: 'Real-Time Operating System (RTOS)',
      termSi: 'තත්‍ය කාල මෙහෙයුම් පද්ධති (RTOS)',
      definitionEn: 'An operating system that processes inputs and delivers guaranteed outputs within rigid, deterministic time deadlines.',
      definitionSi: 'දැඩි කාල සීමාවක් තුළ නියත ලෙස ප්‍රතිදාන ලබා දෙන මෙහෙයුම් පද්ධති වේ (ගුවන් යානා, වෛද්‍ය පද්ධති).'
    },
    {
      termEn: 'Free & Open Source Software (FOSS)',
      termSi: 'නිදහස් හා විවෘත මූලාශ්‍ර මෘදුකාංග (FOSS)',
      definitionEn: 'Software licensed to allow users to inspect, modify, and redistribute the underlying source code freely.',
      definitionSi: 'මූල කේතය (source code) නොමිලේ ලබා දී ඇති, වෙනස් කිරීමට හා බෙදාහැරීමට නිදහස ඇති මෘදුකාංග වේ.'
    }
  ],
  pastPaperQuestions: [
    {
      id: 'pp-2020-p1-q08',
      year: 2020,
      paperType: 'Paper I',
      badgeText: '2020 O/L Paper I - Q08',
      type: 'mcq',
      questionEn: 'Which of the following contains only the examples of operating systems?\n(1) Android, Ubuntu, Windows 10\n(2) Ubuntu, Windows 10, Windows Explorer\n(3) Android, Windows 10, Windows Explorer\n(4) Android, Ubuntu, Windows Explorer',
      questionSi: 'මෙහෙයුම් පද්ධතිවලට උදාහරණ පමණක් අඩංගු වන්නේ පහත කුමකද?\n(1) ඇන්ඩ්‍රොයිඩ්, උබුන්ටු, වින්ඩෝස් 10\n(2) උබුන්ටු, වින්ඩෝස් 10, වින්ඩෝස් එක්ස්ප්ලෝරර් (Windows Explorer)\n(3) ඇන්ඩ්‍රොයිඩ්, වින්ඩෝස් 10, වින්ඩෝස් එක්ස්ප්ලෝරර්\n(4) ඇන්ඩ්‍රොයිඩ්, උබුන්ටු, වින්ඩෝස් එක්ස්ප්ලෝරර්',
      options: [
        { id: '1', en: 'Android, Ubuntu, Windows 10', si: 'ඇන්ඩ්‍රොයිඩ්, උබුන්ටු, වින්ඩෝස් 10' },
        { id: '2', en: 'Ubuntu, Windows 10, Windows Explorer', si: 'උබුන්ටු, වින්ඩෝස් 10, වින්ඩෝස් එක්ස්ප්ලෝරර්' },
        { id: '3', en: 'Android, Windows 10, Windows Explorer', si: 'ඇන්ඩ්‍රොයිඩ්, වින්ඩෝස් 10, වින්ඩෝස් එක්ස්ප්ලෝරර්' },
        { id: '4', en: 'Android, Ubuntu, Windows Explorer', si: 'ඇන්ඩ්‍රොයිඩ්, උබුන්ටු, වින්ඩෝස් එක්ස්ප්ලෝරර්' }
      ],
      correctOptionId: '1',
      explanationEn: 'Android is a mobile OS, Ubuntu is an open-source Linux OS, and Windows 10 is a desktop OS. Windows Explorer is a file manager utility program, not an operating system.',
      explanationSi: 'ඇන්ඩ්‍රොයිඩ්, උබුන්ටු සහ වින්ඩෝස් 10 යන සියල්ල මෙහෙයුම් පද්ධති වේ. Windows Explorer යනු මෙහෙයුම් පද්ධතියක් නොව ගොනු කළමනාකරණය කරන යෙදුම් වැඩසටහනකි.'
    },
    {
      id: 'pp-2020-p1-q09',
      year: 2020,
      paperType: 'Paper I',
      badgeText: '2020 O/L Paper I - Q09',
      type: 'mcq',
      questionEn: 'Which of the following statement(s) is/are correct?\nA – A Graphical User Interface (GUI) provides the facility to use the mouse to execute the commands\nB – WIMP stands for Windows, Icons, Menus and Pointer\nC – Command Line Interface (CLI) is more user-friendly compared to Graphical User Interface (GUI)',
      questionSi: 'පහත සඳහන් වගන්ති අතරින් නිවැරදි වන්නේ කවරක්ද?\nA – විධාන ක්‍රියාත්මක කිරීම සඳහා මූසිකය භාවිත කිරීමේ පහසුව චිත්‍රක පරිශීලක අතුරුමුහුණතක් (GUI) මගින් ලබා දෙයි.\nB – WIMP මගින් දක්වන්නේ Windows (කවුළු), Icons (නිරූපක), Menus (මෙනු) සහ Pointer (දර්ශක) යන්නයි.\nC – චිත්‍රක පරිශීලක අතුරුමුහුණත් හා සසඳන විට, විධාන පේළි අතුරුමුහුණත (CLI) වඩා භාවිත මිතුරු (user-friendly) වේ.',
      options: [
        { id: '1', en: 'A only', si: 'A පමණි' },
        { id: '2', en: 'B only', si: 'B පමණි' },
        { id: '3', en: 'A and B only', si: 'A හා B පමණි' },
        { id: '4', en: 'B and C only', si: 'B හා C පමණි' }
      ],
      correctOptionId: '3',
      explanationEn: 'Statement A is correct (GUI is mouse-driven). Statement B is correct (WIMP = Windows, Icons, Menus, Pointer). Statement C is incorrect because CLI requires memorizing command syntax and is less user-friendly than GUI.',
      explanationSi: 'A නිවැරදිය (GUI මූසිකය භාවිත කරයි). B නිවැරදිය (WIMP = Windows, Icons, Menus, Pointer). C වැරදිය (CLI භාවිත මිතුරු නැත; එය භාවිත කිරීමට විධාන මතක තබා ගත යුතුය).'
    },
    {
      id: 'pp-2020-p2-q01',
      year: 2020,
      paperType: 'Paper II',
      badgeText: '2020 O/L Paper II - Q01 (ii) (b)',
      type: 'structured',
      questionEn: 'Consider the following statement:\n"An operating system is an example for ........................ ."\nSelect the correct term from the list: {hard disk, systems software, application software, RAM}',
      questionSi: 'පහත දැක්වෙන ප්‍රකාශය සලකා බලන්න:\n"මෙහෙයුම් පද්ධතියක් ........................ සඳහා උදාහරණයකි."\nපද ලැයිස්තුවෙන් නිවැරදි පදය තෝරන්න: {දෘඩ තැටිය, පද්ධති මෘදුකාංග (systems software), යෙදුම් මෘදුකාංග (application software), RAM}',
      sampleAnswerEn: 'systems software',
      sampleAnswerSi: 'පද්ධති මෘදුකාංග (systems software)',
      explanationEn: 'An Operating System belongs to the category of System Software, which controls computer hardware resources and executes application programs.',
      explanationSi: 'මෙහෙයුම් පද්ධතියක් යනු දෘඩාංග සහ අනෙකුත් මෘදුකාංග කළමනාකරණය කරන පද්ධති මෘදුකාංගයකි (system software).'
    },
    {
      id: 'pp-2021-p1-q09',
      year: 2021,
      paperType: 'Paper I',
      badgeText: '2021 O/L Paper I - Q09',
      type: 'mcq',
      questionEn: 'Which of the following is the first software that must be installed on a computer after formatting its hard disk?',
      questionSi: 'පුද්ගල පරිගණකයක දෘඩ තැටිය හැඩසවුම් (formatting) කළ පසු එහි මුලින්ම ස්ථාපනය කළ යුතු මෘදුකාංගය කුමක්ද?',
      options: [
        { id: '1', en: 'Office package', si: 'කාර්යාල කට්ටලය (Office package)' },
        { id: '2', en: 'Operating system', si: 'මෙහෙයුම් පද්ධතිය (Operating system)' },
        { id: '3', en: 'Antivirus software', si: 'ප්‍රතිවෛරස් මෘදුකාංගය (Antivirus software)' },
        { id: '4', en: 'Web browser', si: 'වෙබ් අන්වේක්ෂකය (Web browser)' }
      ],
      correctOptionId: '2',
      explanationEn: 'Formatting wipes the drive clean. Before installing application suites or antivirus tools, the foundational Operating System must be installed to manage hardware and execute software.',
      explanationSi: 'දෘඩ තැටිය හැඩසවුම් (format) කළ පසු එහි මුලින්ම මෙහෙයුම් පද්ධතිය ස්ථාපනය කළ යුතුය. මන්ද යත් අනෙකුත් සියලු මෘදුකාංග ධාවනය වන්නේ මෙහෙයුම් පද්ධතිය මත බැවිනි.'
    },
    {
      id: 'pp-2022-p2-q01',
      year: 2022,
      paperType: 'Paper II',
      badgeText: '2022 O/L Paper II - Q01 (v)',
      type: 'structured',
      questionEn: 'Raja powers on his laptop and uses a word processing application to type a letter. Afterwards, he shuts down the computer via the Operating System.\nSelect the appropriate term from the list {BIOS, OS, OS, WP} for labels I, II, III, and IV representing software executing on the processor:\nI (Hardware Check at Startup) -> II (Operating Environment) -> III (Resource Manager) -> IV (Word Processor Application)',
      questionSi: 'රාජා පරිගණකයක් පණ ගන්වා වචන සකසුම් යෙදවුමක් භාවිතයෙන් ලේඛනයක් යතුරු ලියනය කරයි. ඉන් පසු ඔහු මෙහෙයුම් පද්ධතිය හරහා පරිගණකය වසා දමයි (shut down).\nමෙම සන්දර්භයේදී පරිගණකයේ සකසනය (processor) මත ධාවනය වන්නන් I, II, III සහ IV සඳහා සුදුසු ආදේශක ලැයිස්තුවෙන් තෝරා ලියන්න: {BIOS, OS, OS, WP}',
      sampleAnswerEn: 'I: BIOS, II: OS, III: OS, IV: WP',
      sampleAnswerSi: 'I: BIOS, II: OS, III: OS, IV: WP',
      explanationEn: 'At startup, BIOS runs first to verify hardware via POST. Then the Operating System (OS) creates the operating environment, manages system resources, and executes the Word Processor (WP) application.',
      explanationSi: 'ආරම්භයේදී BIOS මගින් POST පරීක්ෂාව කරයි (I: BIOS). ඉන්පසු මෙහෙයුම් පද්ධතිය පරිසරය සකසයි (II: OS) සහ සම්පත් පාලනය කරයි (III: OS). ලිපිය ලිවීමට WP යෙදවුම ධාවනය වේ (IV: WP).'
    },
    {
      id: 'pp-2023-p2-q01',
      year: 2023,
      paperType: 'Paper II',
      badgeText: '2023 O/L Paper II - Q01 (i)',
      type: 'structured',
      questionEn: 'When a computer is powered on, ...A... (Application software / BIOS) runs to check hardware. Then the Operating System is loaded into ...B... (Hard disk / RAM). This creates the environment for computer processes to run and displays a login interface to ...C... (User / Network). To manage other tasks and requirements, ...D... (Operating System / Anti-virus software) runs continuously.',
      questionSi: 'පරිගණකය පණගැන්වූ විට, සියලු දෘඩාංග පරීක්ෂා කර ඒවා නිසිපරිදි ක්‍රියාත්මක වන බව තහවුරු කිරීමට ...A... (යෙදුම් මෘදුකාංගය / BIOS) ධාවනය වෙයි. ඉන්පසු මෙහෙයුම් පද්ධතිය ...B... (දෘඩ තැටියට / මතකයට (RAM)) ප්‍රවේශ (load) වේ. එය පරිගණකයේ ක්‍රියාහන් (processes) ධාවනය වීමට අවශ්‍ය මූලික පරිසරය සකසයි. ඉන්පසු පරිශීලකයාට පරිගණකයට පූරණය වීමට (login) අතුරුමුහුණතක් සපයයි. පූරණය වීමෙන් පසු පරිශීලකයාට ක්‍රියාහන් කිහිපයක් ආරම්භ කළ හැක. එම ක්‍රියාහන්වල විවිධ අවශ්‍යතා සම්පූර්ණ කිරීමට සහ පරිගණකයේ අනෙකුත් කළමනාකරණ කටයුතු කිරීමට ...D... (ප්‍රතිවෛරස් මෘදුකාංගය / මෙහෙයුම් පද්ධතිය) අවශ්‍ය පරිදි ධාවනය වේ.',
      sampleAnswerEn: 'A: BIOS, B: RAM, C: User, D: Operating System',
      sampleAnswerSi: 'A: BIOS, B: මතකයට (RAM), C: පරිශීලකයා (User), D: මෙහෙයුම් පද්ධතිය (Operating System)',
      explanationEn: 'BIOS executes at startup to run POST. The OS is loaded from secondary storage into primary RAM. The UI is presented to the User, and the Operating System continuously manages process resources.',
      explanationSi: 'පණගැන්වීමේදී BIOS මගින් දෘඩාංග පරීක්ෂා කරයි (A). OS එක RAM මතකයට පැටවේ (B). අතුරුමුහුණත පරිශීලකයාට පෙන්වයි (C). සියලු සම්පත් මෙහෙයුම් පද්ධතිය මගින් පාලනය වේ (D).'
    },
    {
      id: 'pp-2024-p1-q01',
      year: 2024,
      paperType: 'Paper I',
      badgeText: '2024 O/L Paper I - Q01',
      type: 'mcq',
      questionEn: 'The hard drive in a computer is formatted during maintenance. Which of the following should now be first installed in it?',
      questionSi: 'නඩත්තුවකදී පරිගණකයක දෘඩ තැටිය ආකෘතිකරණය (format) කෙරිණි. පහත කවරක් දැන් එහි මුලින්ම ස්ථාපනය කළ යුතුද?',
      options: [
        { id: '1', en: 'a software firewall', si: 'මෘදුකාංග ගිනිපවුරක් (firewall)' },
        { id: '2', en: 'an anti-virus software', si: 'ප්‍රතිවෛරස් මෘදුකාංගයක්' },
        { id: '3', en: 'an application software', si: 'යෙදුම් මෘදුකාංගයක්' },
        { id: '4', en: 'an operating system', si: 'මෙහෙයුම් පද්ධතියක්' }
      ],
      correctOptionId: '4',
      explanationEn: 'An Operating System is the prerequisite foundation that must be installed on a newly formatted drive before firewalls, antivirus, or applications can execute.',
      explanationSi: 'දෘඩ තැටියක් format කළ පසු මුලින්ම මෙහෙයුම් පද්ධතියක් ස්ථාපනය කළ යුතුය. මෙහෙයුම් පද්ධතියක් නොමැතිව ගිනිපවුරු, ප්‍රතිවෛරස් හෝ යෙදුම් මෘදුකාංග ස්ථාපනය කළ නොහැක.'
    },
    {
      id: 'pp-2024-p1-q10',
      year: 2024,
      paperType: 'Paper I',
      badgeText: '2024 O/L Paper I - Q10',
      type: 'mcq',
      questionEn: 'Which of the following only contains examples of operating systems?',
      questionSi: 'පහත දැක්වෙන කුමන වරණයෙහි මෙහෙයුම් පද්ධති සඳහා වූ උදාහරණ පමණක් අඩංගු වේද?',
      options: [
        { id: '1', en: 'Adobe Photoshop, LibreOffice, Movie Maker, Notepad', si: 'Adobe Photoshop, LibreOffice, Movie Maker, Notepad' },
        { id: '2', en: 'Android, LibreOffice, MacOS, McAfee AntiVirus', si: 'Android, LibreOffice, MacOS, McAfee AntiVirus' },
        { id: '3', en: 'Movie Maker, Norton AntiVirus, Ubuntu, Windows', si: 'Movie Maker, Norton AntiVirus, Ubuntu, Windows' },
        { id: '4', en: 'Android, MacOS, Ubuntu, Windows', si: 'Android, MacOS, Ubuntu, Windows' }
      ],
      correctOptionId: '4',
      explanationEn: 'Option 4 exclusively contains operating systems (Android for mobile, MacOS and Windows for desktop, Ubuntu for Linux). The other options contain application software and antivirus programs.',
      explanationSi: '4 වන වරණයේ ඇත්තේ මෙහෙයුම් පද්ධති පමණි (Android, MacOS, Ubuntu, Windows). අනෙක් සියලු වරණවල යෙදුම් මෘදුකාංග සහ ප්‍රතිවෛරස් මෘදුකාංග මිශ්‍ර වී ඇත.'
    },
    {
      id: 'pp-2025-p1-q02',
      year: 2025,
      paperType: 'Paper I',
      badgeText: '2025 O/L Paper I - Q02',
      type: 'mcq',
      questionEn: 'In which of the following are the instructions of the operating system of a computer executed?',
      questionSi: 'පරිගණකයක මෙහෙයුම් පද්ධතියේ උපදෙස් ක්‍රියාත්මක (executed) වන්නේ පහත කුමකද?',
      options: [
        { id: '1', en: 'caches', si: 'නිහිත/වාරික මතකය (caches)' },
        { id: '2', en: 'main memory', si: 'ප්‍රධාන මතකය (main memory)' },
        { id: '3', en: 'processor', si: 'සකසනය / මධ්‍ය සැකසුම් ඒකකය (processor)' },
        { id: '4', en: 'registers', si: 'රෙජිස්තර (registers)' }
      ],
      correctOptionId: '3',
      explanationEn: 'All computer software instructions (including operating system code and applications) are executed solely by the CPU processor. Memories and caches only store instructions.',
      explanationSi: 'මෙහෙයුම් පද්ධතියේ සහ සියලුම වැඩසටහන්වල උපදෙස් ක්‍රියාත්මක කරනු ලබන්නේ සකසනය (processor / CPU) මගිනි. මතකය මගින් උපදෙස් රඳවා තබා ගැනීම පමණක් සිදු කරයි.'
    },
    {
      id: 'pp-2025-p1-q03',
      year: 2025,
      paperType: 'Paper I',
      badgeText: '2025 O/L Paper I - Q03',
      type: 'mcq',
      questionEn: 'What is the most suitable replacement for the blank in the following statement?\n"Even when my computer is off, its operating system, application software and all my data exist in its ........................ ."',
      questionSi: 'පහත ප්‍රකාශයේ හිස්තැන සඳහා වඩාත්ම සුදුසු පදය කුමක්ද?\n"මගේ පරිගණකය ක්‍රියා විරහිත කර තිබුණද, එහි මෙහෙයුම් පද්ධතිය, යෙදුම් මෘදුකාංග සහ මගේ සියලුම දත්ත එහි ........................ තුළ පවතී."',
      options: [
        { id: '1', en: 'caches', si: 'නිහිත මතකය (caches)' },
        { id: '2', en: 'hard disk', si: 'දෘඩ තැටිය (hard disk)' },
        { id: '3', en: 'main memory', si: 'ප්‍රධාන මතකය (main memory)' },
        { id: '4', en: 'processor', si: 'සකසනය (processor)' }
      ],
      correctOptionId: '2',
      explanationEn: 'The hard disk is non-volatile secondary storage that retains programs and data permanently when unpowered. Caches, main memory (RAM), and processor registers lose data when powered off.',
      explanationSi: 'දෘඩ තැටිය (hard disk) යනු අස්ථාවර නොවන (non-volatile) ද්විතීයික ආචයනයක් බැවින් පරිගණකය ක්‍රියා විරහිත කළද දත්ත ස්ථිරව සුරැකී පවතී. RAM සහ caches විදුලිය නැතිවිට මැකී යයි.'
    },
    {
      id: 'pp-2025-p1-q09',
      year: 2025,
      paperType: 'Paper I',
      badgeText: '2025 O/L Paper I - Q09',
      type: 'mcq',
      questionEn: 'Which of the following is not a task of an operating system?',
      questionSi: 'මෙහෙයුම් පද්ධතියක කාර්යයක් නොවැන්නේ පහත කවරක්ද?',
      options: [
        { id: '1', en: 'Giving each user process the chance to run on the processor', si: 'එක් එක් පරිශීලක ක්‍රියායනයට (process) සකසනයේ ධාවනය වීමට අවස්ථාව ලබාදීම' },
        { id: '2', en: 'Managing the memory of the computer', si: 'පරිගණකයේ මතකය කළමනාකරණය' },
        { id: '3', en: 'Managing the user files in a computer', si: 'පරිගණකයේ පරිශීලක ගොනු කළමනාකරණය' },
        { id: '4', en: 'Right-aligning text in a word processing document', si: 'වචන සකසුම් ලේඛනයක පාඨ දකුණට තෙරෙපීම (right-aligning)' }
      ],
      correctOptionId: '4',
      explanationEn: 'Aligning document text is an application-level formatting task performed by Word Processing software, not a system resource management task of an operating system.',
      explanationSi: 'පාඨ දකුණට තෙරෙපීම (Right-alignment) යනු වචන සකසුම් (Word Processing) යෙදුම් මෘදුකාංගයක කාර්යයක් වන අතර එය මෙහෙයුම් පද්ධතියේ කාර්යයක් නොවේ.'
    },
    {
      id: 'pp-2025-p2-q01',
      year: 2025,
      paperType: 'Paper II',
      badgeText: '2025 O/L Paper II - Q01 (v)',
      type: 'essay',
      questionEn: '(a) A person has many files related to various subjects and he stores all of them in the "Documents" folder of his computer. Isn\'t there a better method? Explain.\n(b) What is meant by "Disk de-fragmentation"?',
      questionSi: '(a) පුද්ගලයෙකු සතුව විවිධ විෂයයන්ට අදාළ ගොනු රැසක් ඇති අතර ඔහු ඒ සියල්ල තම පරිගණකයේ "Documents" ෆෝල්ඩරයේ ගබඩා කරයි. මීට වඩා හොඳ ක්‍රමයක් නොමැතිද? පැහැදිලි කරන්න.\n(b) "Disk de-fragmentation" (තැටි ප්‍රතිභාගීකරණය) යන්නෙන් අදහස් කරන්නේ කුමක්ද?',
      sampleAnswerEn: '(a) Yes, he should create separate subject-specific sub-folders within "Documents" (e.g. ICT, Science, Maths) to establish a clean hierarchical directory structure for faster retrieval.\n(b) Disk de-fragmentation reorganizes scattered, non-contiguous file pieces (clusters) on a hard drive into contiguous sectors, minimizing read/write head movement and accelerating access speeds.',
      sampleAnswerSi: '(a) ඔව්, මීට වඩා හොඳ ක්‍රමයක් ඇත. "Documents" ෆෝල්ඩරය තුළ විෂයයන් අනුව උප-ෆෝල්ඩර (Sub-folders: උදා: ICT, Science, Maths) සාදා අදාළ ගොනු ඒ තුළ ගබඩා කිරීමෙන් ධූරාවලි ගොනු ව්‍යුහයක් ගොඩනැගෙන අතර ගොනු සෙවීම කාර්යක්ෂම වේ.\n(b) තැටි ප්‍රතිභාගීකරණය යනු දෘඩ තැටිය පුරා විසිරී කැබලි වී (fragmented) පවතින ගොනු කොටස් නැවත එක් කර අඛණ්ඩව පිහිටන සේ සකස් කිරීම වන අතර එමගින් කියවීමේ වේගය වැඩි වේ.',
      explanationEn: 'Part (a) tests understanding of hierarchical folder directories. Part (b) tests understanding of mechanical disk defragmentation mechanics.',
      explanationSi: '(a) කොටස මගින් ධූරාවලි ෆෝල්ඩර ව්‍යුහය පිළිබඳ දැනුමද, (b) කොටස මගින් තැටි ප්‍රතිභාගීකරණය පිළිබඳ සංකල්පයද පරීක්ෂා කෙරේ.'
    }
  ]
};
