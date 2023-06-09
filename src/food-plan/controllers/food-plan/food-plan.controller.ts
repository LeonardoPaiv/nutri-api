import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { FoodPlanService } from 'src/food-plan/services/food-plan/food-plan.service';

@Controller('food-plan')
export class FoodPlanController {
  constructor(private foodPlanService: FoodPlanService) {}

  @Get('')
  async getAll() {
    const list = await this.foodPlanService.findAll();
    if (list) {
      return list;
    } else {
      throw new HttpException('Food plan not found', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':userId/user')
  async getByUser(@Param('userId') userId: number) {
    const list = await this.foodPlanService.findByUser(userId);
    if (list) {
      return list;
    } else {
      throw new HttpException('Food plan not found', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':foodPlanId')
  async getById(@Param('foodPlanId') foodPlanId: number) {
    const list = await this.foodPlanService.findById(foodPlanId);
    if (list) {
      return list;
    } else {
      throw new HttpException('Food plan not found', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':foodPlanId/daily-plans')
  async getAllDailyPlansByIdFoodPlan(@Param('foodPlanId') foodPlanId: number) {
    const list = await this.foodPlanService.findAllDailyPlansByIdFoodPlan(
      foodPlanId,
    );
    if (list) {
      return list;
    } else {
      throw new HttpException('Food plan not found', HttpStatus.BAD_REQUEST);
    }
  }
}
