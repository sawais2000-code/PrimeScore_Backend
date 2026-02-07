"use strict";
// // src/ops/ops.service.ts
// import { Injectable, BadRequestException } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import { AuditService } from '../audit/audit.service';
// import { IssueStatus, AuditAction } from '@prisma/client';
// @Injectable()
// export class OpsService {
//   constructor(
//     private readonly prisma: PrismaService,
//     private readonly audit: AuditService,
//   ) {}
//   // 📊 Dashboard counts
//   async dashboard() {
//     return {
//       openIssues: await this.prisma.issue.count({
//         where: { status: IssueStatus.OPEN },
//       }),
//       inProgress: await this.prisma.issue.count({
//         where: { status: IssueStatus.IN_PROGRESS },
//       }),
//       escalated: await this.prisma.issue.count({
//         where: { status: IssueStatus.ESCALATED },
//       }),
//     };
//   }
//   // 📥 Get all issues (optional status filter)
//   async getIssues(status?: IssueStatus) {
//     return this.prisma.issue.findMany({
//       where: status ? { status } : undefined,
//       orderBy: { createdAt: 'asc' },
//     });
//   }
//   // 👤 Logged-in user's issues
//   async myIssues(userId: string) {
//     return this.prisma.issue.findMany({
//       where: { assignedTo: userId },
//       orderBy: { createdAt: 'asc' },
//     });
//   }
//   // 🎯 Assign issue to OPS
//   async assignIssue(
//     issueId: string,
//     assigneeId: string,
//     managerId: string,
//   ) {
//     const issue = await this.prisma.issue.update({
//       where: { id: issueId },
//       data: {
//         assignedTo: assigneeId,
//         status: IssueStatus.ASSIGNED,
//       },
//     });
//     await this.audit.log(
//       managerId,
//       AuditAction.ASSIGN,
//       'ISSUE',
//       issueId,
//       { assignedTo: assigneeId },
//     );
//     return issue;
//   }
//   // 🔄 Change issue status
//   async changeIssueStatus(
//     issueId: string,
//     status: IssueStatus,
//     userId: string,
//   ) {
//     const issue = await this.prisma.issue.update({
//       where: { id: issueId },
//       data: { status },
//     });
//     await this.audit.log(
//       userId,
//       AuditAction.STATUS_CHANGE,
//       'ISSUE',
//       issueId,
//       { status },
//     );
//     return issue;
//   }
//   // 🚨 Escalate issue
//   async escalateIssue(
//     issueId: string,
//     reason: string,
//     userId: string,
//   ) {
//     const issue = await this.prisma.issue.update({
//       where: { id: issueId },
//       data: { status: IssueStatus.ESCALATED },
//     });
//     await this.audit.log(
//       userId,
//       AuditAction.ESCALATE,
//       'ISSUE',
//       issueId,
//       { reason },
//     );
//     return issue;
//   }
//   // ⚡ Bulk status update
//   async bulkStatusUpdate(
//     issueIds: string[],
//     status: IssueStatus,
//     managerId: string,
//   ) {
//     if (!issueIds || issueIds.length === 0) {
//       throw new BadRequestException('No issues provided');
//     }
//     await this.prisma.issue.updateMany({
//       where: { id: { in: issueIds } },
//       data: { status },
//     });
//     await this.audit.log(
//       managerId,
//       AuditAction.BULK_STATUS,
//       'ISSUE',
//       'MULTIPLE',
//       { issueIds, status },
//     );
//     return {
//       updatedCount: issueIds.length,
//       status,
//     };
//   }
// }
//# sourceMappingURL=ops.service.js.map