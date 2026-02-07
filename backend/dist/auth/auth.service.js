"use strict";
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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    // 1️⃣ Send OTP
    async sendOtp(mobile) {
        // PROD: SMS gateway
        console.log('OTP SENT: 123456');
        return { success: true };
    }
    // 2️⃣ Verify OTP (USER LOGIN)
    async verifyOtp(mobile, otp) {
        if (otp !== '123456') {
            throw new common_1.UnauthorizedException('Invalid OTP');
        }
        const user = await this.prisma.user.upsert({
            where: { mobile },
            update: {},
            create: { mobile, role: 'USER' },
        });
        const token = this.generateToken(user.id, user.role);
        return {
            token,
            user: {
                id: user.id,
                role: user.role,
            },
        };
    }
    // 3️⃣ OPS LOGIN
    async opsLogin(email, password) {
        const user = await this.prisma.user.findFirst({
            where: { email },
        });
        if (!user || password !== 'admin123') {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const token = this.generateToken(user.id, user.role);
        return { token };
    }
    // 4️⃣ Refresh Token
    async refresh(refreshToken) {
        const payload = this.jwt.verify(refreshToken);
        return {
            token: this.generateToken(payload.sub, payload.role),
        };
    }
    // 5️⃣ Logout
    async logout() {
        // Token blacklist / frontend cleanup
        return { success: true };
    }
    generateToken(userId, role) {
        return this.jwt.sign({ sub: userId, role }, { expiresIn: '1d' });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map