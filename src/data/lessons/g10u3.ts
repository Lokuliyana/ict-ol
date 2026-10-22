// Verbatim dual-medium syllabus data extracted from public/lessons
import { GeneralLessonData } from '../allLessonsData';

export const G10_U3_DATA: GeneralLessonData = {
  id: 'g10-u3',
  grade: '10',
  unitNumber: 3,
  titleEn: 'Data Representation in Computer Systems',
  titleSi: 'පරිගණක පද්ධති තුළ දත්ත නිරූපණය',
  subtopics: [
  {
    "id": "g10-u3-st-1",
    "number": "3.1",
    "titleEn": "Computer Data Representation",
    "titleSi": "පරිගණකයේ දත්ත නිරූපණය",
    "summaryEn": "Representation of data using two electrical voltage levels (Logic 0 and 1) corresponding to Off and On circuit states.",
    "summarySi": "විද්‍යුත් පරිපථවල විවෘත (Off) සහ වැසූ (On) අවස්ථාවලට අනුරූප වෝල්ටීයතා මට්ටම් දෙකක් (ලොජික් 0 සහ 1) මගින් දත්ත නිරූපණය කිරීම.",
    "blocks": [
      {
        "id": "b-g10-u3-1-1",
        "en": "Key Concepts & Voltage Signals:\nComputers represent all data using two discrete voltage states in electronic circuits:\n* **Logic 0 (LOW):** Low voltage level (0V / Ground / Switch Open / OFF).\n* **Logic 1 (HIGH):** High voltage level (+5V or +3.3V / VCC / Switch Closed / ON).\n* **Universal Encoding:** All text, numbers, graphics, audio, and video in the digital world are encoded as sequences of these binary digits (bits).",
        "si": "මූලික සංකල්ප සහ වෝල්ටීයතා සංඥා:\nපරිගණක සියලු දත්ත නිරූපණය කරන්නේ ඉලෙක්ට්‍රොනික පරිපථවල පවතින වෝල්ටීයතා මට්ටම් දෙකක් මඟිනි:\n* **ලොජික් 0 (LOW):** පහළ වෝල්ටීයතා මට්ටම (0V / භූගත / ස්විචය විවෘත / OFF).\n* **ලොජික් 1 (HIGH):** ඉහළ වෝල්ටීයතා මට්ටම (+5V හෝ +3.3V / VCC / ස්විචය වැසූ / ON).\n* **විශ්ව කේතනය:** ඩිජිටල් ලෝකයේ සියලුම පෙළ, සංඛ්‍යා, පින්තූර, හඬ සහ වීඩියෝ දත්ත අවසානයේ නිරූපණය වන්නේ මෙම ද්විමය සංකේත (බිටු) එකතුවෙනි.",
        "highlightTerm": "Voltage Signals & Binary Logic"
      },
      {
        "id": "b-g10-u3-1-2",
        "en": "Why Digital Computers Use Binary Architecture:\n* **Bistable Reliability:** Semiconductor transistors operate most reliably as high-speed two-state (ON/OFF) electronic switches.\n* **Noise Immunity:** Distinguishing between two widely separated voltage levels (0V vs 5V) is immune to electrical interference and voltage fluctuations.\n* **Alignment with Boolean Logic:** Two-valued binary math directly matches George Boole's Boolean logic (True/False), enabling straightforward logic circuit design.",
        "si": "පරිගණක සඳහා ද්විමය පද්ධතිය භාවිත කිරීමට හේතු:\n* **ද්වි-ස්ථාවර විශ්වාසනීයත්වය:** ට්‍රාන්සිස්ටර වැනි අර්ධ සන්නායක වඩාත්ම විශ්වාසදායක ලෙස ක්‍රියා කරන්නේ ද්වි-ස්ථාවර (ON/OFF) ස්විචයන් ලෙසිනි.\n* **විද්‍යුත් ඝෝෂාවලට ඔරොත්තු දීම:** වෝල්ටීයතා මට්ටම් දෙකක් (0V සහ 5V) අතර වෙනස හඳුනා ගැනීම විද්‍යුත් බාධා සහ උච්චාවචනයන් හමුවේ ඉතා ස්ථායී වේ.\n* **බූලීය තර්කනය සමඟ ගැළපීම:** ජෝර්ජ් බූල්ගේ ද්වි-අගය බූලීය තර්කනය (සත්‍ය/අසත්‍ය) සමඟ ද්විමය පද්ධතිය සෘජුවම ගැළපෙන බැවින් පරිපථ නිර්මාණය සරල වේ.",
        "highlightTerm": "Why Computers Use Binary Architecture"
      }
    ],
    "examples": [
      {
        "id": "ex-widget-3.1",
        "titleEn": "Interactive 8-Bit Binary Switchboard",
        "titleSi": "අන්තර්ක්‍රියාකාරී 8-බිටු ද්විමය ස්විච පුවරුව",
        "isInteractiveWidget": "binary-weight"
      }
    ],
    "checkpointQuiz": {
      "id": "q-g10-u3-1",
      "questionEn": "Why do modern digital computers use binary digits (0 and 1) instead of the decimal system for internal processing?",
      "questionSi": "නූතන අංකිත පරිගණක අභ්‍යන්තර සැකසුම් සඳහා දශම පද්ධතිය වෙනුවට ද්විමය සංඛ්‍යා (0 සහ 1) භාවිත කරන්නේ ඇයි?",
      "options": [
        {
          "id": "1",
          "en": "Electronic circuits operate most reliably with two stable voltage levels (high and low)",
          "si": "විද්‍යුත් පරිපථ ස්ථායී වෝල්ටීයතා මට්ටම් දෙකකින් (ඉහළ සහ පහළ) වඩාත්ම විශ්වාසදායක ලෙස ක්‍රියා කරන බැවින්"
        },
        {
          "id": "2",
          "en": "Binary numbers require less physical storage space than any other system",
          "si": "ද්විමය සංඛ්‍යාවලට වෙනත් ඕනෑම පද්ධතියකට වඩා අඩු භෞතික මතක ඉඩක් අවශ්‍ය වන බැවින්"
        },
        {
          "id": "3",
          "en": "Computer displays cannot render numbers other than 0 and 1",
          "si": "පරිගණක තිරවලට 0 සහ 1 හැර වෙනත් අංක පෙන්විය නොහැකි බැවින්"
        },
        {
          "id": "4",
          "en": "Microprocessors can only handle up to 2 programs at the same time",
          "si": "ක්ෂුද්‍ර ප්‍රොසෙසරයකට එකවර හැසිරවිය හැක්කේ වැඩසටහන් 2ක් පමණක් වන බැවින්"
        }
      ],
      "correctOptionId": "1",
      "explanationEn": "Transistors function as bistable switches (ON/OFF), corresponding reliably to 2 voltage states (+5V/0V) immune to electrical noise.",
      "explanationSi": "ට්‍රාන්සිස්ටර ද්වි-ස්ථාවර ස්විච ලෙස ක්‍රියා කරන අතර විද්‍යුත් ඝෝෂා හමුවේ වෝල්ටීයතා මට්ටම් 2ක් (ඉහළ/පහළ) නිරවද්‍යව හඳුනාගත හැක."
    }
  },
  {
    "id": "g10-u3-st-2",
    "number": "3.2",
    "titleEn": "Number Systems & Radix Definitions",
    "titleSi": "සංඛ්‍යා පද්ධති සහ පාදයේ අර්ථ දැක්වීම්",
    "summaryEn": "Mathematical properties of positional number systems: Unit, Number, Radix/Base, and the 4 main systems (Decimal, Binary, Octal, Hexadecimal).",
    "summarySi": "ස්ථානීය සංඛ්‍යා පද්ධතිවල ගණිතමය ගුණ: ඒකකය, සංඛ්‍යාව, පාදය සහ පරිගණකයේ භාවිත වන ප්‍රධාන සංඛ්‍යා පද්ධති 4 (දශමය, ද්විමය, අෂ්ටමය, ෂඩ්දශමය).",
    "blocks": [
      {
        "id": "b-g10-u3-2-1",
        "en": "Fundamental Definitions: Unit, Number & Base (Radix):\n* **Unit (ඒකකය):** The smallest individual count or quantity used to build quantities.\n* **Number (සංඛ්‍යාව):** A mathematical representation composed of one or more digits that expresses quantity or value.\n* **Base / Radix (පාදය):** The total count of distinct symbols or digits available in a positional number system. In any number system of base b, valid digits range from 0 to b - 1, and the positional weight of the n-th digit position (starting at 0 from the right) is bⁿ.",
        "si": "මූලික අර්ථ දැක්වීම්: ඒකකය, සංඛ්‍යාව සහ පාදය (Radix):\n* **ඒකකය (Unit):** ප්‍රමාණයක් මැනීමට ගන්නා මූලික කුඩාම ප්‍රමාණයයි.\n* **සංඛ්‍යාව (Number):** එක් සංකේතයකින් හෝ සංකේත කිහිපයකින් සමන්විත ප්‍රමාණයක් හෝ අගයක් දක්වන ගණිතමය නිරූපණයකි.\n* **පාදය (Base / Radix):** කිසියම් ස්ථානීය සංඛ්‍යා පද්ධතියක් තුළ භාවිත වන වෙනස් තනි අංක හෝ සංකේතවල මුළු එකතුවයි. b පාදය සහිත ඕනෑම සංඛ්‍යා පද්ධතියක අඩංගු අංක 0 සිට b - 1 දක්වා වන අතර, දකුණේ සිට n වන ස්ථානයේ ස්ථානීය අගය bⁿ වේ.",
        "highlightTerm": "Unit, Number & Base (Radix)"
      },
      {
        "id": "b-g10-u3-2-2",
        "en": "The 4 Main Number Systems in Computing:\n1. **Decimal (Base 10):** Uses digits {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}. Human standard counting system.\n2. **Binary (Base 2):** Uses digits {0, 1}. Native language of digital hardware and circuits.\n3. **Octal (Base 8):** Uses digits {0, 1, 2, 3, 4, 5, 6, 7}. Compact shorthand for 3-bit binary groups.\n4. **Hexadecimal (Base 16):** Uses 16 symbols: {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F}. Letters represent decimal values 10 through 15: A=10, B=11, C=12, D=13, E=14, F=15. Compact shorthand for 4-bit binary nibbles.",
        "si": "පරිගණක විද්‍යාවේ භාවිත වන ප්‍රධාන සංඛ්‍යා පද්ධති 4:\n1. **දශමය පද්ධතිය (පාදය 10):** {0, 1, 2, 3, 4, 5, 6, 7, 8, 9} යන අංක භාවිත කරයි. මිනිසාගේ සම්මත ගණන් කිරීමේ ක්‍රමයයි.\n2. **ද්විමය පද්ධතිය (පාදය 2):** {0, 1} යන අංක පමණක් භාවිත කරයි. පරිගණක දෘඩාංගවල ස්වභාවික භාෂාවයි.\n3. **අෂ්ටමය පද්ධතිය (පාදය 8):** {0, 1, 2, 3, 4, 5, 6, 7} යන අංක භාවිත කරයි. බිටු 3ක ද්විමය කාණ්ඩ සංක්ෂිප්තව ලිවීමට යොදා ගනී.\n4. **ෂඩ්දශමය පද්ධතිය (පාදය 16):** සංකේත 16ක් භාවිත කරයි: {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F}. මෙහි A=10, B=11, C=12, D=13, E=14, F=15 වේ. බිටු 4ක ද්විමය කාණ්ඩ (Nibble) සංක්ෂිප්තව ලිවීමට යොදා ගනී.",
        "highlightTerm": "4 Main Number Systems"
      }
    ],
    "tableData": {
      "headers": [
        {
          "en": "Number System",
          "si": "සංඛ්‍යා පද්ධතිය"
        },
        {
          "en": "Base (Radix)",
          "si": "පාදය"
        },
        {
          "en": "Valid Digits / Symbols",
          "si": "වලංගු අංක / සංකේත"
        },
        {
          "en": "Positional Weights (from right)",
          "si": "ස්ථානීය අගයන් (දකුණේ සිට)"
        },
        {
          "en": "Example Representation",
          "si": "උදාහරණ අංකය"
        }
      ],
      "rows": [
        {
          "col1": {
            "en": "Binary (ද්විමය)",
            "si": "ද්විමය"
          },
          "col2": {
            "en": "2",
            "si": "2"
          },
          "col3": {
            "en": "{0, 1}",
            "si": "{0, 1}"
          },
          "col4": {
            "en": "2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16",
            "si": "1, 2, 4, 8, 16, 32..."
          },
          "col5": {
            "en": "101101₂",
            "si": "101101₂"
          }
        },
        {
          "col1": {
            "en": "Octal (අෂ්ටමය)",
            "si": "අෂ්ටමය"
          },
          "col2": {
            "en": "8",
            "si": "8"
          },
          "col3": {
            "en": "{0, 1, 2, 3, 4, 5, 6, 7}",
            "si": "{0, 1, 2, 3, 4, 5, 6, 7}"
          },
          "col4": {
            "en": "8⁰=1, 8¹=8, 8²=64, 8³=512",
            "si": "1, 8, 64, 512..."
          },
          "col5": {
            "en": "753₈",
            "si": "753₈"
          }
        },
        {
          "col1": {
            "en": "Decimal (දශමය)",
            "si": "දශමය"
          },
          "col2": {
            "en": "10",
            "si": "10"
          },
          "col3": {
            "en": "{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}",
            "si": "{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}"
          },
          "col4": {
            "en": "10⁰=1, 10¹=10, 10²=100, 10³=1000",
            "si": "1, 10, 100, 1000..."
          },
          "col5": {
            "en": "2024₁₀",
            "si": "2024₁₀"
          }
        },
        {
          "col1": {
            "en": "Hexadecimal (ෂඩ්දශමය)",
            "si": "ෂඩ්දශමය"
          },
          "col2": {
            "en": "16",
            "si": "16"
          },
          "col3": {
            "en": "{0–9, A, B, C, D, E, F}",
            "si": "{0–9, A, B, C, D, E, F}"
          },
          "col4": {
            "en": "16⁰=1, 16¹=16, 16²=256, 16³=4096",
            "si": "1, 16, 256, 4096..."
          },
          "col5": {
            "en": "2FA₁₆ or &H2FA",
            "si": "2FA₁₆ හෝ #2FA"
          }
        }
      ]
    },
    "checkpointQuiz": {
      "id": "q-g10-u3-2",
      "questionEn": "Which of the following numbers is INVALID according to its specified number system base?",
      "questionSi": "පහත සඳහන් සංඛ්‍යාවලින් එහි පාදයට අනුව වලංගු නොවන අංකය කුමක්ද?",
      "options": [
        {
          "id": "1",
          "en": "108₈",
          "si": "108₈"
        },
        {
          "id": "2",
          "en": "1011₂",
          "si": "1011₂"
        },
        {
          "id": "3",
          "en": "987₁₀",
          "si": "987₁₀"
        },
        {
          "id": "4",
          "en": "A2F₁₆",
          "si": "A2F₁₆"
        }
      ],
      "correctOptionId": "1",
      "explanationEn": "In the Octal system (Base 8), valid digits are only 0 to 7. Digit 8 does not exist in base 8.",
      "explanationSi": "අෂ්ටම සංඛ්‍යා පද්ධතියේ (පාදය 8) වලංගු වන්නේ 0 සිට 7 දක්වා අංක පමණි. 8 යන ඉලක්කම අෂ්ටම පද්ධතිය තුළ වලංගු නොවේ."
    }
  },
  {
    "id": "g10-u3-st-3",
    "number": "3.3",
    "titleEn": "Most and Least Significant Values",
    "titleSi": "වැඩිම හා අඩුම වැදගත්කමක් ඇති අගයන් (MSD/LSD, MSB/LSB)",
    "summaryEn": "Identifying Most Significant Digit (MSD) vs Least Significant Digit (LSD) and Most Significant Bit (MSB) vs Least Significant Bit (LSB).",
    "summarySi": "වැඩිම වැදගත්කමක් ඇති සංඛ්‍යාංකය (MSD) සහ අඩුම වැදගත්කමක් ඇති සංඛ්‍යාංකය (LSD) මෙන්ම MSB සහ LSB හඳුනා ගැනීම.",
    "blocks": [
      {
        "id": "b-g10-u3-3-1",
        "en": "MSD and LSD (General Positional Numbers):\n* **Most Significant Digit (MSD):** The non-zero digit with the highest positional weight (the leftmost non-zero digit of an integer).\n* **Least Significant Digit (LSD):** The digit with the lowest positional weight (the rightmost digit, representing weight b⁰ = 1 in an integer).\n* **Example in Decimal:** In the number 7845₁₀:\n  - MSD is 7 (positional value 7 × 10³ = 7000).\n  - LSD is 5 (positional value 5 × 10⁰ = 5).\n* **Example in Octal:** In 625₈, MSD is 6 (6 × 8² = 384₁₀) and LSD is 5 (5 × 8⁰ = 5).\n* **Example in Hexadecimal:** In F2A₁₆, MSD is F (15 × 16² = 3840₁₀) and LSD is A (10 × 16⁰ = 10).",
        "si": "MSD සහ LSD (පොදු ස්ථානීය සංඛ්‍යා සඳහා):\n* **වැඩිම වැදගත්කමක් ඇති සංඛ්‍යාංකය (MSD):** සංඛ්‍යාවක වැඩිම ස්ථානීය අගයක් හිමි ශුන්‍ය නොවන සංඛ්‍යාංකයයි (පූර්ණ සංඛ්‍යාවක වම්පස කෙළවරේම පිහිටි ශුන්‍ය නොවන ඉලක්කම).\n* **අඩුම වැදගත්කමක් ඇති සංඛ්‍යාංකය (LSD):** සංඛ්‍යාවක අඩුම ස්ථානීය අගයක් හිමි සංඛ්‍යාංකයයි (පූර්ණ සංඛ්‍යාවක දකුණුපස කෙළවරේම පිහිටි ඉලක්කම, ස්ථානීය අගය b⁰ = 1).\n* **දශමය උදාහරණය:** 7845₁₀ සංඛ්‍යාවේ:\n  - MSD යනු 7 වේ (ස්ථානීය අගය 7 × 10³ = 7000).\n  - LSD යනු 5 වේ (ස්ථානීය අගය 5 × 10⁰ = 5).\n* **අෂ්ටම උදාහරණය:** 625₈ හි MSD යනු 6 වන අතර LSD යනු 5 වේ.\n* **ෂඩ්දශම උදාහරණය:** F2A₁₆ හි MSD යනු F වන අතර LSD යනු A වේ.",
        "highlightTerm": "MSD and LSD"
      },
      {
        "id": "b-g10-u3-3-2",
        "en": "MSB and LSB (Binary Numbers Specifically):\n* **Most Significant Bit (MSB):** The leftmost bit in a binary number with the highest power of 2 (2ⁿ⁻¹ for an n-bit number). In signed binary numbers, the MSB represents the sign bit (0 = positive, 1 = negative).\n* **Least Significant Bit (LSB):** The rightmost bit in a binary number with positional weight 2⁰ = 1. The LSB uniquely dictates whether an integer is even (LSB = 0) or odd (LSB = 1).\n* **Example:** In the 8-bit binary byte 10110101₂:\n  - MSB is the leftmost bit 1 (value 1 × 2⁷ = 128).\n  - LSB is the rightmost bit 1 (value 1 × 2⁰ = 1).",
        "si": "MSB සහ LSB (ද්විමය සංඛ්‍යා සඳහා විශේෂිතයි):\n* **වැඩිම වැදගත්කමක් ඇති බිටුව (MSB):** ද්විමය සංඛ්‍යාවක වම්පස කෙළවරේම ඇති බිටුවයි; එයට ඉහළම 2 හි බලය (2ⁿ⁻¹) හිමි වේ. ලකුණ සහිත ද්විමය සංඛ්‍යාවලදී MSB මගින් ධන (0) හෝ සෘණ (1) ලකුණ නිරූපණය කරයි.\n* **අඩුම වැදගත්කමක් ඇති බිටුව (LSB):** ද්විමය සංඛ්‍යාවක දකුණුපස කෙළවරේම ඇති බිටුවයි; ස්ථානීය අගය 2⁰ = 1 වේ. ද්විමය සංඛ්‍යාවක් ඉරට්ටේද (LSB = 0) ඔත්තේ සංඛ්‍යාවක්ද (LSB = 1) යන්න තීරණය වන්නේ LSB මගිනි.\n* **උදාහරණය:** 10110101₂ යන බිටු 8 බයිටය තුළ:\n  - MSB යනු වම් කෙළවරේ 1 වේ (ස්ථානීය අගය 1 × 2⁷ = 128).\n  - LSB යනු දකුණු කෙළවරේ 1 වේ (ස්ථානීය අගය 1 × 2⁰ = 1).",
        "highlightTerm": "MSB and LSB"
      }
    ],
    "checkpointQuiz": {
      "id": "q-g10-u3-3",
      "questionEn": "What are the Most Significant Bit (MSB) and Least Significant Bit (LSB) of the binary number 10110010₂ respectively?",
      "questionSi": "10110010₂ ද්විමය සංඛ්‍යාවේ වැඩිම වැදගත්කමක් ඇති බිටුව (MSB) සහ අඩුම වැදගත්කමක් ඇති බිටුව (LSB) පිළිවෙළින් මොනවාද?",
      "options": [
        {
          "id": "1",
          "en": "MSB = 1, LSB = 0",
          "si": "MSB = 1, LSB = 0"
        },
        {
          "id": "2",
          "en": "MSB = 0, LSB = 1",
          "si": "MSB = 0, LSB = 1"
        },
        {
          "id": "3",
          "en": "MSB = 1, LSB = 1",
          "si": "MSB = 1, LSB = 1"
        },
        {
          "id": "4",
          "en": "MSB = 0, LSB = 0",
          "si": "MSB = 0, LSB = 0"
        }
      ],
      "correctOptionId": "1",
      "explanationEn": "MSB is the leftmost bit (1), representing weight 2⁷ = 128. LSB is the rightmost bit (0), representing weight 2⁰ = 1.",
      "explanationSi": "MSB යනු වම් කෙළවරේම පිහිටි බිටුව (1) වන අතර LSB යනු දකුණු කෙළවරේම පිහිටි බිටුව (0) වේ."
    }
  },
  {
    "id": "g10-u3-st-4",
    "number": "3.4",
    "titleEn": "Number System Conversions",
    "titleSi": "සංඛ්‍යා පද්ධති අතර පරිවර්තනය",
    "summaryEn": "Exhaustive algorithms for converting between Decimal, Binary, Octal, and Hexadecimal systems, including direct 3-bit and 4-bit grouping.",
    "summarySi": "දශමය, ද්විමය, අෂ්ටමය සහ ෂඩ්දශමය පද්ධති අතර සියලුම පරිවර්තන නීති, අනුක්‍රමික බෙදීම, ස්ථානීය අගයන් ගුණ කිරීම සහ බිටු 3/4 කාණ්ඩ කිරීම.",
    "blocks": [
      {
        "id": "b-g10-u3-4-1",
        "en": "Decimal to Other Bases (Successive Division Method):\nTo convert a decimal integer to Binary (Base 2), Octal (Base 8), or Hexadecimal (Base 16):\n1. Divide the decimal number repeatedly by the target base (2, 8, or 16) until the quotient reaches 0.\n2. Record the integer remainder at each division step.\n3. The final answer is obtained by reading the remainders in REVERSE ORDER from bottom to top (the last remainder is the MSB/MSD, and the first remainder is the LSB/LSD).\n* Example (47₁₀ → Binary): 47 ÷ 2 = 23 r 1; 23 ÷ 2 = 11 r 1; 11 ÷ 2 = 5 r 1; 5 ÷ 2 = 2 r 1; 2 ÷ 2 = 1 r 0; 1 ÷ 2 = 0 r 1. Reading bottom-to-top gives 101111₂.\n* Example (158₁₀ → Hex): 158 ÷ 16 = 9 r 14 (E); 9 ÷ 16 = 0 r 9. Reading bottom-to-top gives 9E₁₆.",
        "si": "දශමය සංඛ්‍යා වෙනත් පාදවලට හැරවීම (අනුක්‍රමික බෙදීමේ ක්‍රමය):\nදශමය පූර්ණ සංඛ්‍යාවක් ද්විමය (පාදය 2), අෂ්ටමය (පාදය 8), හෝ ෂඩ්දශමය (පාදය 16) බවට පත් කිරීමට:\n1. ලැබෙන ලබ්ධිය 0 වන තෙක් අදාළ දශමය සංඛ්‍යාව ඉලක්ක පාදයෙන් (2, 8, හෝ 16) අඛණ්ඩව බෙදන්න.\n2. සෑම පියවරකදීම ලැබෙන පූර්ණ සංඛ්‍යාත්මක ශේෂයන් සටහන් කරගන්න.\n3. අවසාන පිළිතුර ලබා ගැනීමට ශේෂයන් යට සිට ඉහළට (අග සිට මුලට) පිළිවෙළින් ලියන්න (අවසාන ශේෂය MSB/MSD වන අතර පළමු ශේෂය LSB/LSD වේ).\n* උදාහරණය (47₁₀ → ද්විමය): 47 ÷ 2 = 23 ශේෂය 1; 23 ÷ 2 = 11 ශේෂය 1; 11 ÷ 2 = 5 ශේෂය 1; 5 ÷ 2 = 2 ශේෂය 1; 2 ÷ 2 = 1 ශේෂය 0; 1 ÷ 2 = 0 ශේෂය 1. යට සිට ඉහළට කියවූ විට: 101111₂ වේ.\n* උදාහරණය (158₁₀ → ෂඩ්දශම): 158 ÷ 16 = 9 ශේෂය 14 (E); 9 ÷ 16 = 0 ශේෂය 9. යට සිට ඉහළට: 9E₁₆ වේ.",
        "highlightTerm": "Decimal to Other Bases (Successive Division)"
      },
      {
        "id": "b-g10-u3-4-2",
        "en": "Other Bases to Decimal (Positional Weight Summation):\nTo convert a number from any base b to Decimal (Base 10):\n1. Identify the positional power bⁿ of each digit, starting with index 0 at the rightmost position (b⁰, b¹, b², ...).\n2. Multiply each digit value by its corresponding positional weight (dₙ × bⁿ). For hexadecimal, replace letters with their decimal values: A=10, B=11, C=12, D=13, E=14, F=15.\n3. Sum all the products together.\n* Example (11010₂ → Decimal): (1 × 2⁴) + (1 × 2³) + (0 × 2²) + (1 × 2¹) + (0 × 2⁰) = 16 + 8 + 0 + 2 + 0 = 26₁₀.\n* Example (75₈ → Decimal): (7 × 8¹) + (5 × 8⁰) = 56 + 5 = 61₁₀.\n* Example (2F₁₆ → Decimal): (2 × 16¹) + (15 × 16⁰) = 32 + 15 = 47₁₀.",
        "si": "වෙනත් පාද දශමය බවට හැරවීම (ස්ථානීය අගයන් ගුණ කිරීමේ ක්‍රමය):\nඕනෑම b පාදයක සංඛ්‍යාවක් දශමය (පාදය 10) බවට හැරවීමට:\n1. දකුණේ සිට වමට දර්ශකය 0 න් ආරම්භ කර එක් එක් ස්ථානයට අදාළ පාදයේ බලය (b⁰, b¹, b², ...) හඳුනා ගන්න.\n2. සෑම සංඛ්‍යාංකයක්ම එහි ස්ථානීය අගයෙන් ගුණ කරන්න (dₙ × bⁿ). ෂඩ්දශම අකුරු සඳහා අදාළ දශම අගය (A=10, B=11, C=12, D=13, E=14, F=15) ආදේශ කරන්න.\n3. සියලු ගුණිතයන් එකතු කරන්න.\n* උදාහරණය (11010₂ → දශමය): (1 × 16) + (1 × 8) + (0 × 4) + (1 × 2) + (0 × 1) = 16 + 8 + 0 + 2 + 0 = 26₁₀.\n* උදාහරණය (75₈ → දශමය): (7 × 8) + (5 × 1) = 56 + 5 = 61₁₀.\n* උදාහරණය (2F₁₆ → දශමය): (2 × 16) + (15 × 1) = 32 + 15 = 47₁₀.",
        "highlightTerm": "Other Bases to Decimal (Positional Weight)"
      },
      {
        "id": "b-g10-u3-4-3",
        "en": "Direct Binary, Octal & Hexadecimal Grouping Shortcuts:\n* Binary to Octal (3-Bit Grouping): Since 2³ = 8, group binary bits into triplets from RIGHT TO LEFT. If the leftmost group has fewer than 3 bits, pad with leading zeros. Convert each 3-bit group to its octal digit (values 0–7).\n  - Example: 1101110₂ → (001)(101)(110)₂ = 1 5 6₈ = 156₈.\n* Octal to Binary: Expand each octal digit into exactly 3 binary bits.\n  - Example: 47₈ = (100)(111)₂ = 100111₂.\n* Binary to Hexadecimal (4-Bit Grouping): Since 2⁴ = 16, group binary bits into nibbles (4 bits) from RIGHT TO LEFT. Convert each 4-bit group to its hex digit (0–9, A–F).\n  - Example: 10111110₂ → (1011)(1110)₂ = B E₁₆ = BE₁₆.\n* Hexadecimal to Binary: Expand each hex digit into exactly 4 binary bits.\n  - Example: 3C₁₆ = (0011)(1100)₂ = 111100₂.\n* Octal to Hexadecimal Shortcut: Convert Octal to Binary (3 bits each), then regroup that binary string into 4-bit clusters from the right.\n  - Example: 73₈ → (111)(011)₂ = 111011₂ → (0011)(1011)₂ = 3B₁₆.",
        "si": "ද්විමය, අෂ්ටමය සහ ෂඩ්දශමය සෘජු කාණ්ඩ කිරීමේ කෙටි ක්‍රම:\n* ද්විමය සිට අෂ්ටමයට (බිටු 3 කාණ්ඩ): 2³ = 8 වන බැවින්, දකුණේ සිට වමට බිටු 3 බැගින් කාණ්ඩ කරන්න. වම් කෙළවරේ බිටු 3 සම්පූර්ණ නැතිනම් ඉදිරියට ශූන්‍ය යොදන්න. එක් එක් බිටු 3 කාණ්ඩයට අදාළ අෂ්ටම ඉලක්කම ලියන්න.\n  - උදාහරණය: 1101110₂ → (001)(101)(110)₂ = 1 5 6₈ = 156₈.\n* අෂ්ටම සිට ද්විමයට: සෑම අෂ්ටම ඉලක්කමක් සඳහාම හරියටම බිටු 3ක ද්විමය අගය ලියන්න.\n  - උදාහරණය: 47₈ = (100)(111)₂ = 100111₂.\n* ද්විමය සිට ෂඩ්දශමයට (බිටු 4 කාණ්ඩ): 2⁴ = 16 වන බැවින්, දකුණේ සිට වමට බිටු 4 බැගින් කාණ්ඩ කර අදාළ ෂඩ්දශම සංකේතය (0-9, A-F) ලියන්න.\n  - උදාහරණය: 10111110₂ → (1011)(1110)₂ = B E₁₆ = BE₁₆.\n* ෂඩ්දශම සිට ද්විමයට: සෑම ෂඩ්දශම සංකේතයක් සඳහාම හරියටම බිටු 4ක ද්විමය අගය ලියන්න.\n  - උදාහරණය: 3C₁₆ = (0011)(1100)₂ = 111100₂.\n* අෂ්ටම සිට ෂඩ්දශමයට කෙටි ක්‍රමය: අෂ්ටම සංඛ්‍යාව පළමුව ද්විමය බවට පත් කර (බිටු 3 බැගින්), එම ද්විමය පෙළ දකුණේ සිට බිටු 4 බැගින් නැවත කාණ්ඩ කරන්න.\n  - උදාහරණය: 73₈ → (111)(011)₂ = 111011₂ → (0011)(1011)₂ = 3B₁₆.",
        "highlightTerm": "Direct 3-Bit & 4-Bit Grouping Shortcuts"
      }
    ],
    "tableData": {
      "headers": [
        {
          "en": "Decimal (දශමය)",
          "si": "දශමය"
        },
        {
          "en": "Binary 4-bit (ද්විමය)",
          "si": "ද්විමය (බිටු 4)"
        },
        {
          "en": "Octal (අෂ්ටමය)",
          "si": "අෂ්ටමය"
        },
        {
          "en": "Hexadecimal (ෂඩ්දශමය)",
          "si": "ෂඩ්දශමය"
        }
      ],
      "rows": [
        {
          "col1": {
            "en": "0",
            "si": "0"
          },
          "col2": {
            "en": "0000",
            "si": "0000"
          },
          "col3": {
            "en": "0",
            "si": "0"
          },
          "col4": {
            "en": "0",
            "si": "0"
          }
        },
        {
          "col1": {
            "en": "1",
            "si": "1"
          },
          "col2": {
            "en": "0001",
            "si": "0001"
          },
          "col3": {
            "en": "1",
            "si": "1"
          },
          "col4": {
            "en": "1",
            "si": "1"
          }
        },
        {
          "col1": {
            "en": "2",
            "si": "2"
          },
          "col2": {
            "en": "0010",
            "si": "0010"
          },
          "col3": {
            "en": "2",
            "si": "2"
          },
          "col4": {
            "en": "2",
            "si": "2"
          }
        },
        {
          "col1": {
            "en": "3",
            "si": "3"
          },
          "col2": {
            "en": "0011",
            "si": "0011"
          },
          "col3": {
            "en": "3",
            "si": "3"
          },
          "col4": {
            "en": "3",
            "si": "3"
          }
        },
        {
          "col1": {
            "en": "4",
            "si": "4"
          },
          "col2": {
            "en": "0100",
            "si": "0100"
          },
          "col3": {
            "en": "4",
            "si": "4"
          },
          "col4": {
            "en": "4",
            "si": "4"
          }
        },
        {
          "col1": {
            "en": "5",
            "si": "5"
          },
          "col2": {
            "en": "0101",
            "si": "0101"
          },
          "col3": {
            "en": "5",
            "si": "5"
          },
          "col4": {
            "en": "5",
            "si": "5"
          }
        },
        {
          "col1": {
            "en": "6",
            "si": "6"
          },
          "col2": {
            "en": "0110",
            "si": "0110"
          },
          "col3": {
            "en": "6",
            "si": "6"
          },
          "col4": {
            "en": "6",
            "si": "6"
          }
        },
        {
          "col1": {
            "en": "7",
            "si": "7"
          },
          "col2": {
            "en": "0111",
            "si": "0111"
          },
          "col3": {
            "en": "7",
            "si": "7"
          },
          "col4": {
            "en": "7",
            "si": "7"
          }
        },
        {
          "col1": {
            "en": "8",
            "si": "8"
          },
          "col2": {
            "en": "1000",
            "si": "1000"
          },
          "col3": {
            "en": "10",
            "si": "10"
          },
          "col4": {
            "en": "8",
            "si": "8"
          }
        },
        {
          "col1": {
            "en": "9",
            "si": "9"
          },
          "col2": {
            "en": "1001",
            "si": "1001"
          },
          "col3": {
            "en": "11",
            "si": "11"
          },
          "col4": {
            "en": "9",
            "si": "9"
          }
        },
        {
          "col1": {
            "en": "10",
            "si": "10"
          },
          "col2": {
            "en": "1010",
            "si": "1010"
          },
          "col3": {
            "en": "12",
            "si": "12"
          },
          "col4": {
            "en": "A",
            "si": "A"
          }
        },
        {
          "col1": {
            "en": "11",
            "si": "11"
          },
          "col2": {
            "en": "1011",
            "si": "1011"
          },
          "col3": {
            "en": "13",
            "si": "13"
          },
          "col4": {
            "en": "B",
            "si": "B"
          }
        },
        {
          "col1": {
            "en": "12",
            "si": "12"
          },
          "col2": {
            "en": "1100",
            "si": "1100"
          },
          "col3": {
            "en": "14",
            "si": "14"
          },
          "col4": {
            "en": "C",
            "si": "C"
          }
        },
        {
          "col1": {
            "en": "13",
            "si": "13"
          },
          "col2": {
            "en": "1101",
            "si": "1101"
          },
          "col3": {
            "en": "15",
            "si": "15"
          },
          "col4": {
            "en": "D",
            "si": "D"
          }
        },
        {
          "col1": {
            "en": "14",
            "si": "14"
          },
          "col2": {
            "en": "1110",
            "si": "1110"
          },
          "col3": {
            "en": "16",
            "si": "16"
          },
          "col4": {
            "en": "E",
            "si": "E"
          }
        },
        {
          "col1": {
            "en": "15",
            "si": "15"
          },
          "col2": {
            "en": "1111",
            "si": "1111"
          },
          "col3": {
            "en": "17",
            "si": "17"
          },
          "col4": {
            "en": "F",
            "si": "F"
          }
        }
      ]
    },
    "examples": [
      {
        "id": "ex-widget-3.4",
        "titleEn": "Interactive Binary Switchboard",
        "titleSi": "අන්තර්ක්‍රියාකාරී ද්විමය ස්විච පුවරුව",
        "isInteractiveWidget": "binary-weight"
      }
    ],
    "checkpointQuiz": {
      "id": "q-g10-u3-4",
      "questionEn": "What is the hexadecimal equivalent of the octal number 73₈?",
      "questionSi": "73₈ අෂ්ටම සංඛ්‍යාවේ ෂඩ්දශම සමාන අගය කුමක්ද?",
      "options": [
        {
          "id": "1",
          "en": "3B₁₆",
          "si": "3B₁₆"
        },
        {
          "id": "2",
          "en": "59₁₆",
          "si": "59₁₆"
        },
        {
          "id": "3",
          "en": "4F₁₆",
          "si": "4F₁₆"
        },
        {
          "id": "4",
          "en": "73₁₆",
          "si": "73₁₆"
        }
      ],
      "correctOptionId": "1",
      "explanationEn": "Convert 73₈ to binary: 7 = 111₂, 3 = 011₂ -> 111011₂. Group into 4 bits from right: (0011)(1011)₂ = 3B₁₆.",
      "explanationSi": "73₈ ද්විමය බවට පත් කළ විට: 111011₂ වේ. දකුණේ සිට බිටු 4 කාණ්ඩ කළ විට: (0011)(1011)₂ = 3B₁₆ වේ."
    }
  },
  {
    "id": "g10-u3-st-5",
    "number": "3.5",
    "titleEn": "RGB & Hexadecimal Color Representation",
    "titleSi": "RGB සහ ෂඩ්දශමය වර්ණ නිරූපණය",
    "summaryEn": "Digital color model combining Red, Green, and Blue (0-255 per channel, 24-bit True Color) and #RRGGBB hex code calculations.",
    "summarySi": "රතු, කොළ සහ නිල් මූලික වර්ණ සංයෝජනය (0-255 පරාසය, 24-බිටු True Color) සහ #RRGGBB ෂඩ්දශම වර්ණ කේත ගණනය කිරීම.",
    "blocks": [
      {
        "id": "b-g10-u3-5-1",
        "en": "RGB Color Model & Hexadecimal #RRGGBB Structure:\nIn digital graphics, monitors, and web design, any visible color is synthesized by mixing varying intensities of Red (R), Green (G), and Blue (B). Each primary color channel is allocated 1 byte (8 bits), providing 256 discrete intensity levels ranging from 0 (minimum/dark) to 255 (maximum/full brightness). Combining all three channels creates 24-bit True Color: 2²⁴ = 16,777,216 distinct possible colors. In web systems (HTML/CSS), colors are written as a 6-character hexadecimal code preceded by '#' or '&H': #RRGGBB, where the first 2 hex digits represent Red (00₁₆ to FF₁₆), the middle 2 represent Green, and the last 2 represent Blue.",
        "si": "RGB වර්ණ ආකෘතිය සහ #RRGGBB ෂඩ්දශම ව්‍යුහය:\nඩිජිටල් ප්‍රස්තාරික, මොනිටර් සහ වෙබ් අඩවි නිර්මාණයේදී රතු (Red), කොළ (Green) සහ නිල් (Blue) යන මූලික වර්ණ තුනෙහි විවිධ තීව්‍රතා මට්ටම් මිශ්‍ර කිරීමෙන් ඕනෑම වර්ණයක් සාදා ගත හැක. එක් එක් මූලික වර්ණ මාර්ගයට බයිට 1ක් (බිටු 8ක්) වෙන් කර ඇති බැවින්, 0 (අවම/අඳුරු) සිට 255 (උපරිම දීප්තිය) දක්වා වෙනස් තීව්‍රතා මට්ටම් 256ක් පවතී. මෙම වර්ණ 3 එකතු වීමෙන් 24-බිටු True Color නිර්මාණය වේ: 2²⁴ = 16,777,216 (මිලියන 16.7කට අධික) විවිධ වර්ණ සංයෝජන. වෙබ් පිටුවල (HTML/CSS) මෙම වර්ණ '#' හෝ '&H' සංකේතය සහිත අක්ෂර 6ක ෂඩ්දශම කේතයක් ලෙස ලියනු ලැබේ: #RRGGBB. මෙහි පළමු අකුරු දෙකෙන් රතු (00₁₆ සිට FF₁₆ දක්වා), මැද අකුරු දෙකෙන් කොළ, සහ අවසාන අකුරු දෙකෙන් නිල් නිරූපණය වේ.",
        "highlightTerm": "RGB & Hex Color Structure"
      },
      {
        "id": "b-g10-u3-5-2",
        "en": "Step-by-Step Color Conversion Algorithm:\nTo convert a decimal RGB(R, G, B) value into hexadecimal #RRGGBB:\n1. Divide each decimal component (0–255) by 16.\n2. The quotient gives the first hex digit, and the remainder gives the second hex digit (replacing 10–15 with A–F).\n3. Concatenate the two-digit hex representations in order: Red + Green + Blue.\n* Official Textbook Table 3.13 Examples:\n  - Dark Purple: RGB(135, 31, 120) → Red: 135 ÷ 16 = 8 r 7 → 87₁₆; Green: 31 ÷ 16 = 1 r 15 (F) → 1F₁₆; Blue: 120 ÷ 16 = 7 r 8 → 78₁₆ => #871F78\n  - Light Pink: RGB(255, 182, 193) → #FFB6C1\n  - Sky Blue: RGB(50, 153, 204) → #3299CC\n  - Pure Green: RGB(0, 255, 0) → #00FF00\n  - Pure Yellow: RGB(255, 238, 0) → #FFEE00\n  - Pure White: RGB(255, 255, 255) → #FFFFFF\n  - Pure Black: RGB(0, 0, 0) → #000000",
        "si": "පියවරෙන් පියවර වර්ණ පරිවර්තන ඇල්ගොරිතමය:\nදශමය RGB(R, G, B) අගයක් ෂඩ්දශම #RRGGBB බවට පත් කිරීමට:\n1. එක් එක් දශම වර්ණ සංරචකය (0–255) 16 න් බෙදන්න.\n2. ලැබෙන ලබ්ධිය පළමු ෂඩ්දශම අංකය වන අතර ශේෂය දෙවන ෂඩ්දශම අංකය වේ (10–15 සඳහා A–F ආදේශ කරන්න).\n3. රතු, කොළ, නිල් යන අනුපිළිවෙළින් අකුරු 6 එකට ලියන්න.\n* නිල පෙළපොතේ 3.13 වගුවේ උදාහරණ:\n  - තද දම් පාට: RGB(135, 31, 120) → රතු: 135 ÷ 16 = 8 ශේෂය 7 → 87₁₆; කොළ: 31 ÷ 16 = 1 ශේෂය 15 (F) → 1F₁₆; නිල්: 120 ÷ 16 = 7 ශේෂය 8 → 78₁₆ => #871F78\n  - ළා රෝස පාට: RGB(255, 182, 193) → #FFB6C1\n  - අහස් නිල්: RGB(50, 153, 204) → #3299CC\n  - තනි කොළ: RGB(0, 255, 0) → #00FF00\n  - තනි කහ: RGB(255, 238, 0) → #FFEE00\n  - සුදු පාට: RGB(255, 255, 255) → #FFFFFF\n  - කළු පාට: RGB(0, 0, 0) → #000000",
        "highlightTerm": "Step-by-Step Color Conversion"
      }
    ],
    "tableData": {
      "headers": [
        {
          "en": "Name of Colour",
          "si": "වර්ණයේ නම"
        },
        {
          "en": "Hex Code",
          "si": "ෂඩ්දශම කේතය"
        },
        {
          "en": "Red (R)",
          "si": "රතු (0-255)"
        },
        {
          "en": "Green (G)",
          "si": "කොළ (0-255)"
        },
        {
          "en": "Blue (B)",
          "si": "නිල් (0-255)"
        },
        {
          "en": "Step-by-Step Calculation",
          "si": "ගණනය කිරීම් පියවර"
        }
      ],
      "rows": [
        {
          "col1": {
            "en": "Dark Purple (තද දම්)",
            "si": "තද දම්"
          },
          "col2": {
            "en": "#871F78",
            "si": "#871F78"
          },
          "col3": {
            "en": "135",
            "si": "135"
          },
          "col4": {
            "en": "31",
            "si": "31"
          },
          "col5": {
            "en": "120",
            "si": "120"
          },
          "col6": {
            "en": "135 -> 87₁₆, 31 -> 1F₁₆, 120 -> 78₁₆",
            "si": "135 -> 87₁₆, 31 -> 1F₁₆, 120 -> 78₁₆"
          }
        },
        {
          "col1": {
            "en": "Light Pink (ළා රෝස)",
            "si": "ළා රෝස"
          },
          "col2": {
            "en": "#FFB6C1",
            "si": "#FFB6C1"
          },
          "col3": {
            "en": "255",
            "si": "255"
          },
          "col4": {
            "en": "182",
            "si": "182"
          },
          "col5": {
            "en": "193",
            "si": "193"
          },
          "col6": {
            "en": "255 -> FF₁₆, 182 -> B6₁₆, 193 -> C1₁₆",
            "si": "255 -> FF₁₆, 182 -> B6₁₆, 193 -> C1₁₆"
          }
        },
        {
          "col1": {
            "en": "Sky Blue (අහස් නිල්)",
            "si": "අහස් නිල්"
          },
          "col2": {
            "en": "#3299CC",
            "si": "#3299CC"
          },
          "col3": {
            "en": "50",
            "si": "50"
          },
          "col4": {
            "en": "153",
            "si": "153"
          },
          "col5": {
            "en": "204",
            "si": "204"
          },
          "col6": {
            "en": "50 -> 32₁₆, 153 -> 99₁₆, 204 -> CC₁₆",
            "si": "50 -> 32₁₆, 153 -> 99₁₆, 204 -> CC₁₆"
          }
        },
        {
          "col1": {
            "en": "Pure Green (තනි කොළ)",
            "si": "තනි කොළ"
          },
          "col2": {
            "en": "#00FF00",
            "si": "#00FF00"
          },
          "col3": {
            "en": "0",
            "si": "0"
          },
          "col4": {
            "en": "255",
            "si": "255"
          },
          "col5": {
            "en": "0",
            "si": "0"
          },
          "col6": {
            "en": "0 -> 00₁₆, 255 -> FF₁₆, 0 -> 00₁₆",
            "si": "0 -> 00₁₆, 255 -> FF₁₆, 0 -> 00₁₆"
          }
        },
        {
          "col1": {
            "en": "Pure Yellow (තනි කහ)",
            "si": "තනි කහ"
          },
          "col2": {
            "en": "#FFEE00",
            "si": "#FFEE00"
          },
          "col3": {
            "en": "255",
            "si": "255"
          },
          "col4": {
            "en": "238",
            "si": "238"
          },
          "col5": {
            "en": "0",
            "si": "0"
          },
          "col6": {
            "en": "255 -> FF₁₆, 238 -> EE₁₆, 0 -> 00₁₆",
            "si": "255 -> FF₁₆, 238 -> EE₁₆, 0 -> 00₁₆"
          }
        }
      ]
    },
    "examples": [
      {
        "id": "ex-widget-3.5",
        "titleEn": "Interactive 24-Bit RGB Color Chamber",
        "titleSi": "අන්තර්ක්‍රියාකාරී 24-බිටු RGB වර්ණ කුටිය",
        "isInteractiveWidget": "hex-vat"
      }
    ],
    "checkpointQuiz": {
      "id": "q-g10-u3-5",
      "questionEn": "What is the 6-character hexadecimal colour code for the primary colour Pure Blue with RGB(0, 0, 255)?",
      "questionSi": "RGB(0, 0, 255) සහිත තනි නිල් (Pure Blue) මූලික වර්ණයෙහි අක්ෂර 6 ෂඩ්දශම වර්ණ කේතය කුමක්ද?",
      "options": [
        {
          "id": "1",
          "en": "#0000FF",
          "si": "#0000FF"
        },
        {
          "id": "2",
          "en": "#FF0000",
          "si": "#FF0000"
        },
        {
          "id": "3",
          "en": "#00FF00",
          "si": "#00FF00"
        },
        {
          "id": "4",
          "en": "#000016",
          "si": "#000016"
        }
      ],
      "correctOptionId": "1",
      "explanationEn": "In #RRGGBB, Red=0 (00), Green=0 (00), and Blue=255 (FF), yielding #0000FF.",
      "explanationSi": "#RRGGBB ආකෘතියේ රතු=0 (00), කොළ=0 (00) සහ නිල්=255 (FF) වන බැවින් #0000FF ලැබේ."
    }
  },
  {
    "id": "g10-u3-st-6",
    "number": "3.6",
    "titleEn": "Data Storage Capacity & Capacity Conversions",
    "titleSi": "දත්ත ආචයන ධාරිතාව සහ ධාරිතා පරිවර්තන",
    "summaryEn": "Hierarchy of digital capacity units from Bit to Petabyte (2¹⁰=1024 multiplier), storage media capacities, and file storage calculation problems.",
    "summarySi": "බිටුවේ සිට පෙටාබයිටය දක්වා ධාරිතා ඒකක ධූරාවලිය (2¹⁰=1024 ගුණාකාරය), ආචයන මාධ්‍ය ධාරිතාවන් සහ විභාග ගොනු ගණනය කිරීම්.",
    "blocks": [
      {
        "id": "b-g10-u3-6-1",
        "en": "Storage Capacity Hierarchy & Binary Multiplier Formulas:\nDigital storage uses binary powers of 2 (2¹⁰ = 1024) rather than decimal thousands (1000):\n* Bit (b): Smallest unit of data; a single binary digit (0 or 1).\n* Nibble: A cluster of 4 bits (0.5 Byte).\n* Byte (B): A cluster of 8 bits; can represent 2⁸ = 256 distinct values or 1 ASCII character.\n* Kilobyte (KB): 1 KB = 2¹⁰ Bytes = 1024 Bytes.\n* Megabyte (MB): 1 MB = 2²⁰ Bytes = 1024 KB = 1,048,576 Bytes.\n* Gigabyte (GB): 1 GB = 2³⁰ Bytes = 1024 MB = 1,073,741,824 Bytes.\n* Terabyte (TB): 1 TB = 2⁴⁰ Bytes = 1024 GB = 1,099,511,627,776 Bytes.\n* Petabyte (PB): 1 PB = 2⁵⁰ Bytes = 1024 TB.\n* Mathematical Conversion Rule: To convert from a larger unit to a smaller unit, MULTIPLY by 1024 per step. To convert from a smaller unit to a larger unit, DIVIDE by 1024 per step.",
        "si": "ධාරිතා ධූරාවලිය සහ ගුණාකාර සූත්‍ර:\nඩිජිටල් මතක ධාරිතාව මනිනු ලබන්නේ දශම 1000 න් නොව, 2 හි බලයක් වන 2¹⁰ = 1024 ගුණාකාරයෙනි:\n* බිටු (Bit): කුඩාම දත්ත ඒකකයයි; තනි ද්විමය සංකේතයකි (0 හෝ 1).\n* නිබල (Nibble): බිටු 4ක එකතුවකි (බයිට 0.5කි).\n* බයිට (Byte): බිටු 8ක එකතුවකි; අගයන් 2⁸ = 256ක් හෝ 1 ASCII අක්ෂරයක් නිරූපණය කරයි.\n* කිලෝබයිට (KB): 1 KB = 2¹⁰ Bytes = 1024 Bytes.\n* මෙගාබයිට (MB): 1 MB = 2²⁰ Bytes = 1024 KB = 1,048,576 Bytes.\n* ගිගාබයිට (GB): 1 GB = 2³⁰ Bytes = 1024 MB = 1,073,741,824 Bytes.\n* ටෙරාබයිට (TB): 1 TB = 2⁴⁰ Bytes = 1024 GB = 1,099,511,627,776 Bytes.\n* පෙටාබයිට (PB): 1 PB = 2⁵⁰ Bytes = 1024 TB.\n* ගණිතමය පරිවර්තන නීතිය: විශාල ඒකකයක සිට කුඩා ඒකකයකට හැරවීමේදී පියවරකට 1024 න් ගුණ කරන්න. කුඩා ඒකකයක සිට විශාල ඒකකයකට හැරවීමේදී පියවරකට 1024 න් බෙදන්න.",
        "highlightTerm": "Storage Capacity Hierarchy"
      },
      {
        "id": "b-g10-u3-6-2",
        "en": "Storage Media Capacities & File Storage Calculations:\n* Official Textbook Storage Media Capacities:\n  - CD-ROM: 700 MB\n  - DVD-ROM: 4.7 GB (Single Layer) / 8.5 GB (Dual Layer)\n  - Blu-ray Disc: 25 GB (Single Layer) / 50 GB (Dual Layer)\n  - Magnetic Tape / Hard Drive: Multiple Terabytes (1 TB - 16 TB+)\n* Textbook Text Page Equivalences:\n  - 1 typed A4 page ≈ 2000 characters ≈ 2 KB.\n  - 1 MB ≈ 500 typed text pages.\n  - 1 GB ≈ 500,000 typed text pages.\n* O/L Exam Calculation Pitfall: When calculating whether files fit into a storage drive (e.g., 256 MB USB drive vs 0.3 GB video file), always convert all values to the SAME UNIT (e.g., 0.3 GB = 0.3 × 1024 MB = 307.2 MB > 256 MB, so the file does NOT fit!).",
        "si": "ආචයන මාධ්‍ය ධාරිතාවන් සහ ගොනු ආචයන ගණනය කිරීම්:\n* නිල පෙළපොතේ ආචයන මාධ්‍ය ධාරිතාවන්:\n  - CD-ROM: 700 MB\n  - DVD-ROM: 4.7 GB (තනි ස්තර) / 8.5 GB (ද්විත්ව ස්තර)\n  - බ්ලූ-රේ තැටිය (Blu-ray): 25 GB (තනි ස්තර) / 50 GB (ද්විත්ව ස්තර)\n  - චුම්භක පටි / දෘඪ තැටි: ටෙරාබයිට ගණනාවක් (1 TB - 16 TB+)\n* පෙළපොතේ මුද්‍රිත පිටු සමානතාවන්:\n  - 1 මුද්‍රිත A4 පිටුවක් ≈ අක්ෂර 2000 ≈ 2 KB.\n  - 1 MB ≈ මුද්‍රිත පිටු 500ක් පමණ වේ.\n  - 1 GB ≈ මුද්‍රිත පිටු 500,000ක් පමණ වේ.\n* O/L විභාග ගණනය කිරීම් උගුල: ලිපිගොනු ධාවකයකට ගැළපේදැයි ගණනය කිරීමේදී (උදා: 256 MB ෆ්ලෑෂ් ධාවකය සහ 0.3 GB වීඩියෝ ගොනුව), සෑම විටම සියලු අගයන් එකම ඒකකයකට හරවන්න (0.3 GB = 0.3 × 1024 MB = 307.2 MB > 256 MB, එබැවින් ගොනුව ඇතුළත් කළ නොහැක!).",
        "highlightTerm": "Storage Media Capacities & File Fitting"
      }
    ],
    "tableData": {
      "headers": [
        {
          "en": "Storage Unit",
          "si": "ආචයන ඒකකය"
        },
        {
          "en": "Binary Power",
          "si": "2 හි බලය"
        },
        {
          "en": "Exact Bytes",
          "si": "නියමිත බයිට ගණන"
        },
        {
          "en": "Textbook Approximation",
          "si": "පෙළපොතේ සමානතාව"
        }
      ],
      "rows": [
        {
          "col1": {
            "en": "1 Kilobyte (KB)",
            "si": "1 KB"
          },
          "col2": {
            "en": "2¹⁰ Bytes",
            "si": "2¹⁰ Bytes"
          },
          "col3": {
            "en": "1,024 Bytes",
            "si": "1,024 Bytes"
          },
          "col4": {
            "en": "≈ Half of a typed A4 page",
            "si": "මුද්‍රිත පිටු භාගයක් පමණ"
          }
        },
        {
          "col1": {
            "en": "1 Megabyte (MB)",
            "si": "1 MB"
          },
          "col2": {
            "en": "2²⁰ Bytes",
            "si": "2²⁰ Bytes"
          },
          "col3": {
            "en": "1,048,576 Bytes",
            "si": "1,048,576 Bytes"
          },
          "col4": {
            "en": "≈ 500 typed text pages",
            "si": "මුද්‍රිත පිටු 500ක් පමණ"
          }
        },
        {
          "col1": {
            "en": "1 Gigabyte (GB)",
            "si": "1 GB"
          },
          "col2": {
            "en": "2³⁰ Bytes",
            "si": "2³⁰ Bytes"
          },
          "col3": {
            "en": "1,073,741,824 Bytes",
            "si": "1,073,741,824 Bytes"
          },
          "col4": {
            "en": "≈ 500,000 typed pages (large library)",
            "si": "මුද්‍රිත පිටු 500,000ක් පමණ"
          }
        },
        {
          "col1": {
            "en": "1 Terabyte (TB)",
            "si": "1 TB"
          },
          "col2": {
            "en": "2⁴⁰ Bytes",
            "si": "2⁴⁰ Bytes"
          },
          "col3": {
            "en": "1,099,511,627,776 Bytes",
            "si": "1,099,511,627,776 Bytes"
          },
          "col4": {
            "en": "≈ 500 million typed pages",
            "si": "මුද්‍රිත පිටු මිලියන 500ක් පමණ"
          }
        },
        {
          "col1": {
            "en": "1 Petabyte (PB)",
            "si": "1 PB"
          },
          "col2": {
            "en": "2⁵⁰ Bytes",
            "si": "2⁵⁰ Bytes"
          },
          "col3": {
            "en": "1,125,899,906,842,624 Bytes",
            "si": "1,125,899,906,842,624 Bytes"
          },
          "col4": {
            "en": "≈ Entire national archive library",
            "si": "ජාතික ලේඛනාරක්ෂක ගබඩාවක්"
          }
        }
      ]
    },
    "checkpointQuiz": {
      "id": "q-g10-u3-6",
      "questionEn": "How many Megabytes (MB) are exactly equal to 1 Terabyte (TB)?",
      "questionSi": "1 Terabyte (TB) සඳහා හරියටම සමාන වන Megabytes (MB) ප්‍රමාණය කොපමණද?",
      "options": [
        {
          "id": "1",
          "en": "1,048,576 MB (1024 × 1024 MB)",
          "si": "1,048,576 MB (1024 × 1024 MB)"
        },
        {
          "id": "2",
          "en": "1,000,000 MB",
          "si": "1,000,000 MB"
        },
        {
          "id": "3",
          "en": "1024 MB",
          "si": "1024 MB"
        },
        {
          "id": "4",
          "en": "2048 MB",
          "si": "2048 MB"
        }
      ],
      "correctOptionId": "1",
      "explanationEn": "1 TB = 1024 GB, and 1 GB = 1024 MB. Therefore, 1 TB = 1024 × 1024 = 1,048,576 MB.",
      "explanationSi": "1 TB = 1024 GB වන අතර 1 GB = 1024 MB වේ. එබැවින් 1 TB = 1024 × 1024 = 1,048,576 MB වේ."
    }
  },
  {
    "id": "g10-u3-st-7",
    "number": "3.7",
    "titleEn": "Coding Systems in Computers",
    "titleSi": "පරිගණකවල භාවිත වන කේත ක්‍රම",
    "summaryEn": "Evolution of computer coding systems: BCD, EBCDIC, ASCII (7-bit and 8-bit), and Unicode international character representation.",
    "summarySi": "පරිගණක කේතන ක්‍රමවල විකාශනය: BCD, EBCDIC, ASCII (බිටු 7 සහ බිටු 8) සහ යුනිකෝඩ් විශ්ව බහුභාෂා කේතනය.",
    "blocks": [
      {
        "id": "b-g10-u3-7-1",
        "en": "Evolution of Character Coding Standards:\n* BCD (Binary Coded Decimal): 4 bits per decimal digit (codes 0000₂ to 1001₂ represent decimal 0–9). Only used for numeric values.\n* EBCDIC (Extended BCD Interchange Code): 8-bit character encoding system developed by IBM for mainframe computers (2⁸ = 256 characters).\n* ASCII (American Standard Code for Information Interchange):\n  - Standard ASCII: 7 bits per character, supporting 2⁷ = 128 unique characters (codes 0–127: English letters, numbers, punctuation, and control characters).\n  - Extended ASCII: 8 bits per character, supporting 2⁸ = 256 unique characters (codes 0–255, including graphical characters and accents).\n* Unicode: The modern universal character encoding standard using 16 to 32 bits (2¹⁶ = 65,536 to over 1,000,000 code points). Unicode assigns a unique identifier to every character across all living world languages including Sinhala, Tamil, Japanese, and emoji.",
        "si": "අක්ෂර කේතන ප්‍රමිතීන්ගේ විකාශනය:\n* BCD (ද්විමය කේතනය කළ දශමය): එක් දශම ඉලක්කමකට බිටු 4ක් (0000₂ සිට 1001₂ දක්වා සංකේත 0–9 නිරූපණය කරයි). සංඛ්‍යා සඳහා පමණි.\n* EBCDIC: IBM සමාගම විසින් මහා පරිගණක සඳහා නිර්මාණය කළ බිටු 8ක අක්ෂර කේතන ක්‍රමයකි (අක්ෂර 2⁸ = 256ක්).\n* ASCII (තොරතුරු හුවමාරුව සඳහා වූ ඇමරිකානු සම්මත කේතය):\n  - සම්මත ASCII: එක් අක්ෂරයකට බිටු 7ක් (2⁷ = 128 අක්ෂර, අගයන් 0–127: ඉංග්‍රීසි අකුරු, සංඛ්‍යා, විරාම ලකුණු සහ පාලන අක්ෂර).\n  - විස්තෘත ASCII: එක් අක්ෂරයකට බිටු 8ක් (2⁸ = 256 අක්ෂර, අගයන් 0–255).\n* යුනිකෝඩ් (Unicode): බිටු 16 සිට 32 දක්වා භාවිත වන නූතන විශ්ව අක්ෂර කේතන ප්‍රමිතියයි (2¹⁶ = 65,536 සිට මිලියනයකට වඩා වැඩි කේත ලක්ෂ්‍ය). සිංහල, දෙමළ, ජපන් ඇතුළු ලොව සියලුම ජීවමාන භාෂාවල අක්ෂර සහ ඉමෝජි එකම සම්මතයක් යටතේ නිරූපණය කරයි.",
        "highlightTerm": "Evolution of Character Coding Standards"
      },
      {
        "id": "b-g10-u3-7-2",
        "en": "Sequential ASCII Character Calculations (O/L Exam Focus):\nIn ASCII, characters are assigned sequential numerical codes. Knowing one reference code allows calculating adjacent letters:\n* Uppercase English Letters ('A' to 'Z'): 'A' = 65 (1000001₂), 'B' = 66, 'C' = 67, ..., 'Z' = 90 (1011010₂).\n* Lowercase English Letters ('a' to 'z'): 'a' = 97 (1100001₂), 'b' = 98, ..., 'z' = 122.\n* Digits ('0' to '9'): '0' = 48 (0110000₂), '1' = 49, ..., '9' = 57.\n* Space: Code 32 (00100000₂).\n* Case Shift Rule: The difference between uppercase and lowercase is exactly 32 (2⁵ bit). Adding 32 converts uppercase to lowercase ('A' 65 + 32 = 97 'a').\n* Exam Problem Example: If character 'Z' is 1011010₂ (90₁₀), what is character 'W'? Since 'W' is 3 letters before 'Z', its code is 90 - 3 = 87₁₀ = 1010111₂.",
        "si": "අනුක්‍රමික ASCII අක්ෂර ගණනය කිරීම් (O/L විභාග මූලික):\nASCII කේත ක්‍රමයේදී අක්ෂර අනුක්‍රමික සංඛ්‍යාත්මක අගයන් ලෙස සකසා ඇත. එක් මූලික අගයක් දැනගත් විට යාබද අක්ෂර පහසුවෙන් ගණනය කළ හැක:\n* ඉංග්‍රීසි කැපිටල් අකුරු ('A' සිට 'Z'): 'A' = 65 (1000001₂), 'B' = 66, 'C' = 67, ..., 'Z' = 90 (1011010₂).\n* ඉංග්‍රීසි සිම්පල් අකුරු ('a' සිට 'z'): 'a' = 97 (1100001₂), 'b' = 98, ..., 'z' = 122.\n* ඉලක්කම් ('0' සිට '9'): '0' = 48 (0110000₂), '1' = 49, ..., '9' = 57.\n* හිස්තැන (Space): කේතය 32 (00100000₂).\n* කැපිටල්-සිම්පල් වෙනස: කැපිටල් හා සිම්පල් අතර වෙනස හරියටම 32 කි (2⁵ බිටුව). 32ක් එකතු කළ විට කැපිටල් අකුර සිම්පල් වේ ('A' 65 + 32 = 97 'a').\n* විභාග ගැටලු උදාහරණය: 'Z' අක්ෂරයේ කේතය 1011010₂ (90₁₀) නම්, 'W' හි කේතය කුමක්ද? 'W' යනු 'Z' ට අකුරු 3කට පෙර අකුර බැවින්, එහි අගය 90 - 3 = 87₁₀ = 1010111₂ වේ.",
        "highlightTerm": "Sequential ASCII Calculations"
      }
    ],
    "tableData": {
      "headers": [
        {
          "en": "Encoding Standard",
          "si": "කේතන ප්‍රමිතිය"
        },
        {
          "en": "Bits per Character",
          "si": "අක්ෂරයකට බිටු"
        },
        {
          "en": "Total Character Capacity",
          "si": "මුළු අක්ෂර ධාරිතාව"
        },
        {
          "en": "Primary Application",
          "si": "ප්‍රධාන භාවිතය"
        },
        {
          "en": "Supports Sinhala / Tamil?",
          "si": "සිංහල / දෙමළ සඳහා?"
        }
      ],
      "rows": [
        {
          "col1": {
            "en": "BCD",
            "si": "BCD"
          },
          "col2": {
            "en": "4 bits",
            "si": "බිටු 4"
          },
          "col3": {
            "en": "16 (0–9 used)",
            "si": "16 (0-9 දක්වා)"
          },
          "col4": {
            "en": "Early decimal calculators",
            "si": "මුල් කාලීන ගණක යන්ත්‍ර"
          },
          "col5": {
            "en": "No",
            "si": "නැත"
          }
        },
        {
          "col1": {
            "en": "EBCDIC",
            "si": "EBCDIC"
          },
          "col2": {
            "en": "8 bits",
            "si": "බිටු 8"
          },
          "col3": {
            "en": "256 characters",
            "si": "අක්ෂර 256"
          },
          "col4": {
            "en": "IBM Mainframe Computers",
            "si": "IBM මහා පරිගණක"
          },
          "col5": {
            "en": "No",
            "si": "නැත"
          }
        },
        {
          "col1": {
            "en": "Standard ASCII",
            "si": "සම්මත ASCII"
          },
          "col2": {
            "en": "7 bits",
            "si": "බිටු 7"
          },
          "col3": {
            "en": "128 characters (0–127)",
            "si": "අක්ෂර 128"
          },
          "col4": {
            "en": "Standard English PCs & Teleprinters",
            "si": "සම්මත ඉංග්‍රීසි පරිගණක"
          },
          "col5": {
            "en": "No",
            "si": "නැත"
          }
        },
        {
          "col1": {
            "en": "Extended ASCII",
            "si": "විස්තෘත ASCII"
          },
          "col2": {
            "en": "8 bits",
            "si": "බිටු 8"
          },
          "col3": {
            "en": "256 characters (0–255)",
            "si": "අක්ෂර 256"
          },
          "col4": {
            "en": "European character extensions",
            "si": "යුරෝපීය අක්ෂර ඇතුළත් කිරීම"
          },
          "col5": {
            "en": "No",
            "si": "නැත"
          }
        },
        {
          "col1": {
            "en": "Unicode (UTF-8/16/32)",
            "si": "යුනිකෝඩ්"
          },
          "col2": {
            "en": "16 to 32 bits",
            "si": "බිටු 16 සිට 32"
          },
          "col3": {
            "en": "> 1,000,000 characters",
            "si": "අක්ෂර 1,000,000+"
          },
          "col4": {
            "en": "Modern Operating Systems & Web worldwide",
            "si": "නූතන මෙහෙයුම් පද්ධති හා වෙබ් අඩවි"
          },
          "col5": {
            "en": "Yes (Full Native Parity)",
            "si": "ඔව් (පූර්ණ සහයෝගය)"
          }
        }
      ]
    },
    "checkpointQuiz": {
      "id": "q-g10-u3-7",
      "questionEn": "Why is Unicode preferred over ASCII in modern computing systems and web technologies?",
      "questionSi": "නූතන පරිගණක පද්ධති සහ වෙබ් තාක්ෂණයන් තුළ ASCII වලට වඩා යුනිකෝඩ් (Unicode) භාවිත කිරීමට ප්‍රධාන හේතුව කුමක්ද?",
      "options": [
        {
          "id": "1",
          "en": "It can represent characters of all world languages (including Sinhala and Tamil) and symbols in a single universal standard",
          "si": "සිංහල සහ දෙමළ ඇතුළු ලොව සියලුම භාෂාවල අක්ෂර සහ සංකේත එකම විශ්ව ප්‍රමිතියකින් නිරූපණය කළ හැකි වීම"
        },
        {
          "id": "2",
          "en": "It requires fewer bits per character than ASCII",
          "si": "එයට ASCII වලට වඩා අඩු බිටු ගණනක් අවශ්‍ය වීම"
        },
        {
          "id": "3",
          "en": "It is only used on mechanical computers",
          "si": "එය යාන්ත්‍රික පරිගණකවල පමණක් භාවිත වීම"
        },
        {
          "id": "4",
          "en": "It cannot encode numeric digits",
          "si": "එයට සංඛ්‍යාත්මක ඉලක්කම් කේතනය කළ නොහැකි වීම"
        }
      ],
      "correctOptionId": "1",
      "explanationEn": "Unicode provides a unique numeric code point for every character across all living scripts worldwide, transcending the 128/256 character limitation of ASCII.",
      "explanationSi": "යුනිකෝඩ් මගින් ASCII සතු අක්ෂර 128/256 සීමාව ඉක්මවා ලොව සියලුම භාෂාවල අක්ෂර මිලියනයකට වඩා නිරූපණය කරයි."
    }
  }
],
  pastPaperQuestions: [
  {
    "id": "pp-g10-u3-2020-1",
    "year": 2020,
    "paperType": "Paper I",
    "badgeText": "2020 O/L Paper I - Question 33",
    "questionEn": "Which of the following contains numbers in ascending order?",
    "questionSi": "පහත කුමන වරණයෙහි දී ඇති සංඛ්‍යා හතරෙහි ආරෝහණ පටිපාටියට දක්වේ ද?",
    "type": "mcq",
    "options": [
      {
        "id": "1",
        "en": "64₁₆, 226₈, 200₁₀, 101011₂",
        "si": "64₁₆, 226₈, 200₁₀, 101011₂"
      },
      {
        "id": "2",
        "en": "101011₂, 64₁₆, 226₈, 200₁₀",
        "si": "101011₂, 64₁₆, 226₈, 200₁₀"
      },
      {
        "id": "3",
        "en": "101011₂, 64₁₆, 200₁₀, 226₈",
        "si": "101011₂, 64₁₆, 200₁₀, 226₈"
      },
      {
        "id": "4",
        "en": "200₁₀, 226₈, 101011₂, 64₁₆",
        "si": "200₁₀, 226₈, 101011₂, 64₁₆"
      }
    ],
    "correctOptionId": "1",
    "explanationEn": "Verbatim official examination question from 2020 O/L Paper I - Question 33.",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper I - Question 33."
  },
  {
    "id": "pp-g10-u3-2020-2",
    "year": 2020,
    "paperType": "Paper II",
    "badgeText": "2020 O/L Paper II - Question 01 (iii) (a)",
    "questionEn": "1. (iii) (a) Convert the octal number 867₈ to its binary equivalent. Show the major steps of your calculation.\" *(Note: Official paper text)*",
    "questionSi": "1. (iii) (a) 867₈ අෂ්ටමය සංඛ්‍යාව එහි ද්විමය තුල්‍ය සංඛ්‍යාවට පරිවර්තනය කරන්න. ඔබේ ගණනය කිරීමේ ප්‍රධාන පියවර දක්වන්න.",
    "type": "structured",
    "sampleAnswerEn": "Octal to binary conversion: Each octal digit represents 3 binary bits.\nFor octal 867 (textbook typo note: 8 is invalid in base-8, standard 67₈ = 110 111₂ = 110111₂).",
    "sampleAnswerSi": "අෂ්ටමය සිට ද්විමය පරිවර්තනය: එක් එක් අෂ්ටමය ඉලක්කම සඳහා ද්විමය බිටු 3 බැගින් ලියනු ලැබේ.\n(67₈ = 110 111₂ = 110111₂).",
    "explanationEn": "Verbatim official examination question from 2020 O/L Paper II - Question 01 (iii) (a).",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper II - Question 01 (iii) (a)."
  },
  {
    "id": "pp-g10-u3-2021-3",
    "year": 2021,
    "paperType": "Paper II",
    "badgeText": "2021 O/L Paper II - Question 01 (iii) (a)",
    "questionEn": "1. (iii) (a) Convert 47₁₀ to its binary equivalent.",
    "questionSi": "1. (iii) (a) 47₁₀ හි ද්විමය තුල්‍ය සංඛ්‍යාවට පරිවර්තනය කරන්න.",
    "type": "structured",
    "sampleAnswerEn": "Converting decimal 47 to binary by continuous division by 2:\n47 / 2 = 23 R 1\n23 / 2 = 11 R 1\n11 / 2 = 5 R 1\n5 / 2 = 2 R 1\n2 / 2 = 1 R 0\n1 / 2 = 0 R 1\nReading remainders from bottom to top: 47₁0 = 101111₂.",
    "sampleAnswerSi": "47₁0 දශමය සංඛ්‍යාව 2 න් බෙදීමේ ක්‍රමයෙන් ද්විමය බවට පත් කිරීම:\n47 / 2 = 23 ඉතිරිය 1\n23 / 2 = 11 ඉතිරිය 1\n11 / 2 = 5 ඉතිරිය 1\n5 / 2 = 2 ඉතිරිය 1\n2 / 2 = 1 ඉතිරිය 0\n1 / 2 = 0 ඉතිරිය 1\nයට සිට ඉහළට ඉතිරි අගයන් කියවීමෙන්: 47₁0 = 101111₂.",
    "explanationEn": "Verbatim official examination question from 2021 O/L Paper II - Question 01 (iii) (a).",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2021 O/L Paper II - Question 01 (iii) (a)."
  },
  {
    "id": "pp-g10-u3-2022-4",
    "year": 2022,
    "paperType": "Paper I",
    "badgeText": "2022 O/L Paper I - Question 06",
    "questionEn": "Which of the following is the largest?",
    "questionSi": "පහත දැක්වෙන ඒවායින් විශාලතම අගය කුමක්ද?",
    "type": "mcq",
    "options": [
      {
        "id": "1",
        "en": "1000 0100₂",
        "si": "1000 0100₂"
      },
      {
        "id": "2",
        "en": "15₈",
        "si": "15₈"
      },
      {
        "id": "3",
        "en": "85₁₀",
        "si": "85₁₀"
      },
      {
        "id": "4",
        "en": "C2₁₆",
        "si": "C2₁₆"
      }
    ],
    "correctOptionId": "1",
    "explanationEn": "Verbatim official examination question from 2022 O/L Paper I - Question 06.",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2022 O/L Paper I - Question 06."
  },
  {
    "id": "pp-g10-u3-2022-5",
    "year": 2022,
    "paperType": "Paper I",
    "badgeText": "2022 O/L Paper I - Question 07",
    "questionEn": "Which of the following is the decimal equivalent of binary 1000 0101₂?",
    "questionSi": "1000 0101₂ ද්විමය සංඛ්‍යාවේ දශමය තුල්‍ය අගය කුමක්ද?",
    "type": "mcq",
    "options": [
      {
        "id": "1",
        "en": "85₁₀",
        "si": "85₁₀"
      },
      {
        "id": "2",
        "en": "133₁₀",
        "si": "133₁₀"
      },
      {
        "id": "3",
        "en": "161₁₀",
        "si": "161₁₀"
      },
      {
        "id": "4",
        "en": "266₁₀",
        "si": "266₁₀"
      }
    ],
    "correctOptionId": "1",
    "explanationEn": "Verbatim official examination question from 2022 O/L Paper I - Question 07.",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2022 O/L Paper I - Question 07."
  },
  {
    "id": "pp-g10-u3-2022-6",
    "year": 2022,
    "paperType": "Paper I",
    "badgeText": "2022 O/L Paper I - Question 08",
    "questionEn": "Which of the following is the hexadecimal equivalent of octal 1156₈?",
    "questionSi": "1156₈ අෂ්ටමය සංඛ්‍යාවේ ෂඩ්දශමය තුල්‍ය අගය කුමක්ද?",
    "type": "mcq",
    "options": [
      {
        "id": "1",
        "en": "26E₁₆",
        "si": "26E₁₆"
      },
      {
        "id": "2",
        "en": "484₁₆",
        "si": "484₁₆"
      },
      {
        "id": "3",
        "en": "109C₁₆",
        "si": "109C₁₆"
      },
      {
        "id": "4",
        "en": "2204₁₆",
        "si": "2204₁₆"
      }
    ],
    "correctOptionId": "1",
    "explanationEn": "Verbatim official examination question from 2022 O/L Paper I - Question 08.",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2022 O/L Paper I - Question 08."
  },
  {
    "id": "pp-g10-u3-2023-7",
    "year": 2023,
    "paperType": "Paper I",
    "badgeText": "2023 O/L Paper I - Question 06",
    "questionEn": "Which of the following is the octal equivalent of decimal 216₁₀?",
    "questionSi": "දශමය 216₁₀ ට තුල්‍ය අෂ්ටමය සංඛ්‍යාව කුමක්ද?",
    "type": "mcq",
    "options": [
      {
        "id": "1",
        "en": "40₈",
        "si": "40₈"
      },
      {
        "id": "2",
        "en": "43₈",
        "si": "43₈"
      },
      {
        "id": "3",
        "en": "73₈",
        "si": "73₈"
      },
      {
        "id": "4",
        "en": "330₈",
        "si": "330₈"
      }
    ],
    "correctOptionId": "1",
    "explanationEn": "Verbatim official examination question from 2023 O/L Paper I - Question 06.",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2023 O/L Paper I - Question 06."
  },
  {
    "id": "pp-g10-u3-2023-8",
    "year": 2023,
    "paperType": "Paper I",
    "badgeText": "2023 O/L Paper I - Question 07",
    "questionEn": "Which of the following is the decimal equivalent of binary 1000 1000₂?",
    "questionSi": "ද්විමය 1000 1000₂ ට තුල්‍ය දශමය සංඛ්‍යාව කුමක්ද?",
    "type": "mcq",
    "options": [
      {
        "id": "1",
        "en": "24₁₀",
        "si": "24₁₀"
      },
      {
        "id": "2",
        "en": "136₁₀",
        "si": "136₁₀"
      },
      {
        "id": "3",
        "en": "272₁₀",
        "si": "272₁₀"
      },
      {
        "id": "4",
        "en": "1024₁₀",
        "si": "1024₁₀"
      }
    ],
    "correctOptionId": "1",
    "explanationEn": "Verbatim official examination question from 2023 O/L Paper I - Question 07.",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2023 O/L Paper I - Question 07."
  },
  {
    "id": "pp-g10-u3-2023-9",
    "year": 2023,
    "paperType": "Paper I",
    "badgeText": "2023 O/L Paper I - Question 08",
    "questionEn": "Which of the following is the hexadecimal equivalent of octal 1572₈?",
    "questionSi": "අෂ්ටමය 1572₈ ට තුල්‍ය ෂඩ්දශමය සංඛ්‍යාව කුමක්ද?",
    "type": "mcq",
    "options": [
      {
        "id": "1",
        "en": "DE8₁₆",
        "si": "DE8₁₆"
      },
      {
        "id": "2",
        "en": "37A₁₆",
        "si": "37A₁₆"
      },
      {
        "id": "3",
        "en": "3710₁₆",
        "si": "3710₁₆"
      },
      {
        "id": "4",
        "en": "12562₁₆",
        "si": "12562₁₆"
      }
    ],
    "correctOptionId": "1",
    "explanationEn": "Verbatim official examination question from 2023 O/L Paper I - Question 08.",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2023 O/L Paper I - Question 08."
  },
  {
    "id": "pp-g10-u3-2024-10",
    "year": 2024,
    "paperType": "Paper I",
    "badgeText": "2024 O/L Paper I - Question 06",
    "questionEn": "Which of the following is the octal equivalent of binary 1000110₂?",
    "questionSi": "ද්විමය 1000110₂ ට තුල්‍ය අෂ්ටක සංඛ්‍යාව කුමක්ද?",
    "type": "mcq",
    "options": [
      {
        "id": "1",
        "en": "46₈",
        "si": "46₈"
      },
      {
        "id": "2",
        "en": "70₈",
        "si": "70₈"
      },
      {
        "id": "3",
        "en": "106₈",
        "si": "106₈"
      },
      {
        "id": "4",
        "en": "430₈",
        "si": "430₈"
      }
    ],
    "correctOptionId": "1",
    "explanationEn": "Verbatim official examination question from 2024 O/L Paper I - Question 06.",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2024 O/L Paper I - Question 06."
  },
  {
    "id": "pp-g10-u3-2024-11",
    "year": 2024,
    "paperType": "Paper I",
    "badgeText": "2024 O/L Paper I - Question 07",
    "questionEn": "Which of the following is the decimal equivalent of binary 10001000₂?",
    "questionSi": "ද්විමය 10001000₂ ට තුල්‍ය දශමය සංඛ්‍යාව කුමක්ද?",
    "type": "mcq",
    "options": [
      {
        "id": "1",
        "en": "64₁₀",
        "si": "64₁₀"
      },
      {
        "id": "2",
        "en": "132₁₀",
        "si": "132₁₀"
      },
      {
        "id": "3",
        "en": "136₁₀",
        "si": "136₁₀"
      },
      {
        "id": "4",
        "en": "260₁₀",
        "si": "260₁₀"
      }
    ],
    "correctOptionId": "1",
    "explanationEn": "Verbatim official examination question from 2024 O/L Paper I - Question 07.",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2024 O/L Paper I - Question 07."
  },
  {
    "id": "pp-g10-u3-2024-12",
    "year": 2024,
    "paperType": "Paper II",
    "badgeText": "2024 O/L Paper II - Question 01 (iii)",
    "questionEn": "1. (iii) (a) Write down the binary equivalent of 74₁₀.\n  (b) Write down the hexadecimal equivalent of 1046₈.",
    "questionSi": "1. (iii) (a) 74₁₀ හි ද්විමය තුල්‍ය සංඛ්‍යාව ලියන්න.\n  (b) 1046₈ හි ෂඩ්දශමය තුල්‍ය සංඛ්‍යාව ලියන්න.",
    "type": "structured",
    "sampleAnswerEn": "Binary addition: 1101₂ + 1011₂ = 11000₂.\nBinary subtraction: 1101₂ - 1001₂ = 0100₂ (or 100₂).",
    "sampleAnswerSi": "ද්විමය එකතු කිරීම: 1101₂ + 1011₂ = 11000₂.\nද්විමය අඩු කිරීම: 1101₂ - 1001₂ = 0100₂ (හෝ 100₂).",
    "explanationEn": "Verbatim official examination question from 2024 O/L Paper II - Question 01 (iii).",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2024 O/L Paper II - Question 01 (iii)."
  },
  {
    "id": "pp-g10-u3-2020-13",
    "year": 2020,
    "paperType": "Paper II",
    "badgeText": "2020 O/L Paper II - Question 01 (iii) (b)",
    "questionEn": "1. (iii) (b) If 1011010₂ represents character 'Z' in ASCII code, what is the ASCII code for character 'X'?",
    "questionSi": "1. (iii) (b) 1011010₂ මගින් ASCII හි 'Z' නිරූපණය වේ නම්, 'X' අක්ෂරයේ ASCII කේතය කුමක්ද?",
    "type": "structured",
    "sampleAnswerEn": "Octal to binary conversion: Each octal digit represents 3 binary bits.\nFor octal 867 (textbook typo note: 8 is invalid in base-8, standard 67₈ = 110 111₂ = 110111₂).",
    "sampleAnswerSi": "අෂ්ටමය සිට ද්විමය පරිවර්තනය: එක් එක් අෂ්ටමය ඉලක්කම සඳහා ද්විමය බිටු 3 බැගින් ලියනු ලැබේ.\n(67₈ = 110 111₂ = 110111₂).",
    "explanationEn": "Verbatim official examination question from 2020 O/L Paper II - Question 01 (iii) (b).",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper II - Question 01 (iii) (b)."
  },
  {
    "id": "pp-g10-u3-2021-14",
    "year": 2021,
    "paperType": "Paper II",
    "badgeText": "2021 O/L Paper II - Question 01 (iii) (b)",
    "questionEn": "1. (iii) (b) Following is an extract from the ASCII table. Write down the correct octal value replacement for the '?' symbol.\n  Character: a, Decimal: 97, Hexadecimal: 61, Binary: 1100001, Octal: ?",
    "questionSi": "1. (iii) (b) මෙහි දැක්වෙන්නේ ASCII වගුවේ උපුටා ගැනීමකි. '?' ලකුණින් දක්වා ඇති දෙයට අදාළ අෂ්ටක අගය ලියා දක්වන්න.\n  අක්ෂරය: a, දශමය: 97, ෂඩ්දශමය: 61, ද්විමය: 1100001, අෂ්ටමය: ?",
    "type": "structured",
    "sampleAnswerEn": "Converting decimal 47 to binary by continuous division by 2:\n47 / 2 = 23 R 1\n23 / 2 = 11 R 1\n11 / 2 = 5 R 1\n5 / 2 = 2 R 1\n2 / 2 = 1 R 0\n1 / 2 = 0 R 1\nReading remainders from bottom to top: 47₁0 = 101111₂.",
    "sampleAnswerSi": "47₁0 දශමය සංඛ්‍යාව 2 න් බෙදීමේ ක්‍රමයෙන් ද්විමය බවට පත් කිරීම:\n47 / 2 = 23 ඉතිරිය 1\n23 / 2 = 11 ඉතිරිය 1\n11 / 2 = 5 ඉතිරිය 1\n5 / 2 = 2 ඉතිරිය 1\n2 / 2 = 1 ඉතිරිය 0\n1 / 2 = 0 ඉතිරිය 1\nයට සිට ඉහළට ඉතිරි අගයන් කියවීමෙන්: 47₁0 = 101111₂.",
    "explanationEn": "Verbatim official examination question from 2021 O/L Paper II - Question 01 (iii) (b).",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2021 O/L Paper II - Question 01 (iii) (b)."
  },
  {
    "id": "pp-g10-u3-2022-15",
    "year": 2022,
    "paperType": "Paper I",
    "badgeText": "2022 O/L Paper I - Question 10",
    "questionEn": "Consider the character codes: O - 79, / - 47, L - 76, o - 111, l - 108. Which of the following will be the ASCII representation of O/L in binary?",
    "questionSi": "O - 79, / - 47, L - 76, o - 111, l - 108 යන අනුලක්ෂණ අගයන් සලකන්න. O/L හි ASCII නිරූපණය ද්විමය ලෙස පහත කවරක දැක්වේද?",
    "type": "mcq",
    "options": [
      {
        "id": "1",
        "en": "1001111 1001100",
        "si": "1001111 1001100"
      },
      {
        "id": "2",
        "en": "1101111 1101100",
        "si": "1101111 1101100"
      },
      {
        "id": "3",
        "en": "1001111 0101111 1001100",
        "si": "1001111 0101111 1001100"
      },
      {
        "id": "4",
        "en": "1101111 0101111 1101100",
        "si": "1101111 0101111 1101100"
      }
    ],
    "correctOptionId": "1",
    "explanationEn": "Verbatim official examination question from 2022 O/L Paper I - Question 10.",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2022 O/L Paper I - Question 10."
  },
  {
    "id": "pp-g10-u3-2023-16",
    "year": 2023,
    "paperType": "Paper I",
    "badgeText": "2023 O/L Paper I - Question 10",
    "questionEn": "Which of the following statements are true regarding the ASCII coding system?\n  A – Characters E and e are represented using the same code.\n  B – # and  symbols have different codes. n  C – Sinhala characters do not have ASCII codes.",
    "questionSi": "ASCII කේත ක්‍රමය සම්බන්ධයෙන් පහත කවර ප්‍රකාශ නිවැරදි වේද?\n  A – අක්ෂර E සහ e එකම කේතයෙන් නිරූපණය වේ.\n  B – # සහ  සංකේත සඳහා වෙනස් කේත ඇත.\n  C – සිංහල අක්ෂර සඳහා ASCII කේත නොමැත.",
    "type": "mcq",
    "options": [
      {
        "id": "1",
        "en": "B only",
        "si": "B පමණක්"
      },
      {
        "id": "2",
        "en": "A and C only",
        "si": "A සහ C පමණක්"
      },
      {
        "id": "3",
        "en": "B and C only",
        "si": "B සහ C පමණක්"
      },
      {
        "id": "4",
        "en": "All A, B and C",
        "si": "A, B සහ C සියල්ලම"
      }
    ],
    "correctOptionId": "1",
    "explanationEn": "Verbatim official examination question from 2023 O/L Paper I - Question 10.",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2023 O/L Paper I - Question 10."
  },
  {
    "id": "pp-g10-u3-2024-17",
    "year": 2024,
    "paperType": "Paper I",
    "badgeText": "2024 O/L Paper I - Question 09",
    "questionEn": "Consider the following statements P and Q:\n  P – When a character (e.g. 'A') is entered into a digital computer, it is converted to a unique pattern of 0s and 1s.\n  Q – ASCII code is used to assign standard numerical values for 128 characters used in computers.\n  Which of the following is valid regarding the above statements?",
    "questionSi": "පහත P සහ Q ප්‍රකාශ සලකන්න:\n  P – කෙනෙකු සංඛ්‍යාංක පරිගණකයකට (digital computer) යම් අනුලක්ෂණයක් (A යැයි සිතන්න) ඇතුළත් කළ විට, එය 0 සහ 1 න් සෑදුණු විශේෂිත රටාවකට පරිවර්තනය වේ.\n  Q – පරිගණකයක භාවිත වන අනුලක්ෂණ 128 ක් සඳහා සම්මත සංඛ්‍යාත්මක අගයන් පැවරීමට ASCII කේතය භාවිත කෙරේ.\n  ඉහත ප්‍රකාශ සම්බන්ධයෙන් පහත කවරක් වලංගු වේද?",
    "type": "mcq",
    "options": [
      {
        "id": "1",
        "en": "Both statements P and Q are correct and the ASCII code described in Statement Q assists the task mentioned in Statement P.",
        "si": "P සහ Q ප්‍රකාශ දෙකම නිවැරදි වන අතර, Q ප්‍රකාශයේ විස්තර කෙරෙන ASCII කේතය, P ප්‍රකාශයේ සඳහන් කාර්යය සඳහා උපකාරී වේ."
      },
      {
        "id": "2",
        "en": "Both statements P and Q are correct but the points presented in the two statements are not related.",
        "si": "P සහ Q ප්‍රකාශ දෙකම නිවැරදි වන නමුත් ඒවායින් සඳහන් කෙරෙන කරුණු අතර සබඳතාවක් නැත."
      },
      {
        "id": "3",
        "en": "Statement P is correct but statement Q is incorrect.",
        "si": "P ප්‍රකාශය නිවැරදි වන නමුත් Q ප්‍රකාශය වැරදි ය."
      },
      {
        "id": "4",
        "en": "Both statements are incorrect.",
        "si": "ප්‍රකාශ දෙකම වැරදි ය."
      }
    ],
    "correctOptionId": "1",
    "explanationEn": "Verbatim official examination question from 2024 O/L Paper I - Question 09.",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2024 O/L Paper I - Question 09."
  },
  {
    "id": "pp-g10-u3-2023-18",
    "year": 2023,
    "paperType": "Paper I",
    "badgeText": "2023 O/L Paper I - Question 09",
    "questionEn": "One Terabyte (1 TB) is equal to",
    "questionSi": "ටෙරා බයිට් 1 ක් (1 TB) සමාන වන්නේ,",
    "type": "mcq",
    "options": [
      {
        "id": "1",
        "en": "1024 KB.",
        "si": "1024 KB වලට වේ."
      },
      {
        "id": "2",
        "en": "1024 × 1024 KB.",
        "si": "1024 × 1024 KB වලට වේ."
      },
      {
        "id": "3",
        "en": "1024 × 1024 × 1024 KB.",
        "si": "1024 × 1024 × 1024 KB වලට වේ."
      },
      {
        "id": "4",
        "en": "1024 × 1024 × 1024 × 1024 KB.",
        "si": "1024 × 1024 × 1024 × 1024 KB වලට වේ."
      }
    ],
    "correctOptionId": "1",
    "explanationEn": "Verbatim official examination question from 2023 O/L Paper I - Question 09.",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2023 O/L Paper I - Question 09."
  },
  {
    "id": "pp-g10-u3-2024-19",
    "year": 2024,
    "paperType": "Paper I",
    "badgeText": "2024 O/L Paper I - Question 08",
    "questionEn": "Rani wants to store the following files in a USB Flash drive:\n  trees.pdf (500 MB), config.txt (534 bytes), nickels.mp4 (2 GB), report.docx (900 KB)\n  Which of the following is the lowest capacity USB drive that is sufficient to store them?",
    "questionSi": "USB ෆ්ලෑෂ් ධාවකයෙක පහත ගොනු ආචයනය කිරීමට රාණිට අවශ්‍ය වේ:\n  Trees.pdf (500MB), config.txt (534 bytes), nickels.mp4 (2GB), report.docx (900 KB)\n  ඒවා ආචයනය කිරීමට ෑහෙන අවම ධාරිතාවයක් සහිත USB ධාවකය පහත කවරක් ද?",
    "type": "mcq",
    "options": [
      {
        "id": "1",
        "en": "2 GB",
        "si": "2 GB"
      },
      {
        "id": "2",
        "en": "4 GB",
        "si": "4 GB"
      },
      {
        "id": "3",
        "en": "8 GB",
        "si": "8 GB"
      },
      {
        "id": "4",
        "en": "16 GB",
        "si": "16 GB"
      }
    ],
    "correctOptionId": "1",
    "explanationEn": "Verbatim official examination question from 2024 O/L Paper I - Question 08.",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2024 O/L Paper I - Question 08."
  },
  {
    "id": "pp-g10-u3-2020-20",
    "year": 2020,
    "paperType": "Paper I",
    "badgeText": "2020 O/L Paper I - Question 03",
    "questionEn": "Which of the following represents the units of measurements of data in computer systems in the ascending order of their size?",
    "questionSi": "පරිගණක පද්ධතිවල දත්ත මැනීමේ ඒකක ඒවායේ ප්‍රමාණයේ ආරෝහණ පටිපාටියට දක්වා ඇත්තේ පහත සඳහන් කුමක ද?",
    "type": "mcq",
    "options": [
      {
        "id": "1",
        "en": "Bit, Byte, Kilobyte, Terabyte",
        "si": "බිටුව, බයිටය, කිලෝබයිටය, ටෙරාබයිටය"
      },
      {
        "id": "2",
        "en": "Byte, Bit, Kilobyte, Terabyte",
        "si": "බයිටය, බිටුව, කිලෝබයිටය, ටෙරාබයිටය"
      },
      {
        "id": "3",
        "en": "Megabyte, Kilobyte, Bit, Byte",
        "si": "මෙගාබයිටය, කිලෝබයිටය, බිටුව, බයිටය"
      },
      {
        "id": "4",
        "en": "Terabyte, Gigabyte, Megabyte, Kilobyte",
        "si": "ටෙරාබයිටය, ගිගාබයිටය, මෙගාබයිටය, කිලෝබයිටය"
      }
    ],
    "correctOptionId": "1",
    "explanationEn": "Verbatim official examination question from 2020 O/L Paper I - Question 03.",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper I - Question 03."
  },
  {
    "id": "pp-g10-u3-2022-21",
    "year": 2022,
    "paperType": "Paper I",
    "badgeText": "2022 O/L Paper I - Question 09",
    "questionEn": "Amara wants to copy the following four files (with the given file sizes) to a USB drive:\n  `invitation.doc (15kB)`, `yesterday.mp3 (26MB)`, `concert.mp4 (150MB)`, `tajmahal.jpg (28kB)`\n  From the following four empty USB drives with the given capacities, which is the most economical drive that can be used to store the above files?",
    "questionSi": "අමරට පහත දැක්වෙන ගොනු හතර (දී ඇති ගොනු ප්‍රමාණ සහිත) USB ධාවකයකට පිටපත් කිරීමට අවශ්‍ය වේ:\n  `invitation.doc (15kB)`, `yesterday.mp3 (26MB)`, `concert.mp4 (150MB)`, `tajmahal.jpg (28kB)`\n  දී ඇති ධාරිතාවන් සහිත පහත දැක්වෙන හිස් USB ධාවක හතරෙන්, ඉහත ගොනු තැන්පත් කිරීමට භාවිත කළ හැකි වඩාත්ම පිරිවැය සාපේක්ෂ (අඩුම මිල) ධාවකය කුමක්ද?",
    "type": "mcq",
    "options": [
      {
        "id": "1",
        "en": "1GB",
        "si": "1GB"
      },
      {
        "id": "2",
        "en": "2GB",
        "si": "2GB"
      },
      {
        "id": "3",
        "en": "128MB",
        "si": "128MB"
      },
      {
        "id": "4",
        "en": "256MB",
        "si": "256MB"
      }
    ],
    "correctOptionId": "1",
    "explanationEn": "Verbatim official examination question from 2022 O/L Paper I - Question 09.",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2022 O/L Paper I - Question 09."
  },
  {
    "id": "pp-g10-u3-2023-22",
    "year": 2023,
    "paperType": "Paper I",
    "badgeText": "2023 O/L Paper I - Question 09",
    "questionEn": "One Terabyte (1 TB) is equal to",
    "questionSi": "ටෙරා nhsg 1 ක් (1 TB) සමාන වන්නේ,",
    "type": "mcq",
    "options": [
      {
        "id": "1",
        "en": "1024 KB.",
        "si": "1024 KB වලට වේ."
      },
      {
        "id": "2",
        "en": "1024 × 1024 KB.",
        "si": "1024 × 1024 KB වලට වේ."
      },
      {
        "id": "3",
        "en": "1024 × 1024 × 1024 KB.",
        "si": "1024 × 1024 × 1024 KB වලට වේ."
      },
      {
        "id": "4",
        "en": "1024 × 1024 × 1024 × 1024 KB.",
        "si": "1024 × 1024 × 1024 × 1024 KB වලට වේ."
      }
    ],
    "correctOptionId": "1",
    "explanationEn": "Verbatim official examination question from 2023 O/L Paper I - Question 09.",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2023 O/L Paper I - Question 09."
  },
  {
    "id": "pp-g10-u3-2024-23",
    "year": 2024,
    "paperType": "Paper I",
    "badgeText": "2024 O/L Paper I - Question 08",
    "questionEn": "Rani wants to store the following files in a USB Flash drive:\n  `trees.pdf (500 MB)`, `config.txt (534 bytes)`, `nickels.mp4 (2 GB)`, `report.docx (900 KB)`\n  Which of the following is the lowest capacity USB drive that is sufficient to store them?",
    "questionSi": "USB ෆ්ලෑෂ් ධාවකයක පහත ගොනු ආචයනය කිරීමට රාණිට අවශ්‍ය වේ:\n  `trees.pdf (500 MB)`, `config.txt (534 bytes)`, `nickels.mp4 (2 GB)`, `report.docx (900 KB)`\n  ඒවා ආචයනය කිරීමට සෑහෙන අඩුම ධාරිතාව සහිත USB ධාවකය පහත කුමක්ද?",
    "type": "mcq",
    "options": [
      {
        "id": "1",
        "en": "2 GB",
        "si": "2 GB"
      },
      {
        "id": "2",
        "en": "4 GB",
        "si": "4 GB"
      },
      {
        "id": "3",
        "en": "8 GB",
        "si": "8 GB"
      },
      {
        "id": "4",
        "en": "16 GB",
        "si": "16 GB"
      }
    ],
    "correctOptionId": "1",
    "explanationEn": "Verbatim official examination question from 2024 O/L Paper I - Question 08.",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2024 O/L Paper I - Question 08."
  },
  {
    "id": "pp-g10-u3-2025-24",
    "year": 2025,
    "paperType": "Paper I",
    "badgeText": "2025 O/L Paper I - Question 07",
    "questionEn": "A USB flash drive has 256 MB of free space. A video file of 0.3 GB, an image file of 300 KB, and a document file of 400 bytes need to be copied to this drive. Which of the following statements is correct?",
    "questionSi": "USB ෆ්ලෑෂ් ධාවකයක 256 MB ක නොමිලේ ඉඩ ප්‍රමාණයක් ඇත. 0.3 GB ක වීඩියෝ ගොනුවක්, 300 KB ක රූප ගොනුවක් සහ බයිට 400 ක ලේඛන ගොනුවක් මෙම ධාවකයට පිටපත් කළ යුතුය. පහත සඳහන් ප්‍රකාශවලින් නිවැරදි වන්නේ කුමක්ද?",
    "type": "mcq",
    "options": [
      {
        "id": "1",
        "en": "Only the document file can be copied.",
        "si": "ලේඛන ගොනුව පමණක් පිටපත් කළ හැක."
      },
      {
        "id": "2",
        "en": "Only the image file and the document file can be copied.",
        "si": "රූප ගොනුව සහ ලේඛන ගොනුව පමණක් පිටපත් කළ හැක."
      },
      {
        "id": "3",
        "en": "Only the video file can be copied.",
        "si": "වීඩියෝ ගොනුව පමණක් පිටපත් කළ හැක."
      },
      {
        "id": "4",
        "en": "All three files can be copied.",
        "si": "ගොනු තුනම පිටපත් කළ හැක."
      }
    ],
    "correctOptionId": "1",
    "explanationEn": "Verbatim official examination question from 2025 O/L Paper I - Question 07.",
    "explanationSi": "නිල විභාග ප්‍රශ්නය: 2025 O/L Paper I - Question 07."
  }
]
};
