export class WeatherService {
  async getWeatherByCity(city) {
    try {
      //let response = await fetch(`https://cors-anywhere.herokuapp.com/bikeindex.org/api/v3/search?stolenness=proximity&location=IP&distance=10`);
      let response = await fetch(`https://bikeindex.org/api/v3/search?stolenness=proximity&location=IP&distance=10`);
      let jsonifiedResponse;
      console.log(`logger needs ${response.ok} and ${response.status}`);
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
        console.log(`logger here is the actual thing ${jsonifiedResponse} and ${city}`);
      } else {
        jsonifiedResponse = false;
        console.log (`logger in a wrong area`);
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }



}