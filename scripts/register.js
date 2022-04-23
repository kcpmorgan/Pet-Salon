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
    pets:[]
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
let inputOwner=document.getElementById("txtOwner");
let inputPhone=document.getElementById("txtTel");

function isValid(aPet){
    //return a false value when the pet is not valid
    //return true if the pet is valid
    let valid=true;
    
    if(aPet.service.length==0){
        valid=false;
        console.error("Invalid name");
    }
    if(aPet.phone.length==0){
        valid=false;
        console.error("Invalid name");
    }
    return valid;// it could be true or false

}

function register(){
    //create the pet
    let thePet = new Pet(inputName.Value,inputAge.Value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value);
    if(isValid(thePet)){
    //push the pet into the array
    petSalon.pets.push(thePet);
    displayCards();
    //clear the input
    clearInputs();
    }
    
}

function clearInputs(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputOwner.value="";
    inputPhone.value="";
}

//create three pets
let scrappy = new Pet("Scrappy","40","Mixed","Male","Grooming","Shaggy","555-555-555");

let zest = new Pet("Zest","15","Chihuahua","Male","Spa","Brenda","555-555-555");

let leo = new Pet("Leo","12","Poodle","Male","Grooming","Aria","555-555-555");

petSalon.pets.push(scrappy,zest,leo)
displayCards()