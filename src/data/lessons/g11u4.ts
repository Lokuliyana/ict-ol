// Verbatim dual-medium syllabus data for Grade 11 Lesson 4
import { GeneralLessonData } from '../allLessonsData';

export const G11_U4_DATA: GeneralLessonData = {
  id: "g11-u4",
  grade: "11",
  unitNumber: 4,
  titleEn: "Use of Multimedia Technologies",
  titleSi: "බහුමාධ්‍ය තාක්ෂණය භාවිතය",
  subtopics: [
    {
      id: "g11-u4-st-1",
      number: "4.1",
      titleEn: "Digital Graphics",
      titleSi: "අංකිත ග්‍රැෆික් (Digital Graphics)",
      summaryEn: "Fundamental elements of digital graphics, pixels, resolution, color models (RGB & CMYK), lossy vs lossless compression, and raster vs vector graphics.",
      summarySi: "අංකිත ග්‍රැෆික්වල මූලිකාංග, පික්සල, විභේදනය, වර්ණ ආකෘති (RGB සහ CMYK), හානිවන හා හානි නොවන සම්පීඩනය, සහ රැස්ටර් හා වෙක්ටර් ග්‍රැෆික්ස්.",
      blocks: [
        {
          id: "b-g11-u4-1-1",
          en: "* **Digital Graphic Definition:** Images, illustrations, or drawings created, stored, or manipulated using computer graphic software to communicate information visually.\n* **Fundamental Building Blocks:**\n  * **Pixel (Picture Element):** The smallest individual building unit of a digital image. Digital images consist of thousands of pixels arranged in rows and columns (2D array/bitmap). A monochrome pixel requires 1 bit, an 8-bit grayscale pixel represents 256 shades, and a 24-bit True Color pixel allocates 8 bits each to Red, Green, and Blue ($8 \\times 3 = 24$ bits), displaying over 16.7 million colors ($2^{24}$).\n  * **Resolution:** The total count of pixels along the physical dimensions (width and height) of a digital graphic, expressed as $\\text{Width} \\times \\text{Height}$ (e.g. $1920 \\times 1080$). Higher pixel density yields superior image sharpness and clarity.\n  * **Physical Dimension & File Size:** Determined by horizontal pixel count, vertical pixel count, and bit depth (bits per pixel).\n    $$\\text{Uncompressed Size (Bytes)} = \\frac{\\text{Width} \\times \\text{Height} \\times \\text{Bits per Pixel}}{8}$$\n* **Color Models:**\n  * **RGB Model (Red, Green, Blue):** Additive color model used for computer monitors, digital screens, and mobile displays. Primary color values range from 0 to 255 (forming hex color triplets like `#FF0000` or `RGB(255, 0, 0)`).\n  * **CMYK Model (Cyan, Magenta, Yellow, Key/Black):** Subtractive color model designed for physical color printing on paper.",
          si: "* **අංකිත ග්‍රැෆික් අර්ථ දැක්වීම:** පරිගණක ග්‍රැෆික් මෘදුකාංග භාවිතයෙන් නිර්මාණය කරන ලද, තොරතුරු දෘශ්‍යමාන ලෙස සන්නිවේදනය කරන චිත්‍ර, ඡායාරූප හෝ රූප සටහන් අංකිත ග්‍රැෆික් (Digital Graphics) ලෙස හැඳින්වේ.\n* **මූලික තැනුම් සංරචක:**\n  * **පික්සලය (Pixel / Picture Element):** අංකිත ග්‍රැෆික් එකක මූලිකම තැනුම් ඒකකයයි. අංකිත රූපයක් තිරස් හා සිරස් පේළි (2D න්‍යාසයක්) ඔස්සේ සැකසුණු පික්සල දහස් ගණනකින් සමන්විත වේ. ඒකවර්ණ පික්සලයකට බිටු 1ක් ද, ග්‍රේස්කේල් පික්සලයකට බිටු 8ක් (වර්ණ ප්‍රභේද 256ක්) ද, 24-bit True Color පික්සලයකට රතු, කොළ සහ නිල් සඳහා බිටු 8 බැගින් බිටු 24ක් ද ($8 \\times 3 = 24$) වැය වන අතර වර්ණ මිලියන 16.7කට අධික ප්‍රමාණයක් ($2^{24}$) නිරූපණය කරයි.\n  * **ග්‍රැෆික් විභේදනය (Image Resolution):** අංකිත රූපයක භෞතික මාන මැනීමේ ඒකකය වන අතර, පළල සහ උස ඔස්සේ පවතින මුළු පික්සල සංඛ්‍යාව දක්වයි (උදා: පළල $\\times$ උස = $1920 \\times 1080$). විභේදනය වැඩි වන විට රූපයේ ගුණාත්මකභාවය සහ පැහැදිලි බව ඉහළ යයි.\n  * **ගොනු විශාලත්වය (File Size):** තිරස් පික්සල ගණන, සිරස් පික්සල ගණන සහ පික්සලයකට යොදන බිටු ගණන මත තීරණය වේ.\n    $$\\text{සංකෝචනය නොකළ ප්‍රමාණය (බයිට)} = \\frac{\\text{පළල} \\times \\text{උස} \\times \\text{පික්සලයකට බිටු}}{8}$$\n* **වර්ණ ආකෘති:**\n  * **RGB ආකෘතිය (රතු, කොළ, නිල්):** පරිගණක තිර, මොනිටර් සහ ස්මාර්ට්ෆෝන් දර්ශක සඳහා භාවිත වන ආකලන වර්ණ ආකෘතියයි. මූලික වර්ණ අගයන් 0 සිට 255 දක්වා පරාසයක පවතී (උදා: `#FF0000` හෝ `RGB(255, 0, 0)`).\n  * **CMYK ආකෘතිය (සයන්, මැජෙන්ටා, කහ, කළු):** කඩදාසි මත භෞතික මුද්‍රණ කටයුතු සඳහා භාවිත වන ව්‍යවකලන වර්ණ ආකෘතියයි.",
          highlightTerm: "Digital Graphics Fundamentals & Color Models"
        },
        {
          id: "b-g11-u4-1-2",
          en: "* **Graphic Compression (Image Compression):** Process of reducing digital image file size for fast transmission, web loading, and efficient storage.\n* **Lossy Compression (හානි වන සම්පීඩනය):**\n  * Permanently removes redundant or imperceptible image details to achieve drastically smaller file sizes.\n  * When reopened or uncompressed, the image does NOT restore to its original pristine state.\n  * Ideal for web pages, online photo sharing, and high-speed downloading.\n  * *Common File Formats:* JPEG / JPG, TIFF (lossy modes), BMP.\n* **Lossless Compression (හානි නොවන සම්පීඩනය):**\n  * Compresses image data without discarding any original pixel details.\n  * When reopened, the graphic restores 100% of its original quality and raw visual data.\n  * Ideal for technical diagrams, transparency masks, medical scans, and high-fidelity archival.\n  * *Common File Formats:* PNG, GIF, RAW, TIFF (lossless mode).",
          si: "* **ග්‍රැෆික් සම්පීඩනය / සංකෝචනය (Image Compression):** අන්තර්ජාලයෙන් වේගයෙන් බාගත කිරීමට, වෙබ් පිටු ඉක්මනින් විවෘත වීමට සහ ගබඩා ඉඩ ඉතිරි කර ගැනීමට ගොනු ධාරිතාව අඩු කිරීමේ ක්‍රියාවලියයි.\n* **හානි වන සම්පීඩනය (Lossy Compression):**\n  * ගොනු ප්‍රමාණය අවම කර ගැනීම සඳහා රූපයේ සමහර දත්ත ස්ථිරවම ඉවත් කරනු ලබයි.\n  * ගොනුව නැවත විවෘත කිරීමේදී මුල් ස්වරූපය සම්පූර්ණයෙන්ම ලබා ගත නොහැකි අතර ගුණාත්මකභාවය සුළු වශයෙන් හීන වේ.\n  * වෙබ් පිටුවලට පින්තූර ඇතුළත් කිරීම සහ වේගවත් බාගත කිරීම් සඳහා ඉතා සුදුසුය.\n  * *උදාහරණ ගොනු ආකෘති:* JPEG / JPG, TIFF (හානිවන ක්‍රම), BMP.\n* **හානි නොවන සම්පීඩනය (Lossless Compression):**\n  * රූපයේ මුල් ගුණාත්මකභාවය සහ කිසිදු පික්සල දත්තයක් විනාශ නොවන පරිදි සංකෝචනය කරයි.\n  * ගොනුව නැවත විවෘත කළ විට එහි මුල් ගුණාත්මකභාවය ඒ අයුරින්ම ප්‍රදර්ශනය වේ.\n  * ලාංඡන (Logos), විනිවිද පෙනෙන පසුබිම් (Transparency) සහ උසස් සංරක්ෂණ කටයුතු සඳහා සුදුසුය.\n  * *උදාහරණ ගොනු ආකෘති:* PNG, GIF, RAW.",
          highlightTerm: "Lossy vs Lossless Compression"
        },
        {
          id: "b-g11-u4-1-3",
          en: "* **Raster Graphics vs. Vector Graphics:**\n  * **Raster Graphics (Bitmap Images):**\n    * Composed of a grid/matrix of coloured pixels.\n    * Quality degrades (pixelates, blurs) when enlarged beyond original dimensions.\n    * Not suitable for frequently resized designs like company logos or large billboards.\n    * Consumes less processing overhead during initial display but file size increases with resolution.\n    * *Software Examples:* GIMP, Adobe Photoshop, Corel PHOTO-PAINT, MS Paint.\n  * **Vector Graphics:**\n    * Composed of mathematical formulas, paths, lines, anchor points, curves, and shape fills.\n    * Quality NEVER degrades upon zooming or enlargement (maintains razor-sharp edges at infinite scale).\n    * Highly suitable for logos, typography, vector clip-art, diagrams, and billboard artwork.\n    * Requires mathematical calculations by the rendering engine upon display.\n    * *Software Examples:* Inkscape, Adobe Illustrator, CorelDRAW, Vectorian Giotto.",
          si: "* **රැස්ටර් සහ වෙක්ටර් ග්‍රැෆික්ස් සංසන්දනය:**\n  * **රැස්ටර් ග්‍රැෆික්ස් (Raster / Bitmap Graphics):**\n    * විවිධ වර්ණවලින් යුත් පික්සල ආරාවකින් (Grid of Pixels) සමන්විත වේ.\n    * රූපය විශාල කිරීමේදී පික්සල් කැඩී (Pixelate වී) ගුණාත්මකභාවය විනාශ වේ.\n    * නිතර ප්‍රමාණය වෙනස් කිරීමට අවශ්‍ය ආයතනික ලාංඡන (Logos) සඳහා නුසුදුසුය.\n    * සැබෑ ඡායාරූප (Photographs) සංස්කරණය සඳහා ඉතා සුදුසුය.\n    * *මෘදුකාංග උදාහරණ:* GIMP, Adobe Photoshop, Corel PHOTO-PAINT, MS Paint.\n  * **වෙක්ටර් ග්‍රැෆික්ස් (Vector Graphics):**\n    * ගණිතමය සූත්‍ර, සෘජු හා වක්‍ර රේඛා, නැංගුරම් ලක්ෂ්‍ය සහ හැඩතල එකතුවකින් නිර්මාණය වේ.\n    * රූපය කෙතරම් විශාල කළද ගුණාත්මකභාවය කිසිසේත් වෙනස් නොවේ (නොබිඳේ).\n    * ආයතනික ලාංඡන, කාටූන්, අකුරු මෝස්තර සහ ප්‍රචාරක පුවරු සඳහා ඉතා සුදුසුය.\n    * *මෘදුකාංග උදාහරණ:* Inkscape, Adobe Illustrator, CorelDRAW, Vectorian Giotto.",
          highlightTerm: "Raster vs Vector Graphics"
        },
        {
          id: "b-g11-u4-1-4",
          en: "* **Image Editing Software - GIMP (GNU Image Manipulation Program):**\n  * Free and open-source raster graphics editing application.\n  * **Key Tools in GIMP:**\n    * **Rectangle Select / Ellipse Select Tool:** Selects rectangular or circular regions in an image.\n    * **Free Select (Lasso) Tool:** Draws freehand selection borders around irregular image objects.\n    * **Fuzzy Select (Magic Wand) Tool:** Selects contiguous image areas having similar color shades with a single click.\n    * **Text Tool:** Inserts, formats, and styles custom typography on layers.\n    * **Clone Tool:** Duplicates selected pixels from one area of an image into another target area to cover flaws or replicate elements.",
          si: "* **රූප සංස්කරණ මෘදුකාංග - GIMP (GNU Image Manipulation Program):**\n  * නොමිලේ සහ විවෘත මූලාශ්‍ර (FOSS) රැස්ටර් ග්‍රැෆික් සංස්කරණ මෘදුකාංගයකි.\n  * **GIMP හි ප්‍රධාන මෙවලම්:**\n    * **සෘජුකෝණාස්‍ර / ඉලිප්ස තේරීමේ මෙවලම (Rectangle / Ellipse Select):** රූපයක සෘජුකෝණාස්‍රාකාර හෝ ඉලිප්සාකාර කොටස් තෝරා ගැනීම.\n    * **ලාසෝ මෙවලම (Free Select / Lasso Tool):** අක්‍රමවත් හැඩතල නිදහස් අතින් තෝරා ගැනීම.\n    * **ෆසි තේරීමේ මෙවලම (Fuzzy Select / Magic Wand):** එකම වර්ණ පරාසයක පිහිටි යාබද පික්සල තනි ක්ලික් කිරීමකින් තෝරා ගැනීම.\n    * **පෙළ මෙවලම (Text Tool):** රූපය මතට අකුරු සහ පෙළ එක් කිරීම හා හැඩසැසීම.\n    * **ක්ලෝන් මෙවලම (Clone Tool):** රූපයක එක් කොටසක ඇති පික්සල තවත් කොටසකට පිටපත් කරමින් අඩුපාඩු සැඟවීම හෝ ප්‍රතිරූපණය කිරීම.",
          highlightTerm: "GIMP Image Editing Tools"
        }
      ],
      examples: [
        {
          id: "ex-11-4-1-1",
          titleEn: "Graphic Compression Architecture",
          titleSi: "ග්‍රැෆික් සම්පීඩන වර්ගීකරණය",
          contentEn: "                Graphic Compression (ග්‍රැෆික් සම්පීඩනය)\n                                │\n        ┌───────────────────────┴───────────────────────┐\n        ▼                                               ▼\nLossy Compression                               Lossless Compression\n(හානි වන සම්පීඩනය)                               (හානි නොවන සම්පීඩනය)\n  • Drastically cuts file size                    • Preserves 100% original quality\n  • Irreversible pixel loss                       • Zero pixel loss upon reopening\n  • Best for fast web loading                     • Best for logos, icons & masks\n  • Examples: JPEG, TIFF, BMP                     • Examples: PNG, GIF, RAW",
          contentSi: "                Graphic Compression (ග්‍රැෆික් සම්පීඩනය)\n                                │\n        ┌───────────────────────┴───────────────────────┐\n        ▼                                               ▼\nLossy Compression                               Lossless Compression\n(හානි වන සම්පීඩනය)                               (හානි නොවන සම්පීඩනය)\n  • Drastically cuts file size                    • Preserves 100% original quality\n  • Irreversible pixel loss                       • Zero pixel loss upon reopening\n  • Best for fast web loading                     • Best for logos, icons & masks\n  • Examples: JPEG, TIFF, BMP                     • Examples: PNG, GIF, RAW"
        }
      ],
      tableData: {
        headers: [
          { en: "Feature", si: "සංසන්දනාත්මක ලක්ෂණය" },
          { en: "Raster Graphics (රැස්ටර්)", si: "රැස්ටර් ග්‍රැෆික්ස්" },
          { en: "Vector Graphics (වෙක්ටර්)", si: "වෙක්ටර් ග්‍රැෆික්ස්" }
        ],
        rows: [
          {
            col0: { en: "Structure", si: "නිර්මාණ ව්‍යුහය" },
            col1: { en: "Matrix of colored pixels (Bitmap)", si: "වර්ණවත් පික්සල න්‍යාසයකින් සෑදේ" },
            col2: { en: "Mathematical lines, curves & formulas", si: "ගණිතමය සූත්‍ර, රේඛා සහ වක්‍රවලින් සෑදේ" }
          },
          {
            col0: { en: "Scaling / Zooming", si: "විශාල කිරීමේදී තත්ත්වය" },
            col1: { en: "Pixelates and loses sharpness", si: "පික්සල් කැඩී ගුණාත්මක බව නැති වේ" },
            col2: { en: "Retains razor-sharp edges infinitely", si: "කිසිදු වෙනසක් නැතිව තියුණුව පවතී" }
          },
          {
            col0: { en: "Suitability", si: "වඩාත් උචිත භාවිතය" },
            col1: { en: "Continuous-tone real-world photos", si: "සැබෑ ස්වභාවික ඡායාරූප සඳහා" },
            col2: { en: "Logos, fonts, icons, banners", si: "ලාංඡන, සංකේත, අකුරු සහ බැනර් සඳහා" }
          },
          {
            col0: { en: "Popular Software", si: "ප්‍රධාන මෘදුකාංග" },
            col1: { en: "GIMP, Adobe Photoshop, MS Paint", si: "GIMP, Photoshop, MS Paint" },
            col2: { en: "Inkscape, Adobe Illustrator, CorelDRAW", si: "Inkscape, Illustrator, CorelDRAW" }
          }
        ]
      },
      checkpointQuiz: {
        id: "q-g11-u4-1",
        questionEn: "Why is a company logo designed using Vector graphics rather than Raster graphics?",
        questionSi: "ආයතනික ලාංඡනයක් (Logo) නිර්මාණය කිරීම සඳහා රැස්ටර් ග්‍රැෆික්ස් වෙනුවට වෙක්ටර් ග්‍රැෆික්ස් තෝරා ගන්නේ මන්ද?",
        options: [
          {
            id: "1",
            en: "Vector graphics maintain perfect resolution and edge sharpness at any enlargement without pixelating.",
            si: "වෙක්ටර් ග්‍රැෆික්ස් කෙතරම් විශාල කළද පික්සල් කැඩීමකින් තොරව පරිපූර්ණ තියුණු බව රැකෙන බැවින්."
          },
          {
            id: "2",
            en: "Vector graphics are composed of an array of uncompressed pixels requiring minimal RAM.",
            si: "වෙක්ටර් ග්‍රැෆික්ස් අවම මතකයක් ගන්නා සංකෝචනය නොකළ පික්සල ආරාවකින් සමන්විත වන බැවින්."
          },
          {
            id: "3",
            en: "Vector images automatically use lossy compression to reduce file size to a minimum.",
            si: "වෙක්ටර් රූප ගොනු ප්‍රමාණය අවම කිරීමට ස්වයංක්‍රීයව හානිවන සම්පීඩනය භාවිත කරන බැවින්."
          },
          {
            id: "4",
            en: "Vector images can only be viewed in web browsers using the CMYK color model.",
            si: "වෙක්ටර් රූප වෙබ් බ්‍රවුසරවල නැරඹිය හැක්කේ CMYK වර්ණ ආකෘතියෙන් පමණක් වන බැවින්."
          }
        ],
        correctOptionId: "1",
        explanationEn: "Vector graphics use mathematical geometric formulas (lines and curves) instead of fixed pixel bitmaps, allowing them to be scaled to billboards or tiny icons without loss of quality.",
        explanationSi: "වෙක්ටර් ග්‍රැෆික්ස් පික්සල වෙනුවට ගණිතමය සූත්‍ර හා රේඛා මගින් සෑදෙන බැවින්, කුඩා අයිකනයක සිට විශාල දැන්වීම් පුවරුවක් දක්වා විශාල කළද එහි ගුණාත්මක බව බිඳ නොවැටේ."
      }
    },
    {
      id: "g11-u4-st-2",
      number: "4.2",
      titleEn: "Two-Dimensional (2D) Animation",
      titleSi: "දෙමාන (2D) සජීවීකරණය",
      summaryEn: "Core animation concepts, frames, frame rate (24 fps), key frames, blank key frames, tweening, and 2D vector animation software.",
      summarySi: "සජීවීකරණ මූලික සංකල්ප, රාමු, තත්පරයකට රාමු ගණන (24 fps), මූලික රාමු, වියුක්ත මූලික රාමු, ට්වීනිං සහ දෙමාන සජීවීකරණ මෘදුකාංග.",
      blocks: [
        {
          id: "b-g11-u4-2-1",
          en: "* **Animation Definition:** The technique of sequencing static drawings or graphics in rapid chronological succession to create the illusion of smooth motion and dynamic life.\n* **Essential Animation Terminology:**\n  * **Frame (රාමුව):** An individual still graphic snapshot along the animation timeline. The standard cinema/animation playback speed is **24 frames per second (24 fps)**.\n  * **Key Frame (මූලික රාමුව):** A critical frame directly authored by the animator that marks the exact start or end position, shape, or state of a motion sequence.\n  * **Blank Key Frame (වියුක්ත මූලික රාමුව):** An empty keyframe inserted on the timeline, clearing previous stage drawings to allow new graphics or elements to be introduced.\n  * **Tween Frames / Motion Tweening (ට්වීන් රාමු):** In-between transition frames automatically generated by animation software between two user-defined key frames to produce fluid, seamless movement without drawing every frame manually.",
          si: "* **සජීවීකරණය (Animation) අර්ථ දැක්වීම:** ස්ථිතික චිත්‍ර හෝ රූප එකතුවක් කාලරාමුවක් ඔස්සේ වේගයෙන් අනුක්‍රමිකව ප්‍රදර්ශනය කිරීම මගින් චලනයක් පිළිබඳ දෘශ්‍ය හැඟීමක් ඇති කිරීමේ ක්‍රමවේදයයි.\n* **ප්‍රධාන සජීවීකරණ පාරිභාෂික පද:**\n  * **රාමුව (Frame):** සජීවීකරණ කාලතීරුවේ ඇති තනි නිශ්චල රූපයකි. සම්මත චලන වේගය තත්පරයට රාමු 24 කි (**24 fps**).\n  * **මූලික රාමුව (Key Frame):** සජීවීකරණයක ආරම්භක සහ අවසාන පිහිටීම හෝ අවස්ථාව තීරණය කරමින් නිර්මාණකරු විසින් සෘජුවම නිර්මාණය කරනු ලබන ප්‍රධාන රාමුවයි.\n  * **වියුක්ත මූලික රාමුව (Blank Key Frame):** වේදිකාවේ පවතින චිත්‍ර ඉවත් කර නව චිත්‍රයක් හෝ අන්තර්ගතයක් ඇතුළත් කිරීමට ලබා දෙන හිස් මූලික රාමුවයි.\n  * **ට්වීන් රාමු (Tween Frames / Motion Tweening):** මූලික රාමු දෙකක් අතර සුමට චලනයක් නිර්මාණය කිරීම සඳහා පරිගණක මෘදුකාංගය මගින් ස්වයංක්‍රීයව ජනනය කරනු ලබන අන්තරාල රාමු වේ.",
          highlightTerm: "Core Animation Concepts & Frames"
        },
        {
          id: "b-g11-u4-2-2",
          en: "* **Vectorian Giotto Software:**\n  * Dedicated free vector-based 2D animation creation application.\n  * **File Extensions:**\n    * Native editable project format: **`.vgd`** (Vectorian Giotto Document).\n    * Web-ready compiled movie export: **`.swf`** (Shockwave Flash / Export Flash Movie).\n  * **Workflow:** Setting timeline layers, inserting shapes, creating keyframes, and applying shape/motion tweens.",
          si: "* **Vectorian Giotto මෘදුකාංගය:**\n  * වෙක්ටර් තාක්ෂණය පදනම් කරගත් නොමිලේ ලබා ගත හැකි දෙමාන (2D) සජීවීකරණ මෘදුකාංගයකි.\n  * **ගොනු දිගු (File Extensions):**\n    * සංස්කරණය කළ හැකි මූලික ව්‍යාපෘති ගොනුව: **`.vgd`** (Vectorian Giotto Document).\n    * වෙබ් අඩවිවල ධාවනය සඳහා අපනයනය කරන ගොනුව: **`.swf`** (Shockwave Flash / Export Flash Movie).\n  * **ක්‍රියාකාරීත්වය:** කාලතීරුව (Timeline) භාවිතයෙන් ස්ථර සැකසීම, මූලික රාමු පිහිටුවීම සහ Motion Tweening මගින් සුමට චලන නිර්මාණය කිරීම.",
          highlightTerm: "Vectorian Giotto & File Extensions"
        }
      ],
      checkpointQuiz: {
        id: "q-g11-u4-2",
        questionEn: "In computer 2D animation, intermediate frames automatically generated by software between two user-defined key frames are called:",
        questionSi: "පරිගණක 2D සජීවීකරණයේදී, පරිශීලකයා නිර්මාණය කළ මූලික රාමු දෙකක් අතර මෘදුකාංගය මගින් ස්වයංක්‍රීයව ජනනය කරනු ලබන අන්තරාල රාමු හඳුන්වන්නේ:",
        options: [
          {
            id: "1",
            en: "Blank Key Frames",
            si: "වියුක්ත මූලික රාමු (Blank Key Frames)"
          },
          {
            id: "2",
            en: "Tween Frames",
            si: "ට්වීන් රාමු (Tween Frames)"
          },
          {
            id: "3",
            en: "Raster Frames",
            si: "රැස්ටර් රාමු (Raster Frames)"
          },
          {
            id: "4",
            en: "Timeline Anchors",
            si: "කාලතීරු නැංගුරම් (Timeline Anchors)"
          }
        ],
        correctOptionId: "2",
        explanationEn: "Tween frames (derived from 'in-between') are generated by software between key frames to produce smooth movement without drawing each frame manually.",
        explanationSi: "මූලික රාමු (Key Frames) දෙකක් අතර සුමට චලනයක් ඇති කිරීම සඳහා මෘදුකාංගයෙන් ස්වයංක්‍රීයව මැදට එක් කරනු ලබන රාමු ට්වීන් රාමු (Tween Frames) ලෙස හැඳින්වේ."
      }
    },
    {
      id: "g11-u4-st-3",
      number: "4.3",
      titleEn: "Audio Editing & Concepts",
      titleSi: "ශ්‍රව්‍ය සංකල්ප සහ සංස්කරණය",
      summaryEn: "Sound digitization, analog continuous waves vs digital audio samples, and audio recording & editing in Audacity.",
      summarySi: "ශබ්දය අංකිතකරණය, ප්‍රතිසම තරංග සහ අංකිත ශ්‍රව්‍ය සාම්පල, සහ Audacity මෘදුකාංගයෙන් ශ්‍රව්‍ය පටිගත කිරීම හා සංස්කරණය.",
      blocks: [
        {
          id: "b-g11-u4-3-1",
          en: "* **Sound Digitization:**\n  * Natural sound travels through air as **continuous analog acoustic waves**.\n  * Computers cannot store continuous sound waves directly; they must convert analog signals into **digital audio streams** (0s and 1s) through a sound card using sampling.\n  * **Sampling Rate:** The frequency at which sound wave amplitudes are measured per second (e.g. 44.1 kHz for standard CD quality audio).\n  * **Bit Depth:** Number of bits allocated per sample (e.g. 16-bit or 24-bit), determining dynamic range and clarity.\n* **Audacity Audio Editing Software:**\n  * Powerful, free, multi-track, open-source sound recording and editing software.\n  * **Supported Audio Formats:** WAV (uncompressed), MP3 (compressed lossy), AIFF, FLAC (lossless), Ogg Vorbis.\n  * **Key Operations & Tools:**\n    * Live microphone voice recording.\n    * Selection Tool: Selecting silence/noise sections and pressing `Delete` or Cut.\n    * Noise Reduction, Pitch Shift, Amplification, and multi-track mixing.\n    * Transport Toolbar: Play (▶ green button), Pause (⏸), Stop (⏹), Record (⏺ red button), Skip to Start (|◀), Skip to End (▶|).",
          si: "* **ශබ්දය අංකිතකරණය (Sound Digitization):**\n  * ස්වාභාවික ශබ්දය වාතය හරහා ගමන් කරන්නේ **අඛණ්ඩ ප්‍රතිසම (Analog) තරංග** ලෙසිනි.\n  * පරිගණකයකට අඛණ්ඩ තරංග සෘජුව ගබඩා කළ නොහැකි බැවින් ශබ්ද කාඩ්පත මගින් සාම්පල ලබා ගනිමින් එය 0 සහ 1 බිටු ධාරාවක් බවට පරිවර්තනය කරයි.\n  * **සාම්පල කිරීමේ ශීඝ්‍රතාව (Sampling Rate):** තත්පරයකදී ශබ්ද තරංගයෙන් සාම්පල මැන ගන්නා වාර ගණනයි (උදා: CD ගුණාත්මකභාවය සඳහා 44.1 kHz).\n  * **බිටු ගැඹුර (Bit Depth):** එක් සාම්පලයක් ගබඩා කිරීමට යොදන බිටු ගණනයි (උදා: 16-bit හෝ 24-bit).\n* **Audacity ශ්‍රව්‍ය සංස්කරණ මෘදුකාංගය:**\n  * නිදහස් හා විවෘත මූලාශ්‍ර (FOSS) බහු-පථ ශ්‍රව්‍ය පටිගත කිරීමේ සහ සංස්කරණය කිරීමේ මෘදුකාංගයකි.\n  * **සහාය දක්වන ගොනු ආකෘති:** WAV (සංකෝචනය නොකළ), MP3 (සංකෝචිත හානිවන), AIFF, FLAC, Ogg Vorbis.\n  * **ප්‍රධාන මෙවලම් සහ කාර්යයන්:**\n    * මයික්‍රෆෝනය මගින් සජීවී කටහඬ පටිගත කිරීම.\n    * තේරීමේ මෙවලම (Selection Tool) මගින් නිහඬ කොටස් තෝරා `Delete` හෝ Cut මගින් ඉවත් කිරීම.\n    * පසුබිම් ඝෝෂා ඉවත් කිරීම (Noise Reduction), ශබ්දය වැඩි කිරීම (Amplify) සහ පථ කිහිපයක් එකට මිශ්‍ර කිරීම.\n    * පාලන බොත්තම්: ධාවනය (▶ කොළ බොත්තම), නැවතීම (⏹), පටිගත කිරීම (⏺ රතු බොත්තම).",
          highlightTerm: "Sound Digitization & Audacity Operations"
        }
      ],
      checkpointQuiz: {
        id: "q-g11-u4-3",
        questionEn: "When editing an audio clip using Audacity, which action correctly removes an unwanted silent gap from the recording?",
        questionSi: "Audacity මෘදුකාංගය භාවිතයෙන් ශ්‍රව්‍ය පටයක් සංස්කරණය කිරීමේදී, අනවශ්‍ය නිහඬ කොටසක් ඉවත් කිරීම සඳහා නිවැරදි පියවර කුමක්ද?",
        options: [
          {
            id: "1",
            en: "Highlight the silent portion with the Selection Tool and press the Delete key.",
            si: "තේරීමේ මෙවලම (Selection Tool) මගින් නිහඬ කොටස තෝරා Delete යතුර ඔබන්න."
          },
          {
            id: "2",
            en: "Click the red Record button to overwrite the entire audio track from scratch.",
            si: "මුළු ශ්‍රව්‍ය පථයම මුල සිට වෙනස් කිරීමට රතු Record බොත්තම ක්ලික් කරන්න."
          },
          {
            id: "3",
            en: "Export the audio file immediately to MP4 format with 24 frames per second.",
            si: "ශ්‍රව්‍ය ගොනුව තත්පරයට රාමු 24ක් සහිත MP4 ආකෘතියට සෘජුව අපනයනය කරන්න."
          },
          {
            id: "4",
            en: "Use the Clone Tool from GIMP to duplicate audio waves across silent segments.",
            si: "නිහඬ කොටස් මකා දැමීමට GIMP හි ක්ලෝන් මෙවලම භාවිත කරන්න."
          }
        ],
        correctOptionId: "1",
        explanationEn: "In Audacity, highlighting the unwanted silent portion with the Selection Tool and pressing Delete (or Edit > Cut) trims the timeline cleanly.",
        explanationSi: "Audacity හි තේරීමේ මෙවලම (Selection Tool) මගින් නිහඬ කොටස තෝරාගෙන Keyboard හි Delete යතුර එබීමෙන් හෝ Cut මෙවලමෙන් එම කොටස ඉවත් කළ හැක."
      }
    },
    {
      id: "g11-u4-st-4",
      number: "4.4",
      titleEn: "Video Editing & Production",
      titleSi: "දෘශ්‍ය සංකල්ප සහ සංස්කරණය",
      summaryEn: "Video composition, timeline & storyboard editing in Windows Movie Maker, transition effects, and output formats.",
      summarySi: "දෘශ්‍ය සංස්කරණ සංකල්ප, Windows Movie Maker හි කාලතීරුව හා කතාපුවරුව, සංක්‍රාන්ති ප්‍රයෝග සහ අපනයන ආකෘති.",
      blocks: [
        {
          id: "b-g11-u4-4-1",
          en: "* **Digital Video Composition:** The multi-media production process of arranging video clips, static photographs, 2D animations, title cards, narrative voiceover, and background music into a coherent motion production.\n* **Windows Movie Maker Software:**\n  * Free, user-friendly video editing application for beginner video creation.\n  * **Project File Format:** **`.wlmp`** (Windows Live Movie Maker Project - contains arrangement references, NOT the final rendered video).\n  * **Timeline / Storyboard Stage:** The horizontal sequencing canvas that organizes chronological order, clip duration, and layer stacking of visuals and audio.\n  * **Key Capabilities:**\n    * Inserting video transition effects between clips.\n    * Applying visual panning, zooming, and color grading filters.\n    * Adding opening title cards, captions, and ending credits.\n    * Trimming, splitting, and synchronizing background music with video scenes.\n  * **Export Options:** Renders finalized video into standalone files optimized for Computers, High-Definition displays (HD 1080p), Mobile Phones, Email, or YouTube.",
          si: "* **අංකිත දෘශ්‍ය නිර්මාණය (Digital Video Composition):** වීඩියෝ දර්ශන, නිශ්චල ඡායාරූප, 2D සජීවීකරණ, මාතෘකා පෙළ, පසුබිම් සංගීතය සහ හඬ කැවීම් කාලරාමුවක් ඔස්සේ නිසි අනුපිළිවෙළකට ඒකාබද්ධ කර සම්පූර්ණ වීඩියෝවක් සකස් කිරීමේ ක්‍රියාවලියයි.\n* **Windows Movie Maker මෘදුකාංගය:**\n  * ආධුනිකයන් සඳහා වීඩියෝ සංස්කරණයට භාවිත වන පහසු මෘදුකාංගයකි.\n  * **ව්‍යාපෘති ගොනු දිගුව:** **`.wlmp`** (Windows Live Movie Maker Project - මෙහි ගබඩා වන්නේ සංස්කරණ විස්තර පමණක් වන අතර වීඩියෝ ගොනුව නොවේ).\n  * **කාලතීරු වේදිකාව (Timeline / Storyboard Stage):** දර්ශන, ඡායාරූප සහ ශ්‍රව්‍ය පථ කාලානුක්‍රමිකව පෙළගස්වන සහ කාලසීමාව තීරණය කරන ප්‍රධාන වැඩබිමයි.\n  * **ප්‍රධාන හැකියාවන්:**\n    * දර්ශන අතරට සංක්‍රාන්ති ප්‍රයෝග (Video Transitions) එක් කිරීම.\n    * දෘශ්‍ය පෙරහන් (Visual Effects / Filters) සහ Pan & Zoom යෙදීම.\n    * ආරම්භක මාතෘකා (Title), උපසිරැසි (Captions) සහ අවසාන ගෞරව නාම (Credits) එක් කිරීම.\n    * ක්ලිප් කපා වෙන් කිරීම (Split) සහ පසුබිම් සංගීතය සකස් කිරීම.\n  * **අපනයන විකල්ප (Export Options):** පරිගණක සඳහා (MP4/WMV), අධි-විභේදන තිර (HD 1080p), ජංගම දුරකථන හෝ YouTube සඳහා වීඩියෝව සුරැකීම.",
          highlightTerm: "Windows Movie Maker & Timeline Editing"
        }
      ],
      checkpointQuiz: {
        id: "q-g11-u4-4",
        questionEn: "What is the primary role of the Timeline stage in a video editing program such as Windows Movie Maker?",
        questionSi: "Windows Movie Maker වැනි වීඩියෝ සංස්කරණ මෘදුකාංගයක ඇති කාලතීරු වේදිකාවේ (Timeline Stage) ප්‍රධාන කාර්යය කුමක්ද?",
        options: [
          {
            id: "1",
            en: "To arrange the chronological sequence and duration of video clips, images, and audio tracks.",
            si: "වීඩියෝ දර්ශන, ඡායාරූප සහ ශ්‍රව්‍ය පථවල කාලානුක්‍රමික පිළිවෙළ සහ කාලසීමාව සැකසීම."
          },
          {
            id: "2",
            en: "To compress vector graphics directly into analog radio frequencies.",
            si: "වෙක්ටර් ග්‍රැෆික්ස් සෘජුවම ප්‍රතිසම සංඛ්‍යාත බවට සම්පීඩනය කිරීම."
          },
          {
            id: "3",
            en: "To decode HTML table tags and generate web forms automatically.",
            si: "HTML වගු කේත විකේතනය කර වෙබ් ආකෘති පත්‍ර ස්වයංක්‍රීයව නිර්මාණය කිරීම."
          },
          {
            id: "4",
            en: "To measure the clock speed of the computer processor during video playback.",
            si: "වීඩියෝ ධාවනයේදී පරිගණක සකසනයේ ඔරලෝසු වේගය මැනීම."
          }
        ],
        correctOptionId: "1",
        explanationEn: "The timeline organizes media assets chronologically across time, controlling when visuals appear, transitions occur, and audio soundtracks play.",
        explanationSi: "කාලතීරු වේදිකාව මගින් වීඩියෝ, ඡායාරූප සහ පසුබිම් ශබ්ද කාලය ඔස්සේ ක්‍රියාත්මක වන අනුපිළිවෙළ සහ ඒවායේ කාලසීමාව නිවැරදිව පාලනය කරයි."
      }
    }
  ],
  pastPaperQuestions: [
    {
      id: "pp-g11-u4-2020-1",
      year: 2020,
      paperType: "Paper I",
      badgeText: "2020 O/L Paper I - Question 31",
      questionEn: "What is the resolution of an image with a width of 250 pixels and a height of 100 pixels?",
      questionSi: "පික්සල (pixels) 250 ක පළලින් හා පික්සල 100 ක උසින් යුත් අංකිත රූපයක (image) විභේදනය (resolution) කුමක්ද?",
      type: "mcq",
      options: [
        { id: "1", en: "250 ÷ 100", si: "250 ÷ 100" },
        { id: "2", en: "250 + 100", si: "250 + 100" },
        { id: "3", en: "250 × 100", si: "250 × 100" },
        { id: "4", en: "250 × 100 × 8", si: "250 × 100 × 8" }
      ],
      correctOptionId: "3",
      explanationEn: "Image resolution is expressed as Width × Height in pixels (250 × 100).",
      explanationSi: "අංකිත රූපයක විභේදනය පළල සහ උස පික්සල ගණනේ ගුණිතයක් ලෙස දක්වයි (250 × 100)."
    },
    {
      id: "pp-g11-u4-2020-2",
      year: 2020,
      paperType: "Paper I",
      badgeText: "2020 O/L Paper I - Question 32",
      questionEn: "Which of the following statements is/are correct regarding pixels?\nA – Pixels are used to measure physical dimensions of a digital image.\nB – The number of bits per pixel determines the number of colours in a digital image.\nC – Pixels of a digital image are arranged in a 3D array.",
      questionSi: "පික්සල (pixels) සම්බන්ධයෙන් පහත සඳහන් කවර ප්‍රකාශ නිවැරදි වේ ද?\nA – අංකිත රූපයක භෞතික මාන මැනීම සඳහා පික්සල භාවිත කෙරේ.\nB – පික්සලයකට ඇති බිටු සංඛ්‍යාව මගින් අංකිත රූපයක පවතින වර්ණ සංඛ්‍යාව තීරණය කරනු ලබයි.\nC – අංකිත රූපයක පික්සල, ත්‍රිමාන අරාවක (3D array) තුළ පිළිවෙළ වී ඇත.",
      type: "mcq",
      options: [
        { id: "1", en: "A and B only", si: "A සහ B පමණි" },
        { id: "2", en: "A and C only", si: "A සහ C පමණි" },
        { id: "3", en: "B and C only", si: "B සහ C පමණි" },
        { id: "4", en: "All A, B and C", si: "A, B සහ C සියල්ලම" }
      ],
      correctOptionId: "1",
      explanationEn: "Statements A and B are true. Statement C is incorrect because pixels in a digital image are arranged in a 2D rectangular grid/bitmap, not a 3D array.",
      explanationSi: "A සහ B ප්‍රකාශ නිවැරදිය. C ප්‍රකාශය වැරදිය; මන්ද අංකිත රූපයක පික්සල සකස් වන්නේ ද්විමාන (2D) න්‍යාසයක මිස ත්‍රිමාන (3D) අරාවක නොවේ."
    },
    {
      id: "pp-g11-u4-2021-3",
      year: 2021,
      paperType: "Paper II",
      badgeText: "2021 O/L Paper II - Question 01 (iii)",
      questionEn: "1. (iii) Fill in the blanks of the following sentences using the appropriate terms from the given list:\n*List: {lossy, lossless, Vector, Raster, RGB, CMYK, dpi, ppm}*\nP: Image files such as JPEG and TIFF that are compressed using ............... compression facilitate fast downloading from the Internet.\nQ: ...................... images can be created using software such as Adobe Photoshop and GIMP.",
      questionSi: "1. (iii) පහත දැක්වෙන වාක්‍යවල හිස්තැන් පිරවීම සඳහා ලබා දී ඇති පද ලැයිස්තුවෙන් නිවැරදි පදය තෝරන්න:\n*පද ලැයිස්තුව: {lossy (හානිවන), lossless (හානි නොවන), Vector (වෙක්ටර්), Raster (රැස්ටර්), RGB, CMYK, dpi, ppm}*\nP: ................. compression භාවිතයෙන් සංකෝචනය කළ JPEG සහ TIFF වැනි රූප ගොනු අන්තර්ජාලයෙන් වේගවත් බාගත කිරීමක් සඳහා පහසුකම් සපයයි.\nQ: ඇඩෝබි ෆොටෝෂොප් සහ GIMP වැනි මෘදුකාංග භාවිතයෙන් ...................... රූප නිර්මාණය කළ හැක.",
      type: "structured",
      sampleAnswerEn: "P: lossy\nQ: Raster",
      sampleAnswerSi: "P: lossy (හානිවන)\nQ: Raster (රැස්ටර්)",
      explanationEn: "P is 'lossy' because JPEG cuts file size significantly for web downloading. Q is 'Raster' because Photoshop and GIMP are bitmap/raster image editors.",
      explanationSi: "P යනු 'lossy' වේ (JPEG ගොනු ප්‍රමාණය අවම කරන බැවින්). Q යනු 'Raster' වේ (Photoshop සහ GIMP පික්සල පදනම් කරගත් රැස්ටර් මෘදුකාංග බැවින්)."
    },
    {
      id: "pp-g11-u4-2022-4",
      year: 2022,
      paperType: "Paper I",
      badgeText: "2022 O/L Paper I - Question 23",
      questionEn: "A student is developing the school website. One of the requirements of the school is that the pages of the website must open quickly. Which of the following file types should the student use for the graphics of the site to suit the above requirement?",
      questionSi: "පාසල් වෙබ් අඩවිය ශිෂ්‍යයකු විසින් ගොඩනඟනු ලබයි. වෙබ් අඩවියේ පිටු ඉක්මනින් විවෘත වීම පාසලේ එක් අවශ්‍යතාවකි. එම අවශ්‍යතාව ඉටු කිරීමට අඩවියේ චිත්‍රක (graphics) සඳහා පහත කවර ගොනු වර්ගය ශිෂ්‍යයා භාවිත කළ යුතුද?",
      type: "mcq",
      options: [
        { id: "1", en: "JPEG", si: "JPEG" },
        { id: "2", en: "MP3", si: "MP3" },
        { id: "3", en: "RAW", si: "RAW" },
        { id: "4", en: "WAV", si: "WAV" }
      ],
      correctOptionId: "1",
      explanationEn: "JPEG is a compressed lossy format that minimizes image file size, ensuring fast web page loading speeds.",
      explanationSi: "JPEG යනු සංකෝචිත හානිවන ගොනු ආකෘතියක් වන අතර, එය ගොනු ප්‍රමාණය අවම කර වෙබ් පිටු ඉතා ඉක්මනින් විවෘත වීමට මග පාදයි."
    },
    {
      id: "pp-g11-u4-2022-5",
      year: 2022,
      paperType: "Paper I",
      badgeText: "2022 O/L Paper I - Question 24",
      questionEn: "A raster image of resolution 2400 × 3000 uses 24 bits to keep the information of each pixel. What is the maximum number of colours that the image can use?",
      questionSi: "විභේදනය 2400 × 3000 වූ රැස්ටර් චිත්‍රයක පික්සලයක තොරතුරු තබා ගැනීමට බිටු 24ක් භාවිත කෙරේ. එම චිත්‍රයට භාවිත කළ හැකි උපරිම වර්ණ ගණන කොපමණද?",
      type: "mcq",
      options: [
        { id: "1", en: "24", si: "24" },
        { id: "2", en: "24 × 2400 × 3000", si: "24 × 2400 × 3000" },
        { id: "3", en: "2²⁴", si: "2²⁴" },
        { id: "4", en: "2⁷²⁰⁰⁰⁰⁰", si: "2⁷²⁰⁰⁰⁰⁰" }
      ],
      correctOptionId: "3",
      explanationEn: "Maximum number of colors = 2ⁿ where n is the number of bits per pixel. For 24 bits, it is 2²⁴ (over 16.7 million colors).",
      explanationSi: "නිරූපණය කළ හැකි උපරිම වර්ණ ගණන = 2ⁿ (මෙහි n යනු පික්සලයකට ඇති බිටු ගණනයි). බිටු 24ක් සඳහා එය 2²⁴ වේ."
    },
    {
      id: "pp-g11-u4-2022-6",
      year: 2022,
      paperType: "Paper II",
      badgeText: "2022 O/L Paper II - Question 05 (ii) & (iii)",
      questionEn: "5. (ii) Assume that you are editing a sound recording using Audacity to make a speech clip. There are two silent portions in the middle of the recording that need to be removed.\n(a) Explain how you would remove the two silent portions.\n(b) Write down the label of the interface option that you will use to play your modified file.\n\n(iii) Assume that you are creating a video with Windows Movie Maker.\n(a) What is the importance of the timeline stage in the interface?\n(b) List three features that you could add to your video through the software.",
      questionSi: "5. (ii) ඔබ Audacity මෘදුකාංගය භාවිතයෙන් කතාවක ශ්‍රව්‍ය පටයක් සංස්කරණය කරන්නේ යැයි සිතන්න. එහි මැද පවතින නිහඬ කොටස් දෙකක් ඉවත් කළ යුතුව ඇත.\n(a) එම නිහඬ කොටස් දෙක ඉවත් කරන්නේ කෙසේදැයි පැහැදිලි කරන්න.\n(b) වෙනස් කළ ගොනුව ධාවනය (play) කිරීමට භාවිත කරන අතුරුමුහුණත් බොත්තම කුමක්ද?\n\n(iii) Windows Movie Maker භාවිතයෙන් ඔබ දෘශ්‍ය සන්දර්ශනයක් නිර්මාණය කරන්නේ යැයි සිතන්න.\n(a) අතුරුමුහුණතේ කාලතීරු වේදිකාවේ (timeline stage) වැදගත්කම කුමක්ද?\n(b) මෘදුකාංගය හරහා ඔබේ වීඩියෝවට එකතු කළ හැකි විශේෂාංග 3ක් ලැයිස්තුගත කරන්න.",
      type: "structured",
      sampleAnswerEn: "(ii) (a) Select the silent portion using the Selection Tool and press Delete key (or click Edit > Cut).\n(ii) (b) The Green Play Button (▶).\n(iii) (a) Timeline stage organizes the chronological arrangement, stacking, and duration of video clips, images, and audio tracks over time.\n(iii) (b) Video transitions, Title/Caption text overlays, Visual filters/effects, Background music/Narration.",
      sampleAnswerSi: "(ii) (a) තේරීමේ මෙවලම (Selection Tool) මගින් නිහඬ කොටස තෝරා Keyboard හි Delete යතුර ඔබන්න (හෝ Edit > Cut කරන්න).\n(ii) (b) කොළ පැහැති ධාවන බොත්තම (▶ Green Play Button).\n(iii) (a) වීඩියෝ දර්ශන, ඡායාරූප සහ ශ්‍රව්‍ය පථ කාලානුක්‍රමිකව පෙළගැස්වීම සහ කාලසීමාව නිවැරදිව පාලනය කිරීම.\n(iii) (b) වීඩියෝ සංක්‍රාන්ති (Transitions), මාතෘකා හා උපසිරැසි පෙළ (Titles/Captions), දෘශ්‍ය ප්‍රයෝග (Visual effects), පසුබිම් සංගීතය.",
      explanationEn: "Official marking criteria for Audacity editing and Windows Movie Maker interface components.",
      explanationSi: "Audacity ශ්‍රව්‍ය සංස්කරණය සහ Windows Movie Maker අතුරුමුහුණත සඳහා වන නිල ලකුණු දීමේ පටිපාටිය."
    },
    {
      id: "pp-g11-u4-2023-7",
      year: 2023,
      paperType: "Paper I",
      badgeText: "2023 O/L Paper I - Question 37",
      questionEn: "Which of the following statements are true regarding raster images?\nA – If an image uses n bits to keep information about each pixel, then that image is capable of displaying 2ⁿ colours.\nB – Image resolution refers to the number of pixels that exist within an image.\nC – A graphic with a large number of bits per pixel and a high resolution has a small file size.",
      questionSi: "රැස්ටර් චිත්‍රක සම්බන්ධයෙන් පහත කවර ප්‍රකාශ නිවැරදි වේ ද?\nA – චිත්‍රකයක් එක් පික්සලයක තොරතුරු තබා ගැනීමට n බිටු සංඛ්‍යාවක් භාවිත කරයි නම්, එම චිත්‍රකයට වර්ණ 2ⁿ සංඛ්‍යාවක් පෙන්වීමේ හැකියාව ඇත.\nB – චිත්‍රකයක ඇති පික්සල ගණන චිත්‍රක විභේදනය (image resolution) මගින් දැක්වේ.\nC – පික්සලයක් සඳහා විශාල බිටු සංඛ්‍යාවක් භාවිත කරන සහ උසස් විභේදනයක් සහිත චිත්‍රකයකට කුඩා ගොනු විශාලත්වයක් ඇත.",
      type: "mcq",
      options: [
        { id: "1", en: "A only", si: "A පමණි" },
        { id: "2", en: "B only", si: "B පමණි" },
        { id: "3", en: "A and B only", si: "A සහ B පමණි" },
        { id: "4", en: "A and C only", si: "A සහ C පමණි" }
      ],
      correctOptionId: "3",
      explanationEn: "Statements A and B are correct. Statement C is false because higher bit depth and higher resolution result in a larger file size.",
      explanationSi: "A සහ B ප්‍රකාශ සත්‍ය වේ. C ප්‍රකාශය අසත්‍ය වේ; මන්ද වැඩි බිටු ගණනක් සහ ඉහළ විභේදනයක් ඇති විට ගොනු ප්‍රමාණය විශාල වන බැවිනි."
    },
    {
      id: "pp-g11-u4-2023-8",
      year: 2023,
      paperType: "Paper I",
      badgeText: "2023 O/L Paper I - Question 38",
      questionEn: "Which of the following statements are true?\nA – accdb is an example for a video file type.\nB – MP3 is an example for an audio file type.\nC – The frames between two key frames in an animation are called tween frames.",
      questionSi: "පහත කවර ප්‍රකාශ නිවැරදි වේ ද?\nA – accdb වීඩියෝ ගොනු වර්ගයකට නිදසුනකි.\nB – MP3 ශ්‍රව්‍ය (audio) ගොනු වර්ගයකට නිදසුනකි.\nC – සජීවීකරණයක මූලික රාමු (key frames) දෙකක් අතර ඇති රාමු, ට්වීන් රාමු (tween frames) ලෙස හැඳින්වේ.",
      type: "mcq",
      options: [
        { id: "1", en: "A and B only", si: "A සහ B පමණි" },
        { id: "2", en: "A and C only", si: "A සහ C පමණි" },
        { id: "3", en: "B and C only", si: "B සහ C පමණි" },
        { id: "4", en: "All A, B and C", si: "A, B සහ C සියල්ලම" }
      ],
      correctOptionId: "3",
      explanationEn: "B and C are true. Statement A is false because .accdb is a Microsoft Access database file extension, not a video file.",
      explanationSi: "B සහ C ප්‍රකාශ නිවැරදිය. .accdb යනු MS Access දත්ත සමුදා ගොනුවක් වන අතර වීඩියෝ ගොනුවක් නොවන බැවින් A අසත්‍ය වේ."
    },
    {
      id: "pp-g11-u4-2023-9",
      year: 2023,
      paperType: "Paper II",
      badgeText: "2023 O/L Paper II - Question 05 (i), (ii), (iv)",
      questionEn: "5. (i) A person is trying to decide whether to use the BMP format or the JPG format to save an image.\n(a) Which format will take lesser storage space? Why?\n(b) Which format will have better image quality?\n(ii) Write down the main difference between raster and vector image files.\n(iv) What is meant by 'key frames' in an animation?",
      questionSi: "5. (i) පුද්ගලයෙකු රූපයක් සුරැකීමට BMP ආකෘතිය හෝ JPG ආකෘතිය භාවිත කරන්නේදැයි තීරණය කිරීමට උත්සාහ කරයි.\n(a) අඩු ගබඩා ඉඩ ප්‍රමාණයක් ගනු ලබන්නේ කුමන ආකෘතියද? හේතුව කුමක්ද?\n(b) වඩා හොඳ රූප ගුණාත්මකභාවයක් ඇත්තේ කුමන ආකෘතියේද?\n(ii) රැස්ටර් (raster) සහ වෙක්ටර් (vector) චිත්‍රක ගොනු අතර මූලික වෙනස ලියා දක්වන්න.\n(iv) සජීවීකරණයක 'මූලික රාමු' (key frames) යන්නෙන් කුමක් අදහස් වේ ද?",
      type: "structured",
      sampleAnswerEn: "(i) (a) JPG format. Because JPG uses lossy compression algorithms to significantly reduce file size compared to uncompressed BMP.\n(i) (b) BMP format. It preserves raw, uncompressed original pixel data without quality loss.\n(ii) Raster images are composed of a fixed grid of pixels that lose quality and pixelate upon enlargement, whereas Vector images are composed of mathematical lines and curves that maintain sharp quality at any magnification.\n(iv) Key frames are essential user-created frames on the timeline that define the starting and ending positions, states, or appearances of an animation motion.",
      sampleAnswerSi: "(i) (a) JPG ආකෘතිය. JPG හි හානිවන සම්පීඩනය (lossy compression) භාවිත වන බැවින් BMP වලට වඩා ගොනු ප්‍රමාණය බෙහෙවින් අඩු වේ.\n(i) (b) BMP ආකෘතිය. සංකෝචනය නොකළ මුල් පික්සල තොරතුරු එලෙසම රඳවා ගන්නා බැවින් උසස් ගුණාත්මකභාවයක් ඇත.\n(ii) රැස්ටර් රූප පික්සල න්‍යාසයකින් සමන්විත වන අතර විශාල කිරීමේදී බොඳ වේ/පික්සල් කැඩේ; වෙක්ටර් රූප ගණිතමය සූත්‍ර හා රේඛාවලින් සමන්විත වන අතර කෙතරම් විශාල කළද ගුණාත්මක බව වෙනස් නොවේ.\n(iv) මූලික රාමු (Key frames) යනු සජීවීකරණයක ආරම්භක හා අවසාන පිහිටීම හෝ අවස්ථාව නිර්මාණකරු විසින් සෘජුවම නිර්මාණය කරනු ලබන ප්‍රධාන රාමු වේ.",
      explanationEn: "Official marking criteria for image format comparison, raster vs vector mechanics, and key frames.",
      explanationSi: "රූප ආකෘති, රැස්ටර් හා වෙක්ටර් යාන්ත්‍රණය සහ මූලික රාමු සඳහා නිල ලකුණු දීමේ පිළිතුරු."
    },
    {
      id: "pp-g11-u4-2024-10",
      year: 2024,
      paperType: "Paper I",
      badgeText: "2024 O/L Paper I - Question 35",
      questionEn: "Which of the following statements is incorrect regarding raster and vector graphics?",
      questionSi: "රැස්ටර් සහ වෙක්ටර් ග්‍රැෆික්ස් සම්බන්ධයෙන් පහත සඳහන් ප්‍රකාශ අතරින් අසත්‍ය ප්‍රකාශය කුමක්ද?",
      type: "mcq",
      options: [
        { id: "1", en: "The GIMP software can be used to create a raster image.", si: "GIMP මෘදුකාංගය රැස්ටර් රූපයක් සෑදීමට භාවිත කළ හැක." },
        { id: "2", en: "Vector images are constructed through lines, curves and fills.", si: "වෙක්ටර් රූප රේඛා, වක්‍ර සහ පිරවුම් මගින් නිර්මාණය වේ." },
        { id: "3", en: "When a vector image is enlarged, its quality degrades.", si: "වෙක්ටර් රූපයක් විශාල කළ විට එහි ගුණාත්මක බව අඩු වේ." },
        { id: "4", en: "Raster images are not suitable for images like institution logos that frequently need resizing.", si: "නිතර ප්‍රමාණය වෙනස් කිරීමට අවශ්‍ය ආයතනික ලාංඡන වැනි රූප සඳහා රැස්ටර් රූප සුදුසු නැත." }
      ],
      correctOptionId: "3",
      explanationEn: "Option 3 is incorrect (the correct answer to the question) because vector images NEVER degrade when enlarged; their mathematical curves recalculate cleanly.",
      explanationSi: "3 වන ප්‍රකාශය අසත්‍ය වේ (ප්‍රශ්නයට පිළිතුරයි); මන්ද වෙක්ටර් රූපයක් කෙතරම් විශාල කළද එහි ගුණාත්මකභාවය කිසිසේත් හීන නොවන බැවිනි."
    },
    {
      id: "pp-g11-u4-2024-11",
      year: 2024,
      paperType: "Paper I",
      badgeText: "2024 O/L Paper I - Question 37",
      questionEn: "Which of the following gives the approximate size in bytes of an uncompressed raster image having a 275 × 175 resolution and a maximum of four colours?",
      questionSi: "සංකෝචනය නොකළ 275 × 175 විභේදනයක් සහ උපරිම වර්ණ හතරක් (4 colours) සහිත රැස්ටර් රූපයක අනුමාන ප්‍රමාණය බයිටවලින් (bytes) ලබා දෙන්නේ පහත කුමකින්ද?",
      type: "mcq",
      options: [
        { id: "1", en: "275 × 175", si: "275 × 175" },
        { id: "2", en: "275 × 175 × 4", si: "275 × 175 × 4" },
        { id: "3", en: "(275 × 175 × 2) / 8", si: "(275 × 175 × 2) / 8" },
        { id: "4", en: "(275 × 175 × 4) / 8", si: "(275 × 175 × 4) / 8" }
      ],
      correctOptionId: "3",
      explanationEn: "4 distinct colors require 2 bits per pixel (since 2² = 4). Total bits = 275 × 175 × 2. Converting to bytes by dividing by 8 gives (275 × 175 × 2) / 8.",
      explanationSi: "වර්ණ 4ක් සඳහා පික්සලයකට බිටු 2ක් අවශ්‍ය වේ (2² = 4). මුළු බිටු ගණන = 275 × 175 × 2. එය 8න් බෙදූ විට ලැබෙන බයිට ගණන = (275 × 175 × 2) / 8 වේ."
    },
    {
      id: "pp-g11-u4-2025-12",
      year: 2025,
      paperType: "Paper I",
      badgeText: "2025 O/L Paper I - Question 37",
      questionEn: "Consider an uncompressed digital image with resolution 1920 × 1080 and 8 bits used for each pixel.\nIf this image is not compressed, then its approximate size in bytes is:",
      questionSi: "විභේදනය 1920 × 1080 වූ සහ එක පික්සලයක් සඳහා බිටු 8ක් භාවිත කරන සංකෝචනය නොකළ අංකිත රූපයක් සලකන්න.\nමෙම රූපය සංකෝචනය නොකළේ නම්, බයිටවලින් (bytes) එහි අනුමාන ප්‍රමාණය කොපමණද?",
      type: "mcq",
      options: [
        { id: "1", en: "1920 × 1080", si: "1920 × 1080" },
        { id: "2", en: "1920 × 1080 × 8", si: "1920 × 1080 × 8" },
        { id: "3", en: "(1920 × 1080 × 2) / 8", si: "(1920 × 1080 × 2) / 8" },
        { id: "4", en: "(1920 × 1080 × 8) / 8", si: "(1920 × 1080 × 8) / 8" }
      ],
      correctOptionId: "1",
      explanationEn: "8 bits per pixel equals exactly 1 byte. Therefore, total bytes = (1920 × 1080 × 8) / 8 = 1920 × 1080 bytes.",
      explanationSi: "පික්සලයකට බිටු 8ක් යනු බයිට 1කි. එබැවින් මුළු බයිට ගණන = (1920 × 1080 × 8) / 8 = 1920 × 1080 බයිට වේ."
    },
    {
      id: "pp-g11-u4-2025-13",
      year: 2025,
      paperType: "Paper I",
      badgeText: "2025 O/L Paper I - Question 38",
      questionEn: "Consider an uncompressed digital image with resolution 1920 × 1080 and 8 bits used for each pixel.\nWhat is the maximum number of colours that the above image can contain?",
      questionSi: "විභේදනය 1920 × 1080 වූ සහ එක පික්සලයක් සඳහා බිටු 8ක් භාවිත කරන සංකෝචනය නොකළ අංකිත රූපයක් සලකන්න.\nඉහත රූපයේ අඩංගු විය හැකි උපරිම වර්ණ සංඛ්‍යාව කොපමණද?",
      type: "mcq",
      options: [
        { id: "1", en: "3", si: "3" },
        { id: "2", en: "8", si: "8" },
        { id: "3", en: "2⁸ (256)", si: "2⁸ (256)" },
        { id: "4", en: "2⁸ × 1920 × 1080", si: "2⁸ × 1920 × 1080" }
      ],
      correctOptionId: "3",
      explanationEn: "With 8 bits allocated per pixel, maximum unique color shades = 2⁸ = 256.",
      explanationSi: "පික්සලයකට බිටු 8ක් භාවිත කරන විට නිරූපණය කළ හැකි උපරිම වර්ණ ගණන 2⁸ = 256 වේ."
    },
    {
      id: "pp-g11-u4-2025-14",
      year: 2025,
      paperType: "Paper I",
      badgeText: "2025 O/L Paper I - Question 39",
      questionEn: "Which of the following only contains examples of graphics file formats?",
      questionSi: "ග්‍රැෆික් ගොනු ආකෘති (graphics file formats) සඳහා නිදසුන් පමණක් අඩංගු වන්නේ පහත කුමකද?",
      type: "mcq",
      options: [
        { id: "1", en: "avi, docx, pdf", si: "avi, docx, pdf" },
        { id: "2", en: "bmp, jpg, png", si: "bmp, jpg, png" },
        { id: "3", en: "docx, mp3, pdf", si: "docx, mp3, pdf" },
        { id: "4", en: "mp4, png, ppt", si: "mp4, png, ppt" }
      ],
      correctOptionId: "2",
      explanationEn: "bmp (Bitmap), jpg (JPEG), and png (Portable Network Graphics) are all digital image/graphic file formats.",
      explanationSi: "bmp, jpg, සහ png යන සියල්ලම අංකිත රූප/ග්‍රැෆික් ගොනු ආකෘති වේ."
    }
  ]
};
