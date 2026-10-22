// Verbatim dual-medium syllabus data for Grade 11 Lesson 6
import { GeneralLessonData } from '../allLessonsData';

export const G11_U6_DATA: GeneralLessonData = {
  id: "g11-u6",
  grade: "11",
  unitNumber: 6,
  titleEn: "ICT and Society",
  titleSi: "තොරතුරු සහ සන්නිවේදන තාක්ෂණය හා සමාජය",
  subtopics: [
    {
      id: "g11-u6-st-1",
      number: "6.1",
      titleEn: "Ethical, Legal, and Social Issues in ICT",
      titleSi: "ICT හි ආචාරධර්ම, නීතිමය සහ සමාජීය ගැටලු",
      summaryEn: "Ethics, privacy, intellectual property, copyright, plagiarism, software piracy, license models (Proprietary, FOSS, Shareware, Freeware), cyber crimes, Computer Crimes Act No. 24 of 2007, and Sri Lanka CERT|CC.",
      summarySi: "ආචාරධර්ම, පෞද්ගලිකත්වය, බුද්ධිමය දේපළ, ප්‍රකාශන අයිතිය, මෘදුකාංග කොල්ලකෑම, බලපත්‍ර වර්ග (Proprietary, FOSS, Shareware, Freeware), සයිබර් අපරාධ, 2007 අංක 24 දරන පරිගණක අපරාධ පනත සහ ශ්‍රී ලංකා CERT|CC.",
      blocks: [
        {
          id: "b-g11-u6-1-1",
          en: "* **Ethics and Privacy in Cyberspace:**\n  * **Ethics (ආචාරධර්ම / එතික්ස්):** The system of moral values and behavioral principles guiding individuals and organizations to use information technology responsibly, honestly, and equitably.\n  * **Privacy (පෞද්ගලිකත්වය):** The fundamental right of individuals to determine how their personal data is collected, processed, and shared. Accessing, stealing, or distributing personal records without explicit consent constitutes a severe violation of privacy.\n* **Intellectual Property & Software Ownership:**\n  * **Intellectual Property (IP - බුද්ධිමය දේපළ):** Legal rights protecting human intellectual creations, including software source code, digital designs, artistic works, inventions, and literary assets.\n  * **Copyright (ප්‍රකාශන අයිතිය / කතුහිමිකම):** Exclusive legal authorization granted to an original creator to publish, sell, distribute, or license their intellectual creation.\n  * **Plagiarism (ව්‍යාජ උපුටා ගැනීම):** The unethical practice of copying someone else's written work, research ideas, or programming code and presenting it as one's own without proper attribution or academic citation.\n  * **Software Piracy (මෘදුකාංග කොල්ලකෑම):** Unauthorized copying, downloading, distributing, sharing, or commercial use of copyrighted commercial software without a legitimate user license.",
          si: "* **සයිබර් අවකාශයේ ආචාරධර්ම සහ පෞද්ගලිකත්වය:**\n  * **ආචාරධර්ම (Ethics):** තොරතුරු සහ සන්නිවේදන තාක්ෂණය වගකීම් සහගතව, සාධාරණව සහ අවංකව භාවිත කිරීම සඳහා පුද්ගලයකු හෝ ආයතනයක් විසින් අනුගමනය කළ යුතු සදාචාරාත්මක මූලධර්ම පද්ධතියයි.\n  * **පෞද්ගලිකත්වය (Privacy):** තම පෞද්ගලික තොරතුරු රැස් කිරීම, ගබඩා කිරීම සහ බෙදා හැරීම පාලනය කිරීමට පුද්ගලයෙකුට ඇති අයිතියයි. අනුමැතියකින් තොරව අනෙකෙකුගේ පෞද්ගලික දත්තවලට පිවිසීම හෝ හෙළිදරව් කිරීම පෞද්ගලිකත්වය උල්ලංඝනය කිරීමකි.\n* **බුද්ධිමය දේපළ සහ මෘදුකාංග හිමිකාරිත්වය:**\n  * **බුද්ධිමය දේපළ (Intellectual Property - IP):** මිනිස් බුද්ධියේ නිර්මාණ වන මෘදුකාංග කේත, සොයාගැනීම්, සාහිත්‍ය හා කලාත්මක නිර්මාණ, වෙළෙඳ ලකුණු සහ සැලසුම් සඳහා හිමිවන නීතිමය අයිතියයි.\n  * **ප්‍රකාශන අයිතිය (Copyright):** මූලික නිර්මාණයක් කළ නිර්මාණකරුවෙකුට තම නිර්මාණය ප්‍රකාශයට පත් කිරීමට, විකිණීමට, බෙදා හැරීමට හෝ බලපත්‍ර ලබා දීමට නීතියෙන් හිමිවන තනි අයිතියයි.\n  * **ව්‍යාජ උපුටා ගැනීම (Plagiarism):** අනෙකෙකුගේ ලිපි ලේඛන, අදහස් හෝ මෘදුකාංග කේත නිසි උපුටා දැක්වීමකින් තොරව තමන්ගේම නිර්මාණයක් ලෙස පෙන්වා දීමේ අනීතික ක්‍රියාවයි.\n  * **මෘදුකාංග කොල්ලකෑම (Software Piracy):** ප්‍රකාශන හිමිකම් සහිත වාණිජ මෘදුකාංග නීතිමය බලපත්‍රයකින් තොරව අනවසරයෙන් පිටපත් කිරීම, බෙදා හැරීම, භාවිත කිරීම හෝ විකිණීමයි.",
          highlightTerm: "Ethics, Privacy & Intellectual Property"
        },
        {
          id: "b-g11-u6-1-2",
          en: "* **Software License Classification:**\n  * **Proprietary Software (හිමිකාර මෘදුකාංග):** Commercial closed-source software where the underlying source code is confidential. Users purchase an end-user license to use the executable compiled software (*Examples:* Microsoft Windows, Microsoft Office, Adobe Photoshop).\n  * **Free and Open Source Software - FOSS (නිදහස් හා විවෘත මූලාශ්‍ර මෘදුකාංග):** Software where the human-readable source code is freely accessible to study, modify, improve, and redistribute (*Examples:* Linux OS, LibreOffice, GIMP, Python, Apache Web Server).\n  * **Shareware (පරීක්ෂණ කාලසීමා මෘදුකාංග):** Software distributed free of charge on a trial basis for an evaluation period (e.g. 30 days), after which the user must purchase a commercial key to continue (*Examples:* WinRAR, Antivirus trial editions).\n  * **Freeware (නොමිලේ ලබා දෙන මෘදුකාංග):** Fully usable software available free of monetary charge indefinitely, but the proprietary source code remains hidden and cannot be modified (*Examples:* Adobe Acrobat Reader, Skype, VLC Media Player).",
          si: "* **මෘදුකාංග බලපත්‍ර වර්ගීකරණය:**\n  * **හිමිකාර මෘදුකාංග (Proprietary Software):** මූලාශ්‍ර කේතය (Source Code) වසා ඇති වාණිජ මෘදුකාංග වේ. පරිශීලකයා මිලදී ගන්නේ භාවිත කිරීමේ බලපත්‍රයක් පමණි (*උදාහරණ:* MS Windows, MS Office, Adobe Photoshop).\n  * **නිදහස් හා විවෘත මූලාශ්‍ර මෘදුකාංග (FOSS):** මූලාශ්‍ර කේතය නොමිලේ ලබා ගත හැකි අතර, එය අධ්‍යයනය කිරීමට, වෙනස් කිරීමට සහ නැවත බෙදා හැරීමට පූර්ණ නිදහස ඇත (*උදාහරණ:* Linux, LibreOffice, GIMP, Python, Apache).\n  * **ෂෙයාර්වෙයාර් (Shareware):** නිශ්චිත පරීක්ෂණ කාලසීමාවකට (උදා: දින 30ක්) නොමිලේ ලබා දෙන අතර, ඉන්පසු භාවිතය සඳහා මුදල් ගෙවා බලපත්‍රයක් ලබා ගත යුතුය (*උදාහරණ:* WinRAR, Antivirus Trial).\n  * **ෆ්‍රීවෙයාර් (Freeware):** මුදල් අය කිරීමකින් තොරව නොමිලේ භාවිත කළ හැකි නමුත් මූලාශ්‍ර කේතය ලබා නොදෙන සංවෘත මෘදුකාංග වේ (*උදාහරණ:* Adobe Reader, Skype, VLC Player).",
          highlightTerm: "Software License Models: Proprietary, FOSS, Shareware, Freeware"
        },
        {
          id: "b-g11-u6-1-3",
          en: "* **Cyber Crimes and Threats:**\n  * **Hacking & Cracking:** Gaining unauthorized entry into a computer network. Ethical hacking enhances security, whereas malicious Cracking steals credentials, corrupts files, or extorts funds.\n  * **Phishing (ෆිෂින්):** Fraudulent deceptive attempts to steal confidential passwords, credit card numbers, or PINs by impersonating authentic banks or services via fake emails or spoofed websites.\n  * **Identity Theft:** Illegally acquiring another individual's identity details (national identity numbers, passports) to conduct fraudulent transactions.\n  * **Denial of Service - DoS / DDoS:** Flooding a web server with a massive barrage of bogus traffic packets to consume all bandwidth, crashing the service for legitimate citizens.\n  * **Ransomware:** Malicious software encrypting user disks and files, demanding ransom payment in cryptocurrency to release decryption keys.\n  * **Malware Types:** Computer Viruses (attach to host files), Worms (self-propagating network spread without host), Trojan Horses (disguised as legitimate utilities), Spyware/Keyloggers (covert surveillance of user keystrokes).\n* **Sri Lankan Legal Framework & Cyber Incident Response:**\n  * **Computer Crimes Act No. 24 of 2007 (2007 අංක 24 දරන පරිගණක අපරාධ පනත):** Parliamentary legislation criminalizing unauthorized access to computer systems, intentional data corruption, denial-of-service disruptions, and cyber theft with punitive legal penalties.\n  * **Sri Lanka CERT|CC (Computer Emergency Readiness Team | Coordination Centre):** The apex national agency in Sri Lanka mandated to respond to cyber security emergencies, monitor malware epidemics, issue threat advisories, and educate the public on safe online practices.",
          si: "* **සයිබර් අපරාධ සහ තර්ජන:**\n  * **හැකිං සහ ක්‍රැකිං (Hacking & Cracking):** අනවසරයෙන් පරිගණක පද්ධතියකට ඇතුළු වීම. ආරක්ෂාව තහවුරු කිරීමට කරන Ethical Hacking හැර, ද්වේෂසහගතව දත්ත සොරකම් කිරීමට හෝ හානි කිරීමට ක්‍රැකිං (Cracking) සිදු කෙරේ.\n  * **ෆිෂින් (Phishing):** විශ්වාසදායක බැංකුවක් හෝ ආයතනයක් ලෙස පෙනී සිටිමින් ව්‍යාජ විද්‍යුත් තැපැල් හෝ වෙබ් අඩවි හරහා රහස්‍ය මුරපද (Passwords) සහ බැංකු ගිණුම් තොරතුරු සොරකම් කිරීම.\n  * **අනන්‍යතා සොරකම (Identity Theft):** වෙනත් අයෙකුගේ ජාතික හැඳුනුම්පත් අංක හෝ ගිණුම් විස්තර සොරකම් කර එම පුද්ගලයා ලෙස පෙනී සිටිමින් මූල්‍ය වංචා සිදු කිරීම.\n  * **සේවා වාරණ ප්‍රහාර (Denial of Service - DoS / DDoS):** සේවාදායක පරිගණකයකට අධික ව්‍යාජ තදබදයක් යොමු කර නියමිත පරිශීලකයන්ට සේවාව ලබා ගැනීමට නොහැකි වන පරිදි පද්ධතිය අඩපණ කිරීම.\n  * **කප්පම් මෘදුකාංග (Ransomware):** පරිගණකයේ ඇති ගොනු සංකේතනය (encrypt) කර ඒවා නැවත ලබා ගැනීමට මුදල් කප්පම් ඉල්ලා සිටින අනිෂ්ට මෘදුකාංග.\n  * **අනිෂ්ට මෘදුකාංග (Malware):** වෛරස (වෙනත් ගොනු මත යැපෙන), පණුවන් (Worms - ජාල ඔස්සේ ස්වයංක්‍රීයව බෝවන), ට්‍රෝජන් අශ්වයන් (ප්‍රයෝජනවත් මෘදුකාංග ලෙස වෙස්වලාගත්), ඔත්තු මෘදුකාංග (Spyware/Keyloggers).\n* **ශ්‍රී ලංකාවේ නීතිමය රාමුව සහ ආයතන:**\n  * **2007 අංක 24 දරන පරිගණක අපරාධ පනත (Computer Crimes Act No. 24 of 2007):** පරිගණක පද්ධතිවලට අනවසරයෙන් පිවිසීම, දත්ත විනාශ කිරීම, සේවා අඩපණ කිරීම සහ සයිබර් අපරාධ වැළැක්වීම හා දඬුවම් නියම කිරීම සඳහා සම්මත කළ නීතියයි.\n  * **ශ්‍රී ලංකා CERT|CC (Computer Emergency Readiness Team | Coordination Centre):** සයිබර් ආරක්ෂණ සිදුවීම් සඳහා ප්‍රතිචාර දැක්වීම, තර්ජන පිළිබඳ අනතුරු ඇඟවීම් නිකුත් කිරීම සහ මහජනතාව දැනුවත් කිරීම සඳහා ශ්‍රී ලංකාවේ පිහිටුවා ඇති ප්‍රධාන ජාතික ආයතනයයි.",
          highlightTerm: "Cyber Crimes, Computer Crimes Act & Sri Lanka CERT|CC"
        }
      ],
      checkpointQuiz: {
        id: "q-g11-u6-1",
        questionEn: "Which software license model grants users full legal rights to access, inspect, modify, and redistribute the human-readable source code without restriction?",
        questionSi: "මෘදුකාංගයේ මූලාශ්‍ර කේතය (Source Code) අධ්‍යයනය කිරීමට, වෙනස් කිරීමට සහ නැවත බෙදා හැරීමට පරිශීලකයාට පූර්ණ නිදහස ලබා දෙන මෘදුකාංග බලපත්‍ර වර්ගය කුමක්ද?",
        options: [
          {
            id: "1",
            en: "Free and Open Source Software (FOSS)",
            si: "නිදහස් හා විවෘත මූලාශ්‍ර මෘදුකාංග (FOSS)"
          },
          {
            id: "2",
            en: "Proprietary Commercial Software",
            si: "හිමිකාර වාණිජ මෘදුකාංග (Proprietary Software)"
          },
          {
            id: "3",
            en: "Shareware Trial Edition",
            si: "ෂෙයාර්වෙයාර් පරීක්ෂණ මෘදුකාංග (Shareware)"
          },
          {
            id: "4",
            en: "Freeware Binary Edition",
            si: "ෆ්‍රීවෙයාර් සංවෘත මෘදුකාංග (Freeware)"
          }
        ],
        correctOptionId: "1",
        explanationEn: "FOSS licenses (such as GNU GPL or MIT) mandate open access to the underlying source code for learning, modification, and collaborative redistribution.",
        explanationSi: "FOSS (නිදහස් හා විවෘත මූලාශ්‍ර මෘදුකාංග) මගින් ඕනෑම අයෙකුට මූලාශ්‍ර කේතය (Source Code) ලබා ගැනීමට, සංශෝධනය කිරීමට සහ නැවත බෙදා හැරීමට නිදහස සහතික කරයි."
      }
    },
    {
      id: "g11-u6-st-2",
      number: "6.2",
      titleEn: "Ergonomics, Health, and Safety",
      titleSi: "එර්ගොනොමික්ස්, සෞඛ්‍යය සහ ආරක්ෂාව",
      summaryEn: "Principles of ergonomics, computer-related health hazards (RSI, CVS, Carpal Tunnel Syndrome, postural strain), and healthy computer workstation ergonomics.",
      summarySi: "කාර්යශ්‍රමක්ෂමතාව (Ergonomics) මූලධර්ම, පරිගණක ආශ්‍රිත සෞඛ්‍ය ගැටලු (RSI, CVS, කාපල් ටනල්, කොන්දේ කැක්කුම) සහ නිවැරදි සේවා පරිසර සැලසුම.",
      blocks: [
        {
          id: "b-g11-u6-2-1",
          en: "* **What is Ergonomics?** Ergonomics (කාර්යශ්‍රමක්ෂමතාව) is the scientific study of designing and arranging workplaces, equipment, chairs, lighting, and workflow to suit the natural physiological capabilities and posture of the human worker, preventing chronic fatigue and musculoskeletal injuries.\n* **Computer-Related Health Conditions:**\n  * **1. Repetitive Strain Injury (RSI - පුනරාවර්තී ආයාස තුවාල):** Chronic injury to tendons, muscles, and nerves caused by continuous, repetitive motions (e.g. typing or mouse clicking without breaks).\n  * **2. Computer Vision Syndrome (CVS - පරිගණක දෘශ්‍ය සහලක්ෂණය):** Eye strain, dryness, burning sensations, headaches, and blurred vision caused by prolonged exposure to high-glare digital screens.\n  * **3. Carpal Tunnel Syndrome (CTS - කාපල් ටනල් සහලක්ෂණය):** Nerve compression of the median nerve running through the carpal tunnel in the wrist due to bent wrist posture while using a keyboard or mouse.\n  * **4. Postural Back and Neck Pain:** Musculoskeletal strain caused by slouching, non-ergonomic chairs, or incorrect screen height.\n  * **5. Mental Stress & Sedentary Lifestyle:** Psychological fatigue, social isolation, and obesity resulting from continuous desk confinement without physical activity.\n* **Recommended Ergonomic Standards & Practices:**\n  * **Monitor Alignment:** Top edge of the display screen aligned at or slightly below horizontal eye level; situated 18–24 inches (45–60 cm) away from the eyes.\n  * **Seating Posture:** Ergonomic chair with adjustable lumbar support; feet resting flat on the floor or footrest; knees bent at a 90° angle.\n  * **Arms & Wrists:** Forearms parallel to the desk; elbows supported at a 90° angle; wrists maintained in a neutral straight line without bending upward or sideways.\n  * **The 20-20-20 Rule:** Every 20 minutes of screen work, look away at an object located 20 feet away for at least 20 seconds to relieve eye muscle tension.\n  * **Hourly Breaks:** Stand up, stretch, and move around for 5 minutes every hour.",
          si: "* **කාර්යශ්‍රමක්ෂමතාව (Ergonomics) යනු කුමක්ද?** මිනිසාගේ ශාරීරික පහසුවට සහ ස්වාභාවික හැකියාවන්ට ගැළපෙන පරිදි සේවා ස්ථානය, පුටු, පරිගණක උපකරණ, ආලෝකය සහ සේවා පරිසරය සැලසුම් කිරීමේ විද්‍යාවයි. එමගින් සෞඛ්‍ය ගැටලු හා ආබාධ වළක්වා කාර්යක්ෂමතාව ඉහළ නංවයි.\n* **පරිගණක භාවිතය නිසා ඇතිවන ප්‍රධාන සෞඛ්‍ය ගැටලු:**\n  * **1. පුනරාවර්තී ආයාස තුවාල (Repetitive Strain Injury - RSI):** අඛණ්ඩව යතුරුපුවරුව හෝ මූසිකය භාවිතය වැනි එකම චලනයන් දිගින් දිගටම කිරීම නිසා පේශි, කණ්ඩරා සහ ස්නායුවලට සිදුවන ආබාධ.\n  * **2. පරිගණක දෘශ්‍ය සහලක්ෂණය (Computer Vision Syndrome - CVS):** ඩිජිටල් තිර දෙස දිගු වේලාවක් බලා සිටීම නිසා ඇස් වියළීම, ඇස් දැවිල්ල, හිසරදය සහ පෙනීම බොඳවීම.\n  * **3. කාපල් ටනල් සහලක්ෂණය (Carpal Tunnel Syndrome - CTS):** ටයිප් කිරීමේදී මැණික් කටුව වැරදි ලෙස තබා ගැනීම නිසා මැණික් කටුවේ ඇති මධ්‍ය ස්නායුව (Median Nerve) තෙරපී අතේ හිරිවැටීම සහ දරුණු වේදනාව ඇතිවීම.\n  * **4. කොන්ද සහ බෙල්ලේ කැක්කුම:** නුසුදුසු පුටු භාවිතය, ඇලවී වාඩිවීම හෝ මොනිටරය වැරදි උසකින් තබා ගැනීම නිසා කොඳු ඇට පෙළට සිදුවන පීඩනය.\n  * **5. මානසික ආතතිය සහ ස්ථූලතාව:** දිගු වේලාවක් ව්‍යායාමයකින් තොරව එකතැන වාඩිවී සිටීම නිසා ඇතිවන මානසික තෙහෙට්ටුව සහ ශාරීරික අපහසුතා.\n* **නිවැරදි එර්ගොනොමික් මූලධර්ම සහ පිළියම්:**\n  * **මොනිටරයේ පිහිටීම:** මොනිටරයේ ඉහළ දාරය ඇස් මට්ටමට සමාන හෝ මඳක් පහළින් තිබිය යුතුය; ඇසේ සිට අඟල් 18–24 (සෙ.මී. 45–60) ක දුරකින් තැබිය යුතුය.\n  * **ඉරියව්ව:** කොන්දට ආධාරකයක් සහිත වෙනස් කළ හැකි පුටුවක් භාවිතය; පාද බිම හෝ පා ආධාරකයක් මත සමතලාව තැබීම; දණහිස් 90° කෝණයකින් තබා ගැනීම.\n  * **මැණික් කටුව සහ වැලමිට:** වැලමිට 90° කෝණයක තබා ගැනීම; ටයිප් කිරීමේදී මැණික් කටුව නොනමා සෘජුව (උදාසීන ඉරියව්වකින්) තබා ගැනීම.\n  * **20-20-20 රීතිය:** සෑම මිනිත්තු 20 කට වරක්ම, අඩි 20ක් ඈතින් ඇති වස්තුවක් දෙස තත්පර 20ක් බලා සිටීම මගින් ඇස් වෙහෙසීම අවම කරගත හැක.\n  * **කෙටි විවේක:** සෑම පැයකට වරක්ම මිනිත්තු 5ක විවේකයක් ගෙන සිරුර දිගහැර ඇවිදීම.",
          highlightTerm: "Workplace Ergonomics, RSI, CVS & 20-20-20 Rule"
        }
      ],
      checkpointQuiz: {
        id: "q-g11-u6-2",
        questionEn: "What is the recommended 20-20-20 rule practiced in ergonomic computer workstations to minimize eye strain (Computer Vision Syndrome)?",
        questionSi: "පරිගණක දෘශ්‍ය සහලක්ෂණය (CVS / Eye Strain) වළක්වා ගැනීම සඳහා නිර්දේශිත 20-20-20 රීතිය යනු කුමක්ද?",
        options: [
          {
            id: "1",
            en: "Every 20 minutes, look at an object 20 feet away for at least 20 seconds.",
            si: "සෑම මිනිත්තු 20 කට වරක්ම, අඩි 20ක් ඈතින් ඇති වස්තුවක් දෙස තත්පර 20ක් බලා සිටීම."
          },
          {
            id: "2",
            en: "Set monitor brightness to 20%, contrast to 20%, and font size to 20pt.",
            si: "මොනිටරයේ දීප්තිය 20%කට, වෙනස 20%කට සහ අකුරු ප්‍රමාණය 20pt වලට සැකසීම."
          },
          {
            id: "3",
            en: "Type at 20 words per minute for 20 hours followed by 20 minutes rest.",
            si: "විනාඩියකට වචන 20ක වේගයෙන් පැය 20ක් ටයිප් කර මිනිත්තු 20ක් විවේක ගැනීම."
          },
          {
            id: "4",
            en: "Reboot the operating system every 20 hours at a room temperature of 20°C.",
            si: "සෙල්සියස් අංශක 20ක උෂ්ණත්වයකදී සෑම පැය 20කට වරක් පරිගණකය නැවත පණගැන්වීම."
          }
        ],
        correctOptionId: "1",
        explanationEn: "The 20-20-20 ergonomic rule states that every 20 minutes, users should look at a distant object 20 feet away for 20 seconds to allow the ciliary eye muscles to relax.",
        explanationSi: "20-20-20 රීතිය යනු පරිගණක තිරයෙන් ඉවත බලා සෑම මිනිත්තු 20කට වරක්ම අඩි 20ක් ඈතින් ඇති දෙයක් දෙස තත්පර 20ක් බලා සිටීමෙන් ඇසේ පේශි ලිහිල් කිරීමයි."
      }
    },
    {
      id: "g11-u6-st-3",
      number: "6.3",
      titleEn: "Environmental Issues & E-Waste Management",
      titleSi: "පරිසර ගැටලු සහ ඊ-අපද්‍රව්‍ය කළමනාකරණය",
      summaryEn: "Electronic waste (E-Waste), hazardous heavy metals (Lead, Mercury, Cadmium, Arsenic), the 3R concept, and Green Computing best practices.",
      summarySi: "ඉලෙක්ට්‍රොනික අපද්‍රව්‍ය (ඊ-අපද්‍රව්‍ය), විෂ සහිත බර ලෝහ (ඊයම්, රසදිය, කැඩ්මියම්), 3R සංකල්පය සහ හරිත පරිගණකකරණය (Green Computing).",
      blocks: [
        {
          id: "b-g11-u6-3-1",
          en: "* **Electronic Waste (E-Waste - ඊ-අපද්‍රව්‍ය):**\n  * Discarded, broken, obsolete, or end-of-life electrical and electronic equipment (computers, laptops, mobile phones, CRT monitors, printers, circuit boards, batteries).\n  * Dumping e-waste in ordinary landfills releases highly toxic heavy metals into the soil, contaminating groundwater systems and the human food chain.\n* **Hazardous Heavy Metals in E-Waste:**\n  * **Lead - Pb (ලෙඩ් / ඊයම්):** Found in CRT monitor glass funnels and soldering wire; damages the human central nervous system, brain development in children, and kidneys.\n  * **Mercury - Hg (රසදිය):** Found in flat-panel display backlights, sensors, and fluorescent switches; causes brain and neurological damage and accumulates in marine ecosystems.\n  * **Cadmium - Cd (කැඩ්මියම්):** Found in rechargeable Ni-Cd batteries, SMD resistors, and circuit boards; causes kidney failure and bone fragility.\n  * **Arsenic - As (ආසනික්):** Found in semiconductor chips; causes skin lesions and lung damage.\n* **The 3R Concept in E-Waste Management:**\n  * **1. Reduce (අඩු කිරීම):** Minimize electronic waste generation by upgrading components instead of discarding whole PCs, maintaining hardware carefully, and avoiding impulse purchases.\n  * **2. Reuse (නැවත භාවිතය):** Extend hardware lifespan by donating working older computers to rural schools, charities, or younger students rather than discarding them.\n  * **3. Recycle (ප්‍රතිචක්‍රීකරණය):** Hand over obsolete, dead circuit boards and devices to certified e-waste recycling plants to safely extract precious metals (gold, copper, silver) without burning toxic plastics.\n* **Green Computing (හරිත පරිගණකකරණය):**\n  * The environmentally sustainable design, manufacturing, and operation of IT equipment with minimal energy waste and zero carbon footprint.\n  * **Core Green Practices:**\n    * Activating OS Power Management (Sleep / Hibernation modes) during idle periods.\n    * Purchasing Energy Star rated power-efficient computing hardware.\n    * Transitioning to a Paperless Office using digital documents and PDFs.\n    * Using server virtualization and cloud computing to reduce physical server rooms and cooling electricity.",
          si: "* **ඉලෙක්ට්‍රොනික අපද්‍රව්‍ය (E-Waste - ඊ-අපද්‍රව්‍ය):**\n  * භාවිතයෙන් ඉවත් කරන ලද, අබලන් වූ, කල් ඉකුත් වූ හෝ අලුත්වැඩියා කළ නොහැකි විද්‍යුත් සහ ඉලෙක්ට්‍රොනික උපකරණ (පරිගණක, ජංගම දුරකථන, CRT මොනිටර, මුද්‍රණ යන්ත්‍ර, පරිපථ පුවරු, බැටරි).\n  * ඊ-අපද්‍රව්‍ය සාමාන්‍ය කසළ සමග පරිසරයට බැහැර කළ විට ඒවායේ ඇති විෂ රසායන පසට හා භූගත ජලයට එක්වී පරිසරය හා මිනිස් සිරුර විෂ කරයි.\n* **ඊ-අපද්‍රව්‍යවල අඩංගු ප්‍රධාන විෂ සහිත බර ලෝහ:**\n  * **ලෙඩ් / ඊයම් (Lead - Pb):** පැරණි CRT මොනිටරවල සහ පාස්සන ඊයම්වල අඩංගු වේ; මධ්‍යම ස්නායු පද්ධතියට, ළමුන්ගේ මොළයේ වර්ධනයට සහ වකුගඩුවලට හානි පමුණුවයි.\n  * **රසදිය (Mercury - Hg):** පැතලි තිර (Flat panel displays), ස්විච සහ ප්‍රතිදීප්ත බල්බවල අඩංගු වේ; මොළයට හා ස්නායුවලට හානි කරන අතර ජලජ ජීවීන්ට විෂ වේ.\n  * **කැඩ්මියම් (Cadmium - Cd):** නැවත ආරෝපණය කළ හැකි බැටරි සහ පරිපථ පුවරුවල අඩංගු වේ; වකුගඩු හා අස්ථිවලට හානි සිදු කරයි.\n  * **ආසනික් (Arsenic - As):** අර්ධ සන්නායක චිප්වල අඩංගු වේ; සමේ රෝග හා පිළිකා ඇති කරයි.\n* **ඊ-අපද්‍රව්‍ය කළමනාකරණයේ 3R සංකල්පය:**\n  * **1. Reduce (අඩු කිරීම):** නව උපකරණ අනවශ්‍ය ලෙස මිලදී ගැනීම සීමා කිරීම, පවතින උපාංග නිසි ලෙස නඩත්තු කර වැඩි කාලයක් භාවිත කිරීම.\n  * **2. Reuse (නැවත භාවිතය):** භාවිත කළ හැකි තත්ත්වයේ පවතින පැරණි පරිගණක ඉවත නොදමා පාසල්, පුස්තකාල හෝ අවශ්‍යතා ඇති අයට පරිත්‍යාග කිරීම.\n  * **3. Recycle (ප්‍රතිචක්‍රීකරණය):** සම්පූර්ණයෙන්ම අක්‍රිය උපාංග බලයලත් ඊ-අපද්‍රව්‍ය ප්‍රතිචක්‍රීකරණ මධ්‍යස්ථාන වෙත භාර දී ඒවායේ ඇති වටිනා ලෝහ (රන්, තඹ, රිදී) ආරක්ෂිතව වෙන් කර ගැනීම.\n* **හරිත පරිගණකකරණය (Green Computing):**\n  * පරිසරයට සිදුවන හානිය අවම වන පරිදි, බලශක්ති කාර්යක්ෂමතාව උපරිම කරමින් පරිගණක සහ තොරතුරු තාක්ෂණ සම්පත් පරිසර හිතකාමී ලෙස භාවිත කිරීම.\n  * **ප්‍රධාන හරිත පුරුදු:**\n    * භාවිතයේ නොමැති විට පරිගණකවල Sleep mode හෝ Hibernate mode සක්‍රිය කිරීම.\n    * Energy Star සහතිකය ලත් බලශක්ති කාර්යක්ෂම උපාංග භාවිතය.\n    * අනවශ්‍ය මුද්‍රණ නවත්වා කඩදාසි රහිත කාර්යාල (Paperless Office) ක්‍රමය ක්‍රියාත්මක කිරීම.\n    * දත්ත මධ්‍යස්ථානවල විදුලි පරිභෝජනය අඩු කිරීමට Cloud Storage සහ Server Virtualization භාවිතය.",
          highlightTerm: "E-Waste Toxic Metals, 3R Concept & Green Computing"
        }
      ],
      checkpointQuiz: {
        id: "q-g11-u6-3",
        questionEn: "Which toxic heavy metal found in old CRT monitors and electronic soldering materials causes severe damage to the central nervous system?",
        questionSi: "පැරණි CRT මොනිටරවල සහ පාස්සන ද්‍රව්‍යවල අඩංගු, මධ්‍යම ස්නායු පද්ධතියට දරුණු ලෙස හානි පමුණුවන විෂ සහිත බර ලෝහය කුමක්ද?",
        options: [
          {
            id: "1",
            en: "Lead (Pb)",
            si: "ලෙඩ් / ඊයම් (Lead - Pb)"
          },
          {
            id: "2",
            en: "Gold (Au)",
            si: "රන් (Gold - Au)"
          },
          {
            id: "3",
            en: "Silicon (Si)",
            si: "සිලිකන් (Silicon - Si)"
          },
          {
            id: "4",
            en: "Iron (Fe)",
            si: "යකඩ (Iron - Fe)"
          }
        ],
        correctOptionId: "1",
        explanationEn: "Lead (Pb) is a hazardous heavy metal heavily present in CRT glass and traditional solder alloys that damages the nervous system and brain development.",
        explanationSi: "CRT මොනිටරවල සහ පාස්සන ඊයම්වල අඩංගු වන ලෙඩ් (Lead / ඊයම්) මධ්‍යම ස්නායු පද්ධතියට සහ මොළයේ වර්ධනයට හානි කරන විෂ සහිත ලෝහයකි."
      }
    },
    {
      id: "g11-u6-st-4",
      number: "6.4",
      titleEn: "Digital Divide & Future Trends",
      titleSi: "ඩිජිටල් පරතරය සහ අනාගත ප්‍රවණතා",
      summaryEn: "Concept of Digital Divide, socio-economic causes, bridging initiatives in Sri Lanka, and emerging technological trends (AI, IoT, Cloud Computing, Robotics).",
      summarySi: "ඩිජිටල් පරතරය (Digital Divide) සංකල්පය, හේතු, ශ්‍රී ලංකාවේ පිළියම් සහ නැගී එන අනාගත තාක්ෂණික ප්‍රවණතා (AI, IoT, Cloud, Robotics).",
      blocks: [
        {
          id: "b-g11-u6-4-1",
          en: "* **The Digital Divide (ඩිජිටල් පරතරය):**\n  * The socio-economic disparity and gap between individuals, households, socioeconomic classes, or geographic regions that have modern access to ICT (computers, high-speed internet, digital skills) and those who do not.\n  * **Key Causes of the Digital Divide:**\n    * **Geographical Disparity:** Advanced high-speed fiber/4G broadband concentrated in urban commercial cities while rural communities lack coverage.\n    * **Economic Inequality:** High financial cost of modern laptops, smartphones, and monthly broadband subscription rates.\n    * **Digital Illiteracy:** Lack of ICT education, training, and language barriers (scarcity of local-language digital content).\n    * **Age Gap:** Generational divide between digital native youth and older seniors.\n  * **Initiatives to Bridge the Digital Divide in Sri Lanka:**\n    * Establishing rural telecenters (*Nenasala* network) delivering community internet access.\n    * Expanding fiber and 4G/5G mobile connectivity and computer labs to rural schools.\n    * Digitizing public administration services through national e-Government platforms (*e-Revenue, e-Pensions, Online Passports*).\n    * Introducing compulsory ICT education in the national school curriculum.\n* **Emerging Trends in Information Technology:**\n  * **Artificial Intelligence (AI):** Computational systems mimicking human cognitive intelligence to perform tasks such as natural language recognition, computer vision, and predictive machine learning.\n  * **Internet of Things (IoT):** A global interconnected network of physical devices and appliances equipped with sensors, actuators, and IP connectivity to collect and exchange telemetry data autonomously (e.g. smart farming, automated home lighting).\n  * **Cloud Computing:** Delivering computing power, servers, storage databases, and application software on demand over the Internet without maintaining on-premise hardware.\n  * **Robotics:** Programmable electro-mechanical machines automating industrial manufacturing, hazardous mine operations, and robotic surgery.\n  * **Augmented Reality (AR) & Virtual Reality (VR):** Immersive computer-generated simulated environments (VR) and digital information overlays projected onto the real world (AR).",
          si: "* **ඩිජිටල් පරතරය (Digital Divide):**\n  * නවීන තොරතුරු සහ සන්නිවේදන තාක්ෂණ පහසුකම් (පරිගණක, අධිවේගී අන්තර්ජාලය, ඩිජිටල් කුසලතා) භාවිත කිරීමට හැකියාව ඇති සහ එම පහසුකම් නොමැති පුද්ගලයන්, ප්‍රජාවන් හෝ භූගෝලීය කලාප අතර පවතින පරතරයයි.\n  * **ඩිජිටල් පරතරයට බලපාන ප්‍රධාන හේතු:**\n    * **භූගෝලීය විෂමතාව:** නාගරික ප්‍රදේශවලට අධිවේගී අන්තර්ජාල පහසුකම් බහුලව තිබුණද දුරස්ථ ග්‍රාමීය ප්‍රදේශවලට යටිතල පහසුකම් ඌන වීම.\n    * **ආර්ථික අපහසුතා:** පරිගණක උපකරණ සහ මාසික අන්තර්ජාල ගාස්තු දැරීමට ඇති නොහැකියාව.\n    * **ඩිජිටල් සාක්ෂරතාව නොමැතිකම:** පරිගණක දැනුම සහ පුහුණුව මදිකම මෙන්ම ස්වභාෂා අන්තර්ගතයන් සීමිත වීම.\n    * **වයස් පරතරය:** තරුණ පරපුර තාක්ෂණයට පහසුවෙන් හුරුවුවද වැඩිහිටි පරපුර තාක්ෂණය භාවිතයට මැළිකමක් දැක්වීම.\n  * **ශ්‍රී ලංකාවේ ඩිජිටල් පරතරය අවම කිරීමට ගෙන ඇති ක්‍රියාමාර්ග:**\n    * ග්‍රාමීය ප්‍රජාව වෙත අන්තර්ජාලය ගෙන යාමට නැණසල (*Nenasala*) මධ්‍යස්ථාන පිහිටුවීම.\n    * ග්‍රාමීය පාසල් වෙත පරිගණක විද්‍යාගාර සහ අන්තර්ජාල පහසුකම් ලබා දීම.\n    * රජයේ සේවාවන් අන්තර්ජාලය ඔස්සේ ලබා ගැනීමට e-Government සේවා (*e-ආදායම්, e-විශ්‍රාම වැටුප්, මාර්ගගත විභාග ප්‍රතිඵල*) ක්‍රියාත්මක කිරීම.\n    * පාසල් විෂය මාලාවට ICT විෂය ඇතුළත් කිරීම.\n* **නැගී එන අනාගත තාක්ෂණික ප්‍රවණතා:**\n  * **කෘතිම බුද්ධිය (Artificial Intelligence - AI):** මිනිස් බුද්ධිය අනුකරණය කරමින් තීරණ ගැනීම, කථනය හඳුනා ගැනීම සහ ස්වයංක්‍රීය ඉගෙනුම සිදු කරන පරිගණක පද්ධති.\n  * **වස්තු අන්තර්ජාලය (Internet of Things - IoT):** සංවේදක (Sensors) සහ මෘදුකාංග සහිත භෞතික උපකරණ අන්තර්ජාලය හරහා එකිනෙක සම්බන්ධ වී මිනිස් මැදිහත්වීමකින් තොරව දත්ත හුවමාරු කර ගැනීමේ තාක්ෂණය (උදා: ස්මාර්ට් නිවාස, ස්මාර්ට් කෘෂිකර්මය).\n  * **වලාකුළු පරිගණකකරණය (Cloud Computing):** අන්තර්ජාලය හරහා ඉල්ලුම පරිදි දත්ත ගබඩා, සේවාදායක සහ මෘදුකාංග සේවා සැපයීම.\n  * **රොබෝ තාක්ෂණය (Robotics):** කර්මාන්තශාලා, වෛද්‍ය සැත්කම් සහ අනතුරුදායක කාර්යයන් සඳහා භාවිත වන ස්වයංක්‍රීය වැඩසටහන්ගත යන්ත්‍ර.\n  * **AR සහ VR තාක්ෂණය:** පරිගණකයෙන් නිර්මාණය කළ අතථ්‍ය පරිසර (VR) සහ සැබෑ ලෝකය මත ඩිජිටල් තොරතුරු තබන සංවර්ධිත තාක්ෂණය (AR).",
          highlightTerm: "Digital Divide, Bridging Solutions & Emerging ICT Trends"
        }
      ],
      checkpointQuiz: {
        id: "q-g11-u6-4",
        questionEn: "Which of the following government projects in Sri Lanka was specifically implemented to establish telecenters in rural areas to bridge the Digital Divide?",
        questionSi: "ඩිජිටල් පරතරය අවම කිරීම සඳහා ශ්‍රී ලංකාවේ ග්‍රාමීය ප්‍රදේශවල ප්‍රජා තොරතුරු මධ්‍යස්ථාන පිහිටුවීමට ක්‍රියාත්මක කළ රජයේ ව්‍යාපෘතිය කුමක්ද?",
        options: [
          {
            id: "1",
            en: "Nenasala Project",
            si: "නැණසල (Nenasala) ව්‍යාපෘතිය"
          },
          {
            id: "2",
            en: "Sri Lanka CERT Project",
            si: "ශ්‍රී ලංකා CERT ව්‍යාපෘතිය"
          },
          {
            id: "3",
            en: "ASCII Encoding Project",
            si: "ASCII කේතන ව්‍යාපෘතිය"
          },
          {
            id: "4",
            en: "Vectorian Giotto Project",
            si: "Vectorian Giotto ව්‍යාපෘතිය"
          }
        ],
        correctOptionId: "1",
        explanationEn: "The Nenasala (Telecenter) initiative was launched by the Sri Lankan government to provide rural citizens with affordable access to computers, internet, and e-services.",
        explanationSi: "නැණසල (Nenasala) ව්‍යාපෘතිය යනු ග්‍රාමීය ජනතාවට පරිගණක සහ අන්තර්ජාල පහසුකම් ලබා දෙමින් ඩිජිටල් පරතරය අවම කිරීමට ක්‍රියාත්මක කළ ප්‍රධාන රජයේ මුලපිරීමයි."
      }
    }
  ],
  pastPaperQuestions: [
    {
      id: "pp-g11-u6-2020-1",
      year: 2020,
      paperType: "Paper I",
      badgeText: "2020 O/L Paper I - Question 38",
      questionEn: "Which of the following is an example of green computing practice?",
      questionSi: "පහත සඳහන් දෑ අතරින් හරිත පරිගණකකරණ (Green Computing) පුරුද්දක් සඳහා උදාහරණයක් වන්නේ කුමක්ද?",
      type: "mcq",
      options: [
        { id: "1", en: "Printing all emails before reading", si: "සියලු විද්‍යුත් තැපැල් කියවීමට පෙර මුද්‍රණය කිරීම" },
        { id: "2", en: "Leaving computers turned on overnight", si: "රාත්‍රිය පුරා පරිගණක පණගන්වා තබා ගැනීම" },
        { id: "3", en: "Enabling sleep mode on computers when not in use", si: "භාවිතයේ නොමැති විට පරිගණකවල Sleep mode සක්‍රිය කිරීම" },
        { id: "4", en: "Discarding old CRT monitors in regular garbage", si: "පැරණි CRT මොනිටර සාමාන්‍ය කුණු කූඩයට බැහැර කිරීම" }
      ],
      correctOptionId: "3",
      explanationEn: "Enabling sleep mode or power-saving states reduces electrical energy consumption, supporting green computing.",
      explanationSi: "පරිගණක භාවිතයේ නොමැති විට Sleep mode සක්‍රිය කිරීමෙන් විදුලි බලශක්තිය ඉතිරි වන අතර එය හරිත පරිගණකකරණ පුරුද්දකි."
    },
    {
      id: "pp-g11-u6-2020-2",
      year: 2020,
      paperType: "Paper II",
      badgeText: "2020 O/L Paper II - Question 06 (a)",
      questionEn: "6. (a) Briefly explain two health issues caused by prolonged computer use and state one preventive measure for each.",
      questionSi: "6. (a) දීර්ඝකාලීන පරිගණක භාවිතය නිසා ඇතිවන සෞඛ්‍ය ගැටලු දෙකක් කෙටියෙන් පැහැදිලි කර, ඒ එක එකක් සඳහා එක් පිළියමක් බැගින් දක්වන්න.",
      type: "structured",
      sampleAnswerEn: "1. Repetitive Strain Injury (RSI): Muscle, tendon, and nerve strain caused by continuous typing/mouse clicking. Preventive measure: Maintain neutral wrist posture, use ergonomic wrist rests, take frequent breaks.\n\n2. Computer Vision Syndrome (CVS): Eye dryness, fatigue, and headaches caused by staring at screens. Preventive measure: Follow the 20-20-20 rule, adjust screen brightness, keep monitor 18–24 inches away.",
      sampleAnswerSi: "1. පුනරාවර්තී ආයාස ආබාධ (RSI): අඛණ්ඩව යතුරු ලියනය හෝ මවුසය භාවිතය නිසා පේශි සහ ස්නායුවලට සිදුවන ආබාධ. පිළියම: මැණික් කටුව සෘජුව තබා ගැනීම, එර්ගොනොමික් මැණික් කටු ආධාරක භාවිතය සහ නිතර විවේක ගැනීම.\n\n2. පරිගණක දෘශ්‍ය සහලක්ෂණය (CVS): තිර දෙස දිගු වේලාවක් බලා සිටීම නිසා ඇස් වියළීම හා හිසරදය. පිළියම: 20-20-20 රීතිය අනුගමනය කිරීම, මොනිටරය ඇසේ සිට අඟල් 18-24 දුරින් තැබීම.",
      explanationEn: "Official marking criteria for computer-related ergonomic health conditions and preventive strategies.",
      explanationSi: "දීර්ඝකාලීන පරිගණක භාවිතය නිසා ඇතිවන සෞඛ්‍ය ගැටලු සහ පිළියම් සඳහා නිල ලකුණු දීමේ පිළිතුරු."
    },
    {
      id: "pp-g11-u6-2021-3",
      year: 2021,
      paperType: "Paper I",
      badgeText: "2021 O/L Paper I - Question 40",
      questionEn: "Which toxic heavy metal found in old CRT monitors and soldering materials affects the central nervous system?",
      questionSi: "පැරණි CRT මොනිටරවල සහ පාස්සන ද්‍රව්‍යවල අඩංගු, මධ්‍යම ස්නායු පද්ධතියට හානි පමුණුවන විෂ සහිත බර ලෝහය කුමක්ද?",
      type: "mcq",
      options: [
        { id: "1", en: "Cadmium", si: "කැඩ්මියම්" },
        { id: "2", en: "Lead", si: "ලෙඩ් (ඊයම්)" },
        { id: "3", en: "Mercury", si: "රසදිය" },
        { id: "4", en: "Chromium", si: "ක්‍රෝමියම්" }
      ],
      correctOptionId: "2",
      explanationEn: "Lead (Pb) in CRT funnel glass and electronic solder is neurotoxic and damages the human central nervous system.",
      explanationSi: "CRT මොනිටරවල සහ පාස්සන ඊයම්වල ඇති ලෙඩ් (ඊයම්) මධ්‍යම ස්නායු පද්ධතියට හානි කරන විෂ සහිත ලෝහයයි."
    },
    {
      id: "pp-g11-u6-2021-4",
      year: 2021,
      paperType: "Paper II",
      badgeText: "2021 O/L Paper II - Question 06 (c)",
      questionEn: "6. (c) Define the term 'Digital Divide' and state two government initiatives in Sri Lanka to bridge it.",
      questionSi: "6. (c) 'ඩිජිටල් පරතරය' (Digital Divide) යන්න අර්ථ දක්වා, එය අවම කිරීම සඳහා ශ්‍රී ලංකාවේ ක්‍රියාත්මක රජයේ මුලපිරීම් දෙකක් දක්වන්න.",
      type: "structured",
      sampleAnswerEn: "Definition: The socio-economic gap between individuals, households, or regions that have access to modern ICT and those who do not.\n\nGovernment Initiatives in Sri Lanka:\n1. Establishing rural telecenters (Nenasala project).\n2. Extending broadband connectivity and computer laboratories to rural schools.",
      sampleAnswerSi: "අර්ථ දැක්වීම: නවීන තොරතුරු සහ සන්නිවේදන තාක්ෂණ පහසුකම් භාවිත කිරීමට පහසුකම් ඇති සහ නැති පුද්ගලයන් හෝ ප්‍රජාවන් අතර පවතින පරතරය ඩිජිටල් පරතරයයි.\n\nරජයේ මුලපිරීම්:\n1. ග්‍රාමීය නැණසල (Nenasala) මධ්‍යස්ථාන පිහිටුවීම.\n2. ග්‍රාමීය පාසල් සඳහා පරිගණක විද්‍යාගාර සහ බ්‍රෝඩ්බෑන්ඩ් අන්තර්ජාල පහසුකම් ලබා දීම.",
      explanationEn: "Official marking criteria for Digital Divide definition and Sri Lankan government bridging policies.",
      explanationSi: "ඩිජිටල් පරතරය අර්ථ දැක්වීම සහ ශ්‍රී ලංකා රජයේ මුලපිරීම් සඳහා නිල ලකුණු දීමේ පටිපාටිය."
    },
    {
      id: "pp-g11-u6-2022-5",
      year: 2022,
      paperType: "Paper I",
      badgeText: "2022 O/L Paper I - Question 39",
      questionEn: "Unlawfully copying and selling copyrighted software without a license is known as:",
      questionSi: "ප්‍රකාශන අයිතිය සහිත මෘදුකාංගයක් බලපත්‍ර රහිතව නීති විරෝධී ලෙස පිටපත් කර විකිණීම හඳුන්වන්නේ:",
      type: "mcq",
      options: [
        { id: "1", en: "Phishing", si: "ෆිෂින් (Phishing)" },
        { id: "2", en: "Software Piracy", si: "මෘදුකාංග කොල්ලකෑම (Software Piracy)" },
        { id: "3", en: "Plagiarism", si: "ව්‍යාජ උපුටා ගැනීම (Plagiarism)" },
        { id: "4", en: "Hacking", si: "හැකිං (Hacking)" }
      ],
      correctOptionId: "2",
      explanationEn: "Software Piracy is the unauthorized reproduction, distribution, or commercial exploitation of copyrighted software.",
      explanationSi: "ප්‍රකාශන හිමිකම් ඇති මෘදුකාංග අවසරයකින් තොරව නීති විරෝධී ලෙස පිටපත් කිරීම හෝ විකිණීම මෘදුකාංග කොල්ලකෑම (Software Piracy) ලෙස හැඳින්වේ."
    },
    {
      id: "pp-g11-u6-2022-6",
      year: 2022,
      paperType: "Paper II",
      badgeText: "2022 O/L Paper II - Question 06 (b)",
      questionEn: "6. (b) Explain the 3R concept in e-waste management with an example for each 'R'.",
      questionSi: "6. (b) ඊ-අපද්‍රව්‍ය කළමනාකරණයේ එන 3R සංකල්පය, එක් එක් 'R' අකුරට අදාළ උදාහරණයක් බැගින් සහිතව පැහැදිලි කරන්න.",
      type: "structured",
      sampleAnswerEn: "1. Reduce: Minimizing electronic waste by upgrading or repairing existing devices rather than buying unnecessary new hardware.\n2. Reuse: Donating working old computers to rural schools or charities instead of discarding them into trash.\n3. Recycle: Handing over obsolete electronic boards to certified recyclers to extract precious metals (gold, copper) safely.",
      sampleAnswerSi: "1. Reduce (අඩු කිරීම): අනවශ්‍ය ලෙස නව උපකරණ මිලදී ගැනීම සීමා කර පවතින උපාංග අලුත්වැඩියා කර භාවිත කිරීම මගින් ඊ-අපද්‍රව්‍ය අවම කිරීම.\n2. Reuse (නැවත භාවිතය): භාවිත කළ හැකි පැරණි පරිගණක කුණු කූඩයට නොදමා පාසල් හෝ පුස්තකාල සඳහා පරිත්‍යාග කිරීම.\n3. Recycle (ප්‍රතිචක්‍රීකරණය): අක්‍රිය වූ ඉලෙක්ට්‍රොනික පුවරු බලයලත් ප්‍රතිචක්‍රීකරණ ආයතන වෙත භාර දී වටිනා ලෝහ ආරක්ෂිතව වෙන් කර ගැනීම.",
      explanationEn: "Official marking criteria for Reduce, Reuse, and Recycle definitions and real-world examples.",
      explanationSi: "ඊ-අපද්‍රව්‍ය කළමනාකරණයේ 3R සංකල්පය සහ උදාහරණ සඳහා නිල ලකුණු දීමේ පටිපාටිය."
    },
    {
      id: "pp-g11-u6-2023-7",
      year: 2023,
      paperType: "Paper II",
      badgeText: "2023 O/L Paper II - Question 06 (c)",
      questionEn: "6. (c) Match the following ICT issues with their appropriate descriptions:\n(Issues: Phishing, Ergonomics, Plagiarism, Green Computing)\n(i) Using someone else's work without acknowledgment.\n(ii) Designing the workplace environment to fit human body capabilities.\n(iii) Fraudulent attempt to obtain sensitive passwords via fake emails.\n(iv) Eco-friendly use of IT resources to reduce environmental impact.",
      questionSi: "6. (c) පහත දැක්වෙන ICT ගැටලු ඒවායේ නිවැරදි විස්තරය හා ගැලපෙන්න:\n(ගැටලු: ෆිෂින්, එර්ගොනොමික්ස්, ව්‍යාජ උපුටා ගැනීම, හරිත පරිගණකකරණය)\n(i) නිසි උපුටා දැක්වීමකින් තොරව අනෙකෙකුගේ නිර්මාණ භාවිත කිරීම.\n(ii) මිනිස් සිරුරේ පහසුවට ගැළපෙන පරිදි සේවා ස්ථානය සැලසුම් කිරීම.\n(iii) ව්‍යාජ ලිපි මගින් මුරපද ලබා ගැනීමට දරන වංචනික උත්සාහය.\n(iv) පරිසර හානිය අවම වන පරිදි IT සම්පත් භාවිත කිරීම.",
      type: "structured",
      sampleAnswerEn: "(i) Plagiarism\n(ii) Ergonomics\n(iii) Phishing\n(iv) Green Computing",
      sampleAnswerSi: "(i) ව්‍යාජ උපුටා ගැනීම (Plagiarism)\n(ii) එර්ගොනොමික්ස් (Ergonomics)\n(iii) ෆිෂින් (Phishing)\n(iv) හරිත පරිගණකකරණය (Green Computing)",
      explanationEn: "Official matching scheme for Plagiarism, Ergonomics, Phishing, and Green Computing.",
      explanationSi: "ව්‍යාජ උපුටා ගැනීම, එර්ගොනොමික්ස්, ෆිෂින් සහ හරිත පරිගණකකරණය සඳහා නිල ගැලපීම් පිළිතුරු."
    },
    {
      id: "pp-g11-u6-2024-8",
      year: 2024,
      paperType: "Paper I",
      badgeText: "2024 O/L Paper I - Question 40",
      questionEn: "Which of the following software license types provides free access to the source code for modification and redistribution?",
      questionSi: "පහත දැක්වෙන මෘදුකාංග බලපත්‍ර වර්ග අතරින්, වෙනස් කිරීම් සහ නැවත බෙදා හැරීම් සඳහා මූලාශ්‍ර කේතය (Source Code) නොමිලේ ලබා දෙන්නේ කුමක්ද?",
      type: "mcq",
      options: [
        { id: "1", en: "Proprietary Software", si: "හිමිකාර මෘදුකාංග (Proprietary Software)" },
        { id: "2", en: "Freeware", si: "ෆ්‍රීවෙයාර් (Freeware)" },
        { id: "3", en: "Free and Open Source Software (FOSS)", si: "නිදහස් හා විවෘත මූලාශ්‍ර මෘදුකාංග (FOSS)" },
        { id: "4", en: "Shareware", si: "ෂෙයාර්වෙයාර් (Shareware)" }
      ],
      correctOptionId: "3",
      explanationEn: "FOSS licenses guarantee open access to the human-readable source code for studying, editing, and redistributing.",
      explanationSi: "නිදහස් හා විවෘත මූලාශ්‍ර මෘදුකාංග (FOSS) මගින් මූලාශ්‍ර කේතය නොමිලේ ලබා දෙන අතර වෙනස් කිරීමට හා බෙදා හැරීමට නිදහස ලබා දෙයි."
    },
    {
      id: "pp-g11-u6-2025-9",
      year: 2025,
      paperType: "Paper II",
      badgeText: "2025 O/L Paper II - Question 06 (b)",
      questionEn: "6. (b) State the primary organization in Sri Lanka responsible for responding to cyber security incidents and raising public awareness.",
      questionSi: "6. (b) සයිබර් ආරක්ෂණ සිදුවීම් සඳහා ප්‍රතිචාර දැක්වීම සහ මහජනතාව දැනුවත් කිරීම සඳහා ශ්‍රී ලංකාවේ වගකියන ප්‍රධාන ආයතනය කුමක්ද?",
      type: "structured",
      sampleAnswerEn: "Sri Lanka CERT|CC (Computer Emergency Readiness Team | Coordination Centre)",
      sampleAnswerSi: "ශ්‍රී ලංකා CERT|CC (Computer Emergency Readiness Team | Coordination Centre)",
      explanationEn: "Sri Lanka CERT|CC is the national computer emergency response team designated for cyber security coordination and awareness.",
      explanationSi: "සයිබර් ආරක්ෂණ සිදුවීම් සඳහා ප්‍රතිචාර දැක්වීමට සහ මහජන දැනුවත්භාවය ඇති කිරීමට ශ්‍රී ලංකාවේ ඇති ප්‍රධාන ජාතික ආයතනය ශ්‍රී ලංකා CERT|CC වේ."
    }
  ]
};
