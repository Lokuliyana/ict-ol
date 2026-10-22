export interface TextBlock {
  id: string;
  en: string;
  si: string;
  highlightTerm?: string;
  highlightTermSi?: string;
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
    isInteractiveWidget?: string;
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
  id?: string;
  termEn: string;
  termSi: string;
  defEn?: string;
  defSi?: string;
  definitionEn?: string;
  definitionSi?: string;
  exampleEn?: string;
  exampleSi?: string;
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
          highlightTerm: "Data",
          highlightTermSi: "දත්ත"
        },
        {
          id: "b1-2",
          en: "While we can arrive at meaningful information by arranging and processing data, we can use them to make decisions also.",
          si: "දත්ත ගොනු කිරීමෙන් සහ සකස් කිරීමෙන් අර්ථවත් තොරතුරු (Information) ලබා ගත හැකි වන අතර එම තොරතුරු, තීරණ ගැනීම සඳහා අපට උපකාරී වනු ඇත.",
          highlightTerm: "Information",
          highlightTermSi: "තොරතුරු"
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
          highlightTerm: "System",
          highlightTermSi: "පද්ධතිය"
        },
        {
          id: "b2-2",
          en: "Submitting data for processing is called 'Input' and the result we get after processing is called 'Output.' We can call the collection of all these components above an 'Information System.'",
          si: "සැකසීම සඳහා දත්ත ලබා දීම 'ආදානය' (Input) ලෙසද, සැකසීමෙන් පසුව ලබා ගන්නා ප්‍රතිඵලය 'ප්‍රතිදානය' (Output) ලෙසද හැඳින්වේ. මෙම සියලු සංරචක එකතුව 'තොරතුරු පද්ධතියක්' ලෙස හැඳින්විය හැක.",
          highlightTerm: "Input & Output",
          highlightTermSi: "ආදානය සහ ප්‍රතිදානය"
        },
        {
          id: "b2-3",
          en: "Storing data is an important task in information system. In some occasions, both input and stored data are used to obtain information. Hence the purpose of a system is to receive data, process and store them and provide the results when required.",
          si: "දත්ත තැන්පත් කිරීම (Storing) ද තොරතුරු පද්ධතියක වැදගත් කාර්යයකි. සමහර අවස්ථාවල දී ආදානය කරන ලද මෙන්ම තැන්පත් කරන ලද දත්ත ද තොරතුරු ලබා ගැනීමට භාවිත කෙරේ. එබැවින් පද්ධතියක අරමුණ වන්නේ දත්ත ලබා ගැනීම, සැකසීම, තැන්පත් කිරීම සහ අවශ්‍ය වූ විට ප්‍රතිඵල ලබා දීමයි.",
          highlightTerm: "Storing",
          highlightTermSi: "දත්ත ආචයනය / තැන්පත් කිරීම"
        },
        {
          id: "b2-4",
          en: "A computer processes the data that we input, according to the commands and provide us with the required information in the desired form. Therefore, we call the computer an 'Information System'.",
          si: "පරිගණකය මගින් අප ඇතුළත් කරන දත්ත, අණදීම්වලට අනුව සකස් කර අවශ්‍ය තොරතුරු අවශ්‍ය ආකාරයට ලබා දෙයි. එබැවින් පරිගණකය 'තොරතුරු පද්ධතියක්' ලෙස හැඳින්වේ.",
          highlightTerm: "Computer as an Information System",
          highlightTermSi: "පරිගණකය තොරතුරු පද්ධතියක් ලෙස"
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
          highlightTerm: "Relevancy",
          highlightTermSi: "අදාළ බව"
        },
        {
          id: "b3-2",
          en: "2. Completeness: Taking information from only a small group of people in order to arrive at the PCI (Per Capita Income) of a country is not sufficient. Incomplete information could lead to drawing wrong conclusions.",
          si: "2. සම්පූර්ණ බව (Completeness): රටක ඒකපුද්ගල ආදායම (PCI) තීරණය කිරීමට කුඩා පිරිසකගෙන් පමණක් තොරතුරු ලබා ගැනීම ප්‍රමාණවත් නොවේ. අසම්පූර්ණ තොරතුරු වැරදි නිගමනවලට එළඹීමට හේතු විය හැක.",
          highlightTerm: "Completeness",
          highlightTermSi: "සම්පූර්ණ බව"
        },
        {
          id: "b3-3",
          en: "3. Accuracy: If a doctor gets wrong information about the patient's health, it could be harmful to the patient.",
          si: "3. නිවැරදි බව (Accuracy): රෝගියෙකුගේ සෞඛ්‍යය පිළිබඳව වෛද්‍යවරයාට වැරදි තොරතුරක් ලැබුණහොත් එය රෝගියාට හානිකර විය හැක.",
          highlightTerm: "Accuracy",
          highlightTermSi: "නිවැරදි බව"
        },
        {
          id: "b3-4",
          en: "4. Timeliness: The information must always be updated. Today's weather report may not be suitable to decide on tomorrow's weather.",
          si: "4. කාලීන බව (Timeliness): තොරතුරු සෑම විටම යාවත්කාලීන විය යුතුය. අද කාලගුණ වාර්තාව හෙට කාලගුණය තීරණය කිරීමට නුසුදුසු විය හැක.",
          highlightTerm: "Timeliness",
          highlightTermSi: "කාලීන බව"
        },
        {
          id: "b3-5",
          en: "5. Cost Effectiveness: If an organization spends money more than the profits to collect some information in order to increase profits, it would be a business loss to the organization.",
          si: "5. පිරිවැය සාපේක්ෂතාව (Cost Effectiveness): ලාභය වැඩි කර ගැනීමට තොරතුරු රැස් කිරීමට ලාභයට වඩා වැඩි මුදලක් වැය කරන්නේ නම් එය ආයතනයට ව්‍යාපාරික පාඩුවකි.",
          highlightTerm: "Cost Effectiveness",
          highlightTermSi: "පිරිවැය සාපේක්ෂතාව"
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
          highlightTerm: "Communication of Information",
          highlightTermSi: "තොරතුරු සන්නිවේදනය"
        },
        {
          id: "b4-2",
          en: "Man has been processing and exchanging information since ancient times. Today, technology is used in various ways to convert data into information and then to exchange them. This is called Information and Communication Technology (ICT).",
          si: "අතීතයේ සිටම මිනිසා තොරතුරු සකස් කරමින් හා හුවමාරු කරගනිමින් සිටියේය. අද වන විට දත්ත තොරතුරු බවට පත් කිරීමට සහ ඒවා හුවමාරු කර ගැනීමට විවිධ ආකාරයෙන් තාක්ෂණය භාවිත වේ. මෙය තොරතුරු හා සන්නිවේදන තාක්ෂණය (ICT) ලෙස හැඳින්වේ.",
          highlightTerm: "ICT",
          highlightTermSi: "තොරතුරු හා සන්නිවේදන තාක්ෂණය (ICT)"
        }
      ]
    },
    {
      id: "1.5",
      number: "1.5",
      titleEn: "Applications of ICT across Sectors",
      titleSi: "විවිධ ක්ෂේත්‍රයන්හි ICT යෙදවුම්",
      summaryEn: "Comprehensive breakdown of e-Government (G2C, G2B, G2G, G2E), e-Commerce (B2B, B2C, C2C, C2B), Healthcare, Precision Agriculture, Fisheries, Transport, and Education.",
      summarySi: "ඉලෙක්ට්‍රොනික රාජ්‍ය සේවය, විද්‍යුත් වාණිජ්‍යය, සෞඛ්‍ය, නිරවද්‍ය කෘෂිකර්මාන්තය, ධීවර, ප්‍රවාහන සහ අධ්‍යාපන ක්ෂේත්‍රයන්හි ICT යෙදවුම් පිළිබඳ පරිපූර්ණ විග්‍රහය.",
      blocks: [
        {
          id: "b5-1",
          en: "Introduction to Applications: Today ICT is utilized across all socioeconomic sectors to elevate efficiency, reduce turnaround times, automate labor-intensive routines, and deliver convenient services 24 hours a day.",
          si: "යෙදවුම් හැඳින්වීම: කාර්යක්ෂමතාව ඉහළ නැංවීමට, කාලය ඉතිරි කර ගැනීමට, ශ්‍රමය අවම කිරීමට සහ පැය 24 පුරා සේවාවන් සැපයීමට අද වන විට සියලුම සමාජ ආර්ථික ක්ෂේත්‍රයන්හි ICT පුළුල්ව භාවිත වේ.",
          highlightTerm: "Applications Overview",
          highlightTermSi: "යෙදවුම් හැඳින්වීම"
        },
        {
          id: "b5-2",
          en: "Electronic Government (e-Government):\n• G2C (Government to Citizen): Delivering public services directly to everyday citizens online (e.g., e-Revenue License renewal, passport application status tracking, online utility bill and fine payments via www.gov.lk).\n• G2B (Government to Business): Commercial filings and regulatory interactions between state and businesses (e.g., online company registration via e-ROC, electronic customs clearance via ASYCUDA, corporate tax filing via RAMIS).\n• G2G (Government to Government): Secure inter-departmental communications across state agencies (e.g., Lanka Government Network - LGN, police criminal record checks at immigration).\n• G2E (Government to Employee): Internal state workflows between the government and public servants (e.g., electronic payslip portals, pension management systems, internal distress loan circulations).",
          si: "ඉලෙක්ට්‍රොනික රාජ්‍ය සේවය (e-Government):\n• G2C (රාජ්‍යයෙන් පුරවැසියාට): මහජනතාවට සෘජුව සේවා සැපයීම (උදා: මාර්ගගත ආදායම් බලපත්‍ර ලබා ගැනීම, විදේශ ගමන් බලපත්‍ර තත්ත්වය පරීක්ෂාව, www.gov.lk හරහා බිල්පත් හා දඩ මුදල් ගෙවීම).\n• G2B (රාජ්‍යයෙන් ව්‍යාපාරවලට): රජය හා ව්‍යාපාරික ආයතන අතර සබඳතා (උදා: e-ROC හරහා සමාගම් ලියාපදිංචිය, ASYCUDA හරහා රේගු නිෂ්කාශන, RAMIS මගින් ආයතනික බදු ගෙවීම).\n• G2G (රාජ්‍යයෙන් රාජ්‍යයට): රජයේ දෙපාර්තමේන්තු අතර අන්තර්-සම්බන්ධතා (උදා: Lanka Government Network - LGN, ආගමන විගමන හා පොලිස් වාර්තා පරීක්ෂාව).\n• G2E (රාජ්‍යයෙන් සේවකයාට): රජය සහ රාජ්‍ය සේවකයන් අතර කටයුතු (උදා: වැටුප් පත්‍රිකා ද්වාර, විශ්‍රාම වැටුප් කළමනාකරණය, රාජ්‍ය ණය චක්‍රලේඛ).",
          highlightTerm: "e-Government Models",
          highlightTermSi: "ඉලෙක්ට්‍රොනික රාජ්‍ය සේවා ආකෘති (G2C, G2B, G2G, G2E)"
        },
        {
          id: "b5-3",
          en: "Electronic Commerce & Business (e-Commerce):\n• B2C (Business to Consumer): Online retail stores selling goods directly to customers (e.g., Daraz, Amazon, supermarket home delivery).\n• B2B (Business to Business): Inter-corporate transactions, wholesale orders, and Electronic Data Interchange (EDI) between factories and suppliers.\n• C2C (Consumer to Consumer): Digital classifieds enabling trade between private citizens (e.g., Ikman.lk, eBay).\n• C2B (Consumer to Business): Individuals offering freelance services, photos, or digital assets to companies (e.g., Upwork, Fiverr, Shutterstock).\n• Banking & FinTech: Automated Teller Machines (ATM), Point of Sale (POS) card terminals, and real-time electronic fund transfers (SLIPS/CEFT).",
          si: "විද්‍යුත් වාණිජ්‍යය සහ ව්‍යාපාර (e-Commerce):\n• B2C (ව්‍යාපාරයෙන් පාරිභෝගිකයාට): මාර්ගගත සිල්ලර වෙළඳාම (උදා: Daraz, Amazon, සුපිරි වෙළඳසැල් අන්තර්ජාල ඇණවුම්).\n• B2B (ව්‍යාපාරයෙන් ව්‍යාපාරයට): තොග වෙළඳාම, කර්මාන්තශාලා අතර සැපයුම් ජාල සහ විද්‍යුත් දත්ත හුවමාරුව (EDI).\n• C2C (පාරිභෝගිකයාගෙන් පාරිභෝගිකයාට): පුද්ගලයන් අතර භාණ්ඩ හුවමාරුව (උදා: Ikman.lk, eBay).\n• C2B (පාරිභෝගිකයාගෙන් ව්‍යාපාරයට): නිදහස් සේවකයන් (freelancers) ආයතන වෙත සේවා සැපයීම (උදා: Upwork, Fiverr).\n• බැංකු හා මූල්‍ය තාක්ෂණය: ස්වයංක්‍රීය ටෙලර් යන්ත්‍ර (ATM), විකුණුම් අන්තර්මුඛ (POS) පර්යන්ත, සහ තත්‍ය කාලීන අරමුදල් හුවමාරු (CEFT).",
          highlightTerm: "e-Commerce & FinTech",
          highlightTermSi: "විද්‍යුත් වාණිජ්‍යය හා මූල්‍ය තාක්ෂණය (B2C, B2B, C2C, C2B)"
        },
        {
          id: "b5-4",
          en: "Healthcare Sector:\n• Telemedicine: Remote medical consultation connecting rural patients with hospital specialists over video and digital telemetry.\n• Telesurgery: Real-time surgical procedures performed remotely using precision robotic equipment and tactile network controls.\n• Medical Teletraining: Remote interactive training of surgeons, doctors, and nurses worldwide.\n• Advanced Diagnostics: Computerized Axial Tomography (CAT/CT Scan), Magnetic Resonance Imaging (MRI), Electrocardiogram (ECG for heart), Electroencephalogram (EEG for brain activity), and continuous bedside ICU telemetry.",
          si: "සෞඛ්‍ය ක්ෂේත්‍රය:\n• ටෙලිමෙඩිසින් (Telemedicine): දුරස්ථ රෝගීන් විශේෂඥ වෛද්‍යවරුන් හා සම්බන්ධ කර වීඩියෝ හා ඩිජිටල් මාධ්‍යයෙන් ප්‍රතිකාර උපදෙස් ලබා දීම.\n• ටෙලිශල්‍යකර්ම (Telesurgery): දුරස්ථව සිට රොබෝ තාක්ෂණය හා පරිගණක පාලන මගින් සංකීර්ණ ශල්‍යකර්ම සිදු කිරීම.\n• දුරස්ථ සෞඛ්‍ය පුහුණුව (Medical Teletraining): වෛද්‍යවරුන් සහ හෙද කාර්ය මණ්ඩලය දුරස්ථව පුහුණු කිරීම.\n• නවීන රෝග විනිශ්චය උපකරණ: CAT/CT ස්කෑන්, චුම්බක අනුනාද අනුරූපණය (MRI), හෘදයේ විද්‍යුත් ක්‍රියාකාරීත්වය මනින ECG, මොළයේ තරංග මනින EEG සහ දැඩි සත්කාර ඒකකවල රෝගී නිරීක්ෂණ පද්ධති (ICU Telemetry).",
          highlightTerm: "Healthcare & Diagnostics",
          highlightTermSi: "සෞඛ්‍ය ක්ෂේත්‍රය හා නවීන රෝග විනිශ්චය"
        },
        {
          id: "b5-5",
          en: "Precision Agriculture & Fisheries:\n• Automated Greenhouses: Microcontroller-controlled climate adjusting shading, humidity mist, and fans automatically.\n• Soil Sensors & Automated Drip Irrigation: Moisture and pH sensors triggering solenoid valves to supply exact water and nutrients (fertigation) to plant root zones.\n• Weather Telemetry: Meteorological forecasting alerting farmers against droughts and frost.\n• Marine Telemetry (Fisheries): Acoustic Fish Finders (Sonar) detecting submerged fish depth and density; satellite sea surface temperature (SST) maps guiding deep-sea trawlers; GPS transponders for maritime safety.",
          si: "නිරවද්‍ය කෘෂිකර්මාන්තය සහ ධීවර ක්ෂේත්‍රය:\n• ස්වයංක්‍රීය හරිතාගාර: උෂ්ණත්වය, ආර්ද්‍රතාව සහ ආලෝකය ස්වයංක්‍රීයව පාලනය කරන පරිගණකගත හරිතාගාර.\n• පාංශු සංවේදක සහ බිංදු ජල සම්පාදනය: පසේ තෙතමනය සහ pH අගය මැන බලා ශාක මුල් වෙත අවශ්‍ය ප්‍රමාණයට පමණක් ස්වයංක්‍රීයව ජලය හා පොහොර සැපයීම.\n• කාලගුණ විද්‍යාත්මක අනාවැකි: චන්ද්‍රිකා සහ සුපිරි පරිගණක මගින් නිවැරදි වර්ෂාපතන සහ නියං අනාවැකි ලබා දීම.\n• ධීවර ක්ෂේත්‍රය: මසුන් ගැවසෙන ගැඹුර හා දිශාව සෙවීමට ධ්වනි තරංග මාන (Acoustic Sonar Fish Finders); මුහුදු උෂ්ණත්ව චන්ද්‍රිකා සිතියම්; මුහුදු ගමන් ආරක්ෂාවට GPS සංක්‍ෂේපක.",
          highlightTerm: "Agriculture & Fisheries",
          highlightTermSi: "නිරවද්‍ය කෘෂිකර්මාන්තය හා ධීවර ක්ෂේත්‍රය"
        },
        {
          id: "b5-6",
          en: "Transport & Logistics:\n• Electronic Toll Collection (ETC): RFID tags on vehicle windshields read automatically by expressway toll plaza antennas without stopping.\n• Fleet Management & GPS: Real-time satellite tracking of cargo trucks, route optimization, and vehicle telemetry.\n• Automated Traffic Control: Inductive road loops and camera sensors dynamically adjusting traffic light durations based on vehicle density.\n• Public Transit Smart Ticketing: Contactless NFC transit cards and onboard automated bus ticketing machines.",
          si: "ප්‍රවාහන හා සැපයුම් ක්ෂේත්‍රය:\n• ඉලෙක්ට්‍රොනික ගාස්තු අය කිරීම (ETC): අධිවේගී මාර්ගවල වාහන නතර නොකර RFID තාක්ෂණයෙන් ස්වයංක්‍රීයව ගාස්තු අය කර ගැනීම.\n• ජීපීඑස් සහ රථ වාහන කළමනාකරණය (Fleet Management): භාණ්ඩ ප්‍රවාහන රථවල ගමන් මාර්ග, ඉන්ධන සහ තත්ත්වය චන්ද්‍රිකා තාක්ෂණයෙන් නිරීක්ෂණය කිරීම.\n• ස්වයංක්‍රීය රථවාහන සංඥා: මාර්ගයේ වාහන තදබදය අනුව ස්වයංක්‍රීයව කොළ සහ රතු සංඥා කාලසීමා වෙනස් කිරීම.\n• පොදු ප්‍රවාහන ස්මාර්ට් ටිකට්පත්: ස්පර්ශ-රහිත NFC කාඩ්පත් සහ බස් රථවල ස්වයංක්‍රීය ටිකට් නිකුත් කිරීමේ යන්ත්‍ර.",
          highlightTerm: "Transport & ETC",
          highlightTermSi: "ප්‍රවාහන හා ඉලෙක්ට්‍රොනික ගාස්තු අය කිරීම (ETC)"
        },
        {
          id: "b5-7",
          en: "Education Sector:\n• Smart Classroom: Multimedia projectors, interactive smart whiteboards, digital audio-visual simulations, and educational gamification (Edutainment).\n• Learning Management Systems (LMS): Comprehensive software platforms (e.g., Moodle) managing courses, assignment submissions, automated grading, and teacher-student interaction.\n• Web-Based Training (WBT) & Open Courseware: Self-paced distance learning accessible anytime anywhere.\n• Sri Lankan State Portals: National repository 'e-thaksalawa.moe.gov.lk', SchoolNet high-speed network, and rural Nenasala centers.",
          si: "අධ්‍යාපන ක්ෂේත්‍රය:\n• ස්මාර්ට් පන්ති කාමරය: බහුමාධ්‍ය ප්‍රක්ෂේපක, අන්තර්ක්‍රියාකාරී සුහුරු පුවරු, සජීවීකරණ සහ අධ්‍යාපනික ක්‍රීඩා (Edutainment).\n• ඉගෙනුම් කළමනාකරණ පද්ධති (LMS): පාඨමාලා, පැවරුම්, ස්වයංක්‍රීය ලකුණු ලබා දීම් සහ සටහන් කළමනාකරණය කරන මෘදුකාංග (උදා: Moodle).\n• වෙබ් පාදක පුහුණුව (WBT): ඕනෑම තැනක ඕනෑම වේලාවක තමන්ගේ වේගයෙන් ස්වයංව අධ්‍යයනය කිරීමේ පහසුකම.\n• ශ්‍රී ලංකාවේ අධ්‍යාපනික ද්වාර: ජාතික 'e-thaksalawa.moe.gov.lk' ද්වාරය, SchoolNet ජාලය සහ ග්‍රාමීය නැණසල මධ්‍යස්ථාන.",
          highlightTerm: "Education & LMS",
          highlightTermSi: "අධ්‍යාපනය හා ඉගෙනුම් කළමනාකරණ පද්ධති (LMS)"
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
      summaryEn: "Physical and psychological health hazards, ergonomic issues, addiction, social disconnection, cyber threats, malware, and digital divide.",
      summarySi: "කායික හා මානසික සෞඛ්‍ය ගැටලු, කාර්යක්ෂමතා ආබාධ, ඇබ්බැහි වීම්, සමාජ සබඳතා බිඳවැටීම, සයිබර් තර්ජන, පරිගණක වෛරස් සහ ඩිජිටල් විෂමතාව.",
      blocks: [
        {
          id: "b6-1",
          en: "Addiction & Psychological Impact: Excessive gaming, infinite social media feeds, and non-stop screen time leading to isolation, neglect of education, academic decline, sleep deprivation, and psychological dependency.",
          si: "ඇබ්බැහි වීම සහ මානසික බලපෑම්: පරිගණක ක්‍රීඩා සහ සමාජ මාධ්‍ය සඳහා සීමාවකින් තොරව කාලය වැය කිරීම නිසා අධ්‍යාපනය අතපසු වීම, හුදකලා වීම, නින්ද නොයාම සහ මානසික ඇබ්බැහිවීම් ඇති වේ.",
          highlightTerm: "Addiction & Psychology",
          highlightTermSi: "ඇබ්බැහි වීම හා මානසික බලපෑම්"
        },
        {
          id: "b6-2",
          en: "Physical Health & Ergonomic Hazards: Poor posture during long computing sessions causes Repetitive Strain Injury (RSI), carpal tunnel syndrome, chronic back and neck pain, severe headaches, and Computer Vision Syndrome (CVS / digital eye strain).",
          si: "කායික සෞඛ්‍ය හා කාර්යක්ෂමතා ආබාධ: පරිගණකය ඉදිරියේ නිවැරදි ඉරියව්වෙන් නොසිටීම නිසා කොන්දේ සහ බෙල්ලේ වේදනා, මැණික් කටුව ආශ්‍රිත ආබාධ (RSI/Carpal Tunnel), ඇස් රිදීම (Computer Vision Syndrome) සහ හිසරදය ඇතිවීම.",
          highlightTerm: "Physical & Ergonomic Health",
          highlightTermSi: "කායික සෞඛ්‍ය හා කාර්යක්ෂමතා ආබාධ (RSI/CVS)"
        },
        {
          id: "b6-3",
          en: "Social & Interpersonal Issues: Building unsuitable friendships through social networks, cyberbullying, loss of real-world family conversations, degradation of face-to-face social skills, and exposure of personal privacy.",
          si: "සමාජීය සහ අන්තර්-පුද්ගල ගැටලු: සමාජ මාධ්‍ය හරහා නුසුදුසු මිතුරුදම් ඇති කරගැනීම, සයිබර් හිරිහැර කිරීම් (Cyberbullying), පවුලේ සාමාජිකයන් සමඟ කතාබහ අඩුවීම සහ සැබෑ සමාජ සබඳතා ගිලිහී යාම.",
          highlightTerm: "Social & Privacy Risks",
          highlightTermSi: "සමාජීය ගැටලු, සයිබර් හිරිහැර හා පෞද්ගලිකත්වය"
        },
        {
          id: "b6-4",
          en: "Cyber Threats & Malware: Insecure internet usage exposing computers to destructive computer viruses, trojans, ransomware, identity theft, financial phishing scams, and loss of confidential data.",
          si: "සයිබර් තර්ජන සහ පරිගණක වෛරස්: අන්තර්ජාලය අනිසි ලෙස භාවිතයෙන් පරිගණක වෛරස්, ransomware සහ තතුබෑමේ (Phishing) උගුල්වලට හසුවී පෞද්ගලික හා මූල්‍ය දත්ත විනාශ වීම හෝ සොරකම් කිරීම.",
          highlightTerm: "Cyber Threats & Malware",
          highlightTermSi: "සයිබර් තර්ජන හා පරිගණක වෛරස්"
        },
        {
          id: "b6-5",
          en: "Digital Divide & E-Waste: Growing inequality between individuals with high-speed digital access and underprivileged communities lacking ICT resources, accompanied by hazardous electronic waste (e-waste) degrading the environment.",
          si: "ඩිජිටල් විෂමතාව සහ විද්‍යුත් අපද්‍රව්‍ය: නවීන තාක්ෂණය භාවිත කළ හැකි සහ නොහැකි ප්‍රජාවන් අතර පරතරය වැඩිවීම (Digital Divide) සහ භාවිතයෙන් ඉවත් කරන ඉලෙක්ට්‍රොනික අපද්‍රව්‍ය (E-waste) පරිසරයට එක්වීම.",
          highlightTerm: "Digital Divide & E-Waste",
          highlightTermSi: "ඩිජිටල් විෂමතාව හා විද්‍යුත් අපද්‍රව්‍ය (E-Waste)"
        }
      ]
    },
    {
      id: "1.7",
      number: "1.7",
      titleEn: "Evolution of the Computer & Computer Generations",
      titleSi: "පරිගණකයේ පරිණාමය සහ පරිගණක පරම්පරා",
      summaryEn: "Chronological progression from manual computing tools (Abacus, Pascaline, Leibnitz, Jacquard, Babbage, Lovelace, Aiken) through 1st to 5th Computer Generations.",
      summarySi: "ඇබකසය, පැස්කලයින්, ලෙබ්නිස්, ජැකාර්ඩ්, බැබේජ්, ලව්ලේස් සහ අයිකන්ගේ සිට 1 වන සිට 5 වන පරිගණක පරම්පරා දක්වා වූ ඓතිහාසික පරිණාමය.",
      blocks: [
        {
          id: "b7-1",
          en: "Ancient Calculating Devices & Pascaline (1642): Over 5,000 years ago, the Abacus was invented in China as the world's first manual counting tool. In 1642, French mathematician Blaise Pascal invented the 'Adding Machine' (Pascaline), the world's first mechanical mathematical calculator using geared wheels for addition and subtraction.",
          si: "මුල් කාලීන ගණක උපකරණ සහ පැස්කලයින් (1642): මීට වසර 5000 කට පෙර චීනයේදී ලොව ප්‍රථම ගණක උපකරණය ලෙස ඇබකසය (Abacus) බිහි විය. 1642 දී බ්ලේස් පැස්කල් (Blaise Pascal) විසින් දැති රෝද භාවිතයෙන් එකතු කිරීම හා අඩු කිරීම කළ හැකි ලොව ප්‍රථම යාන්ත්‍රික ගණකය වූ Adding Machine (Pascaline) නිර්මාණය කළේය.",
          highlightTerm: "Abacus & Pascaline",
          highlightTermSi: "ඇබකසය හා පැස්කලයින් (1642)"
        },
        {
          id: "b7-2",
          en: "Gottfried Leibnitz & Joseph Jacquard's Punched Cards: In 1674, Gottfried Wilhelm Von Leibnitz improved Pascal's machine (Stepped Reckoner) to perform multiplication and division. In 1801, French inventor Joseph Jacquard introduced the Punched Card System to automate weave patterns on mechanical textile looms.",
          si: "ලෙබ්නිස් ගණකය සහ ජැකාර්ඩ්ගේ හිඩස්පත් ක්‍රමය: 1674 දී ගොට්ෆ්‍රීඩ් ලෙබ්නිස් (Leibnitz) ගුණකිරීම් සහ බෙදීම් ද කළ හැකි Stepped Reckoner යන්ත්‍රය නිපදවීය. 1801 දී ජෝසෆ් ජැකාර්ඩ් (Joseph Jacquard) රෙදි වියන යන්ත්‍ර ස්වයංක්‍රීය කිරීමට හිඩස්පත් ක්‍රමය (Punch Card System) හඳුන්වා දුන්නේය.",
          highlightTerm: "Leibnitz & Punched Cards",
          highlightTermSi: "ලෙබ්නිස් හා ජැකාර්ඩ්ගේ හිඩස්පත් (1801)"
        },
        {
          id: "b7-3",
          en: "Pioneers of Modern Computing:\n* **Charles Babbage (Father of Computing):** Conceived the Difference Engine and Analytical Engine based on the 4 pillars: Input, Processing, Storage, and Output.\n* **Augusta Ada Lovelace (First Programmer):** Wrote the world's first algorithms for Babbage's Analytical Engine.\n* **Howard Aiken (1944):** Built the electromechanical Harvard Mark I (ASCC) computer.",
          si: "නූතන පරිගණකයේ පුරෝගාමියෝ:\n* **චාල්ස් බැබේජ් (පරිගණකයේ පියා):** ආදානය, සැකසීම, ආචයනය සහ ප්‍රතිදානය යන කුළුණු 4 මත පදනම් වූ Analytical Engine සංකල්පය නිර්මාණය කළේය.\n* **ඇඩා ලව්ලේස් (ලොව ප්‍රථම පරිගණක ක්‍රමලේඛිකාව):** බැබේජ්ගේ යන්ත්‍රය සඳහා ප්‍රථම පරිගණක ඇල්ගොරිතම/ක්‍රමලේඛ නිර්මාණය කළාය.\n* **හොවාර්ඩ් අයිකන් (1944):** විද්‍යුත් යාන්ත්‍රික Harvard Mark I (ASCC) පරිගණකය නිපදවීය.",
          highlightTerm: "Babbage & Ada Lovelace",
          highlightTermSi: "චාල්ස් බැබේජ් හා ඇඩා ලව්ලේස්"
        },
        {
          id: "b7-4",
          en: "1st Generation Computers (1940–1956):\n* **Core Hardware:** Vacuum Tubes (Thermionic Valves) & magnetic drum memory\n* **Software:** Machine Language & Assembly Language\n* **Characteristics:** Occupied entire rooms, consumed massive power, high heat, frequent failures\n* **Example Systems:** ENIAC, EDVAC, EDSAC, UNIVAC",
          si: "පළමු පරම්පරාව (1940–1956):\n* **ප්‍රධාන දෘඩාංග:** ශූන්‍ය කපාට (Vacuum Tubes) සහ චුම්භක ඩ්‍රම් මතකය\n* **මෘදුකාංග:** යන්ත්‍ර භාෂාව සහ එකලස් භාෂාව\n* **ලක්ෂණ:** කාමර තරම් විශාල විය, අධික තාපය, විදුලිය විශාල ලෙස වැය වීම, නිතර අක්‍රිය වීම\n* **උදාහරණ පද්ධති:** ENIAC, EDVAC, EDSAC, UNIVAC",
          highlightTerm: "1st Gen: Vacuum Tubes",
          highlightTermSi: "1 වන පරම්පරාව: ශූන්‍ය කපාට (1940–1956)"
        },
        {
          id: "b7-5",
          en: "2nd Generation Computers (1956–1963):\n* **Core Hardware:** Transistors & magnetic core memory\n* **Software:** High-Level Programming Languages (FORTRAN, COBOL)\n* **Characteristics:** Dramatically smaller, lower heat generation, less power, faster operation\n* **Example Systems:** IBM 7090, CDC 1604, Honeywell 400",
          si: "දෙවන පරම්පරාව (1956–1963):\n* **ප්‍රධාන දෘඩාංග:** ට්‍රාන්සිස්ටර (Transistors) සහ චුම්භක හර මතකය\n* **මෘදුකාංග:** උසස් පෙළ පරිගණක භාෂා (FORTRAN, COBOL)\n* **ලක්ෂණ:** ප්‍රමාණයෙන් කුඩා, අඩු තාපයක් පිට කිරීම, අඩු විදුලි පරිභෝජනය, වේගවත්\n* **උදාහරණ පද්ධති:** IBM 7090, CDC 1604, Honeywell 400",
          highlightTerm: "2nd Gen: Transistors",
          highlightTermSi: "2 වන පරම්පරාව: ට්‍රාන්සිස්ටර (1956–1963)"
        },
        {
          id: "b7-6",
          en: "3rd Generation Computers (1964–1975):\n* **Core Hardware:** Integrated Circuits (ICs), semiconductor memory, keyboards, monitors\n* **Software:** Operating Systems (OS) replacing punched cards, multi-programming\n* **Characteristics:** Highly reliable, substantially smaller, energy efficient\n* **Example Systems:** IBM 360/370, PDP-8, PDP-11",
          si: "තෙවන පරම්පරාව (1964–1975):\n* **ප්‍රධාන දෘඩාංග:** අනුකලිත පරිපථ (Integrated Circuits - IC), යතුරුපුවරු, මොනිටර\n* **මෘදුකාංග:** හිඩස්පත් වෙනුවට මෙහෙයුම් පද්ධති (Operating Systems), බහු-වැඩසටහන් ධාවනය\n* **ලක්ෂණ:** විශ්වාසදායකයි, සැලකිය යුතු ලෙස කුඩායි, විදුලි පරිභෝජනය අඩුයි\n* **උදාහරණ පද්ධති:** IBM 360/370, PDP-8, PDP-11",
          highlightTerm: "3rd Gen: Integrated Circuits",
          highlightTermSi: "3 වන පරම්පරාව: අනුකලිත පරිපථ (IC) (1964–1975)"
        },
        {
          id: "b7-7",
          en: "4th Generation Computers (1975–1989):\n* **Core Hardware:** Microprocessors (VLSI / LSI) packing millions of transistors on one chip\n* **Software:** Operating Systems with Graphical User Interfaces (GUI), UNIX\n* **Characteristics:** Portable Personal Computers (PCs), low cost, computer networking\n* **Example Systems:** Apple II, IBM PC",
          si: "සිව්වන පරම්පරාව (1975–1989):\n* **ප්‍රධාන දෘඩාංග:** තනි චිපයක් තුළ ට්‍රාන්සිස්ටර මිලියන ගණනක් සහිත ක්ෂුද්‍ර සකසන (VLSI / LSI)\n* **මෘදුකාංග:** චිත්‍රක පරිශීලක අතුරුමුහුණත් (GUI) සහිත මෙහෙයුම් පද්ධති, UNIX\n* **ලක්ෂණ:** ගෙනයා හැකි පුද්ගලික පරිගණක (PCs), අඩු පිරිවැය, පරිගණක ජාලකරණය\n* **උදාහරණ පද්ධති:** Apple II, IBM PC",
          highlightTerm: "4th Gen: Microprocessors & PCs",
          highlightTermSi: "4 වන පරම්පරාව: ක්ෂුද්‍ර සකසන හා PCs (1975–1989)"
        },
        {
          id: "b7-8",
          en: "5th Generation Computers (1989–Present):\n* **Core Hardware:** Ultra Large Scale Integration (ULSI), multi-core processors, optical media\n* **Software:** Artificial Intelligence (AI), voice & handwriting recognition, parallel processing\n* **Characteristics:** Intelligent computing, cloud architectures, quantum computing, ultra-high speed\n* **Example Systems:** Modern Laptops, Smart Devices, AI Supercomputers",
          si: "පස්වන පරම්පරාව (1989–වර්තමානය):\n* **ප්‍රධාන දෘඩාංග:** ULSI තාක්ෂණය, බහු-හර සකසන (Multi-core), දෘශ්‍ය මාධ්‍ය\n* **මෘදුකාංග:** කෘතිම බුද්ධිය (AI), හඬ හා අත්අකුරු හඳුනාගැනීම, සමාන්තර සැකසුම්\n* **ලක්ෂණ:** බුද්ධිමත් පරිගණකකරණය, වලාකුළු තාක්ෂණය, ක්වොන්ටම් පරිගණක, අතිශය වේගවත්\n* **උදාහරණ පද්ධති:** නූතන ලැප්ටොප්, ස්මාර්ට් උපාංග, AI සුපිරි පරිගණක",
          highlightTerm: "5th Gen: ULSI & AI",
          highlightTermSi: "5 වන පරම්පරාව: ULSI හා කෘතිම බුද්ධිය (1989–වර්තමානය)"
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
