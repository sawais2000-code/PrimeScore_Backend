"use strict";
// // src/app.module.ts
// // =========================
// import { Module } from '@nestjs/common';
// import { AuthModule } from './auth/auth.module';
// import { UsersModule } from './users/users.module';
// import { CreditReportModule } from './credit-report/credit-report.module';
// import { RulesModule } from './rules/rules.module';
// import { CasesModule } from './cases/cases.module';
// import { IssuesModule } from './issues/issues.module';
// import { OpsModule } from './ops/ops.module';
// import { PaymentsModule } from './payments/payments.module';
// import { EmailsModule } from './emails/emails.module';
// import { DocumentsModule } from './documents/documents.module';
// import { AuditModule } from './audit/audit.module';
// import { AdminModule } from './admin/admin.module';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
// @Module({
// imports: [
// AuthModule,
// UsersModule,
// CreditReportModule,
// RulesModule,
// CasesModule,
// IssuesModule,
// OpsModule,
// PaymentsModule,
// EmailsModule,
// DocumentsModule,
// AuditModule,
// AdminModule,
// ],
// })
// export class AppModule {}
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./auth/auth.module");
const ops_module_1 = require("./ops/ops.module");
const users_module_1 = require("./users/users.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            ops_module_1.OpsModule,
            users_module_1.UsersModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map