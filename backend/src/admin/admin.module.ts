// import { Module } from '@nestjs/common';
// import { AdminController } from './admin.controller';
// import { AdminService } from './admin.service';
// import { PrismaService } from '../prisma/prisma.service';
// import { AuthModule } from '../auth/auth.module'; // ⭐ add



// @Module({
//     imports: [AuthModule], // ⭐ MUST

//   controllers: [AdminController],
//   providers: [AdminService, PrismaService],
// })
// export class AdminModule {}


import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { PrismaService } from '../prisma/prisma.service';

import { JwtModule } from '@nestjs/jwt';   // ✅ ADD

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'supersecret', // ✅ same secret everywhere
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AdminController],
  providers: [AdminService, PrismaService],
})
export class AdminModule {}
