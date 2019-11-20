import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import '../Common/scrollbar.css';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


export default class Table extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: props.ExampleList,
      search:'',
      selected:null
    };
  }
 
  onChange = (e)=>{

 
    this.setState({
       
      data:this.state.data.filter(d => {
        return d.Symbol.toLowerCase().includes(e.target.name);
      }),
      search:e.target.value
    
    })


  }

  
  InputWithIcon(props) {
  const classes = props;
    
  return (
  
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Search stocks</InputLabel>
        <Input
          id="input-with-icon-adornment"
          onChange={this.onChange}
          value={this.state.search}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
            
          }
        />
      </FormControl>
      
     
    </div>
  );
}

  render() {

    
    this.filterValuePart =(arr, part) => {
      part = part.toLowerCase();
  
      return arr.filter(function(obj) {
          return Object.keys(obj)
                       .some(function(k) { 
                                 return obj[k].toLowerCase().indexOf(part) !== -1; 
                             });
      });}
      
    //const { data } = this.state;
    const data = this.state.data.filter(d=>d.Symbol.toLowerCase().includes(this.state.search.toLowerCase()));
      
    return (
      <div >
        
        <ReactTable
          getTrProps={(state, rowInfo) => {
            if (rowInfo && rowInfo.row) {
              return {
                onClick: (e) => {
                  this.setState({
                    selected: rowInfo.row.Symbol
                  
                  })
                  this.props.selectStock(rowInfo.row.Symbol);
                  
                },
                style: {
                  background: rowInfo.row.Symbol === this.state.selected ? '#00afec' : 'white',
                  color: rowInfo.row.Symbol === this.state.selected ? 'white' : 'black'
                }
              }
            }else{
              return {}
            }
          }}
          data={data}
          columns={[
            {
              Header:this.InputWithIcon(useStyles),
              columns: [
                {
                  Header: "Symbol",
                  accessor: "Symbol"
                },
                {
                  Header: "Change",
                  id: "Change",
                  accessor: d => d.Change + '%',
                  getProps: (state, rowInfo, column) => {
                    return {
                        style: {//removing % so it can be read as a number 
                            color: rowInfo && rowInfo.row.Change.slice(0,-1) >=0? 'green' : 'red',
                        },
                    };
                },
                }
                
              ],
           

            }
          ]}
          defaultPageSize={20}
          style={{
            height: "620px" // This will force the table body to overflow and scroll, since there is not enough room
          }}
          className="-striped -highlight"
         
        />
        <br />
  
      </div>
    );
  }
}

