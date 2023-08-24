const apiKey = 'bCZgMSxcSgIIBXk5HleMwdgXefIQTrzN';

const locationInput= document.getElementById('LocationInput');
const weatherInfo = document.getElementById('weatherInfo');

const apiUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/307772?apikey=bCZgMSxcSgIIBXk5HleMwdgXefIQTrzN`;

fetch(apiUrl)
.then(response => response.json())

fetch(apiUrl)
.then(response => response.json())
.then(data => {
    const weatherInfoContainer = document.getElementById("weather-info-container"); // Supongo que tienes un elemento contenedor con este ID

    data.DailyForecasts.forEach(forecast => {
        let weatherDate = forecast.Date.substring(0, 10);
        const textOfTheDay = forecast.Day.IconPhrase;
        const temperatureMinF = forecast.Temperature.Minimum.Value;
        const temperatureMaxF = forecast.Temperature.Maximum.Value;

        let temperatureMinC = (temperatureMinF - 32) * 5 / 9;
        let temperatureMaxC = (temperatureMaxF - 32) * 5 / 9;
        temperatureMinC = temperatureMinC.toFixed(2);
        temperatureMaxC = temperatureMaxC.toFixed(2);

        let wheatherphoto = "sunny.png";
        if (textOfTheDay=="Intermittent clouds") {
          wheatherphoto="sunAndClouds.png";
        }

        const weatherInfo = document.createElement("div");
        weatherInfo.innerHTML = ` <div class="mt-5 flex" style="background-color: rgba(33, 231, 195, 0.363)">
                                    <div>
                                    <img class="max-h-32" src="icons/${wheatherphoto}" alt="caca">
                                    
                                   </div>
                                    <div class="pt-3">
                                      <span>Date: ${weatherDate}<br></span>
                                      <span>Summary: ${textOfTheDay}!! <br></span>
                                      <span>Min temp: ${temperatureMinC}°C<br></span>
                                      <span>Max temp: ${temperatureMaxC}°C<br></span>
                                    </div>

                                  </div>`;

        weatherInfoContainer.appendChild(weatherInfo);
    });
})
    
.catch(error => {
    console.error('Error al obtener los datos:', error);
    weatherInfo.innerHTML = 'Error al obtener los datos';
  });



  function caca(){
    alert("caca");
  }