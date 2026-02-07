import { Injectable } from '@nestjs/common';
import { AiAssistResult } from './ai.types';

@Injectable()
export class AiService {

  assist(ruleId: string, context: any): AiAssistResult {
    // Phase 1: heuristic-based (LLM can be plugged later)

    let confidence: AiAssistResult['confidence'] = 'MEDIUM';
    let priority: AiAssistResult['priority'] = 'P2';

    if (ruleId.includes('WRITTEN_OFF') || ruleId.includes('FRAUD')) {
      confidence = 'HIGH';
      priority = 'P1';
    }

    return {
      confidence,
      priority,
      reasoning: 'Based on historical patterns and rule severity',
    };
  }
}
