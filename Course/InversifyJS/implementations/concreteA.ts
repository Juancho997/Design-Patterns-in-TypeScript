import { injectable } from "inversify";
import { IDepA } from "../interfaces/idepa";

@injectable()
export class ConcreteA implements IDepA{
    doA(): void {
        console.log('Doing A');
    }

}