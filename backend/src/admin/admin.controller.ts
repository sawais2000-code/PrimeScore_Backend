// import { Body, Controller, Get, Post } from '@nestjs/common';
// import { AdminService } from './admin.service';
// import { CreateUserDto } from './dto/create-user.dto';

// @Controller('admin')
// export class AdminController {
//   constructor(private admin: AdminService) {}

//   // ✅ create user
//   @Post('employee')
//   create(@Body() dto: CreateUserDto) {
//     return this.admin.createUser(dto);
//   }

//   // ✅ list users
//   @Get('get/employee')
//   list() {
//     return this.admin.listUsers();
//   }
// }



import { Body, Controller, Get, Post, UseGuards, Param,Patch } from '@nestjs/common';

import { AdminService } from './admin.service';
import { CreateUserDto } from './dto/create-user.dto';

import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';


@Controller('admin')
@UseGuards(AuthGuard, RolesGuard) // ⭐ BOTH GUARDS
export class AdminController {
  constructor(private adminservice: AdminService) {}

  // ✅ ONLY ADMIN + SUPER_ADMIN
  @Post('employee')
  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  create(@Body() dto: CreateUserDto) {
    return this.adminservice.createUser(dto);
  }

  @Get('get/employee')
  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  list() {
    return this.adminservice.listUsers();
  }


  // ✅ ADMIN - ALL LEADS
@Get('/admin/all')
@UseGuards(RolesGuard)
@Roles(Role.ADMIN, Role.SUPER_ADMIN)
getAllLeads() {
  return this.adminservice.getAllLeads();
}


// ✅ ADMIN - specific employee leads
@Get('/admin/user/:userId')
@UseGuards(RolesGuard)
@Roles(Role.ADMIN, Role.SUPER_ADMIN)
getUserLeads(@Param('userId') userId: string) {
  return this.adminservice.getUserLeads(Number(userId));
}


// ✅ ADMIN - leads count
@Get('/admin/stats')
@UseGuards(RolesGuard)
@Roles(Role.ADMIN, Role.SUPER_ADMIN)
getLeadStats() {
  return this.adminservice.getLeadStats();
}



  @Patch('approve/:id')
  approve(@Param('id') id: string) {
    return this.quotationservice.approve(id);
  }

}
