import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './users/users.service';
import { User } from './users/entities/user.entity';
import { Account } from './accounts/entities/account.entity';
import { Category } from './categories/entities/category.entity';
import { Budget } from './budgets /entities/budget.entity';
import { Transaction } from "./transactions /entities/transactions.entity";
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService?.get('DB_HOST') , 
        port: configService?.get('DB_PORT') ,         
        username: configService?.get('DB_USERNAME') , 
        password: configService?.get('DB_PASSWORD') , 
        database: configService?.get('DB_DATABASE') , 
        entities: [User, Account, Category, Budget, Transaction],
        synchronize: false, 
      }),
      inject: [ConfigService], 
    }),
  ],
  controllers: [AppController],
  providers: [UserService],
})
export class AppModule {}
