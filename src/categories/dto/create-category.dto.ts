import { IsNotEmpty } from 'class-validator';
import { Transactions } from 'src/transactions /entities/transactions.entity';

export class CreateCategoryDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  transaction: Transactions;
}
