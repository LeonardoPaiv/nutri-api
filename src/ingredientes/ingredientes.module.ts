import { Module } from '@nestjs/common';
import { IngredientesController } from './controllers/ingredientes/ingredientes.controller';
import { IngredientesService } from './services/ingredientes/ingredientes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unidade } from './entity/Unidade';
import { Ingredientes } from './entity/Ingredientes';
import { ReceitasController } from './controllers/receitas/receitas.controller';
import { ReceitasService } from './services/receitas/receitas.service';
import { Recipe } from './entity/Recipe';
import { RecipeIngredients } from './entity/RecipeIngredients';
import { CategoriaUtensilio } from './entity/CategoriaUtensilio';
import { UtensilioCategoriaRelation } from './entity/UtensilioCategoriaRelation';
import { Utensilios } from './entity/Utensilios';
import { UtensilioReceitas } from './entity/UtensilioReceitas';
import { UtensiliosController } from './controllers/utensilios/utensilios.controller';
import { UtensiliosService } from './services/utensilios/utensilios.service';
import { User } from '../users/entity/User';
import { UserUtensils } from './entity/UserUtensilios';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Utensilios,
      UserUtensils,
      CategoriaUtensilio,
      UtensilioCategoriaRelation,
      UtensilioReceitas,
      RecipeIngredients,
      Recipe,
      Unidade,
      Ingredientes,
    ]),
  ],
  controllers: [
    IngredientesController,
    ReceitasController,
    UtensiliosController,
  ],
  providers: [IngredientesService, ReceitasService, UtensiliosService],
})
export class IngredientesModule {}
