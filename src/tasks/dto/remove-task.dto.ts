import { ApiProperty } from '@nestjs/swagger';

export class RemoveTaskDto {
  @ApiProperty({ example: 'Id', description: 'Айди задачи' })
  readonly id: number;
}
