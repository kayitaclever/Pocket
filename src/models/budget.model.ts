import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Category } from './category.model';
import * as mongoose from 'mongoose';


@Schema()
export class Budget {
  @Prop()
  id: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Category.name }) 
  category: Category;

  @Prop()
  amount: number;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const budgetSchema = SchemaFactory.createForClass(Budget);
