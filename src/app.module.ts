import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entity/user';
import Grupo from './users/entity/Grupo';
import { UserRelation } from './users/entity/UserRelation';
import { TipoUsuario } from './users/entity/tipoUsuario';
import { Post } from './users/entity/post';
import { GrupoUsuarioRelations } from './users/entity/GrupoUsuariosRelations';
import { ChallengeModule } from './challenge/challenge.module';
import { Challenge } from './challenge/entity/Challenge';
import { Task } from './challenge/entity/Task';
import { ChallengeTasks } from './challenge/entity/ChallengeTasks';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { Ingredientes } from './ingredientes/entity/Ingredientes';
import { Unidade } from './ingredientes/entity/Unidade';
import { UserChallenges } from './challenge/entity/UserChallenges';
import { Recipe } from './ingredientes/entity/Recipe';
import { RecipeIngredients } from './ingredientes/entity/RecipeIngredients';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'mydb',
      username: 'root',
      password: 'root',
      entities: [
        GrupoUsuarioRelations,
        Post,
        TipoUsuario,
        User,
        Grupo,
        UserRelation,
        Challenge,
        Task,
        ChallengeTasks,
        UserChallenges,
        Ingredientes,
        Unidade,
        Recipe,
        RecipeIngredients,
      ],
      synchronize: false,
    }),
    UsersModule,
    ChallengeModule,
    IngredientesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
