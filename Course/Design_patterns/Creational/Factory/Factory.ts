// Es una combinación del principio de responsabilidad única y open/closed
// Factory de personaje de videojuegos

// Al existir distintas clases de personajes, podemos usar una factory para crear cada clase, sin saber como se crea cada una 
// Delegamos la responsabilidad de creación a la factory
// Open/Closed = con agregar aquí la creación de cada personaje, no hace falta tocar el código 

export interface GameCharacter {
    strength: number;
    dexterity: number;
    health: number;
    magic: number;
};

export class GameCharacterFactory {

    public static getWarrior(level: number): GameCharacter {
        let warrior: GameCharacter;

        if (level < 10) {
            warrior = {
                strength: 18,
                dexterity: 12,
                health: 20,
                magic: 0
            }
        } else {
            warrior = {
                strength: 30,
                dexterity: 21,
                health: 32,
                magic: 0
            }
        }
        return warrior;

    };

    public static getMage(level: number): GameCharacter {
        let mage: GameCharacter;

        if (level < 10) {
            mage = {
                strength: 0,
                dexterity: 8,
                health: 10,
                magic: 32
            }
        } else {
            mage = {
                strength: 2,
                dexterity: 12,
                health: 14,
                magic: 92
            }
        }
        return mage;
    };

};