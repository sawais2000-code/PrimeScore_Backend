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
exports.OpsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
let OpsService = class OpsService {
    constructor(prisma, audit) {
        this.prisma = prisma;
        this.audit = audit;
    }
    // 📊 Dashboard
    async dashboard() {
        return {
            openIssues: await this.prisma.issue.count({ where: { status: 'OPEN' } }),
            inProgress: await this.prisma.issue.count({
                where: { status: 'IN_PROGRESS' },
            }),
            escalated: await this.prisma.issue.count({
                where: { status: 'ESCALATED' },
            }),
        };
    }
    // 📥 Issue Queue
    async getIssues(status) {
        return this.prisma.issue.findMany({
            where: status ? { status } : {},
            orderBy: { createdAt: 'asc' },
        });
    }
    // 👤 My Issues
    async myIssues(userId) {
        return this.prisma.issue.findMany({
            where: { assignedTo: userId },
        });
    }
    // 🎯 Assign Issue
    async assignIssue(issueId, assigneeId, managerId) {
        const issue = await this.prisma.issue.update({
            where: { id: issueId },
            data: {
                assignedTo: assigneeId,
                status: 'ASSIGNED',
            },
        });
        await this.audit.log(managerId, 'ASSIGN', 'ISSUE', issueId, { assignedTo: assigneeId });
        return issue;
    }
    // 🔄 Change Status
    async changeIssueStatus(issueId, status, userId) {
        const issue = await this.prisma.issue.update({
            where: { id: issueId },
            data: { status },
        });
        await this.audit.log(userId, 'STATUS_CHANGE', 'ISSUE', issueId, { status });
        return issue;
    }
    // 🚨 Escalate
    async escalateIssue(issueId, reason, userId) {
        const issue = await this.prisma.issue.update({
            where: { id: issueId },
            data: { status: 'ESCALATED' },
        });
        await this.audit.log(userId, 'ESCALATE', 'ISSUE', issueId, { reason });
        return issue;
    }
    // 📝 Add Note
    async addNote(issueId, note, userId) {
        await this.audit.log(userId, 'NOTE', 'ISSUE', issueId, { note });
        return { success: true };
    }
    // ⚡ Bulk Status
    async bulkStatusUpdate(issueIds, status, managerId) {
        if (!issueIds.length) {
            throw new common_1.BadRequestException('No issues provided');
        }
        await this.prisma.issue.updateMany({
            where: { id: { in: issueIds } },
            data: { status },
        });
        await this.audit.log(managerId, 'BULK_STATUS', 'ISSUE', 'MULTIPLE', { issueIds, status });
        return { updated: issueIds.length };
    }
};
exports.OpsService = OpsService;
exports.OpsService = OpsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService])
], OpsService);
//# sourceMappingURL=ops.service.js.map