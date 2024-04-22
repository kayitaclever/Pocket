// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import * as mongoose from 'mongoose';

// import { User } from './user.entity';

// @Schema()
// export class Account {
//   @Prop()
//   id: string;

//   @Prop()
//   name: string;

//   @Prop()
//   type: string; 

//   @Prop()
//   balance: number;

//   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
//   owner: User;

//   @Prop()
//   createdAt: Date;

//   @Prop()
//   updatedAt: Date;
// }

// export const accountSchema = SchemaFactory.createForClass(Account);



import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "../../users/entities/user.entity"
import { Transaction } from "../../transactions /entities/transactions.entity";




@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  balance: string;

  @Column()
  createdAt: Date;

  @Column()
  UpdatedAt: Date;


  @ManyToOne(() => User, (user) => user.accounts)
  user: User;

  @OneToMany(() => Transaction, (transaction) => transaction.account)
  transactions: Transaction[];
}






