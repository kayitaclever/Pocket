import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('budget')
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
  updated: Date;

  @ManyToOne(() => User, (user) => user.budgets)
  user: User;
}
