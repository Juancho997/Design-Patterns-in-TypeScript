export class IoCContainer {
    private static _instance: IoCContainer = new IoCContainer();
    private _dependencies: { [key: string]: Object } = {};

    constructor() {
        if (IoCContainer._instance) {
            throw new Error("Singleton class. Cannot instanciate using new");
        }
        IoCContainer._instance = this;
    };

    public static get instace(): IoCContainer {
        return IoCContainer._instance;
    };

    register(name: string, dependencies: string[], implementation: any) {
        if (this._dependencies[name]) {
            throw new Error("Depency already registered");
        };

        let dependenciesImplementations = this.getDependenciesImplementations(dependencies);
        this._dependencies[name] = new implementation(...dependenciesImplementations);
    };

    private getDependenciesImplementations(names: string[]): Object[] {
        return names.map(name => this.resolve(name));
    };

    resolve<T>(name: string): T {
        if (!this._dependencies[name]) {
            throw new Error(`Unresolved dependency : ${name}]`);
        }
        return this._dependencies[name] as T;
    };
};

export function Register(name: string, dependencies: string[]): Function {
    let container = IoCContainer.instace;
    return function<T extends { new(...args: any[]): {} }>(constructor: T){
        container.register(name,  dependencies, constructor);
    }
}