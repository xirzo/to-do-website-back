import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'Title', description: 'Заголовок' })
  readonly title: string;
  @ApiProperty({ example: 'Description', description: 'Описание' })
  readonly description: string;
}
