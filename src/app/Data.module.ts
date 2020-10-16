import { TodoList } from './todo/todo.component';
export class Data {
    utilisateur: string;
    password: string;
    todoListes: TodoList[];
    constructor(utilisateur, password, todoListes) {
        this.utilisateur = utilisateur;
        this.password = password;
        this.todoListes = todoListes
    }

}