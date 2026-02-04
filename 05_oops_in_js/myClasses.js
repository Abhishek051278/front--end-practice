     

       
       class user  {
        constructor( username , email , password ){

            this.username = username ;
            this.email = email;
            this.password = password ;
        }
           
         encryptPassword(){
            return  `${this.password}xyz`;
        }
         

         changeText (){
             return `${this.username.toUpperCase()}`       }


       }

      

       let user1 = new user("tony starlk" ,"tony@gmail.com",123);

       console.log(user1.encryptPassword());
       console.log(user1.changeText());