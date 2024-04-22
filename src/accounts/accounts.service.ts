import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Account } from '../accounts/entities/account.entity'; 

@Injectable()
export class AccountService {
  constructor(@InjectRepository(Account) private readonly accountRepository: Repository<Account>) {}

  async createAccount(account: Account): Promise<Account> {
    const newAccount = await this.accountRepository.save(account);
    return newAccount;
  }

  async getAccountById(id: string): Promise<Account | null> {
    const numericId = parseInt(id, 10); 
    return await this.accountRepository.findOne({ where: { id: numericId } });
  }
  

  async updateAccount(id: string, updateData: Partial<Account>): Promise<Account | null> {
    const numericId = parseInt(id, 10);
    await this.accountRepository.update({ id: numericId }, updateData); 
    return await this.getAccountById(id);
  }
  
  async deleteAccount(id: string): Promise<any> {
    const numericId = parseInt(id, 10);
    const deleteResponse = await this.accountRepository.delete({ id: numericId }); 
    if (deleteResponse.affected > 0) {
      return { message: 'Your Account was deleted successfully' };
    } else {
      return null;
    }
  }
  
}

