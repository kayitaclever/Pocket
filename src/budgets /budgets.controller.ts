import { Controller, Get, Post, Put, Delete, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { BudgetService } from './budgets.service';
import { Budget } from './entities/budget.entity';

@Controller('budgets')
export class BudgetsController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post()
  async createBudget(@Body() budget: Budget): Promise<Budget | any> {
    try {
      const newBudget = await this.budgetService.createBudget(budget);
      return newBudget;
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Get(':id')
  async getBudgetById(@Param('id') id: string): Promise<Budget | null> {
    try {
      return await this.budgetService.getBudgetById(id);
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Put(':id')
  async updateBudget(@Param('id') id: string, @Body() updateData: Partial<Budget>): Promise<Budget | null> {
    try {
      return await this.budgetService.updateBudget(id, updateData);
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Delete(':id')
  async deleteBudget(@Param('id') id: string): Promise<any> {
    try {
      return await this.budgetService.deleteBudget(id);
    } catch (error) {
      return this.handleError(error);
    }
  }

  private handleError(error: any): any {
    console.error(error);
    return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Internal Server Error' };
  }
}
