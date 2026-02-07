// // // import { Module } from '@nestjs/common';
// // // import { JwtModule } from '@nestjs/jwt';
// // // import { AuthController } from './auth.controller';
// // // import { AuthService } from './auth.service';
// // // import { PrismaService } from '../prisma/prisma.service';

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


import { Module, Global } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'supersecret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],   // ✅ ADD
  providers: [AuthService, PrismaService], // ✅ ADD
  exports: [JwtModule, AuthService], // optional but good
})
export class AuthModule {}
