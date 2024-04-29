import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
  Get,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterRequestDto } from './dtos/register-request.dto';
import { Public } from './decorators/public.decorator';
import { JwtGuard } from './guards/jwt.guards';
import { User } from 'src/users/entities/user.entity';

import { GetUser } from './decorators/get-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  @ApiResponse({ status: 201, description: 'User created successfully' })
  async register(
    @Body() registerDto: RegisterRequestDto,
    @Res() res,
  ): Promise<any> {
    try {
      const accessToken = await this.authService.register(registerDto);
      return res.status(HttpStatus.CREATED).json(accessToken);
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: error.message });
    }
  }

  @Public()
  @Post('login')
  @ApiResponse({ status: 200, description: 'Login successful' })
  async login(@Body() user: any, @Res() res): Promise<any> {
    try {
      const accessToken = await this.authService.login(user);
      return res.status(HttpStatus.OK).json(accessToken);
    } catch (error) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: error.message });
    }
  }

  @UseGuards(JwtGuard)
  @Get('profile')
  getProfile(@GetUser() user: User) {
    return user;
  }
}
