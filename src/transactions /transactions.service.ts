import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transactions } from './entities/transactions.entity';
import { Category } from '../categories/entities/category.entity';

@Injectable()
export class TransactionsService {
  constructor(@InjectRepository(Transactions) private readonly transactionRepository: Repository<Transactions>) {}

  async createTransaction(transaction: Transactions): Promise<Transactions> {
    const newTransaction = await this.transactionRepository.save(transaction);
    return newTransaction;
  }

  async getAllTransactions(): Promise<Transactions[]> {
    return await this.transactionRepository.find();
  }

  async getTransactionById(id: string): Promise<Transactions | null> {
    const numericId = parseInt(id, 10); 

    return await this.transactionRepository.findOne({ where: { id: numericId } });
;
  }

  async updateTransaction(id: string, updateData: Partial<Transactions>): Promise<Transactions | null> {
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
