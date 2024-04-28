import { Entity, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Account } from '../../accounts/entities/account.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Audit } from 'src/shared/entities/audit.entity';
import { Budget } from 'src/budgets /entities/budget.entity';

@Entity('transactions')
export class Transactions extends Audit {
  static map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _arg0: (transaction: any) => {
      id: any;
      amount: any;
      date: any;
      user: any;
      account: any;
      category: any;
      status: any;
      note: any;
    },
  ): import('../../analytics /entities/dto/transaction-analytics.dto').ExtendedTransactionAnalyticsDTO[] {
    throw new Error('Method not implemented.');
  }
  @Column()
  amount: number;

  @Column()
  date: Date;

  @Column()
  status: string;

  @Column()
  note: string;

  @ManyToOne(() => User, (user) => user.transactions)
  user: User;

  @ManyToOne(() => Budget, (Budget) => Budget.transactions)
  budget: Budget;

  @ManyToOne(() => Account, (account) => account.transactions)
  account: Account;

  @ManyToOne(() => Category, (category) => category.transactions)
  category: Category;
}
