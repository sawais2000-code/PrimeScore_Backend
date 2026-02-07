
// import {
//   Controller,
//   Patch,
//   Param,
//   Body,
//   UseGuards,
// } from '@nestjs/common';
// import { IssuesService } from './issues.service';
// import { AuthGuard } from '../auth/auth.guard';
// import { Roles } from '../rbac/roles.decorator';
// import { Role } from '../rbac/roles.enum';
// import { RbacGuard } from '../rbac/rbac.guard';
// import { IssueStatus } from '@prisma/client';

// @Controller('ops/issues')
// @UseGuards(AuthGuard, RbacGuard)
// export class IssuesController {
//   constructor(private service: IssuesService) {}

//   // Assign issue to a user
//   @Patch(':id/assign')
//   @Roles(Role.OPS_MANAGER)
//   assign(
//     @Param('id') id: string,
//     @Body('assignedTo') assignedTo: string,  // ✅ changed from ownerId
//   ) {
//     return this.service.assign(id, assignedTo);
//   }

//   // Update issue status
//   @Patch(':id/status')
//   @Roles(Role.OPS_EXECUTIVE)
//   updateStatus(
//     @Param('id') id: string,
//     @Body('status') status: IssueStatus,     // ✅ enum type
//   ) {
//     return this.service.updateStatus(id, status);
//   }

//   // Escalate issue
//   @Patch(':id/escalate')
//   @Roles(Role.OPS_EXECUTIVE)
//   escalate(@Param('id') id: string) {
//     return this.service.escalate(id);
//   }
// }
