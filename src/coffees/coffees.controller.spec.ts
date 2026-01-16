import { Test, TestingModule } from '@nestjs/testing';
import { CoffeesController } from './coffees.controller';
<<<<<<< HEAD
import { CoffeesService } from './coffees.service';
=======
>>>>>>> 9ba08cacd6e291edf891b54657a1b61264eb2935

describe('CoffeesController', () => {
  let controller: CoffeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeesController],
<<<<<<< HEAD
      providers: [CoffeesService],
=======
>>>>>>> 9ba08cacd6e291edf891b54657a1b61264eb2935
    }).compile();

    controller = module.get<CoffeesController>(CoffeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
