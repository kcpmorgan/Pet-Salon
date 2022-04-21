let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"University Ave",
        number:"787",
        city:"Utopia",
        State:"CA",
        zip:"23456"
    },
    hours:{
        open:"9:00 a.m.",
        close:"8:00 p.m."
    },
    pets:[
        {
            name:"Scooby",
            age: 50,
            breed:"Dane",
            gender:"Male",
            service:"Grooming",
            ownersname: "Shaggy",
            contactphone:"555-555-555"

        },
        {
            name:"Scrappy",
            age:40,
            breed:"Mixed",
            gender:"Male",
            service:"Grooming",
            ownersname:"Shaggy",
            contactphone:"555-555-555"
        },
        {
            name:"Zest",
            age:15,
            breed:"Chihuahua",
            gender:"Male",
            service:"Spa",
            ownersname:"Brenda",
            contactphone:"555-555-555"
        },
        {
            name:"Leo",
            age:12,
            breed:"Poodle",
            gender:"Male",
            service:"Grooming",
            ownersname:"Aria",
            contactphone:"555-555-555"
        }
    ]
}

function Pet(name,age,gender,breed,service,ownerName,contactPhone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownerName
    this.phone=contactPhone;
}
//get the info from the inputs and store the information
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("selService");
let inputOwnerName=document.getElementById("txtOwner");
let inputContactPhone=document.getElementById("txtTel");

function register(){
    //create the pet
    let thePet = new Pet(inputName.Value,inputAge.Value,inputGender.value,inputBreed.value,inputselService.value,inputOwne.value,inputtxtTel.value);
    console.log(thePet);
    //push the pet into the array
    petSalon.pets.push(thePet);
    //clear the input
    clearInputs();
}

function clearInputs(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputOwnerName.value="";
    inputContactPhone.value="";
}

//create three pets
let scrappy = new Pet("Scrappy","40","Mixed","Male","Grooming","Shaggy","555-555-555");

let zest = new Pet("Zest","15","Chihuahua","Male","Spa","Brenda","555-555-555");

let leo = new Pet("Leo","12","Poodle","Male","Grooming","Aria","555-555-555");

console.log(scrappy,zest,leo);