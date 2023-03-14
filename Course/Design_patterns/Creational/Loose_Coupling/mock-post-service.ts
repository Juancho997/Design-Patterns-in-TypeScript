import { IExportPostService } from './iexport-posts-service';
import { IPostService } from './ipost-service';
import { Post } from './post';


export class MockPostService implements IPostService {
    posts: Post[] = [];

    constructor() {
        this.posts = [
            { id: 1, title: 'Title 1', body: 'Body 1', postedBy: 'Me' },
            { id: 1, title: 'Title 2', body: 'Body 2', postedBy: 'Me' },
            { id: 1, title: 'Title 3', body: 'Body 3', postedBy: 'Me' },
            { id: 1, title: 'Title 4', body: 'Body 4', postedBy: 'Me' }
        ];
    };

    getAll(): Promise<Post[]> {
        return Promise.resolve(this.posts);
    };

    save(post: Post): Promise<void> {
        this.posts.push(post);
        return Promise.resolve();
    };

    export(service: IExportPostService): Promise<string>{
        return this.getAll().then(posts=> service.export(posts));
    };

}
