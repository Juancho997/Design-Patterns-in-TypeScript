import { GameCharacter } from "./game-character";
import { GameCharactersFactory } from "./game-characters-factory";

export class GameCharactersPool {

    private _warriorsPool: GameCharacter[] = [];
    private _magesPool: GameCharacter[] = [];

    static WARRIORS_POOL_SIZE = 30;
    static MAGES_POOL_SIZE = 20;

    constructor(private _level: number) {
        this.loadWarriorsPool();
        this.loadMagesPool();
    }


    private loadMagesPool(): any {
        for (let i = 0; i < GameCharactersPool.MAGES_POOL_SIZE; i++) {
            this._magesPool.push(GameCharactersFactory.getMage(this._level));
        }
    }

    private loadWarriorsPool(): any {
        for (let i = 0; i < GameCharactersPool.WARRIORS_POOL_SIZE; i++) {
            this._warriorsPool.push(GameCharactersFactory.getWarrior(this._level));
        }
    }

    // Con esta fn() obtenemos instancias de cada pool, ya que las mismas son privadas
    // Gracias al Generic Type, podemos usar una sola fn para ambos tipos de items en pools 
    private getPoolItem<T>(pool: T[], reloadFn: () => void): T {
        let item: T = pool.pop() as T;
        if (!pool.length) {
            reloadFn();
        }
        return item;
    };

    public getWarrior(): GameCharacter {
        return this.getPoolItem(this._warriorsPool, this.loadWarriorsPool.bind(this));
    }

    public getMage(): GameCharacter {
        return this.getPoolItem(this._magesPool, this.loadMagesPool.bind(this));
    }


}