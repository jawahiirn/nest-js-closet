<<<<<<< HEAD
export class CreateCoffeeDto {}
=======
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'Coffee name' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'Coffee brand name' })
  @IsString()
  readonly brand: string;

  @ApiProperty({ description: 'Flavor of coffee' })
  @IsString({ each: true })
  readonly flavors: string[];
}
>>>>>>> 9ba08cacd6e291edf891b54657a1b61264eb2935
