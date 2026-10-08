/**
 * E2E Test Suite Runner CLI Harness
 * Executes all 4 tiers of opaque-box E2E tests:
 *   - Tier 1: Feature Coverage (R1 - R5)
 *   - Tier 2: Boundary & Corner Cases (R1 - R5)
 *   - Tier 3: Cross-Feature Interactions
 *   - Tier 4: Real-World Application Scenarios
 *
 * Usage:
 *   npx tsx scripts/test-e2e.ts
 */

import { tier1Suite } from '../tests/e2e/tier1-feature-coverage.test';
import { tier2Suite } from '../tests/e2e/tier2-boundary-corner.test';
import { tier3Suite } from '../tests/e2e/tier3-cross-feature.test';
import { tier4Suite } from '../tests/e2e/tier4-real-world-scenarios.test';
import { TestResult } from '../tests/e2e/harness';

async function runAllE2ETests() {
  const globalStart = Date.now();
  console.log(`\n======================================================================`);
  console.log(`🚀 RUNNING SRI LANKAN G.C.E. O/L ICT E2E TEST SUITE (TIERS 1 - 4)`);
  console.log(`======================================================================`);

  const suites = [tier1Suite, tier2Suite, tier3Suite, tier4Suite];
  const allResults: TestResult[] = [];

  for (const suite of suites) {
    const results = await suite.run();
    allResults.push(...results);
  }

  const totalPassed = allResults.filter(r => r.passed).length;
  const totalFailed = allResults.filter(r => !r.passed).length;
  const totalDuration = Date.now() - globalStart;

  console.log(`\n======================================================================`);
  console.log(`📊 E2E TEST EXECUTION SUMMARY`);
  console.log(`======================================================================`);

  const tiers = ['Tier 1', 'Tier 2', 'Tier 3', 'Tier 4'] as const;
  for (const tier of tiers) {
    const tierResults = allResults.filter(r => r.tier === tier);
    const passed = tierResults.filter(r => r.passed).length;
    const failed = tierResults.filter(r => !r.passed).length;
    const status = failed === 0 ? '✅ PASS' : '❌ FAIL';
    console.log(`  ${status} [${tier}]: ${passed}/${tierResults.length} passed (${failed} failed)`);
  }

  console.log(`----------------------------------------------------------------------`);
  console.log(`  Total Test Cases: ${allResults.length}`);
  console.log(`  Total Passed:     ${totalPassed}`);
  console.log(`  Total Failed:     ${totalFailed}`);
  console.log(`  Execution Time:   ${totalDuration}ms`);
  console.log(`======================================================================\n`);

  if (totalFailed > 0) {
    console.error(`💥 E2E Test Suite FAILED with ${totalFailed} failure(s).`);
    process.exit(1);
  } else {
    console.log(`🎉 ALL ${totalPassed} E2E TEST CASES PASSED CLEANLY WITH ZERO DEFECTS!`);
    process.exit(0);
  }
}

runAllE2ETests().catch(err => {
  console.error('Fatal unhandled error in E2E runner:', err);
  process.exit(1);
});
