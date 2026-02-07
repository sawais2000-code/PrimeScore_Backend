

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateQuotationDto } from './dto/create-quotation.dto';

@Injectable()
export class QuotationsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateQuotationDto) {
    return this.prisma.quotation.create({
      data: {
        ...dto,
        leadId: Number(dto.leadId), // ⭐ convert
      },
    });
  }

  async approve(id: string) {
    return this.prisma.quotation.update({
      where: { id: Number(id) }, // ⭐ convert
      data: { status: 'APPROVED' },
    });
  }
}

