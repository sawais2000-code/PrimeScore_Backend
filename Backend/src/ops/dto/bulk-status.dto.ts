import { IsArray, IsString } from 'class-validator';

export class BulkStatusDto {
  @IsArray()
  issueIds: string[];

  @IsString()
  status: string;
}
