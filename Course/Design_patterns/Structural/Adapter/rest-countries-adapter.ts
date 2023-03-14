import { Continent } from "./countries-repository";
import { Country } from "./country";
import { ICountriesRepository } from "./icountries-repository";
import { RestCountries } from "./rest-countries";

// RestCountriesAdapter conjuga la antigua implementacion (countries-repository) con la nueva (rest-countries)
// Creamos una interfaz con los métodos de la antigua implementación (icountries-repository)
// La implementamos en la primer clase
// Creamos el adapter, implementamos la interfaaz anterior
// Implementamos los métodos "viejos"
// Y en el constructor inyectamos la nueva implementación, para tener una referencia y acceder 
// Nótese de que creamos métodos auxiliares para darle el formato deseado a la salida de la nueva implementación
// De esta forma el cliente no sabrá de quién llegan los datos, simplemente los recibe en el formato al que estaba acostumbrado

export class RestCountriesAdapter implements ICountriesRepository {

    constructor(private _restCountriesAPI: RestCountries) { };

    private restCountryToCountry(restCoutry: any): Country {
        return {
            name: restCoutry.name.common,
            capital: restCoutry.capital,
            currency: restCoutry.currencies
        };
    };

    private restCountriesToCountries(restCountries: any[]): Country[] {
        return restCountries.map(restCountry => this.restCountryToCountry(restCountry));
    };

    async all(): Promise<Country[]> {
        let restCountries = await this._restCountriesAPI.getAll();
        return this.restCountriesToCountries(restCountries);
    };

    async allByContinent(continent: Continent): Promise<Country[]> {

        let region = '';

        if (continent == Continent.NorthAmerica || continent == Continent.SouthAmerica) {
            region = 'Americas';
        } else {
            region = Continent[continent];
        };

        let restRegionCountries = await this._restCountriesAPI.getByRegion(region);
        let result = [];

        if (continent == Continent.NorthAmerica) {
            result = restRegionCountries.filter(restRegionCountry => restRegionCountry.subregion == "North America")
        } else if (continent == Continent.SouthAmerica) {
            result = restRegionCountries.filter(restRegionCountry => restRegionCountry.subregion == "South America")
        } else {
            result = restRegionCountries;
        }

        return this.restCountriesToCountries(result);

    };

    async allByCurrency(currency: string): Promise<Country[]> {
        let restCountries = await this._restCountriesAPI.getByCurrency(currency);
        return this.restCountriesToCountries(restCountries);
    };

};