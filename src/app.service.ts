/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users/entities/user.entity';
import { Account } from './accounts/entities/account.entity';
import { Transactions } from './transactions /entities/transactions.entity';

import { Category } from './categories/entities/category.entity';
import { Budget } from './budgets /entities/budget.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AppService {
  getBudgetById() {
    throw new Error('Method not implemented.');
  }
  updateUser(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _id: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _updateUser: Partial<User>,
  ): User | PromiseLike<User> {
    throw new Error('Method not implemented.');
  }
  updateCategory(
    _id: string,
    _updateData: Partial<Category>,
  ): Category | PromiseLike<Category> {
    throw new Error('Method not implemented.');
  }
  deleteCategory(id: string): any {
    throw new Error('Method not implemented.');
  }
  getCategoryById(id: string): Category | PromiseLike<Category> {
    throw new Error('Method not implemented.');
  }
  createCategory(category: Category): Category | PromiseLike<Category> {
    throw new Error('Method not implemented.');
  }
  deleteUser(id: string): any {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Account.name) private readonly accountModel: Model<Account>,
    @InjectModel(Transactions.name)
    private readonly transactionModel: Model<Transactions>,
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
    @InjectModel(Budget.name) private readonly budgetModel: Model<Budget>,
  ) {}

  async createUser(user: User): Promise<User> {
    if (!user.id) {
      user.id = parseInt(uuidv4(), 10);
    }

    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async getUserById(id: string): Promise<User | null> {
    return await this.userModel.findById(id);
  }

  async createAccount(account: Account): Promise<Account> {
    const newAccount = new this.accountModel(account);
    return await newAccount.save();
  }

  async getAccountById(id: string): Promise<Account | null> {
    return await this.accountModel.findById(id);
  }

  async updateAccount(
    id: string,
    updateData: Partial<Account>,
  ): Promise<Account | null> {
    return await this.accountModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
  }

  async deleteAccount(id: string): Promise<any> {
    return await this.accountModel.findByIdAndDelete(id);
  }

  async createTransaction(transaction: Transactions): Promise<Transactions> {
    const newTransaction = new this.transactionModel(transaction);
    return await newTransaction.save();
  }

  async getTransactionById(id: string): Promise<Transactions | null> {
    return await this.transactionModel.findById(id);
  }

  async updateTransaction(
    id: string,
    updateData: Partial<Transactions>,
  ): Promise<Transactions | null> {
    return await this.transactionModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
  }

  async deleteTransaction(id: string): Promise<any> {
    return await this.transactionModel.findByIdAndDelete(id);
  }
}
