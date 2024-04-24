import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Analysis } from './entities/analytics.entity';
import { Transaction } from "../transactions /entities/transactions.entity";
import { Budget } from '../budgets /entities/budget.entity';
import { User } from 'src/users/entities/user.entity';

  @Injectable()
  export class AnalysisService {
      analysisHasUserRelationship: any;
    constructor(
      @InjectRepository(Analysis)
      private readonly analysisRepository: Repository<Analysis>,
      @InjectRepository(Transaction)
      private readonly transactionRepository: Repository<Transaction>,
      @InjectRepository(User) 
      private readonly userRepository?: Repository<User>,
    ) {}
  
    // async calculateMonthlySpending(userId: number): Promise<Analysis | undefined> {
    //     const transactions = await this.getTransactionByMonth(userId);
    //     const totalSpending = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
      
    //     const analysis = new Analysis();
    //     analysis.transactions = {
    //       totalSpending,
    //     };
    
    //     return analysis;
    //   }
      
    
      getBudgetForMonth(userId: number) {
          throw new Error('Method not implemented.');
      }
  
    private async getTransactionByMonth(userId: number, month?: number, year?: number): Promise<Transaction[]> {
      const queryBuilder = this.transactionRepository.createQueryBuilder('transaction');
  
      queryBuilder.where('transaction.userId = :userId', { userId });
  
      if (month !== undefined && year !== undefined) {
        queryBuilder.andWhere('MONTH(transaction.date) = :month', { month });
        queryBuilder.andWhere('YEAR(transaction.date) = :year', { year });
      }
  
      return await queryBuilder.getMany();
    }
  
    private getCategoryBreakdown(transactions: Transaction[]): { [category: string]: number } {
      const breakdown = {};
      transactions.forEach((transaction) => {
        breakdown[transaction.category] = (breakdown[transaction.category] || 0) + transaction.amount;
      });
      return breakdown;
    }
  
    
  }
  
