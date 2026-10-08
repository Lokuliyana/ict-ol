const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, '../../src/data/lessons');
const files = fs.readdirSync(lessonsDir);

let grandTotal = 0;
let mcqTotal = 0;
let structuredTotal = 0;
const yearCounts = {};
const unitCounts = {};

files.forEach(file => {
  if (!file.endsWith('.ts')) return;
  const content = fs.readFileSync(path.join(lessonsDir, file), 'utf8');
  
  // Find pastPaperQuestions array
  const ppIdx = content.indexOf('"pastPaperQuestions"');
  if (ppIdx === -1) {
    console.log(file + ': no pastPaperQuestions');
    return;
  }
  
  // Extract questions
  const matches = content.slice(ppIdx).match(/"id":\s*"pp-[^"]+"/g) || [];
  const years = content.slice(ppIdx).match(/"year":\s*(\d{4})/g) || [];
  const types = content.slice(ppIdx).match(/"type":\s*"(mcq|structured)"/g) || [];
  
  let mcqCount = 0;
  let structCount = 0;
  types.forEach(t => {
    if (t.includes('mcq')) mcqCount++;
    if (t.includes('structured')) structCount++;
  });
  
  years.forEach(y => {
    const yr = y.match(/\d{4}/)[0];
    yearCounts[yr] = (yearCounts[yr] || 0) + 1;
  });
  
  unitCounts[file] = matches.length;
  grandTotal += matches.length;
  mcqTotal += mcqCount;
  structuredTotal += structCount;
  
  console.log(`${file}: ${matches.length} questions (MCQ: ${mcqCount}, Structured: ${structCount})`);
});

console.log('--- Summary in lessons/*.ts ---');
console.log(`Grand Total: ${grandTotal}`);
console.log(`MCQ Total: ${mcqTotal}, Structured Total: ${structuredTotal}`);
console.log('By Year:', yearCounts);

// Check pastPapersData.ts as well
const ppDataPath = path.join(__dirname, '../../src/data/pastPapersData.ts');
if (fs.existsSync(ppDataPath)) {
  const ppContent = fs.readFileSync(ppDataPath, 'utf8');
  const ppMatches = ppContent.match(/"id":\s*"pp-[^"]+"/g) || [];
  const ppYears = ppContent.match(/year:\s*(\d{4})/g) || [];
  console.log('\n--- pastPapersData.ts ---');
  console.log(`Total questions in pastPapersData.ts: ${ppMatches.length}`);
  const ppYearCounts = {};
  ppYears.forEach(y => {
    const yr = y.match(/\d{4}/)[0];
    ppYearCounts[yr] = (ppYearCounts[yr] || 0) + 1;
  });
  console.log('By Year in pastPapersData.ts:', ppYearCounts);
}
