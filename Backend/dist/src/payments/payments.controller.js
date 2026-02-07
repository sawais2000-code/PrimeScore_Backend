"use strict";
// import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
// import { PaymentsService } from './payments.service';
// import { AuthGuard } from '../auth/auth.guard';
// @Controller('payments')
// @UseGuards(AuthGuard)
// export class PaymentsController {
//   constructor(private readonly service: PaymentsService) {}
//   // OPS ONLY – approve payment
//   @Post('approve')
//   approvePayment(
//     @Body() body: {
//       caseId: string;
//       amount: number;
//     },
//   ) {
//     return this.service.approvePayment(body.caseId, body.amount);
//   }
//   // User / Ops – payment status
//   @Get(':caseId')
//   getPayment(@Param('caseId') caseId: string) {
//     return this.service.getPaymentStatus(caseId);
//   }
// }
//# sourceMappingURL=payments.controller.js.map