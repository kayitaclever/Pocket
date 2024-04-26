import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Transactions } from '../../transactions /entities/transactions.entity';
import { Audit } from 'src/shared/entities/audit.entity';

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

  @OneToMany(() => Transactions, (transaction) => transaction.account)
  transactions: Transactions[];
}
