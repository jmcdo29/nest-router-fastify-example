import { Controller, Get } from '@nestjs/common';

@Controller()
export class DogController {
  @Get()
  getDog() {
    return 'dog';
  }
}
