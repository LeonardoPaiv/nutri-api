import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get('')
  getUser() {
    const userList = this.userService.findAllUsers();
    if (userList) {
      return userList;
    } else {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
  }

  @Get('all/relations')
  getUserUser() {
    const userList = this.userService.findAllUser_User();
    if (userList) {
      return userList;
    } else {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':userId/friends')
  async getUserFriends(@Param('userId') userId: number) {
    return this.userService.findFriends(userId);
  }

  @Get('quantity-by-type')
  async getQuantityUserByType() {
    const lista = await this.userService.findQuantityForUserGroup();
    return lista;
  }

  @Get(':userId/pantry')
  async getAllIngredientsInPantry(@Param('userId') userId: number) {
    const ingredientsList = this.userService.findUserIngredients(userId);
    if (ingredientsList) {
      return ingredientsList;
    } else {
      throw new HttpException('Empity Pantry', HttpStatus.BAD_REQUEST);
    }
  }
}
