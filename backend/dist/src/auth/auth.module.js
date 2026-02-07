"use strict";
// // // import { Module } from '@nestjs/common';
// // // import { JwtModule } from '@nestjs/jwt';
// // // import { AuthController } from './auth.controller';
// // // import { AuthService } from './auth.service';
// // // import { PrismaService } from '../prisma/prisma.service';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
// // // @Module({
// // //   imports: [
// // //     JwtModule.register({
// // //       secret: 'supersecret',
// // //     }),
// // //   ],
// // //   controllers: [AuthController],
// // //   providers: [AuthService, PrismaService],
// // //   exports: [  JwtModule,   // ⭐ add
// // //     AuthService, ]// ⭐ add], 
// // // })
// // // export class AuthModule {}
// // import { Module } from '@nestjs/common';
// // import { JwtModule } from '@nestjs/jwt';
// // import { AuthService } from './auth.service';
// // import { AuthController } from './auth.controller';
// // import { PrismaService } from '../prisma/prisma.service';
// // @Module({
// //   imports: [
// //     JwtModule.register({
// //       secret: 'supersecret',
// //       signOptions: { expiresIn: '1d' },
// //     }),
// //   ],
// //   controllers: [AuthController],
// //   providers: [AuthService, PrismaService],
// //   exports: [AuthService],
// // })
// // export class AuthModule {}
// import { Module, Global } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
// @Global() // 🔥 makes it available everywhere
// @Module({
//   imports: [
//     JwtModule.register({
//       secret: process.env.JWT_SECRET || 'supersecret',
//       signOptions: { expiresIn: '1d' },
//     }),
//   ],
//   exports: [JwtModule], // 🔥 IMPORTANT
// })
// export class AuthModule {}
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET || 'supersecret',
                signOptions: { expiresIn: '1d' },
            }),
        ],
        controllers: [auth_controller_1.AuthController], // ✅ ADD
        providers: [auth_service_1.AuthService, prisma_service_1.PrismaService], // ✅ ADD
        exports: [jwt_1.JwtModule, auth_service_1.AuthService], // optional but good
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map