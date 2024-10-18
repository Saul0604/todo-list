import { Sequelize } from "sequelize-typescript";
import { Todo } from "./models/todo.model"; // Asegúrate de que la ruta sea correcta
import { envs } from "../config/envs";

export const db = new Sequelize({
    database: envs.MYSQL_DB,
    username: envs.MYSQL_USER,
    password: envs.MYSQL_PASSWORD,
    host: envs.MYSQL_HOST,
    dialect: 'mysql',
    models: [Todo] // Asegúrate de que el modelo Todo esté correctamente importado
});

export const dbConnection = async () => {
    try {
        await db.sync({force: false});
        console.log('base de datos conectada');
    } catch (error) {
        console.error(`Unable to connect to the database: ${error}`);
    }
}
