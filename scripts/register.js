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

console.log(petSalon);
function displaySalonInfo(){
    let tmp="";
    let div=document.getElementById("pets");
    div.innerHTML=tmp
}
console.log(pets)
function displayPetsNames(){
    let tmp="";
    let div=document.getElementById("petSalon");
    for(let i=0;i<petSalon.length;i++){
        tmp+=`<li>${petSalon[i].pets}</li>`;
    }
    div.innerHTML=tmp;
}