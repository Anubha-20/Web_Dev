
var globalEC = "added";
function a() {
    var fa="2nd Fun";
    console.log(fa);
    debugger;
    b();
    console.log("hello");}
function b(){
    debugger;
    console.log("2nd fun");
    c();}
function c(){
    debugger;
    console.log("3rd fun");}
debugger;
a();
