import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) 
  {}

  async createUser(user: User): Promise<User> {
    const newUser = await this.userRepository.save(user);
    return newUser;
  }
  async getAllusers(): Promise<User[]> {
    return await this.userRepository.find();
  }
  async getUserById(id: string): Promise<User | null> {
    const numericId = parseInt(id, 10); 

    return await this.userRepository.findOne({ where: { id: numericId } });
  }

  async updateUser(id: string, updateUser: Partial<User>): Promise<User | null> {
    const numericId = parseInt(id, 10); 

    await this.userRepository.update({ id: numericId }, updateUser); 
    return await this.getUserById(id);

  }

  async deleteUser(id: string): Promise<any> {
    const numericId = parseInt(id, 10);
    const deleteResponse = await this.userRepository.delete({ id: numericId }); 
    if (deleteResponse.affected > 0) {
      return { message: 'Your Budget was deleted successfully' };
    } else {
      return null;
    }
  }
  
}
