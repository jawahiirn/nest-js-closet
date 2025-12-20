import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() pagination) {
    const {limit, offset} = pagination;
    return `This action returns all coffees from ${limit} with ${offset}`
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} coffee.`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} coffee.`;
  }
}
