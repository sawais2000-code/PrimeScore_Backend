"use strict";
// import { Body, Controller, Get, Post } from '@nestjs/common';
// import { AdminService } from './admin.service';
// import { CreateUserDto } from './dto/create-user.dto';
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
exports.AdminController = void 0;
// @Controller('admin')
// export class AdminController {
//   constructor(private admin: AdminService) {}
//   // ✅ create user
//   @Post('employee')
//   create(@Body() dto: CreateUserDto) {
//     return this.admin.createUser(dto);
//   }
//   // ✅ list users
//   @Get('get/employee')
//   list() {
//     return this.admin.listUsers();
//   }
// }
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const auth_guard_1 = require("../auth/auth.guard");
const roles_guard_1 = require("../common/guards/roles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const role_enum_1 = require("../common/enums/role.enum");
let AdminController = class AdminController {
    constructor(adminservice) {
        this.adminservice = adminservice;
    }
    // ✅ ONLY ADMIN + SUPER_ADMIN
    create(dto) {
        return this.adminservice.createUser(dto);
    }
    list() {
        return this.adminservice.listUsers();
    }
    // ✅ ADMIN - ALL LEADS
    getAllLeads() {
        return this.adminservice.getAllLeads();
    }
    // ✅ ADMIN - specific employee leads
    getUserLeads(userId) {
        return this.adminservice.getUserLeads(Number(userId));
    }
    // ✅ ADMIN - leads count
    getLeadStats() {
        return this.adminservice.getLeadStats();
    }
    approve(id) {
        return this.quotationservice.approve(id);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Post)('employee'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.SUPER_ADMIN),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('get/employee'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.SUPER_ADMIN),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('/admin/all'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.SUPER_ADMIN),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getAllLeads", null);
__decorate([
    (0, common_1.Get)('/admin/user/:userId'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.SUPER_ADMIN),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getUserLeads", null);
__decorate([
    (0, common_1.Get)('/admin/stats'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.SUPER_ADMIN),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getLeadStats", null);
__decorate([
    (0, common_1.Patch)('approve/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "approve", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard) // ⭐ BOTH GUARDS
    ,
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map