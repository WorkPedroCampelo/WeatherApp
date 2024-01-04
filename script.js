//API usada de accuweather
const apiKey = 'bCZgMSxcSgIIBXk5HleMwdgXefIQTrzN';
let weatherInfo = document.getElementById('weatherInfo');

let cityName="Vigo";// ciudad por defecto

setCity();
 
function ChangeCity() {
  let cityKey=0;
  let locationInput= document.getElementById('LocationInput').value;
  let cityJson="http://dataservice.accuweather.com/locations/v1/cities/search?apikey=bCZgMSxcSgIIBXk5HleMwdgXefIQTrzN&q="+locationInput;
  fetch(cityJson)
  .then(response => response.json())
  .then( data => {
      cityKey=data[0].Key;
      cityName=data[0].LocalizedName;
      console.log(cityKey);
      setCity(cityKey);
      changeTittle(cityName);
    }
  )
  .catch(error =>{
      console.error("Error:" + error);
      alert("city not found");
    }
  )

}
changeTittle(cityName);
function changeTittle(){
  document.getElementById("cityNameTitle").innerHTML=cityName;
}


function setCity(locationKey= 307772/*Este es el código de Vigo*/){
  let apiUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/`+locationKey+`?apikey=bCZgMSxcSgIIBXk5HleMwdgXefIQTrzN`;
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    
      const weatherInfoContainer = document.getElementById("weather-info-container"); 
      weatherInfoContainer.innerHTML = "";
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
      document.write('Error al obtener los datos');
    });

}


