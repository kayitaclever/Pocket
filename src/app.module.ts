import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Account } from './accounts/entities/account.entity';
import { Category } from './categories/entities/category.entity';
import { Budget } from './budgets /entities/budget.entity';
import { Transactions } from './transactions /entities/transactions.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './shared/app.config';
import dbConfig from './shared/db.config';
import { AccountModule } from './accounts/account.module';
import { BudgetModule } from './budgets /budget.module';
import { CategoryModule } from './categories/categories.module';
import { UserModule } from './users/users.module';
import { TransactionsModule } from './transactions /transactions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, dbConfig],
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService?.get('DB_HOST'),
        port: configService?.get('DB_PORT'),
        username: configService?.get('DB_USERNAME'),
        password: configService?.get('DB_PASSWORD'),
        database: configService?.get('DB_DATABASE'),
        entities: [User, Account, Category, Budget, Transactions],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    AccountModule,
    BudgetModule,
    CategoryModule,
    UserModule,
    TransactionsModule,
  ],
  // controllers: [AppController],
  // providers: [UserService],
})
export class AppModule {}
