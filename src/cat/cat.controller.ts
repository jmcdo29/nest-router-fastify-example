import { Controller, Get } from '@nestjs/common';

@Controller()
export class CatController {
  @Get()
  getCat() {
    return 'cat';
  }
}
