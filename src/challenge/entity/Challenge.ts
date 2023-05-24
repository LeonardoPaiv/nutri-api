/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_desafios' })
export class Challenge {
  @PrimaryGeneratedColumn({ name: 'id_desafios' })
  idDesafio: number;

  @Column({ name: 'nme_desafio' })
  nmeDesafio: string;

  @Column()
  foto: string;

  @Column()
  data: Date;
}
