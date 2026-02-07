import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

// @Injectable()
// export class DocumentsService {
//   constructor(private prisma: PrismaService) {}

//   async upload(issueId: string, url: string, role: string) {
//     return this.prisma.document.create({
//       data: {
//         issueId,
//         url,
//         uploadedByRole: role,
//         version: 1,
//       },
//     });
//   }

//   async getDocumentsByIssue(issueId: string) {
//     return this.prisma.document.findMany({
//       where: { issueId },
//       orderBy: { createdAt: 'desc' },
//     });
//   }
// }


@Injectable()
export class DocumentsService {
  constructor(private prisma: PrismaService) {}

  async upload(issueId: string, url: string, role: string) {
    return this.prisma.document.create({
      data: {
        issueId: Number(issueId), // ✅ FIX
        url,
        uploadedByRole: role,
        version: 1,
      },
    });
  }

  async getDocumentsByIssue(issueId: string) {
    return this.prisma.document.findMany({
      where: {
        issueId: Number(issueId), // ✅ FIX
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}
