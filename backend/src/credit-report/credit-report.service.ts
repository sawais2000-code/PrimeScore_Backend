// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import { FetchReportDto } from './dto/fetch-report.dto';
// import { CaseStatus, IssueStatus } from '@prisma/client';

// @Injectable()
// export class CreditReportService {
//   constructor(private prisma: PrismaService) {}

//   // ⭐ userId number karo
//   async fetchReport(dto: FetchReportDto, userId: number) {
//     const rawData = {
//       bureau: dto.bureau,
//       fetchedAt: new Date(),
//       score: 720,
//     };

//     const pdfUrl = `https://s3.fakebucket.com/${userId}-${dto.bureau}.pdf`;

//     // ✅ CREDIT REPORT
//     const report = await this.prisma.creditReport.create({
//       data: {
//         userId,
//         bureau: dto.bureau,
//         rawData,
//         pdfUrl,
//       },
//     });

//     // ✅ CASE
//     const caseEntity = await this.prisma.case.create({
//       data: {
//         userId,
//         reportId: report.id, // number
//         status: CaseStatus.CREATED,
//       },
//     });

//     // ⭐ pass number
//     await this.detectIssues(caseEntity.id, dto.bureau);

//     return report;
//   }

//   // ⭐ userId number
//   async getHistory(userId: number) {
//     return this.prisma.creditReport.findMany({
//       where: { userId },
//       include: {
//         cases: {
//           include: { issues: true },
//         },
//       },
//     });
//   }

//   // ⭐ reportId number
//   async getPdf(reportId: number) {
//     const report = await this.prisma.creditReport.findUnique({
//       where: { id: reportId },
//     });

//     return { pdfUrl: report?.pdfUrl };
//   }

//   // ⭐ caseId number
//   async detectIssues(caseId: number, bureau: string) {
//     const issues = [
//       {
//         type: 'CLOSED_SHOWING_DPD',
//         explanation: 'Loan closed but DPD present',
//         confidence: 'HIGH',
//       },
//       {
//         type: 'KYC_MISMATCH',
//         explanation: 'Name mismatch found',
//         confidence: 'MEDIUM',
//       },
//     ];

//     return this.prisma.issue.createMany({
//       data: issues.map((i) => ({
//         caseId, // ✅ number now
//         type: i.type,
//         explanation: i.explanation,
//         confidence: i.confidence,
//         bureau,
//         status: IssueStatus.OPEN,
//       })),
//     });
//   }

//   async getDetectedIssues(reportId: number) {
//     return this.prisma.issue.findMany({
//       where: {
//         case: {
//           reportId,
//         },
//       },
//     });
//   }
// }
