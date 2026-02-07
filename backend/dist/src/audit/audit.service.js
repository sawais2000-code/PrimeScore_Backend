"use strict";
// // src/audit/audit.service.ts
// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import { AuditAction } from '@prisma/client';
// @Injectable()
// export class AuditService {
//   constructor(private readonly prisma: PrismaService) {}
//   // 📝 Create audit log
//   async log(
//     userId: string,
//     action: AuditAction,
//     entity: string,
//     entityId: string,
//     meta: Record<string, any> = {},
//   ) {
//     return this.prisma.auditLog.create({
//       data: {
//         userId,
//         action,
//         entity,
//         entityId,
//         meta,
//       },
//     });
//   }
//   // 🔍 Search / list audit logs
//   async search(params: {
//     userId?: string;
//     action?: AuditAction;
//     entity?: string;
//     fromDate?: Date;
//     toDate?: Date;
//   }) {
//     const { userId, action, entity, fromDate, toDate } = params;
//     return this.prisma.auditLog.findMany({
//       where: {
//         userId,
//         action,
//         entity,
//         createdAt:
//           fromDate || toDate
//             ? {
//                 gte: fromDate,
//                 lte: toDate,
//               }
//             : undefined,
//       },
//       orderBy: { createdAt: 'desc' },
//     });
//   }
// }
//# sourceMappingURL=audit.service.js.map