import { Entity, Column, ManyToOne } from 'typeorm';
import { Transactions } from '../../transactions /entities/transactions.entity';
import { Audit } from 'src/shared/entities/audit.entity';

@Entity('categories')
export class Category extends Audit {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Transactions, (transaction) => transaction.category)
  transactions: Transactions[];
  category: any;
  accounts: any;
}
