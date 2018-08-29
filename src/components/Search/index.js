import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from '../smallScreenResults';
import TablePaginationActionsWrapped from '../paginations';
import TablePagination from '@material-ui/core/TablePagination';
import Table from '@material-ui/core/Table';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import LargeScreenResults from '../LargeScreenResults';



class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      copyData:[],
      branches:[],      
      page: 0,
      rowsPerPage: 5,

    };
  }
  handleChangePage = (event, page) => {
    this.setState({page});
  };

  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value});
  };
    render() {
      const {data, rowsPerPage, page} = this.state;
        return (
            <div>
            <Grid container spacing={8}> 
              <Hidden smDown>
              <Grid item xs={1} md={2}>
              </Grid>
              </Hidden>
              <Grid item xs={12} md={8}>
              <Paper className="postingPaper" elevation={5}>
                 <Typography variant="body2" align="center"> 
                   SEARCH AN ADD
                 </Typography>
                   <Divider />
                <Grid container spacing={8} className="paddingTop"> 
                 <Grid item xs={12} md={4} className="paddingTop">
                  
                      <select name="category"
                      value=""
                      onChange={this.onChangeHandler}
                      className="selectSignUp">
                      <option selected value="none">
                      Search by Category
                      </option>
                      <option value="mobiles">
                      Mobiles
                      </option>
                      <option value="vehicals">
                      Vehicals
                      </option>
                      <option value="bikes">
                      Bikes
                      </option>
                      <option value="animals">
                      Animals
                      </option>
                      <option value="laptops">
                      Laptops
                      </option>
                      <option value="furniture">
                      Furniture
                      </option>
                      </select>
                   
                    </Grid>
                 <Grid item xs={12} md={4} className="paddingTop">
                <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <i className="material-icons iconFixfield">
                          edit_location
                           </i>
                        </InputAdornment>
                      ),
                    }}
                  name="title"
                  onChange={this.onChangeHandler}
                  fullWidth={true}
                  placeholder="Search by Locations"
                  value=""
                  />
                </Grid> 
                 <Grid item xs={12} md={4} className="paddingTop">
                <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <i className="material-icons iconFixfield">
                          find_in_page
                           </i>
                        </InputAdornment>
                      ),
                    }}
                  name="title"
                  onChange={this.onChangeHandler}
                  fullWidth={true}
                  placeholder="Search by Title"
                  value=""
                  />
            </Grid>
                
                </Grid>
                </Paper>

                <Paper className="marginTop" elevation={5}>
                  
                  {/* <img width="100%" src={require('../resource/images/adsloading.gif')} alt=""/> */}

                  <Hidden only={['md', 'xl','lg']}>
                    <Card/>
                    <Table >
                    <TableFooter>
                      <TableRow>
                        <TablePagination
                          colSpan={2}
                          count={data.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          labelDisplayedRows={() => ""}
                          labelRowsPerPage=""
                          onChangePage={this.handleChangePage}
                          onChangeRowsPerPage={this.handleChangeRowsPerPage}
                          ActionsComponent={TablePaginationActionsWrapped}/>
                      </TableRow>
                    </TableFooter>
                 </Table>
                  </Hidden>
                  <Hidden only={['xs', 'sm']}>
                 <LargeScreenResults />
                 <Divider />
                 <LargeScreenResults />
                 <Table >
                    <TableFooter>
                      <TableRow>
                        <TablePagination
                          colSpan={2}
                          count={data.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          labelRowsPerPage="Ads per page"
                          onChangePage={this.handleChangePage}
                          onChangeRowsPerPage={this.handleChangeRowsPerPage}
                          ActionsComponent={TablePaginationActionsWrapped}/>
                      </TableRow>
                    </TableFooter>
                 </Table>
                  </Hidden>
                    
                </Paper>
                
              </Grid>
              <Hidden smDown>
              <Grid item xs={1} md={2}>
              </Grid>
              </Hidden>
            </Grid>
            </div>
        )
    }
}

export default Search;
