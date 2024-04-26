import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from '../accounts/entities/account.entity';
import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}

  async createAccount(payload: CreateAccountDto): Promise<Account> {
    try {
      const account = new Account();
      account.name = payload.name;
      account.type = payload.type;
      account.balance = payload.balance;
      await this.accountRepository.save(account);
      return account;
    } catch (error) {
      throw error;
    }
  }
  async getAllAccounts(): Promise<Account[]> {
    return await this.accountRepository.find();
  }
  async getAccountById(id: string): Promise<Account | null> {
    return await this.accountRepository.findOne({ where: { id } });
  }

  async updateAccount(
    id: string,
    updateData: Partial<Account>,
  ): Promise<Account | null> {
    await this.accountRepository.update({ id }, updateData);
    return await this.getAccountById(id);
  }

  async deleteAccount(id: string): Promise<any> {
    const deleteResponse = await this.accountRepository.delete({
      id,
    });
    if (deleteResponse.affected > 0) {
      return { message: 'Your Account was deleted successfully' };
    } else {
      return null;
    }
  }
}
