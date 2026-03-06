


// Reverse a string without built in function 


  function reverseString (str){
      
    let  reversed = "";

    for ( let i = str.length -1 ; i >= 0 ; i--){

        reversed = reversed+str[i]
    }

    return reversed ;
  }

      console.log(reverseString("Abhishek")); 



// Reverse a string with built in function 


     function reverseStringBuiltIn (str){

       return  str.split("").reverse().join("");                                

        
     }

      console.log(reverseStringBuiltIn("Ironman"));
                                                           


     // split() converts a string into an array based on the separator you provide inside the quotes.
     // reverse() reverses the order of elements in an array.
     //  the join() method is used to convert an array into a string.
     //   It joins all elements of the array using a separator.
     // The separator is the value placed between each array element when they are joined.