// Verbatim dual-medium syllabus data extracted from public/lessons & public/orginallessons
import { GeneralLessonData } from '../allLessonsData';

export const G10_U8_DATA: GeneralLessonData = {
  "id": "g10-u8",
  "grade": "10",
  "unitNumber": 8,
  "titleEn": "Electronic Presentations",
  "titleSi": "ඉලෙක්ට්‍රොනික සමර්පණ",
  "subtopics": [
    {
      "id": "g10-u8-st-1",
      "number": "8.1",
      "titleEn": "Introduction to Electronic Presentations",
      "titleSi": "ඉලෙක්ට්‍රොනික සමර්පණ පිළිබඳ හැඳින්වීම",
      "summaryEn": "Concepts of presentations, software definition, traditional vs electronic media comparison, and FOSS/proprietary classification.",
      "summarySi": "සමර්පණ සංකල්පය, මෘදුකාංග අර්ථ දැක්වීම, සාම්ප්‍රදායික හා ඉලෙක්ට්‍රොනික මාධ්‍ය සංසන්දනය සහ මෘදුකාංග වර්ගීකරණය.",
      "blocks": [
        {
          "id": "b-g10-u8-1-1",
          "en": "Presentation:\nA presentation is a process of delivering information, ideas, concepts, or knowledge to an audience in a structured and engaging manner.",
          "si": "සමර්පණයක්:\nසමර්පණයක් යනු යම් කිසි මාතෘකාවක් හෝ සිදුවීමක් වටා ගොනු කර ගත් කරුණු සමූහයක්, වඩාත් ක්‍රමානුකූලව හා කිසි යම් පිළිවෙළකට අන් අයට ඉදිරිපත් කිරීමේ ක්‍රියාවලියයි.",
          "highlightTerm": "Presentation (සමර්පණයක්)"
        },
        {
          "id": "b-g10-u8-1-2",
          "en": "Presentation Software:\nA software which helps to create presentations with multimedia contents is called a presentation software.",
          "si": "ඉලෙක්ට්‍රොනික සමර්පණ මෘදුකාංග:\nඉලෙක්ට්‍රොනික සමර්පණ මෘදුකාංග යන්නෙන් අදහස් කරන්නේ යම් කිසි මාතෘකාවක් හෝ සිදුවීමක් වටා ගොනු කර ගත හැකි කරුණු සමූහයක්, වඩාත් ක්‍රමානුකූලව හා කිසි යම් පිළිවෙළකට අන් අයට ඉදිරිපත් කිරීමට සහාය වන බහුමාධ්‍ය ලක්ෂණ අන්තර්ගත පරිගණක මෘදුකාංග විශේෂයකි.",
          "highlightTerm": "Presentation Software"
        },
        {
          "id": "b-g10-u8-1-3",
          "en": "Software Categories:\n- Proprietary: Microsoft PowerPoint, Apple Keynote, Corel Presentations\n- Free & Open Source (FOSS): LibreOffice Impress, OpenOffice.org Impress\n- Cloud-Based: Google Slides, MS PowerPoint Online (Office 365)",
          "si": "මෘදුකාංග වර්ගීකරණය:\n- හිමිකාර (Proprietary): Microsoft PowerPoint, Apple Keynote, Corel Presentations\n- නිදහස් හා විවෘත මූලාශ්‍ර (FOSS): LibreOffice Impress, OpenOffice.org Impress\n- වලාකුළු ආශ්‍රිත (Cloud): Google Slides, MS PowerPoint Online",
          "highlightTerm": "Software Categories"
        }
      ],
      "tableData": {
        "headers": [
          { "en": "Feature", "si": "ලක්ෂණය" },
          { "en": "Traditional Presentation", "si": "සාම්ප්‍රදායික සමර්පණ" },
          { "en": "Electronic Presentation", "si": "ඉලෙක්ට්‍රොනික සමර්පණ" }
        ],
        "rows": [
          {
            "Feature": { "en": "Media Used", "si": "භාවිත වන මාධ්‍ය" },
            "Traditional Presentation": { "en": "Posters, blackboards, wall charts, OHP, static pictures", "si": "පෝස්ටර්, කළු ලෑල්ල, ශීර්ෂ ප්‍රක්ෂේපකය (OHP), ස්ථාවර පින්තූර" },
            "Electronic Presentation": { "en": "Multimedia: Text, numbers, images, audio, video clips, animations, charts", "si": "බහුමාධ්‍ය: පෙළ, සංඛ්‍යා, පින්තූර, ශබ්ද, වීඩියෝ, සජීවීකරණ" }
          },
          {
            "Feature": { "en": "Flexibility & Editing", "si": "නම්‍යශීලී බව සහ සංස්කරණය" },
            "Traditional Presentation": { "en": "Difficult to edit; requires re-drawing or re-writing", "si": "සංස්කරණය අපහසුය; නැවත ඇඳීමට හෝ ලිවීමට සිදුවේ" },
            "Electronic Presentation": { "en": "Easy to edit, insert, delete, or modify slides anytime", "si": "ඕනෑම වේලාවක පහසුවෙන් සංස්කරණය කළ හැක" }
          },
          {
            "Feature": { "en": "Audience Engagement", "si": "ප්‍රේක්ෂක ආකර්ෂණය" },
            "Traditional Presentation": { "en": "Static visuals; limited audience engagement", "si": "ස්ථාවර දර්ශන; අඩු ආකර්ෂණයක් හිමිවේ" },
            "Electronic Presentation": { "en": "High engagement with slide transitions, custom animations, and audio/video", "si": "සජීවීකරණ හා සංක්‍රමණ නිසා ඉහළ ආකර්ෂණයක් හිමිවේ" }
          },
          {
            "Feature": { "en": "Storage & Sharing", "si": "ගබඩා කිරීම හා බෙදාහැරීම" },
            "Traditional Presentation": { "en": "Bulky paper/posters; difficult to transport or duplicate", "si": "භෞතික පෝස්ටර්; ප්‍රවාහනය හා ගබඩා කිරීම අපහසුය" },
            "Electronic Presentation": { "en": "Digital storage on USB, cloud; easily printed as handouts", "si": "ඩිජිටල් ලෙස ගබඩා කළ හැක; අත්පත්‍රිකා ලෙස මුද්‍රණය කළ හැක" }
          }
        ]
      },
      "checkpointQuiz": {
        "id": "q-g10-u8-1",
        "questionEn": "Which of the following is classified as a Free and Open Source Software (FOSS) for electronic presentations?",
        "questionSi": "ඉලෙක්ට්‍රොනික සමර්පණ සඳහා භාවිත වන නිදහස් හා විවෘත මූලාශ්‍ර මෘදුකාංගයක් (FOSS) වන්නේ පහත සඳහන් කවරක්ද?",
        "options": [
          { "id": "1", "en": "Microsoft PowerPoint", "si": "Microsoft PowerPoint" },
          { "id": "2", "en": "Apple Keynote", "si": "Apple Keynote" },
          { "id": "3", "en": "LibreOffice Impress", "si": "LibreOffice Impress" },
          { "id": "4", "en": "Google Slides", "si": "Google Slides" }
        ],
        "correctOptionId": "3",
        "explanationEn": "LibreOffice Impress is Free and Open Source Software (FOSS), while PowerPoint and Keynote are proprietary and Google Slides is cloud freeware.",
        "explanationSi": "LibreOffice Impress යනු නිදහස් හා විවෘත මූලාශ්‍ර මෘදුකාංගයකි (FOSS). MS PowerPoint සහ Apple Keynote හිමිකාර මෘදුකාංග වේ."
      }
    },
    {
      "id": "g10-u8-st-2",
      "number": "8.2",
      "titleEn": "Characteristics of a Quality Presentation",
      "titleSi": "ගුණාත්මක සමර්පණයක ලක්ෂණ සහ සැලසුම් නීති",
      "summaryEn": "Textbook guidelines: 6-9 lines per slide, font sizes >= 32 pt for titles, color contrast, media restraint (max 2 images, 1 animation/video).",
      "summarySi": "පෙළපොත් මාර්ගෝපදේශ: ස්ලයිඩයකට පේළි 6-9, මාතෘකා >= 32 pt, වර්ණ ප්‍රභේදනය, උපරිම පින්තූර 2ක් සහ සජීවීකරණ/වීඩියෝ 1ක්.",
      "blocks": [
        {
          "id": "b-g10-u8-2-1",
          "en": "1. Number of Lines per Slide:\nThe most appropriate number of lines per slide is 6–9. If more than that are added, it may take more time to read or font size may become too small.",
          "si": "1. එක් ස්ලයිඩයක පේළි සංඛ්‍යාව:\nඑක් ස්ලයිඩයක/ලොදයක අඩංගු කළ යුතු පේළි සංඛ්‍යාව 6–9 අතර ප්‍රමාණයක් වීම වඩාත් සුදුසු වේ. ඊට වඩා වැඩි වූ විට කියවීමට වැඩි කාලයක් ගත වීම හෝ අකුරුවල ප්‍රමාණය කුඩා වීම සිදු විය හැක.",
          "highlightTerm": "6–9 Lines Rule"
        },
        {
          "id": "b-g10-u8-2-2",
          "en": "2. Font Size:\nThe distance between the screen and the audience is an important factor. It is an accepted norm to keep the font size at 32 points or more for titles and at least 24 points for body text.",
          "si": "2. අකුරුවල ප්‍රමාණය:\nතිරයේ සිට ප්‍රේක්ෂකයාට ඇති දුර අනුව අකුරුවල ප්‍රමාණය තීරණය කළ යුතුය. සාමාන්‍යයෙන් අකුරුවල ප්‍රමාණය පොයින්ට් 32 (32 pt) හෝ ඊට වැඩි අගයක තබා ගැනීම සම්මත පිළිගැනීමයි.",
          "highlightTerm": "Font Size (32 pt+)"
        },
        {
          "id": "b-g10-u8-2-3",
          "en": "3. Inserting Images & Media:\nIt is not suitable to insert more than two images, drawings, tables or graphs in each slide. Use maximum one animation or video per slide to avoid overlapping audio confusion.",
          "si": "3. පින්තූර හා මාධ්‍ය ඇතුළත් කිරීම:\nඑක් ස්ලයිඩයක ඇතුළත් කිරීමට සුදුසු වන්නේ උපරිම වශයෙන් පින්තූර, චිත්‍රක, වගු හෝ ප්‍රස්ථාර 2 ක් පමණි. ශබ්ද මිශ්‍ර වීම වැළැක්වීමට එක් ස්ලයිඩයකට එක් සජීවීකරණයක් හෝ වීඩියෝ පටයක් පමණක් යොදන්න.",
          "highlightTerm": "Media Restraint (<=2 Images)"
        },
        {
          "id": "b-g10-u8-2-4",
          "en": "4. Color & Contrast:\nMaintain high contrast between background and foreground. Avoid using dark red color throughout the slide as it strains viewers' eyes.",
          "si": "4. වර්ණ සහ ප්‍රභේදනය:\nඅකුරුවලට හා පසුබිමට යොදන වර්ණ ප්‍රභේදනය (Contrast) ඉහළ විය යුතුය. රතු වර්ණය ස්ලයිඩය පුරා බහුලව යෙදීමෙන් නැරඹීමට බාධා ඇති වේ.",
          "highlightTerm": "High Contrast"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g10-u8-2",
        "questionEn": "What is the recommended number of text lines per slide according to official syllabus guidelines?",
        "questionSi": "නිල විෂය නිර්දේශ මාර්ගෝපදේශවලට අනුව එක් ස්ලයිඩයක තිබිය යුතු නිර්දේශිත පෙළ පේළි ගණන කොපමණද?",
        "options": [
          { "id": "1", "en": "1 to 2 lines", "si": "පේළි 1 සිට 2 දක්වා" },
          { "id": "2", "en": "6 to 9 lines", "si": "පේළි 6 සිට 9 දක්වා" },
          { "id": "3", "en": "12 to 15 lines", "si": "පේළි 12 සිට 15 දක්වා" },
          { "id": "4", "en": "Unlimited lines", "si": "අසීමිත පේළි ගණනක්" }
        ],
        "correctOptionId": "2",
        "explanationEn": "To maintain clarity and legibility, 6 to 9 lines of bulleted text per slide is the standard rule.",
        "explanationSi": "පැහැදිලි බව සහ කියවීමේ පහසුව පවත්වා ගැනීම සඳහා එක් ස්ලයිඩයක පෙළ පේළි 6 සිට 9 දක්වා සීමා කිරීම සම්මත නීතියයි."
      }
    },
    {
      "id": "g10-u8-st-3",
      "number": "8.3",
      "titleEn": "User Interface & Workspaces",
      "titleSi": "පරිශීලක අතුරුමුහුණත සහ ප්‍රධාන කොටස්",
      "summaryEn": "Workspace components: Title Bar, Ribbon tabs, Slide/Outline Pane, Main Workspace, Tasks Pane, and Notes Pane.",
      "summarySi": "ප්‍රධාන අතුරුමුහුණත් සංරචක: මාතෘකා තීරුව, රිබන් පටති, ස්ලයිඩ පැනලය, ප්‍රධාන වැඩපිටිය, කාර්ය කවුළුව සහ සටහන් තීරුව.",
      "blocks": [
        {
          "id": "b-g10-u8-3-1",
          "en": "Key UI Elements:\n1. Quick Access Toolbar: Save, Undo, Redo, Slide Show.\n2. Title Bar: File name and application title.\n3. Ribbon & Tabs: Home, Insert, Design, Transitions, Animations, Slide Show, View.\n4. Slide Pane: Miniature thumbnail views of slides for selection and reordering.\n5. Main Workspace: Canvas where slides are created and formatted.\n6. Notes Pane: Space to type presenter cues not visible to projected audience.",
          "si": "ප්‍රධාන සංරචක:\n1. Quick Access Toolbar: Save, Undo, Redo, Slide Show.\n2. මාතෘකා තීරුව: ගොනු නාමය සහ මෘදුකාංග නාමය.\n3. රිබනය සහ පටති: Home, Insert, Design, Transitions, Animations, Slide Show, View.\n4. ලොද කවුළුව (Slide Pane): ස්ලයිඩ සිඟිති රූ පෙන්වන පුවරුව.\n5. ප්‍රධාන වැඩපිටිය: ස්ලයිඩ නිර්මාණය කරන වැඩතලය.\n6. සටහන් තීරුව (Notes Pane): කථිකයාගේ සටහන් ලියන තීරුව.",
          "highlightTerm": "Interface Components"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g10-u8-3",
        "questionEn": "Which component allows a presenter to type private speaking notes that do not appear on the projection screen?",
        "questionSi": "ප්‍රක්ෂේපණ තිරයේ ප්‍රේක්ෂකයන්ට නොපෙනෙන සේ කථිකයාට තම සටහන් ලිවීමට ඉඩ සලසන සංරචකය කුමක්ද?",
        "options": [
          { "id": "1", "en": "Title Bar", "si": "Title Bar" },
          { "id": "2", "en": "Slide Pane", "si": "Slide Pane" },
          { "id": "3", "en": "Notes Pane", "si": "Notes Pane (සටහන් තීරුව)" },
          { "id": "4", "en": "Status Bar", "si": "Status Bar" }
        ],
        "correctOptionId": "3",
        "explanationEn": "The Notes Pane beneath the slide canvas allows presenters to type speaker cues visible only in Presenter View.",
        "explanationSi": "Notes Pane තුළ කථිකයාට තම සටහන් ලිවිය හැකි අතර ප්‍රේක්ෂකයන්ට ඒවා නොපෙනේ."
      }
    },
    {
      "id": "g10-u8-st-4",
      "number": "8.4",
      "titleEn": "Slide Layouts & The Master Slide",
      "titleSi": "ලොද පරිසැලසුම් සහ ප්‍රධාන කදාව (Slide Master)",
      "summaryEn": "Slide layouts (Title, Title and Content, Comparison, Blank) and Master Slide architecture for consistent global formatting.",
      "summarySi": "ලොද පරිසැලසුම් (Title Slide, Title and Content, Comparison, Blank) සහ ඒකාකාරී පසුබිම් සඳහා Slide Master භාවිතය.",
      "blocks": [
        {
          "id": "b-g10-u8-4-1",
          "en": "Slide Layouts:\n- Title Slide: First introductory slide for title & subtitle.\n- Title and Content: Single placeholder for text, chart, table, or video.\n- Title and Two Content: Two side-by-side boxes for comparisons or text + map.\n- Blank: Clean canvas without default placeholders.",
          "si": "ස්ලයිඩ පරිසැලසුම්:\n- Title Slide: ප්‍රධාන මාතෘකාව හා උපමාතෘකාව සඳහා.\n- Title and Content: මාතෘකාවක් සහ එක් අන්තර්ගත කොටසක් (ලැයිස්තු, වගු, රූප) සඳහා.\n- Title and Two Content: මාතෘකාවක් සහ දෙපස අන්තර්ගතයන් දෙකක් (සසඳා බැලීම්, පෙළ + රූප) සඳහා.\n- Blank: සම්පූර්ණයෙන්ම හිස් ස්ලයිඩයක්.",
          "highlightTerm": "Slide Layouts"
        },
        {
          "id": "b-g10-u8-4-2",
          "en": "Slide Master:\nA master slide template that controls theme formatting, background styles, fonts, and logo placement across all slides automatically in the presentation.",
          "si": "ප්‍රධාන කදාව (Slide Master):\nඉදිරිපත් කිරීමේ සියලුම කදාවන්හි (Slides) පසුබිම, අකුරු විලාස සහ ලාංඡන එකවර පාලනය කරන ප්‍රධාන සැකිල්ලයි.",
          "highlightTerm": "Slide Master (ප්‍රධාන කදාව)"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g10-u8-4",
        "questionEn": "What is the primary benefit of applying formatting to the Slide Master?",
        "questionSi": "Slide Master (ප්‍රධාන කදාව) වෙත හැඩසැසීම් යෙදීමේ ප්‍රධාන වාසිය කුමක්ද?",
        "options": [
          { "id": "1", "en": "It automatically converts the presentation to an audio file", "si": "එය ස්වයංක්‍රීයව සමර්පණය ශ්‍රව්‍ය ගොනුවක් බවට පත් කරයි" },
          { "id": "2", "en": "It applies consistent themes, backgrounds, and logos across all slides simultaneously", "si": "එය සියලුම ස්ලයිඩයන්හි පසුබිම්, අකුරු සහ ලාංඡන එකවර ඒකාකාරීව සටහන් කරයි" },
          { "id": "3", "en": "It permanently deletes all slides", "si": "එය සියලුම ස්ලයිඩ ස්ථිරවම මකා දමයි" },
          { "id": "4", "en": "It runs a virus scan on the hard disk", "si": "එය පරිගණකයේ වෛරස පරීක්ෂාවක් සිදු කරයි" }
        ],
        "correctOptionId": "2",
        "explanationEn": "The Slide Master enforces uniform themes, fonts, and graphics across every slide in the presentation.",
        "explanationSi": "Slide Master මගින් සමර්පණයේ සියලු ස්ලයිඩයන්හි ඒකාකාරී පසුබිම සහ ලාංඡන එකවර පාලනය කරයි."
      }
    },
    {
      "id": "g10-u8-st-5",
      "number": "8.5",
      "titleEn": "Slide Transitions vs. Custom Animations",
      "titleSi": "ස්ලයිඩ සංක්‍රමණ සහ අභිමත සජීවීකරණ",
      "summaryEn": "Slide transitions (whole slide advancement) vs Custom animations (individual elements: Entrance, Emphasis, Exit, Motion Paths) and timing triggers.",
      "summarySi": "ස්ලයිඩ සංක්‍රාන්ති (මුළු ස්ලයිඩය මාරු වීම) සහ අභිමත සජීවීකරණ (තනි වස්තූන්: ප්‍රවේශ, අවධානය, නික්මයාම, චලන මාර්ග) සහ කාල ප්‍රේරක.",
      "blocks": [
        {
          "id": "b-g10-u8-5-1",
          "en": "Slide Transition:\nThe visual effect that occurs when you move from one slide to the next during a presentation. Settings include Effect options (Fade, Wipe, Push), Speed/Duration, Sound, and Advance Slide (On Click / Automatically After).",
          "si": "ස්ලයිඩ සංක්‍රමණය (Slide Transition):\nඑක් ස්ලයිඩයක සිට තවත් ස්ලයිඩයකට ගමන් කිරීමේ දී තිරය මත සිදුවන දෘශ්‍ය විපර්යාසයයි. සැකසුම්: විලාස (Fade, Wipe), වේගය, ශබ්ද, සහ මාරුවීම (On Click / Automatically After).",
          "highlightTerm": "Slide Transition"
        },
        {
          "id": "b-g10-u8-5-2",
          "en": "Custom Animation:\nA set of motion effects applied to individual objects (text boxes, pictures, shapes) inside a slide.\n4 Categories:\n1. Entrance: How the object enters the slide (Fly In, Appear, Zoom).\n2. Emphasis: How the object draws attention on slide (Spin, Color Change, Grow).\n3. Exit: How the object leaves the slide (Fly Out, Disappear).\n4. Motion Paths: Object travels along a specified trajectory.\nTriggers: On Click, With Previous (simultaneous), After Previous (automatic sequential).",
          "si": "අභිමත සජීවීකරණය (Custom Animation):\nස්ලයිඩයක් තුළ ඇති තනි තනි වස්තූන් (පෙළ, පින්තූර, හැඩතල) සඳහා යොදනු ලබන චලන බලපෑම් වේ.\nකාණ්ඩ 4:\n1. Entrance (ප්‍රවේශය): වස්තුව ස්ලයිඩය තුළට පැමිණෙන ආකාරය.\n2. Emphasis (අවධානය): දැනටමත් ඇති වස්තුවක් ඉස්මතු වන ආකාරය.\n3. Exit (නික්මයෑම): වස්තුව ස්ලයිඩයෙන් ඉවත් වන ආකාරය.\n4. Motion Paths (චලන මාර්ග): නියමිත රේඛාවක් ඔස්සේ චලනය වීම.\nප්‍රේරක: On Click, With Previous (සමගාමීව), After Previous (ස්වයංක්‍රීයව).",
          "highlightTerm": "Custom Animation"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g10-u8-5",
        "questionEn": "What is the technical difference between a Slide Transition and a Custom Animation?",
        "questionSi": "Slide Transition සහ Custom Animation අතර ඇති තාක්ෂණික වෙනස කුමක්ද?",
        "options": [
          { "id": "1", "en": "Slide Transition applies to individual words, while Custom Animation applies to full slides", "si": "Slide Transition තනි වචන සඳහා වන අතර Custom Animation මුළු ස්ලයිඩයටම වේ" },
          { "id": "2", "en": "Slide Transition applies to the whole slide advance, while Custom Animation applies to individual objects inside a slide", "si": "Slide Transition මුළු ස්ලයිඩය මාරු වීමට බලපාන අතර Custom Animation ස්ලයිඩය තුළ ඇති තනි තනි වස්තූන්ට බලපායි" },
          { "id": "3", "en": "There is no difference between them", "si": "ඒවා අතර වෙනසක් නැත" },
          { "id": "4", "en": "Slide Transition works only online", "si": "Slide Transition ක්‍රියා කරන්නේ මාර්ගගතව පමණි" }
        ],
        "correctOptionId": "2",
        "explanationEn": "Transitions affect screen movement between slides; Animations affect objects positioned inside a single slide.",
        "explanationSi": "Transition බලපාන්නේ ස්ලයිඩ අතර මාරු වීමටය. Animation බලපාන්නේ ස්ලයිඩය තුළ ඇති තනි තනි අංගයන්ටය."
      }
    },
    {
      "id": "g10-u8-st-6",
      "number": "8.6",
      "titleEn": "Delivery Views, Kiosks & Printing Handouts",
      "titleSi": "ඉදිරිපත් කිරීමේ දසුන් සහ අත්පත්‍රිකා මුද්‍රණය",
      "summaryEn": "Slide views (Normal, Slide Sorter, Presenter View, Slide Show), rehearsal timings, and Handout printing (1, 2, 3, 4, 6, 9 slides per page).",
      "summarySi": "දර්ශන මාදිලි (Normal, Slide Sorter, Presenter View, Slide Show), ස්වයංක්‍රීය කාල සැකසුම් සහ අත්පත්‍රිකා මුද්‍රණය.",
      "blocks": [
        {
          "id": "b-g10-u8-6-1",
          "en": "Views & Shortcuts:\n- F5: Start Slide Show from Slide 1 (Beginning).\n- Shift + F5: Start Slide Show from Current Slide.\n- Ctrl + M: Insert a New Slide.\n- Ctrl + N: Create a Brand New Presentation File.\n- Esc: Terminate Slide Show.\n- Slide Sorter View: Displays all slides as thumbnails for rapid drag-and-drop reordering.\n- Presenter View: Shows timer, speaker notes, and upcoming slide preview on presenter monitor.",
          "si": "දසුන් සහ කෙටිමං:\n- F5: මුල සිටම Slide Show ආරම්භ කිරීම.\n- Shift + F5: වත්මන් ස්ලයිඩයේ සිට Slide Show ආරම්භ කිරීම.\n- Ctrl + M: නව ස්ලයිඩයක් ඇතුළත් කිරීම.\n- Ctrl + N: නව සමර්පණ ගොනුවක් සෑදීම.\n- Esc: Slide Show නවතා දැමීම.\n- Slide Sorter View: ස්ලයිඩ අනුපිළිවෙල පහසුවෙන් මාරු කිරීමට සිඟිති රූ පෙන්වීම.\n- Presenter View: කථිකයාට සටහන්, කාල ගණකය සහ ඊළඟ ස්ලයිඩය පෙන්වීම.",
          "highlightTerm": "Views & Shortcuts"
        },
        {
          "id": "b-g10-u8-6-2",
          "en": "Printing Layouts:\n- Full Page Slides: 1 full slide per printed sheet.\n- Handouts: Prints 1, 2, 3, 4, 6, or 9 miniature slides per page. (3 slides per page prints ruled lines for audience notes).\n- Notes Pages: Prints slide miniature with presenter notes beneath.",
          "si": "මුද්‍රණ විකල්ප:\n- Full Page Slides: පිටුවකට එක් සම්පූර්ණ ස්ලයිඩය බැගින්.\n- Handouts (අත්පත්‍රිකා): පිටුවකට ස්ලයිඩ 1, 2, 3, 4, 6, හෝ 9 බැගින්. (පිටුවකට ස්ලයිඩ 3ක් තෝරාගත් විට සටහන් තබා ගැනීමට ඉරි සහිතව මුද්‍රණය වේ).\n- Notes Pages: ස්ලයිඩය හා ඉදිරිපත් කරන්නාගේ සටහන් සහිතව.",
          "highlightTerm": "Handouts (අත්පත්‍රිකා)"
        }
      ],
      "checkpointQuiz": {
        "id": "q-g10-u8-6",
        "questionEn": "Which Handout printing configuration provides ruled lines alongside each slide miniature for taking notes?",
        "questionSi": "සටහන් තබා ගැනීම සඳහා එක් එක් ස්ලයිඩය පසෙකින් ඉරි සහිතව (Ruled lines) මුද්‍රණය වන Handout ආකාරය කුමක්ද?",
        "options": [
          { "id": "1", "en": "1 Slide per page", "si": "පිටුවකට ස්ලයිඩ 1ක්" },
          { "id": "2", "en": "2 Slides per page", "si": "පිටුවකට ස්ලයිඩ 2ක්" },
          { "id": "3", "en": "3 Slides per page", "si": "පිටුවකට ස්ලයිඩ 3ක් (3 Slides per page)" },
          { "id": "4", "en": "9 Slides per page", "si": "පිටුවකට ස්ලයිඩ 9ක්" }
        ],
        "correctOptionId": "3",
        "explanationEn": "The 3 Slides per page Handout layout prints slide thumbnails on the left and ruled lines on the right for audience note-taking.",
        "explanationSi": "පිටුවකට ස්ලයිඩ 3ක් (3 slides per page) විකල්පය තෝරාගත් විට සටහන් ලිවීම සඳහා ඉරි සහිත රූල් මුද්‍රණය වේ."
      }
    }
  ],
  "pastPaperQuestions": [
    {
      "id": "pp-g10-u8-2020-1",
      "year": 2020,
      "paperType": "Paper I",
      "badgeText": "2020 O/L Paper I - Question 15",
      "questionEn": "15. Consider the following statements:\nA – Electronic presentations can be prepared using Microsoft Word and Open Office Writer\nB – Images can be included in the slides used in a slide projector\nC – Electronic presentations made using a computer can be displayed through multimedia projectors\nWhich of the above statements are correct?\n(1) A and B only   (2) A and C only   (3) B and C only   (4) All A, B and C",
      "questionSi": "15. පහත සඳහන් ප්‍රකාශ සලකා බලන්න:\nA – Microsoft Word සහ Open Office Writer භාවිතයෙන් ඉලෙක්ට්‍රොනික සමර්පණ සකස් කළ හැක\nB – ස්ලයිඩ් ප්‍රක්ෂේපකයක භාවිත වන ස්ලයිඩ තුළ පින්තූර අඩංගු කළ හැක\nC – පරිගණකයක් භාවිතයෙන් සකස් කරන ලද ඉලෙක්ට්‍රොනික සමර්පණ බහුමාධ්‍ය ප්‍රක්ෂේපක හරහා ප්‍රදර්ශනය කළ හැක\nඉහත ප්‍රකාශ අතුරින් නිවැරදි වන්නේ කුමනාකාරයෙන්ද?\n(1) A සහ B පමණි   (2) A සහ C පමණි   (3) B සහ C පමණි   (4) A, B සහ C සියල්ලම",
      "type": "mcq",
      "options": [
        { "id": "1", "en": "A and B only", "si": "A සහ B පමණි" },
        { "id": "2", "en": "A and C only", "si": "A සහ C පමණි" },
        { "id": "3", "en": "B and C only", "si": "B සහ C පමණි" },
        { "id": "4", "en": "All A, B and C", "si": "A, B සහ C සියල්ලම" }
      ],
      "correctOptionId": "3",
      "explanationEn": "Word and Writer are word processing tools, not presentation tools. Statements B and C are factually correct.",
      "explanationSi": "Word සහ Writer යනු වචන සකසන මෘදුකාංග වේ. B සහ C ප්‍රකාශ නිවැරදි වේ."
    },
    {
      "id": "pp-g10-u8-2020-2",
      "year": 2020,
      "paperType": "Paper I",
      "badgeText": "2020 O/L Paper I - Question 17",
      "questionEn": "17. Which of the following statements are correct regarding the presentation software?\nA – The animation effects can be applied only to a single object on a given slide\nB – Audio recordings can be included in a presentation slide\nC – It is recommended to use less than ten text lines in a single slide\n(1) A and B only   (2) A and C only   (3) B and C only   (4) All A, B and C",
      "questionSi": "17. ඉලෙක්ට්‍රොනික සමර්පණ මෘදුකාංග සම්බන්ධයෙන් පහත දැක්වෙන ප්‍රකාශ අතුරින් කුමක් නිවැරදි වේද?\nA – සජීවීකරණ බලපෑම් යෙදිය හැක්කේ යම් ලබා දී ඇති ස්ලයිඩයක ඇති තනි වස්තුවකට පමණි\nB – සමර්පණ ස්ලයිඩයකට ශ්‍රව්‍ය පටිගත කිරීම් ඇතුළත් කළ හැක\nC – තනි ස්ලයිඩයක පෙළ පේළි දහයකට වඩා අඩුවෙන් භාවිත කිරීම නිර්දේශ කෙරේ\n(1) A සහ B පමණි   (2) A සහ C පමණි   (3) B සහ C පමණි   (4) A, B සහ C සියල්ලම",
      "type": "mcq",
      "options": [
        { "id": "1", "en": "A and B only", "si": "A සහ B පමණි" },
        { "id": "2", "en": "A and C only", "si": "A සහ C පමණි" },
        { "id": "3", "en": "B and C only", "si": "B සහ C පමණි" },
        { "id": "4", "en": "All A, B and C", "si": "A, B සහ C සියල්ලම" }
      ],
      "correctOptionId": "3",
      "explanationEn": "Multiple animations can be applied to objects on a slide. Audio can be added (B is true), and 6-9 lines is recommended (C is true).",
      "explanationSi": "ස්ලයිඩයක වස්තු කිහිපයකට සජීවීකරණ යෙදිය හැක. ශ්‍රව්‍ය ඇතුළත් කළ හැකි අතර (B සත්‍ය), පේළි 6-9 ක් නිර්දේශ කෙරේ (C සත්‍ය)."
    },
    {
      "id": "pp-g10-u8-2023-3",
      "year": 2023,
      "paperType": "Paper II",
      "badgeText": "2023 O/L Paper II - Question 01 (iv)",
      "questionEn": "1. (iv) State whether the following statements regarding presentation software are true or false:\nA - The Title and Content slide layout can be used to create a slide with a title, some text bullets and two images.\nB - Video content cannot be added to an electronic presentation.\nC - It is good to add a lot of long sentences to each slide.\nD - Before making the slides, it is suitable to plan the presentation considering its purpose, the time duration and the expected audience.",
      "questionSi": "1. (iv) සමර්පණ මෘදුකාංග සම්බන්ධයෙන් පහත දැක්වෙන ප්‍රකාශ නිවැරදි ද වැරදි ද යන්න ලියන්න:\nA - මාතෘකාවක්, පෙළ බුලට් කිහිපයක් සහ පින්තූර දෙකක් සහිත ස්ලයිඩයක් සෑදීමට 'Title and Content' ස්ලයිඩ පරිසැලසුම භාවිත කළ හැක.\nB - ඉලෙක්ට්‍රොනික සමර්පණයකට වීඩියෝ අන්තර්ගතයන් එකතු කළ නොහැක.\nC - එක් එක් ස්ලයිඩයට දිගු වාක්‍ය රාශියක් එකතු කිරීම සුදුසුය.\nD - ස්ලයිඩ සෑදීමට පෙර, සමර්පණයේ අරමුණ, කාලසීමාව සහ අපේක්ෂිත ප්‍රේක්ෂකයින් සලකා බලමින් සමර්පණය සැලසුම් කිරීම සුදුසුය.",
      "type": "structured",
      "sampleAnswerEn": "A: False (Requires 'Title and Two Content' or custom arrangement)\nB: False (Video clips can be inserted)\nC: False (Use concise bullet points, 6-9 lines)\nD: True (Planning is an essential first step)",
      "sampleAnswerSi": "A: අසත්‍ය (වැරදිය)\nB: අසත්‍ය (වැරදිය)\nC: අසත්‍ය (වැරදිය)\nD: සත්‍ය (නිවැරදිය)",
      "explanationEn": "Verbatim official examination question from 2023 O/L Paper II - Question 01 (iv).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2023 O/L Paper II - Question 01 (iv)."
    },
    {
      "id": "pp-g10-u8-2024-4",
      "year": 2024,
      "paperType": "Paper II",
      "badgeText": "2024 O/L Paper II - Question 01 (vi)",
      "questionEn": "1. (vi) Suppose that you want to create a presentation about Sri Lanka consisting of the following four slides:\n1. Title slide\n2. Slide with a map of South Asia\n3. Slide with a few text facts about Sri Lanka\n4. Slide with a list of nine provinces on the left and a map on the right\nSelect the most suitable slide layout option from: {'Title Slide', 'Title and Content', 'Title and Two Content', 'Blank'} for each slide.",
      "questionSi": "1. (vi) ශ්‍රී ලංකාව පිළිබඳ පහත දක්වා ඇති ස්ලයිඩ හතරෙන් සමන්විත සමර්පණයක් සෑදීමට වඩාත්ම සුදුසු ස්ලයිඩ පරිසැලසුම් තෝරා ලියන්න:\n1. මාතෘකා ස්ලයිඩය\n2. දකුණු ආසියානු සිතියමක් සහිත ස්ලයිඩය\n3. ශ්‍රී ලංකාව පිළිබඳ පෙළ තොරතුරු කිහිපයක් සහිත ස්ලයිඩය\n4. වම් පසින් පළාත් නවයේ ලැයිස්තුවක් සහ දකුණු පසින් පළාත් සිතියමක් සහිත ස්ලයිඩය",
      "type": "structured",
      "sampleAnswerEn": "1. Title Slide\n2. Title and Content (or Blank)\n3. Title and Content\n4. Title and Two Content",
      "sampleAnswerSi": "1. Title Slide (මාතෘකා ස්ලයිඩය)\n2. Title and Content\n3. Title and Content\n4. Title and Two Content",
      "explanationEn": "Verbatim official examination question from 2024 O/L Paper II - Question 01 (vi).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2024 O/L Paper II - Question 01 (vi)."
    },
    {
      "id": "pp-g10-u8-2025-5",
      "year": 2025,
      "paperType": "Paper I",
      "badgeText": "2025 O/L Paper I - Question 18",
      "questionEn": "18. Which of the following groups contains only electronic presentation software?\n(1) Audacity, Google Slides, Microsoft PowerPoint\n(2) Apple Keynote, Google Slides, Microsoft PowerPoint\n(3) Audacity, LibreOffice Calc, LibreOffice Impress\n(4) Google Sheets, LibreOffice Calc, Ubuntu",
      "questionSi": "18. පහත දැක්වෙන කවරක් ඉලෙක්ට්‍රොනික සමර්පණ මෘදුකාංග පමණක් අඩංගු කාණ්ඩයක් වේ ද?\n(1) Audacity, Google Slides, Microsoft PowerPoint\n(2) Apple Keynote, Google Slides, Microsoft PowerPoint\n(3) Audacity, LibreOffice Calc, LibreOffice Impress\n(4) Google Sheets, LibreOffice Calc, Ubuntu",
      "type": "mcq",
      "options": [
        { "id": "1", "en": "Audacity, Google Slides, Microsoft PowerPoint", "si": "Audacity, Google Slides, Microsoft PowerPoint" },
        { "id": "2", "en": "Apple Keynote, Google Slides, Microsoft PowerPoint", "si": "Apple Keynote, Google Slides, Microsoft PowerPoint" },
        { "id": "3", "en": "Audacity, LibreOffice Calc, LibreOffice Impress", "si": "Audacity, LibreOffice Calc, LibreOffice Impress" },
        { "id": "4", "en": "Google Sheets, LibreOffice Calc, Ubuntu", "si": "Google Sheets, LibreOffice Calc, Ubuntu" }
      ],
      "correctOptionId": "2",
      "explanationEn": "Apple Keynote, Google Slides, and Microsoft PowerPoint are all presentation software. Audacity is an audio editor, Calc is a spreadsheet, and Ubuntu is an operating system.",
      "explanationSi": "Apple Keynote, Google Slides, සහ Microsoft PowerPoint යන සියල්ලම සමර්පණ මෘදුකාංග වේ."
    },
    {
      "id": "pp-g10-u8-2025-6",
      "year": 2025,
      "paperType": "Paper II",
      "badgeText": "2025 O/L Paper II - Question 01 (x) (a)",
      "questionEn": "1. (x) (a) Presentation software provide several slide layout options. Suppose you are preparing a presentation and need to create a slide that includes a table of statistical data along with a title. From the following slide layouts – 'Title only', 'Title and content', and 'Title and two content' – which layout would you select for this slide?",
      "questionSi": "1. (x) (a) සමර්පණ මෘදුකාංග මගින් ස්ලයිඩ පරිසැලසුම් විකල්ප කිහිපයක් ලබා දෙයි. ඔබ සමර්පණයක් පිළියෙල කරමින් සිටින අතර මාතෘකාවක් සමඟ සංඛ්‍යාත්මක දත්ත වගුවක් ඇතුළත් වන ස්ලයිඩයක් සෑදීමට අවශ්‍ය වේ යැයි සිතන්න. පහත දැක්වෙන ස්ලයිඩ පරිසැලසුම් අතුරින් – 'Title only', 'Title and content', සහ 'Title and two content' – මෙම ස්ලයිඩය සඳහා ඔබ තෝරා ගන්නේ කුමන පරිසැලසුමද?",
      "type": "structured",
      "sampleAnswerEn": "'Title and content' (Provides a title placeholder with a single content placeholder suited for a table)",
      "sampleAnswerSi": "'Title and content' (මාතෘකාවක් සහ වගුවක් ඇතුළත් කිරීම සඳහා තනි අන්තර්ගත කොටුවක් සපයයි)",
      "explanationEn": "Verbatim official examination question from 2025 O/L Paper II - Question 01 (x) (a).",
      "explanationSi": "නිල විභාග ප්‍රශ්නය: 2025 O/L Paper II - Question 01 (x) (a)."
    }
  ],
  "glossary": [
    {
      "id": "g10-u8-term-1",
      "termEn": "Slide Transition",
      "termSi": "ස්ලයිඩ සංක්‍රාන්තිය (Slide Transition)",
      "definitionEn": "The visual effect that occurs when moving from one slide to another during a slide show.",
      "definitionSi": "ස්ලයිඩ දර්ශනයකදී එක් ස්ලයිඩයක සිට ඊළඟ ස්ලයිඩයට මාරු වීමේදී සිදුවන දෘශ්‍ය චලන ප්‍රයෝගය."
    },
    {
      "id": "g10-u8-term-2",
      "termEn": "Custom Animation",
      "termSi": "අභිරුචි සජීවීකරණය (Custom Animation)",
      "definitionEn": "Visual motion effects applied to individual objects (text, images, shapes) inside a single slide.",
      "definitionSi": "තනි ස්ලයිඩයක් තුළ ඇති තනි තනි අංග (පෙළ, පින්තූර, හැඩතල) සඳහා යොදන චලන ප්‍රයෝග."
    },
    {
      "id": "g10-u8-term-3",
      "termEn": "Slide Master",
      "termSi": "ප්‍රධාන ස්ලයිඩය (Slide Master)",
      "definitionEn": "The primary master template slide that controls universal background themes, font styling, and logo placement across all presentation slides.",
      "definitionSi": "සියලුම ස්ලයිඩයන්හි පසුබිම් විලාස, අකුරු රටා සහ ලාංඡන එකවර පාලනය කරන ප්‍රධාන සැකිලි ස්ලයිඩය."
    },
    {
      "id": "g10-u8-term-4",
      "termEn": "Presenter View",
      "termSi": "ඉදිරිපත් කරන්නාගේ දසුන (Presenter View)",
      "definitionEn": "A dual-monitor display setup showing the current slide, upcoming slide, timer, and speaker notes to the presenter while projecting full slides to the audience.",
      "definitionSi": "කථිකයාට තම සටහන්, ධාවන කාලය සහ ඉදිරි ස්ලයිඩය පෙන්වන අතර ප්‍රේක්ෂකයාට සම්පූර්ණ ස්ලයිඩය පමණක් ප්‍රක්ෂේපණය කරන දර්ශනය."
    },
    {
      "id": "g10-u8-term-5",
      "termEn": "Handouts",
      "termSi": "අත්පත්‍රිකා (Handouts)",
      "definitionEn": "Printed documents containing 1, 2, 3, 4, 6, or 9 miniature slides per page distributed to the audience.",
      "definitionSi": "ප්‍රේක්ෂකයන්ට බෙදා හැරීම සඳහා එක් පිටුවක ස්ලයිඩ 1, 2, 3, 4, 6 හෝ 9 බැගින් මුද්‍රණය කරන අත්පත්‍රිකා."
    }
  ]
};
