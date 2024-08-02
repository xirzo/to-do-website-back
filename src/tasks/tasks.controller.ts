import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task.dto';
import { RemoveTaskDto } from './dto/remove-task.dto';
import { SetIsDoneTaskDto } from './dto/set-is-done-task.dto';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@ApiTags('Задачи')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @ApiOperation({ summary: 'Создание задачи' })
  @ApiResponse({ status: 200, type: Task })
  @Post()
  create(@Body() taskDto: CreateTaskDto) {
    return this.tasksService.createTask(taskDto);
  }

  @ApiOperation({ summary: 'Получить все задачи' })
  @ApiResponse({ status: 200, type: [Task] })
  @Get()
  getAll() {
    return this.tasksService.getAllTasks();
  }

  @ApiOperation({ summary: 'Удалить задачу' })
  @ApiResponse({ status: 200, type: Task })
  @Delete()
  remove(@Body() removeDto: RemoveTaskDto) {
    return this.tasksService.removeTask(removeDto);
  }

  @ApiOperation({ summary: 'Пометить задачу как решенную или нерешенную' })
  @ApiResponse({ status: 200, type: Task })
  @Patch()
  setIsDone(@Body() setIsDoneDto: SetIsDoneTaskDto) {
    return this.tasksService.setIsDoneTask(setIsDoneDto);
  }
}
