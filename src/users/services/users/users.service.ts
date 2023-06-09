import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/users/entity/user';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRelation } from 'src/users/entity/UserRelation';
import { Pantry } from 'src/users/entity/pantry';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(UserRelation)
    private userRelationRepository: Repository<UserRelation>,
    @InjectRepository(Pantry)
    private pantryRepository: Repository<Pantry>,
  ) {}

  findAllUsers() {
    return this.usersRepository.find({ relations: { tipo: true } });
  }

  findAllUser_User() {
    return this.userRelationRepository.find({ relations: ['user1', 'user2'] });
  }

  async findFriends(userId: number): Promise<User[]> {
    const query = `
    select usu2.*
    from tb_usuario usu1 
    join ta_usuarios on cod_usuario2 = usu1.id_usuario
    join tb_usuario usu2 on cod_usuario1 = usu2.id_usuario
    where cod_usuario2 = ${userId}
    union
    select usu1.*
    from tb_usuario usu1 
    join ta_usuarios on cod_usuario2 = usu1.id_usuario
    join tb_usuario usu2 on cod_usuario1 = usu2.id_usuario
    where cod_usuario1 = ${userId};
    
    `;
    const result = await this.usersRepository.query(query);
    return result;
  }

  async findQuantityForUserGroup() {
    const query = `
    SELECT tipo.tipo, count(*) FROM 
    tb_usuario tu  
    JOIN tb_tipo_usuario tipo ON tipo.id_tipo_usuario = tu.cod_tipo_usuario
    GROUP BY tu.cod_tipo_usuario;
    `;
    const result = await this.usersRepository.query(query);
    return result;
  }

  async findUserIngredients(userId) {
    const ingredientList = this.pantryRepository.find({
      select: ['ingrediente', 'quantity'],
      relations: { ingrediente: true },
      where: { user: userId },
    });
    return ingredientList;
  }
}
