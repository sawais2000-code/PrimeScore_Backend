// // import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// // import { PrismaClient } from '@prisma/client';

// // @Injectable()
// // export class PrismaService
// //   extends PrismaClient
// //   implements OnModuleInit, OnModuleDestroy
// // {
// //   constructor() {
// //     super(); // no adapter / engineType here, Prisma v5 handles automatically
// //   }

// //   async onModuleInit() {
// //     await this.$connect();
// //   }

// //   async onModuleDestroy() {
// //     await this.$disconnect();
// //   }
// // }


// // import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// // import { PrismaClient } from '@prisma/client';

// // @Injectable()
// // export class PrismaService
// //   extends PrismaClient
// //   implements OnModuleInit, OnModuleDestroy
// // {
// //   constructor() {
// //     super(); // ✅ no engine / adapter / engineType here
// //   }

// //   async onModuleInit() {
// //     await this.$connect();
// //   }

// //   async onModuleDestroy() {
// //     await this.$disconnect();
// //   }
// // }



// // import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// // import { PrismaClient } from '@prisma/client';

// // @Injectable()
// // export class PrismaService
// //   extends PrismaClient
// //   implements OnModuleInit, OnModuleDestroy
// // {
// //   constructor() {
// //     super(); // ✅ nothing passed here
// //   }

// //   async onModuleInit() {
// //     await this.$connect();
// //   }

// //   async onModuleDestroy() {
// //     await this.$disconnect();
// //   }
// // }


// import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client';
// import { PrismaMysqlAdapter } from '@prisma/adapter-mysql';

// @Injectable()
// export class PrismaService extends PrismaClient
//   implements OnModuleInit, OnModuleDestroy {

//   constructor() {
//     super({
//       adapter: new PrismaMysqlAdapter({
//         url: process.env.DATABASE_URL!,
//       }),
//     });
//   }

//   async onModuleInit() {
//     await this.$connect();
//   }

//   async onModuleDestroy() {
//     await this.$disconnect();
//   }
// }



import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {

  constructor() {
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
