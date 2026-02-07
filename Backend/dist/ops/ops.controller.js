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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpsController = void 0;
const common_1 = require("@nestjs/common");
const ops_service_1 = require("./ops.service");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const roles_guard_1 = require("../common/guards/roles.guard");
const assign_issue_dto_1 = require("./dto/assign-issue.dto");
const change_issue_status_dto_1 = require("./dto/change-issue-status.dto");
const escalate_issue_dto_1 = require("./dto/escalate-issue.dto");
const add_note_dto_1 = require("./dto/add-note.dto");
const bulk_status_dto_1 = require("./dto/bulk-status.dto");
let OpsController = class OpsController {
    constructor(opsService) {
        this.opsService = opsService;
    }
    // 📊 Dashboard
    dashboard() {
        return this.opsService.dashboard();
    }
    // 📥 Issue Queue
    getIssues(status) {
        return this.opsService.getIssues(status);
    }
    // 👤 My Issues
    myIssues(req) {
        return this.opsService.myIssues(req.user.id);
    }
    // 🎯 Assign Issue
    assignIssue(issueId, dto, req) {
        return this.opsService.assignIssue(issueId, dto.assigneeId, req.user.id);
    }
    // 🔄 Change Issue Status
    changeStatus(issueId, dto, req) {
        return this.opsService.changeIssueStatus(issueId, dto.status, req.user.id);
    }
    // 🚨 Escalate Issue
    escalate(issueId, dto, req) {
        return this.opsService.escalateIssue(issueId, dto.reason, req.user.id);
    }
    // 📝 Add Internal Note
    addNote(issueId, dto, req) {
        return this.opsService.addNote(issueId, dto.note, req.user.id);
    }
    // ⚡ Bulk Status Update
    bulkStatus(dto, req) {
        return this.opsService.bulkStatusUpdate(dto.issueIds, dto.status, req.user.id);
    }
};
exports.OpsController = OpsController;
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, roles_decorator_1.Roles)('OPS_MANAGER', 'ADMIN'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpsController.prototype, "dashboard", null);
__decorate([
    (0, common_1.Get)('issues'),
    (0, roles_decorator_1.Roles)('OPS_MANAGER', 'OPS_EXECUTIVE'),
    __param(0, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OpsController.prototype, "getIssues", null);
__decorate([
    (0, common_1.Get)('my-issues'),
    (0, roles_decorator_1.Roles)('OPS_EXECUTIVE'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OpsController.prototype, "myIssues", null);
__decorate([
    (0, common_1.Post)('issues/:id/assign'),
    (0, roles_decorator_1.Roles)('OPS_MANAGER', 'ADMIN'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, assign_issue_dto_1.AssignIssueDto, Object]),
    __metadata("design:returntype", void 0)
], OpsController.prototype, "assignIssue", null);
__decorate([
    (0, common_1.Patch)('issues/:id/status'),
    (0, roles_decorator_1.Roles)('OPS_EXECUTIVE', 'OPS_MANAGER'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_issue_status_dto_1.ChangeIssueStatusDto, Object]),
    __metadata("design:returntype", void 0)
], OpsController.prototype, "changeStatus", null);
__decorate([
    (0, common_1.Post)('issues/:id/escalate'),
    (0, roles_decorator_1.Roles)('OPS_EXECUTIVE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, escalate_issue_dto_1.EscalateIssueDto, Object]),
    __metadata("design:returntype", void 0)
], OpsController.prototype, "escalate", null);
__decorate([
    (0, common_1.Post)('issues/:id/note'),
    (0, roles_decorator_1.Roles)('OPS_EXECUTIVE', 'OPS_MANAGER'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, add_note_dto_1.AddNoteDto, Object]),
    __metadata("design:returntype", void 0)
], OpsController.prototype, "addNote", null);
__decorate([
    (0, common_1.Post)('issues/bulk-status'),
    (0, roles_decorator_1.Roles)('OPS_MANAGER'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bulk_status_dto_1.BulkStatusDto, Object]),
    __metadata("design:returntype", void 0)
], OpsController.prototype, "bulkStatus", null);
exports.OpsController = OpsController = __decorate([
    (0, common_1.Controller)('ops'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [ops_service_1.OpsService])
], OpsController);
//# sourceMappingURL=ops.controller.js.map