import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Stock.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();

  const numberWithCommas=(x)=> {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  return (
    <div className={classes.root}>
        <Paper>
      <Grid container spacing={1}>
    
        <Grid item xs={12} sm={4} lg={2}>
        <span style={{fontSize:35, marginTop:'25px', marginLeft:'50px'}}><b>{props.selected} </b> </span>
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <span>24h Change</span><br/>
          <span style={props.change>0? {color: 'green'}:{color: 'red'}}>{props.change>0? '+'+props.change+'%' : props.change+'%'}</span>
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
        <span>24h High</span><br/>
          <span>${props.high}</span>
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
        <span>24h Low</span><br/>
          <span>${props.low}</span>
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <span>24h Volume</span><br/>
          <span>{props.volume}</span>
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <span >Available USD</span><br/>
          <span style={{fontSize:'25px', color:'teal'}}>${numberWithCommas(props.usd)}</span>
        </Grid>
      </Grid>
      </Paper>
    </div>
  );
}