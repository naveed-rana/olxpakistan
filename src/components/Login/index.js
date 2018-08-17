import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});
    }

    render() {
        const {email,password} = this.state;
        const isnotValid = email ==='' || password ==='';  
        console.log(this.state);
        return (
            <div>
                <Grid container spacing={8}>
                    <Hidden smDown>
                        <Grid item xs={4} md={4}></Grid>
                    </Hidden>

                    <Grid item xs={12} md={4}>
                        <Paper className="loginPaper" elevation={10}>

                            <Typography variant="display1" align="center">
                               <i className="material-icons largeIcon">account_box
                                </i>Login
                            </Typography>
                            <Grid container spacing={8} className="LoginContainer">
                              
                                    <Grid item xs={12} md={12} className="paddingTop">
                                        <TextField
                                            type="email"
                                            name="email"
                                            InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <i className="material-icons iconFixfield">
                                                        email
                                                    </i>
                                                </InputAdornment>
                                            )
                                        }}
                                            fullWidth={true}
                                            required={true}
                                            helperText=""
                                            placeholder="Email"
                                            onChange={this.onChangeHandler}
                                            />
                                    </Grid>
                                    <Grid item xs={12} md={12} className="paddingTop">
                                        <TextField
                                            type="password"
                                            name="password"
                                            InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <i className="material-icons iconFixfield">
                                                        lock
                                                    </i>
                                                </InputAdornment>
                                            )
                                        }}
                                            fullWidth={true}
                                            required={true}
                                            placeholder="Password"
                                            onChange={this.onChangeHandler}
                                            />
                                    </Grid>

                                    <Grid item xs={12} md={12} align="right" className="paddingTop">
                                        <FormControlLabel
                                            control={< Checkbox value = "checkedB" color = "primary" />}
                                            label="Remember Me"/>
                                    </Grid>

                                    <Grid item xs={12} md={12} align="center">
                                        <Button
                                        type="submit"
                                        disabled={isnotValid}
                                        variant="contained" size="small" color="primary" className="loginbtn">
                                            Submit
                                            <i className="material-icons iconSize">
                                                send
                                            </i>
                                        </Button>
                                    </Grid>
                                    <Grid container spacing={8} className="paddingTop"> 
                                    <Grid item xs={12} md={6} className="paddingTop">
                                        <Typography variant="body2">
                                            <Link to="">Register</Link>
                                        </Typography>
                                    </Grid>
                                    <Hidden smDown>
                                        <Grid item xs={12} md={6} align="right" className="paddingTop">
                                            <Typography variant="body2">
                                                <Link to="/">Forget Password</Link>
                                            </Typography>
                                        </Grid>
                                    </Hidden>
                                    <Hidden mdUp>
                                        <Grid item xs={12} md={6}>
                                            <Typography variant="body2" className="paddingTop">
                                                <Link to="">Forget Password</Link>
                                            </Typography>
                                        </Grid>
                                    </Hidden>
                                    </Grid>
                           
                            </Grid>

                        </Paper>
                    </Grid>

                    <Hidden smDown>
                        <Grid item xs={4} md={4}></Grid>
                    </Hidden>
                </Grid>
            </div>
        )
    }
}
export default Login;