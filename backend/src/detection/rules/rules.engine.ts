import { RuleImplementations } from './rules.impl';
import { RuleResult } from './rule.types';

export class RuleEngine {
  static run(accounts: any[]): RuleResult[] {
    const findings: RuleResult[] = [];

    for (const acc of accounts) {
      const rules = [
        RuleImplementations.writtenOffVsClosed,
        RuleImplementations.settledVsActive,
        RuleImplementations.closedShowingBalance,
        RuleImplementations.wrongDPD,
      ];

      for (const rule of rules) {
        const result = rule(acc);
        if (result) findings.push(result);
      }
    }
    return findings;
  }
}
