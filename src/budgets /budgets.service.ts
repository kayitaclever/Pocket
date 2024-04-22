import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Budget } from './entities/budget.entity';

@Injectable()
export class BudgetService {
  constructor(@InjectRepository(Budget) private readonly budgetRepository: Repository<Budget>) {}

  async createBudget(budget: Budget): Promise<Budget> {
    const newBudget = await this.budgetRepository.save(budget);
    return newBudget;
  }

  async getBudgetById(id: string): Promise<Budget | null> {
    const numericId = parseInt(id, 10); 

    return await this.budgetRepository.findOne({ where: { id: numericId } });
  }


  async getBudgetsByUserId(userId: string): Promise<Budget[] | any> {
    
  }

  async updateBudget(id: string, updateData: Partial<Budget>): Promise<Budget | null> {
    const numericId = parseInt(id, 10);
    await this.budgetRepository.update({ id: numericId }, updateData); 
    return await this.getBudgetById(id);

  }

  async deleteBudget(id: string): Promise<any> {

    const numericId = parseInt(id, 10);
    const deleteResponse = await this.budgetRepository.delete({ id: numericId }); 
    if (deleteResponse.affected > 0) {
      return { message: 'Your Budget was deleted successfully' };
    } else {
      return null;
    }
  }
}
