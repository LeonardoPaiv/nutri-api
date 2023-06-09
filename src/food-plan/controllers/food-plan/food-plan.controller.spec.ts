import { Test, TestingModule } from '@nestjs/testing';
import { FoodPlanController } from './food-plan.controller';

describe('FoodPlanController', () => {
  let controller: FoodPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodPlanController],
    }).compile();

    controller = module.get<FoodPlanController>(FoodPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
