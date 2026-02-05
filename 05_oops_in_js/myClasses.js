     

       
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

      

       let user1 = new user("tony stark" ,"tony@gmail.com",123);

       console.log(user1.encryptPassword());
       console.log(user1.changeText());


       // behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());