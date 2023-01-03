import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser() {
    return { name: 'anik', email: 'a@a.com' };
  }
}
