import { Module } from '@nestjs/common';
import { DetectionService } from './detection.service';
import { DetectionController } from './detection.controller';
import { AiService } from './ai/ai.service';

@Module({
  controllers: [DetectionController],
  providers: [DetectionService, AiService],
})
export class DetectionModule {}
