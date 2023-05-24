import { Module } from '@nestjs/common';
import { ChallengeController } from './controllers/challenge/challenge.controller';
import { ChallengeService } from './services/challenge/challenge.service';
import { Task } from './entity/Task';
import { Challenge } from './entity/Challenge';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './controllers/task/task.controller';
import { TaskService } from './services/task/task.service';
import { ChallengeTasks } from './entity/ChallengeTasks';
import { UserChallenges } from './entity/UserChallenges';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserChallenges, ChallengeTasks, Task, Challenge]),
  ],
  controllers: [ChallengeController, TaskController],
  providers: [ChallengeService, TaskService],
})
export class ChallengeModule {}
