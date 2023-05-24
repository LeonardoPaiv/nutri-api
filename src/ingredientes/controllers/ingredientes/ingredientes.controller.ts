import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
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
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
  }
}
