var x=7;

function getName(){
    console.log("hello js");
}
getName();
console.log(x);

// hoisting in javascript
console.log(x);
 var x=7;
 a();
 function a(){
    console.log("hello");
 }

 console.log(x);
 // in the above code at line 10 output will be "undefined".
 //at line 12 function a will be called and hello gets printed.
 // at line 17 the vale of x =7 gets printed.
 /* above concept is known as hoisting in java which means javascript
 scans all the variable and functions first . It allocates the memeory to the variable 
 before the code gets executed with the reserved memeory witn the "undefined keyboard".
 And for function it takes all the code . 
 After teh memory execution gets completed , then code excution will take place and the 
 value of the variables gets assigned . 
 After whole the process gtets completed the memory execution  and code gets execution
 gets deleted .
 This whole concepts is known as hoisting in java */


 //  "window" and "this" keyword in javascipt
 /* window is used for global execution of the code . It calls the global variables.
 And the this keyword also refers the global variable as a object.*/ 


// chain scope & lexical environment;
 function a(){
    var b=10;
    c();
    function c(){
        console.log(b);
    }
 }
 a();
  
