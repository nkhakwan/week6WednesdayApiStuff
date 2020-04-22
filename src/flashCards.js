export class Question {
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
  
}

