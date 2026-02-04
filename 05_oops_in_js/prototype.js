
let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


   Object.prototype.abhishek = function(){
      console.log("abhishek says hello");
   }



   myHeros.abhishek();
   heroPower.abhishek();



   // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //      Inheritance 

    const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

//    console.log(TASupport.isAvailable);
       
Object.setPrototypeOf(Teacher,User);
    
// console.log(Teacher.email);


  let myString = "captain   ";

    String.prototype.trueLength = function(){

        console.log(` actual length is ${this.trim().length}`)
    }




     myString.trueLength();
     "         abhishek".trueLength();