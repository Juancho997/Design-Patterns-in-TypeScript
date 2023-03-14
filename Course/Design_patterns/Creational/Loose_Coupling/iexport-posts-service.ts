import { Post } from "./post"

export interface IExportPostService {
    export(post: Post[]) : string;
    save(post:Post):Promise<void>;
};