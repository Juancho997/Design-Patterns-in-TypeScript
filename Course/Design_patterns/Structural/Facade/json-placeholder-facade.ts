import { IJsonPlaceholderService } from "./ijson-placeholder-service";
import { User } from "./models/user";

// El objetivo de esa facade es hacer los llamados a los servicios correspondientes, en una sola implementación
// Agrega una capa más de abstracción sin necesidad de tocar las ya funcionales  

export class JsonPlaceholderFacade {
    constructor(private _service: IJsonPlaceholderService) { }

    // al requerir un User, también requerimos sus Posts y Todos
    // por ello, usamos esta facade para hacer dichos llamados, abstrayendo su implementación concreta vía getUser
    async getUser(userId: number): Promise<User | null> {

        let allUsers = await this._service.getUsers();
        const currentUser = allUsers.find(user => user.id == userId);

        let allPost = await this._service.getPosts();
        let allTodos = await this._service.getTodos();
        
        if (currentUser) {
            
            currentUser.posts = allPost.filter(post => post.userId == userId);
            currentUser.todos = allTodos.filter(todo => todo.userId == userId);

            return currentUser;
        
        } else {
            return null;
        }
    }
}