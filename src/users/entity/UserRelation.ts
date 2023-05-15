/* eslint-disable prettier/prettier */
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from './user';

@Entity({
  name: 'ta_usuarios',
})
export class UserRelation {
  @PrimaryColumn({ name: 'cod_usuario1' })
  @ManyToOne(() => User)
  @JoinColumn({ name: 'cod_usuario1', referencedColumnName: 'idUsuario' })
  user1: User;

  @PrimaryColumn({ name: 'cod_usuario2' })
  @ManyToOne(() => User)
  @JoinColumn({ name: 'cod_usuario2', referencedColumnName: 'idUsuario' })
  user2: User;
}
