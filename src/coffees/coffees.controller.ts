import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'YO COFFEES IN COFFEES';
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This is #${id} NO. coffee found.`;
  }
  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body('name') name: string) {
    return name;
  }
}
