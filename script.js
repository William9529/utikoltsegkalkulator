// Véletlenszerű háttérkép beállítása betöltéskor
window.addEventListener('DOMContentLoaded', () => {
    const bgElement = document.getElementById('background');
    
    // A mappádban lévő képek nevei
    const images = ['road', 'road2', 'road3', 'road4', 'road5', 'road6', 'road7', 'road8', 'road9'];
    
    // Véletlenszerű választás
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    
    // Háttér beállítása (ha .jpg kiterjesztésűek)
    bgElement.style.backgroundImage = `url('img/${selectedImage}.jpg')`;
});

// Kalkulátor logika
const distanceInput = document.getElementById("distance");
const consumptionInput = document.getElementById("consumption");
const fuelInput = document.getElementById("fuel");
const othersInput = document.getElementById("others");
const calculateBtn = document.getElementById("calculate");
const innerDiv = document.getElementById("inner");

const resultDisplay = document.createElement("div");
resultDisplay.id = "result";

calculateBtn.addEventListener("click", () => {
    // Adatok beolvasása és javítása
    const d = parseFloat(distanceInput.value.replace(',', '.')) || 0;
    const c = parseFloat(consumptionInput.value.replace(',', '.')) || 0;
    const f = parseFloat(fuelInput.value.replace(',', '.')) || 0;
    const o = parseFloat(othersInput.value.replace(',', '.')) || 0;

    // Kiszámítás kerekítve
    const total = Math.round((c / 100) * d * f + o);

    // Eredmény kiírása ezres tagolással
    resultDisplay.innerHTML = `Útiköltség: <strong>${total.toLocaleString()}</strong> Ft`;
    
    if (!document.getElementById("result")) {
        innerDiv.appendChild(resultDisplay);
    }
});

// Csak számokat engedünk az inputba
[distanceInput, consumptionInput, fuelInput, othersInput].forEach(input => {
    input.addEventListener("input", function() {
        this.value = this.value.replace(/[^0-9.,]/g, '');
    });
});