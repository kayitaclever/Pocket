import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User, userSchema } from './models/user.model';
import { Account, accountSchema } from './models/account.model';
import { Transaction, transactionSchema } from './models/transaction.model';
import { Category, categorySchema } from './models/category.model';
import { Budget, budgetSchema } from './models/budget.model'; 
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://kayitaramirwaaclever:BXZb0KDQ9JrQWwKn@cluster0.3sutze3.mongodb.net/'), 
    MongooseModule.forFeature([
      { name: User.name, schema: userSchema },
      { name: Account.name, schema: accountSchema },
      { name: Transaction.name, schema: transactionSchema },
      { name: Category.name, schema: categorySchema },
      { name: Budget.name, schema: budgetSchema }, 
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
