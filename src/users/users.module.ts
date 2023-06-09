import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoService } from './services/grupo/grupo.service';
import { GrupoController } from './controllers/grupo/grupo.controller';
import { User } from './entity/user';
import Grupo from './entity/Grupo';
import { UserRelation } from './entity/UserRelation';
import { PostController } from './controllers/post/post.controller';
import { PostService } from './services/post/post.service';
import { Post } from './entity/post';
import { GrupoUsuarioRelations } from './entity/GrupoUsuariosRelations';
import { Pantry } from './entity/pantry';
import { ShoppingListController } from './controllers/shopping-list/shopping-list.controller';
import { ShoppingListService } from './services/shopping-list/shopping-list.service';
import { ShoppingList } from './entity/ShoppingList';
import { ShoppingListIngredients } from './entity/ShoppingListIngredients';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      GrupoUsuarioRelations,
      Post,
      User,
      Grupo,
      UserRelation,
      Pantry,
      ShoppingList,
      ShoppingListIngredients,
    ]),
  ],
  controllers: [
    UsersController,
    GrupoController,
    PostController,
    ShoppingListController,
  ],
  providers: [UsersService, GrupoService, PostService, ShoppingListService],
})
export class UsersModule {}
