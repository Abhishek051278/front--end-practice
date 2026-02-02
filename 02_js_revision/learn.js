

document.querySelector("#images").addEventListener('click',function(e){
        
                //  console.log("clicked inside the ul");
                //  console.log(e.target);
                
},false);

document.querySelector("#owl").addEventListener('click',function(e){
                   
                //  console.log(" owl clicked ");
               
               
},false);


// There is event bubling when we set " false " inside the event listener  means event is going through child to parent ;


document.querySelector("#images").addEventListener('click',function(e){
        
                 console.log("clicked inside the ul");
                //  console.log(e.target);
                e.stopPropagation()
},true);

document.querySelector("#owl").addEventListener('click',function(e){
        
                 console.log(" owl clicked ");
                
},true); 

// There is event capturing when we set " true " inside the event listener  means event is going through parent to child ;



document.getElementById("google").addEventListener('click',function(e){
                          
                  e.preventDefault()
                  console.log("blocked")
                  e.stopPropagation()
},false)


document.getElementById('images').addEventListener('click',function(e){
         
    console.log(e.target.tagName)

    if( e.target.tagName === 'IMG'){
         console.log(e.target.id)    
         let removeIt = e.target.parentNode;

         removeIt.remove();
    }
},false)



