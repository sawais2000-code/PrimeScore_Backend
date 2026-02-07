

// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import { IssueStatus } from '@prisma/client';

// @Injectable()
// export class IssuesService {
//   constructor(private prisma: PrismaService) {}

//   // Assign issue to user
//   async assign(issueId: string, assignedTo: string) {
//     return this.prisma.issue.update({
//       where: { id: issueId },
//       data: { assignedTo },
//     });
//   }

//   // Update status of issue
//   async updateStatus(issueId: string, status: IssueStatus) {
//     return this.prisma.issue.update({
//       where: { id: issueId },
//       data: { status },
//     });
//   }

//   // Escalate issue
//   async escalate(issueId: string) {
//     return this.updateStatus(issueId, IssueStatus.ESCALATED);
//   }

//   // Optional: Get issues per case
//   async getIssuesByCase(caseId: string) {
//     return this.prisma.issue.findMany({ where: { caseId } });
//   }
// }
