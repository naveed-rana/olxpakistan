import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import {EditLocation} from '@material-ui/icons';

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  componentDidMount() {
    this.setState({ address:this.props.locations });
    this.props.getMapState(this.props.locations);
  }
  

  handleChange = e => {
    this.setState({ address:e.target.value });
    this.props.getMapState(e.target.value);
  
  };

  render() {
      
    return (
      
    
        
            <TextField
         onChange={this.handleChange}
         InputProps={{
            startAdornment: (
              <InputAdornment position="start">
               
                <EditLocation className="iconFixfield"/>
                
              </InputAdornment>
            ),
          }}

          fullWidth
          placeholder="Location..."
        
        />   

    );
  }
}
export default LocationSearchInput;