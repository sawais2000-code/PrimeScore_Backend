"use strict";
// // src/credit-report/credit-report.controller.ts
// import { Controller, Post, Get, Param, Body, UseGuards } from '@nestjs/common';
// import { CreditReportService } from './credit-report.service';
// import { AuthGuard } from '../auth/auth.guard';
// import { FetchReportDto } from './dto/fetch-report.dto';
// @Controller('credit-report')
// @UseGuards(AuthGuard)
// export class CreditReportController {
//   constructor(private readonly service: CreditReportService) {}
//   @Post('fetch')
//   async fetchReport(@Body() dto: FetchReportDto, @Body('userId') userId: string) {
//     return this.service.fetchReport(dto, userId);
//   }
//   @Get('history/:userId')
//   async history(@Param('userId') userId: string) {
//     return this.service.getHistory(userId);
//   }
//   @Get(':reportId/pdf')
//   async getPdf(@Param('reportId') reportId: string) {
//     return this.service.getPdf(reportId);
//   }
//   @Get(':reportId/issues')
//   async getIssues(@Param('reportId') reportId: string) {
//     return this.service.getDetectedIssues(reportId);
//   }
// }
//# sourceMappingURL=credit-report.controller.js.map