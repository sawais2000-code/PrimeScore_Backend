import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {CreateSaleDto} from './dto/create-sale.dto'


@Injectable()
export class SalesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateSaleDto) {
    return this.prisma.sale.create({ data: dto });
  }
}
