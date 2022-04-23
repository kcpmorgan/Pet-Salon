//display the pets in list items
function displayPet(){
    let tmp="";//clear the field
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];//get each pet
        tmp+=`<li>${pet.name} --- ${pet.age}<li> `;
        console.log(tmp);
    }
    document.getElementById("pets").innerHTML=tmp;
}
// display the pets in cards
function displayCards(){
    let tmp="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        tmp+=`
        <div class="pet">
        <h4>${pet.name}</h4>
        <label>Age: ${pet.age}</label>
        <label>Gender: ${pet.gender}</label>
        <label>Breed: ${pet.breed}</label>
        <label>Owner: ${pet.owner}</label>
        <label>Phone: ${pet.phone}</label>
        </div>
        `;
    }
    document.getElementById("pets").innerHTML=tmp;
}


// display the pets in table

function displayTable(){
    let tmp="";
    for(let i=0;i=petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        tmp+=`
        
        `
    }
}