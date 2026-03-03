


// Reverse a string without built in function 


  function reverseString (str){
      
    let  reversed = "";

    for ( let i = str.length -1 ; i >= 0 ; i--){

        reversed = reversed+str[i]
    }

    return reversed ;
  }

    //   console.log(reverseString("Abhishek")); 



// Reverse a string with built in function 


     function reverseStringBuiltIn (str){

       return  str.split("").reverse().join("");                                

        
     }

    //   console.log(reverseStringBuiltIn("Ironman"));
                                                           


     // split() converts a string into an array based on the separator you provide inside the quotes.
     // reverse() reverses the order of elements in an array.
     //  the join() method is used to convert an array into a string.
     //   It joins all elements of the array using a separator.
     // The separator is the value placed between each array element when they are joined.





     // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


     // Check Palindrome with manual method 

        function checkPalindrome (str){

            let reversed = "";

            for ( i = str.length - 1; i >= 0 ; i--){

                reversed += str[i];
            }

               return reversed === str ;

        }

        // console.log(checkPalindrome("racecar"));
        // console.log(checkPalindrome("women"));
        // console.log(checkPalindrome("abhihba"));


        // let str = "madam";
        // let reversed = "";
        
        // for (let i = str.length-1  ; i >= 0 ; i--   ) {
        //             reversed += str[i];
        //     }
        
        //     console.log(str === reversed);


        // check palindrome using built in function 

        
        // check palindrome with buit in fucntion


        function isPalindrome (str){
            
            reversed = str.split("").reverse().join("")


            return  str === reversed ;
        }
        
            

        // console.log(isPalindrome("abhishek"));
        // console.log(isPalindrome("racecar"));
     //   console.log(isPalindrome("1223221"));




     // +++===============================================================+++++++++++++++++++++++++++++++++++++++++++++++++++++
        

     // Find  largest Number in an array without built-in function

    function largestNum (arr){

      let max = arr[0];

      for( let i = 1 ; i < arr.length ; i++ ){

        if( arr[i] > max ){

          max = arr[i];
        }
      }

      return max;
    }  

    // console.log(largestNum([3,4,5,9,10]));
    // console.log(largestNum([3,4,5,9,10,45,20,87]));


    // Using Built-in funtion for same task 


    // let array1 = [200 , 40 , 29 , 500 , 999];
       
    // console.log(Math.max(...array1));        // spread operator is compulsory beacuse math.max need numbers not array 
    

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
    
     //Remove Duplicates from array without built-in function 


     function removeDuplicate(arr){

      let result = [];

      for( let i = 0 ; i < arr.length ; i++ ){

        if(!result.includes(arr[i])){
          result.push(arr[i]);
        }
      }
          return result;
     }

    //  console.log(removeDuplicate([1,2,2,5,5,6,7,8,8]));


    // using built-in function 

    let array2 = [ 1,2,3,3,4,5,5,6] ;

    let unique = [...new Set(array2)]

    // console.log(unique);

    // Set is a built-in JavaScript object that stores only unique values.
   // It automatically removes duplicate elements from an array.


   //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

   // Count vowels in string 

      function countVowels(str){
         
        let count = 0;
        let vowels = 'aeiouAEIOU';

        for(let char of str){
          if(vowels.includes(char)){
            count++ ;
          }
        }

        return count;
      }

      // console.log(`Vowel count is : ${countVowels("Abhishek")}`);

  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
  
  
  //Factorial of a number 

   function factorial(num){
         
    let result = 1;

    for( let i = 1 ; i <= num ; i++ ){
        result *=  i
    }

       return result ;
   }

    // console.log(factorial(4));
    