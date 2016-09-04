var React = require("react");

// var WeatherMessage = React.createClass({
//     render: function() {
//       var { temp, location, realLocation } = this.props;
//       return(
//         <h3>It's it {temp} in {location} (the location information: {realLocation}).</h3>
//       )
//     }
// });

//usando Destructuring Assignment para receber os atributos da arrow function.
var WeatherMessage = ({temp, location, realLocation}) => {
    //var {temp, location, realLocation} = props;
    return(
      <h3>It's it {temp} in {location} (the location information: {realLocation}).</h3>
    )
}

module.exports = WeatherMessage;
