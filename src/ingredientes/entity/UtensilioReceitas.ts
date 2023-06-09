/* eslint-disable prettier/prettier */
import { Entity, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { Recipe } from "./Recipe";
import { Utensilios } from "./Utensilios";

@Entity({ name: 'ta_utensilios_receita' })
export class UtensilioReceitas {
  @PrimaryColumn({ name: 'cod_utensilios_cozinha' })
  @ManyToOne(() => Utensilios)
  @JoinColumn({ name: 'cod_utensilios_cozinha', referencedColumnName: 'idUtensilio' })
  utensilio: Utensilios;

  @PrimaryColumn({ name: 'cod_receita' })
  @ManyToOne(() => Recipe)
  @JoinColumn({ name: 'cod_receita', referencedColumnName: 'idReceita',})
  receita: Recipe;
}