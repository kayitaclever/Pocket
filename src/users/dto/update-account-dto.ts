import { IsNotEmpty } from 'class-validator';
export class UpdateAccountDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  balance: number;
}
