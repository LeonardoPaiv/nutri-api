/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { TipoUsuario } from './tipoUsuario';
import { Post } from './post';

@Entity({
  name: 'tb_usuario',
})
export class User {
  @PrimaryGeneratedColumn({
    name: 'id_usuario',
  })
  idUsuario: number;

  @Column({
    nullable: false,
  })
  email: string;

  @Column({
    nullable: false,
  })
  senha: string;

  @OneToOne(() => TipoUsuario)
  @JoinColumn({name: 'cod_tipo_usuario'})
  tipo: TipoUsuario;

  @Column({
    name: 'nme_usuario',
    nullable: false,
  })
  nmeUsuario: string;

  @Column({
    nullable: true,
  })
  foto: string;

  @OneToMany(() => Post, post => post.user)
  post: Post
}
