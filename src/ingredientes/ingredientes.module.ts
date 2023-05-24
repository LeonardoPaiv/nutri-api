import { Module } from '@nestjs/common';
import { IngredientesController } from './controllers/ingredientes/ingredientes.controller';
import { IngredientesService } from './services/ingredientes/ingredientes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unidade } from './entity/Unidade';
import { Ingredientes } from './entity/Ingredientes';

@Module({
  imports: [TypeOrmModule.forFeature([Unidade, Ingredientes])],
  controllers: [IngredientesController],
  providers: [IngredientesService],
})
export class IngredientesModule {}
