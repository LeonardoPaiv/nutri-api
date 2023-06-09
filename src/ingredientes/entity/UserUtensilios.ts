/* eslint-disable prettier/prettier */
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Utensilios } from "./Utensilios";
import { User } from "src/users/entity/user";

@Entity({name: 'ta_utensilios_usuario'})
export class UserUtensils {
    
    @PrimaryColumn({name: 'cod_utensilio'})
    @ManyToOne(() => Utensilios)
    @JoinColumn({name: 'cod_utensilio', referencedColumnName: 'idUtensilio'})
    utensil: Utensilios

    @PrimaryColumn({name: 'cod_usuario'})
    @ManyToOne(() => User)
    @JoinColumn({name: 'cod_usuario', referencedColumnName: 'idUsuario'})
    user: User


}