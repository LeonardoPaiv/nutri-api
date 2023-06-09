import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaUtensilio } from 'src/ingredientes/entity/CategoriaUtensilio';
import { UserUtensils } from 'src/ingredientes/entity/UserUtensilios';
import { UtensilioCategoriaRelation } from 'src/ingredientes/entity/UtensilioCategoriaRelation';
import { Utensilios } from 'src/ingredientes/entity/Utensilios';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class UtensiliosService {
  constructor(
    @InjectRepository(Utensilios)
    private utensilioRepository: Repository<Utensilios>,
    @InjectRepository(UtensilioCategoriaRelation)
    private utensiliosCategoriasRelationRepository: Repository<UtensilioCategoriaRelation>,
    @InjectRepository(CategoriaUtensilio)
    private categoriaUtensilioRepository: Repository<CategoriaUtensilio>,
    @InjectRepository(UserUtensils)
    private userUtensilRepository: Repository<UserUtensils>,
  ) {}

  async findAll() {
    const lista = await this.utensilioRepository.find();
    return lista;
  }

  async findAllCategories() {
    const lista = await this.categoriaUtensilioRepository.find();
    return lista;
  }

  async getAllUtensilsByCategory(idCategoria) {
    const lista = this.utensiliosCategoriasRelationRepository.find({
      select: ['utensilio'],
      relations: { utensilio: true },
      where: { categoria: idCategoria },
    });
    return lista;
  }

  async getUtensilioByName(nmeUtensilio) {
    const lista = await this.utensilioRepository.findBy({
      nomeUtensilio: ILike(`%${nmeUtensilio}%`),
    });
    return lista;
  }

  async findUserUtensils(userId) {
    const list = await this.userUtensilRepository.find({
      select: ['utensil'],
      where: { user: userId },
      relations: { utensil: true },
    });
    return list;
  }
}
