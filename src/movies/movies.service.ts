import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieEntity } from './entities/movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<MovieEntity> {
    const movie = this.movieRepository.create(createMovieDto);
    return this.movieRepository.save(movie);
  }

  async findAll(): Promise<MovieEntity[]> {
    return this.movieRepository.find();
  }

  findOne(id: number) {
    return this.movieRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateMovieDto: UpdateMovieDto,
  ): Promise<MovieEntity | undefined> {
    const movie = await this.movieRepository.findOne({ where: { id } });
    if (movie) {
      Object.assign(movie, updateMovieDto);
      return this.movieRepository.save(movie);
    }
    throw new NotFoundException(`Movie with ID ${id} not found`);
  }

  async remove(id: number): Promise<void> {
    const movieToRemove = await this.movieRepository.findOne({ where: { id } });
    if (!movieToRemove) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    await this.movieRepository.remove(movieToRemove);
  }
}
