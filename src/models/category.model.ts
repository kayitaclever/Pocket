import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Category {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  type: string; 

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const categorySchema = SchemaFactory.createForClass(Category);
