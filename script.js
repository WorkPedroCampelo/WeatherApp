const apiKey = 'bCZgMSxcSgIIBXk5HleMwdgXefIQTrzN';

const locationInput= document.getElementById('LocationInput');
const weatherInfo = document.getElementById('weatherInfo');

const apiUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/307772?apikey=bCZgMSxcSgIIBXk5HleMwdgXefIQTrzN`;

fetch(apiUrl)
.then(response => response.json())

.then(data => {
    const wheatherDate= data.DailyForecasts[0].Date
    const textOfTheDay = data.DailyForecasts[0].Day.IconPhrase //Extrae el "icono" por lo que te dirá que tipo de día hace
    const temperatureMinF = data.DailyForecasts[0].Temperature.Minimum.Value;
    const temperatureMaxF = data.DailyForecasts[0].Temperature.Maximum.Value;

        // Convertir temperaturas de Fahrenheit a Celsius
        const temperatureMinC = (temperatureMinF - 32) * 5/9;
        const temperatureMaxC = (temperatureMaxF - 32) * 5/9;


    weatherInfo.innerHTML= `Date: ${wheatherDate}<br>
                            Summary: ${textOfTheDay}!! <br>          
                            Min temp: ${temperatureMinC}°C<br>
                            Max temp: ${temperatureMaxC}°C<br>`;

})

    
.catch(error => {
    console.error('Error al obtener los datos:', error);
    weatherInfo.innerHTML = 'Error al obtener los datos';
  });



  function caca(){
    alert("caca");
  }