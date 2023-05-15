import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entity/user';
import Grupo from './users/entity/Grupo';
import { UserRelation } from './users/entity/UserRelation';
import { TipoUsuario } from './users/entity/tipoUsuario';
import { Post } from './users/entity/post';
import { GrupoUsuarioRelations } from './users/entity/GrupoUsuariosRelations';

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
      ],
      synchronize: false,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
