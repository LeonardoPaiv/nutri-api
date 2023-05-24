import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/users/entity/post';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  async findUserPosts(userId: number): Promise<Post[]> {
    const query = `
select * from tb_postagens
where cod_usuario = any (
select cod_usuario2 from ta_usuarios where cod_usuario1 = ${userId}
union
select cod_usuario1 from ta_usuarios where cod_usuario2 = ${userId}
) or cod_usuario = ${userId};
        `;
    const result = await this.postsRepository.query(query);
    return result;
  }

  async findPostsRelatedByUser(userId: number): Promise<Post[]> {
    const query = `
    select * from tb_postagens posts
    where posts.cod_usuario = any (
    select usu2.id_usuario
    from tb_usuario usu1 
    join ta_usuarios on cod_usuario2 = usu1.id_usuario
    join tb_usuario usu2 on cod_usuario1 = usu2.id_usuario
    where cod_usuario2 = ${userId}
    union
    select usu1.id_usuario
    from tb_usuario usu1 
    join ta_usuarios on cod_usuario2 = usu1.id_usuario
    join tb_usuario usu2 on cod_usuario1 = usu2.id_usuario
    where cod_usuario1 = ${userId}) or cod_usuario = ${userId}
    ;
        `;
    const result = await this.postsRepository.query(query);
    return result;
  }
}
