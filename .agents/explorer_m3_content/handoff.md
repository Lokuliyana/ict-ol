# Phase 3 Investigation Handoff Report: Bilingual Content Transformation & Validation Pipeline

**Author**: Explorer M3 (`teamwork_preview_explorer`)  
**Target Recipient**: Orchestrator & Worker M3  
**Working Directory**: `c:\Users\MSI\ict-ol\.agents\explorer_m3_content`  
**Date**: 2026-10-08T02:52:00Z  

---

## 1. Observation

### 1.1 Curriculum Structure & Missing Units
1. **`src/data/curriculum.ts`** (Lines 16–276):
   - Defines `CURRICULUM_DATA: LessonMeta[]`.
   - Length of `CURRICULUM_DATA` is **14** (not the required 15 units).
   - Grade 10 only contains 8 units (`g10-u1` through `g10-u8`):
     - `g10-u1`: Basic Concepts of ICT (Unit 1)
     - `g10-u2`: The Computer System & System Components (Unit 2)
     - `g10-u3`: Data Representation & Logic Gates (Units 3 & 4 combined into one)
     - `g10-u4`: Operating Systems (Misnumbered: should be Unit 05)
     - `g10-u5`: Word Processing (Misnumbered: should be Unit 06)
     - `g10-u6`: Electronic Spreadsheets (Misnumbered: should be Unit 07)
     - `g10-u7`: Electronic Presentations (Misnumbered: should be Unit 08)
     - `g10-u8`: Database Management (Misnumbered: should be Unit 09)
     - `g10-u9`: **Completely missing from `CURRICULUM_DATA`**.
   - Grade 11 contains 6 units (`g11-u1` through `g11-u6`):
     - `g11-u1`: Programming, Algorithms & Problem Solving
     - `g11-u2`: System Development Life Cycle (SDLC)
     - `g11-u3`: The Internet and Electronic Mail
     - `g11-u4`: Use of Multimedia Technologies
     - `g11-u5`: Web Designing using HTML & CSS
     - `g11-u6`: ICT and Society, Ethics & Legal Issues

2. **`src/data/levelNodes.ts`** (Lines 9–1610):
   - Defines `LEVEL_NODES: Record<string, LevelNode>`.
   - Contains exactly **22 nodes** total:
     - Grade 10 (14 nodes):
       - `g10-u1`: `g10-u1-s1`, `g10-u1-s2`, `g10-u1-s3`, `g10-u1-boss` (4 nodes)
       - `g10-u2`: `g10-u2-s1`, `g10-u2-s2`, `g10-u2-boss` (3 nodes)
       - `g10-u3`: `g10-u3-s1` (Switchboard), `g10-u3-s2` (Logic Breadboard), `g10-u3-boss` (3 nodes)
       - `g10-u4`: `g10-u4-s1` (OS - 1 node)
       - `g10-u5`: `g10-u5-s1` (Word Processing - 1 node)
       - `g10-u6`: `g10-u6-s1` (Spreadsheet - 1 node)
       - `g10-u7`: **Missing! 0 nodes**.
       - `g10-u8`: `g10-u8-s1` (Database - 1 node)
       - `g10-u9`: **Missing! 0 nodes**.
     - Grade 11 (8 nodes):
       - `g11-u1`: `g11-u1-s1` (Trace Table), `g11-u1-s2`, `g11-u1-boss` (3 nodes)
       - `g11-u2`: `g11-u2-s1`, `g11-u2-s2` (2 nodes)
       - `g11-u3`: `g11-u3-s1` (1 node)
       - `g11-u4`: `g11-u4-s1` (HTML Table Mason), `g11-u4-boss` (2 nodes - misattributed to Unit 04 instead of Unit 05; Multimedia Technologies omitted!)
       - `g11-u5`: **Missing! 0 nodes**.
       - `g11-u6`: **Missing! 0 nodes**.

3. **`public/quiz_flashcard/` and `public/lessons/` (Raw Curriculum Goldmine)**:
   - There are 14 files in `public/quiz_flashcard/` containing **over 840 fully translated bilingual questions and flashcards** (each file from Lesson 02 to Grade 11 Lesson 06 contains 60+ items; Lesson 01 contains 62 items):
     - `grade10-lesson01-flashcard-quiz-bank.md`: 62 items (Unit 01)
     - `grade10-lesson02-flashcard-quiz-bank.md`: 60 items (Unit 02)
     - `grade10-lesson03-flashcard-quiz-bank.md`: 60 items (Unit 03: Data Representation)
     - `grade10-lesson04-flashcard-quiz-bank.md`: 60 items (Unit 04: Logic Gates & Boolean Logic)
     - `grade10-lesson05-flashcard-quiz-bank.md`: 60 items (Unit 05: Operating Systems)
     - `grade10-lesson06-flashcard-quiz-bank.md`: 60 items (Unit 06: Word Processing)
     - `grade10-lesson07-flashcard-quiz-bank.md`: 60 items (Unit 07: Electronic Spreadsheets)
     - `grade10-lesson08-flashcard-quiz-bank.md`: 60 items containing **both** PART A: Electronic Presentations (line 10) and PART B: Database Management (line 312)
     - `grade11-lesson01-flashcard-quiz-bank.md`: 60 items (Unit 01: Programming & Algorithms)
     - `grade11-lesson02-flashcard-quiz-bank.md`: 60 items (Unit 02: SDLC)
     - `grade11-lesson03-flashcard-quiz-bank.md`: 60 items (Unit 03: Internet & Email)
     - `grade11-lesson04-flashcard-quiz-bank.md`: 60 items (Unit 04: Multimedia Technologies)
     - `grade11-lesson05-flashcard-quiz-bank.md`: 60 items (Unit 05: Web Designing with HTML & CSS)
     - `grade11-lesson06-flashcard-quiz-bank.md`: 60 items (Unit 06: ICT & Society)
   - In `public/lessons/`, separate study guide files exist for:
     - `grade10-lesson08-presentation-study-guide.md` (Electronic Presentations)
     - `grade10-lesson08-study-guide.md` (Database Management)

4. **`src/data/lessons/` & `src/data/allLessonsData.ts`**:
   - Contains 13 lesson files + `lesson01Data.ts`.
   - Adheres to legacy `GeneralLessonData` schema (not `LevelNode`), which generated the old 14-unit structure where G10 U03 and U04 were combined into `g10u3.ts`.

---

### 1.2 Bilingual Parity Audit
1. In `src/data/levelNodes.ts`:
   - Empirical audit script executed on all 22 existing nodes:
     - `missingTitleEn`: 0, `missingTitleSi`: 0
     - `missingUnitTitleEn`: 0, `missingUnitTitleSi`: 0
     - Total TheoryCards: 24. `missingCardTitleEn`: 0, `missingCardTitleSi`: 0, `missingTakeawayEn`: 0, `missingTakeawaySi`: 0, `missingBulletEn`: 0, `missingBulletSi`: 0
     - Total QuizQuestions: 24. `missingPromptEn`: 0, `missingPromptSi`: 0, `missingExplEn`: 0, `missingExplSi`: 0, `missingOptionEn`: 0, `missingOptionSi`: 0
     - `invalidOptionsCount` (not exactly 4): 0
     - `invalidCorrectIndex` (not 0..3): 0
     - Untranslated placeholder stubs / regex matches for `TODO|TBD|stub`: 0
   - **Conclusion on parity**: Existing 22 nodes have 100% genuine bilingual parity. However, the syllabus is missing ~15-20 nodes needed to represent the remaining units (Presentations, Databases as U09, Multimedia, Web Design as U05, ICT & Society).

---

### 1.3 Compilation & Validation Scripts
1. **`scripts/compile-content.ts`**:
   - **Does NOT exist** in the repository.
2. **`package.json`**:
   - Lines 5–12:
     ```json
     "scripts": {
       "dev": "next dev -p 3005",
       "build": "next build",
       "start": "next start",
       "lint": "next lint",
       "test": "npx tsx scripts/verify-content.mjs",
       "test:e2e": "npx tsx scripts/test-e2e.ts"
     }
     ```
   - **`npm run validate:content` is NOT in `package.json`**.
3. **`scripts/verify-content.mjs`**:
   - Lines 23–27:
     ```javascript
     assert(CURRICULUM_DATA.length === 14, `Curriculum has exactly 14 units (found ${CURRICULUM_DATA.length})`);
     const g10Lessons = CURRICULUM_DATA.filter(l => l.grade === '10');
     const g11Lessons = CURRICULUM_DATA.filter(l => l.grade === '11');
     assert(g10Lessons.length === 8, `Grade 10 has exactly 8 units`);
     assert(g11Lessons.length === 6, `Grade 11 has exactly 6 units`);
     ```
   - Verifies legacy 14 units, legacy `ALL_LESSONS_DATA`, and NIC decoder.
   - Does **not** validate `LevelNode`, `TheoryCard`, or `QuizQuestion` schemas.
   - Does **not** validate `correctIndex` range (0–3), exactly 4 options, or the 15 units requirement.

---

### 1.4 Connection with Schemas and Application UI
1. **`src/types/curriculum.ts`**:
   - Strict TypeScript definitions: `BilingualText`, `VisualWidgetType`, `TheoryCard`, `QuizQuestion`, `LevelNode`.
2. **Consumers**:
   - `src/app/study/[nodeId]/page.tsx` calls `getLevelNode(nodeId)` and passes `node` to `StoryFlashcardRunner`.
   - `src/app/quiz/[nodeId]/page.tsx` calls `getLevelNode(nodeId)` and passes `node` to `BlindQuizRunner`.
   - `src/components/completion/CompletionDrawer.tsx` calls `getNextNodeId(nodeId)`.
   - `src/components/map/QuestMap.tsx` currently hardcodes 22 quests matching the 22 nodes in `levelNodes.ts`.

---

## 2. Logic Chain

1. **Premise 1**: `ORIGINAL_REQUEST.md` (§R3, §Acceptance Criteria) and `PROJECT.md` (§Architecture, §Feature Inventory #9, #10, #11, #12) explicitly specify:
   - Grade 10 (Units 01–09) and Grade 11 (Units 01–06), totaling **15 discrete units**.
   - Strict JSON/TypeScript models conforming to `LevelNode`, `TheoryCard`, and `QuizQuestion`.
   - 100% bilingual parity across all units.
   - A validation script (`scripts/compile-content.ts` / `npm run validate:content`) enforcing 15 units, schema integrity, exactly 4 options, and `correctIndex` in range 0–3.
2. **Observation Step**:
   - `src/data/curriculum.ts` registers only 14 units because Grade 10 Units 03 (Data Representation) and 04 (Logic Gates) were historically merged into `g10-u3`, causing all subsequent units to shift by 1 and omitting Unit 09.
   - `src/data/levelNodes.ts` only provides 22 nodes, leaving G10 U07 (Presentations), G10 U09 (Databases), G11 U05 (Web Designing), and G11 U06 (ICT & Society) without nodes, and mislabeling G11 U04 as Web Development instead of Multimedia Technologies.
   - `public/quiz_flashcard/` contains all 15 syllabus units in 14 markdown files with 780+ high-quality dual-medium questions and explanations.
   - Neither `scripts/compile-content.ts` nor `"validate:content"` in `package.json` currently exists.
   - `scripts/verify-content.mjs` actively asserts the obsolete 14-unit count.
3. **Deduction**:
   - To achieve Milestone 3 compliance, the project needs:
     1. Decoupling G10 U03 (Data Representation) and G10 U04 (Logic Gates).
     2. Aligning G10 units: U01 (Basic Concepts), U02 (Computer Systems), U03 (Data Representation), U04 (Logic Gates), U05 (OS), U06 (Word Processing), U07 (Spreadsheets), U08 (Presentations), U09 (Databases).
     3. Aligning G11 units: U01 (Programming), U02 (SDLC), U03 (Internet & Email), U04 (Multimedia), U05 (Web Designing), U06 (ICT & Society).
     4. Populating `LEVEL_NODES` with nodes for all 15 units from the raw markdown banks.
     5. Implementing `scripts/compile-content.ts` (with `--validate` mode) and adding `npm run validate:content` to `package.json`.
     6. Updating `scripts/verify-content.mjs` to reflect the 15 units.

---

## 3. Caveats

1. **Existing E2E Tests Compatibility**:
   - In `tests/e2e/tier1-feature-coverage.test.ts` (line 315), the test asserts `CURRICULUM_DATA.length >= 14`, `g10.length >= 8`, and `g11.length === 6`. Expanding `CURRICULUM_DATA` to 15 units (9 in G10, 6 in G11) satisfies and preserves these existing tests.
2. **QuestMap Synchronization**:
   - `QuestMap.tsx` has internal `GRADE_10_QUESTS` and `GRADE_11_QUESTS` arrays with 22 items. Expanding `LEVEL_NODES` requires ensuring `QuestMap.tsx` or `LevelDrawer.tsx` properly reflects all 15 units and their nodes.
3. **No Code Written**:
   - As an Explorer agent, zero project source files have been edited during this investigation. All changes must be executed by Worker M3.

---

## 4. Conclusion

1. **Current Schema & Parity Quality**: The data model in `src/types/curriculum.ts` is robust, clean, and perfectly suited for the application. The existing 22 nodes in `src/data/levelNodes.ts` exhibit 100% genuine bilingual parity with 0 stubs.
2. **Current Deficits**:
   - 14 units registered instead of 15 units (G10 U03 & U04 merged, G10 U09 missing).
   - Incomplete node coverage in `LEVEL_NODES` (missing G10 U07, G10 U09, G11 U05, G11 U06).
   - `scripts/compile-content.ts` is missing.
   - `"validate:content"` script is missing from `package.json`.
   - `scripts/verify-content.mjs` enforces the wrong 14-unit count and older schemas.
3. **Content Availability**: All source material needed to build the 15 units with 100% bilingual parity already exists inside `public/quiz_flashcard/` and `public/lessons/`.

---

## 5. Verification Method

To verify these findings:
1. Verify unit count in `src/data/curriculum.ts`:
   ```bash
   node -e "const fs = require('fs'); const content = fs.readFileSync('src/data/curriculum.ts', 'utf-8'); const ids = [...content.matchAll(/id:\s*'([^']+)'/g)].map(m => m[1]); console.log('Count:', ids.length, ids);"
   ```
   *Expected: Count: 14*
2. Verify node count in `src/data/levelNodes.ts`:
   ```bash
   node -e "const fs = require('fs'); const content = fs.readFileSync('src/data/levelNodes.ts', 'utf-8'); const nodes = [...content.matchAll(/^\s*'([g10|g11][^']+)':\s*\{/gm)].map(m => m[1]); console.log('Nodes count:', nodes.length);"
   ```
   *Expected: Nodes count: 22*
3. Verify absence of `scripts/compile-content.ts` and `validate:content`:
   ```bash
   dir scripts/compile-content.ts
   npm run validate:content
   ```
   *Expected: File not found, missing npm script.*

---

## 6. Actionable Implementation Recommendations for Worker M3

1. **Step 1: Restructure `src/data/curriculum.ts` to 15 Units**:
   - Split `g10-u3` into:
     - `g10-u3`: Unit 3: Data Representation in Computer Systems (`titleEn: 'Data Representation in Computer Systems'`, `titleSi: 'පරිගණක පද්ධති තුළ දත්ත නිරූපණය'`)
     - `g10-u4`: Unit 4: Fundamental Logic Gates & Boolean Logic (`titleEn: 'Fundamental Logic Gates & Boolean Logic'`, `titleSi: 'ලොජික් ද්වාර හා බූලියානු තර්කනය'`)
   - Re-index remaining G10 units:
     - `g10-u5`: Unit 5: Operating Systems
     - `g10-u6`: Unit 6: Word Processing
     - `g10-u7`: Unit 7: Electronic Spreadsheets
     - `g10-u8`: Unit 8: Electronic Presentations
     - `g10-u9`: Unit 9: Database Management (`titleEn: 'Database Management'`, `titleSi: 'දත්ත සමුදා කළමනාකරණය'`)
   - Verify Grade 11 units:
     - `g11-u1`: Programming, Algorithms & Problem Solving
     - `g11-u2`: System Development Life Cycle (SDLC)
     - `g11-u3`: The Internet and Electronic Mail
     - `g11-u4`: Use of Multimedia Technologies
     - `g11-u5`: Web Designing using HTML & CSS
     - `g11-u6`: ICT and Society, Ethics & Legal Issues

2. **Step 2: Expand `src/data/levelNodes.ts` to Cover All 15 Units**:
   - Ensure every unit from G10 U01–U09 and G11 U01–U06 has structured concept, lab, and/or boss nodes adhering to `LevelNode`:
     - Maintain sandbox links:
       - `g10-u3`: `sandboxType: 'switchboard'` and `'color_vat'`
       - `g10-u4`: `sandboxType: 'logic_workbench'`
       - `g10-u7`: `sandboxType: 'laser_grid'`
       - `g11-u1`: `sandboxType: 'trace_table'`
       - `g11-u5`: `sandboxType: 'table_mason'`
     - Ensure strictly 4 options per quiz question and `correctIndex` in [0, 3].
     - Populate from the 780+ questions in `public/quiz_flashcard/`.

3. **Step 3: Create `scripts/compile-content.ts`**:
   - Implement script validating:
     - Exactly 15 units across G10 (9) and G11 (6).
     - Full bilingual parity (`en` and `si` present and non-empty) across all fields.
     - `correctIndex` strictly in range [0, 3] and integer.
     - Exactly 4 options per MCQ.
     - Sandbox types correctly assigned.
     - Monotonically increasing `orderIndex`.

4. **Step 4: Update `package.json`**:
   - Add script: `"validate:content": "npx tsx scripts/compile-content.ts --validate"`

5. **Step 5: Update `scripts/verify-content.mjs`**:
   - Update line 23 to assert `15` units (`g10Lessons.length === 9`, `g11Lessons.length === 6`).
   - Run `npm test` and `npm run test:e2e` to verify zero regression.
