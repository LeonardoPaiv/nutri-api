/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_unidade' })
export class Unidade {
  @PrimaryGeneratedColumn({ name: 'id_unidade' })
  idUnidade: number;

  @Column({ name: 'tx_unidade' })
  txUnidade: string;
}
