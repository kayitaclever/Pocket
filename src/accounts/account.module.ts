import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountService } from './accounts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  exports: [AccountModule],
  providers: [AccountService],
  controllers: [AccountsController],
})
export class AccountModule {}
