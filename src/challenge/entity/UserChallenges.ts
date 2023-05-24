/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { ChallengeTasks } from "./ChallengeTasks";
import { User } from "src/users/entity/user";

@Entity({name: 'ta_usuario_desafios'})
export class UserChallenges {
  
    @PrimaryColumn({ name: 'cod_desafio' })
    @PrimaryColumn({name: 'cod_tarefas'})
    @ManyToOne(() => ChallengeTasks)
    @JoinColumn({ name: 'cod_desafio', referencedColumnName: 'desafio'})
    @JoinColumn({ name: 'cod_tarefas', referencedColumnName: 'task'})
    challengeTasks: ChallengeTasks;

    @PrimaryColumn({ name: 'cod_usuario' })
    @ManyToOne(() => User)
    @JoinColumn({ name: 'cod_usuario', referencedColumnName: 'idUsuario' })
    user: User;

    @Column({name: 'realizado'})
    realizado: number
}