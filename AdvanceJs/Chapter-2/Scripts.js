sum(5,15);
function sum(a,b)
{
    add=a+b;
    console.log(add);
}
//in this case when we call fun before its declaration it runs


//exception 1->reference error
/*sum(5,15);

(function sum(a,b)
{
    add=a+b;
    console.log(add);
})*/



//exception 2->Type error
/*sum(5,15);
var sum = function sum(a,b)
{
    add=a+b;
    console.log(add);
}*/


//exception 3->reference error
/*sum(5,15);
const sum =(a,b)=>
{
    add=a+b;
    console.log(add);
}*/