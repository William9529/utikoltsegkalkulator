const distance = document.getElementById("distance")
const consumption = document.getElementById("consumption")
const fuel = document.getElementById("fuel")
const button = document.getElementById("calculate")
const others = document.getElementById("others")
const result = document.createElement("h2")
result.id = "result";
const div = document.getElementById("inner")


let distanceValue = null;
let consumptionValue = null;
let fuelValue = null;
let othersValue = null;

others.addEventListener("input", function(e){
    othersValue = e.target.value;
})

distance.addEventListener("input", function(e){
    distanceValue = e.target.value;
})

consumption.addEventListener("input", function(e){
    consumptionValue = e.target.value;
})

fuel.addEventListener("input", function(e){
    fuelValue = e.target.value;
})

button.addEventListener("click", function(){
    result.innerText = `Útiköltség: ${calculateFare()} Ft`
    div.appendChild(result)
    
})

function calculateFare(){
    return Math.round(consumptionValue*fuelValue*(distanceValue/100)+Number(othersValue))
}




