// En pos de implementar este patrón, vamos a "romper" el Ppio de InterfaceSegregation, 
// ya que en esta interfaz declaramos métodos que serán utilizados por DeckComponent 
// y no por CardComponent  

export interface ICardComponent {
    add(component: ICardComponent): void;
    remove(component: ICardComponent): void;
    get(index: number): ICardComponent;
    display(): string;
};
