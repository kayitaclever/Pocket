import { Get, Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, LessThanOrEqual, Repository } from 'typeorm';
import { Transactions } from 'src/transactions /entities/transactions.entity';
import { ExtendedTransactionAnalyticsDTO } from './entities/dto/transaction-analytics.dto';
import { ExtendedBudgetSummaryDTO } from './entities/dto/budget-summary.dto';

@Injectable()
export class AnalyticsService {
  budgetRepository: any;
  transactionsService: any;
  constructor(
    @InjectRepository(Transactions)
    private readonly transactionRepository: Repository<Transactions>,
  ) {}

  async getBudgetSummaryByDateRange(
    startDate: string,
    endDate: string,
  ): Promise<ExtendedBudgetSummaryDTO[]> {
    const parsedStartDate = new Date(startDate);
    const parsedEndDate = new Date(endDate);

    const budgets = await this.budgetRepository.find({
      where: {
        startDate: LessThanOrEqual(parsedEndDate),
        endDate: GreaterThanOrEqual(parsedStartDate),
      },
    });

    const summaries: ExtendedBudgetSummaryDTO[] = [];
    for (const budget of budgets) {
      const transactions = await this.transactionRepository.find({
        where: {
          budget: budget,
          date: Between(parsedStartDate, parsedEndDate),
        },
      });

      const totalSpent = transactions.reduce(
        (acc, transaction) => acc + transaction.amount,
        0,
      );
      const remaining = budget.amount - totalSpent;
      const percentageSpent = (totalSpent / budget.amount) * 100;

      summaries.push({
        budgetId: budget.id,
        name: budget.name,
        amount: budget.amount,
        remaining,
        spent: totalSpent,
        percentageSpent,
      });
    }

    return summaries;
  }

  async getAllTransactions(): Promise<ExtendedTransactionAnalyticsDTO[]> {
    const analyticsDTOs: ExtendedTransactionAnalyticsDTO[] = Transactions.map(
      (transaction) => ({
        id: transaction.id,
        amount: transaction.amount,
        date: transaction.date,
        user: transaction.user?.name || transaction.user,
        account: transaction.account?.name || transaction.account,
        category: transaction.category?.name || transaction.category,
        status: transaction.status,
        note: transaction.note,
      }),
    );

    return analyticsDTOs;
  }

  @Get('/filter')
  async filterTransactions(@Query() filter: ExtendedTransactionAnalyticsDTO) {
    const filteredTransactions =
      await this.transactionsService.filterTransactions(filter);
    return filteredTransactions;
  }
}

function GreaterThanOrEqual(_parsedStartDate: Date): (value: Date) => boolean {
  return (value: Date) => value.getTime() >= _parsedStartDate.getTime();
}
