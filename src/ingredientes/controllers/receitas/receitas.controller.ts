import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReceitasService } from 'src/ingredientes/services/receitas/receitas.service';

@ApiTags('recipes')
@Controller('receitas')
export class ReceitasController {
  constructor(private receitasService: ReceitasService) {}

  @Get('')
  async getAll() {
    const lista = await this.receitasService.getAll();
    if (lista) {
      return lista;
    } else {
      throw new HttpException('Receita não encontrado', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':recipe/find')
  async getRecipeByName(@Param('recipe') recipe: string) {
    const lista = await this.receitasService.getRecipeByName(recipe);
    if (lista) {
      return lista;
    } else {
      throw new HttpException('Receita não encontrado', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':recipeId/all-ingredients')
  async getRecipeIngredients(@Param('recipeId') recipeId: number) {
    const lista = await this.receitasService.allIngredients(recipeId);
    if (lista) {
      return lista;
    } else {
      throw new HttpException('Receita não encontrado', HttpStatus.BAD_REQUEST);
    }
  }
}
