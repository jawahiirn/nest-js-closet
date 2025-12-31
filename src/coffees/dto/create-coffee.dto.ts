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
