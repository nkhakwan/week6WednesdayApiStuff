import { WeatherService } from './actual.js';

$(document).ready(function() {

  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");
    (async () => {
      let weatherService = new WeatherService();
      const response = await weatherService.getWeatherByCity(city);
      //console.log(`For the logger here is the response ${response.bikes[0].date_stolen}`);
      console.log(response);
      getElements(response);
    })();

    
    function getElements(response) {
      if (response) {
        $('.showHumidity').text("nothing");
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      } else {
        $('.showHumidity').text(`There was an error handling your request.`);
        $('.showTemp').text(`Please check your inputs and try again!`);
      }
    }

  });
});