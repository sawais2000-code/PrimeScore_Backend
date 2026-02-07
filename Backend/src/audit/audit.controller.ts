// // src/audit/audit.controller.ts

// import { Controller, Get, Query } from '@nestjs/common';
// import { AuditService } from './audit.service';
// import { AuditAction } from '@prisma/client';

// @Controller('audit')
// export class AuditController {
//   constructor(private readonly auditService: AuditService) {}

//   // GET /audit/logs?action=ASSIGN&entity=ISSUE
//   @Get('logs')
//   async logs(
//     @Query('userId') userId?: string,
//     @Query('action') action?: AuditAction,
//     @Query('entity') entity?: string,
//     @Query('from') from?: string,
//     @Query('to') to?: string,
//   ) {
//     return this.auditService.search({
//       userId,
//       action,
//       entity,
//       fromDate: from ? new Date(from) : undefined,
//       toDate: to ? new Date(to) : undefined,
//     });
//   }
// }
