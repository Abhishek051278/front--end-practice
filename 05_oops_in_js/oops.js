



 function User ( username , isLoggedIn , loginCount){
           
    this.name = username;
    this.login = isLoggedIn;
    this.count = loginCount;

    this.greeting = function(){
         console.log(` welcome ${this.name}`);
    }};

        
    // return { name : "hulk" , age : 80}            In a constructor function , javascript automatically returns the this* object .If an
   //                                                object is explicitly returned, it replaces the newly created instance and breaks the 
  //                                                 constructor pattern


  let userOne =  new User( "abhi" , true, 8 );
  let userTwo =   new User("tony" , true,10);


   console.log(userOne);
   console.log(userTwo);