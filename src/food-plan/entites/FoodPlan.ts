/* eslint-disable prettier/prettier */
import { User } from "src/users/entity/user";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_plano_alimentar'})
export class FoodPlan {
    @PrimaryGeneratedColumn({name: 'id_plano_alimentar'})
    foodPlanId: number;

    @Column({name: 'data_inicial'})
    startDate: Date;

    @Column({name: 'data_final'})
    endDate: Date;

    @Column({name: 'av_proteinas'})
    proteinTarget: number;

    @Column({name: 'av_carboidratos'})
    carbTarget: number;

    @Column({name: 'av_gordura_saturada'})
    satFatTarget: number;

    @Column({name: 'av_gordura_tans'})
    transSatTarget: number;

    @Column({name: 'tb_usuario_id_usuario'})
    @ManyToOne(() => User)
    @JoinColumn({name: 'tb_usuario_id_usuario', referencedColumnName: 'idUsuario' })
    user: User;
}