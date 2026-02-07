import { IsEmail, IsString } from 'class-validator';

export class OpsLoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  password!: string;
}
