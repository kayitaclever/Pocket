import { Entity, Column, OneToMany } from 'typeorm';
import { Transactions } from '../../transactions /entities/transactions.entity';
import { Account } from 'src/accounts/entities/account.entity';
import { Budget } from 'src/budgets /entities/budget.entity';
import { Audit } from 'src/shared/entities/audit.entity';

@Entity('user')
export class User extends Audit {
  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  Password: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Transactions, (transactions) => transactions.user)
  transactions: Transactions[];

  @OneToMany(() => Account, (account) => account.user)
  accounts: Account[];

  @OneToMany(() => Budget, (budget) => budget.user)
  budgets: Budget[];
}
