/** @export */
const PersonViewModel = {};

/** @export */
PersonViewModel.fName = ko.observable("Torgeir");

/** @export */
PersonViewModel.lName = ko.observable("Helgevold");

/** @export */
PersonViewModel.fullName = ko.computed(function() {
  return PersonViewModel.fName() + " " + PersonViewModel.lName();    
});

export {PersonViewModel};