import { GreeterJQuery } from './jquery/greeter';
import { GreeterLodash } from './lodash/greeter';
import { PersonService } from './common/person-service';

let greeterJQuery = new GreeterJQuery();
let greeterLodash = new GreeterLodash();

let PersonViewModel = {
  firstName : ko.observable("Torgeir"),
  lastName : ko.observable("Helgevold")
};

PersonViewModel.fullName = ko.computed(function() {
  return this.firstName() + " " + this.lastName();    
}, PersonViewModel)

/** @nocollapse */
ko.applyBindings(PersonViewModel);