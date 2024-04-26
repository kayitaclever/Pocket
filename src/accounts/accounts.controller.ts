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
import { AccountService } from './accounts.service';
import { Account } from './entities/account.entity';
import { CreateAccountDto } from './dto/create-account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async createAccount(@Body() payload: CreateAccountDto): Promise<Account> {
    try {
      const newAccount = await this.accountService.createAccount(payload);
      return newAccount;
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Get()
  async getAllAccounts(): Promise<Account[]> {
    try {
      const accounts = await this.accountService.getAllAccounts();
      return accounts;
    } catch (error) {
      throw new HttpException(
        this.handleError(error),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async getAccountById(@Param('id') id: string): Promise<Account | null> {
    try {
      return await this.accountService.getAccountById(id);
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Put(':id')
  async updateAccount(
    @Param('id') id: string,
    @Body() updateData: Partial<Account>,
  ): Promise<Account | null> {
    try {
      return await this.accountService.updateAccount(id, updateData);
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Delete(':id')
  async deleteAccount(@Param('id') id: string): Promise<any> {
    try {
      return await this.accountService.deleteAccount(id);
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
