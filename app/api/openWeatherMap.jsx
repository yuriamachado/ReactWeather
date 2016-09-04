var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=31a729a87e6cc82c21d509244e641e41&units=metric';

//?q=London,uk
module.exports = {
  getTemp: function(location) {
    var encodeLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodeLocation}`;

    return axios.get(requestUrl).then(function (res){
      debugger;
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        var cityTemp = {
          temp: res.data.main.temp,
          realLocation: res.data.name
        }
        return cityTemp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });

  }
}
