import { IsString, IsNumber } from 'class-validator';

export class CreateQuotationDto {
  @IsString()
  leadId: string;

  @IsNumber()
  amount: number;

  @IsString()
  description: string;
}
