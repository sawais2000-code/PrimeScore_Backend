


// import {
//   Controller,
//   Post,
//   Get,
//   Param,
//   Body,
//   Patch,
//   Req,
//   UseGuards,
// } from '@nestjs/common';

// import { Request } from 'express';
// import { AuthGuard } from '../../auth/auth.guard'; // ⭐ correct path

// import { LeadsService } from './leads.service';
// import { CreateLeadDto } from './dto/create-lead.dto';
// import { UpdateLeadDto } from './dto/update-lead.dto';

// @Controller('leads')
// @UseGuards(AuthGuard) // ⭐⭐⭐ MUST
// export class LeadsController {
//   constructor(private service: LeadsService) {}

//   @Post('/create')
//   // create(@Body() dto: CreateLeadDto, @Req() req: Request) {
//   //   const userId = (req.user as any).id;
//   //   return this.service.create(dto, userId);
//   // }

//   create(@Body() dto: CreateLeadDto, @Req() req: Request) {
//   const userId = (req.user as any).sub; // ⭐ use sub

//   console.log('USER ID =', userId); // debug

//   return this.service.create(dto, userId);
// }


//   @Get('/get')
//   findAll() {
//     return this.service.findAll();
//   }

//   @Patch('/get:id')
//   update(@Param('id') id: string, @Body() dto: UpdateLeadDto) {
//     return this.service.update(Number(id), dto);
//   }
// }




import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Patch,
  Req,
  UseGuards,
  Query,
} from '@nestjs/common';

import { Request } from 'express';
import { AuthGuard } from '../../auth/auth.guard';

import { LeadsService } from './leads.service';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';

@Controller('leads')
@UseGuards(AuthGuard)
export class LeadsController {
  constructor(private service: LeadsService) {}

  // ✅ CREATE
  @Post('/create')
  create(@Body() dto: CreateLeadDto, @Req() req: Request) {
    const userId = (req.user as any).sub;
    return this.service.create(dto, userId);
  }

  // ✅ GET MY LEADS (only own)
  @Get('/get')
  findMyLeads(
    @Req() req: Request,
    @Query('search') search?: string,
  ) {
    const userId = (req.user as any).sub;
    return this.service.findMyLeads(userId, search);
  }

  // ✅ GET SINGLE LEAD (only own)
  @Get('/:id')
  findOne(@Param('id') id: string, @Req() req: Request) {
    const userId = (req.user as any).sub;
    return this.service.findOne(Number(id), userId);
  }

  // ✅ UPDATE (only own)
  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateLeadDto,
    @Req() req: Request,
  ) {
    const userId = (req.user as any).sub;
    return this.service.update(Number(id), dto, userId);
  }
}
