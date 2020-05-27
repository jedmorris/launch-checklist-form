
window.addEventListener("load", function() {
   let jsonLink = "https://handlers.education.launchcode.org/static/planets.json";
   fetch(jsonLink).then(function(response) {
      response.json().then(function(json){
      
         let planet = json [4];
   
         let missionTarget = document.getElementById('missionTarget');
            missionTarget.innerHTML= `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${planet.name}</li>
               <li>Diameter: ${planet.diameter}</li>
               <li>Star: ${planet.star}</li>
               <li>Distance from Earth: ${planet.distance}</li>
               <li>Number of Moons: ${planet.moons}</li>
            </ol>
            <img src="${planet.image}">`
      });   
   });

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
      } else if (!isNaN(pilotNameInput.value)) {
         alert("Pilot Name Cannot Be a Number");
      } else if (!isNaN(copilotName.value)) {
         alert("Co-pilot Name Cannot Be a Number");
      } else if (isNaN(fuelLevel.value)) {
         alert("Fuel Level Must Be a Number");
      } else if (isNaN(cargoMass.value)) {
         alert("Cargo Mass Must Be a Number");
      } else {

         let faultyItems = document.getElementById('faultyItems');
         let launchStatus = document.getElementById('launchStatus');
         let pilotStatus = document.getElementById('pilotStatus');
         let copilotStatus = document.getElementById('copilotStatus');
         let fuelStatus = document.getElementById('fuelStatus');
         let cargoStatus = document.getElementById('cargoStatus');

         faultyItems.style.visibility= 'visible';

         pilotStatus.innerHTML= `Pilot ${pilotNameInput.value} is Ready`;
         copilotStatus.innerHTML= `co-Pilot ${copilotName.value} is Ready`;

         if (fuelLevel.value < 10000) {
            window.alert('There is not enough fuel for the journey.');
            fuelStatus.innerHTML = 'Shuttle not ready for launch';
            launchStatus.innerHTML = 'Shuttle not ready for launch';
            launchStatus.style.color = 'red';
         } 
         if (cargoMass.value > 10000) {
            window.alert('There is too much mass for the shuttle to take off.');
            cargoStatus.innerHTML = 'Shuttle not ready for launch';
            launchStatus.innerHTML = 'Shuttle not ready for launch';
            launchStatus.style.color = 'red';
         }
         if (fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
            launchStatus.innerHTML = 'Shuttle is ready for launch';
            fuelStatus.innerHTML = 'Fuel level high enough for launch';
            cargoStatus.innerHTML = 'Cargo mass low enough for launch';
            launchStatus.style.color = 'green';
         }
      }
   }); 
});









