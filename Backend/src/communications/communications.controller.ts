
// import { Controller, Get, UseGuards, Post , Body, Param} from '@nestjs/common';
// import { Roles } from '../rbac/roles.decorator';
// import { Role } from '../rbac/roles.enum';
// import { RbacGuard } from '../rbac/rbac.guard';
// import { CommunicationsService } from './communications.service';

// @Controller('ops/emails')
// @UseGuards(RbacGuard)
// export class CommunicationsController {
//   constructor(private service: CommunicationsService) {}

//   @Post('send')
//   @Roles(Role.OPS_EXECUTIVE)
//   send(@Body() dto: any) {
//     return this.service.sendEmail(dto.issueId, dto.subject, dto.body);
//   }

//   @Get(':issueId')
//   @Roles(Role.OPS_MANAGER)
//   logs(@Param('issueId') issueId: string) {
//     return this.service.logs(issueId);
//   }
// }
