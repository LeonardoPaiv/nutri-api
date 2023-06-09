/* eslint-disable prettier/prettier */
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Utensilios } from './Utensilios';
import { CategoriaUtensilio } from './CategoriaUtensilio';

@Entity({ name: 'ta_categoria_utensilios' })
export class UtensilioCategoriaRelation {
  @PrimaryColumn({ name: 'cod_utensilios' })
  @ManyToOne(() => Utensilios)
  @JoinColumn({ name: 'cod_utensilios', referencedColumnName: 'idUtensilio' })
  utensilio: Utensilios;

  @PrimaryColumn({ name: 'cod_categoria' })
  @ManyToOne(() => CategoriaUtensilio)
  @JoinColumn({ name: 'cod_categoria', referencedColumnName: 'idCategoriaUtensilio',})
  categoria: CategoriaUtensilio;
}
