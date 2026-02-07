import { Controller, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { DetectionService } from './detection.service';

@Controller('detection')
export class DetectionController {
  constructor(private service: DetectionService) {}

  // @Post('run')
  // run(@Body() dto: { reportId: string }) {
  //   return this.service.run(dto.reportId);
  // }
  @Post(':reportId')
run(@Param('reportId', ParseIntPipe) reportId: number) {
  return this.service.run(reportId);
}

}
