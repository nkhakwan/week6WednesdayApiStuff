//import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



$(document).ready(function() {
    $('#weatherLocation').click(function() {
      const city = $('#location').val();
      $('#location').val("");
        console.log(`logger is in read function with city as ${city}`);
      asyncApiCall();
  
      async function asyncApiCall() {
        try {
          let response = await fetch(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=2&words=5`);
          let jsonifiedResponse;
          if (response.ok && response.status == 200) {
            jsonifiedResponse = await response.json();
            console.log(`logger is in correct response arena`);
            console.log(jsonifiedResponse);
          } else {
            jsonifiedResponse = false;
            console.log(`logger is in false arena`);
            console.log(`logger asking for result and here it is ${jsonifiedResponse}`)
          }
          getElements(jsonifiedResponse);
        } catch(error) {
          getElements(false);
        }
      }
  
      const getElements = function(response) {
        if (response) {
          $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
          $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
        } else {
          $('.showHumidity').text(`There was an error handling your request.`);
          $('.showTemp').text(`Please check your inputs and try again!`);
        }
      }
    });
  });













