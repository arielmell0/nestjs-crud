import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';

export type User = {
  id: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(username: string, password: string): Promise<UserEntity> {
    const user = this.userRepository.create({ username, password });
    return this.userRepository.save(user);
  }
  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }
}
