import { IExportPostService } from './iexport-posts-service';
import { Post } from './post';


export interface IPostService {
    getAll(): Promise<Post[]>;
    save(post: Post): Promise<void>;
    export(service: IExportPostService): Promise<string>;
};
