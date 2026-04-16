const distanceInput = document.getElementById("distance");
const consumptionInput = document.getElementById("consumption");
const fuelInput = document.getElementById("fuel");
const othersInput = document.getElementById("others");
const calculateBtn = document.getElementById("calculate");
const langBtn = document.getElementById("language-switch");
const innerDiv = document.getElementById("inner");

let currentLang = 'hu';

const translations = {
    hu: {
        title: "Útiköltség kalkulátor",
        dist_label: "Távolság:",
        cons_label: "Átlag fogyasztás:",
        fuel_label: "Üzemanyagár:",
        other_label: "Egyéb költség:",
        calc_btn: "Kiszámít",
        result_text: "Útiköltség:",
        unit_km: "km",
        unit_cons: "liter/100km",
        unit_price: "Ft/liter",
        unit_ft: "Ft",
        lang_btn: "🇺🇸 EN"
    },
    en: {
        title: "Travel Cost Calculator",
        dist_label: "Distance:",
        cons_label: "Average Consumption:",
        fuel_label: "Fuel Price:",
        other_label: "Other Costs:",
        calc_btn: "Calculate",
        result_text: "Total Fare:",
        unit_km: "miles/km",
        unit_cons: "liters/100km",
        unit_price: "Currency/liter",
        unit_ft: "Currency",
        lang_btn: "🇭🇺 HU"
    }
};

langBtn.addEventListener("click", () => {
    currentLang = currentLang === 'hu' ? 'en' : 'hu';
    updateLanguage();
});

function updateLanguage() {
    document.querySelectorAll("[data-key]").forEach(elem => {
        const key = elem.getAttribute("data-key");
        elem.textContent = translations[currentLang][key];
    });
    langBtn.textContent = translations[currentLang].lang_btn;
    
    // Ha már van eredmény, frissítjük a szövegét
    const resultElem = document.getElementById("result");
    if (resultElem) { calculateBtn.click(); }
}

const resultDisplay = document.createElement("div");
resultDisplay.id = "result";

calculateBtn.addEventListener("click", () => {
    const d = parseFloat(distanceInput.value.replace(',', '.')) || 0;
    const c = parseFloat(consumptionInput.value.replace(',', '.')) || 0;
    const f = parseFloat(fuelInput.value.replace(',', '.')) || 0;
    const o = parseFloat(othersInput.value.replace(',', '.')) || 0;

    const total = Math.round((c / 100) * d * f + o);
    const currency = currentLang === 'hu' ? 'Ft' : 'Units';
    
    resultDisplay.innerHTML = `${translations[currentLang].result_text} <strong>${total.toLocaleString()}</strong> ${currency}`;
    
    if (!document.getElementById("result")) {
        innerDiv.appendChild(resultDisplay);
    }
});

[distanceInput, consumptionInput, fuelInput, othersInput].forEach(input => {
    input.addEventListener("input", function() {
        this.value = this.value.replace(/[^0-9.,]/g, '');
    });
});