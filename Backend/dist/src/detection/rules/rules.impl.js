"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleImplementations = void 0;
const rule_types_1 = require("./rule.types");
const keyword_normalizer_1 = require("../normalizer/keyword.normalizer");
class RuleImplementations {
    static writtenOffVsClosed(account) {
        if (keyword_normalizer_1.KeywordNormalizer.normalize(account.status) === 'WRITTEN_OFF' &&
            keyword_normalizer_1.KeywordNormalizer.normalize(account.closureStatus) === 'CLOSED') {
            return {
                ruleId: rule_types_1.RuleId.WRITTEN_OFF_VS_CLOSED,
                conflictFields: ['status', 'closureStatus'],
                explanation: 'Account marked written-off but also closed',
            };
        }
        return null;
    }
    static settledVsActive(account) {
        if (keyword_normalizer_1.KeywordNormalizer.normalize(account.status) === 'SETTLED' &&
            account.isActive === true) {
            return {
                ruleId: rule_types_1.RuleId.SETTLED_VS_ACTIVE,
                conflictFields: ['status', 'isActive'],
                explanation: 'Account settled but still active',
            };
        }
        return null;
    }
    static closedShowingBalance(account) {
        if (keyword_normalizer_1.KeywordNormalizer.normalize(account.status) === 'CLOSED' &&
            account.outstandingAmount > 0) {
            return {
                ruleId: rule_types_1.RuleId.CLOSED_SHOWING_BALANCE,
                conflictFields: ['status', 'outstandingAmount'],
                explanation: 'Closed account still showing balance',
            };
        }
        return null;
    }
    static wrongDPD(account) {
        if (keyword_normalizer_1.KeywordNormalizer.normalize(account.status) === 'CLOSED' &&
            account.dpd > 0) {
            return {
                ruleId: rule_types_1.RuleId.WRONG_DPD,
                conflictFields: ['status', 'dpd'],
                explanation: 'DPD reported for closed account',
            };
        }
        return null;
    }
}
exports.RuleImplementations = RuleImplementations;
//# sourceMappingURL=rules.impl.js.map