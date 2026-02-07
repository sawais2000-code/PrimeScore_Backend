import { Module } from '@nestjs/common';
import { LeadsController } from './leads.controller';
import { LeadsService } from './leads.service';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthModule } from '../../auth/auth.module';


@Module({
    imports: [AuthModule], // ⭐⭐⭐ MUST

  controllers: [LeadsController],
  providers: [LeadsService],
})
export class LeadsModule {}
