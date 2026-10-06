export interface TextBlock {
  id: string;
  en: string;
  si: string;
  highlightTerm?: string;
}

export interface SubTopic {
  id: string;
  number: string;
  titleEn: string;
  titleSi: string;
  summaryEn: string;
  summarySi: string;
  blocks: TextBlock[];
  examples?: {
    id: string;
    titleEn: string;
    titleSi: string;
    contentEn?: string;
    contentSi?: string;
    isInteractiveWidget?: 'nic-decoder' | 'system-diagram' | 'timeline-slider' | 'number-converter' | 'logic-gate';
  }[];
  tableData?: {
    headers: { en: string; si: string }[];
    rows: { [key: string]: { en: string; si: string } }[];
  };
  checkpointQuiz?: {
    id: string;
    questionEn: string;
    questionSi: string;
    options: {
      id: string;
      en: string;
      si: string;
    }[];
    correctOptionId: string;
    explanationEn: string;
    explanationSi: string;
  };
}

export interface GlossaryTerm {
  termEn: string;
  termSi: string;
  defEn: string;
  defSi: string;
  exampleEn: string;
  exampleSi: string;
}

export const LESSON_01_DATA: {
  titleEn: string;
  titleSi: string;
  overviewEn: string;
  overviewSi: string;
  subtopics: SubTopic[];
  glossary: GlossaryTerm[];
} = {
  titleEn: "Basic Concepts of Information and Communication Technology",
  titleSi: "තොරතුරු හා සන්නිවේදන තාක්ෂණයේ මූලික සංකල්ප",
  overviewEn: "This study guide provides verbatim, dual-medium coverage of Grade 10 - Lesson 01 from the official Sri Lankan O/L ICT curriculum. All theory content and exam questions are extracted word-for-word from the Grade 10 English Medium Textbook, Grade 10 Sinhala Medium Textbook, and official G.C.E. O/L past examination papers (2020–2025).",
  overviewSi: "මෙම අධ්‍යයන මාර්ගෝපදේශය ශ්‍රී ලංකා අධ්‍යාපන ප්‍රකාශන දෙපාර්තමේන්තුවේ 10 ශ්‍රේණිය ICT පෙළපොත් (ඉංග්‍රීසි හා සිංහල මාධ්‍ය) සහ 2020-2025 සාමාන්‍ය පෙළ විභාග ප්‍රශ්න පත්‍ර ඇසුරින් සකසන ලද නිල ද්විභාෂා කෙටි සටහන් සහ ප්‍රශ්නාවලියයි.",
  glossary: [
    {
      termEn: "Data",
      termSi: "දත්ත",
      defEn: "The numbers, words, images and symbols which do not bear a meaning, when standing alone are called data.",
      defSi: "වෙන් වෙන් වශයෙන් ගත් කල අර්ථයක් දීමට නොහැකි අංක, වචන සහ සංකේත දත්ත (Data) ලෙස හැඳින්වේ.",
      exampleEn: "Marks: 78, 90, 67 or student name 'Ravi'",
      exampleSi: "ලකුණු: 78, 90, 67 හෝ සිසුවාගේ නම 'රවී'"
    },
    {
      termEn: "Information",
      termSi: "තොරතුරු",
      defEn: "While we can arrive at meaningful information by arranging and processing data, we can use them to make decisions also.",
      defSi: "දත්ත ගොනු කිරීමෙන් සහ සකස් කිරීමෙන් අර්ථවත් තොරතුරු (Information) ලබා ගත හැකි වන අතර එම තොරතුරු, තීරණ ගැනීම සඳහා උපකාරී වේ.",
      exampleEn: "Total score, Average mark, Class rank (1st, 2nd)",
      exampleSi: "මුළු ලකුණු එකතුව, සාමාන්‍යය, පන්තියේ ස්ථානය"
    },
    {
      termEn: "Information System",
      termSi: "තොරතුරු පද්ධතිය",
      defEn: "A system is a combination of components that work together to fulfil a task. The purpose of a system is to receive data, process and store them and provide the results when required.",
      defSi: "පද්ධතියක් යනු යම් කාර්යයක් ඉටු කර ගැනීම සඳහා එකිනෙක හා සම්බන්ධ වී ක්‍රියාකරන සංරචක එකතුවකි. දත්ත ලබා ගැනීම, සැකසීම, තැන්පත් කිරීම සහ අවශ්‍ය වූ විට ප්‍රතිඵල ලබා දීම මෙහි අරමුණයි.",
      exampleEn: "School attendance system using fingerprint scanner, ATM banking system",
      exampleSi: "ඇඟිලි සලකුණු යන්ත්‍රය සහිත පාසල් පැමිණීමේ පද්ධතිය, ATM පද්ධතිය"
    },
    {
      termEn: "Relevancy",
      termSi: "අදාළ බව",
      defEn: "Information must be directly relevant to the current decision or requirement, without unnecessary details.",
      defSi: "අවශ්‍යතාවට හෝ තීරණයට සෘජුවම සම්බන්ධ තොරතුරු පමණක් අඩංගු විය යුතුය.",
      exampleEn: "Submitting only the highest educational qualification for a job interview instead of all details from Grade 1.",
      exampleSi: "ඉහළම අධ්‍යාපන සුදුසුකම පමණක් ඉදිරිපත් කිරීමට ඇති විට, 1 ශ්‍රේණියේ සිට සියලු අධ්‍යාපනික තොරතුරු ඉදිරිපත් කිරීම අවශ්‍ය නොවේ."
    },
    {
      termEn: "Telemedicine",
      termSi: "ටෙලිමෙඩිසින්",
      defEn: "Patients in remote locations connecting to hospital specialist units through the use of ICT.",
      defSi: "දුරස්ථ ස්ථානවල සිටින රෝගීන් ICT භාවිතයෙන් රෝහල් විශේෂඥ ඒකක වෙත සම්බන්ධ වීම.",
      exampleEn: "Video consultation with a specialist cardiologist in Colombo from a rural clinic in Jaffna.",
      exampleSi: "දුරස්ථ ග්‍රාමීය රෝහලක සිට කොළඹ ජාතික රෝහලේ විශේෂඥ වෛද්‍යවරයකුගෙන් උපදෙස් ලබා ගැනීම."
    },
    {
      termEn: "Learning Management System (LMS)",
      termSi: "ඉගෙනුම් කළමනාකරණ පද්ධතිය (LMS)",
      defEn: "A software application used to manage educational activities such as courses, assignments, notes, supervision, evaluation, and forums.",
      defSi: "අධ්‍යාපනික පාඨමාලා, පැවරුම්, ඇගයීම් සහ තොරතුරු කළමනාකරණය කරන මෘදුකාංග පද්ධතියකි.",
      exampleEn: "Moodle, Google Classroom, SchoolNet",
      exampleSi: "Moodle, Google Classroom, SchoolNet"
    },
    {
      termEn: "Analytical Engine",
      termSi: "විශ්ලේෂණ එන්ජිම (Analytical Engine)",
      defEn: "A mechanical general-purpose computer designed by Charles Babbage in 1837 based on Input, Process, Output, and Store.",
      defSi: "චාල්ස් බැබේජ් විසින් ආදානය, සැකසීම, ප්‍රතිදානය සහ ආචයනය යන සංකල්ප මත නිර්මාණය කළ යාන්ත්‍රික යන්ත්‍රයයි.",
      exampleEn: "Charles Babbage is honored as the 'Father of Computing'.",
      exampleSi: "මෙම සංකල්පය නිසා චාල්ස් බැබේජ් 'පරිගණකයේ පියා' ලෙස හැඳින්වේ."
    }
  ],
  subtopics: [
    {
      id: "1.1",
      number: "1.1",
      titleEn: "Data and Information",
      titleSi: "දත්ත සහ තොරතුරු",
      summaryEn: "Understanding raw data vs processed meaningful information and decision making.",
      summarySi: "අමුද්‍රව්‍යමය දත්ත සහ සැකසූ අර්ථවත් තොරතුරු අතර වෙනස හා තීරණ ගැනීම.",
      blocks: [
        {
          id: "b1-1",
          en: "The numbers, words, images and symbols which do not bear a meaning, when standing alone are called data.",
          si: "වෙන් වෙන් වශයෙන් ගත් කල අර්ථයක් දීමට නොහැකි අංක, වචන සහ සංකේත දත්ත (Data) ලෙස හැඳින්වේ.",
          highlightTerm: "Data"
        },
        {
          id: "b1-2",
          en: "While we can arrive at meaningful information by arranging and processing data, we can use them to make decisions also.",
          si: "දත්ත ගොනු කිරීමෙන් සහ සකස් කිරීමෙන් අර්ථවත් තොරතුරු (Information) ලබා ගත හැකි වන අතර එම තොරතුරු, තීරණ ගැනීම සඳහා අපට උපකාරී වනු ඇත.",
          highlightTerm: "Information"
        }
      ],
      examples: [
        {
          id: "ex1-1",
          titleEn: "Textbook Example 1: Term Test Results",
          titleSi: "පෙළපොත් උදාහරණ 1: වාර විභාග ලකුණු",
          contentEn: "It will be difficult to get an idea about the subjects and marks if names and marks are written separately on term test results. Ravi 78, 90, 79, 67, 76, 98 | Rizwan 87, 70, 80, 75, 80, 80 | Krishan 76, 78, 67, 80, 79, 76. In this table, name and subjects such as language, maths are data and total, average and rank are information. The teacher uses this to take important decisions.",
          contentSi: "පාසල් වාර විභාගය අවසානයේ දී පන්තියේ ළමයින්ගේ නම් සහ ලකුණු වෙන වෙන ම සටහන් කළහොත් එක්වර විෂය හා ලකුණු පිළිබඳ අදහසක් ලබා ගැනීමට නොහැකි වේ. රවී 78, 90, 79, 67, 76, 98 | රිස්වාන් 87, 70, 80, 75, 80, 80 | ක්‍රිෂාන් 76, 78, 67, 80, 79, 76. මෙහි නම, විෂයයන් (භාෂාව, ගණිතය...) දත්ත වන අතර එකතුව, සාමාන්‍යය, ස්ථානය තොරතුරු වේ. ගුරුවරයාට වැදගත් තීරණ ගැනීමට මෙය උපකාරී වේ."
        },
        {
          id: "ex1-2",
          titleEn: "Textbook Example 2: Analyzing National Identity Card (NIC) Number",
          titleSi: "පෙළපොත් උදාහරණ 2: ජාතික හැඳුනුම්පත් අංකය විශ්ලේෂණය",
          contentEn: "Take a look at the numbers in a National Identity Card. At once it looks as if it is just a number. But when you analyze it, you can obtain some meaningful information. When the NIC number is given one could find the person's age and gender: The year of birth by first two numbers; Number 0-4 denotes male, and number 5-9 denotes female.",
          contentSi: "ජාතික හැඳුනුම්පතක ඇති අංක දෙස බලන්න. එක්වරම පෙනෙන්නේ එය අංකයක් පමණක් ලෙසය. නමුත් එය විශ්ලේෂණය කළ විට අර්ථවත් තොරතුරු ලබාගත හැක. ජාතික හැඳුනුම්පත් අංකය දුන් විට පුද්ගලයාගේ වයස සහ ලිංගය සොයාගත හැක: පළමු අංක දෙකෙන් උපන් වර්ෂය; 0-4 දක්වා අංකවලින් පුරුෂ බව සහ 5-9 දක්වා අංකවලින් ස්ත්‍රී බව.",
          isInteractiveWidget: 'nic-decoder'
        }
      ],
      checkpointQuiz: {
        id: "quiz-1.1",
        questionEn: "When the digits of a National Identity Card (NIC) are analyzed to determine a person's birth year and gender, what does this process represent?",
        questionSi: "ජාතික හැඳුනුම්පත් අංකයක් (NIC) විශ්ලේෂණය කර පුද්ගලයෙකුගේ උපන් වර්ෂය සහ ලිංගය සොයා ගැනීමේ ක්‍රියාවලියෙන් නිරූපණය වන්නේ කුමක්ද?",
        options: [
          { id: "opt1", en: "Raw data converted into meaningful information", si: "අමුදත්ත අර්ථවත් තොරතුරු බවට සැකසීම" },
          { id: "opt2", en: "Information being converted into data", si: "තොරතුරු නැවත දත්ත බවට පත් කිරීම" },
          { id: "opt3", en: "Direct transmission of hardware signals", si: "දෘඩාංග සංඥා සෘජුව සම්ප්‍රේෂණය කිරීම" },
          { id: "opt4", en: "A demerit of modern communication", si: "නූතන සන්නිවේදනයේ අවාසියක්" }
        ],
        correctOptionId: "opt1",
        explanationEn: "Correct! The digits standing alone are raw data, while the decoded birth year, age, and gender represent meaningful processed information.",
        explanationSi: "නිවැරදියි! තනිව ඇති අංක දත්ත වන අතර, විශ්ලේෂණයෙන් ලබා ගන්නා උපන් වර්ෂය, වයස සහ ලිංගය අර්ථවත් තොරතුරු වේ."
      }
    },
    {
      id: "1.2",
      number: "1.2",
      titleEn: "Information System",
      titleSi: "තොරතුරු පද්ධතිය",
      summaryEn: "System concepts, Input -> Process -> Output -> Storage, and the computer as an information system.",
      summarySi: "පද්ධති සංකල්පය, ආදානය -> සැකසීම -> ප්‍රතිදානය -> ආචයනය සහ පරිගණකය තොරතුරු පද්ධතියක් ලෙස.",
      blocks: [
        {
          id: "b2-1",
          en: "A system is a combination of components that work together to fulfil a task.",
          si: "පද්ධතියක් යනු යම් කාර්යයක් ඉටු කර ගැනීම සඳහා එකිනෙක හා සම්බන්ධ වී ක්‍රියාකරන සංරචක එකතුවකි.",
          highlightTerm: "System"
        },
        {
          id: "b2-2",
          en: "Submitting data for processing is called 'Input' and the result we get after processing is called 'Output.' We can call the collection of all these components above an 'Information System.'",
          si: "සැකසීම සඳහා දත්ත ලබා දීම 'ආදානය' (Input) ලෙසද, සැකසීමෙන් පසුව ලබා ගන්නා ප්‍රතිඵලය 'ප්‍රතිදානය' (Output) ලෙසද හැඳින්වේ. මෙම සියලු සංරචක එකතුව 'තොරතුරු පද්ධතියක්' ලෙස හැඳින්විය හැක.",
          highlightTerm: "Input & Output"
        },
        {
          id: "b2-3",
          en: "Storing data is an important task in information system. In some occasions, both input and stored data are used to obtain information. Hence the purpose of a system is to receive data, process and store them and provide the results when required.",
          si: "දත්ත තැන්පත් කිරීම (Storing) ද තොරතුරු පද්ධතියක වැදගත් කාර්යයකි. සමහර අවස්ථාවල දී ආදානය කරන ලද මෙන්ම තැන්පත් කරන ලද දත්ත ද තොරතුරු ලබා ගැනීමට භාවිත කෙරේ. එබැවින් පද්ධතියක අරමුණ වන්නේ දත්ත ලබා ගැනීම, සැකසීම, තැන්පත් කිරීම සහ අවශ්‍ය වූ විට ප්‍රතිඵල ලබා දීමයි.",
          highlightTerm: "Storing"
        },
        {
          id: "b2-4",
          en: "A computer processes the data that we input, according to the commands and provide us with the required information in the desired form. Therefore, we call the computer an 'Information System'.",
          si: "පරිගණකය මගින් අප ඇතුළත් කරන දත්ත, අණදීම්වලට අනුව සකස් කර අවශ්‍ය තොරතුරු අවශ්‍ය ආකාරයට ලබා දෙයි. එබැවින් පරිගණකය 'තොරතුරු පද්ධතියක්' ලෙස හැඳින්වේ.",
          highlightTerm: "Computer as an Information System"
        }
      ],
      examples: [
        {
          id: "ex2-1",
          titleEn: "Interactive Information System Block Diagram",
          titleSi: "තොරතුරු පද්ධතියක ක්‍රියාකාරී ආකෘතිය (Interactive Diagram)",
          contentEn: "Explore the feedback and data flow between Input, Processing, Storage, and Output.",
          contentSi: "ආදානය, සැකසීම, ආචයනය සහ ප්‍රතිදානය අතර දත්ත ගලායාම අත්හදා බලන්න.",
          isInteractiveWidget: 'system-diagram'
        }
      ],
      checkpointQuiz: {
        id: "quiz-1.2",
        questionEn: "Which of the following describes the core functions of any Information System?",
        questionSi: "ඕනෑම තොරතුරු පද්ධතියක මූලික කාර්යයන් වඩාත් නිවැරදිව විස්තර කරන්නේ කුමක්ද?",
        options: [
          { id: "opt1", en: "Input, Process, Output and Storage", si: "ආදානය, සැකසීම, ප්‍රතිදානය සහ ආචයනය" },
          { id: "opt2", en: "Code, Compile, Execute and Debug", si: "කේතනය, සම්පාදනය, ක්‍රියාත්මක කිරීම සහ දෝෂ නිවැරදි කිරීම" },
          { id: "opt3", en: "Select, Copy, Paste and Save", si: "තේරීම, පිටපත් කිරීම, ඇලවීම සහ සුරැකීම" },
          { id: "opt4", en: "Download, Install, Run and Delete", si: "බාගත කිරීම, ස්ථාපනය, ධාවනය සහ මකා දැමීම" }
        ],
        correctOptionId: "opt1",
        explanationEn: "Correct! The 4 pillars of an Information System are Input, Processing, Output, and Storing data.",
        explanationSi: "නිවැරදියි! තොරතුරු පද්ධතියක ප්‍රධාන කාර්යයන් වන්නේ ආදානය, සැකසීම, ප්‍රතිදානය සහ තැන්පත් කිරීමයි."
      }
    },
    {
      id: "1.3",
      number: "1.3",
      titleEn: "Characteristics of Quality Information",
      titleSi: "ගුණාත්මක තොරතුරක ලක්ෂණ",
      summaryEn: "The 5 textbook characteristics: Relevancy, Completeness, Accuracy, Timeliness, Cost Effectiveness.",
      summarySi: "පෙළපොතේ දැක්වෙන ප්‍රධාන ලක්ෂණ 5: අදාළ බව, සම්පූර්ණ බව, නිවැරදි බව, කාලීන බව, පිරිවැය සාපේක්ෂතාව.",
      blocks: [
        {
          id: "b3-1",
          en: "1. Relevancy: It is not needed to submit all the academic information from Grade 1 onwards, when the requirement is to submit only the highest educational qualification.",
          si: "1. අදාළ බව (Relevancy): ඉහළම අධ්‍යාපන සුදුසුකම පමණක් ඉදිරිපත් කිරීමට ඇති විට, 1 ශ්‍රේණියේ සිට සියලු අධ්‍යාපනික තොරතුරු ඉදිරිපත් කිරීම අවශ්‍ය නොවේ.",
          highlightTerm: "Relevancy"
        },
        {
          id: "b3-2",
          en: "2. Completeness: Taking information from only a small group of people in order to arrive at the PCI (Per Capita Income) of a country is not sufficient. Incomplete information could lead to drawing wrong conclusions.",
          si: "2. සම්පූර්ණ බව (Completeness): රටක ඒකපුද්ගල ආදායම (PCI) තීරණය කිරීමට කුඩා පිරිසකගෙන් පමණක් තොරතුරු ලබා ගැනීම ප්‍රමාණවත් නොවේ. අසම්පූර්ණ තොරතුරු වැරදි නිගමනවලට එළඹීමට හේතු විය හැක.",
          highlightTerm: "Completeness"
        },
        {
          id: "b3-3",
          en: "3. Accuracy: If a doctor gets wrong information about the patient's health, it could be harmful to the patient.",
          si: "3. නිවැරදි බව (Accuracy): රෝගියෙකුගේ සෞඛ්‍යය පිළිබඳව වෛද්‍යවරයාට වැරදි තොරතුරක් ලැබුණහොත් එය රෝගියාට හානිකර විය හැක.",
          highlightTerm: "Accuracy"
        },
        {
          id: "b3-4",
          en: "4. Timeliness: The information must always be updated. Today's weather report may not be suitable to decide on tomorrow's weather.",
          si: "4. කාලීන බව (Timeliness): තොරතුරු සෑම විටම යාවත්කාලීන විය යුතුය. අද කාලගුණ වාර්තාව හෙට කාලගුණය තීරණය කිරීමට නුසුදුසු විය හැක.",
          highlightTerm: "Timeliness"
        },
        {
          id: "b3-5",
          en: "5. Cost Effectiveness: If an organization spends money more than the profits to collect some information in order to increase profits, it would be a business loss to the organization.",
          si: "5. පිරිවැය සාපේක්ෂතාව (Cost Effectiveness): ලාභය වැඩි කර ගැනීමට තොරතුරු රැස් කිරීමට ලාභයට වඩා වැඩි මුදලක් වැය කරන්නේ නම් එය ආයතනයට ව්‍යාපාරික පාඩුවකි.",
          highlightTerm: "Cost Effectiveness"
        }
      ],
      checkpointQuiz: {
        id: "quiz-1.3",
        questionEn: "A company spends Rs. 500,000 on market survey data, but only gains Rs. 100,000 in additional profit as a result. Which characteristic of quality information was violated?",
        questionSi: "ආයතනයක් වෙළඳපල සමීක්ෂණ තොරතුරු රැස් කිරීමට රු. 500,000 ක් වියදම් කළද, ඉන් ලැබුණු අමතර ලාභය රු. 100,000 කි. මෙහිදී කඩවී ඇති ගුණාත්මක තොරතුරක ලක්ෂණය කුමක්ද?",
        options: [
          { id: "opt1", en: "Cost Effectiveness", si: "පිරිවැය සාපේක්ෂතාව (Cost Effectiveness)" },
          { id: "opt2", en: "Accuracy", si: "නිවැරදි බව (Accuracy)" },
          { id: "opt3", en: "Timeliness", si: "කාලීන බව (Timeliness)" },
          { id: "opt4", en: "Relevancy", si: "අදාළ බව (Relevancy)" }
        ],
        correctOptionId: "opt1",
        explanationEn: "Correct! Information must be cost-effective — the benefits gained from the information should outweigh the cost to collect it.",
        explanationSi: "නිවැරදියි! තොරතුරු රැස්කිරීම සඳහා දරන පිරිවැයට වඩා ඉන් ලැබෙන ප්‍රතිලාභය වැඩි විය යුතුය."
      }
    },
    {
      id: "1.4",
      number: "1.4",
      titleEn: "Information and Communication Technology (ICT)",
      titleSi: "තොරතුරු හා සන්නිවේදන තාක්ෂණය",
      summaryEn: "Definition of ICT, Communication of Information, and Historical conversion of data.",
      summarySi: "ICT හි නිර්වචනය, තොරතුරු සන්නිවේදනය සහ දත්ත තොරතුරු බවට පත් කිරීමේ තාක්ෂණය.",
      blocks: [
        {
          id: "b4-1",
          en: "When we exchange the information among different people or among different systems, it is called communication of information.",
          si: "විවිධ පුද්ගලයන් අතර හෝ විවිධ පද්ධති අතර තොරතුරු හුවමාරු කර ගැනීම තොරතුරු සන්නිවේදනය ලෙස හැඳින්වේ.",
          highlightTerm: "Communication of Information"
        },
        {
          id: "b4-2",
          en: "Man has been processing and exchanging information since ancient times. Today, technology is used in various ways to convert data into information and then to exchange them. This is called Information and Communication Technology (ICT).",
          si: "අතීතයේ සිටම මිනිසා තොරතුරු සකස් කරමින් හා හුවමාරු කරගනිමින් සිටියේය. අද වන විට දත්ත තොරතුරු බවට පත් කිරීමට සහ ඒවා හුවමාරු කර ගැනීමට විවිධ ආකාරයෙන් තාක්ෂණය භාවිත වේ. මෙය තොරතුරු හා සන්නිවේදන තාක්ෂණය (ICT) ලෙස හැඳින්වේ.",
          highlightTerm: "ICT"
        }
      ]
    },
    {
      id: "1.5",
      number: "1.5",
      titleEn: "Applications of ICT",
      titleSi: "තොරතුරු හා සන්නිවේදන තාක්ෂණයේ යෙදීම්",
      summaryEn: "e-Government (G2C, G2B, G2E, G2G), Education, Health Sector, Business, and Transport.",
      summarySi: "e-රාජ්‍ය සේවා (G2C, G2B, G2E, G2G), අධ්‍යාපනය, සෞඛ්‍ය ක්ෂේත්‍රය, ව්‍යාපාර සහ ප්‍රවාහනය.",
      blocks: [
        {
          id: "b5-1",
          en: "e-Government: When a government communicates with its citizens, companies, Government and Non-Government Organizations and with other Governments (of different countries) using ICT, it is called e-Government.",
          si: "e-රාජ්‍ය සේවාව (e-Government): රජය විසින් පුරවැසියන්, ව්‍යාපාරික ආයතන, රාජ්‍ය හා රාජ්‍ය නොවන සංවිධාන සහ වෙනත් රටවල රජයන් සමඟ ICT භාවිතයෙන් සන්නිවේදනය කිරීම e-රාජ්‍ය සේවාව නම් වේ.",
          highlightTerm: "e-Government"
        },
        {
          id: "b5-2",
          en: "• G2C (Government to Citizen): Payment of utility bills, Renewal of vehicle licenses, Government information services, Constitution, Legal System, Map of Sri Lanka.\n• G2G (Government to Government): Diplomatic and Visa Information, Government Law, Aid for Tourists, Sri Lanka custom information.\n• G2B (Government to Business): Payment Services, Banking Information, Business Registration, Business and Investment.\n• G2E (Government to Employee): Forms, Gazettes, Circulars, Information on loan facilities for Government workers.",
          si: "• G2C (රාජ්‍යයෙන් පුරවැසියාට): උපයෝගිතා ගාස්තු ගෙවීම, රථවාහන බලපත්‍ර අලුත් කිරීම, රජයේ තොරතුරු සේවා, ආණ්ඩුක්‍රම ව්‍යවස්ථාව.\n• G2G (රාජ්‍යයෙන් රාජ්‍යයට): තානාපති හා වීසා තොරතුරු, රජයේ නීති, සංචාරක ආධාර, රේගු තොරතුරු.\n• G2B (රාජ්‍යයෙන් ව්‍යාපාරවලට): ගෙවීම් සේවා, බැංකු තොරතුරු, ව්‍යාපාර ලියාපදිංචිය.\n• G2E (රාජ්‍යයෙන් සේවකයාට): අයදුම්පත්, ගැසට් පත්‍ර, චක්‍රලේඛ, ණය පහසුකම් තොරතුරු.",
          highlightTerm: "e-Gov Categories"
        },
        {
          id: "b5-3",
          en: "Applications in Education:\n• In the classroom: Presentations, Videos on experiments, Creation of images and video, Desktop publishing of magazines, Educational games (Edutainment), Learning using CD-ROM media, Gathering educational information on the internet.\n• Education - anywhere anytime: Web Based Training (WBT), Educational websites (www.schoolnet.lk, www.nenasala.lk, www.e-thaksalawa.moe.gov.lk, www.vidumanpetha.com).\n• Serves as a teaching aid for the teacher: Using pictures, animations and audio-visuals to explain difficult subjects; making lessons interesting using electronic presentations.\n• Learning Management System (LMS): A software application used to manage educational activities (courses, assignments, notes, supervision, evaluation, forum, student/teacher information).",
          si: "අධ්‍යාපන ක්ෂේත්‍රයේ යෙදීම්:\n• පන්ති කාමරයේ දී: පරිගණක ආශ්‍රිත සමර්පණ (Presentations), පරීක්ෂණ සහිත වීඩියෝ දර්ශන, පින්තූර හා වීඩියෝ නිර්මාණය, ප්‍රකාශන කටයුතු, අධ්‍යාපනික ක්‍රීඩා, CD-ROM භාවිතය, අන්තර්ජාලයෙන් තොරතුරු රැස්කිරීම.\n• ඕනෑම තැනක ඕනෑම වේලාවක අධ්‍යාපනය: වෙබ් අඩවි මගින් ස්වයං අධ්‍යයනය (WBT).\n• ඉගැන්වීම සඳහා ගුරුවරයාට ආධාරකයක් වීම: රූප සටහන්, සජීවීකරණ හා වීඩියෝ භාවිතය.\n• ඉගෙනුම් කළමනාකරණ පද්ධතිය (LMS): අධ්‍යාපනික පාඨමාලා, පැවරුම්, ඇගයීම් සහ තොරතුරු කළමනාකරණය කරන මෘදුකාංග පද්ධතිය.",
          highlightTerm: "LMS & Education"
        },
        {
          id: "b5-4",
          en: "ICT in Health Sector:\n• Telemedicine: Patients in remote locations connecting to hospital specialist units through the use of ICT.\n• Telesurgery: Performing surgical operations remotely using robotic/ICT equipment.\n• Medical Teletraining: Remote training of doctors and medical personnel.\n• Diagnostic Tools: Cardiac screening, Magnetic Resonance Imaging (MRI), CAT Scan, Electrocardiogram (ECG), Electroencephalogram (EEG).",
          si: "සෞඛ්‍ය ක්ෂේත්‍රයේ යෙදීම්:\n• ටෙලිමෙඩිසින් (Telemedicine): දුරස්ථ ස්ථානවල සිටින රෝගීන් ICT භාවිතයෙන් රෝහල් විශේෂඥ ඒකක වෙත සම්බන්ධ වීම.\n• ටෙලිශල්‍යකර්ම (Telesurgery): දුරස්ථව සිට ශල්‍යකර්ම සිදු කිරීම.\n• දුරස්ථ සෞඛ්‍ය පුහුණුව (Medical Teletraining): වෛද්‍යවරුන් සහ කාර්ය මණ්ඩලය පුහුණු කිරීම.\n• රෝග විනිශ්චය උපකරණ: හෘද රෝග තිරගත කිරීම, චුම්බක අනුනාද අනුරූපණය (MRI), CAT ස්කෑන්, ECG, EEG.",
          highlightTerm: "Telemedicine & Diagnostics"
        },
        {
          id: "b5-5",
          en: "ICT in Agriculture, Fishing, Business & Transport:\n• Agriculture & Farming: Automatic machines, weather forecasting.\n• Fishing: Sensors placed in sea conveying information on fish concentration to fishing trawlers via internet.\n• Business & Industry: Automated Teller Machines (ATM), Point of Sale (POS) systems.\n• Transport: Parking identification placards, automated ticketing machines in buses, modern vehicle navigation systems.\n• Entertainment: Social networks, listening to music, watching movies, digital photography, e-books, video games.",
          si: "වෙනත් ක්ෂේත්‍රවල යෙදීම්:\n• කෘෂිකර්මාන්තය: ස්වයංක්‍රීය යන්ත්‍ර, කාලගුණ අනාවැකි.\n• ධීවර කර්මාන්තය: මසුන් සිටින ස්ථාන සෙවීමට මුහුදේ ස්ථානගත කළ සංවේදක.\n• ව්‍යාපාර: ATM යන්ත්‍ර, POS පද්ධති.\n• ප්‍රවාහනය: රථ ගාල් පුවරු, බස් රථ ටිකට් යන්ත්‍ර, සංචලන පද්ධති.\n• විනෝදාස්වාදය: සමාජ ජාල, සංගීතයට සවන්දීම, වීඩියෝ ක්‍රීඩා, e-books.",
          highlightTerm: "Industry Applications"
        }
      ],
      checkpointQuiz: {
        id: "quiz-1.5",
        questionEn: "A citizen visits 'www.gov.lk' to download a circular regarding loan facilities for government workers. Which e-Government category applies?",
        questionSi: "රජයේ සේවකයින් සඳහා වන ණය පහසුකම් පිළිබඳ චක්‍රලේඛයක් බාගත කිරීමට රජයේ සේවකයකු 'www.gov.lk' වෙත පිවිසෙන්නේ නම් එය අයත් වන්නේ කුමන ඛණ්ඩයටද?",
        options: [
          { id: "opt1", en: "G2E (Government to Employee)", si: "G2E (රාජ්‍යයෙන් සේවකයාට)" },
          { id: "opt2", en: "G2C (Government to Citizen)", si: "G2C (රාජ්‍යයෙන් පුරවැසියාට)" },
          { id: "opt3", en: "G2B (Government to Business)", si: "G2B (රාජ්‍යයෙන් ව්‍යාපාරවලට)" },
          { id: "opt4", en: "G2G (Government to Government)", si: "G2G (රාජ්‍යයෙන් රාජ්‍යයට)" }
        ],
        correctOptionId: "opt1",
        explanationEn: "Correct! Facilities, gazettes, circulars, and loan info directed specifically to state workers fall under G2E.",
        explanationSi: "නිවැරදියි! රජයේ සේවකයින් ඉලක්ක කරගත් චක්‍රලේඛ, අයදුම්පත් සහ ණය තොරතුරු G2E යටතට ගැනේ."
      }
    },
    {
      id: "1.6",
      number: "1.6",
      titleEn: "Demerits of ICT",
      titleSi: "ICT හි අවාසි හා අහිතකර බලපෑම්",
      summaryEn: "Addiction, Physical health issues, unsuitable friendships, virus infections.",
      summarySi: "ඇබ්බැහි වීම, කායික රෝගාබාධ, සමාජ මාධ්‍ය හරහා නුසුදුසු සබඳතා, පරිගණක වෛරස් ආසාදන.",
      blocks: [
        {
          id: "b6-1",
          en: "Addiction: A student or any other person who immerses himself/herself in the excessive use of computer or who plays games on internet without a limit, may lose the track of education and/or end up with ailments such as sore eyes, back pain, headache etc.",
          si: "ඇබ්බැහි වීම: පරිගණකය අධික ලෙස භාවිතය හෝ අන්තර්ජාල ක්‍රීඩාවල නිරත වීම නිසා අධ්‍යාපනය අතපසු වීම සහ ඇස් රිදීම, කොන්දේ කැක්කුම, හිසකැක්කුම වැනි සෞඛ්‍ය ගැටලු ඇතිවීම.",
          highlightTerm: "Addiction & Health"
        },
        {
          id: "b6-2",
          en: "Social Issues: Building unsuitable friendships through social media.",
          si: "සමාජ ගැටලු: සමාජ මාධ්‍ය හරහා නුසුදුසු මිතුරුදම් ඇති කරගැනීම.",
          highlightTerm: "Social Media Risks"
        },
        {
          id: "b6-3",
          en: "Cyber Threats: Computer virus infection due to improper use of internet.",
          si: "සයිබර් තර්ජන: අන්තර්ජාලය නුසුදුසු ලෙස භාවිතයෙන් පරිගණක වෛරස් ආසාදනය වීම.",
          highlightTerm: "Malware & Viruses"
        }
      ]
    },
    {
      id: "1.7",
      number: "1.7",
      titleEn: "Evolution of the Computer & Computer Generations",
      titleSi: "පරිගණකයේ පරිණාමය සහ පරිගණක පරම්පරා",
      summaryEn: "Pioneers (Abacus, Pascal, Leibnitz, Jacquard, Babbage, Lovelace, Aiken) and Generations 1 through 5.",
      summarySi: "පුරෝගාමීන් (ඇබකසය, පැස්කල්, ලෙබ්නිස්, ජැකාර්ඩ්, බැබේජ්, ලව්ලේස්, අයිකන්) සහ 1 වන පරම්පරාවේ සිට 5 වන පරම්පරාව දක්වා.",
      blocks: [
        {
          id: "b7-1",
          en: "The computer was born in the attempt to make an adding machine. In order to add numbers, a device called Abacus was invented around 5000 years ago.\n• In 1642, Blaise Pascal invented the Adding Machine (Pascaline) - the world’s first ever mathematical machine.\n• In 1674, Gottfried Wilhelm Von Leibnitz improved Pascal's machine to perform multiplication and division too.\n• Joseph Jacquard invented a mechanical loom using the Punch Card System.\n• Charles Babbage invented the Analytical Engine using the Punch Card concept (Input, Process, Output, Store) - honored as the Father of Computing.\n• Madam Ada Augusta Lovelace is considered the first programmer.\n• In 1944, Howard Aiken invented the Automatic Sequence Control Calculator (MARK 1) at Harvard with IBM.",
          si: "එකතු කිරීමේ යන්ත්‍රයක් සෑදීමේ උත්සාහයේ ප්‍රතිඵලයක් ලෙස පරිගණකය බිහි විය. සංඛ්‍යා එකතු කිරීමට මීට වසර 5000කට පෙර ඇබකසය (Abacus) නිපදවන ලදී.\n• 1642 දී බ්ලේස් පැස්කල් (Blaise Pascal) විසින් Adding Machine උපකරණය නිපදවන ලදී - ලොව පළමු යාන්ත්‍රික ගණක යන්ත්‍රයයි.\n• 1674 දී ගොට්ෆ්‍රීඩ් විල්හෙල්ම් ෆොන් ලෙබ්නිස් (Gottfried Wilhelm Von Leibnitz) ගුණකිරීම් හා බෙදීම් ද කළ හැකි පරිදි එය වැඩිදියුණු කළේය.\n• ජෝසෆ් ජැකාර්ඩ් (Joseph Jacquard) හිඩස්පත් ක්‍රමය (Punch Card System) මගින් රෙදි වියන යන්ත්‍රයක් නිපදවීය.\n• චාර්ල්ස් බැබේජ් (Charles Babbage) ආදානය, සැකසීම, ප්‍රතිදානය හා ආචයනය සංකල්ප සහිත Analytical Engine නිර්මාණය කර 'පරිගණකයේ පියා' විය.\n• ඇඩා ඔගස්ටා ලව්ලේස් (Madam Ada Augusta Lovelace) ලොව ප්‍රථම පරිගණක ක්‍රමලේඛිකාවයි.\n• 1944 දී හොවාර්ඩ් අයිකන් (Howard Aiken) විසින් MARK 1 (Automatic Sequence Control Calculator) නිපදවන ලදී.",
          highlightTerm: "Early Inventions & Pioneers"
        }
      ],
      examples: [
        {
          id: "ex7-1",
          titleEn: "Interactive Timeline Slider: 1st Gen to 5th Gen",
          titleSi: "අන්තර්ක්‍රියාකාරී පරිගණක පරම්පරා කාලරේඛාව (1 වන සිට 5 වන පරම්පරාව දක්වා)",
          contentEn: "Explore hardware breakthroughs, programming paradigms, and iconic machines across all 5 generations.",
          contentSi: "ප්‍රධාන දෘඩාංග තාක්ෂණය, මෘදුකාංග සහ සුවිශේෂී පරිගණක පද්ධති සංසන්දනය කරන්න.",
          isInteractiveWidget: 'timeline-slider'
        }
      ],
      tableData: {
        headers: [
          { en: "Generation", si: "පරම්පරාව" },
          { en: "Period", si: "කාලසීමාව" },
          { en: "Core Hardware", si: "ප්‍රධාන දෘඩාංග" },
          { en: "Software Used", si: "භාවිත කළ මෘදුකාංග" },
          { en: "Key Features", si: "ප්‍රධාන ලක්ෂණ" },
          { en: "Example Systems", si: "නිර්මාණය වූ පද්ධති" }
        ],
        rows: [
          {
            gen: { en: "1st Generation", si: "පළමු පරම්පරාව" },
            period: { en: "1940 – 1956", si: "1940 – 1956" },
            hardware: { en: "Vacuum Tubes (ශූන්‍ය පයිප්ප), Punch cards", si: "ශූන්‍ය පයිප්ප (Vacuum Tubes), හිඩස්පත්" },
            software: { en: "Machine language, Assembly language", si: "යන්ත්‍ර භාෂාව, එකලස් භාෂාව" },
            features: { en: "High heat, large size, slow, expensive", si: "අධික තාපය, විශාල ප්‍රමාණය, මිල අධිකයි" },
            systems: { en: "ENIAC, EDVAC, EDSAC, UNIVAC", si: "ENIAC, EDVAC, EDSAC, UNIVAC" }
          },
          {
            gen: { en: "2nd Generation", si: "දෙවන පරම්පරාව" },
            period: { en: "1956 – 1963", si: "1956 – 1963" },
            hardware: { en: "Transistors (ට්‍රාන්සිස්ටර), Magnetic tape/floppy", si: "ට්‍රාන්සිස්ටර (Transistors), චුම්බක පටි" },
            software: { en: "High-level languages (FORTRAN, COBOL)", si: "උසස් පෙළ භාෂා (FORTRAN, COBOL)" },
            features: { en: "Smaller, less heat, faster than 1st Gen", si: "කුඩා ප්‍රමාණය, තාපය අඩුයි, වේගවත්" },
            systems: { en: "Honeywell 400, IBM 7030, CDC 1604", si: "Honeywell 400, IBM 7030, CDC 1604" }
          },
          {
            gen: { en: "3rd Generation", si: "තෙවන පරම්පරාව" },
            period: { en: "1964 – 1975", si: "1964 – 1975" },
            hardware: { en: "Integrated Circuits - IC (අනුකලිත පරිපථ)", si: "අනුකලිත පරිපථ (IC), යතුරුපුවරු, තිර" },
            software: { en: "Operating Systems (OS) introduced", si: "මෙහෙයුම් පද්ධති (OS) හඳුන්වා දීම" },
            features: { en: "Reliable, much smaller, energy efficient", si: "විශ්වාසදායකයි, කුඩායි, විදුලි පරිභෝජනය අඩුයි" },
            systems: { en: "IBM 360/370, PDP-8, PDP-11", si: "IBM 360/370, PDP-8, PDP-11" }
          },
          {
            gen: { en: "4th Generation", si: "සිව්වන පරම්පරාව" },
            period: { en: "1975 – 1989", si: "1975 – 1989" },
            hardware: { en: "VLSI / Microprocessors, Personal Computers (PC)", si: "VLSI / ක්ෂුද්‍ර සකසන, පුද්ගල පරිගණක (PC)" },
            software: { en: "OS with GUI (Graphical User Interface), UNIX", si: "GUI මෙහෙයුම් පද්ධති, UNIX" },
            features: { en: "Portable, low cost, personal use, networks", si: "පහසුවෙන් ගෙනයා හැකි, ජාලගත කළ හැකි" },
            systems: { en: "IBM PC, Apple II", si: "IBM PC, Apple II" }
          },
          {
            gen: { en: "5th Generation", si: "පස්වන පරම්පරාව" },
            period: { en: "1989 – Present", si: "1989 – වර්තමානය" },
            hardware: { en: "ULSI, Multi-core, Optical disks, Internet", si: "ULSI, බහු-හර සකසන, අන්තර්ජාලය" },
            software: { en: "AI (Artificial Intelligence), Voice & Handwriting", si: "කෘත්‍රිම බුද්ධිය (AI), හඬ හා අත්අකුරු හඳුනාගැනීම" },
            features: { en: "High speed, intelligent, cloud connected", si: "ඉතා වේගවත්, බුද්ධිමත්, වලාකුළු සම්බන්ධිත" },
            systems: { en: "Pentium PCs, Laptops, AI Supercomputers", si: "නෝට්බුක්, සුපිරි පරිගණක, AI පද්ධති" }
          }
        ]
      },
      checkpointQuiz: {
        id: "quiz-1.7",
        questionEn: "In which computer generation were Operating Systems with Graphical User Interfaces (GUI) and Personal Computers (PCs) introduced?",
        questionSi: "චිත්‍රක පරිශීලක අතුරුමුහුණත් (GUI) සහිත මෙහෙයුම් පද්ධති සහ පුද්ගල පරිගණක (PCs) හඳුන්වා දෙන ලද්දේ කුමන පරිගණක පරම්පරාවේදීද?",
        options: [
          { id: "opt1", en: "Fourth Generation (4th Gen)", si: "සිව්වන පරම්පරාව (4th Gen)" },
          { id: "opt2", en: "First Generation (1st Gen)", si: "පළමු පරම්පරාව (1st Gen)" },
          { id: "opt3", en: "Second Generation (2nd Gen)", si: "දෙවන පරම්පරාව (2nd Gen)" },
          { id: "opt4", en: "Third Generation (3rd Gen)", si: "තෙවන පරම්පරාව (3rd Gen)" }
        ],
        correctOptionId: "opt1",
        explanationEn: "Correct! The 4th generation introduced microprocessors (VLSI), Personal Computers, and GUI operating systems.",
        explanationSi: "නිවැරදියි! ක්ෂුද්‍ර සකසන (VLSI), පුද්ගල පරිගණක (PCs) සහ GUI මෙහෙයුම් පද්ධති බිහි වූයේ 4 වන පරම්පරාවේදී ය."
      }
    }
  ]
};
