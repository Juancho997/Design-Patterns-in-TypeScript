import { GameCharacterFactory } from "./Factory";

let warrior = GameCharacterFactory.getWarrior(11);
let mage = GameCharacterFactory.getMage(11);

console.log(`Warrior at level 11 : `, warrior);
console.log(`Mage at level 11 : `, mage);