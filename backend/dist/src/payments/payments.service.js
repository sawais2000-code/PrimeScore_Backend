"use strict";
// import { Injectable, BadRequestException } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import { CaseStatus, PaymentStatus } from '@prisma/client';
// import { v4 as uuidv4 } from 'uuid';
// @Injectable()
// export class PaymentsService {
//   constructor(private prisma: PrismaService) {}
//   async approvePayment(caseId: string, amount: number) {
//     const caseData = await this.prisma.case.findUnique({
//       where: { id: caseId },
//       include: { payment: true },
//     });
//     if (!caseData) {
//       throw new BadRequestException('Case not found');
//     }
//     if (caseData.status !== CaseStatus.APPROVED) {
//       throw new BadRequestException('Case not approved by operations');
//     }
//     if (caseData.payment) {
//       throw new BadRequestException('Payment already exists');
//     }
//     return this.prisma.payment.create({
//       data: {
//         caseId,
//         amount,
//         status: PaymentStatus.SUCCESS,       // ✅ enum-safe
//         gatewayOrder: uuidv4(),              // ✅ required field
//       },
//     });
//   }
//   getPaymentStatus(caseId: string) {
//     return this.prisma.payment.findUnique({
//       where: { caseId },
//     });
//   }
// }
//# sourceMappingURL=payments.service.js.map