import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Map from '../googleMapApi';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import data from './pk.json';

class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmpassword: '',
            cellNo:'',
            address: '',
            city:'',
            country:'',
            province:'choose your province'
        }
    }

    componentDidMount() {
      var branches = [];
      data.forEach(item => {
     if(branches.indexOf(item.admin) === -1){
       branches.push(item.admin);
     }
   });
      console.log(branches);
    }
    

    onChangeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});
    }
   getAddress=(address)=>{
      this.setState({address})
   }
    render() {
      console.log(this.state);
      
        return (
            <div>
                <Grid container spacing={8}> 
                <Hidden smDown>
                <Grid item xs={4} md={3}> 
                </Grid>
                </Hidden>
                
                 <Grid item xs={12} md={6}>
                   <Paper className="loginPaper" elevation={10}>
                     
                     <Typography variant="display1" align="center">
                     <i className="material-icons largeIcon">account_box
                    </i>
                    SIGNUP
                    </Typography>  
                     <Grid container spacing={8} className="LoginContainer"> 
                       <Grid item xs={12} md={6} className="paddingTop">
                       <TextField
                
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <i className="material-icons iconFixfield">
                          account_circle
                           </i>
                        </InputAdornment>
                      ),
                    }}
                  fullWidth={true}
                  required={true}
                  helperText=""
                  placeholder="Name"
                  name="name"
                  onChange={this.onChangeHandler}
                  />
                       </Grid>
                       <Grid item xs={12} md={6} className="paddingTop">
                       <TextField
                       type="email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <i className="material-icons iconFixfield">
                              email
                           </i>
                        </InputAdornment>
                      ),
                    }}
                  fullWidth={true}
                  required={true}
                  placeholder="email"
                  name="email"
                  onChange={this.onChangeHandler}
                  />
                       </Grid>
                    
                    <Grid item xs={12} md={6} className="paddingTop">
                    <TextField
                    
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <i className="material-icons iconFixfield">
                              lock
                           </i>
                        </InputAdornment>
                      ),
                    }}
                  type="password"
                  fullWidth={true}
                  required={true}
                  placeholder="Password"
                  name="password"
                  onChange={this.onChangeHandler}
                  />
                    </Grid>

                     <Grid item xs={12} md={6} className="paddingTop">
                    <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <i className="material-icons iconFixfield">
                              lock
                           </i>
                        </InputAdornment>
                      ),
                    }}
                  type="password"
                  fullWidth={true}
                  required={true}
                  placeholder="Confirm Password"
                  name="confirmpassword"
                  onChange={this.onChangeHandler}
                  />
                    </Grid>

                    <Grid item xs={12} md={12} className="paddingTop">
                      <Map underline={false} sendAddress={this.getAddress}/>
                    </Grid>
                    
                    <Grid item xs={12} md={12} className="paddingTop">
                      <select name="province">
                      <option value="none">
                      Choose your province
                      </option>
                      <option value="Sindh">
                      Sindh
                      </option>
                      <option value="Punjab">
                      Punjab
                      </option>
                      <option value="Khyber Pakhtunkhwa">
                      Khyber Pakhtunkhwa
                      </option>
                      <option value="Islāmābād">
                      Islāmābād
                      </option>
                      <option value="Balochistān">
                      Balochistān
                      </option>
                      <option value="Gilgit-Baltistan">
                      Gilgit-Baltistan
                      </option>
                      <option value="Federally Administered Tribal Areas">
                      Federally Administered Tribal Areas
                      </option>
                      <option value="Federally Administered Tribal Areas">
                      Azad Kashmir
                      </option>
                      </select>
                    </Grid>
                     </Grid>
                 
                   </Paper> 
                 </Grid>

                <Hidden smDown>
                <Grid item xs={4} md={3}> 
                </Grid>
                </Hidden>
                </Grid>
            </div>
        )
    }
}
export default SignUp;