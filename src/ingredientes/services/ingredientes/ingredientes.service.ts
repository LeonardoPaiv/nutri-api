import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredientes } from 'src/ingredientes/entity/Ingredientes';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientesService {
  constructor(
    @InjectRepository(Ingredientes)
    private ingredientesRepository: Repository<Ingredientes>,
  ) {}

  async recuperaTodos() {
    const listaIngredientes = await this.ingredientesRepository.find();
    return listaIngredientes;
  }
}
