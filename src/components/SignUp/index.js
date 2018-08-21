import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Map from '../googleMapApi';
import data from './pk.json';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {startCreateUser} from '../redux/actions/userAction';
import { connect } from 'react-redux';

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
            cities:[],
            province:'',
            checkbox:''
        }
    }
  
    onSubmitHandler=(e)=>{
      e.preventDefault();
      const {name,email,password,confirmpassword,cellNo,address,city,province,checkbox} = this.state;
      if(password !== confirmpassword){
      
      }
      else{
            let userData = {
              name,
              email,
              password,
              cellNo,
              address,
              city,
              province,
            }
        this.props.startCreateUser(userData);
      }
       
    }
    
    onSelectHandler=(e)=>{
      let cities=[]
     cities = data.filter((item)=> item.admin === e.target.value);
      this.setState({
        province:e.target.value,
        cities
      })
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
      const {cities,name,email,password,confirmpassword,cellNo,address,city,province,checkbox} = this.state;
      const isvalid = name ==='' || email ==='' || password ==='' || confirmpassword ==='' || cellNo ==='' || address ==='' ||  city ===''||province===''|| checkbox===''; 
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
                    SignUp
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
                    <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <i className="material-icons iconFixfield">
                              phone
                           </i>
                        </InputAdornment>
                      ),
                    }}
                
                  fullWidth={true}
                  required={true}
                  placeholder="Mobile No."
                  name="cellNo"
                  onChange={this.onChangeHandler}
                  />
                    </Grid>

                    <Grid item xs={12} md={12} className="paddingTop">
                      <Map underline={false} sendAddress={this.getAddress}/>
                    </Grid>
                    
                    <Grid item xs={12} md={12} className="paddingTop">
                  
                    <i className="material-icons iconFixfield mangaeWithSelect">
                    add_comment

                           </i>
                      <select name="province"
                      onChange={this.onSelectHandler}
                      className="selectSignUp">
                      <option selected disabled value="none">
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
                      <Divider />
                    </Grid>
                     {cities.length>0 ? 
                     <Grid item xs={12} md={12} className="paddingTop">
                       
                    <i className="material-icons iconFixfield mangaeWithSelect">
                    add_comment

                           </i>
                      <select name="city" 
                      onChange={this.onChangeHandler}
                      className="selectSignUp">
                      <option selected disabled value="none">
                      Choose your City
                      </option>
                      {cities.map((item,i)=>{
                        return(
                      <option key={i} value={item.city}>
                       {item.city}
                      </option>)
                      })}
                      </select>
                      <Divider />
                     </Grid>
                     :<div></div>}

                     <Grid item xs={12} md={12} className="paddingTop">
                     <TextField
                     readOnly
                    InputProps={{
                      
                      startAdornment: (
                        <InputAdornment position="start">
                          <i className="material-icons iconFixfield">
                          star_half
                           </i>
                        </InputAdornment>
                      ),
                    }}
                  
                  type="text"
                  fullWidth={true}
                  required={true}
                  value="Pakistan"
      
                  />
                       </Grid>

                       <Grid item xs={12} md={12} className="paddingTop">
                         <Typography variant="caption" > 
                         <FormControlLabel
                         control={< Checkbox 
                         name="checkbox"
                         onChange={this.onChangeHandler}
                         value = "checkedB" color = "primary" />}/>
                         Copyright © 2018. OLX Pakistan - All Rights Reserved -
                         Reproduction of material from olxpakistan pages without prior written permission from OLX is strictly prohibited and may result in legal action.
                         Reproduction of material containing the OLX watermark constitutes unauthorized use of the OLX trade mark and may also result in legal action. 
                         </Typography>
                       </Grid>
                       <Grid item xs={12} md={12} align="center" className="paddingTop">
                                        <Button
                                        onClick={this.onSubmitHandler}
                                        disabled={isvalid}
                                        type="submit"
                                        variant="contained" size="small" color="primary" className="singUpBtn">
                                            Submit
                                            <i className="material-icons iconSize">
                                                send
                                            </i>
                                        </Button>
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
export default connect(null,{startCreateUser})(SignUp);