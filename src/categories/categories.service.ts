import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Category } from '../categories/entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async createCategory(payload: CreateCategoryDto): Promise<Category> {
    try {
      const category = new Category();
      category.name = payload.name;
      category.description = payload.description;
      await this.categoryRepository.save(category);
      return category;
    } catch (error) {
      throw error;
    }
  }

  async getAllCategories(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  async getCategoryById(id: string): Promise<Category | null> {
    return await this.categoryRepository.findOne({ where: { id } });
  }

  async updateCategory(
    id: string,
    updateData: Partial<Category>,
  ): Promise<Category | null> {
    await this.categoryRepository.update({ id }, updateData);
    return await this.getCategoryById(id);
  }

  async deleteCategory(id: string): Promise<any> {
    const deleteResponse = await this.categoryRepository.delete({
      id,
    });
    if (deleteResponse.affected > 0) {
      return { message: 'Your Budget was deleted successfully' };
    } else {
      return null;
    }
  }
}
