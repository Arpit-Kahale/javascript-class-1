//Assign and Decleration
let name
name="Ram";
console.log(name)

// first we declare the value and then we assiagn the value
// Re assigment is posssible in the case of let 
let name1="I Becomed a sucessfull in my life and i proud of my self";
name1="Utkarsh Kahale";
console.log(name1)

// Re Declaration is not possible in the case of LET

let Firstname="ARPIT";
console.log(Firstname)

let Firstname1="KAHALE";
console.log(Firstname1)


  let op="Sarthak";
if(true)
{
    let op="Arpit"; // let is the actully block we write program inside the block in this case  
    console.log(op)
}
console.log(op)



let a="global";  // global scopoe 
{
     let a="block1"; // global scope
     {
        let a="block2";
        console.log(a)
     }
     console.log(a) 

}
console.log(a)