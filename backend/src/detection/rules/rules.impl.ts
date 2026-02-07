import { RuleId, RuleResult } from './rule.types';
import { KeywordNormalizer } from '../normalizer/keyword.normalizer';

export class RuleImplementations {

  static writtenOffVsClosed(account: any): RuleResult | null {
    if (
      KeywordNormalizer.normalize(account.status) === 'WRITTEN_OFF' &&
      KeywordNormalizer.normalize(account.closureStatus) === 'CLOSED'
    ) {
      return {
        ruleId: RuleId.WRITTEN_OFF_VS_CLOSED,
        conflictFields: ['status', 'closureStatus'],
        explanation: 'Account marked written-off but also closed',
      };
    }
    return null;
  }

  static settledVsActive(account: any): RuleResult | null {
    if (
      KeywordNormalizer.normalize(account.status) === 'SETTLED' &&
      account.isActive === true
    ) {
      return {
        ruleId: RuleId.SETTLED_VS_ACTIVE,
        conflictFields: ['status', 'isActive'],
        explanation: 'Account settled but still active',
      };
    }
    return null;
  }

  static closedShowingBalance(account: any): RuleResult | null {
    if (
      KeywordNormalizer.normalize(account.status) === 'CLOSED' &&
      account.outstandingAmount > 0
    ) {
      return {
        ruleId: RuleId.CLOSED_SHOWING_BALANCE,
        conflictFields: ['status', 'outstandingAmount'],
        explanation: 'Closed account still showing balance',
      };
    }
    return null;
  }

  static wrongDPD(account: any): RuleResult | null {
    if (
      KeywordNormalizer.normalize(account.status) === 'CLOSED' &&
      account.dpd > 0
    ) {
      return {
        ruleId: RuleId.WRONG_DPD,
        conflictFields: ['status', 'dpd'],
        explanation: 'DPD reported for closed account',
      };
    }
    return null;
  }
}
