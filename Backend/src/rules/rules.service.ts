import { Injectable } from '@nestjs/common';

enum ConfidenceLevel {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

@Injectable()
export class RulesService {

  run(report: any) {
    const issues = [];

    for (const loan of report.accounts) {

      // RULE 1: Closed but DPD exists
      if (loan.status === 'CLOSED' && loan.dpd > 0) {
        issues.push(this.issue(
          'CLOSED_ACCOUNT_WITH_DPD',
          loan.bureau,
          ConfidenceLevel.HIGH,
          'Loan is closed but DPD is reported'
        ));
      }

      // RULE 2: Settled but active
      if (loan.settlement === 'SETTLED' && loan.status === 'ACTIVE') {
        issues.push(this.issue(
          'SETTLED_SHOWING_ACTIVE',
          loan.bureau,
          ConfidenceLevel.HIGH,
          'Settled account still active'
        ));
      }
    }

    return issues;
  }

  private issue(
    type: string,
    bureau: string,
    confidence: number,
    explanation: string
  ) {
    return {
      type,
      bureau,
      confidence,
      explanation,
    };
  }
}
