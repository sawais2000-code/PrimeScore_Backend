import { Controller, Post, Get, Param, Body, UseGuards,Patch } from '@nestjs/common';
import { SalesService } from './sales.service';
import {CreateSaleDto} from './dto/create-sale.dto'

@Controller('sales')
export class SalesController {
  constructor(private service: SalesService) {}

  @Post()
  create(@Body() dto: CreateSaleDto) {
    return this.service.create(dto);
  }
}
