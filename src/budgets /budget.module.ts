import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Budget } from './entities/budget.entity';
import { BudgetService } from './budgets.service';
import { BudgetsController } from './budgets.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Budget])],
  exports: [BudgetModule],
  providers: [BudgetService],
  controllers: [BudgetsController],
})
export class BudgetModule {}
