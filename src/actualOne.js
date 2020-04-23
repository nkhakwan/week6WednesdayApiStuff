export class WeatherService {
  async getWeatherByCity(city) {
    try {
      let response = await fetch(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=2&words=5`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
        console.log(jsonifiedResponse + city);
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}