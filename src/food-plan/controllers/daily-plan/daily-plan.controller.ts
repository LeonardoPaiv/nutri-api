import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DailyPlanService } from 'src/food-plan/services/daily-plan/daily-plan.service';

@ApiTags('Daily Plan')
@Controller('daily-plan')
export class DailyPlanController {
  constructor(private dailyPlanService: DailyPlanService) {}

  @Get(':dailyPlanId')
  async getById(@Param('dailyPlanId') dailyPlanId: number) {
    const dailyPlan = await this.dailyPlanService.findMealbydailyPlanId(
      dailyPlanId,
    );
    if (dailyPlan) {
      return dailyPlan;
    } else {
      throw new HttpException('Daily plan not found', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':dailyPlanId/ingredients')
  async getAllIngredientsForDailyPlan(
    @Param('dailyPlanId') dailyPlanId: number,
  ) {
    const ingredientList = await this.dailyPlanService.findAllIngredientsInDay(
      dailyPlanId,
    );
    if (ingredientList) {
      return ingredientList;
    } else {
      throw new HttpException('Daily plan not found', HttpStatus.BAD_REQUEST);
    }
  }
}
