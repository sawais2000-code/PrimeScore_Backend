// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { PrismaService } from '../prisma/prisma.service';
// import * as bcrypt from 'bcrypt';

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


import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  /*
  =========================================
  ✅ LOGIN
  =========================================
  */
  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new UnauthorizedException('Invalid password');
    }

    // ⭐ Prisma id already number
    const accessToken = this.generateAccessToken(
      user.id,
      user.role,
    );

    const refreshToken = this.generateRefreshToken(
      user.id,
      user.role,
    );

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
  async refresh(refreshToken: string) {
    try {
      // ⭐⭐⭐ IMPORTANT: force typing
      const payload = this.jwt.verify(refreshToken) as {
        sub: string | number;
        role: string;
      };

      // ⭐⭐⭐ ALWAYS CONVERT
      const userId = Number(payload.sub);

      return {
        accessToken: this.generateAccessToken(
          userId,
          payload.role,
        ),
      };
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
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

  private generateAccessToken(
    userId: number,
    role: string,
  ): string {
    return this.jwt.sign(
      {
        sub: userId,
        role,
      },
      {
        expiresIn: '1d',
      },
    );
  }

  private generateRefreshToken(
    userId: number,
    role: string,
  ): string {
    return this.jwt.sign(
      {
        sub: userId,
        role,
      },
      {
        expiresIn: '7d',
      },
    );
  }
}
