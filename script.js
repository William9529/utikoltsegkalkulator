const distanceInput = document.getElementById("distance");
const consumptionInput = document.getElementById("consumption");
const fuelInput = document.getElementById("fuel");
const othersInput = document.getElementById("others");
const calculateBtn = document.getElementById("calculate");
const innerDiv = document.getElementById("inner");

const resultDisplay = document.createElement("div");
resultDisplay.id = "result";

calculateBtn.addEventListener("click", () => {
    // Értékek beolvasása és számmá alakítása (vessző kezelésével)
    const d = parseFloat(distanceInput.value.replace(',', '.')) || 0;
    const c = parseFloat(consumptionInput.value.replace(',', '.')) || 0;
    const f = parseFloat(fuelInput.value.replace(',', '.')) || 0;
    const o = parseFloat(othersInput.value.replace(',', '.')) || 0;

    // Számítás
    const total = Math.round((c / 100) * d * f + o);

    // Eredmény megjelenítése
    resultDisplay.innerHTML = `Útiköltség: <strong>${total.toLocaleString()}</strong> Ft`;
    
    if (!document.getElementById("result")) {
        innerDiv.appendChild(resultDisplay);
    }
});

// Beviteli mezők korlátozása csak számokra
[distanceInput, consumptionInput, fuelInput, othersInput].forEach(input => {
    input.addEventListener("input", function() {
        this.value = this.value.replace(/[^0-9.,]/g, '');
    });
});