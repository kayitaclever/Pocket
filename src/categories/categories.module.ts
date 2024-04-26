import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './categories.controller';
import { Category } from './entities/category.entity';
import { CategoryService } from './categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  exports: [CategoryModule],
  providers: [CategoryService],
  controllers: [CategoriesController],
})
export class CategoryModule {}
