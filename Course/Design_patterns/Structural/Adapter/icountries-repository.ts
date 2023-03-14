// esta interfaz nos ayudará a combinar ambos repositorios

import { Continent } from "./countries-repository";
import { Country } from "./country";

export interface ICountriesRepository{
    all(): Promise<Country[]>;
    allByContinent(continent: Continent): Promise<Country[]>;
    allByCurrency(currency: string) : Promise<Country[]>;
}