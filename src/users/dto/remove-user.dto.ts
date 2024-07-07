import { ApiProperty } from '@nestjs/swagger';

export class RemoveUserDto {
  @ApiProperty({
    example: '1',
    description: 'Уникальный идентификатор пользователя',
  })
  readonly id: number;
}
