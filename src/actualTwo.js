export class WeatherService {
  async getWeatherByCity(city) {
    try {
      let response = await fetch(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=2&words=5`);
      let jsonifiedResponse;
      //let a = await response.ok;
     // let b = await response.status;
      console.log(`logger needs ${response.ok} and ${response.status}`);
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
        console.log(jsonifiedResponse + city);
      } else {
        jsonifiedResponse = false;
        console.log (`logger in a wrong area`);
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }

  okFinally (myData){
  console.log (`finally do i have my data or not ${myData}`);
  }



 /* async testingFunction(){
    let aVariable = await this.getWeatherByCity("");
    console.log(`logger here is the actual Data ${aVariable[0]}`);
  }*/

}


 
