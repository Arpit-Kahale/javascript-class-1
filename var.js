// 1) SIMPLE VARIABLE DECLARTION

var name;
 name="Arpit Kahale";
console.log(name)


var name="Arpit";
console.log(name)



//2) RE DECLARATION IS ALLOWED IN THE VAR IN THE JAVA SCRIPT

var mobile="LG"; // Declare first time LG
var mobile="Iphone";// Redeclare second time Iphone
console.log(mobile)


//3) RE ASSIGMENT IS ALLOWED IN THE VAR IN THE JAVA SCRIPT

var country="USA"; // Assigment first time USA
country="INDIA";   // Re Assigment India
console.log(country)

//4) FUNCTION CREATION
 
function test(){    //creation of the function

    var a = 100; // assign and declare the value 
    console.log("Call the function value is ",a); // print that value 
}
test() // fuction calling to get the output


//5)  

 var name="shivani"; //global function where it can be accisable for both inside
 //  the function as wllas the out side the function
function something(){

        Firstname="ARPIT"; // implicit global
        var hero= "pradeep";   
        console.log("INSIDE THE FUNCTION",hero)
        console.log("out side of the function",name)


}

 
something()
console.log(Firstname)
console.log(name)


// var a=10;
// console.log(a)
// function output()
// {
//     var name="venkat";
//     console.log("Inside the function",name)

//     console.log(a)

// }
// var a=100;
// console.log(a)
// output()

// shadowing the var


var value=10; // global
console.log(value)

function valuefunction()
{

  var value=20;  // function
  console.log(value)

}
  var value=100;// global
 valuefunction()
 
console.log(value) 



 
if(name){
      
    var name="Arpit Kahale";
  console.log(name)

}   
console.log(name)








 