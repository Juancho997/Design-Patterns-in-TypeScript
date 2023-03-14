import * as fs from 'fs';
import { IExportPostService } from './iexport-posts-service';
import { IPostService } from './ipost-service';
import { Post } from './post';


export class PostService implements IPostService {

    private _filename: string = 'posts.json';

    getAll(): Promise<Post[]> {

        return new Promise((resolve, reject) => {
            fs.readFile(this._filename, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(JSON.parse(data));
            });
        });
    };

    save(post: Post): Promise<void> {

        return new Promise((resolve, reject) => {
            this.getAll().then((posts) => {

                posts.push(post);

                fs.writeFile(this._filename, JSON.stringify(posts), err => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });

        });


    };

    export(service: IExportPostService): Promise<string> {
        return this.getAll().then(posts => service.export(posts));
    }

}
;
