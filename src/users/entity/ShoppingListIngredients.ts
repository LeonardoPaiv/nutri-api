/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { ShoppingList } from './ShoppingList';
import { Ingredientes } from 'src/ingredientes/entity/Ingredientes';

@Entity({ name: 'ta_compras_ingredientes' })
export class ShoppingListIngredients {
  @PrimaryColumn({ name: 'cod_compras' })
  @ManyToOne(() => ShoppingList)
  @JoinColumn({ name: 'cod_compras', referencedColumnName: 'ShoppingListId' })
  shoppingList: ShoppingList;

  @PrimaryColumn({ name: 'cod_ingrediente' })
  @ManyToOne(() => Ingredientes)
  @JoinColumn({
    name: 'cod_ingrediente',
    referencedColumnName: 'idIngrediente',
  })
  ingredient: Ingredientes;

  @Column({ name: 'quantidade' })
  quantity: number;
}
