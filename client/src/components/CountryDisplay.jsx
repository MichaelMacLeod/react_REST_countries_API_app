var React = require('react');
var BorderingCountries = require('./BorderingCountries');

var CountryDisplay = React.createClass({

  findBordering:function(){

    var bordering = this.props.countries.filter(function(country){
      return this.props.country.borders.includes(country.alpha3Code)
    }.bind(this))
    return bordering;
  },

  render: function(){
    if(this.props.country){
      return(
        <div>
        <h2> { this.props.country.name } </h2>
        <h3>Capital city: { this.props.country.capital } </h3>
        <h4>Population: {Number(this.props.country.population).toLocaleString()} </h4>
        <BorderingCountries borderers={this.findBordering()} updateCurrentCountry={this.props.updateCurrentCountry}> </BorderingCountries>
        </div>
        )
    }
    else{
      return( <h2>Please select country</h2> )
    }
  }
});

module.exports = CountryDisplay;









