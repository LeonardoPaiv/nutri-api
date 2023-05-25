import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredientes } from 'src/ingredientes/entity/Ingredientes';
import { RecipeIngredients } from 'src/ingredientes/entity/RecipeIngredients';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class IngredientesService {
  constructor(
    @InjectRepository(Ingredientes)
    private ingredientesRepository: Repository<Ingredientes>,
    @InjectRepository(RecipeIngredients)
    private recipeIngredients: Repository<RecipeIngredients>,
  ) {}

  async recuperaTodos() {
    const listaIngredientes = await this.ingredientesRepository.find({
      relations: { unidade: true },
    });
    return listaIngredientes;
  }

  async buscaIngrementByName(search: string) {
    const listaIngredientes = await this.ingredientesRepository.findBy({
      nomeIngrediente: ILike(`%${search}%`),
    });
    return listaIngredientes;
  }

  async findRecipesByIngredient(ingredientId) {
    const recipeList = await this.recipeIngredients.find({
      select: ['receita'],
      relations: { receita: true },
      where: { ingrediente: ingredientId },
    });
    return recipeList;
  }
}
