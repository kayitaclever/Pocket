// import {
//   Controller,
//   Get,
//   Post,
//   Put,
//   Delete,
//   Body,
//   Param,
// } from '@nestjs/common';
// import { AppService } from './app.service';
// import { User } from './users/entities/user.entity';
// import { Account } from './accounts/entities/account.entity';
// import { Transactions } from './transactions /entities/transactions.entity';
// import { Category } from './categories/entities/category.entity';
// import { Budget } from './budgets /entities/budget.entity';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}
//   @Post('/users')
//   async createUser(@Body() user: User): Promise<User | any> {
//     try {
//       const newUser = await this.appService.createUser(user);
//       return newUser;
//     } catch (error) {
//       console.log('water', error);
//       return this.handleError(error);
//     }
//   }

//   @Get('/users/:id')
//   async getUserById(@Param('id') id: string): Promise<User | null> {
//     try {
//       return await this.appService.getUserById(id);
//     } catch (error) {
//       return this.handleError(error);
//     }
//   }

//   @Put('/users/:id')
//   async updateUser(
//     @Param('id') id: string,
//     @Body() updateUser: Partial<User>,
//   ): Promise<User | null> {
//     try {
//       return await this.appService.updateUser(id, updateUser);
//     } catch (error) {
//       return this.handleError(error);
//     }
//   }

//   @Delete('/users/:id')
//   async deleteUser(@Param('id') id: string): Promise<any> {
//     try {
//       return await this.appService.deleteUser(id);
//     } catch (error) {
//       return this.handleError(error);
//     }
//   }

//   @Post('/accounts')
//   async createAccount(@Body() account: Account): Promise<Account | any> {
//     try {
//       const newAccount = await this.appService.createAccount(account);
//       return newAccount;
//     } catch (error) {
//       return this.handleError(error);
//     }
//   }

//   @Get('/accounts/:id')
//   async getAccountById(@Param('id') id: string): Promise<Account | null> {
//     try {
//       return await this.appService.getAccountById(id);
//     } catch (error) {
//       return this.handleError(error);
//     }
//   }

//   @Put('/accounts/:id')
//   async updateAccount(
//     @Param('id') id: string,
//     @Body() updateData: Partial<Account>,
//   ): Promise<Account | null> {
//     try {
//       return await this.appService.updateAccount(id, updateData);
//     } catch (error) {
//       return this.handleError(error);
//     }
//   }

//   @Delete('/accounts/:id')
//   async deleteAccount(@Param('id') id: string): Promise<any> {
//     try {
//       return await this.appService.deleteAccount(id);
//     } catch (error) {
//       return this.handleError(error);
//     }
//   }

//   @Post('/transactions')
//   async createTransaction(
//     @Body() transaction: Transactions,
//   ): Promise<Transactions | any> {
//     try {
//       const newTransaction =
//         await this.appService.createTransaction(transaction);
//       return newTransaction;
//     } catch (error) {
//       return this.handleError(error);
//     }
//   }

//   @Get('/transactions/:id')
//   async getTransactionById(
//     @Param('id') id: string,
//   ): Promise<Transactions | null> {
//     try {
//       return await this.appService.getTransactionById(id);
//     } catch (error) {
//       return this.handleError(error);
//     }
//   }

//   @Get('/accounts/:accountId/transactions')
//   async getTransactionsByAccountId(
//     @Param('accountId') accountId: string,
//   ): Promise<Transactions[] | any> {
//     try {
//       return await this.appService.getTransactionById(accountId);
//     } catch (error) {
//       return this.handleError(error);
//     }
//   }

//   @Put('/transactions/:id')
//   async updateTransaction(
//     @Param('id') id: string,
//     @Body() updateData: Partial<Transactions>,
//   ): Promise<Transactions | any> {
//     try {
//       return await this.appService.updateTransaction(id, updateData);
//     } catch (error) {
//       return this.handleError(error);
//     }
//   }

//   @Delete('/transactions/:id')
//   async deleteTransaction(@Param('id') id: string): Promise<any> {
//     try {
//       return await this.appService.deleteTransaction(id);
//     } catch (error) {
//       return this.handleError(error);
//     }
//   }

//   @Post('/categories')
//   async createCategory(@Body() category: Category): Promise<Category | any> {
//     try {
//       const newCategory = await this.appService.createCategory(category);
//       return newCategory;
//     } catch (error) {
//       return this.handleError(error);
//     }
//   }

//   @Get('/categories/:id')
//   async getCategoryById(@Param('id') id: string): Promise<Category | null> {
//     try {
//       return await this.appService.getCategoryById(id);
//     } catch (error) {
//       return this.handleError(error);
//     }
//   }

//   @Put('/categories/:id')
//   async updateCategory(
//     @Param('id') id: string,
//     @Body() updateData: Partial<Category>,
//   ): Promise<Category | null> {
//     try {
//       return await this.appService.updateCategory(id, updateData);
//     } catch (error) {
//       return this.handleError(error);
//     }
//   }

//   @Delete('/categories/:id')
//   async deleteCategory(@Param('id') id: string): Promise<any> {
//     try {
//       return await this.appService.deleteCategory(id);
//     } catch (error) {
//       return this.handleError(error);
//     }
//   }
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   handleError(_error: any): any {
//     throw new Error('Method not implemented.');
//   }

//   @Post('/budgets')
//   async createBudget(): Promise<Budget | any> {}
// }
