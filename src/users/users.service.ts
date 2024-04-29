import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { CreateUserDto } from './dto/create-user-dto';
import { Account } from 'src/accounts/entities/account.entity';
import { CreateAccountDto } from 'src/accounts/dto/create-account.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,

    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}

  async createUser(payload: CreateUserDto): Promise<User> {
    try {
      const user = new User();
      user.name = payload.name;
      user.username = payload.username;
      user.email = payload.email;
      await this.userRepository.save(user);
      return user;
    } catch (error) {
      throw error;
    }
  }
  async getAllusers(): Promise<User[]> {
    return await this.userRepository.find();
  }
  async getUserById(id: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async updateUser(
    id: string,
    updateData: Partial<User>,
  ): Promise<User | null> {
    await this.userRepository.update({ id }, updateData);
    return await this.getUserById(id);
  }

  async deleteUser(id: string): Promise<any> {
    const deleteResponse = await this.userRepository.delete({
      id,
    });
    if (deleteResponse.affected > 0) {
      return { message: 'This User was deleted successfully' };
    } else {
      return null;
    }
  }
  // Allow users to create accounts, first find the user by Id, check if the account name wasn't there before and create new account
  async createUserAccount(
    userId: string,
    payload: CreateAccountDto,
  ): Promise<Account> {
    try {
      const user = await this.userRepository.findOne({ where: { id: userId } });
      if (!user) throw new Error('User not found');

      const existingAccount = await this.accountRepository.findOne({
        where: { name: payload.name, user },
      });
      if (existingAccount)
        throw new Error('Account name already exists for this user');

      const account = new Account();
      account.name = payload.name;
      account.type = payload.type;
      account.balance = payload.balance;
      account.user = user;

      await this.accountRepository.save(account);
      return account;
    } catch (error) {
      throw error;
    }
  }
  async getUserAccounts(userId: string): Promise<Account[]> {
    const user = await this.userRepository.findOneOrFail(userId);

    return await this.accountRepository.find({ where: { user } });
  }

  async editUserAccount(
    userId: string,
    accountId: string,
    updateData: Partial<Account>,
  ): Promise<Account | null> {
    try {
      const user = await this.userRepository.findOne({ where: { id: userId } });
      if (!user) {
        throw new Error('User not found');
      }
      const account = await this.accountRepository.findOne({
        where: { id: accountId, user },
      });
      if (!account) {
        throw new Error('Account not found or does not belong to this user');
      }

      if (updateData.name && updateData.name !== account.name) {
        const existingAccount = await this.accountRepository.findOne({
          where: { name: updateData.name, user },
        });
        if (existingAccount) {
          throw new Error('Account name already exists for this user');
        }
      }

      Object.assign(account, updateData);
      await this.accountRepository.save(account);
      return account;
    } catch (error) {
      throw error;
    }
  }
  async deleteAccount(userId: string, accountId: string): Promise<any> {
    const user = await this.userRepository.findOneOrFail(userId);

    const account = await this.accountRepository.findOneOrFail({
      where: { id: accountId, user },
    });

    if (account.user.id !== user.id) {
      throw new ForbiddenException('You can only delete your own accounts');
    }

    await this.accountRepository.delete(account);

    return null;
  }
}
