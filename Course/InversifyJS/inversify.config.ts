import {Container} from 'inversify';
import { ConcreteA } from './implementations/concreteA';
import { ConcreteB } from './implementations/concreteB';
import { ConcreteC } from './implementations/concreteC';
import { IDepA } from './interfaces/idepa';
import { IDepB } from './interfaces/idepb';
import { IDepC } from './interfaces/idepc';
import { TYPES } from './types';

let container = new Container(
    // Transient por default
    // {
    //     defaultScope:"Singleton"
    // }
);

// Cada pedido de instacia será Singleton
container.bind<IDepA>(TYPES.IDepA).to(ConcreteA).inSingletonScope();

// Cada pedido de instancia será Transient 
container.bind<IDepB>(TYPES.IDepB).to(ConcreteB)//.inTransientScope();

// Cada pedido de instancia será Singleton siempre que nos mantengamos en el scope del request
// Dejará de serlo una vez que llamemos al método container.unbind() 
container.bind<IDepC>(TYPES.IDepC).to(ConcreteC);

export default container;