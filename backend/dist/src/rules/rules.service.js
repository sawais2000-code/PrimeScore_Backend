"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesService = void 0;
const common_1 = require("@nestjs/common");
var ConfidenceLevel;
(function (ConfidenceLevel) {
    ConfidenceLevel[ConfidenceLevel["LOW"] = 1] = "LOW";
    ConfidenceLevel[ConfidenceLevel["MEDIUM"] = 2] = "MEDIUM";
    ConfidenceLevel[ConfidenceLevel["HIGH"] = 3] = "HIGH";
})(ConfidenceLevel || (ConfidenceLevel = {}));
let RulesService = class RulesService {
    run(report) {
        const issues = [];
        for (const loan of report.accounts) {
            // RULE 1: Closed but DPD exists
            if (loan.status === 'CLOSED' && loan.dpd > 0) {
                issues.push(this.issue('CLOSED_ACCOUNT_WITH_DPD', loan.bureau, ConfidenceLevel.HIGH, 'Loan is closed but DPD is reported'));
            }
            // RULE 2: Settled but active
            if (loan.settlement === 'SETTLED' && loan.status === 'ACTIVE') {
                issues.push(this.issue('SETTLED_SHOWING_ACTIVE', loan.bureau, ConfidenceLevel.HIGH, 'Settled account still active'));
            }
        }
        return issues;
    }
    issue(type, bureau, confidence, explanation) {
        return {
            type,
            bureau,
            confidence,
            explanation,
        };
    }
};
exports.RulesService = RulesService;
exports.RulesService = RulesService = __decorate([
    (0, common_1.Injectable)()
], RulesService);
//# sourceMappingURL=rules.service.js.map