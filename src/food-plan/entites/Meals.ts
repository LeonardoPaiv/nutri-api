/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DailyPlan } from "./DailyPlan";

@Entity({name: 'tb_refeicao'})
export class Meals {
    
    @PrimaryGeneratedColumn({name: 'id_refeicao'})
    mealId: number;

    @Column({name: 'tp_refeicao'})
    mealType: string;

    @Column('time', {name: 'hora'})
    hour: Date;

    @ManyToOne(() => DailyPlan, daily => daily.meals)
    @JoinColumn({name: 'cod_plano_diario', referencedColumnName: 'dailyPlanId'})
    dailyPlan: DailyPlan
}