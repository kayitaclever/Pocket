import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './models/user.model';
import { Account } from './models/account.model';
import { Transaction } from './models/transaction.model';
import { Category } from './models/category.model';
import { Budget } from './models/budget.model';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class AppService {
  getBudgetById(id: string) {
    throw new Error('Method not implemented.');
  }
  updateUser(id: string, updateUser: Partial<User>): User | PromiseLike<User> {
    throw new Error('Method not implemented.');
  }
  updateCategory(id: string, updateData: Partial<Category>): Category | PromiseLike<Category> {
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
    @InjectModel(Transaction.name) private readonly transactionModel: Model<Transaction>,
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
    @InjectModel(Budget.name) private readonly budgetModel: Model<Budget>,
  ) {}

  

  async createUser(user: User): Promise<User> {
    if (!user.id) {
      user.id = uuidv4(); 
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

  async updateAccount(id: string, updateData: Partial<Account>): Promise<Account | null> {
    return await this.accountModel.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deleteAccount(id: string): Promise<any> {
    
    return await this.accountModel.findByIdAndDelete(id);
  }

  

  async createTransaction(transaction: Transaction): Promise<Transaction> {
    const newTransaction = new this.transactionModel(transaction);
    return await newTransaction.save();
  }

  async getTransactionById(id: string): Promise<Transaction | null> {
    return await this.transactionModel.findById(id);
  }

  async updateTransaction(id: string, updateData: Partial<Transaction>): Promise<Transaction | null> {
    return await this.transactionModel.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deleteTransaction(id: string): Promise<any> {
    
    return await this.transactionModel.findByIdAndDelete(id);
  }

  
}
