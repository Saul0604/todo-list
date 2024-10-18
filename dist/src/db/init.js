"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = exports.db = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const todo_model_1 = require("./models/todo.model"); // Asegúrate de que la ruta sea correcta
exports.db = new sequelize_typescript_1.Sequelize({
    database: "todoList",
    username: "root",
    password: "12345",
    host: "localhost",
    dialect: 'mysql',
    models: [todo_model_1.Todo] // Asegúrate de que el modelo User esté correctamente importado
});
const dbConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.db.sync({ force: false });
        console.log('base de datos conectada');
    }
    catch (error) {
        console.error(`Unable to connect to the database: ${error}`);
    }
});
exports.dbConnection = dbConnection;
