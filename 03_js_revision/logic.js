


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
        