import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '../smallScreenResults';
import TablePaginationActionsWrapped from '../paginations';
import TablePagination from '@material-ui/core/TablePagination';
import Table from '@material-ui/core/Table';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import LargeScreenResults from '../LargeScreenResults';
import SearchTitle from './AutoComplete';
import Map from './MapApi';
import { connect } from 'react-redux';
import {startGetAds} from '../redux/actions/searchActions';


class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      copyData:[],     
      page: 0,
      rowsPerPage: 5,
      title:'',
      locations:'',
      category:'',
      

    };
  }

  
  componentDidMount() {
    this.setState({
      title:this.props.titleSearch,
      locations:this.props.mapSearch,
      data:this.props.ads,
      copyData:this.props.ads
    })
    
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({data:nextProps.ads,copyData:nextProps.ads})
  }

  onChangeHandler = (e) =>{
    this.setState({category:e.target.value})
    this.props.startGetAds({category:e.target.value});
  }
  getTitleSearch=(title)=>{
    this.setState({title});
    const {locations,category} = this.state;
  }
  getMapState=(locations)=>{
    this.setState({locations});
    const {title,category} = this.state;
    let data = {
      category,
      title,
      locations
    }
  }
  handleChangePage = (event, page) => {
    this.setState({page});
  };

  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value});
  };
    render() {
      const {data, rowsPerPage, page,title,locations} = this.state;
      
 
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
                      style={{fontWeight:'bold'}}
                      value={this.state.category}
                      onChange={this.onChangeHandler}
                      className="selectSignUp">
                      <option selected value="none">
                      All Categories
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
                 <SearchTitle getTitleSearch={this.getTitleSearch} titles={title}/>
                </Grid>
                 <Hidden only={['sm','xs']}>
                 <Grid item xs={12} md={4} className="paddingTop">
                 <Map getMapState = {this.getMapState} locations={locations} />
                 </Grid> 
                 </Hidden>
                 <Hidden only={['md','lg','xl']}>
                 <Grid item xs={12} md={4} className="paddingTop marginTop">
                 <Map getMapState = {this.getMapState} locations={locations} />
                 </Grid> 
                 </Hidden>
                 
                
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
const mapStateToProps = state => ({
  mapSearch:state.search.mapSearch,
  titleSearch:state.search.titleSearch,
  ads:state.search.ads,
})

export default connect(mapStateToProps,{startGetAds})(Search);
