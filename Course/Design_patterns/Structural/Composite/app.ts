import { Card } from "./card";
import { CardDeck } from "./card-deck";

let deck1 = new CardDeck();

deck1.add(new Card("Card 1", 32, 43));
deck1.add(new Card("Card 2", 30, 100));


let deck2 = new CardDeck();

deck2.add(new Card("Card 3", 32, 43));
deck2.add(new Card("Card 4", 30, 100));

deck1.add(deck2);
deck1.add(new Card("Card 5", 89, 99));

console.log(deck1.display());