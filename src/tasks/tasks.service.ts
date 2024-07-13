import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { RemoveTaskDto } from './dto/remove-task.dto';
import { SetIsDoneTaskDto } from './dto/set-is-done-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task) private taskRepository: typeof Task) {}

  async createTask(dto: CreateTaskDto) {
    const task = await this.taskRepository.create(dto);
    return task;
  }

  async getAllTasks() {
    const tasks = await this.taskRepository.findAll();
    return tasks;
  }

  async removeTask(dto: RemoveTaskDto) {
    const task = await this.taskRepository.findOne({ where: { id: dto.id } });
    await task.destroy();
  }

  async setIsDoneTask(dto: SetIsDoneTaskDto) {
    const task = await this.taskRepository.findOne({ where: { id: dto.id } });
    task.isDone = dto.isDone;
  }
}
