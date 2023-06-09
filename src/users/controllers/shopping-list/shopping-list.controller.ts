import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ShoppingListService } from 'src/users/services/shopping-list/shopping-list.service';

@ApiTags('shopping')
@Controller('shopping-list')
export class ShoppingListController {
  constructor(private shoppingListService: ShoppingListService) {}

  @Get('')
  async getAll() {
    const list = this.shoppingListService.findAllLists();
    if (list) {
      return list;
    } else {
      throw new HttpException(
        'Shopping lists not found',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get(':shoppingListId/ingredients')
  async getAllIngredientsInshopppingList(
    @Param('shoppingListId') shoppingListId: number,
  ) {
    const list =
      this.shoppingListService.findAllIngredientsInShoppingList(shoppingListId);
    if (list) {
      return list;
    } else {
      throw new HttpException(
        'Ingredients in Shopping lists not found',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('best-sellers')
  async getBestSellers() {
    const list = this.shoppingListService.findBestSellers();
    if (list) {
      return list;
    } else {
      // eslint-disable-next-line prettier/prettier
      return new HttpException("can't find best sellers", HttpStatus.BAD_REQUEST);
    }
  }
}
