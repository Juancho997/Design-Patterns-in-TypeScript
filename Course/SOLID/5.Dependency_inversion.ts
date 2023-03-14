// Las clases y módulos deben depender de abstracciones(interfaces),
// en vez de implementaciones concretas.
// Loose Coupling => código desacoplado, que tenga la menor relación posible un componente de otro

import * as fs from 'fs';

export interface Post {
    id: number;
    title: string;
    body: string;
    postedBy: string;
};

// De entrada, creamos la interfaz del servicio para definir
// como se comportará su implementación
export interface IPostService {
    getAll(): Promise<Post[]>;
    save(post: Post): Promise<void>;
};

// export class PostService implements IPostService {

//     private _filename: string = 'posts.json';

//     getAll(): Promise<Post[]> {

//         return new Promise((resolve, reject) => {
//             fs.readFile(this._filename, 'utf8', (err, data) => {
//                 if (err) {
//                     reject(err)
//                 }
//                 resolve(JSON.parse(data));
//             });
//         });
//     };

//     save(post: Post): Promise<void> {

//         return new Promise((resolve, reject) => {
//             this.getAll().then(posts => {

//                 posts.push(post);

//                 fs.writeFile(this._filename, posts, err => {
//                     if (err) {
//                         reject(err);
//                     } else {
//                         resolve();
//                     }
//                 })
//             })

//         });


//     };

// };


// Evitamos tocar la 'capa de persistencia' (BDD)
export class MockPostService implements IPostService {
    posts: Post[] = [];

    constructor() {
        this.posts = [
            { id: 1, title: 'Title 1', body: 'Body 1', postedBy: 'Me' },
            { id: 1, title: 'Title 2', body: 'Body 2', postedBy: 'Me' },
            { id: 1, title: 'Title 3', body: 'Body 3', postedBy: 'Me' },
            { id: 1, title: 'Title 4', body: 'Body 4', postedBy: 'Me' }
        ]
    };

    getAll(): Promise<Post[]> {
        return Promise.resolve(this.posts);
    };

    save(post: Post): Promise<void> {
        this.posts.push(post);
        return Promise.resolve();
    }

}

export class NewsFeed {
    // Inyecto la interfaz 
    constructor(private _service: IPostService) { }

    show() {
        this._service.getAll().then(posts => {
            posts.forEach(post => {
                console.log(`${post.title} - ${post.body}`);
            })
        });
    }
};

// Al inyectar la interfaz, y no una implementación, 
// podemos usar NewsFeed con cualquier clase que utilice IPostService 

// let newsFeed = new NewsFeed(new PostService()); 
let newsFeed = new NewsFeed(new MockPostService());
newsFeed.show()