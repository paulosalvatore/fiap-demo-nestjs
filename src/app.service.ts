import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // b
  // c
  getHello(): string {
    return 'Hello World a!';
  }
}
