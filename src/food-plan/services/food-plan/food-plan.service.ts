import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DailyPlan } from 'src/food-plan/entites/DailyPlan';
import { FoodPlan } from 'src/food-plan/entites/FoodPlan';
import { Repository } from 'typeorm';

@Injectable()
export class FoodPlanService {
  constructor(
    @InjectRepository(FoodPlan)
    private foodPlanRepository: Repository<FoodPlan>,
    @InjectRepository(DailyPlan)
    private dailyPlanRepository: Repository<DailyPlan>,
  ) {}

  async findAll() {
    const foodPlanList = await this.foodPlanRepository.find();
    return foodPlanList;
  }

  async findByUser(userId) {
    const foodPlanList = await this.foodPlanRepository.find({
      where: { user: userId },
    });
    return foodPlanList;
  }

  async findById(foodPlanId) {
    const foodPlanList = await this.foodPlanRepository.find({
      where: { foodPlanId: foodPlanId },
    });
    return foodPlanList;
  }

  async findAllDailyPlansByIdFoodPlan(foodPlanId) {
    const dailyPlanList = await this.dailyPlanRepository.find({
      relations: { meals: true },
      where: { foodPlan: foodPlanId },
    });
    return dailyPlanList;
  }
}
