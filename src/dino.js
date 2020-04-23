import {Dino} from '../src/dino.js'

describe('Initial Dino-Ipsum Calls', () => {
  let dino;
  let promise;
  let request;
  let url;

  beforeEach(() => {
    dino = new Dino();
  });

  test('Should get a successful request from dino-ipsum api', () => {
    (async () => {
      let result = await dino.dinoRequest();
      expect(getElements(result)).toEqual(true);
    })();
    function getElements(result){
      if (result){
        console.log("We got the Dino Ipsum!")
        return true;
      } else {
        console.log("There was an error getting your response")
        return false;
      }
    }
  });
});



export class Dino{
  constructor(paragraphs){
    this.paragraphs = paragraphs
  }

  async dinoRequest() {
    console.log("dinoRequest() started")
    try {
      console.log("Start of try block")
      let response = await fetch('http://dinoipsum.herokuapp.com/api/?format=json');
      if (response.ok && response.status == 200) {
        console.log(response)
        return await response
      } else {
        response = false
      }
      return response;
    } catch(error) {
      console.log("Catch")
      return false;
    }
  }
}


//==============================================================================
//==============================================================================
//==============================================================================


/*export class Question {
  constructor(){
      this.answer = "";
      this.score = 10;
      this.response = "";
      this.time = "";
  }

setVerification() {
  setTimeout(() => {
    console.log(`Here is the answer that the function got ${this.answer}`);
    let answers =["blue"];
    if (answers[0] === this.answer){
      this.response = "correct";
    }else {
      this.response = "not correct";
    }    
    
  }, 10000);
}

setScore() {
  let ggg = setInterval(() => {
    this.score --;
    if(this.answer != ""){
      this.time = this.score;
      clearInterval(ggg);
    }
    console.log (`input was inputted at ${this.time}`);
  }, 1000);
}

askQuestion(){
  return "what is the coolest color";
}

}*/