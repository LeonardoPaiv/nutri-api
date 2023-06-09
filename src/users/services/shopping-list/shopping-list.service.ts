import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredientes } from 'src/ingredientes/entity/Ingredientes';
import { ShoppingList } from 'src/users/entity/ShoppingList';
import { ShoppingListIngredients } from 'src/users/entity/ShoppingListIngredients';
import { Repository } from 'typeorm';

@Injectable()
export class ShoppingListService {
  constructor(
    @InjectRepository(ShoppingList)
    private shoppingListRepository: Repository<ShoppingList>,
    @InjectRepository(ShoppingListIngredients)
    private shoppingListIngredientsRepository: Repository<ShoppingListIngredients>,
  ) {}

  async findAllLists() {
    return this.shoppingListRepository.find();
  }

  async findAllIngredientsInShoppingList(shoppingListId) {
    const ingredientsList = this.shoppingListIngredientsRepository.find({
      relations: { ingredient: true, shoppingList: true },
      where: { shoppingList: shoppingListId },
    });
    return ingredientsList;
  }

  async findBestSellers() {
    const list = await this.shoppingListIngredientsRepository
      .createQueryBuilder('s')
      .select('s.cod_ingrediente')
      .leftJoinAndSelect(
        Ingredientes,
        'ingre',
        's.cod_ingrediente = ingre.id_ingredientes',
      )
      .addSelect('SUM(s.quantidade)', 'quantity')
      .groupBy('s.cod_ingrediente')
      .orderBy('quantity', 'DESC')
      .getRawMany();
    return list;
  }
}
