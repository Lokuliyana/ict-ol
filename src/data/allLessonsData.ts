export interface GeneralLessonData {
  id: string;
  grade: '10' | '11';
  unitNumber: number;
  titleEn: string;
  titleSi: string;
  subtopics: {
    id: string;
    number: string;
    titleEn: string;
    titleSi: string;
    blocks: {
      id: string;
      en: string;
      si: string;
      highlightTerm?: string;
    }[];
    checkpointQuiz?: {
      id: string;
      questionEn: string;
      questionSi: string;
      options: { id: string; en: string; si: string }[];
      correctOptionId: string;
      explanationEn: string;
      explanationSi: string;
    };
  }[];
  pastPaperQuestions: {
    id: string;
    year: number;
    paperType: 'Paper I' | 'Paper II';
    badgeText: string;
    questionEn: string;
    questionSi: string;
    type: 'mcq' | 'structured';
    options?: { id: string; en: string; si: string }[];
    correctOptionId?: string;
    sampleAnswerEn?: string;
    sampleAnswerSi?: string;
    explanationEn: string;
    explanationSi: string;
  }[];
}

export const ALL_LESSONS_DATA: Record<string, GeneralLessonData> = {
  'g10-u2': {
    id: 'g10-u2',
    grade: '10',
    unitNumber: 2,
    titleEn: 'Evolution of Computer & Data Representation',
    titleSi: 'පරිගණකයේ පරිණාමය සහ දත්ත නිරූපණය',
    subtopics: [
      {
        id: '2.1',
        number: '2.1',
        titleEn: 'Number Systems & Base Values',
        titleSi: 'සංඛ්‍යා පද්ධති සහ පාද අගයන්',
        blocks: [
          {
            id: 'b2-1',
            en: 'Number systems represent quantities. The base (radix) indicates the total count of unique symbols used: Decimal (Base 10: 0-9), Binary (Base 2: 0-1), Octal (Base 8: 0-7), and Hexadecimal (Base 16: 0-9, A-F).',
            si: 'සංඛ්‍යා පද්ධතියක් මඟින් ප්‍රමාණ නිරූපණය කෙරේ. පාදය (Radix) යනු භාවිත වන අනන්‍ය සංකේත ගණනයි: දශමය (පාදය 10: 0-9), ද්වීමය (පාදය 2: 0-1), අෂ්ටමය (පාදය 8: 0-7), සහ ෂඩ්දශමය (පාදය 16: 0-9, A-F).',
            highlightTerm: 'Number Bases'
          },
          {
            id: 'b2-2',
            en: 'Digital computers operate strictly on binary bits (0 and 1) due to electronic states of transistors (OFF and ON / Low Voltage and High Voltage).',
            si: 'ඉලෙක්ට්‍රොනික ට්‍රාන්සිස්ටරවල ක්‍රියාකාරීත්වයේ විද්‍යුත් තත්ත්වයන් (ක්‍රියාවිරහිත/ක්‍රියාත්මක) නිසා ඩිජිටල් පරිගණක ද්වීමය බිටු (0 සහ 1) මත පමණක් ක්‍රියාත්මක වේ.',
            highlightTerm: 'Binary Logic'
          }
        ],
        checkpointQuiz: {
          id: 'q-2.1',
          questionEn: 'What is the binary equivalent of decimal number 13?',
          questionSi: 'දශමය 13 සංඛ්‍යාවේ ද්වීමය අගය කුමක්ද?',
          options: [
            { id: '1', en: '1101₂', si: '1101₂' },
            { id: '2', en: '1011₂', si: '1011₂' },
            { id: '3', en: '1110₂', si: '1110₂' },
            { id: '4', en: '1001₂', si: '1001₂' }
          ],
          correctOptionId: '1',
          explanationEn: '13 = 8 + 4 + 0 + 1 = 1101 in binary.',
          explanationSi: '13 = 8 + 4 + 0 + 1 = 1101₂ වේ.'
        }
      },
      {
        id: '2.2',
        number: '2.2',
        titleEn: 'Data Representation & Character Coding',
        titleSi: 'දත්ත නිරූපණය සහ අක්ෂර කේතන පද්ධති',
        blocks: [
          {
            id: 'b2-3',
            en: 'Characters (letters, numbers, punctuation) are encoded using numeric codes: ASCII uses 7 bits (128 characters), Extended ASCII uses 8 bits (256 characters), and Unicode uses up to 32 bits (supporting worldwide languages including Sinhala & Tamil).',
            si: 'අක්ෂර පරිගණකය තුළ කේතනය කරනුයේ සංඛ්‍යාත්මක අගයන් මගිනි: ASCII බිටු 7ක් (අක්ෂර 128), විස්තෘත ASCII බිටු 8ක් (අක්ෂර 256), සහ යුනිකෝඩ් බිටු 32ක් දක්වා (සිංහල හා දෙමළ ඇතුළු ලෝක භාෂා සඳහා) භාවිත කරයි.',
            highlightTerm: 'ASCII & Unicode'
          }
        ]
      }
    ],
    pastPaperQuestions: [
      {
        id: 'pp-2023-g10-u2-q1',
        year: 2023,
        paperType: 'Paper I',
        badgeText: '2023 O/L Paper I - Q03',
        questionEn: 'Which of the following is equivalent to the Hexadecimal number 2F₁₆?',
        questionSi: 'ෂඩ්දශම 2F₁₆ සංඛ්‍යාවට සමාන වන්නේ පහත කුමක්ද?',
        type: 'mcq',
        options: [
          { id: '1', en: '47 in decimal', si: 'දශම 47' },
          { id: '2', en: '32 in decimal', si: 'දශම 32' },
          { id: '3', en: '00101111 in binary', si: 'ද්වීමය 00101111' },
          { id: '4', en: 'Both (1) and (3)', si: '(1) සහ (3) දෙකම' }
        ],
        correctOptionId: '4',
        explanationEn: '2F₁₆ = (2 * 16) + 15 = 47₁₀. In binary: 2 = 0010, F = 1111 -> 00101111₂. Both are correct!',
        explanationSi: '2F₁₆ = (2 * 16) + 15 = 47₁₀. ද්වීමයෙන්: 2 = 0010, F = 1111 -> 00101111₂. දෙකම නිවැරදියි!'
      }
    ]
  },

  'g10-u3': {
    id: 'g10-u3',
    grade: '10',
    unitNumber: 3,
    titleEn: 'Computer Hardware and System Components',
    titleSi: 'පරිගණක දෘඩාංග සහ පද්ධති සංරචක',
    subtopics: [
      {
        id: '3.1',
        number: '3.1',
        titleEn: 'Central Processing Unit (CPU)',
        titleSi: 'මධ්‍ය සැකසුම් ඒකකය (CPU)',
        blocks: [
          {
            id: 'b3-1',
            en: 'The Central Processing Unit (CPU) is known as the brain of the computer. It consists of three primary components: Arithmetic Logic Unit (ALU), Control Unit (CU), and Internal Registers / Cache.',
            si: 'මධ්‍ය සැකසුම් ඒකකය (CPU) පරිගණකයේ මොළය ලෙස හැඳින්වේ. එහි ප්‍රධාන කොටස් 3ක් ඇත: අංකගණිත හා තර්කන ඒකකය (ALU), පාලන ඒකකය (CU), සහ අභ්‍යන්තර රෙජිස්ටර් / කැෂේ මතකය.',
            highlightTerm: 'CPU Architecture'
          }
        ],
        checkpointQuiz: {
          id: 'q-3.1',
          questionEn: 'Which unit inside the CPU manages the fetching and execution sequence of instructions?',
          questionSi: 'උපදෙස් ලබාගැනීම සහ ක්‍රියාත්මක කිරීමේ අනුපිළිවෙල පාලනය කරන්නේ CPU හි කුමන ඒකකයද?',
          options: [
            { id: '1', en: 'Control Unit (CU)', si: 'පාලන ඒකකය (CU)' },
            { id: '2', en: 'Arithmetic Logic Unit (ALU)', si: 'අංකගණිත හා තර්කන ඒකකය (ALU)' },
            { id: '3', en: 'RAM', si: 'ප්‍රධාන මතකය (RAM)' },
            { id: '4', en: 'Hard Disk', si: 'දෘඩ තැටිය' }
          ],
          correctOptionId: '1',
          explanationEn: 'The Control Unit (CU) coordinates and supervises all components, directing instruction flow.',
          explanationSi: 'පාලන ඒකකය (CU) මගින් පරිගණකයේ සියලුම මෙහෙයුම් සහ දත්ත ගලායාම මෙහෙයවනු ලබයි.'
        }
      }
    ],
    pastPaperQuestions: [
      {
        id: 'pp-2022-g10-u3-q1',
        year: 2022,
        paperType: 'Paper I',
        badgeText: '2022 O/L Paper I - Q04',
        questionEn: 'Which of the following computer memories is the fastest in data access speed?',
        questionSi: 'පහත සඳහන් මතක අතරින් වැඩිම ප්‍රවේශ වේගයක් (fastest access speed) සහිත වන්නේ කුමක්ද?',
        type: 'mcq',
        options: [
          { id: '1', en: 'CPU Registers', si: 'CPU රෙජිස්ටර් මතකය' },
          { id: '2', en: 'Cache Memory', si: 'කැෂේ මතකය' },
          { id: '3', en: 'Main Memory (RAM)', si: 'ප්‍රධාන මතකය (RAM)' },
          { id: '4', en: 'Solid State Drive (SSD)', si: 'SSD ආචයන තැටිය' }
        ],
        correctOptionId: '1',
        explanationEn: 'Registers located inside the CPU silicon operate at CPU clock speeds, making them the fastest memory in the hierarchy.',
        explanationSi: 'CPU චිපය තුළම පිහිටා ඇති රෙජිස්ටර් මතකය පරිගණක මතක ධූරාවලියේ වේගවත්ම මතකය වේ.'
      }
    ]
  },

  'g10-u6': {
    id: 'g10-u6',
    grade: '10',
    unitNumber: 6,
    titleEn: 'Electronic Spreadsheets',
    titleSi: 'විද්‍යුත් පැතුරුම්පත්',
    subtopics: [
      {
        id: '6.1',
        number: '6.1',
        titleEn: 'Cell Referencing & Functions',
        titleSi: 'සෛල යොමු සහ ශ්‍රිත',
        blocks: [
          {
            id: 'b6-1',
            en: 'Relative referencing changes dynamically when copied across cells (e.g. =A1+B1). Absolute referencing freezes the column or row using dollar signs (e.g. =$A$1*0.12).',
            si: 'සාපේක්ෂ සෛල යොමු වෙනත් සෛලයකට පිටපත් කිරීමේදී සෛල ඛණ්ඩාංක වෙනස් වේ (උදා: =A1+B1). නිරපේක්ෂ සෛල යොමු $ සලකුණ භාවිතයෙන් සෛලය ස්ථාවරව තබා ගනී (උදා: =$A$1*0.12).',
            highlightTerm: 'Absolute & Relative Referencing'
          }
        ],
        checkpointQuiz: {
          id: 'q-6.1',
          questionEn: 'What happens to the formula =$B$2*C1 when copied down to the next row?',
          questionSi: '=$B$2*C1 සූත්‍රය පහළ පේළියට පිටපත් කළ විට කුමක් සිදුවේද?',
          options: [
            { id: '1', en: '=$B$2*C2', si: '=$B$2*C2' },
            { id: '2', en: '=$B$3*C2', si: '=$B$3*C2' },
            { id: '3', en: '=$B$2*C1', si: '=$B$2*C1' },
            { id: '4', en: '=B2*C2', si: '=B2*C2' }
          ],
          correctOptionId: '1',
          explanationEn: '$B$2 remains fixed (absolute), while C1 increments to C2 (relative).',
          explanationSi: '$B$2 නිරපේක්ෂ බැවින් නොවෙනස්ව පවතින අතර C1 සාපේක්ෂ බැවින් C2 බවට පත්වේ.'
        }
      }
    ],
    pastPaperQuestions: [
      {
        id: 'pp-2023-g10-u6-p2',
        year: 2023,
        paperType: 'Paper II',
        badgeText: '2023 O/L Paper II - Q02',
        questionEn: 'Write the spreadsheet formula to calculate the average mark of student Rizwan across English (B4), Maths (C4), and Science (D4).',
        questionSi: 'රිස්වාන් සිසුවාගේ ඉංග්‍රීසි (B4), ගණිතය (C4) සහ විද්‍යාව (D4) ලකුණුවල සාමාන්‍යය ගණනය කිරීමේ පැතුරුම්පත් සූත්‍රය ලියන්න.',
        type: 'structured',
        sampleAnswerEn: '=AVERAGE(B4:D4) or =(B4+C4+D4)/3',
        sampleAnswerSi: '=AVERAGE(B4:D4) හෝ =(B4+C4+D4)/3',
        explanationEn: 'Both AVERAGE range function and direct sum division are valid answers in the O/L marking scheme.',
        explanationSi: 'AVERAGE ශ්‍රිතය හෝ ඓක්‍යය 3න් බෙදීම යන ක්‍රම දෙකම පිළිගැනේ.'
      }
    ]
  },

  'g11-u2': {
    id: 'g11-u2',
    grade: '11',
    unitNumber: 2,
    titleEn: 'Programming Concepts & Algorithms',
    titleSi: 'ක්‍රමලේඛනය සහ ඇල්ගොරිතම',
    subtopics: [
      {
        id: '11.2.1',
        number: '2.1',
        titleEn: 'Flowchart Symbols & Control Structures',
        titleSi: 'ගැලීම් සටහන් සංකේත සහ පාලන ව්‍යුහ',
        blocks: [
          {
            id: 'b11-2-1',
            en: 'An algorithm is a step-by-step sequence of instructions to solve a given computational problem. Standard flowchart symbols include: Oval (Terminal - Start/Stop), Parallelogram (Input/Output), Rectangle (Process), and Diamond (Decision).',
            si: 'ඇල්ගොරිතමයක් යනු යම් ගැටලුවක් විසඳීම සඳහා වූ පියවරෙන් පියවර උපදෙස් මාලාවකි. සම්මත ගැලීම් සටහන් සංකේත: ඉලිප්සය (ආරම්භය/අවසානය), සමාන්තරාස්‍රය (ආදානය/ප්‍රතිදානය), ඍජුකෝණාස්‍රය (සැකසීම), සහ රම්බසය (තීරණය).',
            highlightTerm: 'Flowchart Symbols'
          },
          {
            id: 'b11-2-2',
            en: 'The three fundamental control structures are Sequence (step after step), Selection (IF-THEN-ELSE), and Iteration / Repetition (WHILE, REPEAT-UNTIL, FOR loops).',
            si: 'මූලික පාලන ව්‍යුහ 3කි: අනුක්‍රමය (එකිනෙක පසුපස සිදුවන පියවර), තේරීම (IF-THEN-ELSE), සහ පුනරාවර්තනය (WHILE, REPEAT-UNTIL, FOR ලූප).',
            highlightTerm: 'Control Structures'
          }
        ],
        checkpointQuiz: {
          id: 'q-11.2.1',
          questionEn: 'Which flowchart symbol is used to represent the conditional test: "Is Mark >= 50?"',
          questionSi: '"ලකුණු >= 50 ද?" යන කොන්දේසි පරීක්ෂාව නිරූපණය කිරීමට යොදාගන්නා ගැලීම් සටහන් සංකේතය කුමක්ද?',
          options: [
            { id: '1', en: 'Diamond (Rhombus)', si: 'රම්බසය (තීරණ සංකේතය)' },
            { id: '2', en: 'Parallelogram', si: 'සමාන්තරාස්‍රය' },
            { id: '3', en: 'Rectangle', si: 'ඍජුකෝණාස්‍රය' },
            { id: '4', en: 'Circle', si: 'වෘත්තය' }
          ],
          correctOptionId: '1',
          explanationEn: 'Decisions and branching conditions are represented by a Diamond (Decision box).',
          explanationSi: 'කොන්දේසි පරීක්ෂාව සහ තීරණ ගැනීම සඳහා රම්බසය (Diamond) භාවිත කෙරේ.'
        }
      }
    ],
    pastPaperQuestions: [
      {
        id: 'pp-2022-g11-u2-p1',
        year: 2022,
        paperType: 'Paper I',
        badgeText: '2022 O/L Paper I - Q25',
        questionEn: 'What is the final value printed by the following pseudocode: Count = 1; Total = 0; While Count <= 3 do Total = Total + Count; Count = Count + 1; EndWhile; Display Total',
        questionSi: 'පහත ව්‍යාජ කේතයෙන් මුද්‍රණය වන අවසාන අගය කුමක්ද: Count = 1; Total = 0; While Count <= 3 do Total = Total + Count; Count = Count + 1; EndWhile; Display Total',
        type: 'mcq',
        options: [
          { id: '1', en: '6', si: '6' },
          { id: '2', en: '3', si: '3' },
          { id: '3', en: '10', si: '10' },
          { id: '4', en: '4', si: '4' }
        ],
        correctOptionId: '1',
        explanationEn: 'Iteration 1: Total = 0+1=1, Count=2. Iteration 2: Total=1+2=3, Count=3. Iteration 3: Total=3+3=6, Count=4. Loop ends. Output = 6.',
        explanationSi: '1 වන වටය: Total = 1, Count = 2. 2 වන වටය: Total = 3, Count = 3. 3 වන වටය: Total = 6, Count = 4. ලූපය අවසන් වේ. ප්‍රතිදානය = 6.'
      }
    ]
  },

  'g11-u3': {
    id: 'g11-u3',
    grade: '11',
    unitNumber: 3,
    titleEn: 'Web Authoring with HTML & CSS',
    titleSi: 'HTML සහ CSS මගින් වෙබ් අඩවි නිර්මාණය',
    subtopics: [
      {
        id: '11.3.1',
        number: '3.1',
        titleEn: 'HTML Tags, Tables and Hyperlinks',
        titleSi: 'HTML ටැග්, වගු සහ අධිසබැඳි',
        blocks: [
          {
            id: 'b11-3-1',
            en: 'HTML (HyperText Markup Language) defines structure. Key tags include <html>, <head>, <title>, <body>. Tables use <table>, <tr> (table row), <th> (table header), and <td> (table data cell). Hyperlinks use <a href="...">.',
            si: 'HTML මගින් වෙබ් පිටුවක ව්‍යුහය තනනු ලබයි. ප්‍රධාන ටැග්: <html>, <head>, <title>, <body>. වගු සඳහා <table>, <tr> (පේළිය), <th> (ශීර්ෂකය), සහ <td> (දත්ත සෛලය) ද, අධිසබැඳි සඳහා <a href="..."> ද භාවිත වේ.',
            highlightTerm: 'HTML Core Tags'
          }
        ],
        checkpointQuiz: {
          id: 'q-11.3.1',
          questionEn: 'Which HTML attribute is used to combine 3 adjacent columns into a single cell in a table?',
          questionSi: 'වගුවක යාබද තීරු 3ක් තනි සෛලයක් බවට ඒකාබද්ධ කිරීමට භාවිත වන HTML උපලක්ෂණය (attribute) කුමක්ද?',
          options: [
            { id: '1', en: 'colspan="3"', si: 'colspan="3"' },
            { id: '2', en: 'rowspan="3"', si: 'rowspan="3"' },
            { id: '3', en: 'merge="3"', si: 'merge="3"' },
            { id: '4', en: 'span="3"', si: 'span="3"' }
          ],
          correctOptionId: '1',
          explanationEn: 'colspan expands a table cell across multiple columns, while rowspan expands across multiple rows.',
          explanationSi: 'තීරු ඒකාබද්ධ කිරීමට colspan ද, පේළි ඒකාබද්ධ කිරීමට rowspan ද යොදා ගැනේ.'
        }
      }
    ],
    pastPaperQuestions: [
      {
        id: 'pp-2021-g11-u3-p1',
        year: 2021,
        paperType: 'Paper I',
        badgeText: '2021 O/L Paper I - Q30',
        questionEn: 'Which HTML tag produces an ordered (numbered) list?',
        questionSi: 'අංකිත (ordered) ලැයිස්තුවක් නිර්මාණය කිරීම සඳහා භාවිත වන HTML ටැගය කුමක්ද?',
        type: 'mcq',
        options: [
          { id: '1', en: '<ol>', si: '<ol>' },
          { id: '2', en: '<ul>', si: '<ul>' },
          { id: '3', en: '<li>', si: '<li>' },
          { id: '4', en: '<dl>', si: '<dl>' }
        ],
        correctOptionId: '1',
        explanationEn: '<ol> creates an Ordered List (1, 2, 3), whereas <ul> creates an Unordered List with bullet points.',
        explanationSi: '<ol> මඟින් අංකිත ලැයිස්තු ද, <ul> මඟින් බුලට් ලක්ෂ්‍ය සහිත අනංකිත ලැයිස්තු ද සාදයි.'
      }
    ]
  }
};
