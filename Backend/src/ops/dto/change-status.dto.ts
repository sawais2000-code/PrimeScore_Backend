import { IssueStatus } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class ChangeStatusDto {
  @IsEnum(IssueStatus)
  status: IssueStatus;
}
