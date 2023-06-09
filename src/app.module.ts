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
import { Utensilios } from './ingredientes/entity/Utensilios';
import { CategoriaUtensilio } from './ingredientes/entity/CategoriaUtensilio';
import { UtensilioCategoriaRelation } from './ingredientes/entity/UtensilioCategoriaRelation';
import { UtensilioReceitas } from './ingredientes/entity/UtensilioReceitas';
import { UserUtensils } from './ingredientes/entity/UserUtensilios';
import { Pantry } from './users/entity/pantry';
import { ShoppingList } from './users/entity/ShoppingList';
import { ShoppingListIngredients } from './users/entity/ShoppingListIngredients';
import { FoodPlanModule } from './food-plan/food-plan.module';
import { FoodPlan } from './food-plan/entites/FoodPlan';
import { DailyPlan } from './food-plan/entites/DailyPlan';
import { Meals } from './food-plan/entites/Meals';
import { MealsIngredients } from './food-plan/entites/MealsIngredients';

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
        ShoppingListIngredients,
        ShoppingList,
        Utensilios,
        CategoriaUtensilio,
        UtensilioCategoriaRelation,
        UtensilioReceitas,
        GrupoUsuarioRelations,
        Post,
        TipoUsuario,
        User,
        UserUtensils,
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
        Pantry,
        FoodPlan,
        DailyPlan,
        Meals,
        MealsIngredients,
      ],
      synchronize: false,
    }),
    UsersModule,
    ChallengeModule,
    IngredientesModule,
    FoodPlanModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
