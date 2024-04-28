import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { Account } from 'src/accounts/entities/account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Account])],
  exports: [UserModule],
  providers: [UserService],
  controllers: [UsersController],
})
export class UserModule {}
