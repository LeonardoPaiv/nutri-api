import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { GrupoService } from 'src/users/services/grupo/grupo.service';

@Controller('grupo')
export class GrupoController {
  constructor(private grupoService: GrupoService) {}

  @Get('')
  getAllGrupos() {
    const grupoList = this.grupoService.findAllGrupo();
    if (grupoList) {
      return grupoList;
    } else {
      throw new HttpException('Grupo not found', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':grupoId/usuarios')
  async getAllRelations(@Param('grupoId') grupoId: number) {
    const groupRelations =
      this.grupoService.findAllRelationsGroupsUsuarios(grupoId);
    if (groupRelations) {
      return groupRelations;
    } else {
      throw new HttpException('Relations not found', HttpStatus.BAD_REQUEST);
    }
  }
}
