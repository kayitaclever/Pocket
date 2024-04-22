import { Controller, Get, Post, Put, Delete, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { TransactionService } from './transactions.service';
import { Transaction } from './entities/transactions.entity';


@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async createTransaction(@Body() transaction: Transaction): Promise<Transaction | any> {
    
    try {
        const newTransaction = await this.transactionService.createTransaction(transaction);
        return newTransaction;
      } catch (error) {
        return this.handleError(error);
      }
    }
    
      @Get(':id')
      async getTransactionById(@Param('id') id: string): Promise<Transaction | null> {
        try {
          return await this.transactionService.getTransactionById(id);
        } catch (error) {
          return this.handleError(error);
        }
      }
    
      @Get('/accounts/:accountId/transactions')
      async getTransactionsByAccountId(@Param('accountId') accountId: string): Promise<Transaction[] | any> {
        try {
          return await this.transactionService.getTransactionById(accountId);
        } catch (error) {
          return this.handleError(error);
        }
      }
    
      @Put(':id')
      async updateTransaction(@Param('id') id: string, @Body() updateData: Partial<Transaction>): Promise<Transaction | null> {
        try {
          return await this.transactionService.updateTransaction(id, updateData);
        } catch (error) {
          return this.handleError(error);
        }
      }
    
      @Delete(':id')
      async deleteTransaction(@Param('id') id: string): Promise<any> {
        try {
          return await this.transactionService.deleteTransaction(id);
        } catch (error) {
          return this.handleError(error);
        }
      }
    
      private handleError(error: any): any {
        // Implement proper error handling for database interactions
        console.error(error);
        return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Internal Server Error' };
      }
    }
    