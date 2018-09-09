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
      rowsPerPage: 3,
      title:'',
      locations:'',
      category:'',
      adsViewOf:true,
      loading:true,
    };
  }

  
  componentDidMount() {
    this.props.startGetAds({category:"all"});

    document.title = "Search";
    let title = this.props.titleSearch.toLowerCase();
    let locations = this.props.mapSearch;
    let data = this.props.ads;
    let copyData;
      if(data.length > 0){
    
      if(title !== '' && locations !==''){
        copyData = data.filter(item => (item.title.includes(title) ||item.tag.includes(title)) && item.userlocations === locations );
         this.setState({data,copyData});
      }
      else if (title !== ''){
        copyData = data.filter(item => item.title.includes(title) ||item.tag.includes(title));
        this.setState({data,copyData});    
      }
      else if(locations !==''){
        copyData = data.filter(item =>item.userlocations === locations );
        this.setState({data,copyData});
      }
      else{
        this.setState({copyData:data});
      }
    
    }
      else{
        this.props.startGetAds({category:"all"});
      }
      
    
  }

  adsViewOff = () => {
    this.setState({adsViewOf:false})
  }
  
  componentWillReceiveProps(nextProps) {

    this.setState({data:nextProps.ads,copyData:nextProps.ads,loading:false})
  }

  onChangeHandler = (e) =>{
    this.setState({category:e.target.value,loading:true});
    this.props.startGetAds({category:e.target.value});
  }
  getTitleSearch=(title)=>{
    title = title.toLowerCase();
    this.setState({title});
    var {data,copyData,locations} = this.state;
    if(locations === ''){
      copyData = data.filter(item => item.title.includes(title) ||item.tag.includes(title));
      this.setState({copyData});
    }else{
      copyData = data.filter(item => (item.title.includes(title) ||item.tag.includes(title)) && item.userlocations.startsWith(locations.toUpperCase()) );
      this.setState({copyData});
    }
  }
  getMapState=(locations)=>{
    this.setState({locations});
    let {title,data,copyData} = this.state;
    if(title === ''){
      copyData = data.filter(item =>item.userlocations.startsWith(locations.toUpperCase()) );
      this.setState({copyData});
    }else{
      copyData = data.filter(item => (item.title.includes(title) ||item.tag.includes(title)) && item.userlocations.startsWith(locations.toUpperCase()));
      this.setState({copyData});
    }
  }
  handleChangePage = (event, page) => {
    this.setState({page});
  };

  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value});
  };
    render() {
      const {copyData, rowsPerPage, page,title,locations,adsViewOf,loading} = this.state;
        return (
            <div>
            <Grid container spacing={8}> 
              <Hidden smDown>
              <Grid item xs={1} md={2}>
              {adsViewOf ? 
              <img width="100%" onClick={this.adsViewOff} src={require('../resource/images/adsheight.JPG')} alt=""/>
              :""}
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
                      <option selected value="all">
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
                      <option value="property">
                      Property
                      </option>
                      <option value="books">
                      Books
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
              {loading?<img width="100%" src={require('../resource/images/adsloading.gif')} alt="Loading...."/> : <div>
                  <Hidden only={['md', 'xl','lg']}>
                  {copyData.length>0 ?
              copyData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((ad,i) => {
                return (
               <Card key={i} ad={ad} />
                );
              })
              :<Typography variant="body2" align="center" className="paddingTop" > 
              No ads related to your query! Please try to another query.
            </Typography>  }
                    <Table >
                    <TableFooter>
                      <TableRow>
                        <TablePagination
                          colSpan={2}
                          count={copyData.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          labelDisplayedRows={() => ""}
                          labelRowsPerPage=""
                          rowsPerPageOptions={[3,5, 10,25]}
                          onChangePage={this.handleChangePage}
                          onChangeRowsPerPage={this.handleChangeRowsPerPage}
                          ActionsComponent={TablePaginationActionsWrapped}/>
                      </TableRow>
                    </TableFooter>
                 </Table>
                  </Hidden>
                  <Hidden only={['xs', 'sm']}>
                  {copyData.length>0 ?
              copyData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((ad,i) => {
                return (
                  <div key={i}>
               <LargeScreenResults  ad={ad}  />
               <Divider />
                  </div>
                );
              })
              : <Typography variant="body2" align="center" className="paddingTop" > 
                No ads related to your query! Please try to another query.
              </Typography> }
                 <Table >
                    <TableFooter>
                      <TableRow>
                        <TablePagination
                          colSpan={2}
                          count={copyData.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          labelRowsPerPage="Ads per page"
                          rowsPerPageOptions={[3, 10,25,100,500]}
                          onChangePage={this.handleChangePage}
                          onChangeRowsPerPage={this.handleChangeRowsPerPage}
                          ActionsComponent={TablePaginationActionsWrapped}/>
                      </TableRow>
                    </TableFooter>
                 </Table>
                  </Hidden>
                  </div>}
                </Paper>
                
              </Grid>
              <Hidden smDown>
              <Grid item xs={1} md={2}>
              {adsViewOf ? 
              <img width="100%" onClick={this.adsViewOff} src={require('../resource/images/adsheight.JPG')} alt=""/>
              :""}
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
