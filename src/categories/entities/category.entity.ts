// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// @Schema()
// export class Category {
//   @Prop()
//   id: string;

//   @Prop()
//   name: string;

//   @Prop()
//   type: string; 

//   @Prop()
//   createdAt: Date;

//   @Prop()
//   updatedAt: Date;
// }

// export const categorySchema = SchemaFactory.createForClass(Category);


import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Transaction } from "../../transactions /entities/transactions.entity";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToMany(() => Transaction, (transaction) => transaction.categories)
  transactions: Transaction[];
}
