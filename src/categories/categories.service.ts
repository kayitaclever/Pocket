import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../categories/entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category) private readonly categoryRepository: Repository<Category>) {}

  async createCategory(category: Category): Promise<Category> {
    const newCategory = await this.categoryRepository.save(category);
    return newCategory;
  }

  async getCategoryById(id: string): Promise<Category | null> {
    const numericId = parseInt(id, 10); 

    return await this.categoryRepository.findOne({ where: { id: numericId } });
  }

  async getCategories(): Promise<Category[]> {
    return await this.categoryRepository.find(); 
  }

  async updateCategory(id: string, updateData: Partial<Category>): Promise<Category | null> {

    const numericId = parseInt(id, 10);
    await this.categoryRepository.update({ id: numericId }, updateData); 
    return await this.getCategoryById(id);

  }

  async deleteCategory(id: string): Promise<any> {
    const numericId = parseInt(id, 10);
    const deleteResponse = await this.categoryRepository.delete({ id: numericId }); 
    if (deleteResponse.affected > 0) {
      return { message: 'Your Category was deleted successfully' };
    } else {
      return null;
    }
  }
}
