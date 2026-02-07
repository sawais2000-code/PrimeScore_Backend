"use strict";
// import { Injectable } from "@nestjs/common";
// import { PrismaService } from "../prisma/prisma.service";
// // import { AuditAction } from "@prisma/client";
// @Injectable()
// export class CommunicationsService {
//   constructor(private prisma: PrismaService) {}
//   async sendEmail(issueId: string, subject: string, body: string) {
//     // send email via SES / SMTP
//     return this.prisma.emailLog.create({
//       data: {
//         issueId,
//         subject,
//         body,
//         direction: 'OUTBOUND',
//       },
//     });
//   }
//   async logs(issueId: string) {
//     return this.prisma.emailLog.findMany({ where: { issueId } });
//   }
// }
//# sourceMappingURL=communications.service.js.map