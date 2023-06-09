/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_utensilios_cozinha'})
export class Utensilios {

    @PrimaryGeneratedColumn({name: 'id_utensilios_cozinha'})
    idUtensilio: number;
    
    @Column({name: 'nme_utensilio'})
    nomeUtensilio: string;

    @Column()
    descricao: string;

    @Column()
    foto: string
}