import { injectable, inject } from "inversify";
import { IDepA } from "../interfaces/idepa";
import { IDepB } from "../interfaces/idepb";
import { IDepC } from "../interfaces/idepc";
import { TYPES } from "../types";

@injectable()
export class ConcreteC implements IDepC {
    constructor(
        @inject(TYPES.IDepA) //inyectamos la implementación concreta que queremos usar
        private _depA: IDepA,
        @inject(TYPES.IDepB) 
        private _depB: IDepB,        
        ){ }

    doC(): void {
        this._depA.doA();
        this._depB.doB();
        console.log('Doing C');
    };
};