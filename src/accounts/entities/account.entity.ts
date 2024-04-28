import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Transactions } from '../../transactions /entities/transactions.entity';
import { Audit } from 'src/shared/entities/audit.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Budget } from 'src/budgets /entities/budget.entity';

@Entity('account')
export class Account extends Audit {
  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  balance: number;

  @ManyToOne(() => User, (user) => user.accounts)
  user: User;

  @OneToMany(() => Category, (categories) => categories.accounts)
  categories: Category;

  @OneToMany(() => Transactions, (transaction) => transaction.account)
  transactions: Transactions[];

  @ManyToOne(() => Budget, (budget) => budget.account)
  budget: Budget[];
  budgets: any;
}
