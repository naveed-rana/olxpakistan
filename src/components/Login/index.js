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
import LockIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import {SIGNUP} from '../constants';
import CircularProgress from '@material-ui/core/CircularProgress';
import {startLoginUser} from '../redux/actions/userAction';
import { connect } from 'react-redux';
import pink from '@material-ui/core/colors/pink';
import {POSTING} from '../constants';
import {withRouter} from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            loading:false
        }
    }
   
    componentDidMount() {
        document.title = "Signup";
      }

    componentWillReceiveProps(nextProps) {
        this.setState({
            loading:false
        })
      if(nextProps.user.email){
        this.props.history.push(POSTING);
      }
      
      }

    onChangeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});
    }

    onClickHandler = (e) => {
      e.preventDefault();
      this.setState({loading:true});
      const {email,password} = this.state;
      let data = {
          email,
          password
      }
      this.props.startLoginUser(data);

    }

    render() {
        const {email,password,loading} = this.state;
        const isnotValid = email ==='' || password ==='' || loading;  
        console.log(this.state);
        return (
            <div>
                <Grid container spacing={8}>
                    <Hidden smDown>
                        <Grid item xs={4} md={4}></Grid>
                    </Hidden>

                    <Grid item xs={12} md={4}>
                        <Paper className="loginPaper" elevation={10} align="center">
                 
                          <Avatar style={{color: '#fff',backgroundColor: pink[500],}} >
                          <LockIcon />
                          </Avatar>
                         <Typography variant="headline">Sign in</Typography>
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
                                            autoFocus={true}
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
                                        onClick={this.onClickHandler}
                                        disabled={isnotValid}
                                        variant="contained" size="small" color="primary" className="loginbtn">
                                        {loading ?
                                        <CircularProgress size={20} />:
                                           <span>
                                            Submit
                                            <i className="material-icons iconSize submitIcon">
                                                send
                                            </i>
                                            </span>
                                            }
                                        </Button>
                                    </Grid>
                                    <Grid container spacing={8} className="paddingTop"> 
                                    <Grid item xs={12} md={6} className="paddingTop">
                                        <Typography variant="body2">
                                            <Link to={SIGNUP}>Register</Link>
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

const mapStateToProps = state => ({
    user:state.user.user,
    error:state.user.error
  })

export default withRouter(connect(mapStateToProps,{startLoginUser})(Login));