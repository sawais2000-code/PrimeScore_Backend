import { IsString, IsNumber } from 'class-validator';

export class CreateSaleDto {
  @IsString()
  quotationId: number;

  @IsNumber()
  amount: number;
}
