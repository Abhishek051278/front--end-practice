

 class user {

    constructor (username ){
          this.username = username ;

    }


    logMe (){
        console.log(` username is ${this.username}`);
    }
 }


  class teacher extends user {

    constructor (username , email , password ){
          super(username)

          this.email = email;
          this.password = password ;

    }

      addCourse (){
        console.log(`course was added by ${this.username}`)
      }
  }

    let mathsTeacher = new teacher("ik gujral " , "pk@gmail.com" , 123);

    mathsTeacher.logMe();

    let student = new user( "steve ", " steve@gmail.com" , 456);

    // student.addCourse();         // student cant access teachers properties

    student.logMe();


     console.log( mathsTeacher instanceof user);    // True