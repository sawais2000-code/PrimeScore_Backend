


// import { Controller, Get, Patch, Param, Body, UseGuards } from '@nestjs/common';
// import { CasesService } from './cases.service';
// import { Roles } from '../rbac/roles.decorator';
// import { Role } from '../rbac/roles.enum';
// import { RbacGuard } from '../rbac/rbac.guard';

// @Controller('ops/cases')
// @UseGuards(RbacGuard)
// export class CasesController {
//   constructor(private service: CasesService) {}

//   @Get()
//   @Roles(Role.ADMIN, Role.OPS_MANAGER)
//   getAll() {
//     return this.service.getAllCases();
//   }

//   @Patch(':id/status')
//   @Roles(Role.OPS_MANAGER)
//   updateStatus(
//     @Param('id') id: string,
//     @Body() dto: any,
//   ) {
//     return this.service.updateStatus(id, dto.status);
//   }
// }
