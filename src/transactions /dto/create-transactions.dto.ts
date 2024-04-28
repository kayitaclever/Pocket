import { IsNotEmpty } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { Account } from 'src/accounts/entities/account.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Budget } from 'src/budgets /entities/budget.entity';

export class CreateTransactionDto {
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  user: User;

  @IsNotEmpty()
  account: Account;

  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  category: Category;

  @IsNotEmpty()
  note: string;

  @IsNotEmpty()
  budget: Budget;
}
