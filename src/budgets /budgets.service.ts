import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Budget } from './entities/budget.entity';
import { CreateBudgetDto } from './dto/create-budget.dto';

@Injectable()
export class BudgetService {
  getAllbudgets() {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Budget)
    private readonly budgetRepository: Repository<Budget>,
  ) {}

  async createBudget(payload: CreateBudgetDto): Promise<Budget> {
    try {
      const budget = new Budget();
      budget.name = payload.name;
      budget.amount = payload.amount;

      await this.budgetRepository.save(budget);
      return budget;
    } catch (error) {
      throw error;
    }
  }

  async getBudgetById(id: string): Promise<Budget | null> {
    return await this.budgetRepository.findOne({ where: { id } });
  }

  async updateBudget(
    id: string,
    updateData: Partial<Budget>,
  ): Promise<Budget | null> {
    await this.budgetRepository.update({ id }, updateData);
    return await this.getBudgetById(id);
  }

  async deleteBudget(id: string): Promise<any> {
    const deleteResponse = await this.budgetRepository.delete({
      id,
    });
    if (deleteResponse.affected > 0) {
      return { message: 'Your Budget was deleted successfully' };
    } else {
      return null;
    }
  }
}
