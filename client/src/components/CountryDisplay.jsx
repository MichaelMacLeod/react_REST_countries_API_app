var React = require('react');

var CountryDisplay = React.createClass({
  render: function(){
    if(!this.props.country){ return <h4> No country selected </h4> }
      return(
        <div>
        <h2> { this.props.country.name } </h2>
          <h3>Capital city: { this.props.country.capital } </h3>
          <h4>Population {this.props.country.population} </h4>
        </div>
        )
  }
})

module.exports = CountryDisplay;