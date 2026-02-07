import {
  Controller,
  Post,
  Patch,
  Param,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';

import { QuotationsService } from './quotations.service';
import { CreateQuotationDto } from './dto/create-quotation.dto';
import { AuthGuard } from '../../auth/auth.guard';

@Controller('quotations')
@UseGuards(AuthGuard)
export class QuotationsController {
  constructor(private quotationservice: QuotationsService) {}

  // ✅ CREATE quotation
  @Post()
  create(@Body() dto: CreateQuotationDto) {
    return this.quotationservice.create(dto);
  }

  // ✅ APPROVE quotation
  @Patch('approve/:id')
  approve(@Param('id') id: string) {
    return this.quotationservice.approve(id);
  }
}
