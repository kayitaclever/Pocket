import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './users/users.service';
import { User } from './users/entities/user.entity';
import { Account } from './accounts/entities/account.entity';
import { Category } from './categories/entities/category.entity';
import { Budget } from './budgets /entities/budget.entity';
import { Transaction } from "./transactions /entities/transactions.entity";


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost', 
      port: 3306, 
      username: 'kayitaclever', 
      password: 'Tumwesige19', 
      database: 'cashflow', 
      entities: [User,Account,Category,Budget,Transaction],
      synchronize: false, 
    }),
    
  ],
  controllers: [AppController], 
  providers: [UserService], 
})
export class AppModule {}
