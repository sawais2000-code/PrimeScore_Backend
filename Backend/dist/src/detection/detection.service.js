"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetectionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const rules_engine_1 = require("./rules/rules.engine");
const ai_service_1 = require("./ai/ai.service");
const client_1 = require("@prisma/client");
let DetectionService = class DetectionService {
    constructor(prisma, ai) {
        this.prisma = prisma;
        this.ai = ai;
    }
    // async run(reportId: string) {
    //   // 1️⃣ Fetch report
    //   const report = await this.prisma.creditReport.findUnique({
    //     where: { id: reportId },
    //   });
    //   if (!report) {
    //     throw new BadRequestException('Credit report not found');
    //   }
    //   // 2️⃣ Extract parsed data safely
    //   const rawData = report.rawData as any;
    //   if (!rawData?.accounts) {
    //     throw new BadRequestException('Invalid credit report structure');
    //   }
    //   const accounts = rawData.accounts;
    //   // 3️⃣ Find or create case
    //   let caseRecord = await this.prisma.case.findFirst({
    //     where: { reportId },
    //   });
    //   if (!caseRecord) {
    //     caseRecord = await this.prisma.case.create({
    //       data: {
    //         userId: report.userId,
    //         reportId: report.id,
    //         status: CaseStatus.UNDER_REVIEW,
    //       },
    //     });
    //   }
    //   // 4️⃣ Run rule engine
    //   const ruleFindings = RuleEngine.run(accounts);
    //   const detections = [];
    //   for (const finding of ruleFindings) {
    //     const aiResult = await this.ai.assist(
    //       finding.ruleId,
    //       accounts,
    //     );
    //     const issue = await this.prisma.issue.create({
    //       data: {
    //         caseId: caseRecord.id,            
    //         type: finding.ruleId,
    //         bureau: report.bureau,
    //         confidence: aiResult.confidence,
    //         explanation: finding.explanation,
    //         status: IssueStatus.OPEN,
    //       },
    //     });
    //     detections.push(issue);
    //   }
    //   return detections;
    // }
    async run(reportId) {
        const report = await this.prisma.creditReport.findUnique({
            where: { id: reportId },
        });
        if (!report) {
            throw new common_1.BadRequestException('Credit report not found');
        }
        const rawData = report.rawData;
        if (!rawData?.accounts) {
            throw new common_1.BadRequestException('Invalid credit report structure');
        }
        const accounts = rawData.accounts;
        let caseRecord = await this.prisma.case.findFirst({
            where: { reportId },
        });
        if (!caseRecord) {
            caseRecord = await this.prisma.case.create({
                data: {
                    userId: report.userId,
                    reportId,
                    status: client_1.CaseStatus.UNDER_REVIEW,
                },
            });
        }
        const ruleFindings = rules_engine_1.RuleEngine.run(accounts);
        const detections = [];
        for (const finding of ruleFindings) {
            const aiResult = await this.ai.assist(finding.ruleId, accounts);
            const issue = await this.prisma.issue.create({
                data: {
                    caseId: caseRecord.id,
                    type: finding.ruleId,
                    bureau: report.bureau,
                    confidence: aiResult.confidence,
                    explanation: finding.explanation,
                    status: client_1.IssueStatus.OPEN,
                },
            });
            detections.push(issue);
        }
        return detections;
    }
};
exports.DetectionService = DetectionService;
exports.DetectionService = DetectionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        ai_service_1.AiService])
], DetectionService);
//# sourceMappingURL=detection.service.js.map