import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Transactions } from './entities/transactions.entity';
import { CreateTransactionDto } from './dto/create-transactions.dto';

@Controller('transactions')
export class TransactionsController {
  accountService: any;
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async createTransactions(
    @Body() payload: CreateTransactionDto,
  ): Promise<Transactions> {
    try {
      const newTransaction =
        await this.transactionsService.createTransaction(payload);
      return newTransaction;
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Get()
  async getAllTransactions(): Promise<Transactions[]> {
    try {
      const transactions = await this.transactionsService.getAllTransactions();
      return transactions;
    } catch (error) {
      throw new HttpException(
        this.handleError(error),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Get(':id')
  async getTransactionById(
    @Param('id') id: string,
  ): Promise<Transactions | null> {
    try {
      return await this.transactionsService.getTransactionById(id);
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Get('/accounts/:accountId/transactions')
  async getTransactionsByAccountId(
    @Param('accountId') accountId: string,
  ): Promise<Transactions[] | any> {
    try {
      return await this.transactionsService.getTransactionById(accountId);
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Put(':id')
  async updateTransaction(
    @Param('id') id: string,
    @Body() updateData: Partial<Transactions>,
  ): Promise<Transactions | null> {
    try {
      return await this.transactionsService.updateTransactiont(id, updateData);
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Delete(':id')
  async deleteTransaction(@Param('id') id: string): Promise<any> {
    try {
      return await this.transactionsService.deleteTransaction(id);
    } catch (error) {
      return this.handleError(error);
    }
  }

  private handleError(error: any): any {
    console.error(error);
    return {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Internal Server Error',
    };
  }
}
