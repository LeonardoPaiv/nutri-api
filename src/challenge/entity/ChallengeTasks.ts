/* eslint-disable prettier/prettier */

import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Challenge } from "./Challenge";
import { Task } from "./Task";


@Entity({name: 'ta_desafios_tarefas'})
export class ChallengeTasks {
    @PrimaryColumn({ name: 'cod_desafio' })
    @ManyToOne(() => Challenge)
    @JoinColumn({ name: 'cod_desafio', referencedColumnName: 'idDesafio' })
    desafio: Challenge;
  
    @PrimaryColumn({ name: 'cod_tarefa' })
    @ManyToOne(() => Task)
    @JoinColumn({ name: 'cod_tarefa', referencedColumnName: 'idTarefa' })
    task: Task;
}