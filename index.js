

const apiKey = "e744ad3d5cf87ae72e7389c164182af6";
const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const  search = document.querySelector(".search-box input");
const  searchbtn = document.querySelector(".search-box .search-btn");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    document.querySelector(".temperature").innerHTML =
        Math.round(data.main.temp) + "°C";

    document.querySelector(".city").innerHTML =
        data.name;

    document.querySelector(".humidity").innerHTML =
        data.main.humidity + "%";

    document.querySelector(".wind").innerHTML =
        data.wind.speed + " km/h";

    document.querySelector(".detail").style.display = "block";  
}

searchbtn.addEventListener("click", ()=>{
     checkWeather(search.value);
})

