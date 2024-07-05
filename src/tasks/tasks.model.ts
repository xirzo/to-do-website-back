import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface TaskCreationAttribute {
  title: string;
  description: string;
}

@Table({ tableName: 'tasks' })
export class Task extends Model<Task, TaskCreationAttribute> {

  @ApiProperty({ example: '1', description: 'Уникальной идентификатор задачи' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'Заголовок', description: 'Заголовок задачи' })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({ example: 'Описание', description: 'Описание задачи' })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;
}
