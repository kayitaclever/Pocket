import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {  TransactionsService } from "./transactions.service";
import { TransactionsController } from "./transactions.controller";
import { Transactions } from "./entities/transactions.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Transactions])],
    exports: [TransactionsModule],
    providers: [TransactionsService],
    controllers: [TransactionsController]
})
export class TransactionsModule {}