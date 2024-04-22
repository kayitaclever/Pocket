// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Category } from './category.entity';
// import * as mongoose from 'mongoose';


// @Schema()
// export class Budget {
//   @Prop()
//   id: string;

//   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Category.name }) 
//   category: Category;

//   @Prop()
//   amount: number;

//   @Prop()
//   startDate: Date;

//   @Prop()
//   endDate: Date;

//   @Prop()
//   createdAt: Date;

//   @Prop()
//   updatedAt: Date;
// }

// export const budgetSchema = SchemaFactory.createForClass(Budget);



import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity()
export class Budget {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  amount: number;

  @Column()
  startDate: Date;

  @Column()
  updated: Date 

  

  @ManyToOne(() => User, (user) => user.budgets)
  user: User;
}
