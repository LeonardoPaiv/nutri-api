import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/users/entity/user';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRelation } from 'src/users/entity/UserRelation';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(UserRelation)
    private userRelationRepository: Repository<UserRelation>,
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
}
