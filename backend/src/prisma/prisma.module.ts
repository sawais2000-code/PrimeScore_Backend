// import { Module } from '@nestjs/common';
// import { PrismaService } from './prisma.service';

// @Module({
//   providers: [PrismaService],
//   exports: [PrismaService],
// })
// export class PrismaModule {}



import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // ⭐ makes available everywhere
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
