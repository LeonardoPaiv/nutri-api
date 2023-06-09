import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TaskService } from 'src/challenge/services/task/task.service';

@ApiTags('Tasks')
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get('')
  async getAll() {
    const lista = await this.taskService.recurarTodos();
    if (lista) {
      return lista;
    } else {
      throw new HttpException('Tasks not found', HttpStatus.BAD_REQUEST);
    }
  }
}
