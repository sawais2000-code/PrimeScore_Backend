export enum RuleId {
  WRITTEN_OFF_VS_CLOSED = 'WRITTEN_OFF_VS_CLOSED',
  SETTLED_VS_ACTIVE = 'SETTLED_VS_ACTIVE',
  CLOSED_SHOWING_BALANCE = 'CLOSED_SHOWING_BALANCE',
  WRONG_DPD = 'WRONG_DPD',
  UNKNOWN_ACCOUNT = 'UNKNOWN_ACCOUNT',
}

export interface RuleResult {
  ruleId: RuleId;
  conflictFields: string[];
  explanation: string;
}
