const apiKey = 'bCZgMSxcSgIIBXk5HleMwdgXefIQTrzN';

let locationInput= document.getElementById('LocationInput');
let weatherInfo = document.getElementById('weatherInfo');

let locationKey="307772";//Está puesta para vigo, cambiar cuando se quiera poner otra ciudad

let apiUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/`+locationKey+`?apikey=bCZgMSxcSgIIBXk5HleMwdgXefIQTrzN`;

let city="" ;

/*SUPONGO Q HAY Q HACER OTRO FETCH CON ESTA APIURL, A ELLA LE DAREMOS
API KEY Y CIUDAD A BUSCAR, DE SU RESPUESTA ESCOGEMOS EL NÚMERO DE CIUDAD Y SE LO
PONEMOS A LA VARIABLE locationKey (abría q actualizar el título donde pone la ciudad,
  tambien estaría bn poner el país, dado q apareces siempre muchas opciones (eso se podría mejorar) )
http://dataservice.accuweather.com/locations/v1/cities/search

*/ 

fetch(apiUrl)
.then(response => response.json())

fetch(apiUrl)
.then(response => response.json())
.then(data => {
    const weatherInfoContainer = document.getElementById("weather-info-container"); 

    data.DailyForecasts.forEach(forecast => {
        let weatherDate = forecast.Date.substring(0, 10);
        const textOfTheDay = forecast.Day.IconPhrase;
        const temperatureMinF = forecast.Temperature.Minimum.Value;
        const temperatureMaxF = forecast.Temperature.Maximum.Value;

        let temperatureMinC = (temperatureMinF - 32) * 5 / 9;
        let temperatureMaxC = (temperatureMaxF - 32) * 5 / 9;
        temperatureMinC = Math.round(temperatureMinC);
        temperatureMaxC = Math.round(temperatureMaxC);

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



  function ChangeCity(){
    city = document.getElementById("LocationInput");
    alert("Not working");

  }
