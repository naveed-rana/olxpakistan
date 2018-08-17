import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';


class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  handleChange = address => {
    this.setState({ address:address });
  };

  handleSelect = address => {
    this.setState({ address:address });
    if(this.props.sendAddress){
    this.props.sendAddress(address);
  }
    geocodeByAddress(address)
      .then(results => {getLatLng(results[0])})
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  render() {
      console.log(this.state.address);
      
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
        
            <TextField
         
         InputProps={{
          disableUnderline:this.props.underline,
            startAdornment: (
              <InputAdornment position="start">
                <i className="material-icons iconFixfield">
                location_on
                </i>
              </InputAdornment>
            ),
          }}

          id="full-width"
          fullWidth
          {...getInputProps({
            placeholder: 'Location ...',
            className: 'location-search-input',
          })}
        
        />   

            <div style={{ position: 'absolute',zIndex:1100,marginTop:10,border:'1px solid #dbdbdb'}}>
              {loading && <div style={{ backgroundColor: '#ffffff', cursor: 'pointer',padding:15,paddingBottom:15,borderBottom:'1px solid #fafafa',paddingRight:20  }}>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#dbdbdb', cursor: 'pointer',paddingTop:15,paddingBottom:15,borderBottom:'1px solid #fafafa',paddingRight:20 }
                  : { backgroundColor: '#ffffff', cursor: 'pointer',paddingTop:15,paddingBottom:15,borderBottom:'1px solid #fafafa',paddingRight:20  };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >  
                    <i className="material-icons iconFix">
                        location_on
                        </i>
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}
export default LocationSearchInput;