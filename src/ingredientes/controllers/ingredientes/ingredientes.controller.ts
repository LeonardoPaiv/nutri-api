import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { IngredientesService } from 'src/ingredientes/services/ingredientes/ingredientes.service';

@Controller('ingredientes')
export class IngredientesController {
  constructor(private ingredientesService: IngredientesService) {}

  @Get('')
  private async getAll() {
    const lista = await this.ingredientesService.recuperaTodos();
    if (lista) {
      return lista;
    } else {
      throw new HttpException(
        'Alimento não encontrado',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get(':alimento/find')
  private async getSerachBYName(@Param('alimento') alimento: string) {
    const lista = await this.ingredientesService.buscaIngrementByName(alimento);
    if (lista) {
      return lista;
    } else {
      throw new HttpException(
        'Alimento não encontrado',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get(':ingredientId/all-recipes')
  async getRecipeIngredients(@Param('ingredientId') ingredientId: number) {
    const lista = await this.ingredientesService.findRecipesByIngredient(
      ingredientId,
    );
    if (lista) {
      return lista;
    } else {
      throw new HttpException('Receita não encontrado', HttpStatus.BAD_REQUEST);
    }
  }
}
