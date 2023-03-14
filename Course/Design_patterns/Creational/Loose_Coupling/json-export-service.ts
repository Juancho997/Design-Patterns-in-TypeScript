import { IExportPostService } from "./iexport-posts-service";
import { Post } from "./post";

export class JsonExportService implements IExportPostService {
   
    export(posts: Post[]): string {
        return JSON.stringify(posts);
    };
   
    save(post: Post): Promise<void> {
        throw new Error("Method not implemented.");
    };

};