const marketTable =
document.getElementById("marketTable");

let marketData = [];

fetch("data/prices.json")
.then(response => response.json())
.then(data => {

marketData = data;

displayMarket(data);

});

function displayMarket(items){

marketTable.innerHTML = "";

items.forEach(item => {

marketTable.innerHTML += `

<tr>

<td>${item.commodity}</td>

<td>${item.category}</td>

<td>Le ${item.price}</td>

<td>${item.unit}</td>

</tr>

`;

});

}

document
.getElementById("marketSearch")
.addEventListener("keyup", function(){

const search =
this.value.toLowerCase();

const filtered =
marketData.filter(item =>
item.commodity
.toLowerCase()
.includes(search)
);

displayMarket(filtered);

});