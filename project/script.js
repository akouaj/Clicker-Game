var bitcoin = 0;
var gps = 1;
var x= 1;
var Keeper = [
{ id: 1, name: "babygroot", cost: 10, gps: 1, owned: 0},
{ id: 2, name: "rocket", cost: 60, gps: 1, owned: 0 },
{ id: 3, name: "starlord", cost: 80, gps: 5, owned: 0 }
];

function getGPS() {
gps = 0;
Keeper.forEach(function (Keeper) {
gps += Keeper.gps * Keeper.owned;

});
console.log(gps);
}

function displayGPS()
{
document.querySelector("#gps").innerHTML = bitcoin;
}

function addGold(x) {
bitcoin = bitcoin + x;
displayGolds();
}

function intervalle() {
setInterval(function() {
bitcoin= gps + bitcoin;
displayGolds();
},1000 );
}


function displayGolds() {
document.getElementById("test").innerHTML = bitcoin;
}

function save() {
localStorage.setItem("bitcoin", bitcoin);
}

function load() {
bitcoin = localStorage.getItem("bitcoin");
bitcoin = parseInt(bitcoin);
document.getElementById("test").value =bitcoin;
}

intervalle()

function buyKeeper(id) {
const chooseKeeper = Keeper.find(Keeper => Keeper.id === id);
if (bitcoin >= chooseKeeper.cost) {
bitcoin -= chooseKeeper.cost;
gps += chooseKeeper.gps
chooseKeeper.owned += 1;
chooseKeeper.cost = chooseKeeper.cost * 1.15;
}
if (Keeper.owned === 25  ||Keeper.owned === 50  ||Keeper.owned === 100 || Keeper.owned === 250 || Keeper.owned === 1000) {
    chooseKeeper.gps = chooseKeeper.gps *2;
    displayGolds();
displayGPS();
getGPS();
}



else{
    alert("brokeboi")
}
}