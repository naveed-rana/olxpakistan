import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from './SmallScreenCards';
import TablePaginationActionsWrapped from '../paginations';
import TablePagination from '@material-ui/core/TablePagination';
import Table from '@material-ui/core/Table';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import LargeScreenResults from './LargeScreenCard';
import { connect } from 'react-redux';
import {startGetUserAds} from '../redux/actions/searchActions';


class MyAds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading:true,
      data: [],
      page: 0,
      rowsPerPage: 5,
    };
  }

  
  componentDidMount() {
    this.props.startGetUserAds(this.props.userid) 
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({data:nextProps.ads,loading:false})
  }
  
  handleChangePage = (event, page) => {
    this.setState({page});
  };

  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value});
  };
    render() {
      const {data, rowsPerPage, page,loading} = this.state;
      
        return (
            <div>
            <Grid container spacing={8}> 

              <Grid item xs={12} md={12}>
                 <Typography variant="body2" align="center"> 
                   My Ads List
                 </Typography>
                   <Divider />
               {loading ? <img width="100%" src={require('../resource/images/adsloading.gif')} alt="Loading..."/>:
              <div>
                  <Hidden only={['md', 'xl','lg']}>
                  {data.length>0 ?
              data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((ad,i) => {
                return (
               <Card key={i} ad={ad} my="myad" />
                );
              })
              : <Typography variant="body2" align="center" className="paddingTop"> 
              You have not any Ads yet, please go to Posting Fomrm and post an free Ads.
            </Typography>}
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
                          rowsPerPageOptions={[2,5, 10,25]}
                          onChangePage={this.handleChangePage}
                          onChangeRowsPerPage={this.handleChangeRowsPerPage}
                          ActionsComponent={TablePaginationActionsWrapped}/>
                      </TableRow>
                    </TableFooter>
                 </Table>
                  </Hidden>
                  <Hidden only={['xs', 'sm']}>
                  {data.length>0 ?
              data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((ad,i) => {
                return (
                  <div key={i}>
               <LargeScreenResults  ad={ad} my="myad" />
               <Divider />
                  </div>
                );
              })
              : <Typography variant="body2" align="center" className="paddingTop"> 
              You have not any Ads yet, please go to Posting Fomrm and post an free Ads.
            </Typography> }
                 <Table >
                    <TableFooter>
                      <TableRow>
                        <TablePagination
                          colSpan={2}
                          count={data.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          labelRowsPerPage="Ads per page"
                          rowsPerPageOptions={[5, 10,25,100,500]}
                          onChangePage={this.handleChangePage}
                          onChangeRowsPerPage={this.handleChangeRowsPerPage}
                          ActionsComponent={TablePaginationActionsWrapped}/>
                      </TableRow>
                    </TableFooter>
                 </Table>
                  </Hidden>
                  </div>
              }
              </Grid>
             
            </Grid>
            </div>
        )
    }
}
const mapStateToProps = state => ({
  ads:state.search.myAds,
  userid : state.user.user._id
})

export default connect(mapStateToProps,{startGetUserAds})(MyAds);
