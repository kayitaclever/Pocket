import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from '../accounts/entities/account.entity';

import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  budgets: any;
  categories: any;
  transactions: any;
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

  //   createBudget(name: string, amount: number): Budget {
  //     const newBudget = new Budget();
  //     newBudget.name = name;
  //     newBudget.amount = amount;
  //     newBudget.account = this;
  //     this.budgets.push(newBudget);
  //     return newBudget;
  //   }

  //   // Function to create a new Category associated with this account
  //   createCategory(name: string): Category {
  //     const newCategory = new Category();
  //     newCategory.name = name;
  //     newCategory.accounts = this; // Set the account reference
  //     this.categories.push(newCategory); // Add to categories list
  //     return newCategory;
  //   }

  //   // Function to create a new Transaction associated with this account
  //   createTransaction(
  //     category: Category,
  //     amount: number,
  //     description?: string,
  //   ): Transaction {
  //     const newTransaction = new Transaction();
  //     newTransaction.category = category;
  //     newTransaction.amount = amount;
  //     newTransaction.description = description;
  //     newTransaction.account = this; // Set the account reference
  //     this.transactions.push(newTransaction); // Add to transactions list
  //     return newTransaction;
  //   }
  // }
  // function createBudget(name: void, string: any, amount: any, number: any) {
  //   throw new Error('Function not implemented.');
  // }
}
