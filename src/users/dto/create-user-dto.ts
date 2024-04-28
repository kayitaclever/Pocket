import { IsNotEmpty } from 'class-validator';
import { Account } from 'src/accounts/entities/account.entity';
import { Budget } from 'src/budgets /entities/budget.entity';
import { Transactions } from 'src/transactions /entities/transactions.entity';
export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  budget: Budget;

  @IsNotEmpty()
  account: Account;

  @IsNotEmpty()
  transaction: Transactions;
}
