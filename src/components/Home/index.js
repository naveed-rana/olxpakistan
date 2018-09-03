import React, { Component } from 'react';
import DailyAds from '../dailyAds';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import HomeCard from '../HomeCards';
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '../smallScreenResults';
import TablePaginationActionsWrapped from '../paginations';
import TablePagination from '@material-ui/core/TablePagination';
import Table from '@material-ui/core/Table';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';


class Home extends Component {
constructor(props) {
  super(props)
  this.state={
   ads:[],
   copyData:[],     
   page: 0,
   rowsPerPage: 1,
  }
}


componentDidMount() {
  this.setState({
    ads:this.props.ads,
    copyData:this.props.ads
  });
}


onClickHandler = (data) =>{
  
   const {ads} = this.state; 
   let filter = ads.filter(item => item.category === data);
   this.setState({copyData:filter});
}
componentWillReceiveProps(nextProps) {
  
  this.setState({ads:nextProps.ads,copyData:nextProps.ads})
}
handleChangePage = (event, page) => {
  this.setState({page});
};

handleChangeRowsPerPage = event => {
  this.setState({rowsPerPage: event.target.value});
};
  render() {
    const {ads,copyData, rowsPerPage, page} = this.state;
    return (
      <div>
       <Grid container spacing={8}> 
        <Hidden smDown>
        <Grid item xs={1} md={2}>
        </Grid>
        </Hidden>
        <Grid item xs={12} md={8}>
        <Paper className="shadownone" elevation={10}>
        <Typography variant="body2" align="center" > 
          Categories
        </Typography>
        <Divider />
        <Grid container spacing={8} className="marginTop" > 
          <Grid item xs={6} md={3} className="pointer"  onClick={()=>this.onClickHandler("bikes")} align="center">
          <img src={require('../resource/images/bike.JPG')} alt=""/>
            <Typography variant="body2" > 
            Bike
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} className="pointer"  onClick={()=>this.onClickHandler("mobiles")} align="center">
          <img src={require('../resource/images/mob.JPG')} alt=""/>
            <Typography variant="body2" > 
            Mobiles
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} className="pointer"  onClick={()=>this.onClickHandler("vehicals")} align="center">
          <img src={require('../resource/images/car.JPG')} alt=""/>
            <Typography variant="body2" > 
            Vehicals
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} className="pointer"  onClick={()=>this.onClickHandler("animals")} align="center">
          <img src={require('../resource/images/animals.JPG')} alt=""/>
            <Typography variant="body2" > 
            Animals
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} className="pointer marginTop"  onClick={()=>this.onClickHandler("furniture")} align="center">
          <img src={require('../resource/images/furniture.JPG')} alt=""/>
            <Typography variant="body2" > 
            Furniture
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} className="pointer marginTop"  onClick={()=>this.onClickHandler("laptops")} align="center">
          <img src={require('../resource/images/jobs.JPG')} alt=""/>
            <Typography variant="body2" > 
            Laptops
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} className="pointer marginTop"  onClick={()=>this.onClickHandler("books")} align="center">
          <img src={require('../resource/images/books.JPG')} alt=""/>
            <Typography variant="body2" > 
            Books
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} className="pointer marginTop"  onClick={()=>this.onClickHandler("property")} align="center">
          <img src={require('../resource/images/property1JPG.JPG')} alt=""/>
            <Typography variant="body2" > 
            Property
            </Typography>
          </Grid>
          

          <Grid item xs={12} md={12}>
          <Divider />
          {copyData.length>0 ?
              copyData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((ad,i) => {
                return (
               <Card key={i} ad={ad} large={window.innerWidth<700?"small":"large"} />
                );
              })
              :<img width="100%" src={require('../resource/images/postloader.gif')} alt=""/> }
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
                          rowsPerPageOptions={[2,5, 10,25]}
                          onChangePage={this.handleChangePage}
                          onChangeRowsPerPage={this.handleChangeRowsPerPage}
                          ActionsComponent={TablePaginationActionsWrapped}/>
                      </TableRow>
                    </TableFooter>
                 </Table>
          </Grid>
        </Grid>
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
  ads:state.search.ads,
})
export default  connect(mapStateToProps,null)(Home);