"use strict";
// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../../prisma/prisma.service';
// import {CreateLeadDto} from './dto/create-lead.dto'
// import {UpdateLeadDto} from './dto/update-lead.dto'
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsService = void 0;
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
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let LeadsService = class LeadsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    // ✅ CREATE
    create(dto, userId) {
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
    findMyLeads(userId, search) {
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
    async findOne(id, userId) {
        const lead = await this.prisma.lead.findFirst({
            where: {
                id,
                createdById: userId,
            },
            include: { quotations: true },
        });
        if (!lead)
            throw new common_1.NotFoundException("Lead not found");
        return lead;
    }
    // ✅ UPDATE ONLY OWN
    async update(id, dto, userId) {
        const lead = await this.prisma.lead.findFirst({
            where: {
                id,
                createdById: userId,
            },
        });
        if (!lead)
            throw new common_1.NotFoundException("Lead not found");
        return this.prisma.lead.update({
            where: { id },
            data: dto,
        });
    }
};
exports.LeadsService = LeadsService;
exports.LeadsService = LeadsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LeadsService);
//# sourceMappingURL=leads.service.js.map