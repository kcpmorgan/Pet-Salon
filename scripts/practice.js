let studentFirstname="Aria";
let studentLastName="Mitchell"
let studentAge=25;
let studentIsActive=true;
//arrays []
//objects {}

//

//console.log(student1.firstName);
//console.log(student2["lastName"]);
//console.log(student3.hobbies[1]);// display read
//console.log(student3.address.zip);//display the zip code
//console.log(student3["address"]["zip"]);

// challenge:  create an object for a client with the attributes:
// first name, last name, subscription type, active, credits. 
//Display the info on the console
let clientFirstname="Kemar";
let clientLastName="Mitchell"
let subscriptionType="Active"
let credits=50;

let client1 ={
    firstName:"Kemar",
    lastName:"Mitchell",
    subscriptionType:"Active",
    credits:50,
}
console.log(client1.firstName);
console.log(client1["lastName"]);
console.log(client1.subscriptionType);


let students=[
    {firstName:"Aria",
    lastName:"Mitchell",
    age:25,
    isActive:true
},
{
    firstName:"Anthony",
    lastName:"Lane",
    age:25,
    isActive:true
},
{
    firstName:"Ben",
    lastName:"Vance",
    age:25,
    isActive:false,
    hobbies:["Listen Music","Read","Play Zelda"],
    address:{
        street:"Palm street",
        zip:"22769",
        number:"262-k"
    }
}];

console.log(students[0].firstName);

function displayStudent(){
    //travel the array
    let tmp="";
    for(let i=0;i<students.length;i++){
        tmp +=`<li>${students[i].firstName}</li>`;
        console.log(tmp);

        document.getElementById("students").innerHTML=tmp;
    }

}
displayStudent();
let p = document.createElement("p");
console.log(p);
let text = document.createTextNode("This is a paragraph");
console.log(text);
p.appendChild(text);

let div=document.getElementById("students");
div.appendChild(p);