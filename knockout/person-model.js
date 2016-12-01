const PersonViewModel = {
  'firstName' : ko.observable("Torgeir"),
  'lastName' : ko.observable("Helgevold")
};

PersonViewModel['fullName'] = ko.computed(function() {
  return this['firstName']() + " " + this['lastName']();    
}, PersonViewModel);

export {PersonViewModel};