import { IPostService } from './ipost-service';
import { Post } from './post';


export class NewsFeed {
    constructor(private _service: IPostService) { }

    show() {
        this._service.getAll().then((posts:Post[]) => {
            posts.forEach(post => {
                console.log(`${post.title} - ${post.body}`);
            });
        });
    }
}
;
