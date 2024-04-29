import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user-dto';
import { CreateAccountDto } from 'src/accounts/dto/create-account.dto';
import { Account } from 'src/accounts/entities/account.entity';
import { UpdateAccountDto } from './dto/update-account-dto';

@Controller('users')
export class UsersController {
  accountService: any;
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() payload: CreateUserDto): Promise<User> {
    try {
      const newUser = await this.userService.createUser(payload);
      return newUser;
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    try {
      const users = await this.userService.getAllusers();
      return users;
    } catch (error) {
      throw new HttpException(
        this.handleError(error),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User | null> {
    try {
      return await this.userService.getUserById(id);
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUser: Partial<User>,
  ): Promise<User | null> {
    try {
      return await this.userService.updateUser(id, updateUser);
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<any> {
    try {
      return await this.userService.deleteUser(id);
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

  @Get(':userId/accounts')
  async getUserAccounts(@Param('userId') userId: string): Promise<Account[]> {
    try {
      return await this.userService.getUserAccounts(userId);
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Post(':userId/accounts')
  async createAccount(
    @Param('userId') userId: string,
    @Body() createAccountDto: CreateAccountDto,
  ): Promise<Account> {
    try {
      const newAccount = await this.userService.createUserAccount(
        userId,
        createAccountDto,
      );
      return newAccount;
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Put(':userId/accounts/:accountId')
  async updateAccount(
    @Param('userId') userId: string,
    @Param('accountId') accountId: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ): Promise<Account | null> {
    try {
      return await this.userService.editUserAccount(
        userId,
        accountId,
        updateAccountDto,
      );
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Delete(':userId/accounts/:accountId')
  async deleteAccount(
    @Param('userId') userId: string,
    @Param('accountId') accountId: string,
  ): Promise<any> {
    try {
      return await this.userService.deleteAccount(userId, accountId);
    } catch (error) {
      return this.handleError(error);
    }
  }
}
