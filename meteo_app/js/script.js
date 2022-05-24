const weatherIcons = {
    "Rain": "wi wi-day-rain",
    "Clouds": "wi wi-day-cloudy",
    "Snow": "wi wi-day-snow",
    "mist": "wi wi-day-fog",
    "Drizzle": "wi wi-day-sleet",
    "Clear": "wi wi-day-sunny",

}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}


async function main(withIp = true) {
    let ville;
    if (withIp) {


        const ip = await fetch('https://api.ipify.org?format=json')
            .then(resultat => resultat.json())
            .then(json => json.ip)

        ville = await fetch('http://ip-api.com/json/' + ip)
            .then(resultat => resultat.json())
            .then(json => json.city)


        const timezone = await fetch('http://ip-api.com/json/' + ip)
        .then(resultat => resultat.json())
        .then(json => json.timezone)
        
            

        const time = await fetch('https://api.ipgeolocation.io/timezone?apiKey=8c503f09242245d09f6621077676d37a&lang=fr&tz=' + timezone)
            .then(resultat => resultat.json())
            .then(json => json.date_time)
        console.log(time)
        document.querySelector('#times').textContent = time


    } else {
        ville = document.querySelector('#ville').textContent;
    }
    const meteo = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=8a7c9e6db246a1b9eeff741747c3751e&lang=fr&units=metric')
        .then(resultat => resultat.json())
        .then(json => json)
    console.log(meteo)
    displayWeatherInfos(meteo)

}


function displayWeatherInfos(data) {
    const name = data.name;
    const temperature = data.main.temp;
    const condition = data.weather[0].main;
    const description = data.weather[0].description;

    document.querySelector('#ville').textContent = name;
    document.querySelector('#temperature').textContent = Math.round(temperature);
    document.querySelector('#condition').textContent = capitalize(description);
    document.querySelector('i.wi').className = weatherIcons[condition];
    document.body.className = condition.toLowerCase();
}

const ville = document.querySelector('#ville');

ville.addEventListener('click', () => {
    ville.contentEditable = true;
});

ville.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        ville.contentEditable = false;
        main(false)
    }
});
main()