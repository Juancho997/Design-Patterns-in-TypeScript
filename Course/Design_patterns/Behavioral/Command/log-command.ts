import * as fs from 'fs';
import { ICommand } from "./icommand";

export interface LogCommandParams {
    title: string;
    body: string;
    error: Error;
    filename: string;
};

export class LogCommand implements ICommand {

    private readonly _logCommandParams: LogCommandParams;

    constructor(params: LogCommandParams) {
        this._logCommandParams = params
    }


    execute(): Promise<any> {
        return new Promise<void>((resolve, reject) => {
            const contents = `${this._logCommandParams.title}: ${this._logCommandParams.body} - ${this._logCommandParams.error} \n`;

            fs.appendFile(this._logCommandParams.filename, contents, 'utf8', err => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve();
                }
            })
        })
    }

}