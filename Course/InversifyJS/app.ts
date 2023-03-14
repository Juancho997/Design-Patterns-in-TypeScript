import { IDepC } from "./interfaces/idepc";
import container from "./inversify.config";
import { TYPES } from "./types";

// El valor de retorno es una implementación concreta de la clase concreteC()
let c = container.get<IDepC>(TYPES.IDepA);
c.doC();
