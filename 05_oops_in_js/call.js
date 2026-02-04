



      function setUser(username){
          this.username = username;
      }


      function createUser ( username , email , pass ){
              setUser.call(this,username);
              this.email = email;
              this.pass = pass;
      }


      let  printUser = new createUser("abhi" ,"abhi@gmail.com",123);
      console.log(printUser);
      