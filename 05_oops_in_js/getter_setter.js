


    // class user {

    //     constructor (email,password){
    //          this._email = email;
    //          this._password = password;
    //     }

    //     get email(){
    //         return this._email.toUpperCase();
    //     }

    //     set email(value){
    //         this._email= value;
    //     }
    // }

      


    // const user1 = new user("abhi@gmail.com",90);

    //  console.log(user1.email);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//   another method of getter settter
      


   function newUser (name , email){
                this._name = name ;
                this._email = email ;
              

                Object.defineProperty(this,"email",{
                       
                    get : function(){
                        return this._email.toUpperCase()
                    },

                    set : function (value){
                        this._email = value
                    }
                })

               }


       const newUser1 = new newUser("tony stark","tony@gmail.com");

       console.log(newUser1.email);

        




