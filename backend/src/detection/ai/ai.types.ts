export interface AiAssistResult {
  confidence: 'HIGH' | 'MEDIUM' | 'LOW';
  priority: 'P1' | 'P2' | 'P3';
  reasoning: string;
}
