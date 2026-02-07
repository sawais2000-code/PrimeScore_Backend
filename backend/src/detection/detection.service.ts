import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RuleEngine } from './rules/rules.engine';
import { AiService } from './ai/ai.service';
import { IssueStatus, CaseStatus } from '@prisma/client';

@Injectable()
export class DetectionService {
  constructor(
    private prisma: PrismaService,
    private ai: AiService,
  ) {}

  // async run(reportId: string) {
  //   // 1️⃣ Fetch report
  //   const report = await this.prisma.creditReport.findUnique({
  //     where: { id: reportId },
  //   });

  //   if (!report) {
  //     throw new BadRequestException('Credit report not found');
  //   }

  //   // 2️⃣ Extract parsed data safely
  //   const rawData = report.rawData as any;

  //   if (!rawData?.accounts) {
  //     throw new BadRequestException('Invalid credit report structure');
  //   }

  //   const accounts = rawData.accounts;

  //   // 3️⃣ Find or create case
  //   let caseRecord = await this.prisma.case.findFirst({
  //     where: { reportId },
  //   });

  //   if (!caseRecord) {
  //     caseRecord = await this.prisma.case.create({
  //       data: {
  //         userId: report.userId,
  //         reportId: report.id,
  //         status: CaseStatus.UNDER_REVIEW,
  //       },
  //     });
  //   }

  //   // 4️⃣ Run rule engine
  //   const ruleFindings = RuleEngine.run(accounts);

  //   const detections = [];

  //   for (const finding of ruleFindings) {
  //     const aiResult = await this.ai.assist(
  //       finding.ruleId,
  //       accounts,
  //     );

  //     const issue = await this.prisma.issue.create({
  //       data: {
  //         caseId: caseRecord.id,            
  //         type: finding.ruleId,
  //         bureau: report.bureau,
  //         confidence: aiResult.confidence,
  //         explanation: finding.explanation,
  //         status: IssueStatus.OPEN,
  //       },
  //     });

  //     detections.push(issue);
  //   }

  //   return detections;
  // }

  async run(reportId: number) {
  const report = await this.prisma.creditReport.findUnique({
    where: { id: reportId },
  });

  if (!report) {
    throw new BadRequestException('Credit report not found');
  }

  const rawData = report.rawData as any;

  if (!rawData?.accounts) {
    throw new BadRequestException('Invalid credit report structure');
  }

  const accounts = rawData.accounts;

  let caseRecord = await this.prisma.case.findFirst({
    where: { reportId },
  });

  if (!caseRecord) {
    caseRecord = await this.prisma.case.create({
      data: {
        userId: report.userId,
        reportId,
        status: CaseStatus.UNDER_REVIEW,
      },
    });
  }

  const ruleFindings = RuleEngine.run(accounts);

  const detections = [];

  for (const finding of ruleFindings) {
    const aiResult = await this.ai.assist(finding.ruleId, accounts);

    const issue = await this.prisma.issue.create({
      data: {
        caseId: caseRecord.id,
        type: finding.ruleId,
        bureau: report.bureau,
        confidence: aiResult.confidence,
        explanation: finding.explanation,
        status: IssueStatus.OPEN,
      },
    });

    detections.push(issue);
  }

  return detections;
}

}
