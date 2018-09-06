import React, { Component } from 'react';
import { connect } from 'react-redux';
import {startGetMessage} from '../redux/actions/messageActions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import Divider from '@material-ui/core/Divider';
import TablePaginationActionsWrapped from '../paginations';
import TablePagination from '@material-ui/core/TablePagination';
import Table from '@material-ui/core/Table';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Hidden from '@material-ui/core/Hidden';

class Messages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading:true,
            messages:[],
            page: 0,
            rowsPerPage: 5,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({messages:nextProps.messages,loading:false});
    }
    
    componentDidMount() {
        this.props.startGetMessage(this.props.user);
    }

    handleChangePage = (event, page) => {
        this.setState({page});
      };
    
      handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: event.target.value});
      };

    render() {
        const {messages, rowsPerPage, page,loading} = this.state;
        return (
            <div>
               <Grid container spacing={8} className="allPadding"> 
               <Grid item xs={12} md={12}>
               <Typography variant="body2" align="center" > 
                List of Messages on your Ads
               </Typography>
            
               </Grid>
               {loading? 
               <img  src={require('../resource/images/adsloading23.gif')} alt=""/>
               :
               <div>
               {messages.length>0 ? messages.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((message,i)=>{return (
                    <Grid item xs={12} md={12} key={i} className="paddingTop">
                    <Divider />
                    <Typography variant="body2" className="paddingTop"> 
                     {message.title}
                    </Typography>
                    <Typography variant="caption" > 
                      {moment(message.timestamp).format('ll')}
                    </Typography>
                    <Typography variant="body1" > 
                    {message.message}
                    </Typography>
                    <Grid container spacing={8}> 
                      <Grid item xs={6} md={3}>
                       <Typography variant="caption" > 
                       <i className="material-icons iconFix">
                         account_circle
                         </i> 
                         {message.username}
                       </Typography>
                      </Grid>
                      <Grid item xs={6} md={9}>
                      <Typography variant="caption" > 
                       <i className="material-icons iconFix">
                         phone
                         </i>
                         {message.userphone}
                       </Typography>
                      </Grid> 
                    </Grid>
                  </Grid>
               );}):"no message yet!"}
               </div>
               }
                <Grid item xs={12} md={12}>
                <Divider />
                <Hidden only={['md', 'xl','lg']}>
                <Table >
                    <TableFooter>
                      <TableRow>
                        <TablePagination
                          colSpan={2}
                          count={messages.length}
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
                 <Table >
                    <TableFooter>
                      <TableRow>
                        <TablePagination
                          colSpan={2}
                          count={messages.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          labelRowsPerPage="Messages per page"
                          rowsPerPageOptions={[5, 10,25,100,500]}
                          onChangePage={this.handleChangePage}
                          onChangeRowsPerPage={this.handleChangeRowsPerPage}
                          ActionsComponent={TablePaginationActionsWrapped}/>
                      </TableRow>
                    </TableFooter>
                 </Table>
                 </Hidden>
                </Grid>
               </Grid> 
            </div>
        )
    }
}


const mapStateToProps = state => ({
    user : state.user.user._id,
    messages:state.messages.messages
  })
  
  export default connect(mapStateToProps,{startGetMessage})(Messages);
