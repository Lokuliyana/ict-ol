/**
 * src/data/levelNodes.ts
 * Complete Authentic Sri Lankan G.C.E. O/L ICT Curriculum Level Nodes (15 Units)
 * Grade 10: Units 01 - 09 | Grade 11: Units 01 - 06
 * 100% Bilingual Parity (EN and SI), 4-Option MCQs, and Authentic NIE Syllabus Content.
 */

import { LevelNode } from '@/types/curriculum';

export const LEVEL_NODES: Record<string, LevelNode> = {
  'g10-u1-s1': {
    "id": "g10-u1-s1",
    "unitId": "g10-u1",
    "unitTitle": {
        "en": "Unit 01: Basic Concepts of ICT",
        "si": "ඒකකය 01: තොරතුරු හා සන්නිවේදන තාක්ෂණයේ මූලික සංකල්ප"
    },
    "title": {
        "en": "Factory Conveyor (Data vs Information)",
        "si": "දත්ත හා තොරතුරු පද්ධති"
    },
    "type": "concept",
    "orderIndex": 1,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Data: Raw & Unprocessed Facts",
                "si": "දත්ත: සැකසුම් නොකළ අමු කරුණු"
            },
            "visualWidget": "cpu_bus",
            "bulletPoints": [
                {
                    "en": "Data consists of raw numbers, text, images, or observations without inherent meaning.",
                    "si": "දත්ත යනු තනිව ගත් කළ ස්වාධීන අර්ථයක් නොමැති අමු කරුණු, සංඛ්‍යා, හෝ නිරීක්ෂණ වේ."
                },
                {
                    "en": "Examples: Individual student marks (85, 92, 44), sensor digits, temperature readings.",
                    "si": "උදාහරණ: සිසුන්ගේ තනි ලකුණු (85, 92, 44), සංවේදක අගයන්, උෂ්ණත්ව සටහන්."
                },
                {
                    "en": "Cannot be directly used for making informed administrative decisions.",
                    "si": "කළමනාකරණ හෝ තීරණ ගැනීමේ ක්‍රියාවලීන් සඳහා සෘජුවම ප්‍රයෝජනයට ගත නොහැක."
                }
            ],
            "keyTakeaway": {
                "en": "Data is the unrefined raw material fed into a computer system for processing.",
                "si": "දත්ත යනු සැකසුම් කිරීම සඳහා පරිගණකයකට ඇතුළත් කරන අමුද්‍රව්‍ය වේ."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Information: Processed & Meaningful Knowledge",
                "si": "තොරතුරු: සැකසූ අර්ථවත් ප්‍රතිඵල"
            },
            "bulletPoints": [
                {
                    "en": "Information is processed, structured, or contextualized data that provides meaningful insights.",
                    "si": "තොරතුරු යනු තීරණ ගැනීමට උපකාරී වන පරිදි සකසන ලද, අර්ථවත් සහ ව්‍යුහගත දත්ත වේ."
                },
                {
                    "en": "Examples: Class average mark (78.5%), highest scorer name, weather forecast trends.",
                    "si": "උදාහරණ: පන්තියේ සාමාන්‍ය ලකුණු (78.5%), ඉහළම ලකුණු ලැබූ ශිෂ්‍යයාගේ නම, කාලගුණ අනාවැකිය."
                },
                {
                    "en": "Enables users to make accurate decisions and solve real-world problems.",
                    "si": "නිවැරදි තීරණ ගැනීමට සහ ගැටලු විසඳීමට පරිශීලකයාට මග පෙන්වයි."
                }
            ],
            "keyTakeaway": {
                "en": "Information is the meaningful output derived after processing raw data in the IPO cycle.",
                "si": "තොරතුරු යනු ආදාන-සැකසුම්-ප්‍රතිදාන චක්‍රය මගින් දත්ත සැකසීමෙන් ලැබෙන ඵලයයි."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "Which of the following is considered \"Information\" rather than raw \"Data\"?",
                "si": "පහත සඳහන් දෑ අතරින් අමු \"දත්ත\" නොව \"තොරතුරු\" ලෙස සැලකිය හැක්කේ කුමක්ද?"
            },
            "options": [
                {
                    "en": "List of individual marks of 40 students",
                    "si": "සිසුන් 40 දෙනෙකුගේ තනි විභාග ලකුණු ලැයිස්තුව"
                },
                {
                    "en": "The average mark and grade distribution of the class",
                    "si": "පන්තියේ විභාග ලකුණුවල සාමාන්‍යය සහ සාමාර්ථ ව්‍යාප්තිය"
                },
                {
                    "en": "Daily raw sensor temperature readings (31, 32, 29)",
                    "si": "දෛනික සංවේදක උෂ්ණත්ව අගයන් (31, 32, 29)"
                },
                {
                    "en": "Unsorted barcode numbers scanned at cash counter",
                    "si": "මුදල් කවුන්ටරයක ස්කෑන් කරන ලද අනුපිළිවෙළක් රහිත තීරුකේත අංක"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "The average mark represents processed data with actionable context, making it information.",
                "si": "සාමාන්‍ය ලකුණු යනු තීරණ ගැනීමට උපකාරී වන පරිදි සකසන ලද අර්ථවත් තොරතුරකි."
            },
            "syllabusRef": "G10.1.1"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "In the Input-Process-Output (IPO) cycle of a computer system, what represents the \"Process\"?",
                "si": "පරිගණක පද්ධතියක ආදානය-සැකසුම-ප්‍රතිදානය (IPO) චක්‍රයේ \"සැකසුම (Process)\" නියෝජනය කරන්නේ කුමක්ද?"
            },
            "options": [
                {
                    "en": "Entering numbers via keyboard",
                    "si": "යතුරුපුවරුව මගින් අංක ඇතුළත් කිරීම"
                },
                {
                    "en": "Displaying report on monitor",
                    "si": "මොනිටරය මත වාර්තාව ප්‍රදර්ශනය කිරීම"
                },
                {
                    "en": "Calculating total and sorting numbers in CPU",
                    "si": "මධ්‍ය සැකසුම් ඒකකය තුළ එකතුව ගණනය කිරීම හා පෙළගැස්වීම"
                },
                {
                    "en": "Printing hard copy on paper",
                    "si": "මුද්‍රණ යන්ත්‍රය මගින් කඩදාසියක මුද්‍රණය කිරීම"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "Calculations and logical manipulations performed by CPU constitute the Process stage.",
                "si": "මධ්‍ය සැකසුම් ඒකකය (CPU) මගින් සිදුකරන ගණනය කිරීම් සහ තර්කානුකූල මෙහෙයුම් සැකසුම් අදියර වේ."
            },
            "syllabusRef": "G10.1.2"
        }
    ]
},

  'g10-u1-s2': {
    "id": "g10-u1-s2",
    "unitId": "g10-u1",
    "unitTitle": {
        "en": "Unit 01: Basic Concepts of ICT",
        "si": "ඒකකය 01: තොරතුරු හා සන්නිවේදන තාක්ෂණයේ මූලික සංකල්ප"
    },
    "title": {
        "en": "Quality Radar (Information Attributes)",
        "si": "ගුණාත්මක තොරතුරු ලක්ෂණ"
    },
    "type": "concept",
    "orderIndex": 2,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Core Attributes of Quality Information",
                "si": "ගුණාත්මක තොරතුරක ප්‍රධාන ලක්ෂණ"
            },
            "bulletPoints": [
                {
                    "en": "Timeliness: Information must be available to decision-makers when needed, before it loses value.",
                    "si": "කාලීන බව (Timeliness): තීරණ ගැනීමට අවශ්‍ය නිවැරදි වේලාවට තොරතුරු ලබාගත හැකි විය යුතුය."
                },
                {
                    "en": "Accuracy: Information must be error-free, verifiable, and faithfully represent facts.",
                    "si": "නිරවද්‍යතාව (Accuracy): තොරතුරු දෝෂ රහිත සහ සත්‍ය කරුණු මත පදනම් විය යුතුය."
                },
                {
                    "en": "Completeness: Must include all vital facts needed without critical omissions.",
                    "si": "පූර්ණ බව (Completeness): නිසි තීරණයක් ගැනීමට අවශ්‍ය සියලුම වැදගත් කරුණු අඩංගු විය යුතුය."
                }
            ],
            "keyTakeaway": {
                "en": "High-quality information must be timely, accurate, complete, relevant, and cost-effective.",
                "si": "ගුණාත්මක තොරතුරක් කාලීන, නිවැරදි, පූර්ණ, අදාළ සහ පිරිවැය ඵලදායී විය යුතුය."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Relevance and Appropriateness",
                "si": "අදාළ බව සහ යෝග්‍යතාව"
            },
            "bulletPoints": [
                {
                    "en": "Relevance: Information must directly pertain to the specific problem or decision at hand.",
                    "si": "අදාළ බව (Relevance): අදාළ කාර්යයට හෝ ගැටලුවට සෘජුවම සම්බන්ධ විය යුතුය."
                },
                {
                    "en": "Appropriateness: Presented in a clear, understandable format tailored to the audience.",
                    "si": "යෝග්‍යතාව (Appropriateness): භාවිත කරන්නාට පහසුවෙන් තේරුම් ගත හැකි ආකෘතියකින් තිබිය යුතුය."
                }
            ],
            "keyTakeaway": {
                "en": "Irrelevant or distorted information leads to faulty conclusions and system failure.",
                "si": "අදාළ නොවන හෝ විකෘති වූ තොරතුරු වැරදි තීරණ වලට මග පාදයි."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "A train timetable printed 3 years ago fails which quality characteristic of information today?",
                "si": "වසර 3 කට පෙර මුද්‍රණය කරන ලද දුම්රිය කාලසටහනක් අද දින අසාර්ථක වන්නේ තොරතුරක කුමන ලක්ෂණය නොමැති වීම නිසාද?"
            },
            "options": [
                {
                    "en": "Accuracy only",
                    "si": "නිරවද්‍යතාව පමණි"
                },
                {
                    "en": "Timeliness (Relevance in time)",
                    "si": "කාලීන බව (Timeliness)"
                },
                {
                    "en": "Cost-effectiveness",
                    "si": "පිරිවැය ඵලදායී බව"
                },
                {
                    "en": "Storage media format",
                    "si": "ආචයන මාධ්‍ය ආකෘතිය"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Outdated information lacks timeliness, rendering it unreliable for current schedules.",
                "si": "කාලය ඉක්මවා ගිය තොරතුරු වල කාලීන බව නොමැති බැවින් වර්තමාන භාවිතයට නුසුදුසුය."
            },
            "syllabusRef": "G10.1.3"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "A medical report that accidentally omits a patient’s known penicillin allergy violates which attribute?",
                "si": "රෝගියෙකුගේ පෙනිසිලින් ආසාත්මිකතාව නොදක්වා සකස් කළ වෛද්‍ය වාර්තාවක් උල්ලංඝනය කරන්නේ කුමන ගුණාංගයද?"
            },
            "options": [
                {
                    "en": "Completeness",
                    "si": "පූර්ණ බව (Completeness)"
                },
                {
                    "en": "Attractiveness",
                    "si": "ආකර්ශනීය බව"
                },
                {
                    "en": "File size",
                    "si": "ගොනු ප්‍රමාණය"
                },
                {
                    "en": "Font style",
                    "si": "අකුරු විලාසය"
                }
            ],
            "correctIndex": 0,
            "explanation": {
                "en": "Omitting critical medical details violates the completeness attribute of information.",
                "si": "තීරණාත්මක තොරතුරු මඟහැරීම මගින් තොරතුරේ පූර්ණ බව (Completeness) බිඳ වැටේ."
            },
            "syllabusRef": "G10.1.3"
        }
    ]
},

  'g10-u1-s3': {
    "id": "g10-u1-s3",
    "unitId": "g10-u1",
    "unitTitle": {
        "en": "Unit 01: Basic Concepts of ICT",
        "si": "ඒකකය 01: තොරතුරු හා සන්නිවේදන තාක්ෂණයේ මූලික සංකල්ප"
    },
    "title": {
        "en": "Connected Island (Applications of ICT)",
        "si": "ICT යෙදවුම් හා ඊ-රාජ්‍යය"
    },
    "type": "concept",
    "orderIndex": 3,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "ICT in e-Government & Citizen Services",
                "si": "ඊ-රාජ්‍ය සේවා සහ පුරවැසි සේවා"
            },
            "bulletPoints": [
                {
                    "en": "G2C (Government to Citizen): Issuing birth certificates, revenue licenses, and passports online.",
                    "si": "G2C (රජය සහ පුරවැසියා): උප්පැන්න සහතික, ආදායම් බලපත්‍ර සහ විදේශ ගමන් බලපත්‍ර මාර්ගගතව ලබාදීම."
                },
                {
                    "en": "G2B (Government to Business): Online tax filing, corporate registration, tender submission.",
                    "si": "G2B (රජය සහ ව්‍යාපාර): මාර්ගගත බදු ගෙවීම්, සමාගම් ලියාපදිංචිය සහ ටෙන්ඩර් පටිපාටි."
                },
                {
                    "en": "G2G (Government to Government): Electronic inter-departmental communication and police records.",
                    "si": "G2G (රජය සහ රජය): අමාත්‍යාංශ සහ දෙපාර්තමේන්තු අතර තොරතුරු හුවමාරුව."
                }
            ],
            "keyTakeaway": {
                "en": "e-Government enhances transparency, eliminates queues, and democratizes public services.",
                "si": "ඊ-රාජ්‍ය සේවා මගින් විනිවිදභාවය වැඩි වන අතර කාර්යක්ෂම මහජන සේවයක් තහවුරු කරයි."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Digital Divide & Ethical Challenges",
                "si": "ඩිජිටල් පරතරය සහ සදාචාරාත්මක අභියෝග"
            },
            "bulletPoints": [
                {
                    "en": "Digital Divide: The gap between individuals with access to modern ICT and those without.",
                    "si": "ඩිජිටල් පරතරය: නවීන තාක්ෂණයට ප්‍රවේශය ඇති සහ නැති පුද්ගලයන් අතර පවතින විෂමතාවයි."
                },
                {
                    "en": "Contributing factors: Geographic infrastructure, economic disparity, and digital literacy.",
                    "si": "හේතු: භූගෝලීය යටිතල පහසුකම්, ආර්ථික දුෂ්කරතා සහ තාක්ෂණික සාක්ෂරතාවයේ ඌනතාව."
                }
            ],
            "keyTakeaway": {
                "en": "Bridging the digital divide requires equitable internet access, affordable hardware, and education.",
                "si": "ඩිජිටල් පරතරය පියවීම සඳහා සැමට සමාන අන්තර්ජාල ප්‍රවේශය සහ අධ්‍යාපනය අවශ්‍ය වේ."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "Renewing a vehicle revenue license through the government portal (srilanka.lk) is classified as:",
                "si": "රජයේ වෙබ් අඩවිය (srilanka.lk) හරහා වාහන ආදායම් බලපත්‍රය අලුත් කරගැනීම අයත් වන්නේ කුමන ඊ-රාජ්‍ය සේවා කාණ්ඩයටද?"
            },
            "options": [
                {
                    "en": "G2C (Government to Citizen)",
                    "si": "G2C (රජය සහ පුරවැසියා)"
                },
                {
                    "en": "B2B (Business to Business)",
                    "si": "B2B (ව්‍යාපාර සහ ව්‍යාපාර)"
                },
                {
                    "en": "C2C (Consumer to Consumer)",
                    "si": "C2C (පාරිභෝගිකයා සහ පාරිභෝගිකයා)"
                },
                {
                    "en": "G2E (Government to Employee only)",
                    "si": "G2E (රජය සහ සේවකයා පමණි)"
                }
            ],
            "correctIndex": 0,
            "explanation": {
                "en": "Services rendered directly from government agencies to citizens are classified as G2C.",
                "si": "රාජ්‍ය ආයතනයක් විසින් සෘජුවම මහජනතාව වෙත සපයන මාර්ගගත සේවා G2C නම් වේ."
            },
            "syllabusRef": "G10.1.4"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "What is the term for the social and economic inequality in access to modern information technologies?",
                "si": "නවීන තොරතුරු සන්නිවේදන තාක්ෂණයට ප්‍රවේශ වීමේ හැකියාව සම්බන්ධයෙන් සමාජයේ පවතින විෂමතාව හඳුන්වන්නේ කුමක් ලෙසද?"
            },
            "options": [
                {
                    "en": "Digital Signal",
                    "si": "අංකිත සංඥාව (Digital Signal)"
                },
                {
                    "en": "Digital Divide",
                    "si": "ඩිජිටල් පරතරය (Digital Divide)"
                },
                {
                    "en": "Digital Bandwidth",
                    "si": "දත්ත කලාප පළල (Digital Bandwidth)"
                },
                {
                    "en": "Digital Footprint",
                    "si": "ඩිජිටල් අඩිපාර (Digital Footprint)"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Digital Divide refers to demographic and regional inequalities in technology and internet access.",
                "si": "තාක්ෂණය පරිහරණය කිරීමට ඇති හැකියාව සහ අවස්ථා අතර පවතින විෂමතාව ඩිජිටල් පරතරයයි."
            },
            "syllabusRef": "G10.1.5"
        }
    ]
},

  'g10-u1-boss': {
    "id": "g10-u1-boss",
    "unitId": "g10-u1",
    "unitTitle": {
        "en": "Unit 01: Basic Concepts of ICT",
        "si": "ඒකකය 01: තොරතුරු හා සන්නිවේදන තාක්ෂණයේ මූලික සංකල්ප"
    },
    "title": {
        "en": "Unit 1 Boss: Past Paper Gauntlet",
        "si": "2020 – 2025 විභාග සටන්"
    },
    "type": "boss_arena",
    "orderIndex": 4,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Computer Generations & Hardware Evolution",
                "si": "පරිගණක පරම්පරා සහ දෘඩාංග පරිණාමය"
            },
            "bulletPoints": [
                {
                    "en": "1st Gen (1940-1956): Vacuum Tubes; Machine Language; huge heat and size (ENIAC).",
                    "si": "1 වන පරම්පරාව: රික්තක නල (Vacuum Tubes); යන්ත්‍ර භාෂාව; අධික තාපය හා විශාල ප්‍රමාණය (ENIAC)."
                },
                {
                    "en": "2nd Gen (1956-1963): Transistors; Assembly Language; smaller and more reliable.",
                    "si": "2 වන පරම්පරාව: ට්‍රාන්සිස්ටර (Transistors); ඇසෙම්බ්ලි භාෂාව; ප්‍රමාණයෙන් කුඩා හා කාර්යක්ෂම."
                },
                {
                    "en": "3rd Gen (1964-1971): Integrated Circuits (ICs); Operating Systems; keyboards/monitors.",
                    "si": "3 වන පරම්පරාව: අනුකලිත පරිපථ (ICs); මෙහෙයුම් පද්ධති භාවිතය ඇරඹීම."
                },
                {
                    "en": "4th Gen (1971-Present): Microprocessors (VLSI/VLSIC); Personal Computers, GUI, Internet.",
                    "si": "4 වන පරම්පරාව: ක්ෂුද්‍ර ප්‍රොසෙසර (VLSI); පුද්ගලික පරිගණක (PC), අන්තර්ජාලය."
                }
            ],
            "keyTakeaway": {
                "en": "Each computer generation is defined by major breakthrough electronic switching technologies.",
                "si": "සෑම පරිගණක පරම්පරාවක්ම මූලික ඉලෙක්ට්‍රොනික සංරචකයේ තාක්ෂණික පිම්ම මත වෙන් කෙරේ."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "GCE O/L Examination Strategy",
                "si": "අ.පො.ස. සා/පෙළ විභාග උපක්‍රම"
            },
            "bulletPoints": [
                {
                    "en": "Carefully contrast Data vs Information and Quality Attributes in Paper I MCQs.",
                    "si": "පළමු ප්‍රශ්න පත්‍රයේ බහුවරණ ප්‍රශ්න සඳහා දත්ත, තොරතුරු හා ගුණාංග නිවැරදිව හඳුනා ගන්න."
                },
                {
                    "en": "Memorize switching components for each computing generation for guaranteed exam marks.",
                    "si": "සෑම පරිගණක පරම්පරාවකටම අදාළ මූලික තාක්ෂණික උපාංග කටපාඩම් කර තබා ගන්න."
                }
            ],
            "keyTakeaway": {
                "en": "Score >= 70% in this boss gauntlet to unlock the Unit 1 Mastery Badge!",
                "si": "මෙම ප්‍රධාන අභියෝගයෙන් 70% කට වඩා ලබාගෙන ඒකක 1 විශිෂ්ටතා පදක්කම දිනා ගන්න!"
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "Which fundamental electronic component was used in 3rd Generation computers?",
                "si": "3 වන පරම්පරාවේ (Third Generation) පරිගණක සඳහා භාවිත කරන ලද මූලික ඉලෙක්ට්‍රොනික උපාංගය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Vacuum Tubes",
                    "si": "රික්තක නල (Vacuum Tubes)"
                },
                {
                    "en": "Transistors",
                    "si": "ට්‍රාන්සිස්ටර (Transistors)"
                },
                {
                    "en": "Integrated Circuits (ICs)",
                    "si": "අනුකලිත පරිපථ (Integrated Circuits - IC)"
                },
                {
                    "en": "Very Large Scale Integration (VLSI)",
                    "si": "අති මහා පරිමාණ අනුකලනය (VLSI)"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "Third-generation computers utilized Integrated Circuits (ICs), combining multiple transistors on silicon.",
                "si": "3 වන පරම්පරාවේ පරිගණක සඳහා අනුකලිත පරිපථ (ICs) යොදා ගන්නා ලදී."
            },
            "syllabusRef": "G10.1.6"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Which of the following describes an adverse effect of excessive and improper ICT usage?",
                "si": "තොරතුරු තාක්ෂණය අනිසි සහ අධික ලෙස භාවිත කිරීම නිසා ඇතිවන අයහපත් ප්‍රතිඵලයක් වන්නේ කුමක්ද?"
            },
            "options": [
                {
                    "en": "Accelerated batch document processing",
                    "si": "ලේඛන සැකසීමේ වේගය වැඩි වීම"
                },
                {
                    "en": "Repetitive Strain Injury (RSI) and social isolation",
                    "si": "පුනරාවර්තී ආතති තුවාල (RSI) සහ සමාජීය හුදකලාව"
                },
                {
                    "en": "Instant communication across oceans",
                    "si": "ක්ෂණික ගෝලීය සන්නිවේදනය"
                },
                {
                    "en": "Reduction of paper usage through e-filing",
                    "si": "ඊ-ගොනු මගින් කඩදාසි භාවිතය අවම වීම"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Prolonged improper computer posture causes physical ailments like RSI, while excessive screen time impacts social health.",
                "si": "වැරදි ඉරියව් නිසා RSI වැනි ආබාධ සහ අධික තිර කාලය නිසා සමාජීය හුදකලාව ඇතිවේ."
            },
            "syllabusRef": "G10.1.5"
        },
        {
            "id": "q3",
            "prompt": {
                "en": "Which of the following is NOT a characteristic of high-quality information?",
                "si": "පහත සඳහන් දෑ අතරින් ගුණාත්මක තොරතුරක ලක්ෂණයක් නොවන්නේ කුමක්ද?"
            },
            "options": [
                {
                    "en": "Timeliness",
                    "si": "කාලීන බව (Timeliness)"
                },
                {
                    "en": "Accuracy",
                    "si": "නිරවද්‍යතාව (Accuracy)"
                },
                {
                    "en": "Ambiguity",
                    "si": "අවිනිශ්චිත හෝ අපැහැදිලි බව (Ambiguity)"
                },
                {
                    "en": "Completeness",
                    "si": "පූර්ණ බව (Completeness)"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "Ambiguity means unclear or open to multiple interpretations, which ruins information quality.",
                "si": "අපැහැදිලි හෝ අවිනිශ්චිත බව තොරතුරක ගුණාත්මකභාවය නැති කර දමයි."
            },
            "syllabusRef": "G10.1.3"
        },
        {
            "id": "q4",
            "prompt": {
                "en": "Microprocessors and Very Large Scale Integration (VLSI) were introduced in which computer generation?",
                "si": "ක්ෂුද්‍ර ප්‍රොසෙසර සහ ඉතා මහා පරිමාණ අනුකලනය (VLSI) හඳුන්වා දෙනු ලැබුවේ කවර පරිගණක පරම්පරාවේදීද?"
            },
            "options": [
                {
                    "en": "First Generation",
                    "si": "පළමු පරම්පරාව"
                },
                {
                    "en": "Second Generation",
                    "si": "දෙවන පරම්පරාව"
                },
                {
                    "en": "Third Generation",
                    "si": "තෙවන පරම්පරාව"
                },
                {
                    "en": "Fourth Generation",
                    "si": "සිව්වන පරම්පරාව"
                }
            ],
            "correctIndex": 3,
            "explanation": {
                "en": "Fourth generation computers (1971 to present) are characterized by microprocessors and VLSI chips.",
                "si": "සිව්වන පරම්පරාවේ පරිගණක (1971 සිට වර්තමානය දක්වා) ක්ෂුද්‍ර ප්‍රොසෙසර මගින් බලගැන්වේ."
            },
            "syllabusRef": "G10.1.6"
        }
    ]
},

  'g10-u2-s1': {
    "id": "g10-u2-s1",
    "unitId": "g10-u2",
    "unitTitle": {
        "en": "Unit 02: The Computer System & System Components",
        "si": "ඒකකය 02: පරිගණක පද්ධතිය සහ පද්ධති සංරචක"
    },
    "title": {
        "en": "Motherboard Workbench (CPU & Ports)",
        "si": "පරිගණක දෘඩාංග සංරචක"
    },
    "type": "concept",
    "orderIndex": 5,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Central Processing Unit (CPU) Core Architecture",
                "si": "මධ්‍ය සැකසුම් ඒකකයේ (CPU) ප්‍රධාන ව්‍යුහය"
            },
            "visualWidget": "cpu_bus",
            "bulletPoints": [
                {
                    "en": "Arithmetic & Logic Unit (ALU): Executes arithmetic operations (+, -, *, /) and logical comparisons (=, <, >, AND, OR).",
                    "si": "අංකගණිත හා තර්කන ඒකකය (ALU): ගණිතමය සහ තාර්කික සංසන්දන මෙහෙයුම් සිදු කරයි."
                },
                {
                    "en": "Control Unit (CU): Decodes instructions, manages timing signals, and directs data flow across motherboard buses.",
                    "si": "පාලන ඒකකය (CU): උපදෙස් විකේතනය කර දත්ත ගලා යාම හා සංඥා පාලනය කරයි."
                },
                {
                    "en": "Registers: High-speed temporary storage cells situated directly inside the CPU die.",
                    "si": "රෙජිස්ටර (Registers): CPU තුළම පිහිටි අධිවේගී තාවකාලික මතක ඛණ්ඩ වේ."
                }
            ],
            "keyTakeaway": {
                "en": "The CPU (ALU + CU + Registers) functions as the primary computational brain of the computer.",
                "si": "CPU යනු පරිගණකයේ ප්‍රධාන ගණනය කිරීම් සහ විධාන මෙහෙයවන මොළයයි."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "System Buses & External Ports",
                "si": "පද්ධති බස් මාර්ග සහ බාහිර කෙවෙනි"
            },
            "bulletPoints": [
                {
                    "en": "Data Bus: Bidirectional pathway carrying data words between CPU, memory, and devices.",
                    "si": "දත්ත බසය: CPU, මතකය සහ උපාංග අතර දෙපසටම දත්ත රැගෙන යන ද්වි-දිශානත මාර්ගයයි."
                },
                {
                    "en": "Address Bus: Unidirectional bus transmitting physical memory addresses from CPU to RAM.",
                    "si": "ලිපින බසය: CPU මගින් මතක ලිපින පමණක් රැගෙන යන ඒක-දිශානත මාර්ගයයි."
                },
                {
                    "en": "I/O Ports: HDMI/VGA for video, USB for high-speed peripherals, RJ-45 for Ethernet LAN networking.",
                    "si": "I/O කෙවෙනි: HDMI/VGA දර්ශනයට, USB උපාංග වලට, RJ-45 ජාලකරණයට යොදා ගනී."
                }
            ],
            "keyTakeaway": {
                "en": "Buses interconnect internal components while external ports link human and peripheral interfaces.",
                "si": "බස් මාර්ග අභ්‍යන්තර සංරචක ද, කෙවෙනි බාහිර උපාංග ද පරිගණකයට සම්බන්ධ කරයි."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "Which internal component of the CPU coordinates and directs all operations of the computer system?",
                "si": "පරිගණක පද්ධතියේ සියලුම මෙහෙයුම් සම්බන්ධීකරණය සහ මෙහෙයවීම සිදු කරන්නේ CPU හි කුමන කොටස මගින්ද?"
            },
            "options": [
                {
                    "en": "Arithmetic Logic Unit (ALU)",
                    "si": "අංකගණිත හා තර්කන ඒකකය (ALU)"
                },
                {
                    "en": "Control Unit (CU)",
                    "si": "පාලන ඒකකය (Control Unit - CU)"
                },
                {
                    "en": "Cache Memory",
                    "si": "හැඹිලි මතකය (Cache Memory)"
                },
                {
                    "en": "Secondary Hard Disk",
                    "si": "ද්විතීයික දෘඪ තැටිය"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "The Control Unit directs data flow, fetches instructions, and issues timing control signals.",
                "si": "පාලන ඒකකය මගින් පද්ධතියේ සියලු දත්ත හා විධාන ගලා යාම අධීක්ෂණය කරයි."
            },
            "syllabusRef": "G10.2.1"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Which system bus carries physical memory addresses exclusively FROM the CPU to memory?",
                "si": "භෞතික මතක ලිපින CPU වෙතින් මතකය වෙත පමණක් රැගෙන යන ඒක-දිශානත පද්ධති බසය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Data Bus",
                    "si": "දත්ත බසය (Data Bus)"
                },
                {
                    "en": "Control Bus",
                    "si": "පාලන බසය (Control Bus)"
                },
                {
                    "en": "Address Bus",
                    "si": "ලිපින බසය (Address Bus)"
                },
                {
                    "en": "Power Bus",
                    "si": "විදුලි බසය"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "The Address Bus is unidirectional, transmitting addresses generated by the processor to select memory cells.",
                "si": "ලිපින බසය (Address Bus) යනු ප්‍රොසෙසරයේ සිට මතකය වෙත ලිපින ගෙන යන ඒක-දිශානත මාර්ගයකි."
            },
            "syllabusRef": "G10.2.2"
        }
    ]
},

  'g10-u2-s2': {
    "id": "g10-u2-s2",
    "unitId": "g10-u2",
    "unitTitle": {
        "en": "Unit 02: The Computer System & System Components",
        "si": "ඒකකය 02: පරිගණක පද්ධතිය සහ පද්ධති සංරචක"
    },
    "title": {
        "en": "Memory Hierarchy Lab",
        "si": "මතක ධූරාවලිය සහ ප්‍රවේශ වේගය"
    },
    "type": "concept",
    "orderIndex": 6,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "The Computer Memory Hierarchy",
                "si": "පරිගණක මතක ධූරාවලිය"
            },
            "bulletPoints": [
                {
                    "en": "Speed hierarchy (Fastest to Slowest): Registers > Level 1/2 Cache > Main RAM > Secondary Storage (SSD/HDD).",
                    "si": "වේගය අනුව: රෙජිස්ටර > හැඹිලි මතකය > ප්‍රධාන මතකය (RAM) > ද්විතීයික ආචයනය (SSD/HDD)."
                },
                {
                    "en": "Cost and capacity trade-off: As speed increases, cost per byte increases and storage capacity decreases.",
                    "si": "වේගය වැඩි වන විට බයිටයක පිරිවැය වැඩි වන අතර ධාරිතාව සීමිත වේ."
                },
                {
                    "en": "Cache Memory: High-speed SRAM placed between CPU and RAM to buffer frequently executed instructions.",
                    "si": "හැඹිලි මතකය: CPU සහ RAM අතර පිහිටි නිතර භාවිත වන විධාන රඳවන අධිවේගී මතකයයි."
                }
            ],
            "keyTakeaway": {
                "en": "Memory hierarchy balances processing throughput with economic cost.",
                "si": "මතක ධූරාවලිය මගින් පරිගණකයේ සැකසුම් වේගය සහ පිරිවැය අතර මනා සමබරතාවයක් පවත්වා ගනී."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "RAM vs ROM: Primary Memory Comparison",
                "si": "RAM සහ ROM: ප්‍රාථමික මතක සංසන්දනය"
            },
            "bulletPoints": [
                {
                    "en": "RAM (Random Access Memory): Volatile read-write memory; loses content instantly on power cut.",
                    "si": "RAM: වාෂ්පශීලී (Volatile) මතකයකි; විදුලිය විසන්ධි වූ විට එහි දත්ත මැකී යයි."
                },
                {
                    "en": "ROM (Read Only Memory): Non-volatile permanent memory; holds system firmware and BIOS/UEFI booting instructions.",
                    "si": "ROM: අවාෂ්පශීලී (Non-volatile) ස්ථිර මතකයකි; පරිගණකය පණගන්වන BIOS උපදෙස් රඳවා තබා ගනී."
                },
                {
                    "en": "Secondary storage (HDD, SSD, Optical): Permanent, non-volatile mass storage for OS and user files.",
                    "si": "ද්විතීයික ආචයනය: පරිශීලක ලිපිගොනු සහ මෙහෙයුම් පද්ධතිය ස්ථිරව ගබඩා කිරීමට යොදා ගනී."
                }
            ],
            "keyTakeaway": {
                "en": "RAM holds active programs during execution; ROM stores initial bootstrap code.",
                "si": "RAM ක්‍රියාත්මක වන වැඩසටහන් ද, ROM ආරම්භක Booting විධාන ද රඳවා ගනී."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "Which memory type has the highest data access speed in a computer system?",
                "si": "පරිගණක පද්ධතියක දත්ත ලබාගැනීමේ උපරිම වේගය (Highest Speed) ඇත්තේ කුමන මතක වර්ගයටද?"
            },
            "options": [
                {
                    "en": "Hard Disk Drive (HDD)",
                    "si": "දෘඪ තැටිය (HDD)"
                },
                {
                    "en": "Main Memory (RAM)",
                    "si": "ප්‍රධාන මතකය (RAM)"
                },
                {
                    "en": "CPU Registers",
                    "si": "CPU රෙජිස්ටර (Registers)"
                },
                {
                    "en": "Optical Disc (DVD-RW)",
                    "si": "ප්‍රකාශ තැටිය (DVD)"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "Registers sit directly inside the CPU execution core, offering sub-nanosecond access speeds.",
                "si": "රෙජිස්ටර CPU අභ්‍යන්තරයේම පිහිටා ඇති බැවින් ඉහළම ප්‍රවේශ වේගයක් සතු වේ."
            },
            "syllabusRef": "G10.2.3"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Why is RAM referred to as \"Volatile\" memory?",
                "si": "RAM \"වාෂ්පශීලී (Volatile)\" මතකයක් ලෙස හඳුන්වන්නේ ඇයි?"
            },
            "options": [
                {
                    "en": "It evaporates under elevated operating temperatures",
                    "si": "අධික උෂ්ණත්වයේදී එය වාෂ්ප වන නිසා"
                },
                {
                    "en": "It loses all stored data immediately when electrical power is switched off",
                    "si": "විදුලි සැපයුම විසන්ධි වූ විට එහි ගබඩා කර ඇති සියලු දත්ත මැකී යන නිසා"
                },
                {
                    "en": "It cannot be read or modified by the user",
                    "si": "එහි දත්ත කියවීමට නොහැකි නිසා"
                },
                {
                    "en": "It has very slow access speeds compared to magnetic tape",
                    "si": "චුම්භක පටිවලට වඩා එහි වේගය අඩු නිසා"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Volatile memory requires continuous electrical power to maintain stored bit states.",
                "si": "වාෂ්පශීලී මතකයක දත්ත රඳවා ගැනීමට අඛණ්ඩ විදුලි බලයක් අවශ්‍ය වේ."
            },
            "syllabusRef": "G10.2.3"
        }
    ]
},

  'g10-u2-boss': {
    "id": "g10-u2-boss",
    "unitId": "g10-u2",
    "unitTitle": {
        "en": "Unit 02: The Computer System & System Components",
        "si": "ඒකකය 02: පරිගණක පද්ධතිය සහ පද්ධති සංරචක"
    },
    "title": {
        "en": "Unit 2 Boss: Hardware Exam Master",
        "si": "දෘඩාංග විභාග ප්‍රශ්න පත්‍ර"
    },
    "type": "boss_arena",
    "orderIndex": 7,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Von Neumann Architecture Essentials",
                "si": "වොන් නියුමන් ගෘහ නිර්මාණ ශිල්පය"
            },
            "bulletPoints": [
                {
                    "en": "Stored-program concept: Program instructions and data share common memory space.",
                    "si": "ගබඩා කළ වැඩසටහන් සංකල්පය: විධාන සහ දත්ත එකම මතකයක තැන්පත් කර තැබීම."
                },
                {
                    "en": "Sequential instruction execution via the Fetch-Decode-Execute cycle.",
                    "si": "ගැනීම-විකේතනය-ක්‍රියාත්මක කිරීම (Fetch-Decode-Execute) චක්‍රය මගින් අනුක්‍රමිකව උපදෙස් ක්‍රියාත්මක කිරීම."
                }
            ],
            "keyTakeaway": {
                "en": "All contemporary general-purpose computers implement Von Neumann hardware principles.",
                "si": "නූතන සියලුම පරිගණක පාහේ වොන් නියුමන් මූලධර්ම මත පදනම්ව ක්‍රියාත්මක වේ."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Computer Classification by Size and Technology",
                "si": "පරිගණක වර්ගීකරණය"
            },
            "bulletPoints": [
                {
                    "en": "By technology: Digital (discrete bits 0/1), Analog (continuous signals), Hybrid (combined).",
                    "si": "තාක්ෂණය අනුව: අංකිත (Digital), ප්‍රතිසම (Analog), සහ දෙමුහුන් (Hybrid)."
                },
                {
                    "en": "By size: Supercomputers > Mainframes > Minicomputers > Microcomputers (PCs, Laptops, Mobile).",
                    "si": "ප්‍රමාණය අනුව: සුපිරි පරිගණක > මහා පරිගණක > කුඩා පරිගණක > ක්ෂුද්‍ර පරිගණක (PCs)."
                }
            ],
            "keyTakeaway": {
                "en": "Supercomputers handle massive scientific workloads, while microcomputers serve everyday users.",
                "si": "සුපිරි පරිගණක සංකීර්ණ විද්‍යාත්මක ගණනය කිරීම් සඳහා ද, ක්ෂුද්‍ර පරිගණක සාමාන්‍ය භාවිතයට ද යොදා ගැනේ."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "Which of the following ports transmits both high-definition digital video AND multi-channel audio across a single cable?",
                "si": "එක් රැහැනක් ඔස්සේ අධි-විභේදන අංකිත දෘශ්‍ය සහ ශ්‍රව්‍ය සංඥා දෙකම සම්ප්‍රේෂණය කරන කෙවෙනිය කුමක්ද?"
            },
            "options": [
                {
                    "en": "VGA Port",
                    "si": "VGA කෙවෙනිය"
                },
                {
                    "en": "Serial COM Port",
                    "si": "ශ්‍රේණිගත COM කෙවෙනිය"
                },
                {
                    "en": "HDMI Port",
                    "si": "HDMI කෙවෙනිය"
                },
                {
                    "en": "PS/2 Port",
                    "si": "PS/2 කෙවෙනිය"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "HDMI (High-Definition Multimedia Interface) transmits uncompressed video and multi-channel audio concurrently.",
                "si": "HDMI කෙවෙනිය මගින් ශ්‍රව්‍ය සහ දෘශ්‍ය සංඥා දෙකම එකවර සම්ප්‍රේෂණය කරයි."
            },
            "syllabusRef": "G10.2.4"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Which computer class is specifically engineered for nuclear simulations, space exploration, and complex meteorological forecasting?",
                "si": "න්‍යෂ්ටික ආකෘතිකරණය, අභ්‍යවකාශ ගවේෂණය සහ සංකීර්ණ කාලගුණ අනාවැකි සඳහා විශේෂයෙන් නිර්මාණය කර ඇති පරිගණක වර්ගය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Microcomputer",
                    "si": "ක්ෂුද්‍ර පරිගණක"
                },
                {
                    "en": "Mainframe Computer",
                    "si": "මහා පරිගණක"
                },
                {
                    "en": "Supercomputer",
                    "si": "සුපිරි පරිගණක (Supercomputer)"
                },
                {
                    "en": "Workstation",
                    "si": "වැඩපොළ පරිගණක"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "Supercomputers process billions of floating-point operations per second for intense computational physics.",
                "si": "අතිශය සංකීර්ණ සහ දැවැන්ත විද්‍යාත්මක ගණනය කිරීම් සඳහා සුපිරි පරිගණක භාවිත වේ."
            },
            "syllabusRef": "G10.2.5"
        },
        {
            "id": "q3",
            "prompt": {
                "en": "A solid-state drive (SSD) is superior to a traditional mechanical hard disk drive (HDD) because:",
                "si": "සාම්ප්‍රදායික දෘඪ තැටියකට (HDD) වඩා ඝන-තත්ව ධාවකයක් (SSD) උසස් වන්නේ කුමක් නිසාද?"
            },
            "options": [
                {
                    "en": "It has rotating magnetic platters with mechanical arms",
                    "si": "එහි චුම්භක තැටි සහ යාන්ත්‍රික අත් ඇති නිසා"
                },
                {
                    "en": "It contains no moving mechanical parts, resulting in higher shock resistance and faster read/write speeds",
                    "si": "එහි චලනය වන යාන්ත්‍රික කොටස් නොමැති බැවින් කම්පන ප්‍රතිරෝධය සහ වේගය ඉහළ නිසා"
                },
                {
                    "en": "It requires continuous electrical power to preserve data",
                    "si": "දත්ත තබා ගැනීමට අඛණ්ඩ විදුලියක් අවශ්‍ය වන නිසා"
                },
                {
                    "en": "It connects solely via parallel printer cables",
                    "si": "එය මුද්‍රණ කේබල් මගින් පමණක් සම්බන්ධ කළ හැකි නිසා"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "SSDs employ flash memory semiconductors with zero moving parts, drastically lowering access latencies.",
                "si": "SSD වල චලනය වන කොටස් නැති බැවින් ඒවා වේගවත් හා කම්පන වලට ඔරොත්තු දෙන සුළුය."
            },
            "syllabusRef": "G10.2.6"
        },
        {
            "id": "q4",
            "prompt": {
                "en": "In Von Neumann architecture, which step immediately follows fetching an instruction from memory?",
                "si": "වොන් නියුමන් ව්‍යුහය තුළ මතකයෙන් විධානයක් ලබාගැනීමෙන් (Fetch) පසු වහාම සිදුවන පියවර කුමක්ද?"
            },
            "options": [
                {
                    "en": "Printing hard copy on paper",
                    "si": "කඩදාසියක මුද්‍රණය කිරීම"
                },
                {
                    "en": "Decoding the instruction in the Control Unit",
                    "si": "පාලන ඒකකය තුළ විධානය විකේතනය කිරීම (Decode)"
                },
                {
                    "en": "Formulating SQL query strings",
                    "si": "SQL විමසුම් සකස් කිරීම"
                },
                {
                    "en": "Powering off motherboard voltages",
                    "si": "මවුපුවරුවේ විදුලිය විසන්ධි කිරීම"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "The machine cycle runs strictly as Fetch -> Decode -> Execute -> Store.",
                "si": "යන්ත්‍ර චක්‍රය සැමවිටම විධානය ලබාගැනීම -> විකේතනය කිරීම -> ක්‍රියාත්මක කිරීම ලෙස සිදු වේ."
            },
            "syllabusRef": "G10.2.1"
        }
    ]
},

  'g10-u3-s1': {
    "id": "g10-u3-s1",
    "unitId": "g10-u3",
    "unitTitle": {
        "en": "Unit 03: Data Representation in Computer Systems",
        "si": "ඒකකය 03: පරිගණක පද්ධති තුළ දත්ත නිරූපණය"
    },
    "title": {
        "en": "8-Bit Switchboard & Color Chamber",
        "si": "ද්වීමය, අෂ්ටමය හා ෂඩ්දශමය"
    },
    "type": "interactive_lab",
    "sandboxType": "switchboard",
    "orderIndex": 8,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Binary Place Value Weights (8 Bits)",
                "si": "ද්වීමය ස්ථානීය අගයන් (බිටු 8)"
            },
            "visualWidget": "binary_weight",
            "bulletPoints": [
                {
                    "en": "Each bit represents a power of 2: 128 (2⁷), 64 (2⁶), 32 (2⁵), 16 (2⁴), 8 (2³), 4 (2²), 2 (2¹), 1 (2⁰).",
                    "si": "සෑම බිටුවක්ම 2 හි බලයක් නියෝජනය කරයි: 128, 64, 32, 16, 8, 4, 2, 1."
                },
                {
                    "en": "To convert binary to decimal, add the place values where the bit switch is 1 (ON).",
                    "si": "ද්වීමය සංඛ්‍යාවක් දශම බවට පත් කිරීමට 1 ඇති ස්ථානීය අගයන් එකතු කරන්න."
                },
                {
                    "en": "Example: 10000101₂ = 128 + 4 + 1 = 133₁₀.",
                    "si": "උදාහරණ: 10000101₂ = 128 + 4 + 1 = 133₁₀."
                }
            ],
            "keyTakeaway": {
                "en": "An 8-bit byte can represent 256 distinct values, ranging from 0 (00000000) to 255 (11111111).",
                "si": "බිටු 8 ක බයිටයකින් 0 සිට 255 දක්වා වූ අගයන් 256 ක් නිරූපණය කළ හැක."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Hexadecimal & 24-Bit RGB Colors",
                "si": "ෂඩ්දශමය සහ 24-Bit RGB වර්ණ"
            },
            "visualWidget": "hex_vat",
            "bulletPoints": [
                {
                    "en": "Hexadecimal uses Base 16: digits 0-9 and letters A (10) through F (15).",
                    "si": "ෂඩ්දශම පද්ධතිය පදනම 16 වන අතර 0-9 සහ A සිට F දක්වා අකුරු භාවිත කරයි."
                },
                {
                    "en": "Each hexadecimal digit represents exactly 4 binary bits (1 nibble).",
                    "si": "එක් ෂඩ්දශම අංකයකින් බිටු 4 ක් (නිබලයක්) නිරූපණය කළ හැක."
                },
                {
                    "en": "RGB colors use 6 hex digits (#RRGGBB): 2 hex digits per color channel (00 to FF = 0 to 255).",
                    "si": "RGB වර්ණ කේත #RRGGBB ලෙස ලියන අතර, එක් වර්ණයකට ෂඩ්දශම අංක 2 බැගින් වෙන් වේ."
                }
            ],
            "keyTakeaway": {
                "en": "Hexadecimal provides a compact, human-readable shorthand for binary computer memory and color bytes.",
                "si": "ෂඩ්දශම ක්‍රමය ද්වීමය අගයන් පහසුවෙන් කෙටියෙන් ලිවීමට යොදා ගනී."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "What is the decimal equivalent of the binary byte 10000101₂?",
                "si": "10000101₂ යන ද්වීමය සංඛ්‍යාවේ දශම අගය කුමක්ද?"
            },
            "options": [
                {
                    "en": "131",
                    "si": "131"
                },
                {
                    "en": "133",
                    "si": "133"
                },
                {
                    "en": "135",
                    "si": "135"
                },
                {
                    "en": "141",
                    "si": "141"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "128 + 0 + 0 + 0 + 0 + 4 + 0 + 1 = 133.",
                "si": "128 + 4 + 1 = 133 වේ."
            },
            "syllabusRef": "G10.3.1"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "What is the binary representation of hexadecimal digit D₁₆?",
                "si": "D₁₆ යන ෂඩ්දශම අංකයේ ද්වීමය නිරූපණය කුමක්ද?"
            },
            "options": [
                {
                    "en": "1011",
                    "si": "1011"
                },
                {
                    "en": "1100",
                    "si": "1100"
                },
                {
                    "en": "1101",
                    "si": "1101"
                },
                {
                    "en": "1110",
                    "si": "1110"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "D in hexadecimal equals decimal 13. 13 in binary is 8 + 4 + 1 = 1101₂.",
                "si": "D හි අගය 13 වේ. 13 ද්වීමය ක්‍රමයෙන් 1101 වේ."
            },
            "syllabusRef": "G10.3.2"
        }
    ]
},

  'g10-u3-s2': {
    "id": "g10-u3-s2",
    "unitId": "g10-u3",
    "unitTitle": {
        "en": "Unit 03: Data Representation in Computer Systems",
        "si": "ඒකකය 03: පරිගණක පද්ධති තුළ දත්ත නිරූපණය"
    },
    "title": {
        "en": "Character Encoding & Storage Units",
        "si": "අක්ෂර කේතන හා ආචයන ඒකක"
    },
    "type": "concept",
    "orderIndex": 9,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "ASCII, BCD and Unicode Standards",
                "si": "ASCII, BCD සහ යුනිකෝඩ් ප්‍රමිති"
            },
            "bulletPoints": [
                {
                    "en": "ASCII uses 7 bits (standard, 128 chars) or 8 bits (extended, 256 chars). Character 'A' is 65 (1000001₂), 'B' is 66.",
                    "si": "ASCII බිටු 7 (සම්මත, අක්ෂර 128) හෝ බිටු 8 (විස්තෘත, අක්ෂර 256) භාවිත කරයි. 'A' අක්ෂරය 65 (1000001₂) වේ."
                },
                {
                    "en": "BCD (Binary Coded Decimal) encodes each decimal digit (0-9) using 4 binary bits.",
                    "si": "BCD මගින් එක් දශම සංඛ්‍යාංකයක් සඳහා බිටු 4 බැගින් වෙන් කරයි."
                },
                {
                    "en": "Unicode overcomes ASCII limitations by supporting multilingual scripts worldwide including Sinhala and Tamil.",
                    "si": "යුනිකෝඩ් මගින් සිංහල හා දෙමළ ඇතුළු ලොව සියලු භාෂාවල අක්ෂර නිරූපණය කළ හැක."
                }
            ],
            "keyTakeaway": {
                "en": "Unicode provides a universal standard character set replacing localized legacy character maps.",
                "si": "යුනිකෝඩ් යනු ලෝකයේ සියලු භාෂා සඳහා භාවිත වන විශ්ව අක්ෂර කේතන ප්‍රමිතියයි."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Data Storage Units Hierarchy",
                "si": "දත්ත ආචයන ඒකක ධුරාවලිය"
            },
            "bulletPoints": [
                {
                    "en": "1 Byte (B) = 8 bits. 1 Kilobyte (KB) = 1,024 Bytes.",
                    "si": "බයිට් 1 = බිටු 8. කිලෝබයිට් 1 (KB) = බයිට් 1,024."
                },
                {
                    "en": "1 Megabyte (MB) = 1,024 KB. 1 Gigabyte (GB) = 1,024 MB.",
                    "si": "මෙගාබයිට් 1 (MB) = 1,024 KB. ගිගාබයිට් 1 (GB) = 1,024 MB."
                },
                {
                    "en": "1 Terabyte (TB) = 1,024 GB. 1 Petabyte (PB) = 1,024 TB.",
                    "si": "ටෙරාබයිට් 1 (TB) = 1,024 GB. පෙටාබයිට් 1 (PB) = 1,024 TB."
                }
            ],
            "keyTakeaway": {
                "en": "Storage sizes increase in powers of 2 (2¹⁰ = 1,024) across computing conventions.",
                "si": "පරිගණක දත්ත ආචයන ඒකක 2 හි 10 වන බලයෙන් (1,024) වැඩි වේ."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "If the ASCII code for character 'A' is 65 (1000001₂), what is the ASCII code for character 'C' in decimal and binary?",
                "si": "'A' අක්ෂරයේ ASCII අගය 65 (1000001₂) නම්, 'C' අක්ෂරයේ දශම සහ ද්වීමය අගය කුමක්ද?"
            },
            "options": [
                {
                    "en": "66 and 1000010₂",
                    "si": "66 සහ 1000010₂"
                },
                {
                    "en": "67 and 1000011₂",
                    "si": "67 සහ 1000011₂"
                },
                {
                    "en": "68 and 1000100₂",
                    "si": "68 සහ 1000100₂"
                },
                {
                    "en": "69 and 1000101₂",
                    "si": "69 සහ 1000101₂"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "'A' = 65, 'B' = 66, 'C' = 67. 67 in binary = 64 + 2 + 1 = 1000011₂.",
                "si": "'A' = 65, 'B' = 66, 'C' = 67 වේ. 67 ද්වීමය ක්‍රමයෙන් 1000011₂ වේ."
            },
            "syllabusRef": "G10.3.3"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "How many bytes are equivalent to 4 Kilobytes (KB)?",
                "si": "කිලෝබයිට් 4 (4 KB) ක අඩංගු බයිට් ගණන කොපමණද?"
            },
            "options": [
                {
                    "en": "4,000 Bytes",
                    "si": "බයිට් 4,000"
                },
                {
                    "en": "4,096 Bytes",
                    "si": "බයිට් 4,096"
                },
                {
                    "en": "2,048 Bytes",
                    "si": "බයිට් 2,048"
                },
                {
                    "en": "8,192 Bytes",
                    "si": "බයිට් 8,192"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "1 KB = 1024 Bytes. Therefore, 4 KB = 4 × 1024 = 4096 Bytes.",
                "si": "1 KB = බයිට් 1024 කි. එබැවින් 4 KB = 4 × 1024 = බයිට් 4096 කි."
            },
            "syllabusRef": "G10.3.4"
        }
    ]
},

  'g10-u3-boss': {
    "id": "g10-u3-boss",
    "unitId": "g10-u3",
    "unitTitle": {
        "en": "Unit 03: Data Representation in Computer Systems",
        "si": "ඒකකය 03: පරිගණක පද්ධති තුළ දත්ත නිරූපණය"
    },
    "title": {
        "en": "Unit 3 Boss: Data Representation & Coding Citadel",
        "si": "දත්ත නිරූපණ විභාග අභියෝගය"
    },
    "type": "boss_arena",
    "orderIndex": 10,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Character Encoding: ASCII, Unicode & BCD",
                "si": "අක්ෂර කේතන පද්ධති: ASCII, Unicode සහ BCD"
            },
            "bulletPoints": [
                {
                    "en": "Standard ASCII: 7-bit code representing 128 characters (A=65, a=97, 0=48).",
                    "si": "සම්මත ASCII: බිටු 7 කින් අක්ෂර 128 ක් නිරූපණය කරයි (A=65, a=97, 0=48)."
                },
                {
                    "en": "Extended ASCII: 8-bit code representing 256 symbols and European characters.",
                    "si": "විස්තෘත ASCII: බිටු 8 කින් අක්ෂර 256 ක් නිරූපණය කරයි."
                },
                {
                    "en": "Unicode: UTF-8 / UTF-16 encoding accommodating 65,000+ to 1 million+ characters including Sinhala and Tamil.",
                    "si": "යුනිකෝඩ්: සිංහල හා දෙමළ ඇතුළු ලොව සියලු භාෂා සඳහා අක්ෂර මිලියනයකට අධික ප්‍රමාණයක් නිරූපණය කරයි."
                }
            ],
            "keyTakeaway": {
                "en": "Unicode overcomes ASCII limitations, enabling universal multilingual computing.",
                "si": "යුනිකෝඩ් මගින් ලොව සියලු භාෂා පරිගණකගත කිරීමට හැකියාව ලැබී ඇත."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Storage Capacity Units & Conversions",
                "si": "ධාරිතා ඒකක සහ පරිවර්තන"
            },
            "bulletPoints": [
                {
                    "en": "1 Byte = 8 Bits. 1 Kilobyte (KB) = 1024 Bytes. 1 Megabyte (MB) = 1024 KB.",
                    "si": "1 බයිට් = බිටු 8. 1 කිලෝබයිට් (KB) = බයිට් 1024. 1 මෙගාබයිට් (MB) = KB 1024."
                },
                {
                    "en": "1 Gigabyte (GB) = 1024 MB. 1 Terabyte (TB) = 1024 GB.",
                    "si": "1 ගිගාබයිට් (GB) = MB 1024. 1 ටෙරාබයිට් (TB) = GB 1024."
                }
            ],
            "keyTakeaway": {
                "en": "Digital memory capacity scales exponentially in multiples of 2¹⁰ (1024).",
                "si": "ඩිජිටල් මතක ධාරිතාව 1024 (2¹⁰) ගුණාකාර වලින් වැඩි වේ."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "How many distinct symbols can standard 7-bit ASCII encode?",
                "si": "සම්මත බිටු 7 ක ASCII කේතය මගින් නිරූපණය කළ හැකි උපරිම වෙනස් අක්ෂර ගණන කොපමණද?"
            },
            "options": [
                {
                    "en": "64",
                    "si": "64"
                },
                {
                    "en": "128",
                    "si": "128"
                },
                {
                    "en": "256",
                    "si": "256"
                },
                {
                    "en": "1024",
                    "si": "1024"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "2⁷ = 128 distinct character representations.",
                "si": "2⁷ = 128 ක් වූ වෙනස් අක්ෂර නිරූපණය කළ හැක."
            },
            "syllabusRef": "G10.3.3"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "If ASCII code for letter \"A\" is 65₁₀, what is the ASCII code for letter \"D\"?",
                "si": "ASCII ක්‍රමයට අනුව \"A\" අකුරේ අගය 65₁₀ නම්, \"D\" අකුරේ අගය කුමක්ද?"
            },
            "options": [
                {
                    "en": "66",
                    "si": "66"
                },
                {
                    "en": "67",
                    "si": "67"
                },
                {
                    "en": "68",
                    "si": "68"
                },
                {
                    "en": "69",
                    "si": "69"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "A=65, B=66, C=67, D=68.",
                "si": "A=65 වන බැවින් D=68 වේ."
            },
            "syllabusRef": "G10.3.3"
        },
        {
            "id": "q3",
            "prompt": {
                "en": "Convert decimal number 75₁₀ into its octal (Base 8) equivalent:",
                "si": "75₁₀ යන දශමය සංඛ්‍යාව අෂ්ටමය (Base 8) සංඛ්‍යාවක් බවට පරිවර්තනය කළ විට ලැබෙන අගය කුමක්ද?"
            },
            "options": [
                {
                    "en": "111₈",
                    "si": "111₈"
                },
                {
                    "en": "113₈",
                    "si": "113₈"
                },
                {
                    "en": "123₈",
                    "si": "123₈"
                },
                {
                    "en": "131₈",
                    "si": "131₈"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "75 / 8 = 9 remainder 3. 9 / 8 = 1 remainder 1. 1 / 8 = 0 remainder 1. Reading upwards: 113₈.",
                "si": "75 අටෙන් බෙදූ විට පිළිතුර 113₈ ලැබේ."
            },
            "syllabusRef": "G10.3.1"
        },
        {
            "id": "q4",
            "prompt": {
                "en": "How many bytes are there in 2 Megabytes (2 MB)?",
                "si": "මෙගාබයිට් 2 (2 MB) තුළ ඇති බයිට් ගණන කොපමණද?"
            },
            "options": [
                {
                    "en": "2 × 1000 Bytes",
                    "si": "2 × 1000 බයිට්"
                },
                {
                    "en": "2 × 1024 × 1024 Bytes",
                    "si": "2 × 1024 × 1024 බයිට්"
                },
                {
                    "en": "2 × 1024 Bytes",
                    "si": "2 × 1024 බයිට්"
                },
                {
                    "en": "2 × 8 × 1024 Bytes",
                    "si": "2 × 8 × 1024 බයිට්"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "1 MB = 1024 KB = 1024 × 1024 Bytes. Thus 2 MB = 2 × 1024 × 1024 Bytes.",
                "si": "1 MB යනු 1024 × 1024 බයිට් බැවින් 2 MB යනු 2 × 1024 × 1024 බයිට් වේ."
            },
            "syllabusRef": "G10.3.4"
        }
    ]
},

  'g10-u4-s1': {
    "id": "g10-u4-s1",
    "unitId": "g10-u4",
    "unitTitle": {
        "en": "Unit 04: Fundamental Logic Gates & Boolean Logic",
        "si": "ඒකකය 04: මූලික ලොජික් ද්වාර සහ බූලීය තර්කනය"
    },
    "title": {
        "en": "Neon Logic Gate Breadboard",
        "si": "ලොජික් ද්වාර හා සත්‍යතා වගු"
    },
    "type": "interactive_lab",
    "sandboxType": "logic_workbench",
    "orderIndex": 11,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Primary Logic Gates (AND, OR, NOT)",
                "si": "මූලික ලොජික් ද්වාර (AND, OR, NOT)"
            },
            "visualWidget": "logic_gate",
            "bulletPoints": [
                {
                    "en": "AND Gate: Output is 1 ONLY when both inputs A and B are 1.",
                    "si": "AND ද්වාරය: ප්‍රතිදානය 1 වන්නේ ආදාන දෙකම 1 වූ විට පමණි."
                },
                {
                    "en": "OR Gate: Output is 1 if AT LEAST ONE input is 1.",
                    "si": "OR ද්වාරය: අවම වශයෙන් එක් ආදානයක් හෝ 1 නම් ප්‍රතිදානය 1 වේ."
                },
                {
                    "en": "NOT Gate (Inverter): Inverts input; 0 becomes 1, and 1 becomes 0.",
                    "si": "NOT ද්වාරය: ආදානය ප්‍රතිලෝම කරයි; 0 නම් 1 ද, 1 නම් 0 ද වේ."
                }
            ],
            "keyTakeaway": {
                "en": "Universal gates (NAND and NOR) can recreate any boolean circuit without requiring other gates.",
                "si": "NAND සහ NOR විශ්ව ද්වාර මගින් ඕනෑම ලොජික් පරිපථයක් නිර්මාණය කළ හැක."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Derived Gates: NAND, NOR, XOR, XNOR",
                "si": "ව්‍යුත්පන්න ලොජික් ද්වාර"
            },
            "bulletPoints": [
                {
                    "en": "NAND Gate: Inverted AND gate; output is 0 ONLY when both inputs are 1.",
                    "si": "NAND ද්වාරය: ආදාන දෙකම 1 වූ විට පමණක් ප්‍රතිදානය 0 වේ."
                },
                {
                    "en": "NOR Gate: Inverted OR gate; output is 1 ONLY when both inputs are 0.",
                    "si": "NOR ද්වාරය: ආදාන දෙකම 0 වූ විට පමණක් ප්‍රතිදානය 1 වේ."
                },
                {
                    "en": "XOR Gate (Exclusive OR): Output is 1 when inputs are DIFFERENT (0,1 or 1,0).",
                    "si": "XOR ද්වාරය: ආදාන දෙක එකිනෙකට වෙනස් වූ විට පමණක් ප්‍රතිදානය 1 වේ."
                }
            ],
            "keyTakeaway": {
                "en": "XOR is widely utilized in binary half-adders and parity checkers.",
                "si": "XOR ද්වාරය ද්වීමය අර්ධ එකතුකාරක (Half Adder) පරිපථවල බහුලව භාවිත වේ."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "Which logic gate outputs 0 ONLY when both inputs A and B are 0, and 1 otherwise?",
                "si": "A සහ B යන ආදාන දෙකම 0 වූ විට පමණක් ප්‍රතිදානය 0 ද, අනෙක් සෑම විටම 1 ද ලබා දෙන ද්වාරය කුමක්ද?"
            },
            "options": [
                {
                    "en": "AND Gate",
                    "si": "AND ද්වාරය"
                },
                {
                    "en": "OR Gate",
                    "si": "OR ද්වාරය"
                },
                {
                    "en": "XOR Gate",
                    "si": "XOR ද්වාරය"
                },
                {
                    "en": "NOR Gate",
                    "si": "NOR ද්වාරය"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "In an OR gate truth table, 0 OR 0 = 0, while any combination containing 1 evaluates to 1.",
                "si": "OR ද්වාරයකදී 0 + 0 = 0 වන අතර, අනෙක් සෑම සංයෝජනයකදීම ප්‍රතිදානය 1 වේ."
            },
            "syllabusRef": "G10.4.1"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Why are NAND and NOR classified as \"Universal Gates\"?",
                "si": "NAND සහ NOR \"විශ්ව ද්වාර (Universal Gates)\" ලෙස හඳුන්වන්නේ ඇයි?"
            },
            "options": [
                {
                    "en": "They consume zero electrical current in circuits",
                    "si": "ඒවා ක්‍රියා කිරීමට විදුලිය අවශ්‍ය නොවන නිසා"
                },
                {
                    "en": "Any Boolean function or logic gate can be constructed using only that gate type",
                    "si": "වෙනත් කිසිදු ද්වාරයක සහයකින් තොරව ඕනෑම ලොජික් පරිපථයක් ඒවා මගින් පමණක් නිර්මාණය කළ හැකි බැවින්"
                },
                {
                    "en": "They have infinite input pins on integrated circuits",
                    "si": "ඒවාට අසීමිත ආදාන කෙවෙනි ඇති නිසා"
                },
                {
                    "en": "They are only manufactured in spacecraft computers",
                    "si": "ඒවා අභ්‍යවකාශ පරිගණක සඳහා පමණක් නිපදවන නිසා"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Universal gates can synthesize NOT, AND, OR, and any complex logic function exclusively.",
                "si": "NAND හෝ NOR භාවිතයෙන් පමණක් අනෙක් සියලුම මූලික ද්වාර නිපදවිය හැක."
            },
            "syllabusRef": "G10.4.2"
        }
    ]
},

  'g10-u4-boss': {
    "id": "g10-u4-boss",
    "unitId": "g10-u4",
    "unitTitle": {
        "en": "Unit 04: Fundamental Logic Gates & Boolean Logic",
        "si": "ඒකකය 04: මූලික ලොජික් ද්වාර සහ බූලීය තර්කනය"
    },
    "title": {
        "en": "Unit 4 Boss: Logic Circuits & Gates Arena",
        "si": "ලොජික් පරිපථ විභාග සටන්"
    },
    "type": "boss_arena",
    "orderIndex": 12,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "De Morgan’s Laws & Boolean Simplification",
                "si": "ඩි මෝර්ගන්ගේ නියම"
            },
            "bulletPoints": [
                {
                    "en": "First Law: (A · B)' = A' + B' (NOT of AND equals NOTs ORed).",
                    "si": "පළමු නියමය: (A · B)' = A' + B'"
                },
                {
                    "en": "Second Law: (A + B)' = A' · B' (NOT of OR equals NOTs ANDed).",
                    "si": "දෙවන නියමය: (A + B)' = A' · B'"
                }
            ],
            "keyTakeaway": {
                "en": "De Morgan’s theorems allow transforming NAND-based circuits into NOR logic and vice versa.",
                "si": "ඩි මෝර්ගන් නියම ආශ්‍රයෙන් සංකීර්ණ තාර්කික පරිපථ සරල කළ හැක."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "7400-Series TTL IC Pinout Architecture",
                "si": "7400 කාණ්ඩයේ IC පරිපථ සැකස්ම"
            },
            "bulletPoints": [
                {
                    "en": "Standard 14-pin DIP: Pin 14 is Vcc (+5V Power); Pin 7 is GND (0V Ground).",
                    "si": "කෙවෙනි 14 කින් යුත් IC: කෙවෙනි 14 Vcc (+5V) ද, කෙවෙනි 7 GND (භූගත) ද වේ."
                },
                {
                    "en": "IC 7400 contains four 2-input NAND gates; IC 7408 contains four 2-input AND gates.",
                    "si": "IC 7400 හි NAND ද්වාර 4 ක් ද, IC 7408 හි AND ද්වාර 4 ක් ද අඩංගු වේ."
                }
            ],
            "keyTakeaway": {
                "en": "Ensure Vcc and GND pins are connected before analyzing internal gate logic.",
                "si": "IC පරිපථයක් ක්‍රියාත්මක වීමට පෙර Vcc සහ GND නිවැරදිව සම්බන්ධ කළ යුතුය."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "On a standard 14-pin dual in-line package (DIP) TTL logic IC, which pin connects to Ground (GND)?",
                "si": "සම්මත කෙවෙනි 14 කින් යුත් TTL ලොජික් IC එකක භූගත කෙවෙනිය (GND) වන්නේ කුමන අංකය ද?"
            },
            "options": [
                {
                    "en": "Pin 1",
                    "si": "කෙවෙනි 1"
                },
                {
                    "en": "Pin 7",
                    "si": "කෙවෙනි 7"
                },
                {
                    "en": "Pin 10",
                    "si": "කෙවෙනි 10"
                },
                {
                    "en": "Pin 14",
                    "si": "කෙවෙනි 14"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "In standard 14-pin TTL ICs (like 7400, 7408, 7432), Pin 7 is Ground and Pin 14 is Vcc (+5V).",
                "si": "සම්මත කෙවෙනි 14 කින් යුත් IC එකක කෙවෙනි 7 GND ද, කෙවෙනි 14 Vcc (+5V) ද වේ."
            },
            "syllabusRef": "G10.4.3"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "According to De Morgan's Law, what is the boolean equivalent of (A + B)'?",
                "si": "ඩි මෝර්ගන්ගේ නියමයට අනුව (A + B)' යන්නට සමාන බූලීය ප්‍රකාශනය කුමක්ද?"
            },
            "options": [
                {
                    "en": "A' + B'",
                    "si": "A' + B'"
                },
                {
                    "en": "A' · B'",
                    "si": "A' · B'"
                },
                {
                    "en": "A · B",
                    "si": "A · B"
                },
                {
                    "en": "(A · B)'",
                    "si": "(A · B)'"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "The complement of an OR is the product of the complements: (A + B)' = A' · B'.",
                "si": "නියමයට අනුව (A + B)' = A' · B' වේ."
            },
            "syllabusRef": "G10.4.4"
        },
        {
            "id": "q3",
            "prompt": {
                "en": "In an XOR gate, what is the output when both inputs A and B are 1?",
                "si": "XOR ද්වාරයකට A=1 සහ B=1 යන ආදාන ලබා දුන් විට ප්‍රතිදානය කුමක් වේද?"
            },
            "options": [
                {
                    "en": "0",
                    "si": "0"
                },
                {
                    "en": "1",
                    "si": "1"
                },
                {
                    "en": "Undefined",
                    "si": "අර්ථ දැක්විය නොහැක"
                },
                {
                    "en": "High impedance only",
                    "si": "අධික සම්බාධනය පමණි"
                }
            ],
            "correctIndex": 0,
            "explanation": {
                "en": "An XOR gate outputs 1 only when inputs are unequal. When inputs are equal (1, 1 or 0, 0), output is 0.",
                "si": "XOR ද්වාරයක ආදාන දෙක සමාන වූ විට (1,1) ප්‍රතිදානය 0 වේ."
            },
            "syllabusRef": "G10.4.1"
        },
        {
            "id": "q4",
            "prompt": {
                "en": "Which logic circuit is constructed by placing an inverter (NOT gate) at the output of an AND gate?",
                "si": "AND ද්වාරයක ප්‍රතිදානයට NOT ද්වාරයක් සම්බන්ධ කිරීමෙන් නිර්මාණය වන ද්වාරය කුමක්ද?"
            },
            "options": [
                {
                    "en": "NOR Gate",
                    "si": "NOR ද්වාරය"
                },
                {
                    "en": "NAND Gate",
                    "si": "NAND ද්වාරය"
                },
                {
                    "en": "XOR Gate",
                    "si": "XOR ද්වාරය"
                },
                {
                    "en": "Buffer Gate",
                    "si": "බෆර් ද්වාරය"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "NOT + AND = NAND (Not-AND) gate.",
                "si": "AND ද්වාරයක ප්‍රතිදානය ප්‍රතිලෝම කළ විට NAND ද්වාරය ලැබේ."
            },
            "syllabusRef": "G10.4.1"
        }
    ]
},

  'g10-u5-s1': {
    "id": "g10-u5-s1",
    "unitId": "g10-u5",
    "unitTitle": {
        "en": "Unit 05: Operating Systems",
        "si": "ඒකකය 05: මෙහෙයුම් පද්ධති"
    },
    "title": {
        "en": "Operating System Engine (Booting & CLI)",
        "si": "මෙහෙයුම් පද්ධති හා Booting"
    },
    "type": "concept",
    "orderIndex": 13,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Computer Booting Sequence & BIOS",
                "si": "පරිගණකය පණගැන්වීම (Booting) සහ BIOS"
            },
            "bulletPoints": [
                {
                    "en": "Cold Boot: Starting a computer from completely powered-off state.",
                    "si": "සීතල පණගැන්වීම (Cold Boot): විදුලිය විසන්ධි වී ඇති පරිගණකයක් මුල සිට පණගැන්වීම."
                },
                {
                    "en": "Warm Boot (Reboot): Restarting the operating system while power remains supplied.",
                    "si": "උණුසුම් පණගැන්වීම (Warm Boot): විදුලිය නොකඩා පද්ධතිය නැවත පණගැන්වීම (Restart)."
                },
                {
                    "en": "POST (Power-On Self-Test): Hardware diagnostic routine executed by BIOS firmware on ROM.",
                    "si": "POST පරීක්ෂාව: ROM මතකය මගින් දෘඩාංග නිවැරදිව ක්‍රියා කරන්නේදැයි පරීක්ෂා කිරීම."
                }
            ],
            "keyTakeaway": {
                "en": "Booting loads the OS kernel from secondary storage into main RAM.",
                "si": "Booting ක්‍රියාවලිය මගින් මෙහෙයුම් පද්ධතිය දෘඪ තැටියේ සිට RAM මතකයට පටවනු ලැබේ."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "CLI vs GUI User Interfaces",
                "si": "CLI සහ GUI අතුරුමුහුණත්"
            },
            "bulletPoints": [
                {
                    "en": "Command-Line Interface (CLI): Text-based commands (e.g. MS-DOS, Linux Terminal); low memory footprint.",
                    "si": "විධාන රේඛා අතුරුමුහුණත (CLI): පෙළ විධාන මගින් ක්‍රියා කරයි (MS-DOS); අඩු මතකයක් වැය වේ."
                },
                {
                    "en": "Graphical User Interface (GUI): Utilizes WIMP paradigm (Windows, Icons, Menus, Pointers); intuitive for everyday users.",
                    "si": "චිත්‍රක අතුරුමුහුණත (GUI): කවුළු, අයිකන, මෙනු සහ දර්ශක (WIMP) භාවිතයෙන් ක්‍රියා කරයි."
                }
            ],
            "keyTakeaway": {
                "en": "GUI prioritizes user-friendliness while CLI offers precision, scripting, and minimal resource usage.",
                "si": "GUI සාමාන්‍ය පරිශීලකයාට පහසු වන අතර, CLI පරිපාලක මෙහෙයුම් සඳහා බලවත් වේ."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "What is the diagnostic routine performed by the BIOS during the computer boot process?",
                "si": "පරිගණකය පණගැන්වීමේදී BIOS මගින් සිදු කරනු ලබන මූලික දෘඩාංග පරීක්ෂාව කුමක්ද?"
            },
            "options": [
                {
                    "en": "Disk Defragmentation",
                    "si": "තැටි කැබලි ඉවත් කිරීම (Defragmentation)"
                },
                {
                    "en": "Power-On Self-Test (POST)",
                    "si": "POST පරීක්ෂාව (Power-On Self-Test)"
                },
                {
                    "en": "SQL Database Indexing",
                    "si": "දත්ත සමුදා දර්ශක සැකසුම"
                },
                {
                    "en": "Word Processing Spell Check",
                    "si": "වචන සකසුම් අක්ෂර වින්‍යාස පරීක්ෂාව"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "POST checks motherboard hardware components (RAM, CPU, Keyboard) before loading the OS bootloader.",
                "si": "POST මගින් දෘඩාංග ක්‍රියාකාරීත්වය තහවුරු කරයි."
            },
            "syllabusRef": "G10.5.1"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Which element is NOT part of the traditional GUI WIMP paradigm?",
                "si": "සාම්ප්‍රදායික චිත්‍රක පරිශීලක අතුරුමුහුණතේ (GUI) WIMP සංකල්පයට අයත් නොවන්නේ කුමක්ද?"
            },
            "options": [
                {
                    "en": "Windows",
                    "si": "කවුළු (Windows)"
                },
                {
                    "en": "Icons",
                    "si": "අයිකන (Icons)"
                },
                {
                    "en": "Pointers",
                    "si": "දර්ශක (Pointers)"
                },
                {
                    "en": "Punch cards",
                    "si": "සිදුරුපත් (Punch cards)"
                }
            ],
            "correctIndex": 3,
            "explanation": {
                "en": "WIMP stands for Windows, Icons, Menus, and Pointers. Punch cards were 1st generation media.",
                "si": "WIMP යනු Windows, Icons, Menus, Pointers වේ. සිදුරුපත් පැරණි ආචයන මාධ්‍යයකි."
            },
            "syllabusRef": "G10.5.2"
        }
    ]
},

  'g10-u5-boss': {
    "id": "g10-u5-boss",
    "unitId": "g10-u5",
    "unitTitle": {
        "en": "Unit 05: Operating Systems",
        "si": "ඒකකය 05: මෙහෙයුම් පද්ධති"
    },
    "title": {
        "en": "Unit 5 Boss: OS Master Arena",
        "si": "මෙහෙයුම් පද්ධති විභාග අභියෝගය"
    },
    "type": "boss_arena",
    "orderIndex": 14,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Core Resource Management Functions of an OS",
                "si": "මෙහෙයුම් පද්ධතියක සම්පත් කළමනාකරණය"
            },
            "bulletPoints": [
                {
                    "en": "Process Management: Schedules CPU time slices among concurrent tasks (Multitasking).",
                    "si": "ක්‍රියාවලි කළමනාකරණය: කාර්යයන් කිහිපයක් අතර CPU කාලය බෙදා හැරීම (Multitasking)."
                },
                {
                    "en": "Memory Management: Allocates RAM partitions and maintains Virtual Memory paging files.",
                    "si": "මතක කළමනාකරණය: RAM මතකය බෙදාදීම සහ අතථ්‍ය මතකය (Virtual Memory) පාලනය."
                },
                {
                    "en": "File Management: Organizes directory hierarchies and controls read/write access permissions.",
                    "si": "ගොනු කළමනාකරණය: ගොනු ධූරාවලිය සහ ප්‍රවේශ අවසර කළමනාකරණය කිරීම."
                }
            ],
            "keyTakeaway": {
                "en": "An Operating System acts as the intermediary between hardware, application programs, and users.",
                "si": "මෙහෙයුම් පද්ධතිය පරිගණක දෘඩාංග, යෙදුම් මෘදුකාංග සහ පරිශීලකයා අතර පාලමක් වේ."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Utility Software & System Maintenance",
                "si": "උපයෝගිතා මෘදුකාංග සහ නඩත්තුව"
            },
            "bulletPoints": [
                {
                    "en": "Disk Defragmenter: Reorganizes fragmented file blocks into contiguous storage for faster disk reads.",
                    "si": "තැටි විසිරුම් සකසනය: විසිරුණු ගොනු කොටස් එකට පෙළගස්වා කියවීමේ වේගය වැඩි කරයි."
                },
                {
                    "en": "Antivirus & Firewall: Scans for malware, worms, and blocks unauthorized network connections.",
                    "si": "ප්‍රතිවෛරස් සහ ගිනිපවුර: අනිෂ්ට මෘදුකාංග සහ අනවසර ජාල ප්‍රවේශයන් වළක්වයි."
                }
            ],
            "keyTakeaway": {
                "en": "Utility programs maintain smooth system performance and safeguard security.",
                "si": "උපයෝගිතා මෘදුකාංග පද්ධතියේ කාර්යක්ෂමතාව සහ ආරක්ෂාව තහවුරු කරයි."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "What is the function of Virtual Memory in modern Operating Systems?",
                "si": "නවීන මෙහෙයුම් පද්ධතිවල \"අතථ්‍ය මතකය (Virtual Memory)\" මගින් ඉටු කරනු ලබන කාර්යභාරය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Supplying backup electrical power during blackouts",
                    "si": "විදුලිය විසන්ධි වූ විට අමතර විදුලිය ලබාදීම"
                },
                {
                    "en": "Extending physical RAM capacity by utilizing designated secondary storage hard disk space",
                    "si": "ද්විතීයික ආචයනයේ කොටසක් භාවිත කරමින් ප්‍රධාන RAM මතක ධාරිතාව අථත්‍ය ලෙස පුළුල් කිරීම"
                },
                {
                    "en": "Burning optical compact discs automatically",
                    "si": "ස්වයංක්‍රීයව සංයුක්ත තැටි ලිවීම"
                },
                {
                    "en": "Preventing dust accumulation on motherboard chips",
                    "si": "මවුපුවරුවේ දූවිලි බැඳීම වැළැක්වීම"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Virtual memory pages inactive memory blocks to disk swap space when physical RAM becomes exhausted.",
                "si": "RAM මතකය පිරී ගිය විට දෘඪ තැටියේ කොටසක් ප්‍රධාන මතකය ලෙස භාවිත කිරීම අතථ්‍ය මතකයයි."
            },
            "syllabusRef": "G10.5.3"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Which utility software reorganizes scattered file clusters into contiguous areas on a mechanical hard disk?",
                "si": "දෘඪ තැටියක විසිරී ඇති ගොනු කොටස් එක් තැනකට ගෙන ඒම සඳහා භාවිත වන උපයෝගිතා මෘදුකාංගය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Disk Defragmenter",
                    "si": "තැටි විසිරුම් සකසනය (Disk Defragmenter)"
                },
                {
                    "en": "Screen Saver",
                    "si": "තිර සුරැකුම"
                },
                {
                    "en": "Calculator",
                    "si": "ගණක යන්ත්‍රය"
                },
                {
                    "en": "Font Viewer",
                    "si": "අකුරු නරඹනය"
                }
            ],
            "correctIndex": 0,
            "explanation": {
                "en": "Defragmentation places non-contiguous sectors adjacent to each other, reducing drive head travel time.",
                "si": "Disk Defragmenter මගින් දෘඪ තැටියේ දත්ත පිළිවෙළකට සකස් කරයි."
            },
            "syllabusRef": "G10.5.4"
        },
        {
            "id": "q3",
            "prompt": {
                "en": "Which operating system is classified as Open Source and free for public modification?",
                "si": "ප්‍රභව කේතය නොමිලේ වෙනස් කිරීමට සහ ලබාගැනීමට හැකි විවෘත මූලාශ්‍ර මෙහෙයුම් පද්ධතියක් වන්නේ කුමක්ද?"
            },
            "options": [
                {
                    "en": "Microsoft Windows 11",
                    "si": "Microsoft Windows 11"
                },
                {
                    "en": "Apple macOS Sonoma",
                    "si": "Apple macOS Sonoma"
                },
                {
                    "en": "Linux (Ubuntu / Fedora)",
                    "si": "Linux (Ubuntu / Fedora)"
                },
                {
                    "en": "Apple iOS",
                    "si": "Apple iOS"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "Linux is licensed under GNU GPL as free and open-source software.",
                "si": "Linux යනු නිදහස් හා විවෘත මූලාශ්‍ර (FOSS) මෙහෙයුම් පද්ධතියකි."
            },
            "syllabusRef": "G10.5.5"
        },
        {
            "id": "q4",
            "prompt": {
                "en": "Which of the following is an example of an embedded operating system?",
                "si": "පහත සඳහන් දෑ අතරින් අන්තර්ගත මෙහෙයුම් පද්ධතියකට (Embedded OS) උදාහරණයක් වන්නේ කුමක්ද?"
            },
            "options": [
                {
                    "en": "OS in an automated microwave oven or smart washing machine",
                    "si": "ස්වයංක්‍රීය මයික්‍රෝවේව් උදුනක හෝ ස්මාර්ට් රෙදි සෝදන යන්ත්‍රයක ඇති OS එක"
                },
                {
                    "en": "Windows Server DataCenter edition",
                    "si": "Windows Server දත්ත මධ්‍යස්ථාන සංස්කරණය"
                },
                {
                    "en": "Supercomputer scientific clustering OS",
                    "si": "සුපිරි පරිගණක විද්‍යාත්මක OS"
                },
                {
                    "en": "Cloud virtualization hypervisor",
                    "si": "වලාකුළු අථත්‍යකරණ පද්ධතිය"
                }
            ],
            "correctIndex": 0,
            "explanation": {
                "en": "Embedded OS is purpose-built to control dedicated smart appliances and vehicle systems with minimal footprint.",
                "si": "විශේෂිත ගෘහ උපකරණ හෝ වාහන පාලනය සඳහා විශේෂයෙන් තැනූ OS අන්තර්ගත (Embedded) OS වේ."
            },
            "syllabusRef": "G10.5.5"
        }
    ]
},

  'g10-u6-s1': {
    "id": "g10-u6-s1",
    "unitId": "g10-u6",
    "unitTitle": {
        "en": "Unit 06: Word Processing",
        "si": "ඒකකය 06: වචන සකසුම්"
    },
    "title": {
        "en": "Word Processing & Mail Merge Studio",
        "si": "වචන සකසුම් හා තැපැල් ඒකාබද්ධතාව"
    },
    "type": "concept",
    "orderIndex": 15,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Typography, Styles & Document Formatting",
                "si": "ලේඛන හැඩසැරසුම් සහ අකුරු විලාස"
            },
            "bulletPoints": [
                {
                    "en": "Character formatting: Font family, size (pt), style (Bold, Italic, Underline), subscript/superscript.",
                    "si": "අක්ෂර හැඩසැරසුම්: අකුරු වර්ගය, ප්‍රමාණය, තද (Bold), ඇල (Italic), යටිඉරි, සහ උපසිරැසි."
                },
                {
                    "en": "Paragraph formatting: Alignment (Left, Center, Right, Justified), line spacing, indents, bullet points.",
                    "si": "ඡේද හැඩසැරසුම්: පෙළගැස්ම (වම, මැද, දකුණ, සමාන්තර), පේළි පරතරය සහ බුලට් ලැයිස්තු."
                },
                {
                    "en": "Page setup: Paper size (A4, Letter), margins (Top, Bottom, Left, Right), Orientation (Portrait, Landscape).",
                    "si": "පිටු සැකැස්ම: කඩදාසි ප්‍රමාණය (A4), මායිම් සහ දිශානතිය (Portrait, Landscape)."
                }
            ],
            "keyTakeaway": {
                "en": "Professional document design utilizes styles for consistent visual hierarchy across pages.",
                "si": "ලේඛනයක් ආකර්ශනීයව සැකසීමට සම්මත හැඩසැරසුම් සහ මෝස්තර භාවිත කරයි."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Automated Mail Merge Mechanism",
                "si": "තැපැල් ඒකාබද්ධතාව (Mail Merge)"
            },
            "bulletPoints": [
                {
                    "en": "Main Document: The standardized master letter containing boilerplate body text and merge field placeholders.",
                    "si": "ප්‍රධාන ලේඛනය: පොදු පෙළ සහ ඒකාබද්ධ ක්ෂේත්‍ර අඩංගු මූලික ලිපිය."
                },
                {
                    "en": "Data Source: A tabular dataset (e.g. database table, spreadsheet) containing recipient records (Name, Address).",
                    "si": "දත්ත ප්‍රභවය: ලබන්නාගේ විස්තර (නම, ලිපිනය) අඩංගු පැතුරුම්පත හෝ දත්ත සමුදාය."
                },
                {
                    "en": "Merged Document: The generated batch of individualized letters ready for printing or email distribution.",
                    "si": "ඒකාබද්ධ ලේඛනය: එක් එක් පුද්ගලයාට වෙන් වෙන්ව ස්වයංක්‍රීයව සැකසුණු අවසන් ලිපි එකතුව."
                }
            ],
            "keyTakeaway": {
                "en": "Mail Merge drastically reduces clerical time when preparing mass customized correspondence.",
                "si": "තැපැල් ඒකාබද්ධතාව මගින් පුද්ගලාරෝපිත ලිපි දහස් ගණනක් එකවර සැකසිය හැක."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "What are the two mandatory components required to execute an automated Mail Merge in a word processor?",
                "si": "වචන සකසනයක තැපැල් ඒකාබද්ධතාව (Mail Merge) සිදු කිරීමට අවශ්‍ය වන අනිවාර්ය සංරචක දෙක කුමක්ද?"
            },
            "options": [
                {
                    "en": "Web Browser and FTP Server",
                    "si": "වෙබ් බ්‍රවුසරය සහ FTP සේවාදායකය"
                },
                {
                    "en": "Main Document and Data Source",
                    "si": "ප්‍රධාන ලේඛනය (Main Document) සහ දත්ත ප්‍රභවය (Data Source)"
                },
                {
                    "en": "Graphics Tablet and Scanner",
                    "si": "ග්‍රැෆික් පුවරුව සහ ස්කෑනරය"
                },
                {
                    "en": "Compiling Terminal and Debugger",
                    "si": "ක්‍රමලේඛ පර්යන්තය සහ නිදොස්කාරකය"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Mail Merge combines fixed text in the Main Document with variable recipient rows in the Data Source.",
                "si": "තැපැල් ඒකාබද්ධතාවයට ප්‍රධාන ලේඛනය සහ දත්ත ප්‍රභවය අත්‍යවශ්‍ය වේ."
            },
            "syllabusRef": "G10.6.1"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Which paragraph alignment spreads text evenly between left and right margins, creating clean vertical edges?",
                "si": "පෙළෙහි වම් සහ දකුණු මායිම් දෙකම එක හා සමානව පිළිවෙළකට සකසන ඡේද පෙළගැස්ම කුමක්ද?"
            },
            "options": [
                {
                    "en": "Align Left",
                    "si": "වමට පෙළගැස්ම"
                },
                {
                    "en": "Center",
                    "si": "මැදට පෙළගැස්ම"
                },
                {
                    "en": "Justify",
                    "si": "දෙපසට සමාන්තර කිරීම (Justify)"
                },
                {
                    "en": "Align Right",
                    "si": "දකුණට පෙළගැස්ම"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "Justified text adjusts word spacing so each line touches both margins, common in newspapers and textbooks.",
                "si": "Justify මගින් දෙපසටම සමාන්තරව පෙළ සකස් කෙරේ."
            },
            "syllabusRef": "G10.6.2"
        }
    ]
},

  'g10-u6-boss': {
    "id": "g10-u6-boss",
    "unitId": "g10-u6",
    "unitTitle": {
        "en": "Unit 06: Word Processing",
        "si": "ඒකකය 06: වචන සකසුම්"
    },
    "title": {
        "en": "Unit 6 Boss: Word Processing Arena",
        "si": "වචන සකසුම් විභාග අභියෝගය"
    },
    "type": "boss_arena",
    "orderIndex": 16,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Tables, Columns & Advanced Layouts",
                "si": "වගු, තීරු සහ උසස් පිරිසැලසුම්"
            },
            "bulletPoints": [
                {
                    "en": "Tables: Structured 2D grids of rows and columns; cells can be merged or split.",
                    "si": "වගු: පේළි සහ තීරු සහිත ජාල; සෛල ඒකාබද්ධ කිරීම (Merge) හෝ බෙදීම (Split) කළ හැක."
                },
                {
                    "en": "Newspaper columns: Multi-column flows where text fills vertically down before wrapping to next column.",
                    "si": "පුවත්පත් තීරු: පෙළ තීරු කිහිපයකට බෙදා ගලා යාමට සැලැස්වීම."
                },
                {
                    "en": "Headers and Footers: Repeating metadata (document title, page number, author) displayed on page borders.",
                    "si": "ශීර්ෂක සහ පාදක: පිටු අංක, ලේඛන මාතෘකා සෑම පිටුවකම ඉහළින් හෝ පහළින් පුනරාවර්තනය කිරීම."
                }
            ],
            "keyTakeaway": {
                "en": "Section breaks allow having differing page orientations (Portrait alongside Landscape) in one document.",
                "si": "කඩනයන් (Breaks) මගින් එක් ලේඛනයක් තුළ විවිධ දිශානති සහ පිටු සැකසුම් පවත්වා ගත හැක."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Find & Replace, Proofreading Tools",
                "si": "සෙවීම, ප්‍රතිස්ථාපනය සහ සංස්කරණ"
            },
            "bulletPoints": [
                {
                    "en": "Find & Replace: Quickly locates specific target strings and replaces them globally throughout the document.",
                    "si": "සෙවීම සහ ප්‍රතිස්ථාපනය: ලේඛනයේ ඇති නිශ්චිත වචනයක් සොයා වෙනත් වචනයකින් ක්ෂණිකව මාරු කිරීම."
                },
                {
                    "en": "Spelling & Grammar Checker: Highlights typos (red wavy underline) and grammatical inconsistencies (blue/green).",
                    "si": "අක්ෂර වින්‍යාස පරීක්ෂාව: වැරදි වචන රතු රැලි ඉරකින් ද, ව්‍යාකරණ දෝෂ නිල්/කොළ ඉරකින් ද පෙන්වයි."
                }
            ],
            "keyTakeaway": {
                "en": "Automated proofreading significantly improves document quality before publishing.",
                "si": "ස්වයංක්‍රීය සංස්කරණ මෙවලම් ලේඛනයේ දෝෂ අවම කිරීමට මහෝපකාරී වේ."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "Which feature in a word processor allows displaying page numbers automatically at the bottom of every page?",
                "si": "සෑම පිටුවකම පහළින් ස්වයංක්‍රීයව පිටු අංකය ප්‍රදර්ශනය කිරීමට භාවිත වන අංගය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Watermark",
                    "si": "දිය සලකුණ (Watermark)"
                },
                {
                    "en": "Footer",
                    "si": "පාදකය (Footer)"
                },
                {
                    "en": "Drop Cap",
                    "si": "පළමු අකුර විශාල කිරීම (Drop Cap)"
                },
                {
                    "en": "Hyperlink",
                    "si": "හයිපර්ලින්ක්"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "A Footer repeats specified content, such as dynamic page numbering, at the bottom margin of pages.",
                "si": "පාදකය (Footer) මගින් පිටුවේ පහළ මායිමේ පිටු අංක ආදිය ස්වයංක්‍රීයව රඳවයි."
            },
            "syllabusRef": "G10.6.3"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "In a document table, combining three adjacent horizontal cells into a single large cell is called:",
                "si": "වගුවක යාබද තිරස් සෛල තුනක් එක් විශාල තනි සෛලයක් බවට පත් කිරීම හඳුන්වන්නේ කුමක් ලෙසද?"
            },
            "options": [
                {
                    "en": "Splitting Cells",
                    "si": "සෛල බෙදීම (Splitting Cells)"
                },
                {
                    "en": "Merging Cells",
                    "si": "සෛල ඒකාබද්ධ කිරීම (Merging Cells)"
                },
                {
                    "en": "Sorting Rows",
                    "si": "පේළි පෙළගැස්වීම"
                },
                {
                    "en": "Filtering Records",
                    "si": "වාර්තා පෙරීම"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Merge Cells unites selected multiple cells into one continuous compartment.",
                "si": "සෛල කිහිපයක් එකක් බවට පත් කිරීම සෛල ඒකාබද්ධ කිරීම (Merge) වේ."
            },
            "syllabusRef": "G10.6.4"
        },
        {
            "id": "q3",
            "prompt": {
                "en": "Which keyboard shortcut is conventionally used to find and replace text across a document?",
                "si": "ලේඛනයක පෙළ සෙවීමට සහ ප්‍රතිස්ථාපනය කිරීමට (Find and Replace) සම්මත කෙටිමං යතුර කුමක්ද?"
            },
            "options": [
                {
                    "en": "Ctrl + H",
                    "si": "Ctrl + H"
                },
                {
                    "en": "Ctrl + P",
                    "si": "Ctrl + P"
                },
                {
                    "en": "Ctrl + S",
                    "si": "Ctrl + S"
                },
                {
                    "en": "Ctrl + Z",
                    "si": "Ctrl + Z"
                }
            ],
            "correctIndex": 0,
            "explanation": {
                "en": "Ctrl + H opens the Replace dialog; Ctrl + F opens Find.",
                "si": "Ctrl + H මගින් Find and Replace කවුළුව විවෘත වේ."
            },
            "syllabusRef": "G10.6.5"
        },
        {
            "id": "q4",
            "prompt": {
                "en": "A red wavy underline underneath a word in a word processor typically signifies:",
                "si": "වචන සකසනයක වචනයක් යටින් දිස්වන රතු රැලි ඉරකින් (Red wavy underline) සාමාන්‍යයෙන් අදහස් වන්නේ කුමක්ද?"
            },
            "options": [
                {
                    "en": "Grammatical syntax error",
                    "si": "ව්‍යාකරණ දෝෂයක්"
                },
                {
                    "en": "Spelling error or unrecognised dictionary word",
                    "si": "අක්ෂර වින්‍යාස දෝෂයක් හෝ ශබ්දකෝෂයේ නොමැති වචනයක්"
                },
                {
                    "en": "Word is hyperlinked to the web",
                    "si": "වචනය අන්තර්ජාලයට සම්බන්ධ කර ඇති බව"
                },
                {
                    "en": "Word is set as an automated macro",
                    "si": "වචනය මැක්‍රෝවක් ලෙස සකසා ඇති බව"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Red wavy underlines denote spelling errors against the active language dictionary.",
                "si": "රතු රැලි ඉර මගින් අක්ෂර වින්‍යාස දෝෂයක් පෙන්වයි."
            },
            "syllabusRef": "G10.6.5"
        }
    ]
},

  'g10-u7-s1': {
    "id": "g10-u7-s1",
    "unitId": "g10-u7",
    "unitTitle": {
        "en": "Unit 07: Electronic Spreadsheets",
        "si": "ඒකකය 07: ඉලෙක්ට්‍රොනික පැතුරුම්පත්"
    },
    "title": {
        "en": "Spreadsheet Laser Grid & Anchors",
        "si": "ඉලෙක්ට්‍රොනික පැතුරුම්පත් සූත්‍ර"
    },
    "type": "interactive_lab",
    "sandboxType": "laser_grid",
    "orderIndex": 17,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Relative vs Absolute Cell Referencing ($A$1)",
                "si": "සාපේක්ෂ සහ නිරපේක්ෂ සෛල සමුද්දේශ ($A$1)"
            },
            "visualWidget": "laser_grid",
            "bulletPoints": [
                {
                    "en": "Relative Reference (A1): Shifts coordinates automatically when copied across rows or columns.",
                    "si": "සාපේක්ෂ සමුද්දේශ (A1): සූත්‍රය පිටපත් කරන විට සෛල ඛණ්ඩාංක ස්වයංක්‍රීයව වෙනස් වේ."
                },
                {
                    "en": "Absolute Reference ($A$1): Locks row and column coordinates firmly using dollar signs ($).",
                    "si": "නිරපේක්ෂ සමුද්දේශ ($A$1): ඩොලර් සලකුණ ($) මගින් පේළිය සහ තීරුව වෙනස් නොවී තදින් අගුළු දමයි."
                },
                {
                    "en": "Essential when multiplying values by a fixed interest rate, tax percentage, or discount cell.",
                    "si": "ස්ථාවර බදු ප්‍රතිශත හෝ පොලී අනුපාත සෛල සමග ගුණ කිරීමේදී නිරපේක්ෂ සමුද්දේශ භාවිත කළ යුතුය."
                }
            ],
            "keyTakeaway": {
                "en": "Pressing F4 toggles between relative (A1), absolute ($A$1), and mixed ($A1 / A$1) references.",
                "si": "F4 යතුර එබීමෙන් සාපේක්ෂ, නිරපේක්ෂ සහ මිශ්‍ර සමුද්දේශ අතර මාරු විය හැක."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Fundamental Spreadsheet Functions",
                "si": "මූලික පැතුරුම්පත් ශ්‍රිත"
            },
            "bulletPoints": [
                {
                    "en": "SUM(range): Computes arithmetic total of numbers. Example: =SUM(A1:A10).",
                    "si": "SUM(range): සෛල පරාසයක එකතුව ගණනය කරයි."
                },
                {
                    "en": "AVERAGE(range): Computes arithmetic mean. Example: =AVERAGE(B2:B20).",
                    "si": "AVERAGE(range): සෛල පරාසයක සාමාන්‍යය ගණනය කරයි."
                },
                {
                    "en": "MIN(range) and MAX(range): Identify lowest and highest values respectively.",
                    "si": "MIN සහ MAX: අවම සහ උපරිම අගයන් සොයා දෙයි."
                },
                {
                    "en": "COUNT(range): Counts cells containing numbers. COUNTA(range) counts non-empty cells.",
                    "si": "COUNT: සංඛ්‍යා සහිත සෛල ගණන ගණනය කරයි."
                }
            ],
            "keyTakeaway": {
                "en": "All spreadsheet formulas and functions must begin with an equals sign (=).",
                "si": "සියලුම පැතුරුම්පත් සූත්‍ර සහ ශ්‍රිත ආරම්භ විය යුත්තේ සමාන ලකුණෙන් (=) ය."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "If formula =A1*$B$1 in cell C1 is copied down to cell C2, what formula will appear in C2?",
                "si": "C1 සෛලයේ ඇති =A1*$B$1 සූත්‍රය C2 සෛලය වෙත පිටපත් කළ විට C2 සෛලයේ දිස්වන සූත්‍රය කුමක්ද?"
            },
            "options": [
                {
                    "en": "=A2*$B$2",
                    "si": "=A2*$B$2"
                },
                {
                    "en": "=A2*$B$1",
                    "si": "=A2*$B$1"
                },
                {
                    "en": "=A1*$B$1",
                    "si": "=A1*$B$1"
                },
                {
                    "en": "=B2*$C$1",
                    "si": "=B2*$C$1"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "A1 is relative and shifts to A2; $B$1 is absolute and remains locked to $B$1.",
                "si": "A1 සාපේක්ෂ බැවින් A2 ලෙස වෙනස් වේ; $B$1 නිරපේක්ෂ බැවින් අගුළු වැටී ඒ අයුරින්ම පවතී."
            },
            "syllabusRef": "G10.7.1"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Which function calculates the arithmetic mean of numeric cells in range D1 to D10?",
                "si": "D1 සිට D10 දක්වා සෛල පරාසයේ සංඛ්‍යාත්මක අගයන්ගේ මධ්‍යන්‍යය (සාමාන්‍යය) ගණනය කරන ශ්‍රිතය කුමක්ද?"
            },
            "options": [
                {
                    "en": "=MEAN(D1:D10)",
                    "si": "=MEAN(D1:D10)"
                },
                {
                    "en": "=AVERAGE(D1:D10)",
                    "si": "=AVERAGE(D1:D10)"
                },
                {
                    "en": "=SUM(D1:D10)/10",
                    "si": "=SUM(D1:D10)/10"
                },
                {
                    "en": "=TOTAL(D1:D10)",
                    "si": "=TOTAL(D1:D10)"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "The standard built-in spreadsheet function for arithmetic mean is AVERAGE.",
                "si": "සාමාන්‍යය ගණනය කිරීමට සම්මත ශ්‍රිතය AVERAGE වේ."
            },
            "syllabusRef": "G10.7.2"
        }
    ]
},

  'g10-u7-boss': {
    "id": "g10-u7-boss",
    "unitId": "g10-u7",
    "unitTitle": {
        "en": "Unit 07: Electronic Spreadsheets",
        "si": "ඒකකය 07: ඉලෙක්ට්‍රොනික පැතුරුම්පත්"
    },
    "title": {
        "en": "Unit 7 Boss: Spreadsheet Formulas Arena",
        "si": "පැතුරුම්පත් විභාග අභියෝගය"
    },
    "type": "boss_arena",
    "orderIndex": 18,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Logical IF Function & Nested Conditions",
                "si": "තාර්කික IF ශ්‍රිතය"
            },
            "bulletPoints": [
                {
                    "en": "Syntax: =IF(logical_test, value_if_true, value_if_false).",
                    "si": "සැකැස්ම: =IF(කොන්දේසිය, සත්‍ය_විට_අගය, අසත්‍ය_විට_අගය)."
                },
                {
                    "en": "Example: =IF(B2 >= 50, \"Pass\", \"Fail\") evaluates whether student passed.",
                    "si": "උදාහරණ: =IF(B2 >= 50, \"Pass\", \"Fail\") ලකුණු 50 ට වැඩි නම් Pass ද නැතහොත් Fail ද ලබාදෙයි."
                }
            ],
            "keyTakeaway": {
                "en": "IF evaluates conditional criteria, returning differing calculated values automatically.",
                "si": "IF ශ්‍රිතය මගින් කොන්දේසියක් පරීක්ෂා කර තීරණ ගැනීමේ ගණනය කිරීම් කළ හැක."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Visual Charts & Data Interpretation",
                "si": "ප්‍රස්ථාර සහ දත්ත අර්ථකථනය"
            },
            "bulletPoints": [
                {
                    "en": "Column/Bar Chart: Best for comparing discrete categories (e.g. sales by branch).",
                    "si": "තීරු ප්‍රස්ථාර: කාණ්ඩ අතර අගයන් සංසන්දනයට සුදුසුය."
                },
                {
                    "en": "Pie Chart: Best for illustrating proportions of a whole (100% total).",
                    "si": "වට ප්‍රස්ථාර: මුළු අගයක ප්‍රතිශත නිරූපණයට යොදා ගනී."
                },
                {
                    "en": "Line Chart: Best for displaying continuous trends over chronological time intervals.",
                    "si": "රේඛා ප්‍රස්ථාර: කාලයත් සමග සිදුවන විචල්‍යතාව පෙන්වීමට යෝග්‍ය වේ."
                }
            ],
            "keyTakeaway": {
                "en": "Selecting the appropriate chart type accurately communicates numerical data to stakeholders.",
                "si": "සුදුසු ප්‍රස්ථාර වර්ගය තෝරාගැනීම දත්ත නිවැරදිව ඉදිරිපත් කිරීමට උපකාරී වේ."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "What will be returned by the formula: =IF(45 >= 50, \"Credit\", \"General Pass\")?",
                "si": "=IF(45 >= 50, \"Credit\", \"General Pass\") යන සූත්‍රයෙන් ලැබෙන ප්‍රතිඵලය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Credit",
                    "si": "Credit"
                },
                {
                    "en": "General Pass",
                    "si": "General Pass"
                },
                {
                    "en": "TRUE",
                    "si": "TRUE"
                },
                {
                    "en": "#VALUE! Error",
                    "si": "#VALUE! දෝෂය"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "45 is NOT greater than or equal to 50 (evaluates to FALSE), returning value_if_false: \"General Pass\".",
                "si": "45 >= 50 කොන්දේසිය අසත්‍ය බැවින් \"General Pass\" ලැබේ."
            },
            "syllabusRef": "G10.7.3"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Which chart type is most suitable to represent market share percentages of 5 telecommunication companies?",
                "si": "දුරකථන සමාගම් 5 ක වෙළඳපල කොටස් ප්‍රතිශතය (Market Share) නිරූපණය කිරීමට වඩාත්ම සුදුසු ප්‍රස්ථාර වර්ගය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Line Chart",
                    "si": "රේඛා ප්‍රස්ථාරය (Line Chart)"
                },
                {
                    "en": "Pie Chart",
                    "si": "වට ප්‍රස්ථාරය (Pie Chart)"
                },
                {
                    "en": "Scatter Plot",
                    "si": "විසිරුම් ප්‍රස්ථාරය"
                },
                {
                    "en": "Radar Chart",
                    "si": "රේඩාර් ප්‍රස්ථාරය"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Pie charts display portions of a whole, perfect for proportional market share representations.",
                "si": "ප්‍රතිශතයක් ලෙස සම්පූර්ණ කොටස් නිරූපණය කිරීමට වට ප්‍රස්ථාර සුදුසුය."
            },
            "syllabusRef": "G10.7.4"
        },
        {
            "id": "q3",
            "prompt": {
                "en": "What does the spreadsheet error #DIV/0! mean?",
                "si": "පැතුරුම්පතක #DIV/0! යන දෝෂයෙන් අදහස් වන්නේ කුමක්ද?"
            },
            "options": [
                {
                    "en": "A formula attempted to divide a number by zero or an empty cell",
                    "si": "සූත්‍රයක් මගින් සංඛ්‍යාවක් බිංදුවෙන් හෝ හිස් සෛලයකින් බෙදීමට උත්සාහ කර ඇති බව"
                },
                {
                    "en": "Column width is too narrow to display number",
                    "si": "තීරුවේ පළල ප්‍රමාණවත් නොවන බව"
                },
                {
                    "en": "Formula contains a misspelled function name",
                    "si": "ශ්‍රිතයේ නම වැරදි බව"
                },
                {
                    "en": "Circular formula dependency detected",
                    "si": "චක්‍රීය සූත්‍ර පවතින බව"
                }
            ],
            "correctIndex": 0,
            "explanation": {
                "en": "#DIV/0! indicates division by zero, which is mathematically invalid.",
                "si": "බිංදුවෙන් බෙදීමට උත්සාහ කළ විට #DIV/0! දෝෂය ඇතිවේ."
            },
            "syllabusRef": "G10.7.5"
        },
        {
            "id": "q4",
            "prompt": {
                "en": "In spreadsheet cell address $C$5, what does the dollar sign ($) indicate?",
                "si": "පැතුරුම්පත් සෛල ලිපිනයක් වන $C$5 හි ඩොලර් සලකුණෙන් ($) අදහස් වන්නේ කුමක්ද?"
            },
            "options": [
                {
                    "en": "The cell contains currency values in USD",
                    "si": "එම සෛලයේ මුදල් අගයන් ඇති බව"
                },
                {
                    "en": "Both column C and row 5 are absolute references and locked from shifting when copied",
                    "si": "C තීරුව සහ 5 පේළිය නිරපේක්ෂ (Absolute) ලෙස අගුළු දමා ඇති බව"
                },
                {
                    "en": "The cell is protected by a password",
                    "si": "සෛලය මුරපදයකින් ආරක්ෂා කර ඇති බව"
                },
                {
                    "en": "The formula will automatically recalculate in background",
                    "si": "සූත්‍රය ස්වයංක්‍රීයව ගණනය වන බව"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "$ locks the coordinate it prefixes against shifting during formula drag/fill.",
                "si": "$ සලකුණ මගින් සෛලයේ තීරුව සහ පේළිය අගුළු දමනු ලැබේ."
            },
            "syllabusRef": "G10.7.1"
        }
    ]
},

  'g10-u8-s1': {
    "id": "g10-u8-s1",
    "unitId": "g10-u8",
    "unitTitle": {
        "en": "Unit 08: Electronic Presentations",
        "si": "ඒකකය 08: ඉලෙක්ට්‍රොනික සමර්පණ"
    },
    "title": {
        "en": "Electronic Presentations Studio",
        "si": "ඉලෙක්ට්‍රොනික සමර්පණ සැලසුම්"
    },
    "type": "concept",
    "orderIndex": 19,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Effective Slide Design & Visual Guidelines",
                "si": "ඵලදායී කදා සැලසුම් සහ මාර්ගෝපදේශ"
            },
            "bulletPoints": [
                {
                    "en": "Rule of thumb: Maintain 6 to 9 lines of text per slide and 6 to 9 words per line.",
                    "si": "මූලික රීතිය: එක් ස්ලයිඩයක පේළි 6 සිට 9 දක්වා සහ පේළියකට වචන 6 සිට 9 දක්වා තබා ගන්න."
                },
                {
                    "en": "Contrast: Use high contrast between text and background (e.g. dark text on light background or vice versa).",
                    "si": "වර්ණ වෙනස (Contrast): පසුබිම සහ අකුරු අතර පැහැදිලි වර්ණ වෙනසක් පවත්වා ගන්න."
                },
                {
                    "en": "Typography: Use legible sans-serif fonts (Arial, Calibri) with minimum 24pt-32pt for body text.",
                    "si": "පැහැදිලිව කියවිය හැකි Sans-serif අකුරු විලාස භාවිත කරන්න."
                }
            ],
            "keyTakeaway": {
                "en": "Slides should complement the speaker with visual key points, not display paragraphs of spoken text.",
                "si": "ස්ලයිඩ යනු කථිකයාට සහාය වන ප්‍රධාන කරුණු මිස කියවිය යුතු ඡේද නොවේ."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Transitions vs Custom Animations",
                "si": "සංක්‍රාන්ති (Transitions) සහ සජීවීකරණ (Animations)"
            },
            "bulletPoints": [
                {
                    "en": "Slide Transition: Visual motion effect occurring when advancing from one slide to the next.",
                    "si": "කදා සංක්‍රාන්ති (Transitions): එක් ස්ලයිඩයක සිට ඊළඟ ස්ලයිඩයට මාරු වන විට සිදුවන චලනයයි."
                },
                {
                    "en": "Custom Animation: Visual motion applied to individual objects (text, image, shape) within a single slide.",
                    "si": "සජීවීකරණ (Animations): ස්ලයිඩය තුළ ඇති තනි වස්තූන් (පෙළ, රූප) මත සිදුවන චලන ආචරණයන්ය."
                },
                {
                    "en": "Animation categories: Entrance (appear), Emphasis (highlight), Exit (disappear), Motion Paths.",
                    "si": "සජීවීකරණ කාණ්ඩ: පිවිසුම් (Entrance), අවධාරණ (Emphasis), සහ නික්මුම් (Exit)."
                }
            ],
            "keyTakeaway": {
                "en": "Subtle transitions maintain audience focus, while excessive animations distract viewers.",
                "si": "අවශ්‍ය අවස්ථාවල පමණක් මෘදු සජීවීකරණ භාවිත කිරීම සමර්පණයේ ගුණාත්මක බව වැඩි කරයි."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "What is the key functional difference between a Slide Transition and an Animation?",
                "si": "කදා සංක්‍රාන්තියක් (Slide Transition) සහ සජීවීකරණයක් (Animation) අතර ප්‍රධාන වෙනස කුමක්ද?"
            },
            "options": [
                {
                    "en": "Transitions apply between whole slides; Animations apply to specific elements within a slide",
                    "si": "සංක්‍රාන්ති මුළු ස්ලයිඩ අතර ද, සජීවීකරණ ස්ලයිඩය තුළ ඇති නිශ්චිත වස්තූන් මත ද ක්‍රියාත්මක වේ"
                },
                {
                    "en": "Transitions only play audio; Animations only display text",
                    "si": "සංක්‍රාන්ති ශ්‍රව්‍ය පමණක් ද, සජීවීකරණ පෙළ පමණක් ද පෙන්වයි"
                },
                {
                    "en": "Transitions delete slides; Animations create new documents",
                    "si": "සංක්‍රාන්ති ස්ලයිඩ මකා දමයි; සජීවීකරණ නව ලේඛන සාදයි"
                },
                {
                    "en": "There is no difference; they are identical tools",
                    "si": "ඒවායේ කිසිදු වෙනසක් නැත"
                }
            ],
            "correctIndex": 0,
            "explanation": {
                "en": "Transitions govern the movement between slide changes, whereas Animations animate individual elements on a slide.",
                "si": "ස්ලයිඩ මාරු වීමේ චලනය සංක්‍රාන්ති වන අතර, ස්ලයිඩය තුළ වස්තූන් චලනය වීම සජීවීකරණ වේ."
            },
            "syllabusRef": "G10.8.1"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Which presentation tool is classified as Free and Open-Source Software (FOSS)?",
                "si": "ඉලෙක්ට්‍රොනික සමර්පණ සඳහා භාවිත වන නිදහස් හා විවෘත මූලාශ්‍ර මෘදුකාංගයක් (FOSS) වන්නේ කුමක්ද?"
            },
            "options": [
                {
                    "en": "Microsoft PowerPoint",
                    "si": "Microsoft PowerPoint"
                },
                {
                    "en": "Apple Keynote",
                    "si": "Apple Keynote"
                },
                {
                    "en": "LibreOffice Impress",
                    "si": "LibreOffice Impress"
                },
                {
                    "en": "Prezi Online",
                    "si": "Prezi Online"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "LibreOffice Impress is free and open-source software with publicly accessible source code.",
                "si": "LibreOffice Impress යනු FOSS ගණයට අයත් සමර්පණ මෘදුකාංගයකි."
            },
            "syllabusRef": "G10.8.2"
        }
    ]
},

  'g10-u8-boss': {
    "id": "g10-u8-boss",
    "unitId": "g10-u8",
    "unitTitle": {
        "en": "Unit 08: Electronic Presentations",
        "si": "ඒකකය 08: ඉලෙක්ට්‍රොනික සමර්පණ"
    },
    "title": {
        "en": "Unit 8 Boss: Presentation Master Arena",
        "si": "සමර්පණ විභාග අභියෝගය"
    },
    "type": "boss_arena",
    "orderIndex": 20,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Slide Master & Global Template Design",
                "si": "ප්‍රධාන කදාව (Slide Master)"
            },
            "bulletPoints": [
                {
                    "en": "Slide Master: Top slide in hierarchy that controls theme colors, fonts, background, and logo placement for all slides.",
                    "si": "ප්‍රධාන කදාව: සියලුම ස්ලයිඩවල පසුබිම, අකුරු, ලාංඡන (Logo) එකවර පාලනය කරන ප්‍රධාන සැකිල්ලයි."
                },
                {
                    "en": "Changes made to Slide Master automatically propagate globally to every slide in the presentation.",
                    "si": "ප්‍රධාන කදාවට සිදු කරන වෙනස්කම් සමර්පණයේ සියලුම ස්ලයිඩ වෙත ස්වයංක්‍රීයව අදාළ වේ."
                }
            ],
            "keyTakeaway": {
                "en": "Slide Master guarantees consistent branding and layout across hundreds of slides efficiently.",
                "si": "Slide Master භාවිතයෙන් සියලු ස්ලයිඩවල ඒකාකාරී පෙනුමක් පහසුවෙන් තහවුරු කළ හැක."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Delivery Views: Presenter View & Handouts",
                "si": "ඉදිරිපත් කිරීමේ ආකාර සහ අත්පත්‍රිකා"
            },
            "bulletPoints": [
                {
                    "en": "Presenter View: Allows presenter to view private speaker notes and next slide preview on their laptop.",
                    "si": "Presenter View: කථිකයාට ඉදිරි ස්ලයිඩය සහ සටහන් බලා ගැනීමට ඉඩ සලසයි."
                },
                {
                    "en": "Audience Handouts: Compact printed pages displaying 2, 3, or 6 slides per page for audience distribution.",
                    "si": "අත්පත්‍රිකා (Handouts): පිටුවකට ස්ලයිඩ 2, 3, 6 ආදී වශයෙන් සභාවට බෙදාදීම සඳහා මුද්‍රණය කිරීම."
                }
            ],
            "keyTakeaway": {
                "en": "Presenter View and handouts enhance professional delivery and listener retention.",
                "si": "කථික සටහන් සහ අත්පත්‍රිකා සමර්පණය සාර්ථක කර ගැනීමට උපකාරී වේ."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "Which feature allows adding a school logo to appear at the exact same location across ALL presentation slides simultaneously?",
                "si": "සමර්පණයේ සියලුම ස්ලයිඩවල එකම ස්ථානයේ පාසල් ලාංඡනය ස්වයංක්‍රීයව දිස්වීමට භාවිත කළ යුතු අංගය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Copy-pasting onto each slide individually",
                    "si": "සෑම ස්ලයිඩයකටම වෙන වෙනම පිටපත් කිරීම"
                },
                {
                    "en": "Slide Master",
                    "si": "ප්‍රධාන කදාව (Slide Master)"
                },
                {
                    "en": "Slide Sorter view",
                    "si": "කදා පෙළගැසුම් දසුන"
                },
                {
                    "en": "Rehearse Timings",
                    "si": "කාල ගණනය පෙරහුරුව"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Inserting graphics into the Slide Master automatically replicates them on all dependent slides.",
                "si": "Slide Master වෙත එක් කරන ලාංඡන හෝ පසුබිම් සියලු ස්ලයිඩ වල දිස්වේ."
            },
            "syllabusRef": "G10.8.3"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "What does \"Presenter View\" display on the presenter’s private display during a projection presentation?",
                "si": "ප්‍රොජෙක්ටරයක් භාවිත කර ඉදිරිපත් කිරීමක් කරන විට කථිකයාගේ පරිගණක තිරයේ \"Presenter View\" මගින් පෙන්වන්නේ කුමක්ද?"
            },
            "options": [
                {
                    "en": "A blank black screen to save power",
                    "si": "විදුලිය ඉතිරි කිරීමට හිස් කළු තිරයක්"
                },
                {
                    "en": "Current slide, upcoming slide, elapsed timer, and private speaker notes",
                    "si": "වත්මන් ස්ලයිඩය, ඊළඟ ස්ලයිඩය, ගත වූ කාලය සහ කථිකයාගේ පෞද්ගලික සටහන්"
                },
                {
                    "en": "Full operating system desktop and personal files",
                    "si": "පෞද්ගලික ලිපිගොනු"
                },
                {
                    "en": "Source code compiler terminal",
                    "si": "ක්‍රමලේඛ කේත"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Presenter View equips the speaker with notes, previews, and clock while audience only sees active slide.",
                "si": "Presenter View මගින් කථිකයාට සටහන් සහ ඊළඟ ස්ලයිඩ පෙන්වයි."
            },
            "syllabusRef": "G10.8.4"
        },
        {
            "id": "q3",
            "prompt": {
                "en": "Which keyboard key is conventionally pressed to start a slideshow from the very first slide?",
                "si": "සමර්පණයක් පළමු ස්ලයිඩයේ සිට ආරම්භ කිරීමට සම්මත කෙටිමං යතුර කුමක්ද?"
            },
            "options": [
                {
                    "en": "F1",
                    "si": "F1"
                },
                {
                    "en": "F5",
                    "si": "F5"
                },
                {
                    "en": "Shift + F5",
                    "si": "Shift + F5"
                },
                {
                    "en": "Esc",
                    "si": "Esc"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "F5 launches slideshow from beginning; Shift + F5 launches from current slide.",
                "si": "F5 මගින් ආරම්භයේ සිට ස්ලයිඩ දර්ශනය ආරම්භ වේ."
            },
            "syllabusRef": "G10.8.5"
        },
        {
            "id": "q4",
            "prompt": {
                "en": "What is the purpose of the \"Slide Sorter\" view in presentation software?",
                "si": "සමර්පණ මෘදුකාංගයක \"කදා පෙළගැසුම් දසුනෙන් (Slide Sorter View)\" ඉටුවන ප්‍රධාන කාර්යය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Formatting font sizes line by line",
                    "si": "අකුරු ප්‍රමාණ වෙනස් කිරීම"
                },
                {
                    "en": "Viewing thumbnail grid of all slides to reorder, delete, or organize flow easily",
                    "si": "සියලු ස්ලයිඩ කුඩා රූප ලෙස බලා ඒවායේ අනුපිළිවෙල වෙනස් කිරීමට සහ සංවිධානය කිරීමට"
                },
                {
                    "en": "Playing audio recordings through speakers",
                    "si": "ශබ්ද වාදනය කිරීම"
                },
                {
                    "en": "Encrypting files with passwords",
                    "si": "මුරපද යෙදීම"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Slide Sorter provides a bird’s-eye thumbnail view allowing drag-and-drop reordering.",
                "si": "Slide Sorter මගින් ස්ලයිඩ වල අනුපිළිවෙළ පහසුවෙන් වෙනස් කළ හැක."
            },
            "syllabusRef": "G10.8.5"
        }
    ]
},

  'g10-u9-s1': {
    "id": "g10-u9-s1",
    "unitId": "g10-u9",
    "unitTitle": {
        "en": "Unit 09: Database Management",
        "si": "ඒකකය 09: දත්ත සමුදා කළමනාකරණය"
    },
    "title": {
        "en": "Database Warehouse & ER Relations",
        "si": "දත්ත සමුදා කළමනාකරණය"
    },
    "type": "concept",
    "orderIndex": 21,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Primary Key & Foreign Key Relationships",
                "si": "ප්‍රාථමික යතුරු සහ ආගන්තුක යතුරු සබඳතා"
            },
            "bulletPoints": [
                {
                    "en": "Primary Key: A unique attribute that unequivocally identifies each record in a relational table.",
                    "si": "ප්‍රාථමික යතුර (Primary Key): වගුවක සෑම ලේඛනයක්ම අනන්‍යව හඳුනා ගන්නා ශුන්‍ය නොවන ක්ෂේත්‍රය."
                },
                {
                    "en": "Foreign Key: A field matching a Primary Key in another table, creating an associative link.",
                    "si": "ආගන්තුක යතුර (Foreign Key): වෙනත් වගුවක ප්‍රාථමික යතුරක් හා සම්බන්ධ වන ක්ෂේත්‍රය."
                },
                {
                    "en": "Prevents data duplication, anomalies, and maintains referential integrity.",
                    "si": "දත්ත අතිරික්තය අවම කර දත්ත සමුදායේ අඛණ්ඩතාව පවත්වා ගනී."
                }
            ],
            "keyTakeaway": {
                "en": "Relational databases organize information into linked 2D tables of records and attributes.",
                "si": "සම්බන්ධතා දත්ත සමුදායන් මගින් වගු අතර සබඳතා ගොඩනගමින් දත්ත සුරක්ෂිතව තබයි."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Data Hierarchy: Bit to Database",
                "si": "දත්ත ධුරාවලිය: බිටුවේ සිට දත්ත සමුදාය දක්වා"
            },
            "bulletPoints": [
                {
                    "en": "Hierarchy: Bit (0/1) -> Byte/Character -> Field/Attribute -> Record/Tuple -> Table/File -> Database.",
                    "si": "ධුරාවලිය: බිටුව -> බයිටය -> ක්ෂේත්‍රය (Field) -> ලේඛනය (Record) -> වගුව (Table) -> දත්ත සමුදාය."
                },
                {
                    "en": "Field (Column): A single characteristic or data property of an entity (e.g. Student_DOB).",
                    "si": "ක්ෂේත්‍රය: වස්තුවක එක් නිශ්චිත ලක්ෂණයක් (තීරුව)."
                },
                {
                    "en": "Record (Row): A collection of related fields describing one complete entity instance.",
                    "si": "ලේඛනය: එක් ඒකකයකට අදාළ ක්ෂේත්‍ර එකතුවක් (පේළිය)."
                }
            ],
            "keyTakeaway": {
                "en": "Relational databases eliminate data redundancy and preserve referential integrity.",
                "si": "දත්ත සමුදා මගින් දත්ත පුනරාවර්තනය වීම වළක්වා කාර්යක්ෂමතාව ඇති කරයි."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "Which database attribute guarantees that no two records in a table have identical identifier values?",
                "si": "වගුවක කිසිදු ලේඛන දෙකකට එකම හඳුනාගැනීමේ අගයක් නොමැති බව සහතික කරන ක්ෂේත්‍රය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Primary Key",
                    "si": "ප්‍රාථමික යතුර (Primary Key)"
                },
                {
                    "en": "Composite Key",
                    "si": "සංයුක්ත යතුර (Composite Key)"
                },
                {
                    "en": "Foreign Key",
                    "si": "ආගන්තුක යතුර (Foreign Key)"
                },
                {
                    "en": "Secondary Index",
                    "si": "ද්විතීයික දර්ශකය"
                }
            ],
            "correctIndex": 0,
            "explanation": {
                "en": "A Primary Key must be unique and cannot contain null values, identifying each row unequivocally.",
                "si": "ප්‍රාථමික යතුරක් අනන්‍ය විය යුතු අතර හිස් අගයන් (Null) නොපැවතිය යුතුය."
            },
            "syllabusRef": "G10.9.1"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "In relational database terminology, what corresponds to a single row (horizontal instance) in a table?",
                "si": "සම්බන්ධතා දත්ත සමුදායක වගුවක තනි තිරස් පේළියක් හඳුන්වන්නේ කුමක් ලෙසද?"
            },
            "options": [
                {
                    "en": "Field",
                    "si": "ක්ෂේත්‍රය (Field)"
                },
                {
                    "en": "Attribute",
                    "si": "විශේෂණය (Attribute)"
                },
                {
                    "en": "Record / Tuple",
                    "si": "ලේඛනය / ටූපලය (Record / Tuple)"
                },
                {
                    "en": "Data Type",
                    "si": "දත්ත වර්ගය"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "Rows in a table are called Records or Tuples; columns are called Fields or Attributes.",
                "si": "පේළි ලේඛන (Records) ලෙසද, තීරු ක්ෂේත්‍ර (Fields) ලෙසද හැඳින්වේ."
            },
            "syllabusRef": "G10.9.2"
        }
    ]
},

  'g10-u9-boss': {
    "id": "g10-u9-boss",
    "unitId": "g10-u9",
    "unitTitle": {
        "en": "Unit 09: Database Management",
        "si": "ඒකකය 09: දත්ත සමුදා කළමනාකරණය"
    },
    "title": {
        "en": "Unit 9 Boss: Database Management Arena",
        "si": "දත්ත සමුදා විභාග අභියෝගය"
    },
    "type": "boss_arena",
    "orderIndex": 22,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Entity Relationship Cardinality (1:1, 1:N, M:N)",
                "si": "දත්ත සමුදා සබඳතා (1:1, 1:N, M:N)"
            },
            "bulletPoints": [
                {
                    "en": "One-to-One (1:1): Each entity in table A matches at most one in table B (e.g. Citizen to NIC).",
                    "si": "එකකට එක (1:1): එක් පුරවැසියෙකුට ඇත්තේ එක් ජාතික හැඳුනුම්පතක් පමණි."
                },
                {
                    "en": "One-to-Many (1:N): One record in A links to multiple records in B (e.g. Customer to Orders).",
                    "si": "එකකට බොහෝ (1:N): එක් පාරිභෝගිකයෙකුට ඇණවුම් කිහිපයක් තිබිය හැක."
                },
                {
                    "en": "Many-to-Many (M:N): Entities in A link to multiple in B and vice versa (e.g. Student to Subjects).",
                    "si": "බොහෝ දේට බොහෝ (M:N): එක් ශිෂ්‍යයෙක් විෂයන් කිහිපයක් ද, එක් විෂයක් සිසුන් කිහිපයක් ද හදාරයි."
                }
            ],
            "keyTakeaway": {
                "en": "M:N relationships require an intermediate junction table with composite keys to normalize.",
                "si": "M:N සබඳතා සාමාන්‍යකරණය කිරීමට මැදිහත් වගුවක් (Junction Table) භාවිත කරයි."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Database Queries, Forms & Reports",
                "si": "විමසුම් (Queries), ආකෘති සහ වාර්තා"
            },
            "bulletPoints": [
                {
                    "en": "Query: Extracts specific filtered records matching criteria (e.g. Students where Average >= 75).",
                    "si": "විමසුම් (Query): කොන්දේසි මත පදනම්ව දත්ත පෙරීම සහ තෝරාගැනීම."
                },
                {
                    "en": "Form: User-friendly graphical interface for entering and editing table records safely.",
                    "si": "ආකෘති (Form): දත්ත පහසුවෙන් ඇතුළත් කිරීමට සහ සංස්කරණයට ඇති අතුරුමුහුණත."
                },
                {
                    "en": "Report: Formatted, printable summary of database information for administrative analysis.",
                    "si": "වාර්තා (Report): මුද්‍රණය කිරීමට සහ විශ්ලේෂණයට සකසන ලද ප්‍රතිඵල."
                }
            ],
            "keyTakeaway": {
                "en": "Forms handle data input; Queries handle retrieval; Reports format printed output.",
                "si": "ආකෘති ආදානයට ද, විමසුම් සෙවීමට ද, වාර්තා මුද්‍රණයට ද යොදා ගනී."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "What type of relationship exists between \"School Principal\" and \"School\" in a ministry database?",
                "si": "අධ්‍යාපන අමාත්‍යාංශ දත්ත සමුදායක \"විදුහල්පති\" සහ \"පාසල\" අතර පවතින සබඳතාව කුමක්ද?"
            },
            "options": [
                {
                    "en": "One-to-One (1:1)",
                    "si": "එකකට එක (1:1)"
                },
                {
                    "en": "One-to-Many (1:N)",
                    "si": "එකකට බොහෝ (1:N)"
                },
                {
                    "en": "Many-to-Many (M:N)",
                    "si": "බොහෝ දේට බොහෝ (M:N)"
                },
                {
                    "en": "Unrelated null association",
                    "si": "කිසිදු සබඳතාවක් නැත"
                }
            ],
            "correctIndex": 0,
            "explanation": {
                "en": "One school has exactly one principal, and one principal heads one school simultaneously (1:1).",
                "si": "එක් පාසලකට එක් විදුහල්පතිවරයෙක් පමණක් සිටින බැවින් එය 1:1 සබඳතාවයකි."
            },
            "syllabusRef": "G10.9.3"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "What is a Composite Key in a database table?",
                "si": "දත්ත සමුදා වගුවක \"සංයුක්ත යතුරක් (Composite Key)\" යනු කුමක්ද?"
            },
            "options": [
                {
                    "en": "A key that encrypts database passwords",
                    "si": "මුරපද කේතනය කරන යතුරක්"
                },
                {
                    "en": "A primary key composed of two or more combined fields to establish uniqueness",
                    "si": "අනන්‍යතාව තහවුරු කිරීම සඳහා ක්ෂේත්‍ර දෙකක් හෝ වැඩි ගණනක් එකතු වී සෑදුණු ප්‍රාථමික යතුරක්"
                },
                {
                    "en": "A key linking database to the internet",
                    "si": "අන්තර්ජාලයට සම්බන්ධ කරන යතුරක්"
                },
                {
                    "en": "A foreign key with zero matching records",
                    "si": "ගැලපෙන ලේඛන නැති ආගන්තුක යතුරක්"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "A Composite Key combines multiple attributes when no single field can guarantee uniqueness alone.",
                "si": "තනි ක්ෂේත්‍රයකින් අනන්‍යතාව තහවුරු කළ නොහැකි විට ක්ෂේත්‍ර කිහිපයක් එකතු කර සාදන යතුරකි."
            },
            "syllabusRef": "G10.9.1"
        },
        {
            "id": "q3",
            "prompt": {
                "en": "Which database object is most appropriate to present neatly formatted information on paper for management?",
                "si": "කළමනාකාරීත්වය සඳහා දත්ත සමුදායේ තොරතුරු පිළිවෙළකට මුද්‍රණය කර ඉදිරිපත් කිරීමට වඩාත්ම සුදුසු වන්නේ කුමක්ද?"
            },
            "options": [
                {
                    "en": "Form",
                    "si": "ආකෘතිය (Form)"
                },
                {
                    "en": "Report",
                    "si": "වාර්තාව (Report)"
                },
                {
                    "en": "Raw table index",
                    "si": "වගු දර්ශකය"
                },
                {
                    "en": "Module script",
                    "si": "ස්ක්‍රිප්ට් එක"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Reports format data into professional printable layouts for decision makers.",
                "si": "වාර්තා (Reports) මුද්‍රණය සඳහාම විශේෂයෙන් සකස් කරනු ලබයි."
            },
            "syllabusRef": "G10.9.4"
        },
        {
            "id": "q4",
            "prompt": {
                "en": "A primary key of one table placed into a second related table to establish a link is called a:",
                "si": "වගු දෙකක් අතර සබඳතාවක් ඇති කිරීම සඳහා එක් වගුවක ප්‍රාථමික යතුර අනෙක් වගුවට ඇතුළත් කළ විට එය හඳුන්වන්නේ:"
            },
            "options": [
                {
                    "en": "Super Key",
                    "si": "සුපිරි යතුර"
                },
                {
                    "en": "Foreign Key",
                    "si": "ආගන්තුක යතුර (Foreign Key)"
                },
                {
                    "en": "Candidate Key",
                    "si": "අපේක්ෂක යතුර"
                },
                {
                    "en": "Alternate Key",
                    "si": "විකල්ප යතුර"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Foreign Keys match primary keys in foreign tables, preserving relational integrity.",
                "si": "වෙනත් වගුවක ප්‍රාථමික යතුරක් හා සම්බන්ධ වන ක්ෂේත්‍රය ආගන්තුක යතුරයි."
            },
            "syllabusRef": "G10.9.1"
        }
    ]
},

  'g11-u1-s1': {
    "id": "g11-u1-s1",
    "unitId": "g11-u1",
    "unitTitle": {
        "en": "Unit 01: Programming & Algorithms",
        "si": "ඒකකය 01: ක්‍රමලේඛනය සහ ඇල්ගොරිතම"
    },
    "title": {
        "en": "Flowchart Trace Table Scrubber",
        "si": "ගැලීම් සටහන් හා ගැටලු විශ්ලේෂණය"
    },
    "type": "interactive_lab",
    "sandboxType": "trace_table",
    "orderIndex": 23,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "ANSI Standard Flowchart Symbols",
                "si": "සම්මත ගැලීම් සටහන් සංකේත"
            },
            "visualWidget": "trace_table",
            "bulletPoints": [
                {
                    "en": "Terminal (Oval/Rounded): Marks START and STOP boundaries of an algorithm.",
                    "si": "ආරම්භක/අවසාන (Oval): ඇල්ගොරිතමයේ ආරම්භය සහ අවසානය සලකුණු කරයි."
                },
                {
                    "en": "Process (Rectangle): Denotes computations, assignments, and calculations (e.g. Sum = Sum + Count).",
                    "si": "ක්‍රියාවලිය (Rectangle): ගණනය කිරීම් සහ විචල්‍ය අගයන් ආදේශ කිරීම."
                },
                {
                    "en": "Decision (Diamond): Conditional branch evaluating True or False pathways.",
                    "si": "තීරණය (Diamond): කොන්දේසියක් පරීක්ෂා කර True හෝ False ඔස්සේ ගමන් කිරීම."
                },
                {
                    "en": "Input/Output (Parallelogram): Reading external input or displaying calculated output.",
                    "si": "ආදානය/ප්‍රතිදානය (Parallelogram): දත්ත ඇතුළත් කිරීම හෝ ප්‍රතිදානය පෙන්වීම."
                }
            ],
            "keyTakeaway": {
                "en": "Flowcharts represent algorithmic control structures visually before program code implementation.",
                "si": "ගැලීම් සටහන් මගින් ඇල්ගොරිතමයක තාර්කික ගලායාම රූපමය ලෙස නිරූපණය කරයි."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Trace Table Stepping & Verification",
                "si": "හෝඩුවා වගු (Trace Tables)"
            },
            "bulletPoints": [
                {
                    "en": "A trace table dry-runs algorithms line by line, tracking variable states across loop iterations.",
                    "si": "හෝඩුවා වගුවක් මගින් විචල්‍යයන්ගේ අගයන් පියවරෙන් පියවර ලුහුබැඳ දෝෂ හඳුනා ගනී."
                },
                {
                    "en": "Prevents off-by-one errors and infinite loops during software design.",
                    "si": "ක්‍රමලේඛන දෝෂ සහ නිමක් නැති පුනරාවර්තන (Infinite Loops) වළක්වයි."
                }
            ],
            "keyTakeaway": {
                "en": "Dry-running with trace tables guarantees algorithm correctness prior to writing source code.",
                "si": "කේතනයට පෙර හෝඩුවා වගු මගින් තර්කනය නිවැරදි දැයි තහවුරු කර ගත හැක."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "Which ANSI flowchart geometric symbol denotes an Input or Output operation?",
                "si": "ගැලීම් සටහනක ආදාන හෝ ප්‍රතිදාන (Input/Output) ක්‍රියාවලියක් නිරූපණය කරන සම්මත සංකේතය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Rectangle",
                    "si": "සෘජුකෝණාස්‍රය (Rectangle)"
                },
                {
                    "en": "Diamond",
                    "si": "රොම්බසය (Diamond)"
                },
                {
                    "en": "Parallelogram",
                    "si": "සමාන්තරාස්‍රය (Parallelogram)"
                },
                {
                    "en": "Circle",
                    "si": "වෘත්තය (Circle)"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "Parallelogram represents Input/Output; Rectangle denotes Process; Diamond denotes Decision.",
                "si": "සමාන්තරාස්‍රය ආදානය සහ ප්‍රතිදානය සඳහා යොදා ගනී."
            },
            "syllabusRef": "G11.1.1"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "If loop initialises Count=1 and Sum=0, repeating while Count <= 3 (Sum = Sum + Count; Count = Count + 1), what is final Sum?",
                "si": "Count=1 සහ Sum=0 ලෙස ආරම්භ වී Count <= 3 වන තෙක් (Sum = Sum + Count; Count = Count + 1) ලූපය ක්‍රියාත්මක වුවහොත් අවසාන Sum හි අගය කුමක්ද?"
            },
            "options": [
                {
                    "en": "3",
                    "si": "3"
                },
                {
                    "en": "6",
                    "si": "6"
                },
                {
                    "en": "10",
                    "si": "10"
                },
                {
                    "en": "1",
                    "si": "1"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Iteration 1: Sum=1; Iteration 2: Sum=1+2=3; Iteration 3: Sum=3+3=6. Loop terminates when Count=4.",
                "si": "1 + 2 + 3 = 6 වේ."
            },
            "syllabusRef": "G11.1.2"
        }
    ]
},

  'g11-u1-s2': {
    "id": "g11-u1-s2",
    "unitId": "g11-u1",
    "unitTitle": {
        "en": "Unit 01: Programming & Algorithms",
        "si": "ඒකකය 01: ක්‍රමලේඛනය සහ ඇල්ගොරිතම"
    },
    "title": {
        "en": "Pascal Code Terminal & Algorithms",
        "si": "පැස්කල් ක්‍රමලේඛන පර්යන්තය"
    },
    "type": "concept",
    "orderIndex": 24,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Control Structures: Sequence, Selection, Iteration",
                "si": "පාලන ව්‍යුහ: අනුක්‍රමික, තේරීම් සහ පුනරාවර්තන"
            },
            "bulletPoints": [
                {
                    "en": "Sequence: Statements execute sequentially from top to bottom.",
                    "si": "අනුක්‍රමික (Sequence): ඉහළ සිට පහළට පියවරෙන් පියවර විධාන ක්‍රියාත්මක වීම."
                },
                {
                    "en": "Selection: Conditional branching based on logical tests (IF-THEN, IF-THEN-ELSE).",
                    "si": "තේරීම් (Selection): කොන්දේසියක් මත පදනම්ව විකල්ප ක්‍රියාත්මක වීම (IF-THEN-ELSE)."
                },
                {
                    "en": "Iteration (Loops): Repeating a statement block while/until condition is satisfied (WHILE-DO, FOR-DO).",
                    "si": "පුනරාවර්තන (Iteration): කොන්දේසියක් තෘප්ත වන තෙක් නැවත නැවත ක්‍රියාත්මක වීම."
                }
            ],
            "keyTakeaway": {
                "en": "All computer programs can be constructed combining these three fundamental control structures.",
                "si": "ඕනෑම සංකීර්ණ පරිගණක වැඩසටහනක් මෙම මූලික පාලන ව්‍යුහ 3 ඇසුරෙන් ගොඩනැගිය හැක."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Pascal Syntax & Variable Declaration",
                "si": "පැස්කල් ක්‍රමලේඛන රීති"
            },
            "bulletPoints": [
                {
                    "en": "Structure: program Name; var x: integer; begin ... end.",
                    "si": "මූලික ව්‍යුහය: program Name; var විචල්‍ය; begin ... end."
                },
                {
                    "en": "Data types: integer (whole numbers), real (decimals), char (single character), string (text), boolean (true/false).",
                    "si": "දත්ත වර්ග: integer (පූර්ණ සංඛ්‍යා), real (දශම), char, string, boolean."
                },
                {
                    "en": "Assignment operator: \":=\" assigns a value to a variable (e.g. Total := Price * Qty;).",
                    "si": "ආදේශක ක්‍රියාකරු: \":=\" මගින් විචල්‍යයකට අගයක් ආදේශ කරයි."
                }
            ],
            "keyTakeaway": {
                "en": "Pascal enforces strict type checking and structured syntax ideal for learning programming fundamentals.",
                "si": "පැස්කල් පරිගණක භාෂාව ක්‍රමලේඛන මූලධර්ම ඉගෙනීමට ඉතා යෝග්‍ය ව්‍යුහගත භාෂාවකි."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "In Pascal programming syntax, which operator is strictly used for variable value assignment?",
                "si": "පැස්කල් (Pascal) ක්‍රමලේඛන භාෂාවේ විචල්‍යයකට අගයක් ආදේශ කිරීම (Assignment) සඳහා භාවිත වන සංකේතය කුමක්ද?"
            },
            "options": [
                {
                    "en": "=",
                    "si": "="
                },
                {
                    "en": "==",
                    "si": "=="
                },
                {
                    "en": ":=",
                    "si": ":="
                },
                {
                    "en": "->",
                    "si": "->"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "In Pascal, \":=\" is assignment operator, while \"=\" is equality comparison operator.",
                "si": "පැස්කල් හි අගයක් ආදේශ කිරීමට \":=\" යොදා ගැනේ."
            },
            "syllabusRef": "G11.1.3"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Which looping structure executes its statement block at least ONCE regardless of the initial condition?",
                "si": "ආරම්භක කොන්දේසිය කුමක් වුවත් අවම වශයෙන් එක් වරක් හෝ ක්‍රියාත්මක වන ලූපය (Post-test Loop) කුමක්ද?"
            },
            "options": [
                {
                    "en": "WHILE - DO",
                    "si": "WHILE - DO"
                },
                {
                    "en": "REPEAT - UNTIL",
                    "si": "REPEAT - UNTIL"
                },
                {
                    "en": "FOR - DO",
                    "si": "FOR - DO"
                },
                {
                    "en": "IF - THEN",
                    "si": "IF - THEN"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "REPEAT-UNTIL is a post-test loop: condition is evaluated at the end, guaranteeing at least one execution.",
                "si": "REPEAT-UNTIL හි කොන්දේසිය පරීක්ෂා කරන්නේ අවසානයේ බැවින් අවම වශයෙන් එක් වරක් ක්‍රියාත්මක වේ."
            },
            "syllabusRef": "G11.1.4"
        }
    ]
},

  'g11-u1-boss': {
    "id": "g11-u1-boss",
    "unitId": "g11-u1",
    "unitTitle": {
        "en": "Unit 01: Programming & Algorithms",
        "si": "ඒකකය 01: ක්‍රමලේඛනය සහ ඇල්ගොරිතම"
    },
    "title": {
        "en": "Unit 1 Boss: Programming Boss Arcade",
        "si": "ක්‍රමලේඛන විභාග සටන්"
    },
    "type": "boss_arena",
    "orderIndex": 25,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Translators: Compilers vs Interpreters",
                "si": "පරිවර්තක: සම්පාදක (Compilers) සහ පරිවර්තක (Interpreters)"
            },
            "bulletPoints": [
                {
                    "en": "Compiler: Translates entire source code into machine code in one pass, generating standalone executable.",
                    "si": "සම්පාදකය (Compiler): මුළු වැඩසටහනම එකවර යන්ත්‍ර භාෂාවට පරිවර්තනය කරයි."
                },
                {
                    "en": "Interpreter: Translates and executes source code line-by-line in real time; execution stops immediately on error.",
                    "si": "පරිවර්තකය (Interpreter): පේළියෙන් පේළිය කියවා ක්‍රියාත්මක කරයි."
                },
                {
                    "en": "Assembler: Translates low-level assembly language mnemonic codes into raw machine binary.",
                    "si": "ඇසෙම්බ්ලර්: ඇසෙම්බ්ලි භාෂා කේත යන්ත්‍ර භාෂාවට පරිවර්තනය කරයි."
                }
            ],
            "keyTakeaway": {
                "en": "Compilers yield fast runtime execution; interpreters enable fast interactive debugging.",
                "si": "සම්පාදිත වැඩසටහන් වේගයෙන් ධාවනය වන අතර, පරිවර්තක දෝෂ සෙවීමට පහසු වේ."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Algorithm Complexity & Program Errors",
                "si": "ක්‍රමලේඛන දෝෂ වර්ග"
            },
            "bulletPoints": [
                {
                    "en": "Syntax Error: Grammatical violation of programming language rules detected by compiler.",
                    "si": "වාක්‍ය රීති දෝෂ (Syntax Errors): භාෂා නීති කඩවීම නිසා සම්පාදකයා මගින් හඳුනා ගන්නා දෝෂ."
                },
                {
                    "en": "Logical Error: Flaw in algorithm design causing incorrect outputs despite compiling cleanly.",
                    "si": "තාර්කික දෝෂ (Logical Errors): ක්‍රමලේඛය ධාවනය වුවද වැරදි ප්‍රතිඵල ලැබීම."
                },
                {
                    "en": "Runtime Error: Fatal anomaly occurring during execution (e.g. division by zero, stack overflow).",
                    "si": "ධාවන කාල දෝෂ (Runtime Errors): ක්‍රියාත්මක වන අතරතුර හදිසියේ බිඳ වැටීම්."
                }
            ],
            "keyTakeaway": {
                "en": "Logical errors are the most insidious because compilers cannot detect faulty reasoning.",
                "si": "තාර්කික දෝෂ පරිගණකයට හසු නොවන බැවින් හෝඩුවා වගු මගින් පරීක්ෂා කළ යුතුය."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "A program compiles with zero errors, but computes average mark as -15 instead of +75. What error type is this?",
                "si": "වැඩසටහනක් කිසිදු දෝෂයකින් තොරව සම්පාදනය වුවද සාමාන්‍ය ලකුණු +75 වෙනුවට -15 ලෙස වැරදි ප්‍රතිඵලයක් ලබා දෙයි. මෙය කුමන දෝෂයක්ද?"
            },
            "options": [
                {
                    "en": "Syntax Error",
                    "si": "වාක්‍ය රීති දෝෂය (Syntax Error)"
                },
                {
                    "en": "Logical Error",
                    "si": "තාර්කික දෝෂය (Logical Error)"
                },
                {
                    "en": "Hardware Voltage Surge",
                    "si": "දෘඩාංග දෝෂයක්"
                },
                {
                    "en": "Network Timeout Error",
                    "si": "ජාල දෝෂයක්"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Logical errors stem from flawed algorithms; syntax is valid so it compiles, but outputs are incorrect.",
                "si": "වැරදි සූත්‍ර හෝ තර්කනය නිසා වැරදි ප්‍රතිඵල ලැබීම තාර්කික දෝෂයකි."
            },
            "syllabusRef": "G11.1.5"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Which language translator converts an entire high-level program into machine code object file before execution?",
                "si": "සම්පූර්ණ උසස් පෙළ වැඩසටහනම ධාවනයට පෙර එකවර යන්ත්‍ර භාෂාවට පරිවර්තනය කරන මෘදුකාංගය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Interpreter",
                    "si": "පරිවර්තකය (Interpreter)"
                },
                {
                    "en": "Compiler",
                    "si": "සම්පාදකය (Compiler)"
                },
                {
                    "en": "Word Processor",
                    "si": "වචන සකසනය"
                },
                {
                    "en": "Web Browser",
                    "si": "වෙබ් බ්‍රවුසරය"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Compilers translate entire programs into machine executables in advance.",
                "si": "සම්පාදකය (Compiler) මුළු වැඩසටහනම එකවර යන්ත්‍ර කේත බවට පරිවර්තනය කරයි."
            },
            "syllabusRef": "G11.1.6"
        },
        {
            "id": "q3",
            "prompt": {
                "en": "Consider the pseudocode: For I := 1 to 5 do Write(I); What is the exact output displayed?",
                "si": "For I := 1 to 5 do Write(I); යන ව්‍යාජ කේතයෙන් තිරය මත දිස්වන නිවැරදි ප්‍රතිදානය කුමක්ද?"
            },
            "options": [
                {
                    "en": "1 2 3 4 5",
                    "si": "1 2 3 4 5"
                },
                {
                    "en": "12345",
                    "si": "12345"
                },
                {
                    "en": "0 1 2 3 4",
                    "si": "0 1 2 3 4"
                },
                {
                    "en": "5 4 3 2 1",
                    "si": "5 4 3 2 1"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Write(I) outputs values without inserting linebreaks or spaces, yielding \"12345\".",
                "si": "Write() මගින් හිස්තැන් රහිතව 12345 ලෙස ප්‍රතිදානය ලබා දෙයි."
            },
            "syllabusRef": "G11.1.3"
        },
        {
            "id": "q4",
            "prompt": {
                "en": "What is the correct identifier naming rule in Pascal and most programming languages?",
                "si": "පැස්කල් ඇතුළු බොහෝ ක්‍රමලේඛන භාෂාවල විචල්‍ය නාමකරණ (Identifier) නිවැරදි රීතිය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Identifiers must begin with a digit (e.g. 1stName)",
                    "si": "විචල්‍ය නාම අංකයකින් ආරම්භ විය යුතුය"
                },
                {
                    "en": "Identifiers can contain spaces between words",
                    "si": "වචන අතර හිස්තැන් තිබිය හැක"
                },
                {
                    "en": "Identifiers must begin with an alphabetic letter or underscore and cannot use reserved keywords",
                    "si": "විචල්‍ය නාම අකුරකින් හෝ යටිඉරකින් ආරම්භ විය යුතු අතර වෙන්කළ වචන (Keywords) නොවිය යුතුය"
                },
                {
                    "en": "Identifiers must always end with an exclamation mark (!)",
                    "si": "විචල්‍ය නාම අවසානයේ ! ලකුණ තිබිය යුතුය"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "Identifiers cannot start with digits, contain spaces, or collide with reserved keywords (like begin, end, var).",
                "si": "විචල්‍ය නාම අකුරකින් ඇරඹිය යුතු අතර වෙන් කළ වචන නොවිය යුතුය."
            },
            "syllabusRef": "G11.1.3"
        }
    ]
},

  'g11-u2-s1': {
    "id": "g11-u2-s1",
    "unitId": "g11-u2",
    "unitTitle": {
        "en": "Unit 02: System Development Life Cycle (SDLC)",
        "si": "ඒකකය 02: පද්ධති සංවර්ධන ජීවන චක්‍රය"
    },
    "title": {
        "en": "SDLC Investigation & DFD Drafter",
        "si": "SDLC අදියර හා දත්ත ගැලීම් සටහන්"
    },
    "type": "concept",
    "orderIndex": 26,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Eight Phases of the System Development Life Cycle",
                "si": "SDLC අදියර 8"
            },
            "bulletPoints": [
                {
                    "en": "1. Identification of Need -> 2. Feasibility Study -> 3. Analysis -> 4. Design -> 5. Coding -> 6. Testing -> 7. Deployment -> 8. Maintenance.",
                    "si": "1. අවශ්‍යතාව හඳුනාගැනීම -> 2. ශක්‍යතා අධ්‍යයනය -> 3. පද්ධති විශ්ලේෂණය -> 4. සැලසුම්කරණය -> 5. කේතනය -> 6. පරීක්ෂාව -> 7. ස්ථාපනය -> 8. නඩත්තුව."
                },
                {
                    "en": "Feasibility Study evaluates: Operational, Technical, Economic, and Legal feasibility before spending capital.",
                    "si": "ශක්‍යතා අධ්‍යයනයේදී තාක්ෂණික, ආර්ථික, මෙහෙයුම් සහ නීතිමය ශක්‍යතාව පරීක්ෂා කෙරේ."
                }
            ],
            "keyTakeaway": {
                "en": "SDLC provides a disciplined methodology ensuring high-quality software delivered on time and within budget.",
                "si": "SDLC මගින් ක්‍රමානුකූලව පද්ධතියක් සැලසුම් කර නියමිත වේලාවට හා පිරිවැයට නිම කිරීමට මග පෙන්වයි."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Data Flow Diagrams (DFD) & Fact-Finding",
                "si": "දත්ත ගැලීම් සටහන් (DFD)"
            },
            "bulletPoints": [
                {
                    "en": "Fact-finding techniques: Interviews, Questionnaires, Observation, and Document Sampling.",
                    "si": "තොරතුරු රැස්කිරීමේ ක්‍රම: සම්මුඛ සාකච්ඡා, ප්‍රශ්නාවලි, නිරීක්ෂණය සහ ලේඛන අධ්‍යයනය."
                },
                {
                    "en": "DFD components: External Entity (Square), Process (Rounded rectangle/Circle), Data Store (Open rectangle), Data Flow (Arrow).",
                    "si": "DFD සංරචක: බාහිර වස්තු, ක්‍රියාවලි, දත්ත ගබඩා සහ දත්ත ගැලීම්."
                }
            ],
            "keyTakeaway": {
                "en": "DFD models how data moves through business processes without showing program logic.",
                "si": "DFD මගින් පද්ධතියක් තුළ දත්ත ගලා යන ආකාරය රූපමයව නිරූපණය කරයි."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "Which phase of the SDLC immediately succeeds the Feasibility Study?",
                "si": "පද්ධති සංවර්ධන ජීවන චක්‍රයේ (SDLC) ශක්‍යතා අධ්‍යයන අදියරෙන් පසු එළඹෙන ඊළඟ අදියර කුමක්ද?"
            },
            "options": [
                {
                    "en": "System Maintenance",
                    "si": "පද්ධති නඩත්තුව"
                },
                {
                    "en": "System Analysis",
                    "si": "පද්ධති විශ්ලේෂණය (System Analysis)"
                },
                {
                    "en": "System Deployment",
                    "si": "පද්ධති ස්ථාපනය"
                },
                {
                    "en": "User Acceptance Testing",
                    "si": "පිළිගැනීමේ පරීක්ෂාව"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "SDLC sequence: Identification -> Feasibility -> Analysis -> Design -> Coding -> Testing -> Deployment -> Maintenance.",
                "si": "ශක්‍යතා අධ්‍යයනයෙන් පසු පද්ධති විශ්ලේෂණ අදියර ආරම්භ වේ."
            },
            "syllabusRef": "G11.2.1"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Which fact-finding technique is most effective when gathering quantitative responses from hundreds of geographically dispersed users?",
                "si": "භූගෝලීයව විසිරී සිටින විශාල පරිශීලකයන් සංඛ්‍යාවකින් තොරතුරු රැස් කිරීමට වඩාත්ම කාර්යක්ෂම ක්‍රමය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Individual face-to-face interviews",
                    "si": "මුහුණට මුහුණ සම්මුඛ සාකච්ඡා"
                },
                {
                    "en": "Structured Online Questionnaires",
                    "si": "ව්‍යුහගත මාර්ගගත ප්‍රශ්නාවලි (Questionnaires)"
                },
                {
                    "en": "Direct all-day on-site physical observation",
                    "si": "දවස පුරා සෘජු නිරීක්ෂණය"
                },
                {
                    "en": "Disassembling office computers",
                    "si": "පරිගණක ගලවා පරීක්ෂා කිරීම"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Questionnaires allow capturing standardized feedback economically across vast distributed demographics.",
                "si": "ප්‍රශ්නාවලි මගින් විශාල පිරිසකගෙන් ඉක්මනින් හා අඩු පිරිවැයකින් තොරතුරු ලබාගත හැක."
            },
            "syllabusRef": "G11.2.2"
        }
    ]
},

  'g11-u2-s2': {
    "id": "g11-u2-s2",
    "unitId": "g11-u2",
    "unitTitle": {
        "en": "Unit 02: System Development Life Cycle (SDLC)",
        "si": "ඒකකය 02: පද්ධති සංවර්ධන ජීවන චක්‍රය"
    },
    "title": {
        "en": "Software Testing & Deployment Lab",
        "si": "මෘදුකාංග පරීක්ෂණ හා ක්‍රියාත්මක කිරීම"
    },
    "type": "concept",
    "orderIndex": 27,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Testing Methodologies: Black Box vs White Box",
                "si": "මෘදුකාංග පරීක්ෂණ ක්‍රමවේද"
            },
            "bulletPoints": [
                {
                    "en": "Black-Box Testing: Evaluates functional inputs and outputs without knowledge of internal source code logic.",
                    "si": "කළු පෙට්ටි පරීක්ෂණ: අභ්‍යන්තර කේතය පිළිබඳ දැනුමකින් තොරව ආදාන හා ප්‍රතිදාන නිවැරදි දැයි පරීක්ෂා කිරීම."
                },
                {
                    "en": "White-Box Testing: Tests internal code paths, branches, conditions, and algorithm execution paths.",
                    "si": "සුදු පෙට්ටි පරීක්ෂණ: මෘදුකාංගයේ අභ්‍යන්තර කේත සහ ලොජික් මාර්ග විමර්ශනය කිරීම."
                },
                {
                    "en": "Acceptance Testing (UAT): Performed by client end-users to certify system meets business criteria.",
                    "si": "පිළිගැනීමේ පරීක්ෂාව (UAT): පද්ධතිය සිය අවශ්‍යතාවලට ගැලපේදැයි සේවාදායකයා විසින් පරීක්ෂා කිරීම."
                }
            ],
            "keyTakeaway": {
                "en": "Comprehensive software testing eliminates defects before production deployment.",
                "si": "මෘදුකාංග පරීක්ෂාව මගින් නිෂ්පාදන මට්ටමේ දෝෂ සම්පූර්ණයෙන්ම අවම කරයි."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Four System Deployment Strategies",
                "si": "පද්ධති ස්ථාපන ක්‍රම 4"
            },
            "bulletPoints": [
                {
                    "en": "Direct Deployment: Old system stopped instantly and new system turned on. High risk, low cost.",
                    "si": "සෘජු ස්ථාපනය (Direct): පැරණි පද්ධතිය වහාම නවතා අලුත් එක එකවර ක්‍රියාත්මක කිරීම (අවදානම් සහගතයි)."
                },
                {
                    "en": "Parallel Deployment: Both old and new systems run simultaneously side-by-side until validated. Lowest risk, highest cost.",
                    "si": "සමාන්තර ස්ථාපනය (Parallel): පද්ධති දෙකම එකවර ක්‍රියාත්මක කර පරීක්ෂා කිරීම (ආරක්ෂිතයි, පිරිවැය වැඩියි)."
                },
                {
                    "en": "Phased Deployment: New system introduced module by module in incremental stages.",
                    "si": "අදියරගත ස්ථාපනය (Phased): පද්ධතියේ කොටසින් කොටස හඳුන්වා දීම."
                },
                {
                    "en": "Pilot Deployment: New system rolled out to one branch/location first before global rollout.",
                    "si": "නියමු ස්ථාපනය (Pilot): එක් ශාඛාවක පමණක් මුලින් අත්හදා බලා පසුව මුළු ආයතනයටම යෙදවීම."
                }
            ],
            "keyTakeaway": {
                "en": "Parallel minimizes operational catastrophe, whereas Direct is chosen when budgets are constrained.",
                "si": "සමාන්තර ක්‍රමය ආරක්ෂිතම වන අතර සෘජු ක්‍රමය ලාභදායී වේ."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "Which software testing approach examines software functionality strictly without inspecting internal source code?",
                "si": "ක්‍රමලේඛයේ අභ්‍යන්තර කේතය පිළිබඳ නොසලකා ආදාන හා ප්‍රතිදාන පමණක් පරීක්ෂා කරන ක්‍රමය කුමක්ද?"
            },
            "options": [
                {
                    "en": "White-Box Testing",
                    "si": "සුදු පෙට්ටි පරීක්ෂණ (White-Box)"
                },
                {
                    "en": "Black-Box Testing",
                    "si": "කළු පෙට්ටි පරීක්ෂණ (Black-Box)"
                },
                {
                    "en": "Stress Hardware Testing",
                    "si": "දෘඩාංග පරීක්ෂණ"
                },
                {
                    "en": "Source Code Linting",
                    "si": "කේත ලින්ටින්"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Black-box testing treats the system as an opaque box, focusing on input-output specification adherence.",
                "si": "කළු පෙට්ටි පරීක්ෂණයේදී අභ්‍යන්තර කේතය නොබලා පිටතින් ක්‍රියාකාරීත්වය පරීක්ෂා කෙරේ."
            },
            "syllabusRef": "G11.2.3"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "A national bank introduces a new core banking software by running the old and new systems simultaneously for 3 months. This deployment is:",
                "si": "බැංකුවක් සිය පැරණි සහ නව මෘදුකාංග පද්ධති දෙකම එකවර මාස 3 ක් ක්‍රියාත්මක කර පරීක්ෂා කරයි නම් එය කුමන ස්ථාපන ක්‍රමයක්ද?"
            },
            "options": [
                {
                    "en": "Direct Deployment",
                    "si": "සෘජු ස්ථාපනය (Direct)"
                },
                {
                    "en": "Parallel Deployment",
                    "si": "සමාන්තර ස්ථාපනය (Parallel)"
                },
                {
                    "en": "Phased Deployment",
                    "si": "අදියරගත ස්ථාපනය (Phased)"
                },
                {
                    "en": "Emergency Hotfix",
                    "si": "හදිසි පැලැස්තර යෙදීම"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Running concurrent side-by-side systems for verification is Parallel Deployment.",
                "si": "පැරණි සහ නව පද්ධති දෙකම එකවර ක්‍රියාත්මක කර පරීක්ෂා කිරීම සමාන්තර ස්ථාපනයයි."
            },
            "syllabusRef": "G11.2.4"
        }
    ]
},

  'g11-u2-boss': {
    "id": "g11-u2-boss",
    "unitId": "g11-u2",
    "unitTitle": {
        "en": "Unit 02: System Development Life Cycle (SDLC)",
        "si": "ඒකකය 02: පද්ධති සංවර්ධන ජීවන චක්‍රය"
    },
    "title": {
        "en": "Unit 2 Boss: SDLC Master Gauntlet",
        "si": "SDLC විභාග අභියෝගය"
    },
    "type": "boss_arena",
    "orderIndex": 28,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "SDLC Models: Waterfall vs Prototyping vs Spiral",
                "si": "SDLC ආකෘති"
            },
            "bulletPoints": [
                {
                    "en": "Waterfall Model: Sequential linear phases; phase must finish before next begins; rigid requirements.",
                    "si": "දියඇලි ආකෘතිය (Waterfall): අදියරෙන් අදියර අනුක්‍රමිකව සිදුවේ; වෙනස්කම් කිරීමට අපහසුය."
                },
                {
                    "en": "Prototyping Model: Early working mockups built for user evaluation to refine unclear specifications.",
                    "si": "ප්‍රාථමික ආකෘතිකරණය (Prototyping): පරිශීලකයාට පෙන්වීමට මූලික ආකෘතියක් සාදා අවශ්‍යතා හඳුනා ගනී."
                },
                {
                    "en": "Spiral Model: Risk-driven iterative model featuring risk analysis and evolutionary prototypes.",
                    "si": "සර්පිල ආකෘතිය (Spiral): අවදානම් විශ්ලේෂණය මත පදනම්ව චක්‍රීයව දියුණු කරයි."
                }
            ],
            "keyTakeaway": {
                "en": "Waterfall fits projects with locked clear requirements; Prototyping fits evolving business needs.",
                "si": "පැහැදිලි අවශ්‍යතා සඳහා දියඇලි ආකෘතිය ද, වෙනස් වන අවශ්‍යතා සඳහා Prototyping ද යොදා ගනී."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Software Maintenance Classifications",
                "si": "මෘදුකාංග නඩත්තු වර්ග"
            },
            "bulletPoints": [
                {
                    "en": "Corrective: Fixing undiscovered bugs and faults post-deployment.",
                    "si": "නිවැරදි කිරීමේ නඩත්තුව (Corrective): පද්ධතියේ පවතින දෝෂ නිවැරදි කිරීම."
                },
                {
                    "en": "Adaptive: Modifying software to function on new OS or upgraded hardware environments.",
                    "si": "අනුවර්තී නඩත්තුව (Adaptive): නව මෙහෙයුම් පද්ධති හෝ දෘඩාංග වලට ගැලපෙන සේ වෙනස් කිරීම."
                },
                {
                    "en": "Perfective: Adding enhancements to boost speed or improve user convenience.",
                    "si": "පරිපූර්ණ නඩත්තුව (Perfective): පද්ධතියේ කාර්යක්ෂමතාව වැඩි කිරීම හෝ නව පහසුකම් එක් කිරීම."
                }
            ],
            "keyTakeaway": {
                "en": "Maintenance accounts for the longest duration and greatest cumulative cost in the software life cycle.",
                "si": "මෘදුකාංගයක ජීවන චක්‍රයේ වැඩිම කාලයක් හා පිරිවැයක් වැය වන්නේ නඩත්තු අදියරටය."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "Which software maintenance type is performed when fixing a programming calculation bug reported by users?",
                "si": "පද්ධතිය භාවිත කිරීමේදී පරිශීලකයන් වාර්තා කළ ගණනය කිරීමේ දෝෂයක් නිවැරදි කිරීම කුමන නඩත්තු වර්ගයට අයත් වේද?"
            },
            "options": [
                {
                    "en": "Corrective Maintenance",
                    "si": "නිවැරදි කිරීමේ නඩත්තුව (Corrective Maintenance)"
                },
                {
                    "en": "Adaptive Maintenance",
                    "si": "අනුවර්තී නඩත්තුව (Adaptive Maintenance)"
                },
                {
                    "en": "Perfective Maintenance",
                    "si": "පරිපූර්ණ නඩත්තුව (Perfective Maintenance)"
                },
                {
                    "en": "Preventive Maintenance",
                    "si": "වැළැක්වීමේ නඩත්තුව"
                }
            ],
            "correctIndex": 0,
            "explanation": {
                "en": "Corrective maintenance repairs operational software faults and bugs.",
                "si": "මතු වන දෝෂ නිවැරදි කිරීම Corrective Maintenance වේ."
            },
            "syllabusRef": "G11.2.5"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Which SDLC process model is best suited when clients are uncertain about detailed system requirements at the project outset?",
                "si": "ව්‍යාපෘතිය ආරම්භයේදී සේවාදායකයාට සිය අවශ්‍යතා පිළිබඳ පැහැදිලි අවබෝධයක් නොමැති විට වඩාත්ම සුදුසු SDLC ආකෘතිය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Waterfall Model",
                    "si": "දියඇලි ආකෘතිය (Waterfall Model)"
                },
                {
                    "en": "Prototyping Model",
                    "si": "ප්‍රාථමික ආකෘතිකරණය (Prototyping Model)"
                },
                {
                    "en": "Linear Big Bang Model",
                    "si": "රේඛීය බිග් බෑන්ග් ආකෘතිය"
                },
                {
                    "en": "Manual Script Model",
                    "si": "අතින් ලියන ලද ආකෘතිය"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Prototyping develops tangible mockups iteratively so users can touch and clarify requirements.",
                "si": "අවශ්‍යතා පැහැදිලි කර ගැනීමට මුලින් ආකෘතියක් සාදන Prototyping ආකෘතිය සුදුසුය."
            },
            "syllabusRef": "G11.2.6"
        },
        {
            "id": "q3",
            "prompt": {
                "en": "What type of feasibility investigates whether the proposed project will comply with copyright laws and computer crimes acts?",
                "si": "යෝජිත පද්ධතිය බුද්ධිමය දේපළ හා පරිගණක අපරාධ නීතිවලට එකඟ දැයි පරීක්ෂා කරන්නේ කුමන ශක්‍යතා අධ්‍යයනයේද?"
            },
            "options": [
                {
                    "en": "Economic Feasibility",
                    "si": "ආර්ථික ශක්‍යතාව"
                },
                {
                    "en": "Technical Feasibility",
                    "si": "තාක්ෂණික ශක්‍යතාව"
                },
                {
                    "en": "Legal Feasibility",
                    "si": "නීතිමය ශක්‍යතාව (Legal Feasibility)"
                },
                {
                    "en": "Operational Feasibility",
                    "si": "මෙහෙයුම් ශක්‍යතාව"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "Legal feasibility evaluates statutory compliance and regulatory conflicts.",
                "si": "නීතිමය ගැටලු නොමැති බව තහවුරු කරන්නේ Legal Feasibility මගිනි."
            },
            "syllabusRef": "G11.2.1"
        },
        {
            "id": "q4",
            "prompt": {
                "en": "Deploying a new supermarket POS system in only one pilot store in Kandy before national rollout is called:",
                "si": "සුපිරි වෙළඳසැල් මෘදුකාංගයක් මුලින් මහනුවර ශාඛාවේ පමණක් අත්හදා බලා පසුව අනෙක් ශාඛා වෙත යෙදවීම හඳුන්වන්නේ:"
            },
            "options": [
                {
                    "en": "Direct Deployment",
                    "si": "සෘජු ස්ථාපනය"
                },
                {
                    "en": "Parallel Deployment",
                    "si": "සමාන්තර ස්ථාපනය"
                },
                {
                    "en": "Pilot Deployment",
                    "si": "නියමු ස්ථාපනය (Pilot Deployment)"
                },
                {
                    "en": "Phased Deployment",
                    "si": "අදියරගත ස්ථාපනය"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "Testing at one representative location first is Pilot deployment.",
                "si": "එක් ස්ථානයක පමණක් මුලින් ක්‍රියාත්මක කර බැලීම නියමු (Pilot) ස්ථාපනයයි."
            },
            "syllabusRef": "G11.2.4"
        }
    ]
},

  'g11-u3-s1': {
    "id": "g11-u3-s1",
    "unitId": "g11-u3",
    "unitTitle": {
        "en": "Unit 03: The Internet & Electronic Mail",
        "si": "ඒකකය 03: අන්තර්ජාලය සහ විද්‍යුත් තැපෑල"
    },
    "title": {
        "en": "Internet Architecture & Protocols",
        "si": "අන්තර්ජාල ආකෘතිය හා ප්‍රොටෝකෝල"
    },
    "type": "concept",
    "orderIndex": 29,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Internet Addressing: IP & DNS Resolution",
                "si": "IP ලිපින සහ DNS නිරාකරණය"
            },
            "bulletPoints": [
                {
                    "en": "IP Address: Unique numeric address for every connected device (IPv4: 32-bit dotted-decimal, IPv6: 128-bit hex).",
                    "si": "IP ලිපිනය: ජාලගත සෑම උපාංගයකටම හිමි අනන්‍ය අංකිත ලිපිනය (IPv4: බිටු 32, IPv6: බිටු 128)."
                },
                {
                    "en": "Domain Name System (DNS): Translates human-friendly domain names (e.g. moe.gov.lk) into machine IP addresses.",
                    "si": "DNS: මිනිසුන්ට කියවිය හැකි වෙබ් නාම යන්ත්‍ර කියවන IP ලිපින බවට පරිවර්තනය කරයි."
                },
                {
                    "en": "Uniform Resource Locator (URL): Protocol (https://) + Host/Domain (www.nie.lk) + Path (/ict/) + File (index.html).",
                    "si": "URL: ප්‍රොටෝකෝලය, ඩොමේන් නාමය, මාර්ගය සහ ගොනු නාමයේ එකතුවකි."
                }
            ],
            "keyTakeaway": {
                "en": "DNS operates as the internet’s global telephone directory.",
                "si": "DNS යනු අන්තර්ජාලයේ දුරකථන නාමාවලිය වැනි මධ්‍යස්ථානයයි."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Core Internet & Email Protocols",
                "si": "අන්තර්ජාල සහ ඊමේල් ප්‍රොටෝකෝල"
            },
            "bulletPoints": [
                {
                    "en": "HTTP / HTTPS: Hypertext Transfer Protocol (HTTPS incorporates SSL/TLS cryptographic transport security).",
                    "si": "HTTP / HTTPS: වෙබ් පිටු හුවමාරු ප්‍රොටෝකෝලය (HTTPS වඩාත් සුරක්ෂිත වේ)."
                },
                {
                    "en": "SMTP (Simple Mail Transfer Protocol): Sends outgoing email messages from client to server.",
                    "si": "SMTP: විද්‍යුත් තැපැල් පණිවිඩ යැවීම සඳහා භාවිත වන ප්‍රොටෝකෝලයයි."
                },
                {
                    "en": "POP3 / IMAP: Retrieves incoming email messages from server to client mail client.",
                    "si": "POP3 / IMAP: සේවාදායකයෙන් ඊමේල් ලබාගැනීම (Download/Sync) සඳහා භාවිත වේ."
                }
            ],
            "keyTakeaway": {
                "en": "SMTP sends mail; POP3/IMAP retrieves mail.",
                "si": "SMTP ඊමේල් යැවීමට ද, POP3/IMAP ඊමේල් ලබාගැනීමට ද යොදා ගනී."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "Which protocol is responsible for TRANSMITTING outgoing email messages across mail servers?",
                "si": "අන්තර්ජාලය ඔස්සේ විද්‍යුත් තැපැල් (Email) පණිවිඩ පිටතට යැවීම සඳහා භාවිත වන ප්‍රොටෝකෝලය කුමක්ද?"
            },
            "options": [
                {
                    "en": "POP3",
                    "si": "POP3"
                },
                {
                    "en": "IMAP",
                    "si": "IMAP"
                },
                {
                    "en": "SMTP",
                    "si": "SMTP (Simple Mail Transfer Protocol)"
                },
                {
                    "en": "FTP",
                    "si": "FTP"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "SMTP (Simple Mail Transfer Protocol) transmits outgoing mail; POP3 and IMAP retrieve incoming mail.",
                "si": "විද්‍යුත් තැපැල් යැවීමට SMTP ප්‍රොටෝකෝලය භාවිත කරයි."
            },
            "syllabusRef": "G11.3.1"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "What is the bit length of an IPv4 address compared to an IPv6 address?",
                "si": "IPv4 ලිපිනයක සහ IPv6 ලිපිනයක බිටු දිග පිළිවෙළින් කුමක්ද?"
            },
            "options": [
                {
                    "en": "IPv4: 16 bits; IPv6: 32 bits",
                    "si": "IPv4: බිටු 16; IPv6: බිටු 32"
                },
                {
                    "en": "IPv4: 32 bits; IPv6: 128 bits",
                    "si": "IPv4: බිටු 32; IPv6: බිටු 128"
                },
                {
                    "en": "IPv4: 64 bits; IPv6: 256 bits",
                    "si": "IPv4: බිටු 64; IPv6: බිටු 256"
                },
                {
                    "en": "IPv4: 128 bits; IPv6: 512 bits",
                    "si": "IPv4: බිටු 128; IPv6: බිටු 512"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "IPv4 consists of 32 bits (4 octets); IPv6 expands addressing space to 128 bits.",
                "si": "IPv4 බිටු 32 ක් ද, IPv6 බිටු 128 ක් ද වේ."
            },
            "syllabusRef": "G11.3.2"
        }
    ]
},

  'g11-u3-s2': {
    "id": "g11-u3-s2",
    "unitId": "g11-u3",
    "unitTitle": {
        "en": "Unit 03: The Internet & Electronic Mail",
        "si": "ඒකකය 03: අන්තර්ජාලය සහ විද්‍යුත් තැපෑල"
    },
    "title": {
        "en": "Cyber Security Vault & Cloud Computing",
        "si": "සයිබර් ආරක්ෂාව හා වලාකුළු පරිගණනය"
    },
    "type": "concept",
    "orderIndex": 30,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Cloud Computing Service Models (IaaS, PaaS, SaaS)",
                "si": "වලාකුළු සේවා ආකෘති"
            },
            "bulletPoints": [
                {
                    "en": "IaaS (Infrastructure as a Service): Renting virtual servers, storage, and networking hardware (e.g. AWS EC2).",
                    "si": "IaaS: යටිතල පහසුකම් (සේවාදායක, ආචයනය) කුලියට ලබාදීම."
                },
                {
                    "en": "PaaS (Platform as a Service): Environment for developers to build and deploy applications without managing OS.",
                    "si": "PaaS: මෘදුකාංග නිර්මාණය සඳහා සංවර්ධන වේදිකා ලබාදීම."
                },
                {
                    "en": "SaaS (Software as a Service): Complete ready-to-use software delivered over the web (e.g. Gmail, Google Docs).",
                    "si": "SaaS: අන්තර්ජාලය හරහා භාවිත කළ හැකි සූදානම් මෘදුකාංග ලබාදීම (Gmail, Google Docs)."
                }
            ],
            "keyTakeaway": {
                "en": "Cloud computing provides scalable on-demand computing resources via the internet.",
                "si": "වලාකුළු පරිගණනය මගින් අවශ්‍යතාව පරිදි අන්තර්ජාලය ඔස්සේ සම්පත් ලබාගත හැක."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Malware Vectors & Cryptography",
                "si": "අනිෂ්ට මෘදුකාංග සහ ගුප්තකේතනය"
            },
            "bulletPoints": [
                {
                    "en": "Malware types: Viruses (replicate via host files), Worms (self-propagate over networks), Trojans (disguised malware), Ransomware (encrypts files for extortion).",
                    "si": "අනිෂ්ට මෘදුකාංග: වෛරස්, වර්ම් (Worms), ට්‍රෝජන්, සහ රැන්සම්වෙයාර්."
                },
                {
                    "en": "Phishing: Fraudulent attempts to steal passwords and credit card credentials by impersonating legitimate institutions.",
                    "si": "තතුබෑම (Phishing): වංචනික වෙබ් අඩවි මගින් මුරපද සහ බැංකු තොරතුරු සොරකම් කිරීම."
                }
            ],
            "keyTakeaway": {
                "en": "Strong passwords, multi-factor authentication (MFA), and antivirus safeguard cyber identity.",
                "si": "ශක්තිමත් මුරපද සහ MFA භාවිතයෙන් සයිබර් ප්‍රහාර වලින් ආරක්ෂා විය හැක."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "Google Docs and Gmail, accessible via web browser without installing local desktop binaries, are examples of:",
                "si": "පරිගණකයේ ස්ථාපනය නොකර වෙබ් බ්‍රවුසරය හරහා භාවිත කරන Google Docs සහ Gmail අයත් වන්නේ කුමන වලාකුළු සේවා ආකෘතියටද?"
            },
            "options": [
                {
                    "en": "IaaS (Infrastructure as a Service)",
                    "si": "IaaS"
                },
                {
                    "en": "PaaS (Platform as a Service)",
                    "si": "PaaS"
                },
                {
                    "en": "SaaS (Software as a Service)",
                    "si": "SaaS (Software as a Service)"
                },
                {
                    "en": "DaaS (Desktop as a Service)",
                    "si": "DaaS"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "Ready-to-use end-user software delivered over the internet is Software as a Service (SaaS).",
                "si": "අන්තර්ජාලය ඔස්සේ සෘජුවම භාවිත කළ හැකි මෘදුකාංග SaaS නම් වේ."
            },
            "syllabusRef": "G11.3.3"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Deceptive emails sent pretending to be from a bank to trick users into revealing account passwords are known as:",
                "si": "බැංකුවකින් එවූ බව අඟවමින් ගිණුම් මුරපද සොරකම් කිරීමට වංචනික ඊමේල් එවීම හඳුන්වන්නේ:"
            },
            "options": [
                {
                    "en": "Phishing",
                    "si": "තතුබෑම (Phishing)"
                },
                {
                    "en": "Data Warehousing",
                    "si": "දත්ත ගබඩාකරණය"
                },
                {
                    "en": "Hardware Overclocking",
                    "si": "දෘඩාංග වේගය වැඩි කිරීම"
                },
                {
                    "en": "Disk Partitioning",
                    "si": "තැටි කොටස් කිරීම"
                }
            ],
            "correctIndex": 0,
            "explanation": {
                "en": "Phishing mimics trusted brands to elicit private security credentials fraudulently.",
                "si": "වංචනික ලෙස පුද්ගලික තොරතුරු සොරකම් කිරීම തතුබෑම (Phishing) වේ."
            },
            "syllabusRef": "G11.3.4"
        }
    ]
},

  'g11-u3-boss': {
    "id": "g11-u3-boss",
    "unitId": "g11-u3",
    "unitTitle": {
        "en": "Unit 03: The Internet & Electronic Mail",
        "si": "ඒකකය 03: අන්තර්ජාලය සහ විද්‍යුත් තැපෑල"
    },
    "title": {
        "en": "Unit 3 Boss: Networking & Security Arena",
        "si": "ජාලකරණ හා ආරක්ෂණ විභාග සටන්"
    },
    "type": "boss_arena",
    "orderIndex": 31,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Top-Level Domains (TLD) and URL Decoding",
                "si": "ඉහළ මට්ටමේ ඩොමේන් (TLD) සහ URL විග්‍රහය"
            },
            "bulletPoints": [
                {
                    "en": "gTLDs (Generic): .com (Commercial), .org (Non-profit organization), .edu (Educational institution), .gov (Government).",
                    "si": "සාමාන්‍ය TLDs: .com (ව්‍යාපාරික), .org (සංවිධාන), .edu (අධ්‍යාපනික), .gov (රාජ්‍ය)."
                },
                {
                    "en": "ccTLDs (Country Code): .lk (Sri Lanka), .uk (United Kingdom), .jp (Japan), .in (India).",
                    "si": "රටවල් සඳහා TLDs: .lk (ශ්‍රී ලංකාව), .uk (එක්සත් රාජධානිය)."
                }
            ],
            "keyTakeaway": {
                "en": "ccTLDs identify country-specific jurisdictions under ICANN governance.",
                "si": "ccTLDs මගින් වෙබ් අඩවිය අදාළ වන රට හඳුනා ගත හැක."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Network Security Firewalls & Encryption",
                "si": "ගිනිපවුරු සහ සංකේතනය"
            },
            "bulletPoints": [
                {
                    "en": "Firewall: Hardware or software appliance inspecting incoming and outgoing packet traffic against security rules.",
                    "si": "ගිනිපවුර (Firewall): ජාලය තුළට පැමිණෙන සහ පිටවන දත්ත පරීක්ෂා කර අනවසර දත්ත අවහිර කරයි."
                },
                {
                    "en": "SSL/TLS Encryption: Converts plain text into unreadable ciphertext over HTTPS to prevent eavesdropping.",
                    "si": "SSL/TLS සංකේතනය: දත්ත ගමන් කිරීමේදී අනවසර පුද්ගලයන්ට කියවිය නොහැකි ලෙස කේතනය කරයි."
                }
            ],
            "keyTakeaway": {
                "en": "End-to-end encryption protects sensitive passwords and financial transactions online.",
                "si": "සංකේතනය මගින් මාර්ගගත ගනුදෙනු සහ මුරපද සුරක්ෂිත කරයි."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "In URL \"https://www.schoolnet.lk/ict/index.html\", what represents the Top-Level Domain (TLD)?",
                "si": "https://www.schoolnet.lk/ict/index.html යන URL ලිපිනයේ ඉහළ මට්ටමේ ඩොමේනය (TLD) කුමක්ද?"
            },
            "options": [
                {
                    "en": "https",
                    "si": "https"
                },
                {
                    "en": "www",
                    "si": "www"
                },
                {
                    "en": ".lk",
                    "si": ".lk"
                },
                {
                    "en": "index.html",
                    "si": "index.html"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": ".lk is the country-code Top Level Domain (ccTLD) for Sri Lanka.",
                "si": ".lk යනු ශ්‍රී ලංකාවට අයත් රට කේත ඉහළ මට්ටමේ ඩොමේනයයි."
            },
            "syllabusRef": "G11.3.5"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "A network security barrier that monitors and filters traffic between trusted internal network and untrusted internet is a:",
                "si": "අභ්‍යන්තර සුරක්ෂිත ජාලය සහ බාහිර අන්තර්ජාලය අතර දත්ත පෙරීම සිදු කරන ආරක්ෂක පවුර කුමක්ද?"
            },
            "options": [
                {
                    "en": "Network Hub",
                    "si": "හබ් එක (Hub)"
                },
                {
                    "en": "Firewall",
                    "si": "ගිනිපවුර (Firewall)"
                },
                {
                    "en": "Patch cable",
                    "si": "ජාල කේබලය"
                },
                {
                    "en": "Web spider",
                    "si": "වෙබ් ස්පයිඩර්"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Firewalls enforce packet access control policies to thwart intrusion.",
                "si": "ගිනිපවුර (Firewall) මගින් අනවසර ජාල ප්‍රවේශයන් වළක්වයි."
            },
            "syllabusRef": "G11.3.6"
        },
        {
            "id": "q3",
            "prompt": {
                "en": "Which email protocol downloads emails onto the local client device and conventionally deletes them from the mail server?",
                "si": "විද්‍යුත් තැපැල් පණිවිඩ පරිගණකයට බාගත කර සේවාදායකයෙන් මකා දමන සම්ප්‍රදායික ප්‍රොටෝකෝලය කුමක්ද?"
            },
            "options": [
                {
                    "en": "POP3",
                    "si": "POP3"
                },
                {
                    "en": "SMTP",
                    "si": "SMTP"
                },
                {
                    "en": "HTTP",
                    "si": "HTTP"
                },
                {
                    "en": "DHCP",
                    "si": "DHCP"
                }
            ],
            "correctIndex": 0,
            "explanation": {
                "en": "POP3 defaults to downloading mail locally and purging it from server, unlike synchronizing IMAP.",
                "si": "POP3 මගින් ඊමේල් දේශීය උපාංගයට බාගත කර සේවාදායකයෙන් ඉවත් කරයි."
            },
            "syllabusRef": "G11.3.1"
        },
        {
            "id": "q4",
            "prompt": {
                "en": "Malicious software designed to encrypt a user's files and demand payment for the decryption key is classified as:",
                "si": "පරිශීලකයාගේ ලිපිගොනු කේතනය කර ඒවා නැවත ලබාදීමට කප්පම් ඉල්ලන අනිෂ්ට මෘදුකාංගය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Adware",
                    "si": "වෙළඳ දැන්වීම් මෘදුකාංග"
                },
                {
                    "en": "Spyware",
                    "si": "ඔත්තු මෘදුකාංග"
                },
                {
                    "en": "Ransomware",
                    "si": "කප්පම් මෘදුකාංග (Ransomware)"
                },
                {
                    "en": "Freeware",
                    "si": "නොමිලේ මෘදුකාංග"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "Ransomware hijacks files using encryption and extorts financial ransom.",
                "si": "ගොනු කේතනය කර කප්පම් ඉල්ලා සිටින මෘදුකාංග Ransomware වේ."
            },
            "syllabusRef": "G11.3.4"
        }
    ]
},

  'g11-u4-s1': {
    "id": "g11-u4-s1",
    "unitId": "g11-u4",
    "unitTitle": {
        "en": "Unit 04: Use of Multimedia Technologies",
        "si": "ඒකකය 04: බහුමාධ්‍ය භාවිතය"
    },
    "title": {
        "en": "Multimedia Studio (Graphics, Audio & Video)",
        "si": "බහුමාධ්‍ය තාක්ෂණය සහ ග්‍රැෆික්"
    },
    "type": "concept",
    "orderIndex": 32,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Bitmap (Raster) vs Vector Graphics",
                "si": "රැස්ටර් (Bitmap) සහ වෙක්ටර් චිත්‍රක"
            },
            "bulletPoints": [
                {
                    "en": "Raster (Bitmap): Formed from a grid of colored pixels. High photographic detail, but loses clarity and pixelates when enlarged (e.g. JPEG, PNG, BMP).",
                    "si": "රැස්ටර් (පික්සල): පික්සල ජාලයකින් සමන්විත වේ. විශාල කිරීමේදී බොඳ වේ (Pixelate)."
                },
                {
                    "en": "Vector: Defined by mathematical formulas of lines, curves, and shapes. Scales infinitely without loss of sharpness (e.g. SVG, EPS, AI).",
                    "si": "වෙක්ටර්: ගණිතමය සමීකරණ මත පදනම් වේ. කෙතරම් විශාල කළද පැහැදිලි බව නැති නොවේ."
                }
            ],
            "keyTakeaway": {
                "en": "Photos require raster formats; logos and fonts require scalable vector graphics.",
                "si": "ඡායාරූප සඳහා රැස්ටර් ද, ලාංඡන සහ අකුරු සඳහා වෙක්ටර් ද යොදා ගනී."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Lossy vs Lossless Compression Formats",
                "si": "හානිකර (Lossy) සහ හානි රහිත (Lossless) සම්පීඩනය"
            },
            "bulletPoints": [
                {
                    "en": "Lossy Compression: Permanently discards redundant audio/visual data undetectable to human senses. Massive file size reduction (e.g. MP3, JPEG, MP4).",
                    "si": "හානිකර සම්පීඩනය: ගොනු ප්‍රමාණය විශාල ලෙස අඩු කිරීමට අනවශ්‍ය දත්ත ඉවත් කරයි (JPEG, MP3)."
                },
                {
                    "en": "Lossless Compression: Reduces file size without any degradation of original quality. Exact original data restored on decompression (e.g. PNG, FLAC, ZIP).",
                    "si": "හානි රහිත සම්පීඩනය: ගුණාත්මකභාවය සුරකිමින් ගොනු ප්‍රමාණය අඩු කරයි (PNG, FLAC)."
                }
            ],
            "keyTakeaway": {
                "en": "Lossy is preferred for web streaming; Lossless is mandatory for archival masters and medical imaging.",
                "si": "වෙබ් භාවිතයට Lossy ද, උසස් තත්ත්වයේ ගබඩා කිරීමට Lossless ද යොදා ගනී."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "What is the smallest individual building element of a digital bitmap (raster) graphic image?",
                "si": "අංකිත රැස්ටර් (Bitmap) ග්‍රැෆික් රූපයක මූලික කුඩාම තැනුම් ඒකකය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Bit",
                    "si": "බිටුව (Bit)"
                },
                {
                    "en": "Pixel",
                    "si": "පික්සලය (Pixel)"
                },
                {
                    "en": "Vector Node",
                    "si": "වෙක්ටර් නෝඩය"
                },
                {
                    "en": "Voxel",
                    "si": "වොක්සලය"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "A pixel (picture element) is the microscopic point of programmable color in a digital display grid.",
                "si": "ඩිජිටල් රූපයක මූලික තැනුම් ඒකකය පික්සලය (Pixel) වේ."
            },
            "syllabusRef": "G11.4.1"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Which graphic file format preserves vector lines and scales infinitely without pixelation distortion?",
                "si": "කෙතරම් විශාල කළ ද පැහැදිලි බව නොනැසී පවතින වෙක්ටර් ග්‍රැෆික් ගොනු ආකෘතියක් වන්නේ කුමක්ද?"
            },
            "options": [
                {
                    "en": "JPEG",
                    "si": "JPEG"
                },
                {
                    "en": "BMP",
                    "si": "BMP"
                },
                {
                    "en": "SVG",
                    "si": "SVG (Scalable Vector Graphics)"
                },
                {
                    "en": "GIF",
                    "si": "GIF"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "SVG (Scalable Vector Graphics) is an XML-based vector graphics standard.",
                "si": "SVG යනු වෙක්ටර් ආකෘතියක් වන අතර විශාල කිරීමේදී බොඳ නොවේ."
            },
            "syllabusRef": "G11.4.2"
        }
    ]
},

  'g11-u4-boss': {
    "id": "g11-u4-boss",
    "unitId": "g11-u4",
    "unitTitle": {
        "en": "Unit 04: Use of Multimedia Technologies",
        "si": "ඒකකය 04: බහුමාධ්‍ය භාවිතය"
    },
    "title": {
        "en": "Unit 4 Boss: Multimedia Technology Arena",
        "si": "බහුමාධ්‍ය විභාග අභියෝගය"
    },
    "type": "boss_arena",
    "orderIndex": 33,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Digital Audio & Video Technical Parameters",
                "si": "ඩිජිටල් ශ්‍රව්‍ය සහ දෘශ්‍ය පරාමිතීන්"
            },
            "bulletPoints": [
                {
                    "en": "Audio Sampling Rate: Number of samples taken per second. Standard CD audio is 44.1 kHz, 16-bit stereo.",
                    "si": "ශ්‍රව්‍ය සාම්පල අනුපාතය: තත්පරයකට ගන්නා සාම්පල ගණන (සම්මත CD ශ්‍රව්‍ය 44.1 kHz වේ)."
                },
                {
                    "en": "Video Frame Rate: Number of individual frames shown per second (fps). Cinema: 24 fps; Television: 25/30 fps; Smooth video: 60 fps.",
                    "si": "දෘශ්‍ය රාමු අනුපාතය (fps): තත්පරයකට පෙන්වන රාමු ගණන (24, 30, 60 fps)."
                }
            ],
            "keyTakeaway": {
                "en": "Higher sampling rates and frame rates yield superior fidelity at the cost of larger file sizes.",
                "si": "රාමු සහ සාම්පල අනුපාතය වැඩි වන විට ගුණාත්මකභාවය සහ ගොනු ප්‍රමාණය වැඩි වේ."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "File Size Calculations for Uncompressed Images",
                "si": "රූප ගොනු ප්‍රමාණය ගණනය කිරීම"
            },
            "bulletPoints": [
                {
                    "en": "Formula: File Size (bits) = Width (pixels) × Height (pixels) × Color Depth (bits).",
                    "si": "සූත්‍රය: ගොනු ප්‍රමාණය (බිටු) = පළල × උස × වර්ණ ගැඹුර (Color Depth)."
                },
                {
                    "en": "To convert bits to bytes, divide by 8. Example: 1000 × 1000 × 24 bits = 24,000,000 bits = 3,000,000 bytes = 3 MB.",
                    "si": "බයිට් බවට පත් කිරීමට 8 න් බෙදන්න."
                }
            ],
            "keyTakeaway": {
                "en": "Understanding bit depth enables predicting storage and transmission bandwidth needs.",
                "si": "වර්ණ ගැඹුර සහ පික්සල ප්‍රමාණය මගින් ගොනු ධාරිතාව ගණනය කළ හැක."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "What is the uncompressed file size in bytes of an image measuring 800 × 600 pixels with 24-bit True Color depth?",
                "si": "800 × 600 පික්සල සහ 24-bit වර්ණ ගැඹුරක් සහිත සම්පීඩනය නොකළ රූපයක ගොනු ප්‍රමාණය බයිට් කීයක් වේද?"
            },
            "options": [
                {
                    "en": "480,000 Bytes",
                    "si": "480,000 බයිට්"
                },
                {
                    "en": "1,440,000 Bytes",
                    "si": "1,440,000 බයිට් (800 × 600 × 3)"
                },
                {
                    "en": "11,520,000 Bytes",
                    "si": "11,520,000 බයිට්"
                },
                {
                    "en": "2,400,000 Bytes",
                    "si": "2,400,000 බයිට්"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "24 bits = 3 bytes per pixel. File size = 800 × 600 × 3 = 1,440,000 Bytes (~1.44 MB).",
                "si": "24 bits යනු බයිට් 3 කි. 800 × 600 × 3 = 1,440,000 බයිට් වේ."
            },
            "syllabusRef": "G11.4.3"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Which audio file format applies Lossy compression to drastically reduce MP3 download bandwidth?",
                "si": "බාගත කිරීමේ කලාප පළල අඩු කිරීමට හානිකර (Lossy) සම්පීඩනය භාවිත කරන ශ්‍රව්‍ය ආකෘතිය කුමක්ද?"
            },
            "options": [
                {
                    "en": "WAV",
                    "si": "WAV"
                },
                {
                    "en": "AIFF",
                    "si": "AIFF"
                },
                {
                    "en": "MP3",
                    "si": "MP3"
                },
                {
                    "en": "FLAC",
                    "si": "FLAC"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "MP3 uses perceptual lossy compression algorithms to shrink audio files to ~10% original size.",
                "si": "MP3 යනු හානිකර (Lossy) සම්පීඩන ශ්‍රව්‍ය ආකෘතියකි."
            },
            "syllabusRef": "G11.4.4"
        },
        {
            "id": "q3",
            "prompt": {
                "en": "Which graphic format uniquely supports frame-by-frame 2D animated loops and 1-bit transparency?",
                "si": "රාමුවෙන් රාමුව සජීවීකරණය සහ විනිවිදභාවය (Transparency) සහිත 2D ග්‍රැෆික් ආකෘතිය කුමක්ද?"
            },
            "options": [
                {
                    "en": "JPEG",
                    "si": "JPEG"
                },
                {
                    "en": "BMP",
                    "si": "BMP"
                },
                {
                    "en": "GIF",
                    "si": "GIF (Graphics Interchange Format)"
                },
                {
                    "en": "TIFF",
                    "si": "TIFF"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "GIF supports 8-bit color palettes, simple transparency, and sequential frame animation.",
                "si": "GIF ආකෘතිය මගින් කෙටි සජීවීකරණ පෙන්විය හැක."
            },
            "syllabusRef": "G11.4.5"
        },
        {
            "id": "q4",
            "prompt": {
                "en": "What parameter determines the number of audio pressure waveform measurements captured per second?",
                "si": "ශ්‍රව්‍ය සංඥාවක තත්පරයකට ලබාගන්නා මිනුම් ගණන තීරණය කරන පරාමිතිය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Frame Rate",
                    "si": "රාමු අනුපාතය"
                },
                {
                    "en": "Audio Sampling Rate",
                    "si": "ශ්‍රව්‍ය සාම්පල අනුපාතය (Sampling Rate)"
                },
                {
                    "en": "Color Depth",
                    "si": "වර්ණ ගැඹුර"
                },
                {
                    "en": "Pixel Aspect Ratio",
                    "si": "පික්සල අනුපාතය"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Sampling Rate (measured in Hertz / kHz) records periodic analog sound wave snapshots.",
                "si": "ශ්‍රව්‍ය සාම්පල අනුපාතය (Sampling Rate) මගින් තත්පරයකට ගන්නා සාම්පල ගණන මනිනු ලැබේ."
            },
            "syllabusRef": "G11.4.6"
        }
    ]
},

  'g11-u5-s1': {
    "id": "g11-u5-s1",
    "unitId": "g11-u5",
    "unitTitle": {
        "en": "Unit 05: Web Designing using HTML & CSS",
        "si": "ඒකකය 05: HTML සහ වෙබ් සංස්කාරක මගින් වෙබ් අඩවි නිර්මාණය"
    },
    "title": {
        "en": "HTML Table Mason & Web Authoring",
        "si": "වෙබ් නිර්මාණය හා HTML වගු"
    },
    "type": "interactive_lab",
    "sandboxType": "table_mason",
    "orderIndex": 34,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "HTML Table Cell Merging: Colspan & Rowspan",
                "si": "HTML වගු සෛල ඒකාබද්ධතාව: Colspan සහ Rowspan"
            },
            "visualWidget": "table_mason",
            "bulletPoints": [
                {
                    "en": "<table> defines table container; <tr> defines rows; <th> defines bold headers; <td> defines standard data cells.",
                    "si": "<table> මගින් වගුව ද, <tr> මගින් පේළි ද, <th> මගින් ශීර්ෂක ද, <td> මගින් දත්ත සෛල ද දක්වයි."
                },
                {
                    "en": "colspan=\"N\": Merges a single cell horizontally across N adjacent columns.",
                    "si": "colspan=\"N\": තිරස්ව තීරු N ප්‍රමාණයක් හරහා සෛලයක් ඒකාබද්ධ කරයි."
                },
                {
                    "en": "rowspan=\"M\": Extends a cell vertically downwards across M consecutive rows.",
                    "si": "rowspan=\"M\": සිරස්ව පේළි M ප්‍රමාණයක් පහළට සෛලයක් ඒකාබද්ධ කරයි."
                }
            ],
            "keyTakeaway": {
                "en": "When merging cells, reduce corresponding <td> elements in affected adjacent rows/columns.",
                "si": "colspan හෝ rowspan යෙදූ විට යාබද පේළිවල අදාළ <td> ඉවත් කළ යුතුය."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "CSS Styling Foundations (Inline, Internal, External)",
                "si": "CSS මෝස්තර නිර්මාණය"
            },
            "bulletPoints": [
                {
                    "en": "Inline CSS: Applied directly to HTML tags using style attribute (e.g. style=\"color: blue;\").",
                    "si": "Inline CSS: ටැගය තුළම style ගුණාංගය මගින් යොදයි."
                },
                {
                    "en": "Internal CSS: Defined inside <style> tags within the HTML <head> section.",
                    "si": "Internal CSS: ලේඛනයේ <head> තුළ <style> ටැගය තුළ ලියනු ලැබේ."
                },
                {
                    "en": "External CSS: Linked external .css stylesheet file using <link rel=\"stylesheet\" href=\"style.css\">.",
                    "si": "External CSS: බාහිර .css ගොනුවක් <link> ටැගය මගින් සම්බන්ධ කරයි."
                }
            ],
            "keyTakeaway": {
                "en": "External stylesheets ensure sitewide design consistency across multiple web pages efficiently.",
                "si": "External CSS මගින් මුළු වෙබ් අඩවියේම පෙනුම එකවර පාලනය කළ හැක."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "Which HTML attribute merges a table header cell horizontally across 3 columns?",
                "si": "වගුවක ශීර්ෂක සෛලයක් තිරස්ව තීරු 3 ක් පුරා ඒකාබද්ධ කිරීමට භාවිත කරන HTML ගුණාංගය කුමක්ද?"
            },
            "options": [
                {
                    "en": "rowspan=\"3\"",
                    "si": "rowspan=\"3\""
                },
                {
                    "en": "colspan=\"3\"",
                    "si": "colspan=\"3\""
                },
                {
                    "en": "span=\"3\"",
                    "si": "span=\"3\""
                },
                {
                    "en": "merge=\"3\"",
                    "si": "merge=\"3\""
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "colspan (column span) stretches a cell horizontally across columns.",
                "si": "තිරස් තීරු ඒකාබද්ධ කිරීමට colspan භාවිත වේ."
            },
            "syllabusRef": "G11.5.1"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Which HTML tag links an external CSS stylesheet file to an HTML web document?",
                "si": "HTML ලේඛනයකට බාහිර CSS මෝස්තර පත්‍රිකාවක් සම්බන්ධ කරන ටැගය කුමක්ද?"
            },
            "options": [
                {
                    "en": "<style src=\"style.css\">",
                    "si": "<style src=\"style.css\">"
                },
                {
                    "en": "<link rel=\"stylesheet\" href=\"style.css\">",
                    "si": "<link rel=\"stylesheet\" href=\"style.css\">"
                },
                {
                    "en": "<css link=\"style.css\">",
                    "si": "<css link=\"style.css\">"
                },
                {
                    "en": "<script href=\"style.css\">",
                    "si": "<script href=\"style.css\">"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "<link rel=\"stylesheet\" href=\"...\"> is placed in <head> to bind external CSS.",
                "si": "<link rel=\"stylesheet\" href=\"...\"> මගින් බාහිර CSS සම්බන්ධ කරයි."
            },
            "syllabusRef": "G11.5.2"
        }
    ]
},

  'g11-u5-s2': {
    "id": "g11-u5-s2",
    "unitId": "g11-u5",
    "unitTitle": {
        "en": "Unit 05: Web Designing using HTML & CSS",
        "si": "ඒකකය 05: HTML සහ වෙබ් සංස්කාරක මගින් වෙබ් අඩවි නිර්මාණය"
    },
    "title": {
        "en": "HTML Forms & Structural Elements",
        "si": "HTML ආකෘති පත්‍ර හා ලැයිස්තු"
    },
    "type": "concept",
    "orderIndex": 35,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "HTML5 Semantic Document Structure",
                "si": "HTML ලේඛන ව්‍යුහය"
            },
            "bulletPoints": [
                {
                    "en": "<!DOCTYPE html> declares modern HTML5 standard to web browsers.",
                    "si": "<!DOCTYPE html> මගින් බ්‍රවුසරයට HTML5 ලේඛනයක් බව දන්වයි."
                },
                {
                    "en": "<head> contains document metadata, page <title>, character encoding (<meta charset=\"UTF-8\">), and style links.",
                    "si": "<head> තුළ පාරදත්ත, මාතෘකාව (<title>), සහ මෝස්තර අඩංගු වේ."
                },
                {
                    "en": "<body> holds visible page content: headings (<h1> to <h6>), paragraphs (<p>), and hyperlinks (<a>).",
                    "si": "<body> තුළ පිටුවේ දිස්වන සියලුම අන්තර්ගතයන් අඩංගු වේ."
                }
            ],
            "keyTakeaway": {
                "en": "Strict nesting and closing of HTML tags prevents visual layout rendering glitches.",
                "si": "ටැග් නිවැරදිව ආරම්භ කිරීම සහ අවසන් කිරීම වෙබ් පිටුවේ නිවැරදි දර්ශනයට අත්‍යවශ්‍ය වේ."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Interactive HTML Form Controls",
                "si": "HTML ආකෘති පත්‍ර (Forms)"
            },
            "bulletPoints": [
                {
                    "en": "<form action=\"submit.php\" method=\"POST\"> encapsulates user input controls.",
                    "si": "<form> ටැගය පරිශීලක දත්ත ලබාගැනීමේ පාලක රඳවා ගනී."
                },
                {
                    "en": "<input type=\"text\"> for text input; <input type=\"password\"> masks characters; <input type=\"radio\"> for single choice.",
                    "si": "input වර්ග: text (පෙළ), password (මුරපද), radio (තනි තේරීම්)."
                },
                {
                    "en": "<input type=\"checkbox\"> for multiple choices; <select> for dropdown menus; <input type=\"submit\"> to transmit data.",
                    "si": "checkbox (බහුවරණ), select (පහළට ඇදෙන මෙනු), submit (යැවීමේ බොත්තම)."
                }
            ],
            "keyTakeaway": {
                "en": "Forms enable bi-directional client-server interaction on the World Wide Web.",
                "si": "ආකෘති පත්‍ර මගින් පරිශීලකයාට දත්ත වෙබ් අඩවිය වෙත ඇතුළත් කිරීමට ඉඩ සලසයි."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "Which input type displays asterisks or dots to mask user password characters as they are typed?",
                "si": "පරිශීලකයා ඇතුළත් කරන අකුරු අන් අයට නොපෙනෙන සේ තිත් හෝ තරු ලකුණු ලෙස ආවරණය කරන input වර්ගය කුමක්ද?"
            },
            "options": [
                {
                    "en": "<input type=\"text\">",
                    "si": "<input type=\"text\">"
                },
                {
                    "en": "<input type=\"password\">",
                    "si": "<input type=\"password\">"
                },
                {
                    "en": "<input type=\"hidden\">",
                    "si": "<input type=\"hidden\">"
                },
                {
                    "en": "<input type=\"mask\">",
                    "si": "<input type=\"mask\">"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "<input type=\"password\"> masks typed characters securely.",
                "si": "<input type=\"password\"> මගින් මුරපද අක්ෂර ආවරණය කරයි."
            },
            "syllabusRef": "G11.5.3"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Which HTML element creates an ordered (numbered: 1, 2, 3) list of syllabus items?",
                "si": "කරුණු අංකනය කරන ලද (1, 2, 3) ලැයිස්තුවක් ලෙස දැක්වීමට නිවැරදි HTML ටැගය කුමක්ද?"
            },
            "options": [
                {
                    "en": "<ul>",
                    "si": "<ul>"
                },
                {
                    "en": "<ol>",
                    "si": "<ol>"
                },
                {
                    "en": "<dl>",
                    "si": "<dl>"
                },
                {
                    "en": "<list>",
                    "si": "<list>"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "<ol> creates an Ordered list; <ul> creates bulleted Unordered lists.",
                "si": "<ol> මගින් අංකිත ලැයිස්තු ද, <ul> මගින් බුලට් ලැයිස්තු ද සාදයි."
            },
            "syllabusRef": "G11.5.4"
        }
    ]
},

  'g11-u5-boss': {
    "id": "g11-u5-boss",
    "unitId": "g11-u5",
    "unitTitle": {
        "en": "Unit 05: Web Designing using HTML & CSS",
        "si": "ඒකකය 05: HTML සහ වෙබ් සංස්කාරක මගින් වෙබ් අඩවි නිර්මාණය"
    },
    "title": {
        "en": "Unit 5 Boss: Web Developer Gauntlet",
        "si": "වෙබ් නිර්මාණ විභාග අභියෝගය"
    },
    "type": "boss_arena",
    "orderIndex": 36,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "CSS Box Model Architecture",
                "si": "CSS Box Model ආකෘතිය"
            },
            "bulletPoints": [
                {
                    "en": "Components (Inside to Outside): Content -> Padding (inner space) -> Border -> Margin (outer space).",
                    "si": "සංරචක: අන්තර්ගතය (Content) -> Padding (ඇතුළත පරතරය) -> Border (මායිම) -> Margin (පිටත පරතරය)."
                },
                {
                    "en": "Padding creates breathing room between content and border; Margin spaces adjacent elements apart.",
                    "si": "Padding මායිම සහ පෙළ අතර ද, Margin යාබද කොටස් අතර ද පරතරය ඇති කරයි."
                }
            ],
            "keyTakeaway": {
                "en": "Mastering the CSS box model is essential for pixel-perfect responsive web design.",
                "si": "වෙබ් පිටුවල නිවැරදි පිරිසැලසුම් සැකසීමට Box Model ආකෘතිය මනාව තේරුම් ගත යුතුය."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Hyperlinks & Multimedia Embedding",
                "si": "හයිපර්ලින්ක් සහ මාධ්‍ය ඇතුළත් කිරීම"
            },
            "bulletPoints": [
                {
                    "en": "Hyperlink anchor: <a href=\"https://example.com\" target=\"_blank\">Anchor Text</a>.",
                    "si": "හයිපර්ලින්ක් ටැගය: <a href=\"ලිපිනය\">සබැඳි පෙළ</a>."
                },
                {
                    "en": "Image embedding: <img src=\"logo.png\" alt=\"Company Logo\" width=\"200\" height=\"100\">.",
                    "si": "රූප ඇතුළත් කිරීම: <img src=\"රූපය\" alt=\"විස්තරය\"> (හිස් ටැගයකි)."
                }
            ],
            "keyTakeaway": {
                "en": "The alt attribute provides accessibility descriptions when images fail to load.",
                "si": "alt ගුණාංගය රූපය නොපෙනෙන අවස්ථාවල විස්තරය පෙන්වීමට යොදා ගනී."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "In the CSS Box Model, what represents the clearance space between the element's content and its border?",
                "si": "CSS Box Model හි අන්තර්ගතය (Content) සහ මායිම (Border) අතර ඇති ඇතුළත පරතරය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Margin",
                    "si": "Margin"
                },
                {
                    "en": "Padding",
                    "si": "Padding"
                },
                {
                    "en": "Outline",
                    "si": "Outline"
                },
                {
                    "en": "Gutter",
                    "si": "Gutter"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Padding clears area inside border around content; Margin clears space outside border.",
                "si": "Border එකට ඇතුළතින් ඇති පරතරය Padding නම් වේ."
            },
            "syllabusRef": "G11.5.5"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Which HTML tag and attribute correctly embeds an image with alternate text?",
                "si": "විකල්ප පෙළක් (Alt text) සහිතව රූපයක් ඇතුළත් කිරීමට නිවැරදි HTML කේතය කුමක්ද?"
            },
            "options": [
                {
                    "en": "<image src=\"pic.jpg\" text=\"Picture\">",
                    "si": "<image src=\"pic.jpg\" text=\"Picture\">"
                },
                {
                    "en": "<img href=\"pic.jpg\" alt=\"Picture\">",
                    "si": "<img href=\"pic.jpg\" alt=\"Picture\">"
                },
                {
                    "en": "<img src=\"pic.jpg\" alt=\"Picture\">",
                    "si": "<img src=\"pic.jpg\" alt=\"Picture\">"
                },
                {
                    "en": "<picture name=\"pic.jpg\">",
                    "si": "<picture name=\"pic.jpg\">"
                }
            ],
            "correctIndex": 2,
            "explanation": {
                "en": "<img src=\"...\" alt=\"...\"> is the valid W3C HTML syntax for embedding images.",
                "si": "<img src=\"...\" alt=\"...\"> යනු සම්මත HTML රූප ටැගයයි."
            },
            "syllabusRef": "G11.5.6"
        },
        {
            "id": "q3",
            "prompt": {
                "en": "Which CSS property is used to change the background color of a web page element?",
                "si": "වෙබ් පිටුවක පසුබිම් වර්ණය වෙනස් කිරීමට භාවිත කරන CSS ගුණාංගය කුමක්ද?"
            },
            "options": [
                {
                    "en": "color",
                    "si": "color"
                },
                {
                    "en": "background-color",
                    "si": "background-color"
                },
                {
                    "en": "bgcolor",
                    "si": "bgcolor"
                },
                {
                    "en": "canvas-color",
                    "si": "canvas-color"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "In CSS, \"background-color\" sets background; \"color\" sets text foreground.",
                "si": "පසුබිම් වර්ණයට background-color ද, අකුරු වර්ණයට color ද භාවිත වේ."
            },
            "syllabusRef": "G11.5.2"
        },
        {
            "id": "q4",
            "prompt": {
                "en": "To open a hyperlink in a brand new blank browser tab, which target attribute is specified?",
                "si": "හයිපර්ලින්ක් එකක් ක්ලික් කළ විට එය නව බ්‍රවුසර් ටැබ් එකක විවෘත කිරීමට යොදන target අගය කුමක්ද?"
            },
            "options": [
                {
                    "en": "target=\"_self\"",
                    "si": "target=\"_self\""
                },
                {
                    "en": "target=\"_blank\"",
                    "si": "target=\"_blank\""
                },
                {
                    "en": "target=\"_newtab\"",
                    "si": "target=\"_newtab\""
                },
                {
                    "en": "target=\"_parent\"",
                    "si": "target=\"_parent\""
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "target=\"_blank\" instructs the browser to spawn a fresh navigation tab.",
                "si": "target=\"_blank\" මගින් නව ටැබ් එකක සබැඳිය විවෘත කරයි."
            },
            "syllabusRef": "G11.5.7"
        }
    ]
},

  'g11-u6-s1': {
    "id": "g11-u6-s1",
    "unitId": "g11-u6",
    "unitTitle": {
        "en": "Unit 06: ICT & Society, Ethics & Legal Issues",
        "si": "ඒකකය 06: තොරතුරු සහ සන්නිවේදන තාක්ෂණය හා සමාජය"
    },
    "title": {
        "en": "Ethics, Cyber Law & Green Computing",
        "si": "ආචාරධර්ම, සයිබර් නීතිය හා හරිත පරිගණනය"
    },
    "type": "concept",
    "orderIndex": 37,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "Cyber Law in Sri Lanka: Computer Crimes & IP Acts",
                "si": "ශ්‍රී ලංකාවේ සයිබර් නීති"
            },
            "bulletPoints": [
                {
                    "en": "Computer Crimes Act No. 24 of 2007: Criminalizes unauthorized access (hacking), data damage, malware injection, and national security sabotage.",
                    "si": "2007 අංක 24 දරන පරිගණක අපරාධ පනත: අනවසර ප්‍රවේශය (Hacking), දත්ත විනාශය සහ අනිෂ්ට මෘදුකාංග පතුරුවාලීම දඬුවම් ලැබිය හැකි වරදක් බවට පත් කරයි."
                },
                {
                    "en": "Intellectual Property Act No. 36 of 2003: Protects software copyrights, prohibiting unauthorized software duplication (Software Piracy).",
                    "si": "2003 අංක 36 දරන බුද්ධිමය දේපළ පනත: මෘදුකාංග කතුහිමිකම් සුරකින අතර මෘදුකාංග කොල්ලකෑම (Piracy) තහනම් කරයි."
                }
            ],
            "keyTakeaway": {
                "en": "Digital crimes carry severe custodial prison terms and financial restitution penalties under Sri Lankan law.",
                "si": "පරිගණක අපරාධ සඳහා ශ්‍රී ලංකා නීතිය යටතේ සිරදඬුවම් සහ දඩ නියම වේ."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Computer Ergonomics & Healthy Working Posture",
                "si": "කාර්යශ්‍රමක්ෂමතාව (Ergonomics) සහ සෞඛ්‍යය"
            },
            "bulletPoints": [
                {
                    "en": "Repetitive Strain Injury (RSI): Musculoskeletal nerve damage caused by improper wrist/hand positioning on keyboards and mice.",
                    "si": "RSI ආබාධය: යතුරුපුවරුව සහ මූසිකය වැරදි ලෙස දිගු වේලාවක් භාවිත කිරීම නිසා අතේ මැණික් කටුව ආශ්‍රිතව ඇතිවන ආබාධයකි."
                },
                {
                    "en": "Computer Vision Syndrome (CVS): Eye strain, dry eyes, and headaches from prolonged unblinking screen glare.",
                    "si": "CVS අක්ෂි රෝගය: දීප්තිමත් තිර දෙස බලා සිටීම නිසා ඇස් වෙහෙසට පත්වීම සහ හිසරදය."
                },
                {
                    "en": "Ergonomic posture: Monitor top edge at eye level, 90-degree elbow and knee angles, lumbar spine support.",
                    "si": "මොනිටරය ඇස් මට්ටමට තබා ගැනීම, වැලමිට සහ දණහිස අංශක 90 ක කෝණයක තබා ගැනීම."
                }
            ],
            "keyTakeaway": {
                "en": "Practicing the 20-20-20 rule (every 20 mins look 20 feet away for 20 secs) prevents eye fatigue.",
                "si": "මනා කාර්යශ්‍රමක්ෂමතා පුරුදු මගින් කායික රෝග රැසක් වළක්වා ගත හැක."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "Which legislation in Sri Lanka criminalizes unauthorized access to computers and intentional malware distribution?",
                "si": "ශ්‍රී ලංකාවේ පරිගණක පද්ධතිවලට අනවසරයෙන් ඇතුළුවීම සහ දත්ත විනාශ කිරීම දඬුවම් ලැබිය හැකි වරදක් බවට පත් කරන පනත කුමක්ද?"
            },
            "options": [
                {
                    "en": "Intellectual Property Act No. 36 of 2003",
                    "si": "2003 අංක 36 දරන බුද්ධිමය දේපළ පනත"
                },
                {
                    "en": "Computer Crimes Act No. 24 of 2007",
                    "si": "2007 අංක 24 දරන පරිගණක අපරාධ පනත"
                },
                {
                    "en": "Consumer Affairs Authority Act",
                    "si": "පාරිභෝගික කටයුතු පිළිබඳ පනත"
                },
                {
                    "en": "Motor Traffic Act",
                    "si": "මෝටර් රථ වාහන පනත"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Computer Crimes Act No. 24 of 2007 establishes offences regarding hacking, unauthorized access, and cyber espionage.",
                "si": "පරිගණක අපරාධ පනත මගින් හැකින් සහ අනිෂ්ට ක්‍රියා නීතියෙන් තහනම් කර ඇත."
            },
            "syllabusRef": "G11.6.1"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "Which ergonomic health disorder is primarily associated with inflammation of wrist tendons from continuous improper mouse clicks?",
                "si": "මූසිකය සහ යතුරුපුවරුව වැරදි ලෙස අඛණ්ඩව භාවිත කිරීම නිසා මැණික් කටුව ආශ්‍රිත ස්නායුවල ඇතිවන ආබාධය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Computer Vision Syndrome (CVS)",
                    "si": "Computer Vision Syndrome (CVS)"
                },
                {
                    "en": "Repetitive Strain Injury (RSI)",
                    "si": "පුනරාවර්තී ආතති ආබාධය (RSI)"
                },
                {
                    "en": "E-waste Lead Poisoning",
                    "si": "ඊ-අපද්‍රව්‍ය ඊයම් විෂවීම"
                },
                {
                    "en": "Malware infection",
                    "si": "මෘදුකාංග ආසාදනය"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "RSI develops from repeated biomechanical stress on hand and wrist tendons without rest.",
                "si": "RSI යනු පුනරාවර්තී චලන නිසා අතේ ඇතිවන ආබාධයකි."
            },
            "syllabusRef": "G11.6.2"
        }
    ]
},

  'g11-u6-boss': {
    "id": "g11-u6-boss",
    "unitId": "g11-u6",
    "unitTitle": {
        "en": "Unit 06: ICT & Society, Ethics & Legal Issues",
        "si": "ඒකකය 06: තොරතුරු සහ සන්නිවේදන තාක්ෂණය හා සමාජය"
    },
    "title": {
        "en": "Unit 6 Boss: ICT & Society Master Arena",
        "si": "සමාජය හා ආචාරධර්ම විභාග අභියෝගය"
    },
    "type": "boss_arena",
    "orderIndex": 38,
    "theoryCards": [
        {
            "id": "c1",
            "title": {
                "en": "E-Waste Toxicity & Heavy Metals",
                "si": "ඊ-අපද්‍රව්‍ය (E-Waste) සහ විෂ සහිත බැර ලෝහ"
            },
            "bulletPoints": [
                {
                    "en": "E-Waste: Discarded electronic equipment (CRTs, batteries, motherboards, mobile phones).",
                    "si": "ඊ-අපද්‍රව්‍ය: බැහැර කරන ලද ඉලෙක්ට්‍රොනික උපකරණ සහ පරිපථ."
                },
                {
                    "en": "Hazardous metals: Lead (Pb - causes brain/nervous damage), Mercury (Hg - kidney failure), Cadmium (Cd - bone/lung damage).",
                    "si": "විෂ සහිත ලෝහ: ඊයම් (ස්නායු හානි), රසදිය (වකුගඩු හානි), කැඩ්මියම් (ඇටකටු හානි)."
                },
                {
                    "en": "Improper burning releases toxic dioxins into groundwater and atmospheric food chains.",
                    "si": "අක්‍රමවත් ලෙස පිළිස්සීමෙන් ජලයට සහ පසට විෂ ද්‍රව්‍ය එක් වේ."
                }
            ],
            "keyTakeaway": {
                "en": "E-waste must be disposed through licensed certified recycling e-waste management facilities.",
                "si": "ඊ-අපද්‍රව්‍ය විධිමත් ප්‍රතිචක්‍රීකරණ මධ්‍යස්ථාන වෙත පමණක් භාර දිය යුතුය."
            }
        },
        {
            "id": "c2",
            "title": {
                "en": "Green Computing & The 3R Concept",
                "si": "හරිත පරිගණනය (Green Computing) සහ 3R සංකල්පය"
            },
            "bulletPoints": [
                {
                    "en": "Reduce: Minimize energy consumption (sleep mode, ENERGY STAR hardware, paperless workflows).",
                    "si": "අඩු කිරීම (Reduce): බලශක්තිය හා කඩදාසි භාවිතය අවම කිරීම."
                },
                {
                    "en": "Reuse: Refurbish, donate, or upgrade functioning hardware instead of discarding.",
                    "si": "නැවත භාවිතය (Reuse): පැරණි පරිගණක පරිත්‍යාග කිරීම හෝ වෙනත් කාර්යයන්ට යෙදවීම."
                },
                {
                    "en": "Recycle: Disassemble broken electronics to salvage precious raw metals (Gold, Copper, Silver).",
                    "si": "ප්‍රතිචක්‍රීකරණය (Recycle): අබලන් උපකරණවලින් ලෝහ වෙන් කර නැවත භාවිතයට ගැනීම."
                }
            ],
            "keyTakeaway": {
                "en": "Green computing ensures technological progress does not compromise ecological sustainability.",
                "si": "හරිත පරිගණනය මගින් පරිසර හිතකාමී තාක්ෂණික භාවිතයක් තහවුරු කරයි."
            }
        }
    ],
    "quizQuestions": [
        {
            "id": "q1",
            "prompt": {
                "en": "Which heavy metal found in discarded Cathode Ray Tube (CRT) monitors damages the human central nervous system if leaked into soil?",
                "si": "පැරණි CRT මොනිටරවල අඩංගු වන, පසට කාන්දු වුවහොත් මිනිස් මධ්‍ය ස්නායු පද්ධතියට හානි පමුණුවන විෂ සහිත බැර ලෝහය කුමක්ද?"
            },
            "options": [
                {
                    "en": "Lead (Pb)",
                    "si": "ඊයම් (Lead - Pb)"
                },
                {
                    "en": "Silicon (Si)",
                    "si": "සිලිකන් (Si)"
                },
                {
                    "en": "Carbon (C)",
                    "si": "කාබන් (C)"
                },
                {
                    "en": "Iron (Fe)",
                    "si": "යකඩ (Fe)"
                }
            ],
            "correctIndex": 0,
            "explanation": {
                "en": "CRT glass contains significant quantities of toxic lead to shield X-rays, posing severe environmental contamination hazards.",
                "si": "CRT මොනිටරවල විශාල වශයෙන් විෂ සහිත ඊයම් (Lead) අඩංගු වේ."
            },
            "syllabusRef": "G11.6.3"
        },
        {
            "id": "q2",
            "prompt": {
                "en": "In Green Computing, donating an older working desktop computer to a rural village library exemplifies which 3R pillar?",
                "si": "හරිත පරිගණනයේදී පැරණි ක්‍රියාකාරී පරිගණකයක් ග්‍රාමීය පුස්තකාලයකට පරිත්‍යාග කිරීම අයත් වන්නේ 3R සංකල්පයේ කුමන පියවරටද?"
            },
            "options": [
                {
                    "en": "Reduce",
                    "si": "අඩු කිරීම (Reduce)"
                },
                {
                    "en": "Reuse",
                    "si": "නැවත භාවිතය (Reuse)"
                },
                {
                    "en": "Recycle",
                    "si": "ප්‍රතිචක්‍රීකරණය (Recycle)"
                },
                {
                    "en": "Reject",
                    "si": "ප්‍රතික්ෂේප කිරීම"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Reusing extends equipment lifespan, delaying environmental disposal impacts.",
                "si": "නැවත භාවිතය (Reuse) මගින් පරිගණකයේ ආයු කාලය වැඩි කරයි."
            },
            "syllabusRef": "G11.6.4"
        },
        {
            "id": "q3",
            "prompt": {
                "en": "What is Software Piracy?",
                "si": "මෘදුකාංග කොල්ලකෑම (Software Piracy) යනු කුමක්ද?"
            },
            "options": [
                {
                    "en": "Buying a legal license from software manufacturer",
                    "si": "නිල බලපත්‍රයක් මිලදී ගැනීම"
                },
                {
                    "en": "Unauthorized copying, duplication, distribution, or commercial sale of copyrighted software without a license",
                    "si": "හිමිකරුගේ අවසරයකින් තොරව කතුහිමිකම් ඇති මෘදුකාංග අනවසරයෙන් පිටපත් කිරීම, බෙදා හැරීම හෝ භාවිත කිරීම"
                },
                {
                    "en": "Developing open source software on Linux",
                    "si": "විවෘත මූලාශ්‍ර මෘදුකාංග නිර්මාණය"
                },
                {
                    "en": "Scanning computers for trojan horses",
                    "si": "වෛරස් පරීක්ෂා කිරීම"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "Software Piracy violates intellectual property rights by duplicating copyrighted software without legal authorization.",
                "si": "අනවසරයෙන් මෘදුකාංග පිටපත් කිරීම සහ බෙදාහැරීම මෘදුකාංග කොල්ලකෑම වේ."
            },
            "syllabusRef": "G11.6.1"
        },
        {
            "id": "q4",
            "prompt": {
                "en": "Which ergonomic guideline helps prevent Computer Vision Syndrome (CVS) when working long hours at computer screens?",
                "si": "පරිගණක තිරයක් ඉදිරියේ වැඩි වේලාවක් වැඩ කිරීමේදී CVS අක්ෂි රෝගය වළක්වා ගැනීමට නිර්දේශිත නිවැරදි පුරුද්ද කුමක්ද?"
            },
            "options": [
                {
                    "en": "Staring continuously without blinking for 4 hours",
                    "si": "ඇසිපිය නොහෙළා පැය 4 ක් බලා සිටීම"
                },
                {
                    "en": "The 20-20-20 rule: Every 20 minutes look at an object 20 feet away for 20 seconds",
                    "si": "20-20-20 රීතිය: සෑම විනාඩි 20 කට වරක්ම අඩි 20 ක් දුරින් ඇති වස්තුවක් දෙස තත්පර 20 ක් බැලීම"
                },
                {
                    "en": "Turning off all room lights so only the monitor screen glares",
                    "si": "කාමරයේ විදුලි පහන් සියල්ල නිවා දැමීම"
                },
                {
                    "en": "Placing the monitor 2 inches away from your face",
                    "si": "මොනිටරය මුහුණට අඟල් 2 ක් ළඟින් තබා ගැනීම"
                }
            ],
            "correctIndex": 1,
            "explanation": {
                "en": "The 20-20-20 rule rests focal ciliary eye muscles, relieving strain and dryness.",
                "si": "20-20-20 රීතිය අනුගමනය කිරීමෙන් ඇස් වෙහෙසට පත්වීම වළක්වා ගත හැක."
            },
            "syllabusRef": "G11.6.2"
        }
    ]
},

};

/**
 * Retrieves a LevelNode by ID, with graceful fallback.
 */
export function getLevelNode(nodeId: string): LevelNode | undefined {
  return LEVEL_NODES[nodeId];
}

/**
 * Returns the next node ID in the curriculum quest progression.
 */
export function getNextNodeId(currentNodeId: string): string | null {
  const node = LEVEL_NODES[currentNodeId];
  if (!node) return null;

  // Sort canonical nodes by orderIndex
  const uniqueNodes = Array.from(
    new Map(Object.values(LEVEL_NODES).map((n) => [n.orderIndex, n])).values()
  ).sort((a, b) => a.orderIndex - b.orderIndex);

  const currentIndex = uniqueNodes.findIndex((n) => n.orderIndex === node.orderIndex);

  if (currentIndex !== -1 && currentIndex + 1 < uniqueNodes.length) {
    return uniqueNodes[currentIndex + 1].id;
  }
  return null;
}
