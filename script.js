// Write your JavaScript code here!


window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
      }
      if (!isNaN(pilotNameInput.value)) {
         alert("Pilot Name Cannot Be a Number");
      } 
      if (!isNaN(copilotName.value)) {
         alert("Co-pilot Name Cannot Be a Number");
      } 
      if (isNaN(fuelLevel.value)) {
         alert("Fuel Level Must Be a Number");
      } 
      if (isNaN(cargoMass.value)) {
         alert("Cargo Mass Must Be a Number");
      } 
     });


   //   faultyItems
   let pilotStatus = document.getElementById('pilotStatus]');
   let copilotStatus = document.getElementById('copilotstatus]');
   let fuelStatus = document.getElementById('fuelStatus]');
   let cargoStatus = document.getElementById('cargoStatus]');
   
   if (fuelLevel < 10000) {
      window.alert('There is not enough fuel for the journey.');

   }







/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/


});








