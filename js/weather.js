
const API_KEY = "ba92250fd58d82071b8fe4702d646421";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:last-child")
            const location = document.querySelector("#weather span:first-child")
            location.innerText = data.name;
            weather.innerText =`${data.main.temp}°/${data.weather[0].description}`;
        });

}

function onGeoError(){
    alert("we cannot find you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);