// Verbatim dual-medium syllabus data extracted from public/lessons
import { GeneralLessonData } from '../allLessonsData';

export const G10_U3_DATA: GeneralLessonData = {
  "id": "g10-u3",
  "grade": "10",
  "unitNumber": 3,
  "titleEn": "Data Representation & Logic Gates",
  "titleSi": "දත්ත නිරූපණය සහ ලොජික් ද්වාර",
  "subtopics": [
    {
      "id": "g10-u3-st-1",
      "number": "3.1",
      "titleEn": "Computer Data Representation",
      "titleSi": "පරිගණකයේ දත්ත නිරූපණය",
      "summaryEn": "Computer Data Representation concepts, definitions, and examination competencies.",
      "summarySi": "පරිගණකයේ දත්ත නිරූපණය සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g10-u3-1-1",
          "en": "Key Concepts & Voltage Signals:\nComputer represents data in two signal states. There are two Voltage levels for these two symbols. One is named as the high voltage level and the other is named as low voltage level. '0' and '1' digits respectively represent these low and high voltage levels in a circuit. Thus, '1' and '0' status are equal to the 'On' and 'Off' states of an electronic circuit. Any data in the world can be represented on the computer using these two digits.",
          "si": "මූලික සංකල්ප සහ වෝල්ටීයතා සංඥා:\nපරිගණකයක දත්ත නිරූපණය කරන්නේ සංඥා අවස්ථා දෙකකිනි. මෙම සංකේත දෙක සඳහා වෝල්ටීයතා මට්ටම් දෙකක් පවතී. එකක් ඉහළ වෝල්ටීයතා මට්ටම ලෙසත් අනෙක පහළ වෝල්ටීයතා මට්ටම ලෙසත් හැඳින්වේ. විද්‍යුත් පරිපථයක මෙම පහළ සහ ඉහළ වෝල්ටීයතා මට්ටම් පිළිවෙළින් '0' සහ '1' ඉලක්කම් මගින් නිරූපණය කෙරේ. මෙසේ '1' සහ '0' අවස්ථා විද්‍යුත් පරිපථයක 'ස්විචය වැසූ (On)' සහ 'ස්විචය විවෘත (Off)' අවස්ථාවලට සමාන වේ. ලොව ඕනෑම දත්තයක් මෙම ඉලක්කම් දෙක භාවිතයෙන් පරිගණකයේ නිරූපණය කළ හැක.\"\n\n---",
          "highlightTerm": "Key Concepts & Voltage Signals"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g10-u3-1",
        "questionEn": "Which of the following is the most accurate concept regarding Computer Data Representation?",
        "questionSi": "පරිගණකයේ දත්ත නිරූපණය පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Computer Data Representation",
            "si": "පරිගණකයේ දත්ත නිරූපණය පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Computer Data Representation.",
        "explanationSi": "1 වන වරණය මගින් පරිගණකයේ දත්ත නිරූපණය පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g10-u3-st-2",
      "number": "3.1.3",
      "titleEn": "RGB to Hexadecimal Color Representation & Conversion",
      "titleSi": "RGB සහ ෂඩ්දශමය jළන kිරූපණය හා පරිවර්තනය",
      "summaryEn": "RGB to Hexadecimal Color Representation & Conversion concepts, definitions, and examination competencies.",
      "summarySi": "RGB සහ ෂඩ්දශමය jළන kිරූපණය හා පරිවර්තනය සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g10-u3-2-1",
          "en": "Fundamental Concept & Structure:\nIn computer graphics and web design, any colour can be made with the combination of different degrees of Red, Green and Blue (RGB). The value of each primary colour ranges from 0 to 255 in decimal. In computer systems, these colour values are indicated in hexadecimal numbers starting with '#' or '&H' symbol. The hexadecimal code consists of six characters (`#RRGGBB`), where the first two digits represent Red, the middle two represent Green, and the last two represent Blue.",
          "si": "මූලික සංකල්පය සහ ව්‍යුහය:\nපරිගණක ප්‍රස්තාරික සහ වෙබ් අඩවි නිර්මාණයේ දී රතු (Red), කොළ (Green) සහ නිල් (Blue) යන මූලික වර්ණවල එකතුවෙන් ඕනෑම වර්ණයක් සාදා ගත හැක. මෙහි එක් එක් මූලික වර්ණයෙහි අගය දශමය සංඛ්‍යාවලින් 0 සිට 255 දක්වා පරාසයක පවතී. පරිගණක පද්ධති තුළ මෙම වර්ණ අගයන් '#' හෝ '&H' (ampersand) සංකේතයෙන් ආරම්භ වන ෂඩ්දශමය සංඛ්‍යාවලින් දක්වනු ලබයි. මෙම ෂඩ්දශමය කේතය අක්ෂර 6 කින් (`#RRGGBB`) සමන්විත වන අතර, පළමු අක්ෂර දෙකෙන් රතු ද, මැද අක්ෂර දෙකෙන් කොළ ද, අවසාන අක්ෂර දෙකෙන් නිල් ද නිරූපණය කෙරේ.",
          "highlightTerm": "Fundamental Concept & Structure"
        },
        {
          "id": "b-g10-u3-2-2",
          "en": "#### Step-by-Step Conversion Example: Dark Purple (තද දම් පාට)",
          "si": "#### Step-by-Step Conversion Example: Dark Purple (තද දම් පාට)",
          "highlightTerm": "Step-by-Step Conversion Example: Dark Purple"
        },
        {
          "id": "b-g10-u3-2-3",
          "en": "Decimal RGB Values:** Red = 135, Green = 31, Blue = 120 $\rightarrow$ `RGB (135, 31, 120)`",
          "si": "Decimal RGB Values:** Red = 135, Green = 31, Blue = 120 $\rightarrow$ `RGB (135, 31, 120)`",
          "highlightTerm": "Decimal RGB Values:** Red = 135, Green = 31, Blue = 120 $\rightarrow$ `RGB (135, 31, 120)`"
        },
        {
          "id": "b-g10-u3-2-4",
          "en": "Converting Each RGB Value to Hexadecimal:**\n1. **Red ($135_{10}$):** $135 \\div 16 = 8$ with remainder $7 \rightarrow 87_{16}$\n2. **Green ($31_{10}$):** $31 \\div 16 = 1$ with remainder $15 \text{ (F)} \rightarrow 1F_{16}$\n3. **Blue ($120_{10}$):** $120 \\div 16 = 7$ with remainder $8 \rightarrow 78_{16}$",
          "si": "Converting Each RGB Value to Hexadecimal:**\n1. **Red ($135_{10}$):** $135 \\div 16 = 8$ with remainder $7 \rightarrow 87_{16}$\n2. **Green ($31_{10}$):** $31 \\div 16 = 1$ with remainder $15 \text{ (F)} \rightarrow 1F_{16}$\n3. **Blue ($120_{10}$):** $120 \\div 16 = 7$ with remainder $8 \rightarrow 78_{16}$",
          "highlightTerm": "Converting Each RGB Value to Hexadecimal"
        },
        {
          "id": "b-g10-u3-2-5",
          "en": "Combined Hexadecimal Colour Code:** `#871F78` or `&H871F78`",
          "si": "Combined Hexadecimal Colour Code:** `#871F78` or `&H871F78`",
          "highlightTerm": "Combined Hexadecimal Colour Code:** `#871F78` or `&H871F78`"
        },
        {
          "id": "b-g10-u3-2-6",
          "en": "#### Textbook Table 3.13: RGB and Hexadecimal Colour Equivalences (පෙළපොතේ 3.13 වගුව)",
          "si": "#### Textbook Table 3.13: RGB and Hexadecimal Colour Equivalences (පෙළපොතේ 3.13 වගුව)",
          "highlightTerm": "Textbook Table 3.13: RGB and Hexadecimal Colour Equivalences"
        }
      ],
      "tableData": {
        "headers": [
          {
            "en": "Name of Colour",
            "si": "වර්ණයේ නම"
          },
          {
            "en": "Colour",
            "si": "වර්ණය"
          },
          {
            "en": "Hexadecimal Value",
            "si": "ෂඩ්දශමය අගය"
          },
          {
            "en": "R",
            "si": "Red"
          },
          {
            "en": "G",
            "si": "Green"
          },
          {
            "en": "B",
            "si": "Blue"
          },
          {
            "en": "Step-by-Step Calculation",
            "si": "ගණනය කිරීම් පියවර"
          }
        ],
        "rows": [
          {
            "col0": {
              "en": "Dark Purple (තද දම්)",
              "si": "Dark Purple (තද දම්)"
            },
            "col1": {
              "en": "🟣",
              "si": "🟣"
            },
            "col2": {
              "en": "#871F78 / &H871F78",
              "si": "#871F78 / &H871F78"
            },
            "col3": {
              "en": "135",
              "si": ""
            },
            "col4": {
              "en": "31",
              "si": ""
            },
            "col5": {
              "en": "120",
              "si": ""
            },
            "col6": {
              "en": "$135 \rightarrow 87_{16}, 31 \rightarrow 1F_{16}, 120 \rightarrow 78_{16}$",
              "si": "$135 \rightarrow 87_{16}, 31 \rightarrow 1F_{16}, 120 \rightarrow 78_{16}$"
            }
          },
          {
            "col0": {
              "en": "Light Pink (ළා රෝස)",
              "si": "Light Pink (ළා රෝස)"
            },
            "col1": {
              "en": "🌸",
              "si": "🌸"
            },
            "col2": {
              "en": "#FFB6C1",
              "si": "#FFB6C1"
            },
            "col3": {
              "en": "255",
              "si": ""
            },
            "col4": {
              "en": "182",
              "si": ""
            },
            "col5": {
              "en": "193",
              "si": ""
            },
            "col6": {
              "en": "$255 \rightarrow FF_{16}, 182 \rightarrow B6_{16}, 193 \rightarrow C1_{16}$",
              "si": "$255 \rightarrow FF_{16}, 182 \rightarrow B6_{16}, 193 \rightarrow C1_{16}$"
            }
          },
          {
            "col0": {
              "en": "Sky Blue (අහස් නිල්)",
              "si": "Sky Blue (අහස් නිල්)"
            },
            "col1": {
              "en": "🟦",
              "si": "🟦"
            },
            "col2": {
              "en": "#3299CC",
              "si": "#3299CC"
            },
            "col3": {
              "en": "50",
              "si": ""
            },
            "col4": {
              "en": "153",
              "si": ""
            },
            "col5": {
              "en": "204",
              "si": ""
            },
            "col6": {
              "en": "$50 \rightarrow 32_{16}, 153 \rightarrow 99_{16}, 204 \rightarrow CC_{16}$",
              "si": "$50 \rightarrow 32_{16}, 153 \rightarrow 99_{16}, 204 \rightarrow CC_{16}$"
            }
          },
          {
            "col0": {
              "en": "Pure Green (තනි කොළ)",
              "si": "Pure Green (තනි කොළ)"
            },
            "col1": {
              "en": "🟢",
              "si": "🟢"
            },
            "col2": {
              "en": "#00FF00",
              "si": "#00FF00"
            },
            "col3": {
              "en": "0",
              "si": ""
            },
            "col4": {
              "en": "255",
              "si": ""
            },
            "col5": {
              "en": "0",
              "si": ""
            },
            "col6": {
              "en": "$0 \rightarrow 00_{16}, 255 \rightarrow FF_{16}, 0 \rightarrow 00_{16}$",
              "si": "$0 \rightarrow 00_{16}, 255 \rightarrow FF_{16}, 0 \rightarrow 00_{16}$"
            }
          },
          {
            "col0": {
              "en": "Pure Yellow (තනි කහ)",
              "si": "Pure Yellow (තනි කහ)"
            },
            "col1": {
              "en": "🟡",
              "si": "🟡"
            },
            "col2": {
              "en": "#FFEE00",
              "si": "#FFEE00"
            },
            "col3": {
              "en": "255",
              "si": ""
            },
            "col4": {
              "en": "238",
              "si": ""
            },
            "col5": {
              "en": "0",
              "si": ""
            },
            "col6": {
              "en": "$255 \rightarrow FF_{16}, 238 \rightarrow EE_{16}, 0 \rightarrow 00_{16}$",
              "si": "$255 \rightarrow FF_{16}, 238 \rightarrow EE_{16}, 0 \rightarrow 00_{16}$"
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g10-u3-2",
        "questionEn": "Which of the following is the most accurate concept regarding RGB to Hexadecimal Color Representation & Conversion?",
        "questionSi": "RGB සහ ෂඩ්දශමය jළන kිරූපණය හා පරිවර්තනය පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of RGB to Hexadecimal Color Representation & Conversion",
            "si": "RGB සහ ෂඩ්දශමය jළන kිරූපණය හා පරිවර්තනය පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for RGB to Hexadecimal Color Representation & Conversion.",
        "explanationSi": "1 වන වරණය මගින් RGB සහ ෂඩ්දශමය jළන kිරූපණය හා පරිවර්තනය පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g10-u3-st-3",
      "number": "3.2",
      "titleEn": "Number Systems",
      "titleSi": "සංඛ්‍යා පද්ධති",
      "summaryEn": "Number Systems concepts, definitions, and examination competencies.",
      "summarySi": "සංඛ්‍යා පද්ධති සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g10-u3-3-1",
          "en": "#### Fundamental Definitions: Unit, Number, Base/Radix (මූලික අර්ථ දැක්වීම්: ඒකකය, සංඛ්‍යාව, mdoh/Radix)",
          "si": "#### Fundamental Definitions: Unit, Number, Base/Radix (මූලික අර්ථ දැක්වීම්: ඒකකය, සංඛ්‍යාව, mdoh/Radix)",
          "highlightTerm": "Fundamental Definitions: Unit, Number, Base/Radix"
        },
        {
          "id": "b-g10-u3-3-2",
          "en": "Unit:\nUnit is a single object. For instance, a mango, a Rupee, and a day can be considered a unit.",
          "si": "ඒකකය:\nඒකකයක් යනු තනි වස්තුවකි. උදාහරණයක් ලෙස අඹ ගෙඩියක්, රුපියලක් සහ දිනයක් ඒකකයක් ලෙස සැලකිය හැක.",
          "highlightTerm": "Unit"
        },
        {
          "id": "b-g10-u3-3-3",
          "en": "Number:\nA number is a symbol which represents a unit or quantity.",
          "si": "සංඛ්‍යාව:\nසංඛ්‍යාවක් යනු ඒකකයක් හෝ ප්‍රමාණයක් නිරූපණය කරන සංකේතයකි.",
          "highlightTerm": "Number"
        },
        {
          "id": "b-g10-u3-3-4",
          "en": "Base / Radix:\nA number of symbols used in a number system is called the base/radix. The base of any number system is indicated in decimal numbers.",
          "si": "පද පද්ධතියේ mdoh / Radix:\nසංඛ්‍යා පද්ධතියක භාවිත වන සංකේත ගණන එහි mdoh (Base / Radix) ලෙස හැඳින්වේ. ඕනෑම සංඛ්‍යා පද්ධතියක mdoh දක්වනු ලබන්නේ දශමය සංඛ්‍යාවලිනි.",
          "highlightTerm": "Base / Radix"
        },
        {
          "id": "b-g10-u3-3-5",
          "en": "#### The 4 Main Number Systems Used in Computers (පරිගණකයේ භාවිත වන ප්‍රධාන සංඛ්‍යා පද්ධති 4)",
          "si": "#### The 4 Main Number Systems Used in Computers (පරිගණකයේ භාවිත වන ප්‍රධාන සංඛ්‍යා පද්ධති 4)",
          "highlightTerm": "The 4 Main Number Systems Used in Computers"
        },
        {
          "id": "b-g10-u3-3-6",
          "en": "Hexadecimal Letter Equivalences:\nIn the hexadecimal number system, ten digits are used from 0 to 9 and for the other 6 digits, A, B, C, D, E and F symbols are used. Here, A, B, C, D, E and F are used to represent 10, 11, 12, 13, 14 and 15.",
          "si": "ෂඩ්දශමය අක්ෂර අගයන්:\nෂඩ්දශමය සංඛ්‍යා පද්ධතියේ දී 0 සිට 9 දක්වා ඉලක්කම් 10 ක් ද, ඉතිරි ඉලක්කම් 6 සඳහා A, B, C, D, E සහ F සංකේත ද භාවිත කෙරේ. මෙහි දී A, B, C, D, E සහ F පිළිවෙළින් 10, 11, 12, 13, 14 සහ 15 නිරූපණය කිරීමට යොදා ගැනේ.\"\n\n---",
          "highlightTerm": "Hexadecimal Letter Equivalences"
        }
      ],
      "tableData": {
        "headers": [
          {
            "en": "Number System",
            "si": "සංඛ්‍යා පද්ධතිය"
          },
          {
            "en": "Base Value",
            "si": "mdoh"
          },
          {
            "en": "Digits and Alphabetic Characters Used",
            "si": "භාවිත වන ඉලක්කම් හා සංකේත"
          }
        ],
        "rows": [
          {
            "col0": {
              "en": "Binary (ද්විමය)",
              "si": "Binary (ද්විමය)"
            },
            "col1": {
              "en": "2",
              "si": ""
            },
            "col2": {
              "en": "`0, 1`",
              "si": "`0, 1`"
            }
          },
          {
            "col0": {
              "en": "Octal (අෂ්ටමය)",
              "si": "Octal (අෂ්ටමය)"
            },
            "col1": {
              "en": "8",
              "si": ""
            },
            "col2": {
              "en": "`0, 1, 2, 3, 4, 5, 6, 7`",
              "si": "`0, 1, 2, 3, 4, 5, 6, 7`"
            }
          },
          {
            "col0": {
              "en": "Decimal (දශමය)",
              "si": "Decimal (දශමය)"
            },
            "col1": {
              "en": "10",
              "si": ""
            },
            "col2": {
              "en": "`0, 1, 2, 3, 4, 5, 6, 7, 8, 9`",
              "si": "`0, 1, 2, 3, 4, 5, 6, 7, 8, 9`"
            }
          },
          {
            "col0": {
              "en": "Hexadecimal (ෂඩ්දශමය)",
              "si": "Hexadecimal (ෂඩ්දශමය)"
            },
            "col1": {
              "en": "16",
              "si": ""
            },
            "col2": {
              "en": "`0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F`",
              "si": "`0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F`"
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g10-u3-3",
        "questionEn": "Which of the following is the most accurate concept regarding Number Systems?",
        "questionSi": "සංඛ්‍යා පද්ධති පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Number Systems",
            "si": "සංඛ්‍යා පද්ධති පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Number Systems.",
        "explanationSi": "1 වන වරණය මගින් සංඛ්‍යා පද්ධති පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g10-u3-st-4",
      "number": "3.3",
      "titleEn": "Most and Least Significant Values",
      "titleSi": "වැඩිම හා අඩුම රිසි/ෆෙසිසි සංඛ්‍යාංක හා බිටු",
      "summaryEn": "Most and Least Significant Values concepts, definitions, and examination competencies.",
      "summarySi": "වැඩිම හා අඩුම රිසි/ෆෙසිසි සංඛ්‍යාංක හා බිටු සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g10-u3-4-1",
          "en": "Most Significant Digit:\nWhen a whole number is read from left to right, the number in the right most end is the least significant positional value and the number in the left most end which is not 0 is the most significant positional value. In decimal numbers, the value in the right extreme after the decimal point which is not 0 becomes the least significant positional value and the number in the left extreme of the decimal point which is not 0 becomes the most significant positional value.",
          "si": "MSD) and Least Significant Digit (LSD:\nපූර්ණ සංඛ්‍යාවක් ජ්වමේ සිට දකුණට කියවීමේ දී දකුණු කෙළවරේම පිහිටි අගය අඩුම ෆෙසිසි සංඛ්‍යාංකය (LSD) වන අතර ජ්වම් කෙළවරින්ම පිහිටි ශූන්‍ය නොවන අගය වැඩිම ෆෙසිසි සංඛ්‍යාංකය (MSD) වේ. දශම සංඛ්‍යාවල දී දශම තිතට දකුණු පසින් ඈතින්ම පිහිටි ශූන්‍ය නොවන අගය අඩුම ෆෙසිසි සංඛ්‍යාංකය වන අතර දශම තිතට ජ්වම් පසින් ඈතින්ම පිහිටි ශූන්‍ය නොවන අගය වැඩිම ෆෙසිසි සංඛ්‍යාංකය වේ.",
          "highlightTerm": "Most Significant Digit"
        },
        {
          "id": "b-g10-u3-4-2",
          "en": "Most Significant Bit:\nOnly the Binary Number System is used to find the most significant bit (MSB) and the least significant bit (LSB). In a whole number, read from left to right, the value in the right extreme is the least significant bit and the value in the left extreme which is not 0 is the most significant bit. In binary decimal numbers, the value in the right extreme of the decimal point which is not 0 is the least significant bit and the value in the left extreme of the decimal point which is not 0 is the most significant bit.",
          "si": "MSB) and Least Significant Bit (LSB:\nවැඩිම (MSB) හා අඩුම (LSB) ෆෙසිසි බිටුව තීරණය කිරීමේ දී ද්විමය සංඛ්‍යා පද්ධතිය සඳහා පමණක් භාවිත කෙරේ. පූර්ණ ද්විමය සංඛ්‍යාවක ජ්වමේ සිට දකුණට කියවීමේ දී දකුණු කෙළවරේම පිහිටි අගය අඩුම ෆෙසිසි බිටුව (LSB) වන අතර ජ්වම් කෙළවරින්ම පිහිටි ශූන්‍ය නොවන අගය වැඩිම ෆෙසිසි බිටුව (MSB) වේ.\"\n\n---",
          "highlightTerm": "Most Significant Bit"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g10-u3-4",
        "questionEn": "Which of the following is the most accurate concept regarding Most and Least Significant Values?",
        "questionSi": "වැඩිම හා අඩුම රිසි/ෆෙසිසි සංඛ්‍යාංක හා බිටු පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Most and Least Significant Values",
            "si": "වැඩිම හා අඩුම රිසි/ෆෙසිසි සංඛ්‍යාංක හා බිටු පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Most and Least Significant Values.",
        "explanationSi": "1 වන වරණය මගින් වැඩිම හා අඩුම රිසි/ෆෙසිසි සංඛ්‍යාංක හා බිටු පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g10-u3-st-5",
      "number": "3.4",
      "titleEn": "& 3.5 Number System Conversions",
      "titleSi": "සංඛ්‍යා පද්ධති අතර පරිවර්තනය",
      "summaryEn": "& 3.5 Number System Conversions concepts, definitions, and examination competencies.",
      "summarySi": "සංඛ්‍යා පද්ධති අතර පරිවර්තනය සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g10-u3-5-1",
          "en": "Conversion Rules & Methods:\nDivide the given decimal number by the target base (2, 8, or 16) until the quotient is 0. Write down all the remainders from bottom to top to form the converted number.",
          "si": "පරිවර්තන නීති සහ ක්‍රම:\nලැබෙන ලබ්ධිය ශූන්‍ය වන තෙක් ලබා දී ඇති දශමය සංඛ්‍යාව අදාළ mdොහයෙන් (2, 8, හෝ 16) බෙදා ලැබෙන ශේෂයන් යට සිට ඉහළට (අග සිට මුලට) සටහන් කරන්න.\"\n\n2. **Binary / Octal / Hexadecimal to Decimal (වෙනත් mdොහ දශමය සංඛ්‍යාවලට හැරවීම):**\n   * **[English Medium Text]:** \"Multiply each digit by its corresponding positional weight ($2^n, 8^n, 16^n$) and sum all the values together.\"\n   * **[Sinhala Medium Text]:** \"එක් එක් සංඛ්‍යාංකය එහි ස්ථානීය nr සාධකයෙන් ($2^n, 8^n, 16^n$) ගුණ කර ලැබෙන අගයන් සියල්ල එකතු කරන්න.\"\n\n3. **Binary to Octal & Octal to Binary (ද්විමය හා අෂ්ටමය අතර පරිවර්තනය - 3 Bits):**\n   * **[English Medium Text]:** \"Since $8 = 2^3$, three binary bits represent one octal digit. Group binary bits into clusters of 3 from right to left (add leading 0s if necessary) and convert each cluster to an octal digit.\"\n   * **[Sinhala Medium Text]: $8 = 2^3$ වන බැවින් අෂ්ටමය සංඛ්‍යාංකයක් නිරූපණයට ද්විමය බිටු 3 ක් භාවිත වේ. දකුණේ සිට ජ්වමට බිටු 3 බැගින් කාණ්ඩ කර (අවශ්‍ය නම් 0 යොදා) එකී කාණ්ඩ අෂ්ටමය සංඛ්‍යාංක බවට පත් කරන්න.\"\n\n4. **Binary to Hexadecimal & Hexadecimal to Binary (ද්විමය හා ෂඩ්දශමය අතර පරිවර්තනය - 4 Bits):**\n   * **[English Medium Text]:** \"Since $16 = 2^4$, four binary bits represent one hexadecimal digit. Group binary bits into clusters of 4 from right to left and convert each cluster to a hexadecimal character (0-9, A-F).\"\n   * **[Sinhala Medium Text]: $16 = 2^4$ වන බැවින් ෂඩ්දශමය සංඛ්‍යාංකයක් නිරූපණයට ද්විමය බිටු 4 ක් භාවිත වේ. දකුණේ සිට ජ්වමට බිටු 4 බැගින් කාණ්ඩ කර අදාළ ෂඩ්දශමය සංකේතය (0-9, A-F) ලියන්න.\"\n\n5. **Octal to Hexadecimal & Hexadecimal to Octal (අෂ්ටමය හා ෂඩ්දශමය අතර පරිවර්තනය):**\n   * **[English Medium Text]:** \"Convert the starting number to binary first (3 bits per octal digit or 4 bits per hexadecimal digit), then regroup into 4-bit clusters (for hex) or 3-bit clusters (for octal).\"\n   * **[Sinhala Medium Text]:** \"පළමුව ලබා දී ඇති සංඛ්‍යාව ද්විමය බවට පත් කර (අෂ්ටමය සඳහා බිටු 3 බැගින් / ෂඩ්දශමය සඳහා බිටු 4 බැගින්), පසුව නැවත බිටු 4 බැගින් (ෂඩ්දශමය සඳහා) හෝ බිටු 3 බැගින් (අෂ්ටමය සඳහා) කාණ්ඩ කරන්න.\"\n\n---",
          "highlightTerm": "Conversion Rules & Methods"
        }
      ],
      "examples": [
        {
          "id": "ex-widget-3.5",
          "titleEn": "Interactive Tool",
          "titleSi": "අන්තර්ක්‍රියාකාරී මෙවලම",
          "isInteractiveWidget": "number-converter"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g10-u3-5",
        "questionEn": "Which of the following is the most accurate concept regarding & 3.5 Number System Conversions?",
        "questionSi": "සංඛ්‍යා පද්ධති අතර පරිවර්තනය පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of & 3.5 Number System Conversions",
            "si": "සංඛ්‍යා පද්ධති අතර පරිවර්තනය පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for & 3.5 Number System Conversions.",
        "explanationSi": "1 වන වරණය මගින් සංඛ්‍යා පද්ධති අතර පරිවර්තනය පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g10-u3-st-6",
      "number": "3.6",
      "titleEn": "Data Storage Capacity & Capacity Conversions",
      "titleSi": "දත්ත ආචයන ධාරිතාව සහ ධාරිතා පරිවර්තන",
      "summaryEn": "Data Storage Capacity & Capacity Conversions concepts, definitions, and examination competencies.",
      "summarySi": "දත්ත ආචයන ධාරිතාව සහ ධාරිතා පරිවර්තන සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g10-u3-6-1",
          "en": "#### Fundamental Capacity Units & Exact Mathematical Formulas (මූලික ධාරිතා ඒකක සහ ගණිතමය සූත්‍ර)",
          "si": "#### Fundamental Capacity Units & Exact Mathematical Formulas (මූලික ධාරිතා ඒකක සහ ගණිතමය සූත්‍ර)",
          "highlightTerm": "Fundamental Capacity Units & Exact Mathematical Formulas"
        },
        {
          "id": "b-g10-u3-6-2",
          "en": "Bit (බිටුව):** Smallest binary storage unit (`0` or `1`).",
          "si": "Bit (බිටුව):** Smallest binary storage unit (`0` or `1`).",
          "highlightTerm": "Bit"
        },
        {
          "id": "b-g10-u3-6-3",
          "en": "Nibble (නිබලය):** $4 \text{ Bits} = \frac{1}{2} \text{ Byte}$",
          "si": "Nibble (නිබලය):** $4 \text{ Bits} = \frac{1}{2} \text{ Byte}$",
          "highlightTerm": "Nibble (නිබලය):** $4 \text{ Bits} = \frac{1}{2} \text{ Byte}$"
        },
        {
          "id": "b-g10-u3-6-4",
          "en": "Byte (බයිටය):** $8 \text{ Bits}$",
          "si": "Byte (බයිටය):** $8 \text{ Bits}$",
          "highlightTerm": "Byte (බයිටය):** $8 \text{ Bits}$"
        },
        {
          "id": "b-g10-u3-6-5",
          "en": "Kilobyte (KB):** $1024 \text{ Bytes} = 2^{10} \text{ Bytes}$",
          "si": "Kilobyte (KB):** $1024 \text{ Bytes} = 2^{10} \text{ Bytes}$",
          "highlightTerm": "Kilobyte (KB):** $1024 \text{ Bytes} = 2^{10} \text{ Bytes}$"
        },
        {
          "id": "b-g10-u3-6-6",
          "en": "Megabyte (MB):** $1024 \text{ KB} = 1024 \times 1024 \text{ Bytes} = 1,048,576 \text{ Bytes} = 2^{20} \text{ Bytes}$",
          "si": "Megabyte (MB):** $1024 \text{ KB} = 1024 \times 1024 \text{ Bytes} = 1,048,576 \text{ Bytes} = 2^{20} \text{ Bytes}$",
          "highlightTerm": "Megabyte (MB):** $1024 \text{ KB} = 1024 \times 1024 \text{ Bytes} = 1,048,576 \text{ Bytes} = 2^{20} \text{ Bytes}$"
        },
        {
          "id": "b-g10-u3-6-7",
          "en": "Gigabyte (GB):** $1024 \text{ MB} = 1024 \times 1024 \text{ KB} = 1024 \times 1024 \times 1024 \text{ Bytes} = 1,073,741,824 \text{ Bytes} = 2^{30} \text{ Bytes}$",
          "si": "Gigabyte (GB):** $1024 \text{ MB} = 1024 \times 1024 \text{ KB} = 1024 \times 1024 \times 1024 \text{ Bytes} = 1,073,741,824 \text{ Bytes} = 2^{30} \text{ Bytes}$",
          "highlightTerm": "Gigabyte (GB):** $1024 \text{ MB} = 1024 \times 1024 \text{ KB} = 1024 \times 1024 \times 1024 \text{ Bytes} = 1,073,741,824 \text{ Bytes} = 2^{30} \text{ Bytes}$"
        },
        {
          "id": "b-g10-u3-6-8",
          "en": "Terabyte (TB):** $1024 \text{ GB} = 1024 \times 1024 \times 1024 \times 1024 \text{ Bytes} = 1,099,511,627,776 \text{ Bytes} = 2^{40} \text{ Bytes}$",
          "si": "Terabyte (TB):** $1024 \text{ GB} = 1024 \times 1024 \times 1024 \times 1024 \text{ Bytes} = 1,099,511,627,776 \text{ Bytes} = 2^{40} \text{ Bytes}$",
          "highlightTerm": "Terabyte (TB):** $1024 \text{ GB} = 1024 \times 1024 \times 1024 \times 1024 \text{ Bytes} = 1,099,511,627,776 \text{ Bytes} = 2^{40} \text{ Bytes}$"
        },
        {
          "id": "b-g10-u3-6-9",
          "en": "Petabyte (PB):** $1024 \text{ TB} = 2^{50} \text{ Bytes}$",
          "si": "Petabyte (PB):** $1024 \text{ TB} = 2^{50} \text{ Bytes}$",
          "highlightTerm": "Petabyte (PB):** $1024 \text{ TB} = 2^{50} \text{ Bytes}$"
        },
        {
          "id": "b-g10-u3-6-10",
          "en": "#### Step-by-Step Capacity Conversion Examples (නියමිත ධාරිතා පරිවර්තන උදාහරණ)\n1. **Converting Gigabytes (GB) to Bytes (e.g., 4 GB in Bytes):**\n* $1 \text{ GB} = 1024 \times 1024 \times 1024 \text{ Bytes} = 2^{30} \text{ Bytes}$\n* $4 \text{ GB} = 4 \times (1024 \times 1024 \times 1024) \text{ Bytes} = 4 \times 2^{30} \text{ Bytes} = 4,294,967,296 \text{ Bytes}$\n2. **Converting Terabytes (TB) to Kilobytes (KB) (e.g., 1 TB in KB - 2023 O/L Exam):**\n* $1 \text{ TB} = 1024 \text{ GB}$\n* $1024 \text{ GB} = 1024 \times 1024 \text{ MB}$\n* $1024 \times 1024 \text{ MB} = 1024 \times 1024 \times 1024 \text{ KB}$\n* Therefore, $1 \text{ TB} = 1024 \times 1024 \times 1024 \text{ KB}$\n3. **Converting Megabytes (MB) to Bytes (e.g., 256 MB in Bytes):**\n* $256 \text{ MB} = 256 \times 1024 \times 1024 \text{ Bytes} = 2^8 \times 2^{20} \text{ Bytes} = 2^{28} \text{ Bytes}$",
          "si": "#### Step-by-Step Capacity Conversion Examples (නියමිත ධාරිතා පරිවර්තන උදාහරණ)\n1. **Converting Gigabytes (GB) to Bytes (e.g., 4 GB in Bytes):**\n* $1 \text{ GB} = 1024 \times 1024 \times 1024 \text{ Bytes} = 2^{30} \text{ Bytes}$\n* $4 \text{ GB} = 4 \times (1024 \times 1024 \times 1024) \text{ Bytes} = 4 \times 2^{30} \text{ Bytes} = 4,294,967,296 \text{ Bytes}$\n2. **Converting Terabytes (TB) to Kilobytes (KB) (e.g., 1 TB in KB - 2023 O/L Exam):**\n* $1 \text{ TB} = 1024 \text{ GB}$\n* $1024 \text{ GB} = 1024 \times 1024 \text{ MB}$\n* $1024 \times 1024 \text{ MB} = 1024 \times 1024 \times 1024 \text{ KB}$\n* Therefore, $1 \text{ TB} = 1024 \times 1024 \times 1024 \text{ KB}$\n3. **Converting Megabytes (MB) to Bytes (e.g., 256 MB in Bytes):**\n* $256 \text{ MB} = 256 \times 1024 \times 1024 \text{ Bytes} = 2^8 \times 2^{20} \text{ Bytes} = 2^{28} \text{ Bytes}$",
          "highlightTerm": "Step-by-Step Capacity Conversion Examples"
        },
        {
          "id": "b-g10-u3-6-11",
          "en": "#### Textbook Table 3.14: Storage Units, Exact Bytes & Text Page Equivalences (පෙළපොතේ 3.14 වගුව)",
          "si": "#### Textbook Table 3.14: Storage Units, Exact Bytes & Text Page Equivalences (පෙළපොතේ 3.14 වගුව)",
          "highlightTerm": "Textbook Table 3.14: Storage Units, Exact Bytes & Text Page Equivalences"
        }
      ],
      "tableData": {
        "headers": [
          {
            "en": "Name",
            "si": "නම"
          },
          {
            "en": "Abbreviation",
            "si": "සංක්ෂිප්තය"
          },
          {
            "en": "Approximate Bytes",
            "si": "ආසන්න nhsg"
          },
          {
            "en": "Exact Bytes",
            "si": "නිවැරදි nhsg"
          },
          {
            "en": "Approximate Text Pages",
            "si": "ආසන්න A4 පිටු"
          }
        ],
        "rows": [
          {
            "col0": {
              "en": "Byte",
              "si": "Byte"
            },
            "col1": {
              "en": "B",
              "si": "B"
            },
            "col2": {
              "en": "One (එකක්)",
              "si": "එකක්"
            },
            "col3": {
              "en": "$1$",
              "si": "$1$"
            },
            "col4": {
              "en": "1 character",
              "si": "character"
            }
          },
          {
            "col0": {
              "en": "Kilobyte",
              "si": "Kilobyte"
            },
            "col1": {
              "en": "KB",
              "si": "KB"
            },
            "col2": {
              "en": "One Thousand (දහසක්)",
              "si": "දහසක්"
            },
            "col3": {
              "en": "$1,024 = 2^{10}$",
              "si": "$1,024 = 2^{10}$"
            },
            "col4": {
              "en": "$\frac{1}{2}$ A4 page",
              "si": "$\frac{1}{2}$ A4 page"
            }
          },
          {
            "col0": {
              "en": "Megabyte",
              "si": "Megabyte"
            },
            "col1": {
              "en": "MB",
              "si": "MB"
            },
            "col2": {
              "en": "One Million (මිලියනයක්)",
              "si": "මිලියනයක්"
            },
            "col3": {
              "en": "$1,048,576 = 2^{20}$",
              "si": "$1,048,576 = 2^{20}$"
            },
            "col4": {
              "en": "500 A4 pages",
              "si": "A4 pages"
            }
          },
          {
            "col0": {
              "en": "Gigabyte",
              "si": "Gigabyte"
            },
            "col1": {
              "en": "GB",
              "si": "GB"
            },
            "col2": {
              "en": "One Billion (බිලියනයක්)",
              "si": "බිලියනයක්"
            },
            "col3": {
              "en": "$1,073,741,824 = 2^{30}$",
              "si": "$1,073,741,824 = 2^{30}$"
            },
            "col4": {
              "en": "500,000 A4 pages",
              "si": ",000 A4 pages"
            }
          },
          {
            "col0": {
              "en": "Terabyte",
              "si": "Terabyte"
            },
            "col1": {
              "en": "TB",
              "si": "TB"
            },
            "col2": {
              "en": "One Trillion (ට්‍රිලියනයක්)",
              "si": "ට්‍රිලියනයක්"
            },
            "col3": {
              "en": "$1,099,511,627,776 = 2^{40}$",
              "si": "$1,099,511,627,776 = 2^{40}$"
            },
            "col4": {
              "en": "500,000,000 A4 pages",
              "si": ",000,000 A4 pages"
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g10-u3-6",
        "questionEn": "Which of the following is the most accurate concept regarding Data Storage Capacity & Capacity Conversions?",
        "questionSi": "දත්ත ආචයන ධාරිතාව සහ ධාරිතා පරිවර්තන පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Data Storage Capacity & Capacity Conversions",
            "si": "දත්ත ආචයන ධාරිතාව සහ ධාරිතා පරිවර්තන පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Data Storage Capacity & Capacity Conversions.",
        "explanationSi": "1 වන වරණය මගින් දත්ත ආචයන ධාරිතාව සහ ධාරිතා පරිවර්තන පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g10-u3-st-7",
      "number": "3.7",
      "titleEn": "Coding Systems in Computers",
      "titleSi": "පරිගණකවල භාවිත වන කේත ක්‍රම",
      "summaryEn": "Coding Systems in Computers concepts, definitions, and examination competencies.",
      "summarySi": "පරිගණකවල භාවිත වන කේත ක්‍රම සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g10-u3-7-1",
          "en": "#### Comparison of Computer Coding Schemes (කේත ක්‍රම සසඳා බැලීම)",
          "si": "#### Comparison of Computer Coding Schemes (කේත ක්‍රම සසඳා බැලීම)",
          "highlightTerm": "Comparison of Computer Coding Schemes"
        }
      ],
      "tableData": {
        "headers": [
          {
            "en": "Code System",
            "si": "කේත ක්‍රමය"
          },
          {
            "en": "Full Name",
            "si": "සම්පූර්ණ නමය"
          },
          {
            "en": "Number of Bits Used",
            "si": "භාවිත වන බිටු ගණන"
          },
          {
            "en": "Total Representable Symbols",
            "si": "නිරූපණය කළ හැකි සංකේත ගණන"
          },
          {
            "en": "Key Features & Applications",
            "si": "ප්‍රධාන ලක්ෂණ සහ යෙදීම්"
          }
        ],
        "rows": [
          {
            "col0": {
              "en": "BCD",
              "si": "BCD"
            },
            "col1": {
              "en": "Binary Coded Decimal",
              "si": "Binary Coded Decimal"
            },
            "col2": {
              "en": "4 Bits",
              "si": "Bits"
            },
            "col3": {
              "en": "$2^4 = 16$ symbols",
              "si": "$2^4 = 16$ symbols"
            },
            "col4": {
              "en": "Used in early computing; represents decimal digits 0 to 9.",
              "si": "Used in early computing; represents decimal digits 0 to 9."
            }
          },
          {
            "col0": {
              "en": "ASCII",
              "si": "ASCII"
            },
            "col1": {
              "en": "American Standard Code for Information Interchange",
              "si": "American Standard Code for Information Interchange"
            },
            "col2": {
              "en": "7 Bits",
              "si": "Bits"
            },
            "col3": {
              "en": "$2^7 = 128$ characters",
              "si": "$2^7 = 128$ characters"
            },
            "col4": {
              "en": "Approved by ANSI; represents English text and control characters.",
              "si": "Approved by ANSI; represents English text and control characters."
            }
          },
          {
            "col0": {
              "en": "EBCDIC",
              "si": "EBCDIC"
            },
            "col1": {
              "en": "Extended Binary Coded Decimal Interchange Code",
              "si": "Extended Binary Coded Decimal Interchange Code"
            },
            "col2": {
              "en": "8 Bits",
              "si": "Bits"
            },
            "col3": {
              "en": "$2^8 = 256$ characters",
              "si": "$2^8 = 256$ characters"
            },
            "col4": {
              "en": "Used primarily in IBM Mainframe computers.",
              "si": "Used primarily in IBM Mainframe computers."
            }
          },
          {
            "col0": {
              "en": "Unicode",
              "si": "Unicode"
            },
            "col1": {
              "en": "Universal Character Encoding",
              "si": "Universal Character Encoding"
            },
            "col2": {
              "en": "16 Bits",
              "si": "Bits"
            },
            "col3": {
              "en": "$2^{16} = 65,536$ symbols",
              "si": "$2^{16} = 65,536$ symbols"
            },
            "col4": {
              "en": "Initiated by ISO & Unicode Consortium; represents all international languages (Sinhala, Tamil, Chinese, Japanese) and emojis.",
              "si": "Initiated by ISO & Unicode Consortium; represents all international languages (Sinhala, Tamil, Chinese, Japanese) and emojis."
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g10-u3-7",
        "questionEn": "Which of the following is the most accurate concept regarding Coding Systems in Computers?",
        "questionSi": "පරිගණකවල භාවිත වන කේත ක්‍රම පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Coding Systems in Computers",
            "si": "පරිගණකවල භාවිත වන කේත ක්‍රම පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Coding Systems in Computers.",
        "explanationSi": "1 වන වරණය මගින් පරිගණකවල භාවිත වන කේත ක්‍රම පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g10-u3-st-8",
      "number": "4.1",
      "titleEn": "Concept of Logic Gates & Signals",
      "titleSi": "ලොජික් ද්වාර සංකල්පය සහ සංඥා",
      "summaryEn": "Concept of Logic Gates & Signals concepts, definitions, and examination competencies.",
      "summarySi": "ලොජික් ද්වාර සංකල්පය සහ සංඥා සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g10-u3-8-1",
          "en": "Core Definitions & Hardware Concepts:\nA logic gate is an elementary building block of a digital circuit. Most logic gates have two inputs and one output. At any given moment, every terminal is in one of the two binary conditions, low (0) or high (1), represented by different voltage levels. The function of devices such as the computer, calculator, washing machine, microwave oven, mobile phone, modern televisions, digital clock, air conditioner etc is based on the function of logic gates.",
          "si": "මූලික අර්ථ දැක්වීම් සහ දෘඩාංග සංකල්ප:\nද්විමය සංඛ්‍යා අනුසාරයෙන් යම් යම් තර්ක තත්ත්ව ගොඩනැඟීමටත් ඒ අනුව යම් යම් තීරණ ගැනීමටත් හැකි වන පරිපථ තර්කන පරිපථ (Logic Circuits) ලෙස හැඳින්වේ. පරිගණකය යනු සංකීර්ණ සංඛ්‍යාංක පරිපථ රාශියක එකතුවකි. මෙම ඉලෙක්ට්‍රොනික පරිපථ නිර්මාණය කර ඇත්තේ ලොජික් ද්වාර (Logic Gates) නමැති මූලික තර්කන පරිපථ රාශියක් අවශ්‍ය පරිදි එකිනෙකට සම්බන්ධ කිරීමෙනි. පරිගණකය, ගණක යන්ත්‍රය, රෙදි සෝදන යන්ත්‍රය, මයික්‍රෝවේව් උඳුන, ජංගම දුරකථනය, නූතන රූපවාහිනිය, සංඛ්‍යාංක ඔරලෝසුව, වායු සමීකරණය ආදී උපකරණවල ක්‍රියාකාරිත්වය සිදුවන්නේ ලොජික් ද්වාරවල ක්‍රියාකාරිත්වය පදනම් කරගෙන ය.",
          "highlightTerm": "Core Definitions & Hardware Concepts"
        },
        {
          "id": "b-g10-u3-8-2",
          "en": "Physical Construction & Integrated Circuits:\nThere are a number of technologies used to build logic gates. Diodes, Transistors, Resistors etc are used to construct logic circuits. Today logic circuits are built combining a number of logic gates into a single chip. This chip is called Integrated Circuit (IC). The modern microprocessor chip contains millions of logic gates.",
          "si": "භෞතික නිපැයුම සහ අනුකලිත පරිපථ - IC:\nලොජික් ද්වාර නිර්මාණය කිරීම සඳහා විවිධ තාක්ෂණයන් භාවිත කෙරේ. ඩයෝඩ (Diodes), ට්‍රාන්සිස්ටර (Transistors), රෙසිස්ටර (Resistors) ආදිය ලොජික් පරිපථ ගොඩනැඟීමට යොදා ගැනේ. වර්තමානයේ දී ලොජික් ද්වාර විශාල ප්‍රමාණයක් එකතු කර තනි චිපයක් (Chip) ලෙස ලොජික් පරිපථ තනා ඇත. මෙම චිප අනුකලිත පරිපථ (Integrated Circuit - IC) ලෙස හැඳින්වේ. නූතන ක්ෂුද්‍ර ප්‍රොසෙසර චිපයක ලොජික් ද්වාර මිලියන ගණනක් අඩංගු වේ.\"\n\n---",
          "highlightTerm": "Physical Construction & Integrated Circuits"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g10-u3-8",
        "questionEn": "Which of the following is the most accurate concept regarding Concept of Logic Gates & Signals?",
        "questionSi": "ලොජික් ද්වාර සංකල්පය සහ සංඥා පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Concept of Logic Gates & Signals",
            "si": "ලොජික් ද්වාර සංකල්පය සහ සංඥා පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Concept of Logic Gates & Signals.",
        "explanationSi": "1 වන වරණය මගින් ලොජික් ද්වාර සංකල්පය සහ සංඥා පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g10-u3-st-9",
      "number": "4.2",
      "titleEn": "Basic Logic Gates",
      "titleSi": "මූලික ලොජික් ද්වාර",
      "summaryEn": "Basic Logic Gates concepts, definitions, and examination competencies.",
      "summarySi": "මූලික ලොජික් ද්වාර සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g10-u3-9-1",
          "en": "The three primary basic logic gates are **AND**, **OR**, and **NOT**.",
          "si": "The three primary basic logic gates are **AND**, **OR**, and **NOT**.",
          "highlightTerm": "The three primary basic logic gates are **AND**, **OR**, and **NOT"
        },
        {
          "id": "b-g10-u3-9-2",
          "en": "#### 4.2.1 AND Gate (සහ ද්වාරය)",
          "si": "#### 4.2.1 AND Gate (සහ ද්වාරය)",
          "highlightTerm": "AND Gate"
        },
        {
          "id": "b-g10-u3-9-3",
          "en": "Definition & Rule:\nAn AND gate gives a high output (1) only if all its inputs are high (1). If any input is low (0), the output is low (0).",
          "si": "අර්ථ දැක්වීම සහ නීතිය:\nAND ද්වාරයක සියලුම ආදාන ඉහළ (1) මට්ටමේ පවතින විට පමණක් ප්‍රතිදානය ඉහළ (1) මට්ටමේ පවතී. ඕනෑම එක් ආදානයක් හෝ පහළ (0) මට්ටමේ පවතී නම් ප්‍රතිදානය පහළ (0) මට්ටමේ පවතී.",
          "highlightTerm": "Definition & Rule"
        },
        {
          "id": "b-g10-u3-9-4",
          "en": "Boolean Expression (බූලියානු ප්‍රකාශනය):**\n$$Q = A \\cdot B \\quad \\text{or} \\quad Q = AB$$",
          "si": "Boolean Expression (බූලියානු ප්‍රකාශනය):**\n$$Q = A \\cdot B \\quad \\text{or} \\quad Q = AB$$",
          "highlightTerm": "Boolean Expression"
        },
        {
          "id": "b-g10-u3-9-5",
          "en": "Electronic Switch Circuit Diagram (විද්‍යුත් ස්විච පරිපථ සටහන - Series Switches):**\n* *Circuit Rule:* The bulb lights ON (1) ONLY when BOTH Switch A AND Switch B are closed (1).",
          "si": "Electronic Switch Circuit Diagram (විද්‍යුත් ස්විච පරිපථ සටහන - Series Switches):**\n* *Circuit Rule:* The bulb lights ON (1) ONLY when BOTH Switch A AND Switch B are closed (1).",
          "highlightTerm": "Electronic Switch Circuit Diagram"
        },
        {
          "id": "b-g10-u3-9-6",
          "en": "Logic Symbol (ලොජික් සංකේතය):",
          "si": "Logic Symbol (ලොජික් සංකේතය):",
          "highlightTerm": "Logic Symbol"
        },
        {
          "id": "b-g10-u3-9-7",
          "en": "Truth Table (සත්‍යතා වගුව):",
          "si": "Truth Table (සත්‍යතා වගුව):",
          "highlightTerm": "Truth Table"
        },
        {
          "id": "b-g10-u3-9-8",
          "en": "#### 4.2.2 OR Gate (හෝ ද්වාරය)",
          "si": "#### 4.2.2 OR Gate (හෝ ද්වාරය)",
          "highlightTerm": "OR Gate"
        },
        {
          "id": "b-g10-u3-9-9",
          "en": "Definition & Rule:\nAn OR gate gives a high output (1) if one or more of its inputs are high (1). The output is low (0) only if all inputs are low (0).",
          "si": "අර්ථ දැක්වීම සහ නීතිය:\nOR ද්වාරයක ආදාන එකක් හෝ ඊට වැඩි ගණනක් ඉහළ (1) මට්ටමේ පවතින විට ප්‍රතිදානය ඉහළ (1) වේ. සියලුම ආදාන පහළ (0) මට්ටමේ පවතින විට පමණක් ප්‍රතිදානය පහළ (0) වේ.",
          "highlightTerm": "Definition & Rule"
        },
        {
          "id": "b-g10-u3-9-10",
          "en": "Boolean Expression (බූලියානු ප්‍රකාශනය):**\n$$Q = A + B$$",
          "si": "Boolean Expression (බූලියානු ප්‍රකාශනය):**\n$$Q = A + B$$",
          "highlightTerm": "Boolean Expression"
        },
        {
          "id": "b-g10-u3-9-11",
          "en": "Electronic Switch Circuit Diagram (විද්‍යුත් ස්විච පරිපථ සටහන - Parallel Switches):**\n* *Circuit Rule:* The bulb lights ON (1) if EITHER Switch A OR Switch B (or both) is closed (1).",
          "si": "Electronic Switch Circuit Diagram (විද්‍යුත් ස්විච පරිපථ සටහන - Parallel Switches):**\n* *Circuit Rule:* The bulb lights ON (1) if EITHER Switch A OR Switch B (or both) is closed (1).",
          "highlightTerm": "Electronic Switch Circuit Diagram"
        },
        {
          "id": "b-g10-u3-9-12",
          "en": "Logic Symbol (ලොජික් සංකේතය):",
          "si": "Logic Symbol (ලොජික් සංකේතය):",
          "highlightTerm": "Logic Symbol"
        },
        {
          "id": "b-g10-u3-9-13",
          "en": "Truth Table (සත්‍යතා වගුව):",
          "si": "Truth Table (සත්‍යතා වගුව):",
          "highlightTerm": "Truth Table"
        },
        {
          "id": "b-g10-u3-9-14",
          "en": "#### 4.2.3 NOT Gate / Inverter (නොවන ද්වාරය / ප්‍රතිලෝමකය)",
          "si": "#### 4.2.3 NOT Gate / Inverter (නොවන ද්වාරය / ප්‍රතිලෝමකය)",
          "highlightTerm": "NOT Gate / Inverter"
        },
        {
          "id": "b-g10-u3-9-15",
          "en": "Definition & Rule:\nA NOT gate has only one input and one output. It reverses (inverts) the logic state. If the input is 0, the output is 1. If the input is 1, the output is 0.",
          "si": "අර්ථ දැක්වීම සහ නීතිය:\nNOT ද්වාරය සඳහා පවතින්නේ එක් ආදානයක් සහ එක් ප්‍රතිදානයක් පමණි. එය ආදාන සංඥාව ප්‍රතිලෝම කරයි. ආදානය 0 වන විට ප්‍රතිදානය 1 වන අතර ආදානය 1 වන විට ප්‍රතිදානය 0 වේ.",
          "highlightTerm": "Definition & Rule"
        },
        {
          "id": "b-g10-u3-9-16",
          "en": "Boolean Expression (බූලියානු ප්‍රකාශනය):**\n$$Q = \\bar{A} \\quad \\text{or} \\quad Q = A'$$",
          "si": "Boolean Expression (බූලියානු ප්‍රකාශනය):**\n$$Q = \\bar{A} \\quad \\text{or} \\quad Q = A'$$",
          "highlightTerm": "Boolean Expression"
        },
        {
          "id": "b-g10-u3-9-17",
          "en": "Electronic Switch Circuit Diagram (විද්‍යුත් ස්විච පරිපථ සටහන - Inverter Bypass Switch):**\n* *Circuit Rule:* When Switch A is Open (0), current flows through Bulb Q (1). When Switch A is Pressed/Closed (1), short-circuit bypasses the bulb, turning Bulb Q OFF (0).",
          "si": "Electronic Switch Circuit Diagram (විද්‍යුත් ස්විච පරිපථ සටහන - Inverter Bypass Switch):**\n* *Circuit Rule:* When Switch A is Open (0), current flows through Bulb Q (1). When Switch A is Pressed/Closed (1), short-circuit bypasses the bulb, turning Bulb Q OFF (0).",
          "highlightTerm": "Electronic Switch Circuit Diagram"
        },
        {
          "id": "b-g10-u3-9-18",
          "en": "Logic Symbol (ලොජික් සංකේතය):",
          "si": "Logic Symbol (ලොජික් සංකේතය):",
          "highlightTerm": "Logic Symbol"
        },
        {
          "id": "b-g10-u3-9-19",
          "en": "Truth Table (සත්‍යතා වගුව):",
          "si": "Truth Table (සත්‍යතා වගුව):",
          "highlightTerm": "Truth Table"
        }
      ],
      "examples": [
        {
          "id": "ex-widget-4.2",
          "titleEn": "Interactive Tool",
          "titleSi": "අන්තර්ක්‍රියාකාරී මෙවලම",
          "isInteractiveWidget": "logic-gate"
        },
        {
          "id": "ex-4-2-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "+---[ Switch A ]---[ Switch B ]---( Bulb Q )---+\n  |                                              |\n  +-----------------( Battery )------------------+",
          "contentSi": "+---[ Switch A ]---[ Switch B ]---( Bulb Q )---+\n  |                                              |\n  +-----------------( Battery )------------------+"
        },
        {
          "id": "ex-4-2-2",
          "titleEn": "Schematic / Code Diagram 2",
          "titleSi": "පරිපථ / කේත සටහන 2",
          "contentEn": "A ---|        |  )--- Q = A · B\n  B ---| /",
          "contentSi": "A ---|        |  )--- Q = A · B\n  B ---| /"
        },
        {
          "id": "ex-4-2-3",
          "titleEn": "Schematic / Code Diagram 3",
          "titleSi": "පරිපථ / කේත සටහන 3",
          "contentEn": "+-------+---[ Switch A ]---+-------( Bulb Q )---+\n  |       |                  |                    |\n  |       +---[ Switch B ]---+                    |\n  |                                               |\n  +--------------------( Battery )----------------+",
          "contentSi": "+-------+---[ Switch A ]---+-------( Bulb Q )---+\n  |       |                  |                    |\n  |       +---[ Switch B ]---+                    |\n  |                                               |\n  +--------------------( Battery )----------------+"
        },
        {
          "id": "ex-4-2-4",
          "titleEn": "Schematic / Code Diagram 4",
          "titleSi": "පරිපථ / කේත සටහන 4",
          "contentEn": "A ---\\         ) )--- Q = A + B\n  B ---/ /",
          "contentSi": "A ---\\         ) )--- Q = A + B\n  B ---/ /"
        },
        {
          "id": "ex-4-2-5",
          "titleEn": "Schematic / Code Diagram 5",
          "titleSi": "පරිපථ / කේත සටහන 5",
          "contentEn": "+---------------+----( Bulb Q )----+\n  |               |                  |\n  |        [ Push Switch A ]         |\n  |               |                  |\n  +-------( Battery )----------------+",
          "contentSi": "+---------------+----( Bulb Q )----+\n  |               |                  |\n  |        [ Push Switch A ]         |\n  |               |                  |\n  +-------( Battery )----------------+"
        },
        {
          "id": "ex-4-2-6",
          "titleEn": "Schematic / Code Diagram 6",
          "titleSi": "පරිපථ / කේත සටහන 6",
          "contentEn": "A --->|o--- Q = A'",
          "contentSi": "A --->|o--- Q = A'"
        }
      ],
      "tableData": {
        "headers": [],
        "rows": [
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {}
        ]
      },
      "checkpointQuiz": {
        "id": "q-g10-u3-9",
        "questionEn": "Which of the following is the most accurate concept regarding Basic Logic Gates?",
        "questionSi": "මූලික ලොජික් ද්වාර පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Basic Logic Gates",
            "si": "මූලික ලොජික් ද්වාර පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Basic Logic Gates.",
        "explanationSi": "1 වන වරණය මගින් මූලික ලොජික් ද්වාර පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g10-u3-st-10",
      "number": "4.3",
      "titleEn": "Combinational / Derived Logic Gates",
      "titleSi": "සංයුක්ත / ව්‍යුත්පන්න ලොජික් ද්වාර",
      "summaryEn": "Combinational / Derived Logic Gates concepts, definitions, and examination competencies.",
      "summarySi": "සංයුක්ත / ව්‍යුත්පන්න ලොජික් ද්වාර සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g10-u3-10-1",
          "en": "Derived gates combine basic logic gates. **NAND** and **NOR** are known as **Universal Gates** because any digital logic circuit can be constructed using only NAND gates or only NOR gates.",
          "si": "Derived gates combine basic logic gates. **NAND** and **NOR** are known as **Universal Gates** because any digital logic circuit can be constructed using only NAND gates or only NOR gates.",
          "highlightTerm": "Derived gates combine basic logic gates. **NAND** and **NOR** are known as **Universal Gates** because any digital logic circuit can be constructed using only NAND gates or only NOR gates"
        },
        {
          "id": "b-g10-u3-10-2",
          "en": "#### 4.3.1 NOR Gate (නැත-හෝ / NOR ද්වාරය)",
          "si": "#### 4.3.1 NOR Gate (නැත-හෝ / NOR ද්වාරය)",
          "highlightTerm": "NOR Gate"
        },
        {
          "id": "b-g10-u3-10-3",
          "en": "Definition & Rule:\nNOR gate is a combination of an OR gate followed by a NOT gate. It produces a high output (1) only if all inputs are low (0).",
          "si": "අර්ථ දැක්වීම සහ නීතිය:\nNOR ද්වාරය යනු OR ද්වාරයක් සහ NOT ද්වාරයක් එකතුවෙන් සෑදුණු ද්වාරයකි. සියලුම ආදාන පහළ (0) මට්ටමේ පවතින විට පමණක් ප්‍රතිදානය ඉහළ (1) වේ.",
          "highlightTerm": "Definition & Rule"
        },
        {
          "id": "b-g10-u3-10-4",
          "en": "Boolean Expression (බූලියානු ප්‍රකාශනය):**\n$$Q = \\overline{A + B}$$",
          "si": "Boolean Expression (බූලියානු ප්‍රකාශනය):**\n$$Q = \\overline{A + B}$$",
          "highlightTerm": "Boolean Expression"
        },
        {
          "id": "b-g10-u3-10-5",
          "en": "Logic Diagram & Symbol (ලොජික් සංකේතය):",
          "si": "Logic Diagram & Symbol (ලොජික් සංකේතය):",
          "highlightTerm": "Logic Diagram & Symbol"
        },
        {
          "id": "b-g10-u3-10-6",
          "en": "Truth Table (සත්‍යතා වගුව):",
          "si": "Truth Table (සත්‍යතා වගුව):",
          "highlightTerm": "Truth Table"
        },
        {
          "id": "b-g10-u3-10-7",
          "en": "#### 4.3.2 NAND Gate (නැත-සහ / NAND ද්වාරය)",
          "si": "#### 4.3.2 NAND Gate (නැත-සහ / NAND ද්වාරය)",
          "highlightTerm": "NAND Gate"
        },
        {
          "id": "b-g10-u3-10-8",
          "en": "Definition & Rule:\nNAND gate is a combination of an AND gate followed by a NOT gate. It produces a low output (0) only if all inputs are high (1).",
          "si": "අර්ථ දැක්වීම සහ නීතිය:\nNAND ද්වාරය යනු AND ද්වාරයක් සහ NOT ද්වාරයක් එකතුවෙන් සෑදුණු ද්වාරයකි. සියලුම ආදාන ඉහළ (1) මට්ටමේ පවතින විට පමණක් ප්‍රතිදානය පහළ (0) වේ.",
          "highlightTerm": "Definition & Rule"
        },
        {
          "id": "b-g10-u3-10-9",
          "en": "Boolean Expression (බූලියානු ප්‍රකාශනය):**\n$$Q = \\overline{A \\cdot B}$$",
          "si": "Boolean Expression (බූලියානු ප්‍රකාශනය):**\n$$Q = \\overline{A \\cdot B}$$",
          "highlightTerm": "Boolean Expression"
        },
        {
          "id": "b-g10-u3-10-10",
          "en": "Logic Diagram & Symbol (ලොජික් සංකේතය):",
          "si": "Logic Diagram & Symbol (ලොජික් සංකේතය):",
          "highlightTerm": "Logic Diagram & Symbol"
        },
        {
          "id": "b-g10-u3-10-11",
          "en": "Truth Table (සත්‍යතා වගුව):",
          "si": "Truth Table (සත්‍යතා වගුව):",
          "highlightTerm": "Truth Table"
        },
        {
          "id": "b-g10-u3-10-12",
          "en": "#### 4.3.3 XOR Gate (Exclusive-OR / විශේෂිත හෝ ද්වාරය)",
          "si": "#### 4.3.3 XOR Gate (Exclusive-OR / විශේෂිත හෝ ද්වාරය)",
          "highlightTerm": "XOR Gate"
        },
        {
          "id": "b-g10-u3-10-13",
          "en": "Definition & Rule:\nXOR (Exclusive-OR) gate gives a high output (1) if the inputs are different from each other. If all inputs are the same, the output is low (0).",
          "si": "අර්ථ දැක්වීම සහ නීතිය:\nXOR ද්වාරයක ආදාන එකිනෙකට වෙනස් වන අවස්ථාවල දී පමණක් ප්‍රතිදානය ඉහළ (1) වේ. ආදාන සියල්ල සමාන වන විට ප්‍රතිදානය පහළ (0) වේ.",
          "highlightTerm": "Definition & Rule"
        },
        {
          "id": "b-g10-u3-10-14",
          "en": "Boolean Expression (බූලියානු ප්‍රකාශනය):**\n$$Q = A \\oplus B = \\bar{A}B + A\\bar{B}$$",
          "si": "Boolean Expression (බූලියානු ප්‍රකාශනය):**\n$$Q = A \\oplus B = \\bar{A}B + A\\bar{B}$$",
          "highlightTerm": "Boolean Expression"
        },
        {
          "id": "b-g10-u3-10-15",
          "en": "Logic Symbol (ලොජික් සංකේතය):",
          "si": "Logic Symbol (ලොජික් සංකේතය):",
          "highlightTerm": "Logic Symbol"
        },
        {
          "id": "b-g10-u3-10-16",
          "en": "Truth Table (සත්‍යතා වගුව):",
          "si": "Truth Table (සත්‍යතා වගුව):",
          "highlightTerm": "Truth Table"
        },
        {
          "id": "b-g10-u3-10-17",
          "en": "Construction using Basic Gates (මූලික ද්වාර මගින් ගොඩනැගීම):",
          "si": "Construction using Basic Gates (මූලික ද්වාර මගින් ගොඩනැගීම):",
          "highlightTerm": "Construction using Basic Gates"
        },
        {
          "id": "b-g10-u3-10-18",
          "en": "#### 4.3.4 XNOR Gate (Exclusive-NOR / විශේෂිත නැත-හෝ ද්වාරය)",
          "si": "#### 4.3.4 XNOR Gate (Exclusive-NOR / විශේෂිත නැත-හෝ ද්වාරය)",
          "highlightTerm": "XNOR Gate"
        },
        {
          "id": "b-g10-u3-10-19",
          "en": "Definition & Rule:\nXNOR (Exclusive-NOR) gate gives a high output (1) if all inputs are the same. If the inputs are different, the output is low (0).",
          "si": "අර්ථ දැක්වීම සහ නීතිය:\nXNOR ද්වාරයක ආදාන සියල්ල එක හා සමාන වන අවස්ථාවල දී පමණක් ප්‍රතිදානය ඉහළ (1) වේ. ආදාන එකිනෙකට වෙනස් වන විට ප්‍රතිදානය පහළ (0) වේ.",
          "highlightTerm": "Definition & Rule"
        },
        {
          "id": "b-g10-u3-10-20",
          "en": "Boolean Expression (බූලියානු ප්‍රකාශනය):**\n$$Q = \\overline{A \\oplus B} = AB + \\bar{A}\\bar{B}$$",
          "si": "Boolean Expression (බූලියානු ප්‍රකාශනය):**\n$$Q = \\overline{A \\oplus B} = AB + \\bar{A}\\bar{B}$$",
          "highlightTerm": "Boolean Expression"
        },
        {
          "id": "b-g10-u3-10-21",
          "en": "Logic Symbol (ලොජික් සංකේතය):",
          "si": "Logic Symbol (ලොජික් සංකේතය):",
          "highlightTerm": "Logic Symbol"
        },
        {
          "id": "b-g10-u3-10-22",
          "en": "Truth Table (සත්‍යතා වගුව):",
          "si": "Truth Table (සත්‍යතා වගුව):",
          "highlightTerm": "Truth Table"
        }
      ],
      "examples": [
        {
          "id": "ex-4-3-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "OR Gate followed by NOT Inverter:\n  A ---\\         ) )---[OR Output]--->|o--- Q = (A + B)'\n  B ---/ /\n\n  Standard NOR Gate Symbol:\n  A ---\\         ) )o--- Q = (A + B)'\n  B ---/ /",
          "contentSi": "OR Gate followed by NOT Inverter:\n  A ---\\         ) )---[OR Output]--->|o--- Q = (A + B)'\n  B ---/ /\n\n  Standard NOR Gate Symbol:\n  A ---\\         ) )o--- Q = (A + B)'\n  B ---/ /"
        },
        {
          "id": "ex-4-3-2",
          "titleEn": "Schematic / Code Diagram 2",
          "titleSi": "පරිපථ / කේත සටහන 2",
          "contentEn": "AND Gate followed by NOT Inverter:\n  A ---|        |  )---[AND Output]--->|o--- Q = (A · B)'\n  B ---| /\n\n  Standard NAND Gate Symbol:\n  A ---|        |  )o--- Q = (A · B)'\n  B ---| /",
          "contentSi": "AND Gate followed by NOT Inverter:\n  A ---|        |  )---[AND Output]--->|o--- Q = (A · B)'\n  B ---| /\n\n  Standard NAND Gate Symbol:\n  A ---|        |  )o--- Q = (A · B)'\n  B ---| /"
        },
        {
          "id": "ex-4-3-3",
          "titleEn": "Schematic / Code Diagram 3",
          "titleSi": "පරිපථ / කේත සටහන 3",
          "contentEn": "A --)\\        ) )--- Q = A ⊕ B\n  B --)/ /",
          "contentSi": "A --)\\        ) )--- Q = A ⊕ B\n  B --)/ /"
        },
        {
          "id": "ex-4-3-4",
          "titleEn": "Schematic / Code Diagram 4",
          "titleSi": "පරිපථ / කේත සටහන 4",
          "contentEn": "A ----+------>|o---[A']-----        |                        |         |   +------------------->|  )----[A'B]----        |   |                    | /                       |   |                                       \\ ---\\         |   |                                        )    )--- Q = A'B + AB'\n        |   +-------->|o---[B']--\\                  / ---/ /\n        |                        | \\               /\n        +----------------------->|  )----[AB']----/\n                                 | /",
          "contentSi": "A ----+------>|o---[A']-----        |                        |         |   +------------------->|  )----[A'B]----        |   |                    | /                       |   |                                       \\ ---\\         |   |                                        )    )--- Q = A'B + AB'\n        |   +-------->|o---[B']--\\                  / ---/ /\n        |                        | \\               /\n        +----------------------->|  )----[AB']----/\n                                 | /"
        },
        {
          "id": "ex-4-3-5",
          "titleEn": "Schematic / Code Diagram 5",
          "titleSi": "පරිපථ / කේත සටහන 5",
          "contentEn": "A --)\\        ) )o--- Q = (A ⊕ B)'\n  B --)/ /",
          "contentSi": "A --)\\        ) )o--- Q = (A ⊕ B)'\n  B --)/ /"
        }
      ],
      "tableData": {
        "headers": [
          {
            "en": "Input A",
            "si": "Input A"
          },
          {
            "en": "Input B",
            "si": "Input B"
          },
          {
            "en": "OR $(A + B)$",
            "si": "OR $(A + B)$"
          },
          {
            "en": "Output $Q = \\overline{A + B}$",
            "si": "Output $Q = \\overline{A + B}$"
          }
        ],
        "rows": [
          {
            "col0": {
              "en": "0",
              "si": ""
            },
            "col1": {
              "en": "0",
              "si": ""
            },
            "col2": {
              "en": "0",
              "si": ""
            },
            "col3": {
              "en": "1",
              "si": "1"
            }
          },
          {
            "col0": {
              "en": "0",
              "si": ""
            },
            "col1": {
              "en": "1",
              "si": ""
            },
            "col2": {
              "en": "1",
              "si": ""
            },
            "col3": {
              "en": "0",
              "si": "0"
            }
          },
          {
            "col0": {
              "en": "1",
              "si": ""
            },
            "col1": {
              "en": "0",
              "si": ""
            },
            "col2": {
              "en": "1",
              "si": ""
            },
            "col3": {
              "en": "0",
              "si": "0"
            }
          },
          {
            "col0": {
              "en": "1",
              "si": ""
            },
            "col1": {
              "en": "1",
              "si": ""
            },
            "col2": {
              "en": "1",
              "si": ""
            },
            "col3": {
              "en": "0",
              "si": "0"
            }
          },
          {
            "col0": {
              "en": "Input A",
              "si": "Input A"
            },
            "col1": {
              "en": "Input B",
              "si": "Input B"
            },
            "col2": {
              "en": "AND $(A \\cdot B)$",
              "si": "AND $(A \\cdot B)$"
            },
            "col3": {
              "en": "Output $Q = \\overline{A \\cdot B}$",
              "si": "Output $Q = \\overline{A \\cdot B}$"
            }
          },
          {
            "col0": {
              "en": ":---:",
              "si": ":---:"
            },
            "col1": {
              "en": ":---:",
              "si": ":---:"
            },
            "col2": {
              "en": ":---:",
              "si": ":---:"
            },
            "col3": {
              "en": ":---:",
              "si": ":---:"
            }
          },
          {
            "col0": {
              "en": "0",
              "si": ""
            },
            "col1": {
              "en": "0",
              "si": ""
            },
            "col2": {
              "en": "0",
              "si": ""
            },
            "col3": {
              "en": "1",
              "si": "1"
            }
          },
          {
            "col0": {
              "en": "0",
              "si": ""
            },
            "col1": {
              "en": "1",
              "si": ""
            },
            "col2": {
              "en": "0",
              "si": ""
            },
            "col3": {
              "en": "1",
              "si": "1"
            }
          },
          {
            "col0": {
              "en": "1",
              "si": ""
            },
            "col1": {
              "en": "0",
              "si": ""
            },
            "col2": {
              "en": "0",
              "si": ""
            },
            "col3": {
              "en": "1",
              "si": "1"
            }
          },
          {
            "col0": {
              "en": "1",
              "si": ""
            },
            "col1": {
              "en": "1",
              "si": ""
            },
            "col2": {
              "en": "1",
              "si": ""
            },
            "col3": {
              "en": "0",
              "si": "0"
            }
          },
          {
            "col0": {
              "en": "Input A",
              "si": "Input A"
            },
            "col1": {
              "en": "Input B",
              "si": "Input B"
            },
            "col2": {
              "en": "Output $Q = A \\oplus B$",
              "si": "Output $Q = A \\oplus B$"
            },
            "col3": {
              "en": "",
              "si": ""
            }
          },
          {
            "col0": {
              "en": ":---:",
              "si": ":---:"
            },
            "col1": {
              "en": ":---:",
              "si": ":---:"
            },
            "col2": {
              "en": ":---:",
              "si": ":---:"
            },
            "col3": {
              "en": "",
              "si": ""
            }
          },
          {
            "col0": {
              "en": "0",
              "si": ""
            },
            "col1": {
              "en": "0",
              "si": ""
            },
            "col2": {
              "en": "0",
              "si": "0"
            },
            "col3": {
              "en": "",
              "si": ""
            }
          },
          {
            "col0": {
              "en": "0",
              "si": ""
            },
            "col1": {
              "en": "1",
              "si": ""
            },
            "col2": {
              "en": "1",
              "si": "1"
            },
            "col3": {
              "en": "",
              "si": ""
            }
          },
          {
            "col0": {
              "en": "1",
              "si": ""
            },
            "col1": {
              "en": "0",
              "si": ""
            },
            "col2": {
              "en": "1",
              "si": "1"
            },
            "col3": {
              "en": "",
              "si": ""
            }
          },
          {
            "col0": {
              "en": "1",
              "si": ""
            },
            "col1": {
              "en": "1",
              "si": ""
            },
            "col2": {
              "en": "0",
              "si": "0"
            },
            "col3": {
              "en": "",
              "si": ""
            }
          },
          {
            "col0": {
              "en": "+-------->",
              "si": "+-------->"
            },
            "col1": {
              "en": "",
              "si": ""
            },
            "col2": {
              "en": "",
              "si": ""
            },
            "col3": {
              "en": "",
              "si": ""
            }
          },
          {
            "col0": {
              "en": "",
              "si": ""
            },
            "col1": {
              "en": "",
              "si": ""
            },
            "col2": {
              "en": "",
              "si": ""
            },
            "col3": {
              "en": "",
              "si": ""
            }
          },
          {
            "col0": {
              "en": "Input A",
              "si": "Input A"
            },
            "col1": {
              "en": "Input B",
              "si": "Input B"
            },
            "col2": {
              "en": "XOR $(A \\oplus B)$",
              "si": "XOR $(A \\oplus B)$"
            },
            "col3": {
              "en": "Output $Q = \\overline{A \\oplus B}$",
              "si": "Output $Q = \\overline{A \\oplus B}$"
            }
          },
          {
            "col0": {
              "en": ":---:",
              "si": ":---:"
            },
            "col1": {
              "en": ":---:",
              "si": ":---:"
            },
            "col2": {
              "en": ":---:",
              "si": ":---:"
            },
            "col3": {
              "en": ":---:",
              "si": ":---:"
            }
          },
          {
            "col0": {
              "en": "0",
              "si": ""
            },
            "col1": {
              "en": "0",
              "si": ""
            },
            "col2": {
              "en": "0",
              "si": ""
            },
            "col3": {
              "en": "1",
              "si": "1"
            }
          },
          {
            "col0": {
              "en": "0",
              "si": ""
            },
            "col1": {
              "en": "1",
              "si": ""
            },
            "col2": {
              "en": "1",
              "si": ""
            },
            "col3": {
              "en": "0",
              "si": "0"
            }
          },
          {
            "col0": {
              "en": "1",
              "si": ""
            },
            "col1": {
              "en": "0",
              "si": ""
            },
            "col2": {
              "en": "1",
              "si": ""
            },
            "col3": {
              "en": "0",
              "si": "0"
            }
          },
          {
            "col0": {
              "en": "1",
              "si": ""
            },
            "col1": {
              "en": "1",
              "si": ""
            },
            "col2": {
              "en": "0",
              "si": ""
            },
            "col3": {
              "en": "1",
              "si": "1"
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g10-u3-10",
        "questionEn": "Which of the following is the most accurate concept regarding Combinational / Derived Logic Gates?",
        "questionSi": "සංයුක්ත / ව්‍යුත්පන්න ලොජික් ද්වාර පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Combinational / Derived Logic Gates",
            "si": "සංයුක්ත / ව්‍යුත්පන්න ලොජික් ද්වාර පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Combinational / Derived Logic Gates.",
        "explanationSi": "1 වන වරණය මගින් සංයුක්ත / ව්‍යුත්පන්න ලොජික් ද්වාර පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g10-u3-st-11",
      "number": "4.4",
      "titleEn": "3-Input Logic Gate Extensions",
      "titleSi": "ආදාන 3 ප්‍රසාරණ",
      "summaryEn": "3-Input Logic Gate Extensions concepts, definitions, and examination competencies.",
      "summarySi": "ආදාන 3 ප්‍රසාරණ සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g10-u3-11-1",
          "en": "#### 4.4.1 3-Input AND Gate & 3-Input OR Gate",
          "si": "#### 4.4.1 3-Input AND Gate & 3-Input OR Gate",
          "highlightTerm": "Input AND Gate & 3-Input OR Gate"
        },
        {
          "id": "b-g10-u3-11-2",
          "en": "3-Input AND Gate ($Q = A \\cdot B \\cdot C$):**\n* *Truth Rule:* Output $Q=1$ ONLY when $A=1, B=1, C=1$.",
          "si": "3-Input AND Gate ($Q = A \\cdot B \\cdot C$):**\n* *Truth Rule:* Output $Q=1$ ONLY when $A=1, B=1, C=1$.",
          "highlightTerm": "Input AND Gate"
        },
        {
          "id": "b-g10-u3-11-3",
          "en": "3-Input OR Gate ($Q = A + B + C$):**\n* *Truth Rule:* Output $Q=1$ if ANY input ($A, B,$ or $C$) is $1$.",
          "si": "3-Input OR Gate ($Q = A + B + C$):**\n* *Truth Rule:* Output $Q=1$ if ANY input ($A, B,$ or $C$) is $1$.",
          "highlightTerm": "Input OR Gate"
        },
        {
          "id": "b-g10-u3-11-4",
          "en": "Complete 8-Row Truth Table for 3-Input Gates:",
          "si": "Complete 8-Row Truth Table for 3-Input Gates:",
          "highlightTerm": "Complete 8-Row Truth Table for 3-Input Gates"
        }
      ],
      "examples": [
        {
          "id": "ex-4-4-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "A ---|   B ---|  )--- Q = A · B · C\n  C ---| /",
          "contentSi": "A ---|   B ---|  )--- Q = A · B · C\n  C ---| /"
        },
        {
          "id": "ex-4-4-2",
          "titleEn": "Schematic / Code Diagram 2",
          "titleSi": "පරිපථ / කේත සටහන 2",
          "contentEn": "A ---\\   B ----) )--- Q = A + B + C\n  C ---/ /",
          "contentSi": "A ---\\   B ----) )--- Q = A + B + C\n  C ---/ /"
        }
      ],
      "tableData": {
        "headers": [
          {
            "en": "Input A",
            "si": "Input A"
          },
          {
            "en": "Input B",
            "si": "Input B"
          },
          {
            "en": "Input C",
            "si": "Input C"
          },
          {
            "en": "Input AND",
            "si": "$A \\cdot B \\cdot C$"
          },
          {
            "en": "Input OR",
            "si": "$A + B + C$"
          },
          {
            "en": "Input NAND",
            "si": "$\\overline{A \\cdot B \\cdot C}$"
          },
          {
            "en": "Input NOR",
            "si": "$\\overline{A + B + C}$"
          }
        ],
        "rows": [
          {
            "col0": {
              "en": "0",
              "si": ""
            },
            "col1": {
              "en": "0",
              "si": ""
            },
            "col2": {
              "en": "0",
              "si": ""
            },
            "col3": {
              "en": "0",
              "si": "0"
            },
            "col4": {
              "en": "0",
              "si": "0"
            },
            "col5": {
              "en": "1",
              "si": "1"
            },
            "col6": {
              "en": "1",
              "si": "1"
            }
          },
          {
            "col0": {
              "en": "0",
              "si": ""
            },
            "col1": {
              "en": "0",
              "si": ""
            },
            "col2": {
              "en": "1",
              "si": ""
            },
            "col3": {
              "en": "0",
              "si": "0"
            },
            "col4": {
              "en": "1",
              "si": "1"
            },
            "col5": {
              "en": "1",
              "si": "1"
            },
            "col6": {
              "en": "0",
              "si": "0"
            }
          },
          {
            "col0": {
              "en": "0",
              "si": ""
            },
            "col1": {
              "en": "1",
              "si": ""
            },
            "col2": {
              "en": "0",
              "si": ""
            },
            "col3": {
              "en": "0",
              "si": "0"
            },
            "col4": {
              "en": "1",
              "si": "1"
            },
            "col5": {
              "en": "1",
              "si": "1"
            },
            "col6": {
              "en": "0",
              "si": "0"
            }
          },
          {
            "col0": {
              "en": "0",
              "si": ""
            },
            "col1": {
              "en": "1",
              "si": ""
            },
            "col2": {
              "en": "1",
              "si": ""
            },
            "col3": {
              "en": "0",
              "si": "0"
            },
            "col4": {
              "en": "1",
              "si": "1"
            },
            "col5": {
              "en": "1",
              "si": "1"
            },
            "col6": {
              "en": "0",
              "si": "0"
            }
          },
          {
            "col0": {
              "en": "1",
              "si": ""
            },
            "col1": {
              "en": "0",
              "si": ""
            },
            "col2": {
              "en": "0",
              "si": ""
            },
            "col3": {
              "en": "0",
              "si": "0"
            },
            "col4": {
              "en": "1",
              "si": "1"
            },
            "col5": {
              "en": "1",
              "si": "1"
            },
            "col6": {
              "en": "0",
              "si": "0"
            }
          },
          {
            "col0": {
              "en": "1",
              "si": ""
            },
            "col1": {
              "en": "0",
              "si": ""
            },
            "col2": {
              "en": "1",
              "si": ""
            },
            "col3": {
              "en": "0",
              "si": "0"
            },
            "col4": {
              "en": "1",
              "si": "1"
            },
            "col5": {
              "en": "1",
              "si": "1"
            },
            "col6": {
              "en": "0",
              "si": "0"
            }
          },
          {
            "col0": {
              "en": "1",
              "si": ""
            },
            "col1": {
              "en": "1",
              "si": ""
            },
            "col2": {
              "en": "0",
              "si": ""
            },
            "col3": {
              "en": "0",
              "si": "0"
            },
            "col4": {
              "en": "1",
              "si": "1"
            },
            "col5": {
              "en": "1",
              "si": "1"
            },
            "col6": {
              "en": "0",
              "si": "0"
            }
          },
          {
            "col0": {
              "en": "1",
              "si": ""
            },
            "col1": {
              "en": "1",
              "si": ""
            },
            "col2": {
              "en": "1",
              "si": ""
            },
            "col3": {
              "en": "1",
              "si": "1"
            },
            "col4": {
              "en": "1",
              "si": "1"
            },
            "col5": {
              "en": "0",
              "si": "0"
            },
            "col6": {
              "en": "0",
              "si": "0"
            }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g10-u3-11",
        "questionEn": "Which of the following is the most accurate concept regarding 3-Input Logic Gate Extensions?",
        "questionSi": "ආදාන 3 ප්‍රසාරණ පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of 3-Input Logic Gate Extensions",
            "si": "ආදාන 3 ප්‍රසාරණ පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for 3-Input Logic Gate Extensions.",
        "explanationSi": "1 වන වරණය මගින් ආදාන 3 ප්‍රසාරණ පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    },
    {
      "id": "g10-u3-st-12",
      "number": "4.5",
      "titleEn": "Integrated Circuit",
      "titleSi": "IC) Pin Layouts (අනුකලිත පරිපථ කෙවෙනි සැකස්ම",
      "summaryEn": "Integrated Circuit concepts, definitions, and examination competencies.",
      "summarySi": "IC) Pin Layouts (අනුකලිත පරිපථ කෙවෙනි සැකස්ම සංකල්ප, අර්ථ දැක්වීම් සහ විභාග නිපුණතා.",
      "blocks": [
        {
          "id": "b-g10-u3-12-1",
          "en": "In practical electronics, logic gates are available as 14-pin Dual In-line Package (DIP) Integrated Circuits.",
          "si": "In practical electronics, logic gates are available as 14-pin Dual In-line Package (DIP) Integrated Circuits.",
          "highlightTerm": "In practical electronics, logic gates are available as 14-pin Dual In-line Package (DIP) Integrated Circuits"
        },
        {
          "id": "b-g10-u3-12-2",
          "en": "#### 4.5.1 7400 IC - Quad 2-Input NAND Gate",
          "si": "#### 4.5.1 7400 IC - Quad 2-Input NAND Gate",
          "highlightTerm": "IC - Quad 2-Input NAND Gate"
        },
        {
          "id": "b-g10-u3-12-3",
          "en": "Pin Allocation Table:**\n- **Pin 14:** $V_{CC}$ (+5V Power Supply)\n- **Pin 7:** GND (Ground / 0V)\n- **Gate 1:** Pins 1 (In A), 2 (In B) $\\rightarrow$ Pin 3 (Out Y)\n- **Gate 2:** Pins 4 (In A), 5 (In B) $\\rightarrow$ Pin 6 (Out Y)\n- **Gate 3:** Pins 9 (In A), 10 (In B) $\\rightarrow$ Pin 8 (Out Y)\n- **Gate 4:** Pins 12 (In A), 13 (In B) $\\rightarrow$ Pin 11 (Out Y)",
          "si": "Pin Allocation Table:**\n- **Pin 14:** $V_{CC}$ (+5V Power Supply)\n- **Pin 7:** GND (Ground / 0V)\n- **Gate 1:** Pins 1 (In A), 2 (In B) $\\rightarrow$ Pin 3 (Out Y)\n- **Gate 2:** Pins 4 (In A), 5 (In B) $\\rightarrow$ Pin 6 (Out Y)\n- **Gate 3:** Pins 9 (In A), 10 (In B) $\\rightarrow$ Pin 8 (Out Y)\n- **Gate 4:** Pins 12 (In A), 13 (In B) $\\rightarrow$ Pin 11 (Out Y)",
          "highlightTerm": "Pin Allocation Table"
        },
        {
          "id": "b-g10-u3-12-4",
          "en": "#### 4.5.2 7402 IC - Quad 2-Input NOR Gate",
          "si": "#### 4.5.2 7402 IC - Quad 2-Input NOR Gate",
          "highlightTerm": "IC - Quad 2-Input NOR Gate"
        },
        {
          "id": "b-g10-u3-12-5",
          "en": "Critical Note (වැදගත් සටහන):** Unlike the 7400 IC, the 7402 NOR IC has its outputs on Pins 1, 4, 10, and 13 (Inputs are on 2,3 and 5,6).",
          "si": "Critical Note (වැදගත් සටහන):** Unlike the 7400 IC, the 7402 NOR IC has its outputs on Pins 1, 4, 10, and 13 (Inputs are on 2,3 and 5,6).",
          "highlightTerm": "Critical Note"
        },
        {
          "id": "b-g10-u3-12-6",
          "en": "#### 4.5.3 IC Summary Reference Table:",
          "si": "#### 4.5.3 IC Summary Reference Table:",
          "highlightTerm": "IC Summary Reference Table"
        },
        {
          "id": "b-g10-u3-12-7",
          "en": "7404 IC:** Hex Inverter (6 NOT Gates)",
          "si": "7404 IC:** Hex Inverter (6 NOT Gates)",
          "highlightTerm": "IC:** Hex Inverter"
        },
        {
          "id": "b-g10-u3-12-8",
          "en": "7408 IC:** Quad 2-Input AND Gate",
          "si": "7408 IC:** Quad 2-Input AND Gate",
          "highlightTerm": "IC:** Quad 2-Input AND Gate"
        },
        {
          "id": "b-g10-u3-12-9",
          "en": "7432 IC:** Quad 2-Input OR Gate",
          "si": "7432 IC:** Quad 2-Input OR Gate",
          "highlightTerm": "IC:** Quad 2-Input OR Gate"
        },
        {
          "id": "b-g10-u3-12-10",
          "en": "7486 IC:** Quad 2-Input XOR Gate",
          "si": "7486 IC:** Quad 2-Input XOR Gate",
          "highlightTerm": "IC:** Quad 2-Input XOR Gate"
        }
      ],
      "examples": [
        {
          "id": "ex-4-5-1",
          "titleEn": "Schematic / Code Diagram 1",
          "titleSi": "පරිපථ / කේත සටහන 1",
          "contentEn": "7400 IC (Quad 2-Input NAND)\n                              ┌───┬───┐\n                   1A  ──  1 ─┤   └───┤─ 14 ── VCC (+5V)\n                   1B  ──  2 ─┤       ├─ 13 ── 4B\n                   1Y  ──  3 ─┤       ├─ 12 ── 4A\n                   2A  ──  4 ─┤       ├─ 11 ── 4Y\n                   2B  ──  5 ─┤       ├─ 10 ── 3B\n                   2Y  ──  6 ─┤       ├─ 9  ── 3A\n                  GND  ──  7 ─┤       ├─ 8  ── 3Y\n                              └───────┘",
          "contentSi": "7400 IC (Quad 2-Input NAND)\n                              ┌───┬───┐\n                   1A  ──  1 ─┤   └───┤─ 14 ── VCC (+5V)\n                   1B  ──  2 ─┤       ├─ 13 ── 4B\n                   1Y  ──  3 ─┤       ├─ 12 ── 4A\n                   2A  ──  4 ─┤       ├─ 11 ── 4Y\n                   2B  ──  5 ─┤       ├─ 10 ── 3B\n                   2Y  ──  6 ─┤       ├─ 9  ── 3A\n                  GND  ──  7 ─┤       ├─ 8  ── 3Y\n                              └───────┘"
        },
        {
          "id": "ex-4-5-2",
          "titleEn": "Schematic / Code Diagram 2",
          "titleSi": "පරිපථ / කේත සටහන 2",
          "contentEn": "7402 IC (Quad 2-Input NOR)\n                              ┌───┬───┐\n                   1Y  ──  1 ─┤   └───┤─ 14 ── VCC (+5V)\n                   1A  ──  2 ─┤       ├─ 13 ── 4Y\n                   1B  ──  3 ─┤       ├─ 12 ── 4B\n                   2Y  ──  4 ─┤       ├─ 11 ── 4A\n                   2A  ──  5 ─┤       ├─ 10 ── 3Y\n                   2B  ──  6 ─┤       ├─ 9  ── 3B\n                  GND  ──  7 ─┤       ├─ 8  ── 3A\n                              └───────┘",
          "contentSi": "7402 IC (Quad 2-Input NOR)\n                              ┌───┬───┐\n                   1Y  ──  1 ─┤   └───┤─ 14 ── VCC (+5V)\n                   1A  ──  2 ─┤       ├─ 13 ── 4Y\n                   1B  ──  3 ─┤       ├─ 12 ── 4B\n                   2Y  ──  4 ─┤       ├─ 11 ── 4A\n                   2A  ──  5 ─┤       ├─ 10 ── 3Y\n                   2B  ──  6 ─┤       ├─ 9  ── 3B\n                  GND  ──  7 ─┤       ├─ 8  ── 3A\n                              └───────┘"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g10-u3-12",
        "questionEn": "Which of the following is the most accurate concept regarding Integrated Circuit?",
        "questionSi": "IC) Pin Layouts (අනුකලිත පරිපථ කෙවෙනි සැකස්ම පිළිබඳව වඩාත්ම නිවැරදි කරුණ කුමක්ද?",
        "options": [
          {
            "id": "1",
            "en": "Key official syllabus competency and textbook definition of Integrated Circuit",
            "si": "IC) Pin Layouts (අනුකලිත පරිපථ කෙවෙනි සැකස්ම පිළිබඳ නිල විෂය නිර්දේශ නිර්වචනය සහ සංකල්පය"
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
        "explanationEn": "Option 1 correctly presents the primary curriculum concept for Integrated Circuit.",
        "explanationSi": "1 වන වරණය මගින් IC) Pin Layouts (අනුකලිත පරිපථ කෙවෙනි සැකස්ම පිළිබඳ නිල පෙළපොත් නිර්දේශය නිවැරදිව දක්වයි."
      }
    }
  ],
  "pastPaperQuestions": [
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
          "en": "$64_{16}, 226_8, 200_{10}, 101011_2$",
          "si": "$64_{16}, 226_8, 200_{10}, 101011_2$"
        },
        {
          "id": "2",
          "en": "$101011_2, 64_{16}, 226_8, 200_{10}$",
          "si": "$101011_2, 64_{16}, 226_8, 200_{10}$"
        },
        {
          "id": "3",
          "en": "$101011_2, 64_{16}, 200_{10}, 226_8$",
          "si": "$101011_2, 64_{16}, 200_{10}, 226_8$"
        },
        {
          "id": "4",
          "en": "$200_{10}, 226_8, 101011_2, 64_{16}$",
          "si": "$200_{10}, 226_8, 101011_2, 64_{16}$"
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
      "questionEn": "1. (iii) (a) Convert the octal number $867_8$ to its binary equivalent. Show the major steps of your calculation.\" *(Note: Official paper text)*",
      "questionSi": "1. (iii) (a) $867_8$ අෂ්ටමය සංඛ්‍යාව එහි ද්විමය තුල්‍ය සංඛ්‍යාවට පරිවර්තනය කරන්න. ඔබේ ගණනය කිරීමේ ප්‍රධාන පියවර දක්වන්න.",
      "type": "structured",
      "sampleAnswerEn": "Octal to binary conversion: Each octal digit represents 3 binary bits.\nFor octal 867 (textbook typo note: 8 is invalid in base-8, standard 67_8 = 110 111_2 = 110111_2).",
      "sampleAnswerSi": "අෂ්ටමය සිට ද්විමය පරිවර්තනය: එක් එක් අෂ්ටමය ඉලක්කම සඳහා ද්විමය බිටු 3 බැගින් ලියනු ලැබේ.\n(67_8 = 110 111_2 = 110111_2).",
      "explanationEn": "Verbatim official examination question from 2020 O/L Paper II - Question 01 (iii) (a).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper II - Question 01 (iii) (a)."
    },
    {
      "id": "pp-g10-u3-2021-3",
      "year": 2021,
      "paperType": "Paper II",
      "badgeText": "2021 O/L Paper II - Question 01 (iii) (a)",
      "questionEn": "1. (iii) (a) Convert $47_{10}$ to its binary equivalent.",
      "questionSi": "1. (iii) (a) $47_{10}$ හි ද්විමය තුල්‍ය සංඛ්‍යාවට පරිවර්තනය කරන්න.",
      "type": "structured",
      "sampleAnswerEn": "Converting decimal 47 to binary by continuous division by 2:\n47 / 2 = 23 R 1\n23 / 2 = 11 R 1\n11 / 2 = 5 R 1\n5 / 2 = 2 R 1\n2 / 2 = 1 R 0\n1 / 2 = 0 R 1\nReading remainders from bottom to top: 47_10 = 101111_2.",
      "sampleAnswerSi": "47_10 දශමය සංඛ්‍යාව 2 න් බෙදීමේ ක්‍රමයෙන් ද්විමය බවට පත් කිරීම:\n47 / 2 = 23 ඉතිරිය 1\n23 / 2 = 11 ඉතිරිය 1\n11 / 2 = 5 ඉතිරිය 1\n5 / 2 = 2 ඉතිරිය 1\n2 / 2 = 1 ඉතිරිය 0\n1 / 2 = 0 ඉතිරිය 1\nයට සිට ඉහළට ඉතිරි අගයන් කියවීමෙන්: 47_10 = 101111_2.",
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
          "en": "$1000 0100_2$",
          "si": "$1000 0100_2$"
        },
        {
          "id": "2",
          "en": "$15_8$",
          "si": "$15_8$"
        },
        {
          "id": "3",
          "en": "$85_{10}$",
          "si": "$85_{10}$"
        },
        {
          "id": "4",
          "en": "$C2_{16}$",
          "si": "$C2_{16}$"
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
      "questionEn": "Which of the following is the decimal equivalent of binary $1000 0101_2$?",
      "questionSi": "$1000 0101_2$ ද්විමය සංඛ්‍යාවේ දශමය තුල්‍ය අගය කුමක්ද?",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "$85_{10}$",
          "si": "$85_{10}$"
        },
        {
          "id": "2",
          "en": "$133_{10}$",
          "si": "$133_{10}$"
        },
        {
          "id": "3",
          "en": "$161_{10}$",
          "si": "$161_{10}$"
        },
        {
          "id": "4",
          "en": "$266_{10}$",
          "si": "$266_{10}$"
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
      "questionEn": "Which of the following is the hexadecimal equivalent of octal $1156_8$?",
      "questionSi": "$1156_8$ අෂ්ටමය සංඛ්‍යාවේ ෂඩ්දශමය තුල්‍ය අගය කුමක්ද?",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "$26E_{16}$",
          "si": "$26E_{16}$"
        },
        {
          "id": "2",
          "en": "$484_{16}$",
          "si": "$484_{16}$"
        },
        {
          "id": "3",
          "en": "$109C_{16}$",
          "si": "$109C_{16}$"
        },
        {
          "id": "4",
          "en": "$2204_{16}$",
          "si": "$2204_{16}$"
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
      "questionEn": "Which of the following is the octal equivalent of decimal $216_{10}$?",
      "questionSi": "දශමය $216_{10}$ ට තුල්‍ය අෂ්ටමය සංඛ්‍යාව කුමක්ද?",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "$40_8$",
          "si": "$40_8$"
        },
        {
          "id": "2",
          "en": "$43_8$",
          "si": "$43_8$"
        },
        {
          "id": "3",
          "en": "$73_8$",
          "si": "$73_8$"
        },
        {
          "id": "4",
          "en": "$330_8$",
          "si": "$330_8$"
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
      "questionEn": "Which of the following is the decimal equivalent of binary $1000 1000_2$?",
      "questionSi": "ද්විමය $1000 1000_2$ ට තුල්‍ය දශමය සංඛ්‍යාව කුමක්ද?",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "$24_{10}$",
          "si": "$24_{10}$"
        },
        {
          "id": "2",
          "en": "$136_{10}$",
          "si": "$136_{10}$"
        },
        {
          "id": "3",
          "en": "$272_{10}$",
          "si": "$272_{10}$"
        },
        {
          "id": "4",
          "en": "$1024_{10}$",
          "si": "$1024_{10}$"
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
      "questionEn": "Which of the following is the hexadecimal equivalent of octal $1572_8$?",
      "questionSi": "අෂ්ටමය $1572_8$ ට තුල්‍ය ෂඩ්දශමය සංඛ්‍යාව කුමක්ද?",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "$DE8_{16}$",
          "si": "$DE8_{16}$"
        },
        {
          "id": "2",
          "en": "$37A_{16}$",
          "si": "$37A_{16}$"
        },
        {
          "id": "3",
          "en": "$3710_{16}$",
          "si": "$3710_{16}$"
        },
        {
          "id": "4",
          "en": "$12562_{16}$",
          "si": "$12562_{16}$"
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
      "questionEn": "Which of the following is the octal equivalent of binary $1000110_2$?",
      "questionSi": "ද්විමය $1000110_2$ ට තුල්‍ය අෂ්ටක සංඛ්‍යාව කුමක්ද?",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "$46_8$",
          "si": "$46_8$"
        },
        {
          "id": "2",
          "en": "$70_8$",
          "si": "$70_8$"
        },
        {
          "id": "3",
          "en": "$106_8$",
          "si": "$106_8$"
        },
        {
          "id": "4",
          "en": "$430_8$",
          "si": "$430_8$"
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
      "questionEn": "Which of the following is the decimal equivalent of binary $10001000_2$?",
      "questionSi": "ද්විමය $10001000_2$ ට තුල්‍ය දශමය සංඛ්‍යාව කුමක්ද?",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "$64_{10}$",
          "si": "$64_{10}$"
        },
        {
          "id": "2",
          "en": "$132_{10}$",
          "si": "$132_{10}$"
        },
        {
          "id": "3",
          "en": "$136_{10}$",
          "si": "$136_{10}$"
        },
        {
          "id": "4",
          "en": "$260_{10}$",
          "si": "$260_{10}$"
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
      "questionEn": "1. (iii) (a) Write down the binary equivalent of $74_{10}$.\n  (b) Write down the hexadecimal equivalent of $1046_8$.",
      "questionSi": "1. (iii) (a) $74_{10}$ හි ද්විමය තුල්‍ය සංඛ්‍යාව ලියන්න.\n  (b) $1046_8$ හි ෂඩ්දශමය තුල්‍ය සංඛ්‍යාව ලියන්න.",
      "type": "structured",
      "sampleAnswerEn": "Binary addition: 1101_2 + 1011_2 = 11000_2.\nBinary subtraction: 1101_2 - 1001_2 = 0100_2 (or 100_2).",
      "sampleAnswerSi": "ද්විමය එකතු කිරීම: 1101_2 + 1011_2 = 11000_2.\nද්විමය අඩු කිරීම: 1101_2 - 1001_2 = 0100_2 (හෝ 100_2).",
      "explanationEn": "Verbatim official examination question from 2024 O/L Paper II - Question 01 (iii).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2024 O/L Paper II - Question 01 (iii)."
    },
    {
      "id": "pp-g10-u3-2020-13",
      "year": 2020,
      "paperType": "Paper II",
      "badgeText": "2020 O/L Paper II - Question 01 (iii) (b)",
      "questionEn": "1. (iii) (b) If $1011010_2$ represents character 'Z' in ASCII code, what is the ASCII code for character 'X'?",
      "questionSi": "1. (iii) (b) $1011010_2$ මගින් ASCII හි 'Z' නිරූපණය වේ නම්, 'X' අක්ෂරයේ ASCII කේතය කුමක්ද?",
      "type": "structured",
      "sampleAnswerEn": "Octal to binary conversion: Each octal digit represents 3 binary bits.\nFor octal 867 (textbook typo note: 8 is invalid in base-8, standard 67_8 = 110 111_2 = 110111_2).",
      "sampleAnswerSi": "අෂ්ටමය සිට ද්විමය පරිවර්තනය: එක් එක් අෂ්ටමය ඉලක්කම සඳහා ද්විමය බිටු 3 බැගින් ලියනු ලැබේ.\n(67_8 = 110 111_2 = 110111_2).",
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
      "sampleAnswerEn": "Converting decimal 47 to binary by continuous division by 2:\n47 / 2 = 23 R 1\n23 / 2 = 11 R 1\n11 / 2 = 5 R 1\n5 / 2 = 2 R 1\n2 / 2 = 1 R 0\n1 / 2 = 0 R 1\nReading remainders from bottom to top: 47_10 = 101111_2.",
      "sampleAnswerSi": "47_10 දශමය සංඛ්‍යාව 2 න් බෙදීමේ ක්‍රමයෙන් ද්විමය බවට පත් කිරීම:\n47 / 2 = 23 ඉතිරිය 1\n23 / 2 = 11 ඉතිරිය 1\n11 / 2 = 5 ඉතිරිය 1\n5 / 2 = 2 ඉතිරිය 1\n2 / 2 = 1 ඉතිරිය 0\n1 / 2 = 0 ඉතිරිය 1\nයට සිට ඉහළට ඉතිරි අගයන් කියවීමෙන්: 47_10 = 101111_2.",
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
      "questionEn": "Which of the following statements are true regarding the ASCII coding system?\n  A – Characters E and e are represented using the same code.\n  B – # and $ symbols have different codes.\n  C – Sinhala characters do not have ASCII codes.",
      "questionSi": "ASCII කේත ක්‍රමය සම්බන්ධයෙන් පහත කවර ප්‍රකාශ නිවැරදි වේද?\n  A – අක්ෂර E සහ e එකම කේතයෙන් නිරූපණය වේ.\n  B – # සහ $ සංකේත සඳහා වෙනස් කේත ඇත.\n  C – සිංහල අක්ෂර සඳහා ASCII කේත නොමැත.",
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
          "en": "$1024 \\text{ KB}.$",
          "si": "$1024 \\text{ KB} \\text{ වලට වේ.}$"
        },
        {
          "id": "2",
          "en": "$1024 \\times 1024 \\text{ KB}.$",
          "si": "$1024 \\times 1024 \\text{ KB} \\text{ වලට වේ.}$"
        },
        {
          "id": "3",
          "en": "$1024 \\times 1024 \\times 1024 \\text{ KB}.$",
          "si": "$1024 \\times 1024 \\times 1024 \\text{ KB} \\text{ වලට වේ.}$"
        },
        {
          "id": "4",
          "en": "$1024 \\times 1024 \\times 1024 \\times 1024 \\text{ KB}.$",
          "si": "$1024 \\times 1024 \\times 1024 \\times 1024 \\text{ KB} \\text{ වලට වේ.}"
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
    },
    {
      "id": "pp-g10-u3-2020-25",
      "year": 2020,
      "paperType": "Paper I",
      "badgeText": "2020 O/L Paper I - Question 34",
      "questionEn": "Which of the following truth tables represents the output of a 2-input NOR gate?",
      "questionSi": "ආදාන 2ක් සහිත NOR ද්වාරයක ප්‍රතිදානය නිරූපණය වන සත්‍යතා වගුව කුමක්ද?",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "[A=0, B=0 -> 0; A=0, B=1 -> 1; A=1, B=0 -> 1; A=1, B=1 -> 1]",
          "si": "[0,0->0; 0,1->1; 1,0->1; 1,1->1]"
        },
        {
          "id": "2",
          "en": "[A=0, B=0 -> 1; A=0, B=1 -> 0; A=1, B=0 -> 0; A=1, B=1 -> 0]",
          "si": "[0,0->1; 0,1->0; 1,0->0; 1,1->0]"
        },
        {
          "id": "3",
          "en": "[A=0, B=0 -> 1; A=0, B=1 -> 1; A=1, B=0 -> 1; A=1, B=1 -> 0]",
          "si": "[0,0->1; 0,1->1; 1,0->1; 1,1->0]"
        },
        {
          "id": "4",
          "en": "[A=0, B=0 -> 0; A=0, B=1 -> 0; A=1, B=0 -> 0; A=1, B=1 -> 1]",
          "si": "[0,0->0; 0,1->0; 1,0->0; 1,1->1]"
        }
      ],
      "correctOptionId": "2",
      "explanationEn": "Verbatim official examination question from 2020 O/L Paper I - Question 34.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper I - Question 34."
    },
    {
      "id": "pp-g10-u3-2020-26",
      "year": 2020,
      "paperType": "Paper II",
      "badgeText": "2020 O/L Paper II - Question 01 (iv)",
      "questionEn": "1. (iv) Draw the logic circuit diagram for the Boolean expression $P = A \\cdot B + C \\cdot D$ using basic logic gates.",
      "questionSi": "1. (iv) මූලික ලොජික් ද්වාර භාවිත කරමින් $P = A \\cdot B + C \\cdot D$ බූලියානු ප්‍රකාශනය සඳහා ලොජික් පරිපථ සටහන අඳින්න.",
      "type": "structured",
      "sampleAnswerEn": "```\n  A ---|        |  )---[A·B]----  B ---| /                                       \\ ---\\                           )    )--- P = A·B + C·D\n                         / ---/ /\n  C ---| \\              /\n       |  )---[C·D]----/\n  D ---| /\n  ```\n\n---",
      "sampleAnswerSi": "```\n  A ---|        |  )---[A·B]----  B ---| /                                       \\ ---\\                           )    )--- P = A·B + C·D\n                         / ---/ /\n  C ---| \\              /\n       |  )---[C·D]----/\n  D ---| /\n  ```\n\n---",
      "explanationEn": "Verbatim official examination question from 2020 O/L Paper II - Question 01 (iv).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2020 O/L Paper II - Question 01 (iv)."
    },
    {
      "id": "pp-g10-u3-2021-27",
      "year": 2021,
      "paperType": "Paper I",
      "badgeText": "2021 O/L Paper I - Question 39",
      "questionEn": "Consider the logic circuit given below:\n  Inputs A and B are connected to a NAND gate. If $B = 1$, what is the output $Q$?",
      "questionSi": "පහත දැක්වෙන ලොජික් පරිපථය සලකන්න:\n  A සහ B ආදාන NAND ද්වාරයකට සම්බන්ධ කර ඇත. $B = 1$ නම්, $Q$ ප්‍රතිදානය කුමක්ද?",
      "type": "mcq",
      "options": [
        {
          "id": "1",
          "en": "$0$",
          "si": "$0$"
        },
        {
          "id": "2",
          "en": "$1$",
          "si": "$1$"
        },
        {
          "id": "3",
          "en": "$A$",
          "si": "$A$"
        },
        {
          "id": "4",
          "en": "$\\bar{A}$",
          "si": "$\\bar{A}$"
        }
      ],
      "correctOptionId": "4",
      "explanationEn": "Verbatim official examination question from 2021 O/L Paper I - Question 39.",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2021 O/L Paper I - Question 39."
    },
    {
      "id": "pp-g10-u3-2021-28",
      "year": 2021,
      "paperType": "Paper II",
      "badgeText": "2021 O/L Paper II - Question 01 (iv)",
      "questionEn": "1. (iv) Draw the logic circuit for $P = A \\cdot (B + C)$ using standard basic logic gates.",
      "questionSi": "1. (iv) සම්මත මූලික ලොජික් ද්වාර භාවිත කර $P = A \\cdot (B + C)$ සඳහා ලොජික් පරිපථය අඳින්න.",
      "type": "structured",
      "sampleAnswerEn": "```\n  B ---\\         ) )---[B + C]----  C ---/ /                                           |                            |  )--- P = A · (B + C)\n  A -----------------------| /\n  ```\n\n---",
      "sampleAnswerSi": "```\n  B ---\\         ) )---[B + C]----  C ---/ /                                           |                            |  )--- P = A · (B + C)\n  A -----------------------| /\n  ```\n\n---",
      "explanationEn": "Verbatim official examination question from 2021 O/L Paper II - Question 01 (iv).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2021 O/L Paper II - Question 01 (iv)."
    },
    {
      "id": "pp-g10-u3-2022-29",
      "year": 2022,
      "paperType": "Paper II",
      "badgeText": "2022 O/L Paper II - Question 01 (iv)",
      "questionEn": "1. (iv) Draw the logic circuit diagram for the Boolean expression $F = \\bar{C} + A \\cdot \\bar{B}$ using basic logic gates.",
      "questionSi": "1. (iv) $F = \\bar{C} + A \\cdot \\bar{B}$ බූලියානු ප්‍රකාශනය සඳහා මූලික ලොජික් ද්වාර භාවිතයෙන් ලොජික් පරිපථ සටහන අඳින්න.",
      "type": "structured",
      "sampleAnswerEn": "```\n  C --->|o---[C']------------------------                                          \\ ---\\   A ------------------| \\                  )    )--- F = C' + A·B'\n                      |  )---[A·B']-------/ ---/ /\n  B --->|o---[B']-----| /\n  ```\n\n---",
      "sampleAnswerSi": "```\n  C --->|o---[C']------------------------                                          \\ ---\\   A ------------------| \\                  )    )--- F = C' + A·B'\n                      |  )---[A·B']-------/ ---/ /\n  B --->|o---[B']-----| /\n  ```\n\n---",
      "explanationEn": "Verbatim official examination question from 2022 O/L Paper II - Question 01 (iv).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2022 O/L Paper II - Question 01 (iv)."
    },
    {
      "id": "pp-g10-u3-2023-30",
      "year": 2023,
      "paperType": "Paper II",
      "badgeText": "2023 O/L Paper II - Question 01 (iv)",
      "questionEn": "1. (iv) The logic circuit has inputs A, B, and output Z. Gate 1 is an OR gate, Gate 2 is an AND gate. \n  Write down the Boolean expression for $Z$ in terms of $A$ and $B$, and evaluate $Z$ when $A=1, B=0$.",
      "questionSi": "1. (iv) දී ඇති ලොජික් පරිපථයේ ආදාන A, B වන අතර ප්‍රතිදානය Z වේ. 1 ද්වාරය OR ද්වාරයක් ද, 2 ද්වාරය AND ද්වාරයක් ද වේ.\n  A සහ B ඇසුරෙන් Z සඳහා බූලියානු ප්‍රකාශනය ලියා, $A=1, B=0$ වන විට Z හි අගය ගණනය කරන්න.",
      "type": "structured",
      "sampleAnswerEn": "- Gate 1 Output = $A + B$\n  - Gate 2 Output $Z = (A + B) \\cdot A$\n  - For $A=1, B=0$: $Z = (1 + 0) \\cdot 1 = 1 \\cdot 1 = 1$.\n\n---",
      "sampleAnswerSi": "- Gate 1 Output = $A + B$\n  - Gate 2 Output $Z = (A + B) \\cdot A$\n  - For $A=1, B=0$: $Z = (1 + 0) \\cdot 1 = 1 \\cdot 1 = 1$.\n\n---",
      "explanationEn": "Verbatim official examination question from 2023 O/L Paper II - Question 01 (iv).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2023 O/L Paper II - Question 01 (iv)."
    },
    {
      "id": "pp-g10-u3-2024-31",
      "year": 2024,
      "paperType": "Paper II",
      "badgeText": "2024 O/L Paper II - Question 01 (iv)",
      "questionEn": "1. (iv) Consider the circuit where Inputs A and B pass into a NAND gate whose output forms one input of a NOR gate alongside Input C. Write the final Boolean expression $Y$.",
      "questionSi": "1. (iv) A සහ B ආදාන NAND ද්වාරයකට යොමු කර, එහි ප්‍රතිදානය C ආදානය සමඟ NOR ද්වාරයකට ලබා දෙන පරිපථය සලකන්න. අවසාන බූලියානු ප්‍රකාශනය Y ලියන්න.",
      "type": "structured",
      "sampleAnswerEn": "$$Y = \\overline{\\overline{A \\cdot B} + C}$$\n\n---",
      "sampleAnswerSi": "$$Y = \\overline{\\overline{A \\cdot B} + C}$$\n\n---",
      "explanationEn": "Verbatim official examination question from 2024 O/L Paper II - Question 01 (iv).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2024 O/L Paper II - Question 01 (iv)."
    },
    {
      "id": "pp-g10-u3-2025-32",
      "year": 2025,
      "paperType": "Paper II",
      "badgeText": "2025 O/L Paper II - Question 01 (iv)",
      "questionEn": "1. (iv) Construct the truth table for the Boolean expression $Q = A \\cdot \\bar{B} + \\bar{A} \\cdot B$ (XOR equivalency).",
      "questionSi": "1. (iv) $Q = A \\cdot \\bar{B} + \\bar{A} \\cdot B$ බූලියානු ප්‍රකාශනය සඳහා සත්‍යතා වගුව ගොඩනගන්න.",
      "type": "structured",
      "sampleAnswerEn": "NOR gate output Boolean equation: F = NOT(A + B).\nXOR gate output Boolean equation: F = (A . NOT(B)) + (NOT(A) . B).",
      "sampleAnswerSi": "NOR ද්වාරයේ ප්‍රතිදාන සමීකරණය: F = NOT(A + B).\nXOR ද්වාරයේ ප්‍රතිදාන සමීකරණය: F = (A . NOT(B)) + (NOT(A) . B).",
      "explanationEn": "Verbatim official examination question from 2025 O/L Paper II - Question 01 (iv).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2025 O/L Paper II - Question 01 (iv)."
    }
  ]
};
