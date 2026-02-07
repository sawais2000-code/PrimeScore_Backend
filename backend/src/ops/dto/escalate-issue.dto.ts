import { IsString } from 'class-validator';

export class EscalateIssueDto {
  @IsString()
  reason: string;
}
