// // src/app.module.ts
// // =========================
// import { Module } from '@nestjs/common';
// import { AuthModule } from './auth/auth.module';
// import { UsersModule } from './users/users.module';
// import { CreditReportModule } from './credit-report/credit-report.module';
// import { RulesModule } from './rules/rules.module';
// import { CasesModule } from './cases/cases.module';
// import { IssuesModule } from './issues/issues.module';
// import { OpsModule } from './ops/ops.module';
// import { PaymentsModule } from './payments/payments.module';
// import { EmailsModule } from './emails/emails.module';
// import { DocumentsModule } from './documents/documents.module';
// import { AuditModule } from './audit/audit.module';
// import { AdminModule } from './admin/admin.module';


// @Module({
// imports: [
// AuthModule,
// UsersModule,
// CreditReportModule,
// RulesModule,
// CasesModule,
// IssuesModule,
// OpsModule,
// PaymentsModule,
// EmailsModule,
// DocumentsModule,
// AuditModule,
// AdminModule,
// ],
// })
// export class AppModule {}



import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
// import { OpsModule } from './ops/ops.module';
import { UsersModule } from './users/users.module';
import { CrmModule } from './crm/crm.module';
import { PrismaModule } from './prisma/prisma.module';
import { AdminModule } from './admin/admin.module';



@Module({
  imports: [
    PrismaModule,
    AuthModule,
    // OpsModule,
    UsersModule,
    CrmModule,
    CrmModule,
    AdminModule
  ],
})
export class AppModule {}
