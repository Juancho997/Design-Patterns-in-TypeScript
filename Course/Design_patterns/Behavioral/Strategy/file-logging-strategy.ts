import { IErrorLoggingStrategy } from "./ierror-logging-strategy";
import * as fs from 'fs';

export class FileErrorLoggingStrategy implements IErrorLoggingStrategy {

    log(err: Error): Promise<any> {
        return new Promise((resolve, reject) => {
            fs.appendFile("logs/error.log", `${err}\n`, "utf8", (err) => {
                if (err) {
                    console.error('Error Logging Failed');
                    reject(err)
                } else {
                    resolve(err);
                }
            })
        })
    }

}