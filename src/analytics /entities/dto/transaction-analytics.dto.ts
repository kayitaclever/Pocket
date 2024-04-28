import { IsNotEmpty } from 'class-validator';
import { Account } from 'src/accounts/entities/account.entity';
import { Category } from 'src/categories/entities/category.entity';

export class ExtendedTransactionAnalyticsDTO {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  user: string;

  @IsNotEmpty()
  account: Account;

  @IsNotEmpty()
  category: Category;

  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  note?: string;
}
