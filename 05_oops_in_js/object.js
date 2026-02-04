



  function multiplyBy5 (num){                                  

      return num * 5 
  } 

  multiplyBy5.power = 2; 


//   console.log(multiplyBy5(5));
//   console.log(multiplyBy5.power);
//   console.log(multiplyBy5.prototype);    




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
             
                            //    new keyword  


      function CreateUser  ( username , price ){
         this.username = username;
         this.price = price ;
     }


     CreateUser.prototype.increment = function (){
                console.log(` 1rs fee is add ${++this. price }`);
     }

     CreateUser.prototype.printMe = function(){

        console.log(`price is ${this.price}`);
        
     }


     let chai = new CreateUser("chai",25);
     let tea = new CreateUser("tea",10);


        // chai.printMe();
        tea.increment();
        // tea.printMe();