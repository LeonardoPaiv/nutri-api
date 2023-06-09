/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Meals } from "./Meals";
import { Ingredientes } from "src/ingredientes/entity/Ingredientes";

@Entity({name: 'tb_ingredientes_has_tb_refeicao'})
export class MealsIngredients {
    
    @PrimaryColumn({name: 'cod_refeicao'})
    @ManyToOne(() => Meals)
    @JoinColumn({name: 'cod_refeicao', referencedColumnName: 'mealId'})
    meal: Meals

    @PrimaryColumn({name: 'cod_ingredientes'})
    @ManyToOne(() => Ingredientes)
    @JoinColumn({name: 'cod_ingredientes', referencedColumnName: 'idIngrediente'})
    ingredient: Ingredientes;

    @Column({name: 'quantidade'})
    quantity: number;
}