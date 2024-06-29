import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';

@ApiTags('Задачи')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) { }

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
    return this.tasksService.getAllTasks()
  }
}
