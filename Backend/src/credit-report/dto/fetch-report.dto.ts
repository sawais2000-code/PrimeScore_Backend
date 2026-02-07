import { IsString } from 'class-validator';

export class FetchReportDto {
  @IsString()
  bureau: string;  // ye required hai, tumhare service me use ho raha hai
}
