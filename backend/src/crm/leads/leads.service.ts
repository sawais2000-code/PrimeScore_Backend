// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../../prisma/prisma.service';
// import {CreateLeadDto} from './dto/create-lead.dto'
// import {UpdateLeadDto} from './dto/update-lead.dto'

// // @Injectable()
// // export class LeadsService {
// //   constructor(private prisma: PrismaService) {}

// //   // create(dto: CreateLeadDto, userId: string) {
// //   //   return this.prisma.lead.create({
// //   //     data: { ...dto, createdById: userId },
// //   //   });
// //   // }

// //   create(dto: CreateLeadDto, userId: string) {
// //   return this.prisma.lead.create({
// //     data: {
// //       ...dto,

// //       createdBy: {
// //         connect: {
// //           id: userId,
// //         },
// //       },
// //     },
// //   });
// // }

// //   findAll() {
// //     return this.prisma.lead.findMany({ include: { quotations: true } });
// //   }

// //   update(id: string, dto: UpdateLeadDto) {
// //     return this.prisma.lead.update({ where: { id }, data: dto });
// //   }
// // }

// @Injectable()
// export class LeadsService {
//   constructor(private prisma: PrismaService) {}

//   create(dto: CreateLeadDto, userId: number) {
//     return this.prisma.lead.create({
//       data: {
//         ...dto,
//         createdBy: {
//           connect: {
//             id: userId,
//           },
//         },
//       },
//     });
//   }

//   findAll() {
//     return this.prisma.lead.findMany({
//       include: { quotations: true },
//     });
//   }

//   update(id: number, dto: UpdateLeadDto) {
//     return this.prisma.lead.update({
//       where: { id },
//       data: dto,
//     });
//   }

// }

import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateLeadDto } from "./dto/create-lead.dto";
import { UpdateLeadDto } from "./dto/update-lead.dto";

@Injectable()
export class LeadsService {
  constructor(private prisma: PrismaService) {}

  // ✅ CREATE
  create(dto: CreateLeadDto, userId: number) {
    return this.prisma.lead.create({
      data: {
        ...dto,
        createdBy: {
          connect: { id: userId },
        },
      },
    });
  }

  // ✅ ONLY MY LEADS + LATEST FIRST + SEARCH
  findMyLeads(userId: number, search?: string) {
    return this.prisma.lead.findMany({
      where: {
        createdById: userId,

        ...(search && {
          // name: {
          //   contains: search,
          //   mode: 'insensitive',
          // },
          name: {
            contains: search,
          },
        }),
      },

      orderBy: {
        createdAt: "desc", // ⭐ latest first
      },

      include: {
        quotations: true,
      },
    });
  }

  // ✅ SINGLE LEAD (security check)
  async findOne(id: number, userId: number) {
    const lead = await this.prisma.lead.findFirst({
      where: {
        id,
        createdById: userId,
      },
      include: { quotations: true },
    });

    if (!lead) throw new NotFoundException("Lead not found");

    return lead;
  }

  // ✅ UPDATE ONLY OWN
  async update(id: number, dto: UpdateLeadDto, userId: number) {
    const lead = await this.prisma.lead.findFirst({
      where: {
        id,
        createdById: userId,
      },
    });

    if (!lead) throw new NotFoundException("Lead not found");

    return this.prisma.lead.update({
      where: { id },
      data: dto,
    });
  }
}
