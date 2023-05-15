import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Grupo from 'src/users/entity/Grupo';
import { GrupoUsuarioRelations } from 'src/users/entity/GrupoUsuariosRelations';
import { Repository } from 'typeorm';

@Injectable()
export class GrupoService {
  constructor(
    @InjectRepository(Grupo)
    private grupoRepository: Repository<Grupo>,
    @InjectRepository(GrupoUsuarioRelations)
    private grupoUsuarioRepository: Repository<GrupoUsuarioRelations>,
  ) {}

  findAllGrupo() {
    return this.grupoRepository.find();
  }

  findAllRelationsGroupsUsuarios(grupoId) {
    return this.grupoUsuarioRepository.find({
      select: ['user'],
      relations: { user: true },
      where: { grupo: grupoId },
    });
  }
}
