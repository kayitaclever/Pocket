import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "../../users/entities/user.entity";
import { Account } from "../../accounts/entities/account.entity";

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  date: Date;
  @Column({ nullable: true })
  category: string; 

 
  @Column()
  createdAt: Date;

  @Column()
  UpdatedAt: Date;


  @ManyToOne(() => User, (user) => user.transactions)
  user: User;

  @ManyToOne(() => Account, (account) => account.transactions)
  account: Account;
  categories: any;
}

 