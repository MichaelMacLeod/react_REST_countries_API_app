var React = require('react');

var BorderingCountries = React.createClass({
  countriesElement: function(country, index){
    return (
      <div>
        <h3>{country.name}</h3>
        <button value={country.alpha3Code} onClick={this.handleButton} >More country info</button>
      </div>
      )
  }, 

  handleButton: function(e){
    var newCountry = e.target.value;
    for(var country of this.props.borderers){
      if(country.alpha3Code == newCountry){
        this.props.updateCurrentCountry(country)
      }
    }
  },

  render:function(){
    return (
      <div>
        <h1>Bordering Countries</h1>
          {this.props.borderers.map(this.countriesElement)}
        
      </div>
      )
  }


})

module.exports = BorderingCountries;