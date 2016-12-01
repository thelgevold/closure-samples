import { GreetingService } from '../common/greeting-service'; 

export class GreeterJQuery {
  constructor() {

    let greetingService = new GreetingService();

    $('#jq-greetBtn').click(function(){
      let greeting = greetingService.getGreetingMessage();
      $('#jq-greeting').text(greeting);
    });
  }
}