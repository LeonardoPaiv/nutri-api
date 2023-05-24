/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Ingredientes } from './Ingredientes';

@Entity({ name: 'tb_unidade' })
export class Unidade {
  @PrimaryGeneratedColumn({ name: 'id_unidade' })
  idUnidade: number;

  @Column({ name: 'tx_unidade' })
  txUnidade: string;

  @OneToMany(
    () => Ingredientes, (ingredientes) => ingredientes.unidade)
    ingredientes: Ingredientes[];
}
