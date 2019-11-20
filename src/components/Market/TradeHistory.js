import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import ExampleTradeHistory from '../../ExampleAPI/ExampleTradeHistory';

const columns = [
  { id: 'amount', label: 'Amount', minWidth: 100,align:'center' },
  { id: 'date', label: 'Date', minWidth: 100,align:'center' },
];

function createData(amount,date) {

  return { amount,date };
}
const rows = [];

for(const trade of ExampleTradeHistory){
  rows.push(createData(trade.amount,trade.date));
}




const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    height: 620,
    overflow: 'auto',
  },
  title:{
    flex: '1 1 100%',
    marginLeft:'50%',

 
  }
});

export default function StickyHeadTable(props) {
  const classes = useStyles();
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(10);



  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper} >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
          <Typography className={classes.title} variant="h6" id="tableTitle">
          History 
        </Typography>

            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      
    </Paper>
  );
}