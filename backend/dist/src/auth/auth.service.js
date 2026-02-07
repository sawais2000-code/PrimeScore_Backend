"use strict";
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { PrismaService } from '../prisma/prisma.service';
// import * as bcrypt from 'bcrypt';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
// @Injectable()
// export class AuthService {
//   constructor(
//     private prisma: PrismaService,
//     private jwt: JwtService,
//   ) {}
//   // ✅ Login
//   async login(email: string, password: string) {
//     const user = await this.prisma.user.findUnique({
//       where: { email },
//     });
//     if (!user) {
//       throw new UnauthorizedException('User not found');
//     }
//     const match = await bcrypt.compare(password, user.password);
//     if (!match) {
//       throw new UnauthorizedException('Invalid password');
//     }
//     const token = this.generateToken(user.id, user.role);
//     return {
//       token,
//       user: {
//         id: user.id,
//         email: user.email,
//         role: user.role,
//       },
//     };
//   }
//   async refresh(refreshToken: string) {
//     const payload = this.jwt.verify(refreshToken);
//     return {
//       token: this.generateToken(payload.sub, payload.role),
//     };
//   }
//   async logout() {
//     return { success: true };
//   }
//   private generateToken(userId: string, role: string) {
//     return this.jwt.sign(
//       { sub: userId, role },
//       { expiresIn: '1d' },
//     );
//   }
// }
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
let AuthService = class AuthService {
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    /*
    =========================================
    ✅ LOGIN
    =========================================
    */
    async login(email, password) {
        const user = await this.prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            throw new common_1.UnauthorizedException('Invalid password');
        }
        // ⭐ Prisma id already number
        const accessToken = this.generateAccessToken(user.id, user.role);
        const refreshToken = this.generateRefreshToken(user.id, user.role);
        return {
            accessToken,
            // refreshToken,
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
            },
        };
    }
    /*
    =========================================
    ✅ REFRESH
    =========================================
    */
    async refresh(refreshToken) {
        try {
            // ⭐⭐⭐ IMPORTANT: force typing
            const payload = this.jwt.verify(refreshToken);
            // ⭐⭐⭐ ALWAYS CONVERT
            const userId = Number(payload.sub);
            return {
                accessToken: this.generateAccessToken(userId, payload.role),
            };
        }
        catch {
            throw new common_1.UnauthorizedException('Invalid refresh token');
        }
    }
    /*
    =========================================
    ✅ LOGOUT
    =========================================
    */
    async logout() {
        return { success: true };
    }
    /*
    =========================================
    ✅ TOKENS
    =========================================
    */
    generateAccessToken(userId, role) {
        return this.jwt.sign({
            sub: userId,
            role,
        }, {
            expiresIn: '1d',
        });
    }
    generateRefreshToken(userId, role) {
        return this.jwt.sign({
            sub: userId,
            role,
        }, {
            expiresIn: '7d',
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map