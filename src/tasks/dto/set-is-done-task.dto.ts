import { ApiProperty } from '@nestjs/swagger';

export class SetIsDoneTaskDto {
  @ApiProperty({ example: 'Id', description: 'Айди задачи' })
  readonly id: number;
  @ApiProperty({ example: 'false', description: 'Выполнена ли задача' })
  readonly isDone: boolean;
}
