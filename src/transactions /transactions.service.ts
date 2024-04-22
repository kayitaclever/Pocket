import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transactions.entity';
import { Category } from '../categories/entities/category.entity';

@Injectable()
export class TransactionService {
  constructor(@InjectRepository(Transaction) private readonly transactionRepository: Repository<Transaction>) {}

  async createTransaction(transaction: Transaction): Promise<Transaction> {
    const newTransaction = await this.transactionRepository.save(transaction);
    return newTransaction;
  }

  async getTransactionById(id: string): Promise<Transaction | null> {
    const numericId = parseInt(id, 10); 

    return await this.transactionRepository.findOne({ where: { id: numericId } });
;
  }

  async updateTransaction(id: string, updateData: Partial<Transaction>): Promise<Transaction | null> {
    const numericId = parseInt(id, 10);
    await this.transactionRepository.update({ id: numericId }, updateData); 
    return await this.getTransactionById(id);

  }

  async deleteTransaction(id: string): Promise<any> {
    const numericId = parseInt(id, 10);
    const deleteResponse = await this.transactionRepository.delete({ id: numericId }); 
    if (deleteResponse.affected > 0) {
      return { message: 'Your Budget was deleted successfully' };
    } else {
      return null;
    }
  }
}
