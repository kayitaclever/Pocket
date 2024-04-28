import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transactions } from './entities/transactions.entity';
import { CreateTransactionDto } from './dto/create-transactions.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transactions)
    private readonly transactionRepository: Repository<Transactions>,
  ) {}

  async createTransaction(
    payload: CreateTransactionDto,
  ): Promise<Transactions> {
    try {
      const transaction = new Transactions();
      transaction.amount = payload.amount;
      transaction.date = payload.date;
      await this.transactionRepository.save(transaction);
      return transaction;
    } catch (error) {
      throw error;
    }
  }

  async getAllTransactions(): Promise<Transactions[]> {
    return await this.transactionRepository.find();
  }

  async getTransactionById(id: string): Promise<Transactions | null> {
    return await this.transactionRepository.findOne({ where: { id } });
  }

  async updateTransactiont(
    id: string,
    updateData: Partial<Transactions>,
  ): Promise<Transactions | null> {
    await this.transactionRepository.update({ id }, updateData);
    return await this.getTransactionById(id);
  }

  async deleteTransaction(id: string): Promise<any> {
    const deleteResponse = await this.transactionRepository.delete({
      id,
    });
    if (deleteResponse.affected > 0) {
      return { message: 'Your Transaction was deleted successfully' };
    } else {
      return null;
    }
  }
}
