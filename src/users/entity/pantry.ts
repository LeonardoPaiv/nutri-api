/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./user";
import { Ingredientes } from "src/ingredientes/entity/Ingredientes";

@Entity({name: 'tb_despensa'})
export class Pantry {

    @PrimaryColumn({name: 'cod_usuario'})
    @ManyToOne(() => User)
    @JoinColumn({ name: 'cod_usuario', referencedColumnName: 'idUsuario'})
    user: User;

    @PrimaryColumn({name: 'cod_ingrediente'})
    @ManyToOne(() => Ingredientes)
    @JoinColumn({name: 'cod_ingrediente', referencedColumnName: 'idIngrediente'})
    ingrediente: Ingredientes

    @Column({name: 'quantidade'})
    quantity: number;
}