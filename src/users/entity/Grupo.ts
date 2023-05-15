/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'tb_grupo',
})
export default class Grupo {
    @PrimaryGeneratedColumn({
        name: 'id_grupo'
    })
    idGrupo: number;

    @Column({
        name: 'nme_grupo'
    })
    nomeGrupo: string;

    @Column()
    foto: string;
}
