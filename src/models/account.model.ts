import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { User } from './user.model';

@Schema()
export class Account {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  type: string; 

  @Prop()
  balance: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  owner: User;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const accountSchema = SchemaFactory.createForClass(Account);
