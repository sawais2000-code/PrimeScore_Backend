import { Module } from '@nestjs/common';
import { LeadsModule } from './leads/leads.module';
import { QuotationsModule } from './quotations/quotations.module';
import { SalesModule } from './sales/sales.module';
import { CasesModule } from './cases/cases.module';
import { ApprovalsModule } from './approvals/approvals.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ReportsModule } from './reports/reports.module';



@Module({
  imports: [
    LeadsModule,
    QuotationsModule,
    SalesModule,
    ApprovalsModule,
    DashboardModule,
  ],
})
export class CrmModule {}

