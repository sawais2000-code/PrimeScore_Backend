import { IsString } from 'class-validator';

export class CreateLeadDto {
  @IsString()
  name: string;

  @IsString()
  contact: string;

  @IsString()
  city: string;

  @IsString()
  query: string;
}
