import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  createPoll(
    @Body() { username, password }: { username: string; password: string },
  ) {
    return this.userService.createUser(username, password);
  }

  @Get(':username')
  getAllPolls(@Param('username') username: string) {
    return this.userService.findOne(username);
  }
}
