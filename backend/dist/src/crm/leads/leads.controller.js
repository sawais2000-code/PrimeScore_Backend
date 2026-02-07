"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsController = void 0;
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
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../auth/auth.guard");
const leads_service_1 = require("./leads.service");
const create_lead_dto_1 = require("./dto/create-lead.dto");
const update_lead_dto_1 = require("./dto/update-lead.dto");
let LeadsController = class LeadsController {
    constructor(service) {
        this.service = service;
    }
    // ✅ CREATE
    create(dto, req) {
        const userId = req.user.sub;
        return this.service.create(dto, userId);
    }
    // ✅ GET MY LEADS (only own)
    findMyLeads(req, search) {
        const userId = req.user.sub;
        return this.service.findMyLeads(userId, search);
    }
    // ✅ GET SINGLE LEAD (only own)
    findOne(id, req) {
        const userId = req.user.sub;
        return this.service.findOne(Number(id), userId);
    }
    // ✅ UPDATE (only own)
    update(id, dto, req) {
        const userId = req.user.sub;
        return this.service.update(Number(id), dto, userId);
    }
};
exports.LeadsController = LeadsController;
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lead_dto_1.CreateLeadDto, Object]),
    __metadata("design:returntype", void 0)
], LeadsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/get'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], LeadsController.prototype, "findMyLeads", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LeadsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lead_dto_1.UpdateLeadDto, Object]),
    __metadata("design:returntype", void 0)
], LeadsController.prototype, "update", null);
exports.LeadsController = LeadsController = __decorate([
    (0, common_1.Controller)('leads'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [leads_service_1.LeadsService])
], LeadsController);
//# sourceMappingURL=leads.controller.js.map