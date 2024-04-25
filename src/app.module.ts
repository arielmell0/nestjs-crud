import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/users.entity';
@Module({
  imports: [UsersModule, MoviesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
