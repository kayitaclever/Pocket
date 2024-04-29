import { Injectable } from '@nestjs/common';
import { SetMetadata } from '@nestjs/common';

export const PUBLIC_KEY = 'public';

@Injectable()
export class Public {
  static forRoutes(...controllers: any[]): any {
    return (target: any) => {
      SetMetadata(PUBLIC_KEY, true, target);
    };
  }
}
