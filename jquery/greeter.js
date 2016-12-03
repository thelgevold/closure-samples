import { GreetingService } from '../common/greeting-service'; 

export class GreeterJQuery {
  constructor() {

    let greetingService = new GreetingService();
    jQuery('#jq-greeting').fadeIn();
    jQuery('#jq-greetBtn').click(function(){
      let greeting = greetingService.getGreetingMessage();
      jQuery('#jq-greeting').text(greeting);
    });
  }
}