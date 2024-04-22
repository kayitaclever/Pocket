import { Controller, Get, Post, Put, Delete, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { CategoryService } from './categories.service';
import { Category } from './entities/category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createCategory(@Body() category: Category): Promise<Category | any> {
    try {
      const newCategory = await this.categoryService.createCategory(category);
      return newCategory;
    } catch (error) {
      return this.handleError(error);
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
  async updateCategory(@Param('id') id: string, @Body() updateData: Partial<Category>): Promise<Category | null> {
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
    return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Internal Server Error' };
  }
}
