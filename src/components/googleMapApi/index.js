import React from 'react';
import { connect } from 'react-redux';
import {LocationOn} from '@material-ui/icons';
import {getMapState} from '../redux/actions/searchActions';
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
    this.props.getMapState(address);
  };

  handleSelect = address => {
    this.setState({ address:address });
    this.props.getMapState(address);
    if(this.props.sendAddress){
    this.props.sendAddress(address);
  }
    geocodeByAddress(address)
      .then(results => {getLatLng(results[0])})
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  render() {
          
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
              
               <LocationOn className="iconFixfield"/>
              
              </InputAdornment>
            ),
          }}

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
                        <LocationOn className="iconFix" />
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
export default connect(null,{getMapState})(LocationSearchInput);