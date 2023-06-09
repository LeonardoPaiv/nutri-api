/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity({name: 'tb_compras'})
export class ShoppingList {

    @PrimaryGeneratedColumn({name: 'id_compras'})
    ShoppingListId: number;

    @Column({name: 'data'})
    data: Date;

    @Column({name: 'tb_usuario_id_usuario'})
    @ManyToOne(() => User)
    @JoinColumn({name: 'tb_usuario_id_usuario', referencedColumnName: 'idUsuario'})
    user: User
}