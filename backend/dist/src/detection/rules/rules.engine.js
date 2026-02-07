"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleEngine = void 0;
const rules_impl_1 = require("./rules.impl");
class RuleEngine {
    static run(accounts) {
        const findings = [];
        for (const acc of accounts) {
            const rules = [
                rules_impl_1.RuleImplementations.writtenOffVsClosed,
                rules_impl_1.RuleImplementations.settledVsActive,
                rules_impl_1.RuleImplementations.closedShowingBalance,
                rules_impl_1.RuleImplementations.wrongDPD,
            ];
            for (const rule of rules) {
                const result = rule(acc);
                if (result)
                    findings.push(result);
            }
        }
        return findings;
    }
}
exports.RuleEngine = RuleEngine;
//# sourceMappingURL=rules.engine.js.map