import {CarService} from './car-service';

let countryService = require('./country-service');

let carService = new CarService();

console.log(carService.getCars());

console.log(countryService.getCountries());
