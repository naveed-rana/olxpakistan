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
import { connect } from 'react-redux';
import {startGetUserAds} from '../redux/actions/searchActions';


class MyAds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      page: 0,
      rowsPerPage: 5,
    };
  }

  
  componentDidMount() {
    this.props.startGetUserAds(this.props.userid) 
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({data:nextProps.ads})
  }
  
  handleChangePage = (event, page) => {
    this.setState({page});
  };

  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value});
  };
    render() {
      const {data, rowsPerPage, page,} = this.state;
      
 
        return (
            <div>
            <Grid container spacing={8}> 

              <Grid item xs={12} md={12}>
              <Paper className="postingPaper" elevation={5}>
                 <Typography variant="body2" align="center"> 
                   My Ads List
                 </Typography>
                   <Divider />
                </Paper>

                <Paper className="marginTop" elevation={5}>
             
                  <Hidden only={['md', 'xl','lg']}>
                  {data.length>0 ?
              data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((ad,i) => {
                return (
               <Card key={i} ad={ad} />
                );
              })
              :<img width="100%" src={require('../resource/images/adsloading23.gif')} alt=""/> }
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
               <LargeScreenResults  ad={ad}  />
               <Divider />
                  </div>
                );
              })
              : <img width="100%" src={require('../resource/images/adsloading.gif')} alt=""/> }
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
                    
                </Paper>
                
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
