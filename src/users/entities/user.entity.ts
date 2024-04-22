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

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Transaction } from "../../transactions /entities/transactions.entity";

@Entity()
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
  email: string

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToMany(() => Transaction, (transaction) => transaction.user)
  transactions: Transaction[];
  accounts: any;
  budgets: any;
}
