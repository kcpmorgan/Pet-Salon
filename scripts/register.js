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
let c=0;//this is a counter var
//name,age,gender,breed,service,owner name, contact phone

function Pet(name,age,gender,breed,color,service,ownerName,contactPhone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.color=color;
    this.service=service;
    this.owner=ownerName
    this.phone=contactPhone;
    this.id=c++;//increase the var 1 everytime that it is used
}
//get the info from the inputs and store the information
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let inputColor=document.getElementById("txtColor");
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
    let thePet = new Pet(inputName.Value,inputAge.Value,inputGender.value,inputBreed.value,inputColor.value,inputService.value,inputOwner.value,inputPhone.value);
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
    inputColor.value="";
    inputBreed.value="";
    inputService.value="";
    inputOwner.value="";
    inputPhone.value="";
}

function deletePet(petId){
    console.log("Deleting" + petId);
    let deleteIndex;
    // in this function
        // travel the array (for loop)
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];

        if(petId==pet.id){
            // find the id (if)
            // get the position in the array (store in a var)
            deleteIndex=i;
            console.log("I found it in position:" + i)
        }

    }
        
        // remove from the array (splice())
        petSalon.pets.splice(deleteIndex,1)
        // remove from the html (remove())
        document.getElementById(petId).remove();
        // display to the user a message
}

function searchPet(){
    //previous actions
    // add an inputSearch on the html
    // add a search button on the html
    // get the string
    let searchString = document.getElementById("txtSearch").value;
    console.log("Searching " + searchString);
// in this function ---------
for(let i=0;i<petSalon.pets.length;i++){
    let pet = petSalon.pets[i];
    // travel the array (for loop)
    // find the id (if)
    if(searchString.toLowerCase() === pet.name.toLowerCase()){
        // highlight the result
        document.getElementById(pet.id).classList.add("highlight");
    }else{
        document.getElementById(pet.id).classList.remove("highlight");
    }
    }
    
}

//create three pets
let scrappy = new Pet("Scrappy","40","Mixed","Male","Brown","Grooming","Shaggy","555-555-555");

let zest = new Pet("Zest","15","Chihuahua","Male","White","Spa","Brenda","555-555-555");

let leo = new Pet("Leo","12","Poodle","Male","Black","Grooming","Aria","555-555-555");

petSalon.pets.push(scrappy,zest,leo)
displayCards()

