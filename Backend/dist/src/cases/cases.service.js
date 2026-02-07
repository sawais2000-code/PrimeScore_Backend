"use strict";
// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import { CaseStatus } from '@prisma/client';
// @Injectable()
// export class CasesService {
//   constructor(private prisma: PrismaService) {}
//   async getAllCases() {
//     return this.prisma.case.findMany({
//       include: {
//         user: true,
//         issues: true,
//         payment: true,
//       },
//     });
//   }
//   async updateStatus(caseId: string, status: CaseStatus) {
//     return this.prisma.case.update({
//       where: { id: caseId },
//       data: { status },
//     });
//   }
// }
//# sourceMappingURL=cases.service.js.map