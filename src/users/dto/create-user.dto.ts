import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'Уникальный адрес почты пользователя' })
  readonly email: string;
  @ApiProperty({ example: 'qwerty', description: 'Пароль пользователя' })
  readonly password: string;
}
