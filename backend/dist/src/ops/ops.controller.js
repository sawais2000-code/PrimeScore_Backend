"use strict";
// import {
//   Controller,
//   Get,
//   Post,
//   Param,
//   Body,
//   Query,
//   BadRequestException,
//   UseGuards,
// } from '@nestjs/common';
// import { OpsService } from './ops.service';
// import { IssueStatus, User } from '@prisma/client';
// import { CurrentUser } from '../common/decorators/current-user.decorator';
// import { Roles } from '../common/decorators/roles.decorator';
// import { RolesGuard } from '../common/guards/roles.guard';
// import { IsEnum, IsArray, IsString } from 'class-validator';
// // ---------------- DTOs ----------------
// class ChangeStatusDto {
//   @IsEnum(IssueStatus)
//   status: IssueStatus;
// }
// class AssignIssueDto {
//   @IsString()
//   assigneeId: string;
// }
// class EscalateDto {
//   @IsString()
//   reason: string;
// }
// class BulkStatusDto {
//   @IsEnum(IssueStatus)
//   status: IssueStatus;
//   @IsArray()
//   issueIds: string[];
// }
// // ---------------- Controller ----------------
// @Controller('ops')
// @UseGuards(RolesGuard)
// export class OpsController {
//   constructor(private readonly opsService: OpsService) {}
//   // 📊 Dashboard
//   @Get('dashboard')
//   @Roles('OPS_MANAGER', 'ADMIN')
//   dashboard() {
//     return this.opsService.dashboard();
//   }
//   // 📥 Issue Queue
//   @Get('issues')
//   @Roles('OPS_MANAGER', 'OPS_EXECUTIVE')
//   getIssues(@Query('status') status?: IssueStatus) {
//     return this.opsService.getIssues(status);
//   }
//   // 👤 My Issues
//   @Get('my-issues')
//   @Roles('OPS_EXECUTIVE')
//   myIssues(@CurrentUser() user: User) {
//     return this.opsService.myIssues(user.id);
//   }
//   // 🎯 Assign
//   @Post('assign/:id')
//   @Roles('OPS_MANAGER', 'ADMIN')
//   assignIssue(
//     @Param('id') issueId: string,
//     @Body() dto: AssignIssueDto,
//     @CurrentUser() user: User,
//   ) {
//     return this.opsService.assignIssue(issueId, dto.assigneeId, user.id);
//   }
//   // 🔄 Status Change
//   @Post('status/:id')
//   @Roles('OPS_EXECUTIVE', 'OPS_MANAGER')
//   changeStatus(
//     @Param('id') issueId: string,
//     @Body() dto: ChangeStatusDto,
//     @CurrentUser() user: User,
//   ) {
//     return this.opsService.changeIssueStatus(issueId, dto.status, user.id);
//   }
//   // 🚨 Escalate
//   @Post('escalate/:id')
//   @Roles('OPS_EXECUTIVE')
//   escalate(
//     @Param('id') issueId: string,
//     @Body() dto: EscalateDto,
//     @CurrentUser() user: User,
//   ) {
//     return this.opsService.escalateIssue(issueId, dto.reason, user.id);
//   }
//   // ⚡ Bulk Status
//   @Post('bulk-status')
//   @Roles('OPS_MANAGER')
//   bulkStatus(
//     @Body() dto: BulkStatusDto,
//     @CurrentUser() user: User,
//   ) {
//     if (!dto.issueIds?.length) {
//       throw new BadRequestException('No issues provided');
//     }
//     return this.opsService.bulkStatusUpdate(dto.issueIds, dto.status, user.id);
//   }
// }
//# sourceMappingURL=ops.controller.js.map