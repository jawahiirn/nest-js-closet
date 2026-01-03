import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CoffeeRatingService } from './coffee-rating.service';
import { CoffeesModule } from '../coffees/coffees.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    CoffeesModule,
    DatabaseModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: 'postgres',
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
