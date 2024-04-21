import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
    @Prop({ optional: true })
    id: string;
    
  @Prop({ unique: true })
  username: string;

  @Prop()
  password: string; 

  @Prop()
  email: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const userSchema = SchemaFactory.createForClass(User);
