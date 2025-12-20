import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffeee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffeee[] = [
    {
      id: 1,
      name: 'Latte',
      brand: 'Brew vats',
      flavors: ['choco', 'vaniall'],
    },
  ];

  findAll() {
    return this.coffees;
  }
  findOne(id: number) {
    const coffee = this.coffees.find((c) => c.id === +id);
    if (!coffee) {
      throw new NotFoundException('Coffee not found');
    }
    return coffee;
  }
  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return this.coffees;
  }
  update(id: number, updateCoffeeDto: any) {
    const existingCoffee = this.coffees.find((c) => c.id === +id);
    if (existingCoffee) {
      // update
    }
  }
  remove(id: number) {
    const coffeeIndex = this.coffees.findIndex((c) => c.id === +id);
    this.coffees.splice(coffeeIndex, 1);
  }
}
