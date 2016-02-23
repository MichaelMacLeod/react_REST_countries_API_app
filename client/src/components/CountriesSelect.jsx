var React = require('react');
var CountriesSelect = React.createClass({
  render: function(){
    // var options = [];

    // for(var country of this.props.countries){
    //   options.push(
    //       <option> {country.name} </option>
    //     )
    // }

//BELOW, we are creating an array of equal size to the existing REST Countries API. But we're also going through the countries and creating an option element for each one, putting them in an array and putting them inside the select tag: 

    var options = this.props.countries.map(function(country, index){
      return <option key={index}> { country.name } </option>
    })

    return(
        <div>
          <select>
            { options }
          </select>
        </div>
      )
  }
});

module.exports = CountriesSelect;