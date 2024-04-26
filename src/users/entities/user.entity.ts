// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// @Schema()
// export class User {
//     @Prop({ optional: true })
//     id: string;

//   @Prop({ unique: true })
//   username: string;

//   @Prop()
//   password: string;

//   @Prop()
//   email: string;

//   @Prop()
//   createdAt: Date;

//   @Prop()
//   updatedAt: Date;
// }

// export const userSchema = SchemaFactory.createForClass(User);

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Transactions } from '../../transactions /entities/transactions.entity';
import { Account } from 'src/accounts/entities/account.entity';
import { Budget } from 'src/budgets /entities/budget.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  Password: string;

  @Column({ unique: true })
  email: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToMany(() => Transactions, (transactions) => transactions.user)
  transactions: Transactions[];

  @OneToMany(() => Account, (account) => account.user)
  accounts: Account[];

  @OneToMany(() => Budget, (budget) => budget.user)
  budgets: Budget[];
  analyses: any;
}
