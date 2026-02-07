
import { Controller, Post, Get, Param, Body, UseGuards,Patch } from '@nestjs/common';
import { ApprovalsService } from './approvals.service';
// import { AuthGuard } from '../auth/auth.guard';
// import { FetchReportDto } from './dto/fetch-report.dto';


@Controller('approvals')
export class ApprovalsController {
  constructor(private service: ApprovalsService) {}

  @Patch('quotation/:id/approve')
  approve(@Param('id') id: string) {
    return this.service.approveQuotation(Number(id));
  }

  @Patch('quotation/:id/reject')
  reject(@Param('id') id: string) {
    return this.service.rejectQuotation(Number(id));
  }
}
