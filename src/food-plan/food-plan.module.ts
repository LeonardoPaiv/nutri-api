import { Module } from '@nestjs/common';
import { FoodPlanController } from './controllers/food-plan/food-plan.controller';
import { FoodPlanService } from './services/food-plan/food-plan.service';
import { DailyPlanService } from './services/daily-plan/daily-plan.service';
import { DailyPlanController } from './controllers/daily-plan/daily-plan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodPlan } from './entites/FoodPlan';
import { DailyPlan } from './entites/DailyPlan';
import { Meals } from './entites/Meals';
import { MealsIngredients } from './entites/MealsIngredients';
import { User } from 'src/users/entity/user';
import { Ingredientes } from 'src/ingredientes/entity/Ingredientes';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FoodPlan,
      DailyPlan,
      Meals,
      MealsIngredients,
      User,
      Ingredientes,
    ]),
  ],
  controllers: [FoodPlanController, DailyPlanController],
  providers: [FoodPlanService, DailyPlanService],
})
export class FoodPlanModule {}
