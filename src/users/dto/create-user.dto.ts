import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'example@gmail.com',
    description: 'Почта пользователя',
  })
  readonly title: string;
  @ApiProperty({ example: 'qwerty12345', description: 'Пароль пользоветля' })
  readonly description: string;
}
