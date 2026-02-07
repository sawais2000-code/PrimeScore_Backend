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
exports.ApprovalsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
// import { FetchReportDto } from './dto/fetch-report.dto';
// import { CaseStatus, IssueStatus } from '@prisma/client';
// @Injectable()
// export class ApprovalsService {
//   constructor(private prisma: PrismaService) {}
//   approveQuotation(id: string) {
//     return this.prisma.quotation.update({
//       where: { id },
//       data: { status: 'APPROVED' },
//     });
//   }
//   rejectQuotation(id: string) {
//     return this.prisma.quotation.update({
//       where: { id },
//       data: { status: 'REJECTED' },
//     });
//   }
// }
let ApprovalsService = class ApprovalsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    approveQuotation(id) {
        return this.prisma.quotation.update({
            where: { id },
            data: { status: 'APPROVED' },
        });
    }
    rejectQuotation(id) {
        return this.prisma.quotation.update({
            where: { id },
            data: { status: 'REJECTED' },
        });
    }
};
exports.ApprovalsService = ApprovalsService;
exports.ApprovalsService = ApprovalsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ApprovalsService);
//# sourceMappingURL=approvals.service.js.map