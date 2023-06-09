import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DailyPlan } from 'src/food-plan/entites/DailyPlan';
import { MealsIngredients } from 'src/food-plan/entites/MealsIngredients';
import { Repository } from 'typeorm';

@Injectable()
export class DailyPlanService {
  constructor(
    @InjectRepository(DailyPlan)
    private DailyPlanRepository: Repository<DailyPlan>,
    @InjectRepository(MealsIngredients)
    private mealsIngredientsRepository: Repository<MealsIngredients>,
  ) {}

  async findMealbydailyPlanId(dailyPlanId) {
    const dailyPlan = await this.DailyPlanRepository.find({
      relations: { meals: true },
      where: { dailyPlanId: dailyPlanId },
    });
    return dailyPlan;
  }

  async findAllIngredientsInDay(dailyPlanId) {
    const query = `
    SELECT main.cod_ingredientes, main.quantidade, ingre.* 
    FROM mydb.tb_ingredientes_has_tb_refeicao main
    join tb_ingredientes ingre on ingre.id_ingredientes =  main.cod_ingredientes
    where cod_refeicao = ${dailyPlanId};
    `;
    const ingredientList = await this.mealsIngredientsRepository.query(query);
    return ingredientList;
  }
}
