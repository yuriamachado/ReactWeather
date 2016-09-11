var React = require("react");

//usando Destructuring Assignment para receber os atributos da arrow function.
var WeatherMessage = ({temp, location, realLocation}) => {
    //var {temp, location, realLocation} = props;
    return(
      <h3 className="text-center">It's it {temp}°C in {location} (the location information: {realLocation}).</h3>
    )
}

module.exports = WeatherMessage;
