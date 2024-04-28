import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { CategoryService } from './categories.service';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
  budgetService: any;
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createCategories(
    @Body() payload: CreateCategoryDto,
  ): Promise<Category> {
    try {
      const newBudget = await this.budgetService.createAccount(payload);
      return newBudget;
    } catch (error) {
      return this.handleError(error);
    }
  }
  @Get()
  async getAllCategories(): Promise<Category[]> {
    try {
      const categories = await this.categoryService.getAllCategories();
      return categories;
    } catch (error) {
      throw new HttpException(
        this.handleError(error),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Get(':id')
  async getCategoryById(@Param('id') id: string): Promise<Category | null> {
    try {
      return await this.categoryService.getCategoryById(id);
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Put(':id')
  async updateCategory(
    @Param('id') id: string,
    @Body() updateData: Partial<Category>,
  ): Promise<Category | null> {
    try {
      return await this.categoryService.updateCategory(id, updateData);
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: string): Promise<any> {
    try {
      return await this.categoryService.deleteCategory(id);
    } catch (error) {
      return this.handleError(error);
    }
  }

  private handleError(error: any): any {
    console.error(error);
    return {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Internal Server Error',
    };
  }
}
