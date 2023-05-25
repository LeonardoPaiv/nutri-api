import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from 'src/ingredientes/entity/Recipe';
import { RecipeIngredients } from 'src/ingredientes/entity/RecipeIngredients';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class ReceitasService {
  constructor(
    @InjectRepository(Recipe) private recipeRepository: Repository<Recipe>,
    @InjectRepository(RecipeIngredients)
    private recipeIngredientsRepository: Repository<RecipeIngredients>,
  ) {}

  async getAll() {
    const listRecipes = await this.recipeRepository.find();
    return listRecipes;
  }

  async getRecipeByName(recipeName) {
    const listRecipes = await this.recipeRepository.findBy({
      nomeReceita: ILike(`%${recipeName}%`),
    });
    return listRecipes;
  }

  async allIngredients(recipeId) {
    const listaIngredientes = await this.recipeIngredientsRepository.find({
      select: ['ingrediente', 'quantity'],
      where: { receita: recipeId },
      relations: { ingrediente: true },
    });
    return listaIngredientes;
  }
}
