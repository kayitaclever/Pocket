import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "../../users/entities/user.entity";
import { Account } from "../../accounts/entities/account.entity";
import { Category } from "src/categories/entities/category.entity";
import { CategoriesController } from "src/categories/categories.controller";

@Entity('transactions')
export class Transactions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  date: Date;

 
  @Column()
  createdAt: Date;

  @Column()
  UpdatedAt: Date;


  @ManyToOne(() => User, (user) => user.transactions)
  user: User;

  @ManyToOne(() => Account, (account) => account.transactions)
  account: Account;
  
  @ManyToOne (()=> Category, (category)=> category.transactions)
  category: Category;
}

 