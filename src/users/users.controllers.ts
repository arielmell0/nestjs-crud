import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @ApiOperation({ summary: 'create a new user in the system' })
  @Post()
  createPoll(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(
      createUserDto.username,
      createUserDto.password,
    );
  }
}
