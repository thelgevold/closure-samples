import { GreeterJQuery }   from './jquery/greeter';
import { GreeterLodash }   from './lodash/greeter';
import { PersonViewModel } from './knockout/person-model';

let greeterJQuery = new GreeterJQuery();
let greeterLodash = new GreeterLodash();

ko.applyBindings(PersonViewModel);