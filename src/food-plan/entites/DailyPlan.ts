/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FoodPlan } from "./FoodPlan";
import { Meals } from "./Meals";

@Entity({name: 'tb_plano_diario'})
export class DailyPlan {
    
    @PrimaryGeneratedColumn({name: 'id_plano_diario'})
    dailyPlanId: number;

    @Column({name: 'cod_plano_alimentar'})
    @ManyToOne(() => FoodPlan)
    @JoinColumn({name: 'cod_plano_alimentar', referencedColumnName: 'foodPlanId'})
    foodPlan: FoodPlan

    @Column({name: 'dia'})
    day: Date;

    @OneToMany(() => Meals, meal => meal.dailyPlan)
    meals: Meals[]
}