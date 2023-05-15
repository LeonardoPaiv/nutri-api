/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user';

@Entity({ name: 'tb_postagens' })
export class Post {
  @PrimaryGeneratedColumn({ name: 'id_postagem' })
  idPostagem: number;

  @Column()
  texto: string

  @Column()
  foto: string

  @ManyToOne(() => User, user => user.post)
  user: User[]

}
