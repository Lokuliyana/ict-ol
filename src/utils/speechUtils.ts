/**
 * src/utils/speechUtils.ts
 * Web Speech API helper for crystal-clear technical acronym and vocabulary pronunciation.
 */

const PHONETIC_MAP: Record<string, string> = {
  CPU: 'C P U',
  ALU: 'A L U',
  RAM: 'Ram',
  ROM: 'Rom',
  BIOS: 'Bye-oss',
  ASCII: 'Ass-key',
  Unicode: 'You-nee-code',
  SSD: 'S S D',
  HDD: 'H D D',
  GUI: 'Goo-ey',
  CLI: 'C L I',
  OS: 'O S',
  TCP: 'T C P',
  IP: 'I P',
  DNS: 'D N S',
  HTTP: 'H T T P',
  HTTPS: 'H T T P S',
  URL: 'U R L',
  FTP: 'F T P',
  HTML: 'H T M L',
  CSS: 'C S S',
  SDLC: 'S D L C',
  DBMS: 'D B M S',
  SQL: 'Sequel',
  LAN: 'Lan',
  WAN: 'Wan',
  MAN: 'Man',
  WLAN: 'W Lan',
  IoT: 'I o T',
  NIC: 'N I C',
};

export function speakTechnicalTerm(term: string, lang: 'en' | 'si' = 'en'): boolean {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    return false;
  }

  try {
    window.speechSynthesis.cancel(); // Stop any pending utterance

    const cleanTerm = term.trim();
    const phonetic = PHONETIC_MAP[cleanTerm.toUpperCase()] || cleanTerm;

    const utterance = new SpeechSynthesisUtterance(phonetic);
    utterance.lang = lang === 'si' ? 'si-LK' : 'en-US';
    utterance.rate = 0.9; // Slightly slower, encouraging, clear pedagogical pacing
    utterance.pitch = 1.0;

    window.speechSynthesis.speak(utterance);
    return true;
  } catch {
    return false;
  }
}
