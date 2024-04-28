import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Audit } from 'src/shared/entities/audit.entity';
import { Account } from 'src/accounts/entities/account.entity';

@Entity('budget')
export class Budget extends Audit {
  @Column()
  name: string;

  @Column()
  amount: number;

  @ManyToOne(() => User, (user) => user.budgets)
  user: User;

  @OneToMany(() => Account, (account) => account.budgets)
  account: Account;
  transactions: any;
}
