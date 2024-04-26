import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'This is a movie CRUD api, you can check the docs in /api';
  }
}
