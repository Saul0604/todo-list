import { Column, Model, Table, DataType } from "sequelize-typescript";

@Table({
    tableName: 'tareas'
})
export class Todo extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    title!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    description!: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: true
    })
    completed!: boolean;
}

