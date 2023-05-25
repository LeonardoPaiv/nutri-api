/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_receita' })
export class Recipe {
  @PrimaryGeneratedColumn({ name: 'id_receita' })
  idReceita: number;

  @Column({ name: 'nme_receita' })
  nomeReceita: string;

  @Column({ name: 'tx_preparo' })
  txPreparo: string;
}
