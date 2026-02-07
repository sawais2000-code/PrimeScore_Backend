import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  // ✅ Admin creates user
  async createUser(dto: CreateUserDto) {
    const exists = await this.prisma.user.findFirst({
      where: {
        OR: [
          { email: dto.email },
          { phone: dto.phone },
        ],
      },
    });

    if (exists) {
      throw new ConflictException('Email or phone already exists');
    }

    const hashed = await bcrypt.hash(dto.password, 10);

    return this.prisma.user.create({
      data: {
        name: dto.name,
        phone: dto.phone,
        email: dto.email,
        password: hashed,
        role: 'USER',
      },
    });
  }

  // optional: list users
  async listUsers() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
      },
    });
  }

  // ✅ ALL LEADS (latest first)
getAllLeads() {
  return this.prisma.lead.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      createdBy: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      quotations: true,
    },
  });
}


getUserLeads(userId: number) {
  return this.prisma.lead.findMany({
    where: {
      createdById: userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      quotations: true,
    },
  });
}


async getLeadStats() {
  const stats = await this.prisma.user.findMany({
    select: {
      id: true,
      name: true,
      leads: {
        select: {
          id: true,
        },
      },
    },
  });

  return stats.map((u) => ({
    userId: u.id,
    name: u.name,
    totalLeads: u.leads.length,
  }));
}





}
