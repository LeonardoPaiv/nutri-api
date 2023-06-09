import { Test, TestingModule } from '@nestjs/testing';
import { FoodPlanService } from './food-plan.service';

describe('FoodPlanService', () => {
  let service: FoodPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodPlanService],
    }).compile();

    service = module.get<FoodPlanService>(FoodPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
