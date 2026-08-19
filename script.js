let NumDice = 1;

document.querySelector(".die-container select") .addEventListener("change", function() {
   const selectedDie = this.value;
   const dieImage = document.querySelector(".die-image");
   dieImage.src = `images/${selectedDie}-sides.png`;
   dieImage.alt = `image of a ${selectedDie}-sided die`;
});


document.querySelector("#add-die") .addEventListener("click", function(addDie) { 
   if (NumDice < 10) {
    console.log("Die Added"); 
    const newDieContainer = document.createElement("div");
    newDieContainer.classList.add("die-container");
    const newDieImage = document.createElement("img");
    newDieImage.classList.add("die-image");
    newDieImage.src = "images/4-sides.png";
    newDieImage.alt = "image of a 4 sided die";
    const newRollResult = document.createElement("p");
    newRollResult.classList.add("die-result");
    const newSelect = document.createElement("select");
    const newOptionD4 = document.createElement("option");
    newOptionD4.value = 4;
    newOptionD4.textContent = "D4";
    newSelect.appendChild(newOptionD4);
    const newOptionD6 = document.createElement("option");
    newOptionD6.value = 6;
    newOptionD6.textContent = "D6";
    newSelect.appendChild(newOptionD6);
    const newOptionD8 = document.createElement("option");
    newOptionD8.value = 8;
    newOptionD8.textContent = "D8";
    newSelect.appendChild(newOptionD8);
    const newOptionD10 = document.createElement("option");
    newOptionD10.value = 10;
    newOptionD10.textContent = "D10";
    newSelect.appendChild(newOptionD10);
    const newOptionD12 = document.createElement("option");
    newOptionD12.value = 12;
    newOptionD12.textContent = "D12";
    newSelect.appendChild(newOptionD12);
    const newOptionD20 = document.createElement("option");
    newOptionD20.value = 20;
    newOptionD20.textContent = "D20";
    newSelect.appendChild(newOptionD20);
    newDieContainer.appendChild(newRollResult);
    newDieContainer.appendChild(newDieImage);
    newDieContainer.appendChild(newSelect);
    document.querySelector("#select-container").appendChild(newDieContainer);

    newSelect.addEventListener("change", function() {
    const selectedDie = this.value;
    newDieImage.src = `images/${selectedDie}-sides.png`;
    newDieImage.alt = `image of a ${selectedDie}-sided die`; 
});
    NumDice = NumDice + 1;}


});
   




document.querySelector("#subtract-die") .addEventListener("click", function(subtractDie) { 
   if (NumDice > 1) {
    console.log("Die Subtracted");
    const selectContainer = document.querySelector("#select-container");
    selectContainer.removeChild(selectContainer.lastChild);
    NumDice = NumDice - 1;
   }
});


document.querySelector("#roll-button") .addEventListener("click", function(rollDice) {
   document.querySelectorAll("#select-container select").forEach(function(select) {
      select.parentElement.querySelector(".die-image").classList.add("roll");
      console.log("Selected die:", select.value);
      const dieValue = parseInt(select.value);
      const roll = Math.floor(Math.random() * dieValue) + 1;
      console.log("Roll result:", roll);
      setTimeout(function() {
         select.parentElement.querySelector(".die-image").classList.remove("roll");
         select.parentElement.querySelector(".die-result").textContent = String(roll);
      }, 500);
      
   });
});