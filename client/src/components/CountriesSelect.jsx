var React = require('react');
var CountriesSelect = React.createClass({

  getInitialState: function(){
    return {selectedIndex: null};
  },

//Get the value from the event and set it as the new state: 
  handleChange: function(e){
    e.preventDefault();
    console.log('e', e.target);
    var newIndex = e.target.value;
    this.setState({selectedIndex: newIndex});
    var currentCountry = this.props.countries[newIndex];
    this.props.onSelectCountry( currentCountry );
  },
  //Above is the crux of the One Way Flow. Whenever we want something to change, the master hands out what's needed. 

  render: function(){

//BELOW, we are creating an array of equal size to the existing REST Countries API. But we're also going through the countries and creating an option element for each one, putting them in an array and putting them inside the select tag: 

    var options = this.props.countries.map(function(country, index){
      return <option value={index} key={index}> { country.name } </option>
    })

    return(
        <div>
          <select value={this.state.selectedIndex} onChange={this.handleChange}>
            { options }
          </select>
        </div>
      )
  }
});

module.exports = CountriesSelect;