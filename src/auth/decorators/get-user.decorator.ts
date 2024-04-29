import { Injectable } from '@nestjs/common';
import { SetMetadata } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';

export const USER_KEY = 'user';

@Injectable()
export class GetUser {
  static get(req: Request): User | undefined {
    return SetMetadata(USER_KEY, req);
  }
}
