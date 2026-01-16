<<<<<<< HEAD
import { PartialType } from '@nestjs/mapped-types';
=======
import { PartialType } from '@nestjs/swagger';
>>>>>>> 9ba08cacd6e291edf891b54657a1b61264eb2935
import { CreateCoffeeDto } from './create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
