import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty()
  readonly title: string;
  readonly description: string;
  readonly duration: number;
}
