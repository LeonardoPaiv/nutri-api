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

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RecipeIngredients,
      Recipe,
      Unidade,
      Ingredientes,
    ]),
  ],
  controllers: [IngredientesController, ReceitasController],
  providers: [IngredientesService, ReceitasService],
})
export class IngredientesModule {}
