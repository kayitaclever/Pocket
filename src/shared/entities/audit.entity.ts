import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
