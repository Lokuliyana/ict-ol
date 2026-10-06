export interface NICDecodeResult {
  clean: string;
  isOldFormat: boolean;
  birthYear: number;
  gender: string;
  genderSi: string;
  dayOfYear: number;
  birthMonth: string;
  birthMonthSi: string;
  birthDay: number;
  birthDateFormattedEn: string;
  birthDateFormattedSi: string;
  approximateAge: number;
}

const MONTH_DATA = [
  { nameEn: 'January', nameSi: 'ජනවාරි', days: 31 },
  { nameEn: 'February', nameSi: 'පෙබරවාරි', days: 29 }, // SL NIC system standardizes Feb as 29 days
  { nameEn: 'March', nameSi: 'මාර්තු', days: 31 },
  { nameEn: 'April', nameSi: 'අප්‍රේල්', days: 30 },
  { nameEn: 'May', nameSi: 'මැයි', days: 31 },
  { nameEn: 'June', nameSi: 'ජූනි', days: 30 },
  { nameEn: 'July', nameSi: 'ජූලි', days: 31 },
  { nameEn: 'August', nameSi: 'අගෝස්තු', days: 31 },
  { nameEn: 'September', nameSi: 'සැප්තැම්බර්', days: 30 },
  { nameEn: 'October', nameSi: 'ඔක්තෝබර්', days: 31 },
  { nameEn: 'November', nameSi: 'නොවැම්බර්', days: 30 },
  { nameEn: 'December', nameSi: 'දෙසැම්බර්', days: 31 },
];

export function decodeSriLankanNIC(val: string): { result?: NICDecodeResult; error?: string } {
  const clean = val.trim().toUpperCase();
  if (!clean) {
    return { error: 'Please enter a National Identity Card number.' };
  }

  let birthYear = 0;
  let dayOfYear = 0;
  let isOldFormat = false;

  // Old format: 9 digits + letter (V or X)
  if (/^\d{9}[VX]?$/.test(clean)) {
    isOldFormat = true;
    const yrDigits = parseInt(clean.substring(0, 2), 10);
    birthYear = 1900 + yrDigits;
    dayOfYear = parseInt(clean.substring(2, 5), 10);
  } 
  // New format: 12 digits
  else if (/^\d{12}$/.test(clean)) {
    birthYear = parseInt(clean.substring(0, 4), 10);
    dayOfYear = parseInt(clean.substring(4, 7), 10);
  } else {
    return {
      error: 'Please enter a valid 9-digit (e.g. 853410123V) or 12-digit (e.g. 200552301980) NIC number.'
    };
  }

  let gender = 'Male (පුරුෂ)';
  let genderSi = 'පුරුෂ (Male)';
  if (dayOfYear > 500) {
    gender = 'Female (ස්ත්‍රී)';
    genderSi = 'ස්ත්‍රී (Female)';
    dayOfYear -= 500;
  }

  if (dayOfYear < 1 || dayOfYear > 366) {
    return { error: 'Invalid day sequence in NIC digits. Day value out of range (1–366).' };
  }

  // Calculate Month and Day
  let remDays = dayOfYear;
  let birthMonth = '';
  let birthMonthSi = '';
  let birthDay = 0;

  for (const m of MONTH_DATA) {
    if (remDays <= m.days) {
      birthMonth = m.nameEn;
      birthMonthSi = m.nameSi;
      birthDay = remDays;
      break;
    }
    remDays -= m.days;
  }

  const currentYear = new Date().getFullYear();
  const approximateAge = currentYear - birthYear;

  const result: NICDecodeResult = {
    clean,
    isOldFormat,
    birthYear,
    gender,
    genderSi,
    dayOfYear,
    birthMonth,
    birthMonthSi,
    birthDay,
    birthDateFormattedEn: `${birthMonth} ${String(birthDay).padStart(2, '0')}, ${birthYear}`,
    birthDateFormattedSi: `${birthYear} ${birthMonthSi} ${birthDay} වන දින`,
    approximateAge
  };

  return { result };
}
