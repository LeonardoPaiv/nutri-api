/* eslint-disable prettier/prettier */

import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Recipe } from './Recipe';
import { Ingredientes } from './Ingredientes';

@Entity({ name: 'ta_receita_ingredientes' })
export class RecipeIngredients {
  @PrimaryColumn({ name: 'cod_receita' })
  @ManyToOne(() => Recipe)
  @JoinColumn({ name: 'cod_receita', referencedColumnName: 'idReceita' })
  receita: Recipe;

  @PrimaryColumn({ name: 'cod_ingrediente' })
  @ManyToOne(() => Ingredientes)
  @JoinColumn({ name: 'cod_ingrediente', referencedColumnName: 'idIngrediente' })
  ingrediente: Ingredientes;

  @Column({ name: 'quantidade' })
  quantity: number;
}
