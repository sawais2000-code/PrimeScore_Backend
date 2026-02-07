import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('me')
  getProfile() {
    return { name: 'User', role: 'USER' };
  }
}
