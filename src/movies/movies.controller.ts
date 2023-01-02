import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entitiy';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  constructor(private readonly MoviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.MoviesService.getAll();
  }

  // serach부분이 Get('/:id')보다 밑에 있으면 NestS는 search를 id로 판단
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `we are searching for a movie with a title with a searching keyword: ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string): Movie {
    return this.MoviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return this.MoviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return this.MoviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    console.log(`This will patch a movie with the id : ${movieId}`);
    return {
      id: movieId,
      ...updateData,
    };
  }
}
