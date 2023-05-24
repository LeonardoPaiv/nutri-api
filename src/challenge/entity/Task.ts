/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_tarefas' })
export class Task {
  @PrimaryGeneratedColumn({ name: 'id_tarefas' })
  idTarefa: number;

  @Column({ name: 'nme_tarefa' })
  nmeTarefa: string;

  @Column()
  pontos: number;

  @Column({ name: 'tp_tarefa' })
  tpTarefa: string;
}
