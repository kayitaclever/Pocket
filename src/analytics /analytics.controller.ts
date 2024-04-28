import {
  Controller,
  Get,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

import { ExtendedTransactionAnalyticsDTO } from './entities/dto/transaction-analytics.dto';
import { ExtendedBudgetSummaryDTO } from './entities/dto/budget-summary.dto';

@Controller('analytics')
export class AnalyticsController {
  budgetService: any;
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('/summary')
  async getBudgetSummaryByDateRange(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ): Promise<ExtendedBudgetSummaryDTO[]> {
    const summaries = await this.budgetService.getBudgetSummaryByDateRange(
      startDate,
      endDate,
    );
    return summaries;
  }

  @Get('/transactions')
  async getAllTransactions(
    @Query('limit') limit?: number,
  ): Promise<ExtendedTransactionAnalyticsDTO[]> {
    try {
      const transactions = await this.analyticsService.getAllTransactions();
      return limit ? transactions.slice(0, limit) : transactions;
    } catch (error) {
      throw new HttpException(
        'Error retrieving transactions',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
