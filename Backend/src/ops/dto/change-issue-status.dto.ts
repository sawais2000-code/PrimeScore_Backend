import { IsString } from 'class-validator';

export class ChangeIssueStatusDto {
  @IsString()
  status: string;
}
