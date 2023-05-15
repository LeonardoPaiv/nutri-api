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

@Module({
  imports: [
    TypeOrmModule.forFeature([
      GrupoUsuarioRelations,
      Post,
      User,
      Grupo,
      UserRelation,
    ]),
  ],
  controllers: [UsersController, GrupoController, PostController],
  providers: [UsersService, GrupoService, PostService],
})
export class UsersModule {}
