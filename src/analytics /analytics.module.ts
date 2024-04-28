import { Module } from '@nestjs/common';

import { AnalyticsController } from './analytics.controller';
import { AnalyticsService } from './analytics.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Transactions } from 'src/transactions /entities/transactions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transactions])],
  exports: [AnalyticsModule],
  providers: [AnalyticsService],
  controllers: [AnalyticsController],
})
export class AnalyticsModule {}
