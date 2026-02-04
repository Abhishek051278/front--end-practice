



//  let promiseOne = new Promise(function(resolve , reject){
               
//     setTimeout(function(){
//         console.log("abhishek");
//         resolve()
//     },1000)
//  })

//     promiseOne.then(function(){
//         console.log('promiseOne consumed');
//     });




//      new Promise(function(resolve,reject){

//     setTimeout(function(){
//       console.log("without variable ")
//        resolve()
//     },2000)
//    }).then(function(){
//        console.log("promiseTwo consumed");
//    })



// let promiseThree = new Promise(function(resolve , reject){
        
//     setTimeout(function(){
//         resolve({ username : "abhishek" , email : "abhi@gmail.com"})
//     },1000)
// })


// promiseThree.then(function(user){

//     console.log(user);
// })



//   let promiseFour = new Promise(function(resolve , reject){
           
//     setTimeout(function(){
//         let error = false;
//         if(!error){

//             resolve({username : " abhi", password : 123})
//         } else {

//             reject("Something went wrong : Try again")
//         }
//     },1000)
//   })

      
//   promiseFour
//   .then(function(user){
//         console.log(user);
//         return user.password
//   })
//   .then(function(password){
//        console.log(password);
//   })
//   .catch(function(err){
//      console.log(err);
//   })
//   .finally(function(){
//      console.log("The promise is either resolved or reject")
//   });


// let promiseFive = new Promise(function(resolve , reject){
           
//     setTimeout(function(){
//         let error = false;
//         if(!error){

//             resolve({username : " javascript", password : 123})
//         } else {

//             reject("Js went wrong ")
//         }
//     },1000)
//   })


//   async function consumePromiseFive() {
//      try{
//        let response = await promiseFive
//        console.log(response.password);
       
//      }catch(error){
//         console.log(error);
//      }
//   }

//   consumePromiseFive();



//  async function getAllUsers (){

//      try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users');
     
//          let data =  await response.json()
//          console.log(data);
        
//      } catch (error) {
//           console.log("E:",error);
//      }
//  }

//  getAllUsers()


// fetch('https://api.github.com/users/hiteshchoudhary')

// .then(function(resposne){
//   return resposne.json();
// })
// .then((data)=>{
//        console.log(data);
       
// })
// .catch((error)=>{
//       console.log(error);
// })


