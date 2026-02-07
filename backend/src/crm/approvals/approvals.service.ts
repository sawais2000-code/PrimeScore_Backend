import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
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

@Injectable()
export class ApprovalsService {
  constructor(private prisma: PrismaService) {}

  approveQuotation(id: number) {
    return this.prisma.quotation.update({
      where: { id },
      data: { status: 'APPROVED' },
    });
  }

  rejectQuotation(id: number) {
    return this.prisma.quotation.update({
      where: { id },
      data: { status: 'REJECTED' },
    });
  }
}

