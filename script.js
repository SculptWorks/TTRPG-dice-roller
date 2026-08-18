document.querySelector("#add-die") .addEventListener("click", function(addDie) { 
    console.log("Die Added"); 
    const newSelect = document.createElement("select");
    const newOptionD4 = document.createElement("option");
    newOptionD4.value = "D4";
    newOptionD4.textContent = "D4";
    newSelect.appendChild(newOptionD4);
    const newOptionD6 = document.createElement("option");
    newOptionD6.value = "D6";
    newOptionD6.textContent = "D6";
    newSelect.appendChild(newOptionD6);
    const newOptionD8 = document.createElement("option");
    newOptionD8.value = "D8";
    newOptionD8.textContent = "D8";
    newSelect.appendChild(newOptionD8);
    const newOptionD10 = document.createElement("option");
    newOptionD10.value = "D10";
    newOptionD10.textContent = "D10";
    newSelect.appendChild(newOptionD10);
    const newOptionD12 = document.createElement("option");
    newOptionD12.value = "D12";
    newOptionD12.textContent = "D12";
    newSelect.appendChild(newOptionD12);
    const newOptionD20 = document.createElement("option");
    newOptionD20.value = "D20";
    newOptionD20.textContent = "D20";
    newSelect.appendChild(newOptionD20);
    document.querySelector("#select-container").appendChild(newSelect);

});



document.querySelector("#subtract-die") .addEventListener("click", function(subtractDie) { console.log("Die Subtracted"); });