import { Controller, Get, Post, Put, Delete, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { AccountService } from './accounts.service';
import { Account } from './entities/account.entity';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async createAccount(@Body() account: Account): Promise<Account | any> {
    try {
      const newAccount = await this.accountService.createAccount(account);
      return newAccount;
    } catch (error) {
      return this.handleError(error);
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
  async updateAccount(@Param('id') id: string, @Body() updateData: Partial<Account>): Promise<Account | null> {
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
    return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Internal Server Error' };
  }
}
