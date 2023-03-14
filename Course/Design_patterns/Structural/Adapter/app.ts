import { Continent, CountriesRepository } from "./countries-repository"
import { RestCountries } from "./rest-countries";
import { RestCountriesAdapter } from "./rest-countries-adapter";

let countriesRepo = new RestCountriesAdapter(new RestCountries());
let currency = "EUR"

countriesRepo.allByCurrency(currency).then(countries => {
    console.log(`Countries that use ${currency}`, countries);
});

countriesRepo.allByContinent(Continent.NorthAmerica).then(northAmerica => {
    console.log(`Number of North America countries stored: ${northAmerica.length}`);
    console.log('North America countries: ', northAmerica);
});

countriesRepo.allByContinent(Continent.SouthAmerica).then(countries => {
    console.log(`Number of South American countries : ${countries.length}`);
});

countriesRepo.all().then(countries => {
    console.log(`Number of countries : ${countries.length}`);
});
