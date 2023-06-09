import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChallengeService } from 'src/challenge/services/challenge/challenge.service';

@ApiTags('Challenges')
@Controller('challenge')
export class ChallengeController {
  constructor(private challengeService: ChallengeService) {}
  @Get('')
  async getAll() {
    const listaDesafios = await this.challengeService.recuperarTodos();
    if (listaDesafios) {
      return listaDesafios;
    } else {
      throw new HttpException('Challenge not found', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':desafioId/tasks')
  async getAlltasksDesfio(@Param('desafioId') desafioId: number) {
    const listaTasks = await this.challengeService.TasksDoDesafio(desafioId);
    if (listaTasks) {
      return listaTasks;
    } else {
      throw new HttpException('Challenge not found', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':usuarioId/desafios')
  async getAllUserChallenges(@Param('usuarioId') usuarioId: number) {
    return this.challengeService.findUserChallenges(usuarioId);
  }
}
