/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_categoria' })
export class CategoriaUtensilio {
  @PrimaryGeneratedColumn({ name: 'id_categoria' })
  idCategoriaUtensilio: number;

  @Column({ name: 'nme_categoria' })
  nomeCategoria: string;
}
