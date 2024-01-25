var a=100;
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
/* the var values of a shadows the global vaiable of var a because
var is declared globally and whenever it is changed its changes reflects everywhere.
In case of const and let the block scope is within the block and that declared 
in the iuter scope is in the other memory scope.*/
let b=100;
{
    // var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
  console.log(b);
  /*ouput:
  20 
  30 
  100*/
  const c=100;
{
    // var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
  console.log(c);
   /*ouput:
  20 
  30 
  100*/