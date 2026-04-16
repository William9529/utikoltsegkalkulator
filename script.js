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
        lang_btn: "🇭🇺 HU"
    }
};

// Nyelvváltás funkció
langBtn.addEventListener("click", () => {
    currentLang = currentLang === 'hu' ? 'en' : 'hu';
    updateLanguage();
});

function updateLanguage() {
    // Minden elemet megkeresünk, aminek van data-key attribútuma
    document.querySelectorAll("[data-key]").forEach(elem => {
        const key = elem.getAttribute("data-key");
        elem.textContent = translations[currentLang][key];
    });
    
    // A gomb feliratának külön frissítése
    langBtn.textContent = translations[currentLang].lang_btn;
    
    // Ha már kint van az eredmény, azt is frissítjük
    const resultElem = document.getElementById("result");
    if (resultElem) {
        // Újraszámoljuk, hogy a szöveg frissüljön
        calculateBtn.click();
    }
}

// Számítás (maradt a korábbi logikával, de a szöveget a szótárból veszi)
const resultDisplay = document.createElement("div");
resultDisplay.id = "result";

calculateBtn.addEventListener("click", () => {
    const d = parseFloat(distanceInput.value.replace(',', '.')) || 0;
    const c = parseFloat(consumptionInput.value.replace(',', '.')) || 0;
    const f = parseFloat(fuelInput.value.replace(',', '.')) || 0;
    const o = parseFloat(othersInput.value.replace(',', '.')) || 0;

    const total = Math.round((c / 100) * d * f + o);
    
    const label = translations[currentLang].result_text;
    resultDisplay.innerHTML = `${label} <strong>${total.toLocaleString()}</strong> Ft`;
    
    if (!document.getElementById("result")) {
        innerDiv.appendChild(resultDisplay);
    }
});

// Szám beviteli védelem
[distanceInput, consumptionInput, fuelInput, othersInput].forEach(input => {
    input.addEventListener("input", function() {
        this.value = this.value.replace(/[^0-9.,]/g, '');
    });
});