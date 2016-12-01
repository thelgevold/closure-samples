import { PersonService } from '../common/person-service'; 

export class GreeterLodash {
  constructor() {

    let personService = new PersonService();

    document.getElementById('ld-greeterBtn').addEventListener('click', () => {
      let friends = personService.getFriends();
      let joe = _.find(friends, {name: 'Joe'});
      document.getElementById('ld-greeting').innerText = `Hello ${joe.name}`;
    });
  }
}