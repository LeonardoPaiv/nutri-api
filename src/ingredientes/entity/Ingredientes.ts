/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Unidade } from './Unidade';

@Entity({ name: 'tb_ingredientes' })
export class Ingredientes {
  @PrimaryGeneratedColumn({ name: 'id_ingredientes' })
  idIngrediente: number;

  @Column({ name: 'nome' })
  nomeIngrediente: string;

  @Column({ name: 'porcao_comercial' })
  porcaoComercial: number;

  @Column({ name: 'qtd_proteina' })
  qtdProteina: number;

  @Column({ name: 'qtd_carboidratos' })
  qtdCarboidratos: number;

  @Column({ name: 'qtd_calorias' })
  qtdCalorias: number;

  @Column({ name: 'qtd_gorduras_str' })
  qtdGordSTR: number;

  @Column({ name: 'qtd_gorduras_trs' })
  qtdGordTRS: number;

  @Column({ name: 'porcao_nutricional' })
  porcaoNutricional: number;

  @Column({name: 'cod_unidade'})
  @OneToOne(() => Unidade)
  @JoinColumn({name: 'cod_unidade', referencedColumnName: 'idUnidade'})
  unidade: Unidade;
}
