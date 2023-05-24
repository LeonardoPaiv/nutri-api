import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Challenge } from 'src/challenge/entity/Challenge';
import { ChallengeTasks } from 'src/challenge/entity/ChallengeTasks';
import { UserChallenges } from 'src/challenge/entity/UserChallenges';
import { Repository } from 'typeorm';

@Injectable()
export class ChallengeService {
  constructor(
    @InjectRepository(Challenge)
    private challengeRepository: Repository<Challenge>,
    @InjectRepository(ChallengeTasks)
    private challengeTasksRepository: Repository<ChallengeTasks>,
    @InjectRepository(UserChallenges)
    private userChallengesRepository: Repository<UserChallenges>,
  ) {}

  async recuperarTodos() {
    const listaDesafios = this.challengeRepository.find();
    return listaDesafios;
  }

  async TasksDoDesafio(desafioId) {
    const listaDesafios = this.challengeTasksRepository.find({
      select: ['task'],
      relations: { task: true },
      where: { desafio: desafioId },
    });
    return listaDesafios;
  }

  async teste(idUsuario) {
    const listaTeste = this.userChallengesRepository.find({
      relations: { challengeTasks: { desafio: true, task: true } },
      where: { user: idUsuario },
    });
    return listaTeste;
  }
}
