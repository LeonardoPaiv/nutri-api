import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UtensiliosService } from 'src/ingredientes/services/utensilios/utensilios.service';

@ApiTags('utensils')
@Controller('utensilios')
export class UtensiliosController {
  constructor(private utensiliosService: UtensiliosService) {}

  @Get('')
  async getAllUtensilios() {
    const utensilList = await this.utensiliosService.findAll();
    if (utensilList) {
      return utensilList;
    } else {
      throw new HttpException('Utensil not found', HttpStatus.BAD_REQUEST);
    }
  }

  @Get('/categorias')
  async getAllCategorias() {
    const categoryList = await this.utensiliosService.findAllCategories();
    if (categoryList) {
      return categoryList;
    } else {
      throw new HttpException('Categories not found', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':categoryId/utensilios-by-categoria')
  async getUtensiliosByCategoria(@Param('categoryId') categoryId: number) {
    const utensilList = await this.utensiliosService.getAllUtensilsByCategory(
      categoryId,
    );
    if (utensilList) {
      return utensilList;
    } else {
      throw new HttpException('Utensil not found', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':utensilName/utensilio-by-name')
  async getUtensilioByName(@Param('utensilName') utensilName: string) {
    const lista = await this.utensiliosService.getUtensilioByName(utensilName);
    if (lista) {
      return lista;
    } else {
      throw new HttpException('Utensil not found', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':userId/user-utensils')
  async getUserUtensils(@Param('userId') userId: number) {
    const utensilList = await this.utensiliosService.findUserUtensils(userId);
    if (utensilList) {
      return utensilList;
    } else {
      throw new HttpException('Utensil not found', HttpStatus.BAD_REQUEST);
    }
  }
}
