import { Controller, Get } from '@nestjs/common';

@Controller()
export class NinjaController {
  @Get()
  getNinja() {
    return 'ninja';
  }
}
