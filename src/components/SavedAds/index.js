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


class LaterView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading:true,
      data: [],
      copyData:[],
      page: 0,
      rowsPerPage: 5,  
    };
  }

  
  componentDidMount() {
    document.title = "View Later Ads";
    let data =JSON.parse(localStorage.getItem('savedads'));
    if(data){
    this.setState({copyData:data,loading:false});}
    else{
        this.setState({loading:false});
    }
  }
  
  
  
  
  handleChangePage = (event, page) => {
    this.setState({page});
  };

  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value});
  };
    render() {
      const {copyData, rowsPerPage, page,loading} = this.state;
      
 
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
                   List of later view ads
                 </Typography>
                   <Divider />
                </Paper>

                <Paper className="marginTop" elevation={5}>
              {loading?
              <img width="100%" src={require('../resource/images/adsloading.gif')} alt=""/> 
              :
                <div>
                  <Hidden only={['md', 'xl','lg']}>
                  {copyData.length>0 ?
              copyData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((ad,i) => {
                return (
               <Card key={i} ad={ad} />
                );
              })
              : <Typography variant="body2" className="paddingTop" align="center"> 
                There is no later view ads
              </Typography> }
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
              : <Typography variant="body2" className="paddingTop" align="center"> 
              There is no later view ads
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
                          rowsPerPageOptions={[5, 10,25,100,500]}
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
              </Grid>
              </Hidden>
            </Grid>
            </div>
        )
    }
}


export default LaterView;
