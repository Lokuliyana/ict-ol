# Universal Lesson Development Framework & Agent Instructions

This document defines the strict, universal standard operating procedure (SOP) and rules for developing, restructuring, or auditing any lesson across Grade 10 and Grade 11 in this repository.

When prompted with a request like `"Develop Grade X Lesson Y"` or `"Create study content for Grade X Lesson Y"`, the agent must adhere to this framework.

---

## 1. Universal Rules & Constraints

1. **Zero Unjustified Repetition (Deduplication Rule)**:
   - No concept, definition, or example may be taught or repeated redundantly across the study guide.
   - Flashcards and Quiz questions must each address distinct, unique competencies. Do not generate multiple questions that ask the same thing with trivial wording variations.
2. **100% Comprehensive Syllabus Coverage (Zero-Gap Rule)**:
   - Every topic, subtopic, application domain, and terminology specified in the NIE G.C.E. O/L ICT syllabus must be covered.
   - For application domains (e.g., e-Government, e-Commerce, Healthcare, Agriculture, Transport, Education, Industry, Entertainment), include concrete technologies (sensors, telemetry, RFID, GPS, barcode/QR, smart systems) rather than vague generic statements.
3. **Dual-Medium Parity (English & Sinhala)**:
   - 100% parity across English (`en`) and Sinhala (`si`) for all texts: study blocks, flashcard fronts & backs, quiz question stems, multiple-choice options, and detailed answer explanations.
   - Terminology must match official National Institute of Education (NIE) Sri Lanka textbooks.
4. **Cognitive Tiering**:
   - Quizzes must cover three distinct tiers:
     - **Tier 1 (Recall & Vocabulary)**: Definitions, classifications, acronyms.
     - **Tier 2 (Applied Scenarios)**: Real-world situations, domain classification, identifying appropriate technologies.
     - **Tier 3 (O/L Exam Standard)**: Multi-statement questions (`(i)`, `(ii)`, `(iii)` combinations), matching grids, and boss-fight questions.
5. **Single Source of Truth**:
   - Ensure synchronization between `public/lessons/`, `public/quiz_flashcard/`, and `src/data/questionBanks/`.

---

## 2. Universal Phased Workflow

When developing or restructuring any lesson, execute the following 5 phases:

### Phase 1: Syllabus Extraction & Deduplication Audit
- Extract the official competency matrix and subtopic list for the target unit.
- Inspect existing files (`public/lessons/`, `public/quiz_flashcard/`, `src/data/questionBanks/`, `src/data/lessons/`).
- Audit for:
  - **Redundancies**: Content repeated 3+ times.
  - **Gaps**: Missing syllabus areas or shallow one-liner coverage.
- Formulate the clean topic coverage plan before drafting.

### Phase 2: Master Dual-Medium Study Guide Construction
Build a 4-layer master study guide:
- **Layer 1: Core Principles & Definitions**: Clear, technical, dual-medium definitions.
- **Layer 2: Exhaustive Domain & Real-World Sector Breakdown**: In-depth coverage of all models (e.g., G2C, G2B, G2G, G2E, B2B, B2C, C2C, C2B) and industrial sectors (Health, Agriculture, Transport, Education, Business, Manufacturing).
- **Layer 3: Comparison Tables & Visual Diagrams**: Differentiating confusing pairs and illustrating workflows with tables or diagrams.
- **Layer 4: High-Yield Exam Pitfalls & Summary Matrix**: Past paper traps, key terms, and summary matrices.

### Phase 3: Targeted Single-Concept Flashcard Deck
- Apply the **Rule of One**: Exactly 1 flashcard per discrete concept or term.
- Structure:
  - **Front**: Prompt / Scenario (Dual-Medium).
  - **Back**: Key Term + 1-2 sentence explanation + real-world example (Dual-Medium).

### Phase 4: 3-Tiered Cognitive Quiz Architecture
Structure the quiz bank into:
- **Tier 1**: Knowledge & Recall (Fast-paced, definitions, acronyms).
- **Tier 2**: Scenario & Applied Analysis (Real-world situational identification).
- **Tier 3**: Multi-statement O/L Exam Boss questions with detailed rationales for why the correct option is right and why distractors are wrong.

### Phase 5: Verification & Quality Gate
- Check: Deduplication (0 duplicate card/quiz stems), 100% syllabus coverage, 100% dual-medium parity, and structural integrity across JSON/TS data files.
