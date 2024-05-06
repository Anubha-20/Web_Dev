// var a=undefined;
// console.log(a);           //->creation phase->set to undefined
// a=10;



// var a=10;
// var a=20;
// console.log(a);   //op=20


//exception->var hoisting works only with var not with let and const

//exercise-1
console.log("i am a " + job);
var job="web developer";
console.log("i am a "+job);

function whoAmI(){
    console.log("i am a " + job); 
    var job="full stack ";
    console.log("i am a " + job); 
}
whoAmI()
