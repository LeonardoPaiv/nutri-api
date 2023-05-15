/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'tb_tipo_usuario',
})
export class TipoUsuario {
  @PrimaryGeneratedColumn({ name: 'id_tipo_usuario' })
  idTipoUsuario: number;

  @Column({ name: 'tipo' })
  tipo: string;
}
