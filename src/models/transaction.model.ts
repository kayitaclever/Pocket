import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Account } from './account.model';
import { Category } from './category.model';
import * as mongoose from 'mongoose';


@Schema()
export class Transaction {
  @Prop()
  id: string;

  @Prop()
  amount: number;

  @Prop()
  type: string; 

  @Prop()
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Category.name }) 
  category: Category;

  @Prop()
  date: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Account.name }) 
  account: Account;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const transactionSchema = SchemaFactory.createForClass(Transaction);
