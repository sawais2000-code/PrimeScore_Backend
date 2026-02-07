import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async stats() {
    const totalLeads = await this.prisma.lead.count();

    const sales = await this.prisma.sale.aggregate({
      _sum: { amount: true },
    });

    return {
      totalLeads,
      totalSales: sales._sum.amount || 0,
    };
  }
}
