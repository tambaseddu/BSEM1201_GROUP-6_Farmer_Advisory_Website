const apiKey = "709c0b2dc4cf9aeaebbda4a44b38a895";

async function getWeather(){

const city =
document.getElementById("cityInput").value;

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

const response =
await fetch(url);

const data =
await response.json();

document.getElementById("weatherCard")
.innerHTML = `

<h2>${data.name}</h2>

<img
src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
>

<p>
Temperature:
${data.main.temp} °C
</p>

<p>
Humidity:
${data.main.humidity}%
</p>

<p>
Wind Speed:
${data.wind.speed} m/s
</p>

<p>
Condition:
${data.weather[0].description}
</p>

`;

}
catch(error){

document.getElementById("weatherCard")
.innerHTML = `
<p>Unable to fetch weather.</p>
`;

}

}