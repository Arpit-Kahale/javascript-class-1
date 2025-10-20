//javascript is dynamically type language, variable dont have the fixed type.

//IN js can hold the any datatype 

//1)primitive  data type (immutable,stored by value)
//2)Non primetive(Refrance) datatypes(mutable,stored by the refrance)



//primitive datatype are immutable and they store the single value

//a)Number  


let itemprice=1500;
let tax=2.50;
let totalvalue=itemprice+(itemprice*tax)
console.log(totalvalue)

  let a
   console.log( typeof a)

   //B) string data type 
    var name="Arpit Kahale";
    console.log(typeof name)
 
     //C) Boolean data type

     let s=true;
     console.log( typeof s)

     //d) null datatype



      //Non primitive datatype are refrance data type they stores the multiple value
     
     
let mobile ={
  name:"iphone",   
  price:76000,        // key value. 
  model:"iphone x"


}
console.log(mobile.name)
console.log(mobile. price)
console.log(mobile.model)


let information={
    name:"Arpit kahale",
    mobile:9307792275,
    State:" Maharashtra",   // key values ...
    city:"Wardha",
    pincode:442001,
    Address:"ward no.1 satodsa road near dukrey dairy farm",
}

console.log(information.name)
console.log(information.mobile)
console.log(information.State)
console.log(information.city)




let today=new Date();
console.log( "Date=",today.getMonth())

function greet(){
     
       console.log("Wlecome to my profile")
}
greet()



let player="Dhoni";

let captain=player;

captain="Rohit Sharma";

console.log("=",player)
console.log("=",captain)


//copy  the value 

let o=10;// assign vcalue 10
let f=o;  // cop
f=30;
console.log(o)
console.log(f)


let name2="Arpit kahale";

console.log(typeof name);

let number=100;
console.log(typeof number)

var my=true;
console.log( typeof my)

let x
console.log(typeof x)


 let z=null;
 console.log(typeof z)

 let copy ={
      x:1000,
      xyz:125,
      lpP:"utkarsh kahale",
      prn:2246491245110,
      clg:BigInt
      
      
 }
 console.log(copy.x)
 console.log(copy)

// copy by value concept 

let k=10;
let p=k;
p=200;
 console.log(k)
 console.log(p)
// this is also the copy by value concept

 let useratteempts=200;
 let maxattempts=useratteempts;
  maxattempts=useratteempts-100;
  console.log(useratteempts)
  console.log(maxattempts)

  // copy by the refrance  and the on primetve data type type (its muttable means when we do the copy by refrance 
  // opeeration and we will modified the value so in that case orignal value also will 
  // changed because of its muttable nature 

  arr1=[1,2,3,4,5];
  arr2=arr1;
  arr2.push(100)
console.log(arr1)
console.log(arr2)


let user1={
       name:"Akahale",
}
let user2=user1;

user2.name="RAM";
console.log(user1.name)
console.log(user2.name)