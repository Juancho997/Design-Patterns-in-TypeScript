import { injectable } from "inversify";
import { IDepB } from "../interfaces/idepb";

@injectable()
export class ConcreteB implements IDepB {
    doB(): void {
        console.log('Doing B');
    }

}