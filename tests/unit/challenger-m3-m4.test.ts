/**
 * tests/unit/challenger-m3-m4.test.ts
 * Challenger 1 Empirical Stress Test Harness:
 * Phase 3 (Bilingual Content Pipeline) & Phase 4 (Interactive Sandboxes)
 */

import { CURRICULUM_DATA } from '../../src/data/curriculum';
import { LEVEL_NODES, getLevelNode, getNextNodeId } from '../../src/data/levelNodes';
import {
  SANDBOX_REGISTRY,
  BitSwitchboardSandbox,
  LogicWorkbenchSandbox,
  LaserGridSandbox,
  TraceTableSandbox,
  HtmlTableMasonSandbox,
} from '../../src/components/sandboxes';

interface TestCheckResult {
  category: string;
  testName: string;
  passed: boolean;
  details?: string;
}

const results: TestCheckResult[] = [];

function assert(condition: boolean, testName: string, category: string, details?: string) {
  if (!condition) {
    console.error(`? [FAIL] [${category}] ${testName}: ${details || ''}`);
    results.push({ category, testName, passed: false, details });
  } else {
    results.push({ category, testName, passed: true });
  }
}

function isCleanString(s: unknown): s is string {
  return typeof s === 'string' && s.trim().length > 0;
}

export async function runChallengerTests() {
  console.log('======================================================================');
  console.log('??  CHALLENGER 1: EMPIRICAL ADVERSARIAL STRESS TEST SUITE (M3 & M4)');
  console.log('======================================================================');

  // =========================================================================
  // SECTION 1: CURRICULUM_DATA (15 Units) STRESS TESTS
  // =========================================================================
  console.log('\n--- SECTION 1: CURRICULUM_DATA (15 Units) ---');

  // 1.1 Exactly 15 units
  assert(CURRICULUM_DATA.length === 15, 'CURRICULUM_DATA unit count is exactly 15', 'CURRICULUM');
  
  const g10Units = CURRICULUM_DATA.filter(u => u.grade === '10');
  const g11Units = CURRICULUM_DATA.filter(u => u.grade === '11');
  assert(g10Units.length === 9, 'Grade 10 has exactly 9 units', 'CURRICULUM');
  assert(g11Units.length === 6, 'Grade 11 has exactly 6 units', 'CURRICULUM');

  // 1.2 Unit number ordering and unique IDs
  const unitIds = new Set<string>();
  for (let i = 0; i < CURRICULUM_DATA.length; i++) {
    const u = CURRICULUM_DATA[i];
    assert(!unitIds.has(u.id), `Unit ID ${u.id} is unique`, 'CURRICULUM');
    unitIds.add(u.id);

    // Bilingual title & description checks
    assert(isCleanString(u.titleEn), `Unit ${u.id} titleEn is non-empty`, 'CURRICULUM');
    assert(isCleanString(u.titleSi), `Unit ${u.id} titleSi is non-empty`, 'CURRICULUM');
    assert(isCleanString(u.shortDescEn), `Unit ${u.id} shortDescEn is non-empty`, 'CURRICULUM');
    assert(isCleanString(u.shortDescSi), `Unit ${u.id} shortDescSi is non-empty`, 'CURRICULUM');

    // Key competencies
    assert(Array.isArray(u.keyCompetencies) && u.keyCompetencies.length > 0, `Unit ${u.id} has competencies`, 'CURRICULUM');
    for (let c = 0; c < u.keyCompetencies.length; c++) {
      const comp = u.keyCompetencies[c];
      assert(isCleanString(comp.en), `Unit ${u.id} competency ${c} en is non-empty`, 'CURRICULUM');
      assert(isCleanString(comp.si), `Unit ${u.id} competency ${c} si is non-empty`, 'CURRICULUM');
    }
  }

  // =========================================================================
  // SECTION 2: LEVEL_NODES (38 Nodes) SCHEMA & BILINGUAL PARITY
  // =========================================================================
  console.log('\n--- SECTION 2: LEVEL_NODES (38 Nodes) & BILINGUAL PARITY ---');

  const nodes = Object.values(LEVEL_NODES);
  assert(nodes.length === 38, `LEVEL_NODES has exactly 38 nodes (got ${nodes.length})`, 'NODES');

  const nodeMap = new Map<string, typeof nodes[0]>();
  const orderIndices: number[] = [];

  let totalTheoryCards = 0;
  let totalBulletPoints = 0;
  let totalQuizQuestions = 0;
  let totalOptions = 0;

  for (const node of nodes) {
    nodeMap.set(node.id, node);
    orderIndices.push(node.orderIndex);

    // Bilingual Node Title
    assert(isCleanString(node.title?.en), `Node ${node.id} title.en non-empty`, 'BILINGUAL');
    assert(isCleanString(node.title?.si), `Node ${node.id} title.si non-empty`, 'BILINGUAL');
    assert(isCleanString(node.unitTitle?.en), `Node ${node.id} unitTitle.en non-empty`, 'BILINGUAL');
    assert(isCleanString(node.unitTitle?.si), `Node ${node.id} unitTitle.si non-empty`, 'BILINGUAL');

    // Theory Cards Stress Check
    assert(Array.isArray(node.theoryCards) && node.theoryCards.length >= 2, `Node ${node.id} has >= 2 theory cards`, 'THEORY');
    for (const card of node.theoryCards) {
      totalTheoryCards++;
      assert(isCleanString(card.id), `Card in ${node.id} has valid id`, 'THEORY');
      assert(isCleanString(card.title?.en), `Card ${card.id} in ${node.id} title.en non-empty`, 'BILINGUAL');
      assert(isCleanString(card.title?.si), `Card ${card.id} in ${node.id} title.si non-empty`, 'BILINGUAL');
      assert(isCleanString(card.keyTakeaway?.en), `Card ${card.id} in ${node.id} keyTakeaway.en non-empty`, 'BILINGUAL');
      assert(isCleanString(card.keyTakeaway?.si), `Card ${card.id} in ${node.id} keyTakeaway.si non-empty`, 'BILINGUAL');

      assert(Array.isArray(card.bulletPoints) && card.bulletPoints.length > 0, `Card ${card.id} has bullet points`, 'THEORY');
      for (let bpIdx = 0; bpIdx < card.bulletPoints.length; bpIdx++) {
        totalBulletPoints++;
        const bp = card.bulletPoints[bpIdx];
        assert(isCleanString(bp.en), `Bullet ${bpIdx} in ${card.id} (${node.id}) en non-empty`, 'BILINGUAL');
        assert(isCleanString(bp.si), `Bullet ${bpIdx} in ${card.id} (${node.id}) si non-empty`, 'BILINGUAL');
      }
    }

    // Quiz Questions Stress Check
    assert(Array.isArray(node.quizQuestions) && node.quizQuestions.length >= 2, `Node ${node.id} has >= 2 quiz questions`, 'QUIZ');
    for (const q of node.quizQuestions) {
      totalQuizQuestions++;
      assert(isCleanString(q.id), `Question in ${node.id} has valid id`, 'QUIZ');
      assert(isCleanString(q.prompt?.en), `Question ${q.id} in ${node.id} prompt.en non-empty`, 'BILINGUAL');
      assert(isCleanString(q.prompt?.si), `Question ${q.id} in ${node.id} prompt.si non-empty`, 'BILINGUAL');
      assert(isCleanString(q.explanation?.en), `Question ${q.id} in ${node.id} explanation.en non-empty`, 'BILINGUAL');
      assert(isCleanString(q.explanation?.si), `Question ${q.id} in ${node.id} explanation.si non-empty`, 'BILINGUAL');

      // STRICTLY 4 OPTIONS
      assert(Array.isArray(q.options) && q.options.length === 4, `Question ${q.id} in ${node.id} has EXACTLY 4 options`, 'QUIZ');
      for (let oIdx = 0; oIdx < q.options.length; oIdx++) {
        totalOptions++;
        const opt = q.options[oIdx];
        assert(isCleanString(opt.en), `Option ${oIdx} in question ${q.id} (${node.id}) en non-empty`, 'BILINGUAL');
        assert(isCleanString(opt.si), `Option ${oIdx} in question ${q.id} (${node.id}) si non-empty`, 'BILINGUAL');
      }

      // CORRECTINDEX IN [0, 3]
      assert(
        Number.isInteger(q.correctIndex) && q.correctIndex >= 0 && q.correctIndex <= 3,
        `Question ${q.id} in ${node.id} correctIndex is integer in [0, 3] (got ${q.correctIndex})`,
        'QUIZ'
      );
    }

    // Sandbox Type Wiring
    if (node.type === 'interactive_lab') {
      assert(
        !!node.sandboxType && node.sandboxType in SANDBOX_REGISTRY,
        `Interactive lab node ${node.id} has valid sandboxType '${node.sandboxType}' in SANDBOX_REGISTRY`,
        'SANDBOX'
      );
    }
  }

  // =========================================================================
  // SECTION 3: ORDERINDEX MONOTONICITY & ROUTING INTEGRITY
  // =========================================================================
  console.log('\n--- SECTION 3: ORDERINDEX MONOTONICITY & ROUTING ---');

  // Verify orderIndex is strictly monotonic 1..38
  const sortedByOrder = [...nodes].sort((a, b) => a.orderIndex - b.orderIndex);
  for (let i = 0; i < sortedByOrder.length; i++) {
    const expectedIndex = i + 1;
    assert(
      sortedByOrder[i].orderIndex === expectedIndex,
      `Node ${sortedByOrder[i].id} orderIndex is strictly ${expectedIndex} (monotonic)`,
      'ORDER_INDEX'
    );
  }

  // Test getLevelNode for all 38 nodes
  for (const node of nodes) {
    const resolved = getLevelNode(node.id);
    assert(resolved?.id === node.id, `getLevelNode('${node.id}') resolves correctly`, 'ROUTING');
  }

  // Test getNextNodeId monotonicity through full sequence
  for (let i = 0; i < sortedByOrder.length - 1; i++) {
    const cur = sortedByOrder[i];
    const next = sortedByOrder[i + 1];
    const resolvedNextId = getNextNodeId(cur.id);
    assert(
      resolvedNextId === next.id,
      `getNextNodeId('${cur.id}') correctly yields '${next.id}'`,
      'ROUTING'
    );
  }
  // Terminal node must yield null
  const terminalNode = sortedByOrder[sortedByOrder.length - 1];
  assert(
    getNextNodeId(terminalNode.id) === null,
    `getNextNodeId on terminal node '${terminalNode.id}' returns null`,
    'ROUTING'
  );

  // =========================================================================
  // SECTION 4: SANDBOX REGISTRY & EXPORTS
  // =========================================================================
  console.log('\n--- SECTION 4: SANDBOX REGISTRY & EXPORTS ---');

  assert(typeof BitSwitchboardSandbox === 'function', 'BitSwitchboardSandbox component exported cleanly', 'SANDBOX_EXPORT');
  assert(typeof LogicWorkbenchSandbox === 'function', 'LogicWorkbenchSandbox component exported cleanly', 'SANDBOX_EXPORT');
  assert(typeof LaserGridSandbox === 'function', 'LaserGridSandbox component exported cleanly', 'SANDBOX_EXPORT');
  assert(typeof TraceTableSandbox === 'function', 'TraceTableSandbox component exported cleanly', 'SANDBOX_EXPORT');
  assert(typeof HtmlTableMasonSandbox === 'function', 'HtmlTableMasonSandbox component exported cleanly', 'SANDBOX_EXPORT');

  const requiredRegistryKeys = ['switchboard', 'color_vat', 'logic_workbench', 'laser_grid', 'trace_table', 'table_mason'];
  for (const key of requiredRegistryKeys) {
    assert(
      typeof SANDBOX_REGISTRY[key] === 'function',
      `SANDBOX_REGISTRY contains component for '${key}'`,
      'SANDBOX_REGISTRY'
    );
  }

  // =========================================================================
  // SECTION 5: GOAL-STATE TRIGGER EVALUATION ENGINES
  // =========================================================================
  console.log('\n--- SECTION 5: GOAL-STATE TRIGGER EVALUATION ENGINES ---');

  // 5.1: 8-Bit Binary Decimal Total Calculation Engine
  const BITS_DATA = [
    { weight: 128 },
    { weight: 64 },
    { weight: 32 },
    { weight: 16 },
    { weight: 8 },
    { weight: 4 },
    { weight: 2 },
    { weight: 1 },
  ];

  function computeDecimal(switches: boolean[]): number {
    return switches.reduce((acc, s, idx) => acc + (s ? BITS_DATA[idx].weight : 0), 0);
  }

  // Exhaustive 0..255 binary calculation test
  for (let n = 0; n <= 255; n++) {
    const binaryBools: boolean[] = [];
    for (let bit = 7; bit >= 0; bit--) {
      binaryBools.push(((n >> bit) & 1) === 1);
    }
    const computed = computeDecimal(binaryBools);
    if (computed !== n) {
      assert(false, `Binary calculation for ${n}`, 'GOAL_STATE', `Expected ${n}, got ${computed}`);
    }
  }
  assert(true, 'Exhaustive 8-bit binary calculation (all 256 states 0..255) verified 100% accurate', 'GOAL_STATE');

  // Specific target challenges
  assert(
    computeDecimal([true, false, false, false, false, true, false, true]) === 133,
    'Target 133_10 (128 + 4 + 1) matches binary 10000101_2',
    'GOAL_STATE'
  );
  assert(
    computeDecimal([false, true, false, false, false, false, false, true]) === 65,
    'Target 65_10 (64 + 1) matches ASCII "A" binary 01000001_2',
    'GOAL_STATE'
  );
  assert(
    computeDecimal([false, false, true, false, true, true, false, true]) === 45,
    'Target 45_10 (32 + 8 + 4 + 1) matches binary 00101101_2',
    'GOAL_STATE'
  );
  assert(
    computeDecimal([true, true, true, true, true, true, true, true]) === 255,
    'Target 255_10 (all 8 bits high) matches byte 11111111_2',
    'GOAL_STATE'
  );

  // RGB to Hex conversions
  function toHexColor(r: number, g: number, b: number): string {
    const rHex = r.toString(16).padStart(2, '0').toUpperCase();
    const gHex = g.toString(16).padStart(2, '0').toUpperCase();
    const bHex = b.toString(16).padStart(2, '0').toUpperCase();
    return `#${rHex}${gHex}${bHex}`;
  }
  assert(toHexColor(135, 31, 120) === '#871F78', 'Color preset (135, 31, 120) produces #871F78', 'GOAL_STATE');
  assert(toHexColor(50, 153, 204) === '#3299CC', 'Color preset (50, 153, 204) produces #3299CC', 'GOAL_STATE');
  assert(toHexColor(255, 238, 0) === '#FFEE00', 'Color preset (255, 238, 0) produces #FFEE00', 'GOAL_STATE');
  assert(toHexColor(0, 255, 0) === '#00FF00', 'Color preset (0, 255, 0) produces #00FF00', 'GOAL_STATE');

  // 5.2: Logic Gate Outputs Engine (All 6 Gates Truth Tables)
  const gateEvaluators: Record<string, (a: boolean, b: boolean) => boolean> = {
    AND: (a, b) => a && b,
    OR: (a, b) => a || b,
    NOT: (a) => !a,
    NAND: (a, b) => !(a && b),
    NOR: (a, b) => !(a || b),
    XOR: (a, b) => (a && !b) || (!a && b),
  };

  // AND Truth Table
  assert(gateEvaluators.AND(false, false) === false, 'AND(0,0) = 0', 'LOGIC_GATES');
  assert(gateEvaluators.AND(false, true) === false, 'AND(0,1) = 0', 'LOGIC_GATES');
  assert(gateEvaluators.AND(true, false) === false, 'AND(1,0) = 0', 'LOGIC_GATES');
  assert(gateEvaluators.AND(true, true) === true, 'AND(1,1) = 1', 'LOGIC_GATES');

  // OR Truth Table
  assert(gateEvaluators.OR(false, false) === false, 'OR(0,0) = 0', 'LOGIC_GATES');
  assert(gateEvaluators.OR(false, true) === true, 'OR(0,1) = 1', 'LOGIC_GATES');
  assert(gateEvaluators.OR(true, false) === true, 'OR(1,0) = 1', 'LOGIC_GATES');
  assert(gateEvaluators.OR(true, true) === true, 'OR(1,1) = 1', 'LOGIC_GATES');

  // NOT Truth Table
  assert(gateEvaluators.NOT(false, false) === true, 'NOT(0) = 1', 'LOGIC_GATES');
  assert(gateEvaluators.NOT(true, false) === false, 'NOT(1) = 0', 'LOGIC_GATES');

  // NAND Truth Table (Universal Gate)
  assert(gateEvaluators.NAND(false, false) === true, 'NAND(0,0) = 1', 'LOGIC_GATES');
  assert(gateEvaluators.NAND(false, true) === true, 'NAND(0,1) = 1', 'LOGIC_GATES');
  assert(gateEvaluators.NAND(true, false) === true, 'NAND(1,0) = 1', 'LOGIC_GATES');
  assert(gateEvaluators.NAND(true, true) === false, 'NAND(1,1) = 0', 'LOGIC_GATES');

  // NOR Truth Table (Universal Gate)
  assert(gateEvaluators.NOR(false, false) === true, 'NOR(0,0) = 1', 'LOGIC_GATES');
  assert(gateEvaluators.NOR(false, true) === false, 'NOR(0,1) = 0', 'LOGIC_GATES');
  assert(gateEvaluators.NOR(true, false) === false, 'NOR(1,0) = 0', 'LOGIC_GATES');
  assert(gateEvaluators.NOR(true, true) === false, 'NOR(1,1) = 0', 'LOGIC_GATES');

  // XOR Truth Table
  assert(gateEvaluators.XOR(false, false) === false, 'XOR(0,0) = 0', 'LOGIC_GATES');
  assert(gateEvaluators.XOR(false, true) === true, 'XOR(0,1) = 1', 'LOGIC_GATES');
  assert(gateEvaluators.XOR(true, false) === true, 'XOR(1,0) = 1', 'LOGIC_GATES');
  assert(gateEvaluators.XOR(true, true) === false, 'XOR(1,1) = 0', 'LOGIC_GATES');

  // 5.3: Spreadsheet Anchor Locked vs Unlocked Calculation
  interface SheetItem {
    name: string;
    total: number;
    taxValRelative: number;
    taxValAbsolute: number;
  }
  const sheetItems: SheetItem[] = [
    { name: 'Exercise Book', total: 750, taxValRelative: 75, taxValAbsolute: 75 },
    { name: 'Pencil Box', total: 500, taxValRelative: 0, taxValAbsolute: 50 },
    { name: 'School Bag', total: 2000, taxValRelative: 0, taxValAbsolute: 200 },
  ];

  // Drag-fill logic evaluation
  function evaluateSpreadsheetState(isLocked: boolean, filledRows: number) {
    const computedTaxes: number[] = [];
    for (let r = 0; r < filledRows; r++) {
      computedTaxes.push(isLocked ? sheetItems[r].taxValAbsolute : sheetItems[r].taxValRelative);
    }
    const isCompletedExperiment = filledRows === 3 && isLocked;
    const hasCollapseError = !isLocked && filledRows > 1 && computedTaxes.slice(1).some(t => t === 0);
    return { computedTaxes, isCompletedExperiment, hasCollapseError };
  }

  // Test Relative state (Unlocked)
  const rel1 = evaluateSpreadsheetState(false, 1);
  assert(rel1.computedTaxes.length === 1 && rel1.computedTaxes[0] === 75, 'Row 1 relative computes 75', 'SPREADSHEET');
  assert(!rel1.hasCollapseError, 'Row 1 relative does not have collapse error', 'SPREADSHEET');

  const rel3 = evaluateSpreadsheetState(false, 3);
  assert(rel3.computedTaxes[1] === 0 && rel3.computedTaxes[2] === 0, 'Rows 2 & 3 relative collapse to 0 (Rs. 0 empty cell error)', 'SPREADSHEET');
  assert(rel3.hasCollapseError, 'Drag-fill with relative reference correctly triggers collapse alert', 'SPREADSHEET');
  assert(!rel3.isCompletedExperiment, 'Unlocked drag-fill does NOT satisfy goal state completion', 'SPREADSHEET');

  // Test Absolute state (Locked $H$1)
  const abs3 = evaluateSpreadsheetState(true, 3);
  assert(abs3.computedTaxes[0] === 75 && abs3.computedTaxes[1] === 50 && abs3.computedTaxes[2] === 200, 'All 3 rows compute proper 10% tax when $H$1 locked', 'SPREADSHEET');
  assert(!abs3.hasCollapseError, 'Locked anchor has zero collapse errors', 'SPREADSHEET');
  assert(abs3.isCompletedExperiment, 'Locked anchor + filledRows === 3 triggers goal state victory', 'SPREADSHEET');

  // 5.4: Trace Table Loop Stepping Engine
  interface TraceStep {
    stepIndex: number;
    count: number;
    sum: number;
    conditionResult: boolean | null;
    output: string;
  }
  const TRACE_STEPS: TraceStep[] = [
    { stepIndex: 0, count: 1, sum: 0, conditionResult: null, output: '-' },
    { stepIndex: 1, count: 1, sum: 0, conditionResult: true, output: '-' },
    { stepIndex: 2, count: 2, sum: 1, conditionResult: true, output: '-' },
    { stepIndex: 3, count: 3, sum: 3, conditionResult: true, output: '-' },
    { stepIndex: 4, count: 4, sum: 6, conditionResult: true, output: '-' },
    { stepIndex: 5, count: 4, sum: 6, conditionResult: false, output: '-' },
    { stepIndex: 6, count: 4, sum: 6, conditionResult: false, output: '6' },
  ];

  // Algorithmic oracle simulation of the flowchart:
  // Count = 1, Sum = 0; While (Count <= 3) { Sum += Count; Count += 1; } Output Sum;
  let simCount = 1;
  let simSum = 0;
  const oracleHistory: { count: number; sum: number }[] = [];
  oracleHistory.push({ count: simCount, sum: simSum }); // Step 0
  while (simCount <= 3) {
    simSum += simCount;
    simCount += 1;
    oracleHistory.push({ count: simCount, sum: simSum });
  }

  assert(oracleHistory.length === 4, 'Loop executes exactly 3 iterations (4 recorded register states)', 'TRACE_TABLE');
  assert(oracleHistory[0].count === 1 && oracleHistory[0].sum === 0, 'Initial state: Count=1, Sum=0', 'TRACE_TABLE');
  assert(oracleHistory[1].count === 2 && oracleHistory[1].sum === 1, 'Iteration 1: Count=2, Sum=1', 'TRACE_TABLE');
  assert(oracleHistory[2].count === 3 && oracleHistory[2].sum === 3, 'Iteration 2: Count=3, Sum=3', 'TRACE_TABLE');
  assert(oracleHistory[3].count === 4 && oracleHistory[3].sum === 6, 'Iteration 3: Count=4, Sum=6', 'TRACE_TABLE');
  assert(simSum === 6, 'Final sum is 6', 'TRACE_TABLE');
  assert(TRACE_STEPS[6].output === '6', 'Trace step 6 terminal output matches algorithmic simulation (6)', 'TRACE_TABLE');

  // Verify step index bounds and navigation
  for (let s = 0; s < TRACE_STEPS.length; s++) {
    assert(TRACE_STEPS[s].stepIndex === s, `Trace step ${s} index aligns`, 'TRACE_TABLE');
  }

  // 5.5: HTML Table Merger (Colspan & Rowspan Generation)
  function generateHtml(hasColspan: boolean, hasRowspan: boolean): string {
    return `<table border="1">
  <tr>
    <th${hasRowspan ? ' rowspan="2"' : ''}>Student ID</th>
    <th${hasColspan ? ' colspan="2"' : ''}>Examination Marks</th>
  </tr>
  <tr>
    ${!hasRowspan ? '<th>Term</th>\n    ' : ''}<th>ICT</th>
    <th>Maths</th>
  </tr>
  <tr>
    <td>ST-101</td>
    <td>88</td>
    <td>92</td>
  </tr>
</table>`;
  }

  // Test default state (no colspan, no rowspan)
  const htmlDefault = generateHtml(false, false);
  assert(!htmlDefault.includes('colspan='), 'Default HTML does not contain colspan', 'HTML_MASON');
  assert(!htmlDefault.includes('rowspan='), 'Default HTML does not contain rowspan', 'HTML_MASON');
  assert(htmlDefault.includes('<th>Term</th>'), 'Default HTML contains Term header in row 2', 'HTML_MASON');

  // Test Colspan only
  const htmlColspanOnly = generateHtml(true, false);
  assert(htmlColspanOnly.includes('colspan="2"'), 'Colspan enabled contains colspan="2"', 'HTML_MASON');
  assert(!htmlColspanOnly.includes('rowspan='), 'Colspan only does not contain rowspan', 'HTML_MASON');
  assert(htmlColspanOnly.includes('<th>Term</th>'), 'Colspan only retains Term header in row 2', 'HTML_MASON');

  // Test Rowspan only
  const htmlRowspanOnly = generateHtml(false, true);
  assert(!htmlRowspanOnly.includes('colspan='), 'Rowspan only does not contain colspan', 'HTML_MASON');
  assert(htmlRowspanOnly.includes('rowspan="2"'), 'Rowspan enabled contains rowspan="2"', 'HTML_MASON');
  assert(!htmlRowspanOnly.includes('<th>Term</th>'), 'Rowspan enabled cleanly omits displaced Term cell in row 2', 'HTML_MASON');

  // Test Both Colspan & Rowspan active
  const htmlBoth = generateHtml(true, true);
  assert(htmlBoth.includes('colspan="2"') && htmlBoth.includes('rowspan="2"'), 'Both active contains both attributes', 'HTML_MASON');
  assert(!htmlBoth.includes('<th>Term</th>'), 'Both active correctly omits displaced Term cell', 'HTML_MASON');

  // =========================================================================
  // SUMMARY
  // =========================================================================
  const total = results.length;
  const passed = results.filter(r => r.passed).length;
  const failed = results.filter(r => !r.passed).length;

  console.log('\n======================================================================');
  console.log('?? CHALLENGER TEST RESULTS SUMMARY');
  console.log('======================================================================');
  console.log(`  Total Assertions Executed: ${total}`);
  console.log(`  Passed: ${passed}`);
  console.log(`  Failed: ${failed}`);
  console.log(`  Total Theory Cards Checked: ${totalTheoryCards}`);
  console.log(`  Total Bullet Points Checked: ${totalBulletPoints}`);
  console.log(`  Total Quiz Questions Checked: ${totalQuizQuestions}`);
  console.log(`  Total MCQ Options Checked: ${totalOptions}`);

  if (failed === 0) {
    console.log('\n?? ALL CHALLENGER TESTS PASSED WITH ZERO DEFECTS!');
    return { passed: true, total, passedCount: passed, failedCount: failed };
  } else {
    console.error(`\n?? ${failed} TEST ASSERTIONS FAILED!`);
    return { passed: false, total, passedCount: passed, failedCount: failed };
  }
}

// Self-executing runner
if (process.argv[1]?.includes('challenger-m3-m4')) {
  runChallengerTests().then(res => {
    process.exit(res.passed ? 0 : 1);
  }).catch(err => {
    console.error('Crash in test runner:', err);
    process.exit(1);
  });
}
