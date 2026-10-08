import { challengerSuite } from '../tests/unit/challenger-flow-route.test';

async function main() {
  const results = await challengerSuite.run();
  const failed = results.filter(r => !r.passed);
  if (failed.length > 0) {
    console.error('CHALLENGER FAILED:', failed.length);
    process.exit(1);
  } else {
    console.log('\n🎉 ALL ' + results.length + ' CHALLENGER TESTS PASSED CLEANLY!');
    process.exit(0);
  }
}

main();