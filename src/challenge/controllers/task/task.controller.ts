import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { TaskService } from 'src/challenge/services/task/task.service';

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
