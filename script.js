function updateClock() {
    const now = new Date();
    
    // Analog clock hands
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDegrees = (hours % 12) / 12 * 360 + (minutes / 60) * 30;

    document.querySelector('.sec-hand').style.transform = `rotate(${secondDegrees}deg)`;
    document.querySelector('.min-hand').style.transform = `rotate(${minuteDegrees}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDegrees}deg)`;

    // Digital clock
    const timeString = now.toLocaleTimeString('en-GB', { hour12: false });
    document.getElementById('time').textContent = timeString;
}


setInterval(updateClock, 1000);
updateClock();

// creating weather app code for the digital and analog clock

const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const key = "6cc631f616974f1a0c5dcb3f18a63087";


async function weather() {
    const now = document.getElementById('city').value;
    const respone = await fetch(url + `${now}` + `&appid=${key}`);
    var data = await respone.json();
    console.log(data);
    document.getElementById('city-name').innerHTML="City : "+data.name;
    document.getElementById('temp').innerHTML=data.main.temp+" °C";
    document.getElementById('humidity').innerHTML="Humidity : "+data.main.humidity+"%";
    document.getElementById('wind').innerHTML="Wind-Speed : "+data.wind.speed+" Km/h";
}
const but=document.getElementById("but");
weather();
but.addEventListener("click", weather);