import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "../../users/entities/user.entity"
import { Transactions } from "../../transactions /entities/transactions.entity";
import { Account } from "../../accounts/entities/account.entity";
import { Budget } from "src/budgets /entities/budget.entity";




@Entity('analysis')
export class Analysis {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.analyses)
  user?: User;

  @Column({ type: 'date' })
  date: Date;

  @Column()
  budget: number;

  @Column({ type: 'json' }) 
  transactions: any[];

  
}


