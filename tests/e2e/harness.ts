/**
 * Opaque-Box E2E Test Harness
 * Provides assertions, test lifecycle, tier grouping, and reporting.
 */

export interface TestResult {
  suite: string;
  name: string;
  tier: 'Tier 1' | 'Tier 2' | 'Tier 3' | 'Tier 4';
  feature?: string;
  passed: boolean;
  durationMs: number;
  error?: Error | string;
}

export class Expectation<T> {
  constructor(private actual: T) {}

  toBe(expected: T): void {
    if (this.actual !== expected) {
      throw new Error(`Expected ${JSON.stringify(expected)} but got ${JSON.stringify(this.actual)}`);
    }
  }

  toEqual(expected: any): void {
    const actStr = JSON.stringify(this.actual);
    const expStr = JSON.stringify(expected);
    if (actStr !== expStr) {
      throw new Error(`Expected deep equality:\n  Expected: ${expStr}\n  Received: ${actStr}`);
    }
  }

  toBeGreaterThanOrEqual(expected: number): void {
    if (typeof this.actual !== 'number' || this.actual < expected) {
      throw new Error(`Expected ${this.actual} >= ${expected}`);
    }
  }

  toBeLessThanOrEqual(expected: number): void {
    if (typeof this.actual !== 'number' || this.actual > expected) {
      throw new Error(`Expected ${this.actual} <= ${expected}`);
    }
  }

  toBeGreaterThan(expected: number): void {
    if (typeof this.actual !== 'number' || this.actual <= expected) {
      throw new Error(`Expected ${this.actual} > ${expected}`);
    }
  }

  toBeTruthy(): void {
    if (!this.actual) {
      throw new Error(`Expected truthy value, but got ${JSON.stringify(this.actual)}`);
    }
  }

  toBeFalsy(): void {
    if (this.actual) {
      throw new Error(`Expected falsy value, but got ${JSON.stringify(this.actual)}`);
    }
  }

  toBeNull(): void {
    if (this.actual !== null) {
      throw new Error(`Expected null, but got ${JSON.stringify(this.actual)}`);
    }
  }

  toContain(item: any): void {
    if (Array.isArray(this.actual)) {
      if (!this.actual.includes(item)) {
        throw new Error(`Expected array to contain ${JSON.stringify(item)}`);
      }
    } else if (typeof this.actual === 'string') {
      if (!this.actual.includes(String(item))) {
        throw new Error(`Expected string to contain "${item}"`);
      }
    } else {
      throw new Error(`toContain called on non-collection: ${typeof this.actual}`);
    }
  }

  toThrow(expectedErrorPattern?: RegExp | string): void {
    if (typeof this.actual !== 'function') {
      throw new Error('toThrow requires a function');
    }
    let threw = false;
    let thrownError: any = null;
    try {
      (this.actual as any)();
    } catch (err) {
      threw = true;
      thrownError = err;
    }
    if (!threw) {
      throw new Error('Expected function to throw an error, but it did not throw');
    }
    if (expectedErrorPattern) {
      const msg = thrownError?.message || String(thrownError);
      if (typeof expectedErrorPattern === 'string') {
        if (!msg.includes(expectedErrorPattern)) {
          throw new Error(`Expected error message to include "${expectedErrorPattern}", got "${msg}"`);
        }
      } else {
        if (!expectedErrorPattern.test(msg)) {
          throw new Error(`Expected error message to match ${expectedErrorPattern}, got "${msg}"`);
        }
      }
    }
  }
}

export function expect<T>(actual: T): Expectation<T> {
  return new Expectation(actual);
}

export interface TestCaseDef {
  tier: 'Tier 1' | 'Tier 2' | 'Tier 3' | 'Tier 4';
  feature?: string;
  name: string;
  fn: () => void | Promise<void>;
}

export class TestSuiteRunner {
  private tests: TestCaseDef[] = [];
  public results: TestResult[] = [];

  constructor(public suiteName: string) {}

  addTest(tier: 'Tier 1' | 'Tier 2' | 'Tier 3' | 'Tier 4', name: string, fn: () => void | Promise<void>, feature?: string): void {
    this.tests.push({ tier, name, fn, feature });
  }

  async run(): Promise<TestResult[]> {
    console.log(`\n============================================================`);
    console.log(`  SUITE: ${this.suiteName}`);
    console.log(`============================================================`);

    for (const testDef of this.tests) {
      const start = Date.now();
      try {
        await testDef.fn();
        const durationMs = Date.now() - start;
        console.log(`  ✅ [${testDef.tier}] ${testDef.feature ? `[${testDef.feature}] ` : ''}${testDef.name} (${durationMs}ms)`);
        this.results.push({
          suite: this.suiteName,
          name: testDef.name,
          tier: testDef.tier,
          feature: testDef.feature,
          passed: true,
          durationMs,
        });
      } catch (error: any) {
        const durationMs = Date.now() - start;
        console.error(`  ❌ [${testDef.tier}] ${testDef.feature ? `[${testDef.feature}] ` : ''}${testDef.name} (${durationMs}ms)`);
        console.error(`     Error: ${error?.message || error}`);
        this.results.push({
          suite: this.suiteName,
          name: testDef.name,
          tier: testDef.tier,
          feature: testDef.feature,
          passed: false,
          durationMs,
          error,
        });
      }
    }
    return this.results;
  }
}
