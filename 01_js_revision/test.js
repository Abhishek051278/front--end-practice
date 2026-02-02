// let oldEmail = "abhi@gmail.com";

// let newEmail = oldEmail;

// newEmail = "abhishek@gmail.com"

// console.log(newEmail);
//  console.log(oldEmail);

//  let course = {name : "html", price : 2400}

//  let newCourse = course

//    newCourse.name = "javscript";

//    console.log(course.name);
//    console.log(newCourse.name);

myArr = [0, 1, 2, 3, 4, 5, 6];

newArr = myArr.join("-----");

// console.log(newArr);

const mysym = Symbol("key1");

const newUser = {
  [mysym]: "key2",
};

// console.log(newUser[mysym]);
// console.log(typeof [mysym]);
// console.log(newUser)

let newObj = {
  name: "abhishek",
  courseInstructor: "hitesh",
};

const { courseInstructor: instructor } = newObj;

//  console.log(instructor);

// function test(){

//   console.log(this)
// }

// test()

//   console.log(this)

// function test(){

//   console.log(arguments);
// }

// // test(1,2,3);

// const test1 = ()=> {

//   console.log(arguments);
// }
//  test1(1,2,3);

// let  scroe = 200;
// if ( true){
//    var power = "fly" ;
//    console.log(`result is ${power} `) ;
// }

//    console.log(`result is ${power} `) ;

// let balance = 899;

// if(balance < 500){
//   console.log(`less than 500  and the balance is ${balance}`)
// }else if (balance < 800){
//   console.log(`less than 800 and the balance is  ${balance}`)
// }else if ( balance < 900){
//   console.log(`less than 900 and the balance is  ${balance}`)

// }else{
//   console.log(`greater  than 1000  and the balance is ${balance}`)

// }

// switch(){

//   case value:
//     break;

//    default :
//    break;
// }

let light = "pink";

// switch (light){

//   case "green":
//   case "pink" :
//   console.log("Go") ;
//   break;

//   case "yellow":
//   console.log("Ready") ;
//   break;

//   case "red":
//   console.log("Stop") ;
//   break;

//   default:
//   console.log("default is matched ")
//   break;
// }

//   let emptyObj = {};

//  if(Object.keys(emptyObj).length === 0){
//   console.log("object is empty");

//  }

//  let price = 99;

//  price >= 100 ? console.log(`price is more than 100 and it is ${price}`) : console.log(`price is less than 100 it is ${price}`)

// outer: for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     if (i * j == 5) {
//       console.log(`5 is detected ${i * j}`);
//       continue outer;
//     }

//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// let heroes = [ " ironman", "hulk" ,"captain ", "thor"];

// let index = 0;
// while(index < heroes.length){

//   console.log(`value is ${heroes [index]}`)
//   index++;
// }

// let score = 12 ;

// do {
//  console.log(`score is ${score}`)
//  score++

// }while( score <= 10);

// let heroes = [ " ironman", "hulk" ,"captain ", "thor"];

//  for(const val of heroes){
//   console.log(val);
//  }

// const map = new Map();

// map.set('Fr', "France");
// map.set('C', "China");
// map.set('In', "India");

// for(const [ key,value] of map){
//   // console.log(key,value);
// }

// let newObject = {

//   'name':"abhishek",
//   'class': "Btech"
// }

// for (const key in newObject){
//   console.log(`key is ${key} and value is ${newObject[key]}`)
// }

let heroes = [" ironman", "hulk", "captain ", "thor"];

// heroes.forEach((item , index, arr)=>{
//    console.log(item, index,arr);
// });

//     let newValues = []

//     heroes.forEach((val)=>{
//         if (val.length > 4)
//          newValues.push(val)
//     })

// console.log(newValues);

// const myNums = [1,2,3,4,5,6,7,8,9,10];

//  const result = myNums
//                       .map((num)=> num * 10)
//                       .map((num)=> num + 2)
//                       .filter((num)=> num > 80)

//  console.log(result);

// const shoppingCart = [

//   {
//     course : "js",
//     price : 299
//   },

//   {
//     course : "cpp",
//     price : 399
//   },

//   {
//     course : "py",
//     price : 499
//   },

// ]

// // let totalPrice = shoppingCart.reduce((acc,item)=> acc + item.price ,0)

// // console.log(totalPrice);

// let totalPrice = shoppingCart.reduce(function(acc,currVal){
//                           return acc + currVal.price
// },0)

// console.log(totalPrice);

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = myArray.filter(function(nums){
//        return     nums % 2 != 0
// })

// console.log(result);


// const form = document.querySelector('form');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   let height = parseInt(document.querySelector('#height').value);
//   let weight = parseInt(document.querySelector('#weight').value);
//   let result = document.querySelector('#results');
//   const bmi = (weight / ((height * height) / 10000)).toFixed(2);

//   if (height === '' || height < 0 || isNaN(height)) {
//     result.innerHTML = `please enter a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     result.innerHTML = `please enter a valid height ${weight}`;
//   } else {
//     result.innerHTML = `<span>${bmi}</span>`;
//   }

//   if (bmi <= 18.6) {
//     result.innerHTML = `<span>${
//       'As per your BMI ' + bmi + ' You are under weight'
//     }</span>`;
//   } else if (bmi > 25) {
//     result.innerHTML = `<span>${
//       'As per your BMI ' + bmi + ' You are Over weight'
//     }</span>`;
//   } else {
//     result.innerHTML = `<span>${
//       'As per your BMI ' + bmi + ' You are Fit! enjoy your day'
//     }</span>`;
//   }
// });