import { Controller, Get, Post, Put, Delete, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: User): Promise<User | any> {
    try {
      const newUser = await this.userService.createUser(user);
      return newUser;
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User | null> {
    try {
      return await this.userService.getUserById(id);
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() updateUser: Partial<User>): Promise<User | null> {
    try {
      return await this.userService.updateUser(id, updateUser);
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<any> {
    try {
      return await this.userService.deleteUser(id);
    } catch (error) {
      return this.handleError(error);
    }
  }

  private handleError(error: any): any {
    
    console.error(error);
    return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Internal Server Error' };
  }
}
